import type { ExpertiseTier, RecognitionTier } from "@/lib/people-types";

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

export function expertiseLabel(t: ExpertiseTier): string {
  return expertiseTiers.find((x) => x.id === t)?.label ?? t;
}

export function recognitionLabel(t: RecognitionTier): string {
  return recognitionTiers.find((x) => x.id === t)?.label ?? t;
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
