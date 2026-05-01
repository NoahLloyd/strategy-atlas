import { people, strategyTagUsage, allCategories } from "@/lib/people";
import { getTagById } from "@/lib/strategy-tags";
import { PeopleBrowser } from "@/components/PeopleBrowser";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "AI safety researchers, executives, and policymakers on AGI",
  description:
    "Every person on the record about AI/AGI strategy. Quotes with dates, sources, p(doom) estimates, and AGI timelines. Filter by strategy or category.",
  path: "/people",
  keywords: [
    "AI safety researchers",
    "AGI researchers",
    "AI risk researchers",
    "AI policy experts",
    "AI alignment researchers",
    "AI executives on AGI",
    "p(doom) by researcher",
    "AI safety directory",
    "AI researcher database",
    "AGI strategy positions",
  ],
  imageAlt: "Directory of named voices on AGI strategy",
});

export default function PeopleIndex() {
  const tags = strategyTagUsage()
    .map(({ id, count }) => {
      const t = getTagById(id);
      return { id, name: t?.name ?? id, count };
    })
    .sort((a, b) => b.count - a.count);
  const cats = allCategories();
  const pDoomCount = people.filter((p) => p.pDoom && p.pDoom.length > 0).length;
  const totalQuotes = people.reduce(
    (acc, p) =>
      acc + p.positions.reduce((q, pos) => q + pos.quotes.length, 0),
    0,
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "People on the record about AGI",
            description:
              "Directory of researchers, executives, and policymakers with named positions on AGI strategy.",
            path: "/people",
            type: "CollectionPage",
          }),
          itemListSchema({
            name: "People on the record about AGI",
            description:
              "Researchers, executives, and policymakers with sourced positions on AGI strategy.",
            path: "/people",
            items: people
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((p) => ({
                name: p.name,
                path: `/people/${p.id}`,
                description: p.tagline ?? p.summary,
              })),
            itemType: "Person",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "People", path: "/people" },
        ]}
      />
      <section className="mb-10 max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who believes what about AGI.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          Every strategic claim on this site belongs to a named person, is
          dated, and links to a primary source. Direct quotes are marked
          <em> direct</em>; paraphrases are marked as such.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Strategy categories are inductive, built from what people actually
          argue, not imposed from a framework. Expect the taxonomy to change as
          the corpus grows.
        </p>
      </section>

      <section className="mb-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="People indexed" value={people.length.toString()} />
        <Stat label="Quotes" value={totalQuotes.toString()} />
        <Stat label="p(doom) on record" value={pDoomCount.toString()} />
        <Stat label="Strategy tags" value={tags.length.toString()} />
      </section>

      <section className="mb-10">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Browse the corpus.
          </h2>
          <a href="/pdoom" className="underline-wiggle text-sm">
            p(doom) board →
          </a>
        </div>
        <PeopleBrowser people={people} allTags={tags} allCategories={cats} />
      </section>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border hairline p-4">
      <p className="num-label mb-2">{label}</p>
      <p className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
        {value}
      </p>
      {sub && (
        <p className="text-xs mt-1" style={{ color: "var(--color-ink-soft)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
