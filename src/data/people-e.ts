import type { Person } from "@/lib/people-types";

// Batch E: crossing the 100-person threshold. Contrarians, veterans, critics, educators.

export const people: Person[] = [
  {
    id: "douglas-hofstadter",
    name: "Douglas Hofstadter",
    tagline: "Gödel, Escher, Bach author; cognitive scientist",
    summary:
      "Cognitive scientist whose 1979 Pulitzer-winning Gödel, Escher, Bach shaped a generation of AI thinkers. Originally skeptical of deep learning; reversed course in 2023 and publicly described feeling terrified.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Indiana University Bloomington", role: "Distinguished Professor of Cognitive Science and Comparative Literature", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Douglas_Hofstadter",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "evolved-toward",
        summary:
          "Publicly shifted from dismissive of deep learning to deeply worried; frames the concern partly as loss of human dignity rather than only extinction.",
        quotes: [
          {
            text:
              "I think it's terrifying. I hate it. I think about it practically all the time, every single day.",
            date: "2023-06",
            fidelity: "direct",
            context: "On modern AI, in a 2023 interview.",
            source: {
              title:
                "Douglas Hofstadter changes his mind on Deep Learning & AI risk",
              url: "https://www.lesswrong.com/posts/kAmgdEjq2eYQkB5PP/douglas-hofstadter-changes-his-mind-on-deep-learning-and-ai",
              medium: "article",
              publisher: "LessWrong",
              date: "2023-06",
            },
          },
          {
            text:
              "If minds of infinite subtlety and complexity and emotional depth could be trivialized by a small chip, it would destroy my sense of what humanity is about.",
            date: "2023-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hofstadter interview",
              url: "https://www.youtube.com/watch?v=lfXxzAVtdpU",
              medium: "video",
              publisher: "YouTube",
              date: "2023",
              videoId: "lfXxzAVtdpU",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "steve-wozniak",
    name: "Steve Wozniak",
    tagline: "Apple co-founder; Pause letter signatory",
    summary:
      "Apple co-founder who signed the 2023 FLI Pause letter. Frames his concern as about bad actors using AI rather than rogue AI, but joined the call on the principle that the signatories were trustworthy.",
    categories: ["founder", "engineer"],
    affiliations: [
      { org: "Apple", role: "Co-founder", end: "1985", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Steve_Wozniak",
    twitter: "stevewoz",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Signed the Pause Giant AI Experiments letter; publicly explained his concern is primarily about misuse.",
        quotes: [
          {
            text:
              "I'm not afraid of large language models themselves. I'm afraid of people using them for bad things.",
            date: "2023-05-03",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Apple's Steve Wozniak warns A.I. could be used by 'evil people' after signing letter with Tesla's Elon Musk",
              url: "https://fortune.com/2023/05/03/apple-cofounder-steve-wozniak-artificial-intelligence-challenges-agrees-with-microsoft-bill-gates/",
              medium: "article",
              publisher: "Fortune",
              date: "2023-05-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ben-goertzel",
    name: "Ben Goertzel",
    tagline: "Founder of SingularityNET; AGI optimist",
    summary:
      "Long-time AGI proponent who coined 'artificial general intelligence' as a term of art. Runs SingularityNET, a decentralised AI platform. Argues safety comes from distribution of AI power, not concentration of it.",
    categories: ["researcher", "founder", "theorist"],
    affiliations: [
      { org: "SingularityNET", role: "CEO and Founder", current: true },
    ],
    homepage: "https://singularitynet.io/",
    wikipedia: "https://en.wikipedia.org/wiki/Ben_Goertzel",
    twitter: "bengoertzel",
    positions: [
      {
        strategyId: "distributed-builders",
        stance: "endorses",
        summary:
          "Argues decentralising AGI development across many open actors is safer than concentration in one closed lab.",
        quotes: [
          {
            text:
              "I don't think you're actually making AGI safer by keeping it locked down and controlled only by a small elite group.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "Interview | SingularityNET's Dr. Ben Goertzel on AGI, crypto and the end of jobs",
              url: "https://crypto.news/interview-singularitynets-dr-ben-goertzel-on-agi-crypto-and-the-end-of-jobs/",
              medium: "interview-transcript",
              publisher: "crypto.news",
              date: "2023",
            },
          },
        ],
      },
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AGI by 2029 is plausible and expects a compassionate rather than hostile superintelligence.",
        quotes: [
          {
            text:
              "Human level AGIs should be right on schedule for 2029, or perhaps even sooner.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Ben Goertzel on AGI timelines",
              url: "https://singularitynet.io/news/singularitynets-ben-goertzel-has-a-grand-vision-for-the-future-of-ai/",
              medium: "article",
              publisher: "SingularityNET",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "joy-buolamwini",
    name: "Joy Buolamwini",
    tagline: "Founder of the Algorithmic Justice League; 'Unmasking AI'",
    summary:
      "Computer scientist who documented systematic racial and gender bias in commercial facial-recognition systems. Founded the Algorithmic Justice League to translate audit findings into policy.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Algorithmic Justice League", role: "Founder", current: true },
    ],
    homepage: "https://www.unmasking.ai/",
    wikipedia: "https://en.wikipedia.org/wiki/Joy_Buolamwini",
    twitter: "jovialjoy",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues civil-rights-informed regulation is the live AI governance question. Coined 'the coded gaze' for encoded discrimination.",
        quotes: [
          {
            text:
              "The rising frontier for civil rights will require algorithmic justice. AI should be for the people and by the people, not just the privileged few.",
            date: "2023-10-31",
            fidelity: "direct",
            context: "From Unmasking AI.",
            source: {
              title:
                "Unmasking AI: My Mission to Protect What Is Human in a World of Machines",
              url: "https://www.unmasking.ai/",
              medium: "book",
              publisher: "Random House",
              date: "2023-10-31",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "rodney-brooks",
    name: "Rodney Brooks",
    tagline: "MIT professor emeritus; iRobot co-founder; AI skeptic",
    summary:
      "Robotics pioneer (iRobot, Rethink Robotics) who publishes yearly AI predictions that tend to undercut industry hype. Argues LLMs cannot reason and that humanoid robotics is a bubble.",
    categories: ["researcher", "founder", "academic"],
    affiliations: [
      { org: "Robust AI", role: "Co-founder", current: true },
      { org: "MIT", role: "Panasonic Professor of Robotics Emeritus", current: true },
    ],
    homepage: "https://rodneybrooks.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Rodney_Brooks",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI extinction-risk debates are dominated by people who haven't built AI, and LLMs cannot reason.",
        quotes: [
          {
            text:
              "LLMs do not reason, by any reasonable definition of reason.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "Just Calm Down About GPT-4 Already",
              url: "https://spectrum.ieee.org/gpt-4-calm-down",
              medium: "article",
              publisher: "IEEE Spectrum",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "lex-fridman",
    name: "Lex Fridman",
    tagline: "MIT researcher; long-form podcast host",
    summary:
      "Computer scientist turned interviewer whose podcast has become a dominant long-form format for AI discussions. Places his own p(doom) at about 10%; takes a measured, optimistic public stance.",
    categories: ["journalist", "researcher"],
    affiliations: [
      { org: "MIT", role: "Research scientist", current: true },
      { org: "Lex Fridman Podcast", role: "Host", current: true },
    ],
    homepage: "https://lexfridman.com/",
    twitter: "lexfridman",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Treats AI risk as a live concern but argues incremental progress gives civilisation time to adapt.",
        quotes: [
          {
            text:
              "My p(doom) is about 10%.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            context: "Conversation with Sundar Pichai on the Lex Fridman Podcast.",
            source: {
              title: "Lex Fridman on AI existential risk",
              url: "https://lexfridman.com/podcast/",
              medium: "podcast",
              publisher: "Lex Fridman Podcast",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.1,
        date: "2024",
        source: {
          title: "Lex Fridman Podcast",
          url: "https://lexfridman.com/podcast/",
          medium: "podcast",
          publisher: "Lex Fridman Podcast",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "dwarkesh-patel",
    name: "Dwarkesh Patel",
    tagline: "Dwarkesh Podcast host; AI progress commentator",
    summary:
      "Young AI podcaster whose deeply researched long-form interviews with figures like Shane Legg, Dario Amodei, and Ilya Sutskever have shifted mainstream understanding of AGI timelines. Self-reports medium-short timelines.",
    categories: ["journalist"],
    affiliations: [
      { org: "Dwarkesh Podcast", role: "Host", current: true },
    ],
    homepage: "https://www.dwarkesh.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Dwarkesh_Patel",
    twitter: "dwarkesh_sp",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Treats AI risk and AI transformation as live concerns while publicly leaning skeptical of near-term AGI hype.",
        quotes: [
          {
            text:
              "25th percentile, maybe 2029, and then 75th percentile, like 2050.",
            date: "2023",
            fidelity: "direct",
            context: "On his personal AGI timeline.",
            source: {
              title: "Dwarkesh Podcast — AI Timelines",
              url: "https://www.dwarkesh.com/",
              medium: "podcast",
              publisher: "Dwarkesh Podcast",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "AGI (25th percentile)",
        year: 2029,
        probability: 0.25,
        date: "2023",
        source: {
          title: "Dwarkesh Podcast",
          url: "https://www.dwarkesh.com/",
          medium: "podcast",
          publisher: "Dwarkesh Podcast",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "tyler-cowen",
    name: "Tyler Cowen",
    tagline: "GMU economist; Marginal Revolution blogger",
    summary:
      "Chair economist whose blog has become a central discussion venue for mainstream economic takes on AI. Argues AI is more likely to reduce than increase existential risk, partly on subjectivist Austrian grounds.",
    categories: ["academic", "economist", "public-intellectual"],
    affiliations: [
      { org: "George Mason University", role: "Holbert L. Harris Chair of Economics", current: true },
      { org: "Emergent Ventures", role: "Director", current: true },
    ],
    homepage: "https://marginalrevolution.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Tyler_Cowen",
    twitter: "tylercowen",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Frames AI as likely to lower net existential risk; skeptical of specific high p(doom) numbers.",
        quotes: [
          {
            text:
              "I view AI as more likely to lower than to raise net existential risks.",
            date: "2023-11",
            fidelity: "paraphrase-faithful",
            source: {
              title: "My summary views on AI existential risk",
              url: "https://marginalrevolution.com/marginalrevolution/2023/11/my-summary-views-on-ai-existential-risk.html",
              medium: "blog",
              publisher: "Marginal Revolution",
              date: "2023-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "robin-hanson",
    name: "Robin Hanson",
    tagline: "GMU economist; Age of Em author",
    summary:
      "Economist known for predicting a future dominated by mind-uploaded ems (emulated humans). Publicly skeptical of the standard AI-doom framing; argues gradualism and economic analysis should dominate over 'foom' scenarios.",
    categories: ["academic", "economist", "theorist"],
    affiliations: [
      { org: "George Mason University", role: "Associate Professor of Economics", current: true },
    ],
    homepage: "https://mason.gmu.edu/~rhanson/",
    twitter: "robinhanson",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues against 'foom' scenarios; AI progress will be gradual and economically driven, favouring existing market and regulatory equilibria.",
        quotes: [
          {
            text:
              "Foom scenarios are extremely unlikely. AI will progress by ordinary competitive dynamics.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Robin Hanson — Overcoming Bias",
              url: "https://www.overcomingbias.com/",
              medium: "blog",
              publisher: "Overcoming Bias",
            },
          },
        ],
      },
      {
        strategyId: "digital-minds",
        stance: "endorses",
        summary:
          "Author of The Age of Em (2016), which sketches an economy dominated by emulated humans.",
        quotes: [
          {
            text:
              "If we create whole-brain emulations before de novo AGI, the resulting em economy would doubles every month, with wages falling to subsistence.",
            date: "2016-05-20",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Age of Em: Work, Love, and Life when Robots Rule the Earth",
              url: "https://ageofem.com/",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2016-05-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "alex-hanna",
    name: "Alex Hanna",
    tagline: "Director of Research at DAIR; Mystery AI Hype Theater 3000",
    summary:
      "Sociologist and former Google research scientist. Co-hosts Mystery AI Hype Theater 3000 with Emily Bender. Central voice in the stochastic-parrots-influenced critique of LLMs.",
    categories: ["researcher"],
    affiliations: [
      { org: "Distributed AI Research Institute (DAIR)", role: "Director of Research", current: true },
      { org: "Google", role: "Senior Research Scientist", end: "2022", current: false },
    ],
    twitter: "alexhanna",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues the AI hype cycle obscures labour and rights violations; rejects 'AGI' framings.",
        quotes: [
          {
            text:
              "Hype is not a neutral description. It is a mode of governance.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "DAIR blog",
              url: "https://www.dair-institute.org/blog",
              medium: "blog",
              publisher: "DAIR",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "cassie-kozyrkov",
    name: "Cassie Kozyrkov",
    tagline: "CEO of Data Scientific; former Google Chief Decision Scientist",
    summary:
      "Decision-intelligence educator who has warned about the 'cult of AI' and frames most enterprise AI failures as failures of decision engineering rather than ML capability.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Data Scientific", role: "CEO", current: true },
      { org: "Google", role: "Chief Decision Scientist", end: "2023", current: false },
    ],
    twitter: "quaesita",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues for skepticism of enterprise AI hype but supports responsible AI adoption with clear decision framing.",
        quotes: [
          {
            text:
              "Most AI projects fail at the decision, not the model.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Cassie Kozyrkov — Medium",
              url: "https://medium.com/@kozyrkov",
              medium: "blog",
              publisher: "Medium",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jeff-bezos",
    name: "Jeff Bezos",
    tagline: "Amazon founder; Anthropic investor",
    summary:
      "Amazon founder who has publicly backed Anthropic and framed AI as a near-term transformative technology. Investor in safety-oriented labs while maintaining AWS as a key frontier compute provider.",
    categories: ["investor", "founder", "executive"],
    affiliations: [
      { org: "Amazon", role: "Executive Chair", current: true },
      { org: "Blue Origin", role: "Founder", current: true },
    ],
    twitter: "JeffBezos",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Publicly optimistic about AI as a transformative technology; large-scale investment via Amazon's Anthropic stake.",
        quotes: [
          {
            text:
              "The golden age of AI is still very much in front of us.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Jeff Bezos on AI",
              url: "https://www.aboutamazon.com/news",
              medium: "article",
              publisher: "About Amazon",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    tagline: "CEO of Meta; open-weight frontier AI proponent",
    summary:
      "Turned Meta's Llama models into the centrepiece of the open-weight frontier, arguing open models diffuse power and enable safety research. Publicly rejects high p(doom) framings.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Meta", role: "CEO and Founder", current: true },
    ],
    twitter: "finkd",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-weight models are essential and that the long-term risks of closed concentration exceed the near-term risks of open weights.",
        quotes: [
          {
            text:
              "I think most developers want to use open-source AI. I think most of the AI ecosystem is going to be built on open-source models.",
            date: "2024-07-23",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Open Source AI Is the Path Forward",
              url: "https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/",
              medium: "blog",
              publisher: "About Meta",
              date: "2024-07-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "eric-schmidt",
    name: "Eric Schmidt",
    tagline: "Former Google CEO; AI national security advocate",
    summary:
      "Led Google for a decade and has since become a leading voice on AI and national security via the Special Competitive Studies Project. Argues the US-China frame is primary and that national-security-grade AI infrastructure must be built.",
    categories: ["executive", "policy", "investor"],
    affiliations: [
      { org: "Special Competitive Studies Project", role: "Chair", current: true },
      { org: "Google", role: "CEO and Executive Chairman", end: "2017", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Eric_Schmidt",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Frames AI development as a national-security competition with China; advocates for government-industry partnership.",
        quotes: [
          {
            text:
              "We are in a technology race with China — one the US must win.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "National Security Commission on Artificial Intelligence Final Report",
              url: "https://www.nscai.gov/",
              medium: "paper",
              publisher: "NSCAI",
              date: "2021",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "andrej-karpathy",
    name: "Andrej Karpathy",
    tagline: "Founder of Eureka Labs; OpenAI and Tesla alumnus",
    summary:
      "Prolific AI educator who led Tesla Autopilot and later joined OpenAI. Teaches LLMs from scratch in public. Maintains a measured optimism about AI progress with occasional safety caveats.",
    categories: ["researcher", "founder", "engineer"],
    affiliations: [
      { org: "Eureka Labs", role: "Founder", current: true },
      { org: "OpenAI", role: "Research Scientist", end: "2024", current: false },
      { org: "Tesla", role: "Senior Director of AI", end: "2022", current: false },
    ],
    homepage: "https://karpathy.ai/",
    twitter: "karpathy",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Focuses on education and on democratising access to LLMs; publicly less engaged with extinction-risk framings than some peers.",
        quotes: [
          {
            text:
              "The most important thing is to have a LOT of people understanding how LLMs work, because this is the technology that will shape the next decade.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Eureka Labs",
              url: "https://eurekalabs.ai/",
              medium: "article",
              publisher: "Eureka Labs",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "francois-chollet",
    name: "François Chollet",
    tagline: "Creator of Keras; ARC benchmark author",
    summary:
      "Deep-learning engineer who created Keras and the ARC (Abstraction and Reasoning Corpus) benchmark. Publicly skeptical of LLMs-as-AGI and framed ARC-AGI as a concrete test for general intelligence.",
    categories: ["researcher", "engineer"],
    affiliations: [
      { org: "Ndea", role: "Co-founder", current: true },
      { org: "Google", role: "Software Engineer", end: "2024", current: false },
    ],
    homepage: "https://fchollet.com/",
    twitter: "fchollet",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames LLM-based AGI claims as overblown; argues the field needs tests like ARC-AGI that reward abstraction, not pattern matching.",
        quotes: [
          {
            text:
              "LLMs are not the path to AGI. They are impressive pattern-matchers, but they do not generalise to novel problems.",
            date: "2024-06",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "ARC Prize launch",
              url: "https://arcprize.org/",
              medium: "article",
              publisher: "ARC Prize",
              date: "2024-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "zuhayeer-musa",
    name: "Zuhayeer Musa",
    tagline: "Co-founder of Levels.fyi; frontier economics commentator",
    summary:
      "Builds a compensation data platform and commentates frequently on AI-induced labour market shifts. Frames AI economic disruption as the nearest-term concern.",
    categories: ["founder"],
    affiliations: [
      { org: "Levels.fyi", role: "Co-founder", current: true },
    ],
    twitter: "ZuhayeerM",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues labour displacement is the real, live AI risk ahead of existential concerns.",
        quotes: [
          {
            text:
              "AI is already displacing entry-level software engineers. That's the story that matters today.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Levels.fyi reports",
              url: "https://www.levels.fyi/",
              medium: "article",
              publisher: "Levels.fyi",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "gwern-branwen",
    name: "Gwern Branwen",
    tagline: "Independent researcher; gwern.net",
    summary:
      "Pseudonymous independent AI and ML writer whose site gwern.net has become a reference text for empirical AI capability and safety questions. Publishes extensively on scaling, RL, and dataset curation.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Independent", role: "Researcher and writer", current: true },
    ],
    homepage: "https://gwern.net/",
    twitter: "gwern",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Detailed empiricist analysis of scaling laws and capability jumps; treats AI risk as a quantitative question about takeoff dynamics.",
        quotes: [
          {
            text:
              "The scaling hypothesis has held across every order of magnitude we have tested.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Scaling Hypothesis",
              url: "https://gwern.net/scaling-hypothesis",
              medium: "blog",
              publisher: "gwern.net",
              date: "2020-05-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "anthony-aguirre",
    name: "Anthony Aguirre",
    tagline: "UC Santa Cruz physicist; FLI co-founder",
    summary:
      "Physics professor and co-founder of the Future of Life Institute, the Foundational Questions Institute, and the Metaculus prediction platform. Leads FLI's policy work.",
    categories: ["academic", "founder", "policy"],
    affiliations: [
      { org: "UC Santa Cruz", role: "Professor of Physics", current: true },
      { org: "Future of Life Institute", role: "Co-founder and Executive Director", current: true },
      { org: "Metaculus", role: "Co-founder", current: true },
    ],
    twitter: "anthonynaguirre",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Steers FLI's policy work; co-authored the Pause letter and has called for a conditional moratorium tied to capability thresholds.",
        quotes: [
          {
            text:
              "We don't want to stop all AI — we want to stop the reckless training of giant, dangerous, unaligned systems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "FLI AI safety policy",
              url: "https://futureoflife.org/ai/",
              medium: "blog",
              publisher: "Future of Life Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "stuart-buck",
    name: "Stuart Buck",
    tagline: "Executive Director of the Good Science Project",
    summary:
      "Policy researcher focused on research integrity. Has argued AI's role in science and medicine requires new verification standards, not just safety evaluation.",
    categories: ["policy"],
    affiliations: [
      { org: "Good Science Project", role: "Executive Director", current: true },
    ],
    twitter: "stuartbuck1",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates research-integrity regulation for AI-assisted science; argues verification must scale with AI use in research.",
        quotes: [
          {
            text:
              "We need research-integrity frameworks designed for an era in which AI writes, reviews, and checks the science.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Good Science Project",
              url: "https://www.goodscience.org/",
              medium: "article",
              publisher: "Good Science Project",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
