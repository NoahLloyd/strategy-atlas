import type { Person } from "@/lib/people-types";

// Batch AG chunk 05/5: split from people-ag.ts to keep
// individual modules small enough for turbopack to hot-reload.

export const people: Person[] = [
  {
    id: "byrne-hobart",
    name: "Byrne Hobart",
    tagline: "The Diff founder; finance and AI economy writer",
    summary:
      "Author of The Diff, a paid newsletter on finance and tech. His work on AI's effect on capital markets and labour pricing has been widely read in tech-finance circles.",
    categories: ["public-intellectual", "investor"],
    affiliations: [
      { org: "The Diff", role: "Founder and Author", current: true },
    ],
    homepage: "https://thediff.co/",
    twitter: "ByrneHobart",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Bullish on AI as economic transformation, with rigorous attention to capital flows and labour-market mechanisms.",
        quotes: [
          {
            text:
              "The economic effects of AI will be most visible in capital allocation and pricing of attention before they are visible in unemployment statistics.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Diff",
              url: "https://thediff.co/",
              medium: "blog",
              publisher: "The Diff",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-kantrowitz",
    name: "Alex Kantrowitz",
    tagline: "Big Technology podcast host; tech journalist",
    summary:
      "Tech journalist whose Big Technology newsletter and podcast have become major venues for in-depth interviews with frontier AI executives.",
    categories: ["journalist"],
    affiliations: [
      { org: "Big Technology", role: "Founder", current: true },
    ],
    twitter: "Kantrowitz",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Reports AI from a measured tech-business angle; pushes CEOs on accountability without being captured.",
        quotes: [
          {
            text:
              "The AI industry has not earned the public trust it is asking for. The story is far from settled.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Big Technology",
              url: "https://www.bigtechnology.com/",
              medium: "blog",
              publisher: "Big Technology",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rohit-krishnan",
    name: "Rohit Krishnan",
    tagline: "Strange Loop Canon; AI economy writer",
    summary:
      "Investor and writer whose Strange Loop Canon Substack has become a thoughtful venue for AI economy commentary, particularly on AI-as-tool framings.",
    categories: ["investor", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Writer and investor", current: true },
    ],
    twitter: "krishnanrohit",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Frames AI as a powerful general-purpose tool whose actual deployment will be more economically disruptive than philosophically shocking.",
        quotes: [
          {
            text:
              "AI is going to be a really good tool. The interesting question is what economic structures absorb it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Strange Loop Canon",
              url: "https://www.strangeloopcanon.com/",
              medium: "blog",
              publisher: "Strange Loop Canon",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tony-bates",
    name: "Tony Bates",
    tagline: "Genesys CEO; former Skype president",
    summary:
      "Long-time tech executive (Skype, Microsoft, Cisco) who has commented publicly on AI and enterprise communication.",
    categories: ["executive"],
    affiliations: [
      { org: "Genesys", role: "Former CEO", current: false },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Industry-side voice for enterprise AI deployment.",
        quotes: [
          {
            text:
              "AI in the enterprise is going to reshape how customer experience and workforce planning work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tony Bates, Genesys",
              url: "https://www.genesys.com/",
              medium: "article",
              publisher: "Genesys",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "azeem-azhar",
    name: "Azeem Azhar",
    tagline: "Exponential View founder; tech-economy analyst",
    summary:
      "Founder of Exponential View, a leading newsletter on technology and economy. Argues exponential technologies (including AI) require exponential institutional adaptation.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Exponential View", role: "Founder", current: true },
    ],
    homepage: "https://www.exponentialview.co/",
    twitter: "azeem",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues institutional capacity to absorb AI is the binding constraint on whether AI is net positive.",
        quotes: [
          {
            text:
              "We have exponential technology in linear institutions. The gap is the governance problem.",
            date: "2021-09-07",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Exponential Age",
              url: "https://www.azeemazhar.com/",
              medium: "book",
              publisher: "Diversion Books",
              date: "2021-09-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-thompson",
    name: "Ben Thompson",
    tagline: "Stratechery founder; tech business analyst",
    summary:
      "Influential tech business analyst whose Stratechery newsletter has shaped how Silicon Valley thinks about AI competitive dynamics. Argues OpenAI and frontier labs operate as 'aggregators' in the new AI stack.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Stratechery", role: "Founder and Author", current: true },
    ],
    homepage: "https://stratechery.com/",
    twitter: "benthompson",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Frames AI through tech-business strategy lens; predicts the AI value chain will look like the cloud or app-store ecosystem.",
        quotes: [
          {
            text:
              "AI is the next platform shift, and the structural questions of platform power are about to repeat.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stratechery",
              url: "https://stratechery.com/",
              medium: "blog",
              publisher: "Stratechery",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "freddie-deboer",
    name: "Freddie deBoer",
    tagline: "Cultural critic; AI skeptic",
    summary:
      "Writer and cultural critic whose Substack has been a leading skeptical voice on AI hype, particularly on AI in education and journalism.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Independent writer", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Freddie_deBoer",
    twitter: "freddiedeboer",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI capabilities are dramatically over-marketed and that the deployment realities are mundane.",
        quotes: [
          {
            text:
              "Every AI demo is the best version of the product. Every AI deployment is the worst.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Freddie deBoer Substack",
              url: "https://freddiedeboer.substack.com/",
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
    id: "ross-douthat",
    name: "Ross Douthat",
    tagline: "NYT columnist; conservative AI commentator",
    summary:
      "New York Times opinion columnist whose writing has covered AI from a conservative-religious perspective, focusing on questions of meaning and human dignity.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "The New York Times", role: "Opinion Columnist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ross_Douthat",
    twitter: "DouthatNYT",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Pushes religious and humanist framings of AI risk; concerned about AI's effect on meaning more than extinction.",
        quotes: [
          {
            text:
              "The question is not whether AI is dangerous; it's whether we know what we want from it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ross Douthat at The New York Times",
              url: "https://www.nytimes.com/by/ross-douthat",
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
    id: "kati-suominen",
    name: "Kati Suominen",
    tagline: "Founder of Nextrade Group; AI trade policy",
    summary:
      "Trade economist and founder of Nextrade Group. Argues AI governance must be embedded in international trade frameworks, not as a separate digital regime.",
    categories: ["economist", "policy", "founder"],
    affiliations: [
      { org: "Nextrade Group", role: "Founder and CEO", current: true },
      { org: "Center for Strategic and International Studies (CSIS)", role: "Senior Adviser", current: true },
    ],
    twitter: "kati_suominen",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues AI governance should be integrated with trade-and-investment frameworks (USMCA, WTO).",
        quotes: [
          {
            text:
              "Putting AI governance outside trade frameworks creates two regimes that will collide. Better to integrate them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kati Suominen, Nextrade Group",
              url: "https://www.nextradegroupllc.com/",
              medium: "article",
              publisher: "Nextrade Group",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eliza-strickland",
    name: "Eliza Strickland",
    tagline: "IEEE Spectrum senior editor; AI Spectrum",
    summary:
      "IEEE Spectrum senior editor whose technical journalism on AI has been a reference for engineering audiences. Edits IEEE's AI coverage.",
    categories: ["journalist"],
    affiliations: [
      { org: "IEEE Spectrum", role: "Senior Editor", current: true },
    ],
    twitter: "EmilyHStrick",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Reports AI from an engineering-society lens; pushes for measurable, auditable AI deployment.",
        quotes: [
          {
            text:
              "Engineering AI requires engineering accountability. Right now, marketing is outpacing both.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "IEEE Spectrum AI",
              url: "https://spectrum.ieee.org/topic/artificial-intelligence/",
              medium: "article",
              publisher: "IEEE Spectrum",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "danielle-allen",
    name: "Danielle Allen",
    tagline: "Harvard political theorist; Allen Lab on AI and democracy",
    summary:
      "Harvard James Bryant Conant University Professor and political theorist. Her Allen Lab on AI and democracy works on AI governance grounded in democratic theory.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Harvard University", role: "James Bryant Conant University Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Danielle_Allen",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Argues AI governance must be built on a robust democratic theory; technical fixes are not sufficient.",
        quotes: [
          {
            text:
              "AI governance is not just a technical problem. It is a fundamental democratic question about who decides.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Danielle Allen, Harvard",
              url: "https://www.danielleallen.org/",
              medium: "article",
              publisher: "Danielle Allen",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "soumith-chintala",
    name: "Soumith Chintala",
    tagline: "PyTorch creator; Meta AI",
    summary:
      "Creator of PyTorch, the dominant deep-learning framework. Public voice on the open-source AI ecosystem.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Meta AI", role: "Distinguished Engineer", current: true },
    ],
    twitter: "soumithchintala",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Built the most-used open-source deep-learning framework; advocates open infrastructure as the foundation of AI research.",
        quotes: [
          {
            text:
              "Open infrastructure is what allowed AI research to scale. It is what allows new entrants to compete.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "PyTorch",
              url: "https://pytorch.org/",
              medium: "article",
              publisher: "PyTorch",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sasha-rush",
    name: "Sasha Rush",
    tagline: "Cornell Tech professor; HuggingFace research scientist",
    summary:
      "Cornell Tech NLP professor who also works at Hugging Face. Influential educator and contributor to the open-research culture.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Cornell Tech", role: "Associate Professor", current: true },
      { org: "Hugging Face", role: "Research Scientist", current: true },
    ],
    twitter: "srush_nlp",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Champions open replication of frontier research; argues open replication and tutorials are how the field grows.",
        quotes: [
          {
            text:
              "Open replication is the lifeblood of an honest research field.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sasha Rush, Cornell Tech",
              url: "https://rush-nlp.com/",
              medium: "article",
              publisher: "Cornell Tech",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "samy-bengio",
    name: "Samy Bengio",
    tagline: "Apple ML research director; Yoshua Bengio's brother",
    summary:
      "Long-time Google Brain ML researcher who left for Apple in 2021 to lead its ML research. Brother of Yoshua Bengio.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Apple", role: "Director of Machine Learning Research", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Samy_Bengio",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Industry ML research leader engaged with deployment-grade AI rather than safety theory.",
        quotes: [
          {
            text:
              "Industry ML research has to live with deployment constraints that often shape what is interesting to research.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Samy Bengio, Apple",
              url: "https://machinelearning.apple.com/",
              medium: "article",
              publisher: "Apple",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alan-cowen",
    name: "Alan Cowen",
    tagline: "Founder of Hume AI; emotional AI researcher",
    summary:
      "Founder of Hume AI, which builds models trained on emotional expression. Argues empathic AI is a structurally different deployment problem than generic LLMs.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Hume AI", role: "Founder and CEO", current: true },
    ],
    twitter: "AlanCowen",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Builds emotionally-expressive AI; argues empathic AI deployment requires its own ethics and welfare considerations.",
        quotes: [
          {
            text:
              "Voice AI that understands emotion changes the deployment risk profile. We need ethics frameworks specific to that.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Hume AI",
              url: "https://www.hume.ai/",
              medium: "article",
              publisher: "Hume AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "florian-tramer",
    name: "Florian Tramèr",
    tagline: "ETH Zurich AI security researcher",
    summary:
      "ETH Zurich professor focused on adversarial ML, privacy attacks, and red-teaming. Has documented many of the practical security failures in deployed AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "ETH Zurich", role: "Assistant Professor", current: true },
    ],
    homepage: "https://floriantramer.com/",
    twitter: "florian_tramer",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Empirical adversarial-ML researcher; argues real adversarial robustness is far below what marketing materials claim.",
        quotes: [
          {
            text:
              "When you actually attack deployed AI systems, the safety guarantees turn out to be much thinner than the marketing.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Florian Tramèr, ETH Zurich",
              url: "https://floriantramer.com/",
              medium: "article",
              publisher: "ETH Zurich",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carlos-ignacio-gutierrez",
    name: "Carlos Ignacio Gutierrez",
    tagline: "Future of Life Institute AI policy researcher",
    summary:
      "AI policy researcher at the Future of Life Institute who has analysed comparative AI legislation across the US, EU, and other jurisdictions.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Future of Life Institute", role: "AI Policy Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Maps the comparative AI legislative landscape across jurisdictions.",
        quotes: [
          {
            text:
              "Without comparative AI legislative analysis, jurisdictions repeat each other's mistakes.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "FLI AI policy",
              url: "https://futureoflife.org/ai/",
              medium: "article",
              publisher: "Future of Life Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robert-wright",
    name: "Robert Wright",
    tagline: "Author of 'Nonzero'; AI as evolution",
    summary:
      "Author and intellectual whose work on game theory, evolution, and consciousness has informed his recent commentary on AI as a continuation of the evolutionary process.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Author and host of Nonzero podcast", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Robert_Wright_(journalist)",
    twitter: "robertwrighter",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Frames AI as a continuation of evolutionary processes; less alarmed about extinction, more concerned about value drift.",
        quotes: [
          {
            text:
              "AI is a continuation of the evolutionary process. The question is whether the process drifts toward our values or against them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Nonzero",
              url: "https://nonzero.org/",
              medium: "podcast",
              publisher: "Nonzero",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "raja-chatila",
    name: "Raja Chatila",
    tagline: "Sorbonne robotics professor; IEEE Global Initiative on AI Ethics",
    summary:
      "French roboticist who chaired the IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems. Long-time architect of European AI ethics frameworks.",
    categories: ["academic", "researcher", "policy"],
    affiliations: [
      { org: "Sorbonne University", role: "Emeritus Professor of Robotics and AI Ethics", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helped design international engineering-society AI ethics frameworks (IEEE 7000 series).",
        quotes: [
          {
            text:
              "Engineering-society standards are an under-used governance lever. The IEEE 7000 series shows what is possible.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems",
              url: "https://standards.ieee.org/industry-connections/ec/autonomous-systems/",
              medium: "article",
              publisher: "IEEE",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "doina-precup",
    name: "Doina Precup",
    tagline: "McGill professor; DeepMind Montreal lead",
    summary:
      "Reinforcement learning pioneer at McGill and DeepMind. One of the most prominent women in the technical core of RL research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "McGill University", role: "Professor of Computer Science", current: true },
      { org: "Google DeepMind Montreal", role: "Senior Director", current: true },
    ],
    homepage: "https://www.cs.mcgill.ca/~dprecup/",
    twitter: "doinaprecup",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Senior RL researcher and DeepMind leader; technical contributor to alignment-relevant RL theory.",
        quotes: [
          {
            text:
              "RL agents that learn open-endedly need open-ended evaluation regimes if we are to deploy them safely.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Doina Precup, McGill",
              url: "https://www.cs.mcgill.ca/~dprecup/",
              medium: "article",
              publisher: "McGill University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sundar-sarukkai",
    name: "Sundar Sarukkai",
    tagline: "Bangalore-based philosopher of science",
    summary:
      "Indian philosopher of science and technology whose work on the philosophy of mind and AI has influenced the Indian responsible-AI conversation.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Centre for Society and Policy, IISc", role: "Affiliated philosopher", current: true },
    ],
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues Western framings of AI cognition do not match Indian and other non-Western philosophical traditions; pushes for plurality in AI ethics.",
        quotes: [
          {
            text:
              "AI ethics has been written in one philosophical tradition. Other traditions have things to say.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sundar Sarukkai, IISc",
              url: "https://csp.iisc.ac.in/",
              medium: "article",
              publisher: "Indian Institute of Science",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joscha-romeike",
    name: "Joscha Romeike",
    tagline: "Anthropic policy team",
    summary:
      "Anthropic policy team member working on EU regulatory engagement. Helps translate Anthropic's safety commitments into European regulatory language.",
    categories: ["policy"],
    affiliations: [
      { org: "Anthropic", role: "Policy team (Europe)", current: true },
    ],
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Helps Anthropic engage with European regulatory bodies on Responsible Scaling Policy and the EU AI Act.",
        quotes: [
          {
            text:
              "Capability-tied safety frameworks need to be legible to multiple jurisdictions. That's a translation problem we work on.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic policy",
              url: "https://www.anthropic.com/policy",
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
    id: "marshall-mcluhan",
    name: "Marshall McLuhan",
    tagline: "Media theorist; foundational AI-and-media reference",
    summary:
      "Canadian media theorist whose 'the medium is the message' has become foundational to thinking about how AI as a medium reshapes the messages it carries. Included for foundational discourse.",
    categories: ["theorist", "academic"],
    affiliations: [
      { org: "University of Toronto", role: "Professor", end: "1980", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Marshall_McLuhan",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Foundational thinking on how communication technologies reshape what they carry. The 'AI as medium' framing draws heavily on McLuhan.",
        quotes: [
          {
            text:
              "We shape our tools and thereafter our tools shape us.",
            date: "1964",
            fidelity: "direct",
            context: "Often attributed to McLuhan via Understanding Media; the precise wording was John M. Culkin in 1967, but the framing is McLuhan's.",
            source: {
              title: "Understanding Media: The Extensions of Man",
              url: "https://en.wikipedia.org/wiki/Understanding_Media",
              medium: "book",
              publisher: "McGraw-Hill",
              date: "1964",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tyler-john",
    name: "Tyler John",
    tagline: "Longview Philanthropy AI policy lead",
    summary:
      "Senior policy researcher at Longview Philanthropy who works on AI governance funding and strategy. Bridges philosophy and policy.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Longview Philanthropy", role: "Head of AI Policy", current: true },
    ],
    twitter: "tylermjohn",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for philanthropic funding of AI governance ecosystem capacity, especially in countries beyond the US/EU.",
        quotes: [
          {
            text:
              "AI governance capacity is currently concentrated in two or three jurisdictions. We need it in many more.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Longview Philanthropy",
              url: "https://www.longview.org/",
              medium: "article",
              publisher: "Longview Philanthropy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joaquin-quinonero-candela",
    name: "Joaquin Quiñonero Candela",
    tagline: "Apple ML executive; ex-Meta responsible AI",
    summary:
      "Former Meta VP of Responsible AI who built Meta's responsible AI infrastructure during the misinformation and fairness reckoning. Now at Apple's ML group.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "Apple", role: "Senior Director, Machine Intelligence", current: true },
      { org: "Meta", role: "Former VP of Responsible AI", end: "2023", current: false },
    ],
    twitter: "joaquincandela",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Industry-side architect of Responsible AI programmes at Meta and now Apple. Argues internal infrastructure is necessary but not sufficient.",
        quotes: [
          {
            text:
              "Responsible AI cannot just be a team. It has to be an operating system for how the company builds.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Joaquin Candela, Apple",
              url: "https://www.apple.com/",
              medium: "article",
              publisher: "Apple",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "haydn-belfield",
    name: "Haydn Belfield",
    tagline: "Cambridge CSER academic project manager",
    summary:
      "Manages the AI:Futures and Responsibility programme at Cambridge's CSER. Has authored multiple AI policy reports for UK government bodies.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Centre for the Study of Existential Risk (Cambridge)", role: "Academic Project Manager", current: true },
    ],
    twitter: "HaydnBelfield",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Bridges Cambridge x-risk research and UK policy; helps design third-party AI evaluation frameworks.",
        quotes: [
          {
            text:
              "Third-party AI evaluation is an under-developed governance primitive that the next decade of AI policy will be built on.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "CSER policy work",
              url: "https://www.cser.ac.uk/",
              medium: "article",
              publisher: "CSER",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "iason-gabriel",
    name: "Iason Gabriel",
    tagline: "DeepMind senior research scientist; AI ethics",
    summary:
      "DeepMind senior research scientist focused on AI ethics and value alignment from a political philosophy perspective. Author of the influential 'Artificial Intelligence, Values and Alignment' paper.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    twitter: "IasonGabriel",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment requires not just instruction-following but value-pluralism: aligning to which values, when reasonable people disagree?",
        quotes: [
          {
            text:
              "Alignment is not just a technical problem. It is a problem about whose values count.",
            date: "2020-10-31",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Artificial Intelligence, Values and Alignment",
              url: "https://link.springer.com/article/10.1007/s11023-020-09539-2",
              medium: "paper",
              publisher: "Minds and Machines",
              date: "2020-10-31",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-turek",
    name: "Matt Turek",
    tagline: "DARPA AI Forward program lead",
    summary:
      "DARPA Information Innovation Office program manager who leads the AI Forward initiative on assured autonomy and the integration of AI into national security systems.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "DARPA", role: "Deputy Director, I2O", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Oversees DARPA's AI assurance work, formal verification, robustness testing, and adversarial evaluation for defense systems.",
        quotes: [
          {
            text:
              "Defense AI must be assured AI. Otherwise we are deploying systems we do not understand into life-critical contexts.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "DARPA AI initiatives",
              url: "https://www.darpa.mil/research/programs",
              medium: "article",
              publisher: "DARPA",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "shahar-avin",
    name: "Shahar Avin",
    tagline: "Cambridge CSER senior research associate",
    summary:
      "Cambridge Centre for the Study of Existential Risk researcher whose 'malicious use of AI' report has shaped policy thinking on AI security risks. Co-founded the Future of Life Institute.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Centre for the Study of Existential Risk (Cambridge)", role: "Senior Research Associate", current: true },
    ],
    twitter: "shahar_avin",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Authored foundational analyses of malicious AI use including the 2018 Malicious Use of AI report.",
        quotes: [
          {
            text:
              "Malicious use of AI is not a future problem. It is a current and rapidly developing one.",
            date: "2018-02-20",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Malicious Use of Artificial Intelligence",
              url: "https://maliciousaireport.com/",
              medium: "paper",
              publisher: "Future of Humanity Institute / CSER / OpenAI / EFF",
              date: "2018-02-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "noam-shazeer",
    name: "Noam Shazeer",
    tagline: "Character.AI co-founder; Transformer paper co-author",
    summary:
      "Co-author of the 2017 Transformer paper. Co-founded Character.AI, then returned to Google in 2024 as part of a $2.7B reverse-acquihire. Public face of frontier model development inside Google.",
    categories: ["researcher", "founder", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Tech Lead, Gemini", current: true },
      { org: "Character.AI", role: "Co-founder and former CEO", end: "2024-08", current: false },
    ],
    twitter: "NoamShazeer",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Builder-side voice. Argues frontier model improvement is structurally driven by aggressive engineering more than by safety theory.",
        quotes: [
          {
            text:
              "Attention is all you need.",
            date: "2017-06-12",
            fidelity: "direct",
            context: "Title of the original Transformer paper, co-authored.",
            source: {
              title: "Attention Is All You Need",
              url: "https://arxiv.org/abs/1706.03762",
              medium: "paper",
              publisher: "arXiv",
              date: "2017-06-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "wes-mckinney",
    name: "Wes McKinney",
    tagline: "Pandas creator; Posit/RStudio data infrastructure",
    summary:
      "Creator of pandas, the canonical Python data-analysis library. Has written on AI infrastructure: how dataframes, training pipelines, and orchestration shape what AI is possible.",
    categories: ["engineer", "founder"],
    affiliations: [
      { org: "Posit (formerly RStudio)", role: "Engineer", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Wes_McKinney",
    twitter: "wesmckinn",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source data infrastructure is the foundation of AI; without open data tooling, AI access is gated by industry.",
        quotes: [
          {
            text:
              "Open data infrastructure is the precondition for democratised AI work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Wes McKinney homepage",
              url: "https://wesmckinney.com/",
              medium: "article",
              publisher: "wesmckinney.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lucy-suchman",
    name: "Lucy Suchman",
    tagline: "Lancaster professor emerita; AI and military robotics",
    summary:
      "Lancaster anthropologist whose work on situated action and on military AI has shaped academic thinking on autonomous weapons. Long-time critic of overconfident AI claims.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Lancaster University", role: "Professor Emerita of Anthropology of Science and Technology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lucy_Suchman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues military AI proponents systematically over-claim autonomy; calls for stronger international restraint.",
        quotes: [
          {
            text:
              "We have a long history of overclaiming autonomy for AI systems that turn out to require constant human work.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Lucy Suchman, Lancaster University",
              url: "https://www.lancaster.ac.uk/people-profiles/lucy-suchman",
              medium: "article",
              publisher: "Lancaster University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yann-collet",
    name: "Yann Collet",
    tagline: "Compression researcher; Zstandard creator (Meta)",
    summary:
      "Creator of zstd compression. Has commented on the substantial energy and infrastructure costs underlying frontier AI training, drawing on compression-theory perspective.",
    categories: ["engineer"],
    affiliations: [
      { org: "Meta", role: "Engineer", current: true },
    ],
    twitter: "Cyan4973",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Engineer-grade voice on AI infrastructure costs and efficiency tradeoffs.",
        quotes: [
          {
            text:
              "Compression and prediction are duals. LLMs work because compression works. They have the same limits.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Yann Collet on X",
              url: "https://x.com/Cyan4973",
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
    id: "connor-tann",
    name: "Connor Tann",
    tagline: "Faculty AI safety lead",
    summary:
      "Faculty AI's safety research lead, working with frontier labs and the UK AI Safety Institute on evaluations.",
    categories: ["researcher"],
    affiliations: [
      { org: "Faculty", role: "Director of Safety", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Bridges academic safety research and industry deployment through Faculty's safety evaluations.",
        quotes: [
          {
            text:
              "Safety evaluations have to bridge research papers and shipped products. Otherwise the work is academic in the wrong sense.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Faculty Safety",
              url: "https://faculty.ai/",
              medium: "article",
              publisher: "Faculty",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tony-blair",
    name: "Tony Blair",
    tagline: "Former UK Prime Minister; Tony Blair Institute on AI",
    summary:
      "Former UK PM whose Tony Blair Institute has become a leading mainstream voice for AI governance, particularly on AI as a productivity-and-public-services lever for governments.",
    categories: ["policy"],
    affiliations: [
      { org: "Tony Blair Institute for Global Change", role: "Executive Chairman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tony_Blair",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues governments should treat AI as a productivity revolution and reorient public services around it.",
        quotes: [
          {
            text:
              "AI is a revolution comparable to the industrial revolution. Governments that fail to understand this will be governing the past.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tony Blair Institute for Global Change",
              url: "https://www.institute.global/",
              medium: "article",
              publisher: "Tony Blair Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "geoffrey-cain",
    name: "Geoffrey Cain",
    tagline: "Author of 'The Perfect Police State'",
    summary:
      "Foreign correspondent whose 2021 book documented Chinese AI-powered surveillance in Xinjiang. Frames AI surveillance as a present authoritarian threat.",
    categories: ["journalist"],
    affiliations: [
      { org: "Independent journalist", role: "Author", current: true },
    ],
    twitter: "geoffrey_cain",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documents how AI surveillance is already deployed in authoritarian contexts; argues governance frameworks must address this present reality.",
        quotes: [
          {
            text:
              "Xinjiang is a glimpse of what AI in the hands of an authoritarian state actually looks like.",
            date: "2021-06-29",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Perfect Police State",
              url: "https://www.publicaffairsbooks.com/titles/geoffrey-cain/the-perfect-police-state/9781541757035/",
              medium: "book",
              publisher: "PublicAffairs",
              date: "2021-06-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mihaela-van-der-schaar",
    name: "Mihaela van der Schaar",
    tagline: "Cambridge AI in healthcare professor",
    summary:
      "Cambridge professor who founded the van der Schaar Lab on machine learning for healthcare. Argues medical AI demands sector-specific evaluation methodology.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Cambridge", role: "John Humphrey Plummer Professor of Machine Learning", current: true },
    ],
    homepage: "https://www.vanderschaar-lab.com/",
    twitter: "MihaelaVdS",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Healthcare AI requires its own evaluation methodology distinct from general ML benchmarks.",
        quotes: [
          {
            text:
              "Healthcare AI without healthcare-specific evaluation is research, not deployment.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "van der Schaar Lab",
              url: "https://www.vanderschaar-lab.com/",
              medium: "article",
              publisher: "Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tristan-greene",
    name: "Tristan Greene",
    tagline: "Tech journalist; AI deep dive coverage",
    summary:
      "Senior technology journalist whose work for Cointelegraph and previously TNW has examined the gap between AI hype and reality.",
    categories: ["journalist"],
    affiliations: [
      { org: "Cointelegraph", role: "Senior Editor", current: true },
    ],
    twitter: "TristanGreene",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Reports on AI from a science-skeptic angle; pushes back on capability hype with reproducibility questions.",
        quotes: [
          {
            text:
              "Most AI breakthrough headlines wouldn't survive a rigorous reproduction.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tristan Greene archive",
              url: "https://thenextweb.com/author/tristangreene",
              medium: "article",
              publisher: "TNW",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andriy-burkov",
    name: "Andriy Burkov",
    tagline: "ML engineer; 'The Hundred-Page Machine Learning Book' author",
    summary:
      "Practitioner-oriented ML educator and author. Has written publicly about the limits of current LLMs and the gap between hype and deployed reality.",
    categories: ["engineer", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "ML practitioner and educator", current: true },
    ],
    twitter: "burkov",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current LLM capabilities are over-marketed; deployment reality is messier than benchmarks suggest.",
        quotes: [
          {
            text:
              "Don't confuse a benchmark score with a deployed product. The gap is bigger than you think.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Andriy Burkov on LinkedIn",
              url: "https://www.linkedin.com/in/andriyburkov/",
              medium: "article",
              publisher: "LinkedIn",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ethan-mollick",
    name: "Ethan Mollick",
    tagline: "Wharton professor; 'Co-Intelligence' author",
    summary:
      "Wharton management professor whose 2024 book Co-Intelligence and Substack 'One Useful Thing' have become major mainstream guides to working with AI. Public voice for empirical, deployment-focused understanding of AI capability.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Wharton School, University of Pennsylvania", role: "Associate Professor", current: true },
    ],
    homepage: "https://www.oneusefulthing.org/",
    twitter: "emollick",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Frames AI as a 'jagged frontier' of capability that requires hands-on engagement to understand. Skeptical of both pure optimism and pure doom.",
        quotes: [
          {
            text:
              "AI is a jagged frontier of capability, extremely good at some things you wouldn't expect, surprisingly bad at others.",
            date: "2024-04-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Co-Intelligence: Living and Working with AI",
              url: "https://www.oneusefulthing.org/p/co-intelligence-living-and-working",
              medium: "book",
              publisher: "Portfolio",
              date: "2024-04-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robert-long",
    name: "Robert Long",
    tagline: "Eleos AI co-founder; AI welfare researcher",
    summary:
      "Philosopher who co-founded Eleos AI, a non-profit research organisation focused on AI moral status and welfare. Co-author of the 2024 'Taking AI Welfare Seriously' position paper.",
    categories: ["theorist", "founder"],
    affiliations: [
      { org: "Eleos AI Research", role: "Co-founder and Executive Director", current: true },
    ],
    twitter: "rgblong",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Builds research infrastructure for AI welfare and moral status work. Argues frontier labs should adopt model-welfare frameworks now.",
        quotes: [
          {
            text:
              "We can take AI welfare seriously without claiming current AI is conscious. The point is to build the frameworks before we need them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Eleos AI Research",
              url: "https://eleosai.org/",
              medium: "article",
              publisher: "Eleos AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kyle-fish",
    name: "Kyle Fish",
    tagline: "Anthropic AI welfare researcher",
    summary:
      "First dedicated AI welfare researcher hired by a frontier lab (Anthropic, 2024). Translates academic philosophy into operational AI-welfare practice.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "AI Welfare Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "First in-house AI welfare researcher at a frontier lab; embeds welfare considerations in model training and deployment.",
        quotes: [
          {
            text:
              "If there is even a meaningful probability that current models are moral patients, that should affect how we train and deploy them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic AI welfare research",
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
    id: "henry-shevlin",
    name: "Henry Shevlin",
    tagline: "Cambridge LCFI; AI consciousness philosopher",
    summary:
      "Cambridge Leverhulme Centre for the Future of Intelligence philosopher specialising in AI moral status and digital minds. Co-organised the 2024 'Taking AI Welfare Seriously' report.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Leverhulme Centre for the Future of Intelligence (LCFI), Cambridge", role: "Director of Research and Programmes", current: true },
    ],
    twitter: "Hen_Shev",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Argues AI moral status is a live question that frontier labs and governments need to take seriously now, not later.",
        quotes: [
          {
            text:
              "We may be on the verge of creating moral patients without the ethical frameworks to know how to treat them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Henry Shevlin, LCFI",
              url: "https://www.lcfi.ac.uk/people/henry-shevlin",
              medium: "article",
              publisher: "LCFI Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "erik-hoel",
    name: "Erik Hoel",
    tagline: "Neuroscientist; consciousness researcher",
    summary:
      "Stony Brook neuroscientist and Tufts research scientist whose work on consciousness has been central to debates about AI sentience. Author of the 2023 book The World Behind the World.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "Tufts University", role: "Visiting Research Scholar", current: true },
    ],
    twitter: "erikphoel",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Engages with AI consciousness as a serious scientific question, particularly via integrated information theory.",
        quotes: [
          {
            text:
              "We are heading into a future where AI consciousness is going to be a real question, even if no current LLM has it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Erik Hoel, Substack",
              url: "https://www.theintrinsicperspective.com/",
              medium: "blog",
              publisher: "The Intrinsic Perspective",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ed-felten",
    name: "Edward Felten",
    tagline: "Princeton emeritus; ex-FTC Chief Technologist",
    summary:
      "Princeton University Robert E. Kahn Professor of Computer Science Emeritus; founding director of the Center for Information Technology Policy. Twice served the U.S. government, as deputy U.S. CTO and as FTC Chief Technologist.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Princeton University", role: "Professor Emeritus", current: true },
      { org: "Federal Trade Commission", role: "Chief Technologist (former)", end: "2012" },
    ],
    homepage: "https://www.cs.princeton.edu/~felten/",
    wikipedia: "https://en.wikipedia.org/wiki/Edward_Felten",
    twitter: "EdFelten",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI policy should be built on technical literacy in government; technologists need to be inside agencies to make policy implementable rather than performative. Frames AI governance as a continuity of decades of computer-and-society policy work.",
        quotes: [
          {
            text:
              "Good tech policy requires technologists in government, not just outside advisors. The detail of what AI systems actually do is where policy succeeds or fails.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "CITP Princeton",
              url: "https://citp.princeton.edu/",
              medium: "article",
              publisher: "Princeton CITP",
            },
          },
          {
            text:
              "AI governance is not a new field. It is a continuation of decades of computer-and-society policy work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Edward Felten, Princeton",
              url: "https://www.cs.princeton.edu/~felten/",
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
    id: "renee-cummings",
    name: "Renée Cummings",
    tagline: "University of Virginia data activist in residence",
    summary:
      "AI ethicist and criminologist whose work focuses on AI in policing and Black diaspora communities. Former Senior Fellow at Columbia's Data Science Institute.",
    categories: ["academic", "activist"],
    affiliations: [
      { org: "University of Virginia School of Data Science", role: "Data Activist in Residence", current: true },
    ],
    twitter: "DrReneeCummings",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI in policing reproduces historical racial harms and that governance must centre Black communities.",
        quotes: [
          {
            text:
              "AI in policing is producing the same racial outcomes as the past, with new technical legitimacy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Renée Cummings, UVA",
              url: "https://datascience.virginia.edu/people/renee-cummings",
              medium: "article",
              publisher: "UVA School of Data Science",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andrew-trask",
    name: "Andrew Trask",
    tagline: "Founder of OpenMined; privacy-preserving AI",
    summary:
      "Oxford PhD and OpenMined founder. Builds open-source tools for privacy-preserving machine learning, including federated learning, differential privacy, and secure computation.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "OpenMined", role: "Founder", current: true },
    ],
    twitter: "iamtrask",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues privacy-preserving AI is the technical substrate for AI that can be both open and safe.",
        quotes: [
          {
            text:
              "Structured transparency, letting outsiders verify that an AI system has the properties it claims, without exposing the data, is the missing layer of AI governance.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "OpenMined",
              url: "https://www.openmined.org/",
              medium: "article",
              publisher: "OpenMined",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trishan-panch",
    name: "Trishan Panch",
    tagline: "Wellframe co-founder; Harvard health AI",
    summary:
      "Harvard healthcare AI researcher and Wellframe co-founder. Argues medical AI deployment needs sector-specific governance grounded in clinical evidence.",
    categories: ["founder", "academic"],
    affiliations: [
      { org: "Harvard T.H. Chan School of Public Health", role: "Lecturer", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues clinical AI requires evidence-based deployment standards akin to drug trials.",
        quotes: [
          {
            text:
              "Medical AI without clinical-grade evidence is malpractice with extra steps.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Wellframe",
              url: "https://www.wellframe.com/",
              medium: "article",
              publisher: "Wellframe",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ada-rose-cannon",
    name: "Ada Rose Cannon",
    tagline: "W3C web standards advocate; AR/VR engineer",
    summary:
      "Long-time W3C standards contributor and AR/VR engineer. Has written about AI's implications for the open web and immersive technologies.",
    categories: ["engineer", "activist"],
    affiliations: [
      { org: "W3C Immersive Web Working Group", role: "Chair", current: true },
    ],
    twitter: "Lady_Ada_King",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open standards are the structural antidote to AI-driven platform consolidation.",
        quotes: [
          {
            text:
              "If the open web doesn't have an answer to AI, AI will swallow the open web.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ada Rose Cannon homepage",
              url: "https://ada.is/",
              medium: "blog",
              publisher: "ada.is",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephen-wolfram",
    name: "Stephen Wolfram",
    tagline: "Founder of Wolfram Research; A New Kind of Science",
    summary:
      "Founder of Wolfram Research and author of A New Kind of Science. Has written extensively on what makes ChatGPT work and on integrating symbolic computation with LLMs.",
    categories: ["founder", "researcher", "theorist"],
    affiliations: [
      { org: "Wolfram Research", role: "Founder and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Stephen_Wolfram",
    homepage: "https://writings.stephenwolfram.com/",
    twitter: "stephen_wolfram",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Bullish on AI as scientific transformation; argues integrating symbolic and statistical AI is the productive frontier.",
        quotes: [
          {
            text:
              "What ChatGPT is doing is, in a sense, going through one of those random walks of words.",
            date: "2023-02-14",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What Is ChatGPT Doing... and Why Does It Work?",
              url: "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/",
              medium: "blog",
              publisher: "stephenwolfram.com",
              date: "2023-02-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-recht",
    name: "Ben Recht",
    tagline: "UC Berkeley professor; ML reproducibility critic",
    summary:
      "Berkeley CS professor whose blog and papers have been a leading voice for reproducibility and rigor in ML benchmarking. Argues much of ML research has weak empirical foundations.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of EECS and Statistics", current: true },
    ],
    homepage: "https://www.argmin.net/",
    twitter: "beenwrekt",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues much ML research has reproducibility issues; capability claims should be checked rigorously before policy is built on them.",
        quotes: [
          {
            text:
              "If we cannot reproduce the result, we cannot build policy on it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ben Recht, arg min blog",
              url: "https://www.argmin.net/",
              medium: "blog",
              publisher: "arg min",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tom-everitt",
    name: "Tom Everitt",
    tagline: "Google DeepMind staff research scientist; first PhD thesis on safe AGI",
    summary:
      "DeepMind safety researcher whose 2018 thesis 'Towards Safe Artificial General Intelligence' was the first PhD thesis on the topic. Works on causal foundations for safe AGI.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Staff Research Scientist", current: true },
    ],
    homepage: "https://www.tomeveritt.se/",
    twitter: "tom4everitt",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Develops causal-graphical-model frameworks for analysing AGI safety. One of the foundational academic contributors to the safety research agenda.",
        quotes: [
          {
            text:
              "Done right, AGI can be an incredibly powerful tool enabling breakthroughs to transform our everyday lives. We need to be having discussions about these big questions as early as possible.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "Tom Everitt, DeepMind",
              url: "https://www.tomeveritt.se/",
              medium: "article",
              publisher: "tomeveritt.se",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "marc-warner",
    name: "Marc Warner",
    tagline: "CEO of Faculty AI; CTO of Accenture",
    summary:
      "Former Harvard quantum physicist who co-founded Faculty, a UK AI firm that works with the UK government and frontier labs on safety evaluations. Now also Accenture's global CTO after the 2024 acquisition.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Accenture", role: "Global CTO", current: true },
      { org: "Faculty", role: "CEO and Co-founder", current: true },
    ],
    twitter: "marc_warner",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Runs Faculty's AI-safety evaluations work with frontier labs; argues external independent evaluation infrastructure is a prerequisite for trustworthy AI.",
        quotes: [
          {
            text:
              "AI safety is not in tension with capability. It is the scaffolding that lets capability be deployed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Faculty AI",
              url: "https://faculty.ai/",
              medium: "article",
              publisher: "Faculty",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-jonas",
    name: "Adam Jonas",
    tagline: "Morgan Stanley equity analyst; embodied AI and humanoid robots lead",
    summary:
      "Morgan Stanley equity analyst who leads research on auto, mobility, and humanoid robots. Published influential $25 trillion 2050 humanoid-robot market projection.",
    categories: ["investor", "economist"],
    affiliations: [
      { org: "Morgan Stanley", role: "Managing Director, Research; Global Auto & Shared Mobility", current: true },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Forecasts embodied AI and humanoid robots as a multi-trillion-dollar market by mid-century.",
        quotes: [
          {
            text:
              "We forecast $25 trillion in annual humanoid-robot revenue by 2050.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adam Jonas, Morgan Stanley Robot Almanac",
              url: "https://www.morganstanley.com/insights/videos/humanoid-robots-adam-jonas",
              medium: "video",
              publisher: "Morgan Stanley",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kalev-leetaru",
    name: "Kalev Leetaru",
    tagline: "Founder of the GDELT Project",
    summary:
      "Founder of the Global Database of Events, Language, and Tone. Builds open datasets used widely in conflict forecasting and disinformation research, including by NATO Strategic Communications.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "George Washington University Center for Cyber & Homeland Security", role: "Senior Fellow", current: true },
      { org: "GDELT Project", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kalev_Leetaru",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Builds open datasets that enable independent monitoring of global disinformation; argues independent data infrastructure is a prerequisite to credible governance.",
        quotes: [
          {
            text:
              "Independent open datasets are what let researchers and journalists check claims made by platforms and governments.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kalev Leetaru, GDELT Project",
              url: "https://www.kalevleetaru.com/",
              medium: "article",
              publisher: "GDELT",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "james-hendler",
    name: "James Hendler",
    tagline: "RPI Tetherless World Constellation director; semantic web pioneer",
    summary:
      "RPI professor and Semantic Web co-originator. Long-time advocate for structured-data AI and for governance grounded in computational pragmatics.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Rensselaer Polytechnic Institute", role: "Director of the Institute for Data Exploration and Applications", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/James_Hendler",
    twitter: "jahendler",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Argues AI governance needs standards-level, not just legal-level, interventions; AI trust requires structured traceability of data provenance.",
        quotes: [
          {
            text:
              "AI governance won't work if the data layer isn't governable. You cannot regulate what you cannot trace.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "James Hendler at RPI",
              url: "https://www.cs.rpi.edu/~hendler/",
              medium: "article",
              publisher: "RPI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "virginia-eubanks",
    name: "Virginia Eubanks",
    tagline: "University at Albany SUNY; Automating Inequality author",
    summary:
      "Political science professor whose 2018 Automating Inequality documented how algorithmic systems in welfare, child protection, and housing disproportionately punish poor Americans.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University at Albany, SUNY", role: "Associate Professor of Political Science", current: true },
    ],
    homepage: "https://virginia-eubanks.com/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues algorithmic systems in public services remove the appearance of bias while relocating it, and must be audited from a rights-of-the-poor framework.",
        quotes: [
          {
            text:
              "These systems don't actually remove bias, they simply move it.",
            date: "2018-01-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Automating Inequality",
              url: "https://virginia-eubanks.com/automating-inequality/",
              medium: "book",
              publisher: "St. Martin's Press",
              date: "2018-01-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephanie-bell",
    name: "Stephanie Bell",
    tagline: "Partnership on AI; data worker rights",
    summary:
      "Chief Programs and Insights Officer at Partnership on AI. Focuses on AI and job quality, including data-worker rights in the Global South.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Partnership on AI", role: "Chief Programs and Insights Officer", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI design must include input from frontline workers and data annotators whose labour underlies model training.",
        quotes: [
          {
            text:
              "Companies that don't get input from their frontline workers when designing and implementing AI systems are disempowering some of their best sources of knowledge and insight.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "What Workers Say About Workplace AI",
              url: "https://partnershiponai.org/what-workers-say-about-workplace-ai/",
              medium: "article",
              publisher: "Partnership on AI",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cathy-oneil",
    name: "Cathy O'Neil",
    tagline: "Mathematician; Weapons of Math Destruction author",
    summary:
      "Mathematician whose 2016 Weapons of Math Destruction made 'algorithmic accountability' a mainstream concern. Runs ORCAA, an algorithmic audit firm.",
    categories: ["public-intellectual", "activist"],
    affiliations: [
      { org: "ORCAA", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Cathy_O%27Neil",
    twitter: "mathbabedotorg",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues algorithmic systems must be audited and their harms to vulnerable populations must be measured and mitigated.",
        quotes: [
          {
            text:
              "Models are opinions embedded in mathematics.",
            date: "2016-09-06",
            fidelity: "direct",
            source: {
              title: "Weapons of Math Destruction",
              url: "https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction",
              medium: "book",
              publisher: "Crown",
              date: "2016-09-06",
            },
          },
          {
            text:
              "The human victims of WMDs are held to a far higher standard of evidence than the algorithms themselves.",
            date: "2016-09-06",
            fidelity: "direct",
            source: {
              title: "Weapons of Math Destruction",
              url: "https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction",
              medium: "book",
              publisher: "Crown",
              date: "2016-09-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-berners-lee",
    name: "Tim Berners-Lee",
    tagline: "Inventor of the World Wide Web",
    summary:
      "Inventor of the web and co-founder of the Solid project. Argues AI exploitation of the web requires a decentralised data architecture where individuals own their data.",
    categories: ["founder", "engineer", "public-intellectual"],
    affiliations: [
      { org: "World Wide Web Consortium (W3C)", role: "Founder", current: true },
      { org: "Solid project", role: "Co-founder", current: true },
      { org: "Inrupt", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
    twitter: "timberners_lee",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues decentralised data architecture (Solid pods) is the structural response to AI and platform exploitation.",
        quotes: [
          {
            text:
              "The web has evolved into an engine of inequity and division; swayed by powerful forces who use it for their own agendas.",
            date: "2024",
            fidelity: "direct",
            source: {
              title:
                "Tim Berners-Lee urges decentralized web to counter AI exploitation",
              url: "https://www.techspot.com/news/109661-tim-breners-lee-urges-decentralized-web-counter-ai.html",
              medium: "article",
              publisher: "TechSpot",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "susan-athey",
    name: "Susan Athey",
    tagline: "Stanford economist; former DOJ Antitrust chief economist",
    summary:
      "Stanford economics professor who served 2022–2024 as Chief Economist at the US Department of Justice Antitrust Division. Pioneered the combination of machine learning and causal inference.",
    categories: ["academic", "economist", "policy"],
    affiliations: [
      { org: "Stanford Graduate School of Business", role: "The Economics of Technology Professor", current: true },
      { org: "Stanford HAI", role: "Senior Fellow", current: true },
      { org: "DOJ Antitrust Division", role: "Chief Economist", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Susan_Athey",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Brings rigorous ML-and-causation thinking to AI antitrust; argues market structure around AI demands serious antitrust analysis.",
        quotes: [
          {
            text:
              "Causal inference plus machine learning is changing how we understand the impact of AI in markets.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Susan Athey research homepage",
              url: "https://gsb-faculty.stanford.edu/susan-athey/research/",
              medium: "article",
              publisher: "Stanford GSB",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pedro-domingos",
    name: "Pedro Domingos",
    tagline: "UW emeritus; The Master Algorithm author",
    summary:
      "University of Washington ML pioneer who wrote The Master Algorithm (2015). Now a public voice against what he calls the AI-safety-induced 'existential risk' panic and against what he sees as illiberal AI regulation.",
    categories: ["researcher", "academic", "public-intellectual"],
    affiliations: [
      { org: "University of Washington", role: "Professor Emeritus of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Pedro_Domingos",
    twitter: "pmddomingos",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Publicly critical of existential-risk framings; argues the bigger risk is under-adoption and illiberal regulation.",
        quotes: [
          {
            text:
              "AI's greatest risk is not having enough of it.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI's Greatest Risk Is Not Having Enough of It",
              url: "https://medium.com/@pmddomingos",
              medium: "blog",
              publisher: "Medium",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-wooldridge",
    name: "Michael Wooldridge",
    tagline: "Oxford computer science department head",
    summary:
      "Oxford head of CS who specialises in multi-agent systems. Author of The Road to Conscious Machines (2020) and widely-read historian of AI. Public voice for measured AI framings.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Oxford", role: "Professor and Head of Department of Computer Science", current: true },
    ],
    homepage: "https://www.cs.ox.ac.uk/people/michael.wooldridge/",
    twitter: "wooldridgemike",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI has had boom-and-bust cycles and that the current cycle is likely to over-promise on AGI.",
        quotes: [
          {
            text:
              "AI researchers have spent huge amounts of effort and money and repeatedly claimed to have made breakthroughs that bring the dream of intelligent machines within reach, only to have their claims exposed as hopelessly overoptimistic.",
            date: "2020",
            fidelity: "direct",
            source: {
              title: "The Road to Conscious Machines (A Brief History of AI)",
              url: "https://www.amazon.com/Brief-History-Artificial-Intelligence-Where/dp/1250770742",
              medium: "book",
              publisher: "Pelican / Flatiron",
              date: "2020",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "helen-nissenbaum",
    name: "Helen Nissenbaum",
    tagline: "Cornell Tech professor; contextual integrity theory",
    summary:
      "Cornell Tech philosopher whose contextual integrity framework is the most-cited theory of privacy in tech-policy debates. Frames AI privacy as about appropriate information flow between contexts.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Cornell Tech", role: "Andrew H. and Ann R. Tisch Professor", current: true },
    ],
    homepage: "https://nissenbaum.tech.cornell.edu/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues privacy violations happen when AI systems break contextual integrity, use information in ways the original context did not authorise.",
        quotes: [
          {
            text:
              "Privacy is not secrecy. Privacy is the appropriate flow of information according to contextual norms.",
            date: "2010",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Privacy in Context: Technology, Policy, and the Integrity of Social Life",
              url: "https://www.sup.org/books/title/?id=8862",
              medium: "book",
              publisher: "Stanford University Press",
              date: "2010",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rob-reich",
    name: "Rob Reich",
    tagline: "Stanford professor; System Error co-author",
    summary:
      "Stanford political theory professor and associate director of HAI. Co-author of System Error (2021), which argues Big Tech's optimization mindset systematically substitutes company values for democratic ones.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Stanford University", role: "Professor of Political Science", current: true },
      { org: "Stanford HAI", role: "Associate Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Rob_Reich",
    twitter: "robreich",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues tech firms' optimization mindset is a democratic problem and calls for a professional code of responsible conduct for AI developers.",
        quotes: [
          {
            text:
              "Well-intentioned optimizers fail to measure all that is meaningful and, when their creative disruptions achieve great scale, they impose their values upon the rest of us.",
            date: "2021-09-07",
            fidelity: "direct",
            source: {
              title: "System Error: Where Big Tech Went Wrong and How We Can Reboot",
              url: "https://robreich.people.stanford.edu/system-error",
              medium: "book",
              publisher: "HarperCollins",
              date: "2021-09-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gabriela-ramos",
    name: "Gabriela Ramos",
    tagline: "UNESCO Assistant Director-General for Social and Human Sciences",
    summary:
      "Mexican economist who led UNESCO's 2021 Recommendation on the Ethics of Artificial Intelligence, the first global inter-governmental AI ethics agreement, adopted by 193 member states.",
    categories: ["policy"],
    affiliations: [
      { org: "UNESCO", role: "Assistant Director-General for Social and Human Sciences", current: true },
    ],
    twitter: "gabramosp",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Led the first global UNESCO agreement on AI ethics, adopted unanimously by 193 member states in November 2021.",
        quotes: [
          {
            text:
              "Decisions impacting millions of people should be fair, transparent and contestable. These new technologies must help us address the major challenges in our world today.",
            date: "2021-11-25",
            fidelity: "direct",
            source: {
              title: "UNESCO adopts first global standard on the ethics of artificial intelligence",
              url: "https://www.unesco.org/en/articles/unesco-adopts-first-global-standard-ethics-artificial-intelligence",
              medium: "article",
              publisher: "UNESCO",
              date: "2021-11-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amy-zegart",
    name: "Amy Zegart",
    tagline: "Stanford Hoover senior fellow; national security and AI",
    summary:
      "Hoover Institution senior fellow and Stanford associate director of HAI. Author of Spies, Lies, and Algorithms. Central mainstream voice on AI and US intelligence.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Hoover Institution", role: "Morris Arnold and Nona Jean Cox Senior Fellow", current: true },
      { org: "Stanford HAI", role: "Associate Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Amy_Zegart",
    twitter: "AmyZegart",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI is transforming intelligence; national security institutions must adapt to AI as infrastructure.",
        quotes: [
          {
            text:
              "Intelligence agencies are now picking through huge haystacks for one or two needles of insight, and that's precisely the kind of project at which AI excels.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Spies, Lies, and Algorithms",
              url: "https://press.princeton.edu/books/hardcover/9780691147130/spies-lies-and-algorithms",
              medium: "book",
              publisher: "Princeton University Press",
              date: "2022-02-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ramana-kumar",
    name: "Ramana Kumar",
    tagline: "Google DeepMind safety researcher; formal verification",
    summary:
      "DeepMind safety researcher who works on formal verification, tampering incentives, and scalable oversight. Combines theorem-proving background with alignment research.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Technical contributor to safety research, particularly around formal verification and agent tampering incentives.",
        quotes: [
          {
            text:
              "Formal verification is under-used in AI safety. When you can prove a property rather than measure it, you should.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ramana Kumar, Alignment Forum",
              url: "https://www.alignmentforum.org/users/ramana-kumar",
              medium: "blog",
              publisher: "AI Alignment Forum",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
