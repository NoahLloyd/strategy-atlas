import type { MetadataRoute } from "next";
import { people } from "@/lib/people";
import { strategies } from "@/lib/strategies";
import { strategyTags } from "@/lib/strategy-tags";
import { levers } from "@/data/levers";
import { SITE_URL } from "@/lib/seo";

type Frequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type StaticEntry = {
  path: string;
  priority: number;
  changeFrequency: Frequency;
};

const STATIC_ENTRIES: StaticEntry[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/people", priority: 0.95, changeFrequency: "daily" },
  { path: "/strategies", priority: 0.95, changeFrequency: "daily" },
  { path: "/atlas", priority: 0.9, changeFrequency: "weekly" },
  { path: "/board", priority: 0.85, changeFrequency: "weekly" },
  { path: "/pdoom", priority: 0.85, changeFrequency: "weekly" },
  { path: "/timelines", priority: 0.85, changeFrequency: "weekly" },
  { path: "/levers", priority: 0.8, changeFrequency: "weekly" },
  { path: "/matrix", priority: 0.8, changeFrequency: "weekly" },
  { path: "/axes", priority: 0.7, changeFrequency: "monthly" },
  { path: "/scenarios", priority: 0.75, changeFrequency: "weekly" },
  { path: "/co-strategies", priority: 0.75, changeFrequency: "weekly" },
  { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/commitments", priority: 0.7, changeFrequency: "monthly" },
  { path: "/identity", priority: 0.65, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
];

function parseDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ENTRIES.map((e) => ({
    url: `${SITE_URL}${e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  const strategyEntries: MetadataRoute.Sitemap = strategies.map((s) => ({
    url: `${SITE_URL}/strategy/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const strategyTagEntries: MetadataRoute.Sitemap = strategyTags.map((t) => ({
    url: `${SITE_URL}/strategies/${t.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const leverEntries: MetadataRoute.Sitemap = levers.map((l) => ({
    url: `${SITE_URL}/levers/${l.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const peopleEntries: MetadataRoute.Sitemap = people.map((p) => ({
    url: `${SITE_URL}/people/${p.id}`,
    lastModified: parseDate(p.lastUpdated) ?? now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...strategyTagEntries,
    ...peopleEntries,
    ...strategyEntries,
    ...leverEntries,
  ];
}
