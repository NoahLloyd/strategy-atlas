// Mark positions as tentative when the summary explicitly admits the
// assignment is loose. Conservative seed pass: only catches positions
// whose own summary signals weakness. Run repeatedly; idempotent.

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.resolve(import.meta.dir, "..", "..", "src", "data");

// Phrases inside a summary that indicate the assignment is tenuous.
const WEAK_SUMMARY_PHRASES = [
  "less explicit on safety",
  "less direct on",
  "background reputation",
  "implicit on",
  "passing remark",
  "inferred from a passing",
];

function shouldMark(summary: string): boolean {
  const lower = summary.toLowerCase();
  return WEAK_SUMMARY_PHRASES.some((p) => lower.includes(p));
}

async function processFile(file: string): Promise<number> {
  const text = await readFile(file, "utf8");
  // Find each position { ... } block. We only handle inline positions:
  // strategyId: "...", stance: "...", summary: "...", quotes: [...]
  // We add `tentative: true,` after `stance:` line if the summary matches.
  // Avoid double-marking: skip if the block already contains `tentative:`.
  const blockRe = /\{[\s\S]*?strategyId:\s*"[^"]+",[\s\S]*?stance:\s*"[^"]+",[\s\S]*?summary:\s*"([^"]+)",[\s\S]*?\},?/g;
  let modified = 0;
  const out = text.replace(blockRe, (match, summary) => {
    if (match.includes("tentative:")) return match;
    if (!shouldMark(summary as string)) return match;
    modified++;
    return match.replace(
      /(stance:\s*"[^"]+",\n)/,
      `$1        tentative: true,\n`,
    );
  });
  if (modified > 0) {
    await writeFile(file, out, "utf8");
  }
  return modified;
}

async function main() {
  const files = (await readdir(DATA_DIR))
    .filter((f) => /^people(?:-[a-z]+)?\.ts$/.test(f))
    .map((f) => path.join(DATA_DIR, f));
  let total = 0;
  for (const f of files) {
    const n = await processFile(f);
    if (n > 0) console.log(`${path.basename(f)}: marked ${n}`);
    total += n;
  }
  console.log(`Total positions marked tentative: ${total}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
