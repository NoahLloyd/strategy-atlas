import Link from "next/link";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/lib/people";
import { getTagById } from "@/lib/strategy-tags";
import { QuoteBlock } from "@/components/QuoteBlock";
import { PersonAvatar } from "@/components/PersonAvatar";
import { HoverFaceLink } from "@/components/HoverFaceLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import {
  expertiseTiers,
  recognitionTiers,
  vintageTiers,
} from "@/data/profile-tiers";
import type { Person } from "@/lib/people-types";
import { buildMetadata, clamp } from "@/lib/seo";
import { personSchema, profilePageSchema } from "@/lib/structured-data";

function similarPeople(self: Person, k = 6) {
  const selfTags = new Set(self.positions.map((p) => p.strategyId));
  if (selfTags.size === 0) return [];
  const minShared = selfTags.size >= 3 ? 2 : 1;
  const scored = people
    .filter((p) => p.id !== self.id)
    .map((p) => {
      const otherTags = new Set(p.positions.map((pos) => pos.strategyId));
      let shared = 0;
      for (const t of selfTags) if (otherTags.has(t)) shared++;
      const union = selfTags.size + otherTags.size - shared;
      const jaccard = union === 0 ? 0 : shared / union;
      return { person: p, shared, jaccard };
    })
    .filter((s) => s.shared >= minShared)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        b.jaccard - a.jaccard ||
        a.person.name.localeCompare(b.person.name),
    );
  return scored.slice(0, k);
}

