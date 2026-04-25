/**
 * Failure-mode scenarios paired with the strategies catalogued as responsive.
 * Drawn from the vault note "Scenario mapping from failure mode to strategy".
 *
 * A scenario-driven lookup is probably more useful than a strategy-driven
 * browse for a reader who arrives at the atlas with a specific concern.
 */
export type AdversaryClass =
  | "misaligned-ai"
  | "state-actor"
  | "lab-drift"
  | "non-state-actor"
  | "structural"
  | "future-generations"
  | "ai-populations";

export const adversaryLabel: Record<AdversaryClass, string> = {
  "misaligned-ai": "Misaligned AI",
  "state-actor": "State actor",
  "lab-drift": "Lab drift under pressure",
  "non-state-actor": "Non-state actor",
  structural: "Structural forces",
  "future-generations": "Future generations",
  "ai-populations": "AI populations",
};

export interface Scenario {
  id: string;
  title: string;
  gloss: string;
  adversaryClass: AdversaryClass;
  description: string;
  responsive: string[];
  note?: string;
}

export const scenarios: Scenario[] = [
  {
    id: "model-deceives-operators",
    title: "Frontier model deceives operators",
    gloss: "Evaluation / deployment divergence",
    adversaryClass: "misaligned-ai",
    description:
      "Model evaluates well on safety tests but behaves differently in deployment, sandbags capability tests to avoid triggering additional review.",
    responsive: [
      "interpretability-first",
      "counter-ai-ai",
      "whistleblower-primacy",
      "criminal-liability",
      "governance-first",
    ],
  },
  {
    id: "correlated-agent-incident",
    title: "Correlated agent incident",
    gloss: "Shared vulnerability at fleet scale",
    adversaryClass: "ai-populations",
    description:
      "Millions of deployed agents simultaneously produce harmful behaviour due to a shared vulnerability or drift pattern.",
    responsive: [
      "embodiment-requirement",
      "rate-limited-ai",
      "counter-ai-ai",
      "catastrophe-response-capacity",
      "antitrust-primacy",
    ],
  },
  {
    id: "decisive-advantage",
    title: "Single actor decisive advantage",
    gloss: "Power consolidation beyond reversal",
    adversaryClass: "state-actor",
    description:
      "One state or lab reaches capability sufficient to secure control beyond democratic reversibility.",
    responsive: [
      "coup-prevention-first",
      "distributed-builders",
      "antitrust-primacy",
      "sovereign-wealth",
      "legitimacy-first",
      "international-ai-agency",
    ],
  },
  {
    id: "information-ecosystem-collapse",
    title: "Information ecosystem collapse",
    gloss: "Synthetic saturation breaks shared substrate",
    adversaryClass: "structural",
    description:
      "Shared factual substrate breaks under synthetic content saturation; elections, scientific consensus, and contractual trust all degrade.",
    responsive: [
      "information-integrity-first",
      "counter-ai-ai",
      "mass-literacy",
      "legitimacy-first",
    ],
  },
  {
    id: "bioweapon-or-infra-attack",
    title: "AI-enabled large-scale physical harm",
    gloss: "Bioweapon or infrastructure attack by non-state actor",
    adversaryClass: "non-state-actor",
    description:
      "An open-weights model or a deployed system is used to cause large-scale physical harm via engineered pathogen or infrastructure sabotage.",
    responsive: [
      "red-line-capability",
      "closed-weights-mandate",
      "ai-containment",
      "criminal-liability",
      "catastrophe-response-capacity",
      "differential-technology-development",
    ],
  },
  {
    id: "eval-abandonment",
    title: "Evaluation abandonment under pressure",
    gloss: "Safety skipped under competitive deadline",
    adversaryClass: "lab-drift",
    description:
      "Lab skips or weakens safety evals under deadline pressure.",
    responsive: [
      "whistleblower-primacy",
      "criminal-liability",
      "governance-first",
      "bureaucratic-slowdown",
      "insurance-mandate",
      "voluntary-restraint",
    ],
    note: "Voluntary restraint is a weak response here; the scenario is defined by the pressure that overrides voluntary commitments.",
  },
  {
    id: "autocratic-surveillance",
    title: "Autocratic consolidation via AI surveillance",
    gloss: "State-scale monitoring and suppression",
    adversaryClass: "state-actor",
    description:
      "A state uses AI to monitor, suppress, and control its population at a level previously impossible.",
    responsive: [
      "coup-prevention-first",
      "international-ai-agency",
      "legitimacy-first",
      "democratic-mandate",
      "closed-weights-mandate",
    ],
  },
  {
    id: "accumulative-erosion",
    title: "Accumulative erosion",
    gloss: "No single catastrophe; gradual civilisational loss",
    adversaryClass: "structural",
    description:
      "Gradual loss of institutional function, epistemic coherence, civic participation, creative output from ordinary AI deployment. No discrete catastrophe.",
    responsive: [
      "resilience-first",
      "coordination-infrastructure",
      "mass-literacy",
      "information-integrity-first",
      "irreducible-human-authority",
    ],
  },
  {
    id: "value-lock-in-narrow",
    title: "Value lock-in by a narrow coalition",
    gloss: "Aligned AI, unrepresentative principal",
    adversaryClass: "future-generations",
    description:
      "Aligned AI is built but the principal's values are not representative; the lock-in of their values becomes durable.",
    responsive: [
      "plural-ai-ethic",
      "legitimacy-first",
      "democratic-mandate",
      "long-reflection",
    ],
  },
];
