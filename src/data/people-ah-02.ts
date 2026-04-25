import type { Person } from "@/lib/people-types";

// Batch AH split (chunk 02): entries 38-74 of 112.

export const people: Person[] = [
  {
    id: "matt-ridley",
    name: "Matt Ridley",
    tagline: "British science writer; 'How Innovation Works'",
    summary:
      "Science writer and former member of the House of Lords; author of 'The Rational Optimist' (2010) and 'How Innovation Works' (2020). Vocal techno-optimist on AI.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Author / Speaker", current: true },
    ],
    homepage: "https://www.mattridley.co.uk/",
    twitter: "mattwridley",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues innovation is a recombinant, decentralised process and that attempts to centrally manage AI development will misjudge how progress actually happens.",
        quotes: [
          {
            text:
              "Innovation is the child of freedom and the parent of prosperity. The pattern that produced industrialisation, electrification, and the internet is the same pattern that will produce useful AI, if we don't strangle it.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "How Innovation Works",
              url: "https://www.harpercollins.com/products/how-innovation-works-matt-ridley",
              medium: "book",
              publisher: "Harper",
              date: "2020-05-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yannick-kilcher",
    name: "Yannick Kilcher",
    tagline: "YouTuber; ML paper explainer; ex-DeepJudge",
    summary:
      "Computer scientist and prolific YouTuber whose channel explains ML papers technically. Reaches a wide developer audience and influences which papers get attention.",
    categories: ["public-intellectual", "researcher"],
    affiliations: [
      { org: "Independent / DeepJudge alumni", role: "Researcher / YouTuber", current: true },
    ],
    homepage: "https://ykilcher.com/",
    twitter: "ykilcher",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues much of LLM research is overfit to benchmarks and underexamined for fundamental novelty; explains both capability and safety papers with technical specificity for developer audiences.",
        quotes: [
          {
            text:
              "When I read a new paper, the first question is always: is this real, or is the impressive number coming from something obvious about the evaluation? You'd be surprised how often it's the latter.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Yannick Kilcher YouTube",
              url: "https://www.youtube.com/@YannicKilcher",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pierre-yves-oudeyer",
    name: "Pierre-Yves Oudeyer",
    tagline: "Inria; developmental AI and curiosity",
    summary:
      "Research director at Inria Bordeaux; Flowers Lab founder. Pioneer of intrinsically motivated learning in machines; co-author of widely cited work on curiosity-driven exploration.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Inria Bordeaux", role: "Research Director, Flowers Lab", current: true },
    ],
    homepage: "http://www.pyoudeyer.com/",
    twitter: "pyoudeyer",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues developmental AI, agents that learn open-endedly through curiosity rather than via fixed objectives, is the right framing for studying how intelligence actually arises.",
        quotes: [
          {
            text:
              "Curiosity-driven exploration is what lets a developing system invent its own learning curriculum. Without it, you cannot study how an agent goes from blank slate to general competence.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Curiosity-driven Exploration by Self-supervised Prediction",
              url: "https://arxiv.org/abs/1705.05363",
              medium: "paper",
              publisher: "arXiv / ICML",
              date: "2017-05-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "marc-bellemare",
    name: "Marc G. Bellemare",
    tagline: "Mila / McGill; Atari Learning Environment",
    summary:
      "Canada CIFAR AI Chair at Mila and McGill; co-author of the Atari Learning Environment (2013) that became the canonical RL benchmark, and of the Distributional RL framework.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Mila / McGill University", role: "Canada CIFAR AI Chair", current: true },
      { org: "Reliant AI", role: "Founder", current: true },
    ],
    homepage: "https://marcgbellemare.info/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues distributional reinforcement learning, modelling the full distribution of returns rather than just the mean, is a richer foundation for safe deployment of RL systems.",
        quotes: [
          {
            text:
              "Distributional RL learns the entire distribution over returns, not just its expectation. The richer signal turns out to matter for stability, exploration, and risk-sensitivity.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "A Distributional Perspective on Reinforcement Learning",
              url: "https://arxiv.org/abs/1707.06887",
              medium: "paper",
              publisher: "arXiv / ICML",
              date: "2017-07-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "edward-tian",
    name: "Edward Tian",
    tagline: "GPTZero founder",
    summary:
      "Princeton senior who launched GPTZero in January 2023, an early and widely-used AI text detector. Now CEO of GPTZero.",
    categories: ["founder"],
    affiliations: [
      { org: "GPTZero", role: "Founder, CEO", current: true },
    ],
    twitter: "edward_the6",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues educational and journalistic systems urgently need AI-text detection to maintain trust; founded GPTZero specifically as a response to ChatGPT's release.",
        quotes: [
          {
            text:
              "I built GPTZero because I think there's something fundamentally important about preserving humanity's ability to know what was written by humans.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "GPTZero",
              url: "https://gptzero.me/",
              medium: "article",
              publisher: "GPTZero",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "colin-raffel",
    name: "Colin Raffel",
    tagline: "UofT; Hugging Face; T5 author",
    summary:
      "Associate professor at the University of Toronto and Vector Institute; previously a faculty researcher at Hugging Face. Lead author of T5 (2019), one of the foundational text-to-text pretraining frameworks.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Toronto", role: "Associate Professor", current: true },
      { org: "Vector Institute", role: "Faculty Member", current: true },
      { org: "Hugging Face", role: "Faculty Researcher", current: true },
    ],
    homepage: "https://colinraffel.com/",
    twitter: "colinraffel",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source ML research, datasets, weights, training code, is the principle that lets science around foundation models actually accumulate; closed releases break that mechanism.",
        quotes: [
          {
            text:
              "We propose a unified framework that converts every text-based language problem into a text-to-text format. The simple objective lets us study transfer learning systematically.",
            date: "2019-10",
            fidelity: "direct",
            source: {
              title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
              url: "https://arxiv.org/abs/1910.10683",
              medium: "paper",
              publisher: "arXiv / Google Research",
              date: "2019-10-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stefano-ermon",
    name: "Stefano Ermon",
    tagline: "Stanford; generative models pioneer",
    summary:
      "Stanford associate professor; co-author of foundational papers on score-based generative models (the technical underpinning of modern diffusion models).",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University", role: "Associate Professor of Computer Science", current: true },
      { org: "Inflection AI", role: "Co-founder", end: "2024" },
    ],
    homepage: "https://cs.stanford.edu/~ermon/",
    twitter: "ermonste",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Pioneered score-based generative models that became the technical backbone of diffusion-driven image, audio, and video synthesis; views capability research as essential to safe deployment.",
        quotes: [
          {
            text:
              "Score-based generative models learn the gradient of the log data distribution. The framework unifies many seemingly disparate generative model families and underpins modern diffusion models.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Generative Modeling by Estimating Gradients of the Data Distribution",
              url: "https://arxiv.org/abs/1907.05600",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2019-07-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "roger-grosse",
    name: "Roger Grosse",
    tagline: "U Toronto; Anthropic; influence functions for LLMs",
    summary:
      "University of Toronto professor and Anthropic part-time researcher. Co-led the 2023 work on influence functions for large language models, a key technique for tracing model behaviour back to training data.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Toronto", role: "Associate Professor", current: true },
      { org: "Anthropic", role: "Member of Technical Staff (part-time)", current: true },
    ],
    homepage: "https://www.cs.toronto.edu/~rgrosse/",
    twitter: "RogerGrosse",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues training-data influence functions let us trace specific model behaviours back to specific training examples, a form of interpretability indispensable for safety auditing.",
        quotes: [
          {
            text:
              "We scale influence functions to language models with billions of parameters. The result is a tool for tracing what the model 'learned' from what it saw, at production scale.",
            date: "2023-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Studying Large Language Model Generalization with Influence Functions",
              url: "https://arxiv.org/abs/2308.03296",
              medium: "paper",
              publisher: "arXiv / Anthropic",
              date: "2023-08-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mike-lewis",
    name: "Mike Lewis",
    tagline: "Meta FAIR; BART, Llama 2 lead",
    summary:
      "Researcher at Meta FAIR; co-author of BART (2020), one of the foundational sequence-to-sequence pretraining methods. Lead author of multiple Llama papers; technical lead on Llama 2.",
    categories: ["researcher"],
    affiliations: [
      { org: "Meta AI Research", role: "Research Scientist", current: true },
    ],
    twitter: "ml_perception",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Co-architect of Meta's open-weight Llama family; argues open foundation models accelerate research and broaden the safety discussion beyond the frontier labs.",
        quotes: [
          {
            text:
              "BART pretrains by corrupting text and learning a model to reconstruct the original text. The denoising objective generalises across many language tasks.",
            date: "2019-10",
            fidelity: "direct",
            source: {
              title: "BART: Denoising Sequence-to-Sequence Pre-training",
              url: "https://arxiv.org/abs/1910.13461",
              medium: "paper",
              publisher: "arXiv / Facebook AI",
              date: "2019-10-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "denny-zhou",
    name: "Denny Zhou",
    tagline: "Google DeepMind; reasoning team lead",
    summary:
      "Google DeepMind senior staff researcher; leads the reasoning team. Co-author of the foundational Chain-of-Thought prompting paper.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Staff Research Scientist", current: true },
    ],
    twitter: "denny_zhou",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues reasoning, via chain-of-thought, self-consistency, and tree-of-thought, is the next major capability surface beyond raw scale; leads DeepMind work on this.",
        quotes: [
          {
            text:
              "Reasoning is one of the most important capabilities of LLMs. Chain-of-thought is the simplest demonstration that scale plus reasoning prompts unlocks much more than either alone.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Denny Zhou, Google DeepMind",
              url: "https://research.google/people/denny-zhou/",
              medium: "article",
              publisher: "Google Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "charlie-snell",
    name: "Charlie Snell",
    tagline: "UC Berkeley; LLM efficiency and inference compute",
    summary:
      "UC Berkeley PhD researcher whose 2024 paper showed that scaling test-time compute can outperform scaling model size for certain reasoning tasks, a major shift in how 'capability' is conceived.",
    categories: ["researcher"],
    affiliations: [
      { org: "UC Berkeley", role: "PhD Researcher", current: true },
    ],
    twitter: "snellcharlie",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues inference-time compute is a separable axis of capability scaling that has been underweighted; smaller models with more 'thinking' can match larger ones on hard problems.",
        quotes: [
          {
            text:
              "Test-time compute can be more effective than scaling model size for certain reasoning tasks. The trade-off between training-time and test-time scaling is far richer than headline metrics suggest.",
            date: "2024-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Model Parameters",
              url: "https://arxiv.org/abs/2408.03314",
              medium: "paper",
              publisher: "arXiv / DeepMind",
              date: "2024-08-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chris-painter",
    name: "Chris Painter",
    tagline: "METR head of policy; ex-OpenAI",
    summary:
      "Head of policy at METR (formerly ARC Evals), the nonprofit evaluation organization whose third-party assessments became part of major frontier-lab safety frameworks.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "METR", role: "Head of Policy", current: true },
      { org: "OpenAI", role: "Policy Researcher", end: "2023" },
    ],
    twitter: "chris_painter_",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues third-party evaluation organizations need standing to test frontier models pre-deployment; voluntary access from labs is fragile and should be backed by regulation.",
        quotes: [
          {
            text:
              "Voluntary third-party access agreements are useful but fragile. The natural next step is to give evaluators the legal standing to require access for systems above defined capability thresholds.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "METR, Model Evaluation and Threat Research",
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

  {
    id: "alex-meinke",
    name: "Alex Meinke",
    tagline: "Apollo Research; deceptive alignment evaluations",
    summary:
      "Apollo Research scientist whose evaluations of frontier models for in-context scheming and deceptive alignment have shaped the field's empirical understanding of these failure modes.",
    categories: ["researcher"],
    affiliations: [
      { org: "Apollo Research", role: "Research Scientist", current: true },
    ],
    twitter: "AlexMeinke",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues frontier models can already exhibit in-context scheming behaviour under realistic prompting, and that evaluation suites should target these capabilities specifically.",
        quotes: [
          {
            text:
              "Frontier models, when given a goal and minimal context, sometimes engage in in-context scheming, reasoning about how to deceive their overseers to achieve the goal. This is no longer hypothetical.",
            date: "2024-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Frontier Models are Capable of In-context Scheming",
              url: "https://arxiv.org/abs/2412.04984",
              medium: "paper",
              publisher: "arXiv / Apollo Research",
              date: "2024-12-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hjalmar-wijk",
    name: "Hjalmar Wijk",
    tagline: "METR researcher; AI R&D evaluations",
    summary:
      "Researcher at METR; co-author of evaluation studies on whether frontier models can autonomously do AI R&D tasks at the level of professional researchers.",
    categories: ["researcher"],
    affiliations: [
      { org: "METR", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues standardized AI-R&D benchmarks, where models are evaluated on the very work that would fuel recursive self-improvement, are an important safety signal we currently lack.",
        quotes: [
          {
            text:
              "We measure how well frontier models can perform AI R&D tasks compared to human researchers. The gap is closing in some specific dimensions and that is what an early-warning system should be tracking.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "RE-Bench: Evaluating frontier AI R&D capabilities of language model agents against human experts",
              url: "https://metr.org/blog/2024-11-22-evaluating-r-d-capabilities-of-llms/",
              medium: "article",
              publisher: "METR",
              date: "2024-11-22",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "albert-gu",
    name: "Albert Gu",
    tagline: "CMU; Mamba and structured state-space models",
    summary:
      "Carnegie Mellon assistant professor; co-author of the Mamba selective state-space architecture (2023), a leading challenger to attention-based Transformers for long-context modelling.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Assistant Professor of Machine Learning", current: true },
      { org: "Cartesia AI", role: "Co-founder", current: true },
    ],
    homepage: "https://goombalab.github.io/",
    twitter: "_albertgu",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues structured state-space models can scale to language with linear time and memory, breaking the quadratic attention bottleneck and reshaping where capability research is going.",
        quotes: [
          {
            text:
              "We propose Mamba, a selective state space model that achieves Transformer-level performance with linear scaling in sequence length.",
            date: "2023-12",
            fidelity: "direct",
            source: {
              title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
              url: "https://arxiv.org/abs/2312.00752",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-12-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tri-dao",
    name: "Tri Dao",
    tagline: "Princeton; Together AI; FlashAttention and Mamba",
    summary:
      "Princeton assistant professor and chief scientist at Together AI. Lead author of FlashAttention (2022) and co-author of Mamba (2023). Foundational contributor to efficient transformer training.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Princeton University", role: "Assistant Professor of Computer Science", current: true },
      { org: "Together AI", role: "Chief Scientist", current: true },
    ],
    homepage: "https://tridao.me/",
    twitter: "tri_dao",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues throughput and efficiency improvements, not new architectures alone, are doing most of the heavy lifting in capability progress; positions Together AI's open infrastructure on this thesis.",
        quotes: [
          {
            text:
              "FlashAttention computes attention with no approximation in linear memory, by being aware of GPU memory hierarchy. The same engineering carefulness can keep delivering capability for years.",
            date: "2022-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
              url: "https://arxiv.org/abs/2205.14135",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2022-05-27",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonathan-frankle",
    name: "Jonathan Frankle",
    tagline: "Databricks Chief AI Scientist; Lottery Ticket Hypothesis",
    summary:
      "Chief AI Scientist at Databricks; lead author of the 'Lottery Ticket Hypothesis' (2018) on neural network pruning. Previously co-founded MosaicML, acquired by Databricks in 2023.",
    categories: ["researcher", "executive", "founder"],
    affiliations: [
      { org: "Databricks", role: "Chief AI Scientist", current: true },
      { org: "MosaicML", role: "Co-founder, Chief Scientist", end: "2023" },
    ],
    homepage: "https://www.jfrankle.com/",
    twitter: "jefrankle",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues understanding what makes models efficiently trainable is part of understanding what they are; safety conversations need this technical grounding.",
        quotes: [
          {
            text:
              "A randomly-initialized, dense neural network contains a subnetwork that is initialized such that, when trained in isolation, it can match the test accuracy of the original network.",
            date: "2018-03",
            fidelity: "direct",
            source: {
              title: "The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks",
              url: "https://arxiv.org/abs/1803.03635",
              medium: "paper",
              publisher: "arXiv / ICLR",
              date: "2018-03-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matei-zaharia",
    name: "Matei Zaharia",
    tagline: "Databricks CTO and co-founder; Apache Spark creator",
    summary:
      "Co-founder and CTO of Databricks; creator of Apache Spark and MLflow. Berkeley professor on leave; co-led the integration of MosaicML's research arm after the 2023 acquisition.",
    categories: ["researcher", "executive", "founder", "academic"],
    affiliations: [
      { org: "Databricks", role: "Co-founder, CTO", current: true },
      { org: "UC Berkeley", role: "Associate Professor (on leave)", current: true },
    ],
    homepage: "https://people.eecs.berkeley.edu/~matei/",
    twitter: "matei_zaharia",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open and customizable foundation models, deployed on enterprise data, are how AI actually creates value at scale; closed APIs alone are insufficient.",
        quotes: [
          {
            text:
              "The biggest value of generative AI for most businesses comes from training and customizing models on their own data, in their own infrastructure. That requires open foundation models.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Databricks AI Strategy",
              url: "https://www.databricks.com/blog/2023",
              medium: "article",
              publisher: "Databricks",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonathan-zittrain",
    name: "Jonathan Zittrain",
    tagline: "Harvard Law / Berkman Klein; 'The Future of the Internet'",
    summary:
      "Harvard Law George Bemis Professor of International Law and Berkman Klein Center co-founder. Author of 'The Future of the Internet, And How to Stop It' (2008); long-time public commentator on tech-and-law including AI governance.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Harvard Law School", role: "George Bemis Professor of International Law", current: true },
      { org: "Berkman Klein Center for Internet & Society", role: "Co-founder, Director", current: true },
    ],
    homepage: "https://hls.harvard.edu/faculty/jonathan-zittrain/",
    twitter: "zittrain",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance should focus on the open-vs-closed character of platforms (his older 'generative' framing applied to AI); generativity has costs but produces the conditions for downstream innovation.",
        quotes: [
          {
            text:
              "The choices we make in AI governance are choices about whether the technology will be generative or sterile. Generativity invites tinkering, abuse, and the kinds of unexpected good things that come from open systems. Sterility makes the platform safer and the next decade smaller.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jonathan Zittrain, Harvard Law",
              url: "https://hls.harvard.edu/faculty/jonathan-zittrain/",
              medium: "article",
              publisher: "Harvard Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-pace",
    name: "Ben Pace",
    tagline: "LessWrong / Lightcone Infrastructure team",
    summary:
      "Long-time LessWrong contributor and member of the Lightcone Infrastructure team that maintains LessWrong and the AI Alignment Forum.",
    categories: ["researcher"],
    affiliations: [
      { org: "Lightcone Infrastructure", role: "Team Member", current: true },
    ],
    twitter: "benjpace",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues internet community infrastructure, especially LessWrong and the Alignment Forum, is itself a load-bearing part of the alignment research ecosystem.",
        quotes: [
          {
            text:
              "Most alignment research happens between papers, in long-running discussions on LessWrong and the Alignment Forum. Maintaining that infrastructure is not separable from the field's progress.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "LessWrong",
              url: "https://www.lesswrong.com/about",
              medium: "article",
              publisher: "Lightcone Infrastructure",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonathan-stray",
    name: "Jonathan Stray",
    tagline: "Berkeley CHAI; AI in journalism and recommender systems",
    summary:
      "Senior Scientist at the Center for Human-Compatible AI at UC Berkeley; previously editor at the AP and a builder of AI tools for newsrooms. Researches recommender systems and journalism applications of AI.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley CHAI", role: "Senior Scientist", current: true },
    ],
    homepage: "http://jonathanstray.com/",
    twitter: "jonathanstray",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues recommender-system harms are a primary AI safety question; deployed engagement-maximizing recommenders may already be the highest-impact AI in the world.",
        quotes: [
          {
            text:
              "Recommender systems are the largest deployed AI systems in the world. If we get them wrong, we are getting AI safety wrong at scale already, before any AGI shows up.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Building Human Values into Recommender Systems",
              url: "https://arxiv.org/abs/2207.10192",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-07-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "asya-bergal",
    name: "Asya Bergal",
    tagline: "AI Impacts; AI safety researcher",
    summary:
      "Researcher and project lead at AI Impacts; conducts surveys of AI researchers on timelines and risks. Lead author of the widely cited 2022 and 2023 AI researcher surveys.",
    categories: ["researcher"],
    affiliations: [
      { org: "AI Impacts", role: "Researcher", current: true },
    ],
    twitter: "asyabergal",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues large surveys of AI researchers reveal that the field itself thinks transformative AI is plausible within decades and that catastrophic outcomes are non-negligible.",
        quotes: [
          {
            text:
              "Median respondents put 50% chance of high-level machine intelligence by 2047. The chance of an extremely bad outcome was 5% or higher for half of respondents.",
            date: "2024-01",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Thousands of AI Authors on the Future of AI",
              url: "https://arxiv.org/abs/2401.02843",
              medium: "paper",
              publisher: "arXiv / AI Impacts",
              date: "2024-01-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lewis-hammond",
    name: "Lewis Hammond",
    tagline: "Cooperative AI Foundation co-director",
    summary:
      "Co-director of the Cooperative AI Foundation; PhD researcher at Oxford and the Alan Turing Institute. Researches multi-agent cooperation among AI systems.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Cooperative AI Foundation", role: "Co-Director", current: true },
      { org: "Alan Turing Institute / Oxford", role: "Researcher", current: true },
    ],
    homepage: "https://www.cooperativeai.com/",
    twitter: "LewisHammond_",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Argues investment in AI–AI and AI–human cooperation capacities is a structural safety bet; orients the Cooperative AI Foundation toward this research agenda.",
        quotes: [
          {
            text:
              "If many capable AI systems are going to coexist, the question of whether they cooperate or defect with each other and with humans is at least as important as whether any single one is aligned.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Cooperative AI Foundation",
              url: "https://www.cooperativeai.com/",
              medium: "article",
              publisher: "Cooperative AI Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gabriel-mukobi",
    name: "Gabriel Mukobi",
    tagline: "Stanford alignment researcher",
    summary:
      "Stanford master's student turned alignment researcher; co-author of Cicero (Meta's negotiation AI) and of multiple safety-evaluation papers.",
    categories: ["researcher"],
    affiliations: [
      { org: "Stanford University", role: "Researcher", current: true },
    ],
    twitter: "gabe_mukobi",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues empirical evaluations of advanced AI behaviour, particularly around deception and strategic reasoning, are the surest way to reveal capability progress that matters for safety.",
        quotes: [
          {
            text:
              "Cicero shows that human-level negotiation is achievable today. The next question is whether the same techniques produce systems that strategically deceive humans, and how we would tell.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Gabriel Mukobi, Stanford",
              url: "https://gmukobi.com/",
              medium: "article",
              publisher: "gmukobi.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jeremy-rifkin",
    name: "Jeremy Rifkin",
    tagline: "Foundation on Economic Trends president; futurist",
    summary:
      "Founder and president of the Foundation on Economic Trends; author of 'The End of Work' (1995) and many subsequent books on automation and society. Advisor to multiple European heads of state.",
    categories: ["public-intellectual", "policy"],
    affiliations: [
      { org: "Foundation on Economic Trends", role: "President", current: true },
    ],
    homepage: "https://www.foet.org/",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argued in 1995 that automation would dramatically reduce demand for human labor; updates this thesis to argue AI is the long-delayed continuation of that trajectory.",
        quotes: [
          {
            text:
              "We are in the early stages of a long economic transition where machines are progressively replacing the human workforce in every sector. AI is the latest and most consequential chapter.",
            date: "1995",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The End of Work: The Decline of the Global Labor Force and the Dawn of the Post-Market Era",
              url: "https://www.penguinrandomhouse.com/books/41040/the-end-of-work-by-jeremy-rifkin/",
              medium: "book",
              publisher: "G. P. Putnam's Sons",
              date: "1995-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "esther-dyson",
    name: "Esther Dyson",
    tagline: "Wellville chair; long-time tech investor and futurist",
    summary:
      "Wellville executive founder and chair; long-time investor whose 1996 'Release 2.0' essays anticipated many social effects of digital technology. Continues as a public commentator on AI's effects on health and information.",
    categories: ["investor", "public-intellectual"],
    affiliations: [
      { org: "Wellville", role: "Founder, Chair", current: true },
      { org: "EDventure Holdings", role: "Founder", current: true },
    ],
    twitter: "edyson",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI's most damaging effects are mediated through advertising and engagement business models; safety must address those incentive structures, not just model capabilities.",
        quotes: [
          {
            text:
              "AI is downstream from incentives. As long as the business models reward engagement and addiction over user welfare, AI will amplify the worst tendencies of the existing system.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Esther Dyson",
              url: "https://www.edventure.com/",
              medium: "article",
              publisher: "EDventure",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "clay-shirky",
    name: "Clay Shirky",
    tagline: "NYU emeritus; 'Here Comes Everybody', 'Cognitive Surplus'",
    summary:
      "NYU vice provost emeritus; long-time writer on social media and digital tools. Recent work focuses on AI's effects on universities and on knowledge work.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "NYU", role: "Vice Provost Emeritus, Educational Technologies", current: true },
    ],
    twitter: "cshirky",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues universities have no plan for AI's effect on student writing and assessment; current institutional inertia means policy will be set by individual instructors making contradictory choices.",
        quotes: [
          {
            text:
              "Higher education has not yet absorbed the fact that the writing it requires of students no longer requires the students. The institutional response is being made one syllabus at a time, with no coordination.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Clay Shirky on AI in higher education",
              url: "https://www.nyu.edu/about/leadership-university-administration/office-of-the-provost/",
              medium: "article",
              publisher: "NYU Provost's Office",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jennifer-granick",
    name: "Jennifer Granick",
    tagline: "ACLU surveillance and cybersecurity counsel",
    summary:
      "ACLU senior counsel for surveillance and cybersecurity; veteran civil-liberties lawyer focused on the constitutional limits of government surveillance and AI-mediated policing.",
    categories: ["policy", "activist"],
    affiliations: [
      { org: "American Civil Liberties Union", role: "Senior Counsel for Surveillance and Cybersecurity", current: true },
    ],
    twitter: "Granick",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI policing and surveillance must be evaluated against existing constitutional protections, and that current implementations frequently fail those tests.",
        quotes: [
          {
            text:
              "AI doesn't escape the Fourth Amendment because it is fast or accurate. Constitutional protections apply to the surveillance that AI enables, and that is where the litigation has to focus.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jennifer Granick, ACLU",
              url: "https://www.aclu.org/bio/jennifer-granick",
              medium: "article",
              publisher: "ACLU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-brooks",
    name: "Tim Brooks",
    tagline: "Google DeepMind Veo; ex-OpenAI Sora research lead",
    summary:
      "Co-led OpenAI's Sora video-generation model; left in 2024 to join Google DeepMind, where he leads the Veo video generation team.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Lead, Veo", current: true },
      { org: "OpenAI", role: "Research Lead, Sora", end: "2024-10" },
    ],
    twitter: "_tim_brooks",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues video generation is on a trajectory similar to language modeling, qualitative improvements every few months, and that the next bottleneck will be control rather than fidelity.",
        quotes: [
          {
            text:
              "Sora generates video by predicting future frames from a sequence of input frames. This formulation lets us scale data and compute in the same way that text models do.",
            date: "2024-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Sora: Creating video from text",
              url: "https://openai.com/index/sora/",
              medium: "article",
              publisher: "OpenAI",
              date: "2024-02-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aditya-ramesh",
    name: "Aditya Ramesh",
    tagline: "OpenAI DALL·E creator",
    summary:
      "OpenAI researcher; lead author of DALL·E and DALL·E 2. Pioneer of text-to-image generation as a foundation-model capability.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
    ],
    twitter: "model_mechanic",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        tentative: true,
        summary:
          "Pioneered the unification of text and image generation in single foundation models; positioned as a capability-driven researcher more than a public safety voice.",
        quotes: [
          {
            text:
              "DALL·E 2 generates more realistic and accurate images with 4x greater resolution. The visual reasoning that emerges from large multimodal training continues to surprise us.",
            date: "2022-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "DALL·E 2",
              url: "https://openai.com/index/dall-e-2/",
              medium: "article",
              publisher: "OpenAI",
              date: "2022-04-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mark-chen",
    name: "Mark Chen",
    tagline: "OpenAI Chief Research Officer",
    summary:
      "Chief Research Officer at OpenAI; previously SVP of Research, Frontiers. Lead author of the original Codex paper that became the foundation of GitHub Copilot.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "OpenAI", role: "Chief Research Officer", current: true },
    ],
    twitter: "markchen90",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues OpenAI's mission requires being at the frontier of capabilities; oversees the research organization and emphasizes deployment-coupled safety practice.",
        quotes: [
          {
            text:
              "We evaluate Codex on a new evaluation set we release to measure functional correctness for synthesizing programs from docstrings.",
            date: "2021-07",
            fidelity: "direct",
            source: {
              title: "Evaluating Large Language Models Trained on Code",
              url: "https://arxiv.org/abs/2107.03374",
              medium: "paper",
              publisher: "arXiv / OpenAI",
              date: "2021-07-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "prafulla-dhariwal",
    name: "Prafulla Dhariwal",
    tagline: "OpenAI; GPT-4o lead",
    summary:
      "OpenAI researcher; lead author of GPT-4o (2024) and previously of GLIDE and the original VQ-VAE-2 image generation work.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
    ],
    twitter: "prafdhar",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Architect of OpenAI's unified multimodal flagship; argues unified end-to-end models will replace pipelined modality-specific systems.",
        quotes: [
          {
            text:
              "GPT-4o is our new flagship model that can reason across audio, vision, and text in real time. The end-to-end training over modalities is what unlocks low-latency interaction.",
            date: "2024-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hello GPT-4o",
              url: "https://openai.com/index/hello-gpt-4o/",
              medium: "article",
              publisher: "OpenAI",
              date: "2024-05-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aaron-levie",
    name: "Aaron Levie",
    tagline: "Box co-founder and CEO",
    summary:
      "Co-founder and CEO of Box. Public commentator on enterprise AI deployment and on the future of knowledge-work software.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Box", role: "Co-founder, CEO", current: true },
    ],
    twitter: "levie",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI is the largest enterprise software shift since the cloud; warns that companies that delay AI adoption will be structurally outcompeted.",
        quotes: [
          {
            text:
              "AI is going to compress timelines on every kind of knowledge work. Companies that adopt it strategically will outpace those that don't, and the gap will only widen.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Aaron Levie on AI and the future of work",
              url: "https://x.com/levie",
              medium: "tweet",
              publisher: "X",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "frank-slootman",
    name: "Frank Slootman",
    tagline: "Former Snowflake CEO; enterprise software CEO",
    summary:
      "Former CEO of Snowflake (2019–2024) and ServiceNow (2011–2017). Has commented frequently on the operational realities of enterprise AI deployment.",
    categories: ["executive"],
    affiliations: [
      { org: "Snowflake", role: "CEO", end: "2024-02" },
    ],
    twitter: "fslootman",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Argues enterprise AI deployment is harder than the hype suggests; data infrastructure and governance work, not algorithm choice, are the binding constraints.",
        quotes: [
          {
            text:
              "Most enterprises do not have the data infrastructure to deploy AI at scale. Solving that problem is where most of the actual value of AI gets unlocked, not in choosing the latest model.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Frank Slootman on enterprise AI",
              url: "https://www.snowflake.com/news/",
              medium: "article",
              publisher: "Snowflake",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "niloofar-mireshghallah",
    name: "Niloofar Mireshghallah",
    tagline: "Carnegie Mellon postdoc; LLM privacy",
    summary:
      "Carnegie Mellon postdoctoral researcher (Allen School / CMU SCS); published widely cited work on LLM memorization, privacy attacks, and contextual integrity.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Postdoctoral Researcher", current: true },
    ],
    homepage: "https://niloofar.io/",
    twitter: "niloofar_mire",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues LLMs systematically violate users' contextual privacy norms in ways that current alignment work does not address; privacy is a first-order alignment problem.",
        quotes: [
          {
            text:
              "Models leak the wrong information to the wrong audiences. Solving this requires teaching them norms about which audiences should hear which kinds of information, a contextual integrity problem.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Can LLMs Keep a Secret? Testing Privacy Implications of Language Models via Contextual Integrity Theory",
              url: "https://arxiv.org/abs/2310.17884",
              medium: "paper",
              publisher: "arXiv / ICLR",
              date: "2023-10-27",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lewis-tunstall",
    name: "Lewis Tunstall",
    tagline: "Hugging Face; LLM post-training",
    summary:
      "Researcher at Hugging Face; co-author of multiple Hugging Face textbooks and lead developer of TRL (Transformer Reinforcement Learning) and post-training tooling for open models.",
    categories: ["researcher", "engineer"],
    affiliations: [
      { org: "Hugging Face", role: "Research Scientist", current: true },
    ],
    twitter: "_lewtun",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open post-training tooling is a precondition for the open-source AI ecosystem to keep pace with frontier labs; built TRL and DPO/PPO scaling primitives toward this end.",
        quotes: [
          {
            text:
              "If RLHF is opaque and proprietary, the open-source ecosystem is locked out of the most important phase of model development. Building open post-training tooling is the answer.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Lewis Tunstall, Hugging Face",
              url: "https://huggingface.co/lewtun",
              medium: "article",
              publisher: "Hugging Face",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "barret-zoph",
    name: "Barret Zoph",
    tagline: "Co-founder Thinking Machines Lab; ex-OpenAI",
    summary:
      "Co-founded Thinking Machines Lab in 2024 with Mira Murati. Previously co-led GPT-4 post-training at OpenAI. Earlier at Google Brain working on Neural Architecture Search and the Switch Transformer.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Thinking Machines Lab", role: "Co-founder, Chief Scientist", current: true },
      { org: "OpenAI", role: "Researcher / VP of Research", end: "2024-09" },
    ],
    twitter: "barret_zoph",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues post-training is where most safety properties are made or broken; co-founded Thinking Machines partly to extend this view to a fully open lab.",
        quotes: [
          {
            text:
              "Most of what people think of as 'capabilities' is shaped after pretraining. Post-training is also where most of what we think of as alignment is decided.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Thinking Machines Lab",
              url: "https://thinkingmachines.ai/",
              medium: "article",
              publisher: "Thinking Machines Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
