/**
 * Self-undermining thresholds per strategy. Drawn from the vault note
 * "Self undermining macrostrategies.md". Each strategy has a stable region
 * where it is self-reinforcing and an unstable region where its own pursuit
 * defeats it. Naming the threshold converts implicit overshoot risk into
 * explicit warning.
 */
export interface SelfUndermining {
  threshold: string;
  mechanism: string;
}

export const selfUnderminingByStrategy: Record<string, SelfUndermining> = {
  "alignment-first": {
    threshold: "When alignment investment hollows out institutional capacity.",
    mechanism:
      "Concentrating talent and funding into alignment produces a shortage of the democratic and institutional capacity an aligned superintelligence would land into. Solved alignment, dysfunctional substrate.",
  },
  "pause": {
    threshold: "When adopted by fewer than all significant actors.",
    mechanism:
      "Unilateral pause transfers leadership to defectors. The pausing actor loses influence over what comes next — the exact opposite of what the pause was supposed to buy.",
  },
  "race-to-aligned-superintelligence": {
    threshold: "When more than one state begins racing.",
    mechanism:
      "The race dynamic pressures every participant to cut alignment corners. A race for alignment becomes a race against alignment by step two.",
  },
  "compute-governance": {
    threshold:
      "When capability-per-flop scales faster than the flops threshold tightens.",
    mechanism:
      "Aggressive compute governance pushes development toward distillation, algorithmic efficiency, and architectures that circumvent thresholds. The governance leverage decays as the metric becomes leaky. The Goodhart case.",
  },
  "governance-first": {
    threshold:
      "When pursued through national regulation without international coordination.",
    mechanism:
      "Uncoordinated regulation produces regulatory capture opportunities in each jurisdiction. Captured regulators then accelerate the concentration the strategy was supposed to prevent.",
  },
  "centralised-ai-project": {
    threshold: "When one state's consolidation triggers mirror projects.",
    mechanism:
      "Rivals build their own centralised projects rather than accept one. The supposed benefit (single actor easier to govern) dissolves; the concentration-risk cost multiplies.",
  },
  "distributed-builders": {
    threshold: "When weights proliferate to actors who will not self-restrain.",
    mechanism:
      "The benefit (no single actor dominates) is achieved at the cost of creating many actors who each can misuse.",
  },
  "voluntary-restraint": {
    threshold:
      "When capability pressure reaches the level where a single lab defection flips the equilibrium.",
    mechanism:
      "Commitments that hold under mild capability pressure weaken visibly under strong pressure. Repeated RSP revisions are the observable pattern.",
  },
  "military-primacy": {
    threshold:
      "When one state's pursuit triggers mirror pursuit by rivals.",
    mechanism:
      "Every participant including the original mover races under worse conditions than they started in. Same structure as the race strategy, more acute.",
  },
  "open-source-maximalism": {
    threshold: "When capabilities exceed defender throughput.",
    mechanism:
      "The offence-defence symmetry holds only where defender access bounds the risk. Outside that domain open release is a one-way ratchet.",
  },
  "interpretability-first": {
    threshold: "When safety talent concentrates away from governance and resilience.",
    mechanism:
      "If interpretability then fails to scale, the stripped adjacent families had no time to mature as alternatives.",
  },
  "cooperative-ai": {
    threshold:
      "Before commitment and verification technology is mature enough for stable cooperation.",
    mechanism:
      "Unstable multi-agent regimes inherit the failure modes of imperfect cooperation without the benefits of robust cooperation.",
  },
  "multipolarity": {
    threshold: "Without reliable capability verification.",
    mechanism:
      "Actors assume the worst about each other — the dark-forest failure. Stable multipolarity requires legibility that current AI systems lack.",
  },
  "acceleration": {
    threshold: "When adopted by more than one actor.",
    mechanism:
      "The race dynamic it assumes away triggers. Each actor cuts safety corners faster as the others do.",
  },
  "antitrust-primacy": {
    threshold:
      "When enforced first against the most safety-conscious labs (because they are most visible and litigable).",
    mechanism:
      "Hollows out the safety end of the industry; the remaining frontier concentrates where antitrust cannot reach.",
  },
  "closed-weights-mandate": {
    threshold: "When state custody exceeds state competence to secure.",
    mechanism:
      "Concentrates frontier capability inside the state apparatus most capable of losing it. The nuclear-secrets precedent is the reference case.",
  },
  "sabotage": {
    threshold: "When visibly pursued.",
    mechanism:
      "Consolidates state protection around labs, accelerating the alliance the strategy was meant to break.",
  },
  "democratic-mandate": {
    threshold: "When the media environment is already AI-shaped.",
    mechanism:
      "Mandates reflect preferences of the AI the mandate was meant to constrain.",
  },
  "information-integrity-first": {
    threshold: "When provenance is built as universal infrastructure.",
    mechanism:
      "Produces surveillance infrastructure the strategy's authoritarian neighbour uses for unrelated ends.",
  },
  "religious-and-moral-authority": {
    threshold: "When invoked by citing multiple traditions.",
    mechanism:
      "Surfaces inter-tradition disagreement and dissipates moral force.",
  },
  "mass-literacy": {
    threshold: "When literate populations interact with AI daily regardless.",
    mechanism:
      "Produces ambient mediation rather than informed resistance.",
  },
  "bureaucratic-slowdown": {
    threshold: "Without substantive teeth behind the paperwork.",
    mechanism:
      "Labs comply with paperwork and ignore the intent.",
  },
  "insurance-mandate": {
    threshold: "At catastrophic scale beyond reinsurance capacity.",
    mechanism: "Triggers market exit rather than tighter safety requirements.",
  },
  "plural-ai-ethic": {
    threshold:
      "When pursued by labs sharing feedback providers and architectures.",
    mechanism:
      "Nominal pluralism with real convergence. Value diversity on paper, value collapse in substrate.",
  },
};
