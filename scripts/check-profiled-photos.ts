import { people } from "../src/lib/people";
import { profileOverrides } from "../src/data/profile-overrides";
import { photoIndex } from "../src/data/photo-index";

let hasPhoto = 0;
let noPhoto = 0;
const noPhotoNames: { id: string; name: string; hasWiki: boolean }[] = [];
for (const id of Object.keys(profileOverrides)) {
  const p = people.find((p) => p.id === id);
  if (!p) continue;
  if (p.photoUrl || photoIndex[id]) hasPhoto++;
  else { noPhoto++; noPhotoNames.push({ id, name: p.name, hasWiki: !!p.wikipedia }); }
}

console.log(`profiled with photo: ${hasPhoto}`);
console.log(`profiled without photo: ${noPhoto}`);
console.log(`names without photo:`);
for (const x of noPhotoNames) console.log(`  - ${x.name} (${x.id})${x.hasWiki ? " [wiki]" : ""}`);
