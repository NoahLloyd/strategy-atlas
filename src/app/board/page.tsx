import { people, strategyTagUsage } from "@/lib/people";
import { getTagById } from "@/lib/strategy-tags";
import { BoardMatrix } from "@/components/BoardMatrix";
import {
  expertiseTiers,
  recognitionTiers,
  vintageTiers,
} from "@/data/profile-tiers";

export const metadata = {
  title: "Board · AGI Strategies",
  description:
    "Hand-classified expertise and recognition tiers for the most prominent figures on the AGI strategy record.",
};

export default function BoardPage() {
  const profiled = people.filter((p) => p.profile);
  const totalQuotes = profiled.reduce(
    (acc, p) =>
      acc + p.positions.reduce((q, pos) => q + pos.quotes.length, 0),
    0,
  );
  const expertiseCounts = expertiseTiers.map((t) => ({
    tier: t,
    count: profiled.filter((p) => p.profile!.expertise === t.id).length,
  }));
  const recognitionCounts = recognitionTiers.map((t) => ({
    tier: t,
    count: profiled.filter((p) => p.profile!.recognition === t.id).length,
  }));
  const vintageCounts = vintageTiers.map((t) => ({
    tier: t,
    count: profiled.filter((p) => p.profile!.vintage === t.id).length,
  }));
  const vintageClassified = profiled.filter((p) => p.profile!.vintage).length;
  // p(doom) by vintage, does the era of formation predict the estimate?
  const pdoomByVintage = vintageTiers.map((t) => {
    const vals = profiled
      .filter((p) => p.profile!.vintage === t.id)
      .map((p) => {
        const v = p.pDoom?.[0]?.value;
        if (v === undefined) return null;
        return Array.isArray(v) ? (v[0] + v[1]) / 2 : v;
      })
      .filter((v): v is number => v !== null);
    return {
      tier: t,
      n: vals.length,
      mean:
        vals.length === 0
          ? null
          : vals.reduce((a, b) => a + b, 0) / vals.length,
    };
  });
  const vintageTiersWithEnough = pdoomByVintage.filter((x) => x.n >= 3);
  const allTagsRanked = strategyTagUsage()
    .map(({ id, count }) => {
      const t = getTagById(id);
      return { id, name: t?.name ?? id, count };
    })
    .sort((a, b) => b.count - a.count);

  // p(doom) summary per expertise tier, surfaces whether builders, deep
  // technicals, policy, or commentators differ in their existential
  // estimates. Uses first stated p(doom) per person to avoid double-counting
  // revisions.
  function pdoomMid(v: number | [number, number] | undefined): number | null {
    if (v === undefined) return null;
    if (Array.isArray(v)) return (v[0] + v[1]) / 2;
    return v;
  }
  const pdoomByExpertise = expertiseTiers.map((t) => {
    const vals = profiled
      .filter((p) => p.profile!.expertise === t.id)
      .map((p) => pdoomMid(p.pDoom?.[0]?.value))
      .filter((v): v is number => v !== null);
    return {
      tier: t,
      n: vals.length,
      mean:
        vals.length === 0
          ? null
          : vals.reduce((a, b) => a + b, 0) / vals.length,
    };
  });
  const pdoomByRecognition = recognitionTiers.map((t) => {
    const vals = profiled
      .filter((p) => p.profile!.recognition === t.id)
      .map((p) => pdoomMid(p.pDoom?.[0]?.value))
      .filter((v): v is number => v !== null);
    return {
      tier: t,
      n: vals.length,
      mean:
        vals.length === 0
          ? null
          : vals.reduce((a, b) => a + b, 0) / vals.length,
    };
  });
  const tiersWithEnoughData = pdoomByExpertise.filter((x) => x.n >= 3);
  const recTiersWithEnoughData = pdoomByRecognition.filter((x) => x.n >= 3);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">the board</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who is talking, and from where.
        </h1>
        <p
          className="text-lg leading-relaxed mb-3"
          style={{ color: "var(--color-ink-soft)" }}
        >
          A grid of the AI/AGI discourse:{" "}
          <strong style={{ color: "var(--color-ink)" }}>expertise</strong> on
          the technical side,{" "}
          <strong style={{ color: "var(--color-ink)" }}>recognition</strong> on
          the public side, and{" "}
          <strong style={{ color: "var(--color-ink)" }}>vintage</strong> as
          the third axis (era of AI worldview formation, surfaced in the
          breakdown sections below). Each face is one person. Cells get
          darker the more people sit there. Sparse cells are not gaps in
          the record; they are positions the field has not actually
          produced.
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Tiers are hand-assigned with concrete evidence (peer-reviewed work,
          named roles, mainstream coverage) rather than from a single proxy.{" "}
          <strong style={{ color: "var(--color-ink)" }}>{profiled.length}</strong>{" "}
          of {people.length} people are classified so far; the rest appear in
          the directory but not on the board until their profile is researched.
          Filter by strategy to see which tier mix endorses or opposes a given
          bet.
        </p>
      </section>

      <section className="mb-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Stat
          label="People profiled"
          value={profiled.length.toString()}
          sub={`of ${people.length} on record`}
        />
        <Stat
          label="Their quotes"
          value={totalQuotes.toString()}
          sub="all source-linked"
        />
        <Stat
          label="Expertise tiers"
          value={expertiseTiers.length.toString()}
          sub="frontier-builder → commentator"
        />
        <Stat
          label="Recognition tiers"
          value={recognitionTiers.length.toString()}
          sub="household-name → emerging"
        />
      </section>

      <section className="mb-10">
        <BoardMatrix people={people} allTagsRanked={allTagsRanked} />
      </section>

      {(tiersWithEnoughData.length >= 3 || recTiersWithEnoughData.length >= 2) && (
        <section
          className="mb-12 border-t-2 border-[var(--color-ink)] pt-6"
        >
          <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              p(doom) by tier.
            </h2>
            <span className="num-label">both sides</span>
          </div>
          <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
            Mean stated p(doom) within each tier. Each tier requires at least
            three p(doom) estimates on record to appear; tiers below the bar
            are honest about being undersampled. The point is to ask{" "}
            <em>does the tier shape the estimate</em>, not to settle it.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <TierBars
              title="by expertise"
              rows={tiersWithEnoughData.map((x) => ({
                id: x.tier.id,
                label: x.tier.label,
                mean: x.mean,
                n: x.n,
              }))}
            />
            <TierBars
              title="by recognition"
              rows={recTiersWithEnoughData.map((x) => ({
                id: x.tier.id,
                label: x.tier.label,
                mean: x.mean,
                n: x.n,
              }))}
            />
          </div>
          <p
            className="text-[10px] italic mt-4 max-w-3xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            n=3 is a low bar; read this as a sketch, not as evidence. As
            the corpus grows, this section will sharpen into a real
            tier-comparison.
          </p>
        </section>
      )}

      {vintageTiersWithEnough.length >= 3 && (
        <section className="mb-12 border-t-2 border-[var(--color-ink)] pt-6">
          <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              p(doom) by vintage.
            </h2>
            <span className="num-label">era of formation</span>
          </div>
          <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
            Mean stated p(doom) within each era of AI worldview formation.
            The hypothesis: priors set before 2012, when the deep-learning
            era began, differ from priors set after. This is the visible
            test. Each tier requires at least three p(doom) estimates to
            appear.
          </p>
          <TierBars
            title="by vintage"
            rows={vintageTiersWithEnough.map((x) => ({
              id: x.tier.id,
              label: x.tier.label,
              mean: x.mean,
              n: x.n,
            }))}
          />
          <p className="text-[10px] italic mt-3 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
            n is small per tier. Treat as an opening hypothesis, not a
            settled comparison. {vintageClassified} of {profiled.length}{" "}
            profiled people are vintage-classified so far; the rest will fill
            in as the corpus grows.
          </p>
        </section>
      )}

      <section className="mb-12 border-t hairline pt-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="num-label mb-3">expertise tiers</p>
            <ul className="space-y-3">
              {expertiseCounts.map(({ tier, count }) => (
                <li key={tier.id} className="border-l-2 hairline pl-3">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.label}
                    </span>
                    <span className="num-label">{count}</span>
                  </div>
                  <p
                    className="text-xs italic mt-1"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {tier.criterion}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="num-label mb-3">recognition tiers</p>
            <ul className="space-y-3">
              {recognitionCounts.map(({ tier, count }) => (
                <li key={tier.id} className="border-l-2 hairline pl-3">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.label}
                    </span>
                    <span className="num-label">{count}</span>
                  </div>
                  <p
                    className="text-xs italic mt-1"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {tier.criterion}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="num-label mb-3">
              vintage tiers · {vintageClassified} classified
            </p>
            <ul className="space-y-3">
              {vintageCounts.map(({ tier, count }) => (
                <li key={tier.id} className="border-l-2 hairline pl-3">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.label}
                    </span>
                    <span className="num-label">{count}</span>
                  </div>
                  <p
                    className="text-xs italic mt-1"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {tier.criterion}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t hairline pt-8">
        <p className="num-label mb-3">how this is built</p>
        <ul
          className="space-y-2 text-sm max-w-3xl"
          style={{ color: "var(--color-ink-soft)" }}
        >
          <li>
            <strong style={{ color: "var(--color-ink)" }}>Tiered, not
            scored.</strong>{" "}
            Numeric scores invite false precision. Each tier has a written
            criterion; the same tier means the same thing across every person.
          </li>
          <li>
            <strong style={{ color: "var(--color-ink)" }}>Justified
            individually.</strong>{" "}
            Each profile lists what put the person in their tier: papers,
            roles, coverage. Hand-assigned, not derived from a single proxy.
            Open a person to read the reasoning.
          </li>
          <li>
            <strong style={{ color: "var(--color-ink)" }}>Honest about
            coverage.</strong>{" "}
            People who haven&apos;t been profiled are not placed on the grid.
            Showing up as &quot;emerging&quot; means a deliberate
            classification, not a missing entry.
          </li>
        </ul>
      </section>
    </div>
  );
}

function TierBars({
  title,
  rows,
}: {
  title: string;
  rows: { id: string; label: string; mean: number | null; n: number }[];
}) {
  if (rows.length === 0) {
    return (
      <div>
        <p className="num-label mb-2">{title}</p>
        <p
          className="text-xs italic"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Not enough p(doom) estimates per tier yet.
        </p>
      </div>
    );
  }
  const maxMean = Math.max(
    0.05,
    ...rows.map((r) => r.mean ?? 0),
  );
  return (
    <div>
      <p className="num-label mb-3">{title}</p>
      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex items-center gap-2 text-xs"
          >
            <span
              className="num-label"
              style={{ width: 130, color: "var(--color-ink-soft)" }}
            >
              {row.label}
            </span>
            <div
              className="flex-1 h-3"
              style={{ background: "var(--color-rule)" }}
            >
              <div
                style={{
                  width: `${((row.mean ?? 0) / maxMean) * 100}%`,
                  height: "100%",
                  background: "var(--color-accent)",
                }}
              />
            </div>
            <span
              className="num-label whitespace-nowrap"
              style={{ width: 70, textAlign: "right" }}
            >
              {row.mean !== null ? `${Math.round(row.mean * 100)}%` : "·"}
              {" · n="}
              {row.n}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="border hairline p-4">
      <p className="num-label mb-2">{label}</p>
      <p className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
        {value}
      </p>
      {sub && (
        <p
          className="text-xs mt-1"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
