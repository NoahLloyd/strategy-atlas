import Link from "next/link";
import { people } from "@/lib/people";
import { strategyTags, getTagById } from "@/lib/strategy-tags";
import { symmetricConflicts, symmetricComplements, pairKey } from "@/lib/strategies";
import { tagToStrategyId } from "@/data/strategy-tag-bridge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Co-endorsement: which AGI strategies people hold together",
  description:
    "Behavioural pairing data on AGI strategies. Which positions are routinely held together by the same researcher, independent of declared conflicts and complements.",
  path: "/co-strategies",
  keywords: [
    "AGI strategy co-endorsement",
    "AI strategy pairings",
    "AI safety positions held together",
    "AI strategy compatibility",
    "AI alignment correlations",
  ],
  imageAlt: "Co-endorsement of AGI strategies",
});

const ENDORSING_STANCES = new Set([
  "endorses",
  "mixed",
  "conditional",
  "evolved-toward",
]);

export default function CoStrategiesPage() {
  // Per-tag endorser sets. Tentative positions are excluded so the
  // co-endorsement signal isn't padded by people whose only quote on a
  // strategy was tangential, that's the same noise the strategy detail
  // pages already filter out.
  const endorsersByTag = new Map<string, Set<string>>();
  for (const t of strategyTags) endorsersByTag.set(t.id, new Set());
  for (const p of people) {
    const heldTags = new Set(
      p.positions
        .filter((pos) => ENDORSING_STANCES.has(pos.stance) && !pos.tentative)
        .map((pos) => pos.strategyId),
    );
    for (const tagId of heldTags) {
      endorsersByTag.get(tagId)?.add(p.id);
    }
  }

  // Pair-wise overlap. Skip pairs with overlap < 3 (too noisy).
  type Pair = {
    aId: string;
    bId: string;
    aName: string;
    bName: string;
    overlap: number;
    aOnly: number;
    bOnly: number;
    jaccard: number;
    declaredRelation: "complement" | "conflict" | null;
  };

  const conflicts = symmetricConflicts();
  const complements = symmetricComplements();

  const pairs: Pair[] = [];
  const tagIds = strategyTags.map((t) => t.id);
  for (let i = 0; i < tagIds.length; i++) {
    const aId = tagIds[i];
    const aSet = endorsersByTag.get(aId)!;
    if (aSet.size === 0) continue;
    for (let j = i + 1; j < tagIds.length; j++) {
      const bId = tagIds[j];
      const bSet = endorsersByTag.get(bId)!;
      if (bSet.size === 0) continue;
      let overlap = 0;
      for (const id of aSet) if (bSet.has(id)) overlap++;
      if (overlap < 3) continue;
      const union = aSet.size + bSet.size - overlap;
      const jaccard = union === 0 ? 0 : overlap / union;
      const aOnly = aSet.size - overlap;
      const bOnly = bSet.size - overlap;
      // Map tag ids to canonical strategy ids for declared-relation lookup.
      const aStrat = tagToStrategyId[aId] ?? null;
      const bStrat = tagToStrategyId[bId] ?? null;
      let declaredRelation: Pair["declaredRelation"] = null;
      if (aStrat && bStrat) {
        const k = pairKey(aStrat, bStrat);
        if (conflicts.has(k)) declaredRelation = "conflict";
        else if (complements.has(k)) declaredRelation = "complement";
      }
      pairs.push({
        aId,
        bId,
        aName: getTagById(aId)!.name,
        bName: getTagById(bId)!.name,
        overlap,
        aOnly,
        bOnly,
        jaccard,
        declaredRelation,
      });
    }
  }

  // Two views: most overlap (raw count) and tightest (jaccard).
  // Thresholds are loose because the corpus is sparse on cross-strategy
  // endorsement, most people argue for one or two positions, not many.
  const byOverlap = pairs
    .slice()
    .sort((a, b) => b.overlap - a.overlap || b.jaccard - a.jaccard)
    .slice(0, 20);
  const byJaccard = pairs
    .slice()
    .filter((p) => p.overlap >= 3) // require some absolute mass
    .sort((a, b) => b.jaccard - a.jaccard)
    .slice(0, 20);

  // Surprising pairs: meaningful overlap, both tags map to canonical
  // strategies, but the catalogue declares no relation between them. These
  // are positions the framework hasn't named a relation for despite the
  // corpus pairing them.
  const surprising = pairs
    .slice()
    .filter((p) => {
      if (p.overlap < 4 || p.declaredRelation !== null) return false;
      const aStrat = tagToStrategyId[p.aId];
      const bStrat = tagToStrategyId[p.bId];
      // Both must have a canonical strategy id for "no declared relation" to
      // be a meaningful absence rather than "the bridge map is incomplete".
      return aStrat && bStrat;
    })
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 12);

  // Conflict pairs that nonetheless share endorsers, interesting because
  // it suggests the conflict is less binary than declared.
  const declaredConflictsButShared = pairs
    .slice()
    .filter((p) => p.declaredRelation === "conflict" && p.overlap >= 2)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "Co-endorsement of AGI strategies",
            description:
              "Which strategy pairs are most often held together by the same people.",
            path: "/co-strategies",
            type: "WebPage",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Co-endorsement", path: "/co-strategies" },
        ]}
      />
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">co-endorsement</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Strategy pairs people actually hold together.
        </h1>
        <p
          className="text-lg leading-relaxed mb-3"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Which pairs of strategies are most commonly endorsed by the same
          people. Behavioural data, not what the catalogue declares
          compatible. The two views can disagree in instructive ways.
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Pairs with fewer than three shared endorsers are not shown:
          too noisy to read as signal. The corpus is sparse on cross-strategy
          endorsement: most people argue for one or two positions, not many.
          Even three shared voices is meaningful at this density. Compare
          against the{" "}
          <Link href="/matrix" className="underline-wiggle">
            declared relations matrix
          </Link>
          : where the data and the framework disagree, one of them is
          out of date.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Most-shared endorsers · raw count
          </h2>
        </div>
        <PairList pairs={byOverlap} />
      </section>

      <section className="mb-12">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tightest pairs · jaccard
          </h2>
        </div>
        <p
          className="text-xs italic mb-4 max-w-3xl"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Same people hold both, ranked by overlap as a share of either set.
          Surfaces small but tightly-coupled positions a raw count would miss.
        </p>
        <PairList pairs={byJaccard} />
      </section>

      {surprising.length > 0 && (
        <section className="mb-12">
          <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pairings the catalogue hasn&apos;t named
            </h2>
          </div>
          <p
            className="text-xs italic mb-4 max-w-3xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            ≥4 people endorse both, both strategies are in the canonical
            catalogue, yet the declared-relations matrix is silent. Either
            the framework should name them as complements, or the bundling
            is opportunistic and incoherent. The corpus is sparse on
            cross-strategy endorsement; even four shared voices is signal.
          </p>
          <PairList pairs={surprising} />
        </section>
      )}

      {declaredConflictsButShared.length > 0 && (
        <section className="mb-12">
          <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Declared conflicts that still share endorsers
            </h2>
          </div>
          <p
            className="text-xs italic mb-4 max-w-3xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            The catalogue says these strategies pull the same lever in
            opposite directions. Yet some endorse both. Either the conflict
            is not as clean as declared, or these endorsers hold a synthesis
            the framework doesn&apos;t represent.
          </p>
          <PairList pairs={declaredConflictsButShared} />
        </section>
      )}
    </div>
  );
}

