import { people as basePeople } from "@/data/people";
import { people as peopleGroupA } from "@/data/people-a";
import { people as peopleGroupB } from "@/data/people-b";
import { people as peopleGroupC } from "@/data/people-c";
import { people as peopleGroupD } from "@/data/people-d";
import { people as peopleGroupE } from "@/data/people-e";
import { people as peopleGroupF } from "@/data/people-f";
import { people as peopleGroupG } from "@/data/people-g";
import { people as peopleGroupH } from "@/data/people-h";
import { people as peopleGroupI } from "@/data/people-i";
import { people as peopleGroupJ } from "@/data/people-j";
import { people as peopleGroupK } from "@/data/people-k";
import { people as peopleGroupL } from "@/data/people-l";
import { people as peopleGroupM } from "@/data/people-m";
import { people as peopleGroupN } from "@/data/people-n";
import { people as peopleGroupO } from "@/data/people-o";
import { people as peopleGroupP } from "@/data/people-p";
import { people as peopleGroupQ } from "@/data/people-q";
import { people as peopleGroupR } from "@/data/people-r";
import { people as peopleGroupS } from "@/data/people-s";
import { people as peopleGroupT } from "@/data/people-t";
import { people as peopleGroupU } from "@/data/people-u";
import { people as peopleGroupV } from "@/data/people-v";
import { people as peopleGroupW } from "@/data/people-w";
import { people as peopleGroupX } from "@/data/people-x";
import { people as peopleGroupY } from "@/data/people-y";
import { people as peopleGroupZ } from "@/data/people-z";
import { people as peopleGroupAa } from "@/data/people-aa";
import { people as peopleGroupAb } from "@/data/people-ab";
import { people as peopleGroupAc } from "@/data/people-ac";
import { people as peopleGroupAd } from "@/data/people-ad";
import { people as peopleGroupAe } from "@/data/people-ae";
import { people as peopleGroupAf } from "@/data/people-af";
import { people as peopleGroupAg } from "@/data/people-ag";
import { people as peopleGroupAh } from "@/data/people-ah";
import { profileOverrides } from "@/data/profile-overrides";
import type { Person } from "./people-types";

const rawPeople: Person[] = [
  ...basePeople,
  ...peopleGroupA,
  ...peopleGroupB,
  ...peopleGroupC,
  ...peopleGroupD,
  ...peopleGroupE,
  ...peopleGroupF,
  ...peopleGroupG,
  ...peopleGroupH,
  ...peopleGroupI,
  ...peopleGroupJ,
  ...peopleGroupK,
  ...peopleGroupL,
  ...peopleGroupM,
  ...peopleGroupN,
  ...peopleGroupO,
  ...peopleGroupP,
  ...peopleGroupQ,
  ...peopleGroupR,
  ...peopleGroupS,
  ...peopleGroupT,
  ...peopleGroupU,
  ...peopleGroupV,
  ...peopleGroupW,
  ...peopleGroupX,
  ...peopleGroupY,
  ...peopleGroupZ,
  ...peopleGroupAa,
  ...peopleGroupAb,
  ...peopleGroupAc,
  ...peopleGroupAd,
  ...peopleGroupAe,
  ...peopleGroupAf,
  ...peopleGroupAg,
  ...peopleGroupAh,
];

export const people: Person[] = rawPeople.map((p) => {
  const override = profileOverrides[p.id];
  return override ? { ...p, profile: p.profile ?? override } : p;
});

const byId = new Map(people.map((p) => [p.id, p]));

export function getPerson(id: string): Person | undefined {
  return byId.get(id);
}

export function peopleByStrategyTag(tagId: string): Person[] {
  return people.filter((p) =>
    p.positions.some((pos) => pos.strategyId === tagId),
  );
}

export function peopleByCategory(cat: string): Person[] {
  return people.filter((p) => p.categories.includes(cat as never));
}

export function allCategories(): string[] {
  const set = new Set<string>();
  for (const p of people) {
    for (const c of p.categories) set.add(c);
  }
  return Array.from(set).sort();
}

export function allUsedStrategyTags(): string[] {
  const set = new Set<string>();
  for (const p of people) {
    for (const pos of p.positions) set.add(pos.strategyId);
  }
  return Array.from(set).sort();
}

export function strategyTagUsage(): { id: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of people) {
    const uniq = new Set(p.positions.map((x) => x.strategyId));
    for (const id of uniq) {
      counts.set(id, (counts.get(id) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([id, count]) => ({ id, count }))
    .sort((a, b) => b.count - a.count);
}

export function peopleWithPDoom(): { person: Person; claim: NonNullable<Person["pDoom"]>[number] }[] {
  const out: { person: Person; claim: NonNullable<Person["pDoom"]>[number] }[] = [];
  for (const p of people) {
    if (!p.pDoom) continue;
    for (const claim of p.pDoom) out.push({ person: p, claim });
  }
  return out;
}
