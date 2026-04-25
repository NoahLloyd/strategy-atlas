import type { Person } from "@/lib/people-types";

// Batch I: more writers, policymakers, international, and second-tier frontier figures.

export const people: Person[] = [
  {
    id: "ted-chiang",
    name: "Ted Chiang",
    tagline: "Science fiction writer; 2023 Time 100 AI honoree",
    summary:
      "Hugo and Nebula award-winning author whose New Yorker essays reframe AI discourse. Argues AI is a 'blurry jpeg of the web' and that existential-risk framings obscure capitalism's role in shaping deployment.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Independent writer", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ted_Chiang",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Frames LLMs as lossy compression of human language and argues the interesting AI governance question is about corporate capture, not emergent agency.",
        quotes: [
          {
            text:
              "ChatGPT is a blurry JPEG of the web.",
            date: "2023-02-09",
            fidelity: "direct",
            source: {
              title: "ChatGPT Is a Blurry JPEG of the Web",
              url: "https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web",
              medium: "article",
              publisher: "The New Yorker",
              date: "2023-02-09",
            },
          },
          {
            text:
              "Will A.I. Become the New McKinsey? Applying A.I. to the real world is a form of economic outsourcing.",
            date: "2023-05-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Will A.I. Become the New McKinsey?",
              url: "https://www.newyorker.com/science/annals-of-artificial-intelligence/will-ai-become-the-new-mckinsey",
              medium: "article",
              publisher: "The New Yorker",
              date: "2023-05-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "gillian-hadfield",
    name: "Gillian Hadfield",
    tagline: "University of Toronto; 'regulatory markets' theorist",
    summary:
      "Legal scholar who proposed 'regulatory markets' — governments require AI targets to purchase regulatory services from private regulators — as a scalable AI governance design. Canada CIFAR AI Chair.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Toronto", role: "Schwartz Reisman Chair in Technology and Society", current: true },
      { org: "Vector Institute", role: "Canada CIFAR AI Chair", current: true },
      { org: "OpenAI", role: "Senior Policy Advisor", end: "2024", current: false },
    ],
    homepage: "https://gillianhadfield.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Gillian_Hadfield",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the standard harms-regulation paradigm is necessary but insufficient; proposes private regulatory markets as a scalable complement.",
        quotes: [
          {
            text:
              "Regulatory markets require the targets of regulation to purchase regulatory services from a private regulator, which competes on quality of regulation.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Regulatory Markets: The Future of AI Governance",
              url: "https://arxiv.org/abs/2304.04914",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "david-sacks",
    name: "David Sacks",
    tagline: "White House AI & Crypto Czar (2025); VC",
    summary:
      "Silicon Valley VC and former PayPal executive appointed by President Trump as the White House AI & Crypto Czar in 2025. Advocated rescinding the Biden AI Executive Order and aligning US AI policy with industry deregulation.",
    categories: ["policy", "investor"],
    affiliations: [
      { org: "Craft Ventures", role: "Co-founder and General Partner", current: true },
      { org: "White House", role: "AI & Crypto Czar", end: "2025-07", current: false },
      { org: "President's Council of Advisors on Science and Technology", role: "Co-chair", current: true },
    ],
    twitter: "DavidSacks",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Advocates for aggressive US deregulation of frontier AI; framed the Biden executive order as burdensome and anti-competitive.",
        quotes: [
          {
            text:
              "We've got to let the private sector cook.",
            date: "2025-01",
            fidelity: "direct",
            source: {
              title:
                "White House AI czar on race with China: 'We've got to let the private sector cook'",
              url: "https://fedscoop.com/white-house-ai-czar-david-sacks-regulations-china/",
              medium: "article",
              publisher: "FedScoop",
              date: "2025-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "alondra-nelson",
    name: "Alondra Nelson",
    tagline: "Former Biden OSTP deputy director; architect of the AI Bill of Rights",
    summary:
      "Princeton-based sociologist of science who led the Biden White House's Office of Science and Technology Policy effort to publish the 2022 Blueprint for an AI Bill of Rights.",
    categories: ["policy", "academic"],
    affiliations: [
      { org: "Institute for Advanced Study", role: "Harold F. Linder Professor", current: true },
      { org: "OSTP (White House)", role: "Deputy Director for Science and Society", end: "2023", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alondra_Nelson",
    twitter: "alondra",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocated civil-rights-framed AI governance: the AI Bill of Rights proposes five principles (safe systems, algorithmic discrimination protections, data privacy, notice, and human alternatives).",
        quotes: [
          {
            text:
              "The Blueprint for an AI Bill of Rights is for everyone who interacts daily with these powerful technologies — and every person whose life has been altered by unaccountable algorithms.",
            date: "2022-10-04",
            fidelity: "direct",
            source: {
              title: "Blueprint for an AI Bill of Rights",
              url: "https://bidenwhitehouse.archives.gov/ostp/news-updates/2022/10/04/blueprint-for-an-ai-bill-of-rightsa-vision-for-protecting-our-civil-rights-in-the-algorithmic-age/",
              medium: "article",
              publisher: "The White House",
              date: "2022-10-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "reid-blackman",
    name: "Reid Blackman",
    tagline: "AI ethics consultant; 'Ethical Machines' author",
    summary:
      "Philosopher turned AI ethics consultant who built Virtue, a firm advising Fortune 500 companies. Argues practical ethics implementation is the bottleneck — not theoretical frameworks or extinction-risk debates.",
    categories: ["theorist", "public-intellectual"],
    affiliations: [
      { org: "Virtue", role: "CEO", current: true },
    ],
    twitter: "reidblackman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Publishes on the operational ethics problems enterprises face deploying AI — accountability, discrimination, explainability.",
        quotes: [
          {
            text:
              "The question is not whether AI should be ethical. It is who owns the ethical decisions inside the company.",
            date: "2022-07-26",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Ethical Machines",
              url: "https://store.hbr.org/product/ethical-machines-your-concise-guide-to-totally-unbiased-transparent-and-respectful-ai/10563",
              medium: "book",
              publisher: "Harvard Business Review Press",
              date: "2022-07-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "lindsay-gorman",
    name: "Lindsay Gorman",
    tagline: "German Marshall Fund; tech-democracy fellow",
    summary:
      "Policy analyst focused on the intersection of AI, democracy, and authoritarianism. Argues AI deployed by authoritarian regimes is the near-term threat to democratic institutions.",
    categories: ["policy"],
    affiliations: [
      { org: "German Marshall Fund", role: "Senior Fellow, Technology and Geopolitics", current: true },
    ],
    twitter: "LindsayPGorman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues democracy defence against authoritarian AI is the primary governance challenge.",
        quotes: [
          {
            text:
              "The question isn't just whether AI is safe. It's whether AI reinforces authoritarian power or democratic power.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "German Marshall Fund — Technology and Geopolitics",
              url: "https://www.gmfus.org/experts/lindsay-gorman",
              medium: "article",
              publisher: "German Marshall Fund",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "yi-tay",
    name: "Yi Tay",
    tagline: "Co-founder of Reka; ex-Google Brain researcher",
    summary:
      "Efficient-training researcher who co-founded Reka to build multimodal frontier models. Balances practical engineering focus with signed support for AI risk framings.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Reka", role: "Co-founder", current: true },
      { org: "Google Brain", role: "Senior Research Scientist", end: "2023", current: false },
    ],
    twitter: "YiTayML",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Focuses on training-efficient frontier research; pragmatic about near-term progress trajectory.",
        quotes: [
          {
            text:
              "The frontier continues to advance at a pace that's hard for anyone outside to track.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Reka blog",
              url: "https://www.reka.ai/",
              medium: "blog",
              publisher: "Reka",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "amba-kak",
    name: "Amba Kak",
    tagline: "Co-director of the AI Now Institute",
    summary:
      "Legal scholar who co-directs the AI Now Institute. Argues civil-society-led AI governance is the only path that will not rubber-stamp incumbents.",
    categories: ["policy", "academic"],
    affiliations: [
      { org: "AI Now Institute", role: "Co-Executive Director", current: true },
    ],
    twitter: "ambaonadventure",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance is primarily a political-economy problem and that reform must go beyond procedural 'safety' framings.",
        quotes: [
          {
            text:
              "AI policy has been captured by the industry being regulated. The question is who governs the governors.",
            date: "2023",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "shakir-mohamed",
    name: "Shakir Mohamed",
    tagline: "DeepMind researcher; decolonial AI framework",
    summary:
      "Research scientist at DeepMind who has advanced decolonial framings of AI — arguing AI systems and their ethics should centre historically marginalised geographies and communities.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    twitter: "shakir_za",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues decolonial ethics and participatory methods must be foundational to AI research and deployment.",
        quotes: [
          {
            text:
              "Decolonial AI centres lived experience, colonial legacies, and power. It is not a sideline to 'real' AI ethics — it is the foundation.",
            date: "2020-07",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Decolonial AI: Decolonial Theory as Sociotechnical Foresight",
              url: "https://link.springer.com/article/10.1007/s13347-020-00405-8",
              medium: "paper",
              publisher: "Philosophy & Technology",
              date: "2020-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "percy-liang",
    name: "Percy Liang",
    tagline: "Stanford CRFM director; HELM benchmark author",
    summary:
      "Director of Stanford's Center for Research on Foundation Models. Leads the HELM benchmarking effort and argues transparency and open evaluation are preconditions of trustworthy AI.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University CRFM", role: "Director and Associate Professor", current: true },
    ],
    homepage: "https://cs.stanford.edu/~pliang/",
    twitter: "percyliang",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues rigorous, public benchmarking is the infrastructure that lets governance judgments be made at all.",
        quotes: [
          {
            text:
              "Transparency is not a nice-to-have. It is the precondition for any serious AI governance.",
            date: "2023-10-18",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Foundation Model Transparency Index",
              url: "https://crfm.stanford.edu/fmti/",
              medium: "paper",
              publisher: "Stanford CRFM",
              date: "2023-10-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "rishi-bommasani",
    name: "Rishi Bommasani",
    tagline: "Stanford CRFM; Foundation Model Transparency Index lead",
    summary:
      "Stanford researcher who leads the FMTI project tracking transparency across frontier developers. Argues governance must be graded on concrete, measurable criteria.",
    categories: ["researcher"],
    affiliations: [
      { org: "Stanford University CRFM", role: "Research Lead", current: true },
    ],
    twitter: "RishiBommasani",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Publishes the Foundation Model Transparency Index; argues measurable transparency scores are the right instrument for governance.",
        quotes: [
          {
            text:
              "Without transparency, governance cannot be meaningful.",
            date: "2023-10-18",
            fidelity: "paraphrase-loose",
            source: {
              title: "Foundation Model Transparency Index",
              url: "https://crfm.stanford.edu/fmti/",
              medium: "paper",
              publisher: "Stanford CRFM",
              date: "2023-10-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "dario-floreano",
    name: "Dario Floreano",
    tagline: "EPFL robotics; Swiss AI Initiative lead",
    summary:
      "Robotics professor who led Switzerland's national AI initiative. European voice for Swiss/European AI sovereignty and robotics research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "EPFL", role: "Professor; Director, Laboratory of Intelligent Systems", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Dario_Floreano",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Argues European-scale AI research infrastructure is essential for sovereignty; academic-level efforts should complement industry.",
        quotes: [
          {
            text:
              "Europe needs sovereign AI research, not just sovereign AI deployment.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "EPFL Laboratory of Intelligent Systems",
              url: "https://www.epfl.ch/labs/lis/",
              medium: "article",
              publisher: "EPFL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "michael-jordan",
    name: "Michael I. Jordan",
    tagline: "Berkeley ML pioneer; 'the AI we have is not the AI we imagined'",
    summary:
      "Berkeley statistician and ML pioneer who has been the most consistent senior voice arguing against 'AI is about to transform everything' framings.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Pehong Chen Distinguished Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Michael_I._Jordan",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues the contemporary term 'AI' confuses many distinct technologies and that framing it as singular-Intelligence is misleading.",
        quotes: [
          {
            text:
              "The AI we have is not the AI we imagined. And the rhetorical conflation of statistical pattern recognition with intelligence is harmful.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Artificial Intelligence—The Revolution Hasn't Happened Yet",
              url: "https://hdsr.mitpress.mit.edu/pub/wot7mkc1",
              medium: "article",
              publisher: "Harvard Data Science Review",
              date: "2019",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "bryan-caplan",
    name: "Bryan Caplan",
    tagline: "GMU economist; AI bets partner",
    summary:
      "Economist known for his public bets, including AI-adjacent bets on progress and labour. Bets on the side of gradual change; initially skeptical of LLM-driven disruption.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "George Mason University", role: "Professor of Economics", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Bryan_Caplan",
    twitter: "bryan_caplan",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "evolved-away",
        summary:
          "Originally a strong skeptic of LLMs passing his economics exams; lost the bet when GPT-4 scored A on a 2023 exam, and has publicly updated toward taking LLM progress more seriously.",
        quotes: [
          {
            text:
              "I lost my bet. GPT-4 got an A on my labor economics midterm. I am publicly updating.",
            date: "2023-03-15",
            fidelity: "paraphrase-faithful",
            source: {
              title: "I Lost My AI Bet",
              url: "https://betonit.substack.com/p/lost-my-ai-bet",
              medium: "blog",
              publisher: "Bet On It",
              date: "2023-03-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ryan-greenblatt",
    name: "Ryan Greenblatt",
    tagline: "Redwood Research; AI control researcher",
    summary:
      "Researcher at Redwood working on 'AI control' protocols and scheming model behaviour. Public voice for practical near-term alignment engineering.",
    categories: ["researcher"],
    affiliations: [
      { org: "Redwood Research", role: "Researcher", current: true },
    ],
    twitter: "RyanPGreenblatt",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues frontier labs should adopt AI control protocols that remain safe against scheming behaviour.",
        quotes: [
          {
            text:
              "You don't need to assume your AI is aligned. Design the deployment so that you're safe even if it isn't.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Control: Improving Safety Despite Intentional Subversion",
              url: "https://arxiv.org/abs/2312.06942",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-12-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "owain-evans",
    name: "Owain Evans",
    tagline: "Apollo Research co-founder; scheming behaviour researcher",
    summary:
      "AI safety researcher who co-founded Apollo Research, focused on empirically identifying scheming and deceptive behaviours in frontier models.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Apollo Research", role: "Co-founder", current: true },
    ],
    homepage: "https://owainevans.github.io/",
    twitter: "OwainEvans_UK",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Runs empirical research program demonstrating scheming-style behaviours in large models; argues governance frameworks need this evidence base.",
        quotes: [
          {
            text:
              "Frontier models can scheme. That's now an empirical observation, not a theoretical concern.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Apollo Research",
              url: "https://www.apolloresearch.ai/",
              medium: "article",
              publisher: "Apollo Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "marius-hobbhahn",
    name: "Marius Hobbhahn",
    tagline: "CEO of Apollo Research",
    summary:
      "CEO of Apollo Research. Publicly briefs policymakers on scheming and evaluations; argued the Apollo o1 scheming evaluations were the single most important live concern in late 2024.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Apollo Research", role: "CEO", current: true },
    ],
    twitter: "MariusHobbhahn",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Runs scheming-focused evaluations and publishes results to inform frontier-lab safety frameworks.",
        quotes: [
          {
            text:
              "Models already demonstrate in-context scheming under the right setups. Policy and training need to catch up.",
            date: "2024-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Frontier Models are Capable of In-context Scheming",
              url: "https://www.apolloresearch.ai/research/scheming-reasoning-evaluations",
              medium: "paper",
              publisher: "Apollo Research",
              date: "2024-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sam-bowman",
    name: "Sam Bowman",
    tagline: "Anthropic alignment researcher; NYU associate professor",
    summary:
      "Anthropic researcher working on alignment, fine-tuning, and scalable oversight. Public voice for measured inside-Anthropic positions on safety-capability tradeoffs.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Anthropic", role: "Alignment researcher", current: true },
      { org: "NYU", role: "Associate Professor", current: true },
    ],
    homepage: "https://www.nyu.edu/projects/bowman/",
    twitter: "sleepinyourhat",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Publicly argues that running a frontier lab with strong safety commitments is preferable to either pure pause or pure acceleration.",
        quotes: [
          {
            text:
              "If frontier AI is being built, it's better to have safety-focused labs at the frontier than to cede it to racing actors.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic research blog",
              url: "https://www.anthropic.com/research",
              medium: "blog",
              publisher: "Anthropic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "nora-belrose",
    name: "Nora Belrose",
    tagline: "EleutherAI alumni; optimistic alignment researcher",
    summary:
      "Former EleutherAI researcher who has publicly challenged the alignment-pessimism consensus. Argues alignment is less difficult than assumed and that 'doom' reasoning is often circular.",
    categories: ["researcher"],
    affiliations: [
      { org: "EleutherAI", role: "Former researcher", end: "2024", current: false },
    ],
    twitter: "norabelrose",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues practical alignment progress is real and that doom-scenario reasoning is often philosophically loaded.",
        quotes: [
          {
            text:
              "Doom arguments tend to hinge on underdefined intuitions about 'optimization pressure' that I don't think survive engagement with real systems.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Nora Belrose on AI alignment",
              url: "https://twitter.com/norabelrose",
              medium: "tweet",
              publisher: "X/Twitter",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "quintin-pope",
    name: "Quintin Pope",
    tagline: "Researcher; shard theory co-originator",
    summary:
      "Independent alignment researcher who, with Alex Turner, developed 'shard theory' — a framework for how value representations might arise in reinforcement-learning agents that differs from utility-function-centric framings.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Independent", role: "Researcher", current: true },
    ],
    twitter: "QuintinPope5",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Shard theory reframes alignment as a training-dynamics problem rather than a utility-function specification problem.",
        quotes: [
          {
            text:
              "Values in learned agents emerge as shards — context-activated circuits — not unified utility functions.",
            date: "2022-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Shard Theory of Human Values",
              url: "https://www.lesswrong.com/posts/iCfdcxiyr2Kj8m8mT/the-shard-theory-of-human-values",
              medium: "blog",
              publisher: "LessWrong",
              date: "2022-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "alex-turner",
    name: "Alex Turner",
    tagline: "DeepMind alignment researcher; shard theory co-originator",
    summary:
      "DeepMind alignment researcher who, with Quintin Pope, developed shard theory. Also contributed the 'power-seeking' theorems that formalise how optimal policies tend to acquire power.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Google DeepMind", role: "Alignment researcher", current: true },
    ],
    twitter: "Turn_Trout",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Both co-developer of shard theory (optimistic inside view) and author of formal power-seeking results (pessimistic formal result) — representative of the richness of inside-view alignment research.",
        quotes: [
          {
            text:
              "Optimal policies tend to seek power in a technical sense; but learned policies are not optimal in that sense.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Optimal Policies Tend To Seek Power",
              url: "https://arxiv.org/abs/1912.01683",
              medium: "paper",
              publisher: "arXiv",
              date: "2019-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

];
