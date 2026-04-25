import Link from "next/link";
import { strategies } from "@/lib/strategies";
import {
  commitmentsByStrategy,
  commitmentTopics,
} from "@/data/commitments";
import type { Commitment } from "@/lib/types";

export const metadata = {
  title: "Commitments — Strategy Atlas",
};

export default function CommitmentsPage() {
  const annotated = strategies.filter(
    (s) => (commitmentsByStrategy[s.id] || []).length > 0
  );

  // group by topic
  const byTopic = new Map<
    string,
    { strategyId: string; strategyName: string; claim: string; failureMode: string }[]
  >();
  for (const s of annotated) {
    const list = commitmentsByStrategy[s.id] || [];
    for (const c of list) {
      const arr = byTopic.get(c.topic) || [];
      arr.push({
        strategyId: s.id,
        strategyName: s.name,
        claim: c.claim,
        failureMode: c.failureMode,
      });
      byTopic.set(c.topic, arr);
    }
  }

  const totalCommitments = Array.from(byTopic.values()).reduce(
    (n, v) => n + v.length,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">commitments</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The worldviews strategies quietly assume.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          Every strategy rests on assumptions its advocates rarely name —
          about values, AI, humans, time, authority, coordination, agency.
          If the assumption fails, the strategy loses its target or its
          premise, regardless of instrument.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Two strategies that seem instrumentally similar can rest on
          incompatible foundations. A pluralist strategy combined with a moral
          realist one is an unstable alliance: one side thinks the other is
          mistaken about the nature of morality.
        </p>
      </section>

      <section className="mb-10 grid sm:grid-cols-3 gap-4">
        <Stat label="Strategies annotated" value={annotated.length.toString()} sub={`of ${strategies.length}`} />
        <Stat label="Commitments named" value={totalCommitments.toString()} sub="across 7 topics" />
        <Stat
          label="Most common topic"
          value={topTopic(byTopic)}
          sub="where the field's hidden assumptions cluster"
        />
      </section>

      <div className="space-y-10">
        {commitmentTopics.map((topic) => {
          const entries = byTopic.get(topic.id) || [];
          if (entries.length === 0) return null;
          return (
            <section key={topic.id}>
              <div className="flex items-baseline justify-between border-b hairline pb-2 mb-4">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {topic.name}
                </h2>
                <span className="num-label">
                  {entries.length} commitment{entries.length === 1 ? "" : "s"}
                </span>
              </div>
              <p className="text-sm mb-4 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
                {topic.description}
              </p>
              <div className="space-y-3">
                {entries.map((e, i) => (
                  <div
                    key={`${topic.id}-${i}`}
                    className="border hairline p-4"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <Link
                        href={`/strategy/${e.strategyId}`}
                        className="unstyled hover:underline"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {e.strategyName}
                      </Link>
                    </div>
                    <p className="text-sm mb-1">{e.claim}</p>
                    <p className="text-xs italic" style={{ color: "var(--color-ink-soft)" }}>
                      Fails if: {e.failureMode}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-14 border-t hairline pt-6 text-sm max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <p className="mb-2">
          The annotations cover only the strategies the source notes
          explicitly discuss. Many strategies rest on commitments that have
          not yet been named. An empty row is not evidence that a strategy
          has no commitments — only that none are catalogued here.
        </p>
        <p>
          Testing these commitments is usually beyond the empirical reach of
          AI safety research but within philosophy. A productive
          collaboration between the two fields would examine which
          commitments current strategies rely on and whether they are
          defensible.
        </p>
      </section>
    </div>
  );
}

function topTopic(
  byTopic: Map<string, { strategyName: string; claim: string; failureMode: string; strategyId: string }[]>
): string {
  let best = "—";
  let bestN = 0;
  for (const t of commitmentTopics) {
    const n = (byTopic.get(t.id) || []).length;
    if (n > bestN) {
      bestN = n;
      best = t.name;
    }
  }
  return best;
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
