import { Axis } from "@/lib/types";

export const axes: Axis[] = [
  {
    id: "acts-on",
    name: "What the strategy acts on",
    description:
      "The AI-artefact vs world-side partition. Strategies acting on AI are a minority of the named space.",
    values: [
      {
        id: "ai-artefact",
        name: "AI artefact",
        description: "Acts on the model, its training, its capabilities, or its scope.",
      },
      {
        id: "institutional",
        name: "Institutional",
        description: "Acts on governance, agencies, antitrust, treaties.",
      },
      {
        id: "market-economic",
        name: "Market / economic",
        description: "Acts on liability, insurance, compute, energy, data supply.",
      },
      {
        id: "population-culture",
        name: "Population / culture",
        description: "Acts on literacy, information integrity, legitimacy, framing.",
      },
      {
        id: "legal-individual",
        name: "Legal / individual",
        description: "Acts on specific actors, prosecution, whistleblowing, authority reservation.",
      },
      {
        id: "non-preventive",
        name: "Non-preventive",
        description: "Does not act before harm; builds resilience, exit, or response.",
      },
      {
        id: "speed-timing",
        name: "Speed / timing",
        description: "Structures when and how capability arrives.",
      },
      {
        id: "frame-rejection",
        name: "Frame rejection",
        description: "Rejects the alignment / control framing outright.",
      },
    ],
  },
  {
    id: "coercion",
    name: "Coercion level",
    description:
      "Orthogonal to lever choice. The same lever can be pulled by consent, treaty, law, friction, or force.",
    values: [
      { id: "consent", name: "Consent" },
      { id: "treaty", name: "Treaty" },
      { id: "state-coercion", name: "State coercion" },
      { id: "market", name: "Market" },
      { id: "friction", name: "Friction" },
      { id: "unilateral-force", name: "Unilateral force" },
      { id: "n-a", name: "Not applicable" },
    ],
  },
  {
    id: "actor-in-control",
    name: "Actor in control",
    description: "Who or what holds the steering role.",
    values: [
      { id: "humans", name: "Humans as principals" },
      { id: "ai", name: "AI as principal" },
      { id: "multi-ai", name: "Multi-AI equilibrium" },
      { id: "none", name: "No principal (drift)" },
    ],
  },
  {
    id: "time-horizon",
    name: "Time horizon",
    description: "When in the transition the strategy binds.",
    values: [
      { id: "pre-transition", name: "Pre-transition" },
      { id: "during-transition", name: "During transition" },
      { id: "post-transition", name: "Post-transition" },
      { id: "horizon-neutral", name: "Horizon-neutral" },
    ],
  },
  {
    id: "legitimacy-source",
    name: "Legitimacy source",
    description: "Where the strategy derives its authority to act.",
    values: [
      { id: "technical", name: "Technical" },
      { id: "state", name: "State" },
      { id: "democratic", name: "Democratic" },
      { id: "market", name: "Market" },
      { id: "self", name: "Self" },
      { id: "religious", name: "Religious" },
      { id: "extra-institutional", name: "Extra-institutional" },
      { id: "mixed", name: "Mixed" },
    ],
  },
];

export const axisById: Record<string, Axis> = Object.fromEntries(
  axes.map((a) => [a.id, a])
);
