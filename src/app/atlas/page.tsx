import Link from "next/link";
import { strategies, strategiesByLever, symmetricConflicts } from "@/lib/strategies";
import { levers } from "@/data/levers";
import { StrategyCard } from "@/components/StrategyCard";
import { LeverField } from "@/components/LeverField";
import { HoverFaceLink } from "@/components/HoverFaceLink";
import { tagsForStrategyId } from "@/data/strategy-tag-bridge";
import { peopleByStrategyTag } from "@/lib/people";
import {
  expertiseTiers,
  recognitionRank,
} from "@/data/profile-tiers";
import type { ExpertiseTier, Person } from "@/lib/people-types";

// Stances that count as "live endorsement" of a strategy. evolved-away and
// opposes deliberately excluded — counting them would conflate the people
// arguing against a position with the people arguing for it.
const ENDORSING_STANCES = new Set([
  "endorses",
  "mixed",
  "conditional",
  "evolved-toward",
]);

function profiledEndorsers(strategyId: string) {
  const tags = tagsForStrategyId(strategyId);
  const ids = new Set<string>();
  const profiled: { id: string; tier: ExpertiseTier; person: Person }[] = [];
  for (const t of tags) {
    for (const p of peopleByStrategyTag(t)) {
      if (ids.has(p.id) || !p.profile) continue;
      const matched = p.positions.find(
        (pos) => pos.strategyId === t && ENDORSING_STANCES.has(pos.stance),
      );
      if (!matched) continue;
      ids.add(p.id);
      profiled.push({ id: p.id, tier: p.profile.expertise, person: p });
    }
  }
  return profiled;
}

