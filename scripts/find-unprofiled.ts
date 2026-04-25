import { people } from "../src/lib/people";
import { profileOverrides } from "../src/data/profile-overrides";

const unprofiled = people
  .filter((p) => !profileOverrides[p.id])
  .map((p) => ({
    id: p.id,
    name: p.name,
    positionCount: p.positions.length,
    quoteCount: p.positions.reduce((acc, pos) => acc + pos.quotes.length, 0),
    hasWiki: !!p.wikipedia,
    hasPDoom: !!p.pDoom?.length,
    affiliations: p.affiliations.map((a) => a.org).join(", "),
  }))
  .sort((a, b) => b.quoteCount - a.quoteCount || b.positionCount - a.positionCount);

console.log("Top 80 unprofiled by quote count:");
for (const p of unprofiled.slice(0, 80)) {
  console.log(`${p.quoteCount}q ${p.positionCount}p - ${p.name} (${p.id}) ${p.hasWiki ? '[wiki]' : ''} ${p.hasPDoom ? '[pdoom]' : ''} :: ${p.affiliations.slice(0, 80)}`);
}
