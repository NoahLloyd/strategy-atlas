import { people } from "../../src/lib/people";
import { strategyTags } from "../../src/lib/strategy-tags";
import { symmetricConflicts, symmetricComplements, pairKey } from "../../src/lib/strategies";
import { tagToStrategyId } from "../../src/data/strategy-tag-bridge";

const ENDORSING_STANCES = new Set(["endorses", "mixed", "conditional", "evolved-toward"]);
const endorsersByTag = new Map<string, Set<string>>();
for (const t of strategyTags) endorsersByTag.set(t.id, new Set());
for (const p of people) {
  const heldTags = new Set(p.positions.filter(pos => ENDORSING_STANCES.has(pos.stance)).map(pos => pos.strategyId));
  for (const tagId of heldTags) endorsersByTag.get(tagId)?.add(p.id);
}

const conflicts = symmetricConflicts();
const complements = symmetricComplements();

const tagIds = strategyTags.map(t => t.id);
let surprising = 0;
let declaredConflictsShared = 0;
let pairsBothCanonical = 0;
let pairsWithOverlap6 = 0;

for (let i = 0; i < tagIds.length; i++) {
  const aId = tagIds[i];
  const aSet = endorsersByTag.get(aId)!;
  if (aSet.size === 0) continue;
  for (let j = i + 1; j < tagIds.length; j++) {
    const bId = tagIds[j];
    const bSet = endorsersByTag.get(bId)!;
    if (bSet.size === 0) continue;
    let overlap = 0;
    for (const id of aSet) if (bSet.has(id)) overlap++;
    if (overlap < 3) continue;
    if (overlap >= 6) pairsWithOverlap6++;
    const aStrat = tagToStrategyId[aId];
    const bStrat = tagToStrategyId[bId];
    if (!aStrat || !bStrat) continue;
    pairsBothCanonical++;
    const k = pairKey(aStrat, bStrat);
    if (conflicts.has(k)) {
      if (overlap >= 3) declaredConflictsShared++;
    } else if (!complements.has(k) && overlap >= 6) {
      surprising++;
    }
  }
}
console.log("pairsBothCanonical:", pairsBothCanonical);
console.log("pairsWithOverlap6:", pairsWithOverlap6);
console.log("declaredConflictsShared (overlap>=3):", declaredConflictsShared);
console.log("surprising (overlap>=6, both canonical, no declared):", surprising);
console.log();
console.log("Sample tag sizes:");
for (const t of strategyTags.slice(0, 10)) {
  const set = endorsersByTag.get(t.id)!;
  console.log(`  ${t.id}: ${set.size} endorsers`);
}
// Compute top 5 overlapping pairs (any threshold)
const sample: { aId: string; bId: string; overlap: number; aCan: boolean; bCan: boolean }[] = [];
for (let i = 0; i < tagIds.length; i++) {
  const aSet = endorsersByTag.get(tagIds[i])!;
  for (let j = i + 1; j < tagIds.length; j++) {
    const bSet = endorsersByTag.get(tagIds[j])!;
    let overlap = 0;
    for (const id of aSet) if (bSet.has(id)) overlap++;
    sample.push({
      aId: tagIds[i],
      bId: tagIds[j],
      overlap,
      aCan: !!tagToStrategyId[tagIds[i]],
      bCan: !!tagToStrategyId[tagIds[j]],
    });
  }
}
sample.sort((a, b) => b.overlap - a.overlap);
console.log();
console.log("Top 10 overlapping pairs (canonical y/n):");
for (const p of sample.slice(0, 10)) {
  console.log(`  ${p.aId} × ${p.bId}: ${p.overlap} ${p.aCan ? "Y" : "n"}/${p.bCan ? "Y" : "n"}`);
}
console.log();
console.log("Top 10 with BOTH canonical:");
const bothCan = sample.filter((p) => p.aCan && p.bCan);
for (const p of bothCan.slice(0, 10)) {
  console.log(`  ${p.aId} × ${p.bId}: ${p.overlap}`);
}
