import { strategies } from "@/lib/strategies";
import { falsificationByStrategy } from "@/data/falsification";
import { HoverStrategyLink } from "@/components/HoverStrategyLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Identity or bet: how AGI strategies are actually held",
  description:
    "Diagnostic for whether an AGI strategy is held as a bet or as identity. A strategy without a falsification signal is not strategy — it is affiliation.",
  path: "/identity",
  keywords: [
    "AGI strategy identity",
    "AI strategy as identity",
    "AI safety affiliation",
    "AI alignment identity",
    "falsification signal AI",
    "AI strategy diagnostic",
  ],
  imageAlt: "Identity or bet diagnostic for AGI strategies",
});

/**
 * Strategies that the vault note "Strategies function as identities not bets"
 * calls out as currently identity-bound in the field. Plus the diagnostic
 * questions.
 */
const identitySuspects: { strategyId: string; marker: string; note: string }[] = [
  {
    strategyId: "alignment-first",
    marker: "Career category",
    note:
      "\"Alignment researcher\" is a job title, a conference track, a grant category. Updating away from the strategy requires leaving the field.",
  },
  {
    strategyId: "pause",
    marker: "Movement membership",
    note:
      "Pause AI membership is defined by the position. Updating requires exiting the community.",
  },
  {
    strategyId: "ai-skeptic",
    marker: "Public figure",
    note:
      "Functions as identity for public critics whose standing depends on continued skepticism. Updates cost the identity.",
  },
  {
    strategyId: "acceleration",
    marker: "Subculture",
    note:
      "Identity-signalled in e/acc aesthetics, memes, social clustering. The signal is cultural, not evidential.",
  },
];

const diagnosticQuestions: { q: string; bet: string; identity: string }[] = [
  {
    q: "What evidence would change the advocate's mind?",
    bet: "Names specific, plausible signals.",
    identity: "Refuses the question, or names signals so high no real event meets them.",
  },
  {
    q: "Can the advocate articulate the strongest version of the opposing view?",
    bet: "Yes, and correctly.",
    identity: "No, or only in caricature.",
  },
  {
    q: "What costs do they pay beyond reputation?",
    bet: "Allocates resources across conditions. Has skin in the failure mode.",
    identity: "Allocates as signal. Costs reinforce rather than test.",
  },
  {
    q: "Has the advocate ever publicly updated on this topic?",
    bet: "Yes, and frames the update as a gain.",
    identity: "No, or frames past positions as \"always meant.\"",
  },
  {
    q: "Does advocating the strategy produce identity rewards (community, status, belonging)?",
    bet: "Rewards are tied to being right over time.",
    identity: "Rewards are tied to continued advocacy regardless of outcome.",
  },
];

export default function IdentityPage() {
  const lookup = (id: string) => strategies.find((s) => s.id === id);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "Identity or bet — diagnostic for AGI strategies",
            description:
              "Diagnostic for whether a strategy is held as a bet or as identity.",
            path: "/identity",
            type: "WebPage",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Identity or bet", path: "/identity" },
        ]}
      />
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">diagnostic</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Is this a bet, or an identity?
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          The survey treats every strategy as a bet about which failure mode
          binds. But in the AI safety field, many strategies function as
          identities rather than as bets. Identities persist regardless of
          evidence, and their advocates resist updates that would require
          changing them.
        </p>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          You cannot tell whether a position is a bet or an identity from
          the position itself. You have to look at how the advocate holds
          it. Five diagnostic questions:
        </p>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-0 border hairline">
          <div className="p-3 border-b hairline bg-[var(--color-parchment-soft)]">
            <span className="num-label">question</span>
          </div>
          <div className="p-3 border-b border-l hairline bg-[var(--color-parchment-soft)]">
            <span className="num-label" style={{ color: "var(--color-complement)" }}>
              bet holder
            </span>
          </div>
          <div className="p-3 border-b border-l hairline bg-[var(--color-parchment-soft)]">
            <span className="num-label" style={{ color: "var(--color-conflict)" }}>
              identity holder
            </span>
          </div>
          {diagnosticQuestions.map((d, i) => (
            <DiagnosticRow key={i} q={d.q} bet={d.bet} identity={d.identity} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-5">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Called-out identity bindings
          </h2>
          <span className="num-label">{identitySuspects.length}</span>
        </div>
        <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
          Strategies where the current advocate cohort shows identity markers
          rather than bet markers, per the vault note. The position can
          still be right; identity binding is about how, not whether.
        </p>
        <div className="space-y-4">
          {identitySuspects.map((entry) => {
            const s = lookup(entry.strategyId);
            if (!s) return null;
            return (
              <div key={entry.strategyId} className="border hairline p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <HoverStrategyLink strategy={s} placement="below">
                    <span
                      className="hover:underline"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                    >
                      {s.name}
                    </span>
                  </HoverStrategyLink>
                  <span className="num-label">{entry.marker}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
                  {entry.note}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-12 border-t hairline pt-8">
        <div className="flex items-baseline justify-between border-b hairline pb-2 mb-5">
          <h2
            className="text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Falsification signals, named.
          </h2>
          <span className="num-label">
            {Object.keys(falsificationByStrategy).length} strategies
          </span>
        </div>
        <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
          The concrete test for whether a strategy is held as a bet: name
          the signal that would update against it. These are catalogued;
          advocates who cannot name a signal are holding the position as
          identity.
        </p>
        <div className="space-y-2">
          {strategies
            .filter((s) => falsificationByStrategy[s.id])
            .map((s) => (
              <div key={s.id} className="border hairline p-3 text-sm grid grid-cols-[200px_1fr] gap-3 items-baseline">
                <HoverStrategyLink strategy={s} placement="right">
                  <span
                    className="hover:underline"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.name}
                  </span>
                </HoverStrategyLink>
                <p style={{ color: "var(--color-ink-soft)" }}>
                  {falsificationByStrategy[s.id]}
                </p>
              </div>
            ))}
        </div>
      </section>

      <section className="border-t hairline pt-6 text-sm max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <p className="mb-3">
          Why it matters. A field where positions are identities produces
          culture war dynamics rather than convergence on evidence. The
          empirical claims underneath become unobservable because
          challenging them is social apostasy.
        </p>
        <p>
          What would help. Explicit falsification signals attached to
          positions, resourced tracking against them, funding reviews that
          weight updates over persistence, public retractions treated as
          achievements rather than failures. Calibration infrastructure
          preserves bets against identity drift.
        </p>
      </section>
    </div>
  );
}

function DiagnosticRow({
  q,
  bet,
  identity,
}: {
  q: string;
  bet: string;
  identity: string;
}) {
  return (
    <>
      <div className="p-3 border-b hairline">
        <p className="text-sm">{q}</p>
      </div>
      <div className="p-3 border-b border-l hairline">
        <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {bet}
        </p>
      </div>
      <div className="p-3 border-b border-l hairline">
        <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
          {identity}
        </p>
      </div>
    </>
  );
}
