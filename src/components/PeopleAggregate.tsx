import type { Person } from "@/lib/people-types";
import { expertiseTiers, recognitionTiers, vintageTiers } from "@/data/profile-tiers";

type Props = {
  filtered: Person[];
  corpus: Person[];
  // When the user filters by a strategy, we can render stance breakdown.
  strategyId?: string | null;
};

function pdoomMean(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function pdoomMidpoints(people: Person[]): number[] {
  const out: number[] = [];
  for (const p of people) {
    const v = p.pDoom?.[0]?.value;
    if (v === undefined) continue;
    if (Array.isArray(v)) out.push((v[0] + v[1]) / 2);
    else out.push(v);
  }
  return out;
}

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = values.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function fmtPct(n: number | null, digits = 0): string {
  if (n === null) return "·";
  return `${(n * 100).toFixed(digits)}%`;
}

export function PeopleAggregate({ filtered, corpus, strategyId }: Props) {
  const profiled = filtered.filter((p) => p.profile);
  const corpusProfiled = corpus.filter((p) => p.profile);
  const sameSet = filtered.length === corpus.length;

  // Stance breakdown is meaningful only when a strategy filter is active.
  let stanceCounts: Record<string, number> | null = null;
  if (strategyId) {
    stanceCounts = {};
    for (const p of filtered) {
      const pos = p.positions.find((x) => x.strategyId === strategyId);
      if (!pos) continue;
      stanceCounts[pos.stance] = (stanceCounts[pos.stance] ?? 0) + 1;
    }
  }

  // pDoom statistics on filtered vs corpus.
  const pVals = pdoomMidpoints(filtered);
  const pCorpus = pdoomMidpoints(corpus);
  const pMean = pdoomMean(pVals);
  const pMed = median(pVals);
  const pMeanCorpus = pdoomMean(pCorpus);

  // Tier distribution.
  const tierShare = (
    list: Person[],
    field: "expertise" | "recognition" | "vintage",
  ): Record<string, number> => {
    const out: Record<string, number> = {};
    // Denominator is profiled people who have THAT field set.
    // Vintage coverage is partial; using the full profiled count would
    // make every vintage share read as too small.
    const denom = list.filter((p) => p.profile && p.profile[field]).length;
    for (const p of list) {
      const v = p.profile?.[field];
      if (!v) continue;
      out[v] = (out[v] ?? 0) + 1;
    }
    if (denom === 0) return out;
    for (const k of Object.keys(out)) out[k] = out[k] / denom;
    return out;
  };

  const expShare = tierShare(filtered, "expertise");
  const expCorpusShare = tierShare(corpus, "expertise");
  const recShare = tierShare(filtered, "recognition");
  const recCorpusShare = tierShare(corpus, "recognition");
  const vintShare = tierShare(filtered, "vintage");
  const vintCorpusShare = tierShare(corpus, "vintage");
  const vintageProfiled = filtered.filter(
    (p) => p.profile && p.profile.vintage,
  ).length;
  const vintageProfiledCorpus = corpus.filter(
    (p) => p.profile && p.profile.vintage,
  ).length;

  const totalQuotes = filtered.reduce(
    (acc, p) =>
      acc + p.positions.reduce((q, pos) => q + pos.quotes.length, 0),
    0,
  );

  if (sameSet && !strategyId) {
    // Initial state: nothing filtered, the contrast view is meaningless.
    return null;
  }

  return (
    <div
      className="border-2 border-[var(--color-ink)] p-4 mb-6"
      style={{ background: "var(--color-parchment-soft)" }}
    >
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
        <div>
          <p className="num-label">aggregated view of this filter</p>
          <p
            className="text-xs italic mt-1"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {filtered.length} of {corpus.length} people · {profiled.length}{" "}
            profiled · {totalQuotes} quotes
          </p>
        </div>
        {strategyId && stanceCounts && (
          <div className="flex flex-wrap gap-2 text-xs">
            {Object.entries(stanceCounts)
              .sort((a, b) => b[1] - a[1])
              .map(([s, n]) => (
                <span
                  key={s}
                  className="num-label"
                  style={{
                    background: "var(--color-parchment)",
                    border: "1px solid var(--color-rule)",
                    padding: "2px 6px",
                  }}
                >
                  {s} {n}
                </span>
              ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <TierBars
          title="expertise mix"
          tiers={expertiseTiers as { id: string; short: string }[]}
          share={expShare}
          corpusShare={corpusProfiled.length > 0 ? expCorpusShare : undefined}
        />
        <TierBars
          title="recognition mix"
          tiers={recognitionTiers as { id: string; short: string }[]}
          share={recShare}
          corpusShare={corpusProfiled.length > 0 ? recCorpusShare : undefined}
        />
        <PDoomBlock
          values={pVals}
          mean={pMean}
          median={pMed}
          meanCorpus={pMeanCorpus}
        />
      </div>

      {vintageProfiled > 0 && (
        <div className="mt-5">
          <TierBars
            title={`vintage mix · n=${vintageProfiled} of ${vintageProfiledCorpus} classified`}
            tiers={vintageTiers as { id: string; short: string }[]}
            share={vintShare}
            corpusShare={
              vintageProfiledCorpus > 0 ? vintCorpusShare : undefined
            }
          />
        </div>
      )}

      {/* Contextual lift: which tiers are over/under represented vs corpus */}
      {profiled.length >= 4 && corpusProfiled.length >= 12 && (
        <div className="mt-5 grid md:grid-cols-2 gap-5 text-xs">
          <ContrastList
            title="over-represented vs corpus"
            entries={contrastEntries(expShare, expCorpusShare, expertiseTiers)
              .concat(
                contrastEntries(recShare, recCorpusShare, recognitionTiers),
              )
              .filter((e) => e.lift > 0.07)
              .sort((a, b) => b.lift - a.lift)
              .slice(0, 5)}
            arrow="↑"
          />
          <ContrastList
            title="under-represented vs corpus"
            entries={contrastEntries(expShare, expCorpusShare, expertiseTiers)
              .concat(
                contrastEntries(recShare, recCorpusShare, recognitionTiers),
              )
              .filter((e) => e.lift < -0.07)
              .sort((a, b) => a.lift - b.lift)
              .slice(0, 5)}
            arrow="↓"
          />
        </div>
      )}

      <p
        className="text-[10px] italic mt-4"
        style={{ color: "var(--color-ink-soft)" }}
      >
        Bars show the share within profiled people in this filter. The faint
        bar behind is the same tier&apos;s share in the full corpus, so a tier
        whose dark bar sticks out beyond the faint one is over-represented in
        this slice. p(doom) statistics are first claim per person.
      </p>
    </div>
  );
}

function TierBars({
  title,
  tiers,
  share,
  corpusShare,
}: {
  title: string;
  tiers: { id: string; short: string }[];
  share: Record<string, number>;
  corpusShare?: Record<string, number>;
}) {
  const max = Math.max(
    0.05,
    ...tiers.map((t) => share[t.id] ?? 0),
    ...tiers.map((t) => corpusShare?.[t.id] ?? 0),
  );
  return (
    <div>
      <p className="num-label mb-2">{title}</p>
      <div className="space-y-1.5">
        {tiers.map((t) => {
          const s = share[t.id] ?? 0;
          const cs = corpusShare?.[t.id] ?? 0;
          return (
            <div key={t.id} className="flex items-center gap-2 text-xs">
              <span
                style={{ width: 110, color: "var(--color-ink-soft)" }}
                title={t.short}
              >
                {t.short}
              </span>
              <div
                className="flex-1 relative h-3"
                style={{ background: "var(--color-rule)" }}
              >
                {corpusShare && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: `${(cs / max) * 100}%`,
                      background:
                        "color-mix(in oklab, var(--color-ink-soft) 25%, transparent)",
                    }}
                  />
                )}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: `${(s / max) * 100}%`,
                    background: "var(--color-accent)",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <span
                className="num-label"
                style={{ width: 38, textAlign: "right" }}
              >
                {Math.round(s * 100)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PDoomBlock({
  values,
  mean,
  median,
  meanCorpus,
}: {
  values: number[];
  mean: number | null;
  median: number | null;
  meanCorpus: number | null;
}) {
  // Bin the values into 5 buckets: <10, 10-25, 25-50, 50-75, 75+ (%)
  const bins = [
    { label: "<10%", lo: 0, hi: 0.1, count: 0 },
    { label: "10–25%", lo: 0.1, hi: 0.25, count: 0 },
    { label: "25–50%", lo: 0.25, hi: 0.5, count: 0 },
    { label: "50–75%", lo: 0.5, hi: 0.75, count: 0 },
    { label: "≥75%", lo: 0.75, hi: 1.001, count: 0 },
  ];
  for (const v of values) {
    for (const b of bins) {
      if (v >= b.lo && v < b.hi) {
        b.count++;
        break;
      }
    }
  }
  const max = Math.max(1, ...bins.map((b) => b.count));
  const lift =
    mean !== null && meanCorpus !== null && meanCorpus > 0
      ? mean - meanCorpus
      : null;

  return (
    <div>
      <p className="num-label mb-2">p(doom) on record · n={values.length}</p>
      {values.length === 0 && (
        <p
          className="text-xs italic mt-2"
          style={{ color: "var(--color-ink-soft)" }}
        >
          No one in this slice has stated a p(doom).
        </p>
      )}
      {values.length > 0 && (
        <>
          <div className="space-y-1 mb-3">
            {bins.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-xs">
                <span
                  style={{ width: 56, color: "var(--color-ink-soft)" }}
                  className="num-label"
                >
                  {b.label}
                </span>
                <div
                  className="flex-1 h-3"
                  style={{ background: "var(--color-rule)" }}
                >
                  <div
                    style={{
                      width: `${(b.count / max) * 100}%`,
                      height: "100%",
                      background: "var(--color-accent)",
                    }}
                  />
                </div>
                <span
                  className="num-label"
                  style={{ width: 24, textAlign: "right" }}
                >
                  {b.count}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <div>
              <span className="num-label">mean</span>{" "}
              <span style={{ fontFamily: "var(--font-display)" }}>
                {fmtPct(mean)}
              </span>
            </div>
            <div>
              <span className="num-label">median</span>{" "}
              <span style={{ fontFamily: "var(--font-display)" }}>
                {fmtPct(median)}
              </span>
            </div>
            {lift !== null && Math.abs(lift) > 0.02 && (
              <div>
                <span className="num-label">vs corpus</span>{" "}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    color:
                      lift > 0 ? "var(--color-accent-strong, var(--color-accent))" : "var(--color-ink-soft)",
                  }}
                >
                  {lift > 0 ? "+" : ""}
                  {fmtPct(lift, 1)}
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function ContrastList({
  title,
  entries,
  arrow,
}: {
  title: string;
  entries: { id: string; label: string; lift: number }[];
  arrow: string;
}) {
  return (
    <div>
      <p className="num-label mb-2">{title}</p>
      {entries.length === 0 ? (
        <p className="text-xs italic" style={{ color: "var(--color-ink-soft)" }}>
          No tier swings far from the corpus baseline.
        </p>
      ) : (
        <ul className="space-y-1">
          {entries.map((e) => (
            <li key={e.id} className="flex justify-between gap-2">
              <span style={{ color: "var(--color-ink)" }}>
                {arrow} {e.label}
              </span>
              <span
                className="num-label"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {e.lift > 0 ? "+" : ""}
                {Math.round(e.lift * 100)}pp
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function contrastEntries(
  share: Record<string, number>,
  corpusShare: Record<string, number>,
  tiers: readonly { id: string; label: string }[] | { id: string; label: string }[],
) {
  return tiers.map((t) => ({
    id: t.id,
    label: t.label,
    lift: (share[t.id] ?? 0) - (corpusShare[t.id] ?? 0),
  }));
}
