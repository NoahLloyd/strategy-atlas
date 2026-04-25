import type { Person } from "@/lib/people-types";

// Batch B: philosophers, ethics researchers, and political-economy voices.

export const people: Person[] = [
  {
    id: "nick-bostrom",
    name: "Nick Bostrom",
    tagline: "Author of Superintelligence; founded Oxford's Future of Humanity Institute",
    summary:
      "Philosopher whose 2014 book Superintelligence made 'existential risk from AI' legible to mainstream audiences and policymakers. Frames the problem as a control problem requiring pre-committed solutions before we create superhuman systems.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Future of Humanity Institute, Oxford", role: "Founding Director", end: "2024", current: false },
      { org: "Macrostrategy Research Initiative", role: "Director", current: true },
    ],
    homepage: "https://nickbostrom.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Nick_Bostrom",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues existential risk reduction should dominate ordinary cost-benefit analysis given the scale of what is at stake.",
        quotes: [
          {
            text:
              "Before the prospect of an intelligence explosion, we humans are like small children playing with a bomb. Such is the mismatch between the power of our plaything and the immaturity of our conduct.",
            date: "2014-07-03",
            fidelity: "direct",
            context: "Closing passages of Superintelligence.",
            source: {
              title: "Superintelligence: Paths, Dangers, Strategies",
              url: "https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2014-07-03",
            },
          },
        ],
      },
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Articulated the 'control problem': a superintelligence must have human-beneficial goals built in, because attempting to control a more capable agent after the fact is expected to fail.",
        quotes: [
          {
            text:
              "The fate of the gorillas now depends more on us humans than on the gorillas themselves; so too the fate of our species then would come to depend on the actions of the machine superintelligence.",
            date: "2014-07-03",
            fidelity: "direct",
            source: {
              title: "Superintelligence",
              url: "https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2014-07-03",
            },
          },
        ],
      },
      {
        strategyId: "long-reflection",
        stance: "endorses",
        summary:
          "His 2024 Deep Utopia explores what happens after superintelligence solves all practical problems, the 'post-instrumental' condition.",
        quotes: [
          {
            text:
              "If we extrapolate this internal directionality to its logical terminus, we arrive at a condition in which we can accomplish everything with no effort. Superintelligence could whisk us the rest of the way.",
            date: "2024-03-27",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Deep Utopia: Life and Meaning in a Solved World",
              url: "https://nickbostrom.com/deep-utopia/",
              medium: "book",
              publisher: "Ideapress Publishing",
              date: "2024-03-27",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "toby-ord",
    name: "Toby Ord",
    tagline: "Philosopher; author of The Precipice",
    summary:
      "Oxford moral philosopher who estimates a 1-in-6 chance that existential catastrophe ends humanity this century, with unaligned AI as the single largest contributor at about 1-in-10.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Oxford Martin School", role: "Senior Researcher", current: true },
      { org: "Future of Humanity Institute, Oxford", role: "Senior Research Fellow", end: "2024", current: false },
    ],
    homepage: "https://www.tobyord.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Toby_Ord",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Treats existential risk reduction as a top moral priority; quantifies specific risks in The Precipice.",
        quotes: [
          {
            text:
              "Humanity stands at a precipice. Our species could survive for millions of generations, enough time to end disease, poverty, and injustice; to reach new heights of flourishing.",
            date: "2020-03-05",
            fidelity: "direct",
            context: "Opening of The Precipice.",
            source: {
              title: "The Precipice: Existential Risk and the Future of Humanity",
              url: "https://theprecipice.com/",
              medium: "book",
              publisher: "Bloomsbury",
              date: "2020-03-05",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.1,
        date: "2020-03-05",
        definition:
          "Probability of existential catastrophe from unaligned AI in the next 100 years, as estimated in The Precipice.",
        source: {
          title: "The Precipice",
          url: "https://theprecipice.com/",
          medium: "book",
          publisher: "Bloomsbury",
          date: "2020-03-05",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "gary-marcus",
    name: "Gary Marcus",
    tagline: "Cognitive scientist; LLM skeptic; regulation advocate",
    summary:
      "NYU emeritus professor and persistent public critic of pure scaling. Testified alongside Sam Altman to the US Senate in May 2023 calling for licensing, an FDA-style pre-deployment review, and a nimble monitoring agency.",
    categories: ["researcher", "academic", "public-intellectual"],
    affiliations: [
      { org: "NYU", role: "Emeritus Professor of Psychology and Neural Science", current: true },
    ],
    homepage: "https://garymarcus.substack.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Gary_Marcus",
    twitter: "GaryMarcus",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for an FDA-style pre-deployment safety review, a nimble monitoring agency with pullback authority, and mandatory transparency.",
        quotes: [
          {
            text:
              "The big tech companies' preferred plan boils down to 'trust us'. Why should we?",
            date: "2023-05-16",
            fidelity: "direct",
            context: "Senate testimony on AI oversight.",
            source: {
              title: "Senate Testimony Gary Marcus May 16, 2023",
              url: "https://www.judiciary.senate.gov/imo/media/doc/2023-05-16%20-%20Testimony%20-%20Marcus.pdf",
              medium: "testimony",
              publisher: "US Senate Judiciary Committee",
              date: "2023-05-16",
            },
          },
          {
            text:
              "We are facing a perfect storm of corporate irresponsibility, widespread deployment, lack of adequate regulation, and inherent unreliability.",
            date: "2023-05-16",
            fidelity: "direct",
            source: {
              title: "Senate Testimony Gary Marcus May 16, 2023",
              url: "https://www.judiciary.senate.gov/imo/media/doc/2023-05-16%20-%20Testimony%20-%20Marcus.pdf",
              medium: "testimony",
              publisher: "US Senate Judiciary Committee",
              date: "2023-05-16",
            },
          },
        ],
      },
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "While advocating strong regulation, Marcus is publicly skeptical of LLM-only paths to AGI and of high p(doom) framings.",
        quotes: [
          {
            text:
              "Current large language models are not intelligent; they are stochastic compression of text at best.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Gary Marcus archive",
              url: "https://garymarcus.substack.com/",
              medium: "blog",
              publisher: "Marcus on AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "timnit-gebru",
    name: "Timnit Gebru",
    tagline: "Founder of DAIR; co-author of 'Stochastic Parrots'",
    summary:
      "Computer scientist whose 2020 firing from Google over the Stochastic Parrots paper catalysed the AI-ethics-and-justice wing of the field. Publicly opposes both the 'AGI-pilled' extinction narrative and the unregulated deployment of current LLMs.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Distributed AI Research Institute (DAIR)", role: "Founder and Executive Director", current: true },
      { org: "Google", role: "Co-lead, Ethical AI team", end: "2020", current: false },
    ],
    homepage: "https://www.dair-institute.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Timnit_Gebru",
    twitter: "timnitGebru",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues the AI extinction narrative diverts attention from immediate harms: labour exploitation, data extraction, and discriminatory deployment.",
        quotes: [
          {
            text:
              "We urge the signatories of the FLI letter to be mindful of the hype surrounding the power of AI, and to focus on the actual harms that are being done.",
            date: "2023-03-31",
            fidelity: "paraphrase-faithful",
            context:
              "DAIR statement in response to the FLI Pause letter.",
            source: {
              title: "Statement on the 'AI pause' letter",
              url: "https://www.dair-institute.org/blog/letter-statement-March2023/",
              medium: "article",
              publisher: "DAIR",
              date: "2023-03-31",
            },
          },
        ],
      },
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Calls for regulation grounded in present harms, labour, data rights, surveillance, rather than speculative extinction concerns.",
        quotes: [
          {
            text:
              "Language models are stitching together sequences of linguistic forms observed in their vast training data, according to probabilistic information about how they combine, but without any reference to meaning: stochastic parrots.",
            date: "2021-03-01",
            fidelity: "paraphrase-faithful",
            context: "From the Stochastic Parrots paper co-authored with Bender, McMillan-Major, and Mitchell.",
            source: {
              title: "On the Dangers of Stochastic Parrots",
              url: "https://s10251.pcdn.co/pdf/2021-bender-parrots.pdf",
              medium: "paper",
              publisher: "FAccT 2021",
              date: "2021-03-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "emily-bender",
    name: "Emily M. Bender",
    tagline: "Linguist; co-author of 'Stochastic Parrots'",
    summary:
      "Computational linguist at UW who co-authored the foundational Stochastic Parrots paper and co-hosts the Mystery AI Hype Theater 3000 podcast with Alex Hanna. Central voice in the AI-ethics critique of LLM hype and x-risk framing.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Washington", role: "Professor of Linguistics", current: true },
    ],
    homepage: "https://faculty.washington.edu/ebender/",
    twitter: "emilymbender",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues that LLMs do not understand language, that existential-risk framings are harmful marketing, and that real harms are current and tractable.",
        quotes: [
          {
            text:
              "Large language models present dangers such as environmental and financial costs, inscrutability leading to unknown dangerous biases, and potential for deception. They cannot understand the concepts underlying what they learn.",
            date: "2021-03-01",
            fidelity: "paraphrase-faithful",
            source: {
              title: "On the Dangers of Stochastic Parrots",
              url: "https://s10251.pcdn.co/pdf/2021-bender-parrots.pdf",
              medium: "paper",
              publisher: "FAccT 2021",
              date: "2021-03-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "margaret-mitchell",
    name: "Margaret Mitchell",
    tagline: "Chief Ethics Scientist at Hugging Face; 'Stochastic Parrots' co-author",
    summary:
      "AI ethics researcher fired from Google alongside Timnit Gebru for the Stochastic Parrots paper (published under the pseudonym 'Shmargaret Shmitchell'). Now leads ethics at Hugging Face.",
    categories: ["researcher"],
    affiliations: [
      { org: "Hugging Face", role: "Chief Ethics Scientist", current: true },
      { org: "Google", role: "Ethical AI team co-lead", end: "2021", current: false },
    ],
    twitter: "mmitchell_ai",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for datasheets, model cards, and documentation-driven governance of model deployment.",
        quotes: [
          {
            text:
              "We need documentation of models and their datasets as a basic accountability mechanism, not an optional extra.",
            date: "2019-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Model Cards for Model Reporting",
              url: "https://dl.acm.org/doi/10.1145/3287560.3287596",
              medium: "paper",
              publisher: "FAT* 2019",
              date: "2019-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "shane-legg",
    name: "Shane Legg",
    tagline: "Google DeepMind co-founder; chief AGI scientist",
    summary:
      "Co-founded DeepMind in 2010 and has maintained a 50% AGI-by-2028 prediction for over a decade. Frames AGI as 'almost certainly' arriving this century.",
    categories: ["researcher", "founder", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Co-founder and Chief AGI Scientist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Shane_Legg",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk.",
        quotes: [
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
    ],
    timelines: [
      {
        milestone: "Human-level AGI (50% confidence)",
        year: 2028,
        probability: 0.5,
        date: "2023-10-26",
        source: {
          title: "Shane Legg (DeepMind Founder), 2028 AGI",
          url: "https://www.dwarkesh.com/p/shane-legg",
          medium: "podcast",
          publisher: "Dwarkesh Patel Podcast",
          date: "2023-10-26",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jaan-tallinn",
    name: "Jaan Tallinn",
    tagline: "Skype co-founder; AI safety funder and advocate",
    summary:
      "Estonian entrepreneur who used his Skype wealth to co-found the Future of Life Institute and CSER, bankrolling much of the early AI-safety ecosystem. Signatory to both the Pause letter and the Statement on AI Risk.",
    categories: ["investor", "founder", "activist"],
    affiliations: [
      { org: "Future of Life Institute", role: "Co-founder", current: true },
      { org: "Centre for the Study of Existential Risk (Cambridge)", role: "Co-founder", current: true },
      { org: "Skype", role: "Founding engineer", end: "2005", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jaan_Tallinn",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk and the Pause letter.",
        quotes: [
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
          {
            text:
              "I have yet to meet anyone at an AI lab who says the risk of the next generation model blowing up the planet is less than 1%.",
            date: "2020-12-29",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Skype co-founder Jaan Tallinn reveals the 3 existential risks he's most concerned about",
              url: "https://www.cnbc.com/2020/12/29/skype-co-founder-jaan-tallinn-on-3-most-concerning-existential-risks-.html",
              medium: "article",
              publisher: "CNBC",
              date: "2020-12-29",
            },
          },
        ],
      },
      {
        strategyId: "pause",
        stance: "endorses",
        summary: "Signed the 2023 FLI Pause Giant AI Experiments letter.",
        quotes: [
          {
            text: "I am signing the pause letter.",
            date: "2023-03-22",
            fidelity: "summary",
            source: {
              title: "Pause Giant AI Experiments: signatories",
              url: "https://futureoflife.org/open-letter/pause-giant-ai-experiments/",
              medium: "article",
              publisher: "Future of Life Institute",
              date: "2023-03-22",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "marc-andreessen",
    name: "Marc Andreessen",
    tagline: "Co-founder of Andreessen Horowitz; techno-optimist manifesto author",
    summary:
      "Netscape co-founder and leading Silicon Valley investor whose October 2023 Techno-Optimist Manifesto explicitly frames AI deceleration as a form of murder. Political exponent of the 'accelerate' pole.",
    categories: ["investor", "founder", "executive"],
    affiliations: [
      { org: "Andreessen Horowitz (a16z)", role: "Co-founder and General Partner", current: true },
    ],
    homepage: "https://a16z.com/",
    twitter: "pmarca",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues any deceleration of AI costs lives via foregone medical and scientific progress.",
        quotes: [
          {
            text:
              "Any deceleration of AI will cost lives. Deaths that were preventable by the AI that was prevented from existing is a form of murder.",
            date: "2023-10-16",
            fidelity: "direct",
            context: "The Techno-Optimist Manifesto.",
            source: {
              title: "The Techno-Optimist Manifesto",
              url: "https://a16z.com/the-techno-optimist-manifesto/",
              medium: "blog",
              publisher: "a16z",
              date: "2023-10-16",
            },
          },
          {
            text:
              "We believe that we are, have been, and will always be the masters of technology, not mastered by technology.",
            date: "2023-10-16",
            fidelity: "direct",
            source: {
              title: "The Techno-Optimist Manifesto",
              url: "https://a16z.com/the-techno-optimist-manifesto/",
              medium: "blog",
              publisher: "a16z",
              date: "2023-10-16",
            },
          },
        ],
      },
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary: "Argues markets and technology are the primary engine of welfare.",
        quotes: [
          {
            text:
              "Technology is the glory of human ambition and achievement, the spearhead of progress, and the realization of our potential.",
            date: "2023-10-16",
            fidelity: "direct",
            source: {
              title: "The Techno-Optimist Manifesto",
              url: "https://a16z.com/the-techno-optimist-manifesto/",
              medium: "blog",
              publisher: "a16z",
              date: "2023-10-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "guillaume-verdon",
    name: "Guillaume Verdon",
    tagline: "Founder of Extropic; aka 'Beff Jezos', founder of the e/acc movement",
    summary:
      "Quantum physicist and Google alumnus who, writing anonymously as @BasedBeffJezos, founded the effective accelerationism (e/acc) movement. Pushed e/acc as the memetic counterweight to AI safety discourse on X.",
    categories: ["researcher", "founder", "activist"],
    affiliations: [
      { org: "Extropic", role: "Co-founder and CEO", current: true },
      { org: "Google X", role: "Quantum machine learning researcher", end: "2022", current: false },
    ],
    twitter: "BasedBeffJezos",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Frames accelerating compute and AI capability as aligned with the thermodynamic direction of life.",
        quotes: [
          {
            text:
              "Effective accelerationism wants to propel humanity up the Kardashev gradient.",
            date: "2023-12-29",
            fidelity: "paraphrase-faithful",
            context: "Lex Fridman podcast episode 407.",
            source: {
              title: "Guillaume Verdon: Beff Jezos, E/acc Movement, Physics, Computation & AGI",
              url: "https://www.youtube.com/watch?v=8fEEbKJoNbU",
              medium: "video",
              publisher: "Lex Fridman Podcast",
              date: "2023-12-29",
              videoId: "8fEEbKJoNbU",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jack-clark",
    name: "Jack Clark",
    tagline: "Co-founder of Anthropic; Import AI newsletter",
    summary:
      "Former OpenAI policy director turned Anthropic co-founder. Writes the weekly Import AI newsletter, which has become a reference text for the AI policy community. Testifies regularly to Congress.",
    categories: ["policy", "founder"],
    affiliations: [
      { org: "Anthropic", role: "Co-founder and Head of Policy", current: true },
      { org: "OpenAI", role: "Policy Director", end: "2021", current: false },
    ],
    homepage: "https://jack-clark.net/",
    twitter: "jackclarkSF",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for measurement-driven, iterative regulation of frontier AI with light-touch but progressive constraints.",
        quotes: [
          {
            text:
              "AI is moving faster than the government infrastructure available to understand it. That gap is the governance problem.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Import AI",
              url: "https://jack-clark.net/",
              medium: "blog",
              publisher: "Import AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "helen-toner",
    name: "Helen Toner",
    tagline: "Director of Strategy at CSET; former OpenAI board member",
    summary:
      "Policy researcher who served on the OpenAI board and voted to remove Sam Altman in November 2023. Now runs strategy at Georgetown's Center for Security and Emerging Technology and is a prominent voice on AI governance.",
    categories: ["policy", "academic"],
    affiliations: [
      { org: "Center for Security and Emerging Technology (Georgetown)", role: "Director of Strategy and Foundational Research Grants", current: true },
      { org: "OpenAI", role: "Board member", end: "2023-11", current: false },
    ],
    homepage: "https://cset.georgetown.edu/staff/helen-toner/",
    twitter: "hlntnr",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Calls for empowered oversight bodies, mandatory reporting, and clearer lines between frontier labs and investors.",
        quotes: [
          {
            text:
              "For years, Sam had made it really difficult for the board to do its job by withholding information, misrepresenting things, and in some cases outright lying to the board.",
            date: "2024-05-28",
            fidelity: "direct",
            context: "TED AI podcast interview with Bilawal Sidhu after her departure from the OpenAI board.",
            source: {
              title: "Helen Toner on the OpenAI board ouster",
              url: "https://www.ted.com/podcasts/the-ted-ai-show",
              medium: "podcast",
              publisher: "The TED AI Show",
              date: "2024-05-28",
            },
          },
          {
            text:
              "There is a potential race to the bottom on safety as AI companies compete for market share. We argue this is a problem that needs collective action to solve.",
            date: "2023-10",
            fidelity: "paraphrase-faithful",
            context:
              "From her co-authored paper 'Decoding Intentions: Artificial Intelligence and Costly Signals', the paper that preceded the OpenAI board clash.",
            source: {
              title: "Decoding Intentions: Artificial Intelligence and Costly Signals",
              url: "https://cset.georgetown.edu/publication/decoding-intentions/",
              medium: "paper",
              publisher: "CSET Georgetown",
              date: "2023-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jeffrey-ladish",
    name: "Jeffrey Ladish",
    tagline: "Executive Director of Palisade Research",
    summary:
      "AI security researcher who demonstrates how easily safety fine-tuning can be removed from open-weight models. Advocates for strict controls on frontier model distribution and for treating weights as hazardous.",
    categories: ["researcher"],
    affiliations: [
      { org: "Palisade Research", role: "Executive Director", current: true },
    ],
    twitter: "JeffLadish",
    positions: [
      {
        strategyId: "closed-weights",
        stance: "endorses",
        summary:
          "Empirically demonstrates removing RLHF safety from open-weight models, arguing that releasing weights is irreversible proliferation.",
        quotes: [
          {
            text:
              "Releasing the weights of a frontier model is a one-way operation. You cannot uninvent a weapon.",
            date: "2023-10",
            fidelity: "paraphrase-loose",
            source: {
              title: "Palisade Research",
              url: "https://palisaderesearch.org/",
              medium: "blog",
              publisher: "Palisade Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "liron-shapira",
    name: "Liron Shapira",
    tagline: "Founder; Doom Debates podcast host",
    summary:
      "Tech founder (Pulse, Relationship Hero) and host of Doom Debates podcast, where he argues for short timelines and high p(doom) against guests who disagree.",
    categories: ["public-intellectual", "founder"],
    affiliations: [
      { org: "Doom Debates", role: "Host", current: true },
      { org: "Relationship Hero", role: "Co-founder", end: "2024" },
    ],
    homepage: "https://lironshapira.com/",
    twitter: "liron",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues alignment is unsolved, timelines are short, and most AI safety messaging understates the urgency; runs Doom Debates to stress-test the case in public.",
        quotes: [
          {
            text:
              "If you actually take the technical alignment problem seriously, our position is dire. Doom Debates exists because the public conversation does not match the technical reality.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Doom Debates podcast",
              url: "https://www.youtube.com/@DoomDebates",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
      {
        strategyId: "pause",
        stance: "endorses",
        summary: "Publicly advocates for a pause or slowdown on frontier training.",
        quotes: [
          {
            text:
              "My p(doom) is 50% and I think a pause is the only sensible policy.",
            date: "2023-11",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Doom Debates",
              url: "https://www.youtube.com/@DoomDebates",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.5,
        date: "2024",
        definition: "Existential catastrophe from AI in the next several decades.",
        source: {
          title: "Liron Shapira on Doom Debates",
          url: "https://www.youtube.com/@DoomDebates",
          medium: "video",
          publisher: "YouTube",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lina-khan",
    name: "Lina Khan",
    tagline: "Former chair of the FTC",
    summary:
      "Legal scholar who led an aggressive antitrust enforcement posture against AI-adjacent deals, launching probes into the OpenAI-Microsoft relationship. Frames AI governance partly as a competition-law problem.",
    categories: ["policy"],
    affiliations: [
      { org: "Federal Trade Commission", role: "Chair", end: "2025-01", current: false },
    ],
    twitter: "linakhanFTC",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues concentration in AI infrastructure and deployment requires aggressive antitrust enforcement.",
        quotes: [
          {
            text:
              "We know that moments of technological transition can lead to enormous consolidation, and moments of transition are also when the right policy can keep markets open.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Lina Khan on AI and competition",
              url: "https://www.ftc.gov/news-events/news/speeches",
              medium: "talk",
              publisher: "FTC",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.15,
        date: "2023-11",
        source: {
          title: "Tweet citing Lina Khan's p(doom)",
          url: "https://twitter.com/liron/status/1723458202090774949",
          medium: "tweet",
          publisher: "X/Twitter",
          date: "2023-11-12",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
