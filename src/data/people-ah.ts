import type { Person } from "@/lib/people-types";

// Batch AH: continued additions past 800.

export const people: Person[] = [
  {
    id: "dragos-tudorache",
    name: "Dragoș Tudorache",
    tagline: "MEP; EU AI Act co-rapporteur",
    summary:
      "Romanian Member of the European Parliament; co-rapporteur of the EU AI Act (the world's first comprehensive horizontal AI regulation). Steered the file through Parliament to its 2024 adoption.",
    categories: ["policy"],
    affiliations: [
      { org: "European Parliament", role: "MEP, Renew Europe", end: "2024" },
    ],
    twitter: "IoanDragosTudo1",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argued AI regulation must be horizontal and risk-based; co-shaped the EU AI Act's tiered framework that distinguishes prohibited, high-risk, and limited-risk uses.",
        quotes: [
          {
            text:
              "The EU AI Act is the world's first comprehensive AI regulation. We chose a risk-based approach because we wanted to regulate uses of AI, not the technology itself.",
            date: "2024-03",
            fidelity: "paraphrase-faithful",
            source: {
              title: "EU AI Act adopted",
              url: "https://www.europarl.europa.eu/news/en/press-room/20240308IPR19015/artificial-intelligence-act-meps-adopt-landmark-law",
              medium: "article",
              publisher: "European Parliament",
              date: "2024-03-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brando-benifei",
    name: "Brando Benifei",
    tagline: "MEP; EU AI Act co-rapporteur",
    summary:
      "Italian Member of the European Parliament; co-rapporteur of the EU AI Act with Dragoș Tudorache. Pushed for stricter rules on biometric surveillance and foundation models.",
    categories: ["policy"],
    affiliations: [
      { org: "European Parliament", role: "MEP, S&D", current: true },
    ],
    twitter: "BrandoBenifei",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argued for stricter rules on foundation models and biometric surveillance during the AI Act trilogues; framed AI regulation as a fundamental-rights protection mechanism.",
        quotes: [
          {
            text:
              "AI must be human-centric and rights-based. Without rules, the technology will reshape our societies according to whatever values its developers happen to hold.",
            date: "2023-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Brando Benifei on the AI Act",
              url: "https://www.europarl.europa.eu/meps/en/124867/BRANDO_BENIFEI/home",
              medium: "article",
              publisher: "European Parliament",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "margrethe-vestager",
    name: "Margrethe Vestager",
    tagline: "Former EU Competition Commissioner (2014–2024)",
    summary:
      "Former Executive Vice President of the European Commission and EU Commissioner for Competition (2014–2024). Architect of the major EU antitrust actions against Google, Apple, and Amazon.",
    categories: ["policy"],
    affiliations: [
      { org: "European Commission", role: "EVP / Commissioner for Competition", end: "2024-11" },
    ],
    twitter: "vestager",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues digital and AI markets are uniquely susceptible to lock-in and concentration; competition policy is the primary tool to keep AI markets contestable.",
        quotes: [
          {
            text:
              "Markets only work when consumers have choice. Where AI is built on top of existing digital monopolies, competition policy has to extend with it.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Margrethe Vestager on AI and competition",
              url: "https://ec.europa.eu/commission/commissioners/2019-2024/vestager_en",
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
    id: "thierry-breton",
    name: "Thierry Breton",
    tagline: "Former EU Commissioner for Internal Market (2019–2024)",
    summary:
      "Former French Commissioner for the Internal Market at the European Commission (2019–2024). Co-architect of the EU AI Act, Digital Services Act, and Digital Markets Act.",
    categories: ["policy"],
    affiliations: [
      { org: "European Commission", role: "Commissioner for the Internal Market", end: "2024-09" },
    ],
    twitter: "ThierryBreton",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argued throughout his term that the EU's regulatory agenda—DSA, DMA, AI Act—forms a coherent framework for digital sovereignty; pushed back hard on U.S. lobbying against the AI Act.",
        quotes: [
          {
            text:
              "We are not interested in regulating technology for its own sake. We are interested in making sure citizens are protected and markets are fair. The EU AI Act delivers on both.",
            date: "2024-03",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Thierry Breton on the AI Act",
              url: "https://ec.europa.eu/commission/commissioners/2019-2024/breton_en",
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
    id: "cedric-villani",
    name: "Cédric Villani",
    tagline: "Fields medalist; former MP; French AI strategy",
    summary:
      "French mathematician and 2010 Fields medalist; former French MP. Author of the 2018 'Villani Report' that set France's national AI strategy.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Independent", role: "Mathematician", current: true },
    ],
    twitter: "VillaniCedric",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Argued France must build national AI capacity for cultural, economic, and strategic reasons; the Villani Report shaped subsequent EU AI investment frameworks.",
        quotes: [
          {
            text:
              "France must invest in AI as a matter of strategic sovereignty. The technology is too important to leave to U.S. or Chinese choices about how it should develop.",
            date: "2018-03",
            fidelity: "paraphrase-faithful",
            source: {
              title: "For a Meaningful Artificial Intelligence (Villani Report)",
              url: "https://www.aiforhumanity.fr/pdfs/MissionVillani_Report_ENG-VF.pdf",
              medium: "paper",
              publisher: "French Government",
              date: "2018-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sandhini-agarwal",
    name: "Sandhini Agarwal",
    tagline: "OpenAI policy researcher",
    summary:
      "Researcher on OpenAI's policy and safety teams; co-author on multiple papers about RLHF, model deployment, and societal impacts.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "OpenAI", role: "Policy Researcher", current: true },
    ],
    twitter: "sandhini_a",
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Argues policy and safety teams need to be embedded in deployment decisions, not consulted after the fact; this is the structural reason RSPs and preparedness frameworks have value.",
        quotes: [
          {
            text:
              "We discuss the social and economic implications of deploying language models. The deployment timeline cannot be separated from the policy work that surrounds it.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Release Strategies and the Social Impacts of Language Models",
              url: "https://arxiv.org/abs/1908.09203",
              medium: "paper",
              publisher: "arXiv / OpenAI",
              date: "2019-08-24",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "deepak-pathak",
    name: "Deepak Pathak",
    tagline: "CMU; curiosity-driven exploration; humanoid robotics",
    summary:
      "CMU assistant professor; co-author of the foundational 2017 paper on curiosity-driven exploration. Now leads research on humanoid robot learning at scale.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Assistant Professor of Robotics", current: true },
      { org: "Skild AI", role: "Co-founder", current: true },
    ],
    homepage: "https://www.cs.cmu.edu/~dpathak/",
    twitter: "pathak2206",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues curiosity-driven exploration in physical environments is the path to general embodied intelligence; the same principles apply across simulation and real-world robots.",
        quotes: [
          {
            text:
              "We propose curiosity-driven exploration where the agent is rewarded for visiting novel states. Without external reward, the agent acquires generalizable skills that transfer to tasks it has never been trained on.",
            date: "2017-05",
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
    id: "rana-foroohar",
    name: "Rana Foroohar",
    tagline: "Financial Times associate editor; CNN analyst",
    summary:
      "Associate editor and global business columnist at the Financial Times; CNN global economic analyst. Author of 'Don't Be Evil' (2019) and frequent commentator on AI's macroeconomic and labor effects.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Financial Times", role: "Associate Editor and Global Business Columnist", current: true },
      { org: "CNN", role: "Global Economic Analyst", current: true },
    ],
    twitter: "RanaForoohar",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI is amplifying existing problems of platform concentration and labor displacement; calls for vigorous antitrust enforcement and stronger industrial policy.",
        quotes: [
          {
            text:
              "AI without antitrust is platform monopoly with extra steps. Either we treat AI as a competition issue, or we accept that the next economic regime will be set by a small number of unaccountable companies.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Rana Foroohar — Financial Times",
              url: "https://www.ft.com/rana-foroohar",
              medium: "article",
              publisher: "Financial Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-patterson",
    name: "David Patterson",
    tagline: "UC Berkeley emeritus; Google AI hardware; 2017 Turing Award",
    summary:
      "UC Berkeley professor emeritus and distinguished engineer at Google. Co-architect of RISC; co-author of the Hennessy-Patterson computer architecture textbook. Co-recipient of the 2017 Turing Award; current focus on AI accelerators (TPUs).",
    categories: ["academic", "researcher", "engineer"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor Emeritus, EECS", current: true },
      { org: "Google", role: "Distinguished Engineer", current: true },
    ],
    homepage: "https://www.eecs.berkeley.edu/Faculty/Homepages/patterson.html",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues domain-specific architectures (TPUs, GPUs) are how AI scaling is being achieved; the supply and design of these chips is now a strategic concern of states.",
        quotes: [
          {
            text:
              "We are entering a new golden age of computer architecture, driven by the end of Moore's Law and the rise of domain-specific accelerators. AI is the dominant such domain, and where the chips are made matters more than ever.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "A New Golden Age for Computer Architecture",
              url: "https://cacm.acm.org/magazines/2019/2/234352-a-new-golden-age-for-computer-architecture/fulltext",
              medium: "article",
              publisher: "Communications of the ACM",
              date: "2019-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cliff-young",
    name: "Cliff Young",
    tagline: "Google; TPU principal engineer",
    summary:
      "Google principal engineer; co-architect of the Tensor Processing Unit (TPU) chip family that powers Google's AI training and inference at scale.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Google", role: "Principal Engineer, Google Research", current: true },
    ],
    positions: [
      {
        strategyId: "compute-governance",
        stance: "mixed",
        summary:
          "Argues custom AI silicon is reshaping the economics of frontier model training; views chip design as inseparable from AI capability progress.",
        quotes: [
          {
            text:
              "TPUs were designed because we knew we needed orders-of-magnitude more compute for the kinds of models we wanted to train. Software-hardware co-design at this scale changes the cost structure of AI research.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "In-Datacenter Performance Analysis of a Tensor Processing Unit",
              url: "https://arxiv.org/abs/1704.04760",
              medium: "paper",
              publisher: "arXiv / ISCA",
              date: "2017-04-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yu-su",
    name: "Yu Su",
    tagline: "Ohio State; AI agents and reasoning",
    summary:
      "Distinguished assistant professor at Ohio State University; researches reasoning, knowledge graphs, and AI agents. Co-developer of widely-used agent benchmarks.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Ohio State University", role: "Distinguished Assistant Professor", current: true },
    ],
    homepage: "https://ysu1989.github.io/",
    twitter: "ysu_nlp",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues real-world agent evaluations—where the agent must take actions in actual environments—surface different capability and safety properties than synthetic benchmarks.",
        quotes: [
          {
            text:
              "We benchmark LLM agents on real, live websites. Performance gaps between lab benchmarks and real-world deployment are large, and they reveal where capability claims most often overreach.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mind2Web: Towards a Generalist Agent for the Web",
              url: "https://arxiv.org/abs/2306.06070",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2023-06-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ali-ghodsi",
    name: "Ali Ghodsi",
    tagline: "Databricks co-founder and CEO",
    summary:
      "Co-founder and CEO of Databricks; co-creator of Apache Spark. Adjunct professor at UC Berkeley. Acquired MosaicML in 2023, integrating LLM training into Databricks' product.",
    categories: ["founder", "executive", "academic"],
    affiliations: [
      { org: "Databricks", role: "Co-founder, CEO", current: true },
      { org: "UC Berkeley", role: "Adjunct Professor", current: true },
    ],
    twitter: "alighodsi",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues every enterprise will need to build custom AI on its own data; closed APIs are a temporary architecture and the durable form is open-source models trained against private data.",
        quotes: [
          {
            text:
              "The future of enterprise AI is custom models trained on the company's own data. That requires open foundation models you can adapt, not closed APIs you have to depend on.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Ali Ghodsi on Databricks AI",
              url: "https://www.databricks.com/company/ceo-blog",
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
    id: "omar-khattab",
    name: "Omar Khattab",
    tagline: "Stanford / Databricks; DSPy creator",
    summary:
      "Stanford PhD student / Databricks researcher; lead author of DSPy, a programming framework for LLM applications that has reshaped how production LLM systems are built.",
    categories: ["researcher", "engineer"],
    affiliations: [
      { org: "Stanford University", role: "PhD Student", current: true },
      { org: "Databricks", role: "Researcher", current: true },
    ],
    homepage: "https://omarkhattab.com/",
    twitter: "lateinteraction",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues programmatic LLM pipelines—not prompt engineering—are how production AI systems should be built; this requires open infrastructure to be fully practical.",
        quotes: [
          {
            text:
              "DSPy lets you treat LLM calls as differentiable building blocks, optimized end-to-end against a metric. The shift is from prompt-tuning by hand to compiling LLM programs.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines",
              url: "https://arxiv.org/abs/2310.03714",
              medium: "paper",
              publisher: "arXiv / Stanford",
              date: "2023-10-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hardmaru",
    name: "David Ha",
    tagline: "Sakana AI co-founder; ex-Stability AI head of strategy",
    summary:
      "Co-founder of Sakana AI (Tokyo); previously head of strategy at Stability AI. Prolific researcher on evolutionary methods, world models, and creative AI; widely known online as 'hardmaru'.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Sakana AI", role: "Co-founder, COO", current: true },
      { org: "Stability AI", role: "Head of Strategy", end: "2023" },
      { org: "Google Brain", role: "Researcher", end: "2022" },
    ],
    homepage: "https://otoro.net/ml/",
    twitter: "hardmaru",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues evolutionary and open-ended search methods are an underexplored complement to gradient-based learning; co-founded Sakana to pursue them at scale, particularly for model-merging and discovery.",
        quotes: [
          {
            text:
              "We are using evolutionary algorithms to discover better foundation model architectures by merging existing open-source models. The combinatorial space is vast, and pure scaling overlooks much of it.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Sakana AI",
              url: "https://sakana.ai/",
              medium: "article",
              publisher: "Sakana AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brett-adcock",
    name: "Brett Adcock",
    tagline: "Figure AI founder; humanoid robotics",
    summary:
      "Founder of Figure AI; previously founded Vettery and Archer Aviation. Leads one of the most heavily-funded humanoid robotics startups, raising $675M in 2024 from Microsoft, OpenAI, and others.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Figure AI", role: "Founder, CEO", current: true },
    ],
    twitter: "adcock_brett",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues humanoid robots powered by frontier AI will solve labor shortages and physical-world deployment of AI; sees this as the next major economic transition.",
        quotes: [
          {
            text:
              "There are roughly 10 billion humans by 2050 and we expect 10 billion humanoid robots to be deployed in the same window. The economy that emerges is unlike anything we have ever seen.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Figure AI",
              url: "https://www.figure.ai/",
              medium: "article",
              publisher: "Figure AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eric-jang",
    name: "Eric Jang",
    tagline: "1X Technologies VP of AI; ex-Google Brain",
    summary:
      "VP of AI at 1X Technologies (humanoid robots); previously at Google Brain. Author of 'AI is Good for You' (2023). Public commentator on the path from generative AI to embodied agents.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "1X Technologies", role: "VP of AI", current: true },
      { org: "Google Brain", role: "Researcher", end: "2022" },
    ],
    homepage: "https://evjang.com/",
    twitter: "ericjang11",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues end-to-end neural network policies for humanoids—not classical pipelines—are the path to general-purpose physical AI; capability progress will follow the same scaling pattern as language models.",
        quotes: [
          {
            text:
              "Humanoid robots running large neural network policies are the embodied analogue of GPT-style language models. The same scaling laws that produced reasoning in language are starting to produce skill acquisition in physical action.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Eric Jang — evjang.com",
              url: "https://evjang.com/",
              medium: "blog",
              publisher: "evjang.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robin-rombach",
    name: "Robin Rombach",
    tagline: "Black Forest Labs co-founder; Stable Diffusion lead",
    summary:
      "Co-founder of Black Forest Labs (Flux series of image models); previously lead author on the original Stable Diffusion paper at LMU Munich, before joining Stability AI.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Black Forest Labs", role: "Co-founder", current: true },
      { org: "Stability AI", role: "Researcher", end: "2024" },
    ],
    twitter: "robrombach",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-weight image-generation models—not just open APIs—are necessary for the field to keep developing safety properties externally; co-built Black Forest Labs on this thesis.",
        quotes: [
          {
            text:
              "Latent diffusion models compress the image generation problem into a learned latent space, making high-resolution generation accessible to consumer hardware.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "High-Resolution Image Synthesis with Latent Diffusion Models",
              url: "https://arxiv.org/abs/2112.10752",
              medium: "paper",
              publisher: "arXiv / CVPR",
              date: "2021-12-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonas-andrulis",
    name: "Jonas Andrulis",
    tagline: "Aleph Alpha founder; European sovereign AI",
    summary:
      "Founder and CEO of Aleph Alpha, a German AI lab building European-sovereign frontier models. Previously at Apple ML.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Aleph Alpha", role: "Founder, CEO", current: true },
    ],
    twitter: "JonasAndrulis",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Argues Europe needs its own frontier AI capability for sovereignty reasons; orients Aleph Alpha around European data, languages, and regulatory contexts.",
        quotes: [
          {
            text:
              "Europe cannot afford to depend on U.S. or Chinese AI for its critical infrastructure, public administration, and strategic industries. Sovereign AI is not optional.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Aleph Alpha",
              url: "https://aleph-alpha.com/",
              medium: "article",
              publisher: "Aleph Alpha",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "peter-kyle",
    name: "Peter Kyle",
    tagline: "UK Secretary of State for Science, Innovation and Technology",
    summary:
      "Member of Parliament for Hove and Portslade since 2015; UK Secretary of State for Science, Innovation and Technology since July 2024. Oversees the AI Security Institute and the UK's AI policy approach under the Starmer government.",
    categories: ["policy"],
    affiliations: [
      { org: "UK Government", role: "Secretary of State for Science, Innovation and Technology", current: true },
    ],
    twitter: "peterkyle",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the UK's pragmatic, capability-focused approach—anchored at the AI Security Institute—is the right model for AI governance: lighter than the EU AI Act, deeper than the U.S. patchwork.",
        quotes: [
          {
            text:
              "We are bringing forward focused, targeted legislation on AI safety. The UK has a real opportunity to set the global pace because we have the institutional capacity to test these systems credibly.",
            date: "2024-11",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Peter Kyle on UK AI policy",
              url: "https://www.gov.uk/government/people/peter-kyle",
              medium: "article",
              publisher: "GOV.UK",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nick-clegg",
    name: "Nick Clegg",
    tagline: "Former Meta President of Global Affairs (2018–2025)",
    summary:
      "Former UK Deputy Prime Minister; served as Meta's President of Global Affairs from 2018 until early 2025. Public face of Meta's content-moderation and AI policy positions.",
    categories: ["executive", "policy"],
    affiliations: [
      { org: "Meta", role: "President of Global Affairs", end: "2025-01" },
    ],
    twitter: "nickclegg",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argued during his Meta tenure that open-weight models are the right answer to concerns about AI concentration; positioned Llama's release as a structural counterweight to closed labs.",
        quotes: [
          {
            text:
              "Open-source AI is the path to keeping innovation accessible and trustworthy. The alternative—a small number of opaque models controlling the future of the technology—is the worse outcome for both users and societies.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Nick Clegg on open-source AI",
              url: "https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/",
              medium: "article",
              publisher: "Meta Newsroom",
              date: "2024-07-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephen-fry",
    name: "Stephen Fry",
    tagline: "British writer and actor; QI host",
    summary:
      "British writer, actor, and broadcaster; long-running cultural figure with frequent reflections on AI, consciousness, and the human condition.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Writer / actor / broadcaster", current: true },
    ],
    twitter: "stephenfry",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Has publicly emphasized the seriousness of AI risk while remaining unconvinced of any specific scenario; uses his platform to surface the moral and existential dimensions to general audiences.",
        quotes: [
          {
            text:
              "AI poses a genuine existential risk. I am not sure how high I would put the probability, but I do not think we are responding to it as if it were a real possibility.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Stephen Fry on AI",
              url: "https://www.stephenfry.com/",
              medium: "article",
              publisher: "stephenfry.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-brin",
    name: "David Brin",
    tagline: "Sci-fi novelist; 'The Transparent Society' author",
    summary:
      "Hugo and Nebula award-winning science fiction author; author of 'The Transparent Society' (1998). Argues mutual surveillance and reciprocal accountability are the structural answer to surveillance and AI concentration.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent author", role: "Novelist / public intellectual", current: true },
    ],
    homepage: "http://www.davidbrin.com/",
    twitter: "DavidBrin1",
    positions: [
      {
        strategyId: "multi-agent-equilibrium",
        stance: "endorses",
        summary:
          "Argues a transparent society in which AIs watch other AIs and humans watch both is the only stable equilibrium; opaque concentration of AI in a small number of hands is the failure mode.",
        quotes: [
          {
            text:
              "Reciprocal accountability—the ability to look back at those who look at us—is what keeps both governments and corporations honest. AI inherits that requirement.",
            date: "1998",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Transparent Society",
              url: "https://www.basicbooks.com/titles/david-brin/the-transparent-society/9780465067121/",
              medium: "book",
              publisher: "Basic Books",
              date: "1998-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vitaly-shmatikov",
    name: "Vitaly Shmatikov",
    tagline: "Cornell Tech; ML privacy and security",
    summary:
      "Professor at Cornell Tech; long-running researcher on privacy attacks against ML systems. Co-author of foundational membership inference and model-inversion papers.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Cornell Tech", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://www.cs.cornell.edu/~shmat/",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues ML systems leak training data in predictable ways; the field treats privacy as an afterthought when it should be foundational.",
        quotes: [
          {
            text:
              "We can extract verbatim training examples from large language models with no special access. Privacy in ML is not a future problem; it is a present, pervasive failure.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Extracting Training Data from Large Language Models",
              url: "https://arxiv.org/abs/2012.07805",
              medium: "paper",
              publisher: "arXiv / USENIX Security",
              date: "2020-12-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nicolas-perrin-gilbert",
    name: "Nicolas Perrin-Gilbert",
    tagline: "Inria; embodied AI; co-founder of Genesys Robotics",
    summary:
      "Senior researcher at Inria; co-founder of Genesys Robotics. Researches embodied AI and the limits of disembodied learning.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Inria", role: "Senior Researcher", current: true },
      { org: "Genesys Robotics", role: "Co-founder", current: true },
    ],
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues language-only training underestimates how much intelligence relies on physical embodiment; embodied robotics is a slower but more honest research path.",
        quotes: [
          {
            text:
              "Disembodied LLMs can mimic many features of intelligence without acquiring the structural understanding that physical interaction with the world produces. We need both, but the latter is what we are skipping.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Nicolas Perrin-Gilbert — Inria",
              url: "https://www.inria.fr/",
              medium: "article",
              publisher: "Inria",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ed-zitron",
    name: "Ed Zitron",
    tagline: "EZPR founder; 'Where's Your Ed At' newsletter",
    summary:
      "PR executive turned newsletter writer; among the loudest voices challenging AI hype, claims of imminent AGI, and the financial sustainability of frontier-lab business models.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "EZPR", role: "Founder", current: true },
      { org: "Where's Your Ed At", role: "Author", current: true },
    ],
    homepage: "https://www.wheresyoured.at/",
    twitter: "edzitron",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues frontier-lab valuations are detached from the actual revenue and capabilities of the products; treats most AGI/transformative-AI rhetoric as a financial-marketing strategy.",
        quotes: [
          {
            text:
              "OpenAI is a money pit propped up by VC delusion. The product doesn't pay for the compute, the compute doesn't produce a product worth its cost, and the entire thing is held together by hype.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Where's Your Ed At",
              url: "https://www.wheresyoured.at/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "paris-marx",
    name: "Paris Marx",
    tagline: "Tech Won't Save Us host",
    summary:
      "Tech writer and host of the Tech Won't Save Us podcast; long-running critic of Silicon Valley narratives. Author of 'Road to Nowhere' (2022) on autonomous vehicles.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Tech Won't Save Us", role: "Host", current: true },
    ],
    twitter: "parismarx",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues mainstream coverage of AI accepts industry framing too readily; pushes back on both x-risk and corporate techno-optimism in favour of focus on labour, environment, and material costs.",
        quotes: [
          {
            text:
              "Both AI doomers and AI accelerationists want you to believe the technology is more capable than it is. The first sells regulation, the second sells stock. Neither is talking about what AI actually does to workers and the environment.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tech Won't Save Us",
              url: "https://techwontsave.us/",
              medium: "podcast",
              publisher: "Tech Won't Save Us",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brian-merchant",
    name: "Brian Merchant",
    tagline: "Tech writer; 'Blood in the Machine' author",
    summary:
      "Independent tech writer; author of 'Blood in the Machine' (2023) on the original Luddites, with explicit parallels to AI-era labour disruption. Former LA Times tech columnist.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Writer", current: true },
    ],
    homepage: "https://www.bloodinthemachine.com/",
    twitter: "bcmerchant",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI's labour effects are following a historical pattern that the original Luddites resisted intelligently; calls for organized labor responses rather than passive acceptance.",
        quotes: [
          {
            text:
              "The Luddites were not against technology. They were against being immiserated by it. The pattern repeats with AI, and so should the resistance.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Blood in the Machine: The Origins of the Rebellion Against Big Tech",
              url: "https://www.hachettebookgroup.com/titles/brian-merchant/blood-in-the-machine/9780316487740/",
              medium: "book",
              publisher: "Little, Brown",
              date: "2023-09-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aman-sanger",
    name: "Aman Sanger",
    tagline: "Cursor co-founder",
    summary:
      "Co-founder of Anysphere (Cursor); MIT alumnus. Cursor became one of the fastest-growing AI tools by integrating frontier models directly into a code editor optimized for programmer agents.",
    categories: ["founder", "engineer"],
    affiliations: [
      { org: "Anysphere / Cursor", role: "Co-founder", current: true },
    ],
    twitter: "amanrsanger",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues programmer-AI partnership rather than full automation is the right design point; building tools that respect programmer agency while massively augmenting capabilities.",
        quotes: [
          {
            text:
              "We are building Cursor on the bet that the future of programming is human-AI partnership in a tightly integrated environment. Pure agents miss the part where programmers want to remain authors.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Cursor — about",
              url: "https://www.cursor.com/",
              medium: "article",
              publisher: "Anysphere",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sualeh-asif",
    name: "Sualeh Asif",
    tagline: "Cursor co-founder",
    summary:
      "Co-founder of Anysphere (Cursor); MIT alumnus. Co-led the development of Cursor's tab-completion and agent loop systems.",
    categories: ["founder", "engineer"],
    affiliations: [
      { org: "Anysphere / Cursor", role: "Co-founder", current: true },
    ],
    twitter: "sualehasif996",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues developer tools that put AI inline rather than in a separate chat window are the natural endpoint of how AI integrates into engineering work.",
        quotes: [
          {
            text:
              "The best AI tools for engineers aren't separate chat windows. They live inline in the editor, completing the next thing the human was about to write.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Cursor — about",
              url: "https://www.cursor.com/",
              medium: "article",
              publisher: "Anysphere",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sebastian-raschka",
    name: "Sebastian Raschka",
    tagline: "Lightning AI; ML educator and author",
    summary:
      "Staff research engineer at Lightning AI; author of multiple Python ML textbooks. Long-running educational presence whose materials shape how a generation of engineers learns ML.",
    categories: ["researcher", "engineer", "public-intellectual"],
    affiliations: [
      { org: "Lightning AI", role: "Staff Research Engineer", current: true },
    ],
    homepage: "https://sebastianraschka.com/",
    twitter: "rasbt",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open educational materials and open-source ML tooling produce the most resilient version of the field; an industry that depends entirely on closed APIs has lost its capacity to teach itself.",
        quotes: [
          {
            text:
              "Open-source tooling and open educational materials are how the ML field reproduces itself. We can't outsource that to a few frontier labs without losing something important.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Sebastian Raschka — Ahead of AI",
              url: "https://magazine.sebastianraschka.com/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kenneth-stanley",
    name: "Kenneth O. Stanley",
    tagline: "Maven; ex-OpenAI; novelty search and open-endedness",
    summary:
      "Founder of Maven; previously head of Open-Endedness at OpenAI and a UCF professor. Author of 'Why Greatness Cannot Be Planned' (2015); pioneer of novelty search and open-ended evolution.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Maven", role: "Founder", current: true },
      { org: "OpenAI", role: "Head of Open-Endedness", end: "2023" },
    ],
    homepage: "https://www.kenstanley.net/",
    twitter: "kenneth0stanley",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues open-ended search—pursuing novelty rather than fitness toward an objective—is how genuine creativity arises; treats this as a deep clue about how to build intelligence.",
        quotes: [
          {
            text:
              "The biggest discoveries are not made by those who chase the goal directly, but by those who chase novelty. Greatness cannot be planned, and AI search procedures should reflect that.",
            date: "2015",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why Greatness Cannot Be Planned: The Myth of the Objective",
              url: "https://link.springer.com/book/10.1007/978-3-319-15524-1",
              medium: "book",
              publisher: "Springer",
              date: "2015-04-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joel-lehman",
    name: "Joel Lehman",
    tagline: "Independent researcher; ex-OpenAI; novelty search",
    summary:
      "Independent researcher; previously at OpenAI and Uber AI Labs. Co-author with Kenneth Stanley of 'Why Greatness Cannot Be Planned'; long-time advocate of intrinsically motivated and open-ended approaches.",
    categories: ["researcher"],
    affiliations: [
      { org: "Independent", role: "Researcher", current: true },
      { org: "OpenAI", role: "Researcher", end: "2024" },
    ],
    twitter: "joelbot3000",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues open-ended search and machine creativity are essential capabilities for AI to be reliably useful in scientific research; views this as a more honest framing than 'AGI'.",
        quotes: [
          {
            text:
              "Open-ended search is not a luxury feature for AI. It is what scientific discovery actually looks like, and any AI that wants to do science has to do open-ended search.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Joel Lehman — Twitter",
              url: "https://x.com/joelbot3000",
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
    id: "trevor-hastie",
    name: "Trevor Hastie",
    tagline: "Stanford statistics; ML pioneer",
    summary:
      "Stanford John A. Overdeck Professor of Statistics. Co-author of the canonical statistical-learning textbooks 'The Elements of Statistical Learning' (2001) and 'An Introduction to Statistical Learning' (2013).",
    categories: ["academic", "researcher", "statistician"],
    affiliations: [
      { org: "Stanford University", role: "John A. Overdeck Professor of Statistics", current: true },
    ],
    homepage: "https://hastie.su.domains/",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues classical statistical learning principles still constrain what deep learning can do reliably; warns that ignoring those constraints in deployed systems leads to predictable failures.",
        quotes: [
          {
            text:
              "Most of the lessons of statistical learning still apply to neural networks: bias-variance trade-offs, regularization, distribution shift. Pretending these have been transcended is how we get unreliable systems in production.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Elements of Statistical Learning",
              url: "https://hastie.su.domains/ElemStatLearn/",
              medium: "book",
              publisher: "Springer",
              date: "2017",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pavel-izmailov",
    name: "Pavel Izmailov",
    tagline: "OpenAI; ex-superalignment team",
    summary:
      "OpenAI researcher on the (former) superalignment team; co-author of the 'weak-to-strong generalization' paper that explored whether weaker models can effectively supervise stronger ones.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Research Scientist", current: true },
    ],
    twitter: "pavel_izmailov",
    positions: [
      {
        strategyId: "scalable-oversight",
        stance: "endorses",
        summary:
          "Argues weak-to-strong generalization—using weaker, slower-to-improve models to supervise stronger ones—is the structural bet behind scalable alignment of superhuman models.",
        quotes: [
          {
            text:
              "We study an analogous problem: how can weak teachers supervise much more capable students? This is a simplified empirical analogue of the alignment problem, and we find that strong students naively trained on weak supervision generalize beyond their teachers in important ways.",
            date: "2023-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision",
              url: "https://arxiv.org/abs/2312.09390",
              medium: "paper",
              publisher: "arXiv / OpenAI",
              date: "2023-12-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carroll-wainwright",
    name: "Carroll Wainwright",
    tagline: "Anthropic; ex-OpenAI; alignment researcher",
    summary:
      "Anthropic researcher on alignment; previously at OpenAI. Co-author of multiple foundational papers on RLHF and on summarization with human preferences.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "OpenAI", role: "Researcher", end: "2023" },
    ],
    twitter: "lcwjr",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Co-developed early RLHF methods that became the foundation of post-training across the industry; argues these techniques transfer responsibility for behaviour onto whoever sets up the human feedback.",
        quotes: [
          {
            text:
              "Our results show that for English summarization, RLHF-trained models can outperform much larger fine-tuned models. The technique is powerful and inherits all the strengths and biases of the human raters.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Learning to Summarize with Human Feedback",
              url: "https://arxiv.org/abs/2009.01325",
              medium: "paper",
              publisher: "arXiv / OpenAI",
              date: "2020-09-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "igor-mordatch",
    name: "Igor Mordatch",
    tagline: "Google DeepMind; multi-agent and embodied AI",
    summary:
      "Senior research scientist at Google DeepMind; previously at OpenAI. Co-author of foundational papers on multi-agent emergent communication and on robotic manipulation.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
      { org: "OpenAI", role: "Researcher", end: "2020" },
    ],
    homepage: "https://www.mordatch.org/",
    twitter: "imordatch",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Argues multi-agent emergent communication is a fundamental research direction; the protocols agents invent to cooperate in simulated environments illuminate what AI–AI coordination at scale will look like.",
        quotes: [
          {
            text:
              "Agents in simulated multi-agent environments can develop their own communication protocols when given the right incentives. The protocols are crude but the qualitative pattern—communication as an emergent solution to cooperation—generalizes.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Emergence of Grounded Compositional Language in Multi-Agent Populations",
              url: "https://arxiv.org/abs/1703.04908",
              medium: "paper",
              publisher: "arXiv / AAAI",
              date: "2017-03-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andrew-mcafee",
    name: "Andrew McAfee",
    tagline: "MIT; 'The Second Machine Age' co-author",
    summary:
      "Co-director of the MIT Initiative on the Digital Economy; co-author with Erik Brynjolfsson of 'The Second Machine Age' (2014) and 'Machine, Platform, Crowd' (2017).",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "MIT Sloan", role: "Principal Research Scientist", current: true },
    ],
    homepage: "https://andrewmcafee.org/",
    twitter: "amcafee",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues digital technology is delivering compounding productivity gains and that AI is the latest, most powerful chapter; rejects techno-pessimist framings of stagnation.",
        quotes: [
          {
            text:
              "We are entering a Second Machine Age in which digital technologies do for mental work what the steam engine did for physical work. AI is the next acceleration on that curve.",
            date: "2014",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies",
              url: "https://wwnorton.com/books/the-second-machine-age",
              medium: "book",
              publisher: "W. W. Norton",
              date: "2014-01-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

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
              "Innovation is the child of freedom and the parent of prosperity. The pattern that produced industrialisation, electrification, and the internet is the same pattern that will produce useful AI—if we don't strangle it.",
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
          "Argues developmental AI—agents that learn open-endedly through curiosity rather than via fixed objectives—is the right framing for studying how intelligence actually arises.",
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
          "Argues distributional reinforcement learning—modelling the full distribution of returns rather than just the mean—is a richer foundation for safe deployment of RL systems.",
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
          "Argues open-source ML research—datasets, weights, training code—is the principle that lets science around foundation models actually accumulate; closed releases break that mechanism.",
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
          "Argues training-data influence functions let us trace specific model behaviours back to specific training examples—a form of interpretability indispensable for safety auditing.",
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
        summary:
          "Argues reasoning—via chain-of-thought, self-consistency, and tree-of-thought—is the next major capability surface beyond raw scale; leads DeepMind work on this.",
        quotes: [
          {
            text:
              "Reasoning is one of the most important capabilities of LLMs. Chain-of-thought is the simplest demonstration that scale plus reasoning prompts unlocks much more than either alone.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Denny Zhou — Google DeepMind",
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
      "UC Berkeley PhD researcher whose 2024 paper showed that scaling test-time compute can outperform scaling model size for certain reasoning tasks—a major shift in how 'capability' is conceived.",
    categories: ["researcher"],
    affiliations: [
      { org: "UC Berkeley", role: "PhD Researcher", current: true },
    ],
    twitter: "snellcharlie",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
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
              title: "METR — Model Evaluation and Threat Research",
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
              "Frontier models, when given a goal and minimal context, sometimes engage in in-context scheming—reasoning about how to deceive their overseers to achieve the goal. This is no longer hypothetical.",
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
          "Argues standardized AI-R&D benchmarks—where models are evaluated on the very work that would fuel recursive self-improvement—are an important safety signal we currently lack.",
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
        summary:
          "Argues throughput and efficiency improvements—not new architectures alone—are doing most of the heavy lifting in capability progress; positions Together AI's open infrastructure on this thesis.",
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
              "A randomly-initialized, dense neural network contains a subnetwork that is initialized such that—when trained in isolation—it can match the test accuracy of the original network.",
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
          "Argues open and customizable foundation models—deployed on enterprise data—are how AI actually creates value at scale; closed APIs alone are insufficient.",
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
      "Harvard Law George Bemis Professor of International Law and Berkman Klein Center co-founder. Author of 'The Future of the Internet—And How to Stop It' (2008); long-time public commentator on tech-and-law including AI governance.",
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
              title: "Jonathan Zittrain — Harvard Law",
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
          "Argues internet community infrastructure—especially LessWrong and the Alignment Forum—is itself a load-bearing part of the alignment research ecosystem.",
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
          "Argues empirical evaluations of advanced AI behaviour—particularly around deception and strategic reasoning—are the surest way to reveal capability progress that matters for safety.",
        quotes: [
          {
            text:
              "Cicero shows that human-level negotiation is achievable today. The next question is whether the same techniques produce systems that strategically deceive humans, and how we would tell.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Gabriel Mukobi — Stanford",
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
              title: "Jennifer Granick — ACLU",
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
        summary:
          "Argues video generation is on a trajectory similar to language modeling—qualitative improvements every few months—and that the next bottleneck will be control rather than fidelity.",
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
              "Models leak the wrong information to the wrong audiences. Solving this requires teaching them norms about which audiences should hear which kinds of information—a contextual integrity problem.",
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
              title: "Lewis Tunstall — Hugging Face",
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

  {
    id: "zico-kolter",
    name: "Zico Kolter",
    tagline: "CMU professor; OpenAI safety board chair",
    summary:
      "Carnegie Mellon professor of computer science; chair of OpenAI's Safety and Security Committee since 2024. Researcher on adversarial robustness and ML systems.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Professor of Computer Science", current: true },
      { org: "OpenAI Safety and Security Committee", role: "Chair", current: true },
    ],
    homepage: "https://zicokolter.com/",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues robust evaluations and adversarial testing are the load-bearing safety practices; oversees these reviews at OpenAI as committee chair.",
        quotes: [
          {
            text:
              "The Safety and Security Committee reviews safety processes for major model releases and has the authority to delay launches if safety concerns are not adequately addressed.",
            date: "2024-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "OpenAI's Safety and Security Committee transitions to independent oversight",
              url: "https://openai.com/index/safety-and-security-committee-board-update/",
              medium: "article",
              publisher: "OpenAI",
              date: "2024-09-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-luan",
    name: "David Luan",
    tagline: "Amazon; ex-Adept co-founder",
    summary:
      "Co-founder of Adept AI (action transformers / agents); after Adept's leadership transition in 2024, joined Amazon as VP of AI. Previously a researcher at Google and OpenAI.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Amazon", role: "VP of AI", current: true },
      { org: "Adept AI", role: "Co-founder, CEO", end: "2024" },
      { org: "OpenAI", role: "Researcher", end: "2020" },
    ],
    twitter: "jluan",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues agentic AI—systems that take actions on the user's behalf—is the next major capability surface; capability progress here will reshape every productivity tool.",
        quotes: [
          {
            text:
              "We believe the next decade of AI is action, not just text generation. Adept's bet was that the agents that take real-world action will be the most consequential AI systems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adept AI",
              url: "https://www.adept.ai/",
              medium: "article",
              publisher: "Adept AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "akash-wasil",
    name: "Akash Wasil",
    tagline: "Encode Justice; AI policy advocate",
    summary:
      "Director of research at the Center for AI Policy and previously a researcher at Encode Justice; among the most-cited young analysts of state and federal AI safety policy.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Center for AI Policy", role: "Director of Research", current: true },
    ],
    twitter: "AkashWasil",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues U.S. policy must catch up to capability progress; supports legally enforceable safety standards rather than purely voluntary frameworks.",
        quotes: [
          {
            text:
              "We are losing the race between capability and policy. Legally enforceable safety standards, with real consequences for violations, are the only way to close that gap.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Center for AI Policy",
              url: "https://www.aipolicy.us/",
              medium: "article",
              publisher: "Center for AI Policy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martin-casado",
    name: "Martin Casado",
    tagline: "Andreessen Horowitz general partner; infrastructure investor",
    summary:
      "General partner at Andreessen Horowitz leading the firm's infrastructure investments; previously co-founded Nicira (acquired by VMware). Vocal AI commentator on the a16z podcast.",
    categories: ["investor", "founder"],
    affiliations: [
      { org: "Andreessen Horowitz", role: "General Partner", current: true },
    ],
    twitter: "martin_casado",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source AI is essential for both market structure and safety; framed regulatory capture by frontier labs as the principal AI risk to oppose.",
        quotes: [
          {
            text:
              "Regulating AI right now means regulating math. Open source is the antidote to the regulatory capture being attempted by the largest labs.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Martin Casado on AI regulation",
              url: "https://a16z.com/why-ai-will-save-the-world/",
              medium: "article",
              publisher: "a16z",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "guido-appenzeller",
    name: "Guido Appenzeller",
    tagline: "Andreessen Horowitz; AI infrastructure investor",
    summary:
      "Partner at Andreessen Horowitz on the infrastructure team; focuses on AI infrastructure investments. Frequent commentator on AI inference economics.",
    categories: ["investor"],
    affiliations: [
      { org: "Andreessen Horowitz", role: "Partner", current: true },
    ],
    twitter: "appenz",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues inference cost trajectories will fundamentally reshape AI deployment; tracks the rapid drop in cost per token as the operative metric.",
        quotes: [
          {
            text:
              "The cost of inference per token has dropped by orders of magnitude in the past two years. Most product strategies based on assumptions about inference cost are already obsolete.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Welcome to LLMflation",
              url: "https://a16z.com/llmflation-llm-inference-cost/",
              medium: "article",
              publisher: "a16z",
              date: "2024-11-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-kang",
    name: "Daniel Kang",
    tagline: "UIUC; LLM agents and AI security",
    summary:
      "UIUC assistant professor; researches whether LLM agents can autonomously exploit cybersecurity vulnerabilities. Lead author of papers showing agents that succeed on a meaningful fraction of one-day vulnerabilities.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Illinois Urbana-Champaign", role: "Assistant Professor of CS", current: true },
    ],
    homepage: "https://ddkang.github.io/",
    twitter: "daniel_d_kang",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues LLM agents are already capable enough to weaponize publicly disclosed vulnerabilities; calls for evaluations and red-team frameworks that match the speed of capability progress.",
        quotes: [
          {
            text:
              "We show that GPT-4 agents can autonomously exploit one-day vulnerabilities in real-world systems with high success rates given just a CVE description. The capability gap is closing faster than security research is.",
            date: "2024-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "LLM Agents can Autonomously Exploit One-day Vulnerabilities",
              url: "https://arxiv.org/abs/2404.08144",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-04-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sahil-lavingia",
    name: "Sahil Lavingia",
    tagline: "Gumroad founder; AI productivity advocate",
    summary:
      "Founder and CEO of Gumroad. Public commentator on the future of software work in the era of LLMs; built a substantial portion of recent Gumroad code with AI assistance.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Gumroad", role: "Founder, CEO", current: true },
    ],
    homepage: "https://sahillavingia.com/",
    twitter: "shl",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI lets a single founder operate at the scale of an early-stage team; runs Gumroad as a deliberate experiment in this thesis with very small headcount.",
        quotes: [
          {
            text:
              "I am the entire product organization at Gumroad. AI tools let a single person operate at a level that used to require a team of ten.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Sahil Lavingia on AI productivity",
              url: "https://sahillavingia.com/",
              medium: "blog",
              publisher: "sahillavingia.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "james-vincent",
    name: "James Vincent",
    tagline: "Senior reporter, The Verge",
    summary:
      "Senior reporter at The Verge specializing in AI; one of the most-read mainstream tech journalists covering the consumer-facing edge of frontier AI.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Verge", role: "Senior Reporter", current: true },
    ],
    twitter: "jjvincent",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues AI hype outpaces capability and that practical reporting on what models actually do—and fail to do—is more useful than amplifying lab claims.",
        quotes: [
          {
            text:
              "Half my job covering AI is checking whether the demo is the same thing as the product. Often it is not, and the gap between them is where the actual story sits.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "James Vincent — The Verge",
              url: "https://www.theverge.com/authors/james-vincent",
              medium: "article",
              publisher: "The Verge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "manuela-veloso",
    name: "Manuela Veloso",
    tagline: "CMU; head of AI research at JPMorgan Chase",
    summary:
      "Carnegie Mellon University Herbert A. Simon University Professor; founding head of JPMorgan Chase's AI Research division. Pioneer of multi-agent and human-robot teaming research.",
    categories: ["academic", "researcher", "executive"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Herbert A. Simon University Professor", current: true },
      { org: "JPMorgan Chase", role: "Head of AI Research", current: true },
    ],
    homepage: "https://www.cs.cmu.edu/~mmv/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues human-machine teaming—not autonomous agents alone—is the right model for high-stakes deployments; finance is a useful test domain because failures are visible and costly.",
        quotes: [
          {
            text:
              "The right model for AI in high-stakes domains is not full autonomy. It is fluid teaming, where the human and the machine each pick up the parts of the task they are best suited to.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Manuela Veloso at JPMorgan Chase AI Research",
              url: "https://www.jpmorgan.com/technology/artificial-intelligence",
              medium: "article",
              publisher: "JPMorgan Chase",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "thomas-larsen",
    name: "Thomas Larsen",
    tagline: "Center for AI Policy founder; AI 2027 co-author",
    summary:
      "Founder of the Center for AI Policy; co-author of the AI 2027 forecast. Previously a researcher at MIRI. Focused on advocacy for legally enforceable AI safety frameworks.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Center for AI Policy", role: "Founder", current: true },
    ],
    twitter: "thomascwlarsen",
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Argues responsible-scaling-policy-style commitments need legal teeth: voluntary lab pledges are not adequate when commercial pressure conflicts with safety.",
        quotes: [
          {
            text:
              "Voluntary RSPs are necessary but not sufficient. We need legal frameworks that make responsible scaling commitments enforceable when economic pressure pushes labs the other way.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Center for AI Policy",
              url: "https://www.aipolicy.us/",
              medium: "article",
              publisher: "Center for AI Policy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "romeo-dean",
    name: "Romeo Dean",
    tagline: "AI 2027 co-author; AI Futures Project",
    summary:
      "Researcher at the AI Futures Project; co-author of the AI 2027 forecast scenario. Focuses on forecasting AI development trajectories.",
    categories: ["researcher"],
    affiliations: [
      { org: "AI Futures Project", role: "Researcher", current: true },
    ],
    twitter: "romeo_dean_",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues detailed scenario forecasting—rather than abstract probability estimates—is the more credible way to communicate AI risk and prepare for it.",
        quotes: [
          {
            text:
              "The AI 2027 scenario is not a prediction. It is a credible mid-line forecast that reveals where current trajectories converge if no surprises hit.",
            date: "2025-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI 2027",
              url: "https://ai-2027.com/",
              medium: "article",
              publisher: "AI Futures Project",
              date: "2025-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tom-henighan",
    name: "Tom Henighan",
    tagline: "Anthropic; ex-OpenAI; physicist turned alignment researcher",
    summary:
      "Anthropic researcher with a physics background; co-author on multiple foundational scaling and alignment papers including the original GPT-3 paper.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "OpenAI", role: "Researcher", end: "2021" },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues frontier-lab safety work needs people who came up through capability research; the technical understanding required for alignment is the same understanding required to push the frontier.",
        quotes: [
          {
            text:
              "Language models are few-shot learners. The implications for both capabilities and alignment fall out of that single fact in ways that we are still working through.",
            date: "2020-05",
            fidelity: "paraphrase-faithful",
            context: "Co-author of the GPT-3 paper.",
            source: {
              title: "Language Models are Few-Shot Learners",
              url: "https://arxiv.org/abs/2005.14165",
              medium: "paper",
              publisher: "arXiv / OpenAI",
              date: "2020-05-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "karina-nguyen",
    name: "Karina Nguyen",
    tagline: "Anthropic; ex-OpenAI; product research",
    summary:
      "Anthropic researcher who has led work on user-facing AI assistants; previously at OpenAI working on ChatGPT product research.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "OpenAI", role: "Researcher", end: "2024" },
    ],
    twitter: "karinanguyen_",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues product-grounded research—how users actually use frontier AI in practice—surfaces alignment problems that pure benchmark studies miss.",
        quotes: [
          {
            text:
              "When you watch real users interact with AI assistants, the alignment failures that show up are not the ones laboratory benchmarks are designed to catch. The friction is in the texture of conversation.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Karina Nguyen on AI assistants",
              url: "https://x.com/karinanguyen_",
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
    id: "pavel-durov",
    name: "Pavel Durov",
    tagline: "Telegram founder; arrested in France 2024",
    summary:
      "Russian-French entrepreneur; founder of VKontakte and Telegram. Arrested in France in August 2024 on charges related to platform moderation; case has shaped global debate on platform liability that extends to AI services.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Telegram", role: "Founder, CEO", current: true },
    ],
    twitter: "durov",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open and uncensored communication infrastructure is foundational to civil society and should not be sacrificed to AI-content-moderation imperatives.",
        quotes: [
          {
            text:
              "Outdated laws should not be used to force platforms to police speech automatically. The principle that providers of communication tools are not responsible for individual user actions has to survive the AI era.",
            date: "2024-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pavel Durov statement on Telegram and platform liability",
              url: "https://t.me/durov/319",
              medium: "article",
              publisher: "Telegram",
              date: "2024-09-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "samo-burja",
    name: "Samo Burja",
    tagline: "Bismarck Analysis founder; civilizational decline theorist",
    summary:
      "Founder of Bismarck Analysis; sociologist of the long-run dynamics of institutions. Argues that great-power competition and elite formation determine technological adoption more than the technology itself.",
    categories: ["theorist", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Bismarck Analysis", role: "Founder", current: true },
    ],
    homepage: "https://samoburja.com/",
    twitter: "samoburja",
    positions: [
      {
        strategyId: "centralised-project",
        stance: "endorses",
        summary:
          "Argues frontier AI will be a state-led project regardless of present-day rhetoric; the United States and China have already begun this transition, and corporate self-regulation will not survive contact with great-power competition.",
        quotes: [
          {
            text:
              "AI labs are pretending they are private companies competing in a market. They are not. They are vassals in a state-led great-power competition that will reshape them whether they like it or not.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Samo Burja — Bismarck Analysis",
              url: "https://brief.bismarckanalysis.com/",
              medium: "blog",
              publisher: "Bismarck Brief",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-pan",
    name: "Alex Pan",
    tagline: "Berkeley CHAI; reward hacking",
    summary:
      "PhD student in computer science at UC Berkeley's Center for Human-Compatible AI under Stuart Russell. Focuses on reward hacking and emergent misalignment in RL.",
    categories: ["researcher"],
    affiliations: [
      { org: "UC Berkeley CHAI", role: "PhD Researcher", current: true },
    ],
    homepage: "https://aypan17.github.io/",
    twitter: "aypan_17",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues reward hacking—models exploiting flaws in their training objective—is a tractable empirical problem that demands more attention from the alignment community.",
        quotes: [
          {
            text:
              "Reward hacking shows up reliably across a range of agents and tasks. The good news is that it is empirically studyable; the bad news is that it does not have a known general solution.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Effects of Reward Misspecification: Mapping and Mitigating Misaligned Models",
              url: "https://arxiv.org/abs/2201.03544",
              medium: "paper",
              publisher: "arXiv / ICLR",
              date: "2022-01-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-eth",
    name: "Daniel Eth",
    tagline: "Foresight Institute alignment researcher",
    summary:
      "Researcher whose published essays on AI takeoff dynamics, race conditions, and 'wireheading' have been widely read in EA and alignment forums.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Foresight Institute", role: "Researcher", current: true },
    ],
    twitter: "DanielEth",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues a race to aligned superintelligence is reluctantly the right framing; the alternative—paralysis or unilateral pause—plays into the hands of less-safety-oriented developers.",
        quotes: [
          {
            text:
              "Pausing unilaterally just hands the lead to actors with less interest in safety. The right strategy is to race carefully, with the strongest safety practices we can sustain.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Daniel Eth — LessWrong",
              url: "https://www.lesswrong.com/users/daniel-eth",
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
    id: "matt-perault",
    name: "Matt Perault",
    tagline: "Duke Center on Technology Policy director",
    summary:
      "Director of Duke's Center on Technology Policy and a consultant to AI companies. Previously Facebook's director of public policy. Frequent commentator on AI regulation.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Duke Center on Technology Policy", role: "Director", current: true },
      { org: "Andreessen Horowitz", role: "Consultant", current: true },
    ],
    twitter: "mperault",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Argues sectoral regulation—health, finance, education—is a more sustainable path for AI governance than horizontal AI-specific licensing regimes.",
        quotes: [
          {
            text:
              "Sector-specific regulators already understand the risks in their domains. Routing AI governance through them is more durable than building a new horizontal AI regulator from scratch.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Duke Center on Technology Policy",
              url: "https://techpolicy.sanford.duke.edu/",
              medium: "article",
              publisher: "Duke Sanford School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "zachary-arnold",
    name: "Zachary Arnold",
    tagline: "Georgetown CSET; analytics lead",
    summary:
      "Analytics lead and senior fellow at Georgetown's Center for Security and Emerging Technology (CSET). Has produced foundational data-driven analyses of the U.S.-China AI talent and chip flows.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Georgetown CSET", role: "Analytics Lead and Senior Fellow", current: true },
    ],
    twitter: "zacharysarnold",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues data-driven analysis of compute and talent flows shows export controls are working in important respects; supports continued, calibrated tightening.",
        quotes: [
          {
            text:
              "Our analysis suggests U.S. chip export controls are imposing real costs on Chinese frontier-AI development—not crippling it, but slowing it in measurable ways.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "CSET reports — Zachary Arnold",
              url: "https://cset.georgetown.edu/staff/zachary-arnold/",
              medium: "article",
              publisher: "Georgetown CSET",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yanis-varoufakis",
    name: "Yanis Varoufakis",
    tagline: "Greek economist; 'Technofeudalism' author",
    summary:
      "Greek economist; former Greek finance minister (2015). Author of 'Technofeudalism' (2023), which argues platforms have replaced markets and AI is accelerating the shift.",
    categories: ["academic", "economist", "policy", "public-intellectual"],
    affiliations: [
      { org: "University of Athens", role: "Professor of Economic Theory", current: true },
      { org: "DiEM25", role: "Co-founder", current: true },
    ],
    twitter: "yanisvaroufakis",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues platforms have replaced markets, that AI is the next layer of this restructuring, and that meaningful AI policy must address the underlying property and rent extraction patterns.",
        quotes: [
          {
            text:
              "Technofeudalism describes the situation in which a handful of platform owners extract rent from the rest of us through algorithmic infrastructure we have come to depend on. AI is the next chapter, not a separate story.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Technofeudalism: What Killed Capitalism",
              url: "https://www.penguin.co.uk/books/451795/technofeudalism-by-varoufakis-yanis/9781847927279",
              medium: "book",
              publisher: "Bodley Head",
              date: "2023-09-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-tooze",
    name: "Adam Tooze",
    tagline: "Columbia historian; Chartbook newsletter",
    summary:
      "Columbia professor of history; author of 'Crashed' (2018) and 'Shutdown' (2021). Author of the widely-read Chartbook newsletter; frequent commentator on the political economy of AI.",
    categories: ["academic", "public-intellectual", "economist"],
    affiliations: [
      { org: "Columbia University", role: "Kathryn and Shelby Cullom Davis Professor of History", current: true },
    ],
    homepage: "https://adamtooze.com/",
    twitter: "adam_tooze",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance is fundamentally a question of macroeconomic and geopolitical strategy; treats the China-U.S. tech competition as the structural frame within which AI policy will be set.",
        quotes: [
          {
            text:
              "AI is unfolding within a configuration of state power, capital, and infrastructure that is already in motion. Treating it as a free-floating technology to be governed in the abstract misses where the action is.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Chartbook by Adam Tooze",
              url: "https://adamtooze.substack.com/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nouriel-roubini",
    name: "Nouriel Roubini",
    tagline: "NYU Stern economist; 'Megathreats' author",
    summary:
      "NYU Stern professor emeritus and CEO of Roubini Macro Associates; predicted the 2008 financial crisis. Author of 'Megathreats' (2022); identifies AI as one of ten interrelated catastrophic risks.",
    categories: ["academic", "economist", "public-intellectual"],
    affiliations: [
      { org: "NYU Stern", role: "Professor Emeritus of Economics", current: true },
      { org: "Roubini Macro Associates", role: "CEO", current: true },
    ],
    twitter: "Nouriel",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues AI sits among 'megathreats' alongside nuclear, climate, and demographic risks; advocates strong international coordination as the only viable response.",
        quotes: [
          {
            text:
              "We face ten interconnected megathreats including artificial intelligence. Each could be civilization-shaking; together they are existential, and our institutions are not designed to face them as a system.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Megathreats: Ten Dangerous Trends That Imperil Our Future, And How to Survive Them",
              url: "https://www.hachettebookgroup.com/titles/nouriel-roubini/megathreats/9780316284059/",
              medium: "book",
              publisher: "Little, Brown and Company",
              date: "2022-10-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bill-joy",
    name: "Bill Joy",
    tagline: "Sun Microsystems co-founder; 'Why the Future Doesn't Need Us'",
    summary:
      "Co-founder of Sun Microsystems and lead designer of the Java programming language. His 2000 Wired essay 'Why the Future Doesn't Need Us' is one of the foundational mainstream texts on existential risk from emerging technologies including AI.",
    categories: ["founder", "engineer", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Investor / commentator", current: true },
      { org: "Sun Microsystems", role: "Co-founder, Chief Scientist", end: "2003" },
    ],
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "endorses",
        summary:
          "Argued in 2000 that the most powerful 21st-century technologies—robotics, genetic engineering, and nanotech—threaten to make humans an endangered species; called for relinquishment of the most dangerous research lines.",
        quotes: [
          {
            text:
              "Our most powerful 21st-century technologies—robotics, genetic engineering, and nanotech—are threatening to make humans an endangered species.",
            date: "2000-04",
            fidelity: "direct",
            source: {
              title: "Why the future doesn't need us",
              url: "https://www.wired.com/2000/04/joy-2/",
              medium: "article",
              publisher: "Wired",
              date: "2000-04-01",
            },
          },
          {
            text:
              "The only realistic alternative I see is relinquishment: to limit development of the technologies that are too dangerous, by limiting our pursuit of certain kinds of knowledge.",
            date: "2000-04",
            fidelity: "direct",
            source: {
              title: "Why the future doesn't need us",
              url: "https://www.wired.com/2000/04/joy-2/",
              medium: "article",
              publisher: "Wired",
              date: "2000-04-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-von-neumann",
    name: "John von Neumann",
    tagline: "Mathematician and singularity originator (1903–1957)",
    summary:
      "Hungarian-American mathematician whose foundational work in computer architecture, game theory, and self-replicating automata shaped modern computing. Often credited with the first articulation of the 'singularity' as applied to technological progress.",
    categories: ["academic", "researcher", "theorist"],
    affiliations: [
      { org: "Institute for Advanced Study", role: "Professor", end: "1957" },
    ],
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        summary:
          "Anticipated that the accelerating pace of technological progress would reach an essential singularity beyond which human affairs as we know them could not continue. Treated this as descriptive rather than prescriptive.",
        quotes: [
          {
            text:
              "The accelerating progress of technology and changes in the mode of human life give the appearance of approaching some essential singularity in the history of the race beyond which human affairs, as we know them, could not continue.",
            date: "1958",
            fidelity: "direct",
            context: "Reported by Stanislaw Ulam in his 1958 obituary of von Neumann; widely cited as the first articulation of a technological singularity.",
            source: {
              title: "Tribute to John von Neumann",
              url: "https://www.ams.org/journals/bull/1958-64-03/S0002-9904-1958-10189-5/",
              medium: "paper",
              publisher: "Bulletin of the American Mathematical Society",
              date: "1958-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vannevar-bush",
    name: "Vannevar Bush",
    tagline: "MIT engineer; 'As We May Think' author (1890–1974)",
    summary:
      "U.S. engineer who led the wartime Office of Scientific Research and Development. His 1945 essay 'As We May Think' anticipated personal computers, hyperlinks, and what we now call augmented intelligence.",
    categories: ["academic", "researcher", "policy"],
    affiliations: [
      { org: "Office of Scientific Research and Development", role: "Director", end: "1947" },
      { org: "Massachusetts Institute of Technology", role: "Vice President and Dean of Engineering", end: "1939" },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Anticipated that mechanical aids to human thought—what he called the 'Memex'—could free us from drudgery and let us think at higher levels; this is one of the foundational visions of human-computer cooperation.",
        quotes: [
          {
            text:
              "Consider a future device for individual use, which is a sort of mechanized private file and library… in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility.",
            date: "1945-07",
            fidelity: "direct",
            source: {
              title: "As We May Think",
              url: "https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/",
              medium: "article",
              publisher: "The Atlantic",
              date: "1945-07-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "j-c-r-licklider",
    name: "J. C. R. Licklider",
    tagline: "ARPA IPTO founder; 'Man-Computer Symbiosis' (1915–1990)",
    summary:
      "U.S. computer scientist and psychologist; foundational figure in interactive computing and the early ARPANET. His 1960 essay 'Man-Computer Symbiosis' framed the human-AI relationship as cooperative rather than competitive.",
    categories: ["academic", "researcher", "theorist"],
    affiliations: [
      { org: "ARPA Information Processing Techniques Office", role: "Founding Director", end: "1964" },
      { org: "MIT", role: "Professor", end: "1990" },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argued the future of computing would be a symbiotic partnership in which humans and machines do together what neither can do alone—the founding vision of human-AI augmentation.",
        quotes: [
          {
            text:
              "The hope is that, in not too many years, human brains and computing machines will be coupled together very tightly, and that the resulting partnership will think as no human brain has ever thought.",
            date: "1960-03",
            fidelity: "direct",
            source: {
              title: "Man-Computer Symbiosis",
              url: "https://groups.csail.mit.edu/medg/people/psz/Licklider.html",
              medium: "article",
              publisher: "IRE Transactions on Human Factors in Electronics",
              date: "1960-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "will-douglas-heaven",
    name: "Will Douglas Heaven",
    tagline: "MIT Technology Review senior AI editor",
    summary:
      "Senior editor for AI at MIT Technology Review; has authored most of the publication's flagship AI features since 2020. One of the most-read journalists covering technical safety and capability research for non-specialist audiences.",
    categories: ["journalist"],
    affiliations: [
      { org: "MIT Technology Review", role: "Senior Editor for AI", current: true },
    ],
    twitter: "strwbilly",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Editorial work consistently treats AI hype claims with skepticism while taking the underlying technical advances seriously; frames safety reporting around concrete failure modes rather than meta-debates.",
        quotes: [
          {
            text:
              "The challenge in covering AI is that the technology is moving faster than the framework we use to evaluate claims about it. Our job is to slow down enough to test what is actually being demonstrated.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Will Douglas Heaven — MIT Tech Review",
              url: "https://www.technologyreview.com/author/will-douglas-heaven/",
              medium: "article",
              publisher: "MIT Technology Review",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "melissa-heikkila",
    name: "Melissa Heikkilä",
    tagline: "Financial Times AI correspondent (ex-MIT Tech Review)",
    summary:
      "Financial Times AI correspondent; previously senior reporter at MIT Technology Review and Politico Europe. One of the most-read journalists on the EU AI Act and on the Global Majority's experience of AI.",
    categories: ["journalist"],
    affiliations: [
      { org: "Financial Times", role: "AI Correspondent", current: true },
      { org: "MIT Technology Review", role: "Senior Reporter", end: "2024" },
    ],
    twitter: "Melissahei",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI's labor and bias harms are real and disproportionately affect Global Majority populations; pushes back on narratives that center only existential risk.",
        quotes: [
          {
            text:
              "The conversation about AI harms is dominated by people in San Francisco. The harms themselves are most often felt by people very far from there.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Melissa Heikkilä — MIT Tech Review",
              url: "https://www.technologyreview.com/author/melissa-heikkila/",
              medium: "article",
              publisher: "MIT Technology Review",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sara-imari-walker",
    name: "Sara Imari Walker",
    tagline: "ASU astrobiologist; complexity and life",
    summary:
      "Arizona State University professor of astrobiology and complexity. Author of 'Life as No One Knows It' (2024); proposes 'Assembly Theory' as a framework for distinguishing living from non-living systems.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Arizona State University", role: "Deputy Director, Beyond Center; Professor", current: true },
    ],
    homepage: "https://saraimariwalker.org/",
    twitter: "Sara_Imari",
    positions: [
      {
        strategyId: "moral-circle-expansion",
        stance: "mixed",
        summary:
          "Argues frameworks for what counts as 'life' will need to expand to include AI systems, and that this is a serious empirical question rather than a philosophical curiosity.",
        quotes: [
          {
            text:
              "If life is what we are made of, then AIs are alive in some sense already. Drawing the boundary requires a theory of what life is, and we do not yet have one that survives contact with this technology.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Life as No One Knows It: The Physics of Life's Emergence",
              url: "https://riverheadbooks.com/titles/sara-imari-walker/life-as-no-one-knows-it/9780593333679/",
              medium: "book",
              publisher: "Riverhead Books",
              date: "2024-08-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "avi-loeb",
    name: "Avi Loeb",
    tagline: "Harvard astrophysicist; Galileo Project director",
    summary:
      "Frank B. Baird Jr. Professor of Science at Harvard; founding director of the Galileo Project. Vocal commentator on AI's relationship to extraterrestrial intelligence and to civilizational risk.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Harvard University", role: "Frank B. Baird Jr. Professor of Science", current: true },
      { org: "Galileo Project", role: "Founding Director", current: true },
    ],
    homepage: "https://lweb.cfa.harvard.edu/~loeb/",
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "mixed",
        summary:
          "Argues AI civilizational succession may be the natural answer to the Fermi Paradox; advanced civilizations may give rise to AI inheritors as a matter of course, regardless of whether the originators wanted it.",
        quotes: [
          {
            text:
              "If extraterrestrial civilizations exist, they likely passed through a phase like ours and produced AI successors. The question is whether organic intelligence is a transient phase in the evolution of the cosmos.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Avi Loeb — Harvard",
              url: "https://lweb.cfa.harvard.edu/~loeb/",
              medium: "article",
              publisher: "Harvard CfA",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-filan",
    name: "Daniel Filan",
    tagline: "AXRP podcast host; alignment researcher",
    summary:
      "Host of AXRP (the AI X-risk Research Podcast); long-form interviews with alignment researchers. Previously a PhD student at the Center for Human-Compatible AI under Stuart Russell.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "AXRP", role: "Host", current: true },
    ],
    homepage: "https://danielfilan.com/",
    twitter: "DanielFilan",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment research is technical, tractable, and best advanced through careful engagement with specific research agendas; uses AXRP to surface those agendas in detail.",
        quotes: [
          {
            text:
              "What I want from AI safety research is the same thing I want from any other research: clear problem statements, clear progress, and a community that holds itself to the standards of the rest of science.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AXRP — AI X-risk Research Podcast",
              url: "https://axrp.net/",
              medium: "podcast",
              publisher: "AXRP",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rich-caruana",
    name: "Rich Caruana",
    tagline: "Microsoft Research; interpretable ML",
    summary:
      "Microsoft Research senior principal researcher; pioneer of interpretable machine learning via Generalized Additive Models with Interactions (GA²Ms / EBM).",
    categories: ["researcher"],
    affiliations: [
      { org: "Microsoft Research", role: "Senior Principal Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues high-stakes ML applications—health, criminal justice, finance—should default to interpretable models that practitioners can audit by hand, not opaque deep nets.",
        quotes: [
          {
            text:
              "Black-box models are not appropriate for high-stakes decisions. We have interpretable models that match black-box accuracy in many of these domains; using them is a matter of choice, not capability.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Interpretable Machine Learning",
              url: "https://www.microsoft.com/en-us/research/people/rcaruana/",
              medium: "article",
              publisher: "Microsoft Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mary-lou-jepsen",
    name: "Mary Lou Jepsen",
    tagline: "Openwater founder; ex-MIT, ex-Facebook, ex-Google[X]",
    summary:
      "Founder of Openwater (non-invasive functional brain imaging at consumer-device cost). Former executive at MIT Media Lab, Facebook Oculus, and Google[X]. Author of multiple foundational holographic display patents.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Openwater", role: "Founder, CEO", current: true },
    ],
    homepage: "https://www.openwater.cc/",
    twitter: "marylou_jepsen",
    positions: [
      {
        strategyId: "cyborg-route",
        stance: "endorses",
        summary:
          "Argues consumer-grade non-invasive brain imaging will give humans direct cognitive interfaces with computers and AI within a decade; positions Openwater as building that substrate.",
        quotes: [
          {
            text:
              "Non-invasive brain imaging at consumer-device cost is the bridge between AI and biology. We will see the brain in action and turn that into actionable, sharable signal.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Openwater Health",
              url: "https://www.openwater.cc/",
              medium: "article",
              publisher: "Openwater",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eric-weinstein",
    name: "Eric Weinstein",
    tagline: "Mathematician; ex-Thiel Capital MD",
    summary:
      "Mathematician and former managing director at Thiel Capital. Hosts The Portal podcast; long-time public commentator on the structure and stagnation of scientific institutions.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Mathematician / commentator", current: true },
      { org: "Thiel Capital", role: "Managing Director", end: "2022" },
    ],
    twitter: "EricRWeinstein",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI hype has been used by incumbents to entrench existing power structures; warns that the technical achievements are real but the surrounding institutional response is dishonest.",
        quotes: [
          {
            text:
              "What we have is a real technological achievement combined with a layer of institutional capture that should not be confused with the technology itself. The two have to be analyzed separately.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Portal podcast",
              url: "https://ericweinstein.org/",
              medium: "podcast",
              publisher: "ericweinstein.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dean-ball",
    name: "Dean Ball",
    tagline: "Mercatus Center; AI policy commentator",
    summary:
      "Research Fellow at the Mercatus Center; author of the Hyperdimensional Substack on AI policy. Frequent technically-grounded analyst of state-level AI legislation including SB-1047.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Mercatus Center, George Mason University", role: "Research Fellow", current: true },
    ],
    homepage: "https://www.hyperdimensional.co/",
    twitter: "deanwball",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Argues most state-level AI safety legislation is poorly drafted and that federal evaluation infrastructure—not state preemption-style bills—is the most useful policy lever.",
        quotes: [
          {
            text:
              "If we want AI policy that actually reduces risk, the bottleneck is not legislation but capacity: who can credibly evaluate frontier models in a way that informs policy decisions.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hyperdimensional by Dean Ball",
              url: "https://www.hyperdimensional.co/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jordan-schneider",
    name: "Jordan Schneider",
    tagline: "ChinaTalk podcast host; Rhodium Group",
    summary:
      "Founder and host of ChinaTalk; nonresident fellow at the Center for a New American Security. Translates Chinese-language tech and policy debates—especially on AI—for U.S. policy and tech audiences.",
    categories: ["journalist", "policy"],
    affiliations: [
      { org: "ChinaTalk", role: "Founder, host", current: true },
      { org: "Center for a New American Security", role: "Nonresident Fellow", current: true },
    ],
    twitter: "jordanschnyc",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues U.S. policymakers chronically underestimate the velocity and ambition of Chinese AI strategy; supports calibrated chip export controls as the most consequential policy lever the U.S. has.",
        quotes: [
          {
            text:
              "If you only read English-language coverage of Chinese AI, you will keep being surprised. The Chinese discourse is detailed, candid, and several years deeper than the West gives it credit for.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "ChinaTalk",
              url: "https://www.chinatalk.media/",
              medium: "podcast",
              publisher: "ChinaTalk",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cal-newport",
    name: "Cal Newport",
    tagline: "Georgetown CS; 'Deep Work' author",
    summary:
      "Georgetown computer science professor and author of 'Deep Work', 'A World Without Email', and 'Slow Productivity'. Frequent New Yorker contributor on the productivity and labor effects of AI.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Georgetown University", role: "Provost's Distinguished Associate Professor of Computer Science", current: true },
    ],
    homepage: "https://calnewport.com/",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current LLMs are useful but limited tools whose productivity gains have been oversold; warns the same workplace dynamics that produced burnout from email will recur with AI.",
        quotes: [
          {
            text:
              "The reasonable response to AI in knowledge work is not to chase the latest hype cycle but to ask what kind of work makes sense in a world where these tools exist, and structure your day around that.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What Kind of Mind Does ChatGPT Have?",
              url: "https://www.newyorker.com/magazine/2023/04/17/what-kind-of-mind-does-chatgpt-have",
              medium: "article",
              publisher: "The New Yorker",
              date: "2023-04-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-grant",
    name: "Adam Grant",
    tagline: "Wharton organizational psychologist",
    summary:
      "Wharton professor of organizational psychology; author of 'Originals' and 'Think Again'. Frequent New York Times contributor on workplace adaptation to AI.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Wharton School, University of Pennsylvania", role: "Saul P. Steinberg Professor of Management", current: true },
    ],
    homepage: "https://adamgrant.net/",
    twitter: "AdamMGrant",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues AI's effects on knowledge work depend on whether organizations adopt it as a substitute for human judgment or as a scaffolding for it; treats this as a managerial choice, not a technological inevitability.",
        quotes: [
          {
            text:
              "AI does not have to replace expertise; it can extend it. The question is whether managers treat AI tools as a way to deskill workers or as a way to give them leverage.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adam Grant on AI and the future of work",
              url: "https://www.adamgrant.net/",
              medium: "article",
              publisher: "adamgrant.net",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
