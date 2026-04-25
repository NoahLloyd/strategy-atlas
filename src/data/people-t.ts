import type { Person } from "@/lib/people-types";

// Batch T: e/acc movement figures, more DeepMind safety, scientific advocates.

export const people: Person[] = [
  {
    id: "brian-chau",
    name: "Brian Chau",
    tagline: "Executive Director of Alliance for the Future",
    summary:
      "Former ML engineer who directs Alliance for the Future, a US policy think tank aligned with the e/acc movement and opposed to frontier AI regulation.",
    categories: ["policy", "activist"],
    affiliations: [
      { org: "Alliance for the Future", role: "Executive Director", current: true },
    ],
    twitter: "psychosort",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Organised lobbying counterweight to AI safety policy in Washington; frames pause/safety advocates as doomers.",
        quotes: [
          {
            text:
              "Regulation of AI is regulation of inference. Regulation of inference is regulation of thought.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Alliance for the Future",
              url: "https://affuture.org/",
              medium: "article",
              publisher: "Alliance for the Future",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonah-brown-cohen",
    name: "Jonah Brown-Cohen",
    tagline: "DeepMind scalable oversight researcher",
    summary:
      "DeepMind researcher who authored doubly-efficient debate protocols for scalable AI oversight. Technical collaborator with Geoffrey Irving.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Works on formal debate protocols for scalable oversight.",
        quotes: [
          {
            text:
              "Doubly-efficient debate lets an honest strategy verify correctness in polynomial time while the dishonest strategy has exponentially more steps to try to deceive.",
            date: "2023-11-23",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scalable AI Safety via Doubly-Efficient Debate",
              url: "https://arxiv.org/abs/2311.14125",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-11-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nat-mcaleese",
    name: "Nat McAleese",
    tagline: "OpenAI researcher; ex-DeepMind reliability",
    summary:
      "AI reliability and alignment researcher at OpenAI; previously at DeepMind working on debate-style oversight and reward modelling.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
      { org: "Google DeepMind", role: "Research engineer", end: "2023", current: false },
    ],
    twitter: "__nmca__",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Works on reward modelling and debate-style oversight; publicly engaged with alignment research.",
        quotes: [
          {
            text:
              "Teaching language models to support answers with verified quotes is a concrete alignment sub-problem we can make progress on.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Teaching Language Models to Support Answers with Verified Quotes",
              url: "https://arxiv.org/abs/2203.11147",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-03-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joar-skalse",
    name: "Joar Skalse",
    tagline: "Oxford researcher; reward-hacking formalism",
    summary:
      "Oxford AI safety researcher who co-authored foundational work defining when reward hacking can occur in learned reward models.",
    categories: ["researcher"],
    affiliations: [
      { org: "Oxford University", role: "AI safety researcher", current: true },
    ],
    twitter: "joar_skalse",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Formalises reward-hacking failures in learned reward models; provides technical grounding for specification-gaming concerns.",
        quotes: [
          {
            text:
              "We can formally characterise the conditions under which a learned reward model is hackable. The characterisation lets us design training regimes that reduce the attack surface.",
            date: "2022",
            fidelity: "paraphrase-loose",
            source: {
              title: "Defining and Characterizing Reward Hacking",
              url: "https://arxiv.org/abs/2209.13085",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-09-27",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chris-summerfield",
    name: "Christopher Summerfield",
    tagline: "Oxford neuroscientist; DeepMind senior researcher",
    summary:
      "Oxford cognitive neuroscientist and DeepMind senior research scientist. Has written on how cognitive science informs alignment and the nature of AI understanding.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Oxford", role: "Professor of Cognitive Neuroscience", current: true },
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    homepage: "https://www.psy.ox.ac.uk/people/christopher-summerfield",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Brings cognitive science framings to AI alignment; author of These Strange New Minds on how neural networks represent the world.",
        quotes: [
          {
            text:
              "The question 'does this model understand?' hides a stack of questions we haven't yet disentangled. Alignment research has to live with that ambiguity.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Christopher Summerfield homepage",
              url: "https://www.psy.ox.ac.uk/people/christopher-summerfield",
              medium: "article",
              publisher: "Oxford University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "toby-shevlane",
    name: "Toby Shevlane",
    tagline: "DeepMind model evaluations researcher",
    summary:
      "DeepMind research scientist focused on dangerous-capability evaluations. Co-authored foundational papers on red-teaming and evaluation frameworks.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist, Model Evaluations", current: true },
    ],
    twitter: "tobyshevlane",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Helps design dangerous-capability evaluations and advocates for their adoption as the load-bearing governance artefact.",
        quotes: [
          {
            text:
              "Dangerous capability evaluations are the minimum viable governance instrument for frontier AI.",
            date: "2023-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Model evaluation for extreme risks",
              url: "https://arxiv.org/abs/2305.15324",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-05-24",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mary-phuong",
    name: "Mary Phuong",
    tagline: "DeepMind autonomous-replication evaluations researcher",
    summary:
      "DeepMind research scientist who leads autonomous-replication evaluations, tests for whether models can autonomously set up and run copies of themselves.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist", current: true },
    ],
    twitter: "maryphuong",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Designs autonomous-replication evaluations. Central figure in DeepMind's Frontier Safety Framework implementation.",
        quotes: [
          {
            text:
              "Autonomous replication is a concrete capability threshold we can measure, and one crossing it meaningfully increases systemic risk.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "DeepMind Frontier Safety Framework",
              url: "https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/",
              medium: "blog",
              publisher: "Google DeepMind",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hoda-heidari",
    name: "Hoda Heidari",
    tagline: "CMU algorithmic fairness researcher",
    summary:
      "CMU assistant professor whose work bridges algorithmic fairness and AI governance. Argues fairness metrics must be tied to concrete consequentialist framings.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Assistant Professor", current: true },
    ],
    twitter: "heidari_hoda",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues fairness metrics have to be tied to tangible consequences or they become academic theatre.",
        quotes: [
          {
            text:
              "Fairness without consequences is fairness theatre.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Hoda Heidari, CMU",
              url: "https://www.cs.cmu.edu/~hheidari/",
              medium: "article",
              publisher: "CMU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rumman-chowdhury",
    name: "Rumman Chowdhury",
    tagline: "Former Twitter ML ethics director; Humane Intelligence",
    summary:
      "Data scientist who ran ML ethics at Twitter and now runs Humane Intelligence, a non-profit red-teaming organisation that partners with frontier labs and DEF CON.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Humane Intelligence", role: "CEO", current: true },
      { org: "US State Department", role: "Science Envoy for AI", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Rumman_Chowdhury",
    twitter: "ruchowdh",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues red-teaming infrastructure is a core AI governance primitive; runs the DEF CON AI Village.",
        quotes: [
          {
            text:
              "Red-teaming is how democratic expertise enters the room. If only the company's own team gets to stress-test the system, accountability has already failed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Humane Intelligence",
              url: "https://www.humane-intelligence.org/",
              medium: "article",
              publisher: "Humane Intelligence",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aviv-ovadya",
    name: "Aviv Ovadya",
    tagline: "Berkman Klein Center; platform democracy",
    summary:
      "Founder of the AI & Democracy Foundation. Argues AI's threat to democracy lies less in content generation and more in epistemic infrastructure degradation.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Berkman Klein Center for Internet & Society", role: "Affiliate", current: true },
    ],
    twitter: "metaviv",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Works on civic deliberation infrastructure as a response to AI-enabled democratic pressure.",
        quotes: [
          {
            text:
              "AI's threat to democracy is about what happens to shared knowledge infrastructure, not about individual deepfakes.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Aviv Ovadya on AI and democracy",
              url: "https://avivovadya.com/",
              medium: "article",
              publisher: "avivovadya.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jacob-hilton",
    name: "Jacob Hilton",
    tagline: "Alignment Research Center; Prover-Verifier Games",
    summary:
      "Alignment researcher at the Alignment Research Center and independent researcher. Has published influential work on prover-verifier games and eliciting latent knowledge.",
    categories: ["researcher"],
    affiliations: [
      { org: "Alignment Research Center", role: "Researcher", current: true },
    ],
    twitter: "JacobHHilton",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Technical alignment work on eliciting honest behaviour from more-capable models.",
        quotes: [
          {
            text:
              "The alignment problem is about getting less-capable verifiers to reliably elicit truth from more-capable provers.",
            date: "2024-07",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Prover-Verifier Games Improve Legibility",
              url: "https://arxiv.org/abs/2407.13692",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-07-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andy-jones",
    name: "Andy Jones",
    tagline: "Anthropic researcher; scaling inference laws",
    summary:
      "Anthropic researcher whose work on inference scaling laws has informed the field's understanding of how reasoning and compute trade off.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Researcher", current: true },
    ],
    twitter: "AndyLJones",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Works on empirical scaling laws; measured technical engagement with safety.",
        quotes: [
          {
            text:
              "Inference-time compute is a new dimension of the scaling curves we hadn't properly mapped.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Andy Jones, Anthropic",
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
];
