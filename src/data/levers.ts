import { Lever } from "@/lib/types";

export const levers: Lever[] = [
  {
    id: "speed",
    name: "Speed",
    description: "How fast frontier capability advances.",
    positivePull: "Accelerate",
    negativePull: "Slow",
    class: "mixed",
  },
  {
    id: "concentration",
    name: "Concentration",
    description: "How many actors build frontier AI.",
    positivePull: "Concentrate",
    negativePull: "Distribute",
    class: "mixed",
  },
  {
    id: "control-mechanism",
    name: "Control mechanism",
    description: "How AI is kept predictable.",
    positivePull: "Add mechanism",
    negativePull: "Relax",
    class: "ai-side",
  },
  {
    id: "institutional-capacity",
    name: "Institutional capacity",
    description: "Whether state and cross-state institutions can steer the outcome.",
    positivePull: "Build",
    negativePull: "Dismantle",
    class: "world-side",
  },
  {
    id: "resilience",
    name: "Resilience",
    description: "How much the world tolerates AI failure.",
    positivePull: "Strengthen",
    negativePull: "Accept brittleness",
    class: "world-side",
  },
  {
    id: "scope",
    name: "Scope",
    description: "Which kinds of AI capability are allowed at all.",
    positivePull: "Restrict",
    negativePull: "Permit",
    class: "ai-side",
  },
  {
    id: "action-authority",
    name: "Action authority",
    description: "Who (or what) makes binding decisions.",
    positivePull: "Concentrate in humans",
    negativePull: "Delegate to AI",
    class: "mixed",
  },
  {
    id: "information-flow",
    name: "Information flow",
    description: "What gets disclosed, verified, or hidden.",
    positivePull: "Open",
    negativePull: "Close",
    class: "mixed",
  },
  {
    id: "cooperation-substrate",
    name: "Cooperation substrate",
    description:
      "Whether safety runs on AI-AI, human-AI, or human-only coordination.",
    positivePull: "AI-inclusive",
    negativePull: "Human-only",
    class: "mixed",
  },
  {
    id: "time-horizon",
    name: "Time horizon",
    description:
      "Whether safety planning looks at current systems, short-term agents, or post-ASI.",
    positivePull: "Long view",
    negativePull: "Short view",
    class: "mixed",
  },
  {
    id: "substrate",
    name: "Substrate",
    description:
      "Upstream physical inputs (compute, energy, data) or downstream substrates (information integrity, literacy).",
    positivePull: "Constrain",
    negativePull: "Release",
    class: "world-side",
  },
  {
    id: "value-diversity",
    name: "Value diversity",
    description: "Pluralism across AI systems' values.",
    positivePull: "Diversify",
    negativePull: "Homogenise",
    class: "ai-side",
  },
  {
    id: "response-capacity",
    name: "Response capacity",
    description: "Ability to recover after AI-driven harms.",
    positivePull: "Build",
    negativePull: "Neglect",
    class: "world-side",
  },
  {
    id: "legitimacy",
    name: "Legitimacy",
    description: "Democratic, religious, or civic authority for any AI path.",
    positivePull: "Secure",
    negativePull: "Bypass",
    class: "world-side",
  },
  {
    id: "culture",
    name: "Culture",
    description: "Population competence, norms, and demand shaping.",
    positivePull: "Cultivate",
    negativePull: "Drift",
    class: "world-side",
  },
];

export const leverById: Record<string, Lever> = Object.fromEntries(
  levers.map((l) => [l.id, l])
);
