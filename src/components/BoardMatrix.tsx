"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  Person,
  ExpertiseTier,
  RecognitionTier,
} from "@/lib/people-types";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";
import { getTagById } from "@/lib/strategy-tags";
import { PersonAvatar } from "@/components/PersonAvatar";

type Props = {
  people: Person[];
  allTagsRanked: { id: string; name: string; count: number }[];
};

type CellKey = `${ExpertiseTier}|${RecognitionTier}`;

export function BoardMatrix({ people, allTagsRanked }: Props) {
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [stanceFilter, setStanceFilter] = useState<
    "all" | "endorses" | "opposes"
  >("all");
  const [hovered, setHovered] = useState<Person | null>(null);
  const [view, setView] = useState<"faces" | "names">("faces");
  const [tagsExpanded, setTagsExpanded] = useState(false);
  const [focusedCell, setFocusedCell] = useState<CellKey | null>(null);

  const profiled = useMemo(
    () => people.filter((p) => p.profile),
    [people],
  );

  const filtered = useMemo(() => {
    return profiled.filter((p) => {
      if (!tagFilter) return true;
      const matched = p.positions.find((pos) => pos.strategyId === tagFilter);
      if (!matched) return false;
      if (stanceFilter === "all") return true;
      return matched.stance === stanceFilter;
    });
  }, [profiled, tagFilter, stanceFilter]);

  const grid: Record<string, Record<string, Person[]>> = {};
  for (const e of expertiseTiers) {
    grid[e.id] = {};
    for (const r of recognitionTiers) grid[e.id][r.id] = [];
  }
  for (const p of filtered) {
    if (!p.profile) continue;
    grid[p.profile.expertise][p.profile.recognition].push(p);
  }

  const totalProfiled = profiled.length;
  const visibleTags = tagsExpanded ? allTagsRanked : allTagsRanked.slice(0, 18);

  return (
    <div>
      <div className="mb-6 grid gap-3" style={{ fontFamily: "var(--font-ui)" }}>
        <div className="flex items-center gap-3 flex-wrap text-xs">
          <span className="num-label">filter by strategy</span>
          <button
            onClick={() => setTagFilter(null)}
            className={tagFilter === null ? "chip is-complement" : "chip"}
          >
            any
          </button>
          {visibleTags.map((t) => (
            <button
              key={t.id}
              onClick={() =>
                setTagFilter(tagFilter === t.id ? null : t.id)
              }
              className={tagFilter === t.id ? "chip is-complement" : "chip"}
            >
              {t.name} <span className="direction">{t.count}</span>
            </button>
          ))}
          {!tagsExpanded && allTagsRanked.length > 18 && (
            <button
              onClick={() => setTagsExpanded(true)}
              className="chip"
              style={{ borderStyle: "dashed" }}
            >
              + {allTagsRanked.length - 18} more
            </button>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap text-xs">
          <span className="num-label">stance</span>
          {(["all", "endorses", "opposes"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStanceFilter(s)}
              className={stanceFilter === s ? "chip is-complement" : "chip"}
              disabled={!tagFilter && s !== "all"}
              style={!tagFilter && s !== "all" ? { opacity: 0.4 } : undefined}
            >
              {s}
            </button>
          ))}
          <span className="num-label">view</span>
          {(["faces", "names"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={view === v ? "chip is-complement" : "chip"}
            >
              {v}
            </button>
          ))}
          <span className="num-label ml-auto">
            {filtered.length} of {totalProfiled} profiled
            {filtered.length !== totalProfiled && tagFilter
              ? ` · ${getTagById(tagFilter)?.name ?? tagFilter}`
              : ""}
          </span>
        </div>
      </div>

      <div
        className="overflow-x-auto"
        style={{ fontFamily: "var(--font-ui)" }}
      >
        <table className="w-full text-xs" style={{ minWidth: "720px" }}>
          <thead>
            <tr>
              <th className="text-left p-2 align-bottom">
                <span className="num-label">expertise ↓ · recognition →</span>
              </th>
              {recognitionTiers.map((r) => (
                <th
                  key={r.id}
                  className="text-left p-2 align-bottom border-b hairline"
                  style={{ minWidth: view === "names" ? "200px" : "150px" }}
                >
                  <span className="num-label block">{r.label}</span>
                  <span
                    className="block mt-1 text-[10px] italic leading-tight"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {r.short}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expertiseTiers.map((e) => (
              <tr key={e.id}>
                <th
                  scope="row"
                  className="text-left p-2 align-top border-r hairline"
                  style={{ width: "180px" }}
                >
                  <span className="num-label block">{e.label}</span>
                  <span
                    className="block mt-1 text-[10px] italic leading-tight"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {e.short}
                  </span>
                </th>
                {recognitionTiers.map((r) => {
                  const cell = grid[e.id][r.id];
                  const cellKey = `${e.id}|${r.id}` as CellKey;
                  const isFocused = focusedCell === cellKey;
                  const intensity = Math.min(cell.length * 4, 32);
                  return (
                    <td
                      key={r.id}
                      className="p-1 align-top border hairline"
                      onClick={() => {
                        if (cell.length === 0) return;
                        setFocusedCell((c) => (c === cellKey ? null : cellKey));
                      }}
                      style={{
                        background:
                          cell.length > 0
                            ? `color-mix(in oklab, var(--color-accent) ${intensity}%, var(--color-parchment))`
                            : "var(--color-parchment)",
                        outline: isFocused
                          ? "2px solid var(--color-ink)"
                          : "none",
                        outlineOffset: "-2px",
                        verticalAlign: "top",
                        cursor: cell.length > 0 ? "pointer" : "default",
                      }}
                    >
                      {cell.length === 0 && (
                        <span
                          className="block text-center text-xl select-none"
                          style={{
                            color: "var(--color-ink-soft)",
                            opacity: 0.4,
                          }}
                        >
                          ·
                        </span>
                      )}
                      {cell.length > 0 && (
                        <div
                          className="num-label mb-1 px-1"
                          style={{ opacity: 0.6, fontSize: "0.6rem" }}
                        >
                          {cell.length}
                        </div>
                      )}
                      {view === "faces" ? (
                        <ul
                          className="flex flex-wrap gap-1.5 px-1 pb-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {cell.map((p) => (
                            <li key={p.id}>
                              <Link
                                href={`/people/${p.id}`}
                                className="unstyled inline-block"
                                onMouseEnter={() => setHovered(p)}
                                onMouseLeave={() =>
                                  setHovered((h) =>
                                    h?.id === p.id ? null : h,
                                  )
                                }
                                title={p.name}
                              >
                                <PersonAvatar person={p} size={28} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul
                          className="px-1 pb-1 space-y-0.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {cell
                            .slice()
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((p) => (
                              <li key={p.id}>
                                <Link
                                  href={`/people/${p.id}`}
                                  className="unstyled block text-[11px] leading-tight hover:underline"
                                  onMouseEnter={() => setHovered(p)}
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {focusedCell && (() => {
        const [eId, rId] = focusedCell.split("|") as [
          ExpertiseTier,
          RecognitionTier,
        ];
        const cellPeople = grid[eId][rId];
        const exp = expertiseTiers.find((t) => t.id === eId);
        const rec = recognitionTiers.find((t) => t.id === rId);
        return (
          <div
            className="mt-4 border-2 border-[var(--color-ink)] p-4"
            style={{ background: "var(--color-parchment-soft)" }}
          >
            <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
              <div>
                <p className="num-label">focused cell</p>
                <h3
                  className="text-lg leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {exp?.label} · {rec?.label}
                </h3>
                <p
                  className="text-xs italic mt-1"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  {exp?.criterion} · {rec?.criterion}
                </p>
              </div>
              <button
                onClick={() => setFocusedCell(null)}
                className="chip"
              >
                clear
              </button>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {cellPeople
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/people/${p.id}`}
                      className="unstyled flex items-start gap-3 border hairline p-2 hover:border-[var(--color-ink)] transition-colors h-full"
                    >
                      <PersonAvatar person={p} size={36} />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm leading-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {p.name}
                        </p>
                        {p.tagline && (
                          <p
                            className="text-[10px] italic mt-1 line-clamp-2"
                            style={{ color: "var(--color-ink-soft)" }}
                          >
                            {p.tagline}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        );
      })()}

      <div
        className="mt-4 border hairline p-4 min-h-[5rem]"
        style={{ background: "var(--color-parchment-soft)" }}
      >
        {hovered ? (
          <div className="flex gap-4 items-start">
            <PersonAvatar person={hovered} size={56} />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3
                  className="text-lg leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {hovered.name}
                </h3>
                {hovered.tagline && (
                  <span
                    className="text-xs italic"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {hovered.tagline}
                  </span>
                )}
              </div>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {hovered.profile?.expertiseNote.split(".")[0]}.
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {Array.from(
                  new Set(hovered.positions.map((pos) => pos.strategyId)),
                )
                  .slice(0, 6)
                  .map((id) => {
                    const t = getTagById(id);
                    return (
                      <span key={id} className="lever-pill">
                        {t?.name ?? id}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          <p
            className="text-xs italic"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Hover a face or name to see who it is. Click a face to open the
            profile, or click a cell to drill in. Cells deepen with population —
            sparse cells name positions the field has not produced.
          </p>
        )}
      </div>

    </div>
  );
}
