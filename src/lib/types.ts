export type LeverId =
  | "speed"
  | "concentration"
  | "control-mechanism"
  | "institutional-capacity"
  | "resilience"
  | "scope"
  | "action-authority"
  | "information-flow"
  | "cooperation-substrate"
  | "time-horizon"
  | "substrate"
  | "value-diversity"
  | "response-capacity"
  | "legitimacy"
  | "culture";

export type LeverDirection = "+" | "-" | "neutral";

export type ActsOn =
  | "ai-artefact"
  | "institutional"
  | "market-economic"
  | "population-culture"
  | "legal-individual"
  | "non-preventive"
  | "speed-timing"
  | "frame-rejection";

export type Coercion =
  | "consent"
  | "state-coercion"
  | "treaty"
  | "unilateral-force"
  | "friction"
  | "market"
  | "n-a";

export type ActorInControl = "humans" | "ai" | "multi-ai" | "none";

export type TimeHorizon =
  | "pre-transition"
  | "during-transition"
  | "post-transition"
  | "horizon-neutral";

export type LegitimacySource =
  | "technical"
  | "state"
  | "democratic"
  | "market"
  | "self"
  | "religious"
  | "extra-institutional"
  | "mixed";

export interface Strategy {
  id: string;
  name: string;
  filename: string;
  bet: string;
  mechanism: string;
  primaryLever: LeverId;
  leverDirection: LeverDirection;
  actsOn: ActsOn;
  coercion: Coercion;
  actorInControl: ActorInControl;
  timeHorizon: TimeHorizon;
  legitimacySource: LegitimacySource;
  conflictsWith: string[];
  complementsWith: string[];
  /**
   * What binds if this strategy succeeds. The successor-problem pattern,
   * a strategy that produces a worse next problem than the one it solved has
   * not done durable work. See the vault note on post-success states.
   */
  postSuccess?: string;
  /**
   * Load-bearing worldview commitments that make this strategy sensible. If
   * the commitment fails empirically or philosophically, the strategy loses
   * its target or its premise. See the vault note on philosophical commitments.
   */
  commitments?: Commitment[];
}

export type CommitmentTopic =
  | "values"
  | "ai-nature"
  | "humans"
  | "time"
  | "authority"
  | "coordination"
  | "agency";

export interface Commitment {
  topic: CommitmentTopic;
  claim: string;
  failureMode: string;
}

export interface Lever {
  id: LeverId;
  name: string;
  description: string;
  positivePull: string;
  negativePull: string;
  class: "ai-side" | "world-side" | "mixed";
}

export interface Axis {
  id: string;
  name: string;
  description: string;
  values: { id: string; name: string; description?: string }[];
}

export interface NamedPortfolio {
  id: string;
  name: string;
  description: string;
  strategies: string[];
}
