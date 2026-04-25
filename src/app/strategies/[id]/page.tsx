import Link from "next/link";
import { notFound } from "next/navigation";
import { strategyTags, getTagById } from "@/lib/strategy-tags";
import { peopleByStrategyTag } from "@/lib/people";
import { QuoteBlock } from "@/components/QuoteBlock";
import { PersonAvatar } from "@/components/PersonAvatar";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";
import { tagToStrategyId } from "@/data/strategy-tag-bridge";

export function generateStaticParams() {
  return strategyTags.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = getTagById(id);
  if (!t) return { title: "Not found" };
  return {
    title: `${t.name} — AGI Strategies`,
    description: t.oneLine,
  };
}

export default async function StrategyTagPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tag = getTagById(id);
  if (!tag) notFound();
  const adherents = peopleByStrategyTag(id);
  const profiledAdherents = adherents.filter((p) => p.profile);
  const strategyId = tagToStrategyId[id];
  return (
    <article className="max-w-5xl mx-auto px-6 py-10">
      <header className="mb-10 border-b-2 border-[var(--color-ink)] pb-6">
        <p className="num-label mb-3">strategy tag</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {tag.name}.
        </h1>
        <p className="text-lg" style={{ color: "var(--color-ink-soft)" }}>
          {tag.oneLine}
        </p>
        {tag.aka && (
          <p className="text-sm italic mt-3" style={{ color: "var(--color-ink-soft)" }}>
            also known as: {tag.aka.join(", ")}
          </p>
        )}
        {strategyId && (
          <p className="text-sm mt-4">
            <Link href={`/strategy/${strategyId}`} className="underline-wiggle">
              See the rich strategy page →
            </Link>
          </p>
        )}
      </header>

      {profiledAdherents.length >= 3 && (
        <section className="mb-10 border hairline p-4" style={{ background: "var(--color-parchment-soft)" }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="num-label mb-2">expertise mix · {profiledAdherents.length} profiled of {adherents.length}</p>
              <div className="space-y-1.5">
                {expertiseTiers.map((t) => {
                  const count = profiledAdherents.filter((p) => p.profile!.expertise === t.id).length;
                  const max = Math.max(
                    ...expertiseTiers.map((tt) => profiledAdherents.filter((p) => p.profile!.expertise === tt.id).length),
                    1,
                  );
                  return (
                    <div key={t.id} className="flex items-center gap-2 text-xs">
                      <span style={{ width: 110, color: "var(--color-ink-soft)" }}>{t.short}</span>
                      <div className="flex-1 h-2.5" style={{ background: "var(--color-rule)" }}>
                        <div
                          style={{
                            width: `${(count / max) * 100}%`,
                            height: "100%",
                            background: "var(--color-accent)",
                          }}
                        />
                      </div>
                      <span className="num-label" style={{ width: 24, textAlign: "right" }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="num-label mb-2">recognition mix</p>
              <div className="space-y-1.5">
                {recognitionTiers.map((t) => {
                  const count = profiledAdherents.filter((p) => p.profile!.recognition === t.id).length;
                  const max = Math.max(
                    ...recognitionTiers.map((tt) => profiledAdherents.filter((p) => p.profile!.recognition === tt.id).length),
                    1,
                  );
                  return (
                    <div key={t.id} className="flex items-center gap-2 text-xs">
                      <span style={{ width: 110, color: "var(--color-ink-soft)" }}>{t.short}</span>
                      <div className="flex-1 h-2.5" style={{ background: "var(--color-rule)" }}>
                        <div
                          style={{
                            width: `${(count / max) * 100}%`,
                            height: "100%",
                            background: "var(--color-accent)",
                          }}
                        />
                      </div>
                      <span className="num-label" style={{ width: 24, textAlign: "right" }}>{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-6">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            People on the record.
          </h2>
          <span className="num-label">{adherents.length}</span>
        </div>
        {adherents.length === 0 && (
          <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
            No quotes catalogued yet for this tag.
          </p>
        )}
        <div className="space-y-12">
          {adherents.map((p) => {
            const positions = p.positions.filter((pos) => pos.strategyId === id);
            return (
              <div key={p.id}>
                <div className="flex items-start gap-4 mb-2">
                  <Link className="unstyled" href={`/people/${p.id}`}>
                    <PersonAvatar person={p} size={56} />
                  </Link>
                  <div className="flex-1 flex items-baseline justify-between gap-3 flex-wrap">
                    <div>
                      <h3
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <Link className="unstyled hover:underline" href={`/people/${p.id}`}>
                          {p.name}
                        </Link>
                      </h3>
                      {p.tagline && (
                        <p className="text-xs italic mt-1" style={{ color: "var(--color-ink-soft)" }}>
                          {p.tagline}
                        </p>
                      )}
                    </div>
                    {positions[0] && (
                      <span className="num-label">{positions[0].stance}</span>
                    )}
                  </div>
                </div>
                {positions.map((pos, i) => (
                  <div key={i} className="mb-4">
                    <p className="mb-3 text-base">{pos.summary}</p>
                    <div className="space-y-4">
                      {pos.quotes.map((q, qi) => (
                        <QuoteBlock key={qi} quote={q} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
