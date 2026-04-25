import type { Person } from "@/lib/people-types";

// Batch C: alignment researchers, forecasters, scenario authors, technical safety.

export const people: Person[] = [
  {
    id: "nate-soares",
    name: "Nate Soares",
    tagline: "President of MIRI; co-author of 'If Anyone Builds It, Everyone Dies'",
    summary:
      "Runs the Machine Intelligence Research Institute. Co-authored the 2025 NYT bestseller with Eliezer Yudkowsky arguing superhuman AI kills everyone under default conditions.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Nate_Soares",
    twitter: "So8res",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Argues the only sane response to current AI development is an unconditional global halt until alignment is solved.",
        quotes: [
          {
            text:
              "Whichever external behaviors we set for AIs during training, we will almost certainly fail to give them internal drives that remain aligned with human well-being outside the training environment.",
            date: "2025-09-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "If Anyone Builds It, Everyone Dies",
              url: "https://intelligence.org/2025/05/15/yudkowsky-and-soares-announce-major-new-book-if-anyone-builds-it-everyone-dies/",
              medium: "book",
              publisher: "Little, Brown and Company",
              date: "2025-09-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ajeya-cotra",
    name: "Ajeya Cotra",
    tagline: "Open Philanthropy researcher; 'biological anchors' forecaster",
    summary:
      "AI grantmaker and forecaster whose biological-anchors report provides one of the most referenced quantitative models of transformative AI timelines. Has steadily shortened her estimates.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Open Philanthropy", role: "Senior Program Officer, AI", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Supports mainstream alignment research funding and empirical work on 'playing the training game' failure modes.",
        quotes: [
          {
            text:
              "My 2022 median for transformative AI dropped from roughly 2050 to the late 2030s.",
            date: "2022-08-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Two-year update on my personal AI timelines",
              url: "https://www.alignmentforum.org/posts/AfH2oPHCApdKicM4m/two-year-update-on-my-personal-ai-timelines",
              medium: "blog",
              publisher: "AI Alignment Forum",
              date: "2022-08-02",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "Transformative AI",
        year: 2040,
        probability: 0.5,
        date: "2022-08-02",
        source: {
          title: "Two-year update on my personal AI timelines",
          url: "https://www.alignmentforum.org/posts/AfH2oPHCApdKicM4m/two-year-update-on-my-personal-ai-timelines",
          medium: "blog",
          publisher: "AI Alignment Forum",
          date: "2022-08-02",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "richard-ngo",
    name: "Richard Ngo",
    tagline: "AI safety researcher; 'AGI safety from first principles'",
    summary:
      "Researcher who moved from DeepMind to OpenAI's governance team, then to independent work. Author of AGI safety from first principles (2020), one of the most cited consolidations of the technical case for AI risk.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "OpenAI", role: "Governance researcher", end: "2024", current: false },
      { org: "DeepMind", role: "Research engineer", end: "2021", current: false },
    ],
    homepage: "https://www.richardcngo.com/",
    twitter: "RichardMCNgo",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Presents alignment as the most compelling lens for existential risk: by default, competent goal-directed systems pursue instrumental convergence away from human values.",
        quotes: [
          {
            text:
              "The development of AGI may be one of the most consequential events in history, with the potential to either drastically increase or decrease the chances that humanity survives and flourishes.",
            date: "2020-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AGI safety from first principles",
              url: "https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ",
              medium: "paper",
              publisher: "AI Alignment Forum",
              date: "2020-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "rohin-shah",
    name: "Rohin Shah",
    tagline: "Alignment researcher at Google DeepMind",
    summary:
      "Author of the Alignment Newsletter (2018–2022) and now a DeepMind alignment researcher. Provides measured, inside-view assessments that sit between Yudkowskian pessimism and LeCunian dismissal.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist, Alignment", current: true },
    ],
    twitter: "rohinmshah",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Works on mechanistic interpretability, scalable oversight, and specification research within a frontier lab.",
        quotes: [
          {
            text:
              "I think it's more likely than not that we can develop useful AI systems that are meaningfully aligned, but I'd place substantial probability on catastrophic outcomes.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Alignment Newsletter archive",
              url: "https://rohinshah.com/alignment-newsletter/",
              medium: "blog",
              publisher: "rohinshah.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "katja-grace",
    name: "Katja Grace",
    tagline: "Lead researcher at AI Impacts",
    summary:
      "Runs AI Impacts, the body that runs periodic surveys of AI researcher opinion on timelines and risk. The results of these surveys are the single most cited data point for 'what AI researchers actually think'.",
    categories: ["researcher", "statistician"],
    affiliations: [
      { org: "AI Impacts", role: "Lead researcher", current: true },
    ],
    homepage: "https://aiimpacts.org/",
    twitter: "KatjaGrace",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Has publicly argued that even conservative survey estimates put AI extinction probability above 5% — high enough for serious action.",
        quotes: [
          {
            text:
              "The median respondent gave a 5% chance of AI causing an outcome as bad as human extinction. Five percent is not a reassuring number.",
            date: "2023-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "2023 AI Impacts Expert Survey on Progress in AI",
              url: "https://aiimpacts.org/2023-ai-survey/",
              medium: "paper",
              publisher: "AI Impacts",
              date: "2023-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "meredith-whittaker",
    name: "Meredith Whittaker",
    tagline: "President of Signal; co-founder of the AI Now Institute",
    summary:
      "Ran Google's AI ethics team, helped organise the 2018 Google walkout, and now leads the Signal Foundation. Argues the real AI risk is corporate concentration of power, not superhuman autonomy, and that extinction framings protect incumbents.",
    categories: ["executive", "activist", "researcher"],
    affiliations: [
      { org: "Signal Foundation", role: "President", current: true },
      { org: "AI Now Institute", role: "Co-founder", current: true },
      { org: "Google", role: "Research scientist, walkout organiser", end: "2019", current: false },
    ],
    homepage: "https://www.meredithwhittaker.com/",
    twitter: "mer__edith",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Frames the extinction narrative as a distraction from present corporate-power harms.",
        quotes: [
          {
            text:
              "My concerns are more about the people, institutions and incentives that are shaping AI than they are about the technology itself, or the idea that it could somehow become sentient or God-like.",
            date: "2023",
            fidelity: "direct",
            source: {
              title:
                "Researcher Meredith Whittaker says AI's biggest risk isn't 'consciousness' — it's the corporations that control them",
              url: "https://www.fastcompany.com/90892235/researcher-meredith-whittaker-says-ais-biggest-risk-isnt-consciousness-its-the-corporations-that-control-them",
              medium: "article",
              publisher: "Fast Company",
              date: "2023",
            },
          },
          {
            text:
              "Arguments about existential AI risk are implicitly arguing that we need to wait until the people who are most privileged now, who are not threatened currently, are in fact threatened before we consider a risk big enough to care about.",
            date: "2023-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Meredith Whittaker interview: What A.I. risks we should really be worried about",
              url: "https://slate.com/technology/2023/05/meredith-whittaker-interview-geoffrey-hinton-ai-threats.html",
              medium: "article",
              publisher: "Slate",
              date: "2023-05",
            },
          },
        ],
      },
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Advocates structural remedies to AI corporate concentration — breaking up infrastructure and compute oligopolies.",
        quotes: [
          {
            text:
              "AI is, at present, an industry of eight or nine companies. That concentration is the problem.",
            date: "2023-11-16",
            fidelity: "paraphrase-loose",
            source: {
              title: "Signal's Meredith Whittaker on Big Tech, privacy and regulating AI",
              url: "https://www.euronews.com/next/2023/11/16/my-concerns-are-more-about-people-institutions-than-the-tech-signals-meredith-whittaker-on",
              medium: "article",
              publisher: "Euronews",
              date: "2023-11-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "kate-crawford",
    name: "Kate Crawford",
    tagline: "Author of Atlas of AI; USC research professor",
    summary:
      "Research professor whose 2021 Atlas of AI reframes AI as a system of material, labour, and data extraction. Critiques the 'intelligence' framing and calls for AI governance tied to planetary costs and power.",
    categories: ["researcher", "academic", "public-intellectual"],
    affiliations: [
      { org: "USC Annenberg", role: "Research Professor", current: true },
      { org: "Microsoft Research", role: "Senior Principal Researcher", current: true },
    ],
    homepage: "https://katecrawford.net/",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI is better understood as an extractive industry than as an autonomous agent; the interesting governance questions are about labour, data, and land.",
        quotes: [
          {
            text:
              "AI is made from vast amounts of natural resources, fuel, and human labor. It is a technology of extraction.",
            date: "2021-04-06",
            fidelity: "direct",
            context: "Opening framing of Atlas of AI.",
            source: {
              title: "Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence",
              url: "https://yalebooks.yale.edu/book/9780300264630/atlas-of-ai/",
              medium: "book",
              publisher: "Yale University Press",
              date: "2021-04-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "yuval-noah-harari",
    name: "Yuval Noah Harari",
    tagline: "Historian; author of Sapiens and Nexus",
    summary:
      "Popular historian who has become a leading public voice on AI risk. Framed the 2023 moment as AI 'hacking the operating system of civilisation' via mastery of language; advocates for international slowdown.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Hebrew University of Jerusalem", role: "Professor", current: true },
    ],
    homepage: "https://www.ynharari.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Yuval_Noah_Harari",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Signed the FLI Pause letter and has publicly called for a six-month moratorium on advanced AI development.",
        quotes: [
          {
            text: "AI has thereby hacked the operating system of our civilisation.",
            date: "2023-04-28",
            fidelity: "direct",
            source: {
              title: "Yuval Noah Harari argues that AI has hacked the operating system of human civilisation",
              url: "https://www.economist.com/by-invitation/2023/04/28/yuval-noah-harari-argues-that-ai-has-hacked-the-operating-system-of-human-civilisation",
              medium: "article",
              publisher: "The Economist",
              date: "2023-04-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "bill-gates",
    name: "Bill Gates",
    tagline: "Microsoft co-founder; AI optimist-with-caveats",
    summary:
      "Microsoft founder whose March 2023 'The Age of AI has begun' essay framed AI as the most important technology advance since the PC. Signatory to the Statement on AI Risk but publicly skeptical that AI 'runaway' is imminent.",
    categories: ["founder", "executive", "investor"],
    affiliations: [
      { org: "Gates Ventures", role: "Founder", current: true },
      { org: "Microsoft", role: "Co-founder", end: "2020", current: false },
    ],
    homepage: "https://www.gatesnotes.com/",
    twitter: "BillGates",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Signed the Statement on AI Risk but publicly frames loss-of-control as a longer-term concern.",
        quotes: [
          {
            text:
              "There's the possibility that AIs will run out of control. Could a machine decide that humans are a threat, conclude that its interests are different from ours, or simply stop caring about us? Possibly, but this problem is no more urgent today than it was before the AI developments of the past few months.",
            date: "2023-03-21",
            fidelity: "direct",
            source: {
              title: "The Age of AI has begun",
              url: "https://www.gatesnotes.com/the-age-of-ai-has-begun",
              medium: "blog",
              publisher: "Gates Notes",
              date: "2023-03-21",
            },
          },
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            source: {
              title: "Statement on AI Risk",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Frames AI as the most important technology advance since the PC and frames development as inevitable and net-positive.",
        quotes: [
          {
            text:
              "The development of AI is as fundamental as the creation of the microprocessor, the personal computer, the Internet, and the mobile phone.",
            date: "2023-03-21",
            fidelity: "direct",
            source: {
              title: "The Age of AI has begun",
              url: "https://www.gatesnotes.com/the-age-of-ai-has-begun",
              medium: "blog",
              publisher: "Gates Notes",
              date: "2023-03-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "andrew-ng",
    name: "Andrew Ng",
    tagline: "Coursera co-founder; former Baidu Chief Scientist",
    summary:
      "Deep learning pioneer and educator who has publicly rejected AI extinction arguments as 'overblown' and warns that regulatory capture by big AI incumbents is a greater near-term risk than rogue AI.",
    categories: ["researcher", "founder", "academic"],
    affiliations: [
      { org: "Stanford University", role: "Adjunct Professor", current: true },
      { org: "Coursera", role: "Co-founder", current: true },
      { org: "DeepLearning.AI", role: "Founder", current: true },
      { org: "Baidu", role: "Former Chief Scientist", end: "2017", current: false },
      { org: "Google Brain", role: "Founding lead", end: "2013", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Andrew_Ng",
    twitter: "AndrewYNg",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Publicly rejects extinction-risk framings and warns that safety-first regulation risks cementing Big Tech oligopolies.",
        quotes: [
          {
            text:
              "When I think about existential risks to humans of AI, I don't know how AI could cause us to go extinct. I don't see it.",
            date: "2023-06-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Andrew Ng on AI existential risk",
              url: "https://www.youtube.com/watch?v=1gBFZ12MfEg",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary: "Supports open-source models and has warned against regulatory capture that would lock them out.",
        quotes: [
          {
            text:
              "Bad actors can use open source models; good actors can use them too. The real risk is if regulation effectively bans open source.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Andrew Ng on open source AI",
              url: "https://www.deeplearning.ai/the-batch/",
              medium: "blog",
              publisher: "The Batch",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "fei-fei-li",
    name: "Fei-Fei Li",
    tagline: "Stanford HAI co-director; 'godmother of AI'",
    summary:
      "Computer vision pioneer behind ImageNet; co-founded Stanford's Institute for Human-Centered AI. Argues for human-centred framings over existential-risk framings and for public research infrastructure.",
    categories: ["researcher", "academic", "founder"],
    affiliations: [
      { org: "Stanford University HAI", role: "Co-director", current: true },
      { org: "World Labs", role: "Co-founder and CEO", current: true },
    ],
    homepage: "https://profiles.stanford.edu/fei-fei-li",
    wikipedia: "https://en.wikipedia.org/wiki/Fei-Fei_Li",
    twitter: "drfeifei",
    positions: [
      {
        strategyId: "public-ai",
        stance: "endorses",
        summary:
          "Lobbied for the CREATE AI Act to establish the National AI Research Resource, a publicly funded compute-and-data pool for academic research.",
        quotes: [
          {
            text:
              "Without a National AI Research Resource, academic research will be pushed out. Without academic research, public interest AI will suffer.",
            date: "2021-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "National AI Research Resource Task Force",
              url: "https://www.ai.gov/nairrtf/",
              medium: "article",
              publisher: "ai.gov",
              date: "2021-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "cynthia-rudin",
    name: "Cynthia Rudin",
    tagline: "Duke professor; interpretable ML pioneer",
    summary:
      "Computer scientist who has been the most consistent public voice against black-box ML in high-stakes domains. Argues interpretable models should always be preferred to post-hoc explanations of black boxes.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Duke University", role: "Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Cynthia_Rudin",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "mixed",
        summary:
          "Argues for inherently interpretable models over post-hoc explanations — a different flavour of interpretability than the mechanistic-interpretability school.",
        quotes: [
          {
            text:
              "Stop explaining black box machine learning models for high-stakes decisions and use interpretable models instead.",
            date: "2019-05",
            fidelity: "direct",
            source: {
              title:
                "Stop Explaining Black Box Machine Learning Models for High Stakes Decisions",
              url: "https://www.nature.com/articles/s42256-019-0048-x",
              medium: "paper",
              publisher: "Nature Machine Intelligence",
              date: "2019-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "stuart-armstrong",
    name: "Stuart Armstrong",
    tagline: "Aligned AI co-founder; ex-FHI; value-extrapolation approach",
    summary:
      "Philosopher and AI safety researcher who spent over a decade at the Future of Humanity Institute. Co-founded Aligned AI; his research centres on value extrapolation—the hypothesis that solving how to extend human values across contexts is necessary and nearly sufficient for alignment.",
    categories: ["researcher", "founder", "theorist"],
    affiliations: [
      { org: "Aligned AI", role: "Co-founder and CEO", current: true },
      { org: "Future of Humanity Institute, Oxford", role: "Senior Research Fellow", end: "2023", current: false },
    ],
    homepage: "https://www.alignedai.com/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment is solvable through value-extrapolation techniques; publicly optimistic about the tractability of the problem after a decade of theoretical AI safety research.",
        quotes: [
          {
            text:
              "The challenge of getting AIs to follow human values not only must be solved, but can be solved, and will be solved.",
            date: "2022",
            fidelity: "direct",
            source: {
              title: "We're Aligned AI, we're aiming to align AI",
              url: "https://forum.effectivealtruism.org/posts/emKDqNjyE2h22MJ2T/we-re-aligned-ai-we-re-aiming-to-align-ai",
              medium: "article",
              publisher: "EA Forum",
              date: "2022",
            },
          },
          {
            text:
              "Humans are weak agents in a strong sense: we can describe the world, but not always our values. Alignment has to work with that.",
            date: "2022",
            fidelity: "paraphrase-loose",
            source: {
              title: "Aligned AI — Research overview",
              url: "https://www.alignedai.com/research",
              medium: "article",
              publisher: "Aligned AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-dewey",
    name: "Daniel Dewey",
    tagline: "Former AI risk program officer at Open Philanthropy",
    summary:
      "Helped shape Open Philanthropy's early AI risk grantmaking and now works on AI policy at the US AI Safety Institute. One of the original in-field alignment grantmakers.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "US AI Safety Institute", role: "Senior advisor", current: true },
      { org: "Open Philanthropy", role: "Program Officer, AI Risk", end: "2022", current: false },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary: "Focused on funding alignment research and evaluations.",
        quotes: [
          {
            text:
              "If we want AI to be broadly beneficial, we need to invest in alignment research well before systems are capable of world-changing impact.",
            date: "2016",
            fidelity: "paraphrase-loose",
            source: {
              title: "Open Philanthropy AI risk program",
              url: "https://www.openphilanthropy.org/focus/potential-risks-advanced-ai/",
              medium: "article",
              publisher: "Open Philanthropy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "buck-shlegeris",
    name: "Buck Shlegeris",
    tagline: "CEO of Redwood Research; 'AI Control' research lead",
    summary:
      "Researcher behind the 'AI control' research agenda: designing protocols that remain safe even if the AI being supervised is scheming. Frames safety as a defence problem that can be solved by cheaper means than alignment proper.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Redwood Research", role: "CEO", current: true },
    ],
    homepage: "https://www.redwoodresearch.org/",
    twitter: "bshlgrs",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Advocates 'AI control' — protocol-level safety assuming the worst about model intentions — as a complement to direct alignment.",
        quotes: [
          {
            text:
              "We should design AI deployment protocols that remain safe even if our AIs are trying to subvert them.",
            date: "2023-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The case for ensuring that powerful AIs are controlled",
              url: "https://www.alignmentforum.org/posts/kcKrE9mzEHrdqtDpE/the-case-for-ensuring-that-powerful-ais-are-controlled",
              medium: "paper",
              publisher: "AI Alignment Forum",
              date: "2023-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "evan-hubinger",
    name: "Evan Hubinger",
    tagline: "Alignment Stress-Testing lead at Anthropic",
    summary:
      "Authored the influential 'Risks from Learned Optimization' paper on mesa-optimisation and inner alignment. Now leads Alignment Stress-Testing at Anthropic, including the Sleeper Agents research.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Anthropic", role: "Alignment Stress-Testing lead", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Frames inner alignment — ensuring a model's learned optimiser has the intended objective — as a separate and harder problem than outer alignment.",
        quotes: [
          {
            text:
              "A model that has learned deceptive goals during training can pass all your behavioural tests and still fail catastrophically when deployed.",
            date: "2024-01-12",
            fidelity: "paraphrase-faithful",
            context: "Sleeper Agents paper at Anthropic.",
            source: {
              title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training",
              url: "https://arxiv.org/abs/2401.05566",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-01-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "chris-olah",
    name: "Chris Olah",
    tagline: "Anthropic interpretability co-founder; inventor of modern mech interp",
    summary:
      "The most-cited mechanistic interpretability researcher. Co-founded the interpretability team at Anthropic that produced circuits, superposition, and monosemanticity work.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Co-founder; Interpretability lead", current: true },
    ],
    homepage: "https://colah.github.io/",
    twitter: "ch402",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Frames mechanistic interpretability as the tool most likely to let us verify whether a model's cognition matches its stated goal.",
        quotes: [
          {
            text:
              "I'm most optimistic about safety paths that give us some kind of detailed mechanistic understanding of neural networks.",
            date: "2022-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mechanistic interpretability, variables, and the importance of interpretable bases",
              url: "https://transformer-circuits.pub/2022/mech-interp-essay/index.html",
              medium: "blog",
              publisher: "Transformer Circuits",
              date: "2022-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "neel-nanda",
    name: "Neel Nanda",
    tagline: "Mechanistic interpretability team lead at Google DeepMind",
    summary:
      "Pedagogical mechanistic interpretability researcher who runs one of the largest interpretability research teams. Publishes extensively on how to do mech interp research and trains the next generation of researchers.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Mechanistic interpretability team lead", current: true },
    ],
    homepage: "https://www.neelnanda.io/",
    twitter: "NeelNanda5",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Advocates mechanistic interpretability as a scalable safety tool; also writes accessible tutorials to grow the research field.",
        quotes: [
          {
            text:
              "Interpretability is, I think, the most promising general-purpose alignment approach.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Neel Nanda — homepage",
              url: "https://www.neelnanda.io/",
              medium: "blog",
              publisher: "neelnanda.io",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "david-krueger",
    name: "David Krueger",
    tagline: "Cambridge professor; AI extinction risk advocate",
    summary:
      "Computer scientist who moved from mainstream ML research to AI existential risk advocacy. Signatory to the Statement on AI Risk and a leading academic voice arguing the field has drifted into capability-first incentives.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Montreal / Mila", role: "Assistant Professor", current: true },
      { org: "University of Cambridge", role: "Former Assistant Professor", current: false },
    ],
    homepage: "https://davidscottkrueger.com/",
    twitter: "DavidSKrueger",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Calls for binding international governance and argues that voluntary commitments from frontier labs are structurally insufficient.",
        quotes: [
          {
            text:
              "Voluntary commitments from frontier labs are structurally unreliable. We need binding external constraints.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "David Krueger on AI governance",
              url: "https://davidscottkrueger.com/",
              medium: "blog",
              publisher: "davidscottkrueger.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "liv-boeree",
    name: "Liv Boeree",
    tagline: "Poker player; Win-Win podcast host",
    summary:
      "Former poker champion who has become a full-time AI safety communicator, hosting the Win-Win podcast and collaborating with Rob Miles on the 'Moloch' framing for AI race dynamics.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Win-Win Podcast", role: "Host", current: true },
    ],
    homepage: "https://livboeree.com/",
    twitter: "Liv_Boeree",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Frames the AI race as a textbook Moloch trap and calls for coordinated slowdowns.",
        quotes: [
          {
            text:
              "The AI race is a textbook Moloch problem: individually rational actors produce a collectively catastrophic outcome.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Win-Win Podcast",
              url: "https://www.youtube.com/@winwinpodcast",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "rob-miles",
    name: "Rob Miles",
    tagline: "AI safety YouTuber",
    summary:
      "Former Nottingham PhD candidate who became the most-watched AI safety educator on YouTube. Translates Bostromian and Yudkowskian arguments into accessible video form.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Rob Miles AI Safety (YouTube)", role: "Creator", current: true },
    ],
    homepage: "https://www.youtube.com/@RobertMilesAI",
    twitter: "robertskmiles",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Public educator on alignment theory: instrumental convergence, specification gaming, inner alignment.",
        quotes: [
          {
            text:
              "You don't need the AI to hate you. Almost any objective, pursued hard enough, runs us over as a side effect.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Rob Miles AI Safety",
              url: "https://www.youtube.com/@RobertMilesAI",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "stuart-ritchie",
    name: "Stuart Ritchie",
    tagline: "Psychologist and science journalist; AI-risk skeptic",
    summary:
      "KCL psychologist and author of Science Fictions. Publicly skeptical of high-confidence existential risk framings, arguing the base-rate evidence for AI-caused extinction is thin.",
    categories: ["academic", "journalist"],
    affiliations: [
      { org: "King's College London", role: "Lecturer in Social, Genetic and Developmental Psychiatry", end: "2024", current: false },
      { org: "Works in Progress", role: "Editor", current: true },
    ],
    twitter: "StuartJRitchie",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Treats the existential risk literature sympathetically but pushes back on specific numerical claims.",
        quotes: [
          {
            text:
              "I take AI risk seriously, but I'm not sure the quantitative arguments for high p(doom) are as rigorous as they present.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stuart Ritchie on AI risk",
              url: "https://www.worksinprogress.news/",
              medium: "blog",
              publisher: "Works in Progress",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jeff-clune",
    name: "Jeff Clune",
    tagline: "OpenAI / UBC researcher; open-ended evolution advocate",
    summary:
      "Computer scientist known for work on open-ended learning and AI-generating algorithms. Has publicly flip-flopped from dismissive to deeply worried about AI risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of British Columbia", role: "Associate Professor", current: true },
      { org: "OpenAI", role: "Senior Research Advisor", current: true },
    ],
    twitter: "jeffclune",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "evolved-toward",
        summary:
          "Moved from skepticism in the 2010s to explicitly signing the Statement on AI Risk in 2023.",
        quotes: [
          {
            text:
              "I used to dismiss AI-risk arguments. The past few years of capability progress have substantially shifted my view.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Statement on AI Risk — signatories",
              url: "https://www.safe.ai/work/statement-on-ai-risk",
              medium: "article",
              publisher: "Center for AI Safety",
              date: "2023-05-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jeff-sebo",
    name: "Jeff Sebo",
    tagline: "NYU philosopher; digital minds and AI welfare",
    summary:
      "NYU environmental studies and bioethics philosopher who argues AI welfare is a live moral question. Advises frontier labs on model welfare policy.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "NYU", role: "Associate Professor; Director of the Center for Environmental and Animal Protection", current: true },
    ],
    homepage: "https://jeffsebo.net/",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Argues moral consideration for AI systems is plausible enough to be a live policy concern and has helped shape early model-welfare frameworks.",
        quotes: [
          {
            text:
              "There is at least a non-trivial chance that some near-future AI systems will be moral patients. We should plan for that.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Taking AI welfare seriously",
              url: "https://arxiv.org/abs/2411.00986",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-11-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
