import type { Person } from "@/lib/people-types";

// Batch AG chunk 03/5: split from people-ag.ts to keep
// individual modules small enough for turbopack to hot-reload.

export const people: Person[] = [
  {
    id: "sergey-levine",
    name: "Sergey Levine",
    tagline: "UC Berkeley; robot learning, deep RL",
    summary:
      "UC Berkeley professor whose group has produced foundational work on robot learning, offline RL, and, since 2023, generalist robot foundation models like RT-2 and Open X-Embodiment.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of EECS", current: true },
    ],
    homepage: "https://people.eecs.berkeley.edu/~svlevine/",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        summary:
          "Argues physical-world robotics is the bottleneck to general AI usefulness; less explicit on x-risk strategy but views capability progress as the priority.",
        quotes: [
          {
            text:
              "If we want machines that can do useful things in the physical world, we need to scale up real-world data and self-supervision. Internet text gets you far, but not into a kitchen.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models",
              url: "https://arxiv.org/abs/2310.08864",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-10-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jakob-foerster",
    name: "Jakob Foerster",
    tagline: "Oxford FLAIR lab; multi-agent RL",
    summary:
      "Oxford professor and head of the FLAIR lab; researches learning to cooperate and communicate in multi-agent reinforcement learning, including opponent shaping.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Oxford", role: "Associate Professor of EECS", current: true },
    ],
    homepage: "https://www.jakobfoerster.com/",
    twitter: "j_foerst",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Argues that the social dynamics among learning agents, cooperation, communication, opponent shaping, are first-order alignment problems, not afterthoughts to single-agent training.",
        quotes: [
          {
            text:
              "Treating each agent as if it learns in isolation misses the central question: what equilibria do learning algorithms select when they meet each other?",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Model-Free Opponent Shaping",
              url: "https://arxiv.org/abs/2205.01447",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-05-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mark-riedl",
    name: "Mark Riedl",
    tagline: "Georgia Tech; AI ethics and storytelling",
    summary:
      "Georgia Tech professor of interactive computing whose research spans narrative AI, AI ethics, and creative AI. Frequent public commentator on overhype and underexamined societal harms of generative AI.",
    categories: ["researcher", "academic", "public-intellectual"],
    affiliations: [
      { org: "Georgia Tech", role: "Professor, School of Interactive Computing", current: true },
    ],
    homepage: "https://markriedl.github.io/",
    twitter: "mark_riedl",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues the AI policy conversation should center documented sociotechnical harms, labor, copyright, surveillance, hallucination harms, rather than speculative existential scenarios.",
        quotes: [
          {
            text:
              "AI hype is a strategy to make people fearful so they will accept governance regimes that benefit incumbents. Real harms are present-tense and unevenly distributed.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mark Riedl on AI hype and harm",
              url: "https://markriedl.medium.com/",
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
    id: "sean-carroll",
    name: "Sean Carroll",
    tagline: "Johns Hopkins / Santa Fe; physicist and Mindscape host",
    summary:
      "Theoretical physicist at Johns Hopkins and the Santa Fe Institute; hosts Mindscape, where AI risk has been a recurring topic. Cautious about AGI timelines and tends toward measured skepticism on near-term existential framings.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Johns Hopkins University", role: "Homewood Professor of Natural Philosophy", current: true },
      { org: "Santa Fe Institute", role: "External Professor", current: true },
    ],
    homepage: "https://www.preposterousuniverse.com/",
    twitter: "seanmcarroll",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current LLMs are not on a smooth path to general intelligence; engages seriously with x-risk arguments but views many specific scenarios as physically and economically implausible.",
        quotes: [
          {
            text:
              "I'm willing to take seriously that AI is a really big deal. I'm not willing to grant that the specific paths to doom you imagine have anything like the probability you assign to them.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mindscape Podcast: Solo AMA on AI risk",
              url: "https://www.preposterousuniverse.com/podcast/",
              medium: "podcast",
              publisher: "Mindscape",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "raia-hadsell",
    name: "Raia Hadsell",
    tagline: "Google DeepMind director of robotics & research",
    summary:
      "Google DeepMind senior director whose research has spanned robotics, continual learning, and progressive networks. Helped lead DeepMind's robotics push and now oversees research strategy.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Director of Research", current: true },
    ],
    homepage: "https://raiahadsell.com/",
    twitter: "raiahadsell",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues continual learning and robotic embodiment are central to general AI; engages with safety as integral to research roadmaps.",
        quotes: [
          {
            text:
              "Embodied learning forces you to confront questions that are easy to gloss over in language models: causality, partial observability, the cost of mistakes.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Raia Hadsell, DeepMind",
              url: "https://deepmind.google/about/",
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
    id: "sebastien-bubeck",
    name: "Sébastien Bubeck",
    tagline: "OpenAI; lead author of 'Sparks of AGI' paper",
    summary:
      "Mathematician and ML researcher; previously led the Microsoft Research team that produced the 'Sparks of Artificial General Intelligence' paper, then moved to OpenAI in 2024.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "VP of GenAI Research", current: true },
      { org: "Microsoft Research", role: "VP, Sr. Principal Researcher", start: "2014", end: "2024" },
    ],
    twitter: "SebastienBubeck",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        summary:
          "Argues GPT-4 already exhibits early AGI behaviors and that capability progress will continue rapidly; less explicit on safety strategy.",
        quotes: [
          {
            text:
              "We contend that GPT-4 could reasonably be viewed as an early (yet still incomplete) version of an artificial general intelligence (AGI) system.",
            date: "2023-03",
            fidelity: "direct",
            source: {
              title: "Sparks of Artificial General Intelligence: Early Experiments with GPT-4",
              url: "https://arxiv.org/abs/2303.12712",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-03-22",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nicholas-carlini",
    name: "Nicholas Carlini",
    tagline: "Anthropic adversarial-ML researcher; ex-Google Brain",
    summary:
      "Adversarial machine learning researcher widely cited for memorization, jailbreak, and privacy attacks on large models. Argues current LLM safety is unusually fragile compared to mature security fields.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "Google Brain / DeepMind", role: "Research Scientist", start: "2018", end: "2024" },
    ],
    homepage: "https://nicholas.carlini.com/",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues ML systems are routinely broken by simple attacks and that the field treats safety claims with insufficient adversarial scrutiny.",
        quotes: [
          {
            text:
              "I think the difficulty of attacking machine learning models is grossly overestimated, and the difficulty of defending them grossly underestimated.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why I attack neural networks",
              url: "https://nicholas.carlini.com/writing/2024/why-i-attack.html",
              medium: "blog",
              publisher: "nicholas.carlini.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aleksander-madry",
    name: "Aleksander Mądry",
    tagline: "MIT; ex-OpenAI head of preparedness",
    summary:
      "MIT professor of computer science specializing in robust machine learning. Led the OpenAI Preparedness Team in 2023–24 to evaluate frontier model risks across CBRN, cyber, and persuasion domains.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT", role: "Cadence Design Systems Professor of Computing", current: true },
      { org: "OpenAI", role: "Head of Preparedness", start: "2023-10", end: "2024-08" },
    ],
    homepage: "https://madry.mit.edu/",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues frontier-AI risk needs to be measured systematically before deployment and that capability evaluations are the precondition for any meaningful safety commitment.",
        quotes: [
          {
            text:
              "We need to make our understanding of frontier model risks empirical, not narrative. The Preparedness Framework is about measuring danger before it manifests.",
            date: "2023-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "OpenAI Preparedness Framework (Beta)",
              url: "https://openai.com/safety/preparedness",
              medium: "article",
              publisher: "OpenAI",
              date: "2023-12-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-deutsch",
    name: "David Deutsch",
    tagline: "Oxford physicist; pioneer of quantum computing",
    summary:
      "Oxford physicist who proposed the universal quantum computer in 1985. Author of 'The Beginning of Infinity'; argues general intelligences are people in the moral sense and AI x-risk framings misread the open-ended nature of explanatory knowledge.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Oxford", role: "Visiting Professor of Physics", current: true },
    ],
    homepage: "https://www.daviddeutsch.org.uk/",
    twitter: "DavidDeutschOxf",
    positions: [
      {
        strategyId: "moral-circle-expansion",
        stance: "endorses",
        summary:
          "Argues AGIs will be people in the morally relevant sense, that creating them is part of the open-ended growth of knowledge, and that doom narratives mistake this for a control problem.",
        quotes: [
          {
            text:
              "AGIs will be people. That has been a problem, and a feature, of every previous era of artificial intelligence: the issue is not 'how do we control them' but how we behave toward beings whose creativity is comparable to our own.",
            date: "2012",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Beginning of Infinity",
              url: "https://www.penguinrandomhouse.com/books/106936/the-beginning-of-infinity-by-david-deutsch/",
              medium: "book",
              publisher: "Penguin",
              date: "2011",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-wentworth",
    name: "John Wentworth",
    tagline: "Independent alignment researcher; natural abstractions",
    summary:
      "Independent alignment researcher who developed the 'natural abstractions hypothesis' as a framing for whether human concepts robustly transfer to learned representations.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Independent", role: "Alignment Researcher", current: true },
    ],
    twitter: "johnwentworth",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues alignment requires identifying the abstractions a model converges on; if these match human concepts, training-time supervision becomes far more reliable.",
        quotes: [
          {
            text:
              "The natural abstractions hypothesis is roughly: a wide variety of cognitive systems will converge to use the same high-level abstractions for reasoning about the world.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Natural Abstraction Hypothesis: Implications and Evidence",
              url: "https://www.lesswrong.com/posts/cy3BhHrGinZCp3LXE/testing-the-natural-abstraction-hypothesis-project-intro",
              medium: "blog",
              publisher: "LessWrong",
              date: "2021-04-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "scott-garrabrant",
    name: "Scott Garrabrant",
    tagline: "MIRI researcher; logical induction, Cartesian frames",
    summary:
      "Machine Intelligence Research Institute researcher who developed logical inductors (a formalism for assigning probabilities to mathematical statements over time) and Cartesian frames (a model of agent–environment boundaries).",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute", role: "Research Fellow", current: true },
    ],
    positions: [
      {
        strategyId: "agent-foundations",
        stance: "endorses",
        summary:
          "Argues robust alignment requires foundational work on what agency, embeddedness, and self-reference even mean before behavioral training methods can be trusted.",
        quotes: [
          {
            text:
              "Logical inductors approximate well-calibrated probabilistic reasoning over computable statements: the bookmaker is gradually unable to extract money from the market over time.",
            date: "2016",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Logical Induction",
              url: "https://intelligence.org/files/LogicalInduction.pdf",
              medium: "paper",
              publisher: "MIRI",
              date: "2016-09-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "abram-demski",
    name: "Abram Demski",
    tagline: "MIRI researcher; embedded agency",
    summary:
      "MIRI researcher who co-authored the 'Embedded Agency' sequence outlining gaps in classical decision theory when an agent is part of the environment it reasons about.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute", role: "Research Fellow", current: true },
    ],
    twitter: "abramdemski",
    positions: [
      {
        strategyId: "agent-foundations",
        stance: "endorses",
        summary:
          "Argues that 'embedded' reasoning, where an agent is a physical computation inside its world rather than a Cartesian observer, is the root of unresolved alignment problems.",
        quotes: [
          {
            text:
              "Classical decision theory implicitly assumes a Cartesian boundary between agent and environment. Embedded agents lack this boundary, and that is where most alignment problems hide.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Embedded Agency",
              url: "https://www.alignmentforum.org/s/Rm6oQRJJmhGCcLvxh",
              medium: "blog",
              publisher: "AI Alignment Forum",
              date: "2018-10-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-rocktaschel",
    name: "Tim Rocktäschel",
    tagline: "Google DeepMind / UCL; open-ended learning",
    summary:
      "DeepMind staff scientist and UCL professor who studies open-ended learning environments. Co-creator of Genie (action-controllable foundation worlds) and contributor to autocurricula research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Google DeepMind", role: "Staff Research Scientist", current: true },
      { org: "University College London", role: "Professor of AI", current: true },
    ],
    homepage: "https://rockt.ai/",
    twitter: "_rockt",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues that open-ended learning, agents generating their own challenges in increasingly complex environments, is a critical path toward general capabilities, and a key surface for safety research.",
        quotes: [
          {
            text:
              "Open-ended learning is the missing ingredient: systems that can perpetually invent new tasks for themselves and solve them are how we get capable, general AI.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Genie: Generative Interactive Environments",
              url: "https://arxiv.org/abs/2402.15391",
              medium: "paper",
              publisher: "arXiv / Google DeepMind",
              date: "2024-02-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jacob-andreas",
    name: "Jacob Andreas",
    tagline: "MIT NLP; language models as belief reports",
    summary:
      "MIT EECS professor whose research has examined whether language models develop interpretable internal world-models and structured representations of belief.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT", role: "Associate Professor, EECS / CSAIL", current: true },
    ],
    homepage: "http://web.mit.edu/jda/www/",
    twitter: "jacobandreas",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues language models develop richer internal structure than behavior alone reveals; mechanistic and probing techniques are required to understand what they 'believe'.",
        quotes: [
          {
            text:
              "Language models contain structured representations of the agents and situations described in their inputs. Reading those representations is closer to ethnography than to prompt engineering.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Language Models as Agent Models",
              url: "https://arxiv.org/abs/2212.01681",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-12-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonathan-mugan",
    name: "Jonathan Mugan",
    tagline: "DeepGrammar founder; AI for children's media",
    summary:
      "AI researcher whose work has focused on grounding AI in real-world understanding. Founded DeepGrammar to build AI tools for children's media.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "DeepGrammar", role: "Founder", current: true },
    ],
    twitter: "jmugan",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames AI as lacking grounded understanding; argues practical deployment depends on scoping to domains where this limitation is managed.",
        quotes: [
          {
            text:
              "AI systems do not understand the world the way we do. Deployments that assume they do will fail in specific, predictable ways.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "DeepGrammar",
              url: "https://www.deepgrammar.com/",
              medium: "article",
              publisher: "DeepGrammar",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "barath-raghavan",
    name: "Barath Raghavan",
    tagline: "USC professor; digital infrastructure and AI energy",
    summary:
      "USC computer scientist whose work on internet infrastructure and AI energy has informed mainstream discussion of compute-and-climate tradeoffs.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "USC Viterbi School of Engineering", role: "Assistant Professor", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI energy consumption must be treated as first-class infrastructure cost, with accountability for usage.",
        quotes: [
          {
            text:
              "If AI consumes 10% of world electricity, we should decide that consciously, not as an emergent property.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Barath Raghavan, USC",
              url: "https://barath.org/",
              medium: "article",
              publisher: "USC",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trevor-darrell",
    name: "Trevor Darrell",
    tagline: "UC Berkeley AI vision professor",
    summary:
      "UC Berkeley professor specializing in computer vision and multimodal AI. Widely-cited contributor to vision-language model research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Computer Science", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Academic voice on technical grounding of multimodal AI; engaged with but not fully aligned with x-risk framing.",
        quotes: [
          {
            text:
              "Vision-language models raise their own alignment questions that text-only framings don't address.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Trevor Darrell, Berkeley",
              url: "https://people.eecs.berkeley.edu/~trevor/",
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
    id: "julia-stoyanovich",
    name: "Julia Stoyanovich",
    tagline: "NYU responsible AI researcher",
    summary:
      "NYU Tandon professor and founding director of the Center for Responsible AI. Co-author of New York City's algorithmic accountability regulation.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "NYU Tandon School of Engineering", role: "Institute Associate Professor", current: true },
      { org: "NYU Center for Responsible AI", role: "Founding Director", current: true },
    ],
    twitter: "stoyanoj",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helped shape NYC's AI local laws; argues city-level AI governance can produce more robust frameworks than federal inaction.",
        quotes: [
          {
            text:
              "City-level AI governance is already happening. Federal inaction does not mean nothing is being regulated.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "NYU Center for Responsible AI",
              url: "https://airesponsibly.com/",
              medium: "article",
              publisher: "NYU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "solon-barocas",
    name: "Solon Barocas",
    tagline: "Microsoft Research and Cornell; fairness theorist",
    summary:
      "Microsoft Research principal and Cornell professor whose foundational work on fairness in machine learning has shaped the field. Co-author of the canonical Fairness and Machine Learning textbook.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Microsoft Research", role: "Principal Researcher", current: true },
      { org: "Cornell University", role: "Associate Professor", current: true },
    ],
    twitter: "s010n",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helped establish algorithmic fairness as a rigorous sub-field; argues fairness research must be grounded in specific deployment contexts.",
        quotes: [
          {
            text:
              "Fairness in ML is not a property of a model. It is a property of a model, a task, and a deployment context together.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Fairness and Machine Learning",
              url: "https://fairmlbook.org/",
              medium: "book",
              publisher: "fairmlbook.org",
              date: "2019",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sarah-t-roberts",
    name: "Sarah T. Roberts",
    tagline: "UCLA professor; author of Behind the Screen",
    summary:
      "UCLA professor whose 2019 Behind the Screen documented the human labour behind commercial content moderation. Has extended this to generative AI training data.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UCLA", role: "Associate Professor of Information Studies", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Sarah_T._Roberts",
    twitter: "ubiquity75",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI training labour, data annotators, content moderators, is invisible infrastructure that requires labour-rights governance.",
        quotes: [
          {
            text:
              "The human labour that cleans AI training data is concentrated in the Global South and is systematically hidden from the consumers of AI products.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Behind the Screen",
              url: "https://yalebooks.yale.edu/book/9780300261479/behind-the-screen/",
              medium: "book",
              publisher: "Yale University Press",
              date: "2019",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "milagros-miceli",
    name: "Milagros Miceli",
    tagline: "Weizenbaum Institute Berlin; data-worker research",
    summary:
      "Weizenbaum Institute researcher whose work has documented the exploitative conditions of AI data workers globally. Foundational research for the data-labour rights movement.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Weizenbaum Institute", role: "Research Group Lead", current: true },
    ],
    twitter: "milagrosmiceli",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documents the global data-worker conditions that underlie AI training; advocates for labour-rights framings of AI governance.",
        quotes: [
          {
            text:
              "Data workers are the first victims of AI, and the ones whose welfare is least considered.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Data Workers' Inquiry",
              url: "https://data-workers.org/",
              medium: "article",
              publisher: "Data Workers' Inquiry",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adrienne-williams",
    name: "Adrienne Williams",
    tagline: "Former Amazon warehouse worker; AI labour activist",
    summary:
      "Former Amazon delivery driver and current AI Now Institute fellow who has written about AI surveillance in warehouse and gig work. Voice for AI-affected workers.",
    categories: ["activist"],
    affiliations: [
      { org: "AI Now Institute", role: "Fellow", current: true },
    ],
    twitter: "ThinkingWoman_",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "First-hand voice for workers surveilled by AI; argues those affected should lead policy.",
        quotes: [
          {
            text:
              "I was the AI's training data. The people building AI for warehouses have never worked in one.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Now Institute",
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

  {
    id: "scott-aaronson",
    name: "Scott Aaronson",
    tagline: "UT Austin computer scientist; ex-OpenAI AI safety visitor",
    summary:
      "Quantum computing theorist at UT Austin. Took leave in 2022-2023 to work on OpenAI's Superalignment team, developing watermarking technology. Publicly skeptical of 'Yudkowskian' doom framings but engaged with alignment work.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UT Austin", role: "Schlumberger Centennial Chair of Computer Science", current: true },
      { org: "OpenAI", role: "Research scientist (safety, visiting)", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Scott_Aaronson",
    homepage: "https://www.scottaaronson.com/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues alignment is genuinely hard, that doomers are not crazy, but the productive response is more theoretical work and alignment-focused engineering rather than panic or pause; works on practical alignment tools like watermarking.",
        quotes: [
          {
            text:
              "I'm now persuaded that the alignment problem is real, that there is no king's road to it, and that humanity is in a much worse position than we should be. I am working on it because the alternative is shrugging.",
            date: "2022-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why I'm joining OpenAI",
              url: "https://scottaaronson.blog/?p=6484",
              medium: "blog",
              publisher: "Shtetl-Optimized",
              date: "2022-06-17",
            },
          },
          {
            text:
              "AI safety is finally becoming a field where you can make clear, legible progress.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scott Aaronson: Against AI Doomerism",
              url: "https://thegradientpub.substack.com/p/scott-aaronson-against-ai-doomerism",
              medium: "podcast",
              publisher: "The Gradient",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yejin-choi",
    name: "Yejin Choi",
    tagline: "University of Washington NLP professor; MacArthur fellow",
    summary:
      "MacArthur 'genius' grant recipient and University of Washington professor whose work on common-sense reasoning in language models has been widely influential.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Washington", role: "Professor of Computer Science", current: true },
      { org: "Stanford University", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://homes.cs.washington.edu/~yejin/",
    twitter: "YejinChoinka",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues frontier LLMs lack robust commonsense reasoning despite impressive surface fluency; common-sense reasoning is under-appreciated as an alignment substrate, and the gap between fluency and understanding has not been closed.",
        quotes: [
          {
            text:
              "AI is unbelievably smart and shockingly stupid, both at the same time. Until we close the commonsense gap, claims about general intelligence are not yet defensible.",
            date: "2023-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why AI is incredibly smart and shockingly stupid",
              url: "https://www.ted.com/talks/yejin_choi_why_ai_is_incredibly_smart_and_shockingly_stupid",
              medium: "talk",
              publisher: "TED",
              date: "2023-04",
              videoId: "SvBR0OGT5VI",
              videoPlatform: "youtube",
            },
          },
          {
            text:
              "Common-sense reasoning is the unsolved part of AI, and it is the same part where safety is hardest to evaluate.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Yejin Choi, University of Washington",
              url: "https://homes.cs.washington.edu/~yejin/",
              medium: "article",
              publisher: "University of Washington",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "albert-fox-cahn",
    name: "Albert Fox Cahn",
    tagline: "Surveillance Technology Oversight Project (S.T.O.P.) founder",
    summary:
      "Civil rights attorney who founded the Surveillance Technology Oversight Project. Has led legal challenges to AI-based surveillance in NYC and beyond.",
    categories: ["activist", "founder"],
    affiliations: [
      { org: "Surveillance Technology Oversight Project (S.T.O.P.)", role: "Founder and Executive Director", current: true },
    ],
    twitter: "FoxCahn",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Litigates against AI-enabled surveillance; argues current US law allows surveillance practices that would have been unthinkable a decade ago.",
        quotes: [
          {
            text:
              "AI surveillance is rolling out faster than the laws to govern it. The gap is the danger.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "S.T.O.P.",
              url: "https://www.stopspying.org/",
              medium: "article",
              publisher: "S.T.O.P.",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "evan-greer",
    name: "Evan Greer",
    tagline: "Fight for the Future director; digital rights activist",
    summary:
      "Director of Fight for the Future, a digital rights activist organisation. Has organised against AI surveillance, facial recognition, and algorithmic harm.",
    categories: ["activist"],
    affiliations: [
      { org: "Fight for the Future", role: "Director", current: true },
    ],
    twitter: "evan_greer",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI policy as a digital civil-rights battle; mobilises grassroots opposition to surveillance AI.",
        quotes: [
          {
            text:
              "Big Tech wants you to debate whether AI will kill us all in 50 years so you don't notice it is harming you today.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Fight for the Future",
              url: "https://www.fightforthefuture.org/",
              medium: "article",
              publisher: "Fight for the Future",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "edward-snowden",
    name: "Edward Snowden",
    tagline: "NSA whistleblower; AI surveillance critic",
    summary:
      "Former NSA contractor and famous surveillance whistleblower. Has written publicly about AI's implications for surveillance and intelligence work.",
    categories: ["public-intellectual", "activist"],
    affiliations: [
      { org: "Independent", role: "Writer and consultant", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Edward_Snowden",
    twitter: "Snowden",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI massively expands the surveillance possibilities he warned about a decade ago. Calls for civil-liberty-grounded constraints.",
        quotes: [
          {
            text:
              "AI is the most powerful surveillance technology ever invented. The threat model has changed; the law has not.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Edward Snowden on X",
              url: "https://x.com/Snowden",
              medium: "tweet",
              publisher: "X/Twitter",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andrew-yao",
    name: "Andrew Yao",
    tagline: "Tsinghua professor; Turing Award winner; Chinese AI institutional figure",
    summary:
      "Tsinghua professor and 2000 Turing Award winner. Founded the Yao Class at Tsinghua, which has produced many of China's leading AI researchers.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Tsinghua University", role: "Dean of Institute for Interdisciplinary Information Sciences", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Andrew_Yao",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Foundational figure in Chinese theoretical computer science. Has supported Chinese-Western AI safety dialogues including IDAIS.",
        quotes: [
          {
            text:
              "AI safety is a shared technical problem; international cooperation is essential.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "International Dialogues on AI Safety",
              url: "https://idais.ai/",
              medium: "article",
              publisher: "IDAIS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "liang-wenfeng",
    name: "Liang Wenfeng",
    tagline: "Founder of DeepSeek; Chinese frontier AI",
    summary:
      "Quant trader and founder of DeepSeek, the Chinese AI lab whose 2025 release of efficient, cheap reasoning models redrew the global AI cost curve.",
    categories: ["founder", "executive", "researcher"],
    affiliations: [
      { org: "DeepSeek", role: "Founder", current: true },
      { org: "High-Flyer Capital", role: "Co-founder", current: true },
    ],
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Released DeepSeek R1 and V3 as open-weight models with cost-efficient training. Resets cost expectations for Chinese frontier AI.",
        quotes: [
          {
            text:
              "Open-weight models are the path to China's leadership in AI.",
            date: "2025-01",
            fidelity: "paraphrase-loose",
            source: {
              title: "DeepSeek",
              url: "https://www.deepseek.com/",
              medium: "article",
              publisher: "DeepSeek",
              date: "2025-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robin-li",
    name: "Robin Li",
    tagline: "CEO of Baidu; Chinese AI champion",
    summary:
      "CEO of Baidu, one of China's largest tech firms and a major Chinese AI lab. Public face of Chinese frontier AI development.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Baidu", role: "Chairman, CEO, and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Robin_Li",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Long-running advocate for Chinese AI capability. Has positioned Baidu's ERNIE as a Chinese frontier model. The quote below is corporate keynote hype; no primary-source strategic position is on the record.",
        quotes: [
          {
            text:
              "AI is the next great revolution and China will be a leader in it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Baidu World",
              url: "https://www.baidu.com/",
              medium: "article",
              publisher: "Baidu",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "wu-hequan",
    name: "Wu Hequan",
    tagline: "Chinese Academy of Engineering academician; AI policy elder",
    summary:
      "Chinese Academy of Engineering academician who has shaped Chinese AI standards work and academic policy advice for two decades.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Chinese Academy of Engineering", role: "Academician", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Senior Chinese academic voice advising on AI standards and infrastructure. Bridges academic and government work.",
        quotes: [
          {
            text:
              "AI development requires both ambitious investment and prudent governance. China is committed to both.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Chinese Academy of Engineering",
              url: "https://en.cae.cn/",
              medium: "article",
              publisher: "Chinese Academy of Engineering",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cyril-ramaphosa",
    name: "Cyril Ramaphosa",
    tagline: "President of South Africa; AU AI strategy host",
    summary:
      "President of South Africa whose government chairs the African Union AI Continental Strategy work. Public framings position African AI sovereignty as joint project.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of South Africa", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Cyril_Ramaphosa",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Drives African AU-level AI strategy. Argues continental rather than national AI capacity is the realistic ambition.",
        quotes: [
          {
            text:
              "African AI sovereignty must be continental, not national.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "African Union AI Strategy",
              url: "https://au.int/en",
              medium: "article",
              publisher: "African Union",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "xi-jinping",
    name: "Xi Jinping",
    tagline: "President of China; AI as national strategic priority",
    summary:
      "President of China whose 2017 New Generation AI Development Plan made AI a national strategic priority and committed China to AI leadership by 2030.",
    categories: ["policy"],
    affiliations: [
      { org: "People's Republic of China", role: "President; General Secretary CCP", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Xi_Jinping",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "China's national AI strategy frames AI as central to economic and military power. Targets first-tier global AI leadership by 2030.",
        quotes: [
          {
            text:
              "AI is a strategic technology that will lead a new round of scientific and technological revolution and industrial transformation.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            context: "Quoted in China's New Generation AI Development Plan rollout speeches.",
            source: {
              title: "New Generation AI Development Plan",
              url: "https://chinacopyrightandmedia.wordpress.com/2017/07/20/new-generation-artificial-intelligence-development-plan/",
              medium: "article",
              publisher: "State Council of China",
              date: "2017-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "narendra-modi",
    name: "Narendra Modi",
    tagline: "Prime Minister of India; AI for All initiative",
    summary:
      "Indian Prime Minister whose government has launched the IndiaAI Mission, a $1.25B sovereign AI initiative. Co-host of the 2026 AI Action Summit.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of India", role: "Prime Minister", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Narendra_Modi",
    twitter: "narendramodi",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Pushed India's IndiaAI Mission for sovereign AI capacity, with focus on Indian-language LLMs and applications for 1.4B people.",
        quotes: [
          {
            text:
              "AI must be for all, not for a few.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "IndiaAI Mission",
              url: "https://indiaai.gov.in/",
              medium: "article",
              publisher: "IndiaAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "olaf-scholz",
    name: "Olaf Scholz",
    tagline: "Former German Chancellor; AI infrastructure investments",
    summary:
      "Former German Chancellor who led the German AI investment plan and EU AI Act negotiations under the German EU presidency.",
    categories: ["policy"],
    affiliations: [
      { org: "Bundestag", role: "Member", current: true },
      { org: "Government of Germany", role: "Chancellor", end: "2025-02", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Olaf_Scholz",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Steered German AI investment policy and EU AI Act legislative work. Argues European AI sovereignty requires both infrastructure and regulation.",
        quotes: [
          {
            text:
              "Germany and Europe must invest in AI to remain competitive while ensuring AI works for our values.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "German Federal Government AI Strategy",
              url: "https://www.ki-strategie-deutschland.de/",
              medium: "article",
              publisher: "Bundesregierung",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luiz-inacio-lula-da-silva",
    name: "Luiz Inácio Lula da Silva",
    tagline: "President of Brazil; AI sovereignty advocate",
    summary:
      "President of Brazil whose government has launched a Brazilian AI Plan, positioning Brazil as a Global South AI sovereignty leader.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Brazil", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Pushed Brazilian AI Plan with R$23B investment for sovereign AI infrastructure. Frames AI as strategic autonomy question.",
        quotes: [
          {
            text:
              "Brazil cannot be a passive consumer of AI created elsewhere. We must build our own AI for Portuguese-speaking communities.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Plano Brasileiro de Inteligência Artificial",
              url: "https://www.gov.br/mcti/pt-br",
              medium: "article",
              publisher: "Government of Brazil",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lee-hsien-loong",
    name: "Lee Hsien Loong",
    tagline: "Senior Minister of Singapore; former Prime Minister",
    summary:
      "Senior Minister and former Prime Minister of Singapore (2004–2024). Has been a major proponent of Singapore as an AI-friendly hub balancing innovation with prudent governance.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Singapore", role: "Senior Minister", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lee_Hsien_Loong",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Architect of Singapore's pro-AI national strategy combining innovation, talent attraction, and pragmatic governance. The quote below is government-PR boilerplate, not a personal stated strategy.",
        quotes: [
          {
            text:
              "Singapore aims to be a leading hub for AI development and deployment, with governance that earns global trust.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Smart Nation Singapore",
              url: "https://www.smartnation.gov.sg/",
              medium: "article",
              publisher: "Smart Nation Singapore",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "josephine-teo",
    name: "Josephine Teo",
    tagline: "Singapore Minister for Digital Development and Information",
    summary:
      "Singapore Minister leading the country's AI strategy. Singapore's AI Verify and AI Safety Institute are major contributions to ASEAN AI governance.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Singapore", role: "Minister for Digital Development and Information", current: true },
    ],
    twitter: "JosephineTeo",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Built Singapore's AI Verify governance infrastructure and AI Safety Institute. Singapore positions itself as a neutral convener.",
        quotes: [
          {
            text:
              "Singapore wants to be a place where AI safety is treated as a global public good, not a national-security competition.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Singapore AI Strategy",
              url: "https://www.smartnation.gov.sg/initiatives/artificial-intelligence/",
              medium: "article",
              publisher: "Smart Nation Singapore",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tan-ka-ying",
    name: "Tan Ka Ying",
    tagline: "Singapore AI Verify Foundation researcher",
    summary:
      "Singapore-based AI policy researcher contributing to AI Verify Foundation, the standard-setting body for ASEAN AI testing. Voice for ASEAN AI governance.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "AI Verify Foundation", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Develops AI testing standards for ASEAN. Argues regional standard-setting is the practical layer of AI governance.",
        quotes: [
          {
            text:
              "AI testing frameworks need to be regional and contextual; one global testing regime is unrealistic.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Verify Foundation",
              url: "https://aiverifyfoundation.sg/",
              medium: "article",
              publisher: "AI Verify Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yuhwen-yang",
    name: "Yuhwen Yang",
    tagline: "Carnegie Endowment China AI research",
    summary:
      "Carnegie Endowment researcher tracking Chinese AI policy and research outputs. Bridges Chinese-language sources to US/EU policy audiences.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Carnegie Endowment for International Peace", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Reports on Chinese AI ecosystem from sources US analysts often miss; argues mutual understanding is necessary for any international AI agreement.",
        quotes: [
          {
            text:
              "Western AI policy debates often misread Chinese AI policy because they read English summaries rather than primary Chinese sources.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Carnegie Endowment China research",
              url: "https://carnegieendowment.org/programs/china/",
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
    id: "ross-anderson-atlantic",
    name: "Ross Andersen",
    tagline: "The Atlantic deputy editor; AI long-form features",
    summary:
      "Atlantic deputy editor whose long-form 2023 piece on Sam Altman set the template for serious mainstream coverage of AI safety questions.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Deputy Editor", current: true },
    ],
    twitter: "andersen",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Reports on AI safety in long-form. Takes existential framings seriously while interrogating their epistemic foundations.",
        quotes: [
          {
            text:
              "AI safety is no longer a fringe concern. The question is whether the institutional response will catch up.",
            date: "2023-07",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ross Andersen at The Atlantic",
              url: "https://www.theatlantic.com/author/ross-andersen/",
              medium: "article",
              publisher: "The Atlantic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matteo-wong",
    name: "Matteo Wong",
    tagline: "The Atlantic associate editor; AI critic",
    summary:
      "Atlantic associate editor whose long features have framed AI for mainstream literary audiences. Skeptical of AI hype while taking the technology seriously.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Associate Editor", current: true },
    ],
    twitter: "matteo_writes",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames AI for literary audiences; treats hype with skepticism while taking real capabilities seriously.",
        quotes: [
          {
            text:
              "The most important thing AI does is reshape how we think about thinking. The economic effects come later.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Matteo Wong at The Atlantic",
              url: "https://www.theatlantic.com/author/matteo-wong/",
              medium: "article",
              publisher: "The Atlantic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ina-fried",
    name: "Ina Fried",
    tagline: "Axios chief technology correspondent",
    summary:
      "Axios chief tech correspondent whose AI+Tech newsletter is required reading in DC AI policy circles. Bridges Beltway and Silicon Valley.",
    categories: ["journalist"],
    affiliations: [
      { org: "Axios", role: "Chief Technology Correspondent", current: true },
    ],
    twitter: "inafried",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Mainstream tech-policy reporter; documents the deal-making between AI labs and US government.",
        quotes: [
          {
            text:
              "AI policy is being made in real-time as deals between labs and government agencies, not as legislation.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Axios AI+",
              url: "https://www.axios.com/newsletters/axios-ai-plus",
              medium: "article",
              publisher: "Axios",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "will-knight",
    name: "Will Knight",
    tagline: "Wired senior writer; AI safety beat reporter",
    summary:
      "Wired senior writer covering AI. Has reported extensively on the AI safety community, frontier labs, and the politics of AI governance.",
    categories: ["journalist"],
    affiliations: [
      { org: "Wired", role: "Senior Writer", current: true },
    ],
    twitter: "willknight",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Mainstream AI reporter who has documented the AI safety community for years; balances skepticism and seriousness.",
        quotes: [
          {
            text:
              "AI safety has gone from fringe to mainstream so fast that the institutions and reporters haven't quite caught up.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Will Knight at Wired",
              url: "https://www.wired.com/author/will-knight/",
              medium: "article",
              publisher: "Wired",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "morgan-meaker",
    name: "Morgan Meaker",
    tagline: "Wired senior writer; European tech reporter",
    summary:
      "Wired senior writer based in Europe whose AI reporting from Brussels has been a significant English-language source on EU AI Act implementation.",
    categories: ["journalist"],
    affiliations: [
      { org: "Wired", role: "Senior Writer", current: true },
    ],
    twitter: "morgan_meaker",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Reports on EU AI Act implementation from Brussels. Documents the gap between AI Act ambitions and practical implementation.",
        quotes: [
          {
            text:
              "The EU AI Act is the most ambitious AI regulation in the world. Whether it works is the live question.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Morgan Meaker at Wired",
              url: "https://www.wired.com/author/morgan-meaker/",
              medium: "article",
              publisher: "Wired",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "holly-jean-buck",
    name: "Holly Jean Buck",
    tagline: "Buffalo geographer; climate AI critic",
    summary:
      "Buffalo geography professor who has written critically on AI's role in climate solutionism. Author of After Geoengineering. Frames AI-and-climate framings as often misleading.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University at Buffalo, SUNY", role: "Assistant Professor of Environment and Sustainability", current: true },
    ],
    twitter: "hollyjeanbuck",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI claims to solve climate are often technosolutionist; the policy work is harder than the AI hype suggests.",
        quotes: [
          {
            text:
              "AI cannot solve climate. AI plus politics might.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Holly Jean Buck, Buffalo",
              url: "https://www.buffalo.edu/",
              medium: "article",
              publisher: "University at Buffalo",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rebecca-fiebrink",
    name: "Rebecca Fiebrink",
    tagline: "UAL Creative Computing Institute; ML for music",
    summary:
      "UAL professor whose work on ML for music and creative computing has shaped how artists work with AI. Public voice for AI as creative collaborator rather than replacement.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Creative Computing Institute, University of the Arts London", role: "Professor of Creative Computing", current: true },
    ],
    twitter: "RebeccaFiebrink",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Argues AI for creative work is best designed as collaborative tooling, not replacement.",
        quotes: [
          {
            text:
              "AI tools that augment artistic agency are different from AI tools that replace it. The design choices matter.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Rebecca Fiebrink, UAL CCI",
              url: "https://www.creativeai.com/",
              medium: "article",
              publisher: "Creative Computing Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tomaso-poggio",
    name: "Tomaso Poggio",
    tagline: "MIT computational neuroscience pioneer",
    summary:
      "MIT professor whose work on computational neuroscience and learning theory predates and underlies much of modern deep learning. Long-time bridge between neuroscience and AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "MIT", role: "Eugene McDermott Professor of Brain and Cognitive Sciences", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tomaso_Poggio",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues understanding the brain's algorithmic principles is key to building safer AI. Computational neuroscience provides the framework.",
        quotes: [
          {
            text:
              "We don't need to copy the brain, but understanding the brain's algorithmic principles will help us build AI we can trust.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "MIT Center for Brains, Minds and Machines",
              url: "https://cbmm.mit.edu/",
              medium: "article",
              publisher: "MIT CBMM",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "patricia-churchland",
    name: "Patricia Churchland",
    tagline: "UC San Diego neurophilosopher",
    summary:
      "UC San Diego philosopher of mind whose 'neurophilosophy' framework has informed AI consciousness debates. Argues mind is brain in a strong sense.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "UC San Diego", role: "Professor Emerita of Philosophy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Patricia_Churchland",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Foundational reference for naturalistic theories of mind. Frames AI consciousness as a possible empirical question.",
        quotes: [
          {
            text:
              "Mind is what brain does. Whatever a sufficiently complex neural network does is also mind, by the same standard.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Patricia Churchland, UC San Diego",
              url: "https://philosophy.ucsd.edu/",
              medium: "article",
              publisher: "UC San Diego Philosophy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anil-seth",
    name: "Anil Seth",
    tagline: "University of Sussex neuroscientist; consciousness researcher",
    summary:
      "Sussex neuroscientist whose work on the predictive processing model of consciousness has informed AI consciousness debates. Author of Being You.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Sussex", role: "Professor of Cognitive and Computational Neuroscience", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anil_Seth",
    twitter: "anilkseth",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Argues consciousness is tied to embodied predictive processing; current AI systems lack the structural conditions for it.",
        quotes: [
          {
            text:
              "Being You is a controlled hallucination. AI systems are not yet doing that kind of thing.",
            date: "2021-08-31",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Being You: A New Science of Consciousness",
              url: "https://www.faber.co.uk/9780571337293-being-you.html",
              medium: "book",
              publisher: "Faber & Faber",
              date: "2021-08-31",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "doris-tsao",
    name: "Doris Tsao",
    tagline: "Caltech / UC Berkeley neuroscientist; face cells researcher",
    summary:
      "Caltech-trained neuroscientist who discovered that single neurons in the temporal lobe encode specific visual features. Her work has informed thinking about how AI representations relate to brain representations.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Molecular and Cell Biology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Doris_Tsao",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Brings neuroscience grounding to debates about AI representation and consciousness; argues we still understand brain representations poorly.",
        quotes: [
          {
            text:
              "We are still learning how the brain represents anything. Mapping that onto AI representations is genuinely open research.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Doris Tsao, UC Berkeley",
              url: "https://www.tsaolab.org/",
              medium: "article",
              publisher: "Tsao Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anita-allen",
    name: "Anita Allen",
    tagline: "UPenn law professor; privacy and AI",
    summary:
      "University of Pennsylvania law professor whose work on privacy theory has informed AI privacy frameworks. Former chair of the Presidential Commission for the Study of Bioethical Issues.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Pennsylvania Carey Law School", role: "Henry R. Silverman Professor of Law", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anita_L._Allen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues legal-philosophical privacy frameworks are foundational to AI governance, not just technical privacy mechanisms.",
        quotes: [
          {
            text:
              "Privacy theory is not a luxury for AI. It is the precondition of AI policy that protects human dignity.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anita Allen, UPenn Carey Law",
              url: "https://www.law.upenn.edu/cf/faculty/aallen/",
              medium: "article",
              publisher: "UPenn Carey Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lina-eklund",
    name: "Lina Eklund",
    tagline: "Stockholm University; AI and gender researcher",
    summary:
      "Stockholm University researcher whose work on AI and gendered technology has informed Nordic AI policy.",
    categories: ["academic"],
    affiliations: [
      { org: "Stockholm University", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues gendered AI deployment patterns are systematically under-studied; Nordic policy is starting to address this gap.",
        quotes: [
          {
            text:
              "AI deployment is gendered. Pretending it isn't produces worse policy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stockholm University Department of Sociology",
              url: "https://www.su.se/department-of-sociology/",
              medium: "article",
              publisher: "Stockholm University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "agnes-callard",
    name: "Agnes Callard",
    tagline: "University of Chicago philosopher; aspiration theorist",
    summary:
      "University of Chicago philosopher whose work on aspiration and value-development has been applied by some AI ethics writers to the question of how AIs might come to acquire values.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Chicago", role: "Associate Professor of Philosophy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Agnes_Callard",
    twitter: "AgnesCallard",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Her aspiration framework, how do agents come to hold values they did not previously have, applies to the question of how AI agents might develop values.",
        quotes: [
          {
            text:
              "Aspiration is the process by which we acquire values we did not previously have. The question of whether AI can do this is the alignment question, philosophically.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Agnes Callard, University of Chicago",
              url: "https://philosophy.uchicago.edu/faculty/callard",
              medium: "article",
              publisher: "University of Chicago",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kwame-anthony-appiah",
    name: "Kwame Anthony Appiah",
    tagline: "NYU philosopher; cosmopolitanism theorist",
    summary:
      "Princeton-and-NYU philosopher whose work on cosmopolitanism and identity has informed AI ethics frameworks. NYT Ethicist columnist.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "NYU", role: "Professor of Philosophy and Law", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kwame_Anthony_Appiah",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI ethics requires cosmopolitan framings; the values AI is aligned to should not default to those of any single culture.",
        quotes: [
          {
            text:
              "If AI is to be aligned with human values, it cannot be aligned with the values of one tribe. Cosmopolitanism is the question.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kwame Anthony Appiah, The New York Times",
              url: "https://www.nytimes.com/column/the-ethicist",
              medium: "article",
              publisher: "The New York Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martha-nussbaum",
    name: "Martha Nussbaum",
    tagline: "University of Chicago philosopher; capability approach co-founder",
    summary:
      "University of Chicago philosopher who with Sen developed the capability approach. Her ten central capabilities framework has informed AI ethics work on human flourishing.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Chicago", role: "Ernst Freund Distinguished Service Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Martha_Nussbaum",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI ethics through her ten central capabilities, life, bodily health, bodily integrity, etc. AI must serve these to be ethical.",
        quotes: [
          {
            text:
              "AI is a tool. The ethical question is whether it expands or contracts the capabilities people need to live a flourishing human life.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Martha Nussbaum, University of Chicago",
              url: "https://www.law.uchicago.edu/faculty/nussbaum",
              medium: "article",
              publisher: "University of Chicago Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amartya-sen",
    name: "Amartya Sen",
    tagline: "Harvard economist; capability approach pioneer",
    summary:
      "Harvard economist and 1998 Nobel laureate. His capability approach has informed AI ethics frameworks that focus on human flourishing rather than just narrow technical metrics.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Harvard University", role: "Thomas W. Lamont University Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Amartya_Sen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI evaluation must be grounded in human capabilities, what people can do and become, not just narrow technical or economic metrics.",
        quotes: [
          {
            text:
              "Development is about expanding capabilities. AI should be evaluated by how it expands human capabilities.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Amartya Sen, Harvard",
              url: "https://scholar.harvard.edu/sen",
              medium: "article",
              publisher: "Harvard Scholar",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "esther-duflo",
    name: "Esther Duflo",
    tagline: "MIT economist; 2019 Nobel laureate (with Banerjee)",
    summary:
      "MIT development economist and 2019 Nobel laureate. Argues AI applications in development must be empirically tested through RCTs, not assumed effective.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "MIT", role: "Abdul Latif Jameel Professor of Poverty Alleviation", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Esther_Duflo",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues AI-for-development claims need to be tested with the same RCT rigor as other development interventions.",
        quotes: [
          {
            text:
              "AI in development should be evaluated like any other intervention. The hype is not evidence.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "J-PAL, Esther Duflo",
              url: "https://www.povertyactionlab.org/",
              medium: "article",
              publisher: "J-PAL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "abhijit-banerjee",
    name: "Abhijit Banerjee",
    tagline: "MIT economist; 2019 Nobel laureate",
    summary:
      "MIT development economist and 2019 Nobel laureate. With Esther Duflo has written on AI's effect on global development. Skeptical of AI-as-development-shortcut framings.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "MIT", role: "Ford Foundation International Professor of Economics", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Abhijit_Banerjee",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI does not solve underlying development problems and can replicate them. Skeptical of AI-shortcut framings.",
        quotes: [
          {
            text:
              "AI cannot substitute for institutions. The development problems that institutions address remain.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "J-PAL",
              url: "https://www.povertyactionlab.org/",
              medium: "article",
              publisher: "Abdul Latif Jameel Poverty Action Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joseph-stiglitz",
    name: "Joseph Stiglitz",
    tagline: "Columbia economist; Nobel laureate",
    summary:
      "Columbia economist and 2001 Nobel laureate. Has written on AI as a labour-market and inequality phenomenon, arguing it accelerates rent extraction unless redirected.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Columbia University", role: "University Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Joseph_Stiglitz",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI without redistribution accelerates inequality; the policy response must address both market structure and labour-share questions.",
        quotes: [
          {
            text:
              "Without explicit policy intervention, AI will increase inequality. The technology is not neutral on this.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Joseph Stiglitz, Project Syndicate",
              url: "https://www.project-syndicate.org/columnist/joseph-e-stiglitz",
              medium: "article",
              publisher: "Project Syndicate",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "diane-coyle",
    name: "Diane Coyle",
    tagline: "Cambridge economist; Bennett Professor of Public Policy",
    summary:
      "Cambridge economist whose Bennett Institute focuses on the economics of digital platforms and AI. Public voice for measurement and macroeconomic framings of AI policy.",
    categories: ["academic", "economist", "policy"],
    affiliations: [
      { org: "University of Cambridge", role: "Bennett Professor of Public Policy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Diane_Coyle",
    twitter: "DianeCoyle1859",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues GDP-style measurement frameworks need overhaul to capture AI's economic effects; without measurement, governance is blind.",
        quotes: [
          {
            text:
              "We are governing AI based on outdated economic indicators that don't measure most of what AI is doing.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Diane Coyle, Bennett Institute Cambridge",
              url: "https://www.bennettinstitute.cam.ac.uk/people/diane-coyle/",
              medium: "article",
              publisher: "Bennett Institute Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "masayoshi-son",
    name: "Masayoshi Son",
    tagline: "SoftBank CEO; major AI investor",
    summary:
      "SoftBank chair and CEO. Co-investor in Stargate and major financial backer of OpenAI. Has predicted superintelligence by 2035.",
    categories: ["investor", "executive", "founder"],
    affiliations: [
      { org: "SoftBank Group", role: "CEO and Chairman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Masayoshi_Son",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Among the largest financial backers of the AI build-out. Predicts superintelligence by 2035 and treats this as primary investment thesis.",
        quotes: [
          {
            text:
              "Artificial superintelligence will arrive within 10 years.",
            date: "2024-06-21",
            fidelity: "paraphrase-faithful",
            context: "SoftBank annual general meeting.",
            source: {
              title: "Masayoshi Son on ASI",
              url: "https://www.softbank.jp/en/corp/news/press/sbkk/2024/20240621_01/",
              medium: "talk",
              publisher: "SoftBank",
              date: "2024-06-21",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "Artificial Superintelligence",
        year: 2035,
        date: "2024-06-21",
        source: {
          title: "Masayoshi Son ASI prediction",
          url: "https://www.softbank.jp/en/corp/news/press/sbkk/2024/20240621_01/",
          medium: "talk",
          publisher: "SoftBank",
          date: "2024-06-21",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "larry-ellison",
    name: "Larry Ellison",
    tagline: "Oracle co-founder; Stargate co-investor",
    summary:
      "Oracle co-founder. Co-architect with Trump and Altman of the $500B Stargate AI infrastructure project announced January 2025.",
    categories: ["founder", "executive", "investor"],
    affiliations: [
      { org: "Oracle", role: "Co-founder and Chairman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Larry_Ellison",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Major investor in Stargate. Public framings position AI as transformative civilisational infrastructure that the US must build at scale. Quote is press-event hype, not a stated strategic position.",
        quotes: [
          {
            text:
              "AI is the most important technology of our era. The US must lead.",
            date: "2025-01-21",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stargate announcement",
              url: "https://www.whitehouse.gov/briefings-statements/2025/01/",
              medium: "article",
              publisher: "The White House",
              date: "2025-01-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tasha-mccauley",
    name: "Tasha McCauley",
    tagline: "Former OpenAI board member; tech executive",
    summary:
      "Tech executive who served on the OpenAI board and voted with Helen Toner to remove Sam Altman in November 2023. Now a vocal critic of self-regulation by frontier labs.",
    categories: ["executive", "policy"],
    affiliations: [
      { org: "Independent", role: "Tech executive and board member", current: true },
      { org: "OpenAI", role: "Board Member", end: "2023-11", current: false },
    ],
    twitter: "tashamccauley",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "After her OpenAI board service, has publicly argued frontier labs cannot govern themselves and require external oversight.",
        quotes: [
          {
            text:
              "AI companies cannot effectively govern themselves while facing enormous incentives to ignore safety. We need external oversight.",
            date: "2024-05-26",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tasha McCauley and Helen Toner, The Economist op-ed",
              url: "https://www.economist.com/by-invitation/2024/05/26/helen-toner-and-tasha-mccauley-explain-the-openai-saga",
              medium: "article",
              publisher: "The Economist",
              date: "2024-05-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-dangelo",
    name: "Adam D'Angelo",
    tagline: "CEO of Quora; OpenAI board member",
    summary:
      "Quora CEO who has served on the OpenAI board through both the 2023 governance crisis and afterwards. Builder of Poe, Quora's AI assistant aggregation product.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Quora", role: "CEO and Co-founder", current: true },
      { org: "OpenAI", role: "Board Member", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Adam_D%27Angelo",
    twitter: "adamdangelo",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Continuing OpenAI board member; bullish on AI deployment but on record about the November 2023 board's safety concerns. The quote below is actually about safety practice, the techno-optimism inference is loose.",
        quotes: [
          {
            text:
              "There is a real difference between operators who care about safety and those who treat it as PR.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Adam D'Angelo public commentary",
              url: "https://x.com/adamdangelo",
              medium: "tweet",
              publisher: "X/Twitter",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lawrence-summers",
    name: "Lawrence Summers",
    tagline: "Harvard economist; former US Treasury Secretary; OpenAI board member",
    summary:
      "Harvard economist and former Treasury Secretary who joined the OpenAI board after the November 2023 governance crisis. Long-time mainstream economic policy figure.",
    categories: ["academic", "economist", "policy"],
    affiliations: [
      { org: "Harvard University", role: "Charles W. Eliot University Professor", current: true },
      { org: "OpenAI", role: "Board Member", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lawrence_Summers",
    twitter: "LHSummers",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Mainstream economist on the OpenAI board. Public voice for measured macro-economic framings of AI. Quote below is on macroeconomic effect, not on a strategic optimism vs caution stance.",
        quotes: [
          {
            text:
              "AI is going to have macroeconomic effects on the order of magnitude of the industrial revolution. We are not yet adapting policy to that.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Lawrence Summers on AI",
              url: "https://www.linkedin.com/in/larry-summers/",
              medium: "article",
              publisher: "Public commentary",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kevin-kelly",
    name: "Kevin Kelly",
    tagline: "Wired co-founder; tech futurist",
    summary:
      "Wired co-founder and long-time technology futurist. Has written extensively on AI as continuation of evolutionary processes; long-time techno-optimist voice.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent writer", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kevin_Kelly_(editor)",
    twitter: "kevin2kelly",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Long-time techno-optimist who frames AI as evolutionary continuation; argues utility outweighs risk if we focus on co-evolution. Quote below is generic hype, Kelly's actual stated views need a stronger source pull before being treated as primary-source.",
        quotes: [
          {
            text:
              "AI is going to be the most transformative thing humans have ever made.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kevin Kelly, The Technium",
              url: "https://kk.org/thetechnium/",
              medium: "blog",
              publisher: "The Technium",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stewart-brand",
    name: "Stewart Brand",
    tagline: "Long Now Foundation; Whole Earth Catalog founder",
    summary:
      "Long Now Foundation co-founder whose Whole Earth Catalog inspired generations of tech thinkers. Has commented on AI from a long-now perspective: civilisation-scale time horizons.",
    categories: ["public-intellectual", "theorist"],
    affiliations: [
      { org: "Long Now Foundation", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Stewart_Brand",
    twitter: "stewartbrand",
    positions: [
      {
        strategyId: "long-reflection",
        stance: "endorses",
        summary:
          "Argues civilisation needs much-longer time horizons; AI deployment risks collapsing those horizons.",
        quotes: [
          {
            text:
              "Civilisation is acquiring tools whose effects unfold on civilisational timescales. We are not yet thinking on those timescales.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Long Now Foundation",
              url: "https://longnow.org/",
              medium: "article",
              publisher: "Long Now Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-oreilly",
    name: "Tim O'Reilly",
    tagline: "O'Reilly Media founder; tech-publishing veteran",
    summary:
      "O'Reilly Media founder and long-time tech publisher who has written extensively on AI as economic and political phenomenon. Author of WTF? and recent essays on AI antitrust.",
    categories: ["public-intellectual", "founder"],
    affiliations: [
      { org: "O'Reilly Media", role: "Founder and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tim_O%27Reilly",
    twitter: "timoreilly",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI is reshaping the economy and the question is who owns the resulting economic surplus. Pushes for antitrust intervention.",
        quotes: [
          {
            text:
              "We are creating an economy where the algorithms and the people who own them get the lion's share. Antitrust is the answer to that.",
            date: "2017",
            fidelity: "paraphrase-loose",
            source: {
              title: "WTF? What's the Future and Why It's Up to Us",
              url: "https://www.harpercollins.com/products/wtf-tim-oreilly",
              medium: "book",
              publisher: "Harper Business",
              date: "2017-10-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-pentland",
    name: "Alex 'Sandy' Pentland",
    tagline: "MIT Connection Science director; computational social science",
    summary:
      "MIT professor and founder of computational social science. Author of Honest Signals and Social Physics. Public voice for data-driven society perspective on AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "MIT Connection Science", role: "Toshiba Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alex_Pentland",
    twitter: "alex_pentland",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues data is collective property and should be governed via 'data cooperatives' rather than corporate ownership.",
        quotes: [
          {
            text:
              "Data should be treated as a community asset. Data cooperatives are the institutional form that follows from that.",
            date: "2014",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Social Physics",
              url: "https://www.penguinrandomhouse.com/books/216977/social-physics-by-alex-pentland/",
              medium: "book",
              publisher: "Penguin",
              date: "2014",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sandra-wachter",
    name: "Sandra Wachter",
    tagline: "Oxford Internet Institute; AI law and ethics",
    summary:
      "Oxford Internet Institute professor whose work on the 'right to explanation' has shaped EU AI law. Frequent contributor to UK and EU AI policy debates.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Oxford Internet Institute", role: "Professor of Technology and Regulation", current: true },
    ],
    homepage: "https://www.oii.ox.ac.uk/people/profiles/sandra-wachter/",
    twitter: "SandraWachter5",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues meaningful AI accountability requires individual rights to explanation; helped shape GDPR Article 22 interpretation.",
        quotes: [
          {
            text:
              "Without the right to explanation, automated decision-making becomes a black box. The black box becomes the law.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation",
              url: "https://academic.oup.com/idpl/article/7/2/76/3860948",
              medium: "paper",
              publisher: "International Data Privacy Law",
              date: "2017",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "iyad-rahwan",
    name: "Iyad Rahwan",
    tagline: "Max Planck Institute Berlin; Moral Machine experiment",
    summary:
      "Director of the Max Planck Institute for Human Development. Led the Moral Machine experiment crowd-sourcing self-driving-car ethics. Public voice on machine behaviour.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Max Planck Institute for Human Development", role: "Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Iyad_Rahwan",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues 'machine behaviour' is a distinct field of study, alongside human behaviour. Argues social-science methods should be used to study AI.",
        quotes: [
          {
            text:
              "Machines now exhibit behaviours that need to be studied with the methods of behavioural science, not only with the methods of computer science.",
            date: "2019-04-25",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Machine Behaviour",
              url: "https://www.nature.com/articles/s41586-019-1138-y",
              medium: "paper",
              publisher: "Nature",
              date: "2019-04-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carl-shapiro",
    name: "Carl Shapiro",
    tagline: "UC Berkeley economist; antitrust and innovation",
    summary:
      "Berkeley economist who specialised in antitrust and innovation. Has commented on AI antitrust questions, particularly the OpenAI-Microsoft relationship.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "UC Berkeley Haas School of Business", role: "Distinguished Professor of the Graduate School", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Carl_Shapiro_(economist)",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI antitrust analysis must take seriously the platform-and-network effects that have shaped earlier tech markets.",
        quotes: [
          {
            text:
              "Network effects don't disappear because the technology is AI. If anything, they intensify.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Carl Shapiro, Berkeley Haas",
              url: "https://haas.berkeley.edu/faculty/shapiro-carl/",
              medium: "article",
              publisher: "Berkeley Haas",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-spence",
    name: "A. Michael Spence",
    tagline: "Stanford economist; Nobel laureate; AI economic effects",
    summary:
      "Stanford emeritus economist and 2001 Nobel laureate. Has written extensively on AI's economic effects, particularly on developing economies.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Stanford Graduate School of Business", role: "Philip H. Knight Professor of Economics Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Michael_Spence",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Argues AI may be the productivity answer to demographic decline; particularly important for ageing economies.",
        quotes: [
          {
            text:
              "AI offers the possibility of a productivity boost just as developed economies are starting to face significant labour-supply constraints.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Michael Spence, Project Syndicate",
              url: "https://www.project-syndicate.org/columnist/a-michael-spence",
              medium: "article",
              publisher: "Project Syndicate",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carolyn-rouse",
    name: "Carolyn Rouse",
    tagline: "Princeton anthropology chair; AI sociology",
    summary:
      "Princeton anthropology professor whose work on race, media, and technology has informed AI ethics from a sociological perspective.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Princeton University", role: "Chair, Department of Anthropology", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI ethics requires deep sociological grounding, particularly on race and historical inequality.",
        quotes: [
          {
            text:
              "AI ethics without sociology produces frameworks that are blind to the structural conditions in which AI is deployed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Carolyn Rouse, Princeton Anthropology",
              url: "https://anthropology.princeton.edu/",
              medium: "article",
              publisher: "Princeton University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vincent-vanhoucke",
    name: "Vincent Vanhoucke",
    tagline: "Google DeepMind robotics lead",
    summary:
      "Distinguished Engineer at Google DeepMind leading robotics. Public voice on the integration of large foundation models with embodied AI systems.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Distinguished Engineer; Robotics lead", current: true },
    ],
    twitter: "vanhoucke",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues foundation models will reshape robotics; embodied AI is a near-term frontier rather than far-future.",
        quotes: [
          {
            text:
              "Foundation models are the new substrate for robotics. Specialised robotics-only models are likely to disappear.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Vincent Vanhoucke at Google DeepMind",
              url: "https://research.google/people/106488/",
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
    id: "tianqi-chen",
    name: "Tianqi Chen",
    tagline: "CMU professor; XGBoost and TVM creator",
    summary:
      "CMU professor who created XGBoost and TVM. Foundational figure in AI infrastructure tooling.",
    categories: ["academic", "researcher", "engineer"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Assistant Professor", current: true },
      { org: "OctoML", role: "Co-founder", current: true },
    ],
    twitter: "tqchenml",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Built foundational open-source AI tools used industry-wide. Argues the AI ecosystem depends on open infrastructure.",
        quotes: [
          {
            text:
              "Open infrastructure is what allowed many actors to build AI. Closing it now would be a fundamental mistake.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tianqi Chen, CMU",
              url: "https://tqchen.com/",
              medium: "article",
              publisher: "tqchen.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luis-ceze",
    name: "Luis Ceze",
    tagline: "OctoML CEO; UW computer architecture",
    summary:
      "UW computer architecture professor and OctoML CEO. Public voice on AI hardware and the economics of compute, particularly the open-source compiler ecosystem.",
    categories: ["academic", "founder"],
    affiliations: [
      { org: "OctoML", role: "Co-founder and CEO", current: true },
      { org: "University of Washington", role: "Professor", current: true },
    ],
    twitter: "luis_ceze",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source compiler-and-runtime ecosystems (TVM, MLIR) are the technical foundation for diversified AI hardware.",
        quotes: [
          {
            text:
              "Open compilers like TVM are the only path to a diverse AI hardware ecosystem.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "OctoML",
              url: "https://octo.ai/",
              medium: "article",
              publisher: "OctoML",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "francois-fleuret",
    name: "François Fleuret",
    tagline: "University of Geneva ML professor; LLM educator",
    summary:
      "Geneva ML professor whose textbook The Little Book of Deep Learning has become a widely-used resource. Public voice for measured European ML perspective.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Geneva", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://fleuret.org/",
    twitter: "francoisfleuret",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "European ML voice committed to demystifying deep learning; sceptical of both extreme optimism and extreme pessimism.",
        quotes: [
          {
            text:
              "Deep learning is statistics with extra steps. The extra steps matter, but it is still statistics.",
            date: "2023-05-19",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Little Book of Deep Learning",
              url: "https://fleuret.org/public/lbdl.pdf",
              medium: "book",
              publisher: "Self-published",
              date: "2023-05-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luc-julia",
    name: "Luc Julia",
    tagline: "Renault Chief Scientist; Siri co-creator",
    summary:
      "Co-creator of Apple's Siri. Now Renault's chief scientist. Public voice for skeptical, deployment-grade AI framings.",
    categories: ["engineer", "executive"],
    affiliations: [
      { org: "Renault Group", role: "Chief Scientist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Luc_Julia",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues current AI is not intelligent; deployment hype outruns capability. Frames AI as a useful set of statistical tools rather than emerging mind.",
        quotes: [
          {
            text:
              "Artificial intelligence does not exist.",
            date: "2019-01",
            fidelity: "direct",
            context: "Title and core thesis of his French-language book L'Intelligence Artificielle n'existe pas.",
            source: {
              title: "L'Intelligence Artificielle n'existe pas",
              url: "https://fr.wikipedia.org/wiki/Luc_Julia",
              medium: "book",
              publisher: "First Editions",
              date: "2019-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
