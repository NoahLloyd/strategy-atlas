import type { Person } from "@/lib/people-types";

// Batch U: forecasters, red-teamers, and more technical AI safety people.

export const people: Person[] = [
  {
    id: "matthew-barnett",
    name: "Matthew Barnett",
    tagline: "Epoch AI forecaster; Metaculus AI timelines",
    summary:
      "AI forecaster at Epoch AI who co-authors many of the most-cited Metaculus AI questions, including the Transformative AI Date question.",
    categories: ["researcher", "statistician"],
    affiliations: [
      { org: "Epoch AI", role: "Researcher", current: true },
    ],
    twitter: "MatthewJBar",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Contributes systematic forecasts of AI progress; agnostic on subjective x-risk claims but grounded in quantitative timelines.",
        quotes: [
          {
            text:
              "It's unclear what human-level AGI means. The more useful question is when real economic growth rates reach at least 30% worldwide.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Transformative AI Date question",
              url: "https://www.metaculus.com/questions/19356/transformative-ai-date/",
              medium: "article",
              publisher: "Metaculus",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "Transformative AI (median estimate via direct approach)",
        year: 2033,
        probability: 0.5,
        date: "2025-01",
        source: {
          title: "Matthew Barnett Metaculus model",
          url: "https://www.metaculus.com/",
          medium: "article",
          publisher: "Metaculus",
          date: "2025-01",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephen-casper",
    name: "Stephen Casper",
    tagline: "MIT PhD researcher; red-teaming and model audit",
    summary:
      "MIT algorithmic alignment researcher focused on red-teaming, auditing, and interpretability. Has documented how safeguards at current frontier labs are reliably broken by determined red-teamers.",
    categories: ["researcher"],
    affiliations: [
      { org: "MIT CSAIL", role: "PhD candidate, Algorithmic Alignment Group", current: true },
    ],
    homepage: "https://stephencasper.com/",
    twitter: "StephenLCasper",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues empirical red-teaming reveals that current safeguards are not robust; auditing must become standard infrastructure.",
        quotes: [
          {
            text:
              "Example after example of state-of-the-art safeguards get pretty reliably broken. That's the empirical reality.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Stephen Casper at Center for AI Policy Podcast",
              url: "https://aipolicyus.podbean.com/e/stephen-casper-on-technical-and-sociotechnical-ai-safety-research/",
              medium: "podcast",
              publisher: "Center for AI Policy Podcast",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dylan-hadfield-menell",
    name: "Dylan Hadfield-Menell",
    tagline: "MIT professor; Stuart Russell student; assistance games",
    summary:
      "MIT assistant professor and former Stuart Russell PhD student who works on assistance games and practical alignment of AI systems.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT CSAIL", role: "Assistant Professor", current: true },
    ],
    homepage: "https://people.csail.mit.edu/dhm/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Works on assistance games, the Russellian proposal that AI should model and defer to human preferences rather than optimise fixed objectives.",
        quotes: [
          {
            text:
              "Assistance games give us a framework where AI uncertainty about human preferences is a feature, not a bug.",
            date: "2017",
            fidelity: "paraphrase-loose",
            source: {
              title: "Dylan Hadfield-Menell homepage",
              url: "https://people.csail.mit.edu/dhm/",
              medium: "article",
              publisher: "MIT CSAIL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vikrant-varma",
    name: "Vikrant Varma",
    tagline: "Google DeepMind AI safety researcher",
    summary:
      "DeepMind safety researcher working on model evaluation and alignment. Contributor to several major DeepMind safety publications.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Engineer", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Engineer-level technical contributions to DeepMind safety research.",
        quotes: [
          {
            text:
              "Safety claims have to be reproducible by external researchers. Otherwise we're doing marketing, not safety.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "DeepMind safety research",
              url: "https://deepmind.google/research/",
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
    id: "lilian-weng",
    name: "Lilian Weng",
    tagline: "Thinking Machines; former OpenAI VP of Research",
    summary:
      "Former VP of Research at OpenAI who helped lead safety research there. Wrote widely-read technical blog posts on RLHF and alignment. Joined Mira Murati's Thinking Machines Lab in 2024.",
    categories: ["researcher"],
    affiliations: [
      { org: "Thinking Machines Lab", role: "Researcher", current: true },
      { org: "OpenAI", role: "VP of Research, Safety Systems", end: "2024-11", current: false },
    ],
    homepage: "https://lilianweng.github.io/",
    twitter: "lilianweng",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Public educator on alignment technical work. Ran OpenAI's Safety Systems team before leaving for Thinking Machines.",
        quotes: [
          {
            text:
              "Reward modelling, RLHF, red-teaming, and eval frameworks are the concrete instruments of alignment today.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Lil'Log",
              url: "https://lilianweng.github.io/",
              medium: "blog",
              publisher: "Lil'Log",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ethan-perez",
    name: "Ethan Perez",
    tagline: "Anthropic researcher; red-teaming language models",
    summary:
      "Anthropic research scientist focused on red-teaming and sycophancy. Has published foundational work on model evaluation and LM-generated evaluations.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Research Scientist", current: true },
    ],
    twitter: "EthanJPerez",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Designs red-teaming protocols and model-evaluation frameworks. Significant empirical contributor to Anthropic's alignment work.",
        quotes: [
          {
            text:
              "You can use a language model to red-team another language model, and that lets you scale evaluation in ways humans alone cannot.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Red Teaming Language Models with Language Models",
              url: "https://arxiv.org/abs/2202.03286",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-02-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "deep-ganguli",
    name: "Deep Ganguli",
    tagline: "Anthropic societal impact lead",
    summary:
      "Head of Anthropic's Societal Impact team. Argues that the social dimension of alignment must be front and centre of safety work.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Head of Societal Impact", current: true },
    ],
    twitter: "DeepGanguli",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues meaningful safety work must include societal-impact measurement alongside technical evaluations.",
        quotes: [
          {
            text:
              "We cannot align AI with the right human values until we measure what it does to society when deployed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic Societal Impact research",
              url: "https://www.anthropic.com/research",
              medium: "article",
              publisher: "Anthropic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "zac-hatfield-dodds",
    name: "Zac Hatfield-Dodds",
    tagline: "Anthropic assurance team; property-based testing",
    summary:
      "Anthropic engineer known for property-based testing and assurance work. Technical voice on how software-engineering practices can support AI safety.",
    categories: ["engineer"],
    affiliations: [
      { org: "Anthropic", role: "Assurance Team", current: true },
    ],
    twitter: "zachatfielddodd",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Brings formal software testing discipline to AI assurance. Engineer-level voice on safety tooling.",
        quotes: [
          {
            text:
              "Most of what safety needs is rigorous software engineering applied to a new kind of software.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Zac Hatfield-Dodds homepage",
              url: "https://zhd.dev/",
              medium: "article",
              publisher: "zhd.dev",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-chen",
    name: "Michael Chen",
    tagline: "METR evaluations researcher",
    summary:
      "Researcher at METR focused on autonomous-task evaluations for frontier models. Contributor to the 'task length doubling' frontier-capability tracking.",
    categories: ["researcher"],
    affiliations: [
      { org: "METR", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Measures empirical trends in autonomous-task capability as the quantitative backbone of deployment-risk reasoning.",
        quotes: [
          {
            text:
              "The length of autonomous tasks frontier models can complete has been roughly doubling every 4 to 7 months.",
            date: "2025",
            fidelity: "paraphrase-faithful",
            source: {
              title: "METR capability evaluations",
              url: "https://metr.org/",
              medium: "article",
              publisher: "METR",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
