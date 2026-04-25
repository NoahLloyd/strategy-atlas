import type { Strategy } from "@/lib/types";
import { leverById } from "@/data/levers";

/**
 * A pair of strategies either conflicts or composes. The atlas needs to name
 * *how* — not just that they do. This module classifies a pair into a
 * mechanism and produces a short human-readable label.
 *
 * The classifier is structural: it reads the coordinates each strategy carries
 * (primary lever, direction, time horizon, acts-on, coercion, legitimacy)
 * rather than looking up a hand-authored per-pair note. That keeps the 68×68
 * matrix legible without every cell needing bespoke commentary.
 */

export type ConflictMechanism =
  | "lever-opposition"
  | "frame-opposition"
  | "scope-opposition";

export type ComplementMechanism =
  | "same-lever-reinforce"
  | "same-phase-different-layer"
  | "stage-sequenced"
  | "cross-side-bridge"
  | "same-side-diversify"
  | "shared-authority"
  | "adjacent-bet";

export type SameLeverMechanism = "same-lever-twin";

export type PairMechanism =
  | ConflictMechanism
  | ComplementMechanism
  | SameLeverMechanism;

export interface MechanismDescriptor {
  id: PairMechanism;
  label: string;
  kind: "conflict" | "complement" | "same-lever";
  short: string;
  explain: string;
}

export const mechanismCatalogue: MechanismDescriptor[] = [
  {
    id: "lever-opposition",
    label: "Lever opposition",
    kind: "conflict",
    short: "same lever, opposite pull",
    explain:
      "The pair's primary lever is the same; they pull it in opposite directions. A portfolio containing both is internally incoherent on that lever.",
  },
  {
    id: "frame-opposition",
    label: "Frame opposition",
    kind: "conflict",
    short: "incompatible premises",
    explain:
      "The strategies accept different premises about what AI is or what the binding problem is. They conflict not on lever choice but on the frame that makes lever choice sensible.",
  },
  {
    id: "scope-opposition",
    label: "Scope opposition",
    kind: "conflict",
    short: "same lever, scope blocks combination",
    explain:
      "Different direction on the same lever plus scope commitments that cannot co-exist — e.g., one permanently forbids what the other permits.",
  },
  {
    id: "same-lever-reinforce",
    label: "Same-lever reinforce",
    kind: "complement",
    short: "same lever, same pull, different mechanism",
    explain:
      "Both strategies pull the same lever in the same direction by different means. They stack: doing both amplifies the pull, at the cost of double-counting in portfolio audits.",
  },
  {
    id: "same-phase-different-layer",
    label: "Same phase, different layer",
    kind: "complement",
    short: "same stage, distinct levers",
    explain:
      "Both are active in the same phase of the transition but act on different layers (model vs institution vs culture). They cover different failure modes inside the same window.",
  },
  {
    id: "stage-sequenced",
    label: "Stage-sequenced",
    kind: "complement",
    short: "one sets up the other",
    explain:
      "The pair is phase-offset: one acts before the transition, the other during or after. The first creates the conditions under which the second binds.",
  },
  {
    id: "cross-side-bridge",
    label: "Cross-side bridge",
    kind: "complement",
    short: "one AI-side, one world-side",
    explain:
      "One acts on the model, the other on institutions or culture. The bridge hedges against both artefact-level and substrate-level failure.",
  },
  {
    id: "same-side-diversify",
    label: "Same-side diversification",
    kind: "complement",
    short: "same side, different lever",
    explain:
      "Both act on the same side (AI or world) but pull distinct levers. They cover several failure modes on that side while leaving the other side uncovered.",
  },
  {
    id: "shared-authority",
    label: "Shared authority",
    kind: "complement",
    short: "same legitimacy source",
    explain:
      "Different levers, same legitimacy source (democratic, state, technical, market). The pair hangs together under one kind of authority — it stands or falls with that authority.",
  },
  {
    id: "adjacent-bet",
    label: "Adjacent bet",
    kind: "complement",
    short: "different levers, loosely coupled",
    explain:
      "Different levers, different directions of action. They reinforce only via the general principle that covering more bets dominates covering fewer.",
  },
  {
    id: "same-lever-twin",
    label: "Same-lever twin",
    kind: "same-lever",
    short: "same lever, same pull",
    explain:
      "Both use the same lever in the same direction. Usually redundant inside a portfolio — each dollar or effort unit only buys one lever pull, even if two strategies are named.",
  },
];

