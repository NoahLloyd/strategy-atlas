import { strategies as rawStrategies } from "@/data/strategies";
import type { LeverId, Strategy } from "@/lib/types";

export const strategies: Strategy[] = [...rawStrategies].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const strategyById: Record<string, Strategy> = Object.fromEntries(
  strategies.map((s) => [s.id, s])
);

export function getStrategy(id: string): Strategy | undefined {
  return strategyById[id];
}

export function strategiesByLever(): Record<LeverId, Strategy[]> {
  const map = {} as Record<LeverId, Strategy[]>;
  for (const s of strategies) {
    (map[s.primaryLever] ||= []).push(s);
  }
  return map;
}

/**
 * Derived conflicts: a conflict is declared explicitly in the data (same lever,
 * opposite direction). We also auto-derive from symmetry.
 */
export function symmetricConflicts(): Set<string> {
  const pairs = new Set<string>();
  for (const s of strategies) {
    for (const other of s.conflictsWith) {
      const a = [s.id, other].sort();
      pairs.add(`${a[0]}|${a[1]}`);
    }
  }
  return pairs;
}

export function symmetricComplements(): Set<string> {
  const pairs = new Set<string>();
  for (const s of strategies) {
    for (const other of s.complementsWith) {
      const a = [s.id, other].sort();
      pairs.add(`${a[0]}|${a[1]}`);
    }
  }
  return pairs;
}

export function pairKey(a: string, b: string): string {
  return [a, b].sort().join("|");
}

export type RelationType = "conflict" | "complement" | "same-lever" | "none";

export function relationBetween(a: Strategy, b: Strategy, conflictSet: Set<string>, complementSet: Set<string>): RelationType {
  if (a.id === b.id) return "none";
  const key = pairKey(a.id, b.id);
  if (conflictSet.has(key)) return "conflict";
  if (complementSet.has(key)) return "complement";
  // heuristic: same lever, same direction = redundant / same-lever reinforcing
  if (a.primaryLever === b.primaryLever && a.leverDirection === b.leverDirection) {
    return "same-lever";
  }
  return "none";
}
