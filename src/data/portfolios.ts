import type { NamedPortfolio } from "@/lib/types";

/**
 * Named portfolios for comparison. Each corresponds to an implicit or stated
 * bundle of macrostrategies visible in the field.
 */
export const portfolios: NamedPortfolio[] = [
  {
    id: "forethought",
    name: "Forethought grand challenges",
    description:
      "The stated portfolio in the Forethought AI grand challenges framing: alignment, governance, resilience, distribution. Lever diverse on paper; method mono inside the control-mechanism lever.",
    strategies: [
      "alignment-first",
      "governance-first",
      "resilience-first",
      "sovereign-wealth",
      "differential-technology-development",
    ],
  },
  {
    id: "anthropic-rsp",
    name: "Anthropic-style responsible scaling",
    description:
      "Voluntary lab commitments plus alignment research plus capability thresholds. Concentrated on technical authority and consent-based coercion.",
    strategies: [
      "voluntary-restraint",
      "alignment-first",
      "capability-ceiling",
      "interpretability-first",
      "ai-for-safety",
    ],
  },
  {
    id: "uk-aisi",
    name: "UK AISI programme",
    description:
      "Interpretability and evaluation inside a governance shell. Information flow + control mechanism + institutional capacity.",
    strategies: [
      "interpretability-first",
      "governance-first",
      "red-line-capability",
      "scientific-accumulation",
    ],
  },
  {
    id: "eu-ai-act",
    name: "EU AI Act",
    description:
      "Governance-first with flops thresholds and irreducible human authority for certain decisions. State coercion, pre-transition, legitimacy-from-democratic-institutions.",
    strategies: [
      "governance-first",
      "capability-ceiling",
      "irreducible-human-authority",
      "red-line-capability",
    ],
  },
  {
    id: "civil-society-non-ea",
    name: "Civil society (non-EA)",
    description:
      "AI Now / DAIR / Algorithmic Justice League lineage: anti-concentration, anti-corporate power, distribution of benefit.",
    strategies: [
      "antitrust-primacy",
      "distributed-builders",
      "open-source-maximalism",
      "sovereign-wealth",
      "democratic-mandate",
    ],
  },
  {
    id: "open-phil-implicit",
    name: "Open Phil / EA funder implicit",
    description:
      "Revealed by funding allocation: heavy alignment, some interpretability, some governance-via-evaluations. Under-covers resilience, distribution, coordination substrate.",
    strategies: [
      "alignment-first",
      "interpretability-first",
      "ai-for-safety",
      "scientific-accumulation",
      "governance-first",
    ],
  },
  {
    id: "race-to-asi",
    name: "Race to aligned ASI",
    description:
      "Centralised state-backed push for superintelligence, cast as safety via legitimate control. Concentration up, speed up, alignment bet load-bearing.",
    strategies: [
      "race-to-aligned-superintelligence",
      "centralised-ai-project",
      "military-primacy",
      "alignment-first",
      "closed-weights-mandate",
    ],
  },
  {
    id: "pause-coalition",
    name: "Pause coalition",
    description:
      "Buy time for alignment and governance to catch up. Speed down, capability ceiling, democratic mandate.",
    strategies: [
      "pause",
      "capability-ceiling",
      "compute-governance",
      "democratic-mandate",
      "bureaucratic-slowdown",
    ],
  },
  {
    id: "world-side-bet",
    name: "World-side bet",
    description:
      "If the binding constraint is not AI but the world around it, the portfolio looks like this. A rare stated position today.",
    strategies: [
      "resilience-first",
      "legitimacy-first",
      "information-integrity-first",
      "mass-literacy",
      "catastrophe-response-capacity",
      "coup-prevention-first",
    ],
  },
  {
    id: "one-from-each-lever",
    name: "One from each lever",
    description:
      "A maximally lever-diverse portfolio: one strategy per primary lever, all pulling toward safety. Demonstrates how broad a genuinely hedged portfolio would have to be.",
    strategies: [
      "pause",
      "distributed-builders",
      "alignment-first",
      "governance-first",
      "resilience-first",
      "capability-ceiling",
      "irreducible-human-authority",
      "interpretability-first",
      "cooperative-ai",
      "long-reflection",
      "mass-literacy",
      "plural-ai-ethic",
      "catastrophe-response-capacity",
      "legitimacy-first",
      "consumer-refusal",
    ],
  },
];

export const portfolioById: Record<string, NamedPortfolio> = Object.fromEntries(
  portfolios.map((p) => [p.id, p])
);
