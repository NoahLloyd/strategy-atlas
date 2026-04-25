// Mark positions as tentative when the summary itself admits weakness.
// Conservative: only catches summaries with explicit hedge phrases.
//
// Earlier I tried a keyword-absence heuristic (a position is tentative
// when neither summary nor quotes contain strategy-framing keywords).
// It produced too many false positives — e.g. Andreessen's
// Techno-Optimist Manifesto quote got marked because it didn't include
// 'regulation' or 'pause' literally. Reverted. Manual marking by
// curators is the right model; this script just catches the
// no-judgement-required cases.

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.resolve(import.meta.dir, "..", "..", "src", "data");

// Phrases inside a summary that indicate the assignment is tenuous.
// Conservative — only catches summaries that themselves admit weakness.
const WEAK_SUMMARY_PHRASES = [
  "less explicit on safety",
  "less explicit on strategy",
  "less direct on",
  "background reputation",
  "implicit on",
  "passing remark",
  "inferred from a passing",
  "consistently bullish on capabilities",
  "without explicit safety",
  "without an explicit safety",
  "framing not stated explicitly",
  "implied stance",
  "inferred stance",
  "no direct safety position",
];

function shouldMarkBySummary(summary: string): boolean {
  const lower = summary.toLowerCase();
  return WEAK_SUMMARY_PHRASES.some((p) => lower.includes(p));
}

// (Earlier I tried marking by quote fidelity — single-quote
// paraphrase-loose or summary fidelity entries — but that
// over-includes well-known positions whose summary phrasing is loose
// for the curator's convenience, not because the assignment is weak.
// Gary Marcus on AI skepticism is a paraphrase-loose, but obviously
// not tentative. Reverted; only the explicit-summary path remains.)

async function processFile(file: string): Promise<number> {
  const text = await readFile(file, "utf8");
  const blockRe = /\{[\s\S]*?strategyId:\s*"[^"]+",[\s\S]*?stance:\s*"[^"]+",[\s\S]*?summary:\s*"([^"]+)",[\s\S]*?\},?/g;
  let modified = 0;
  const out = text.replace(blockRe, (match, summary) => {
    if (match.includes("tentative:")) return match;
    if (!shouldMarkBySummary(summary as string)) return match;
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
