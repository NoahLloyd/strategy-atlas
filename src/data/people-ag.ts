import type { Person } from "@/lib/people-types";

// Batch AG was split into chunked files (people-ag-NN.ts) so individual
// modules stay small enough for turbopack to hot-reload without OOM. This
// barrel preserves the historical import path used by lib/people.ts.

import { people as chunk01 } from "./people-ag-01";
import { people as chunk02 } from "./people-ag-02";
import { people as chunk03 } from "./people-ag-03";
import { people as chunk04 } from "./people-ag-04";
import { people as chunk05 } from "./people-ag-05";

export const people: Person[] = [
  ...chunk01,
  ...chunk02,
  ...chunk03,
  ...chunk04,
  ...chunk05,
];