function PairList({
  pairs,
}: {
  pairs: {
    aId: string;
    bId: string;
    aName: string;
    bName: string;
    overlap: number;
    aOnly: number;
    bOnly: number;
    jaccard: number;
    declaredRelation: "complement" | "conflict" | null;
  }[];
}) {
  if (pairs.length === 0) {
    return (
      <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
        No pairs meet the threshold yet.
      </p>
    );
  }
  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {pairs.map((p) => (
        <li key={`${p.aId}|${p.bId}`}>
          <Link
            href={`/compare?a=${p.aId}&b=${p.bId}`}
            className="unstyled border hairline p-3 hover:border-[var(--color-ink)] transition-colors block h-full"
          >
            <div className="flex items-baseline justify-between gap-2 mb-1.5">
              <span
                className="text-sm leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.aName} <span style={{ opacity: 0.5 }}>×</span> {p.bName}
              </span>
              <span className="num-label whitespace-nowrap">
                {p.overlap} both
              </span>
            </div>
            <div
              className="flex flex-wrap items-center gap-2 text-[10px]"
              style={{
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
                color: "var(--color-ink-soft)",
              }}
            >
              <span>J = {p.jaccard.toFixed(2)}</span>
              <span>
                {p.aOnly} only A · {p.bOnly} only B
              </span>
              {p.declaredRelation && (
                <span
                  style={{
                    color: "var(--color-ink)",
                    background:
                      p.declaredRelation === "complement"
                        ? "color-mix(in oklab, var(--color-complement, #3a7a52) 12%, var(--color-parchment))"
                        : "color-mix(in oklab, var(--color-conflict, #b8442e) 12%, var(--color-parchment))",
                    padding: "1px 5px",
                    borderRadius: 2,
                    textTransform: "uppercase",
                  }}
                >
                  declared {p.declaredRelation}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
