import Link from "next/link";
import { notFound } from "next/navigation";
import { strategyTags, getTagById } from "@/lib/strategy-tags";
import { peopleByStrategyTag, people as allPeople } from "@/lib/people";
import { QuoteBlock } from "@/components/QuoteBlock";
import { HoverFaceLink } from "@/components/HoverFaceLink";
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
    title: `${t.name} · AGI Strategies`,
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
  // Stated endorser: has at least one non-tentative endorsing position on
  // this tag. Tentative-only adherents are surfaced separately so the
  // headline counts don't inflate from passing remarks.
  const isStatedEndorser = (p: typeof adherents[number]) =>
    p.positions.some(
      (pos) =>
        pos.strategyId === id &&
        ENDORSING_STANCES.has(pos.stance) &&
        !pos.tentative,
    );
  const isTentativeEndorser = (p: typeof adherents[number]) =>
    !isStatedEndorser(p) &&
    p.positions.some(
      (pos) =>
        pos.strategyId === id &&
        ENDORSING_STANCES.has(pos.stance) &&
        pos.tentative,
    );
  const endorsers = adherents.filter(isStatedEndorser);
  const tentativeEndorsers = adherents.filter(isTentativeEndorser);
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

  // Endorser p(doom) summary, only first claim per person, mid-point of any
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
  // the field treats as compatible, independent of the declared conflicts
  // map. Built only from stated positive stances on both sides; tentative
  // tags would otherwise pad the pairing with assignments we don't stand
  // behind.
  const coCounts = new Map<string, number>();
  for (const p of endorsers) {
    const heldTags = new Set(
      p.positions
        .filter((pos) => ENDORSING_STANCES.has(pos.stance) && !pos.tentative)
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
            label="stated endorsers"
            value={endorsers.length.toString()}
            sub={
              tentativeEndorsers.length > 0
                ? `+${tentativeEndorsers.length} tentative · ${opposers.length} oppose`
                : opposers.length > 0
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
              value="·"
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
            Inclusion is not endorsement of the position, it&apos;s recognition
            of who the discourse turns to when the bet is debated.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {principalVoices.map((p) => (
              <li
                key={p.id}
                className="flex flex-col items-center text-center border hairline p-3 hover:border-[var(--color-ink)] transition-colors h-full"
              >
                <HoverFaceLink person={p} size={56} placement="below" />
                <span className="mt-2">
                  <HoverFaceLink person={p} placement="below">
                    <span
                      className="text-sm leading-tight hover:underline"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.name}
                    </span>
                  </HoverFaceLink>
                </span>
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
            signal of compatibility, not a declared rule. A high share
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
            doesn&apos;t name yet, the{" "}
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
                  formed, pioneer through post-ChatGPT. A bet held mostly
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
          <span className="num-label">
            {adherents.length}
            {tentativeEndorsers.length > 0 && (
              <span style={{ color: "var(--color-ink-soft)" }}>
                {" · "}
                {tentativeEndorsers.length} tentative
              </span>
            )}
          </span>
        </div>
        {adherents.length === 0 && (
          <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
            No quotes catalogued yet for this tag.
          </p>
        )}
        {(() => {
          const isTentativeForTag = (p: typeof adherents[number]) =>
            p.positions
              .filter((pos) => pos.strategyId === id)
              .every((pos) => pos.tentative);
          const PERSON_RENDER_CAP = 80;
          const statedAll = adherents
            .filter((p) => !isTentativeForTag(p))
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));
          const stated = statedAll.slice(0, PERSON_RENDER_CAP);
          const statedRemaining = statedAll.length - stated.length;
          const tentativeAll = adherents
            .filter(isTentativeForTag)
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));
          const tentative = tentativeAll.slice(0, PERSON_RENDER_CAP);
          const tentativeRemaining = tentativeAll.length - tentative.length;

          const renderPerson = (p: typeof adherents[number]) => {
            const positions = p.positions.filter((pos) => pos.strategyId === id);
            const allTentative = positions.every((pos) => pos.tentative);
            return (
              <div
                key={p.id}
                style={
                  allTentative
                    ? {
                        borderLeft: "2px dashed var(--color-rule)",
                        paddingLeft: "1rem",
                        opacity: 0.85,
                      }
                    : undefined
                }
              >
                <div className="flex items-start gap-4 mb-2">
                  <HoverFaceLink person={p} size={56} placement="right" />
                  <div className="flex-1 flex items-baseline justify-between gap-3 flex-wrap">
                    <div>
                      <h3
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <HoverFaceLink person={p} placement="below">
                          <span className="hover:underline">{p.name}</span>
                        </HoverFaceLink>
                      </h3>
                      {p.tagline && (
                        <p className="text-xs italic mt-1" style={{ color: "var(--color-ink-soft)" }}>
                          {p.tagline}
                        </p>
                      )}
                    </div>
                    {positions[0] && (
                      <span className="num-label flex items-center gap-2">
                        {positions[0].stance}
                        {allTentative && (
                          <span
                            title="Assignment inferred from a passing remark, not a clear position statement"
                            style={{
                              border: "1px solid var(--color-rule)",
                              borderStyle: "dashed",
                              padding: "0 5px",
                              fontSize: "0.55rem",
                              color: "var(--color-ink-soft)",
                            }}
                          >
                            tentative
                          </span>
                        )}
                      </span>
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
          };

          return (
            <>
              <div className="space-y-12">{stated.map(renderPerson)}</div>
              {statedRemaining > 0 && (
                <p
                  className="text-sm italic mt-8 max-w-3xl"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  {statedRemaining} more on the record. The page renders the
                  first {stated.length} alphabetically; the rest live in the{" "}
                  <Link href="/people" className="underline-wiggle">
                    full directory
                  </Link>
                  , filterable by this tag.
                </p>
              )}
              {tentative.length > 0 && (
                <>
                  <div
                    className="my-10 border-t hairline pt-6 max-w-3xl"
                    style={{ borderTopStyle: "dashed" }}
                  >
                    <p
                      className="num-label mb-2"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      tentative · {tentativeAll.length}
                    </p>
                    <p
                      className="text-xs italic"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      Below are entries flagged tentative: assignments
                      inferred from a passing remark, hype quote, or paper
                      abstract rather than a clear strategy statement. Shown
                      in dashed cards so a stronger primary source can
                      replace them later.
                    </p>
                  </div>
                  <div className="space-y-12">{tentative.map(renderPerson)}</div>
                  {tentativeRemaining > 0 && (
                    <p
                      className="text-sm italic mt-8 max-w-3xl"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {tentativeRemaining} more tentative entries not shown.
                    </p>
                  )}
                </>
              )}
            </>
          );
        })()}
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
