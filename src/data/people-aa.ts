import type { Person } from "@/lib/people-types";

// Batch AA: pushing past 400 with more well-documented voices.

export const people: Person[] = [
  {
    id: "thomas-dietterich",
    name: "Thomas Dietterich",
    tagline: "Oregon State emeritus; AAAI past president",
    summary:
      "Distinguished AI researcher and former AAAI president. Has argued AI safety should focus on everyday reliability failures, not extinction scenarios.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Oregon State University", role: "Distinguished Professor Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Thomas_G._Dietterich",
    twitter: "tdietterich",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues mundane reliability failures, not superintelligence takeover, are the real AI risk.",
        quotes: [
          {
            text:
              "The biggest risk is that those algorithms may not always work. We need to be conscious of this risk and create systems that can still function safely even when the AI components commit errors.",
            date: "2015-03",
            fidelity: "direct",
            source: {
              title:
                "Expert: Artificial intelligence systems more apt to fail than to destroy",
              url: "https://today.oregonstate.edu/archives/2015/mar/expert-artificial-intelligence-systems-more-apt-fail-destroy",
              medium: "article",
              publisher: "Oregon State University",
              date: "2015-03",
            },
          },
        ],
      },
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues the field over-weights existential risk relative to documented harms from deployed systems and that solid engineering for robustness, validation, and oversight does most of the safety work.",
        quotes: [
          {
            text:
              "The risk of superintelligent AI taking over the world is much less concerning than the risk of dumb AI being deployed in safety-critical systems without proper validation.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Robust Artificial Intelligence and Robust Human Organizations",
              url: "https://arxiv.org/abs/1811.10840",
              medium: "paper",
              publisher: "arXiv",
              date: "2018-11-27",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "zeynep-tufekci",
    name: "Zeynep Tufekci",
    tagline: "Princeton sociologist; NYT columnist",
    summary:
      "Princeton sociologist and NYT opinion columnist whose work has shaped mainstream understanding of algorithmic influence on democracy and epistemic ecosystems.",
    categories: ["academic", "journalist", "public-intellectual"],
    affiliations: [
      { org: "Princeton University", role: "Henry G. Bryant Professor of Sociology and Public Affairs", current: true },
      { org: "The New York Times", role: "Columnist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Zeynep_Tufekci",
    twitter: "zeynep",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the near-term threat of AI is about existing power structures using AI for social control, not speculative takeover.",
        quotes: [
          {
            text:
              "The YouTube recommendation algorithm is an example of the real and immediate dangers of AI. The immediate threat is how AI is used, right now, by powerful corporations or states for profit or for social control.",
            date: "2019",
            fidelity: "direct",
            source: {
              title: "Zeynep Tufekci on AI dangers",
              url: "https://hub.jhu.edu/2019/02/11/zeynep-tufekci-democracy-dialogues/",
              medium: "article",
              publisher: "Johns Hopkins Hub",
              date: "2019-02-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nicholas-thompson",
    name: "Nicholas Thompson",
    tagline: "CEO of The Atlantic; former Wired editor",
    summary:
      "CEO of The Atlantic and former Wired editor whose interviews with AI leaders have shaped mainstream understanding of frontier AI. Public commentator on AI and democracy.",
    categories: ["journalist", "executive"],
    affiliations: [
      { org: "The Atlantic", role: "CEO", current: true },
    ],
    twitter: "nxthompson",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Engaged mainstream-media voice pushing AI CEOs on safety and policy questions.",
        quotes: [
          {
            text:
              "The AI industry wants self-regulation because self-regulation is not regulation.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Nicholas Thompson interviews",
              url: "https://www.theatlantic.com/",
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
    id: "martin-ford",
    name: "Martin Ford",
    tagline: "Rise of the Robots author; labour economics of AI",
    summary:
      "Author of the 2015 Rise of the Robots and 2021 Rule of the Robots, arguing AI will displace cognitive labour on a scale requiring fundamental economic policy responses.",
    categories: ["public-intellectual", "economist"],
    affiliations: [
      { org: "Independent writer", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Martin_Ford_(author)",
    twitter: "mfordfuture",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI-driven automation will require UBI or equivalent institutions; the economy will not adjust on its own.",
        quotes: [
          {
            text:
              "This time is different. AI will displace a meaningful fraction of cognitive labour. Without a UBI-style response, we risk a two-tier economy.",
            date: "2021",
            fidelity: "paraphrase-loose",
            source: {
              title: "Rule of the Robots",
              url: "https://www.basicbooks.com/titles/martin-ford/rule-of-the-robots/9781541674806/",
              medium: "book",
              publisher: "Basic Books",
              date: "2021-09-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-mahmoudi",
    name: "Matt Mahmoudi",
    tagline: "Amnesty International AI researcher",
    summary:
      "Amnesty International researcher focused on AI-enabled surveillance and human-rights violations. Co-led Amnesty's facial-recognition investigations.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Amnesty International", role: "AI researcher", current: true },
    ],
    twitter: "mattmahmoudi",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documents how AI surveillance technologies are deployed against human rights defenders; calls for a global ban on facial recognition surveillance.",
        quotes: [
          {
            text:
              "Facial recognition surveillance is incompatible with human rights. We are calling for a global ban.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Amnesty International, Ban the Scan",
              url: "https://banthescan.amnesty.org/",
              medium: "article",
              publisher: "Amnesty International",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "suresh-venkatasubramanian",
    name: "Suresh Venkatasubramanian",
    tagline: "Brown University professor; former White House OSTP",
    summary:
      "Brown CS professor and former OSTP deputy who co-led the development of the 2022 AI Bill of Rights blueprint.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Brown University", role: "Professor of Computer Science and Data Science", current: true },
      { org: "White House OSTP", role: "Assistant Director for Science and Justice", end: "2022", current: false },
    ],
    twitter: "geomblog",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Co-designed the US AI Bill of Rights blueprint; advocates rights-based AI governance.",
        quotes: [
          {
            text:
              "A rights-based approach gives us a framework that is portable across sectors and that puts the people being governed by AI at the centre.",
            date: "2022-10-04",
            fidelity: "paraphrase-faithful",
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
    lastUpdated: "2026-04-25",
  },

  {
    id: "zebi-williams",
    name: "Zebi Williams",
    tagline: "US Digital Service former director",
    summary:
      "Former deputy administrator of the US Digital Service. Helped design responsible-procurement policies for federal AI purchasing.",
    categories: ["policy"],
    affiliations: [
      { org: "US Digital Service", role: "Former Deputy Administrator", end: "2025", current: false },
    ],
    twitter: "zebi1111",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates using federal procurement as a lever for AI accountability.",
        quotes: [
          {
            text:
              "Federal procurement shapes vendor behaviour more than regulation in the short run. Use it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "US Digital Service",
              url: "https://www.usds.gov/",
              medium: "article",
              publisher: "US Digital Service",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "emma-strubell",
    name: "Emma Strubell",
    tagline: "CMU professor; energy cost of AI pioneer",
    summary:
      "CMU professor whose 2019 paper on the carbon footprint of NLP training was the first widely-cited quantification of AI's environmental cost. Has continued to publish on energy efficiency and sustainability.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Assistant Professor", current: true },
    ],
    homepage: "https://strubell.github.io/",
    twitter: "emmastrubell",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues energy and carbon should be first-class constraints on AI training.",
        quotes: [
          {
            text:
              "Training a single large NLP model can emit as much carbon as five cars over their lifetimes.",
            date: "2019-06-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Energy and Policy Considerations for Deep Learning in NLP",
              url: "https://arxiv.org/abs/1906.02243",
              medium: "paper",
              publisher: "arXiv",
              date: "2019-06-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rashawn-ray",
    name: "Rashawn Ray",
    tagline: "Brookings Institution; AI and policing",
    summary:
      "Brookings senior fellow and sociologist whose work on AI in policing has shaped mainstream discussion of algorithmic predictive policing.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Brookings Institution", role: "Senior Fellow", current: true },
      { org: "University of Maryland", role: "Professor of Sociology", current: true },
    ],
    twitter: "sociologistray",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI deployed in policing reproduces systemic bias; pushes for strong procurement-level restrictions.",
        quotes: [
          {
            text:
              "AI in policing deepens the disparities it claims to eliminate.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Rashawn Ray at Brookings",
              url: "https://www.brookings.edu/experts/rashawn-ray/",
              medium: "article",
              publisher: "Brookings",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-page",
    name: "Michael Page",
    tagline: "Anthropic policy team",
    summary:
      "Anthropic policy team member focused on frontier model governance. Former Future of Life Institute AI policy lead.",
    categories: ["policy"],
    affiliations: [
      { org: "Anthropic", role: "Head of Responsibility Policy", current: true },
    ],
    twitter: "mpage",
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Helps operationalise Anthropic's Responsible Scaling Policy and represent it to governments.",
        quotes: [
          {
            text:
              "Capability-tied safety commitments must be credible to regulators, not just internal talking points.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic policy team",
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
    id: "paul-graham",
    name: "Paul Graham",
    tagline: "Y Combinator co-founder; essay writer",
    summary:
      "Y Combinator co-founder whose essays have shaped Silicon Valley's self-understanding for two decades. Publicly bullish on AI; frames it as the most important wave since the web.",
    categories: ["investor", "founder", "public-intellectual"],
    affiliations: [
      { org: "Y Combinator", role: "Co-founder", end: "2014", current: false },
    ],
    homepage: "https://paulgraham.com/",
    twitter: "paulg",
    wikipedia: "https://en.wikipedia.org/wiki/Paul_Graham_(programmer)",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues AI is the most important technology wave of the generation and should be built quickly by startups.",
        quotes: [
          {
            text:
              "AI is the biggest thing since the web.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Paul Graham essays",
              url: "https://paulgraham.com/",
              medium: "blog",
              publisher: "paulgraham.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "christof-koch",
    name: "Christof Koch",
    tagline: "Neuroscientist; Allen Institute for Brain Science",
    summary:
      "Neuroscientist known for work on the neural correlates of consciousness. Argues AI systems may approach consciousness on an integrated-information-theory basis.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Allen Institute for Brain Science", role: "Former Chief Scientist", end: "2022", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Christof_Koch",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Takes AI consciousness as a serious possibility under integrated information theory; wrote the foreword to Jeff Sebo's AI welfare paper.",
        quotes: [
          {
            text:
              "Under integrated information theory, many artificial systems might have some degree of consciousness.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Feeling of Life Itself",
              url: "https://mitpress.mit.edu/9780262539555/the-feeling-of-life-itself/",
              medium: "book",
              publisher: "MIT Press",
              date: "2020-01-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
