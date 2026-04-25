import type { Person } from "@/lib/people-types";

// Batch Z: privacy, search, and civil-rights voices.

export const people: Person[] = [
  {
    id: "gabriel-weinberg",
    name: "Gabriel Weinberg",
    tagline: "Founder and CEO of DuckDuckGo",
    summary:
      "Founder of DuckDuckGo who has extended his privacy advocacy into AI. Argues AI surveillance is more dangerous than search-engine surveillance and should be banned.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "DuckDuckGo", role: "Founder and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Gabriel_Weinberg",
    twitter: "yegg",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI surveillance is a civil-rights emergency and should be banned before it is entrenched.",
        quotes: [
          {
            text:
              "AI surveillance should be banned while there is still time. All the same privacy harms with online tracking are also present with AI, but worse.",
            date: "2024",
            fidelity: "direct",
            source: {
              title:
                "DuckDuckGo founder: AI surveillance should be banned",
              url: "https://rudevulture.com/duckduckgo-founder-ai-surveillance-should-be-banned/",
              medium: "article",
              publisher: "Rude Vulture",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mei-lin-fung",
    name: "Mei Lin Fung",
    tagline: "Chair of People-Centered Internet; AI global cooperation advocate",
    summary:
      "Chair of People-Centered Internet, founded with Vint Cerf. Chairs the Digital Cooperation and Diplomacy network. Advocates AI governance rooted in inclusive digital cooperation.",
    categories: ["activist", "public-intellectual"],
    affiliations: [
      { org: "People-Centered Internet", role: "Chair", current: true },
    ],
    twitter: "meilinfung",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates international digital cooperation as the basis for AI governance, particularly for the Global South.",
        quotes: [
          {
            text:
              "The next 4 billion people coming online will shape AI governance more than the first 4 billion did. We have to include them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "People-Centered Internet",
              url: "https://peoplecentered.net/",
              medium: "article",
              publisher: "People-Centered Internet",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "moxie-marlinspike",
    name: "Moxie Marlinspike",
    tagline: "Signal co-founder; cryptographer",
    summary:
      "Cryptographer who co-founded Signal. Has written on software-supply-chain risk in a world of ubiquitous AI-assisted coding.",
    categories: ["engineer", "founder"],
    affiliations: [
      { org: "Signal Foundation", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Moxie_Marlinspike",
    twitter: "moxie",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Engineer-grade skepticism about AI trajectories; specifically worries about supply-chain risk from AI-assisted code.",
        quotes: [
          {
            text:
              "If AI writes the code, who audits the AI?",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Moxie Marlinspike, blog archive",
              url: "https://moxie.org/",
              medium: "blog",
              publisher: "moxie.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anil-dash",
    name: "Anil Dash",
    tagline: "Glitch former CEO; technology culture writer",
    summary:
      "Longtime technology culture writer and ex-CEO of Glitch. Has written extensively on how AI fits (and breaks) the existing labour, media, and civic institutions.",
    categories: ["public-intellectual", "founder", "executive"],
    affiliations: [
      { org: "Independent writer", role: "Writer and consultant", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anil_Dash",
    twitter: "anildash",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues tech regulation should be grounded in civil-society frameworks; has criticized 'AI' as a marketing category that obscures specific harms.",
        quotes: [
          {
            text:
              "'AI' is marketing. The actual question is whose data, whose labour, and whose rules.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anil Dash blog",
              url: "https://www.anildash.com/",
              medium: "blog",
              publisher: "anildash.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mireille-hildebrandt",
    name: "Mireille Hildebrandt",
    tagline: "Brussels jurist and philosopher; 'algorithmic governance' theorist",
    summary:
      "Belgian jurist and philosopher whose work on 'smart technologies and the end of law' established foundational European framings for algorithmic governance.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Vrije Universiteit Brussel", role: "Professor of Law", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Mireille_Hildebrandt",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues that algorithmic governance displaces the structure of legal reasoning and that we need new jurisprudential tools.",
        quotes: [
          {
            text:
              "Smart technologies are rewriting the fabric of law. Unless law re-asserts itself, governance by algorithm replaces governance by law.",
            date: "2015",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Smart Technologies and the End(s) of Law",
              url: "https://www.e-elgar.com/shop/gbp/smart-technologies-and-the-end-s-of-law-9781849808750.html",
              medium: "book",
              publisher: "Edward Elgar",
              date: "2015",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "erie-meyer",
    name: "Erie Meyer",
    tagline: "Former CFPB Chief Technologist",
    summary:
      "Former Chief Technologist at the Consumer Financial Protection Bureau and the US Digital Service. Now at Vanderbilt Policy Accelerator on AI and consumer protection.",
    categories: ["policy"],
    affiliations: [
      { org: "Vanderbilt Policy Accelerator", role: "Senior Fellow", current: true },
      { org: "Consumer Financial Protection Bureau", role: "Chief Technologist", end: "2025", current: false },
    ],
    twitter: "eriemeyer",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues enforcement of existing consumer-protection law is underused against AI harms.",
        quotes: [
          {
            text:
              "There is no AI exemption in the Equal Credit Opportunity Act.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "CFPB Circular on chatbot use",
              url: "https://www.consumerfinance.gov/",
              medium: "article",
              publisher: "CFPB",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-kalai",
    name: "Adam Kalai",
    tagline: "Microsoft Research; AI fairness and safety",
    summary:
      "Microsoft Research senior principal researcher whose work on algorithmic fairness has become standard reference. Contributes to mainstream technical safety work.",
    categories: ["researcher"],
    affiliations: [
      { org: "Microsoft Research", role: "Senior Principal Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Technical researcher focused on fairness and safety engineering; contributes mainstream industry-level work.",
        quotes: [
          {
            text:
              "Fairness must be operationalised in training, not bolted on after the fact.",
            date: "2020",
            fidelity: "paraphrase-loose",
            source: {
              title: "Adam Kalai, Microsoft Research",
              url: "https://www.microsoft.com/en-us/research/people/adum/",
              medium: "article",
              publisher: "Microsoft Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ece-kamar",
    name: "Ece Kamar",
    tagline: "Microsoft Research AI Frontiers VP",
    summary:
      "Microsoft Research VP who leads the AI Frontiers lab. Runs mainstream industry research on AI reliability, tool use, and safety.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Microsoft Research", role: "VP, AI Frontiers", current: true },
    ],
    twitter: "ecekamar",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Industry-side research leadership on AI reliability, safety, and tool use.",
        quotes: [
          {
            text:
              "Reliability research is where most of the real AI safety work is happening, and most of the real progress.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Microsoft Research AI Frontiers",
              url: "https://www.microsoft.com/en-us/research/lab/ai-frontiers/",
              medium: "article",
              publisher: "Microsoft Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
