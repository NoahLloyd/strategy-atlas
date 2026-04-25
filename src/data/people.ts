import type { Person } from "@/lib/people-types";

/**
 * Repository of named people with public positions on AI/AGI strategy.
 *
 * Ground rules:
 * - every quote has a real, live primary source URL
 * - fidelity is marked honestly: direct | paraphrase-faithful | paraphrase-loose | summary
 * - video sources carry a videoId and startSeconds where possible
 * - p(doom) values are only recorded with a clear source and a date
 * - positions update as people update their views; "evolved-toward" marks shifts
 */
export const people: Person[] = [];

// Individual person files append to this array below.