export default function HomePage() {
  const byLever = strategiesByLever();
  const conflictPairs = symmetricConflicts();
  const leverClassCounts = {
    aiSide: 0,
    worldSide: 0,
    mixed: 0,
  };
  for (const s of strategies) {
    const lever = levers.find((l) => l.id === s.primaryLever);
    if (lever?.class === "ai-side") leverClassCounts.aiSide++;
    else if (lever?.class === "world-side") leverClassCounts.worldSide++;
    else leverClassCounts.mixed++;
  }
  const conflictLevers = new Set<string>();
  for (const lever of levers) {
    const list = byLever[lever.id] || [];
    const up = list.some((s) => s.leverDirection === "+");
    const down = list.some((s) => s.leverDirection === "-");
    if (up && down) conflictLevers.add(lever.id);
  }
  const leversWithPulls = levers.filter((l) => (byLever[l.id]?.length ?? 0) > 0);

  // Profile concentration per strategy. A strategy with ≥4 profiled endorsers
  // gets surfaced in the consensus reading; below that the signal is too noisy.
  type Skew = {
    strategy: (typeof strategies)[number];
    total: number;
    counts: Record<ExpertiseTier, number>;
    dominant: ExpertiseTier;
    dominantShare: number;
    // Top faces ranked by recognition then quote count, used for the
    // visual face strip — the merge with the people view.
    topFaces: Person[];
    primaryTagId: string;
  };
  const skews: Skew[] = [];
  for (const s of strategies) {
    const endorsers = profiledEndorsers(s.id);
    if (endorsers.length < 4) continue;
    const counts: Record<ExpertiseTier, number> = {
      "frontier-builder": 0,
      "deep-technical": 0,
      "applied-technical": 0,
      "policy-meta": 0,
      "external-domain": 0,
      commentator: 0,
    };
    for (const e of endorsers) counts[e.tier]++;
    let dominant: ExpertiseTier = "deep-technical";
    let max = -1;
    for (const k of Object.keys(counts) as ExpertiseTier[]) {
      if (counts[k] > max) {
        max = counts[k];
        dominant = k;
      }
    }
    const sortedFaces = endorsers
      .slice()
      .sort((a, b) => {
        const ra = recognitionRank[a.person.profile!.recognition];
        const rb = recognitionRank[b.person.profile!.recognition];
        if (ra !== rb) return rb - ra;
        const qa = a.person.positions.reduce(
          (acc, pos) => acc + pos.quotes.length,
          0,
        );
        const qb = b.person.positions.reduce(
          (acc, pos) => acc + pos.quotes.length,
          0,
        );
        return qb - qa;
      })
      .slice(0, 6)
      .map((e) => e.person);
    const tags = tagsForStrategyId(s.id);
    skews.push({
      strategy: s,
      total: endorsers.length,
      counts,
      dominant,
      dominantShare: max / endorsers.length,
      topFaces: sortedFaces,
      primaryTagId: tags[0] ?? s.id,
    });
  }
  const builderHeavy = skews
    .filter(
      (sk) =>
        (sk.counts["frontier-builder"] + sk.counts["deep-technical"]) /
          sk.total >=
        0.6,
    )
    .sort((a, b) => b.total - a.total);
  const commentaryHeavy = skews
    .filter(
      (sk) =>
        (sk.counts.commentator + sk.counts["external-domain"]) / sk.total >=
        0.5,
    )
    .sort((a, b) => b.total - a.total);
  const policyHeavy = skews
    .filter((sk) => sk.counts["policy-meta"] / sk.total >= 0.4)
    .sort((a, b) => b.total - a.total);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">overview</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A map of AI safety macrostrategies.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          Each strategy is a bet about which failure mode binds — which one
          actually gates a good outcome. The survey catalogues{" "}
          <strong style={{ color: "var(--color-ink)" }}>{strategies.length}</strong>{" "}
          named bets, the{" "}
          <strong style={{ color: "var(--color-ink)" }}>{levers.length}</strong>{" "}
          levers they pull, and which combinations compose or conflict.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Two strategies conflict only when they pull the same lever in
          opposite directions — which is rare. Most pairs compose.
          Most <em>public</em> proposals combine three or four levers without
          stating which bet is load-bearing; the{" "}
          <Link className="underline-wiggle" href="/portfolio">
            portfolio audit
          </Link>{" "}
          exposes that concealed concentration.
        </p>
      </section>

      <section className="mb-12">
        <LeverField strategies={strategies} levers={levers} />
        <p
          className="text-xs italic mt-3 max-w-3xl"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Each dot is one strategy. Rows are levers. A lever with dots on
          both sides is a real conflict surface — any portfolio with
          strategies from both sides contradicts itself on that lever.
          Lonely dots name under-explored positions. Click any dot to open
          the strategy.
        </p>
      </section>

      <section className="mb-14 grid sm:grid-cols-2 md:grid-cols-5 gap-4">
        <Stat
          label="Strategies catalogued"
          value={strategies.length.toString()}
          sub="each a bet about what binds"
        />
        <Stat
          label="Levers they pull"
          value={leversWithPulls.length.toString()}
          sub={`of ${levers.length} distinct types`}
        />
        <Stat
          label="Conflict pairs"
          value={conflictPairs.size.toString()}
          sub={`across ${conflictLevers.size} levers with real two-sided pull`}
        />
        <Stat
          label="World-side strategies"
          value={`${Math.round((leverClassCounts.worldSide / strategies.length) * 100)}%`}
          sub="act on institutions, culture, substrate — not the model"
        />
        <Stat
          label="Total unordered pairs"
          value={((strategies.length * (strategies.length - 1)) / 2).toLocaleString()}
          sub="most compose; few actually conflict"
        />
      </section>

      <section className="mb-10">
        <div className="border-t-2 border-[var(--color-ink)] pt-6">
          <h2
            className="text-2xl mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What&apos;s here.
          </h2>
          <p className="text-sm max-w-3xl mb-6" style={{ color: "var(--color-ink-soft)" }}>
            Seven ways to enter the survey. Start where the question is yours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <EntryCard
            href="/scenarios"
            title="Start from a failure mode"
            body="Pick a concrete fear — decisive advantage, eval abandonment, accumulative erosion — and see which strategies are responsive."
            marker="9"
          />
          <EntryCard
            href="/levers"
            title="The levers"
            body="Browse by lever. See which are crowded, which are thin."
            marker={`${levers.length}`}
          />
          <EntryCard
            href="/matrix"
            title="Combination matrix"
            body="Every pair, named by mechanism. Lever opposition, cross-side bridge, stage-sequenced."
            marker={`${strategies.length}²`}
          />
          <EntryCard
            href="/portfolio"
            title="Portfolio audit"
            body="Load a proposal. See its lever footprint and hidden concentration."
            marker="tool"
          />
          <EntryCard
            href="/compare"
            title="Compare two"
            body="Pick two strategies. See who endorses each, the tier mix of endorsers, and where the disagreement lives."
            marker="A↔B"
          />
          <EntryCard
            href="/co-strategies"
            title="Co-endorsement"
            body="Strategy pairs the same people actually hold together. Behavioural data, not declared rules. Shows where the catalogue and the corpus disagree."
            marker="data"
          />
          <EntryCard
            href="/axes"
            title="Axes and density"
            body="Strategies mapped across actor, coercion, horizon, legitimacy. Density map for sparse vs saturated regions."
            marker="5+1"
          />
          <EntryCard
            href="/commitments"
            title="Commitments"
            body="The worldview assumptions each strategy quietly rests on. What fails if the assumption is wrong."
            marker="7 topics"
          />
          <EntryCard
            href="/identity"
            title="Bet or identity?"
            body="Diagnostic for telling whether a strategy is held as a falsifiable bet or as an identity marker. Includes the catalogued falsification signals."
            marker="diag"
          />
          <EntryCard
            href="/strategy/resilience-first"
            title="A strategy page"
            body="The artefact for each strategy: bet, mechanism, successor, falsification, commitments, scenarios addressed, mechanism-grouped relations."
            marker="per"
          />
        </div>
      </section>

      <section className="mb-14 border-t-2 border-[var(--color-ink)] pt-6">
        <p className="num-label mb-3">a walking tour</p>
        <h2
          className="text-2xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          If you want one path through the survey.
        </h2>
        <ol className="space-y-3 text-sm max-w-3xl" style={{ color: "var(--color-ink)" }}>
          <li>
            <span className="num-label mr-2">01</span>
            Start with a failure mode you actually fear — pick one at{" "}
            <Link className="underline-wiggle" href="/scenarios">scenarios</Link>.
            See which strategies are catalogued as responsive.
          </li>
          <li>
            <span className="num-label mr-2">02</span>
            Open the top candidate. Read the bet, mechanism, and{" "}
            <em>what binds next</em> if it succeeds. Does its successor
            problem scare you more than the original?
          </li>
          <li>
            <span className="num-label mr-2">03</span>
            Check the falsification signal and self-undermining threshold.
            Would the advocate community update if the signal landed?
            Where does pursuit overshoot into the unstable region?
          </li>
          <li>
            <span className="num-label mr-2">04</span>
            Walk the complements by mechanism. Cross-side bridges reduce
            lever concentration; stage-sequenced pairs extend time coverage.
          </li>
          <li>
            <span className="num-label mr-2">05</span>
            Return here, load the portfolio you are building into the{" "}
            <Link className="underline-wiggle" href="/portfolio">audit</Link>.
            See which levers it misses and which strategies double-count.
          </li>
        </ol>
      </section>

      {skews.length > 0 && (
        <section className="mt-16 border-t hairline pt-10">
          <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6">
            <h2
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Where the consensus lives.
            </h2>
            <Link href="/board" className="underline-wiggle text-sm">
              the board →
            </Link>
          </div>
          <p className="text-sm mb-8 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
            For each strategy with at least four profiled endorsers, who actually
            holds it. A strategy held mostly by frontier-builders is in a
            different epistemic state from one held mostly by commentators.
            Counts are over the {skews.length} strategies that meet the bar.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <SkewColumn
              label="Builder-heavy"
              caption="Endorsement is ≥60% frontier-builder + deep-technical"
              items={builderHeavy}
            />
            <SkewColumn
              label="Policy-heavy"
              caption="Endorsement is ≥40% policy / meta"
              items={policyHeavy}
            />
            <SkewColumn
              label="Commentary-heavy"
              caption="Endorsement is ≥50% commentator + external-domain"
              items={commentaryHeavy}
            />
          </div>
        </section>
      )}

      <section className="mt-16 border-t hairline pt-10">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            By lever
          </h2>
          <Link href="/levers" className="underline-wiggle text-sm">
            lever reference →
          </Link>
        </div>
        <p className="text-sm mb-8 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
          Each lever is a kind of action a strategy takes. Strategies grouped
          on the same lever either reinforce (same direction) or conflict
          (opposite direction).
        </p>
        <div className="space-y-10">
          {levers.map((lever) => {
            const list = byLever[lever.id] || [];
            if (list.length === 0) return null;
            const up = list.filter((s) => s.leverDirection === "+");
            const down = list.filter((s) => s.leverDirection === "-");
            const neutral = list.filter((s) => s.leverDirection === "neutral");
            return (
              <div key={lever.id}>
                <div className="flex items-baseline justify-between mb-2">
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Link className="unstyled hover:underline" href={`/levers/${lever.id}`}>
                      {lever.name}
                    </Link>
                  </h3>
                  <span className="num-label">
                    {list.length} · {lever.class.replace("-", " ")}
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--color-ink-soft)" }}>
                  {lever.description}
                </p>
                {up.length > 0 && (
                  <LeverRow
                    label={`${lever.positivePull} (${up.length})`}
                    items={up}
                    direction="+"
                  />
                )}
                {down.length > 0 && (
                  <LeverRow
                    label={`${lever.negativePull} (${down.length})`}
                    items={down}
                    direction="-"
                  />
                )}
                {neutral.length > 0 && (
                  <LeverRow
                    label={`Neutral (${neutral.length})`}
                    items={neutral}
                    direction="neutral"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function SkewColumn({
  label,
  caption,
  items,
}: {
  label: string;
  caption: string;
  items: {
    strategy: (typeof strategies)[number];
    total: number;
    dominant: ExpertiseTier;
    dominantShare: number;
    topFaces: Person[];
    primaryTagId: string;
  }[];
}) {
  return (
    <div>
      <p className="num-label mb-2">{label}</p>
      <p className="text-xs italic mb-3" style={{ color: "var(--color-ink-soft)" }}>
        {caption}
      </p>
      {items.length === 0 ? (
        <p className="text-xs italic" style={{ color: "var(--color-ink-soft)" }}>
          No strategies meet the threshold yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {items.slice(0, 6).map((sk) => {
            const tier = expertiseTiers.find((t) => t.id === sk.dominant);
            // Strategy name + meta inside a Link; faces outside the
            // Link so each face's own link handles navigation cleanly
            // (nested anchors are invalid HTML).
            return (
              <li
                key={sk.strategy.id}
                className="border-l-2 hairline pl-3 py-1.5 hover:border-[var(--color-ink)] transition-colors"
              >
                <Link
                  href={`/strategy/${sk.strategy.id}`}
                  className="unstyled block"
                >
                  <p
                    className="text-sm leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {sk.strategy.name}
                  </p>
                  <p
                    className="text-[10px] mt-0.5 mb-1.5"
                    style={{
                      color: "var(--color-ink-soft)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {tier?.short} · {Math.round(sk.dominantShare * 100)}% of{" "}
                    {sk.total}
                  </p>
                </Link>
                {sk.topFaces.length > 0 && (
                  <ul className="flex flex-wrap gap-1">
                    {sk.topFaces.map((p) => (
                      <li key={p.id}>
                        <HoverFaceLink person={p} size={20} placement="below" />
                      </li>
                    ))}
                    {sk.total > sk.topFaces.length && (
                      <li
                        className="num-label"
                        style={{
                          alignSelf: "center",
                          color: "var(--color-ink-soft)",
                          marginLeft: 2,
                        }}
                      >
                        +{sk.total - sk.topFaces.length}
                      </li>
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function LeverRow({
  label,
  items,
  direction,
}: {
  label: string;
  items: ReturnType<typeof strategies.slice>;
  direction: "+" | "-" | "neutral";
}) {
  return (
    <div className="mb-3">
      <div className="num-label mb-2">
        {direction === "+" ? "↑ " : direction === "-" ? "↓ " : "• "}
        {label}
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <StrategyCard key={s.id} strategy={s} compact />
        ))}
      </div>
    </div>
  );
}

function EntryCard({
  href,
  title,
  body,
  marker,
}: {
  href: string;
  title: string;
  body: string;
  marker?: string;
}) {
  return (
    <Link href={href} className="unstyled">
      <div className="border hairline rounded-sm p-4 hover:border-[var(--color-ink)] transition-colors h-full flex flex-col">
        <div className="flex items-baseline justify-between mb-2">
          <h3
            className="text-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          {marker && <span className="num-label">{marker}</span>}
        </div>
        <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {body}
        </p>
      </div>
    </Link>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border hairline p-4">
      <p className="num-label mb-2">{label}</p>
      <p
        className="text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
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
