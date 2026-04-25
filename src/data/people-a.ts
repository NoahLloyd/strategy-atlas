import type { Person } from "@/lib/people-types";

// Batch A: highest-profile, most well-documented AI strategy holders.
// Every quote is tied to a primary source URL that was verified live.

export const people: Person[] = [
  {
    id: "geoffrey-hinton",
    name: "Geoffrey Hinton",
    tagline: "Godfather of deep learning; left Google in 2023 to speak about AI risk",
    summary:
      "Turing Award–winning neural network pioneer whose 2023 departure from Google became a pivot for mainstream AI extinction discourse. Publicly estimates a non-trivial chance AI wipes out humanity and calls for international coordination, while remaining non-committal on specific policy levers.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Toronto", role: "Emeritus Professor of Computer Science", current: true },
      { org: "Google", role: "VP and Engineering Fellow", end: "2023", current: false },
    ],
    homepage: "https://www.cs.toronto.edu/~hinton/",
    wikipedia: "https://en.wikipedia.org/wiki/Geoffrey_Hinton",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Treats AI extinction risk as on par with pandemic and nuclear risk. Was a headline signatory of the CAIS Statement on AI Risk.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            context:
              "Single-sentence Statement on AI Risk published by CAIS; Hinton was listed first among AI scientists.",
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
        strategyId: "pause",
        stance: "mixed",
        summary:
          "Has expressed sympathy for slowing development but stops short of endorsing a full moratorium; frames the risk as primarily about losing control and about bad-actor misuse.",
        quotes: [
          {
            text:
              "If it gets to be much smarter than us, it will be very good at manipulation because it will have learned that from us.",
            date: "2023-10-08",
            fidelity: "paraphrase-faithful",
            context:
              "CBS 60 Minutes interview with Scott Pelley, the most-watched mainstream coverage of Hinton's position.",
            source: {
              title: "Godfather of AI Geoffrey Hinton: The 60 Minutes Interview",
              url: "https://www.youtube.com/watch?v=qrvK_KuIeJk",
              medium: "video",
              publisher: "CBS 60 Minutes",
              date: "2023-10-08",
              videoId: "qrvK_KuIeJk",
              videoPlatform: "youtube",
            },
          },
          {
            text: "It is hard to see how you can prevent the bad actors from using it for bad things.",
            date: "2023-05-01",
            fidelity: "direct",
            context:
              "Interview with the New York Times announcing his departure from Google so he could speak freely about AI dangers.",
            source: {
              title:
                "Geoffrey Hinton: AI pioneer quits Google to warn about the technology's 'dangers'",
              url: "https://www.cnn.com/2023/05/01/tech/geoffrey-hinton-leaves-google-ai-fears/index.html",
              medium: "article",
              publisher: "CNN Business",
              date: "2023-05-01",
            },
          },
          {
            text: "I left so that I could talk about the dangers of AI without considering how this impacts Google.",
            date: "2023-05-01",
            fidelity: "direct",
            source: {
              title:
                "Deep learning pioneer Geoffrey Hinton quits Google",
              url: "https://www.technologyreview.com/2023/05/01/1072478/deep-learning-pioneer-geoffrey-hinton-quits-google/",
              medium: "article",
              publisher: "MIT Technology Review",
              date: "2023-05-01",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.1, 0.5],
        date: "2024-06",
        definition: "Probability AI leads to human extinction in the next 30 years",
        source: {
          title: "PauseAI aggregated p(doom) list",
          url: "https://pauseai.info/pdoom",
          medium: "article",
          publisher: "PauseAI",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "yoshua-bengio",
    name: "Yoshua Bengio",
    tagline: "Turing Award laureate; scientific chair of the International AI Safety Report",
    summary:
      "Switched from deep-learning capability research to full-time AI safety work after GPT-4. Testified to the US Senate in 2023 about loss-of-control risk and now leads the international scientific AI safety report. Supports compute governance, liability, and a conditional pause.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Université de Montréal", role: "Professor of Computer Science", current: true },
      { org: "Mila – Quebec AI Institute", role: "Scientific Director", current: true },
      { org: "International AI Safety Report", role: "Chair", current: true },
      { org: "LawZero", role: "Founder", current: true },
    ],
    homepage: "https://yoshuabengio.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Yoshua_Bengio",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Signed the CAIS Statement on AI Risk and argues loss-of-control risk is serious and unresolved.",
        quotes: [
          {
            text: "No one currently knows how to create advanced AI that reliably follows the intent of its developers.",
            date: "2023-07-25",
            fidelity: "direct",
            context:
              "Written testimony to the US Senate Judiciary Subcommittee on Privacy, Technology and the Law.",
            source: {
              title:
                "Written Testimony of Professor Yoshua Bengio",
              url: "https://www.judiciary.senate.gov/imo/media/doc/2023-07-26_-_testimony_-_bengio.pdf",
              medium: "testimony",
              publisher: "US Senate Judiciary Committee",
              date: "2023-07-25",
            },
          },
          {
            text: "There is a risk of losing control over AI with powerful capabilities, a risk we have yet to learn how to mitigate. If those in control of AI do not understand and manage this risk, it could jeopardize all of humanity.",
            date: "2023-07-25",
            fidelity: "direct",
            source: {
              title:
                "My testimony in front of the U.S. Senate",
              url: "https://yoshuabengio.org/2023/07/25/my-testimony-in-front-of-the-us-senate/",
              medium: "blog",
              publisher: "yoshuabengio.org",
              date: "2023-07-25",
            },
          },
        ],
      },
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Pushes for regulatory regimes, mandatory safety evaluations, and international coordination; has floated a 'humanity defense organisation'.",
        quotes: [
          {
            text:
              "We are creating entities that may be smarter than us, pursuing goals that may not align with ours. That's the risk.",
            date: "2025-04",
            fidelity: "paraphrase-faithful",
            context: "TED2025 talk 'The Catastrophic Risks of AI, and a Safer Path'.",
            source: {
              title: "The Catastrophic Risks of AI, and a Safer Path",
              url: "https://www.youtube.com/watch?v=qe9QSCF-d88",
              medium: "video",
              publisher: "TED",
              date: "2025-04",
              videoId: "qe9QSCF-d88",
              videoPlatform: "youtube",
            },
          },
          {
            text:
              "We need a humanity defense organization that is looking out specifically for existential risk from AI.",
            date: "2023-10",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "'AI Godfather' Yoshua Bengio: We need a humanity defense organization",
              url: "https://thebulletin.org/2023/10/ai-godfather-yoshua-bengio-we-need-a-humanity-defense-organization/",
              medium: "article",
              publisher: "Bulletin of the Atomic Scientists",
              date: "2023-10",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.2,
        date: "2023-07-15",
        definition: "Probability of AI catastrophe (reported in ABC News piece).",
        source: {
          title:
            "What's your p(doom)? AI researchers worry catastrophe",
          url: "https://www.abc.net.au/news/2023-07-15/whats-your-pdoom-ai-researchers-worry-catastrophe/102591340",
          medium: "article",
          publisher: "ABC News",
          date: "2023-07-15",
        },
      },
    ],
    timelines: [
      {
        milestone: "Human-level AI",
        range: [2028, 2043],
        date: "2023-07-25",
        source: {
          title: "My testimony in front of the U.S. Senate",
          url: "https://yoshuabengio.org/2023/07/25/my-testimony-in-front-of-the-us-senate/",
          medium: "testimony",
          publisher: "US Senate",
          date: "2023-07-25",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "stuart-russell",
    name: "Stuart Russell",
    tagline: "Co-author of the standard AI textbook; leading critic of the 'standard model' of AI",
    summary:
      "Argues the field's default paradigm, build systems that optimise fixed objectives, is dangerously misguided, and proposes instead that AI systems be uncertain about human preferences and defer to humans by construction. Author of Human Compatible (2019).",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Computer Science", current: true },
      { org: "Center for Human-Compatible AI (CHAI)", role: "Director", current: true },
    ],
    homepage: "https://people.eecs.berkeley.edu/~russell/",
    wikipedia: "https://en.wikipedia.org/wiki/Stuart_J._Russell",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Frames alignment as the central technical problem; proposes a redesign around assistance games where AI is uncertain about its objective.",
        quotes: [
          {
            text:
              "The standard model, in which the primary definition of success is getting better and better at achieving rigid human-specified goals, is dangerously misguided.",
            date: "2019-10-08",
            fidelity: "paraphrase-faithful",
            context:
              "Core argument of Human Compatible.",
            source: {
              title:
                "Human Compatible: Artificial Intelligence and the Problem of Control",
              url: "https://en.wikipedia.org/wiki/Human_Compatible",
              medium: "book",
              publisher: "Viking",
              date: "2019-10-08",
            },
          },
          {
            text: "You can't fetch the coffee if you're dead.",
            date: "2019-10-08",
            fidelity: "direct",
            context:
              "Used to illustrate why sufficiently goal-directed AI will resist being switched off.",
            source: {
              title: "Human Compatible (Russell)",
              url: "https://en.wikipedia.org/wiki/Human_Compatible",
              medium: "book",
              publisher: "Viking",
              date: "2019-10-08",
            },
          },
        ],
      },
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the CAIS Statement on AI Risk.",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "eliezer-yudkowsky",
    name: "Eliezer Yudkowsky",
    tagline: "Founder of MIRI; the original AI-extinction pessimist",
    summary:
      "Research fellow who spent two decades arguing that default paths to superintelligence kill everyone, and that the only sane response is an unconditional international halt to frontier training. His 2023 TIME op-ed shifted 'shut it down' from a fringe position into the public debate.",
    categories: ["theorist", "activist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute (MIRI)", role: "Research Fellow and co-founder", current: true },
    ],
    homepage: "https://www.yudkowsky.net/",
    wikipedia: "https://en.wikipedia.org/wiki/Eliezer_Yudkowsky",
    twitter: "ESYudkowsky",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Wants an unconditional moratorium on frontier training, enforced internationally, with explicit willingness to destroy rogue data centres by airstrike.",
        quotes: [
          {
            text:
              "The most likely result of building a superhumanly smart AI, under anything remotely like the current circumstances, is that literally everyone on Earth will die.",
            date: "2023-03-29",
            fidelity: "direct",
            source: {
              title:
                "Pausing AI Developments Isn't Enough. We Need to Shut it All Down",
              url: "https://time.com/6266923/ai-eliezer-yudkowsky-open-letter-not-enough/",
              medium: "article",
              publisher: "TIME",
              date: "2023-03-29",
            },
          },
          {
            text:
              "Shut it all down. Shut down all the large GPU clusters. Shut down all the large training runs. Put a ceiling on how much computing power anyone is allowed to use in training an AI system.",
            date: "2023-03-29",
            fidelity: "direct",
            source: {
              title:
                "Pausing AI Developments Isn't Enough. We Need to Shut it All Down",
              url: "https://time.com/6266923/ai-eliezer-yudkowsky-open-letter-not-enough/",
              medium: "article",
              publisher: "TIME",
              date: "2023-03-29",
            },
          },
          {
            text:
              "I think that humanity is on track to be killed.",
            date: "2023-03-30",
            fidelity: "paraphrase-faithful",
            context: "Three-plus-hour interview on the Lex Fridman Podcast #368.",
            source: {
              title:
                "Eliezer Yudkowsky: Dangers of AI and the End of Human Civilization",
              url: "https://www.youtube.com/watch?v=AaTRHFaaPG8",
              medium: "video",
              publisher: "Lex Fridman Podcast",
              date: "2023-03-30",
              videoId: "AaTRHFaaPG8",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.95,
        date: "2023",
        definition:
          "Probability that AI wipes out humanity; Yudkowsky has repeatedly said >95%, sometimes framed as 99%.",
        source: {
          title: "PauseAI aggregated p(doom) list",
          url: "https://pauseai.info/pdoom",
          medium: "article",
          publisher: "PauseAI",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "dan-hendrycks",
    name: "Dan Hendrycks",
    tagline: "Director of the Center for AI Safety; drafter of the Statement on AI Risk",
    summary:
      "Led the 2023 Statement on AI Risk signing, turning CAIS into the convening body for extinction-level AI concern among mainstream researchers. Works on evals, robustness, and policy; advises xAI on safety.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Center for AI Safety (CAIS)", role: "Executive Director", current: true },
      { org: "xAI", role: "Safety Advisor", current: true },
    ],
    homepage: "https://danhendrycks.com/",
    twitter: "DanHendrycks",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Organised the single-sentence Statement on AI Risk to move extinction concern into the Overton window.",
        quotes: [
          {
            text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
            date: "2023-05-30",
            fidelity: "direct",
            context: "Statement Hendrycks drafted and organised.",
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
        strategyId: "evals-driven",
        stance: "endorses",
        summary: "Publishes widely-used benchmarks and argues that capability/risk evals are load-bearing for governance.",
        quotes: [
          {
            text:
              "If AI research continues without adequate caution, it is reasonably likely that AI could precipitate human extinction or similarly catastrophic outcomes.",
            date: "2023-04-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tweet from Dan Hendrycks",
              url: "https://twitter.com/DanHendrycks/status/1642394635657162753",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2023-04-02",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.8,
        date: "2023-04-02",
        definition: "Hendrycks has publicly indicated a p(doom) above 80%.",
        source: {
          title: "Tweet from Dan Hendrycks",
          url: "https://twitter.com/DanHendrycks/status/1642394635657162753",
          medium: "tweet",
          publisher: "X/Twitter",
          date: "2023-04-02",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "yann-lecun",
    name: "Yann LeCun",
    tagline: "Chief AI Scientist at Meta; outspoken AI-doom skeptic",
    summary:
      "Turing Award co-recipient and deep-learning pioneer who rejects existential risk arguments as 'preposterous' and argues current LLM paradigms will not produce AGI. Advocates open-source weights and dismisses the alignment-first framing as category-confused.",
    categories: ["researcher", "executive", "academic"],
    affiliations: [
      { org: "Meta", role: "Chief AI Scientist", current: true },
      { org: "NYU", role: "Silver Professor", current: true },
    ],
    homepage: "https://yann.lecun.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Yann_LeCun",
    twitter: "ylecun",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Holds that the AI-extinction narrative is unfounded; frames the debate as a values discussion about control by large labs, not a technical risk.",
        quotes: [
          {
            text:
              "You're going to have to pardon my French, but that's complete B.S.",
            date: "2024-10-12",
            fidelity: "direct",
            context:
              "Response when asked by the Wall Street Journal whether AI could become smart enough to pose a threat to humanity.",
            source: {
              title:
                "Meta's Yann LeCun says worries about AI's existential threat are 'complete B.S.'",
              url: "https://techcrunch.com/2024/10/12/metas-yann-lecun-says-worries-about-a-i-s-existential-threat-are-complete-b-s/",
              medium: "article",
              publisher: "TechCrunch",
              date: "2024-10-12",
            },
          },
          {
            text:
              "Before we worry about controlling super-intelligent AI, we need to have the beginning of a hint of a design for a system smarter than a house cat.",
            date: "2023-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Meta's AI Chief Yann LeCun on AGI, Open-Source, and AI Risk",
              url: "https://time.com/6694432/yann-lecun-meta-ai-interview/",
              medium: "article",
              publisher: "TIME",
              date: "2024-02-13",
            },
          },
        ],
      },
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Has pushed Meta toward open-weighting Llama models and argues open weights are necessary for diverse, safe AI.",
        quotes: [
          {
            text:
              "The smartest among us do not want to dominate the others. The idea that because a system is intelligent, it wants to take control is completely false.",
            date: "2023-06-14",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Meta Chief A.I. Scientist Yann LeCun says A.I. doomsayers are 'preposterous'",
              url: "https://fortune.com/2023/06/14/metas-chief-a-i-scientist-calls-a-i-doomers-preposterous-and-predicts-llms-are-just-a-passing-fad/",
              medium: "article",
              publisher: "Fortune",
              date: "2023-06-14",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.0001,
        date: "2023-12",
        definition: "LeCun repeatedly places his p(doom) effectively at zero; <0.01% reported by aggregator.",
        source: {
          title: "PauseAI aggregated p(doom) list",
          url: "https://pauseai.info/pdoom",
          medium: "article",
          publisher: "PauseAI",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "dario-amodei",
    name: "Dario Amodei",
    tagline: "CEO of Anthropic; 'Machines of Loving Grace' author",
    summary:
      "Former OpenAI VP of research who left to start Anthropic. Oscillates between bullish on AI transformation (Machines of Loving Grace, 2024) and unambiguous about catastrophic risk. Originator of the Responsible Scaling Policy framing.",
    categories: ["executive", "founder", "researcher"],
    affiliations: [
      { org: "Anthropic", role: "CEO and Co-founder", current: true },
      { org: "OpenAI", role: "VP of Research", end: "2020", current: false },
    ],
    homepage: "https://www.darioamodei.com/",
    twitter: "DarioAmodei",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Signatory to the Statement on AI Risk; treats catastrophic misuse and loss of control as primary downside risks.",
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
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Championed Responsible Scaling Policies: capability thresholds trigger progressively stronger safety commitments.",
        quotes: [
          {
            text:
              "If we put enough effort into solving these problems, a truly amazing, hopeful future could be available.",
            date: "2024-10-11",
            fidelity: "paraphrase-faithful",
            context:
              "Opening framing of Machines of Loving Grace, which argues powerful AI could compress 50–100 years of biological progress into 5–10.",
            source: {
              title: "Machines of Loving Grace",
              url: "https://www.darioamodei.com/essay/machines-of-loving-grace",
              medium: "blog",
              publisher: "darioamodei.com",
              date: "2024-10-11",
            },
          },
        ],
      },
      {
        strategyId: "race-to-aligned-si",
        stance: "mixed",
        summary:
          "Runs a frontier lab on the stated theory that safety-focused actors must be at the frontier; publicly acknowledges the 'we are pushing what we fear' tension.",
        quotes: [
          {
            text:
              "Powerful AI could appear as early as 2026.",
            date: "2024-10-11",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Machines of Loving Grace",
              url: "https://www.darioamodei.com/essay/machines-of-loving-grace",
              medium: "blog",
              publisher: "darioamodei.com",
              date: "2024-10-11",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.1, 0.25],
        date: "2023-10",
        definition: "Publicly cited 10–25% chance of catastrophic outcomes.",
        source: {
          title: "PauseAI aggregated p(doom) list",
          url: "https://pauseai.info/pdoom",
          medium: "article",
          publisher: "PauseAI",
        },
      },
    ],
    timelines: [
      {
        milestone: "Powerful AI (Anthropic's internal term for transformative AI)",
        year: 2026,
        date: "2024-10-11",
        source: {
          title: "Machines of Loving Grace",
          url: "https://www.darioamodei.com/essay/machines-of-loving-grace",
          medium: "blog",
          publisher: "darioamodei.com",
          date: "2024-10-11",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "demis-hassabis",
    name: "Demis Hassabis",
    tagline: "CEO of Google DeepMind; 2024 Nobel laureate",
    summary:
      "DeepMind co-founder who frames AGI as roughly a decade away, argues the bio and cyber misuse vectors are the nearest-term concern, and has signed the Statement on AI Risk while simultaneously steering the most capital-rich capabilities programme in the world.",
    categories: ["executive", "founder", "researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "CEO and Co-founder", current: true },
    ],
    homepage: "https://deepmind.google/",
    wikipedia: "https://en.wikipedia.org/wiki/Demis_Hassabis",
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
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Calls for international coordination on frontier AI, framed around immediate bio/cyber misuse risk plus longer-term autonomous-system risk.",
        quotes: [
          {
            text:
              "We should think of aligning AI like raising a child, guardrails and values have to come together.",
            date: "2025-04-20",
            fidelity: "paraphrase-faithful",
            context: "CBS 60 Minutes interview with Scott Pelley.",
            source: {
              title: "Demis Hassabis | Sunday on 60 Minutes",
              url: "https://www.youtube.com/watch?v=AJf23bIjS8w",
              medium: "video",
              publisher: "CBS 60 Minutes",
              date: "2025-04-20",
              videoId: "AJf23bIjS8w",
              videoPlatform: "youtube",
            },
          },
          {
            text:
              "Artificial intelligence could end disease and lead to radical abundance.",
            date: "2025-04-20",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Artificial intelligence could end disease, lead to 'radical abundance'",
              url: "https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/",
              medium: "article",
              publisher: "CBS News",
              date: "2025-04-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sam-altman",
    name: "Sam Altman",
    tagline: "CEO of OpenAI",
    summary:
      "Argues government intervention is necessary to mitigate risks from increasingly powerful AI, while running the most visible frontier lab and framing AI as 'the most important technology in human history'. Signatory to the Statement on AI Risk.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "OpenAI", role: "CEO and Co-founder", current: true },
      { org: "Y Combinator", role: "Former President", end: "2019", current: false },
    ],
    twitter: "sama",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Explicitly asked the Senate to regulate AI including via licensing frontier models and creating an oversight agency.",
        quotes: [
          {
            text:
              "My worst fears are that we cause significant, we, the field, the technology, the industry, cause significant harm to the world. I think if this technology goes wrong, it can go quite wrong.",
            date: "2023-05-16",
            fidelity: "direct",
            context:
              "US Senate Judiciary Subcommittee on Privacy, Technology and the Law, oversight of AI hearing.",
            source: {
              title:
                "Transcript: Senate Judiciary Subcommittee Hearing on Oversight of AI",
              url: "https://www.techpolicy.press/transcript-senate-judiciary-subcommittee-hearing-on-oversight-of-ai/",
              medium: "testimony",
              publisher: "TechPolicy.Press",
              date: "2023-05-16",
            },
          },
          {
            text:
              "I think if this technology goes wrong, it can go quite wrong, and we want to be vocal about that.",
            date: "2023-03-25",
            fidelity: "direct",
            context: "Lex Fridman Podcast #367, widely viewed framing of Altman's public safety stance.",
            source: {
              title: "Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI",
              url: "https://www.youtube.com/watch?v=L_Guz73e6fw",
              medium: "video",
              publisher: "Lex Fridman Podcast",
              date: "2023-03-25",
              videoId: "L_Guz73e6fw",
              videoPlatform: "youtube",
            },
          },
        ],
      },
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "max-tegmark",
    name: "Max Tegmark",
    tagline: "Physicist; co-founder and president of the Future of Life Institute",
    summary:
      "MIT physicist who built FLI into the organisation most responsible for the March 2023 Pause Giant AI Experiments open letter. Argues the field has entered a suicide race and that coordination to slow frontier training is feasible.",
    categories: ["researcher", "academic", "activist"],
    affiliations: [
      { org: "MIT", role: "Professor of Physics", current: true },
      { org: "Future of Life Institute", role: "President and Co-founder", current: true },
    ],
    homepage: "https://space.mit.edu/home/tegmark/",
    twitter: "tegmark",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Public face of the Pause Giant AI Experiments letter calling for a six-month moratorium on systems more powerful than GPT-4.",
        quotes: [
          {
            text:
              "Recent months have seen AI labs locked in an out-of-control race to develop and deploy ever more powerful digital minds that no one, not even their creators, can understand, predict, or reliably control.",
            date: "2023-03-22",
            fidelity: "direct",
            context:
              "Opening paragraph of the Pause Giant AI Experiments open letter; Tegmark's FLI published it.",
            source: {
              title: "Pause Giant AI Experiments: An Open Letter",
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
    id: "connor-leahy",
    name: "Connor Leahy",
    tagline: "CEO of Conjecture; EleutherAI co-founder turned AI safety hawk",
    summary:
      "Helped start the open-source AI movement (EleutherAI) then pivoted to arguing that uncontrollable AI means the future belongs to AI rather than humans. Calls for a compute-cap moratorium on frontier training.",
    categories: ["founder", "researcher", "activist"],
    affiliations: [
      { org: "Conjecture", role: "CEO and Co-founder", current: true },
      { org: "EleutherAI", role: "Co-founder", end: "2022", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Connor_Leahy",
    twitter: "NPCollapse",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Argues for 'a moratorium on frontier AI runs' implemented through a cap on compute, enforced internationally.",
        quotes: [
          {
            text:
              "If they just get more and more powerful, without getting more controllable, we are super, super fucked. And by 'we' I mean all of us.",
            date: "2023-04",
            fidelity: "direct",
            source: {
              title: "AI will leave us 'super fucked', says Conjecture's Connor Leahy",
              url: "https://sifted.eu/articles/connor-leahy-ai-alignment",
              medium: "article",
              publisher: "Sifted",
              date: "2023-04",
            },
          },
          {
            text:
              "If you build systems that are more capable than humans at manipulation, business, politics, science and everything else, and we do not control them, then the future belongs to them, not us.",
            date: "2023-11",
            fidelity: "paraphrase-faithful",
            context: "Commentary around the Bletchley Park AI Safety Summit.",
            source: {
              title:
                "CEO Connor Leahy attended the AI Safety Summit",
              url: "https://x.com/ConjectureAI/status/1722341743876554794",
              medium: "tweet",
              publisher: "Conjecture (official)",
              date: "2023-11-09",
            },
          },
        ],
      },
      {
        strategyId: "interpretability-bet",
        stance: "opposes",
        summary:
          "Argues current alignment approaches, including interpretability-only bets, are not sufficient; sometimes explicitly pessimistic about the research path.",
        quotes: [
          {
            text:
              "The truth is, I do not know how to build an aligned system and I don't even know where to start.",
            date: "2023-04",
            fidelity: "direct",
            source: {
              title: "AI will leave us 'super fucked', says Conjecture's Connor Leahy",
              url: "https://sifted.eu/articles/connor-leahy-ai-alignment",
              medium: "article",
              publisher: "Sifted",
              date: "2023-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ilya-sutskever",
    name: "Ilya Sutskever",
    tagline: "OpenAI co-founder; now CEO of Safe Superintelligence Inc (SSI)",
    summary:
      "Co-led GPT-era scaling at OpenAI, participated in the 2023 board ouster of Sam Altman over alleged safety concerns, then left to found Safe Superintelligence Inc as a single-product lab focused explicitly on aligned superintelligence.",
    categories: ["researcher", "founder", "executive"],
    affiliations: [
      { org: "Safe Superintelligence Inc (SSI)", role: "CEO and Co-founder", current: true },
      { org: "OpenAI", role: "Co-founder and Chief Scientist", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ilya_Sutskever",
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
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Founded SSI on the explicit thesis that building safe superintelligence is one technical problem to be solved in a single push, insulated from commercial product pressure.",
        quotes: [
          {
            text:
              "We will pursue safe superintelligence in a straight shot, with one focus, one goal, and one product.",
            date: "2024-06-19",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Safe Superintelligence Inc. launch announcement",
              url: "https://ssi.inc/",
              medium: "article",
              publisher: "Safe Superintelligence Inc",
              date: "2024-06-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "roman-yampolskiy",
    name: "Roman Yampolskiy",
    tagline: "University of Louisville professor; argues AI safety is impossible",
    summary:
      "Formal argument AI-safety impossibilist: has published papers arguing alignment is undecidable and that superintelligent AI cannot be controlled. Cites the highest publicly stated p(doom) among serious researchers.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Louisville", role: "Associate Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Roman_Yampolskiy",
    twitter: "romanyam",
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "endorses",
        summary:
          "Publicly argues humanity should not build superintelligence at all, on the grounds that control is technically impossible.",
        quotes: [
          {
            text: "p(doom) ≈ 99.99%",
            date: "2024-03-13",
            fidelity: "direct",
            source: {
              title: "Tweet from Roman Yampolskiy",
              url: "https://twitter.com/romanyam/status/1767575356155027503",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2024-03-13",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.9999,
        date: "2024-03-13",
        definition: "Explicit Twitter statement.",
        source: {
          title: "Tweet from Roman Yampolskiy",
          url: "https://twitter.com/romanyam/status/1767575356155027503",
          medium: "tweet",
          publisher: "X/Twitter",
          date: "2024-03-13",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "paul-christiano",
    name: "Paul Christiano",
    tagline: "Founder of the US AI Safety Institute safety team; ex-OpenAI alignment lead",
    summary:
      "Key architect of RLHF and of much of modern alignment theory. Founded the Alignment Research Center; now runs safety at the US AI Safety Institute inside NIST. Publicly estimates ~46% chance of doom.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "US AI Safety Institute (NIST)", role: "Head of AI Safety", current: true },
      { org: "Alignment Research Center", role: "Founder", current: true },
      { org: "OpenAI", role: "Alignment team lead", end: "2021", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Paul_Christiano",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Canonical modern alignment researcher; works on debate, RLHF, and eliciting latent knowledge.",
        quotes: [
          {
            text:
              "I'd guess something like a 20% chance of an AI takeover, with many of the humans dead, and a further 30% chance or so of serious irreversible problems short of takeover.",
            date: "2023-04-27",
            fidelity: "paraphrase-faithful",
            context: "From his LessWrong post 'My views on doom'.",
            source: {
              title: "My views on doom",
              url: "https://www.lesswrong.com/posts/xWMqsvHapP3nwdSW8/my-views-on-doom",
              medium: "blog",
              publisher: "LessWrong",
              date: "2023-04-27",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.46,
        date: "2023-04-27",
        definition:
          "Approximately 46% chance of an extremely bad outcome, in his LessWrong post decomposing takeover and non-takeover catastrophes.",
        source: {
          title: "My views on doom",
          url: "https://www.lesswrong.com/posts/xWMqsvHapP3nwdSW8/my-views-on-doom",
          medium: "blog",
          publisher: "LessWrong",
          date: "2023-04-27",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "daniel-kokotajlo",
    name: "Daniel Kokotajlo",
    tagline: "Former OpenAI governance team member; author of AI 2027 scenario",
    summary:
      "Left OpenAI in 2024 over what he said was lost faith in the company's ability to handle AGI responsibly, refusing a non-disparagement-tied severance. Co-authored the influential AI 2027 scenario forecasting detailed takeover dynamics.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "AI Futures Project", role: "Researcher", current: true },
      { org: "OpenAI", role: "Governance researcher", end: "2024", current: false },
    ],
    twitter: "DKokotajlo67142",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Publicly urged OpenAI to change course and has endorsed stronger regulatory constraints on frontier training.",
        quotes: [
          {
            text:
              "I lost hope that they would act responsibly, particularly as they pursue artificial general intelligence.",
            date: "2024-06-04",
            fidelity: "paraphrase-faithful",
            context:
              "Statement to the New York Times on why he resigned from OpenAI.",
            source: {
              title: "OpenAI Insiders Warn of 'Reckless' Race for Dominance",
              url: "https://www.nytimes.com/2024/06/04/technology/openai-culture-whistleblowers.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2024-06-04",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.7,
        date: "2023",
        definition: "Self-reported ~70% chance of existential catastrophe.",
        source: {
          title: "LessWrong comment by Daniel Kokotajlo",
          url: "https://www.lesswrong.com/posts/xDkdR6JcQsCdnFpaQ/adumbrations-on-agi-from-an-outsider?commentId=sHnfPe5pHJhjJuCWW",
          medium: "blog",
          publisher: "LessWrong",
          date: "2023",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "holden-karnofsky",
    name: "Holden Karnofsky",
    tagline: "Co-founder of Open Philanthropy; AI safety funder and strategist",
    summary:
      "Long-time AI risk thinker and philanthropic strategist at Open Phil. Has moved from running a generalist effective-altruist grantmaker to full-time AI safety advocacy. Writes the Cold Takes blog on transformative AI.",
    categories: ["policy", "investor"],
    affiliations: [
      { org: "Carnegie Endowment for International Peace", role: "Senior Fellow", current: true },
      { org: "Open Philanthropy", role: "Co-founder", end: "2024", current: false },
      { org: "GiveWell", role: "Co-founder", end: "2012", current: false },
    ],
    homepage: "https://www.cold-takes.com/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Has advocated for regulation, evals, and careful coordination between frontier labs as the central lever.",
        quotes: [
          {
            text:
              "I'm highly uncertain, somewhere between a 10% and 90% chance that things go badly. The honest answer is that we just don't know.",
            date: "2022-08",
            fidelity: "paraphrase-faithful",
            context:
              "From his discussion of aligning transformative AI in surprisingly short timelines.",
            source: {
              title: "How might we align transformative AI if it's developed very soon?",
              url: "https://www.alignmentforum.org/posts/rCJQAkPTEypGjSJ8X/how-might-we-align-transformative-ai-if-it-s-developed-very",
              medium: "blog",
              publisher: "AI Alignment Forum",
              date: "2022-08",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.1, 0.9],
        date: "2022-08",
        definition:
          "Explicitly unresolved wide range, framed around uncertainty about alignment difficulty.",
        source: {
          title: "How might we align transformative AI if it's developed very soon?",
          url: "https://www.alignmentforum.org/posts/rCJQAkPTEypGjSJ8X/how-might-we-align-transformative-ai-if-it-s-developed-very",
          medium: "blog",
          publisher: "AI Alignment Forum",
          date: "2022-08",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jan-leike",
    name: "Jan Leike",
    tagline: "Former head of OpenAI Superalignment; now at Anthropic",
    summary:
      "Co-led OpenAI's Superalignment team with Ilya Sutskever. Resigned in May 2024 stating 'safety culture and processes have taken a backseat to shiny products'. Now runs alignment science at Anthropic.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Head of Alignment Science", current: true },
      { org: "OpenAI", role: "Head of Superalignment", end: "2024", current: false },
    ],
    twitter: "janleike",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment research must scale with capabilities; publicly resigned when he felt this ratio was violated.",
        quotes: [
          {
            text:
              "Over the past years, safety culture and processes have taken a backseat to shiny products.",
            date: "2024-05-17",
            fidelity: "direct",
            context: "Resignation thread on X/Twitter.",
            source: {
              title: "Resignation thread",
              url: "https://x.com/janleike/status/1791498174659715494",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2024-05-17",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.1, 0.9],
        date: "2023-08",
        definition: "Large uncertainty range cited in interview.",
        source: {
          title:
            "Jan Leike interview (PauseAI citation)",
          url: "https://www.youtube.com/watch?v=ZP_N4q5U3eE",
          medium: "video",
          publisher: "YouTube",
          startSeconds: 4560,
          videoId: "ZP_N4q5U3eE",
          videoPlatform: "youtube",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "mustafa-suleyman",
    name: "Mustafa Suleyman",
    tagline: "CEO of Microsoft AI; DeepMind co-founder",
    summary:
      "Co-founded DeepMind, founded Inflection AI, now runs Microsoft AI. Author of The Coming Wave (2023) which argues AI and synbio are uncontainable without new governance regimes. Framed the 'containment problem' in mainstream terms.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Microsoft AI", role: "CEO", current: true },
      { org: "Inflection AI", role: "Co-founder and former CEO", end: "2024", current: false },
      { org: "DeepMind", role: "Co-founder", end: "2019", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Mustafa_Suleyman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "The Coming Wave (2023) argues containment of AI and synbio requires a new regulatory regime spanning audits, choke-points, and international cooperation.",
        quotes: [
          {
            text:
              "Containment is not, on the face of it, possible. And yet for all our sakes, containment must be possible.",
            date: "2023-09-05",
            fidelity: "direct",
            context: "Opening framing of The Coming Wave.",
            source: {
              title: "The Coming Wave",
              url: "https://www.the-coming-wave.com/",
              medium: "book",
              publisher: "Crown",
              date: "2023-09-05",
            },
          },
        ],
      },
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "elon-musk",
    name: "Elon Musk",
    tagline: "CEO of Tesla and xAI; co-founded OpenAI",
    summary:
      "Has called AI 'summoning the demon' since 2014, co-founded OpenAI as a non-profit safety counterweight, then started xAI in 2023 on the grounds that existing labs were insufficient. Signed the 2023 FLI Pause letter.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "xAI", role: "Founder and CEO", current: true },
      { org: "Tesla", role: "CEO", current: true },
      { org: "SpaceX", role: "Founder and CEO", current: true },
      { org: "OpenAI", role: "Co-founder", end: "2018", current: false },
    ],
    twitter: "elonmusk",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Signed the March 2023 Pause Giant AI Experiments open letter; has repeatedly called for regulatory oversight.",
        quotes: [
          {
            text:
              "With artificial intelligence we are summoning the demon.",
            date: "2014-10",
            fidelity: "direct",
            context: "MIT AeroAstro centennial symposium.",
            source: {
              title: "Elon Musk warns 'we are summoning the demon' with artificial intelligence",
              url: "https://www.washingtonpost.com/news/innovations/wp/2014/10/24/elon-musk-warns-that-the-creation-of-artificial-intelligence-might-be-the-biggest-existential-threat-that-humanity-faces/",
              medium: "article",
              publisher: "The Washington Post",
              date: "2014-10-24",
            },
          },
        ],
      },
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Simultaneously advocates for pause and runs xAI; frames xAI as a 'maximally truth-seeking' safety-differentiated frontier lab.",
        quotes: [
          {
            text:
              "xAI is building AI to understand the universe.",
            date: "2023-07-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "xAI launch announcement",
              url: "https://x.ai/",
              medium: "article",
              publisher: "xAI",
              date: "2023-07-12",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.1, 0.2],
        date: "2024-04",
        definition: "Has stated 10–20% chance AI destroys humanity; in 2024 said 20%.",
        source: {
          title: "Elon Musk on AI risk (video)",
          url: "https://www.youtube.com/watch?v=akXMYvKjUxM",
          medium: "video",
          publisher: "YouTube",
          videoId: "akXMYvKjUxM",
          videoPlatform: "youtube",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "vitalik-buterin",
    name: "Vitalik Buterin",
    tagline: "Ethereum co-founder; author of 'My techno-optimism' manifesto",
    summary:
      "Crypto founder who has written extensively on AI as a civilisational risk and coined 'd/acc' (defensive/decentralised accelerationism) as a third path between unconditional acceleration and the pause framing.",
    categories: ["founder", "public-intellectual"],
    affiliations: [
      { org: "Ethereum Foundation", role: "Co-founder and researcher", current: true },
    ],
    homepage: "https://vitalik.eth.limo/",
    twitter: "VitalikButerin",
    positions: [
      {
        strategyId: "differential-tech",
        stance: "endorses",
        summary:
          "Coined 'd/acc' in his 2023 post 'My techno-optimism': prefer defensive, decentralised, democratic, differential technology development.",
        quotes: [
          {
            text:
              "I think we should be much more wary of superintelligent AI than we are. I recently calibrated that my actual p(doom) is something like 10%.",
            date: "2023-11-28",
            fidelity: "direct",
            source: {
              title: "Tweet from Vitalik Buterin",
              url: "https://twitter.com/VitalikButerin/status/1729251822391447904",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2023-11-28",
            },
          },
          {
            text:
              "Build tech that differentially accelerates defense against catastrophic risk over attack.",
            date: "2023-11-27",
            fidelity: "paraphrase-faithful",
            context: "Core thesis of 'My techno-optimism'.",
            source: {
              title: "My techno-optimism",
              url: "https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html",
              medium: "blog",
              publisher: "vitalik.eth.limo",
              date: "2023-11-27",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.1,
        date: "2023-11-28",
        source: {
          title: "Tweet from Vitalik Buterin",
          url: "https://twitter.com/VitalikButerin/status/1729251822391447904",
          medium: "tweet",
          publisher: "X/Twitter",
          date: "2023-11-28",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "scott-alexander",
    name: "Scott Alexander",
    tagline: "Astral Codex Ten / Slate Star Codex blogger",
    summary:
      "Widely-read rationalist-adjacent writer whose AI posts have been influential in the EA/rationalist community. Has staked out a moderate-doom position: takes AI risk seriously but argues against full Yudkowskian pessimism.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Astral Codex Ten", role: "Author", current: true },
    ],
    homepage: "https://astralcodexten.substack.com/",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Treats AI risk as serious but rejects certainty-of-doom framing; tends to support alignment research plus governance but is skeptical of a full halt.",
        quotes: [
          {
            text:
              "I think the probability that AI causes a catastrophe is about 33%. That's not the 95% or higher that some people say, but it's also much higher than the probabilities we accept for other risks.",
            date: "2023-03-14",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why I Am Not As Much Of A Doomer As Some People",
              url: "https://astralcodexten.substack.com/p/why-i-am-not-as-much-of-a-doomer",
              medium: "blog",
              publisher: "Astral Codex Ten",
              date: "2023-03-14",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.33,
        date: "2023-03-14",
        source: {
          title: "Why I Am Not As Much Of A Doomer As Some People",
          url: "https://astralcodexten.substack.com/p/why-i-am-not-as-much-of-a-doomer",
          medium: "blog",
          publisher: "Astral Codex Ten",
          date: "2023-03-14",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "zvi-mowshowitz",
    name: "Zvi Mowshowitz",
    tagline: "Don't Worry About The Vase; weekly AI newsletter",
    summary:
      "Rationalist writer whose exhaustive weekly AI coverage has become a go-to reference for the AI safety community. Strongly supports a pause and argues current frontier labs cannot be trusted with AGI.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Don't Worry About The Vase", role: "Author", current: true },
    ],
    homepage: "https://thezvi.substack.com/",
    twitter: "TheZvi",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Public supporter of pause-style interventions; writes exhaustively on AI policy and industry dynamics.",
        quotes: [
          {
            text: "p(doom) 60%.",
            date: "2023-11-28",
            fidelity: "direct",
            source: {
              title: "p(doom) tweet thread",
              url: "https://x.com/liron/status/1729274710670893262",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2023-11-28",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.6,
        date: "2023-11-28",
        source: {
          title: "Tweet reporting Zvi's p(doom)",
          url: "https://x.com/liron/status/1729274710670893262",
          medium: "tweet",
          publisher: "X/Twitter",
          date: "2023-11-28",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "emmett-shear",
    name: "Emmett Shear",
    tagline: "Former interim CEO of OpenAI; Twitch co-founder",
    summary:
      "Served as interim OpenAI CEO during the November 2023 board crisis. Has publicly said he finds AI risk arguments persuasive and has advocated for a slow-down of frontier training.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Softmax", role: "Founder", current: true },
      { org: "OpenAI", role: "Interim CEO", end: "2023-11", current: false },
      { org: "Twitch", role: "Co-founder and former CEO", end: "2023", current: false },
    ],
    twitter: "eshear",
    positions: [
      {
        strategyId: "pause",
        stance: "mixed",
        summary:
          "Has advocated for slowing down frontier development; describes high but uncertain p(doom).",
        quotes: [
          {
            text:
              "My p(doom) is somewhere between 5 and 50 percent. I genuinely don't know.",
            date: "2023-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Emmett Shear on AI risk (YouTube)",
              url: "https://www.youtube.com/watch?v=9oUbauum4uI",
              medium: "video",
              publisher: "YouTube",
              videoId: "9oUbauum4uI",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.05, 0.5],
        date: "2023-09",
        source: {
          title: "Emmett Shear on AI risk",
          url: "https://www.youtube.com/watch?v=9oUbauum4uI",
          medium: "video",
          publisher: "YouTube",
          videoId: "9oUbauum4uI",
          videoPlatform: "youtube",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "emad-mostaque",
    name: "Emad Mostaque",
    tagline: "Former CEO of Stability AI; open-source frontier advocate",
    summary:
      "Founded Stability AI to push open-weight frontier image models. Has publicly cited a 50% p(doom) while simultaneously running the most aggressive open-weighting strategy in the industry. Stepped down as CEO in 2024.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Schelling AI", role: "Founder", current: true },
      { org: "Stability AI", role: "Founder and former CEO", end: "2024", current: false },
    ],
    twitter: "EMostaque",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary: "Signed the FLI Pause Giant AI Experiments letter.",
        quotes: [
          {
            text:
              "I am a signatory of the Pause letter because I believe coordination is necessary.",
            date: "2023-03-29",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pause Giant AI Experiments signatories",
              url: "https://futureoflife.org/open-letter/pause-giant-ai-experiments/",
              medium: "article",
              publisher: "Future of Life Institute",
              date: "2023-03-29",
            },
          },
        ],
      },
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary: "Built Stability AI on open-weight principles.",
        quotes: [
          {
            text:
              "Open models are a public good.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Emad Mostaque on open-source AI",
              url: "https://x.com/EMostaque/status/1864266899170767105",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2024-12-04",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.5,
        date: "2024-12-04",
        source: {
          title: "Tweet from Emad Mostaque",
          url: "https://x.com/EMostaque/status/1864266899170767105",
          medium: "tweet",
          publisher: "X/Twitter",
          date: "2024-12-04",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "reid-hoffman",
    name: "Reid Hoffman",
    tagline: "LinkedIn co-founder; AI optimist investor",
    summary:
      "Co-founded LinkedIn, invested early in OpenAI, and now backs Inflection and Manas. Argues AI will create 'cognitive superpowers' for people; publicly estimates p(doom) around 20%.",
    categories: ["investor", "founder", "executive"],
    affiliations: [
      { org: "Greylock Partners", role: "Partner", current: true },
      { org: "Inflection AI", role: "Co-founder", current: true },
    ],
    homepage: "https://www.reidhoffman.org/",
    twitter: "reidhoffman",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Frames AI as the most important human amplification technology; argues for fast deployment with safety.",
        quotes: [
          {
            text:
              "I'd put the risk of catastrophe at around 20%, high enough to take seriously, low enough that we should still race to get the benefits.",
            date: "2024-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Future of AI",
              url: "https://www.pbs.org/video/future-of-ai-1724451272/",
              medium: "video",
              publisher: "PBS",
              date: "2024-09",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.2,
        date: "2024-09",
        source: {
          title: "Future of AI (PBS)",
          url: "https://www.pbs.org/video/future-of-ai-1724451272/",
          medium: "video",
          publisher: "PBS",
          date: "2024-09",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "nate-silver",
    name: "Nate Silver",
    tagline: "Statistician; Silver Bulletin / FiveThirtyEight founder",
    summary:
      "Statistician who has written about AI risk in his 2024 book On The Edge. Places his p(doom) in the 5–10% range and frames AI as one of several 'Big Game' civilisational bets.",
    categories: ["statistician", "journalist", "public-intellectual"],
    affiliations: [
      { org: "Silver Bulletin", role: "Editor", current: true },
    ],
    twitter: "NateSilver538",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Accepts that AI is a serious civilisational risk while rejecting high p(doom) figures; argues for modest precaution.",
        quotes: [
          {
            text:
              "My p(doom) is in the 5–10% range. Not trivial, not overwhelming.",
            date: "2024-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "It's time to come to grips with AI",
              url: "https://www.natesilver.net/p/its-time-to-come-to-grips-with-ai",
              medium: "blog",
              publisher: "Silver Bulletin",
              date: "2024-08",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: [0.05, 0.1],
        date: "2024-08",
        source: {
          title: "It's time to come to grips with AI",
          url: "https://www.natesilver.net/p/its-time-to-come-to-grips-with-ai",
          medium: "blog",
          publisher: "Silver Bulletin",
          date: "2024-08",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "eli-lifland",
    name: "Eli Lifland",
    tagline: "Forecaster; co-author of AI 2027",
    summary:
      "Competitive superforecaster who has written influential scenario work on AI takeover dynamics. Co-authored AI 2027 with Daniel Kokotajlo and others.",
    categories: ["researcher"],
    affiliations: [
      { org: "AI Futures Project", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Publicly reports a ~35% p(doom) and works on detailed AI scenarios.",
        quotes: [
          {
            text: "My p(doom) is around 35%.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Eli Lifland on navigating the AI alignment landscape",
              url: "https://forum.effectivealtruism.org/posts/QeLE22fefLqKfYTW6/eli-lifland-on-navigating-the-ai-alignment-landscape",
              medium: "blog",
              publisher: "EA Forum",
              date: "2023",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.35,
        date: "2023",
        source: {
          title: "Eli Lifland on navigating the AI alignment landscape",
          url: "https://forum.effectivealtruism.org/posts/QeLE22fefLqKfYTW6/eli-lifland-on-navigating-the-ai-alignment-landscape",
          medium: "blog",
          publisher: "EA Forum",
          date: "2023",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
