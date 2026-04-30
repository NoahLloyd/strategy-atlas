import type { MetadataRoute } from "next";
import { people } from "@/lib/people";
import { strategies } from "@/lib/strategies";
import { strategyTags } from "@/lib/strategy-tags";
import { levers } from "@/data/levers";

const BASE_URL = "https://agi-strategies.com";

const STATIC_PATHS = [
  "",
  "/about",
  "/atlas",
  "/axes",
  "/board",
  "/co-strategies",
  "/commitments",
  "/compare",
  "/identity",
  "/levers",
  "/matrix",
  "/pdoom",
  "/people",
  "/portfolio",
  "/scenarios",
  "/strategies",
  "/timelines",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));

  const strategyEntries = strategies.map((s) => ({
    url: `${BASE_URL}/strategy/${s.id}`,
    lastModified,
  }));

  const strategyTagEntries = strategyTags.map((t) => ({
    url: `${BASE_URL}/strategies/${t.id}`,
    lastModified,
  }));

  const leverEntries = levers.map((l) => ({
    url: `${BASE_URL}/levers/${l.id}`,
    lastModified,
  }));

  const peopleEntries = people.map((p) => ({
    url: `${BASE_URL}/people/${p.id}`,
    lastModified,
  }));

  return [
    ...staticEntries,
    ...strategyEntries,
    ...strategyTagEntries,
    ...leverEntries,
    ...peopleEntries,
  ];
}
