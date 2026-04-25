import type { Person } from "@/lib/people-types";

// Batch P: more philosophers, journalists, and organised-pause advocates.

export const people: Person[] = [
  {
    id: "seth-lazar",
    name: "Seth Lazar",
    tagline: "ANU Professor of Philosophy; MINT Lab founder",
    summary:
      "Australian National University moral philosopher whose 2023 Stanford Tanner Lecture on AI and human values has been widely cited. Runs the Machine Intelligence and Normative Theory Lab.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Australian National University", role: "Professor of Philosophy", current: true },
      { org: "Oxford Institute for Ethics in AI", role: "Distinguished Research Fellow", current: true },
    ],
    homepage: "https://sethlazar.org/",
    twitter: "sethlazar",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance is a problem of political philosophy: what authority structures legitimate the deployment of powerful AI.",
        quotes: [
          {
            text:
              "The political philosophy of AI is not a decoration on the side of the technical problem. It is the problem.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Seth Lazar homepage",
              url: "https://sethlazar.org/",
              medium: "article",
              publisher: "sethlazar.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "shakeel-hashim",
    name: "Shakeel Hashim",
    tagline: "Editor of Transformer news; AI policy journalist",
    summary:
      "Editor of Transformer, the leading weekly AI-policy newsletter. Ex-Economist journalist, now at the Tarbell Center for AI Journalism. Frames the beat as 'AI safety and governance' rather than generic tech coverage.",
    categories: ["journalist"],
    affiliations: [
      { org: "Transformer", role: "Editor", current: true },
      { org: "Tarbell Center for AI Journalism", role: "Leadership team", current: true },
    ],
    homepage: "https://www.transformernews.ai/",
    twitter: "ShakeelHashim",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Tracks global AI policy week by week; argues the field still lacks a shared vocabulary for comparing regulatory approaches.",
        quotes: [
          {
            text:
              "You're either pushing to accelerate as fast as possible — no holds barred, no guardrails allowed — or dismissed, usually with a smirk, as a 'decel,' an enemy of progress.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Introducing Transformer",
              url: "https://www.transformernews.ai/p/introducing-transformer",
              medium: "blog",
              publisher: "Transformer",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andrea-miotti",
    name: "Andrea Miotti",
    tagline: "Founder of ControlAI; pause campaigner",
    summary:
      "Italian founder of ControlAI, a non-profit calling for prohibition of development of superintelligent AI. Works directly with UK and US policymakers.",
    categories: ["activist", "policy", "founder"],
    affiliations: [
      { org: "ControlAI", role: "Founder and CEO", current: true },
    ],
    twitter: "_AndreaMiotti",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Publicly campaigns for a prohibition on superintelligence development; drafts legislative proposals for licensing compute above 10^25 FLOP.",
        quotes: [
          {
            text:
              "Training runs above 10^25 FLOP should require a license; license applications should detail capabilities, risk management, and safety protocols.",
            date: "2023-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Written evidence submitted by Andrea Miotti and Steven Adler",
              url: "https://committees.parliament.uk/writtenevidence/148236/pdf/",
              medium: "testimony",
              publisher: "UK Parliament",
              date: "2023-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "steven-adler",
    name: "Steven Adler",
    tagline: "Independent AI researcher; former OpenAI policy team",
    summary:
      "Ex-OpenAI policy researcher who resigned citing safety culture concerns. Now independent, collaborating with ControlAI on governance proposals.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Independent", role: "AI safety researcher", current: true },
      { org: "OpenAI", role: "Policy team", end: "2024", current: false },
    ],
    twitter: "sjgadler",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Publicly resigned from OpenAI citing safety-culture concerns; now advocates for external regulatory constraints.",
        quotes: [
          {
            text:
              "I'm leaving OpenAI because the pace of AI development scares me, and because I don't think the company has the institutions to handle it.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Steven Adler resignation thread",
              url: "https://twitter.com/sjgadler",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "garrison-lovely",
    name: "Garrison Lovely",
    tagline: "Journalist covering AI safety and EA",
    summary:
      "Freelance journalist who reports on AI safety, effective altruism, and the political-economy dynamics of frontier labs. Has been widely published in Jacobin, The Nation, and other outlets.",
    categories: ["journalist"],
    affiliations: [
      { org: "Independent", role: "Journalist", current: true },
    ],
    twitter: "GarrisonLovely",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Reports on the AI-safety movement from a left-wing labour perspective; combines x-risk seriousness with labour-politics framing.",
        quotes: [
          {
            text:
              "The AI debate is not just about whether we survive, but about who controls what survives.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Garrison Lovely — freelance archive",
              url: "https://www.garrisonlovely.com/",
              medium: "blog",
              publisher: "garrisonlovely.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jessica-newman",
    name: "Jessica Newman",
    tagline: "UC Berkeley AI Security Initiative director",
    summary:
      "Director of the AI Security Initiative at UC Berkeley's Center for Long-Term Cybersecurity. Works at the intersection of AI and international security.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "UC Berkeley Center for Long-Term Cybersecurity", role: "Director, AI Security Initiative", current: true },
    ],
    twitter: "jessicnewman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI security must be treated as international security and requires cooperative governance.",
        quotes: [
          {
            text:
              "AI security is international security. There is no national AI safety that works without cooperation across borders.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Security Initiative",
              url: "https://cltc.berkeley.edu/program/artificial-intelligence-security-initiative/",
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
    id: "simon-rosenberg",
    name: "Simon Rosenberg",
    tagline: "NDN democracy strategist; AI political impact",
    summary:
      "Democratic strategist whose recent writing has focused on AI's threat to democratic elections. Argues election-security is the near-term critical governance question.",
    categories: ["policy", "public-intellectual"],
    affiliations: [
      { org: "NDN / New Policy Institute", role: "President", current: true },
    ],
    twitter: "SimonWDC",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues democracy must be actively defended against AI-enabled disinformation; frames governance as an election-security problem.",
        quotes: [
          {
            text:
              "If we do not get AI and elections right in the next few years, we lose the capacity to govern AI at all.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "NDN on AI and democracy",
              url: "https://www.ndn.org/",
              medium: "article",
              publisher: "NDN",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jim-keller",
    name: "Jim Keller",
    tagline: "CEO of Tenstorrent; legendary chip architect",
    summary:
      "Chip architect who designed key components of AMD, Apple, and Tesla silicon. Now runs Tenstorrent, building open-architecture AI accelerators. Frames compute openness as a democratisation lever.",
    categories: ["executive", "engineer", "founder"],
    affiliations: [
      { org: "Tenstorrent", role: "CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jim_Keller_(engineer)",
    twitter: "jimkxa",
    positions: [
      {
        strategyId: "distributed-builders",
        stance: "endorses",
        summary:
          "Argues open-architecture AI silicon is the counter to compute-oligopoly risk.",
        quotes: [
          {
            text:
              "If we don't build open silicon, we've already lost the AI-governance fight.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tenstorrent",
              url: "https://www.tenstorrent.com/",
              medium: "article",
              publisher: "Tenstorrent",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daphne-koller",
    name: "Daphne Koller",
    tagline: "Insitro CEO; Coursera co-founder",
    summary:
      "Stanford ML pioneer and Coursera co-founder who now runs Insitro, applying AI to drug discovery. Frames AI as a major positive-sum medical transformation.",
    categories: ["researcher", "founder", "executive"],
    affiliations: [
      { org: "Insitro", role: "CEO and Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Daphne_Koller",
    twitter: "DaphneKoller",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Bullish on AI as a scientific and medical transformation; less focused on x-risk framings.",
        quotes: [
          {
            text:
              "AI is giving us the tools to unlock biology at a pace that was unimaginable even a few years ago.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Insitro",
              url: "https://www.insitro.com/",
              medium: "article",
              publisher: "Insitro",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ruslan-salakhutdinov",
    name: "Ruslan Salakhutdinov",
    tagline: "CMU professor; former Apple AI head",
    summary:
      "CMU deep learning professor and former Apple AI research head. Publicly engaged on safety but more measured than the more outspoken camp.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Professor of Computer Science", current: true },
      { org: "Apple", role: "Former Director of AI Research", end: "2020", current: false },
    ],
    homepage: "https://www.cs.cmu.edu/~rsalakhu/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Engaged measured academic voice on the safety research program.",
        quotes: [
          {
            text:
              "Alignment is a research direction that deserves rigorous academic engagement, not just industry branding.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ruslan Salakhutdinov homepage",
              url: "https://www.cs.cmu.edu/~rsalakhu/",
              medium: "article",
              publisher: "CMU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ramin-hasani",
    name: "Ramin Hasani",
    tagline: "Liquid AI CEO; liquid neural networks pioneer",
    summary:
      "MIT-trained researcher who co-founded Liquid AI to build non-transformer foundation models. Argues the future of AI is architectural diversity rather than monolithic scale.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Liquid AI", role: "CEO and Co-founder", current: true },
    ],
    twitter: "ramin_m_h",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Skeptical that transformer-only scaling is the path to AGI; builds alternative architectures.",
        quotes: [
          {
            text:
              "The default narrative that transformer scale-up leads to AGI is probably wrong. Architectural diversity matters.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Liquid AI",
              url: "https://www.liquid.ai/",
              medium: "article",
              publisher: "Liquid AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "thomas-krendl-gilbert",
    name: "Thomas Krendl Gilbert",
    tagline: "Cornell Tech ethicist; reinforcement learning ethics",
    summary:
      "AI ethicist who studies the governance and moral dimensions of reinforcement learning systems. Argues the norms governing RLHF shape what AI values become.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Cornell Tech", role: "Postdoctoral Fellow in AI Ethics", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Writes on the ethical dynamics of reward learning from human feedback; argues RLHF is a social process, not just a technical one.",
        quotes: [
          {
            text:
              "Reinforcement learning from human feedback is a political process. The human feedback comes from somewhere; whose feedback wins shapes what values the model has.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Thomas Krendl Gilbert",
              url: "https://www.tks-gilbert.com/",
              medium: "article",
              publisher: "tks-gilbert.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "julia-galef",
    name: "Julia Galef",
    tagline: "Rationalist author; former CFAR president",
    summary:
      "Rationalist writer and former president of the Center for Applied Rationality. Author of The Scout Mindset. Has written measured takes on AI risk that mostly agree with the non-extreme end of the AI safety community.",
    categories: ["public-intellectual", "theorist"],
    affiliations: [
      { org: "Rationally Speaking Podcast", role: "Host", current: true },
      { org: "Center for Applied Rationality", role: "Co-founder and former President", end: "2020", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Julia_Galef",
    twitter: "juliagalef",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Takes AI risk seriously but is public about calibration concerns and the risk of unfalsifiable framings.",
        quotes: [
          {
            text:
              "Taking AI risk seriously and being epistemically calibrated are not in tension.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Rationally Speaking Podcast",
              url: "https://rationallyspeakingpodcast.org/",
              medium: "podcast",
              publisher: "Rationally Speaking Podcast",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
