import type { Person } from "@/lib/people-types";

// Batch AD: union voices, industry CEOs, and mainstream commentators.

export const people: Person[] = [
  {
    id: "randi-weingarten",
    name: "Randi Weingarten",
    tagline: "President of the American Federation of Teachers",
    summary:
      "Leads the 1.7-million-member AFT, positioning it as a major labour voice on AI in education. Argues teachers must be in control of how AI is deployed in classrooms.",
    categories: ["activist", "policy"],
    affiliations: [
      { org: "American Federation of Teachers", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Randi_Weingarten",
    twitter: "rweingarten",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI regulation in schools must keep teachers in charge; has pushed state-level AI policy in the absence of federal action.",
        quotes: [
          {
            text:
              "Teachers must be in charge of education, not the tool, not the machine. We're choosing the GPS system, not the driverless car.",
            date: "2025-07",
            fidelity: "direct",
            source: {
              title: "AFT's Randi Weingarten on Kids' Screen Time, AI, and Engaging Conservatives",
              url: "https://www.edweek.org/teaching-learning/afts-randi-weingarten-on-kids-screen-time-ai-and-engaging-conservatives/2025/07",
              medium: "article",
              publisher: "Education Week",
              date: "2025-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "arvind-krishna",
    name: "Arvind Krishna",
    tagline: "CEO of IBM",
    summary:
      "IBM CEO who has positioned IBM as the measured enterprise-AI vendor. Supports AI regulation on accountability grounds but opposes rules that hamper business predictability.",
    categories: ["executive"],
    affiliations: [
      { org: "IBM", role: "Chairman and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Arvind_Krishna",
    twitter: "ArvindKrishna",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Supports accountability-focused AI regulation; opposes rules that create unpredictability for business.",
        quotes: [
          {
            text:
              "Companies that put out AI models should be held accountable to their models.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "IBM CEO on AI and regulation",
              url: "https://www.bloomberg.com/news/videos/2024-05-06/ibm-ceo-on-future-of-ai-regulation",
              medium: "video",
              publisher: "Bloomberg",
              date: "2024-05-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dorothy-denning",
    name: "Dorothy Denning",
    tagline: "Georgetown emeritus; cybersecurity pioneer",
    summary:
      "Georgetown University emeritus professor who helped establish computer security as a field. Has written on AI's implications for cybersecurity and national defense.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Georgetown University", role: "Emeritus Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Dorothy_E._Denning",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Brings cybersecurity grounding to AI governance; argues AI creates new attack surfaces that existing defense doctrine does not cover.",
        quotes: [
          {
            text:
              "AI is both a tool for defenders and a tool for attackers. The balance depends on the deployment context.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Dorothy Denning, Georgetown",
              url: "https://cs.georgetown.edu/",
              medium: "article",
              publisher: "Georgetown University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "peter-wang",
    name: "Peter Wang",
    tagline: "Co-founder of Anaconda; scientific Python and AI",
    summary:
      "Co-founder of Anaconda, the default Python distribution for scientific and AI computing. Public commentator on open-source AI and the politics of the Python ecosystem.",
    categories: ["founder"],
    affiliations: [
      { org: "Anaconda", role: "Co-founder and CEO", current: true },
    ],
    twitter: "pwang",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source infrastructure is a public good; AI companies building on top of it should contribute back.",
        quotes: [
          {
            text:
              "The AI revolution runs on open-source that nobody is funding sustainably.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anaconda",
              url: "https://www.anaconda.com/",
              medium: "article",
              publisher: "Anaconda",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amjad-masad",
    name: "Amjad Masad",
    tagline: "CEO of Replit",
    summary:
      "Replit CEO who has championed AI-assisted coding and the 'agent' future. Argues AI agents that can build and ship software will reshape the economy.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Replit", role: "CEO and Co-founder", current: true },
    ],
    twitter: "amasad",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Bullish on AI-coding and agent-driven software development; arguments for accelerationist framing.",
        quotes: [
          {
            text:
              "Everyone will be a software developer. The bottleneck moves from writing code to deciding what to build.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Replit",
              url: "https://replit.com/",
              medium: "article",
              publisher: "Replit",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "garry-tan",
    name: "Garry Tan",
    tagline: "President and CEO of Y Combinator",
    summary:
      "Runs Y Combinator, currently the most influential startup accelerator. Public voice for aggressive AI startup deployment.",
    categories: ["investor", "founder"],
    affiliations: [
      { org: "Y Combinator", role: "President and CEO", current: true },
    ],
    twitter: "garrytan",
    wikipedia: "https://en.wikipedia.org/wiki/Garry_Tan",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Drives AI startup acceleration at YC; frames AI as the new 'full-stack' opportunity.",
        quotes: [
          {
            text:
              "AI lowers the floor on what founders can build and raises the ceiling on what a small team can ship.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Y Combinator blog",
              url: "https://www.ycombinator.com/blog",
              medium: "blog",
              publisher: "Y Combinator",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "laura-weidman-powers",
    name: "Laura Weidman Powers",
    tagline: "Co-founder of Code2040; diversity in AI",
    summary:
      "Co-founder of Code2040, a non-profit focused on Black and Latinx representation in technology. Argues AI will reproduce existing inequities unless the AI workforce diversifies.",
    categories: ["activist", "founder"],
    affiliations: [
      { org: "Code2040", role: "Co-founder", current: true },
    ],
    twitter: "laurawp",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI-workforce diversity is structurally upstream of algorithmic fairness.",
        quotes: [
          {
            text:
              "The AI we get is the AI the builders can imagine. That's a diversity problem, not an algorithmic one.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Code2040",
              url: "https://www.code2040.org/",
              medium: "article",
              publisher: "Code2040",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
