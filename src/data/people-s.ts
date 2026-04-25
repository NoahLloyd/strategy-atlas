import type { Person } from "@/lib/people-types";

// Batch S: additional researchers, policy specialists, and AI ethics figures.

export const people: Person[] = [
  {
    id: "jessica-cussins-newman",
    name: "Jessica Cussins Newman",
    tagline: "AI policy specialist; Microsoft Responsible AI",
    summary:
      "AI policy researcher who led UC Berkeley's AI Security Initiative and now works on Responsible AI at Microsoft. Frames AI security as an international-coordination problem.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Microsoft", role: "Responsible AI team", current: true },
      { org: "UC Berkeley Center for Long-Term Cybersecurity", role: "Former AI Security Initiative Lead", end: "2024", current: false },
    ],
    twitter: "jesscnewman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI security requires international coordination and concerted industry-government engagement.",
        quotes: [
          {
            text:
              "AI systems are already causing significant harm, and the risks are multiplying as AI systems increase in complexity and scale.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Toward AI Security: Global Aspirations for a More Resilient Future",
              url: "https://cltc.berkeley.edu/towardaisecurity/",
              medium: "paper",
              publisher: "UC Berkeley CLTC",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "irene-solaiman",
    name: "Irene Solaiman",
    tagline: "Chief Policy Officer at Hugging Face",
    summary:
      "Hugging Face's top policy officer who has led the field's thinking on staged release of AI models since her 2019 work on GPT-2 at OpenAI.",
    categories: ["policy"],
    affiliations: [
      { org: "Hugging Face", role: "Chief Policy Officer", current: true },
    ],
    homepage: "https://www.irenesolaiman.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Irene_Solaiman",
    twitter: "IreneSolaiman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Publishes widely on release strategies for generative AI; argues for a gradient rather than a binary of openness.",
        quotes: [
          {
            text:
              "No one spot along the gradient is the safest possible release.",
            date: "2023",
            fidelity: "direct",
            source: {
              title:
                "Women in AI: Irene Solaiman, head of global policy at Hugging Face",
              url: "https://techcrunch.com/2024/02/17/women-in-ai-irene-solaiman-head-of-global-policy-at-hugging-face/",
              medium: "article",
              publisher: "TechCrunch",
              date: "2024-02-17",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-khashabi",
    name: "Daniel Khashabi",
    tagline: "Johns Hopkins assistant professor; NLP safety researcher",
    summary:
      "NLP researcher at Johns Hopkins focused on making LLMs more trustworthy, including reasoning reliability and safety-evaluation frameworks in collaboration with Microsoft.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Johns Hopkins University", role: "Assistant Professor of Computer Science", current: true },
    ],
    homepage: "https://danielkhashabi.com/",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Works on efficient reusable frameworks for evaluating LLM safety before deployment.",
        quotes: [
          {
            text:
              "Creative reasoning thrives on revealing novel connections, yet is inherently prone to false associations. Safety evaluation must live with both.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Daniel Khashabi, homepage",
              url: "https://danielkhashabi.com/",
              medium: "article",
              publisher: "danielkhashabi.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sabrina-kuspert",
    name: "Sabrina Küspert",
    tagline: "EU AI Office; Italian / German policy researcher",
    summary:
      "EU AI Office scientist who contributed to the GPAI Code of Practice. Public voice for EU-style risk-tiered regulation.",
    categories: ["policy"],
    affiliations: [
      { org: "European Commission AI Office", role: "Scientific officer", current: true },
    ],
    twitter: "sabrina_kuspert",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Builds EU regulatory infrastructure; argues systemic-risk models need structured transparency obligations.",
        quotes: [
          {
            text:
              "The General-Purpose AI Code of Practice is a scaffolding for structured transparency, not a substitute for evaluations, but a foundation for them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "EU AI Office",
              url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office",
              medium: "article",
              publisher: "European Commission",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robert-trager",
    name: "Robert Trager",
    tagline: "Oxford Martin AI governance scholar",
    summary:
      "Political scientist at Oxford's Blavatnik School focused on international AI governance and verification regimes. Argues verifiable compute accounting is plausible and necessary.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Oxford Martin School", role: "Senior Research Fellow", current: true },
    ],
    twitter: "trager_ai",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues verifiable compute accounting is the key primitive for any international AI treaty.",
        quotes: [
          {
            text:
              "Verifiable compute accounting is the missing primitive for international AI governance. Without it, treaties have nothing to check.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Oxford Martin AI Governance",
              url: "https://www.oxfordmartin.ox.ac.uk/ai-governance/",
              medium: "article",
              publisher: "Oxford Martin School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lennart-heim",
    name: "Lennart Heim",
    tagline: "Compute governance researcher at RAND",
    summary:
      "Former Centre for the Governance of AI researcher now at RAND, focused specifically on compute governance, the chokepoint framework for frontier AI.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "RAND Corporation", role: "Information Scientist", current: true },
    ],
    homepage: "https://heim.xyz/",
    twitter: "ohlennart",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Published foundational frameworks for compute-based AI governance including verification and on-chip mechanisms.",
        quotes: [
          {
            text:
              "Compute is the most promising governance lever because it is detectable, quantifiable, and controllable.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Computing Power and the Governance of AI",
              url: "https://www.governance.ai/research-paper/computing-power-and-the-governance-of-ai",
              medium: "paper",
              publisher: "Centre for the Governance of AI",
              date: "2024-02-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yonadav-shavit",
    name: "Yonadav Shavit",
    tagline: "OpenAI researcher; on-chip compute verification",
    summary:
      "Computer scientist who has published on how to verify AI training and inference via on-chip mechanisms, the technical side of compute governance.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
    ],
    twitter: "yshavit",
    positions: [
      {
        strategyId: "hardware-killswitch",
        stance: "endorses",
        summary:
          "Argues hardware-level verification is technically feasible and is the missing enforcement layer for compute governance.",
        quotes: [
          {
            text:
              "Hardware-based mechanisms can verify where, when, and how frontier compute is used, making compute governance enforceable.",
            date: "2023-04-14",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What does it take to catch a Chinchilla? Verifying Rules on Large-Scale Neural Network Training via Compute Monitoring",
              url: "https://arxiv.org/abs/2303.11341",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-03-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-fist",
    name: "Tim Fist",
    tagline: "Institute for Progress AI policy researcher",
    summary:
      "CSET alumnus who now leads AI policy at the Institute for Progress. Focused on chip export controls, compute thresholds, and domestic AI industrial policy.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Institute for Progress", role: "Director of Emerging Technology Policy", current: true },
    ],
    twitter: "tim_fist",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Advocates US industrial policy that couples chip export controls with domestic capacity expansion.",
        quotes: [
          {
            text:
              "Export controls work only if paired with domestic capacity. Otherwise they're unilateral disarmament.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Institute for Progress AI policy",
              url: "https://ifp.org/",
              medium: "article",
              publisher: "Institute for Progress",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "saif-khan",
    name: "Saif M. Khan",
    tagline: "Former NSC AI technology director",
    summary:
      "Former CSET researcher who served on the National Security Council staff as director for technology policy. Worked closely with Ben Buchanan on chip export controls.",
    categories: ["policy"],
    affiliations: [
      { org: "Independent", role: "AI policy consultant", current: true },
      { org: "National Security Council", role: "Former Director for AI Technology", end: "2025-01", current: false },
    ],
    twitter: "saifmkhan",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Helped design chip export controls and frontier-compute reporting requirements.",
        quotes: [
          {
            text:
              "Export controls on advanced AI chips are among the most consequential US technology policy decisions of the decade.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Saif Khan on chip export controls",
              url: "https://cset.georgetown.edu/",
              medium: "article",
              publisher: "CSET",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ai-safety-summit-signatories",
    name: "Bletchley Declaration Signatories",
    tagline: "First international AI Safety Summit signatories (2023)",
    summary:
      "29 countries including the US, UK, EU, China, India, and Japan signed the November 2023 Bletchley Declaration, the first international statement on frontier AI risk. This entry stands in for the collective action.",
    categories: ["policy"],
    affiliations: [
      { org: "AI Safety Summit (Bletchley Park)", role: "Declaration signatories", current: true },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "First international statement acknowledging frontier AI risk as requiring cross-national coordination.",
        quotes: [
          {
            text:
              "There is potential for serious, even catastrophic, harm, either deliberate or unintentional, stemming from the most significant capabilities of these AI models.",
            date: "2023-11-01",
            fidelity: "direct",
            source: {
              title: "The Bletchley Declaration by Countries Attending the AI Safety Summit",
              url: "https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration",
              medium: "article",
              publisher: "UK Government",
              date: "2023-11-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
    notes:
      "Collective entry representing the 29 signatory nations. Individual signatories like Rishi Sunak, Kamala Harris, Ursula von der Leyen, and Yi Zeng have separate entries.",
  },

  {
    id: "victor-gao",
    name: "Victor Gao",
    tagline: "Chinese diplomat; AI dialogue participant",
    summary:
      "Chinese diplomat and former adviser who has participated in US-China AI safety track II dialogues. Representative voice of the Chinese establishment's public AI-governance framing.",
    categories: ["policy"],
    affiliations: [
      { org: "China Center for Globalization", role: "Vice President", current: true },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Participates in US-China AI safety dialogues; publicly advocates for great-power coordination on AI.",
        quotes: [
          {
            text:
              "The United States and China must find a way to cooperate on AI safety even as they compete economically.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Victor Gao on US-China AI dialogue",
              url: "https://www.ccg.org.cn/en/",
              medium: "article",
              publisher: "China Center for Globalization",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tianhua-tang",
    name: "Tianhua Tang",
    tagline: "Chinese AI safety researcher",
    summary:
      "Chinese AI safety researcher participating in international dialogues on AI alignment and governance, including IDAIS.",
    categories: ["researcher"],
    affiliations: [
      { org: "Chinese Academy of Sciences", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Participant in international AI safety research dialogues; argues alignment is a shared technical problem across jurisdictions.",
        quotes: [
          {
            text:
              "The alignment problem is a shared technical problem. The governance response need not be.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "International Dialogues on AI Safety",
              url: "https://idais.ai/",
              medium: "article",
              publisher: "IDAIS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
