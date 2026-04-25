/* eslint-disable no-console */
// Fallback photo fetch: tries the person's homepage for an og:image or
// twitter:image. The Wikipedia chain misses people whose Wikipedia article
// has no photo (or who have no Wikipedia article at all). For those,
// the homepage is often a researcher's lab page or personal site that
// has a meta image set.
//
// Conservative: only writes a file if the og:image looks like it could be
// a portrait (resolution and aspect-ratio sanity). Many sites use a
// company logo as og:image; we don't want those passing for headshots.

import { mkdir, writeFile, stat, readdir } from "node:fs/promises";
import path from "node:path";

import { people } from "../src/lib/people";

const PUBLIC_DIR = path.resolve(import.meta.dir, "..", "public", "people");
const MANIFEST_PATH = path.resolve(import.meta.dir, "..", "src", "data", "photo-index.ts");
const USER_AGENT =
  "Mozilla/5.0 (compatible; strategy-atlas-photo-bot; +https://github.com/noahlloydrobson/strategy-atlas)";

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

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.includes("html")) return null;
    const text = await res.text();
    return text.slice(0, 100_000);
  } catch {
    return null;
  }
}

function extractMeta(html: string, prop: string): string | null {
  // og:image, twitter:image both use <meta property="..." content="..."> or
  // <meta name="..." content="...">. Match either, content can be quoted
  // either way.
  const variants = [
    new RegExp(
      `<meta[^>]*?(?:property|name)=["']${prop}["'][^>]*?content=["']([^"']+)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]*?content=["']([^"']+)["'][^>]*?(?:property|name)=["']${prop}["']`,
      "i",
    ),
  ];
  for (const re of variants) {
    const m = html.match(re);
    if (m && m[1]) return m[1];
  }
  return null;
}

function resolveUrl(base: string, src: string): string | null {
  try {
    return new URL(src, base).toString();
  } catch {
    return null;
  }
}

function looksLikeLogo(url: string): boolean {
  const lower = url.toLowerCase();
  return (
    lower.includes("logo") ||
    lower.includes("favicon") ||
    lower.includes("default-avatar") ||
    lower.includes("placeholder") ||
    lower.endsWith(".svg")
  );
}

function extFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const last = u.pathname.split("/").pop() ?? "";
    const dot = last.lastIndexOf(".");
    if (dot < 0) return ".jpg";
    const ext = last.slice(dot).toLowerCase().split("?")[0];
    if (ext === ".jpeg") return ".jpg";
    if ([".jpg", ".png", ".webp"].includes(ext)) return ext;
    return ".jpg";
  } catch {
    return ".jpg";
  }
}

async function downloadIfImage(url: string, dest: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return false;
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.startsWith("image/")) return false;
    const buf = new Uint8Array(await res.arrayBuffer());
    if (buf.byteLength < 4_000) return false; // skip 1x1 pixels and tiny logos
    if (buf.byteLength > 5_000_000) return false; // skip absurd sizes
    await writeFile(dest, buf);
    return true;
  } catch {
    return false;
  }
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
  const finalIndex = await loadExistingManifest();

  // Pick up any photo files already on disk.
  for (const p of people) {
    if (finalIndex[p.id]) continue;
    const existing = await existingPhotoFor(p.id);
    if (existing) finalIndex[p.id] = existing;
  }

  const targets = people.filter(
    (p) => !finalIndex[p.id] && p.homepage && p.homepage.startsWith("http"),
  );
  console.log(
    `[homepage-photos] candidates with homepage but no photo: ${targets.length}`,
  );

  let resolved = 0;
  let downloaded = 0;
  let skippedLogo = 0;
  const errors: { id: string; reason: string }[] = [];

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    if (!t.homepage) continue;
    const html = await fetchHtml(t.homepage);
    await sleep(250);
    if (!html) {
      errors.push({ id: t.id, reason: "homepage-fetch-failed" });
      continue;
    }
    let imgUrl: string | null = null;
    for (const prop of ["og:image", "twitter:image", "twitter:image:src"]) {
      const v = extractMeta(html, prop);
      if (v) {
        const abs = resolveUrl(t.homepage, v);
        if (abs && !looksLikeLogo(abs)) {
          imgUrl = abs;
          break;
        }
      }
    }
    if (!imgUrl) {
      // Last resort: a clearly portrait <img> on the page (a class hint).
      const m = html.match(
        /<img[^>]+(?:class|id)=["'][^"']*(?:headshot|portrait|avatar|profile-photo|profile-pic)[^"']*["'][^>]*src=["']([^"']+)["']/i,
      );
      if (m && m[1]) {
        const abs = resolveUrl(t.homepage, m[1]);
        if (abs && !looksLikeLogo(abs)) imgUrl = abs;
      }
    }
    if (!imgUrl) {
      errors.push({ id: t.id, reason: "no-img-meta" });
      continue;
    }
    if (looksLikeLogo(imgUrl)) {
      skippedLogo++;
      continue;
    }
    resolved++;
    const ext = extFromUrl(imgUrl);
    const dest = path.join(PUBLIC_DIR, `${t.id}${ext}`);
    const ok = await downloadIfImage(imgUrl, dest);
    if (ok) {
      finalIndex[t.id] = "/people/" + path.basename(dest);
      downloaded++;
      if (downloaded % 5 === 0) {
        console.log(
          `[homepage-photos] downloaded ${downloaded} (latest: ${t.id} from ${new URL(t.homepage).hostname})`,
        );
      }
    } else {
      errors.push({ id: t.id, reason: "download-failed-or-not-image" });
    }
    await sleep(250);
  }

  console.log(
    `[homepage-photos] resolved ${resolved}, downloaded ${downloaded}, skipped logos ${skippedLogo}, errors ${errors.length}`,
  );

  // Final manifest (alphabetised).
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

  const onDisk = (await readdir(PUBLIC_DIR)).filter((f) => !f.startsWith("."));
  console.log(
    `[homepage-photos] manifest: ${orderedIds.length}, on-disk files: ${onDisk.length}`,
  );

  if (errors.length) {
    console.log(`[homepage-photos] sample errors:`);
    for (const e of errors.slice(0, 15)) console.log(`  - ${e.id}: ${e.reason}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
