import Link from "next/link";
import { strategyTags } from "@/lib/strategy-tags";
import { strategyTagUsage, people } from "@/lib/people";

export const metadata = {
  title: "Strategies · AGI Strategies",
  description:
    "Strategy tags applied to the corpus of people on record. Tags emerge from what people actually argue.",
};

const ENDORSING_STANCES = new Set([
  "endorses",
  "mixed",
  "conditional",
  "evolved-toward",
]);

function pdoomMid(v: number | [number, number] | undefined): number | null {
  if (v === undefined) return null;
  if (Array.isArray(v)) return (v[0] + v[1]) / 2;
  return v;
}

export default function StrategiesIndex() {
  const usage = new Map(strategyTagUsage().map((x) => [x.id, x.count]));

  // Per-tag stance + p(doom) breakdown, computed once.
  type TagStats = {
    endorsers: number;
    opposers: number;
    tentativeOnly: number;
    pdoomMean: number | null;
    pdoomCount: number;
  };
  const tagStats = new Map<string, TagStats>();
  for (const t of strategyTags) {
    let endorsers = 0;
    let opposers = 0;
    let tentativeOnly = 0;
    const pVals: number[] = [];
    for (const p of people) {
      const positions = p.positions.filter((pos) => pos.strategyId === t.id);
      if (positions.length === 0) continue;
      const isEndorse = positions.some((pos) =>
        ENDORSING_STANCES.has(pos.stance),
      );
      const isOppose = positions.some(
        (pos) => pos.stance === "opposes" || pos.stance === "evolved-away",
      );
      if (isEndorse) {
        endorsers++;
        if (positions.every((pos) => pos.tentative)) tentativeOnly++;
        const v = pdoomMid(p.pDoom?.[0]?.value);
        if (v !== null) pVals.push(v);
      }
      if (isOppose) opposers++;
    }
    tagStats.set(t.id, {
      endorsers,
      opposers,
      tentativeOnly,
      pdoomMean:
        pVals.length === 0
          ? null
          : pVals.reduce((a, b) => a + b, 0) / pVals.length,
      pdoomCount: pVals.length,
    });
  }
  // Aggregate index summary stats.
  const tagsWithEndorsers = Array.from(tagStats.values()).filter(
    (s) => s.endorsers > 0,
  ).length;
  const tagsContested = Array.from(tagStats.values()).filter(
    (s) =>
      s.opposers >= 2 &&
      s.opposers / Math.max(1, s.endorsers + s.opposers) >= 0.25,
  ).length;
  const tagsCrowded = Array.from(tagStats.values()).filter(
    (s) => s.endorsers >= 30,
  ).length;
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">strategies</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Strategy tags.
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          A tag is a handle for a recurring strategic claim. Tags are
          inductive: if the corpus does not carry an argument for a tag,
          the tag does not exist here yet. Tags with one or two adherents
          may merge or split as data grows.
        </p>
      </section>

      <section className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--color-rule)] border hairline">
        <SummaryStat label="strategy tags" value={strategyTags.length.toString()} />
        <SummaryStat
          label="tags with endorsers"
          value={tagsWithEndorsers.toString()}
          sub={`${strategyTags.length - tagsWithEndorsers} unused so far`}
        />
        <SummaryStat
          label="crowded (≥30 endorsers)"
          value={tagsCrowded.toString()}
        />
        <SummaryStat
          label="contested"
          value={tagsContested.toString()}
          sub="≥25% of stances oppose"
        />
      </section>

      {(() => {
        const sorted = strategyTags
          .slice()
          .sort((a, b) => (usage.get(b.id) ?? 0) - (usage.get(a.id) ?? 0));
        const tier1 = sorted.filter((t) => (usage.get(t.id) ?? 0) >= 20);
        const tier2 = sorted.filter((t) => {
          const c = usage.get(t.id) ?? 0;
          return c >= 5 && c < 20;
        });
        const tier3 = sorted.filter((t) => {
          const c = usage.get(t.id) ?? 0;
          return c >= 1 && c < 5;
        });
        const tier4 = sorted.filter((t) => (usage.get(t.id) ?? 0) === 0);
        const renderCard = (t: (typeof sorted)[number]) => {
          const count = usage.get(t.id) ?? 0;
          const stats = tagStats.get(t.id);
          const isContested =
            stats !== undefined &&
            stats.opposers >= 2 &&
            stats.opposers /
              Math.max(1, stats.endorsers + stats.opposers) >=
              0.25;
          return (
            <li key={t.id}>
              <Link href={`/strategies/${t.id}`} className="unstyled">
                <div
                  className={`border p-4 h-full transition-colors ${
                    count > 0
                      ? "hairline hover:border-[var(--color-ink)]"
                      : "hairline opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1 gap-2">
                    <h3
                      className="text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t.name}
                    </h3>
                    <span className="num-label">{count}</span>
                  </div>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {t.oneLine}
                  </p>
                  {t.aka && (
                    <p
                      className="text-xs italic mb-2"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      also: {t.aka.join(", ")}
                    </p>
                  )}
                  {stats && (stats.endorsers > 0 || stats.opposers > 0) && (
                    <div
                      className="mt-2 pt-2 border-t hairline flex flex-wrap items-center gap-2 text-[10px]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.04em",
                        color: "var(--color-ink-soft)",
                      }}
                    >
                      <span>↑ {stats.endorsers} endorse</span>
                      {stats.opposers > 0 && (
                        <span>↓ {stats.opposers} oppose</span>
                      )}
                      {stats.tentativeOnly > 0 && (
                        <span title="Endorsers whose only matching position is tentative">
                          ~ {stats.tentativeOnly} tentative
                        </span>
                      )}
                      {stats.pdoomMean !== null && (
                        <span>
                          p̄ {Math.round(stats.pdoomMean * 100)}% (n=
                          {stats.pdoomCount})
                        </span>
                      )}
                      {isContested && (
                        <span
                          style={{
                            color: "var(--color-ink)",
                            background:
                              "color-mix(in oklab, var(--color-conflict, #b8442e) 15%, var(--color-parchment))",
                            padding: "1px 5px",
                            borderRadius: 2,
                          }}
                        >
                          CONTESTED
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          );
        };
        return (
          <>
            <section className="mb-10">
              <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Most adhered to.
                </h2>
                <span className="num-label">
                  {tier1.length} tags · ≥20 endorsers
                </span>
              </div>
              <p
                className="text-sm italic mb-4 max-w-3xl"
                style={{ color: "var(--color-ink-soft)" }}
              >
                The {tier1.length} strategies that show up most across the
                corpus. Read these first to map the discourse.
              </p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tier1.map(renderCard)}
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Established positions.
                </h2>
                <span className="num-label">
                  {tier2.length} tags · 5–19 endorsers
                </span>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tier2.map(renderCard)}
              </ul>
            </section>

            {tier3.length > 0 && (
              <details className="mb-10">
                <summary
                  className="cursor-pointer flex items-baseline justify-between border-b hairline pb-2 mb-4"
                  style={{ listStyle: "revert" }}
                >
                  <h2
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Emerging or niche.
                  </h2>
                  <span className="num-label">
                    {tier3.length} tags · 1–4 endorsers
                  </span>
                </summary>
                <p
                  className="text-sm italic mb-4 max-w-3xl"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  Strategies the corpus only weakly carries. Some are
                  early signals; some will fold into a neighbour as data
                  grows.
                </p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tier3.map(renderCard)}
                </ul>
              </details>
            )}

            {tier4.length > 0 && (
              <details className="mb-10">
                <summary
                  className="cursor-pointer flex items-baseline justify-between border-b hairline pb-2 mb-4"
                  style={{ listStyle: "revert" }}
                >
                  <h2
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Catalogued, no endorsers yet.
                  </h2>
                  <span className="num-label">{tier4.length} tags</span>
                </summary>
                <p
                  className="text-sm italic mb-4 max-w-3xl"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  Tags carried by the framework but not yet matched to a
                  named position in the corpus.
                </p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tier4.map(renderCard)}
                </ul>
              </details>
            )}
          </>
        );
      })()}
    </div>
  );
}

function SummaryStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="p-4 bg-[var(--color-parchment)]">
      <p className="num-label mb-2" style={{ fontSize: "0.6rem" }}>
        {label}
      </p>
      <p
        className="text-2xl leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="text-[10px] mt-1.5"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
