"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { HoverStrategyLink } from "@/components/HoverStrategyLink";
import type {
  Strategy,
  Lever,
  NamedPortfolio,
  LeverId,
} from "@/lib/types";

export function PortfolioAudit({
  allStrategies,
  levers,
  presets,
}: {
  allStrategies: Strategy[];
  levers: Lever[];
  presets: NamedPortfolio[];
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const selectedList = useMemo(
    () => allStrategies.filter((s) => selected.has(s.id)),
    [allStrategies, selected]
  );

  const audit = useMemo(() => computeAudit(selectedList, levers), [selectedList, levers]);

  function toggle(id: string) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
    setActivePreset(null);
  }

  function loadPreset(p: NamedPortfolio) {
    setSelected(new Set(p.strategies));
    setActivePreset(p.id);
  }

  function clear() {
    setSelected(new Set());
    setActivePreset(null);
  }

  const byLever: Record<string, Strategy[]> = {};
  for (const l of levers) byLever[l.id] = [];
  for (const s of allStrategies) byLever[s.primaryLever].push(s);

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8">
      {/* Sidebar: presets + clear */}
      <aside>
        <div className="sticky top-4">
          <div className="mb-6">
            <h2 className="num-label mb-3">Presets</h2>
            <ul className="space-y-1">
              {presets.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => loadPreset(p)}
                    className={`w-full text-left px-2 py-1.5 text-sm border hairline rounded-sm transition-colors ${
                      activePreset === p.id
                        ? "bg-[var(--color-ink)] text-[var(--color-parchment)] border-[var(--color-ink)]"
                        : "hover:border-[var(--color-ink)]"
                    }`}
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={clear}
              className="mt-3 text-xs underline-wiggle"
              style={{ fontFamily: "var(--font-ui)" }}
            >
              clear selection
            </button>
          </div>
          {activePreset && (
            <div className="border hairline p-3 text-sm">
              <p className="num-label mb-2">note on preset</p>
              <p style={{ color: "var(--color-ink-soft)" }}>
                {presets.find((p) => p.id === activePreset)?.description}
              </p>
            </div>
          )}
        </div>
      </aside>

      {/* Main: audit output + selection UI */}
      <section>
        {/* Audit summary */}
        <div className="mb-8 border-y-2 border-[var(--color-ink)] py-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Metric
              label="Strategies"
              value={audit.totalStrategies.toString()}
              sub={
                audit.totalStrategies === 0
                  ? "pick one below"
                  : `of ${allStrategies.length}`
              }
            />
            <Metric
              label="Levers pulled"
              value={`${audit.leverCoverage} / ${levers.length}`}
              sub={
                audit.totalStrategies === 0
                  ? "·"
                  : `${audit.leverCoveragePct}% coverage`
              }
            />
            <Metric
              label="Concentration"
              value={
                audit.totalStrategies === 0
                  ? "·"
                  : `${audit.concentrationPct}%`
              }
              sub={
                audit.totalStrategies === 0
                  ? "·"
                  : audit.dominantLever
                  ? `top lever: ${audit.dominantLever.name}`
                  : "·"
              }
            />
            <Metric
              label="Conflicts"
              value={audit.conflicts.length.toString()}
              sub={
                audit.conflicts.length === 0
                  ? audit.totalStrategies === 0
                    ? "·"
                    : "internally consistent"
                  : "same lever, opposite pulls"
              }
              tone={audit.conflicts.length > 0 ? "warn" : "neutral"}
            />
          </div>
        </div>

        {audit.totalStrategies > 0 && (
          <>
            {/* Lever distribution */}
            <div className="mb-8">
              <h3
                className="text-xl mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Lever distribution
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--color-ink-soft)" }}>
                Counts of primary lever pulls in this portfolio. Tall bars are
                the bets the portfolio is concentrated on; empty rows are
                bets it does not make.
              </p>
              <div className="space-y-1">
                {levers.map((lever) => {
                  const count = audit.leverCounts[lever.id] || 0;
                  const up = audit.leverDirCounts[lever.id]?.["+"] || 0;
                  const down = audit.leverDirCounts[lever.id]?.["-"] || 0;
                  const neutral = audit.leverDirCounts[lever.id]?.["neutral"] || 0;
                  const pct = (count / Math.max(1, audit.totalStrategies)) * 100;
                  const empty = count === 0;
                  return (
                    <div
                      key={lever.id}
                      className={`grid grid-cols-[140px_1fr_120px] items-center gap-3 text-sm py-1 border-b hairline ${
                        empty ? "opacity-40" : ""
                      }`}
                    >
                      <Link
                        href={`/levers/${lever.id}`}
                        className="unstyled hover:underline"
                      >
                        {lever.name}
                      </Link>
                      <div className="relative h-4 bg-[var(--color-parchment-soft)]">
                        {up > 0 && (
                          <div
                            className="absolute left-0 top-0 h-full"
                            style={{
                              width: `${(up / Math.max(1, audit.totalStrategies)) * 100}%`,
                              background: "var(--color-complement)",
                            }}
                          />
                        )}
                        {down > 0 && (
                          <div
                            className="absolute top-0 h-full"
                            style={{
                              left: `${(up / Math.max(1, audit.totalStrategies)) * 100}%`,
                              width: `${(down / Math.max(1, audit.totalStrategies)) * 100}%`,
                              background: "var(--color-conflict)",
                            }}
                          />
                        )}
                        {neutral > 0 && (
                          <div
                            className="absolute top-0 h-full"
                            style={{
                              left: `${((up + down) / Math.max(1, audit.totalStrategies)) * 100}%`,
                              width: `${(neutral / Math.max(1, audit.totalStrategies)) * 100}%`,
                              background: "var(--color-neutral)",
                            }}
                          />
                        )}
                      </div>
                      <span className="num-label text-right">
                        {empty ? "empty" : `${count} · ${pct.toFixed(0)}%`}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 text-xs mt-3" style={{ color: "var(--color-ink-soft)", fontFamily: "var(--font-ui)" }}>
                <Legend color="var(--color-complement)" label={`positive pull`} />
                <Legend color="var(--color-conflict)" label={`negative pull`} />
                <Legend color="var(--color-neutral)" label={`neutral`} />
              </div>
            </div>

            {/* Diagnostics */}
            <div className="mb-8 grid sm:grid-cols-2 gap-6">
              <DiagnosticBlock
                label="World-side vs AI-side"
                body={
                  <>
                    <div className="flex h-5 border hairline">
                      <div
                        className="h-full flex items-center justify-end px-2 text-[10px] text-[var(--color-parchment)]"
                        style={{
                          width: `${audit.leverClassPct.aiSide}%`,
                          background: "var(--color-ink)",
                        }}
                        title="AI-side levers"
                      >
                        {audit.leverClassPct.aiSide > 15
                          ? `AI ${audit.leverClassPct.aiSide}%`
                          : ""}
                      </div>
                      <div
                        className="h-full flex items-center justify-center px-2 text-[10px]"
                        style={{
                          width: `${audit.leverClassPct.mixed}%`,
                          background: "var(--color-accent)",
                        }}
                        title="Mixed levers"
                      >
                        {audit.leverClassPct.mixed > 15
                          ? `mixed ${audit.leverClassPct.mixed}%`
                          : ""}
                      </div>
                      <div
                        className="h-full flex items-center justify-start px-2 text-[10px] text-[var(--color-parchment)]"
                        style={{
                          width: `${audit.leverClassPct.worldSide}%`,
                          background: "var(--color-link)",
                        }}
                        title="World-side levers"
                      >
                        {audit.leverClassPct.worldSide > 15
                          ? `world ${audit.leverClassPct.worldSide}%`
                          : ""}
                      </div>
                    </div>
                    <p className="text-xs mt-2" style={{ color: "var(--color-ink-soft)" }}>
                      AI-side levers act on the model; world-side levers act on
                      institutions, culture, or substrate.
                    </p>
                  </>
                }
              />
              <DiagnosticBlock
                label="Coercion mix"
                body={
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(audit.coercionCounts)
                      .sort((a, b) => b[1] - a[1])
                      .map(([k, v]) => (
                        <span key={k} className="lever-pill">
                          {k.replace(/-/g, " ")} · {v}
                        </span>
                      ))}
                  </div>
                }
              />
              <DiagnosticBlock
                label="Time horizon"
                body={
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(audit.horizonCounts)
                      .sort((a, b) => b[1] - a[1])
                      .map(([k, v]) => (
                        <span key={k} className="lever-pill">
                          {k.replace(/-/g, " ")} · {v}
                        </span>
                      ))}
                  </div>
                }
              />
              <DiagnosticBlock
                label="Actor in control"
                body={
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(audit.actorCounts)
                      .sort((a, b) => b[1] - a[1])
                      .map(([k, v]) => (
                        <span key={k} className="lever-pill">
                          {k.replace(/-/g, " ")} · {v}
                        </span>
                      ))}
                  </div>
                }
              />
            </div>

            {/* Conflicts / untouched levers */}
            <div className="mb-8 grid sm:grid-cols-2 gap-6">
              <div className="border hairline p-4">
                <h4 className="num-label mb-2">Internal conflicts</h4>
                {audit.conflicts.length === 0 ? (
                  <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
                    None. The selected strategies do not pull any lever in
                    opposite directions.
                  </p>
                ) : (
                  <ul className="space-y-2 text-sm">
                    {audit.conflicts.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="num-label shrink-0">
                          {c.leverName}
                        </span>
                        <span>
                          <HoverStrategyLink strategy={c.a} placement="below">
                            <span className="underline-wiggle">{c.a.name}</span>
                          </HoverStrategyLink>{" "}
                          <span style={{ color: "var(--color-conflict)" }}>↕</span>{" "}
                          <HoverStrategyLink strategy={c.b} placement="below">
                            <span className="underline-wiggle">{c.b.name}</span>
                          </HoverStrategyLink>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="border hairline p-4">
                <h4 className="num-label mb-2">Untouched levers</h4>
                {audit.emptyLevers.length === 0 ? (
                  <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
                    All {levers.length} levers covered.
                  </p>
                ) : (
                  <ul className="text-sm space-y-1">
                    {audit.emptyLevers.map((l) => (
                      <li key={l.id}>
                        <Link href={`/levers/${l.id}`} className="underline-wiggle">
                          {l.name}
                        </Link>{" "}
                        <span className="num-label">{l.class.replace("-", " ")}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </>
        )}

        {/* Strategy picker */}
        <div className="mt-10 border-t hairline pt-6">
          <h3
            className="text-xl mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Add or remove strategies
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-soft)" }}>
            Click to toggle. Strategies grouped by their primary lever.
          </p>
          <div className="space-y-6">
            {levers.map((lever) => {
              const list = byLever[lever.id];
              if (!list || list.length === 0) return null;
              return (
                <div key={lever.id}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h4
                      className="text-base"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {lever.name}
                    </h4>
                    <span className="num-label">{lever.class.replace("-", " ")}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {list.map((s) => {
                      const on = selected.has(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggle(s.id)}
                          className={`text-xs border hairline rounded-sm px-2 py-1 transition-colors ${
                            on
                              ? "bg-[var(--color-ink)] text-[var(--color-parchment)] border-[var(--color-ink)]"
                              : "hover:border-[var(--color-ink)]"
                          }`}
                          style={{ fontFamily: "var(--font-ui)" }}
                          title={s.bet}
                        >
                          <span className="opacity-60 mr-1">
                            {s.leverDirection === "+"
                              ? "↑"
                              : s.leverDirection === "-"
                              ? "↓"
                              : "•"}
                          </span>
                          {s.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "neutral" | "warn";
}) {
  return (
    <div>
      <p className="num-label mb-1">{label}</p>
      <p
        className="text-3xl"
        style={{
          fontFamily: "var(--font-display)",
          color: tone === "warn" ? "var(--color-conflict)" : "var(--color-ink)",
        }}
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

function DiagnosticBlock({
  label,
  body,
}: {
  label: string;
  body: React.ReactNode;
}) {
  return (
    <div className="border hairline p-4">
      <p className="num-label mb-3">{label}</p>
      {body}
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="inline-block"
        style={{ width: "10px", height: "10px", background: color }}
      />
      {label}
    </span>
  );
}

type Audit = {
  totalStrategies: number;
  leverCounts: Record<string, number>;
  leverDirCounts: Record<string, Record<string, number>>;
  leverCoverage: number;
  leverCoveragePct: number;
  concentrationPct: number;
  dominantLever?: Lever;
  conflicts: {
    a: Strategy;
    b: Strategy;
    leverName: string;
  }[];
  leverClassPct: { aiSide: number; worldSide: number; mixed: number };
  coercionCounts: Record<string, number>;
  horizonCounts: Record<string, number>;
  actorCounts: Record<string, number>;
  emptyLevers: Lever[];
};

function computeAudit(list: Strategy[], levers: Lever[]): Audit {
  const leverCounts: Record<string, number> = {};
  const leverDirCounts: Record<string, Record<string, number>> = {};
  for (const l of levers) {
    leverCounts[l.id] = 0;
    leverDirCounts[l.id] = { "+": 0, "-": 0, neutral: 0 };
  }
  for (const s of list) {
    leverCounts[s.primaryLever]++;
    leverDirCounts[s.primaryLever][s.leverDirection]++;
  }
  const leverCoverage = levers.filter((l) => leverCounts[l.id] > 0).length;
  const leverCoveragePct = Math.round((leverCoverage / levers.length) * 100);
  const topCount = Math.max(0, ...Object.values(leverCounts));
  const concentrationPct =
    list.length === 0 ? 0 : Math.round((topCount / list.length) * 100);
  const dominantLeverId = Object.entries(leverCounts)
    .sort((a, b) => b[1] - a[1])[0]?.[0] as LeverId | undefined;
  const dominantLever = dominantLeverId
    ? levers.find((l) => l.id === dominantLeverId)
    : undefined;

  const conflicts: Audit["conflicts"] = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i];
      const b = list[j];
      if (
        a.primaryLever === b.primaryLever &&
        a.leverDirection !== b.leverDirection &&
        a.leverDirection !== "neutral" &&
        b.leverDirection !== "neutral"
      ) {
        const lever = levers.find((l) => l.id === a.primaryLever);
        conflicts.push({ a, b, leverName: lever?.name || a.primaryLever });
      }
    }
  }

  const classCounts = { aiSide: 0, worldSide: 0, mixed: 0 };
  for (const s of list) {
    const lever = levers.find((l) => l.id === s.primaryLever);
    if (!lever) continue;
    if (lever.class === "ai-side") classCounts.aiSide++;
    else if (lever.class === "world-side") classCounts.worldSide++;
    else classCounts.mixed++;
  }
  const classTotal = Math.max(1, classCounts.aiSide + classCounts.worldSide + classCounts.mixed);
  const leverClassPct = {
    aiSide: Math.round((classCounts.aiSide / classTotal) * 100),
    worldSide: Math.round((classCounts.worldSide / classTotal) * 100),
    mixed: Math.round((classCounts.mixed / classTotal) * 100),
  };

  const coercionCounts: Record<string, number> = {};
  const horizonCounts: Record<string, number> = {};
  const actorCounts: Record<string, number> = {};
  for (const s of list) {
    coercionCounts[s.coercion] = (coercionCounts[s.coercion] || 0) + 1;
    horizonCounts[s.timeHorizon] = (horizonCounts[s.timeHorizon] || 0) + 1;
    actorCounts[s.actorInControl] = (actorCounts[s.actorInControl] || 0) + 1;
  }

  const emptyLevers = levers.filter((l) => leverCounts[l.id] === 0);

  return {
    totalStrategies: list.length,
    leverCounts,
    leverDirCounts,
    leverCoverage,
    leverCoveragePct,
    concentrationPct,
    dominantLever,
    conflicts,
    leverClassPct,
    coercionCounts,
    horizonCounts,
    actorCounts,
    emptyLevers,
  };
}
