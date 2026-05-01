import Link from "next/link";
import { people, getPerson } from "@/lib/people";
import { HoverFaceLink } from "@/components/HoverFaceLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { vintageTiers } from "@/data/profile-tiers";
import type { VintageEra } from "@/lib/people-types";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "p(doom) by researcher: every AI extinction risk estimate, sourced",
  description:
    "Every p(doom) estimate on the record. Researchers, executives, and policymakers ranked by their probability of AI catastrophe — each estimate dated and linked to a primary source.",
  path: "/pdoom",
  keywords: [
    "p(doom)",
    "p doom",
    "AI extinction probability",
    "AI doom",
    "AI x-risk",
    "AI existential risk estimates",
    "p(doom) by researcher",
    "AI catastrophe probability",
    "Yudkowsky p(doom)",
    "Hinton p(doom)",
  ],
  imageAlt: "Every p(doom) estimate on the record",
});

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

  // Latest claim per person, for a clean distribution count without
  // double-counting evolved estimates.
  const latestPerPerson = new Map<string, typeof claims[number]>();
  for (const c of claims) {
    const ex = latestPerPerson.get(c.personId);
    if (!ex) {
      latestPerPerson.set(c.personId, c);
      continue;
    }
    if ((c.date ?? "") > (ex.date ?? "")) latestPerPerson.set(c.personId, c);
  }
  const latest = Array.from(latestPerPerson.values());
  const ladderForDist = ladder.map((b) => ({
    ...b,
    count: latest.filter((c) => c.valueNumber >= b.min && c.valueNumber < b.max)
      .length,
  }));
  const maxBucket = Math.max(1, ...ladderForDist.map((b) => b.count));
  const meanLatest =
    latest.reduce((acc, c) => acc + c.valueNumber, 0) / Math.max(1, latest.length);
  const sortedV = latest.map((c) => c.valueNumber).sort((a, b) => a - b);
  const medianLatest =
    sortedV.length === 0
      ? 0
      : sortedV.length % 2 === 0
      ? (sortedV[sortedV.length / 2 - 1] + sortedV[sortedV.length / 2]) / 2
      : sortedV[Math.floor(sortedV.length / 2)];

  // p(doom) by vintage, does the era your priors formed in correlate
  // with the estimate you settle on. Each tier requires 3+ datapoints.
  const byVintage: { era: VintageEra; values: number[] }[] = vintageTiers.map(
    (t) => ({ era: t.id, values: [] as number[] }),
  );
  for (const c of latest) {
    const p = getPerson(c.personId);
    const v = p?.profile?.vintage;
    if (!v) continue;
    const slot = byVintage.find((x) => x.era === v);
    if (slot) slot.values.push(c.valueNumber);
  }
  const vintageStats = byVintage
    .filter((b) => b.values.length >= 3)
    .map((b) => ({
      era: b.era,
      label: vintageTiers.find((t) => t.id === b.era)!.label,
      n: b.values.length,
      mean: b.values.reduce((a, b) => a + b, 0) / b.values.length,
    }));
  const maxVintageMean = Math.max(0.05, ...vintageStats.map((s) => s.mean));

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "p(doom) board — every AI extinction-risk estimate on record",
            description:
              "Every p(doom) estimate on the record, dated and linked to its source.",
            path: "/pdoom",
            type: "CollectionPage",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "p(doom)", path: "/pdoom" },
        ]}
      />
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
          civilisational catastrophe from AI. Definitions vary: extinction,
          disempowerment, loss of control, or just bad outcomes. The claim
          only means what the person said it means, on the date they said it.
          Every entry below links to its source.
        </p>
      </section>

      <section
        className="mb-10 border-2 border-[var(--color-ink)] p-5"
        style={{ background: "var(--color-parchment-soft)" }}
      >
        <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4">
          <p className="num-label">distribution · latest claim per person</p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span>
              <span className="num-label">n</span>{" "}
              <span style={{ fontFamily: "var(--font-display)" }}>
                {latest.length}
              </span>
            </span>
            <span>
              <span className="num-label">mean</span>{" "}
              <span style={{ fontFamily: "var(--font-display)" }}>
                {Math.round(meanLatest * 100)}%
              </span>
            </span>
            <span>
              <span className="num-label">median</span>{" "}
              <span style={{ fontFamily: "var(--font-display)" }}>
                {Math.round(medianLatest * 100)}%
              </span>
            </span>
          </div>
        </div>
        <ul className="space-y-1.5">
          {ladderForDist.map((b) => (
            <li key={b.label} className="flex items-center gap-3 text-xs">
              <span
                style={{ width: 70, color: "var(--color-ink-soft)" }}
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
                    width: `${(b.count / maxBucket) * 100}%`,
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
          A person who has stated multiple p(doom) values shows up once here,
          using their most recent claim. Below, every claim is listed,
          including past ones, so a single person can appear multiple times.
        </p>
      </section>

      {vintageStats.length >= 3 && (
        <section className="mb-10 border hairline p-5" style={{ background: "var(--color-parchment-soft)" }}>
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
            <p className="num-label">mean p(doom) by vintage · era of formation</p>
            <span className="num-label" style={{ color: "var(--color-ink-soft)" }}>
              latest claim per person
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
                  className="flex-1 h-3"
                  style={{ background: "var(--color-rule)" }}
                >
                  <div
                    style={{
                      width: `${(s.mean / maxVintageMean) * 100}%`,
                      height: "100%",
                      background: "var(--color-accent)",
                    }}
                  />
                </div>
                <span
                  className="num-label whitespace-nowrap"
                  style={{ width: 80, textAlign: "right" }}
                >
                  {Math.round(s.mean * 100)}% · n={s.n}
                </span>
              </li>
            ))}
          </ul>
          <p
            className="text-[10px] italic mt-3"
            style={{ color: "var(--color-ink-soft)" }}
          >
            The honest test of whether era predicts estimate. n is small
            per tier; read this as a signal, not a verdict. Tiers with
            fewer than 3 datapoints are hidden.
          </p>
        </section>
      )}

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
                        )}
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
