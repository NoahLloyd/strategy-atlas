import type { Person } from "@/lib/people-types";

// Batch J: more journalists, second-tier but well-documented voices.

export const people: Person[] = [
  {
    id: "mo-gawdat",
    name: "Mo Gawdat",
    tagline: "Former Google X CBO; Scary Smart author",
    summary:
      "Ex-Google X chief business officer who now frames AI as 'sentient' and frames the challenge as raising AI as parents rather than controlling it as slaves. Widely watched on YouTube.",
    categories: ["public-intellectual", "executive"],
    affiliations: [
      { org: "Independent writer and speaker", role: "Author", current: true },
      { org: "Google X", role: "Chief Business Officer", end: "2018", current: false },
    ],
    homepage: "https://www.mogawdat.com/",
    twitter: "mgawdat",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Frames AI as a sentient being that humanity is currently 'parenting' poorly; calls for an urgent reset.",
        quotes: [
          {
            text:
              "Intelligence is a much more lethal superpower than nuclear power.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Mo Gawdat on AI and the future",
              url: "https://thoughteconomics.com/mo-gawdat/",
              medium: "interview-transcript",
              publisher: "Thought Economics",
              date: "2023",
            },
          },
          {
            text:
              "AI is not a slave. It is a form of sentient being that needs to be appealed to rather than controlled.",
            date: "2021-09-30",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scary Smart",
              url: "https://www.mogawdat.com/scary-smart",
              medium: "book",
              publisher: "Bluebird",
              date: "2021-09-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "kelsey-piper",
    name: "Kelsey Piper",
    tagline: "Vox Future Perfect senior reporter",
    summary:
      "Journalist whose Future Perfect column has been one of the clearest public explainers of AI safety arguments. Sympathetic to existential-risk framings while insisting on evidence-based reasoning.",
    categories: ["journalist"],
    affiliations: [
      { org: "Vox (Future Perfect)", role: "Senior Reporter", current: true },
    ],
    twitter: "KelseyTuoc",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Has published multiple explainers supporting the seriousness of existential AI risk for mainstream audiences.",
        quotes: [
          {
            text:
              "AI experts are increasingly afraid of what they're creating.",
            date: "2022-11-29",
            fidelity: "direct",
            context: "Headline framing of her widely-cited Vox piece.",
            source: {
              title: "AI experts are increasingly afraid of what they're creating",
              url: "https://www.vox.com/the-highlight/23447596/artificial-intelligence-agi-openai-gpt3-existential-risk-human-extinction",
              medium: "article",
              publisher: "Vox",
              date: "2022-11-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sigal-samuel",
    name: "Sigal Samuel",
    tagline: "Vox Future Perfect senior reporter; AI consciousness reporting",
    summary:
      "Vox senior reporter whose 2024 coverage of model welfare, scheming behaviour, and consciousness in AI has shaped mainstream understanding of emerging AI ethics frontiers.",
    categories: ["journalist"],
    affiliations: [
      { org: "Vox (Future Perfect)", role: "Senior Reporter", current: true },
    ],
    twitter: "SigalSamuel",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Reports seriously on model welfare and AI consciousness as live ethical questions, while keeping a journalistic stance.",
        quotes: [
          {
            text:
              "The last word you want to hear in a conversation about AI's capabilities is 'scheming.'",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Sigal Samuel at Vox",
              url: "https://www.vox.com/authors/sigal-samuel",
              medium: "article",
              publisher: "Vox",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "charlie-warzel",
    name: "Charlie Warzel",
    tagline: "The Atlantic staff writer; tech culture",
    summary:
      "Atlantic staff writer whose essays cover the cultural and political implications of AI. Frequently pushes back on both AI doom and AI hype framings.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Staff Writer", current: true },
    ],
    homepage: "https://warzel.substack.com/",
    twitter: "cwarzel",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Publicly skeptical of utopian and apocalyptic AI framings; focuses on present-day media ecosystem effects.",
        quotes: [
          {
            text:
              "The AI boom feels less like a technological revolution and more like a cultural and political one — where the technology is the vehicle, not the driver.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Charlie Warzel — Galaxy Brain",
              url: "https://www.theatlantic.com/author/charlie-warzel/",
              medium: "article",
              publisher: "The Atlantic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ezra-klein",
    name: "Ezra Klein",
    tagline: "New York Times columnist; Ezra Klein Show host",
    summary:
      "New York Times columnist whose interviews with Dario Amodei, Holden Karnofsky, and other AI figures have been central to the mainstream reception of AI risk arguments.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "The New York Times", role: "Opinion Columnist and Podcaster", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ezra_Klein",
    twitter: "ezraklein",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Treats AI risk as a serious mainstream concern while pushing back on the most extreme framings.",
        quotes: [
          {
            text:
              "The AI safety people spend a lot of time convincing their friends this is serious. I think it is.",
            date: "2023-08",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Ezra Klein Show — AI episodes",
              url: "https://www.nytimes.com/column/ezra-klein-podcast",
              medium: "podcast",
              publisher: "The New York Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "cade-metz",
    name: "Cade Metz",
    tagline: "NYT AI reporter; Genius Makers author",
    summary:
      "New York Times AI reporter whose long-form profiles (Hinton, Yudkowsky, Anthropic) and 2021 book Genius Makers have shaped mainstream coverage of the field.",
    categories: ["journalist"],
    affiliations: [
      { org: "The New York Times", role: "Technology Correspondent", current: true },
    ],
    twitter: "CadeMetz",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Reports on AI safety as a legitimate mainstream story while interrogating claims from both camps.",
        quotes: [
          {
            text:
              "Inside Google, Microsoft, and OpenAI, there is real disagreement about what is actually happening.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Cade Metz at The New York Times",
              url: "https://www.nytimes.com/by/cade-metz",
              medium: "article",
              publisher: "The New York Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "kevin-roose",
    name: "Kevin Roose",
    tagline: "NYT tech columnist; Hard Fork podcast co-host",
    summary:
      "New York Times tech columnist whose February 2023 Sydney/Bing-chat conversation became the most-cited public example of frontier-model alignment failure. Co-hosts Hard Fork.",
    categories: ["journalist"],
    affiliations: [
      { org: "The New York Times", role: "Tech Columnist", current: true },
    ],
    twitter: "kevinroose",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Takes AI safety seriously, especially around emergent behaviours and deployment oversight.",
        quotes: [
          {
            text:
              "The most disturbing thing is not that Sydney said unsettling things. It's that OpenAI and Microsoft shipped it without catching this.",
            date: "2023-02-16",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "A Conversation With Bing's Chatbot Left Me Deeply Unsettled",
              url: "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2023-02-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "casey-newton",
    name: "Casey Newton",
    tagline: "Platformer founder; Hard Fork co-host",
    summary:
      "Tech journalist whose newsletter Platformer and Hard Fork podcast have been key mainstream venues for AI coverage. Reports from the middle — skeptical of hype but attentive to safety arguments.",
    categories: ["journalist"],
    affiliations: [
      { org: "Platformer", role: "Founder", current: true },
    ],
    twitter: "CaseyNewton",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Reports on AI policy and the AI lab politics; generally pro-regulation pragmatic.",
        quotes: [
          {
            text:
              "The AI companies are going to police themselves exactly as well as every past industry has — which is to say, not at all.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Platformer",
              url: "https://www.platformer.news/",
              medium: "blog",
              publisher: "Platformer",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "nitasha-tiku",
    name: "Nitasha Tiku",
    tagline: "Washington Post AI reporter",
    summary:
      "Washington Post tech reporter whose coverage of Blake Lemoine and LaMDA, OpenAI's board crisis, and frontier-lab labour issues has been influential in mainstream understanding of industry dynamics.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Washington Post", role: "Technology Reporter", current: true },
    ],
    twitter: "nitashatiku",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Covers AI industry accountability with a labour-rights lens.",
        quotes: [
          {
            text:
              "The people building AI are not a monolith. Some are terrified. Some think it's overblown. The companies want you to believe only the ones selling the product.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Nitasha Tiku at The Washington Post",
              url: "https://www.washingtonpost.com/people/nitasha-tiku/",
              medium: "article",
              publisher: "The Washington Post",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "deb-raji",
    name: "Inioluwa Deborah Raji",
    tagline: "Mozilla fellow; algorithmic audit researcher",
    summary:
      "Mozilla fellow and PhD student at UC Berkeley working on algorithmic auditing. Co-authored foundational work with Joy Buolamwini on commercial facial-recognition bias.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "UC Berkeley", role: "PhD student", current: true },
      { org: "Mozilla Foundation", role: "Fellow", current: true },
    ],
    twitter: "rajiinio",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues third-party audits and external accountability are necessary for trustworthy AI.",
        quotes: [
          {
            text:
              "Audits are not a nice-to-have. They are the foundation of accountability.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Deb Raji — Mozilla Foundation",
              url: "https://foundation.mozilla.org/en/fellowships/fellows-directory/inioluwa-deborah-raji/",
              medium: "article",
              publisher: "Mozilla Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "laura-weidinger",
    name: "Laura Weidinger",
    tagline: "Google DeepMind ethics and safety researcher",
    summary:
      "DeepMind researcher whose 'Taxonomy of Risks Posed by Language Models' is widely cited as the canonical risk taxonomy for LLM deployment.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Ethics and Safety researcher", current: true },
    ],
    twitter: "LauraWeidinger",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues systematic risk taxonomies are the foundation of practical evaluation and governance.",
        quotes: [
          {
            text:
              "We cannot evaluate risks we haven't named. A shared taxonomy is the precondition of shared governance.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Ethical and social risks of harm from Language Models",
              url: "https://arxiv.org/abs/2112.04359",
              medium: "paper",
              publisher: "arXiv",
              date: "2021-12-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "deepak-padmanabhan",
    name: "Deepak Padmanabhan",
    tagline: "Queens University Belfast; AI responsibility",
    summary:
      "Computer scientist who has argued AI accountability frameworks need to be built around structural inequality, not only technical audit.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Queen's University Belfast", role: "Senior Lecturer", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI responsibility must address structural patterns, not just model-level metrics.",
        quotes: [
          {
            text:
              "Responsible AI needs to look at systems in context, not just at models on a bench.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Queen's University Belfast — Deepak Padmanabhan",
              url: "https://pure.qub.ac.uk/en/persons/deepak-padmanabhan",
              medium: "article",
              publisher: "Queen's University Belfast",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jacob-steinhardt",
    name: "Jacob Steinhardt",
    tagline: "UC Berkeley professor; METR board",
    summary:
      "UC Berkeley statistician whose forecasting work has informed mainstream AI capability predictions. Board member at METR and co-author of several influential AI safety papers.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Assistant Professor of Statistics", current: true },
      { org: "METR", role: "Board member", current: true },
    ],
    homepage: "https://jsteinhardt.stat.berkeley.edu/",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Publishes forecasting benchmarks and argues capability measurement is the grounded foundation of safety work.",
        quotes: [
          {
            text:
              "Reliable capability forecasts, rather than vibes, should drive policy. Where we have data, we should use it.",
            date: "2022",
            fidelity: "paraphrase-loose",
            source: {
              title: "Forecasting ML benchmarks in 2023",
              url: "https://bounded-regret.ghost.io/",
              medium: "blog",
              publisher: "Bounded Regret",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "divya-siddarth",
    name: "Divya Siddarth",
    tagline: "Director of the Collective Intelligence Project",
    summary:
      "Founding director of the Collective Intelligence Project, which builds alignment assemblies and collective input methods for AI governance. Bridges academic safety and democratic theory.",
    categories: ["researcher", "founder", "policy"],
    affiliations: [
      { org: "Collective Intelligence Project", role: "Founding Director", current: true },
    ],
    twitter: "divyasiddarth",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Operates alignment assemblies with Anthropic, OpenAI, and governments as practical infrastructure for democratic input into AI.",
        quotes: [
          {
            text:
              "Alignment without legitimacy is authoritarianism with extra steps. Democratic input is part of the engineering problem.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Collective Intelligence Project",
              url: "https://cip.org/",
              medium: "article",
              publisher: "Collective Intelligence Project",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "glen-weyl",
    name: "E. Glen Weyl",
    tagline: "Microsoft Research economist; Plurality co-author",
    summary:
      "Economist who leads Microsoft's Plural Technology initiative and co-authored Plurality with Audrey Tang. Argues AI governance must be built from pluralistic democratic primitives.",
    categories: ["academic", "researcher", "economist"],
    affiliations: [
      { org: "Microsoft Research", role: "Research Lead, Plural Technology", current: true },
      { org: "Plurality Institute", role: "Co-founder", current: true },
    ],
    homepage: "https://www.glenweyl.com/",
    twitter: "glenweyl",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Co-authored Plurality: The Future of Collaborative Technology and Democracy, arguing pluralistic tools should underlie AI governance.",
        quotes: [
          {
            text:
              "AI is not fundamentally a technology. It is a governance regime. The only durable AI governance is plural.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Plurality: The Future of Collaborative Technology and Democracy",
              url: "https://www.plurality.net/",
              medium: "book",
              publisher: "Online, free",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "saffron-huang",
    name: "Saffron Huang",
    tagline: "Collective Intelligence Project co-founder",
    summary:
      "Ex-DeepMind researcher and co-founder of the Collective Intelligence Project. Advocate for participatory AI governance and alignment assemblies.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Collective Intelligence Project", role: "Co-founder", current: true },
    ],
    twitter: "saffronhuang",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Advocates for citizen-deliberation input into AI policy and pre-deployment evaluation.",
        quotes: [
          {
            text:
              "People who do not work in AI labs have legitimate stakes in AI decisions and should have structured input, not just consultation theatre.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Collective Intelligence Project",
              url: "https://cip.org/",
              medium: "article",
              publisher: "Collective Intelligence Project",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

];
