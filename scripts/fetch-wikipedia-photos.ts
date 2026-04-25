/* eslint-disable no-console */
// Fetch person photos from Wikipedia for everyone whose entry has a `wikipedia` URL.
// Saves images to /public/people/<id>.<ext> and writes a photo manifest to src/data/photo-index.ts.
// Run with: bun run scripts/fetch-wikipedia-photos.ts
//
// Phase 1: parallel summary lookup (Wikipedia REST tolerates this).
// Phase 2: sequential image download with backoff (upload.wikimedia.org is strict).
// The script is idempotent — already-downloaded files are kept unless --refresh is passed.

import { mkdir, writeFile, stat, readdir } from "node:fs/promises";
import path from "node:path";

import { people } from "../src/lib/people";

const REFRESH = process.argv.includes("--refresh");
const PUBLIC_DIR = path.resolve(import.meta.dir, "..", "public", "people");
const MANIFEST_PATH = path.resolve(import.meta.dir, "..", "src", "data", "photo-index.ts");
const USER_AGENT =
  "strategy-atlas/0.1 (https://github.com/noahlloydrobson/strategy-atlas; AI safety atlas)";

function wikipediaTitle(url: string): string | null {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts[0] === "wiki" && parts[1]) {
      return decodeURIComponent(parts.slice(1).join("/"));
    }
    return null;
  } catch {
    return null;
  }
}

async function fileExists(p: string): Promise<boolean> {
  try {
    const s = await stat(p);
    return s.isFile() && s.size > 0;
  } catch {
    return false;
  }
}

async function existingPhotoFor(id: string): Promise<string | null> {
  for (const ext of [".jpg", ".png", ".webp", ".svg", ".gif"]) {
    const p = path.join(PUBLIC_DIR, `${id}${ext}`);
    if (await fileExists(p)) return "/people/" + path.basename(p);
  }
  return null;
}

async function fetchSummary(
  title: string,
): Promise<{ thumbnail?: string; original?: string }> {
  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetchJsonWithBackoff(apiUrl, "summary");
  const data = (await res.json()) as {
    thumbnail?: { source: string };
    originalimage?: { source: string };
  };
  return {
    thumbnail: data.thumbnail?.source,
    original: data.originalimage?.source,
  };
}

// MediaWiki Action API pageimages — succeeds for some pages where the REST
// summary returns no thumbnail (e.g. articles whose lead image is set via
// page_image_free but not surfaced through the summary endpoint).
async function fetchPageImage(title: string): Promise<string | null> {
  const url =
    `https://en.wikipedia.org/w/api.php?action=query&format=json` +
    `&titles=${encodeURIComponent(title)}` +
    `&prop=pageimages&pithumbsize=400&piprop=thumbnail|original` +
    `&redirects=1&origin=*`;
  const res = await fetchJsonWithBackoff(url, "pageimages");
  const data = (await res.json()) as {
    query?: {
      pages?: Record<
        string,
        {
          thumbnail?: { source: string };
          original?: { source: string };
        }
      >;
    };
  };
  const pages = data.query?.pages ?? {};
  for (const id of Object.keys(pages)) {
    const p = pages[id];
    const src = p.thumbnail?.source ?? p.original?.source;
    if (src) return src;
  }
  return null;
}

