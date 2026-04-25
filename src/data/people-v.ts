import type { Person } from "@/lib/people-types";

// Batch V: UK and European voices, additional academic policy researchers.

export const people: Person[] = [
  {
    id: "jess-whittlestone",
    name: "Jess Whittlestone",
    tagline: "Head of AI Policy at the Centre for Long-Term Resilience",
    summary:
      "Cambridge-based AI policy researcher who led foundational work at the Ada Lovelace Institute, GovAI, and CSER. Now leads AI policy at the Centre for Long-Term Resilience, feeding UK government work on frontier AI risks.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Centre for Long-Term Resilience", role: "Head of AI Policy", current: true },
    ],
    twitter: "jesswhittles",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Has helped shape UK frontier AI regulation conversation via policy briefs and government-facing research.",
        quotes: [
          {
            text:
              "The UK needs a proactive, principles-based approach to AI regulation — not a wait-and-see approach.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Regulating AI in the UK",
              url: "https://www.adalovelaceinstitute.org/wp-content/uploads/2023/07/Policy-briefing-Regulating-AI-in-the-UK.pdf",
              medium: "paper",
              publisher: "Ada Lovelace Institute",
              date: "2023-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carina-prunkl",
    name: "Carina Prunkl",
    tagline: "Utrecht AI ethics researcher; former FHI",
    summary:
      "AI ethics researcher whose work critiques dominant AI ethics frameworks as too narrowly technical. Former FHI researcher now at Utrecht.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Utrecht University", role: "Assistant Professor", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI ethics must engage more robustly with broader structural and political factors, not just algorithmic properties.",
        quotes: [
          {
            text:
              "AI ethics has largely focused on algorithmic properties; we need to zoom out to structural and political context.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Beyond Near- and Long-Term: Towards a Clearer Account of Research Priorities in AI Ethics and Society",
              url: "https://arxiv.org/abs/2001.04335",
              medium: "paper",
              publisher: "arXiv",
              date: "2020-01-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonas-schuett",
    name: "Jonas Schuett",
    tagline: "GovAI; AI risk governance researcher",
    summary:
      "Centre for the Governance of AI researcher who works on AI risk management, structured transparency, and internal AI lab governance structures.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Centre for the Governance of AI (GovAI)", role: "Researcher", current: true },
    ],
    twitter: "jonas_schuett",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues frontier labs should adopt structured risk-management practices drawn from the nuclear and biosafety industries.",
        quotes: [
          {
            text:
              "Frontier AI labs should have their own risk management functions modelled on the Three Lines of Defence used in other high-hazard industries.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Three Lines of Defence for AI labs",
              url: "https://www.governance.ai/",
              medium: "paper",
              publisher: "GovAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "julia-haas",
    name: "Julia Haas",
    tagline: "Council on Foreign Relations AI policy fellow",
    summary:
      "Policy fellow at the Council on Foreign Relations focused on AI and international security. Bridges national-security and tech-policy audiences.",
    categories: ["policy"],
    affiliations: [
      { org: "Council on Foreign Relations", role: "Fellow, AI & International Security", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for integrated AI and national-security policy rather than siloed frameworks.",
        quotes: [
          {
            text:
              "Treating AI as a standalone policy area is a mistake. AI is now embedded in every major national security question.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Council on Foreign Relations",
              url: "https://www.cfr.org/",
              medium: "article",
              publisher: "CFR",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "saria-hassan",
    name: "Saria Hassan",
    tagline: "Pakistan-based AI policy researcher",
    summary:
      "Representative of the Global South perspective on AI governance; argues the current AI governance conversation systematically undervalues non-Western stakeholders.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Independent", role: "AI policy researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues Global South voices must be structurally included in AI governance, not as stakeholders but as decision-makers.",
        quotes: [
          {
            text:
              "The AI that shapes our economies is not built by us, and the AI that is governed by the laws of the people it affects is not governed by us.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Global South AI governance perspectives",
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
    id: "oscar-moxon",
    name: "Oscar Moxon",
    tagline: "AI safety researcher; independent",
    summary:
      "Independent AI safety researcher publishing on LessWrong and the Alignment Forum; contributes to the technical reproduction and critique of frontier-lab claims.",
    categories: ["researcher"],
    affiliations: [
      { org: "Independent", role: "AI safety researcher", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Independent contributor to the AI safety technical discussion; produces reproductions and critiques of frontier lab work.",
        quotes: [
          {
            text:
              "Independent reproductions of frontier-lab claims are an undersupplied public good.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "LessWrong",
              url: "https://www.lesswrong.com/",
              medium: "blog",
              publisher: "LessWrong",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nick-ryder",
    name: "Nick Ryder",
    tagline: "OpenAI research scientist; scaling-laws contributor",
    summary:
      "OpenAI research scientist who co-authored foundational scaling laws papers. Public-engineering voice for capability-driven progress.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Research Scientist", current: true },
    ],
    twitter: "nick_ryder",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Co-author of scaling laws; focused on capability progress inside OpenAI.",
        quotes: [
          {
            text:
              "Scaling laws continue to hold out much further than critics predicted.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Nick Ryder OpenAI research",
              url: "https://openai.com/research",
              medium: "article",
              publisher: "OpenAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lisa-gelobter",
    name: "Lisa Gelobter",
    tagline: "tEQuitable founder; former Obama CTO",
    summary:
      "Former US Chief Digital Service officer under Obama, now founder of tEQuitable, a platform for addressing workplace bias. Has advocated for AI governance that serves workers.",
    categories: ["founder", "policy"],
    affiliations: [
      { org: "tEQuitable", role: "Founder and CEO", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance from a workers-first perspective.",
        quotes: [
          {
            text:
              "The people most affected by workplace AI deserve a seat at the governance table.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "tEQuitable",
              url: "https://www.tequitable.com/",
              medium: "article",
              publisher: "tEQuitable",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
