import Link from "next/link";
import { people, getPerson } from "@/lib/people";
import { PersonAvatar } from "@/components/PersonAvatar";

export const metadata = {
  title: "p(doom) board — AGI Strategies",
  description:
    "Every p(doom) estimate on the record, dated and linked to its source.",
};

function valueNumber(v: number | [number, number]): number {
  if (Array.isArray(v)) return (v[0] + v[1]) / 2;
  return v;
}

function valueLabel(v: number | [number, number]): string {
  if (Array.isArray(v)) return `${Math.round(v[0] * 100)}–${Math.round(v[1] * 100)}%`;
  return `${Math.round(v * 100)}%`;
}

export default function PDoomBoard() {
  const claims: {
    personId: string;
    personName: string;
    tagline?: string;
    value: number | [number, number];
    valueNumber: number;
    date?: string;
    definition?: string;
    sourceUrl: string;
    sourceTitle: string;
    sourcePublisher?: string;
  }[] = [];
  for (const p of people) {
    if (!p.pDoom) continue;
    for (const claim of p.pDoom) {
      claims.push({
        personId: p.id,
        personName: p.name,
        tagline: p.tagline,
        value: claim.value,
        valueNumber: valueNumber(claim.value),
        date: claim.date,
        definition: claim.definition,
        sourceUrl: claim.source.url,
        sourceTitle: claim.source.title,
        sourcePublisher: claim.source.publisher,
      });
    }
  }
  claims.sort((a, b) => b.valueNumber - a.valueNumber);

  const ladder: { label: string; min: number; max: number }[] = [
    { label: "≥ 90%", min: 0.9, max: 1.01 },
    { label: "50–89%", min: 0.5, max: 0.9 },
    { label: "20–49%", min: 0.2, max: 0.5 },
    { label: "10–19%", min: 0.1, max: 0.2 },
    { label: "1–9%", min: 0.01, max: 0.1 },
    { label: "< 1%", min: 0, max: 0.01 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">p(doom) board</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every p(doom) on the record.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          p(doom) is shorthand for the probability a person assigns to
          civilisational catastrophe from AI. Definitions vary — extinction,
          disempowerment, loss of control, or just bad outcomes. The claim
          only means what the person said it means, on the date they said it.
          Every entry below links to its source.
        </p>
      </section>

      <section>
        {ladder.map(({ label, min, max }) => {
          const bucket = claims.filter(
            (c) => c.valueNumber >= min && c.valueNumber < max,
          );
          if (bucket.length === 0) return null;
          return (
            <div key={label} className="mb-10 border-t-2 border-[var(--color-ink)] pt-5">
              <div className="flex items-baseline justify-between mb-4">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
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
                        <Link
                          href={`/people/${c.personId}`}
                          className="unstyled hover:underline"
                        >
                          <h3
                            className="text-lg"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {c.personName}
                          </h3>
                        </Link>
                        <span
                          className="text-2xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {valueLabel(c.value)}
                        </span>
                      </div>
                    </div>
                    {c.tagline && (
                      <p className="text-xs italic mb-2" style={{ color: "var(--color-ink-soft)" }}>
                        {c.tagline}
                      </p>
                    )}
                    {c.definition && (
                      <p className="text-sm mb-2" style={{ color: "var(--color-ink-soft)" }}>
                        {c.definition}
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
            </div>
          );
        })}
      </section>
    </div>
  );
}
