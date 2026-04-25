/**
 * Vintage drift per strategy, the content a name has carried over time.
 * Drawn from the vault note "Strategies evolve under the same name".
 *
 * A strategy's name is stable while its substance drifts. A reader acting
 * on "alignment first" without asking which vintage is being meant is at
 * risk of acting on a stale or absorbed version of the position.
 */
export interface VintageEntry {
  period: string;
  meaning: string;
}

export const vintagesByStrategy: Record<string, VintageEntry[]> = {
  "alignment-first": [
    {
      period: "2015",
      meaning:
        "Solving the principal–agent problem for arbitrary specified values. A research agenda against future agentic systems.",
    },
    {
      period: "2026",
      meaning:
        "Training models to produce helpful, honest, harmless outputs via RLHF and constitutional methods. Current alignment practice absorbs this label.",
    },
  ],
  "pause": [
    {
      period: "2023",
      meaning:
        "Halt all frontier training via multilateral agreement. FLI open letter framing.",
    },
    {
      period: "2026",
      meaning:
        "Most advocates now mean conditional pause triggered by eval thresholds, which is capability ceiling renamed.",
    },
  ],
  "governance-first": [
    {
      period: "2020",
      meaning: "Passing substantive AI legislation.",
    },
    {
      period: "2026",
      meaning:
        "Often means standard-setting at safety institutes plus international declarations, which is closer to voluntary restraint with state endorsement.",
    },
  ],
  "compute-governance": [
    {
      period: "2022",
      meaning: "Export controls on frontier chips.",
    },
    {
      period: "2026",
      meaning:
        "Broadened to reporting requirements, cloud access controls, and domestic audits, tools the original frame did not consider.",
    },
  ],
};
