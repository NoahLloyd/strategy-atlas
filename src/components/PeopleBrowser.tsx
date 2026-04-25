"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Person } from "@/lib/people-types";
import { getTagById } from "@/lib/strategy-tags";
import { PersonAvatar } from "@/components/PersonAvatar";

function formatPDoom(v: number | [number, number]): string {
  if (Array.isArray(v)) return `${Math.round(v[0] * 100)}–${Math.round(v[1] * 100)}%`;
  return `${Math.round(v * 100)}%`;
}

type Sort = "name" | "pdoom-desc" | "pdoom-asc" | "recent";

export function PeopleBrowser({
  people,
  allTags,
  allCategories,
}: {
  people: Person[];
  allTags: { id: string; name: string; count: number }[];
  allCategories: string[];
}) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("name");
  const [onlyWithPDoom, setOnlyWithPDoom] = useState(false);
  const [onlyWithVideo, setOnlyWithVideo] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = people.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q) && !p.summary.toLowerCase().includes(q) && !(p.tagline?.toLowerCase().includes(q))) {
        return false;
      }
      if (tag && !p.positions.some((pos) => pos.strategyId === tag)) return false;
      if (category && !p.categories.includes(category as never)) return false;
      if (onlyWithPDoom && !(p.pDoom && p.pDoom.length > 0)) return false;
      if (onlyWithVideo) {
        const hasVideo = p.positions.some((pos) =>
          pos.quotes.some((qu) => qu.source.videoId),
        );
        if (!hasVideo) return false;
      }
      return true;
    });
    if (sort === "name") {
      out = out.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "pdoom-desc" || sort === "pdoom-asc") {
      const value = (p: Person) => {
        const v = p.pDoom?.[0]?.value;
        if (v === undefined) return sort === "pdoom-desc" ? -1 : Infinity;
        if (Array.isArray(v)) return (v[0] + v[1]) / 2;
        return v;
      };
      out = out.slice().sort((a, b) =>
        sort === "pdoom-desc" ? value(b) - value(a) : value(a) - value(b),
      );
    } else if (sort === "recent") {
      out = out.slice().sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));
    }
    return out;
  }, [people, query, tag, category, onlyWithPDoom, onlyWithVideo, sort]);

  return (
    <div>
      <div className="mb-6 grid gap-3" style={{ fontFamily: "var(--font-ui)" }}>
        <div className="flex flex-wrap gap-3 items-center">
          <input
            type="text"
            placeholder="Search name, role, or bio…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 min-w-[240px] border hairline px-3 py-2 text-sm bg-[var(--color-parchment)]"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="border hairline px-3 py-2 text-sm bg-[var(--color-parchment)]"
          >
            <option value="name">Alphabetical</option>
            <option value="pdoom-desc">p(doom) high to low</option>
            <option value="pdoom-asc">p(doom) low to high</option>
            <option value="recent">Recently updated</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2 items-center text-xs">
          <button
            onClick={() => setTag(null)}
            className={tag === null ? "chip is-complement" : "chip"}
          >
            all strategies
          </button>
          {allTags.map((t) => (
            <button
              key={t.id}
              onClick={() => setTag(tag === t.id ? null : t.id)}
              className={tag === t.id ? "chip is-complement" : "chip"}
            >
              {t.name} <span className="direction">{t.count}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center text-xs">
          <button
            onClick={() => setCategory(null)}
            className={category === null ? "chip is-complement" : "chip"}
          >
            all roles
          </button>
          {allCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(category === c ? null : c)}
              className={category === c ? "chip is-complement" : "chip"}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--color-ink-soft)" }}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyWithPDoom}
              onChange={(e) => setOnlyWithPDoom(e.target.checked)}
            />
            only with p(doom) on record
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyWithVideo}
              onChange={(e) => setOnlyWithVideo(e.target.checked)}
            />
            only with timestamped video
          </label>
          <span className="num-label ml-auto">{filtered.length} of {people.length}</span>
        </div>
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => {
          const tagList = Array.from(new Set(p.positions.map((pos) => pos.strategyId)));
          return (
            <li key={p.id}>
              <Link href={`/people/${p.id}`} className="unstyled">
                <div className="border hairline p-4 hover:border-[var(--color-ink)] transition-colors h-full">
                  <div className="flex gap-3 items-start mb-2">
                    <PersonAvatar person={p} size={48} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                          {p.name}
                        </h3>
                        {p.pDoom && p.pDoom[0] && (
                          <span className="num-label whitespace-nowrap">p {formatPDoom(p.pDoom[0].value)}</span>
                        )}
                      </div>
                      {p.tagline && (
                        <p className="text-xs italic mt-1" style={{ color: "var(--color-ink-soft)" }}>
                          {p.tagline}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "var(--color-ink)" }}>
                    {p.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {tagList.map((id) => {
                      const t = getTagById(id);
                      return (
                        <span key={id} className="lever-pill">
                          {t?.name ?? id}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {filtered.length === 0 && (
        <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
          No one on record matches these filters.
        </p>
      )}
    </div>
  );
}
