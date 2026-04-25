import { people } from "../../src/lib/people";

const profiled = people.filter((p) => p.profile);
const vintageless = profiled.filter((p) => !p.profile!.vintage);
console.log(`vintage missing: ${vintageless.length}`);
for (const p of vintageless) {
  console.log(`  - ${p.id}\t${p.name}`);
}
