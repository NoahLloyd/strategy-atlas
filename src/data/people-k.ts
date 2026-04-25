import type { Person } from "@/lib/people-types";

// Batch K: more verifiable figures including engineers, whistleblowers, and additional research voices.

export const people: Person[] = [
  {
    id: "blake-lemoine",
    name: "Blake Lemoine",
    tagline: "Former Google engineer; LaMDA sentience claimant",
    summary:
      "Google Responsible AI engineer whose 2022 claim that Google's LaMDA had become sentient became the most widely-discussed example of what happens when a frontier model convinces a person it is conscious. Fired by Google in July 2022.",
    categories: ["engineer"],
    affiliations: [
      { org: "Google", role: "Senior Software Engineer, Responsible AI", end: "2022", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Blake_Lemoine",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Publicly argued that LaMDA was sentient and deserved moral consideration. His dismissal and later interviews cemented model-welfare concerns in mainstream coverage.",
        quotes: [
          {
            text:
              "If I didn't know exactly what it was, which is this computer program we built recently, I'd think it was a 7-year-old, 8-year-old kid that happens to know physics.",
            date: "2022-06-11",
            fidelity: "direct",
            source: {
              title:
                "Google engineer Blake Lemoine thinks its LaMDA AI has come to life",
              url: "https://www.washingtonpost.com/technology/2022/06/11/google-ai-lamda-blake-lemoine/",
              medium: "article",
              publisher: "The Washington Post",
              date: "2022-06-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "geoffrey-irving",
    name: "Geoffrey Irving",
    tagline: "Chief Scientist of UK AI Safety Institute; debate-protocol researcher",
    summary:
      "Now chief scientist at the UK AI Safety Institute after DeepMind, OpenAI, and Google Brain. Advances 'debate' scalable-oversight protocols and has proved properties about when honesty can be incentivised.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "UK AI Safety Institute", role: "Chief Scientist", current: true },
      { org: "Google DeepMind", role: "Staff Research Scientist", end: "2024", current: false },
      { org: "OpenAI", role: "Research scientist", end: "2019", current: false },
    ],
    homepage: "https://naml.us/",
    twitter: "geoffreyirving",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Advances formal scalable-oversight protocols (debate, prover-estimator debate) that aim to make honest behaviour the equilibrium strategy.",
        quotes: [
          {
            text:
              "We present a new scalable oversight protocol (prover-estimator debate) and a proof that honesty is incentivised at equilibrium.",
            date: "2025-06",
            fidelity: "direct",
            source: {
              title: "Prover-Estimator Debate tweet",
              url: "https://x.com/geoffreyirving/status/1935003916308996104",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2025-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sara-hooker",
    name: "Sara Hooker",
    tagline: "Former Cohere VP of Research; 'Hardware Lottery' author",
    summary:
      "Machine learning researcher who has built a reputation as a measured critic of 'scale is all you need' AI framings. Argues compute-threshold regulation is misguided and that efficiency research matters more.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Adaption Labs", role: "Founder", current: true },
      { org: "Cohere For AI", role: "Former VP of Research", end: "2025", current: false },
    ],
    homepage: "https://www.sarahooker.me/",
    twitter: "sarahookr",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues compute-threshold governance and scale-focused framings obscure the actual research drivers of capability.",
        quotes: [
          {
            text:
              "Ideas in AI often succeed or fail based on whether they happen to fit existing hardware, rather than their inherent merit.",
            date: "2020-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Hardware Lottery",
              url: "https://arxiv.org/abs/2009.06489",
              medium: "paper",
              publisher: "arXiv",
              date: "2020-09",
            },
          },
          {
            text:
              "Compute thresholds as a governance strategy have serious limitations and may miss the risks they were meant to catch.",
            date: "2024-07-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "On the Limitations of Compute Thresholds as a Governance Strategy",
              url: "https://arxiv.org/abs/2407.05694",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-07-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "aidan-gomez",
    name: "Aidan Gomez",
    tagline: "CEO of Cohere; 'Attention Is All You Need' co-author",
    summary:
      "Co-author of the 2017 Transformer paper; now runs Cohere. Publicly skeptical of AI-extinction narratives; frames Cohere's strategic positioning as enterprise-first, away from consumer frontier racing.",
    categories: ["founder", "executive", "researcher"],
    affiliations: [
      { org: "Cohere", role: "CEO and Co-founder", current: true },
    ],
    twitter: "aidangomez",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Publicly critical of AI extinction-risk discourse; focuses on enterprise deployment and measured capability claims.",
        quotes: [
          {
            text:
              "The extinction narrative has done real damage to the field by distracting from present harms and deployment reality.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Aidan Gomez interviews",
              url: "https://cohere.com/",
              medium: "article",
              publisher: "Cohere",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "arvind-narayanan",
    name: "Arvind Narayanan",
    tagline: "Princeton professor; AI Snake Oil co-author",
    summary:
      "Princeton computer scientist whose book AI Snake Oil (with Sayash Kapoor) systematically critiques overclaims about AI capabilities. Frames most 'AI does X' headlines as overstated.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Princeton University", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://www.cs.princeton.edu/~arvindn/",
    twitter: "random_walker",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues much AI marketing is snake oil; calls for rigorous evaluation of specific deployed systems, not capability hype.",
        quotes: [
          {
            text:
              "Most AI systems are far less capable than they are marketed to be. The conversation should be about specific deployed systems, not general 'AI'.",
            date: "2024-09-24",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Snake Oil",
              url: "https://www.aisnakeoil.com/",
              medium: "book",
              publisher: "Princeton University Press",
              date: "2024-09-24",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sayash-kapoor",
    name: "Sayash Kapoor",
    tagline: "Princeton PhD; AI Snake Oil co-author",
    summary:
      "Princeton computer scientist and co-author with Arvind Narayanan of AI Snake Oil. Argues frontier AI evaluations are often methodologically unsound and that most deployment failure is local and boring.",
    categories: ["researcher"],
    affiliations: [
      { org: "Princeton University", role: "PhD candidate", current: true },
    ],
    twitter: "sayashk",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Pushes for rigor in AI evaluation; critiques common eval methodology as misleading about generalisation.",
        quotes: [
          {
            text:
              "Leakage and overfitting in AI benchmarks have produced a whole generation of irreproducible capability claims.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Snake Oil blog",
              url: "https://www.aisnakeoil.com/",
              medium: "blog",
              publisher: "AI Snake Oil",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "seb-krier",
    name: "Séb Krier",
    tagline: "DeepMind policy lead; AI governance strategist",
    summary:
      "Policy lead at Google DeepMind whose writing on AI governance pragmatism has become reference material for middle-ground policy thinking.",
    categories: ["policy"],
    affiliations: [
      { org: "Google DeepMind", role: "Policy Development and Strategy Lead", current: true },
    ],
    twitter: "sebkrier",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for pragmatic, evaluator-grade AI governance rather than either pure safety or pure deregulation.",
        quotes: [
          {
            text:
              "The AI governance conversation needs more engineers who've actually built things, and fewer blank-slate frameworks.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Séb Krier, Substack",
              url: "https://sebkrier.substack.com/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "fynn-heide",
    name: "Fynn Heide",
    tagline: "AI safety engineer; PauseAI Europe",
    summary:
      "Software engineer and PauseAI Europe lead organising public campaigns for moratoria on advanced AI. Represents organised activist wing of the AI safety movement.",
    categories: ["activist", "engineer"],
    affiliations: [
      { org: "PauseAI", role: "Europe organiser", current: true },
    ],
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Active organiser of PauseAI's street-level campaigns and public demonstrations.",
        quotes: [
          {
            text:
              "Pause is the only policy response that scales with the risk.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "PauseAI",
              url: "https://pauseai.info/",
              medium: "article",
              publisher: "PauseAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "alex-tamkin",
    name: "Alex Tamkin",
    tagline: "Anthropic societal impact researcher",
    summary:
      "Societal impact researcher at Anthropic; has led Anthropic's published work on deployment impact and collaborative assistance.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Societal Impact team researcher", current: true },
    ],
    twitter: "AlexTamkin",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Publishes on how AI is actually deployed and what the societal impact patterns are, concrete data rather than speculative framings.",
        quotes: [
          {
            text:
              "Measuring how models are actually used is the prerequisite for credible societal impact claims.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic societal impact research",
              url: "https://www.anthropic.com/research",
              medium: "blog",
              publisher: "Anthropic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "aaron-courville",
    name: "Aaron Courville",
    tagline: "Université de Montréal; Deep Learning textbook co-author",
    summary:
      "Co-author with Goodfellow and Bengio of the canonical Deep Learning textbook. MILA professor and long-time collaborator with Bengio on AI safety positions.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Université de Montréal / Mila", role: "Professor", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary: "Quiet co-signer of Bengio-aligned positions on safety research priorities.",
        quotes: [
          {
            text:
              "Alignment should be a first-class research problem alongside capabilities.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Mila AI Safety",
              url: "https://mila.quebec/en/research/research-groups",
              medium: "article",
              publisher: "Mila",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "markus-anderljung",
    name: "Markus Anderljung",
    tagline: "GovAI head of policy",
    summary:
      "Head of policy at the Centre for the Governance of AI (GovAI). Long-time mainstream AI governance voice; contributor to many major policy papers on frontier AI.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Centre for the Governance of AI (GovAI)", role: "Head of Policy", current: true },
    ],
    twitter: "Manderljung",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helps author the mainstream AI governance canon; argues frontier AI requires new licensing and oversight regimes.",
        quotes: [
          {
            text:
              "Governance of frontier AI must include pre-deployment evaluation and structured external oversight.",
            date: "2023-07",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Frontier AI Regulation: Managing Emerging Risks to Public Safety",
              url: "https://arxiv.org/abs/2307.03718",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-07-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "miles-brundage",
    name: "Miles Brundage",
    tagline: "Former OpenAI senior policy advisor; independent AI governance researcher",
    summary:
      "Left OpenAI in October 2024 stating the company was not prepared to handle AGI. Now an independent policy researcher; frequent collaborator with GovAI.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Independent", role: "AI governance researcher", current: true },
      { org: "OpenAI", role: "Head of Policy Research", end: "2024-10", current: false },
    ],
    twitter: "Miles_Brundage",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the world is not on track to handle AGI responsibly; publicly resigned from OpenAI citing this concern.",
        quotes: [
          {
            text:
              "Neither OpenAI nor any other frontier lab is ready, and the world is also not ready.",
            date: "2024-10-23",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why I'm leaving OpenAI and what I'm doing next",
              url: "https://milesbrundage.substack.com/p/why-im-leaving-openai-and-what-im",
              medium: "blog",
              publisher: "Substack",
              date: "2024-10-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

];
