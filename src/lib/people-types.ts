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
  notes?: string;
  lastUpdated?: string;
}
