"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";
import type { Profile } from "@/lib/people-types";

type LightPerson = {
  id: string;
  name: string;
  tagline?: string;
  photoUrl?: string;
  profile?: Profile;
  pDoom?: number | [number, number];
  quoteCount: number;
  positions: { strategyId: string; stance: string }[];
};

type Tag = {
  id: string;
  name: string;
  oneLine: string;
  endorserIds: string[];
  opposerIds: string[];
};

type Props = {
  tags: Tag[];
  people: LightPerson[];
  initialA?: string;
  initialB?: string;
};

function pdoomMid(v: number | [number, number] | undefined): number | null {
  if (v === undefined) return null;
  if (Array.isArray(v)) return (v[0] + v[1]) / 2;
  return v;
}

function fmtPct(n: number | null, digits = 0): string {
  if (n === null) return "—";
  return `${(n * 100).toFixed(digits)}%`;
}

export function CompareView({ tags, people, initialA, initialB }: Props) {
  const peopleById = useMemo(() => {
    const m = new Map<string, LightPerson>();
    for (const p of people) m.set(p.id, p);
    return m;
  }, [people]);

  const tagSet = useMemo(() => new Set(tags.map((t) => t.id)), [tags]);
  // Sensible defaults: contrast a popular safety bet with a contrarian one.
  // URL params override, but only when valid (the tag has enough endorsers
  // to even appear in the picker list).
  const defaultA =
    (initialA && tagSet.has(initialA) ? initialA : null) ??
    tags.find((t) => t.id === "alignment-first")?.id ??
    tags[0]?.id ??
    "";
  const defaultB =
    (initialB && tagSet.has(initialB) ? initialB : null) ??
    tags.find((t) => t.id === "ai-skeptic")?.id ??
    tags[1]?.id ??
    "";

  const [aId, setAId] = useState(defaultA);
  const [bId, setBId] = useState(defaultB);

  const a = tags.find((t) => t.id === aId);
  const b = tags.find((t) => t.id === bId);

  if (!a || !b) {
    return (
      <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
        No comparable strategy tags loaded.
      </p>
    );
  }

  const aEndorsers = a.endorserIds
    .map((id) => peopleById.get(id))
    .filter(Boolean) as LightPerson[];
  const bEndorsers = b.endorserIds
    .map((id) => peopleById.get(id))
    .filter(Boolean) as LightPerson[];

  const aSet = new Set(a.endorserIds);
  const bSet = new Set(b.endorserIds);
  const both = a.endorserIds.filter((id) => bSet.has(id));
  const aOnly = a.endorserIds.filter((id) => !bSet.has(id));
  const bOnly = b.endorserIds.filter((id) => !aSet.has(id));

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <StrategyPicker
          label="strategy A"
          tags={tags}
          value={aId}
          onChange={setAId}
        />
        <StrategyPicker
          label="strategy B"
          tags={tags}
          value={bId}
          onChange={setBId}
        />
      </div>

      {aId === bId && (
        <div
          className="border hairline p-3 text-xs italic mb-6"
          style={{ color: "var(--color-ink-soft)", background: "var(--color-parchment-soft)" }}
        >
          Both pickers are on the same strategy. The contrast view needs two
          different strategies to be useful.
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <PanelCard tag={a} endorsers={aEndorsers} />
        <PanelCard tag={b} endorsers={bEndorsers} />
      </div>

      {aId !== bId && (
        <DiffPanel
          a={a}
          b={b}
          aEndorsers={aEndorsers}
          bEndorsers={bEndorsers}
        />
      )}

      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <OverlapColumn
          title={`endorse both (${both.length})`}
          ids={both}
          peopleById={peopleById}
          tone="match"
        />
        <OverlapColumn
          title={`${a.name} only (${aOnly.length})`}
          ids={aOnly}
          peopleById={peopleById}
          tone="a"
        />
        <OverlapColumn
          title={`${b.name} only (${bOnly.length})`}
          ids={bOnly}
          peopleById={peopleById}
          tone="b"
        />
      </div>
    </div>
  );
}

function StrategyPicker({
  label,
  tags,
  value,
  onChange,
}: {
  label: string;
  tags: Tag[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="num-label block mb-2">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border hairline px-3 py-2 text-sm bg-[var(--color-parchment)]"
      >
        {tags.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name} ({t.endorserIds.length})
          </option>
        ))}
      </select>
      <span
        className="text-xs italic block mt-1"
        style={{ color: "var(--color-ink-soft)" }}
      >
        {tags.find((t) => t.id === value)?.oneLine}
      </span>
    </label>
  );
}

