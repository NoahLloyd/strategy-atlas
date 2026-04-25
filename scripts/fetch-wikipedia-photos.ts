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
  const res = await fetch(apiUrl, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`summary ${res.status}`);
  const data = (await res.json()) as {
    thumbnail?: { source: string };
    originalimage?: { source: string };
  };
  return {
    thumbnail: data.thumbnail?.source,
    original: data.originalimage?.source,
  };
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

  const targets = people
    .filter((p) => p.wikipedia)
    .map((p) => ({ id: p.id, name: p.name, wikipedia: p.wikipedia! }));

  console.log(`[wiki-photos] candidates with wikipedia URL: ${targets.length}`);

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

  // Phase 1: summaries in parallel batches.
  const summaries = new Map<string, string>(); // id -> imageUrl
  const summaryErrors: { id: string; reason: string }[] = [];
  const BATCH = 4;
  for (let i = 0; i < needsFetch.length; i += BATCH) {
    const slice = needsFetch.slice(i, i + BATCH);
    await Promise.all(
      slice.map(async (t) => {
        const title = wikipediaTitle(t.wikipedia);
        if (!title) {
          summaryErrors.push({ id: t.id, reason: "could-not-parse-wikipedia-url" });
          return;
        }
        try {
          const s = await fetchSummary(title);
          const url = s.thumbnail ?? s.original;
          if (!url) {
            summaryErrors.push({ id: t.id, reason: "no-image-on-wikipedia-page" });
            return;
          }
          summaries.set(t.id, url);
        } catch (e) {
          summaryErrors.push({ id: t.id, reason: (e as Error).message });
        }
      }),
    );
    if ((i + BATCH) % 40 === 0) await sleep(200);
  }
  console.log(
    `[wiki-photos] summaries: ${summaries.size} ok, ${summaryErrors.length} fail`,
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
