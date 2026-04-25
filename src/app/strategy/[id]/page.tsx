import Link from "next/link";
import { notFound } from "next/navigation";
import { getStrategy, strategies } from "@/lib/strategies";
import { leverById } from "@/data/levers";
import { axes } from "@/data/axes";
import { DirectionGlyph } from "@/components/DirectionGlyph";
import {
  mechanismForPair,
  mechanismCatalogue,
} from "@/lib/mechanism";
import type { Strategy } from "@/lib/types";
import { commitmentsByStrategy, commitmentTopics } from "@/data/commitments";
import { postSuccessByStrategy } from "@/data/postSuccess";
import { falsificationByStrategy } from "@/data/falsification";
import { scenarios } from "@/data/scenarios";
import { vintagesByStrategy } from "@/data/vintages";
import { selfUnderminingByStrategy } from "@/data/selfUndermining";
import { analogueByStrategy, analogueDomainLabel } from "@/data/analogues";
import { tagsForStrategyId } from "@/data/strategy-tag-bridge";
import { peopleByStrategyTag } from "@/lib/people";
import { PersonAvatar } from "@/components/PersonAvatar";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";

export function generateStaticParams() {
  return strategies.map((s) => ({ id: s.id }));
}

export default async function StrategyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const strategy = getStrategy(id);
  if (!strategy) notFound();

  const lever = leverById[strategy.primaryLever];

  const conflicts = strategy.conflictsWith
    .map((cid) => getStrategy(cid))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const complements = strategy.complementsWith
    .map((cid) => getStrategy(cid))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Same-lever twins: not explicit complements, but share the same lever and
  // direction. These are portfolio-level redundancies worth surfacing.
  const twins = strategies.filter(
    (s) =>
      s.id !== strategy.id &&
      s.primaryLever === strategy.primaryLever &&
      s.leverDirection === strategy.leverDirection &&
      !strategy.complementsWith.includes(s.id) &&
      !strategy.conflictsWith.includes(s.id)
  );

  // Group conflicts and complements by mechanism so the reader sees *how*
  // each pair relates, not just that it relates.
  const conflictGroups = groupByMechanism(strategy, conflicts, "conflict");
  const complementGroups = groupByMechanism(
    strategy,
    complements,
    "complement"
  );

  const scenariosAddressed = scenarios.filter((sc) =>
    sc.responsive.includes(strategy.id)
  );

  const peopleTags = tagsForStrategyId(strategy.id);
  const peopleOnRecordSet = new Map<string, ReturnType<typeof peopleByStrategyTag>[number]>();
  for (const t of peopleTags) {
    for (const p of peopleByStrategyTag(t)) {
      if (!peopleOnRecordSet.has(p.id)) peopleOnRecordSet.set(p.id, p);
    }
  }
  const peopleOnRecord = Array.from(peopleOnRecordSet.values()).sort((a, b) => {
    const aProfiled = a.profile ? 1 : 0;
    const bProfiled = b.profile ? 1 : 0;
    if (aProfiled !== bProfiled) return bProfiled - aProfiled;
    return a.name.localeCompare(b.name);
  });

  const sections: { id: string; label: string }[] = [
    { id: "mechanism", label: "Mechanism" },
  ];
  if (vintagesByStrategy[strategy.id])
    sections.push({ id: "vintage", label: "Vintage" });
  if (postSuccessByStrategy[strategy.id])
    sections.push({ id: "post-success", label: "If it succeeds" });
  if (falsificationByStrategy[strategy.id])
    sections.push({ id: "falsification", label: "Falsification" });
  if (selfUnderminingByStrategy[strategy.id])
    sections.push({ id: "self-undermining", label: "Overshoot" });
  if (analogueByStrategy[strategy.id])
    sections.push({ id: "analogue", label: "Analogue" });
  if (scenariosAddressed.length > 0)
    sections.push({ id: "scenarios", label: "Scenarios" });
  if (peopleOnRecord.length > 0)
    sections.push({ id: "people", label: "People on the record" });
  sections.push({ id: "coordinates", label: "Coordinates" });
  if (conflictGroups.length > 0) sections.push({ id: "conflicts", label: "Conflicts" });
  if (complementGroups.length > 0)
    sections.push({ id: "complements", label: "Complements" });
  if (twins.length > 0) sections.push({ id: "twins", label: "Twins" });
  if ((commitmentsByStrategy[strategy.id] || []).length > 0)
    sections.push({ id: "commitments", label: "Commitments" });
  sections.push({ id: "axis", label: "Axes" });

  return (
    <article className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/" className="num-label inline-block mb-6 hover:underline">
        ← overview
      </Link>

      <header className="mb-8">
        <p className="num-label mb-1">
          {lever?.name} {" "}
          <DirectionGlyph direction={strategy.leverDirection} />{" "}
          · {strategy.actsOn.replace(/-/g, " ")}
        </p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {strategy.name}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink)" }}>
          {strategy.bet}
        </p>
      </header>

      <nav
        className="mb-10 border-y hairline py-3 flex flex-wrap gap-x-4 gap-y-2 text-xs"
        style={{ fontFamily: "var(--font-ui)" }}
        aria-label="On-page navigation"
      >
        <span className="num-label">on this page</span>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="unstyled hover:underline"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {s.label}
          </a>
        ))}
      </nav>

      <section id="mechanism" className="mb-8">
        <h2 className="num-label mb-2">Mechanism</h2>
        <p className="leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          {strategy.mechanism}
        </p>
      </section>

      {vintagesByStrategy[strategy.id] && (
        <section id="vintage" className="mb-10 border-t hairline pt-6 scroll-mt-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="num-label">What this name has meant</h2>
            <span className="num-label opacity-60">vintage drift</span>
          </div>
          <p className="text-sm mb-4" style={{ color: "var(--color-ink-soft)" }}>
            The name is stable; the content has shifted. A reader acting on
            the label without asking which vintage is being meant risks
            arguing with a position nobody currently holds.
          </p>
          <div className="space-y-2">
            {vintagesByStrategy[strategy.id].map((v, i) => (
              <div
                key={i}
                className="grid grid-cols-[80px_1fr] gap-4 border-b hairline py-2"
              >
                <span
                  className="num-label"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
                >
                  {v.period}
                </span>
                <p className="text-sm">{v.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {postSuccessByStrategy[strategy.id] && (
        <section id="post-success" className="mb-10 border-l-2 pl-5 py-2 scroll-mt-8" style={{ borderColor: "var(--color-accent)" }}>
          <h2 className="num-label mb-2">If it succeeds — what binds next</h2>
          <p className="leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            {postSuccessByStrategy[strategy.id]}
          </p>
          <p
            className="text-xs italic mt-2"
            style={{ color: "var(--color-ink-soft)" }}
          >
            A strategy that produces a worse next problem than the one it
            solved has not done durable work.
          </p>
        </section>
      )}

      {falsificationByStrategy[strategy.id] && (
        <section id="falsification" className="mb-10 border-l-2 pl-5 py-2 scroll-mt-8" style={{ borderColor: "var(--color-conflict)" }}>
          <h2 className="num-label mb-2">Falsification signal</h2>
          <p className="leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            {falsificationByStrategy[strategy.id]}
          </p>
          <p
            className="text-xs italic mt-2"
            style={{ color: "var(--color-ink-soft)" }}
          >
            A strategy held without a falsification signal is not strategy —
            it is affiliation. Continued support after this signal lands is
            identity, not bet.{" "}
            <Link href="/identity" className="underline-wiggle">
              See the identity diagnostic.
            </Link>
          </p>
        </section>
      )}

      {selfUnderminingByStrategy[strategy.id] && (
        <section id="self-undermining" className="mb-10 border-l-2 pl-5 py-2 scroll-mt-8" style={{ borderColor: "var(--color-link)" }}>
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="num-label">Self-undermining threshold</h2>
            <span className="num-label opacity-60">overshoot risk</span>
          </div>
          <p className="text-sm mb-2" style={{ color: "var(--color-ink)" }}>
            <strong>{selfUnderminingByStrategy[strategy.id].threshold}</strong>
          </p>
          <p className="leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            {selfUnderminingByStrategy[strategy.id].mechanism}
          </p>
          <p
            className="text-xs italic mt-2"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Every strategy has a stable region where it reinforces itself and
            an unstable region where pursuit defeats it. The threshold
            between them is usually narrower than advocates acknowledge.
          </p>
        </section>
      )}

      {analogueByStrategy[strategy.id] && (
        <section id="analogue" className="mb-10 border-t hairline pt-6 scroll-mt-8">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="num-label">Historical analogue</h2>
            <span className="num-label opacity-60">
              {analogueDomainLabel[analogueByStrategy[strategy.id].domain]} ·{" "}
              {analogueByStrategy[strategy.id].regime}
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: "var(--color-ink-soft)" }}>
            Every strategy inherits a plausible ceiling from its precedent.
            The analogue conditions the realistic reach.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="border hairline p-3">
              <p className="num-label mb-1" style={{ color: "var(--color-complement)" }}>
                Produced
              </p>
              <p className="text-sm">{analogueByStrategy[strategy.id].produced}</p>
            </div>
            <div className="border hairline p-3">
              <p className="num-label mb-1" style={{ color: "var(--color-conflict)" }}>
                Did not produce
              </p>
              <p className="text-sm">{analogueByStrategy[strategy.id].failed}</p>
            </div>
          </div>
        </section>
      )}

      {scenariosAddressed.length > 0 && (
        <section id="scenarios" className="mb-10 border-t hairline pt-6 scroll-mt-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="num-label">
              Addresses {scenariosAddressed.length} failure{" "}
              {scenariosAddressed.length === 1 ? "scenario" : "scenarios"}
            </h2>
            <Link href="/scenarios" className="num-label underline-wiggle">
              all scenarios →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {scenariosAddressed.map((sc) => (
              <Link
                key={sc.id}
                href={`/scenarios#${sc.id}`}
                className="chip"
                title={sc.description}
              >
                {sc.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {peopleOnRecord.length > 0 && (
        <section id="people" className="mb-10 border-t hairline pt-6 scroll-mt-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="num-label">People on the record</h2>
            <span className="num-label opacity-60">
              {peopleOnRecord.length}
            </span>
          </div>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-soft)" }}>
            Profiled figures appear first, with their tier in small caps. Each
            face links to the person and their full quote record.{" "}
            {peopleTags.length > 1 ? (
              <>
                Aggregates positions tagged{" "}
                {peopleTags.map((t, i) => (
                  <span key={t}>
                    <code className="text-xs">{t}</code>
                    {i < peopleTags.length - 1 ? ", " : ""}
                  </span>
                ))}
                .
              </>
            ) : peopleTags.length === 1 ? (
              <>
                Tag: <code className="text-xs">{peopleTags[0]}</code>.
              </>
            ) : null}
          </p>

          {(() => {
            const profiledOnly = peopleOnRecord.filter((p) => p.profile);
            if (profiledOnly.length < 3) return null;
            const expCounts = expertiseTiers.map((t) => ({
              tier: t,
              count: profiledOnly.filter((p) => p.profile!.expertise === t.id).length,
            }));
            const recCounts = recognitionTiers.map((t) => ({
              tier: t,
              count: profiledOnly.filter((p) => p.profile!.recognition === t.id)
                .length,
            }));
            const expMax = Math.max(...expCounts.map((c) => c.count), 1);
            const recMax = Math.max(...recCounts.map((c) => c.count), 1);
            return (
              <div className="grid sm:grid-cols-2 gap-4 mb-6 border hairline p-4" style={{ background: "var(--color-parchment-soft)" }}>
                <div>
                  <p className="num-label mb-2">expertise mix · {profiledOnly.length} profiled</p>
                  <div className="space-y-1.5">
                    {expCounts.map(({ tier, count }) => (
                      <div key={tier.id} className="flex items-center gap-2 text-xs">
                        <span style={{ width: 110, color: "var(--color-ink-soft)" }}>{tier.short}</span>
                        <div className="flex-1 h-2.5" style={{ background: "var(--color-rule)" }}>
                          <div
                            style={{
                              width: `${(count / expMax) * 100}%`,
                              height: "100%",
                              background: "var(--color-accent)",
                            }}
                          />
                        </div>
                        <span className="num-label" style={{ width: 24, textAlign: "right" }}>{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="num-label mb-2">recognition mix</p>
                  <div className="space-y-1.5">
                    {recCounts.map(({ tier, count }) => (
                      <div key={tier.id} className="flex items-center gap-2 text-xs">
                        <span style={{ width: 110, color: "var(--color-ink-soft)" }}>{tier.short}</span>
                        <div className="flex-1 h-2.5" style={{ background: "var(--color-rule)" }}>
                          <div
                            style={{
                              width: `${(count / recMax) * 100}%`,
                              height: "100%",
                              background: "var(--color-accent)",
                            }}
                          />
                        </div>
                        <span className="num-label" style={{ width: 24, textAlign: "right" }}>{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] italic sm:col-span-2" style={{ color: "var(--color-ink-soft)" }}>
                  A strategy whose endorsement skews to commentators or external-domain experts is in a different epistemic state from one endorsed mostly by frontier-builders. The mix is read carefully across both axes — see <Link href="/board" className="underline-wiggle">the board</Link> for criteria. Counts are over the {profiledOnly.length} profiled people on this strategy ({peopleOnRecord.length - profiledOnly.length} unprofiled excluded).
                </p>
              </div>
            );
          })()}

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {peopleOnRecord.slice(0, 36).map((p) => {
              const expertise = expertiseTiers.find(
                (t) => t.id === p.profile?.expertise,
              );
              const recognition = recognitionTiers.find(
                (t) => t.id === p.profile?.recognition,
              );
              return (
                <li key={p.id}>
                  <Link
                    href={`/people/${p.id}`}
                    className="unstyled flex items-start gap-3 border hairline p-2.5 hover:border-[var(--color-ink)] transition-colors h-full"
                  >
                    <PersonAvatar person={p} size={40} />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm leading-tight"
                        style={{
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {p.name}
                      </p>
                      {p.profile ? (
                        <p
                          className="text-[10px] mt-1"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--color-ink-soft)",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                          }}
                        >
                          {expertise?.short} · {recognition?.short}
                        </p>
                      ) : (
                        p.tagline && (
                          <p
                            className="text-xs italic mt-1 truncate"
                            style={{ color: "var(--color-ink-soft)" }}
                            title={p.tagline}
                          >
                            {p.tagline}
                          </p>
                        )
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {peopleOnRecord.length > 36 && (
            <p className="text-xs italic mt-3" style={{ color: "var(--color-ink-soft)" }}>
              {peopleOnRecord.length - 36} more on the record. See the full
              tag page:{" "}
              {peopleTags.map((t, i) => (
                <span key={t}>
                  <Link href={`/strategies/${t}`} className="underline-wiggle">
                    {t}
                  </Link>
                  {i < peopleTags.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          )}
        </section>
      )}

      {commitmentsByStrategy[strategy.id] &&
        commitmentsByStrategy[strategy.id].length > 0 && (
          <section id="commitments" className="mb-10 border-t hairline pt-6 scroll-mt-8">
            <h2 className="num-label mb-3">Load-bearing commitments</h2>
            <p className="text-sm mb-4" style={{ color: "var(--color-ink-soft)" }}>
              Worldview positions this strategy quietly assumes. If the claim
              fails empirically or philosophically, the strategy loses its
              target or its premise.
            </p>
            <div className="space-y-3">
              {commitmentsByStrategy[strategy.id].map((c, i) => {
                const topic = commitmentTopics.find((t) => t.id === c.topic);
                return (
                  <div key={i} className="border hairline p-3">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="num-label">{topic?.name || c.topic}</span>
                    </div>
                    <p className="text-sm mb-1">{c.claim}</p>
                    <p
                      className="text-xs italic"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      Fails if: {c.failureMode}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

      <section id="coordinates" className="mb-10 border-t hairline pt-6 scroll-mt-8">
        <h2 className="num-label mb-3">Coordinates</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Row
            k="Primary lever"
            v={
              <Link className="underline-wiggle" href={`/levers/${lever?.id}`}>
                {lever?.name}{" "}
                <span className="opacity-60">
                  ({strategy.leverDirection === "+"
                    ? lever?.positivePull
                    : strategy.leverDirection === "-"
                    ? lever?.negativePull
                    : "neutral"})
                </span>
              </Link>
            }
          />
          <Row k="Acts on" v={strategy.actsOn.replace(/-/g, " ")} />
          <Row k="Coercion" v={strategy.coercion.replace(/-/g, " ")} />
          <Row k="Actor in control" v={strategy.actorInControl.replace(/-/g, " ")} />
          <Row k="Time horizon" v={strategy.timeHorizon.replace(/-/g, " ")} />
          <Row k="Legitimacy source" v={strategy.legitimacySource.replace(/-/g, " ")} />
        </div>
      </section>

      <section id="conflicts" className="mb-10 border-t hairline pt-6 scroll-mt-8">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="num-label">Conflicts with — by mechanism</h2>
          <span className="num-label opacity-60">{conflicts.length}</span>
        </div>
        {conflictGroups.length === 0 ? (
          <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
            No strict conflicts catalogued. This strategy pulls a lever that
            nothing else pulls in the opposite direction.
          </p>
        ) : (
          <div className="space-y-4">
            {conflictGroups.map((g) => (
              <MechanismGroup key={g.id} group={g} kind="conflict" />
            ))}
          </div>
        )}
      </section>

      <section id="complements" className="mb-10 border-t hairline pt-6 scroll-mt-8">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="num-label">Complements with — by mechanism</h2>
          <span className="num-label opacity-60">{complements.length}</span>
        </div>
        {complementGroups.length === 0 ? (
          <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
            No explicit complements catalogued.
          </p>
        ) : (
          <div className="space-y-4">
            {complementGroups.map((g) => (
              <MechanismGroup key={g.id} group={g} kind="complement" />
            ))}
          </div>
        )}
      </section>

      {twins.length > 0 && (
        <section id="twins" className="mb-10 border-t hairline pt-6 scroll-mt-8">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="num-label">Same-lever twins</h2>
            <span className="num-label opacity-60">{twins.length}</span>
          </div>
          <p className="text-sm mb-3" style={{ color: "var(--color-ink-soft)" }}>
            {mechanismCatalogue.find((m) => m.id === "same-lever-twin")?.explain}
          </p>
          <div className="flex flex-wrap gap-2">
            {twins.map((t) => (
              <Link
                key={t.id}
                href={`/strategy/${t.id}`}
                className="chip"
                title={t.bet}
              >
                {t.name}
                <span className="direction">twin</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section id="axis" className="mb-10 border-t hairline pt-6 scroll-mt-8">
        <h2 className="num-label mb-3">Axis position</h2>
        <div className="space-y-2 text-sm">
          {axes.map((axis) => {
            const selfValueId = (strategy as unknown as Record<string, string>)[
              axisKeyFor(axis.id)
            ];
            const value = axis.values.find((v) => v.id === selfValueId);
            return (
              <div key={axis.id} className="flex gap-3">
                <span className="num-label w-40 shrink-0">{axis.name}</span>
                <span>{value?.name || selfValueId?.replace(/-/g, " ") || "—"}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12 border-t hairline pt-6 text-sm">
        <p style={{ color: "var(--color-ink-soft)" }}>
          Source note: <code className="text-xs">{strategy.filename}</code>
        </p>
      </section>
    </article>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex gap-3 border-b hairline py-2">
      <span className="num-label w-36 shrink-0">{k}</span>
      <span>{v}</span>
    </div>
  );
}

type MechanismGroupData = {
  id: string;
  label: string;
  short: string;
  explain: string;
  items: Strategy[];
};

function groupByMechanism(
  self: Strategy,
  others: Strategy[],
  kind: "conflict" | "complement"
): MechanismGroupData[] {
  const groups = new Map<string, MechanismGroupData>();
  for (const other of others) {
    const m = mechanismForPair(self, other, kind);
    const existing = groups.get(m.id);
    if (existing) {
      existing.items.push(other);
    } else {
      groups.set(m.id, {
        id: m.id,
        label: m.label,
        short: m.short,
        explain: m.explain,
        items: [other],
      });
    }
  }
  return Array.from(groups.values()).sort((a, b) => b.items.length - a.items.length);
}

function MechanismGroup({
  group,
  kind,
}: {
  group: MechanismGroupData;
  kind: "conflict" | "complement";
}) {
  return (
    <div className="border-l-2 pl-4" style={{ borderColor: "var(--color-rule)" }}>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-display)" }}
          title={group.explain}
        >
          {group.label}
        </p>
        <span className="num-label text-[10px]">{group.short}</span>
      </div>
      <p
        className="text-xs mb-2"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {group.explain}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((c) => (
          <Link
            key={c.id}
            href={`/strategy/${c.id}`}
            className={`chip ${
              kind === "conflict" ? "is-conflict" : "is-complement"
            }`}
            title={c.bet}
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function axisKeyFor(axisId: string): string {
  switch (axisId) {
    case "acts-on":
      return "actsOn";
    case "coercion":
      return "coercion";
    case "actor-in-control":
      return "actorInControl";
    case "time-horizon":
      return "timeHorizon";
    case "legitimacy-source":
      return "legitimacySource";
    default:
      return axisId;
  }
}
