import Link from "next/link";
import { notFound } from "next/navigation";
import { strategyTags, getTagById } from "@/lib/strategy-tags";
import { peopleByStrategyTag, people as allPeople } from "@/lib/people";
import { QuoteBlock } from "@/components/QuoteBlock";
import { PersonAvatar } from "@/components/PersonAvatar";
import { StrategyBoard } from "@/components/StrategyBoard";
import {
  expertiseTiers,
  recognitionTiers,
  vintageTiers,
} from "@/data/profile-tiers";
import { tagToStrategyId } from "@/data/strategy-tag-bridge";

export function generateStaticParams() {
  return strategyTags.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getTagById(id);
  if (!t) return { title: "Not found" };
  return {
    title: `${t.name} — AGI Strategies`,
    description: t.oneLine,
  };
}

export default async function StrategyTagPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tag = getTagById(id);
  if (!tag) notFound();
  const adherents = peopleByStrategyTag(id);
  const ENDORSING_STANCES = new Set([
    "endorses",
    "mixed",
    "conditional",
    "evolved-toward",
  ]);
  const endorsers = adherents.filter((p) =>
    p.positions.some(
      (pos) => pos.strategyId === id && ENDORSING_STANCES.has(pos.stance),
    ),
  );
  const opposers = adherents.filter((p) =>
    p.positions.some(
      (pos) =>
        pos.strategyId === id &&
        (pos.stance === "opposes" || pos.stance === "evolved-away"),
    ),
  );
  const profiledEndorsers = endorsers.filter((p) => p.profile);
  const corpusProfiled = allPeople.filter((p) => p.profile).length;
  const strategyId = tagToStrategyId[id];

  // Endorser p(doom) summary — only first claim per person, mid-point of any
  // ranges. We deliberately don't synthesise opposers' p(doom) into this stat
  // because the question "what do endorsers of this bet expect" is what makes
  // it useful.
  const endorserPVals: number[] = [];
  for (const p of endorsers) {
    const v = p.pDoom?.[0]?.value;
    if (v === undefined) continue;
    endorserPVals.push(Array.isArray(v) ? (v[0] + v[1]) / 2 : v);
  }
  const endorserPMean =
    endorserPVals.length === 0
      ? null
      : endorserPVals.reduce((a, b) => a + b, 0) / endorserPVals.length;
  const endorserPMedian = (() => {
    if (endorserPVals.length === 0) return null;
    const s = endorserPVals.slice().sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? (s[mid - 1] + s[mid]) / 2 : s[mid];
  })();
  // Top 3 endorsers by recognition tier then quote count, used as
  // a "principal voices" thumbnail row.
  const recOrder: Record<string, number> = {
    "household-name": 3,
    "field-leading": 2,
    established: 1,
    emerging: 0,
  };
  const principalVoices = profiledEndorsers
    .slice()
    .sort((a, b) => {
      const ra = recOrder[a.profile!.recognition] ?? -1;
      const rb = recOrder[b.profile!.recognition] ?? -1;
      if (ra !== rb) return rb - ra;
      const qa = a.positions.reduce((acc, pos) => acc + pos.quotes.length, 0);
      const qb = b.positions.reduce((acc, pos) => acc + pos.quotes.length, 0);
      return qb - qa;
    })
    .slice(0, 5);

  // Co-endorsement: which other strategy tags do this tag's endorsers most
  // commonly also endorse? This is a behavioural signal of which strategies
  // the field treats as compatible — independent of the declared conflicts
  // map. Built only from positive stances on both sides.
  const coCounts = new Map<string, number>();
  for (const p of endorsers) {
    const heldTags = new Set(
      p.positions
        .filter((pos) => ENDORSING_STANCES.has(pos.stance))
        .map((pos) => pos.strategyId),
    );
    for (const otherTag of heldTags) {
      if (otherTag === id) continue;
      coCounts.set(otherTag, (coCounts.get(otherTag) ?? 0) + 1);
    }
  }
  const coEndorsements = Array.from(coCounts.entries())
    .map(([tagId, n]) => ({
      tag: getTagById(tagId),
      tagId,
      count: n,
      share: endorsers.length > 0 ? n / endorsers.length : 0,
    }))
    .filter((x) => x.tag && x.count >= 2)
    .sort((a, b) => b.count - a.count || b.share - a.share)
    .slice(0, 8);
  return (
    <article className="max-w-5xl mx-auto px-6 py-10">
      <header className="mb-10 border-b-2 border-[var(--color-ink)] pb-6">
        <p className="num-label mb-3">strategy tag</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {tag.name}.
        </h1>
        <p className="text-lg" style={{ color: "var(--color-ink-soft)" }}>
          {tag.oneLine}
        </p>
        {tag.aka && (
          <p className="text-sm italic mt-3" style={{ color: "var(--color-ink-soft)" }}>
            also known as: {tag.aka.join(", ")}
          </p>
        )}
        <div className="flex flex-wrap gap-3 mt-4 text-sm">
          {strategyId && (
            <Link href={`/strategy/${strategyId}`} className="chip">
              Rich strategy page →
            </Link>
          )}
          <Link href={`/compare?a=${id}`} className="chip">
            Compare to another →
          </Link>
        </div>
      </header>

      {(endorsers.length >= 3 || endorserPVals.length >= 3) && (
        <section className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--color-rule)] border hairline">
          <SnapshotStat
            label="endorsers on record"
            value={endorsers.length.toString()}
            sub={
              opposers.length > 0
                ? `${opposers.length} oppose`
                : "no opposers yet"
            }
          />
          <SnapshotStat
            label="profiled endorsers"
            value={profiledEndorsers.length.toString()}
            sub={`${corpusProfiled} on the board total`}
          />
          {endorserPMean !== null && (
            <SnapshotStat
              label="endorser mean p(doom)"
              value={`${Math.round(endorserPMean * 100)}%`}
              sub={`n=${endorserPVals.length}${
                endorserPMedian !== null
                  ? ` · median ${Math.round(endorserPMedian * 100)}%`
                  : ""
              }`}
            />
          )}
          {endorserPMean === null && (
            <SnapshotStat
              label="endorser p(doom)"
              value="—"
              sub="no estimates on record"
            />
          )}
          <SnapshotStat
            label="quotes by endorsers"
            value={endorsers
              .reduce(
                (acc, p) =>
                  acc +
                  p.positions
                    .filter((pos) => pos.strategyId === id)
                    .reduce((q, pos) => q + pos.quotes.length, 0),
                0,
              )
              .toString()}
            sub="just for this tag"
          />
        </section>
      )}

      {principalVoices.length >= 3 && (
        <section className="mb-10">
          <p className="num-label mb-3">principal voices</p>
          <p
            className="text-xs italic mb-3 max-w-3xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Highest-recognition profiled endorsers, broken ties by quote count.
            Inclusion is not endorsement of the position — it&apos;s recognition
            of who the discourse turns to when the bet is debated.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {principalVoices.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/people/${p.id}`}
                  className="unstyled flex flex-col items-center text-center border hairline p-3 hover:border-[var(--color-ink)] transition-colors h-full"
                >
                  <PersonAvatar person={p} size={56} />
                  <p
                    className="text-sm leading-tight mt-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.name}
                  </p>
                  {p.profile && (
                    <p
                      className="text-[10px] mt-1"
                      style={{
                        color: "var(--color-ink-soft)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {recognitionTiers.find((t) => t.id === p.profile!.recognition)?.label}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {profiledEndorsers.length >= 3 && (
        <StrategyBoard
          endorsers={endorsers}
          opposers={opposers}
          corpusProfiled={corpusProfiled}
        />
      )}

      {coEndorsements.length > 0 && (
        <section className="mb-10">
          <p className="num-label mb-2">also held by these endorsers</p>
          <p
            className="text-xs italic mb-3 max-w-3xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            What other strategies the same people endorse. Behavioural
            signal of compatibility — not a declared rule. A high share
            means the two positions are routinely held together.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {coEndorsements.map(({ tag: t, tagId, count, share }) => (
              <li key={tagId}>
                <Link
                  href={`/strategies/${tagId}`}
                  className="unstyled border hairline p-3 hover:border-[var(--color-ink)] transition-colors block h-full"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span
                      className="text-sm leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t!.name}
                    </span>
                    <span className="num-label">
                      {count} · {Math.round(share * 100)}%
                    </span>
                  </div>
                  <p
                    className="text-[11px] italic"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {t!.oneLine}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p
            className="text-[10px] italic mt-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Compare this list to the{" "}
            <Link href="/matrix" className="underline-wiggle">
              declared relations matrix
            </Link>
            . Where they differ, the data reveals a pairing the framework
            doesn&apos;t name yet — the{" "}
            <Link href="/co-strategies" className="underline-wiggle">
              global co-endorsement view
            </Link>{" "}
            ranks all pairs.
          </p>
        </section>
      )}

      {profiledEndorsers.length >= 3 && (
        <section className="mb-10 border hairline p-4" style={{ background: "var(--color-parchment-soft)" }}>
          <p
            className="text-xs italic mb-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Tier mix counts only endorsers (endorses, mixed, conditional,
            evolved-toward). {opposers.length > 0 && `${opposers.length} ${opposers.length === 1 ? "person opposes" : "people oppose"} this position; they are not in the bars below but appear in the list further down.`}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="num-label mb-2">expertise mix of endorsers · {profiledEndorsers.length} profiled of {endorsers.length}</p>
              <div className="space-y-1.5">
                {expertiseTiers.map((t) => {
                  const count = profiledEndorsers.filter((p) => p.profile!.expertise === t.id).length;
                  const max = Math.max(
                    ...expertiseTiers.map((tt) => profiledEndorsers.filter((p) => p.profile!.expertise === tt.id).length),
                    1,
                  );
                  return (
                    <div key={t.id} className="flex items-center gap-2 text-xs">
                      <span style={{ width: 110, color: "var(--color-ink-soft)" }}>{t.short}</span>
                      <div className="flex-1 h-2.5" style={{ background: "var(--color-rule)" }}>
                        <div
                          style={{
                            width: `${(count / max) * 100}%`,
                            height: "100%",
                            background: "var(--color-accent)",
                          }}
                        />
                      </div>
                      <span className="num-label" style={{ width: 24, textAlign: "right" }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="num-label mb-2">recognition mix of endorsers</p>
              <div className="space-y-1.5">
                {recognitionTiers.map((t) => {
                  const count = profiledEndorsers.filter((p) => p.profile!.recognition === t.id).length;
                  const max = Math.max(
                    ...recognitionTiers.map((tt) => profiledEndorsers.filter((p) => p.profile!.recognition === tt.id).length),
                    1,
                  );
                  return (
                    <div key={t.id} className="flex items-center gap-2 text-xs">
                      <span style={{ width: 110, color: "var(--color-ink-soft)" }}>{t.short}</span>
                      <div className="flex-1 h-2.5" style={{ background: "var(--color-rule)" }}>
                        <div
                          style={{
                            width: `${(count / max) * 100}%`,
                            height: "100%",
                            background: "var(--color-accent)",
                          }}
                        />
                      </div>
                      <span className="num-label" style={{ width: 24, textAlign: "right" }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {(() => {
            const withVintage = profiledEndorsers.filter(
              (p) => p.profile!.vintage,
            );
            if (withVintage.length < 4) return null;
            return (
              <div className="mt-5 pt-4 border-t hairline">
                <p className="num-label mb-2">
                  vintage mix · n={withVintage.length} of{" "}
                  {profiledEndorsers.length} profiled with era assigned
                </p>
                <div className="space-y-1.5">
                  {vintageTiers.map((t) => {
                    const count = withVintage.filter(
                      (p) => p.profile!.vintage === t.id,
                    ).length;
                    const max = Math.max(
                      ...vintageTiers.map(
                        (tt) =>
                          withVintage.filter(
                            (p) => p.profile!.vintage === tt.id,
                          ).length,
                      ),
                      1,
                    );
                    return (
                      <div
                        key={t.id}
                        className="flex items-center gap-2 text-xs"
                      >
                        <span
                          style={{
                            width: 130,
                            color: "var(--color-ink-soft)",
                          }}
                          title={t.criterion}
                        >
                          {t.label}
                        </span>
                        <div
                          className="flex-1 h-2.5"
                          style={{ background: "var(--color-rule)" }}
                        >
                          <div
                            style={{
                              width: `${(count / max) * 100}%`,
                              height: "100%",
                              background: "var(--color-accent)",
                            }}
                          />
                        </div>
                        <span
                          className="num-label"
                          style={{ width: 24, textAlign: "right" }}
                        >
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p
                  className="text-[10px] italic mt-2"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  Vintage is the era when this person&apos;s AI worldview
                  formed — pioneer through post-ChatGPT. A bet held mostly
                  by post-ChatGPT entrants is in a different epistemic
                  state from one held by pre-deep-learning veterans.
                </p>
              </div>
            );
          })()}
        </section>
      )}

      <section>
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            People on the record.
          </h2>
          <span className="num-label">{adherents.length}</span>
        </div>
        {adherents.length === 0 && (
          <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
            No quotes catalogued yet for this tag.
          </p>
        )}
        <div className="space-y-12">
          {adherents.map((p) => {
            const positions = p.positions.filter((pos) => pos.strategyId === id);
            return (
              <div key={p.id}>
                <div className="flex items-start gap-4 mb-2">
                  <Link className="unstyled" href={`/people/${p.id}`}>
                    <PersonAvatar person={p} size={56} />
                  </Link>
                  <div className="flex-1 flex items-baseline justify-between gap-3 flex-wrap">
                    <div>
                      <h3
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <Link className="unstyled hover:underline" href={`/people/${p.id}`}>
                          {p.name}
                        </Link>
                      </h3>
                      {p.tagline && (
                        <p className="text-xs italic mt-1" style={{ color: "var(--color-ink-soft)" }}>
                          {p.tagline}
                        </p>
                      )}
                    </div>
                    {positions[0] && (
                      <span className="num-label">{positions[0].stance}</span>
                    )}
                  </div>
                </div>
                {positions.map((pos, i) => (
                  <div key={i} className="mb-4">
                    <p className="mb-3 text-base">{pos.summary}</p>
                    <div className="space-y-4">
                      {pos.quotes.map((q, qi) => (
                        <QuoteBlock key={qi} quote={q} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}

function SnapshotStat({
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
