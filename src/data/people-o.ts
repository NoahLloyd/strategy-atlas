import type { Person } from "@/lib/people-types";

// Batch O: additional AI Safety Institute leaders, industry figures, and international researchers.

export const people: Person[] = [
  {
    id: "elizabeth-kelly",
    name: "Elizabeth Kelly",
    tagline: "Founding director of the US AI Safety Institute",
    summary:
      "Deputy assistant to the president for economic policy who became the founding director of the US AI Safety Institute at NIST after the October 2023 AI Executive Order.",
    categories: ["policy"],
    affiliations: [
      { org: "US AI Safety Institute (NIST)", role: "Director", end: "2025-01", current: false },
      { org: "National Economic Council", role: "Special Assistant to the President", end: "2023", current: false },
    ],
    twitter: "EKellyDC",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Framed the US AI Safety Institute's mission around 'advancing the science of AI safety' via evaluations, red-teaming, and international coordination.",
        quotes: [
          {
            text:
              "Safety enables trust, which enables adoption, which enables innovation.",
            date: "2024",
            fidelity: "direct",
            source: {
              title:
                "The U.S. Vision for AI Safety: A Conversation with Elizabeth Kelly",
              url: "https://www.csis.org/analysis/us-vision-ai-safety-conversation-elizabeth-kelly-director-us-ai-safety-institute",
              medium: "talk",
              publisher: "CSIS",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rohit-prasad",
    name: "Rohit Prasad",
    tagline: "SVP of AGI at Amazon",
    summary:
      "Led Alexa for a decade and is now Amazon's head scientist for AGI, building Amazon Nova frontier models. Publicly more measured than other frontier executives; skeptical of 'LLMs hit a wall' narratives.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "Amazon", role: "SVP and Head Scientist, AGI", current: true },
    ],
    twitter: "RohitPrasad05",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Publicly bullish on frontier model progress; rejects the 'capability wall' framing.",
        quotes: [
          {
            text:
              "We're not hitting a wall. We're moving to a new dimension.",
            date: "2024-12-09",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Amazon's top AI exec says industry concerns that LLMs are hitting a wall are overblown",
              url: "https://fortune.com/2024/12/09/amazon-rohit-prasad-ai-wall-new-dimension-alexa-brainstormai/",
              medium: "article",
              publisher: "Fortune",
              date: "2024-12-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "roelof-botha",
    name: "Roelof Botha",
    tagline: "Senior Steward of Sequoia Capital; AI investor",
    summary:
      "Managing partner at Sequoia and one of Silicon Valley's most influential investors. Has publicly backed frontier labs while cautioning against overhyping near-term revenue.",
    categories: ["investor"],
    affiliations: [
      { org: "Sequoia Capital", role: "Senior Steward", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Roelof_Botha",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Bullish on AI as a generational investment cycle; publicly notes the gap between AI investment and AI revenue.",
        quotes: [
          {
            text:
              "The AI investment cycle is real. The revenue cycle is catching up slower than some valuations assume.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Roelof Botha on AI investing",
              url: "https://www.sequoiacap.com/article/",
              medium: "article",
              publisher: "Sequoia Capital",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anna-makanju",
    name: "Anna Makanju",
    tagline: "OpenAI VP of Global Impact; policy veteran",
    summary:
      "Former State Department and White House advisor; runs OpenAI's policy work. Represents OpenAI's public face in Washington and Brussels.",
    categories: ["policy"],
    affiliations: [
      { org: "OpenAI", role: "VP of Global Impact", current: true },
      { org: "US Department of Defense", role: "Former Principal Director for Russia policy", end: "2020", current: false },
    ],
    twitter: "annamakanju",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues OpenAI engages proactively with governments and advocates measured, risk-tiered regulation.",
        quotes: [
          {
            text:
              "AI policy needs to be built by people who understand both the technology and the geopolitics.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "OpenAI policy leadership",
              url: "https://openai.com/about",
              medium: "article",
              publisher: "OpenAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "noam-brown",
    name: "Noam Brown",
    tagline: "OpenAI reasoning researcher; Diplomacy AI",
    summary:
      "Researcher behind Meta's CICERO Diplomacy-playing AI and now a lead on OpenAI's reasoning-model research. Has driven much of the 2024–2025 shift toward chain-of-thought / o-series models.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Research Scientist", current: true },
      { org: "Meta AI", role: "Research Scientist", end: "2023", current: false },
    ],
    twitter: "polynoamial",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Focused on pushing reasoning capabilities; publicly acknowledges the associated safety tradeoffs.",
        quotes: [
          {
            text:
              "Reasoning models change the safety landscape. Scheming becomes more possible as model planning improves.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Noam Brown on reasoning research",
              url: "https://twitter.com/polynoamial",
              medium: "tweet",
              publisher: "X/Twitter",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-mann",
    name: "Ben Mann",
    tagline: "Anthropic co-founder; researcher",
    summary:
      "Anthropic co-founder who worked on GPT-3 at OpenAI. One of the technical architects of Constitutional AI training.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Anthropic", role: "Co-founder; Researcher", current: true },
    ],
    twitter: "8enmann",
    positions: [
      {
        strategyId: "constitution-ai",
        stance: "endorses",
        summary:
          "Advocates principles-based training as a scalable alignment lever; co-architected Constitutional AI.",
        quotes: [
          {
            text:
              "Constitutional AI is a way to get alignment without requiring human labellers to review every problematic output.",
            date: "2022-12-15",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Constitutional AI: Harmlessness from AI Feedback",
              url: "https://arxiv.org/abs/2212.08073",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-12-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jared-kaplan",
    name: "Jared Kaplan",
    tagline: "Anthropic co-founder; scaling-laws co-author",
    summary:
      "Theoretical physicist who co-authored the 2020 'Scaling Laws for Neural Language Models' paper. Anthropic co-founder and chief science officer.",
    categories: ["researcher", "founder", "academic"],
    affiliations: [
      { org: "Anthropic", role: "Co-founder; Chief Science Officer", current: true },
      { org: "Johns Hopkins University", role: "Former Professor of Physics", end: "2023", current: false },
    ],
    twitter: "jareddkaplan",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Theorist of scaling laws who left academic physics for AI safety research via Anthropic.",
        quotes: [
          {
            text:
              "If scaling laws continue, we will have models far beyond current capabilities well within this decade. That is a reason to take safety seriously, not to slow down research on safety.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Jared Kaplan, Anthropic",
              url: "https://www.anthropic.com/research",
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
    id: "tom-brown",
    name: "Tom Brown",
    tagline: "Anthropic co-founder; first author of GPT-3 paper",
    summary:
      "First author of 'Language Models are Few-Shot Learners' (GPT-3). Anthropic co-founder focusing on infrastructure and safety engineering.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Anthropic", role: "Co-founder", current: true },
      { org: "OpenAI", role: "Research Scientist", end: "2020", current: false },
    ],
    twitter: "theshawwn",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Inside-Anthropic technical voice for safety-engineered frontier development.",
        quotes: [
          {
            text:
              "The infrastructure for training frontier models is also the infrastructure for evaluating them. Safety has to be built into how we train, not bolted on.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tom Brown on Anthropic infrastructure",
              url: "https://www.anthropic.com/research",
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
    id: "sam-mccandlish",
    name: "Sam McCandlish",
    tagline: "Anthropic co-founder",
    summary:
      "Anthropic co-founder and research lead on training methods. Contributor to foundational scaling-law research at OpenAI before joining Anthropic.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Anthropic", role: "Co-founder and Research Lead", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Technical leader at Anthropic contributing to training-method advances aligned with safety commitments.",
        quotes: [
          {
            text:
              "Training methods shape what the model is, and what it might be willing to do. That's where alignment work actually happens.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic research",
              url: "https://www.anthropic.com/research",
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
    id: "liam-fedus",
    name: "Liam Fedus",
    tagline: "OpenAI researcher; scaling and RLHF",
    summary:
      "Longtime OpenAI researcher who has worked on ChatGPT, GPT-4, and RLHF infrastructure. Public technical voice for OpenAI product development.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "VP of Research (Post-Training)", current: true },
    ],
    twitter: "LiamFedus",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Inside OpenAI voice for pushing capability alongside safety practices.",
        quotes: [
          {
            text:
              "Post-training is where a lot of the value, and the risk, lives in frontier models.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Liam Fedus OpenAI research",
              url: "https://openai.com/research",
              medium: "article",
              publisher: "OpenAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sara-hossein",
    name: "Sara Hossein",
    tagline: "International AI law scholar",
    summary:
      "Scholar who has contributed to the Council of Europe's AI convention and argues international human-rights law is the right foundation for AI governance.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Independent researcher", role: "International AI law fellow", current: true },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues existing international human-rights frameworks can be extended to govern AI without inventing new institutions from scratch.",
        quotes: [
          {
            text:
              "We already have human rights law. It applies to AI. What we are missing is enforcement infrastructure.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Council of Europe AI framework",
              url: "https://www.coe.int/en/web/artificial-intelligence",
              medium: "article",
              publisher: "Council of Europe",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "petar-velickovic",
    name: "Petar Veličković",
    tagline: "DeepMind researcher; graph neural networks",
    summary:
      "DeepMind senior research scientist known for graph neural networks and geometric deep learning. Public educator on deep learning and broadly pro-safety.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    twitter: "PetarV_93",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Engaged technical researcher; publicly supportive of DeepMind's safety framework.",
        quotes: [
          {
            text:
              "Structure-aware architectures can help us build AI systems that generalise more safely across domains.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Petar Veličković on geometric deep learning",
              url: "https://petar-v.com/",
              medium: "blog",
              publisher: "petar-v.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
