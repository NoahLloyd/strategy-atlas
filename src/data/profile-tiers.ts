import type { ExpertiseTier, RecognitionTier, VintageEra } from "@/lib/people-types";

export interface TierDefinition<T> {
  id: T;
  label: string;
  short: string;
  criterion: string;
}

export const expertiseTiers: TierDefinition<ExpertiseTier>[] = [
  {
    id: "frontier-builder",
    label: "Frontier builder",
    short: "Builds frontier systems",
    criterion:
      "Currently or recently led training, architecture, or safety work on a frontier model. Hands on the loss curve.",
  },
  {
    id: "deep-technical",
    label: "Deep technical",
    short: "Deep ML / safety technical",
    criterion:
      "Sustained peer-reviewed contribution to ML, alignment, interpretability, or safety techniques. Could review a frontier paper.",
  },
  {
    id: "applied-technical",
    label: "Applied technical",
    short: "Applied or adjacent technical",
    criterion:
      "Technical fluency from an adjacent field (security, robotics, formal methods, statistics) or applied AI work, but not on frontier loss curves or core ML theory.",
  },
  {
    id: "policy-meta",
    label: "Policy / meta",
    short: "Governance, policy, strategy",
    criterion:
      "Specialises in AI policy, regulation, governance, philanthropy, or movement strategy. Reads the technical literature but does not produce it.",
  },
  {
    id: "external-domain",
    label: "External-domain expert",
    short: "Expert in another field",
    criterion:
      "Recognised expert outside AI (philosophy, economics, biology, journalism) who weighs in on AI consequences from that vantage.",
  },
  {
    id: "commentator",
    label: "Commentator",
    short: "Public-square commentator",
    criterion:
      "Engages publicly on AI without specialised technical or domain credentials. Writers, executives commenting outside their lane, public intellectuals.",
  },
];

export const recognitionTiers: TierDefinition<RecognitionTier>[] = [
  {
    id: "household-name",
    label: "Household name",
    short: "Mass-public recognition",
    criterion:
      "Name recognition outside the AI/CS community. Featured by mainstream press, a Wikipedia page in many languages, a published bestseller, or holds a position the lay public knows.",
  },
  {
    id: "field-leading",
    label: "Field-leading",
    short: "Known across the AI/safety field",
    criterion:
      "Widely known inside the AI and AI-safety community. Appears repeatedly in top venues, podcasts, or governance forums. Not a household name to outsiders.",
  },
  {
    id: "established",
    label: "Established",
    short: "Recognised inside subfield",
    criterion:
      "Reliable, recognised voice within their specific subfield. Cited and invited but not central to general AI discourse.",
  },
  {
    id: "emerging",
    label: "Emerging",
    short: "Newer or less central voice",
    criterion:
      "Recently active, narrow following, or central in only one venue. The work may be excellent — the public footprint is still forming.",
  },
];

export const vintageTiers: TierDefinition<VintageEra>[] = [
  {
    id: "pioneer",
    label: "Pioneer",
    short: "Pre-1980 foundations",
    criterion:
      "Defining figure from before 1980. Cybernetics, formal computation, early AI laboratories. Their concept of intelligence is not bound to neural networks.",
  },
  {
    id: "symbolic-era",
    label: "Symbolic era",
    short: "1980 – 2005",
    criterion:
      "Career started in the GOFAI / expert-systems / early-rationalist period. Vinge's 1993 Singularity, MIRI founded 2000, Bostrom and Yudkowsky writing.",
  },
  {
    id: "pre-deep-learning",
    label: "Pre-deep-learning",
    short: "2005 – 2012",
    criterion:
      "Active before AlexNet. The existential-risk frame matures (FHI, OpenPhil, EA). Public AI commentary still rare; deep learning not yet dominant.",
  },
  {
    id: "deep-learning",
    label: "Deep-learning rise",
    short: "2012 – 2017",
    criterion:
      "Came up post-AlexNet. ImageNet, AlphaGo, transformer paper. DeepMind, Google Brain, FAIR establish the modern lab template.",
  },
  {
    id: "scaling-era",
    label: "Scaling era",
    short: "2018 – 2022",
    criterion:
      "Worldview formed during GPT-2/3, scaling laws, Anthropic's founding. Pre-ChatGPT but post-deep-learning. The 'scale is all you need' debate is live.",
  },
  {
    id: "post-chatgpt",
    label: "Post-ChatGPT",
    short: "2023+ mainstream wave",
    criterion:
      "Entered the AI strategy debate in or after 2023. ChatGPT was already public when their voice became influential. Often shaped by Pause letter, AISIs, AI 2027.",
  },
];

export function expertiseLabel(t: ExpertiseTier): string {
  return expertiseTiers.find((x) => x.id === t)?.label ?? t;
}

export function recognitionLabel(t: RecognitionTier): string {
  return recognitionTiers.find((x) => x.id === t)?.label ?? t;
}

export function vintageLabel(t: VintageEra): string {
  return vintageTiers.find((x) => x.id === t)?.label ?? t;
}

// Numeric coords for plotting. Higher = more expertise / more recognition.
export const expertiseRank: Record<ExpertiseTier, number> = {
  "commentator": 0,
  "external-domain": 1,
  "policy-meta": 2,
  "applied-technical": 3,
  "deep-technical": 4,
  "frontier-builder": 5,
};

export const recognitionRank: Record<RecognitionTier, number> = {
  "emerging": 0,
  "established": 1,
  "field-leading": 2,
  "household-name": 3,
};

// Vintage rank — earlier first. Useful for time-ordered displays.
export const vintageRank: Record<VintageEra, number> = {
  pioneer: 0,
  "symbolic-era": 1,
  "pre-deep-learning": 2,
  "deep-learning": 3,
  "scaling-era": 4,
  "post-chatgpt": 5,
};