function PanelCard({
  tag,
  endorsers,
}: {
  tag: Tag;
  endorsers: LightPerson[];
}) {
  const profiled = endorsers.filter((p) => p.profile);
  const expertise = expertiseTiers.map((t) => ({
    id: t.id,
    label: t.short,
    count: profiled.filter((p) => p.profile!.expertise === t.id).length,
  }));
  const recognition = recognitionTiers.map((t) => ({
    id: t.id,
    label: t.short,
    count: profiled.filter((p) => p.profile!.recognition === t.id).length,
  }));
  const expMax = Math.max(1, ...expertise.map((x) => x.count));
  const recMax = Math.max(1, ...recognition.map((x) => x.count));
  const pVals = endorsers
    .map((p) => pdoomMid(p.pDoom))
    .filter((v): v is number => v !== null);
  const pMean =
    pVals.length === 0 ? null : pVals.reduce((a, b) => a + b, 0) / pVals.length;
  const totalQuotes = endorsers.reduce((acc, p) => acc + p.quoteCount, 0);

  return (
    <div
      className="border-2 border-[var(--color-ink)] p-5"
      style={{ background: "var(--color-parchment-soft)" }}
    >
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <h3
          className="text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Link
            href={`/strategies/${tag.id}`}
            className="unstyled hover:underline"
          >
            {tag.name}
          </Link>
        </h3>
        <span className="num-label">
          {endorsers.length} endorsers · {tag.opposerIds.length} oppose
        </span>
      </div>
      <p className="text-sm mb-5" style={{ color: "var(--color-ink-soft)" }}>
        {tag.oneLine}
      </p>

      <p className="num-label mb-2">expertise mix</p>
      <BarRow rows={expertise} max={expMax} />

      <p className="num-label mb-2 mt-4">recognition mix</p>
      <BarRow rows={recognition} max={recMax} />

      <div className="grid grid-cols-3 gap-3 mt-5 text-xs">
        <Metric label="profiled" value={`${profiled.length}/${endorsers.length}`} />
        <Metric
          label="mean p(doom)"
          value={fmtPct(pMean)}
          sub={pVals.length > 0 ? `n=${pVals.length}` : undefined}
        />
        <Metric label="quotes" value={totalQuotes.toString()} />
      </div>
    </div>
  );
}

