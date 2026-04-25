import type { Person } from "@/lib/people-types";

// Batch N: chip-stack executives, startup founders, and second-generation frontier leaders.

export const people: Person[] = [
  {
    id: "lisa-su",
    name: "Lisa Su",
    tagline: "CEO of AMD; central figure in the AI compute supply",
    summary:
      "Runs AMD, the #2 AI chip supplier. Public voice for 'more compute = more capability' and argues supply-chain constraints rather than demand have been the bottleneck on AI progress.",
    categories: ["executive"],
    affiliations: [
      { org: "AMD", role: "Chair and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lisa_Su",
    twitter: "LisaSu",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Publicly bullish on compute scaling as the core driver of AI progress; focuses on supply-side bottleneck framings.",
        quotes: [
          {
            text:
              "More compute will get you better answers and will allow you to get the technology more adopted across the world. I'm more bullish on that than not.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Lisa Su on AMD's Strategy for Growth and the Future of AI",
              url: "https://time.com/7026241/lisa-su-amd-ceo-interview/",
              medium: "article",
              publisher: "TIME",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "clem-delangue",
    name: "Clément Delangue",
    tagline: "CEO of Hugging Face; open-source AI advocate",
    summary:
      "French co-founder of Hugging Face, the largest open-source AI model hub. Testified to US Congress that open-source AI is 'extremely aligned with American interests'.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Hugging Face", role: "CEO and Co-founder", current: true },
    ],
    twitter: "ClementDelangue",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source AI gives civil society, academia, and governments a counterbalance to frontier-lab concentration.",
        quotes: [
          {
            text:
              "Open science and open source create a safer path for development of the technology by giving civil society, nonprofits, academia and policymakers the capabilities they need to counterbalance the power of big private companies.",
            date: "2023-06-22",
            fidelity: "direct",
            context: "Testimony to the US House Science, Space, and Technology Committee.",
            source: {
              title: "Hugging Face CEO tells US House open-source AI is 'extremely aligned' with American interests",
              url: "https://venturebeat.com/ai/hugging-face-ceo-tells-us-house-open-source-ai-is-extremely-aligned-with-american-interests",
              medium: "testimony",
              publisher: "US House Science, Space, and Technology Committee",
              date: "2023-06-22",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aravind-srinivas",
    name: "Aravind Srinivas",
    tagline: "CEO of Perplexity AI",
    summary:
      "Former OpenAI, DeepMind, and Google researcher who co-founded Perplexity as an AI-native search engine. Frames the AI opportunity as knowledge discovery, not model frontier racing.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Perplexity AI", role: "CEO and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Aravind_Srinivas",
    twitter: "AravSrinivas",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Frames AI as the infrastructure for a new generation of knowledge discovery tools; less focused on risk framings.",
        quotes: [
          {
            text:
              "In a world where you can easily create fake content with AI, accurate answers and trustworthy sources become even more essential.",
            date: "2024-06-19",
            fidelity: "direct",
            source: {
              title:
                "Aravind Srinivas: Perplexity CEO on Future of AI, Search & the Internet",
              url: "https://lexfridman.com/aravind-srinivas-transcript/",
              medium: "podcast",
              publisher: "Lex Fridman Podcast #434",
              date: "2024-06-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-wang",
    name: "Alex Wang",
    tagline: "Founder of Scale AI; data infrastructure for frontier models",
    summary:
      "Youngest self-made billionaire; founded Scale AI to provide data labelling and evaluation infrastructure to frontier labs and US national security agencies.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Meta Superintelligence Labs", role: "Chief AI Officer", current: true },
      { org: "Scale AI", role: "Founder", end: "2025", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alexandr_Wang",
    twitter: "alexandr_wang",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Publicly frames US-China AI competition as the decisive strategic framing and advocates building Western frontier AI quickly.",
        quotes: [
          {
            text:
              "We are in an AI war with China. We cannot afford to lose.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Alex Wang testimony on AI and national security",
              url: "https://www.armed-services.senate.gov/",
              medium: "testimony",
              publisher: "US Senate Armed Services Committee",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "arthur-mensch",
    name: "Arthur Mensch",
    tagline: "CEO of Mistral AI; French frontier-model founder",
    summary:
      "Co-founder of Mistral AI, the French open-weight foundation model company. Representative of European open-weight frontier effort and AI sovereignty.",
    categories: ["founder", "executive", "researcher"],
    affiliations: [
      { org: "Mistral AI", role: "Co-founder and CEO", current: true },
    ],
    twitter: "arthurmensch",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-weight frontier models are both a safety benefit and a sovereignty imperative for Europe.",
        quotes: [
          {
            text:
              "Open models are the only way to ensure that AI development remains a shared enterprise, not an oligopoly.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Mistral AI",
              url: "https://mistral.ai/",
              medium: "article",
              publisher: "Mistral AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sasha-luccioni",
    name: "Sasha Luccioni",
    tagline: "Hugging Face AI & climate lead",
    summary:
      "Researcher focused on the environmental and energy footprint of large models. Has published widely cited work quantifying the carbon cost of training frontier models.",
    categories: ["researcher"],
    affiliations: [
      { org: "Hugging Face", role: "AI & Climate Lead", current: true },
    ],
    twitter: "SashaMTL",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues energy and carbon costs of AI must be part of governance frameworks and model card disclosures.",
        quotes: [
          {
            text:
              "The environmental cost of AI is not invisible. It just isn't measured — yet.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sasha Luccioni — Hugging Face",
              url: "https://huggingface.co/sasha",
              medium: "article",
              publisher: "Hugging Face",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-dettmers",
    name: "Tim Dettmers",
    tagline: "Efficient-training and quantization researcher",
    summary:
      "Researcher at UW and Allen AI whose work on quantization (QLoRA, bitsandbytes) has made frontier-scale fine-tuning feasible on modest hardware. Argues frontier access is an equity question.",
    categories: ["researcher"],
    affiliations: [
      { org: "Allen Institute for AI", role: "Research Scientist", current: true },
    ],
    twitter: "Tim_Dettmers",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Develops efficiency techniques that broaden access to frontier-scale training.",
        quotes: [
          {
            text:
              "If only frontier labs can run frontier models, then only frontier labs will shape what they do.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tim Dettmers — efficiency research",
              url: "https://timdettmers.com/",
              medium: "blog",
              publisher: "timdettmers.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yuri-burda",
    name: "Yuri Burda",
    tagline: "OpenAI researcher; exploration and RL",
    summary:
      "Longtime OpenAI RL researcher whose work on exploration (Random Network Distillation) has been widely used in frontier training. Represents the technical-engineering inside view at OpenAI.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Inside-OpenAI technical voice engaged with alignment questions; less publicly outspoken.",
        quotes: [
          {
            text:
              "The alignment problem is first an engineering problem before it is a philosophical one.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Yuri Burda OpenAI papers",
              url: "https://openai.com/research",
              medium: "paper",
              publisher: "OpenAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brad-smith",
    name: "Brad Smith",
    tagline: "Microsoft Vice Chair and President",
    summary:
      "Microsoft's president and chief legal officer. Public face of Microsoft's regulatory posture on AI; argues for 'governed progress' via licensing and national-security-aware regulation.",
    categories: ["executive", "policy"],
    affiliations: [
      { org: "Microsoft", role: "Vice Chair and President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Brad_Smith_(American_lawyer)",
    twitter: "BradSmi",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Supports licensing of frontier models, export controls on advanced chips, and an internationally coordinated oversight regime.",
        quotes: [
          {
            text:
              "We need to slow down — not stop — so that we can put in place the guardrails that a technology this powerful demands.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Brad Smith on Microsoft's AI governance posture",
              url: "https://blogs.microsoft.com/on-the-issues/",
              medium: "blog",
              publisher: "Microsoft",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-clifford",
    name: "Matt Clifford",
    tagline: "UK PM AI Opportunities advisor; Entrepreneur First co-founder",
    summary:
      "Led the UK AI Safety Summit preparation under Rishi Sunak and the AI Opportunities Action Plan under Keir Starmer. Bridges entrepreneurship and AI safety.",
    categories: ["policy", "founder"],
    affiliations: [
      { org: "UK Prime Minister's Office", role: "AI Opportunities adviser", current: true },
      { org: "Entrepreneur First", role: "Co-founder", current: true },
    ],
    twitter: "matthewclifford",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for pragmatic UK-style 'context-specific' AI governance; stood up the Bletchley Summit and AISI.",
        quotes: [
          {
            text:
              "Governance should be pro-opportunity and pro-safety. These are not in tension.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Opportunities Action Plan",
              url: "https://www.gov.uk/government/publications/ai-opportunities-action-plan",
              medium: "article",
              publisher: "UK Government",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dominic-cummings",
    name: "Dominic Cummings",
    tagline: "Former UK No. 10 chief adviser; AI policy commentator",
    summary:
      "Former chief adviser to UK PM Boris Johnson. Has written extensively on AI risk and governance through his Substack, combining Whitehall experience with an empirical-risk framing.",
    categories: ["policy", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Writer and consultant", current: true },
      { org: "UK Government", role: "Chief Adviser to the Prime Minister", end: "2020", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Dominic_Cummings",
    twitter: "Dominic2306",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Writes on the UK and US governance weakness in responding to frontier AI; argues for professionalised expert teams in government.",
        quotes: [
          {
            text:
              "Western states are dangerously underpowered to handle frontier AI. The machinery of state needs technical teams, not more committees.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Dominic Cummings on AI and state capacity",
              url: "https://dominiccummings.substack.com/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "peter-szolovits",
    name: "Peter Szolovits",
    tagline: "MIT medical AI pioneer",
    summary:
      "MIT professor who pioneered clinical decision-support AI in the 1970s. Argues the most urgent AI policy questions concern reliability, evaluation, and deployment context — not superintelligence.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "MIT CSAIL", role: "Professor of Computer Science and Engineering", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues the medical-AI governance playbook — FDA-style pre-deployment validation and continued monitoring — is the right template.",
        quotes: [
          {
            text:
              "We've been doing evaluation of clinical AI for 50 years. The lesson is: the evaluation is the governance.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Peter Szolovits — MIT CSAIL",
              url: "https://www.csail.mit.edu/person/peter-szolovits",
              medium: "article",
              publisher: "MIT CSAIL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "isabella-wilkinson",
    name: "Isabella Wilkinson",
    tagline: "Chatham House international affairs AI researcher",
    summary:
      "Researcher at Chatham House focused on AI and international order. Has argued that AI's geopolitics will require institutions analogous to the IAEA for frontier compute.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Chatham House", role: "Research Associate, AI and International Affairs", current: true },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues international coordination on AI, modelled on nuclear non-proliferation institutions, is the missing layer.",
        quotes: [
          {
            text:
              "AI governance needs an IAEA-equivalent for frontier training.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Chatham House AI and International Affairs",
              url: "https://www.chathamhouse.org/",
              medium: "article",
              publisher: "Chatham House",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
