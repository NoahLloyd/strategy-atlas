import type { Person } from "@/lib/people-types";

// Batch AB: deeper index of lesser-known but well-documented figures.

export const people: Person[] = [
  {
    id: "shivon-zilis",
    name: "Shivon Zilis",
    tagline: "Neuralink director; OpenAI board alumna",
    summary:
      "Canadian technology executive who serves on the Neuralink leadership team. Former OpenAI board observer (2016–2019) and long-time Musk collaborator on AI safety framings.",
    categories: ["executive", "investor"],
    affiliations: [
      { org: "Neuralink", role: "Director of Operations and Special Projects", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Shivon_Zilis",
    twitter: "shivon",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Publicly argues AI is the most consequential technology humanity creates and that getting it right is an existential-relevance question.",
        quotes: [
          {
            text:
              "AI's going to be one of the fundamentally transformative technologies humanity creates, if not the most. We just need to make sure, from a humanity perspective, this goes well.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Shivon Zilis on AI and humanity",
              url: "https://en.wikipedia.org/wiki/Shivon_Zilis",
              medium: "article",
              publisher: "Wikipedia (citing interviews)",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-sheehan",
    name: "Matt Sheehan",
    tagline: "Carnegie Endowment China AI fellow",
    summary:
      "Carnegie Endowment for International Peace senior fellow focused on China's AI development. Author of widely-cited tracking reports on Chinese AI governance.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Carnegie Endowment for International Peace", role: "Senior Fellow, Asia Program", current: true },
    ],
    twitter: "mattsheehan88",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues China's AI governance is often misread in Washington; publishes detailed maps of Chinese regulatory developments.",
        quotes: [
          {
            text:
              "China's approach to AI governance is neither monolithic nor simply a copy of Western frameworks.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Matt Sheehan at Carnegie",
              url: "https://carnegieendowment.org/experts/matt-sheehan",
              medium: "article",
              publisher: "Carnegie Endowment",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ev-williams",
    name: "Evan Williams",
    tagline: "Twitter co-founder; Medium founder",
    summary:
      "Twitter and Medium co-founder who has written about his concerns with AI-driven social media and with the direction of the industry.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Medium", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Evan_Williams_(Internet_entrepreneur)",
    twitter: "ev",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Publicly concerned about AI's effect on information ecosystems; cautious about both hype and doom.",
        quotes: [
          {
            text:
              "We are in the middle of an experiment on the information ecosystem. We should not pretend we have consent to run it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ev Williams interviews",
              url: "https://medium.com/@ev",
              medium: "blog",
              publisher: "Medium",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sajjad-sayyed-hossain",
    name: "Sajjad Sayyed Hossain",
    tagline: "Bangladesh-based AI policy researcher",
    summary:
      "Representative voice for Bangladesh and Global South AI-governance perspectives. Writes on AI applications in developing economies.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Independent researcher", role: "AI policy analyst", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance frameworks designed in developed countries are often poorly adapted to developing economies.",
        quotes: [
          {
            text:
              "The governance infrastructure developed for OECD countries does not neatly apply to lower-income jurisdictions. We need frameworks designed from the ground up for the reality of deployment here.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI for Good — South Asia voices",
              url: "https://aiforgood.itu.int/",
              medium: "article",
              publisher: "AI for Good",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brian-tse",
    name: "Brian Tse",
    tagline: "Founder of Concordia AI; China AI safety",
    summary:
      "Founder of Concordia AI, a Beijing-based research organisation focused on AI safety and Chinese-Western dialogue.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Concordia AI", role: "Founder", current: true },
    ],
    twitter: "briantsehc",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Builds dialogue capacity between Western and Chinese AI safety communities; argues productive US-China AI safety cooperation is feasible.",
        quotes: [
          {
            text:
              "There is a real Chinese AI safety research community. Western governance conversations often miss it entirely.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Concordia AI",
              url: "https://www.concordia-ai.com/",
              medium: "article",
              publisher: "Concordia AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chinmayi-arun",
    name: "Chinmayi Arun",
    tagline: "Yale ISP fellow; Indian tech policy scholar",
    summary:
      "Legal scholar whose work bridges Indian, US, and international tech policy. Has published on AI and content moderation, the digital public sphere, and platform governance.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Yale Information Society Project", role: "Executive Director", current: true },
    ],
    twitter: "chinmayiarun",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance must take non-US, non-EU legal systems seriously; frames AI policy through a comparative constitutional law lens.",
        quotes: [
          {
            text:
              "AI governance frameworks built on US and EU constitutional premises often don't translate. Indian, Brazilian, and South African jurisprudence has its own grip on these problems.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Chinmayi Arun at Yale ISP",
              url: "https://law.yale.edu/isp",
              medium: "article",
              publisher: "Yale ISP",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "steven-weber",
    name: "Steven Weber",
    tagline: "UC Berkeley political scientist; tech governance",
    summary:
      "Berkeley political scientist who has written widely on tech governance, including Success of Open Source and recent work on AI and international order.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Political Science", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance is shaping the emerging international order; US and Chinese approaches will define 21st-century geopolitics.",
        quotes: [
          {
            text:
              "AI governance is the new terrain of international order. The norms set in this decade will structure geopolitics for decades.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Steven Weber — UC Berkeley",
              url: "https://polisci.berkeley.edu/people/person/steven-weber",
              medium: "article",
              publisher: "UC Berkeley",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-karp",
    name: "Alex Karp",
    tagline: "CEO of Palantir",
    summary:
      "Palantir CEO who has positioned the company as the main Western defense-AI vendor. Publicly argues the US must win the AI race against China and that AI safety framings risk American defeat.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Palantir", role: "CEO and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alex_Karp",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues US AI supremacy is a national-security imperative; Palantir is positioned around this framing.",
        quotes: [
          {
            text:
              "If we don't build the most powerful AI in the West, China will.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Alex Karp on Palantir and defense AI",
              url: "https://www.palantir.com/",
              medium: "article",
              publisher: "Palantir",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "palmer-luckey",
    name: "Palmer Luckey",
    tagline: "Founder of Anduril; defense AI builder",
    summary:
      "Oculus founder who founded Anduril to build Western defense AI and autonomous systems. Argues the US and allies must develop AI-enabled weapons before adversaries.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Anduril Industries", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Palmer_Luckey",
    twitter: "PalmerLuckey",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues Western AI-enabled defense capacity is essential; has publicly criticized AI-safety-focused hiring restrictions among frontier labs.",
        quotes: [
          {
            text:
              "If we don't build AI weapons, our adversaries will, and we will lose.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anduril Industries",
              url: "https://www.anduril.com/",
              medium: "article",
              publisher: "Anduril",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