function BarRow({
  rows,
  max,
}: {
  rows: { id: string; label: string; count: number }[];
  max: number;
}) {
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.id} className="flex items-center gap-2 text-xs">
          <span style={{ width: 110, color: "var(--color-ink-soft)" }}>
            {r.label}
          </span>
          <div
            className="flex-1 h-2.5"
            style={{ background: "var(--color-rule)" }}
          >
            <div
              style={{
                width: `${(r.count / max) * 100}%`,
                height: "100%",
                background: "var(--color-accent)",
              }}
            />
          </div>
          <span
            className="num-label"
            style={{ width: 24, textAlign: "right" }}
          >
            {r.count}
          </span>
        </div>
      ))}
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="border hairline p-2">
      <p className="num-label mb-1" style={{ fontSize: "0.6rem" }}>
        {label}
      </p>
      <p
        className="text-lg leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="text-[10px] mt-1"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function DiffPanel({
  a,
  b,
  aEndorsers,
  bEndorsers,
}: {
  a: Tag;
  b: Tag;
  aEndorsers: LightPerson[];
  bEndorsers: LightPerson[];
}) {
  const aProf = aEndorsers.filter((p) => p.profile);
  const bProf = bEndorsers.filter((p) => p.profile);

  function tierShare(list: LightPerson[], field: "expertise" | "recognition") {
    const out: Record<string, number> = {};
    const denom = list.filter((p) => p.profile).length;
    if (denom === 0) return out;
    for (const p of list) {
      const v = p.profile?.[field];
      if (!v) continue;
      out[v] = (out[v] ?? 0) + 1;
    }
    for (const k of Object.keys(out)) out[k] = out[k] / denom;
    return out;
  }

  const aExp = tierShare(aEndorsers, "expertise");
  const bExp = tierShare(bEndorsers, "expertise");
  const aRec = tierShare(aEndorsers, "recognition");
  const bRec = tierShare(bEndorsers, "recognition");

  const aP = aEndorsers.map((p) => pdoomMid(p.pDoom)).filter((x): x is number => x !== null);
  const bP = bEndorsers.map((p) => pdoomMid(p.pDoom)).filter((x): x is number => x !== null);
  const aMean = aP.length === 0 ? null : aP.reduce((x, y) => x + y, 0) / aP.length;
  const bMean = bP.length === 0 ? null : bP.reduce((x, y) => x + y, 0) / bP.length;

  type Lift = { id: string; label: string; lift: number };
  const expLifts: Lift[] = expertiseTiers.map((t) => ({
    id: t.id,
    label: t.label,
    lift: (aExp[t.id] ?? 0) - (bExp[t.id] ?? 0),
  }));
  const recLifts: Lift[] = recognitionTiers.map((t) => ({
    id: t.id,
    label: t.label,
    lift: (aRec[t.id] ?? 0) - (bRec[t.id] ?? 0),
  }));
  const allLifts = [...expLifts, ...recLifts];
  const aHeavy = allLifts.filter((x) => x.lift > 0.07).sort((x, y) => y.lift - x.lift);
  const bHeavy = allLifts.filter((x) => x.lift < -0.07).sort((x, y) => x.lift - y.lift);

  if (aProf.length < 3 && bProf.length < 3) {
    return (
      <div
        className="border hairline p-4 text-xs italic"
        style={{ color: "var(--color-ink-soft)", background: "var(--color-parchment-soft)" }}
      >
        Not enough profiled endorsers to draw a contrast. Aim for at least three
        per side before reading the tier mix as signal.
      </div>
    );
  }

  return (
    <div
      className="border-2 border-[var(--color-ink)] p-5"
      style={{ background: "var(--color-parchment-soft)" }}
    >
      <p className="num-label mb-2">where the disagreement lives</p>
      <p
        className="text-xs italic mb-4 max-w-3xl"
        style={{ color: "var(--color-ink-soft)" }}
      >
        Tier shares within profiled endorsers. Positive shift means the tier
        is over-represented in <strong style={{ color: "var(--color-ink)" }}>{a.name}</strong>;
        negative means it&apos;s over-represented in{" "}
        <strong style={{ color: "var(--color-ink)" }}>{b.name}</strong>.
      </p>
      <div className="grid md:grid-cols-2 gap-5 text-xs">
        <div>
          <p className="num-label mb-2">{a.name} skews these tiers</p>
          {aHeavy.length === 0 ? (
            <p className="italic" style={{ color: "var(--color-ink-soft)" }}>
              No tier swings more than 7pp.
            </p>
          ) : (
            <ul className="space-y-1">
              {aHeavy.slice(0, 5).map((x) => (
                <li key={x.id} className="flex justify-between gap-2">
                  <span>{x.label}</span>
                  <span
                    className="num-label"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    +{Math.round(x.lift * 100)}pp
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className="num-label mb-2">{b.name} skews these tiers</p>
          {bHeavy.length === 0 ? (
            <p className="italic" style={{ color: "var(--color-ink-soft)" }}>
              No tier swings more than 7pp.
            </p>
          ) : (
            <ul className="space-y-1">
              {bHeavy.slice(0, 5).map((x) => (
                <li key={x.id} className="flex justify-between gap-2">
                  <span>{x.label}</span>
                  <span
                    className="num-label"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    +{Math.round(-x.lift * 100)}pp
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {aMean !== null && bMean !== null && (
        <div className="mt-4 text-xs flex flex-wrap gap-3 items-baseline">
          <span className="num-label">mean p(doom)</span>
          <span style={{ fontFamily: "var(--font-display)" }}>
            {a.name}: {fmtPct(aMean)} (n={aP.length})
          </span>
          <span style={{ color: "var(--color-ink-soft)" }}>vs</span>
          <span style={{ fontFamily: "var(--font-display)" }}>
            {b.name}: {fmtPct(bMean)} (n={bP.length})
          </span>
          <span className="num-label">
            Δ {aMean > bMean ? "+" : ""}
            {fmtPct(aMean - bMean, 1)}
          </span>
        </div>
      )}
    </div>
  );
}

function OverlapColumn({
  title,
  ids,
  peopleById,
  tone,
}: {
  title: string;
  ids: string[];
  peopleById: Map<string, LightPerson>;
  tone: "match" | "a" | "b";
}) {
  // Sort by quote count then by recognition rank (household-name on top).
  const sorted = ids
    .map((id) => peopleById.get(id))
    .filter(Boolean)
    .map((p) => p!)
    .sort((a, b) => {
      const recOrder: Record<string, number> = {
        "household-name": 3,
        "field-leading": 2,
        established: 1,
        emerging: 0,
      };
      const ra = recOrder[a.profile?.recognition ?? ""] ?? -1;
      const rb = recOrder[b.profile?.recognition ?? ""] ?? -1;
      if (ra !== rb) return rb - ra;
      return b.quoteCount - a.quoteCount || a.name.localeCompare(b.name);
    })
    .slice(0, 12);

  const accent =
    tone === "match"
      ? "var(--color-accent)"
      : tone === "a"
      ? "var(--color-ink)"
      : "var(--color-ink-soft)";

  return (
    <div className="border hairline p-3">
      <p
        className="num-label mb-3 pb-2 border-b hairline"
        style={{ color: accent }}
      >
        {title}
      </p>
      {sorted.length === 0 ? (
        <p
          className="text-xs italic"
          style={{ color: "var(--color-ink-soft)" }}
        >
          No one in this slice yet.
        </p>
      ) : (
        <ul className="space-y-1">
          {sorted.map((p) => (
            <li key={p.id}>
              <Link
                href={`/people/${p.id}`}
                className="unstyled flex items-center justify-between gap-2 py-1 text-xs hover:underline"
              >
                <span style={{ fontFamily: "var(--font-display)" }}>
                  {p.name}
                </span>
                {p.profile && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-ink-soft)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.profile.recognition.slice(0, 2)}·{p.profile.expertise.slice(0, 2)}
                  </span>
                )}
              </Link>
            </li>
          ))}
          {ids.length > 12 && (
            <li
              className="text-[10px] italic mt-2 pt-2 border-t hairline"
              style={{ color: "var(--color-ink-soft)" }}
            >
              + {ids.length - 12} more not shown
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
