import Link from "next/link";
import { people, getPerson } from "@/lib/people";
import { HoverFaceLink } from "@/components/HoverFaceLink";
import { vintageTiers } from "@/data/profile-tiers";
import type { VintageEra } from "@/lib/people-types";

export const metadata = {
  title: "Timelines · AGI Strategies",
  description:
    "Every named AGI / transformative AI timeline on the record, with a dated primary source.",
};

export default function TimelinesBoard() {
  const claims: {
    personId: string;
    personName: string;
    tagline?: string;
    milestone: string;
    year?: number;
    range?: [number, number];
    probability?: number;
    date?: string;
    sourceUrl: string;
    sourceTitle: string;
    sourcePublisher?: string;
    sortKey: number;
  }[] = [];
  for (const p of people) {
    if (!p.timelines) continue;
    for (const t of p.timelines) {
      const y = t.year ?? (t.range ? (t.range[0] + t.range[1]) / 2 : 9999);
      claims.push({
        personId: p.id,
        personName: p.name,
        tagline: p.tagline,
        milestone: t.milestone,
        year: t.year,
        range: t.range,
        probability: t.probability,
        date: t.date,
        sourceUrl: t.source.url,
        sourceTitle: t.source.title,
        sourcePublisher: t.source.publisher,
        sortKey: y,
      });
    }
  }
  claims.sort((a, b) => a.sortKey - b.sortKey);

  const decades: { label: string; min: number; max: number }[] = [
    { label: "By 2027", min: 0, max: 2028 },
    { label: "2028–2030", min: 2028, max: 2031 },
    { label: "2031–2040", min: 2031, max: 2041 },
    { label: "2041–2060", min: 2041, max: 2061 },
    { label: "Beyond 2060", min: 2061, max: 9999 },
  ];

  // Latest dated claim per person, used for the at-a-glance distribution
  // so a single forecaster appears once even if they've revised twice.
  const latestByPerson = new Map<string, typeof claims[number]>();
  for (const c of claims) {
    const ex = latestByPerson.get(c.personId);
    if (!ex) {
      latestByPerson.set(c.personId, c);
      continue;
    }
    if ((c.date ?? "") > (ex.date ?? "")) latestByPerson.set(c.personId, c);
  }
  const latestClaims = Array.from(latestByPerson.values());
  const distBins = decades.map((b) => ({
    ...b,
    count: latestClaims.filter((c) => c.sortKey >= b.min && c.sortKey < b.max)
      .length,
  }));
  const distMax = Math.max(1, ...distBins.map((b) => b.count));
  const sortedYears = latestClaims
    .map((c) => c.sortKey)
    .filter((y) => y < 9999)
    .sort((a, b) => a - b);
  const medianYear =
    sortedYears.length === 0
      ? null
      : sortedYears.length % 2 === 0
      ? Math.round(
          (sortedYears[sortedYears.length / 2 - 1] +
            sortedYears[sortedYears.length / 2]) /
            2,
        )
      : sortedYears[Math.floor(sortedYears.length / 2)];

  // Median forecast year by vintage. Hypothesis: forecasters whose
  // worldview formed in earlier eras don't necessarily predict later
  // dates, and whether they do is itself interesting.
  const byVintage: { era: VintageEra; years: number[] }[] = vintageTiers.map(
    (t) => ({ era: t.id, years: [] as number[] }),
  );
  for (const c of latestClaims) {
    const p = getPerson(c.personId);
    const v = p?.profile?.vintage;
    if (!v) continue;
    if (c.sortKey >= 9999) continue;
    const slot = byVintage.find((x) => x.era === v);
    if (slot) slot.years.push(c.sortKey);
  }
  const vintageStats = byVintage
    .filter((b) => b.years.length >= 3)
    .map((b) => {
      const sorted = b.years.slice().sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      const median =
        sorted.length % 2 === 0
          ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
          : sorted[mid];
      return {
        era: b.era,
        label: vintageTiers.find((t) => t.id === b.era)!.label,
        n: b.years.length,
        median,
      };
    });

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">timelines</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every AGI timeline on the record.
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          What counts as AGI varies. So does what the person was predicting:
          50% confidence, first plausibility, or definitional passage of a
          specific test. Each claim below is paired with a dated source so you
          can judge in context.
        </p>
      </section>

      <section
        className="mb-10 border-2 border-[var(--color-ink)] p-5"
        style={{ background: "var(--color-parchment-soft)" }}
      >
        <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
          <p className="num-label">distribution · latest forecast per person</p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span>
              <span className="num-label">n</span>{" "}
              <span style={{ fontFamily: "var(--font-display)" }}>
                {latestClaims.length}
              </span>
            </span>
            {medianYear !== null && (
              <span>
                <span className="num-label">median</span>{" "}
                <span style={{ fontFamily: "var(--font-display)" }}>
                  {medianYear}
                </span>
              </span>
            )}
          </div>
        </div>
        <ul className="space-y-1.5">
          {distBins.map((b) => (
            <li key={b.label} className="flex items-center gap-3 text-xs">
              <span
                style={{ width: 110, color: "var(--color-ink-soft)" }}
                className="num-label"
              >
                {b.label}
              </span>
              <div
                className="flex-1 h-3"
                style={{ background: "var(--color-rule)" }}
              >
                <div
                  style={{
                    width: `${(b.count / distMax) * 100}%`,
                    height: "100%",
                    background: "var(--color-accent)",
                  }}
                />
              </div>
              <span
                className="num-label"
                style={{ width: 28, textAlign: "right" }}
              >
                {b.count}
              </span>
            </li>
          ))}
        </ul>
        <p
          className="text-[10px] italic mt-3"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Each forecaster shown once, using their most recent dated claim.
          Below, every claim is listed individually, including revisions.
        </p>
      </section>

      {vintageStats.length >= 3 && (() => {
        const minMedian = Math.min(...vintageStats.map((s) => s.median));
        const maxMedian = Math.max(...vintageStats.map((s) => s.median));
        const span = Math.max(1, maxMedian - minMedian);
        return (
          <section
            className="mb-10 border hairline p-5"
            style={{ background: "var(--color-parchment-soft)" }}
          >
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
              <p className="num-label">
                median AGI year by vintage · era of forecaster formation
              </p>
              <span
                className="num-label"
                style={{ color: "var(--color-ink-soft)" }}
              >
                latest forecast per person
              </span>
            </div>
            <ul className="space-y-1.5">
              {vintageStats.map((s) => (
                <li key={s.era} className="flex items-center gap-3 text-xs">
                  <span
                    style={{ width: 150, color: "var(--color-ink-soft)" }}
                    className="num-label"
                  >
                    {s.label}
                  </span>
                  <div
                    className="flex-1 h-3 relative"
                    style={{ background: "var(--color-rule)" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: `${((s.median - minMedian) / span) * 100}%`,
                        top: 0,
                        bottom: 0,
                        width: 6,
                        marginLeft: -3,
                        background: "var(--color-accent)",
                      }}
                    />
                  </div>
                  <span
                    className="num-label whitespace-nowrap"
                    style={{ width: 80, textAlign: "right" }}
                  >
                    {s.median} · n={s.n}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="text-[10px] italic mt-3"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Bar position shows where the era's median lands inside the
              full range observed across eras. Tiers with fewer than 3
              dated forecasts are hidden.
            </p>
          </section>
        );
      })()}

      {decades.map(({ label, min, max }) => {
        const bucket = claims.filter((c) => c.sortKey >= min && c.sortKey < max);
        if (bucket.length === 0) return null;
        return (
          <section key={label} className="mb-10 border-t-2 border-[var(--color-ink)] pt-5">
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                {label}
              </h2>
              <span className="num-label">{bucket.length}</span>
            </div>
            <ul className="space-y-3">
              {bucket.map((c, i) => {
                const person = getPerson(c.personId);
                return (
                <li key={`${c.personId}-${i}`} className="border hairline p-4">
                  <div className="flex items-start gap-3 mb-1">
                    {person && (
                      <HoverFaceLink
                        person={person}
                        size={40}
                        placement="right"
                      />
                    )}
                    <div className="flex-1 flex items-baseline justify-between flex-wrap gap-2">
                      {person ? (
                        <HoverFaceLink person={person} placement="below">
                          <h3
                            className="text-lg hover:underline"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {c.personName}
                          </h3>
                        </HoverFaceLink>
                      ) : (
                        <Link href={`/people/${c.personId}`} className="unstyled hover:underline">
                          <h3 className="text-lg" style={{ fontFamily: "var(--font-display)" }}>
                            {c.personName}
                          </h3>
                        </Link>
                      )}
                      <span className="text-xl" style={{ fontFamily: "var(--font-display)" }}>
                        {c.year ? c.year : c.range ? `${c.range[0]}–${c.range[1]}` : ""}
                        {c.probability !== undefined && (
                          <span className="num-label ml-2">
                            p={Math.round(c.probability * 100)}%
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm mb-2">
                    <span className="num-label mr-2">milestone</span>
                    {c.milestone}
                  </p>
                  {c.tagline && (
                    <p className="text-xs italic mb-1" style={{ color: "var(--color-ink-soft)" }}>
                      {c.tagline}
                    </p>
                  )}
                  <p className="text-xs" style={{ color: "var(--color-ink-soft)" }}>
                    {c.date && <span className="num-label mr-2">{c.date}</span>}
                    <a
                      href={c.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-wiggle"
                    >
                      {c.sourceTitle}
                    </a>
                    {c.sourcePublisher && ` · ${c.sourcePublisher}`}
                  </p>
                </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {claims.length === 0 && (
        <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
          No timeline claims catalogued yet.
        </p>
      )}
    </div>
  );
}
