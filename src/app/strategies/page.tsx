import Link from "next/link";
import { strategyTags } from "@/lib/strategy-tags";
import { strategyTagUsage } from "@/lib/people";

export const metadata = {
  title: "Strategies — AGI Strategies",
  description:
    "Strategy tags applied to the corpus of people on record. Tags emerge from what people actually argue.",
};

export default function StrategiesIndex() {
  const usage = new Map(strategyTagUsage().map((x) => [x.id, x.count]));
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">strategies</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Strategy tags.
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          A tag is a handle for a recurring strategic claim. Tags are inductive:
          if the corpus does not carry an argument for a tag, the tag does not
          exist here yet. Tags with one or two adherents may merge or split as
          data grows.
        </p>
      </section>
      <section className="mb-10">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategyTags
            .slice()
            .sort((a, b) => (usage.get(b.id) ?? 0) - (usage.get(a.id) ?? 0))
            .map((t) => {
              const count = usage.get(t.id) ?? 0;
              return (
                <li key={t.id}>
                  <Link href={`/strategies/${t.id}`} className="unstyled">
                    <div
                      className={`border p-4 h-full transition-colors ${
                        count > 0
                          ? "hairline hover:border-[var(--color-ink)]"
                          : "hairline opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <h3
                          className="text-lg"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {t.name}
                        </h3>
                        <span className="num-label">{count}</span>
                      </div>
                      <p
                        className="text-sm mb-2"
                        style={{ color: "var(--color-ink-soft)" }}
                      >
                        {t.oneLine}
                      </p>
                      {t.aka && (
                        <p className="text-xs italic" style={{ color: "var(--color-ink-soft)" }}>
                          also: {t.aka.join(", ")}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}
