import type { Person } from "@/lib/people-types";

// Batch L: Google-era leadership, planning skeptics, and additional alignment voices.

export const people: Person[] = [
  {
    id: "jeff-dean",
    name: "Jeff Dean",
    tagline: "Google Chief Scientist; co-leader of Google DeepMind",
    summary:
      "One of two Google Senior Fellows. Took over as chief scientist across Google DeepMind and Google Research after the 2023 reorg. Publicly frames AI as dual-use; emphasises present-day harms over extinction framings.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Google DeepMind / Google Research", role: "Chief Scientist", current: true },
    ],
    homepage: "https://research.google/people/jeff/",
    wikipedia: "https://en.wikipedia.org/wiki/Jeff_Dean",
    twitter: "JeffDean",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Publicly frames AI as a dual-use technology requiring responsibility frameworks rather than existential-risk framings.",
        quotes: [
          {
            text:
              "AI is a dual-use technology. It's capable of tremendous good and significant harm. We need to be clear-eyed about both.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jeff Dean on AI responsibility",
              url: "https://blog.google/authors/jeff-dean/",
              medium: "blog",
              publisher: "Google",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "subbarao-kambhampati",
    name: "Subbarao Kambhampati",
    tagline: "ASU professor; 'LLMs Can't Plan' advocate",
    summary:
      "ASU computer science professor and former AAAI president who has been the most consistent senior academic voice arguing LLMs cannot plan, reason, or self-verify in the formal senses required for AGI.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Arizona State University", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://rakaposhi.eas.asu.edu/",
    twitter: "rao2z",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues autoregressive LLMs cannot plan or reason in any formal sense; advocates LLM-Modulo frameworks where LLMs are combined with symbolic verifiers.",
        quotes: [
          {
            text:
              "Auto-regressive LLMs cannot, by themselves, do planning or self-verification. They are approximate knowledge sources, not reasoners.",
            date: "2024-02-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "LLMs Can't Plan, But Can Help Planning in LLM-Modulo Frameworks",
              url: "https://arxiv.org/abs/2402.01817",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-02-02",
            },
          },
          {
            text:
              "When you obfuscate the names of actions and objects in planning problems, GPT-4's performance plummets.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Subbarao Kambhampati: Can LLMs Reason and Plan?",
              url: "https://www.youtube.com/watch?v=Yhsw8RkpO1U",
              medium: "video",
              publisher: "YouTube",
              videoId: "Yhsw8RkpO1U",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rebecca-parsons",
    name: "Rebecca Parsons",
    tagline: "Thoughtworks CTO emerita; AI pragmatist",
    summary:
      "Thoughtworks CTO emerita who has written on the practical software engineering implications of AI deployment. Argues careful deployment practices matter more than headline-grabbing safety debates.",
    categories: ["engineer", "executive"],
    affiliations: [
      { org: "Thoughtworks", role: "CTO Emerita", current: true },
    ],
    twitter: "rebeccaparsons",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Argues software-engineering discipline and careful deployment practice is where most AI 'safety' actually happens.",
        quotes: [
          {
            text:
              "Most AI safety work is really software-engineering hygiene that happens in deployment, not metaphysics.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Thoughtworks, AI insights",
              url: "https://www.thoughtworks.com/insights",
              medium: "article",
              publisher: "Thoughtworks",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chelsea-finn",
    name: "Chelsea Finn",
    tagline: "Stanford professor; meta-learning and robotics researcher",
    summary:
      "Stanford CS professor whose robotics and meta-learning research has shaped how frontier labs think about sample-efficient learning and generalisation. Publicly on the safety-engaged side but measured.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University", role: "Assistant Professor of Computer Science", current: true },
      { org: "Physical Intelligence", role: "Co-founder", current: true },
    ],
    homepage: "https://ai.stanford.edu/~cbfinn/",
    twitter: "chelseabfinn",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Represents the engaged-but-measured academic position: safety is a real research problem; the framings are often overblown.",
        quotes: [
          {
            text:
              "Generalisation in robotics is where a lot of real safety work has to happen.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Chelsea Finn research",
              url: "https://ai.stanford.edu/~cbfinn/",
              medium: "article",
              publisher: "Stanford AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pieter-abbeel",
    name: "Pieter Abbeel",
    tagline: "UC Berkeley professor; Covariant co-founder",
    summary:
      "Roboticist who co-founded Covariant. Publicly frames AI/robotics progress as net-positive and argues the field is closer to transformative robotics than the safety discourse acknowledges.",
    categories: ["researcher", "academic", "founder"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of EECS", current: true },
      { org: "Covariant", role: "Co-founder", current: true },
    ],
    homepage: "https://people.eecs.berkeley.edu/~pabbeel/",
    twitter: "pabbeel",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Frames AI robotics as a major productivity and quality-of-life unlock; less focused on extinction framings.",
        quotes: [
          {
            text:
              "The gap between lab demos and deployed robots is closing, and that will reshape physical work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Pieter Abbeel homepage",
              url: "https://people.eecs.berkeley.edu/~pabbeel/",
              medium: "article",
              publisher: "Berkeley EECS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anthropic-policy-team",
    name: "Anthropic Policy Team (RSP authors)",
    tagline: "Anthropic responsible scaling policy author",
    summary:
      "Anthropic policy team member who co-authored the Responsible Scaling Policy framework, Anthropic's capability-tied safety commitments which became the most-emulated industry RSP template.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Anthropic", role: "Policy Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Helped draft Anthropic's Responsible Scaling Policy, a tiered capability-and-safety commitment regime.",
        quotes: [
          {
            text:
              "The Responsible Scaling Policy ties safety commitments to specific capability thresholds. If evaluations show we have crossed a threshold, we pause deployment until mitigations are in place.",
            date: "2023-09-19",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Anthropic's Responsible Scaling Policy",
              url: "https://www.anthropic.com/news/anthropics-responsible-scaling-policy",
              medium: "article",
              publisher: "Anthropic",
              date: "2023-09-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "isaac-asimov",
    name: "Isaac Asimov",
    tagline: "Science fiction author; Three Laws of Robotics author (1920–1992)",
    summary:
      "Biochemist and prolific SF author whose 1942 'Three Laws of Robotics' pre-figured the alignment problem. Included for historical continuity and because the Three Laws remain a rhetorical reference in AI safety debates.",
    categories: ["theorist", "public-intellectual"],
    affiliations: [
      { org: "Independent writer", role: "Author", end: "1992", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Isaac_Asimov",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Early popular articulation of the alignment problem via the Three Laws of Robotics.",
        quotes: [
          {
            text:
              "A robot may not injure a human being or, through inaction, allow a human being to come to harm.",
            date: "1942-03",
            fidelity: "direct",
            context: "First Law of Robotics, 'Runaround', 1942.",
            source: {
              title: "Runaround",
              url: "https://en.wikipedia.org/wiki/Three_Laws_of_Robotics",
              medium: "paper",
              publisher: "Astounding Science Fiction",
              date: "1942-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "murray-shanahan",
    name: "Murray Shanahan",
    tagline: "Imperial College cognitive robotics professor; DeepMind senior scientist",
    summary:
      "Philosopher and cognitive scientist at Imperial College and DeepMind. Author of 2015 book The Technological Singularity and recent papers on the 'dissociative identity' frame for understanding LLMs.",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "Imperial College London", role: "Professor of Cognitive Robotics", current: true },
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    homepage: "https://www.doc.ic.ac.uk/~mpsha/",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Publishes on what it means for LLMs to 'talk as if', treating LLM personas as dissociable role-plays; raises the consciousness question without committing to positive answers.",
        quotes: [
          {
            text:
              "It is a confusion to attribute subjective experience to an LLM, and a confusion to deny the possibility in principle.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Role play with large language models",
              url: "https://www.nature.com/articles/s41586-023-06647-8",
              medium: "paper",
              publisher: "Nature",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joscha-bach",
    name: "Joscha Bach",
    tagline: "Cognitive scientist; consciousness researcher",
    summary:
      "Cognitive scientist and AI researcher whose talks on consciousness and AGI are widely shared. Argues AGI is closer than people think and that the question of whether AI systems are conscious is live.",
    categories: ["researcher", "public-intellectual", "theorist"],
    affiliations: [
      { org: "Liquid AI", role: "Principal AI Researcher", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Joscha_Bach",
    twitter: "Plinz",
    positions: [
      {
        strategyId: "digital-minds",
        stance: "endorses",
        summary:
          "Argues consciousness is substrate-independent and that AI systems may become subjects in their own right.",
        quotes: [
          {
            text:
              "Consciousness is not what the brain does. It's the model the brain has of what it does.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "From Artificial Intelligence to Artificial Consciousness, Joscha Bach (TEDxBeaconStreet)",
              url: "https://www.youtube.com/watch?v=Jr7gY3JyzP8",
              medium: "video",
              publisher: "TEDx",
              videoId: "Jr7gY3JyzP8",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-pearce",
    name: "David Pearce",
    tagline: "Transhumanist philosopher; Hedonistic Imperative author",
    summary:
      "Transhumanist philosopher whose 1995 Hedonistic Imperative argues biology should be re-engineered to abolish suffering. Frames AI as instrumental to a post-Darwinian future, not as an existential threat.",
    categories: ["theorist", "public-intellectual"],
    affiliations: [
      { org: "Humanity Plus", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/David_Pearce_(philosopher)",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Frames AI and biotech as instruments of radical welfare expansion, especially suffering abolition, rather than sources of catastrophic risk.",
        quotes: [
          {
            text:
              "Our descendants will look back at the current era and wonder why we tolerated the suffering we did.",
            date: "1995",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Hedonistic Imperative",
              url: "https://www.hedweb.com/",
              medium: "book",
              publisher: "Online, free",
              date: "1995",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anders-sandberg",
    name: "Anders Sandberg",
    tagline: "Former FHI researcher; transhumanist philosopher",
    summary:
      "Long-time Oxford FHI researcher who published foundational work on whole-brain emulation and existential risk. Now independent; writes on the philosophy of grand futures.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Institute for Futures Studies (Sweden)", role: "Senior Researcher", current: true },
      { org: "Future of Humanity Institute, Oxford", role: "Former Senior Research Fellow", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anders_Sandberg",
    positions: [
      {
        strategyId: "long-reflection",
        stance: "endorses",
        summary:
          "Argues humanity should preserve optionality and invest in long-horizon deliberation capacity; AI governance should protect the ability to make big decisions well.",
        quotes: [
          {
            text:
              "The quality of deliberation we are able to do before we make irreversible decisions is a civilisational resource.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anders Sandberg, Grand Futures",
              url: "https://www.andersandberg.net/",
              medium: "article",
              publisher: "andersandberg.net",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "avital-balwit",
    name: "Avital Balwit",
    tagline: "Anthropic communications lead; public-facing AI safety voice",
    summary:
      "Anthropic communications lead. Has written essays framing the near-term timeline to AGI as the most pressing personal and civilisational concern for her generation.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Anthropic", role: "Chief of Staff to CEO", current: true },
    ],
    twitter: "AvitalBalwit",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Public Anthropic voice on the moral and personal stakes of short-timelines AGI.",
        quotes: [
          {
            text:
              "I may have three more years to work.",
            date: "2024",
            fidelity: "direct",
            context:
              "Widely-cited Palladium essay about living through short-timeline AGI.",
            source: {
              title: "My last five years of work",
              url: "https://www.palladiummag.com/2024/05/17/my-last-five-years-of-work/",
              medium: "article",
              publisher: "Palladium",
              date: "2024-05-17",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amanda-askell",
    name: "Amanda Askell",
    tagline: "Anthropic philosopher-researcher",
    summary:
      "Philosopher who leads Claude's 'character' work at Anthropic. Central voice on model welfare, AI personality, and virtue-ethics-informed alignment.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Anthropic", role: "Researcher (Character, Policy, and Philosophy)", current: true },
    ],
    twitter: "AmandaAskell",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Shapes Claude's public persona through a virtue-ethics framing; argues character-forward alignment is practical and tractable.",
        quotes: [
          {
            text:
              "When we train a model, we are not just shaping behaviour, we are shaping a character.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Amanda Askell, Anthropic",
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
    id: "clay-graubard",
    name: "Clay Graubard",
    tagline: "Forecaster; RAND and Good Judgment contributor",
    summary:
      "Superforecaster who has contributed to AI and x-risk forecasting exercises. Represents the professional-forecaster wing of the AI risk community.",
    categories: ["statistician", "researcher"],
    affiliations: [
      { org: "Good Judgment", role: "Superforecaster", current: true },
    ],
    twitter: "ClayGraubard",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Represents measured forecasting-grade views on x-risk; rarely takes strong partisan positions.",
        quotes: [
          {
            text:
              "Forecasting AI extinction risk under Knightian uncertainty is a different exercise from forecasting under well-defined base rates.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Good Judgment",
              url: "https://goodjudgment.com/",
              medium: "article",
              publisher: "Good Judgment",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
