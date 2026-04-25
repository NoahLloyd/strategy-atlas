import { people, strategyTagUsage, allCategories } from "@/lib/people";
import { getTagById } from "@/lib/strategy-tags";
import { PeopleBrowser } from "@/components/PeopleBrowser";

export const metadata = {
  title: "People — AGI Strategies",
  description:
    "Every person on the record about AI/AGI strategy. Quotes with dates, media, and direct links.",
};

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
  const videoQuotes = people.reduce(
    (acc, p) =>
      acc +
      p.positions.reduce(
        (q, pos) => q + pos.quotes.filter((qu) => qu.source.videoId).length,
        0,
      ),
    0,
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">the record</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who believes what about AGI.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          Every strategic claim on this site belongs to a named person, is
          dated, and links to a primary source. Direct quotes are marked
          <em> direct</em>; paraphrases are marked as such. Videos are cropped
          to the moment the person said it.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Strategy categories are inductive — built from what people actually
          argue, not imposed from a framework. Expect the taxonomy to change as
          the corpus grows.
        </p>
      </section>

      <section className="mb-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="People indexed" value={people.length.toString()} />
        <Stat
          label="Quotes"
          value={totalQuotes.toString()}
          sub={`${videoQuotes} timestamped to video`}
        />
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
