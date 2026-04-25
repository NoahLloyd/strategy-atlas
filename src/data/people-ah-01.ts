import type { Person } from "@/lib/people-types";

// Batch AH split (chunk 01): entries 1-37 of 112.

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
          "Argued throughout his term that the EU's regulatory agenda, DSA, DMA, AI Act, forms a coherent framework for digital sovereignty; pushed back hard on U.S. lobbying against the AI Act.",
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
              title: "Rana Foroohar, Financial Times",
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
          "Argues real-world agent evaluations, where the agent must take actions in actual environments, surface different capability and safety properties than synthetic benchmarks.",
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
          "Argues programmatic LLM pipelines, not prompt engineering, are how production AI systems should be built; this requires open infrastructure to be fully practical.",
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
          "Argues end-to-end neural network policies for humanoids, not classical pipelines, are the path to general-purpose physical AI; capability progress will follow the same scaling pattern as language models.",
        quotes: [
          {
            text:
              "Humanoid robots running large neural network policies are the embodied analogue of GPT-style language models. The same scaling laws that produced reasoning in language are starting to produce skill acquisition in physical action.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Eric Jang, evjang.com",
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
          "Argues open-weight image-generation models, not just open APIs, are necessary for the field to keep developing safety properties externally; co-built Black Forest Labs on this thesis.",
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
          "Argues the UK's pragmatic, capability-focused approach, anchored at the AI Security Institute, is the right model for AI governance: lighter than the EU AI Act, deeper than the U.S. patchwork.",
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
              "Open-source AI is the path to keeping innovation accessible and trustworthy. The alternative, a small number of opaque models controlling the future of the technology, is the worse outcome for both users and societies.",
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
              "Reciprocal accountability, the ability to look back at those who look at us, is what keeps both governments and corporations honest. AI inherits that requirement.",
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
              title: "Nicolas Perrin-Gilbert, Inria",
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
              title: "Cursor, about",
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
              title: "Cursor, about",
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
              title: "Sebastian Raschka, Ahead of AI",
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
          "Argues open-ended search, pursuing novelty rather than fitness toward an objective, is how genuine creativity arises; treats this as a deep clue about how to build intelligence.",
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
              title: "Joel Lehman, Twitter",
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
          "Argues weak-to-strong generalization, using weaker, slower-to-improve models to supervise stronger ones, is the structural bet behind scalable alignment of superhuman models.",
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
              "Agents in simulated multi-agent environments can develop their own communication protocols when given the right incentives. The protocols are crude but the qualitative pattern, communication as an emergent solution to cooperation, generalizes.",
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
];
