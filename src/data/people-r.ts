import type { Person } from "@/lib/people-types";

// Batch R: post-300 additions including Ben Buchanan, more academic voices.

export const people: Person[] = [
  {
    id: "ben-buchanan",
    name: "Ben Buchanan",
    tagline: "Former White House AI Special Advisor (2021–2025)",
    summary:
      "Georgetown CSET researcher who served as White House Special Advisor for AI from 2021 to 2025. Key architect of the Biden administration's chip export controls and the 2023 AI Executive Order.",
    categories: ["policy"],
    affiliations: [
      { org: "Johns Hopkins SAIS", role: "Professor", current: true },
      { org: "Georgetown CSET", role: "Director of CyberAI Project", current: true },
      { org: "White House", role: "Special Advisor for AI", end: "2025-01", current: false },
    ],
    twitter: "buchananben",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Architect of chip export controls and the 2023 AI executive order; argues national security and AI safety are inseparable.",
        quotes: [
          {
            text:
              "Export controls are the most important tool the United States has on frontier AI.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Ben Buchanan on AI and national security",
              url: "https://www.chinatalk.media/p/ben-buchanan-on-a-rickover-for-ai",
              medium: "article",
              publisher: "ChinaTalk",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kevin-esvelt",
    name: "Kevin Esvelt",
    tagline: "MIT biosecurity and gene drive researcher",
    summary:
      "MIT biologist who invented CRISPR gene drives. Has warned consistently that LLM-assisted biology lowers barriers to bioweapon development; a key advisor to US biosecurity policy.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT Media Lab", role: "Associate Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kevin_M._Esvelt",
    twitter: "kesvelt",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI biosecurity risks — including uplift for biological weapons — are the most concrete, measurable near-term catastrophic risk.",
        quotes: [
          {
            text:
              "Large language models lower the technical barrier to bioweapon synthesis. This is an empirical claim, not a speculation.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Kevin Esvelt on AI and biosecurity",
              url: "https://www.media.mit.edu/people/esvelt/",
              medium: "article",
              publisher: "MIT Media Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonas-kgomo",
    name: "Jonas Kgomo",
    tagline: "Decolonial AI researcher; Ghana",
    summary:
      "Researcher focused on how AI affects African contexts; advocate for decolonial AI governance frameworks.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Independent researcher", role: "Decolonial AI research", current: true },
    ],
    twitter: "jonaskgomo",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance must centre African and Global South perspectives, not just US-China framing.",
        quotes: [
          {
            text:
              "The AI conversation is being written in two capitals. It must be rewritten in many.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Jonas Kgomo on decolonial AI",
              url: "https://jonaskgomo.com/",
              medium: "article",
              publisher: "jonaskgomo.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carme-artigas",
    name: "Carme Artigas",
    tagline: "Spanish AI and Digital Agenda Secretary; AI Advisory Body co-chair",
    summary:
      "Former Spanish Secretary of State for Digitalisation and AI who led the EU AI Act negotiations under the Spanish Presidency. Co-chairs the UN AI Advisory Body.",
    categories: ["policy"],
    affiliations: [
      { org: "UN AI Advisory Body", role: "Co-chair", current: true },
      { org: "Government of Spain", role: "Former Secretary of State for Digitalisation and AI", end: "2023", current: false },
    ],
    twitter: "CarmeArtigas",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Chief negotiator of the EU AI Act and co-chair of the UN AI Advisory Body's global-governance work.",
        quotes: [
          {
            text:
              "We negotiated the EU AI Act with one principle: human rights are non-negotiable.",
            date: "2023-12-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Carme Artigas on the EU AI Act",
              url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
              medium: "article",
              publisher: "European Commission",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amandeep-gill",
    name: "Amandeep Singh Gill",
    tagline: "UN Secretary-General's Envoy on Technology",
    summary:
      "Indian diplomat who serves as the UN Secretary-General's Envoy on Technology. Leads the UN's Global Digital Compact, including its AI provisions.",
    categories: ["policy"],
    affiliations: [
      { org: "United Nations", role: "Envoy on Technology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Amandeep_Singh_Gill",
    twitter: "ASinghGill",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Leads UN-level AI coordination; argues AI governance needs global institutions built around inclusivity and scientific input.",
        quotes: [
          {
            text:
              "International governance of AI must reflect all voices, not just the loudest national security voices.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "UN Envoy on Technology",
              url: "https://www.un.org/techenvoy/",
              medium: "article",
              publisher: "United Nations",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pushmeet-kohli",
    name: "Pushmeet Kohli",
    tagline: "VP of AI Science at Google DeepMind",
    summary:
      "DeepMind executive leading AI-for-science efforts (AlphaFold, AlphaProof). Frames AI as a scientific instrument for solving structured problems, not a sentient agent.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "VP, AI Science", current: true },
    ],
    twitter: "pushmeet",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Publicly focuses on AI-for-science applications; engaged on safety but less on the dramatic framings.",
        quotes: [
          {
            text:
              "AI should be understood as a tool for scientific discovery. That reframes the governance discussion.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Pushmeet Kohli — DeepMind",
              url: "https://deepmind.google/",
              medium: "article",
              publisher: "Google DeepMind",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bret-kugelmass",
    name: "Bret Kugelmass",
    tagline: "CEO of Last Energy; 'energy is the governance variable' framing",
    summary:
      "MIT-trained entrepreneur who argues that compute, energy, and AI governance are the same problem, and that micro-reactor deployment is necessary to decouple AI progress from fossil-energy constraints.",
    categories: ["founder"],
    affiliations: [
      { org: "Last Energy", role: "Founder and CEO", current: true },
    ],
    twitter: "BretKugelmass",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues energy infrastructure is the governing variable for AI progress and should be the primary policy lever.",
        quotes: [
          {
            text:
              "AI is fundamentally an energy problem. If you want to govern AI, govern compute; if you want to govern compute, govern energy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Last Energy",
              url: "https://www.lastenergy.com/",
              medium: "article",
              publisher: "Last Energy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "molly-kinder",
    name: "Molly Kinder",
    tagline: "Brookings Institution fellow; AI and labour",
    summary:
      "Brookings fellow who has published some of the most cited mainstream work on AI's labour-market impact and policy responses (wage insurance, retraining).",
    categories: ["policy"],
    affiliations: [
      { org: "Brookings Institution", role: "David M. Rubenstein Fellow", current: true },
    ],
    twitter: "MollyKinder",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues policy should focus on labour-market transition — retraining, portable benefits, wage insurance — alongside any safety focus.",
        quotes: [
          {
            text:
              "The workers being displaced by AI need policy responses now. The extinction debate is not a substitute for labour policy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Molly Kinder at Brookings",
              url: "https://www.brookings.edu/experts/molly-kinder/",
              medium: "article",
              publisher: "Brookings",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "shazeda-ahmed",
    name: "Shazeda Ahmed",
    tagline: "NYU AI Now fellow; technology and democracy researcher",
    summary:
      "AI Now fellow whose work on China's AI governance has been widely cited in US policy debates. Argues US AI governance often misreads Chinese developments.",
    categories: ["researcher"],
    affiliations: [
      { org: "AI Now Institute", role: "Fellow", current: true },
    ],
    twitter: "shazeda",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for grounded understanding of comparative AI governance, especially between the US, EU, and China.",
        quotes: [
          {
            text:
              "We cannot govern AI well if we keep projecting our assumptions onto other countries' AI governance.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Shazeda Ahmed at AI Now",
              url: "https://ainowinstitute.org/",
              medium: "article",
              publisher: "AI Now Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
