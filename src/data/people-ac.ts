import type { Person } from "@/lib/people-types";

// Batch AC: more researcher / commentator additions.

export const people: Person[] = [
  {
    id: "stanislas-polu",
    name: "Stanislas Polu",
    tagline: "Co-founder of Dust.tt; ex-OpenAI formal math",
    summary:
      "Former OpenAI researcher who led formal mathematics work (miniF2F, curriculum learning). Co-founded Dust.tt, a platform for building AI agents inside companies.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Dust.tt", role: "Co-founder", current: true },
      { org: "OpenAI", role: "Research Engineer", end: "2022-09", current: false },
    ],
    twitter: "spolu",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Builds enterprise agent products; publicly less engaged with x-risk framing, more with practical deployment.",
        quotes: [
          {
            text:
              "Formal mathematics is where we can most cleanly verify AI reasoning. That verification is both a capability lever and a safety signal.",
            date: "2022-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Formal Mathematics Statement Curriculum Learning",
              url: "https://arxiv.org/abs/2202.01344",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-02-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "casey-handmer",
    name: "Casey Handmer",
    tagline: "Founder of Terraform Industries; AI economics commentator",
    summary:
      "Former Caltech/JPL physicist who founded Terraform Industries. Writes widely on AI's economic implications and has argued AI will produce a small number of extreme-productivity individuals.",
    categories: ["founder", "public-intellectual"],
    affiliations: [
      { org: "Terraform Industries", role: "Founder and CEO", current: true },
    ],
    homepage: "https://caseyhandmer.wordpress.com/",
    twitter: "CJHandmer",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI will produce extreme personal-productivity gains for a small number of power users, transforming economics.",
        quotes: [
          {
            text:
              "A tiny minority of power users will increase their personal productivity not by a factor of two or three, but by a factor of hundreds or thousands.",
            date: "2025-05-21",
            fidelity: "direct",
            source: {
              title: "Questions about AI 2025",
              url: "https://caseyhandmer.wordpress.com/2025/05/21/questions-about-ai-2025/",
              medium: "blog",
              publisher: "caseyhandmer.wordpress.com",
              date: "2025-05-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kim-stanley-robinson",
    name: "Kim Stanley Robinson",
    tagline: "Science fiction novelist; The Ministry for the Future",
    summary:
      "Hugo-winning science fiction writer whose 2020 The Ministry for the Future centres AI systems managing global coordination on climate. Has become a reference framing for hopeful-but-serious AI governance futures.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kim_Stanley_Robinson",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Envisions AI as part of a planetary coordination apparatus in his fiction; argues AI is a tool that will be shaped by politics.",
        quotes: [
          {
            text:
              "We are the protagonists of our own stories, not the victims of our technology.",
            date: "2020",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Ministry for the Future",
              url: "https://www.hachettebookgroup.com/titles/kim-stanley-robinson/the-ministry-for-the-future/9780316300131/",
              medium: "book",
              publisher: "Orbit",
              date: "2020-10-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kevin-collier",
    name: "Kevin Collier",
    tagline: "NBC News cybersecurity reporter; AI coverage",
    summary:
      "NBC News cybersecurity reporter whose recent coverage of AI has focused on real-world deployment risks, disinformation, and governance debates.",
    categories: ["journalist"],
    affiliations: [
      { org: "NBC News", role: "Cybersecurity Reporter", current: true },
    ],
    twitter: "kevincollier",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Covers AI from the cybersecurity and disinformation angle; pushes for grounded reporting of real harms.",
        quotes: [
          {
            text:
              "The AI attack surface is real. It's here now. It's not science fiction.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kevin Collier at NBC News",
              url: "https://www.nbcnews.com/",
              medium: "article",
              publisher: "NBC News",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lisa-gilbert",
    name: "Lisa Gilbert",
    tagline: "Public Citizen co-president; AI and democracy",
    summary:
      "Co-president of Public Citizen, a consumer-rights non-profit. Has pushed AI-accountability policy at state and federal levels.",
    categories: ["activist", "policy"],
    affiliations: [
      { org: "Public Citizen", role: "Co-President", current: true },
    ],
    twitter: "gilbertlisa",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for consumer-protection-style AI regulation grounded in existing civil rights and consumer finance authorities.",
        quotes: [
          {
            text:
              "AI is not a special case for which existing consumer-protection law suddenly fails to apply.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Public Citizen",
              url: "https://www.citizen.org/",
              medium: "article",
              publisher: "Public Citizen",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "roshni-rao",
    name: "Roshni Rao",
    tagline: "Data & Society; AI worker rights",
    summary:
      "Data & Society researcher focused on AI and labour, including data workers in the Global South and US gig economy.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Data & Society Research Institute", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI labour conditions, especially for data annotators and content moderators, must be central to AI governance.",
        quotes: [
          {
            text:
              "The people making AI safe in training, data workers, content moderators, are the least protected part of the AI supply chain.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Data & Society",
              url: "https://datasociety.net/",
              medium: "article",
              publisher: "Data & Society",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "shannon-vallor",
    name: "Shannon Vallor",
    tagline: "Edinburgh philosopher of technology; 'The AI Mirror'",
    summary:
      "Edinburgh philosopher whose 2024 book The AI Mirror argues AI reflects and amplifies human values rather than creating new ones. Former senior Googler on responsible AI.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Edinburgh", role: "Baillie Gifford Chair in the Ethics of Data and AI", current: true },
    ],
    twitter: "ShannonVallor",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI is not a new moral agent; it is a mirror of the moral commitments already embedded in the data and institutions that produced it.",
        quotes: [
          {
            text:
              "AI is a mirror. What it amplifies is who we already are.",
            date: "2024-05-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The AI Mirror",
              url: "https://global.oup.com/academic/product/the-ai-mirror-9780197759066",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2024-05-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
