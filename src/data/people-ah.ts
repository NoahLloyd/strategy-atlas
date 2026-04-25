import type { Person } from "@/lib/people-types";

// Batch AH was split into chunked files (people-ah-NN.ts) so individual
// modules stay small enough for turbopack to hot-reload without OOM. This
// barrel preserves the historical import path used by lib/people.ts.

import { people as chunk01 } from "./people-ah-01";
import { people as chunk02 } from "./people-ah-02";
import { people as chunk03 } from "./people-ah-03";

export const people: Person[] = [
  ...chunk01,
  ...chunk02,
  ...chunk03,
];
