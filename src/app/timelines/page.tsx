import Link from "next/link";
import { people, getPerson } from "@/lib/people";
import { PersonAvatar } from "@/components/PersonAvatar";

export const metadata = {
  title: "Timelines — AGI Strategies",
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
                      <Link href={`/people/${c.personId}`} className="unstyled">
                        <PersonAvatar person={person} size={40} />
                      </Link>
                    )}
                    <div className="flex-1 flex items-baseline justify-between flex-wrap gap-2">
                      <Link href={`/people/${c.personId}`} className="unstyled hover:underline">
                        <h3 className="text-lg" style={{ fontFamily: "var(--font-display)" }}>
                          {c.personName}
                        </h3>
                      </Link>
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
