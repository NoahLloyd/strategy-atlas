// Bridge between two ID spaces:
//   - strategyTags (in @/lib/strategy-tags) — what people positions reference
//   - strategies   (in @/data/strategies)   — the canonical 76-entry rich catalogue
//
// The two grew separately and only overlap loosely. This map records the
// canonical-strategy id for each tag, where one exists. Used to link a
// person's strategy position back to the rich strategy page, and to
// populate /atlas with endorser faces.
//
// `null` means the tag is a real category but no canonical strategy is
// mapped yet — the tag still works for people positions, it just lacks a
// rich detail page.

export const tagToStrategyId: Record<string, string | null> = {
  pause: "pause",
  "alignment-first": "alignment-first",
  acceleration: "acceleration",
  "compute-governance": "compute-governance",
  "centralised-project": "centralised-ai-project",
  "distributed-builders": "distributed-builders",
  "open-source-maximalism": "open-source-maximalism",
  "closed-weights": "closed-weights-mandate",
  "resilience-first": "resilience-first",
  "cooperative-ai": "cooperative-ai",
  "governance-first": "governance-first",
  "international-treaty": "arms-control-treaty",
  "race-to-aligned-si": "race-to-aligned-superintelligence",
  "capability-ceiling": "capability-ceiling",
  "liability-driven": "liability-driven-safety",
  "public-ai": "public-ai",
  "democratic-mandate": "democratic-mandate",
  "abandon-superintelligence": "abandon-superintelligence",
  "narrow-ai-only": "narrow-ai-preservation",
  "differential-tech": "differential-technology-development",
  "long-reflection": "long-reflection",
  "interpretability-bet": "interpretability-first",
  "evals-driven": null,
  "RSP-style": null,
  "hardware-killswitch": null,
  "ai-skeptic": "ai-skeptic",
  "existential-primacy": null,
  "ai-welfare": "ai-welfare-as-safety",
  "digital-minds": null,
  "conditional-pause": null,
  "ai-for-safety": "ai-for-safety",
  "military-primacy": "military-primacy",
  "antitrust-primacy": "antitrust-primacy",
  "sovereign-ai": null,
  "constitution-ai": "constitutional-ai-governance",
  "scalable-oversight": null,
  "multi-agent-equilibrium": null,
  "cyborg-route": "human-augmentation-race",
  "effective-altruism-framing": null,
  "techno-optimism": null,
  "world-government": null,
  "agent-foundations": null,
  "open-endedness": null,
  "moral-circle-expansion": null,
  "near-term-harms": null,
  "security-mindset": null,
};

// Inverse map: which tag(s) point to a given canonical strategy id.
export function tagsForStrategyId(strategyId: string): string[] {
  const out: string[] = [];
  for (const [tag, sid] of Object.entries(tagToStrategyId)) {
    if (sid === strategyId) out.push(tag);
  }
  return out;
}