// Wikidata P18 (image) lookup. Articles often link to a Wikidata item where
// an image is set even when the article body has none. Resolves the title to
// a Q-id, reads claims for P18, then constructs the Commons file URL.
async function fetchWikidataImage(title: string): Promise<string | null> {
  // Step 1: title -> Wikidata Q-id via pageprops.
  const propsUrl =
    `https://en.wikipedia.org/w/api.php?action=query&format=json` +
    `&titles=${encodeURIComponent(title)}` +
    `&prop=pageprops&ppprop=wikibase_item&redirects=1&origin=*`;
  const propsRes = await fetchJsonWithBackoff(propsUrl, "wikidata-id");
  const propsData = (await propsRes.json()) as {
    query?: {
      pages?: Record<string, { pageprops?: { wikibase_item?: string } }>;
    };
  };
  let qid: string | null = null;
  for (const k of Object.keys(propsData.query?.pages ?? {})) {
    qid = propsData.query!.pages![k].pageprops?.wikibase_item ?? null;
    if (qid) break;
  }
  if (!qid) return null;

  // Step 2: Q-id -> P18 (image filename).
  const entUrl = `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`;
  const entRes = await fetchJsonWithBackoff(entUrl, "wikidata-entity");
  const entData = (await entRes.json()) as {
    entities?: Record<
      string,
      {
        claims?: Record<
          string,
          {
            mainsnak?: { datavalue?: { value?: string } };
          }[]
        >;
      }
    >;
  };
  const claim = entData.entities?.[qid]?.claims?.["P18"]?.[0];
  const filename = claim?.mainsnak?.datavalue?.value;
  if (!filename) return null;

  // Step 3: filename -> direct Commons URL via Special:FilePath. This 302s
  // to the actual upload.wikimedia.org path, which Bun.fetch will follow.
  const safeName = filename.replace(/ /g, "_");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(safeName)}?width=400`;
}

// Wikimedia Commons full-text search by person name. Catches photos that have
// been uploaded to Commons (often from conferences) but are not linked to any
// Wikipedia article or Wikidata item — common for newer AI safety researchers.
//
// We require the file title to literally contain the person's name as a
// substring. Otherwise Commons' relevance-ranked search returns photos of
// unrelated people who merely share a first or last name.
async function fetchCommonsByName(name: string): Promise<string | null> {
  const query = `"${name}"`;
  const url =
    `https://commons.wikimedia.org/w/api.php?action=query&format=json` +
    `&list=search&srnamespace=6&srlimit=10` +
    `&srsearch=${encodeURIComponent(query)}&origin=*`;
  const res = await fetchJsonWithBackoff(url, "commons-search");
  const data = (await res.json()) as {
    query?: { search?: { title: string }[] };
  };
  const hits = data.query?.search ?? [];
  const lowerName = name.toLowerCase();
  const wantedExt = /\.(jpg|jpeg|png|webp)$/i;
  const candidate = hits
    .map((h) => h.title.replace(/^File:/, ""))
    .filter((t) => wantedExt.test(t))
    .find((t) => t.toLowerCase().includes(lowerName));
  if (!candidate) return null;
  const safeName = candidate.replace(/ /g, "_");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(safeName)}?width=400`;
}

function extFromUrl(url: string): string {
  const u = new URL(url);
  const last = u.pathname.split("/").pop() ?? "";
  const dot = last.lastIndexOf(".");
  if (dot < 0) return ".jpg";
  const ext = last.slice(dot).toLowerCase();
  if (ext === ".jpeg") return ".jpg";
  if ([".jpg", ".png", ".webp", ".svg", ".gif"].includes(ext)) return ext;
  return ".jpg";
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchJsonWithBackoff(
  url: string,
  label: string,
): Promise<Response> {
  // Wikipedia/Wikidata return 429 on bursts; treat 5xx the same way.
  let delay = 800;
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
    });
    if (res.ok) return res;
    if (res.status === 404) throw new Error(`${label} 404`);
    if (res.status !== 429 && res.status < 500) {
      throw new Error(`${label} ${res.status}`);
    }
    await sleep(delay);
    delay = Math.min(delay * 2, 10_000);
  }
  throw new Error(`${label} rate-limited after retries`);
}

async function downloadBinaryWithBackoff(
  url: string,
  dest: string,
): Promise<void> {
  let delay = 600;
  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (res.ok) {
      const buf = new Uint8Array(await res.arrayBuffer());
      await writeFile(dest, buf);
      return;
    }
    if (res.status !== 429 && res.status !== 503) {
      throw new Error(`status ${res.status}`);
    }
    await sleep(delay);
    delay = Math.min(delay * 2, 8000);
  }
  throw new Error("rate-limited after retries");
}

async function loadExistingManifest(): Promise<Record<string, string>> {
  try {
    const text = await Bun.file(MANIFEST_PATH).text();
    const matches = text.matchAll(/"([^"]+)":\s*"([^"]+)"/g);
    const out: Record<string, string> = {};
    for (const m of matches) out[m[1]] = m[2];
    return out;
  } catch {
    return {};
  }
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  // Everyone gets considered. People with a Wikipedia URL get the full chain
  // (summary → pageimages → Wikidata → Commons-by-name); people without get
  // only Commons-by-name. Newly profiled researchers without articles often
  // have a conference photo on Commons that the chain finds.
  const targets = people.map((p) => ({
    id: p.id,
    name: p.name,
    wikipedia: p.wikipedia,
  }));

  console.log(`[wiki-photos] total candidates: ${targets.length}`);

  const finalIndex: Record<string, string> = {};
  const previous = await loadExistingManifest();
  Object.assign(finalIndex, previous);

  // Pick up any photo files already on disk.
  for (const t of targets) {
    if (finalIndex[t.id]) continue;
    const existing = await existingPhotoFor(t.id);
    if (existing) finalIndex[t.id] = existing;
  }

  const needsFetch = REFRESH ? targets : targets.filter((t) => !finalIndex[t.id]);
  console.log(`[wiki-photos] still need to fetch: ${needsFetch.length}`);

  // Phase 1: try summary, then pageimages, then Wikidata P18, then a
  // Commons name search. Each fallback catches a different failure mode.
  const summaries = new Map<string, string>(); // id -> imageUrl
  const summaryErrors: { id: string; reason: string }[] = [];
  const sourceMix = { summary: 0, pageimage: 0, wikidata: 0, commons: 0 };
  // Sequential lookups. Wikidata in particular 429s on bursts of even 4-wide
  // parallelism, and the previous failures all clustered there.
  for (let i = 0; i < needsFetch.length; i++) {
    const t = needsFetch[i];
    const tried: string[] = [];

    if (t.wikipedia) {
      const title = wikipediaTitle(t.wikipedia);
      if (!title) {
        tried.push("wikipedia-url:unparseable");
      } else {
        // Step A: REST summary thumbnail.
        try {
          const s = await fetchSummary(title);
          const url = s.thumbnail ?? s.original;
          if (url) {
            summaries.set(t.id, url);
            sourceMix.summary++;
            await sleep(120);
            continue;
          }
          tried.push("summary:none");
        } catch (e) {
          tried.push(`summary:${(e as Error).message}`);
        }

        // Step B: MediaWiki pageimages.
        try {
          const url = await fetchPageImage(title);
          if (url) {
            summaries.set(t.id, url);
            sourceMix.pageimage++;
            await sleep(120);
            continue;
          }
          tried.push("pageimages:none");
        } catch (e) {
          tried.push(`pageimages:${(e as Error).message}`);
        }

        // Step C: Wikidata P18.
        try {
          const url = await fetchWikidataImage(title);
          if (url) {
            summaries.set(t.id, url);
            sourceMix.wikidata++;
            await sleep(180);
            continue;
          }
          tried.push("wikidata:none");
        } catch (e) {
          tried.push(`wikidata:${(e as Error).message}`);
        }
      }
    }

    // Step D: Commons name search (works regardless of Wikipedia article).
    try {
      const url = await fetchCommonsByName(t.name);
      if (url) {
        summaries.set(t.id, url);
        sourceMix.commons++;
        if (summaries.size % 20 === 0) {
          console.log(
            `[wiki-photos] resolved ${summaries.size}/${needsFetch.length} (latest: ${t.id})`,
          );
        }
        await sleep(180);
        continue;
      }
      tried.push("commons:none");
    } catch (e) {
      tried.push(`commons:${(e as Error).message}`);
    }

    summaryErrors.push({ id: t.id, reason: tried.join("; ") || "no-image-anywhere" });
    await sleep(120);
  }
  console.log(
    `[wiki-photos] summaries: ${summaries.size} ok (summary ${sourceMix.summary}, pageimages ${sourceMix.pageimage}, wikidata ${sourceMix.wikidata}, commons ${sourceMix.commons}), ${summaryErrors.length} fail`,
  );

  // Phase 2: image downloads — strictly sequential with a small base delay.
  const downloadErrors: { id: string; reason: string }[] = [];
  let downloaded = 0;
  const ids = Array.from(summaries.keys());
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const url = summaries.get(id)!;
    const ext = extFromUrl(url);
    const dest = path.join(PUBLIC_DIR, `${id}${ext}`);
    try {
      await downloadBinaryWithBackoff(url, dest);
      finalIndex[id] = "/people/" + path.basename(dest);
      downloaded++;
      if (downloaded % 10 === 0) {
        console.log(
          `[wiki-photos] downloaded ${downloaded}/${ids.length} (latest: ${id})`,
        );
      }
    } catch (e) {
      downloadErrors.push({ id, reason: (e as Error).message });
    }
    await sleep(350); // be polite — Wikimedia gets cranky above ~3 rps
  }
  console.log(
    `[wiki-photos] downloads: ${downloaded} ok, ${downloadErrors.length} fail`,
  );

  // Final manifest.
  const orderedIds = Object.keys(finalIndex).sort();
  const manifest =
    "// Auto-generated by scripts/fetch-wikipedia-photos.ts. Do not edit by hand.\n" +
    "// Run `bun run scripts/fetch-wikipedia-photos.ts` to refresh.\n\n" +
    "export const photoIndex: Record<string, string> = {\n" +
    orderedIds
      .map((id) => `  ${JSON.stringify(id)}: ${JSON.stringify(finalIndex[id])},`)
      .join("\n") +
    "\n};\n";
  await writeFile(MANIFEST_PATH, manifest, "utf8");

  // On-disk audit.
  const onDisk = (await readdir(PUBLIC_DIR)).filter((f) => !f.startsWith("."));
  console.log(
    `[wiki-photos] manifest: ${orderedIds.length}, on-disk files: ${onDisk.length}`,
  );

  if (summaryErrors.length || downloadErrors.length) {
    const sample = [...summaryErrors, ...downloadErrors].slice(0, 30);
    console.log("[wiki-photos] sample failures:");
    for (const e of sample) console.log(`  - ${e.id}: ${e.reason}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
