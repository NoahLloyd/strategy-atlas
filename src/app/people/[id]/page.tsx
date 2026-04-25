import Link from "next/link";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/lib/people";
import { getTagById } from "@/lib/strategy-tags";
import { QuoteBlock } from "@/components/QuoteBlock";
import { PersonAvatar } from "@/components/PersonAvatar";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";

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
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} — AGI Strategies`,
    description: p.summary,
  };
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
          </div>
          <p
            className="text-xs italic mt-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Hand-classified — see the{" "}
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
              <div key={i} className="border-t hairline pt-5">
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Link href={`/strategies/${pos.strategyId}`} className="unstyled hover:underline">
                      {tag?.name ?? pos.strategyId}
                    </Link>
                    <span className="num-label ml-3">{pos.stance}</span>
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
