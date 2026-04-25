export type QuoteMedium =
  | "video"
  | "podcast"
  | "article"
  | "paper"
  | "book"
  | "tweet"
  | "testimony"
  | "blog"
  | "talk"
  | "interview-transcript";

export interface Source {
  title: string;
  url: string;
  medium: QuoteMedium;
  publisher?: string;
  date?: string;
  videoId?: string;
  videoPlatform?: "youtube" | "vimeo";
  startSeconds?: number;
  endSeconds?: number;
  archiveUrl?: string;
}

export type QuoteFidelity = "direct" | "paraphrase-faithful" | "paraphrase-loose" | "summary";

export interface Quote {
  text: string;
  date?: string;
  fidelity: QuoteFidelity;
  context?: string;
  source: Source;
}

export type StrategyStance =
  | "endorses"
  | "opposes"
  | "mixed"
  | "evolved-toward"
  | "evolved-away"
  | "conditional";

export interface StrategyPosition {
  strategyId: string;
  stance: StrategyStance;
  summary: string;
  quotes: Quote[];
  // Mark true when the assignment is inferred from a passing remark or
  // background reputation, not a clear position statement. UI hides
  // tentative-only matches when filtering by strategy, so these don't
  // pollute the per-strategy reading.
  tentative?: boolean;
}

export interface PDoomClaim {
  value: number | [number, number];
  definition?: string;
  date?: string;
  source: Source;
}

export interface TimelineClaim {
  milestone: string;
  year?: number;
  range?: [number, number];
  probability?: number;
  date?: string;
  source: Source;
}

export type PersonCategory =
  | "researcher"
  | "executive"
  | "founder"
  | "policy"
  | "academic"
  | "journalist"
  | "investor"
  | "activist"
  | "public-intellectual"
  | "engineer"
  | "theorist"
  | "statistician"
  | "economist";

export interface Affiliation {
  org: string;
  role?: string;
  start?: string;
  end?: string;
  current?: boolean;
}

export type ExpertiseTier =
  | "frontier-builder"
  | "deep-technical"
  | "applied-technical"
  | "policy-meta"
  | "external-domain"
  | "commentator";

export type RecognitionTier =
  | "household-name"
  | "field-leading"
  | "established"
  | "emerging";

// When did this person's AI worldview form. Not a birth year — the era of
// AI whose problems and tools shaped their intuitions. Someone who came
// up in symbolic AI carries different priors than a post-ChatGPT entrant,
// even if both are publishing today.
export type VintageEra =
  | "pioneer"          // pre-1980 foundational figures
  | "symbolic-era"     // 1980 – 2005, classical AI, early MIRI/SI/EA
  | "pre-deep-learning"// 2005 – 2012, x-risk frame matures pre-AlexNet
  | "deep-learning"    // 2012 – 2017, post-AlexNet, ImageNet, DeepMind
  | "scaling-era"      // 2018 – 2022, GPT-2/3, Anthropic founded, scaling laws
  | "post-chatgpt";    // 2023+, mainstream wave, AISIs, AI 2027

export interface Profile {
  expertise: ExpertiseTier;
  expertiseNote: string;
  recognition: RecognitionTier;
  recognitionNote: string;
  vintage?: VintageEra;
  vintageNote?: string;
}

export interface Person {
  id: string;
  name: string;
  tagline?: string;
  summary: string;
  categories: PersonCategory[];
  affiliations: Affiliation[];
  photoUrl?: string;
  homepage?: string;
  wikipedia?: string;
  twitter?: string;
  positions: StrategyPosition[];
  pDoom?: PDoomClaim[];
  timelines?: TimelineClaim[];
  profile?: Profile;
  notes?: string;
  lastUpdated?: string;
}
