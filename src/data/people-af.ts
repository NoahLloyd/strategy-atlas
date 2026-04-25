import type { Person } from "@/lib/people-types";

// Batch AF: Global South voices, African and Latin American AI governance researchers.

export const people: Person[] = [
  {
    id: "chinasa-okolo",
    name: "Chinasa T. Okolo",
    tagline: "Brookings fellow; African Union AI strategy contributor",
    summary:
      "Brookings technology fellow who worked with the African Union on developing the AU-AI Continental Strategy. Named one of Time's 100 most influential people in AI in 2024.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Brookings Institution", role: "Fellow, Center for Technology Innovation", current: true },
    ],
    homepage: "https://www.chinasatokolo.com/",
    twitter: "chinasaokolo",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Contributed to the AU-AI Continental Strategy. Argues AI governance in Africa cannot be imported wholesale from OECD frameworks.",
        quotes: [
          {
            text:
              "AI is not Africa's savior. Avoiding technosolutionism in digital development requires AI governance rooted in African contexts.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI is not Africa's savior: Avoiding technosolutionism in digital development",
              url: "https://www.brookings.edu/articles/ai-is-not-africas-savior-avoiding-technosolutionism-in-digital-development/",
              medium: "article",
              publisher: "Brookings",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "juan-ortiz-freuler",
    name: "Juan Ortiz Freuler",
    tagline: "Berkman Klein affiliate; Latin America AI policy",
    summary:
      "Argentine researcher and Berkman Klein affiliate focused on digital platforms, AI, and Latin American governance. Works on comparative AI governance across the region.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Berkman Klein Center for Internet & Society", role: "Affiliate", current: true },
      { org: "USC Annenberg", role: "PhD candidate", current: true },
    ],
    homepage: "https://juanof.me/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues Latin American AI governance needs a strategic approach combining sovereignty, human rights, and regional cooperation.",
        quotes: [
          {
            text:
              "Latin America's AI governance choices today will determine whether the region is a rule-maker or a rule-taker in the AI era.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Generative AI: What Should Governments in Latin America Do?",
              url: "https://cyber.harvard.edu/publication/2023/generative-ai-what-should-governments-latin-america-do",
              medium: "article",
              publisher: "Berkman Klein Center",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "renata-avila",
    name: "Renata Ávila",
    tagline: "Open Future CEO; digital rights lawyer",
    summary:
      "Guatemalan human-rights lawyer who serves as CEO of Open Future, a European think tank on the digital commons. Works on digital sovereignty for emerging economies.",
    categories: ["policy", "activist"],
    affiliations: [
      { org: "Open Future Foundation", role: "CEO", current: true },
    ],
    twitter: "avilarenata",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Argues AI governance must centre digital commons and public-interest digital infrastructure.",
        quotes: [
          {
            text:
              "The digital commons — open models, open datasets, open infrastructure — is the sovereign ground for AI governance in the Global South.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Open Future",
              url: "https://openfuture.eu/",
              medium: "article",
              publisher: "Open Future",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "paola-ricaurte-quijano",
    name: "Paola Ricaurte Quijano",
    tagline: "Tec de Monterrey; data-centric epistemic justice",
    summary:
      "Mexican researcher whose work on 'data epistemologies' has influenced decolonial AI ethics frameworks. Co-founder of the Tierra Común network.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Tecnológico de Monterrey", role: "Professor", current: true },
      { org: "Berkman Klein Center", role: "Faculty Associate", current: true },
    ],
    twitter: "paolarica",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance through 'data epistemologies' — whose knowledge systems shape what counts as valid AI data.",
        quotes: [
          {
            text:
              "Data epistemologies are political. What is considered legitimate data shapes what AI knows — and does not know.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Paola Ricaurte — Data Epistemologies",
              url: "https://paolaricaurte.com/",
              medium: "article",
              publisher: "paolaricaurte.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "catherine-aiken",
    name: "Catherine Aiken",
    tagline: "CSET researcher; China AI talent and capability",
    summary:
      "Georgetown CSET researcher focused on China's AI research ecosystem. Has contributed to US understanding of Chinese AI talent and capability developments.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Georgetown CSET", role: "Senior Fellow and Research Lead", current: true },
    ],
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Analyses Chinese AI capability developments; supports chip-export-control policy informed by capability data.",
        quotes: [
          {
            text:
              "Understanding Chinese AI capability requires rigorous open-source intelligence work, not rhetoric about the race.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "CSET — Catherine Aiken",
              url: "https://cset.georgetown.edu/staff/catherine-aiken/",
              medium: "article",
              publisher: "CSET",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ife-adebara",
    name: "Ife Adebara",
    tagline: "African NLP and LLM researcher",
    summary:
      "Computational linguist whose research focuses on African languages in LLMs. Argues current LLMs systematically fail African users.",
    categories: ["researcher"],
    affiliations: [
      { org: "UBC Deep Learning and Natural Language Processing Lab", role: "Researcher", current: true },
    ],
    twitter: "ifeadebara",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for African language representation in LLMs as a basic requirement of AI that serves humanity.",
        quotes: [
          {
            text:
              "If your AI does not work for African users, it does not work for humanity.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "African NLP",
              url: "https://deep-dive.ai-africa.com/",
              medium: "article",
              publisher: "AI Africa",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "wafa-ben-hassine",
    name: "Wafa Ben-Hassine",
    tagline: "Omidyar Network; human rights and tech advisor",
    summary:
      "Former human-rights lawyer and now principal at the Omidyar Network focused on responsible technology. Public voice on AI and democracy, especially in MENA.",
    categories: ["policy", "investor"],
    affiliations: [
      { org: "Omidyar Network", role: "Principal, Responsible Technology", current: true },
    ],
    twitter: "wbenhassine",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance must address platform concentration and protect marginalised communities globally.",
        quotes: [
          {
            text:
              "AI governance is a human-rights question as much as a technical one. The two cannot be separated.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Wafa Ben-Hassine — Omidyar Network",
              url: "https://omidyar.com/people/wafa-ben-hassine/",
              medium: "article",
              publisher: "Omidyar Network",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
