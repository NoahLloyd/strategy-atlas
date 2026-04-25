import type { Person } from "@/lib/people-types";

// Batch X: more technical researchers, rights advocates, and data-driven voices.

export const people: Person[] = [
  {
    id: "neil-thompson",
    name: "Neil Thompson",
    tagline: "MIT CSAIL FutureTech director; computing economics",
    summary:
      "MIT researcher whose quantitative work on compute, scaling, and algorithmic progress has become standard reference material. Director of FutureTech at MIT CSAIL.",
    categories: ["researcher", "academic", "economist"],
    affiliations: [
      { org: "MIT CSAIL", role: "Principal Investigator, FutureTech", current: true },
    ],
    homepage: "https://futuretech.mit.edu/team/neil-thompson",
    twitter: "neil_t",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Grounds the debate in quantitative compute trends; publishes data that informs both safety and policy conversations.",
        quotes: [
          {
            text:
              "The compute required to train a language model to a given level of performance has been halving roughly every 8 months due to algorithmic improvements.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "On the Origin of Algorithmic Progress in AI",
              url: "https://arxiv.org/html/2511.21622",
              medium: "paper",
              publisher: "arXiv",
              date: "2025-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anna-bacciarelli",
    name: "Anna Bacciarelli",
    tagline: "Human Rights Watch senior researcher; formerly Amnesty International",
    summary:
      "Founded Amnesty International's AI and algorithmic accountability program; now at Human Rights Watch. Co-author of the Toronto Declaration on Human Rights and AI.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Human Rights Watch", role: "Senior Researcher, Technology, Rights, and Investigations", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance must be grounded in existing international human-rights law, with particular focus on non-discrimination and surveillance.",
        quotes: [
          {
            text:
              "The Toronto Declaration sets out tangible and actionable standards for states and the private sector to uphold the principles of equality and non-discrimination under binding human rights laws.",
            date: "2018-05-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Access Now and Amnesty International launch Toronto Declaration",
              url: "https://www.accessnow.org/access-now-amnesty-international-launch-toronto-declaration/",
              medium: "article",
              publisher: "Access Now",
              date: "2018-05-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dario-gil",
    name: "Darío Gil",
    tagline: "SVP and Director of IBM Research",
    summary:
      "Leads IBM Research and has been a public voice for IBM's view that AI governance should be centered on shared standards and competitive openness rather than moratoria or extinction framings.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "IBM", role: "SVP and Director of IBM Research", current: true },
    ],
    twitter: "dariogila",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates shared open benchmarks and standards as the backbone of AI governance.",
        quotes: [
          {
            text:
              "Open science and open standards are the backbone of trustworthy AI.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "IBM Research AI",
              url: "https://research.ibm.com/artificial-intelligence",
              medium: "article",
              publisher: "IBM Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "reid-southen",
    name: "Reid Southen",
    tagline: "Film concept artist; AI copyright litigation voice",
    summary:
      "Film concept artist whose collaboration with Gary Marcus on 'AI is a plagiarism machine' put image-model copyright litigation into the mainstream.",
    categories: ["activist"],
    affiliations: [
      { org: "Independent", role: "Concept artist", current: true },
    ],
    twitter: "Rahll",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documents image-model memorisation and has become a public voice for artists in copyright litigation.",
        quotes: [
          {
            text:
              "AI is a plagiarism machine. If you prompt it right, it regurgitates copyrighted training data.",
            date: "2024-01",
            fidelity: "paraphrase-loose",
            source: {
              title:
                "Generative AI Has a Visual Plagiarism Problem",
              url: "https://spectrum.ieee.org/midjourney-copyright",
              medium: "article",
              publisher: "IEEE Spectrum",
              date: "2024-01-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ed-newton-rex",
    name: "Ed Newton-Rex",
    tagline: "Fairly Trained founder; ex-Stability AI",
    summary:
      "Former Stability AI VP of Audio who resigned in November 2023 citing disagreement with fair-use defence of training data. Now runs Fairly Trained, a certifier of consent-based AI training.",
    categories: ["founder", "activist"],
    affiliations: [
      { org: "Fairly Trained", role: "CEO and Founder", current: true },
      { org: "Stability AI", role: "VP of Audio", end: "2023-11", current: false },
    ],
    twitter: "ednewtonrex",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Runs the Fairly Trained certifier for consent-based AI training; argues fair-use defence is structurally wrong for generative AI.",
        quotes: [
          {
            text:
              "I resigned from Stability AI because I disagree with the company's position that training generative AI models on copyrighted works is 'fair use'.",
            date: "2023-11-15",
            fidelity: "direct",
            source: {
              title: "Ed Newton-Rex — resignation statement",
              url: "https://twitter.com/ednewtonrex/status/1724902327151452486",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2023-11-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "karine-perset",
    name: "Karine Perset",
    tagline: "OECD AI Unit head",
    summary:
      "Heads the OECD's AI Unit, including OECD.AI and its policy observatory. Responsible for convening the 38 OECD member states on AI governance.",
    categories: ["policy"],
    affiliations: [
      { org: "OECD", role: "Head, AI Unit", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helps convene OECD member states around shared AI principles; advocate for cross-jurisdictional policy coordination.",
        quotes: [
          {
            text:
              "The OECD AI Principles are the first intergovernmental standard on AI, adopted by the 38 OECD member countries and many more.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "OECD.AI",
              url: "https://oecd.ai/",
              medium: "article",
              publisher: "OECD",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michal-kosinski",
    name: "Michał Kosiński",
    tagline: "Stanford psychologist; psychometric AI researcher",
    summary:
      "Stanford psychologist whose work has shown that off-the-shelf LLMs can pass cognitive, moral, and psychometric tests at human or super-human levels. Argues emergent capabilities are already more extensive than acknowledged.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University Graduate School of Business", role: "Associate Professor of Organizational Behavior", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Michal_Kosinski",
    twitter: "michalkosinski",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues emergent theory-of-mind and psychometric capabilities in LLMs are underestimated by mainstream discourse.",
        quotes: [
          {
            text:
              "Theory of mind may have spontaneously emerged in large language models.",
            date: "2023-02",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Theory of Mind May Have Spontaneously Emerged in Large Language Models",
              url: "https://arxiv.org/abs/2302.02083",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-02-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "inga-strumke",
    name: "Inga Strümke",
    tagline: "NTNU AI researcher; Norwegian AI public voice",
    summary:
      "Norwegian AI researcher whose public communication on AI risk and opportunity has made her one of Scandinavia's leading voices on AI.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Norwegian University of Science and Technology (NTNU)", role: "Associate Professor", current: true },
    ],
    twitter: "ingastrumke",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "European academic voice on AI literacy and governance; argues Norway should invest in AI sovereignty.",
        quotes: [
          {
            text:
              "AI is too important to leave to engineers alone — and too technical to leave to regulators alone.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Inga Strümke — NTNU",
              url: "https://www.ntnu.edu/employees/inga.strumke",
              medium: "article",
              publisher: "NTNU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anja-kaspersen",
    name: "Anja Kaspersen",
    tagline: "UN senior fellow; disarmament diplomat",
    summary:
      "Norwegian diplomat and former director of UN disarmament. Has pushed for applying arms-control frameworks to AI.",
    categories: ["policy"],
    affiliations: [
      { org: "Carnegie Council for Ethics in International Affairs", role: "Senior Fellow", current: true },
      { org: "United Nations", role: "Former Deputy Director of Disarmament", end: "2018", current: false },
    ],
    twitter: "anjakaspersen",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues AI requires arms-control-style international verification mechanisms.",
        quotes: [
          {
            text:
              "We built verification infrastructure for chemical and nuclear weapons. We can build it for AI — but only if we decide to.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anja Kaspersen at Carnegie Council",
              url: "https://www.carnegiecouncil.org/people/anja-kaspersen",
              medium: "article",
              publisher: "Carnegie Council",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
