import Link from "next/link";
import {
  scenarios,
  adversaryLabel,
  type Scenario,
  type AdversaryClass,
} from "@/data/scenarios";
import { getStrategy, strategies } from "@/lib/strategies";
import { leverById } from "@/data/levers";
import type { Strategy } from "@/lib/types";

export const metadata = {
  title: "Scenarios — AGI Strategies",
};

export default function ScenariosPage() {
  // Cross-scenario robustness: strategies appearing in many scenarios
  const strategyCounts: Record<string, number> = {};
  for (const sc of scenarios) {
    for (const sid of sc.responsive) {
      strategyCounts[sid] = (strategyCounts[sid] || 0) + 1;
    }
  }
  const robust = Object.entries(strategyCounts)
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([id, n]) => ({ id, n, strategy: getStrategy(id) }))
    .filter((e): e is { id: string; n: number; strategy: Strategy } => !!e.strategy);

  const appearsInAnyScenario = new Set<string>();
  for (const sc of scenarios) for (const sid of sc.responsive) appearsInAnyScenario.add(sid);
  const unused = strategies.filter((s) => !appearsInAnyScenario.has(s.id));

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">scenarios</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Start from the failure mode you fear.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          A reverse lookup. Each scenario names a concrete failure mode; the
          strategies listed under it are the ones catalogued as responsive
          to that scenario specifically.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          A strategy listed under a scenario does not promise to prevent it
          — only to pull on a lever that would matter under that scenario.
          Pick the scenario, then ask whether the strategies listed are
          sufficient and whether any are missing.
        </p>
      </section>

      <section className="mb-10 grid sm:grid-cols-3 gap-4">
        <Stat label="Scenarios" value={scenarios.length.toString()} sub="concrete failure modes" />
        <Stat
          label="Cross-scenario strategies"
          value={robust.length.toString()}
          sub="responsive to 2+ scenarios"
        />
        <Stat
          label="Strategies in no scenario"
          value={unused.length.toString()}
          sub="either unresponsive or they deny the scenario's premise"
        />
      </section>

      <section className="mb-10">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
          <h2
            className="text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            By adversary class
          </h2>
          <span className="num-label">7 classes</span>
        </div>
        <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
          Which adversary or failure type produces the scenario. The
          alignment-heavy portfolio covers <em>misaligned AI</em> extensively
          and <em>structural forces</em> barely; most portfolios leave several
          classes uncovered.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {adversaryClasses().map((cls) => (
            <AdversaryBlock key={cls} cls={cls} />
          ))}
        </div>
      </section>

      <div className="space-y-8">
        {scenarios.map((sc) => (
          <ScenarioBlock key={sc.id} scenario={sc} />
        ))}
      </div>

      <section className="mt-14 border-t-2 border-[var(--color-ink)] pt-6 mb-10">
        <div className="flex items-baseline justify-between mb-3">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cross-scenario strategies
          </h2>
          <span className="num-label">robustness across failure modes</span>
        </div>
        <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
          Strategies that appear in multiple scenarios are robust across
          failure modes — they pull levers that matter under several
          different fears. Substrate and response strategies concentrate
          here.
        </p>
        <div className="space-y-1">
          {robust.map(({ id, n, strategy }) => (
            <div
              key={id}
              className="grid grid-cols-[40px_1fr_auto] items-baseline gap-3 border-b hairline py-2 text-sm"
            >
              <span className="num-label text-right">{n}×</span>
              <Link
                href={`/strategy/${id}`}
                className="unstyled hover:underline"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {strategy.name}
              </Link>
              <span className="num-label text-[10px]">
                {leverById[strategy.primaryLever]?.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t hairline pt-6 text-sm max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <p className="mb-2">
          The scenario coverage is biased toward preventable failures.
          Scenarios where prevention fails and only response matters need
          expansion. Strategies that do not appear in any scenario here are
          not useless — they often deny the scenario&apos;s framing rather
          than respond within it.
        </p>
        <p>
          A reader with a specific fear should start here rather than with
          the lever view: the lever view asks &quot;what instruments
          exist?&quot; and this view asks &quot;what addresses the failure
          mode I have in mind?&quot;
        </p>
      </section>
    </div>
  );
}

function adversaryClasses(): AdversaryClass[] {
  const seen = new Set<AdversaryClass>();
  for (const sc of scenarios) seen.add(sc.adversaryClass);
  return Array.from(seen);
}

function AdversaryBlock({ cls }: { cls: AdversaryClass }) {
  const inClass = scenarios.filter((s) => s.adversaryClass === cls);
  return (
    <div className="border hairline p-3">
      <div className="flex items-baseline justify-between mb-2">
        <h3
          className="text-base"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {adversaryLabel[cls]}
        </h3>
        <span className="num-label">{inClass.length}</span>
      </div>
      <ul className="text-sm space-y-1">
        {inClass.map((sc) => (
          <li key={sc.id}>
            <a
              href={`#${sc.id}`}
              className="unstyled hover:underline"
              style={{ color: "var(--color-ink-soft)" }}
            >
              {sc.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScenarioBlock({ scenario }: { scenario: Scenario }) {
  const responsiveStrategies = scenario.responsive
    .map((id) => getStrategy(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const missing = scenario.responsive.length - responsiveStrategies.length;
  return (
    <section id={scenario.id} className="border hairline scroll-mt-8">
      <div className="border-b hairline px-5 py-3 bg-[var(--color-parchment-soft)]">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h2
            className="text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {scenario.title}
          </h2>
          <span className="num-label">{scenario.gloss}</span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className="num-label"
            style={{ color: "var(--color-link)" }}
          >
            adversary class · {adversaryLabel[scenario.adversaryClass]}
          </span>
        </div>
        <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {scenario.description}
        </p>
      </div>
      <div className="px-5 py-4">
        <p className="num-label mb-3">
          {responsiveStrategies.length} responsive{" "}
          {responsiveStrategies.length === 1 ? "strategy" : "strategies"}
        </p>
        <div className="flex flex-wrap gap-2">
          {responsiveStrategies.map((s) => (
            <Link
              key={s.id}
              href={`/strategy/${s.id}`}
              className="chip"
              title={s.bet}
            >
              {s.name}
              <span className="direction">
                {leverById[s.primaryLever]?.name}
              </span>
            </Link>
          ))}
          {missing > 0 && (
            <span className="chip" style={{ opacity: 0.5 }}>
              {missing} not yet catalogued
            </span>
          )}
        </div>
        {scenario.note && (
          <p
            className="text-xs italic mt-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {scenario.note}
          </p>
        )}
      </div>
    </section>
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
