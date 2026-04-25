import { people, strategyTagUsage } from "@/lib/people";
import { getTagById } from "@/lib/strategy-tags";
import { BoardMatrix } from "@/components/BoardMatrix";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";

export const metadata = {
  title: "Board — AGI Strategies",
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
  const allTagsRanked = strategyTagUsage()
    .map(({ id, count }) => {
      const t = getTagById(id);
      return { id, name: t?.name ?? id, count };
    })
    .sort((a, b) => b.count - a.count);

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
          A two-axis grid of the AI/AGI discourse:{" "}
          <strong style={{ color: "var(--color-ink)" }}>expertise</strong> on
          the technical side,{" "}
          <strong style={{ color: "var(--color-ink)" }}>recognition</strong> on
          the public side. Each face is one person. Cells get darker the more
          people sit there. Sparse cells are not gaps in the record — they are
          positions the field has not actually produced.
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Tiers are hand-assigned with concrete evidence — peer-reviewed work,
          named roles, mainstream coverage — not from a single proxy.{" "}
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

      <section className="mb-12 grid md:grid-cols-2 gap-8 border-t hairline pt-8">
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
            Each profile lists what put the person in their tier — papers,
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
