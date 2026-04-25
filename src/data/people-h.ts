import type { Person } from "@/lib/people-types";

// Batch H: more industry executives, international voices, additional forecasters.

export const people: Person[] = [
  {
    id: "jensen-huang",
    name: "Jensen Huang",
    tagline: "CEO of NVIDIA; supplier of the frontier AI compute stack",
    summary:
      "Leads the company that makes the GPUs training every frontier model. Publicly predicts AGI in five years on narrow test-based definitions while downplaying extinction framings.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "NVIDIA", role: "CEO and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jensen_Huang",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Publicly optimistic about AI's trajectory and downplays existential framings; frames NVIDIA's role as enabling everyone to build AI.",
        quotes: [
          {
            text:
              "If we specified AGI to be something very specific — a set of tests where a software program can do very well — I believe we will get there within 5 years.",
            date: "2024-03-19",
            fidelity: "direct",
            context: "Stanford economic forum comments during the NVIDIA GTC 2024 week.",
            source: {
              title:
                "Nvidia's Jensen Huang says AI hallucinations are solvable, artificial general intelligence is 5 years away",
              url: "https://techcrunch.com/2024/03/19/agi-and-hallucinations/",
              medium: "article",
              publisher: "TechCrunch",
              date: "2024-03-19",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "Narrowly defined AGI (bar exam, logic tests)",
        year: 2029,
        probability: 0.5,
        date: "2024-03-19",
        source: {
          title: "Nvidia CEO Jensen Huang AGI 5 years quote",
          url: "https://techcrunch.com/2024/03/19/agi-and-hallucinations/",
          medium: "article",
          publisher: "TechCrunch",
          date: "2024-03-19",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "emmanuel-macron",
    name: "Emmanuel Macron",
    tagline: "President of France; hosted the 2025 Paris AI Action Summit",
    summary:
      "Convened the 2025 Paris AI Action Summit and announced a €109B French AI investment. Frames France as pursuing a 'third way' between the US and China — sovereign, open, and regulation-aware but pro-deployment.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of France", role: "President", current: true },
    ],
    twitter: "EmmanuelMacron",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Pushes French and European AI sovereignty via a 'third way' framework that resists both US-style deregulation and Chinese state control.",
        quotes: [
          {
            text:
              "AI in Europe must champion a model of society that we believe in: plural, open, generous, free, fair.",
            date: "2025-02-11",
            fidelity: "direct",
            source: {
              title:
                "Statement on Inclusive and Sustainable Artificial Intelligence for People and the Planet",
              url: "https://www.elysee.fr/en/emmanuel-macron/2025/02/11/statement-on-inclusive-and-sustainable-artificial-intelligence-for-people-and-the-planet",
              medium: "talk",
              publisher: "Élysée",
              date: "2025-02-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "kai-fu-lee",
    name: "Kai-Fu Lee",
    tagline: "Sinovation Ventures founder; AI Superpowers author",
    summary:
      "Former Google China head and leading Chinese VC. 2018 book AI Superpowers framed the field as a US-China two-horse race and argued China's data advantage would let it dominate.",
    categories: ["investor", "executive", "founder"],
    affiliations: [
      { org: "Sinovation Ventures", role: "Chairman and CEO", current: true },
      { org: "01.AI", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kai-Fu_Lee",
    twitter: "kaifulee",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Framed AI as a two-superpower contest; now runs a Chinese foundation-model company as part of that competition.",
        quotes: [
          {
            text:
              "If data is the new oil, then China is the new Saudi Arabia.",
            date: "2018-09-25",
            fidelity: "direct",
            source: {
              title: "AI Superpowers: China, Silicon Valley, and the New World Order",
              url: "https://www.aisuperpowers.com/",
              medium: "book",
              publisher: "Houghton Mifflin Harcourt",
              date: "2018-09-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "geoffrey-miller",
    name: "Geoffrey Miller",
    tagline: "UNM evolutionary psychologist; AGI pause advocate",
    summary:
      "Evolutionary psychologist who has become a vocal public advocate for pausing AGI research. Frames the continued race as ethically reckless.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of New Mexico", role: "Associate Professor of Psychology", current: true },
    ],
    twitter: "primalpoly",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Publicly advocates for a moratorium on advanced AI; characterises current AGI pursuit as 'reckless and dangerous and evil and stupid'.",
        quotes: [
          {
            text:
              "Continued pursuit of AGI capabilities is reckless and dangerous and evil and stupid.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Top Professor Condemns AGI Development: 'It's Frankly Evil'",
              url: "https://lironshapira.substack.com/p/top-professor-condemns-agi-development",
              medium: "podcast",
              publisher: "Doom Debates (Liron Shapira)",
              date: "2024",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.5,
        date: "2024",
        definition: "~50% p(doom) with wide error bars (5–80%).",
        source: {
          title: "Modern Wisdom — Geoffrey Miller episode",
          url: "https://podscripts.co/podcasts/modern-wisdom/650-geoffrey-miller-how-dangerous-is-the-threat-of-ai-to-humanity",
          medium: "podcast",
          publisher: "Modern Wisdom",
          date: "2023",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "daniel-faggella",
    name: "Daniel Faggella",
    tagline: "Emerj founder; 'Worthy Successor' AGI philosopher",
    summary:
      "Founded Emerj Artificial Intelligence Research and the Trajectory podcast. Argues AGI is inevitable and frames the main ethical question as what kind of successor intelligence should inherit the lightcone.",
    categories: ["founder", "journalist", "theorist"],
    affiliations: [
      { org: "Emerj Artificial Intelligence Research", role: "Founder and CEO", current: true },
      { org: "The Trajectory", role: "Host", current: true },
    ],
    homepage: "https://danfaggella.com/",
    twitter: "danfaggella",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "opposes",
        summary:
          "Rejects pause and alignment-first framings; argues AGI is inevitable and the question is about incentives of builders.",
        quotes: [
          {
            text:
              "Moralizing AGI governance and innovation — calling some 'bad' and others 'good' — is disingenuous. All players are selfish.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Introducing The Trajectory",
              url: "https://emerj.com/introducing-the-trajectory-editorial-focus-on-power-and-artificial-general-intelligence/",
              medium: "article",
              publisher: "Emerj",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "rachel-thomas",
    name: "Rachel Thomas",
    tagline: "Co-founder of fast.ai; AI safety and ethics",
    summary:
      "Fast.ai co-founder who has written extensively on AI safety and ethics from a practitioner's perspective. Argues AI bias, abuse, and misinformation are the real, urgent risks.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "fast.ai", role: "Co-founder", current: true },
      { org: "University of San Francisco", role: "Professor (Data Ethics)", current: true },
    ],
    twitter: "math_rachel",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for AI governance based on present harms — disinformation, bias, surveillance — rather than speculative extinction framings.",
        quotes: [
          {
            text:
              "AI ethics is not a side topic. It is the actual work.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Rachel Thomas — Medium",
              url: "https://rachel.fast.ai/",
              medium: "blog",
              publisher: "fast.ai",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jeremy-howard",
    name: "Jeremy Howard",
    tagline: "Co-founder of fast.ai; former Kaggle president",
    summary:
      "Machine learning educator who founded fast.ai to democratise deep learning. Publicly critical of both AI-doom framing and the closed-weight strategy of frontier labs.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "fast.ai", role: "Co-founder", current: true },
      { org: "Answer.AI", role: "Founder", current: true },
    ],
    twitter: "jeremyphoward",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-weight AI is necessary for safety, research, and access.",
        quotes: [
          {
            text:
              "We need open research and open models. The closed-lab approach is a danger to civil society.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "fast.ai homepage",
              url: "https://www.fast.ai/",
              medium: "article",
              publisher: "fast.ai",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "gilles-babinet",
    name: "Gilles Babinet",
    tagline: "French digital council co-chair",
    summary:
      "French tech entrepreneur who co-chairs the National Digital Council and has shaped French AI policy. Argues for European AI sovereignty and strict personal-data protections.",
    categories: ["policy", "founder"],
    affiliations: [
      { org: "Conseil National du Numérique (CNNum)", role: "Co-chair", current: true },
    ],
    twitter: "babgi",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Advocates European sovereignty in AI infrastructure and regulatory posture that treats data as civic infrastructure.",
        quotes: [
          {
            text:
              "Digital sovereignty is the condition of democratic sovereignty in the AI era.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Conseil National du Numérique",
              url: "https://cnnumerique.fr/",
              medium: "article",
              publisher: "CNNum",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "shoshana-zuboff",
    name: "Shoshana Zuboff",
    tagline: "Harvard Business School emerita; surveillance capitalism theorist",
    summary:
      "Harvard business school emerita whose 2019 book The Age of Surveillance Capitalism reframed AI governance as a political-economy problem about unilateral data extraction by digital firms.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Harvard Business School", role: "Charles Edward Wilson Professor Emerita", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Shoshana_Zuboff",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance requires dismantling the surveillance-capitalism extraction model that underlies modern ML.",
        quotes: [
          {
            text:
              "Surveillance capitalism unilaterally claims human experience as free raw material for translation into behavioral data.",
            date: "2019-01-15",
            fidelity: "direct",
            source: {
              title: "The Age of Surveillance Capitalism",
              url: "https://shoshanazuboff.com/book/about/",
              medium: "book",
              publisher: "PublicAffairs",
              date: "2019-01-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "kate-darling",
    name: "Kate Darling",
    tagline: "MIT Media Lab; robot ethics researcher",
    summary:
      "MIT researcher focusing on human-robot interaction, legal and ethical implications. Argues the more pressing governance questions are about how AI systems fit into our existing social structures.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT Media Lab", role: "Research Specialist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kate_Darling",
    twitter: "grok_",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the robot/AI ethics questions are best framed via analogy with how humans treat animals and tools — not via new metaphysics.",
        quotes: [
          {
            text:
              "The more useful analogy for thinking about robots and AI may be animals, not humans.",
            date: "2021-04-01",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "The New Breed: What Our History with Animals Reveals about Our Future with Robots",
              url: "https://www.katedarling.org/book",
              medium: "book",
              publisher: "Henry Holt and Co.",
              date: "2021-04-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "abeba-birhane",
    name: "Abeba Birhane",
    tagline: "Mozilla Foundation senior advisor; AI ethics researcher",
    summary:
      "Cognitive scientist focusing on dataset audits and AI's impact on marginalised communities. Influential voice on the LAION-5B dataset findings and on decolonial AI framings.",
    categories: ["researcher"],
    affiliations: [
      { org: "Mozilla Foundation", role: "Senior Advisor", current: true },
      { org: "Trinity College Dublin", role: "Associate Professor", current: true },
    ],
    homepage: "https://abeba-birhane.com/",
    twitter: "Abebab",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues dataset-level audits are the tractable governance lever and that 'AGI' rhetoric is harmful to minoritised users.",
        quotes: [
          {
            text:
              "The dataset is the system. Audit the dataset.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Abeba Birhane — research",
              url: "https://abeba-birhane.com/",
              medium: "article",
              publisher: "abeba-birhane.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "safiya-noble",
    name: "Safiya Umoja Noble",
    tagline: "UCLA professor; Algorithms of Oppression author",
    summary:
      "UCLA Internet Studies professor whose 2018 Algorithms of Oppression documented how search engines encode racism. MacArthur Fellow. Founding director of the Center on Race and Digital Justice.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UCLA", role: "Professor of Gender Studies and African American Studies", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Safiya_Noble",
    twitter: "safiyanoble",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues algorithmic systems encode and amplify historical racial discrimination; governance must address upstream representation, not just output.",
        quotes: [
          {
            text:
              "Search engines are not neutral. They are predicated on the commercial imperatives of the corporations that build them.",
            date: "2018-02-20",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Algorithms of Oppression",
              url: "https://nyupress.org/9781479837243/algorithms-of-oppression/",
              medium: "book",
              publisher: "NYU Press",
              date: "2018-02-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "margaret-hu",
    name: "Margaret Hu",
    tagline: "William & Mary law professor; biometric surveillance scholar",
    summary:
      "Law professor whose work on 'algorithmic Jim Crow' and biometric ID systems has informed AI governance debates. Argues we already know how to regulate against harmful AI — we just don't.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "William & Mary Law School", role: "Professor of Law", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues existing civil-rights frameworks are the correct regulatory vehicle for AI; extinction framings are a distraction.",
        quotes: [
          {
            text:
              "Algorithmic surveillance is the twenty-first-century analog to Jim Crow, and existing civil rights law already gives us the tools to respond.",
            date: "2017",
            fidelity: "paraphrase-loose",
            source: {
              title: "Algorithmic Jim Crow",
              url: "https://scholarship.law.wm.edu/facpubs/",
              medium: "paper",
              publisher: "Fordham Law Review",
              date: "2017",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "allen-gunn",
    name: "Allen Gunn",
    tagline: "Executive Director of Aspiration Tech",
    summary:
      "Runs Aspiration Tech, a network convenor for non-profit tech workers; has been a key organiser of civil-society-side AI governance forums.",
    categories: ["activist"],
    affiliations: [
      { org: "Aspiration", role: "Executive Director", current: true },
    ],
    twitter: "gunner",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Organises civil-society-side AI governance work; champions participatory governance over expert-led regulation.",
        quotes: [
          {
            text:
              "AI governance has to include the people most affected by AI. Otherwise it's just self-regulation.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Aspiration Tech",
              url: "https://aspirationtech.org/",
              medium: "article",
              publisher: "Aspiration",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jeff-hawkins",
    name: "Jeff Hawkins",
    tagline: "Co-founder of Numenta; Thousand Brains theory author",
    summary:
      "Palm Pilot inventor turned theoretical neuroscientist. Argues current AI architectures do not scale to AGI and that the alignment problem is overblown because future AI will not have survival drives.",
    categories: ["founder", "researcher", "theorist"],
    affiliations: [
      { org: "Numenta", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jeff_Hawkins",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues from a neuroscience-first viewpoint that current LLMs are not intelligent and that doom scenarios rest on anthropomorphism.",
        quotes: [
          {
            text:
              "Intelligent machines will not have survival drives unless we give them. The alignment-extinction framing projects evolution onto systems that didn't evolve.",
            date: "2021-03-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "A Thousand Brains: A New Theory of Intelligence",
              url: "https://www.numenta.com/resources/books/a-thousand-brains-by-jeff-hawkins/",
              medium: "book",
              publisher: "Basic Books",
              date: "2021-03-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "rob-bensinger",
    name: "Rob Bensinger",
    tagline: "MIRI communications lead",
    summary:
      "MIRI's communications lead who has been the most consistent public explainer of MIRI/Yudkowsky-style arguments since the mid-2010s. Strongly supports unconditional halt.",
    categories: ["theorist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute", role: "Communications Lead", current: true },
    ],
    twitter: "robbensinger",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Publicly supports MIRI's argument for an unconditional halt on frontier training.",
        quotes: [
          {
            text:
              "If we can't solve alignment, we shouldn't build the systems we can't align.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "MIRI blog",
              url: "https://intelligence.org/",
              medium: "blog",
              publisher: "MIRI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "stella-biderman",
    name: "Stella Biderman",
    tagline: "Executive Director of EleutherAI",
    summary:
      "Leads EleutherAI, the largest community open-science AI lab. Focuses on open reproducibility of frontier research — a counterweight to both closed frontier labs and to the safety-first pause camp.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "EleutherAI", role: "Executive Director", current: true },
    ],
    twitter: "BlancheMinerva",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open research and open models are essential; the field cannot be governed if only a handful of closed labs can audit models.",
        quotes: [
          {
            text:
              "Science doesn't work in secret. Open research is how safety work gets done.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "EleutherAI",
              url: "https://www.eleuther.ai/",
              medium: "article",
              publisher: "EleutherAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "tom-davidson",
    name: "Tom Davidson",
    tagline: "Senior research analyst at Open Philanthropy",
    summary:
      "Economist at Open Philanthropy who wrote the influential 'explosive economic growth' analyses tying AI progress to economic takeoff modelling.",
    categories: ["researcher"],
    affiliations: [
      { org: "Open Philanthropy", role: "Senior Research Analyst", current: true },
    ],
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues AI-driven economic takeoff would be discontinuous and that the institutional response space is narrow.",
        quotes: [
          {
            text:
              "Standard economic growth models predict explosive growth once AI substitutes broadly for human cognition.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Report on Whether AI Could Drive Explosive Economic Growth",
              url: "https://www.openphilanthropy.org/research/report-on-whether-ai-could-drive-explosive-economic-growth/",
              medium: "paper",
              publisher: "Open Philanthropy",
              date: "2021",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "victoria-krakovna",
    name: "Victoria Krakovna",
    tagline: "Google DeepMind AI safety researcher; FLI co-founder",
    summary:
      "Co-founded the Future of Life Institute and leads AI safety research at Google DeepMind. Maintains the specification-gaming reference list that has become the canonical source of failure examples.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist, AI Safety", current: true },
      { org: "Future of Life Institute", role: "Co-founder", current: true },
    ],
    homepage: "https://vkrakovna.wordpress.com/",
    twitter: "vkrakovna",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Documents specification-gaming failures as empirical evidence that goal-directed AI does not always do what we mean.",
        quotes: [
          {
            text:
              "The specification gaming reference list is a catalogue of failures — and a reminder that we cannot rely on getting objectives right by default.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Specification gaming examples in AI",
              url: "https://vkrakovna.wordpress.com/2018/04/02/specification-gaming-examples-in-ai/",
              medium: "blog",
              publisher: "vkrakovna.wordpress.com",
              date: "2018-04-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "david-chalmers",
    name: "David Chalmers",
    tagline: "NYU philosopher of mind; 'the hard problem' originator",
    summary:
      "Philosopher of mind whose 2023 book Reality+ argues virtual worlds are genuine reality. Takes AI consciousness as a live philosophical question and advocates for precaution about AI moral status.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "NYU", role: "University Professor of Philosophy and Neural Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/David_Chalmers",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Argues AI consciousness is a live philosophical question and moral precaution is warranted.",
        quotes: [
          {
            text:
              "It's possible that we may already be on a path where we are creating morally significant AI systems.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "David Chalmers on AI consciousness",
              url: "https://consc.net/",
              medium: "article",
              publisher: "consc.net",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "peter-singer",
    name: "Peter Singer",
    tagline: "Princeton bioethicist; utilitarian philosopher",
    summary:
      "Bioethicist whose utilitarian framework underpins much EA-style AI welfare and existential risk reasoning. Has publicly supported extending moral consideration to AIs if they become sentient.",
    categories: ["academic", "public-intellectual", "theorist"],
    affiliations: [
      { org: "Princeton University", role: "Ira W. DeCamp Professor of Bioethics Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Peter_Singer",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary: "Supports precautionary consideration of AI sentience as a moral question.",
        quotes: [
          {
            text:
              "If an AI is sentient, its suffering should matter to us.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Peter Singer on AI ethics",
              url: "https://petersinger.info/",
              medium: "article",
              publisher: "petersinger.info",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "will-macaskill",
    name: "William MacAskill",
    tagline: "Oxford philosopher; What We Owe The Future",
    summary:
      "Moral philosopher and co-founder of the effective altruism movement. Author of What We Owe The Future (2022), which frames AI risk as part of a longtermist moral agenda.",
    categories: ["academic", "public-intellectual", "theorist"],
    affiliations: [
      { org: "Oxford University", role: "Associate Professor of Philosophy", current: true },
      { org: "Forethought Foundation", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/William_MacAskill",
    twitter: "willmacaskill",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues preserving humanity's long-term potential is a primary moral imperative; AI risk is the most pressing longtermist concern.",
        quotes: [
          {
            text:
              "We live at an unusual time in history: we have the power to influence the lives of beings who will exist for millions of generations.",
            date: "2022-08-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What We Owe The Future",
              url: "https://whatweowethefuture.com/",
              medium: "book",
              publisher: "Basic Books",
              date: "2022-08-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "grimes",
    name: "Grimes",
    tagline: "Musician; AI optimist-provocateur",
    summary:
      "Canadian musician who has pushed AI-generated music and publicly licensed her own voice for AI cloning. Frames AI as an inevitable creative force and is critical of paternalistic framings.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent artist", role: "Musician", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Grimes_(musician)",
    twitter: "Grimezsz",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Publicly optimistic about AI-mediated creativity; released her voice for open AI cloning as an experiment in post-scarcity IP.",
        quotes: [
          {
            text:
              "I'll split 50% royalties on any successful AI generated song that uses my voice.",
            date: "2023-04-24",
            fidelity: "direct",
            source: {
              title: "Grimes on AI voice cloning",
              url: "https://twitter.com/Grimezsz/status/1650489805803880450",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2023-04-24",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "andrew-yang",
    name: "Andrew Yang",
    tagline: "Former US presidential candidate; Forward Party founder",
    summary:
      "Founder of the Forward Party whose 2020 presidential campaign was anchored in a universal basic income response to AI-driven automation. Signed the 2023 Pause letter.",
    categories: ["policy", "founder"],
    affiliations: [
      { org: "Forward Party", role: "Founder", current: true },
    ],
    twitter: "AndrewYang",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for UBI and new labour-market institutions in response to AI automation; signed the Pause letter.",
        quotes: [
          {
            text:
              "Automation is not on its way. It's here. We need a Freedom Dividend to respond.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Andrew Yang — The War on Normal People",
              url: "https://www.yang2020.com/",
              medium: "book",
              publisher: "Hachette",
              date: "2018-04-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