export const mechanismById: Record<PairMechanism, MechanismDescriptor> =
  Object.fromEntries(mechanismCatalogue.map((m) => [m.id, m])) as Record<
    PairMechanism,
    MechanismDescriptor
  >;

/**
 * Strategies that reject the dominant "alignment / control" frame. When a
 * frame-rejecting strategy appears in a conflict edge, the conflict is
 * likely a frame conflict even when the levers technically differ.
 */
const frameRejectors = new Set([
  "ai-as-sovereign-entity",
  "ai-self-directed-macrostrategy",
  "reframe-ai",
  "default-drift",
  "acceleration",
  "ai-skeptic",
]);

export function classifyConflict(a: Strategy, b: Strategy): ConflictMechanism {
  const sameLever = a.primaryLever === b.primaryLever;
  const oppositePull =
    (a.leverDirection === "+" && b.leverDirection === "-") ||
    (a.leverDirection === "-" && b.leverDirection === "+");

  if (sameLever && oppositePull) {
    // Scope opposition when one is a permanent-foreclosure strategy
    const scopePermanent = (s: Strategy) =>
      s.id === "abandon-superintelligence" ||
      s.id === "capability-ceiling" ||
      s.id === "narrow-ai-preservation";
    if (scopePermanent(a) || scopePermanent(b)) return "scope-opposition";
    return "lever-opposition";
  }

  if (frameRejectors.has(a.id) || frameRejectors.has(b.id)) {
    return "frame-opposition";
  }
  if (sameLever) return "lever-opposition";
  return "frame-opposition";
}

export function classifyComplement(
  a: Strategy,
  b: Strategy
): ComplementMechanism {
  const sameLever = a.primaryLever === b.primaryLever;
  const sameDir = a.leverDirection === b.leverDirection;
  if (sameLever && sameDir) return "same-lever-reinforce";

  const la = leverById[a.primaryLever];
  const lb = leverById[b.primaryLever];
  const aSide = la?.class;
  const bSide = lb?.class;

  const samePhase =
    a.timeHorizon === b.timeHorizon && a.timeHorizon !== "horizon-neutral";
  const differentPhase =
    a.timeHorizon !== b.timeHorizon &&
    a.timeHorizon !== "horizon-neutral" &&
    b.timeHorizon !== "horizon-neutral";

  // cross-side bridge: one ai-side, one world-side
  const crossSide =
    (aSide === "ai-side" && bSide === "world-side") ||
    (aSide === "world-side" && bSide === "ai-side");
  if (crossSide) return "cross-side-bridge";

  if (differentPhase) return "stage-sequenced";

  if (samePhase) return "same-phase-different-layer";

  // Same side, different levers
  if (aSide && bSide && aSide === bSide) return "same-side-diversify";

  // Share legitimacy when everything else is ambiguous
  if (
    a.legitimacySource === b.legitimacySource &&
    a.legitimacySource !== "mixed"
  ) {
    return "shared-authority";
  }
  return "adjacent-bet";
}

/**
 * Same lever, same direction, but not explicitly listed as complement. These
 * pairs are "twins" — they stack on one lever and double-count in portfolios.
 */
export function classifySameLever(): SameLeverMechanism {
  return "same-lever-twin";
}

export function mechanismForPair(
  a: Strategy,
  b: Strategy,
  kind: "conflict" | "complement" | "same-lever"
): MechanismDescriptor {
  if (kind === "conflict") return mechanismById[classifyConflict(a, b)];
  if (kind === "complement") return mechanismById[classifyComplement(a, b)];
  return mechanismById[classifySameLever()];
}
