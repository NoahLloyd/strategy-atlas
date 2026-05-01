import Link from "next/link";
import { people, strategyTagUsage } from "@/lib/people";
import { getTagById, strategyTags } from "@/lib/strategy-tags";
import { HoverFaceLink } from "@/components/HoverFaceLink";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema, webPageSchema } from "@/lib/structured-data";

function formatPDoom(v: number | [number, number]): string {
  if (Array.isArray(v)) return `${Math.round(v[0] * 100)}–${Math.round(v[1] * 100)}%`;
  return `${Math.round(v * 100)}%`;
}

export const metadata = buildMetadata({
  title: "AGI Strategies — Who believes what about AGI",
  titleAbsolute: true,
  description:
    "A citation-backed map of AI safety strategies. Every position belongs to a named researcher, executive, or policymaker, dated and linked to a primary source.",
  path: "/",
  keywords: [
    "AGI strategies",
    "AI safety map",
    "who believes what about AGI",
    "AI risk researchers",
    "p(doom)",
    "AI alignment positions",
    "AI safety strategies",
    "AGI timelines",
    "AI policy positions",
    "AI safety database",
  ],
  imageAlt: "AGI Strategies — a map of AI safety strategies",
});

export default function HomePage() {
  const tagStats = strategyTagUsage();
  const pDoomCount = people.filter((p) => p.pDoom && p.pDoom.length > 0).length;
  const timelinesCount = people.filter(
    (p) => p.timelines && p.timelines.length > 0,
  ).length;
  const totalQuotes = people.reduce(
    (acc, p) =>
      acc + p.positions.reduce((q, pos) => q + pos.quotes.length, 0),
    0,
  );
  const pDoomByValue = people
    .filter((p) => p.pDoom && p.pDoom[0])
    .map((p) => ({
      person: p,
      v: p.pDoom![0].value,
      n: Array.isArray(p.pDoom![0].value)
        ? (p.pDoom![0].value[0] + p.pDoom![0].value[1]) / 2
        : p.pDoom![0].value,
    }));
  const highest = pDoomByValue.slice().sort((a, b) => b.n - a.n).slice(0, 3);
  const lowest = pDoomByValue.slice().sort((a, b) => a.n - b.n).slice(0, 3);
  const topTags = tagStats.slice(0, 8);
  const recentlyAdded = people
    .slice()
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? "") || a.name.localeCompare(b.name))
    .slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-14 pb-20">
      <JsonLd
        data={[
          webPageSchema({
            name: "AGI Strategies — Who believes what about AGI",
            description:
              "Citation-backed map of AI safety strategies. Researchers, executives, and policymakers on the record about AGI.",
            path: "/",
            type: "WebPage",
          }),
          itemListSchema({
            name: "Most adhered-to AGI strategy tags",
            description: "Strategy tags ranked by endorser count.",
            path: "/strategies",
            items: topTags.slice(0, 8).map(({ id }) => {
              const t = getTagById(id);
              return {
                name: t?.name ?? id,
                path: `/strategies/${id}`,
                description: t?.oneLine,
              };
            }),
            itemType: "DefinedTerm",
          }),
        ]}
      />
      <section className="mb-16 max-w-4xl">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl leading-[1.03] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who believes what about AGI.
        </h1>
        <p
          className="text-xl leading-relaxed mb-4 max-w-3xl"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Every position on this site belongs to a named person, is dated,
          and links to a primary source. So you don&apos;t have to take
          anyone&apos;s word for what a researcher, executive, or politician
          actually thinks about AGI.
        </p>
        <p
          className="text-base leading-relaxed max-w-3xl"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Strategy tags are read off what people say, not assigned from a
          checklist. They evolve as the directory grows.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link href="/people" className="chip is-complement">
            Browse {people.length} people →
          </Link>
          <Link href="/atlas" className="chip">
            Overview
          </Link>
          <Link href="/board" className="chip">
            The board
          </Link>
          <Link href="/compare" className="chip">
            Compare strategies
          </Link>
          <Link href="/pdoom" className="chip">
            p(doom)
          </Link>
          <Link href="/timelines" className="chip">
            Timelines
          </Link>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--color-rule)] border hairline">
        <BigStat label="People on the record" value={people.length.toString()} />
        <BigStat label="Quotes with sources" value={totalQuotes.toString()} />
        <BigStat label="p(doom) estimates" value={pDoomCount.toString()} />
        <BigStat label="Dated AGI timelines" value={timelinesCount.toString()} />
      </section>

      <section className="mb-16 border-t-2 border-[var(--color-ink)] pt-6">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6 gap-3 flex-wrap">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recently added.
          </h2>
          <div className="flex items-baseline gap-3">
            <span
              className="num-label"
              style={{ color: "var(--color-ink-soft)" }}
            >
              by last updated
            </span>
            <Link href="/people" className="underline-wiggle text-sm">
              all people →
            </Link>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {recentlyAdded.map((p) => (
            <li key={p.id}>
              <div className="flex items-start gap-3 border hairline p-3 hover:border-[var(--color-ink)] transition-colors">
                <HoverFaceLink person={p} size={40} placement="right" />
                <div className="flex-1 min-w-0">
                  <Link href={`/people/${p.id}`} className="unstyled hover:underline">
                    <p className="font-medium leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {p.name}
                    </p>
                  </Link>
                  {p.tagline && (
                    <p className="text-xs italic line-clamp-2 mt-1" style={{ color: "var(--color-ink-soft)" }}>
                      {p.tagline}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 border-t-2 border-[var(--color-ink)] pt-6">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6 gap-3 flex-wrap">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The spread, in one look.
          </h2>
          <div className="flex items-baseline gap-3">
            <span
              className="num-label"
              style={{ color: "var(--color-ink-soft)" }}
            >
              by p(doom)
            </span>
            <Link href="/pdoom" className="underline-wiggle text-sm">
              every p(doom) →
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="num-label mb-4">highest p(doom) on record</p>
            <ul className="space-y-2">
              {highest.map(({ person, v }) => (
                <li
                  key={person.id}
                  className="flex items-center gap-3 border-b hairline py-2"
                >
                  <HoverFaceLink person={person} size={36} placement="right" />
                  <span className="flex-1">
                    <HoverFaceLink person={person} placement="below">
                      <span
                        className="hover:underline"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {person.name}
                      </span>
                    </HoverFaceLink>
                  </span>
                  <span
                    className="text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {formatPDoom(v)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="num-label mb-4">lowest p(doom) on record</p>
            <ul className="space-y-2">
              {lowest.map(({ person, v }) => (
                <li
                  key={person.id}
                  className="flex items-center gap-3 border-b hairline py-2"
                >
                  <HoverFaceLink person={person} size={36} placement="right" />
                  <span className="flex-1">
                    <HoverFaceLink person={person} placement="below">
                      <span
                        className="hover:underline"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {person.name}
                      </span>
                    </HoverFaceLink>
                  </span>
                  <span
                    className="text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {formatPDoom(v)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {topTags.length > 0 && (
        <section className="mb-16 border-t-2 border-[var(--color-ink)] pt-6">
          <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6 gap-3 flex-wrap">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The most adhered-to strategies so far.
            </h2>
            <div className="flex items-baseline gap-3">
              <span
                className="num-label"
                style={{ color: "var(--color-ink-soft)" }}
              >
                by endorser count
              </span>
              <Link href="/strategies" className="underline-wiggle text-sm">
                every tag →
              </Link>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topTags.map(({ id, count }) => {
              const t = getTagById(id);
              return (
                <li key={id}>
                  <Link href={`/strategies/${id}`} className="unstyled">
                    <div className="border hairline p-4 hover:border-[var(--color-ink)] h-full">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3
                          className="text-lg"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {t?.name ?? id}
                        </h3>
                        <span className="num-label">{count}</span>
                      </div>
                      <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
                        {t?.oneLine}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <section className="mb-16 border-t-2 border-[var(--color-ink)] pt-6">
        <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
          <div>
            <h2
              className="text-2xl mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where the consensus lives.
            </h2>
            <p
              className="text-base leading-relaxed mb-3 max-w-2xl"
              style={{ color: "var(--color-ink-soft)" }}
            >
              The most prominent figures on the record are placed on a
              two-axis grid: <strong style={{ color: "var(--color-ink)" }}>expertise</strong>{" "}
              (frontier-builder → commentator) on the technical side and{" "}
              <strong style={{ color: "var(--color-ink)" }}>recognition</strong>{" "}
              (household-name → emerging) on the public side. A third
              dimension, <strong style={{ color: "var(--color-ink)" }}>vintage</strong>{" "}
              (pioneer → post-ChatGPT), captures the era of AI whose
              problems shaped the person&apos;s priors. Each tier is
              hand-classified with concrete evidence; no single proxy.
              Filter by strategy to see whether a position is held mostly
              by builders, mostly by commentators, or mostly by people
              whose worldview formed before AlexNet.
            </p>
            <p
              className="text-sm italic mb-4 max-w-2xl"
              style={{ color: "var(--color-ink-soft)" }}
            >
              The tiers categorise role, reach, and era. They are not a
              ranking. An external-domain expert and a frontier-builder
              are different vantages, not better and worse.
            </p>
            <Link href="/board" className="chip is-complement">
              Open the board →
            </Link>
          </div>
          <div className="border hairline p-4" style={{ background: "var(--color-parchment-soft)" }}>
            <p className="num-label mb-2">six expertise tiers</p>
            <ul className="text-xs space-y-1" style={{ color: "var(--color-ink-soft)" }}>
              <li>frontier-builder</li>
              <li>deep-technical</li>
              <li>applied-technical</li>
              <li>policy / meta</li>
              <li>external-domain</li>
              <li>commentator</li>
            </ul>
            <p className="num-label mb-2 mt-4">four recognition tiers</p>
            <ul className="text-xs space-y-1" style={{ color: "var(--color-ink-soft)" }}>
              <li>household-name</li>
              <li>field-leading</li>
              <li>established</li>
              <li>emerging</li>
            </ul>
            <p className="num-label mb-2 mt-4">six vintage tiers</p>
            <ul className="text-xs space-y-1" style={{ color: "var(--color-ink-soft)" }}>
              <li>pioneer · pre-1980</li>
              <li>symbolic-era · 1980–2005</li>
              <li>pre-deep-learning · 2005–2012</li>
              <li>deep-learning · 2012–2017</li>
              <li>scaling era · 2018–2022</li>
              <li>post-chatgpt · 2023+</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

function BigStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="p-6 bg-[var(--color-parchment)]">
      <p className="num-label mb-3">{label}</p>
      <p
        className="text-4xl sm:text-5xl leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </p>
      {sub && (
        <p className="text-xs mt-2" style={{ color: "var(--color-ink-soft)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
