import {
  AUTHOR_EMAIL,
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./seo";
import type { Person } from "./people-types";
import type { Strategy } from "./types";
import type { StrategyTag } from "./strategy-tags";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    founder: { "@type": "Person", name: AUTHOR_NAME },
    email: AUTHOR_EMAIL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "AGI Strategies Atlas",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/people?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ProfilePage";
  primaryImage?: string;
  dateModified?: string;
}): JsonLd {
  const { name, description, path, type = "WebPage", primaryImage, dateModified } = opts;
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    ...(primaryImage ? { primaryImageOfPage: { "@type": "ImageObject", url: primaryImage } } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function personSchema(p: Person): JsonLd {
  const sameAs: string[] = [];
  if (p.homepage) sameAs.push(p.homepage);
  if (p.wikipedia) sameAs.push(p.wikipedia);
  if (p.twitter) sameAs.push(`https://x.com/${p.twitter.replace(/^@/, "")}`);

  const currentAffiliation = p.affiliations.find((a) => a.current);
  const occupations = Array.from(
    new Set(
      p.affiliations
        .filter((a) => a.role)
        .map((a) => a.role!)
        .filter(Boolean),
    ),
  ).slice(0, 5);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/people/${p.id}#person`),
    name: p.name,
    description: p.summary,
    url: absoluteUrl(`/people/${p.id}`),
    ...(p.photoUrl ? { image: p.photoUrl } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(currentAffiliation
      ? {
          affiliation: {
            "@type": "Organization",
            name: currentAffiliation.org,
          },
          ...(currentAffiliation.role ? { jobTitle: currentAffiliation.role } : {}),
        }
      : {}),
    ...(occupations.length > 0
      ? {
          hasOccupation: occupations.map((role) => ({
            "@type": "Occupation",
            name: role,
          })),
        }
      : {}),
    ...(p.categories && p.categories.length > 0
      ? { knowsAbout: ["AI safety", "AGI", ...p.categories.map((c) => c.replace(/-/g, " "))] }
      : { knowsAbout: ["AI safety", "AGI"] }),
  };
}

export function profilePageSchema(p: Person, path: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${p.name} on AGI strategy`,
    description: p.summary,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    mainEntity: { "@id": absoluteUrl(`/people/${p.id}#person`) },
    ...(p.lastUpdated ? { dateModified: p.lastUpdated } : {}),
  };
}

export function strategyTagDefinedTermSchema(
  tag: StrategyTag,
  endorserCount?: number,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": absoluteUrl(`/strategies/${tag.id}#definedterm`),
    name: tag.name,
    description: tag.oneLine,
    url: absoluteUrl(`/strategies/${tag.id}`),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/strategies#termset`,
      name: "AGI Strategies",
      url: absoluteUrl("/strategies"),
    },
    ...(tag.aka ? { alternateName: tag.aka } : {}),
    ...(endorserCount !== undefined ? { mainEntityOfPage: absoluteUrl(`/strategies/${tag.id}`) } : {}),
  };
}

export function strategyDefinedTermSchema(s: Strategy): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": absoluteUrl(`/strategy/${s.id}#definedterm`),
    name: s.name,
    description: s.bet,
    url: absoluteUrl(`/strategy/${s.id}`),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/strategies#termset`,
      name: "AGI Strategies",
      url: absoluteUrl("/strategies"),
    },
  };
}

export function leverDefinedTermSchema(opts: {
  id: string;
  name: string;
  description: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": absoluteUrl(`/levers/${opts.id}#definedterm`),
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(`/levers/${opts.id}`),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/levers#termset`,
      name: "AGI Strategy Levers",
      url: absoluteUrl("/levers"),
    },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbListSchema(items: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function itemListSchema(opts: {
  name: string;
  description?: string;
  path: string;
  items: { name: string; path: string; description?: string }[];
  itemType?: string;
}): JsonLd {
  const { name, description, path, items, itemType } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(description ? { description } : {}),
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(it.path),
      ...(itemType
        ? {
            item: {
              "@type": itemType,
              name: it.name,
              ...(it.description ? { description: it.description } : {}),
              url: absoluteUrl(it.path),
            },
          }
        : { name: it.name }),
    })),
  };
}

export function quotationSchema(opts: {
  text: string;
  author: string;
  authorUrl: string;
  url: string;
  publisher?: string;
  datePublished?: string;
}): JsonLd {
  return {
    "@type": "Quotation",
    text: opts.text,
    creator: {
      "@type": "Person",
      name: opts.author,
      url: opts.authorUrl,
    },
    url: opts.url,
    ...(opts.publisher
      ? { publisher: { "@type": "Organization", name: opts.publisher } }
      : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
  };
}

export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}
