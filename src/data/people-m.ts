import type { Person } from "@/lib/people-types";

// Batch M: political-economy critics and additional cross-disciplinary voices.

export const people: Person[] = [
  {
    id: "naomi-klein",
    name: "Naomi Klein",
    tagline: "Author of This Changes Everything; AI-and-climate critic",
    summary:
      "Journalist and author of The Shock Doctrine and This Changes Everything. Argues that 'AI hallucinations' are a distraction: the actual hallucinations are the promises AI CEOs make to investors and governments.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "University of British Columbia", role: "Associate Professor of Climate Justice", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Naomi_Klein",
    twitter: "NaomiAKlein",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI is a tool of dispossession and despoilation, and that the 'hallucination' is not the model but the industry's promises.",
        quotes: [
          {
            text:
              "In a reality of hyper-concentrated power and wealth, AI is much more likely to become a tool of further dispossession and despoilation.",
            date: "2023-05-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI machines aren't 'hallucinating'. But their makers are.",
              url: "https://www.theguardian.com/commentisfree/2023/may/08/ai-machines-hallucinating-naomi-klein",
              medium: "article",
              publisher: "The Guardian",
              date: "2023-05-08",
            },
          },
          {
            text:
              "A world of deep fakes, mimicry loops and worsening inequality is not an inevitability but a set of policy choices.",
            date: "2023-05-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI machines aren't 'hallucinating'. But their makers are.",
              url: "https://naomiklein.org/ai-machines-arent-hallucinating/",
              medium: "article",
              publisher: "Naomi Klein",
              date: "2023-05-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "marietje-schaake",
    name: "Marietje Schaake",
    tagline: "Former MEP; Stanford Cyber Policy Center fellow; UN AI advisory body",
    summary:
      "Former EU parliamentarian, now at Stanford's Cyber Policy Center. Serves on the UN Secretary-General's AI Advisory Body. Argues corporate capture of AI governance is the primary democratic threat.",
    categories: ["policy"],
    affiliations: [
      { org: "Stanford Cyber Policy Center", role: "International Policy Fellow", current: true },
      { org: "Stanford HAI", role: "International Policy Fellow", current: true },
      { org: "European Parliament", role: "Former MEP", end: "2019", current: false },
      { org: "UN AI Advisory Body", role: "Member", current: true },
    ],
    homepage: "https://cyber.fsi.stanford.edu/people/marietje-schaake",
    twitter: "MarietjeSchaake",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues corporate capture of AI governance is the most urgent democratic concern; pushes for international institutions that can audit and regulate frontier labs.",
        quotes: [
          {
            text:
              "AI governance is being written by the companies being governed. That is an indefensible arrangement.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Tech Coup",
              url: "https://www.marietjeschaake.eu/",
              medium: "book",
              publisher: "Princeton University Press",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cory-doctorow",
    name: "Cory Doctorow",
    tagline: "EFF special advisor; 'enshittification' coiner",
    summary:
      "Long-time digital rights activist and EFF advisor. Argues AI is being driven by the same 'enshittification' dynamic that decayed social platforms, and that capture of AI policy by incumbents will make it worse.",
    categories: ["activist", "journalist", "public-intellectual"],
    affiliations: [
      { org: "Electronic Frontier Foundation", role: "Special Advisor", current: true },
    ],
    homepage: "https://pluralistic.net/",
    wikipedia: "https://en.wikipedia.org/wiki/Cory_Doctorow",
    twitter: "doctorow",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues the actual AI policy question is about competition, labour, and interoperability, not existential risk.",
        quotes: [
          {
            text:
              "AI cannot do your job, but an AI salesman can 100 percent convince your boss to fire you and replace you with an AI that can't do your job.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Cory Doctorow on AI and enshittification",
              url: "https://pluralistic.net/",
              medium: "blog",
              publisher: "Pluralistic",
            },
          },
          {
            text:
              "AI is the asbestos we are shoveling into the walls of our society and our descendants will be digging it out for generations.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Cory Doctorow on AI",
              url: "https://pluralistic.net/",
              medium: "blog",
              publisher: "Pluralistic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "evgeny-morozov",
    name: "Evgeny Morozov",
    tagline: "Belarusian scholar; 'solutionism' critic",
    summary:
      "Writer on the politics of tech; coined 'technological solutionism'. Argues Silicon Valley AI framings systematically obscure political-economy questions.",
    categories: ["journalist", "academic", "public-intellectual"],
    affiliations: [
      { org: "Independent scholar", role: "Writer and researcher", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Evgeny_Morozov",
    twitter: "evgenymorozov",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues the mainstream AI narrative is a form of solutionism that benefits incumbents and obscures the political choices driving AI.",
        quotes: [
          {
            text:
              "There is no such thing as 'AI'. There is only a set of political-economic choices about how data, labour, and capital are organised.",
            date: "2023-06-30",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The True Threat of Artificial Intelligence",
              url: "https://www.nytimes.com/2023/06/30/opinion/artificial-intelligence-danger.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2023-06-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ruha-benjamin",
    name: "Ruha Benjamin",
    tagline: "Princeton sociologist; 'Race After Technology'",
    summary:
      "Princeton sociologist whose 2019 Race After Technology coined 'the New Jim Code', the way digital technologies reinforce racial hierarchies. Central voice in the civil-rights framing of AI governance.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Princeton University", role: "Alexander Stewart 1886 Professor of African American Studies", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ruha_Benjamin",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI systems routinely reinforce racial hierarchies; governance must centre civil rights and lived experience.",
        quotes: [
          {
            text:
              "The New Jim Code: the employment of new technologies that reflect and reproduce existing inequities but that are promoted and perceived as more objective or progressive than the discriminatory systems of a previous era.",
            date: "2019-07",
            fidelity: "direct",
            source: {
              title: "Race After Technology",
              url: "https://www.ruhabenjamin.com/race-after-technology",
              medium: "book",
              publisher: "Polity Press",
              date: "2019-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jeremie-harris",
    name: "Jeremie Harris",
    tagline: "Gladstone AI co-founder; AI state policy advisor",
    summary:
      "Co-founder of Gladstone AI, a US government contractor producing AI risk assessments. Authored the 2024 US State Department commissioned report on frontier AI risks.",
    categories: ["policy", "founder"],
    affiliations: [
      { org: "Gladstone AI", role: "Co-founder", current: true },
    ],
    twitter: "jeremiecharris",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Authored a US State Department-commissioned report warning that advanced AI could pose catastrophic national-security risks.",
        quotes: [
          {
            text:
              "Our report finds that advanced AI could pose catastrophic risks to national security. Urgent action is needed.",
            date: "2024-03-11",
            fidelity: "paraphrase-faithful",
            source: {
              title: "An Action Plan to Increase the Safety and Security of Advanced AI",
              url: "https://www.gladstone.ai/action-plan",
              medium: "paper",
              publisher: "Gladstone AI / US State Department",
              date: "2024-03-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "edward-harris",
    name: "Edward Harris",
    tagline: "Gladstone AI co-founder",
    summary:
      "Co-founder of Gladstone AI with his brother Jeremie. Contributed to the 2024 US State Department-commissioned action plan on frontier AI risks.",
    categories: ["policy", "founder"],
    affiliations: [
      { org: "Gladstone AI", role: "Co-founder", current: true },
    ],
    twitter: "edwardjharris",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Authored policy recommendations including export controls on frontier compute and mandatory model evaluations.",
        quotes: [
          {
            text:
              "The US should create a frontier AI regulatory agency with compute licensing authority.",
            date: "2024-03-11",
            fidelity: "paraphrase-faithful",
            source: {
              title: "An Action Plan to Increase the Safety and Security of Advanced AI",
              url: "https://www.gladstone.ai/action-plan",
              medium: "paper",
              publisher: "Gladstone AI / US State Department",
              date: "2024-03-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "karen-hao",
    name: "Karen Hao",
    tagline: "Atlantic staff writer; AI industry critic",
    summary:
      "Journalist covering AI for The Atlantic and previously MIT Technology Review. Her reporting on OpenAI, labour in the AI supply chain, and frontier-lab culture has shaped mainstream industry understanding.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Staff Writer", current: true },
    ],
    twitter: "_KarenHao",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Reports on AI as a political and labour phenomenon; consistently surfaces worker and Global South perspectives.",
        quotes: [
          {
            text:
              "The AI narrative being marketed to the world is a Silicon Valley story. The actual AI supply chain is a global labour story.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Karen Hao at The Atlantic",
              url: "https://www.theatlantic.com/author/karen-hao/",
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
    id: "adrienne-lafrance",
    name: "Adrienne LaFrance",
    tagline: "The Atlantic executive editor; technology critic",
    summary:
      "Executive editor at The Atlantic whose editorial direction has framed AI coverage around democracy, epistemic integrity, and civic institutions.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Executive Editor", current: true },
    ],
    twitter: "AdrienneLaF",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance around democratic epistemics and civic resilience rather than around extinction or optimism.",
        quotes: [
          {
            text:
              "The question isn't whether AI will change democracy. It is whether we will have functioning democracy afterwards.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Atlantic editorial direction",
              url: "https://www.theatlantic.com/author/adrienne-lafrance/",
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
    id: "peter-railton",
    name: "Peter Railton",
    tagline: "Michigan ethicist; AI moral learning researcher",
    summary:
      "Michigan moral philosopher who has argued that reinforcement learning analogues in AI could form the basis for genuinely moral AI agents. Engages AI safety philosophically.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Michigan", role: "Arthur F. Thurnau Professor of Philosophy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Peter_Railton",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues that moral learning analogues in AI are a live research program for alignment.",
        quotes: [
          {
            text:
              "Moral learning in humans draws on the same reinforcement-learning machinery we are now building into AI systems. That's not an accident; it is the alignment problem.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Peter Railton on moral learning and AI",
              url: "https://sites.lsa.umich.edu/prailton/",
              medium: "article",
              publisher: "University of Michigan",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kate-sills",
    name: "Kate Sills",
    tagline: "AI economic systems and multi-agent markets researcher",
    summary:
      "Applied cryptographer and cooperative-AI researcher who works on incentive-compatible market mechanisms for AI agents. Represents the applied multi-agent governance corner.",
    categories: ["researcher"],
    affiliations: [
      { org: "Independent", role: "Researcher", current: true },
    ],
    twitter: "katelynsills",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Works on incentive-compatible market mechanisms for agent systems; pragmatic middle ground between doom and accel.",
        quotes: [
          {
            text:
              "The multi-agent economy is already emerging. We need primitives for incentive-compatible cooperation between AIs.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kate Sills on cooperative AI",
              url: "https://katesills.xyz/",
              medium: "article",
              publisher: "katesills.xyz",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ian-hogarth",
    name: "Ian Hogarth",
    tagline: "Chair of UK AI Safety Institute (2023–2025); investor",
    summary:
      "Angel investor and former chair of the UK AI Safety Institute, which he helped stand up from the November 2023 Bletchley summit. Co-author of the annual 'State of AI Report'.",
    categories: ["policy", "investor"],
    affiliations: [
      { org: "UK AI Safety Institute", role: "Chair", end: "2025", current: false },
      { org: "Plural", role: "Partner", current: true },
    ],
    twitter: "soundboy",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Built the UK AI Safety Institute as the first national body dedicated to frontier evaluations.",
        quotes: [
          {
            text:
              "We must slow down the race to God-like AI.",
            date: "2023-04-13",
            fidelity: "direct",
            source: {
              title: "We must slow down the race to God-like AI",
              url: "https://www.ft.com/content/03895dc4-a3b7-481e-95cc-336a524f2ac2",
              medium: "article",
              publisher: "Financial Times",
              date: "2023-04-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nathan-benaich",
    name: "Nathan Benaich",
    tagline: "State of AI Report co-author; Air Street Capital founder",
    summary:
      "Investor and long-time collaborator with Ian Hogarth on the annual State of AI Report. Frames AI as pragmatic market technology; less focused on extinction framings.",
    categories: ["investor", "journalist"],
    affiliations: [
      { org: "Air Street Capital", role: "Founder", current: true },
    ],
    twitter: "nathanbenaich",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Publishes the State of AI Report annually, tracking trends in capability, deployment, and policy.",
        quotes: [
          {
            text:
              "AI has moved from a research topic to a general-purpose technology powering a new economic wave.",
            date: "2024-10-10",
            fidelity: "paraphrase-loose",
            source: {
              title: "State of AI Report 2024",
              url: "https://www.stateof.ai/",
              medium: "paper",
              publisher: "Air Street Capital",
              date: "2024-10-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hugh-zhang",
    name: "Hugh Zhang",
    tagline: "Epoch AI researcher",
    summary:
      "Machine learning researcher at Epoch AI who has published on reproducibility of capability benchmarks and the scaling-data bottleneck.",
    categories: ["researcher"],
    affiliations: [
      { org: "Epoch AI", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues capability evaluations need to be reproducible, publicly verifiable, and independent.",
        quotes: [
          {
            text:
              "Benchmark reproducibility is an underrated governance infrastructure question.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Epoch AI",
              url: "https://epoch.ai/",
              medium: "article",
              publisher: "Epoch AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephanie-zhan",
    name: "Stephanie Zhan",
    tagline: "Sequoia Capital partner; AI investor",
    summary:
      "Sequoia partner who has publicly written about the economic transformation AI will bring. Represents the VC perspective that capability progress is the story.",
    categories: ["investor"],
    affiliations: [
      { org: "Sequoia Capital", role: "Partner", current: true },
    ],
    twitter: "stephzhan",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "VC-grade optimism on AI's transformative deployment.",
        quotes: [
          {
            text:
              "We are investing on the premise that AI is the largest economic transformation in a generation.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sequoia Capital AI perspectives",
              url: "https://www.sequoiacap.com/article/",
              medium: "article",
              publisher: "Sequoia Capital",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