export function generateStaticParams() {
  return people.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getPerson(id);
  if (!p) {
    return buildMetadata({
      title: "Person not found",
      description: "The requested person profile does not exist on AGI Strategies.",
      path: `/people/${id}`,
      noIndex: true,
    });
  }
  const current = p.affiliations.find((a) => a.current);
  const role = current?.role ?? p.categories[0]?.replace(/-/g, " ") ?? "researcher";
  const facts: string[] = [];
  if (p.pDoom && p.pDoom.length > 0) facts.push("p(doom)");
  if (p.timelines && p.timelines.length > 0) facts.push("AI timelines");
  if (p.positions.length > 0) facts.push(`${p.positions.length} strategy positions`);
  const factsLine = facts.length > 0 ? `: ${facts.join(", ")}` : "";

  const tagNames = Array.from(
    new Set(
      p.positions
        .map((pos) => getTagById(pos.strategyId)?.name)
        .filter((n): n is string => Boolean(n)),
    ),
  ).slice(0, 8);

  const orgs = Array.from(
    new Set(
      p.affiliations.slice(0, 4).map((a) => a.org).filter(Boolean),
    ),
  );

  const description = clamp(
    `${p.name}${current ? `, ${role} at ${current.org},` : ","} on AGI: ${p.summary}`,
    160,
  );

  return buildMetadata({
    title: `${p.name} on AGI strategy${factsLine}`,
    description,
    path: `/people/${p.id}`,
    type: "profile",
    keywords: [
      p.name,
      `${p.name} AGI`,
      `${p.name} AI safety`,
      `${p.name} p(doom)`,
      ...orgs,
      ...tagNames,
      "AI researcher",
      "AGI strategy",
      "AI alignment",
    ],
    imageAlt: `${p.name} — profile on AGI Strategies`,
    modifiedTime: p.lastUpdated,
    authors: ["Noah Lloyd"],
  });
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const person = getPerson(id);
  if (!person) notFound();
  const currentAffiliations = person.affiliations.filter((a) => a.current);
  const pastAffiliations = person.affiliations.filter((a) => !a.current);
  return (
    <article className="max-w-4xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          personSchema(person),
          profilePageSchema(person, `/people/${person.id}`),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "People", path: "/people" },
          { name: person.name, path: `/people/${person.id}` },
        ]}
      />
      <header className="mb-10 border-b-2 border-[var(--color-ink)] pb-8">
        <p className="num-label mb-3">person</p>
        <div className="flex gap-5 items-start mb-4">
          <PersonAvatar person={person} size={88} />
          <div className="flex-1 min-w-0">
            <h1
              className="text-5xl leading-tight mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {person.name}
            </h1>
            {person.tagline && (
              <p className="text-lg italic" style={{ color: "var(--color-ink-soft)" }}>
                {person.tagline}
              </p>
            )}
          </div>
        </div>
        <p className="text-base leading-relaxed mb-5 max-w-3xl">
          {person.summary}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {currentAffiliations.length > 0 && (
            <div>
              <span className="num-label">current</span>{" "}
              {currentAffiliations.map((a, i) => (
                <span key={i}>
                  {a.role ? `${a.role}, ` : ""}
                  {a.org}
                  {i < currentAffiliations.length - 1 ? "; " : ""}
                </span>
              ))}
            </div>
          )}
          {pastAffiliations.length > 0 && (
            <div>
              <span className="num-label">past</span>{" "}
              {pastAffiliations.map((a, i) => (
                <span key={i}>
                  {a.role ? `${a.role}, ` : ""}
                  {a.org}
                  {a.start ? ` (${a.start}${a.end ? `–${a.end}` : ""})` : ""}
                  {i < pastAffiliations.length - 1 ? "; " : ""}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {person.homepage && (
            <a
              href={person.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-wiggle"
            >
              homepage
            </a>
          )}
          {person.wikipedia && (
            <a
              href={person.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-wiggle"
            >
              wikipedia
            </a>
          )}
          {person.twitter && (
            <a
              href={`https://x.com/${person.twitter.replace(/^@/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-wiggle"
            >
              @{person.twitter.replace(/^@/, "")}
            </a>
          )}
        </div>
      </header>

      {person.profile && (
        <section className="mb-10">
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Profile
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {(() => {
              const tier = expertiseTiers.find(
                (t) => t.id === person.profile!.expertise,
              );
              return (
                <div className="border hairline p-4">
                  <p className="num-label mb-2">expertise</p>
                  <p
                    className="text-lg mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier?.label ?? person.profile!.expertise}
                  </p>
                  <p
                    className="text-xs italic mb-3"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {tier?.criterion}
                  </p>
                  <p className="text-sm">{person.profile!.expertiseNote}</p>
                </div>
              );
            })()}
            {(() => {
              const tier = recognitionTiers.find(
                (t) => t.id === person.profile!.recognition,
              );
              return (
                <div className="border hairline p-4">
                  <p className="num-label mb-2">recognition</p>
                  <p
                    className="text-lg mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tier?.label ?? person.profile!.recognition}
                  </p>
                  <p
                    className="text-xs italic mb-3"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {tier?.criterion}
                  </p>
                  <p className="text-sm">{person.profile!.recognitionNote}</p>
                </div>
              );
            })()}
            {person.profile!.vintage &&
              (() => {
                const tier = vintageTiers.find(
                  (t) => t.id === person.profile!.vintage,
                );
                return (
                  <div className="border hairline p-4 sm:col-span-2">
                    <p className="num-label mb-2">vintage</p>
                    <p
                      className="text-lg mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier?.label ?? person.profile!.vintage}
                    </p>
                    <p
                      className="text-xs italic mb-3"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {tier?.criterion}
                    </p>
                    {person.profile!.vintageNote && (
                      <p className="text-sm">{person.profile!.vintageNote}</p>
                    )}
                  </div>
                );
              })()}
          </div>
          <p
            className="text-xs italic mt-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Hand-classified. See the{" "}
            <Link href="/board" className="underline-wiggle">
              board
            </Link>{" "}
            for the criteria and the full grid.
          </p>
        </section>
      )}

      {person.pDoom && person.pDoom.length > 0 && (
        <section className="mb-10">
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            p(doom)
          </h2>
          <ul className="space-y-3">
            {person.pDoom.map((claim, i) => (
              <li key={i} className="border hairline p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {formatPDoom(claim.value)}
                  </span>
                  {claim.date && <span className="num-label">{claim.date}</span>}
                </div>
                {claim.definition && (
                  <p className="text-sm mb-2 italic" style={{ color: "var(--color-ink-soft)" }}>
                    Definition used: {claim.definition}
                  </p>
                )}
                <p className="text-xs" style={{ color: "var(--color-ink-soft)" }}>
                  <a
                    href={claim.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-wiggle"
                  >
                    {claim.source.title}
                  </a>
                  {claim.source.publisher && ` · ${claim.source.publisher}`}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {person.timelines && person.timelines.length > 0 && (
        <section className="mb-10">
          <h2
            className="text-2xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Timelines
          </h2>
          <ul className="space-y-3">
            {person.timelines.map((t, i) => (
              <li key={i} className="border hairline p-4">
                <p className="mb-1">
                  <strong>{t.milestone}</strong>{" "}
                  <span className="num-label ml-2">
                    {t.year
                      ? `by ${t.year}`
                      : t.range
                      ? `${t.range[0]}–${t.range[1]}`
                      : ""}
                  </span>
                  {t.probability !== undefined && (
                    <span className="num-label ml-2">
                      p={Math.round(t.probability * 100)}%
                    </span>
                  )}
                </p>
                {t.date && (
                  <p className="text-xs" style={{ color: "var(--color-ink-soft)" }}>
                    stated {t.date}
                  </p>
                )}
                <p className="text-xs mt-1" style={{ color: "var(--color-ink-soft)" }}>
                  <a
                    href={t.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-wiggle"
                  >
                    {t.source.title}
                  </a>
                  {t.source.publisher && ` · ${t.source.publisher}`}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-10">
        <h2
          className="text-2xl mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Strategy positions
        </h2>
        <div className="space-y-10">
          {person.positions.map((pos, i) => {
            const tag = getTagById(pos.strategyId);
            return (
              <div
                key={i}
                className="border-t hairline pt-5"
                style={
                  pos.tentative
                    ? {
                        borderTopStyle: "dashed",
                      }
                    : undefined
                }
              >
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Link href={`/strategies/${pos.strategyId}`} className="unstyled hover:underline">
                      {tag?.name ?? pos.strategyId}
                    </Link>
                    <span className="num-label ml-3">{pos.stance}</span>
                    {pos.tentative && (
                      <span
                        title="Position inferred from a passing remark, hype quote, or paper abstract; not a clear strategy statement. Treat as a working hypothesis."
                        className="num-label ml-2"
                        style={{
                          border: "1px solid var(--color-rule)",
                          borderStyle: "dashed",
                          padding: "0.05rem 0.4rem",
                          fontSize: "0.55rem",
                          color: "var(--color-ink-soft)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        tentative
                      </span>
                    )}
                  </h3>
                  {tag?.oneLine && (
                    <span
                      className="text-xs italic max-w-sm text-right"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {tag.oneLine}
                    </span>
                  )}
                </div>
                <p className="text-base mb-4 max-w-3xl">{pos.summary}</p>
                <div className="space-y-5">
                  {pos.quotes.map((q, qi) => (
                    <QuoteBlock key={qi} quote={q} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {(() => {
        const similar = similarPeople(person);
        if (similar.length === 0) return null;
        return (
          <section className="mb-10 border-t hairline pt-5">
            <div className="flex items-baseline justify-between mb-3">
              <h2
                className="text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Closest strategy neighbours
              </h2>
              <span className="num-label opacity-60">by jaccard overlap</span>
            </div>
            <p className="text-xs italic mb-4" style={{ color: "var(--color-ink-soft)" }}>
              Other people whose strategy tags overlap with {person.name}&apos;s.
              Overlap is on tag identity, not stance; opposites can show up if
              they reference the same tags.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {similar.map(({ person: p, shared, jaccard }) => (
                <li
                  key={p.id}
                  className="flex items-start gap-3 border hairline p-3 hover:border-[var(--color-ink)] transition-colors h-full"
                >
                  <HoverFaceLink person={p} size={36} placement="right" />
                  <div className="flex-1 min-w-0">
                    <HoverFaceLink person={p} placement="below">
                      <p
                        className="text-sm leading-tight hover:underline"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.name}
                      </p>
                    </HoverFaceLink>
                    <p className="text-[10px] mt-1" style={{ color: "var(--color-ink-soft)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                      shared {shared} · J={jaccard.toFixed(2)}
                    </p>
                    {p.tagline && (
                      <p className="text-xs italic mt-1 line-clamp-2" style={{ color: "var(--color-ink-soft)" }}>
                        {p.tagline}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })()}

      {person.notes && (
        <section className="mb-10 border-t hairline pt-5">
          <p className="num-label mb-2">notes</p>
          <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
            {person.notes}
          </p>
        </section>
      )}

      {person.lastUpdated && (
        <p className="text-xs mt-10" style={{ color: "var(--color-ink-soft)" }}>
          Record last updated {person.lastUpdated}.
        </p>
      )}
    </article>
  );
}

function formatPDoom(v: number | [number, number]): string {
  if (Array.isArray(v)) return `${Math.round(v[0] * 100)}–${Math.round(v[1] * 100)}%`;
  return `${Math.round(v * 100)}%`;
}
