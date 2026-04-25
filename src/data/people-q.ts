import type { Person } from "@/lib/people-types";

// Batch Q: final fill to 300+, focused on Statement on AI Risk signatories I had not yet seeded.

export const people: Person[] = [
  {
    id: "max-roser",
    name: "Max Roser",
    tagline: "Founder of Our World in Data; Oxford economist",
    summary:
      "Oxford economist who founded Our World in Data. His AI entry and charts have become the standard quantitative reference for AI capability and investment trends.",
    categories: ["academic", "statistician"],
    affiliations: [
      { org: "University of Oxford", role: "Senior Researcher", current: true },
      { org: "Our World in Data", role: "Founder and Director", current: true },
    ],
    homepage: "https://www.maxroser.com/",
    twitter: "MaxCRoser",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Publishes quantitative tracking of AI progress and investment; frames AI as a top civilisational challenge without making strong subjective probability claims.",
        quotes: [
          {
            text:
              "Many AI experts believe there is a real chance that human-level artificial intelligence will be developed within the next decades, and some believe that it will exist much sooner.",
            date: "2023-12",
            fidelity: "direct",
            source: {
              title: "Artificial Intelligence",
              url: "https://ourworldindata.org/artificial-intelligence",
              medium: "article",
              publisher: "Our World in Data",
              date: "2023-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "laurence-tribe",
    name: "Laurence Tribe",
    tagline: "Harvard constitutional law professor emeritus",
    summary:
      "Harvard's most prominent constitutional law scholar. Signed the 2023 Statement on AI Risk; frames AI as a constitutional-scale governance challenge requiring robust legal frameworks.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Harvard Law School", role: "University Professor Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Laurence_Tribe",
    twitter: "tribelaw",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the CAIS Statement on AI Risk.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "james-manyika",
    name: "James Manyika",
    tagline: "SVP of Research, Technology and Society at Google-Alphabet",
    summary:
      "Former McKinsey Global Institute chair who now runs research, tech, and society at Alphabet. Signatory to the Statement on AI Risk; public voice for measured 'shared prosperity' framings.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "Alphabet", role: "SVP of Research, Technology and Society", current: true },
    ],
    twitter: "JamesManyika",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bill-mckibben",
    name: "Bill McKibben",
    tagline: "Environmental writer; Middlebury scholar",
    summary:
      "Journalist and climate activist who has extended his civilisational-risk framing to AI. Signed the Statement on AI Risk; argues AI and climate are linked crises of extraction.",
    categories: ["journalist", "academic", "activist"],
    affiliations: [
      { org: "Middlebury College", role: "Schumann Distinguished Scholar", current: true },
      { org: "350.org", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Bill_McKibben",
    twitter: "billmckibben",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alan-robock",
    name: "Alan Robock",
    tagline: "Rutgers climate scientist; nuclear winter researcher",
    summary:
      "Distinguished Rutgers climate scientist who helped establish modern nuclear winter science. Signatory to the Statement on AI Risk; argues AI should be treated like nuclear weapons as a civilisational hazard.",
    categories: ["academic"],
    affiliations: [
      { org: "Rutgers University", role: "Distinguished Professor of Climate Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alan_Robock",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk, bringing a civilisational-scale-risk scientist's perspective.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "angela-kane",
    name: "Angela Kane",
    tagline: "Former UN High Representative for Disarmament Affairs",
    summary:
      "Senior UN diplomat who has argued for applying disarmament-style frameworks to AI. Signatory to the Statement on AI Risk.",
    categories: ["policy"],
    affiliations: [
      { org: "International Institute for Peace, Vienna", role: "Vice President", current: true },
      { org: "United Nations", role: "Former High Representative for Disarmament Affairs", end: "2015", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Angela_Kane",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues the disarmament-treaty playbook should be applied to AI; signed the CAIS statement.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martin-hellman",
    name: "Martin Hellman",
    tagline: "Stanford cryptographer; Turing Award winner",
    summary:
      "Turing Award-winning cryptographer (Diffie-Hellman key exchange). Long-time activist on nuclear risk; signed the 2023 Statement on AI Risk.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Stanford University", role: "Professor Emeritus of Electrical Engineering", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Martin_Hellman",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joseph-sifakis",
    name: "Joseph Sifakis",
    tagline: "Turing Award laureate; embedded systems researcher",
    summary:
      "2007 Turing Award laureate (model checking). Greek-French computer scientist who signed the Statement on AI Risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "CNRS - Université Grenoble - Alpes", role: "Research Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Joseph_Sifakis",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
