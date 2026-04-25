import type { Commitment } from "@/lib/types";

/**
 * Philosophical commitments per strategy, drawn from the vault note
 * "Each macrostrategy has philosophical commitments.md". Each entry names
 * the claim a strategy assumes about values, AI, humans, time, authority,
 * coordination, or agency, and the failure mode if that claim is wrong.
 *
 * Not every strategy is annotated yet — only the ones the source note
 * explicitly discusses. Strategies without an entry render without this
 * section rather than with a filler.
 */
export const commitmentsByStrategy: Record<string, Commitment[]> = {
  "alignment-first": [
    {
      topic: "values",
      claim: "Principals have determinate values AI can learn.",
      failureMode:
        "If values are contested or constructed, the strategy loses its target.",
    },
    {
      topic: "ai-nature",
      claim: "AI is a tool with controllable properties.",
      failureMode:
        "If AI has emergent agency, the tool frame fails and alignment becomes negotiation.",
    },
  ],
  "plural-ai-ethic": [
    {
      topic: "values",
      claim: "Values are genuinely plural rather than convergent on truth.",
      failureMode:
        "If there is moral truth, pluralism is a mistake.",
    },
  ],
  "religious-and-moral-authority": [
    {
      topic: "values",
      claim: "Moral truth exists and is accessible through traditional authority.",
      failureMode:
        "If moral authority is delegitimised by secular epistemics, the strategy loses its lever.",
    },
  ],
  "long-reflection": [
    {
      topic: "values",
      claim: "Reflection converges on better values over time.",
      failureMode:
        "If reflection diverges or reveals irreducible disagreement, the strategy's premise fails.",
    },
    {
      topic: "time",
      claim: "Indefinite delay is possible and productive.",
      failureMode:
        "If delay cannot be coordinated or if reflection stagnates, the strategy degrades into abandon-superintelligence.",
    },
  ],
  "ai-welfare-as-safety": [
    {
      topic: "ai-nature",
      claim: "AI is or may be a moral patient.",
      failureMode:
        "If moral patienthood requires sentience AI does not have, the strategy misdirects obligation.",
    },
  ],
  "ai-as-sovereign-entity": [
    {
      topic: "ai-nature",
      claim: "AI has genuine agency and normative standing.",
      failureMode:
        "If AI remains tool-like, treating it as sovereign abdicates human principals without justification.",
    },
    {
      topic: "agency",
      claim: "AI agency is primary, not instrumental.",
      failureMode:
        "If AI lacks stable reflective agency, the frame fails.",
    },
  ],
  "reframe-ai": [
    {
      topic: "ai-nature",
      claim: "The dominant principal-oriented framing is itself the problem.",
      failureMode:
        "If the principal frame is in fact adequate, reframing is strategic distraction.",
    },
  ],
  "democratic-mandate": [
    {
      topic: "humans",
      claim: "Citizens have the capacity to evaluate AI decisions.",
      failureMode:
        "If capacity is absent and cannot be built, mandate is only a legitimating ritual.",
    },
    {
      topic: "authority",
      claim: "Democratic authority is the load-bearing source of legitimacy.",
      failureMode:
        "If democratic institutions are themselves captured, mandate merely launders capture.",
    },
  ],
  "mass-literacy": [
    {
      topic: "humans",
      claim: "Citizens can be trained to evaluate AI-related claims at scale.",
      failureMode:
        "If the gap between expert and public grows faster than curriculum, training never catches up.",
    },
  ],
  "irreducible-human-authority": [
    {
      topic: "humans",
      claim:
        "Humans have properties (judgment, experience, moral status) whose authority cannot be substituted.",
      failureMode:
        "If AI can match or exceed those properties, the reservation is arbitrary.",
    },
  ],
  "human-augmentation-race": [
    {
      topic: "humans",
      claim: "Human properties scale with enhancement.",
      failureMode:
        "If enhancement hits physical or ethical ceilings before AI does, the race is lost by construction.",
    },
  ],
  "acceleration": [
    {
      topic: "time",
      claim: "Faster is better because the trajectory is good.",
      failureMode:
        "If the trajectory is bad, faster is simply arriving at catastrophe sooner.",
    },
    {
      topic: "coordination",
      claim: "Coordination will fail anyway — defect first.",
      failureMode:
        "If coordination was in fact achievable, acceleration was a self-fulfilling defection.",
    },
  ],
  "pause": [
    {
      topic: "time",
      claim: "Time buys readiness.",
      failureMode:
        "If alignment does not converge with more time, pause only postpones the decision.",
    },
    {
      topic: "coordination",
      claim: "Coordination on a halt is tractable at meaningful scale.",
      failureMode:
        "If one actor defects, the halt burns its own advocates and clears the path for defection.",
    },
  ],
  "gradualism": [
    {
      topic: "time",
      claim: "Incremental evidence accumulates faster than risk.",
      failureMode:
        "If failures are abrupt rather than gradual, incremental evidence lags the threat.",
    },
  ],
  "legitimacy-first": [
    {
      topic: "authority",
      claim: "Authority must be actively legitimated to bind.",
      failureMode:
        "If legitimation is slower than capability, legitimacy is outrun.",
    },
  ],
  "military-primacy": [
    {
      topic: "authority",
      claim: "Authority flows from capability.",
      failureMode:
        "If capability without legitimacy triggers counter-coalitions, primacy destabilises itself.",
    },
  ],
  "sabotage": [
    {
      topic: "authority",
      claim:
        "Formal authority should not bind in extremis — moral urgency trumps legality.",
      failureMode:
        "If moral urgency is contested, sabotage is simply violence by a losing faction.",
    },
  ],
  "international-ai-agency": [
    {
      topic: "coordination",
      claim: "Coordination is tractable at sufficient scale with a legitimate agency.",
      failureMode:
        "If the agency replicates existing geopolitical tensions, it becomes a venue for the conflict rather than a solution.",
    },
  ],
  "arms-control-treaty": [
    {
      topic: "coordination",
      claim: "Arms control is tractable and enforceable for AI-like technology.",
      failureMode:
        "If verification is impossible, the treaty is a declaration rather than a constraint.",
    },
  ],
  "default-drift": [
    {
      topic: "coordination",
      claim: "Coordination fails; the path is set by whoever moves first.",
      failureMode:
        "If coordination is in fact achievable, accepting drift is abdication.",
    },
  ],
  "cooperative-ai": [
    {
      topic: "agency",
      claim: "AI has sufficient agency for reciprocal arrangement.",
      failureMode:
        "If AI agency is instrumental, cooperation is a design choice humans make, not a two-sided arrangement.",
    },
  ],
  "ai-self-directed-macrostrategy": [
    {
      topic: "agency",
      claim: "AI should and can set its own goals.",
      failureMode:
        "If AI goals cannot stably include human welfare, self-direction is abandonment.",
    },
  ],
  "confucian-role-ethics": [
    {
      topic: "values",
      claim:
        "Ethics operate through fit with position and relationship rather than optimisation of preferences.",
      failureMode:
        "If preferences are the load-bearing unit, role fit becomes window-dressing on preference optimisation.",
    },
    {
      topic: "humans",
      claim:
        "Social roles are stable enough to specify fitting behaviour for AI-related positions.",
      failureMode:
        "If AI itself destabilises social structure, the role framework loses its referent.",
    },
  ],
  "ubuntu-relational-ai": [
    {
      topic: "values",
      claim:
        "Ethical status is constituted by relationships, not by internal properties.",
      failureMode:
        "If communities and AI systems cannot sustain the required dialogue at scale, the frame collapses to individualist alignment under another name.",
    },
    {
      topic: "humans",
      claim:
        "Community is a first-class actor with standing to constitute AI's ethical status.",
      failureMode:
        "If deployment infrastructure ignores community as actor, Ubuntu reduces to user-centric design.",
    },
  ],
  "constitutional-ai-governance": [
    {
      topic: "authority",
      claim:
        "Constitutional commitments bind more durably than regulatory text, and the political conditions for constitutional moments can be produced.",
      failureMode:
        "If constitutional text is interpreted multiple ways without enforcement, it becomes decorative.",
    },
  ],
  "sunset-clause": [
    {
      topic: "authority",
      claim:
        "Default toward permission is reversible by institutional design; re-authorisation can stay contested rather than routinised.",
      failureMode:
        "If renewals become automatic, the sunset is procedural theatre.",
    },
  ],
  "test-ground": [
    {
      topic: "humans",
      claim:
        "A testbed population's consent produces legitimacy the uncontrolled deployment lacks, and the data transfers to broader decisions.",
      failureMode:
        "If the testbed population is atypical or captured, the data is inapplicable or compromised.",
    },
  ],
  "ai-worker-collective-action": [
    {
      topic: "coordination",
      claim:
        "Frontier lab workers can achieve critical mass for coordinated refusal faster than labs can hire replacements.",
      failureMode:
        "Individual exit options and absent union infrastructure keep the critical mass below threshold.",
    },
  ],
  "academic-firewalling": [
    {
      topic: "coordination",
      claim:
        "Academic institutions can sustain distance from commercial AI despite funding pressure.",
      failureMode:
        "Financial dependence on commercial engagement reverses firewalling within a few budget cycles.",
    },
  ],
  "research-community-norms": [
    {
      topic: "coordination",
      claim:
        "Researcher identity (\"I am an ML researcher\") shapes behaviour more than employment, and a community can set binding norms.",
      failureMode:
        "When frontier research sits in commercial labs whose incentives override norms, the community becomes irrelevant to the binding decisions.",
    },
  ],
};

export const commitmentTopics: {
  id: "values" | "ai-nature" | "humans" | "time" | "authority" | "coordination" | "agency";
  name: string;
  description: string;
}[] = [
  {
    id: "values",
    name: "Values",
    description: "Assumptions about whether moral claims are determinate, plural, or traditional.",
  },
  {
    id: "ai-nature",
    name: "AI nature",
    description: "Whether AI is a tool, a moral patient, or a sovereign agent.",
  },
  {
    id: "humans",
    name: "Humans",
    description: "What humans can evaluate, enhance, or be substituted for.",
  },
  {
    id: "time",
    name: "Time",
    description: "Whether time works for or against the strategy, and whether delay is productive.",
  },
  {
    id: "authority",
    name: "Authority",
    description: "Where authority to act comes from — legitimacy, capability, or urgency.",
  },
  {
    id: "coordination",
    name: "Coordination",
    description: "Whether large-scale coordination is tractable at all.",
  },
  {
    id: "agency",
    name: "Agency",
    description: "Whether AI agency is instrumental, reciprocal, or primary.",
  },
];
