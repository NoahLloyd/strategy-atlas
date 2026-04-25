import type { Person } from "@/lib/people-types";

// Batch AE: Congresspeople, unions, and additional civil-society voices.

export const people: Person[] = [
  {
    id: "anna-eshoo",
    name: "Anna Eshoo",
    tagline: "Former US Representative (CA); AI Foundation Model Transparency Act sponsor",
    summary:
      "Silicon Valley Democrat who co-chaired the Congressional AI Caucus and co-sponsored the AI Foundation Model Transparency Act. Retired from Congress in January 2025.",
    categories: ["policy"],
    affiliations: [
      { org: "US House of Representatives (California)", role: "Former Congresswoman", end: "2025-01", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anna_Eshoo",
    twitter: "RepAnnaEshoo",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Architect of the AI Foundation Model Transparency Act; advocates for structured transparency over permission-based regulation.",
        quotes: [
          {
            text:
              "Transparency into how AI models are trained and what data is used to train them is critical for consumers and policy makers.",
            date: "2023-12",
            fidelity: "direct",
            source: {
              title:
                "Eshoo, Beyer Introduce Landmark AI Regulation Bill",
              url: "https://eshoo.house.gov/media/press-releases/eshoo-beyer-introduce-landmark-ai-regulation-bill",
              medium: "article",
              publisher: "Office of Congresswoman Anna Eshoo",
              date: "2023-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "don-beyer",
    name: "Don Beyer",
    tagline: "US Representative (VA); AI Foundation Model Transparency Act sponsor",
    summary:
      "Virginia Democrat who co-sponsored the AI Foundation Model Transparency Act with Anna Eshoo. Studying for a master's in machine learning at George Mason University during his congressional tenure.",
    categories: ["policy"],
    affiliations: [
      { org: "US House of Representatives (Virginia)", role: "Congressman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Don_Beyer",
    twitter: "RepDonBeyer",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "One of the Congress members with technical AI training; co-sponsored transparency-first AI legislation.",
        quotes: [
          {
            text:
              "We cannot regulate what we cannot audit. Transparency about training data and model characteristics is the minimum.",
            date: "2023-12",
            fidelity: "paraphrase-loose",
            source: {
              title: "Don Beyer on AI transparency",
              url: "https://beyer.house.gov/",
              medium: "article",
              publisher: "Office of Congressman Don Beyer",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "liz-fong-jones",
    name: "Liz Fong-Jones",
    tagline: "Honeycomb field CTO; tech labour voice",
    summary:
      "Former Google SRE who became a prominent voice in tech labour organising after the Google walkout. Now Honeycomb Field CTO. Public voice on AI worker rights.",
    categories: ["engineer", "activist"],
    affiliations: [
      { org: "Honeycomb", role: "Field CTO", current: true },
    ],
    twitter: "lizthegrey",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance partly as a tech-labour issue; argues workers inside AI companies need organising protections.",
        quotes: [
          {
            text:
              "Workers inside AI companies need protections to raise safety concerns. That's the governance substrate.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Liz Fong-Jones on X",
              url: "https://x.com/lizthegrey",
              medium: "tweet",
              publisher: "X/Twitter",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sean-m-connor",
    name: "Sean M. Connor",
    tagline: "Seattle AI and governance law scholar",
    summary:
      "Director of the Cascadia Innovation Corridor; former UW law professor specialising in technology governance. Advocate for regional technology regulatory capacity.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Cascadia Innovation Corridor", role: "Executive Director", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues regional cross-border regulatory capacity is an underexploited AI governance primitive.",
        quotes: [
          {
            text:
              "Regional regulatory capacity, the US Pacific Northwest plus British Columbia, for instance, is an overlooked AI governance unit.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Cascadia Innovation Corridor",
              url: "https://cascadiacorridor.org/",
              medium: "article",
              publisher: "Cascadia Innovation Corridor",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dan-jurafsky",
    name: "Dan Jurafsky",
    tagline: "Stanford NLP professor; textbook author",
    summary:
      "Stanford NLP professor whose Speech and Language Processing textbook has been the canonical NLP reference for two decades. Has written on AI's impact on language and discourse.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Stanford University", role: "Professor of Linguistics and Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Daniel_Jurafsky",
    twitter: "jurafsky",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Senior NLP academic who engages with alignment and ethics as part of the discipline's responsibility.",
        quotes: [
          {
            text:
              "NLP has moved from engineering discipline to civic infrastructure. Our responsibility is to treat it that way.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Dan Jurafsky, Stanford",
              url: "https://web.stanford.edu/~jurafsky/",
              medium: "article",
              publisher: "Stanford University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lina-dencik",
    name: "Lina Dencik",
    tagline: "Cardiff University; data-justice researcher",
    summary:
      "Cardiff University professor and co-founder of the Data Justice Lab. Scholar of data-driven surveillance and algorithmic injustice.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Cardiff University", role: "Professor", current: true },
    ],
    twitter: "linadencik",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance through data justice: how is data collected, who benefits, who is surveilled.",
        quotes: [
          {
            text:
              "Data justice means challenging how data-driven decisions redistribute power as well as resources.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Data Justice Lab",
              url: "https://datajusticelab.org/",
              medium: "article",
              publisher: "Data Justice Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kim-crayton",
    name: "Kim Crayton",
    tagline: "Anti-racism in tech strategist",
    summary:
      "Strategist who has pushed anti-racism frameworks in tech companies, including AI ethics teams. Public voice for structural framings of AI governance.",
    categories: ["activist"],
    affiliations: [
      { org: "Profitable Good Community", role: "Founder", current: true },
    ],
    twitter: "KimCrayton1",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI companies cannot build safe or fair AI without structural anti-racism work in their own organizations.",
        quotes: [
          {
            text:
              "You cannot fix AI bias without fixing the people who built the AI.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kim Crayton",
              url: "https://kimcrayton.com/",
              medium: "article",
              publisher: "kimcrayton.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
