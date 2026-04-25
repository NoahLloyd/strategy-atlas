import { people } from "../../src/lib/people";
import { photoIndex } from "../../src/data/photo-index";

const board = people.filter((p) => p.profile);
const missing = board.filter((p) => !p.photoUrl && !photoIndex[p.id]);

console.log(`Board total: ${board.length}`);
console.log(`Missing photos: ${missing.length}`);
for (const p of missing) {
  const wiki = p.wikipedia ? p.wikipedia.split("/").pop() : "(no-wiki)";
  console.log(`${p.id}\t${p.name}\t${wiki}`);
}
