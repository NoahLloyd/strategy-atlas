import { people } from "@/lib/people";
import { strategyTags } from "@/lib/strategy-tags";
import { CompareView } from "@/components/CompareView";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Compare AGI strategies side-by-side: endorsers, p(doom), tiers",
  description:
    "Pick two AGI strategy positions and see who endorses each, in what expertise/recognition tier mix, with what p(doom). Compare pause vs acceleration, alignment-first vs scaling, and more.",
  path: "/compare",
  keywords: [
    "compare AGI strategies",
    "pause vs acceleration",
    "alignment first vs scaling",
    "AI strategy comparison",
    "AGI position comparison",
    "AI safety strategies side by side",
  ],
  imageAlt: "Compare two AGI strategy positions",
});

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; b?: string }>;
}) {
  const params = await searchParams;
  // We pre-compute who-endorses-what for the client. The component is small
  // and the data is read-only, so a flat structure is fine.
  // "Endorser" excludes evolved-away (no longer holds the position) and
  // opposes; mixed/conditional/evolved-toward count as live engagement.
  const ENDORSING_STANCES = new Set([
    "endorses",
    "mixed",
    "conditional",
    "evolved-toward",
  ]);
  const tagsForCompare = strategyTags
    .map((t) => {
      const endorsers = people
        .filter((p) =>
          p.positions.some(
            (pos) =>
              pos.strategyId === t.id &&
              ENDORSING_STANCES.has(pos.stance) &&
              !pos.tentative,
          ),
        )
        .map((p) => p.id);
      const opposers = people
        .filter((p) =>
          p.positions.some(
            (pos) =>
              pos.strategyId === t.id &&
              (pos.stance === "opposes" || pos.stance === "evolved-away"),
          ),
        )
        .map((p) => p.id);
      return {
        id: t.id,
        name: t.name,
        oneLine: t.oneLine,
        endorserIds: endorsers,
        opposerIds: opposers,
      };
    })
    // Filter out tags with too few endorsers (signal would be too noisy).
    .filter((t) => t.endorserIds.length >= 3)
    .sort((a, b) => b.endorserIds.length - a.endorserIds.length);

  const peopleLite = people.map((p) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    photoUrl: p.photoUrl,
    profile: p.profile,
    pDoom: p.pDoom?.[0]?.value,
    quoteCount: p.positions.reduce((acc, pos) => acc + pos.quotes.length, 0),
    positions: p.positions.map((pos) => ({
      strategyId: pos.strategyId,
      stance: pos.stance,
    })),
  }));

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "Compare AGI strategies side-by-side",
            description:
              "Compare two AGI strategy tags, endorsers, p(doom), and tier mix.",
            path: "/compare",
            type: "WebPage",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ]}
      />
      <section className="mb-8 max-w-3xl">
        <p className="num-label mb-3">compare</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Two strategies, side by side.
        </h1>
        <p
          className="text-lg leading-relaxed mb-3"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Pick any two strategies. See who endorses each, the tier mix of
          endorsers, the p(doom) distribution, and which people endorse both.
          Useful for asking <em>are these strategies actually opposed</em>, or{" "}
          <em>does this disagreement live in builders, in policy, or in the
          public square</em>.
        </p>
        <p
          className="text-sm italic"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Stance defaults to live engagement: endorses, mixed, conditional,
          or evolved-toward. These are people who treat the strategy as a
          live bet of theirs at any time. Opposers are listed separately.
        </p>
      </section>

      <CompareView
        tags={tagsForCompare}
        people={peopleLite}
        initialA={params.a}
        initialB={params.b}
      />
    </div>
  );
}
