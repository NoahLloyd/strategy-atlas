import type { Person } from "@/lib/people-types";

// Batch AG chunk 02/5: split from people-ag.ts to keep
// individual modules small enough for turbopack to hot-reload.

export const people: Person[] = [
  {
    id: "tim-urban",
    name: "Tim Urban",
    tagline: "Wait But Why; viral AI explainer",
    summary:
      "Author of the Wait But Why blog. His 2015 two-part series on superintelligence reached an order-of-magnitude wider audience than any prior writing on AI safety and shaped the public picture for years.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Wait But Why", role: "Founder, author", current: true },
    ],
    homepage: "https://waitbutwhy.com/",
    twitter: "waitbutwhy",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Communicated the core Bostromian / Yudkowskian argument for existential risk to a mainstream audience; framed the 'intelligence ladder' and the 'death spectrum' as accessible illustrations.",
        quotes: [
          {
            text:
              "We're on a balance beam between two outcomes. Either we get our act together, or we don't. There is no third option once superintelligence arrives.",
            date: "2015",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The AI Revolution: The Road to Superintelligence",
              url: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
              medium: "blog",
              publisher: "Wait But Why",
              date: "2015-01-22",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lila-ibrahim",
    name: "Lila Ibrahim",
    tagline: "DeepMind COO; AI ethics governance",
    summary:
      "Chief Operating Officer of Google DeepMind. Previously president of Coursera. Helped institutionalize DeepMind's Ethics & Society and AI Safety teams.",
    categories: ["executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Chief Operating Officer", current: true },
      { org: "Coursera", role: "President", end: "2017" },
    ],
    twitter: "lilaibrahim",
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Argues responsible scaling, publicly committed safety measures triggered by capability thresholds, is how frontier labs must operate; helps shape DeepMind's framework.",
        quotes: [
          {
            text:
              "Our Frontier Safety Framework defines protocols for responding to elevated risks tied to powerful capabilities. Safety must scale alongside capability.",
            date: "2024-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "DeepMind Frontier Safety Framework",
              url: "https://deepmind.google/discover/blog/introducing-the-frontier-safety-framework/",
              medium: "article",
              publisher: "Google DeepMind",
              date: "2024-05-17",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sam-charrington",
    name: "Sam Charrington",
    tagline: "Host of The TWIML AI Podcast",
    summary:
      "Founder and host of TWIML (This Week in Machine Learning & AI), one of the longest-running independent technical AI podcasts. Has interviewed hundreds of researchers from across the alignment, capability, and applications spectrum.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "TWIML", role: "Founder, host", current: true },
    ],
    homepage: "https://twimlai.com/",
    twitter: "samcharrington",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Editorial position consistently emphasizes empirical, technically grounded conversations about specific systems and benchmarks rather than ideological framings.",
        quotes: [
          {
            text:
              "What matters is not the meta-debate about AI risk, it's the specific empirical questions: what these systems can actually do, how they fail, and what we are doing about both.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "TWIML AI Podcast",
              url: "https://twimlai.com/podcast/",
              medium: "podcast",
              publisher: "TWIML",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tomek-korbak",
    name: "Tomek Korbak",
    tagline: "UK AI Security Institute; ex-Anthropic; pretraining alignment",
    summary:
      "Researcher at the UK AI Security Institute (AISI); previously at Anthropic. Doctoral work on pretraining-time alignment via behaviour-cloning and conditional control.",
    categories: ["researcher"],
    affiliations: [
      { org: "UK AI Security Institute", role: "Research Scientist", current: true },
      { org: "Anthropic", role: "Member of Technical Staff", end: "2024" },
    ],
    homepage: "https://tomekkorbak.com/",
    twitter: "tomekkorbak",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment ought to start at pretraining, not just RLHF, because behaviour shaped by base-model training is far harder to undo later.",
        quotes: [
          {
            text:
              "We propose pretraining language models with human preferences. The resulting models follow human preferences much more closely than ones aligned only at fine-tuning time.",
            date: "2023-02",
            fidelity: "direct",
            source: {
              title: "Pretraining Language Models with Human Preferences",
              url: "https://arxiv.org/abs/2302.08582",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-02-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "fabien-roger",
    name: "Fabien Roger",
    tagline: "Anthropic alignment researcher; control evaluations",
    summary:
      "Anthropic alignment researcher whose work on AI control, designing evaluations to test whether models can subvert oversight even when they are trying to, has been widely cited in safety circles.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
    ],
    homepage: "https://fabienroger.github.io/",
    twitter: "FabienDRoger",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues control evaluations, stress testing whether AIs can subvert their own monitoring, are a load-bearing part of any sensible deployment regime.",
        quotes: [
          {
            text:
              "AI control is the discipline of designing protocols that catch a model trying to subvert oversight, even when the model is much more capable than its monitors at the relevant tasks.",
            date: "2024-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Control: Improving Safety Despite Intentional Subversion",
              url: "https://arxiv.org/abs/2312.06942",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-12-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "marc-raibert",
    name: "Marc Raibert",
    tagline: "Boston Dynamics founder; AI Institute executive director",
    summary:
      "Founder of Boston Dynamics and now executive director of the AI Institute (Hyundai-backed). Veteran roboticist with views shaped by decades of building physical machines that have to behave in the real world.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "AI Institute", role: "Executive Director", current: true },
      { org: "Boston Dynamics", role: "Founder, ex-CEO", end: "2022" },
    ],
    twitter: "BostonDynamics",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Skeptical of AGI timelines from a roboticist's perspective; argues physical-world generality is much further than language-only benchmarks suggest, and that the bottleneck is real-world data.",
        quotes: [
          {
            text:
              "Robotics is hard. The gap between getting something to work in simulation and getting it to work in the real world has not narrowed nearly as much as the language-AI hype suggests.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Marc Raibert on building robots",
              url: "https://theaiinstitute.com/",
              medium: "article",
              publisher: "AI Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anjney-midha",
    name: "Anjney Midha",
    tagline: "Andreessen Horowitz general partner; AI investor",
    summary:
      "General partner at Andreessen Horowitz focused on AI infrastructure and applications. Previously founded Ubiquity6 (acquired by Niantic). Board member of Mistral AI and others.",
    categories: ["investor"],
    affiliations: [
      { org: "Andreessen Horowitz", role: "General Partner", current: true },
    ],
    twitter: "AnjneyMidha",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-weight foundation models are the principal path to keeping frontier AI from being captured by a small number of incumbents; supports portfolio companies building on open weights.",
        quotes: [
          {
            text:
              "The open-source AI ecosystem is the only credible counterweight to closed-frontier capture. Backing it is an act of structural diversification of the AI economy.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Anjney Midha, Andreessen Horowitz",
              url: "https://a16z.com/author/anjney-midha/",
              medium: "article",
              publisher: "a16z",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ozzie-gooen",
    name: "Ozzie Gooen",
    tagline: "Quantified Uncertainty Research Institute founder",
    summary:
      "Founder of the Quantified Uncertainty Research Institute (QURI); created Squiggle, a probabilistic estimation language. Vocal in EA forums about applying calibrated estimation to AI risk and longtermism.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Quantified Uncertainty Research Institute", role: "Founder", current: true },
    ],
    homepage: "https://ozziegooen.substack.com/",
    twitter: "ozziegooen",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues AI risk arguments need to be expressed as explicit probabilistic models that can be inspected, criticized, and updated; built Squiggle for this purpose.",
        quotes: [
          {
            text:
              "Most AI risk discussions are poorly formalized. We can do much better with explicit probabilistic estimation, and that requires both better tools and better community norms.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Squiggle, Quantified Uncertainty",
              url: "https://www.squiggle-language.com/",
              medium: "article",
              publisher: "QURI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vivek-wadhwa",
    name: "Vivek Wadhwa",
    tagline: "Tech writer and ex-academic; serial AI critic",
    summary:
      "Tech writer and former Stanford / Carnegie Mellon distinguished fellow. Frequent commentator on AI's social and labor impacts, generally skeptical of frontier-lab self-regulation.",
    categories: ["public-intellectual", "academic"],
    affiliations: [
      { org: "Independent", role: "Author / Speaker", current: true },
    ],
    homepage: "https://www.wadhwa.com/",
    twitter: "wadhwa",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI hype obscures concentrated power and labor disruption; calls for global coordination and public-interest research investment as the alternative to lab-led regulation.",
        quotes: [
          {
            text:
              "We are letting Silicon Valley write the rules for technologies that will reshape every other industry. That is not how democracies are supposed to work.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Vivek Wadhwa columns",
              url: "https://www.wadhwa.com/",
              medium: "article",
              publisher: "wadhwa.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sara-beery",
    name: "Sara Beery",
    tagline: "MIT EAPS / CSAIL; AI for ecology",
    summary:
      "MIT assistant professor in Electrical Engineering and Computer Science / EAPS; widely cited for using ML to scale ecological monitoring and biodiversity science.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT", role: "Assistant Professor of EECS / EAPS", current: true },
    ],
    homepage: "https://beerys.github.io/",
    twitter: "sarameghanbeery",
    positions: [
      {
        strategyId: "differential-tech",
        stance: "endorses",
        summary:
          "Argues AI's most under-funded high-leverage application is biodiversity and ecosystem monitoring; pushes for differential investment in tech that protects rather than only optimizes consumption.",
        quotes: [
          {
            text:
              "AI for biodiversity monitoring could give us the planetary-scale measurement infrastructure we have never had. The question is whether we will choose to fund it.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Sara Beery, MIT",
              url: "https://beerys.github.io/",
              medium: "article",
              publisher: "MIT EECS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "justin-trudeau",
    name: "Justin Trudeau",
    tagline: "Prime Minister of Canada (2015–2025)",
    summary:
      "Prime Minister of Canada from 2015 to early 2025. Hosted the 2018 G7 with AI on the agenda; oversaw the Pan-Canadian AI Strategy. His government pursued bills C-27 and AIDA on AI regulation.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Canada", role: "Prime Minister", end: "2025-03" },
    ],
    twitter: "JustinTrudeau",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argued democratic governments must regulate AI early and that Canada's compute and talent advantages should be matched by responsible public-interest rules.",
        quotes: [
          {
            text:
              "We can lead the world both in AI capability and AI safety. The country that gets there first will be the one that took governance seriously from the start.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Government of Canada AI strategy",
              url: "https://ised-isde.canada.ca/site/ai-strategy/en",
              medium: "article",
              publisher: "Government of Canada",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anthony-albanese",
    name: "Anthony Albanese",
    tagline: "Prime Minister of Australia (2022–)",
    summary:
      "Prime Minister of Australia since 2022. His government commissioned and responded to the 2023 'Safe and Responsible AI in Australia' consultation and supported voluntary AI safety standards.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Australia", role: "Prime Minister", current: true },
    ],
    twitter: "AlboMP",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Cautious supporter of AI regulation; aligns Australia with mid-Atlantic positions, stronger than U.S., softer than EU, on frontier model governance.",
        quotes: [
          {
            text:
              "Australia must shape the rules around AI rather than be a passive recipient of them. That means working with both our allies and our region.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Australian Government's response to safe and responsible AI in Australia consultation",
              url: "https://www.industry.gov.au/news/governments-response-safe-and-responsible-ai-consultation",
              medium: "article",
              publisher: "Australian Department of Industry, Science and Resources",
              date: "2024-01-17",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "scott-wiener",
    name: "Scott Wiener",
    tagline: "California State Senator; SB-1047 author",
    summary:
      "California State Senator (D-San Francisco) who authored SB-1047, the 2024 'Safe and Secure Innovation for Frontier AI Models Act' that became the most-debated state-level frontier-AI safety legislation. Vetoed by Governor Newsom on 29 September 2024.",
    categories: ["policy"],
    affiliations: [
      { org: "California State Senate", role: "Senator (D-San Francisco)", current: true },
    ],
    homepage: "https://sd11.senate.ca.gov/",
    twitter: "Scott_Wiener",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues frontier AI labs must be required by law to test for and disclose catastrophic capabilities before deployment; SB-1047 was the first U.S. state attempt to codify this.",
        quotes: [
          {
            text:
              "Innovation and safety are not in conflict. SB 1047 will help spur AI innovation by giving developers the certainty they need.",
            date: "2024-08-29",
            fidelity: "direct",
            source: {
              title: "Senator Wiener's AI Safety Bill SB 1047 Passes Assembly",
              url: "https://sd11.senate.ca.gov/news/senator-wieners-ai-safety-bill-sb-1047-passes-assembly",
              medium: "article",
              publisher: "California State Senate",
              date: "2024-08-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ro-khanna",
    name: "Ro Khanna",
    tagline: "U.S. Representative (CA-17); Silicon Valley House member",
    summary:
      "U.S. Representative for California's 17th district (Silicon Valley); senior member of the House AI Caucus. Has co-led legislation on algorithmic accountability and chip export policy.",
    categories: ["policy"],
    affiliations: [
      { org: "U.S. House of Representatives", role: "Representative, CA-17", current: true },
    ],
    homepage: "https://khanna.house.gov/",
    twitter: "RepRoKhanna",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI safety needs federal regulation but warns against excessive licensing regimes that lock in incumbents; supports liability and transparency over pre-deployment licensing.",
        quotes: [
          {
            text:
              "We need rules of the road that protect consumers without creating barriers that only big incumbents can clear. Algorithmic accountability is the right framework.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Ro Khanna on AI policy",
              url: "https://khanna.house.gov/issues/technology",
              medium: "article",
              publisher: "U.S. House of Representatives",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gavin-newsom",
    name: "Gavin Newsom",
    tagline: "Governor of California; SB-1047 vetoer",
    summary:
      "Governor of California since 2019. In September 2024 vetoed SB-1047 (frontier AI safety bill) while issuing executive orders directing the state to develop alternative guardrails.",
    categories: ["policy"],
    affiliations: [
      { org: "State of California", role: "Governor", current: true },
    ],
    twitter: "GavinNewsom",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Vetoed SB-1047 on the grounds that its threshold-based approach was too narrow; favours commissioned reports and capability-first frameworks over hard statutory limits.",
        quotes: [
          {
            text:
              "While well-intentioned, SB 1047 does not take into account whether an AI system is deployed in high-risk environments, involves critical decision-making, or the use of sensitive data. The bill applies stringent standards to even the most basic functions.",
            date: "2024-09-29",
            fidelity: "direct",
            source: {
              title: "Governor Newsom Veto Message, SB 1047",
              url: "https://www.gov.ca.gov/wp-content/uploads/2024/09/SB-1047-Veto-Message.pdf",
              medium: "article",
              publisher: "California Office of the Governor",
              date: "2024-09-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hadrien-pouget",
    name: "Hadrien Pouget",
    tagline: "Carnegie Endowment; EU AI Act translator-in-chief",
    summary:
      "Associate fellow at the Carnegie Endowment for International Peace; one of the most-read English-language analysts of the EU AI Act. Frequently consulted by U.S. policymakers translating Brussels into Washington.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Carnegie Endowment for International Peace", role: "Associate Fellow", current: true },
    ],
    twitter: "h_pouget",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues U.S. policymakers underestimate how much the EU AI Act will set de facto global standards; calls for U.S. policy that engages substantively rather than dismissing Brussels.",
        quotes: [
          {
            text:
              "The EU AI Act is going to shape the global market for advanced AI whether U.S. firms like it or not. The substantive question is which provisions are exportable and which are uniquely European.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hadrien Pouget, Carnegie Endowment",
              url: "https://carnegieendowment.org/people/hadrien-pouget",
              medium: "article",
              publisher: "Carnegie Endowment",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "madhumita-murgia",
    name: "Madhumita Murgia",
    tagline: "Financial Times AI editor; 'Code Dependent' author",
    summary:
      "Financial Times AI editor and author of 'Code Dependent: Living in the Shadow of AI' (2024). Reported the working conditions of data labelers and content moderators powering frontier ML.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Financial Times", role: "AI Editor", current: true },
    ],
    twitter: "madhumita29",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues the human cost of AI's data and moderation pipelines is invisible by design and that surfacing it is essential to honest debate about AI governance.",
        quotes: [
          {
            text:
              "Behind every smooth chatbot is an army of underpaid workers cleaning, labelling, and moderating data, often in the Global South. AI dependency is also dependence on this hidden workforce.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Code Dependent: Living in the Shadow of AI",
              url: "https://www.picador.com/books/9781035020584/codedependent",
              medium: "book",
              publisher: "Picador",
              date: "2024-03-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "megan-ogieblyn",
    name: "Meghan O'Gieblyn",
    tagline: "Essayist; 'God, Human, Animal, Machine'",
    summary:
      "Essayist and author of 'God, Human, Animal, Machine' (2021), a literary investigation of how religious metaphors structure the AI age and how loss of those metaphors shapes contemporary epistemology.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Essayist", current: true },
    ],
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AGI discourse inherits and re-enacts religious frames, incarnation, eschatology, the soul, and that recognising those origins changes what we should make of the predictions on offer.",
        quotes: [
          {
            text:
              "Most of the questions we ask about AI, what it knows, whether it has a soul, what we owe it, were first asked by theologians. We have not stopped being theological; we have only forgotten that we are.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "God, Human, Animal, Machine: Technology, Metaphor, and the Search for Meaning",
              url: "https://www.penguinrandomhouse.com/books/610379/god-human-animal-machine-by-meghan-ogieblyn/",
              medium: "book",
              publisher: "Doubleday",
              date: "2021-08-24",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trevor-paglen",
    name: "Trevor Paglen",
    tagline: "Artist; AI surveillance and computer vision",
    summary:
      "Artist and geographer whose work investigates the apparatus of state surveillance and the visual training data that underpins computer vision. Collaborated on 'ImageNet Roulette' with Kate Crawford.",
    categories: ["activist", "public-intellectual"],
    affiliations: [
      { org: "Independent artist", role: "Artist", current: true },
    ],
    homepage: "https://paglen.studio/",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues computer vision systems encode racialized and political assumptions through their training data, and that revealing these assumptions through art is part of the political work.",
        quotes: [
          {
            text:
              "Computer vision doesn't see the world neutrally. It sees through the categories its training data inherited, and those categories are political all the way down.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Excavating AI",
              url: "https://excavating.ai/",
              medium: "article",
              publisher: "excavating.ai",
              date: "2019-09-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-thornhill",
    name: "John Thornhill",
    tagline: "Financial Times innovation editor",
    summary:
      "Financial Times innovation editor; one of the most-read European columnists on AI strategy and competition. Co-host of the Tech Tonic podcast.",
    categories: ["journalist"],
    affiliations: [
      { org: "Financial Times", role: "Innovation Editor", current: true },
    ],
    twitter: "johnthornhillft",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Sceptical of both U.S. light-touch and Chinese state-led models; argues Europe's regulatory approach is underrated and that institutional credibility matters more than racing.",
        quotes: [
          {
            text:
              "Europe is sometimes mocked for regulating before it innovates. But once you accept that AI's harms compound, doing the regulation first looks more like wisdom than weakness.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "John Thornhill, FT",
              url: "https://www.ft.com/john-thornhill",
              medium: "article",
              publisher: "Financial Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anna-lauren-hoffmann",
    name: "Anna Lauren Hoffmann",
    tagline: "UW iSchool; 'data violence' theorist",
    summary:
      "Associate professor at the University of Washington Information School; coined 'data violence' as a frame for harms perpetrated through data systems, and has written widely on philosophy of information.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Washington Information School", role: "Associate Professor", current: true },
    ],
    homepage: "https://www.annaeveryday.com/",
    twitter: "annaeveryday",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues 'fairness' framings underweight the concept of violence done through information systems; calls for moral language adequate to the structural harms produced by data-driven systems.",
        quotes: [
          {
            text:
              "Data violence describes the cumulative harm produced through everyday operations of data systems, not the spectacular event but the continuous structural injury.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Data Violence and How Bad Engineering Choices Can Damage Society",
              url: "https://medium.com/s/story/data-violence-and-how-bad-engineering-choices-can-damage-society-39e44150e1d4",
              medium: "blog",
              publisher: "Medium",
              date: "2018-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bo-li",
    name: "Bo Li",
    tagline: "UChicago / UIUC; AI safety evaluations",
    summary:
      "University of Chicago associate professor specializing in safety, robustness, and trustworthiness of ML systems. Lead developer of DecodingTrust, a comprehensive trustworthiness benchmark for LLMs.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Chicago", role: "Associate Professor of Computer Science", current: true },
      { org: "Virtue AI", role: "Co-founder", current: true },
    ],
    homepage: "https://aisecure.github.io/",
    twitter: "boli_uchicago",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues comprehensive multi-dimensional safety benchmarks, covering toxicity, fairness, privacy, robustness, ethics, are needed to characterize AI risks empirically before deployment.",
        quotes: [
          {
            text:
              "Despite the impressive capabilities of GPT-4, we identify significant trustworthiness gaps in dimensions including toxicity, stereotype bias, robustness, privacy, and ethics.",
            date: "2023-06",
            fidelity: "direct",
            source: {
              title: "DecodingTrust: A Comprehensive Assessment of Trustworthiness in GPT Models",
              url: "https://arxiv.org/abs/2306.11698",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2023-06-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yaodong-yang",
    name: "Yaodong Yang",
    tagline: "Peking University; alignment and multi-agent RL",
    summary:
      "Peking University Boya Young Fellow; researches multi-agent reinforcement learning and AI alignment. Hosted Beijing-based academic alignment workshops bridging Chinese and Western researchers.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Peking University Institute for AI", role: "Boya Young Fellow", current: true },
    ],
    homepage: "https://www.yangyaodong.com/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment research must scale internationally, including China, and that the multi-agent setting is where many open alignment problems become formalizable.",
        quotes: [
          {
            text:
              "Multi-agent alignment is where the technical and political problems converge. We need to build a research community that crosses borders.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Yaodong Yang, homepage",
              url: "https://www.yangyaodong.com/",
              medium: "article",
              publisher: "Peking University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nat-friedman",
    name: "Nat Friedman",
    tagline: "AI Grant; ex-GitHub CEO; sits on Meta superintelligence advisory",
    summary:
      "Investor and former GitHub CEO (2018–2021). Co-founder of AI Grant; advised the Vesuvius Challenge that used ML to read carbonized scrolls. Joined Meta's superintelligence advisory in 2024.",
    categories: ["investor", "executive"],
    affiliations: [
      { org: "AI Grant", role: "Co-founder", current: true },
      { org: "GitHub", role: "CEO", end: "2021-11" },
    ],
    homepage: "https://nat.org/",
    twitter: "natfriedman",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues frontier AI will produce abundance and that the frontier should be built broadly, with many startups, not concentrated; funds early-stage AI research via AI Grant.",
        quotes: [
          {
            text:
              "AI is going to give us a once-in-a-civilization productivity gain. Our job is to make sure that gain is distributed and applied to important problems.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Nat Friedman, nat.org",
              url: "https://nat.org/",
              medium: "article",
              publisher: "nat.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-gross",
    name: "Daniel Gross",
    tagline: "Andromeda Cluster co-founder; ex-Apple AI lead",
    summary:
      "Investor; former director of machine learning at Apple. Co-founder with Nat Friedman of AI Grant and Andromeda, a large-scale GPU cluster offered to AI startups.",
    categories: ["investor", "executive"],
    affiliations: [
      { org: "AI Grant / Andromeda", role: "Co-founder", current: true },
      { org: "Apple", role: "Director of ML", end: "2017" },
      { org: "Y Combinator", role: "Partner", end: "2018" },
    ],
    twitter: "danielgross",
    positions: [
      {
        strategyId: "distributed-builders",
        stance: "endorses",
        summary:
          "Argues compute access is the bottleneck preventing many strong teams from competing with frontier labs; co-built Andromeda specifically to widen the pool of credible AI startups.",
        quotes: [
          {
            text:
              "Compute is the new gold rush. We started Andromeda because the only thing we couldn't easily get for our portfolio was the cluster.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Andromeda Cluster",
              url: "https://andromedacluster.com/",
              medium: "article",
              publisher: "Andromeda Cluster",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tatsu-hashimoto",
    name: "Tatsunori Hashimoto",
    tagline: "Stanford; CRFM; LLM evaluation and security",
    summary:
      "Stanford assistant professor in CS and statistics. Member of the Center for Research on Foundation Models. Researches generalization and security properties of large models.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University", role: "Assistant Professor of CS and Statistics", current: true },
      { org: "Stanford CRFM", role: "Member", current: true },
    ],
    homepage: "https://thashim.github.io/",
    twitter: "tatsu_hashimoto",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues robust evaluation requires carefully constructed datasets that resist contamination and reveal real generalization, not leaderboard-fitted numbers.",
        quotes: [
          {
            text:
              "The dominant evaluation paradigm in NLP is fundamentally susceptible to contamination and overfitting. We need to design tests that are robust to the way models actually develop.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tatsunori Hashimoto, Stanford",
              url: "https://thashim.github.io/",
              medium: "article",
              publisher: "Stanford CS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "karthik-narasimhan",
    name: "Karthik Narasimhan",
    tagline: "Princeton; reasoning, NLP",
    summary:
      "Princeton assistant professor of computer science. Previously a researcher at OpenAI before its scaling era. Focuses on language understanding and reasoning, and led work on the SWE-bench benchmark.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Princeton University", role: "Assistant Professor of Computer Science", current: true },
    ],
    homepage: "https://www.cs.princeton.edu/~karthikn/",
    twitter: "karthik_r_n",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues evaluations grounded in real-world software engineering tasks reveal capability and safety properties that synthetic benchmarks miss.",
        quotes: [
          {
            text:
              "SWE-bench evaluates language models in a realistic software engineering setting: resolving real GitHub issues from real codebases. Performance here is closer to deployment reality than synthetic tasks.",
            date: "2023-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?",
              url: "https://arxiv.org/abs/2310.06770",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-10-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ce-zhang",
    name: "Ce Zhang",
    tagline: "ETH Zürich → University of Chicago; ML systems",
    summary:
      "Professor at the University of Chicago and previously at ETH Zürich; co-founder of Together AI. Researches the systems substrate of large-scale ML training and inference.",
    categories: ["researcher", "academic", "founder"],
    affiliations: [
      { org: "University of Chicago", role: "Anita and Robert Lucas Distinguished Service Professor", current: true },
      { org: "Together AI", role: "Co-founder", current: true },
    ],
    homepage: "https://zhangce.github.io/",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues distributed and open ML infrastructure is necessary to keep frontier capabilities accessible to academic research and small organizations; co-founded Together AI on this thesis.",
        quotes: [
          {
            text:
              "Open and decentralized infrastructure for foundation models is the only way to make sure academic research and small companies can keep contributing to the frontier.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Together AI, about",
              url: "https://www.together.ai/about",
              medium: "article",
              publisher: "Together AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "seda-gurses",
    name: "Seda Gürses",
    tagline: "TU Delft; computational law and privacy",
    summary:
      "TU Delft associate professor whose research connects software engineering, privacy, and the political economy of platforms. Argues large ML systems are functions of data extraction infrastructures, not isolated artefacts.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "TU Delft", role: "Associate Professor, Multi-Actor Systems", current: true },
    ],
    homepage: "https://www.sedagurses.org/",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues 'AI safety' framings collapse when separated from the data extraction and labour systems that produce models; advocates regulating those substrates rather than the models alone.",
        quotes: [
          {
            text:
              "There is no way to talk about AI safety without talking about how the data, the labour, and the infrastructure that produce these systems are governed.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Seda Gürses, TU Delft profile",
              url: "https://www.tudelft.nl/en/staff/f.s.gurses/",
              medium: "article",
              publisher: "TU Delft",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ifeoma-ajunwa",
    name: "Ifeoma Ajunwa",
    tagline: "Emory Law; workplace AI scholar",
    summary:
      "Asa Griggs Candler Professor of Law at Emory University School of Law and founder of the AI Decision-Making Research Program. Author of 'The Quantified Worker' (2023).",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Emory University School of Law", role: "Asa Griggs Candler Professor of Law", current: true },
    ],
    twitter: "iajunwa",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues workplace algorithmic management is a primary surface for AI harm and that labor law and civil-rights law should govern it; AGI debates distract from where harm is happening.",
        quotes: [
          {
            text:
              "Algorithmic management transforms workers into quantified objects subject to surveillance and discipline. The legal regime for this is incomplete and increasingly inadequate.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Quantified Worker: Law and Technology in the Modern Workplace",
              url: "https://www.cambridge.org/9781316516317",
              medium: "book",
              publisher: "Cambridge University Press",
              date: "2023-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mark-latonero",
    name: "Mark Latonero",
    tagline: "AI policy researcher; ex-Data & Society",
    summary:
      "Researcher and policy analyst formerly at Data & Society and the World Economic Forum; senior adviser at the Center for Human Rights in Practice. Long-time advocate of human-rights-grounded AI governance.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Center for Human Rights in Practice", role: "Senior Adviser", current: true },
      { org: "Data & Society", role: "Research Lead", end: "2020" },
    ],
    twitter: "latonero",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues international human-rights frameworks, not new bespoke AI laws, should be the primary legal lens for AI governance.",
        quotes: [
          {
            text:
              "International human rights provide a coherent legal framework for AI governance, one that already commands international consensus and addresses dignity, equality, and remedy directly.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Governing Artificial Intelligence: Upholding Human Rights & Dignity",
              url: "https://datasociety.net/library/governing-artificial-intelligence/",
              medium: "paper",
              publisher: "Data & Society",
              date: "2018-10-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "catelijne-muller",
    name: "Catelijne Muller",
    tagline: "ALLAI president; EU AI Act civil-society voice",
    summary:
      "President of ALLAI (Alliance for Human-Centered AI) and a member of the European Commission High-Level Expert Group on AI. Lead civil-society interlocutor on the EU AI Act.",
    categories: ["policy"],
    affiliations: [
      { org: "ALLAI", role: "President", current: true },
      { org: "European Commission HLEG on AI", role: "Member", end: "2020" },
    ],
    twitter: "MullerCatelijne",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the EU's risk-based regulatory approach should be the global template; pushed for stronger civil-society participation in the AI Act trilogues.",
        quotes: [
          {
            text:
              "Trustworthy AI must be lawful, ethical and robust. The EU AI Act is the world's first comprehensive attempt to make these requirements binding.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "ALLAI position on the EU AI Act",
              url: "https://allai.nl/",
              medium: "article",
              publisher: "ALLAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gemma-galdon-clavell",
    name: "Gemma Galdon Clavell",
    tagline: "Eticas Foundation founder; algorithmic audits",
    summary:
      "Founder of the Eticas Foundation, a non-profit specializing in adversarial algorithmic audits. Repeatedly demonstrated bias in deployed government and platform systems in Europe and Latin America.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Eticas Foundation", role: "Founder, Director", current: true },
    ],
    homepage: "https://eticas.tech/",
    twitter: "GemmaGaldon",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues independent third-party audits, not lab self-attestation, are how AI systems should be regulated; pioneered audit methodologies for government and platform AI.",
        quotes: [
          {
            text:
              "Audit is not a one-time exercise. It is a process of continuous accountability that needs legal teeth and independent practitioners.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Eticas Foundation",
              url: "https://eticas.tech/",
              medium: "article",
              publisher: "Eticas Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martin-tisne",
    name: "Martin Tisné",
    tagline: "AI Collaborative; managing director",
    summary:
      "Managing director of the AI Collaborative at the Omidyar Network; long-standing funder and convener of civil-society AI policy work. Has championed 'data agency' framings in international forums.",
    categories: ["policy"],
    affiliations: [
      { org: "AI Collaborative (Omidyar Network)", role: "Managing Director", current: true },
    ],
    twitter: "martintisne",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Argues data and AI governance must be subject to democratic processes that include workers, citizens, and affected communities, not negotiated solely between firms and regulators.",
        quotes: [
          {
            text:
              "If we want a democratic AI future, we have to design participatory governance from the start. Otherwise we end up with whatever incumbents quietly negotiate behind closed doors.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Omidyar Network, AI Collaborative",
              url: "https://omidyar.com/aicollaborative/",
              medium: "article",
              publisher: "Omidyar Network",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "edward-grefenstette",
    name: "Edward Grefenstette",
    tagline: "Google DeepMind; AI for science research",
    summary:
      "DeepMind senior research scientist focused on language and reasoning. Previously co-led Cohere for AI's research arm; long-time NLP researcher.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
      { org: "Cohere for AI", role: "Director of Research", end: "2024" },
    ],
    homepage: "https://www.egrefen.com/",
    twitter: "egrefen",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues research on reasoning and language understanding is essential before scaling can be considered safe; views capability research as inseparable from how alignment problems are framed.",
        quotes: [
          {
            text:
              "We don't yet know how to robustly characterize what these models understand versus what they confabulate. That gap is the root of many alignment problems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Edward Grefenstette, egrefen.com",
              url: "https://www.egrefen.com/",
              medium: "article",
              publisher: "egrefen.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ashish-vaswani",
    name: "Ashish Vaswani",
    tagline: "Co-founder Essential AI; lead author of 'Attention Is All You Need'",
    summary:
      "Co-founder of Essential AI; lead author of the 2017 'Attention Is All You Need' paper that introduced the Transformer architecture, the foundation of modern LLMs.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Essential AI", role: "Co-founder", current: true },
      { org: "Adept AI", role: "Co-founder", end: "2023" },
      { org: "Google Brain", role: "Research Scientist", end: "2022" },
    ],
    twitter: "ashvaswani",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Position inferred from career trajectory (Transformer architect, Essential AI co-founder building frontier tooling); no public position statement on AI strategy is on record. Quote below is from the Transformer paper, which is technical, not strategic.",
        quotes: [
          {
            text:
              "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
            date: "2017-06",
            fidelity: "direct",
            source: {
              title: "Attention Is All You Need",
              url: "https://arxiv.org/abs/1706.03762",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2017-06-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "niki-parmar",
    name: "Niki Parmar",
    tagline: "Co-founder Essential AI; Transformer co-author",
    summary:
      "Co-founder of Essential AI; co-author of 'Attention Is All You Need' and a key contributor to subsequent improvements (Image Transformer, Universal Transformer).",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Essential AI", role: "Co-founder", current: true },
      { org: "Adept AI", role: "Co-founder", end: "2023" },
      { org: "Google Brain", role: "Research Scientist", end: "2022" },
    ],
    twitter: "nikiparmar09",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Position inferred from being a Transformer co-author and Essential AI co-founder; no public position statement on AI strategy is on record. Quote below is from the Transformer paper, technical not strategic.",
        quotes: [
          {
            text:
              "Multi-headed self-attention enables the model to jointly attend to information from different representation subspaces at different positions.",
            date: "2017-06",
            fidelity: "direct",
            source: {
              title: "Attention Is All You Need",
              url: "https://arxiv.org/abs/1706.03762",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2017-06-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jakob-uszkoreit",
    name: "Jakob Uszkoreit",
    tagline: "Inceptive co-founder; Transformer co-author",
    summary:
      "Co-founder of Inceptive (RNA biology company); previously a senior researcher at Google Brain and a co-author of the Transformer paper.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Inceptive", role: "Co-founder, CEO", current: true },
      { org: "Google Brain", role: "Research Scientist", end: "2021" },
    ],
    twitter: "kyosu",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        tentative: true,
        summary:
          "Position inferred from work on Transformer-derived RNA design; no explicit AI-strategy statement on record. Quote describes the technical bet, not the strategic one.",
        quotes: [
          {
            text:
              "We're using the same architecture that powers language models to design RNA medicines. The substrate matters, but the underlying learning machinery generalizes.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Inceptive: AI-designed RNA",
              url: "https://www.inceptive.life/",
              medium: "article",
              publisher: "Inceptive",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "illia-polosukhin",
    name: "Illia Polosukhin",
    tagline: "NEAR Protocol co-founder; Transformer co-author",
    summary:
      "Co-founder of NEAR Protocol; previously at Google Brain, where he co-authored 'Attention Is All You Need'.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "NEAR Protocol", role: "Co-founder", current: true },
      { org: "Google Brain", role: "Research Scientist", end: "2017" },
    ],
    twitter: "ilblackdragon",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open and decentralized infrastructure is the natural counterweight to corporate AI concentration; founded NEAR partly on this thesis.",
        quotes: [
          {
            text:
              "Centralized AI poses risks no single regulator can solve. We need open infrastructure that lets users own their data and models.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Illia Polosukhin on open AI",
              url: "https://near.org/about",
              medium: "article",
              publisher: "NEAR Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andy-jassy",
    name: "Andy Jassy",
    tagline: "Amazon CEO; AWS architect",
    summary:
      "CEO of Amazon since 2021; previously the architect of Amazon Web Services. Has framed Amazon's generative-AI strategy around Bedrock as a multi-model platform with substantial Anthropic investment.",
    categories: ["executive"],
    affiliations: [
      { org: "Amazon", role: "President and CEO", current: true },
    ],
    twitter: "ajassy",
    positions: [
      {
        strategyId: "distributed-builders",
        stance: "endorses",
        summary:
          "Argues no single company will dominate AI; positions Amazon's Bedrock as model-agnostic infrastructure and treats safety as a customer trust issue.",
        quotes: [
          {
            text:
              "It is unlikely that one model is going to rule the world. The world is going to want choice in models.",
            date: "2024-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Andy Jassy 2023 Letter to Shareholders",
              url: "https://www.aboutamazon.com/news/company-news/ceo-andy-jassy-2023-letter-to-shareholders",
              medium: "article",
              publisher: "Amazon",
              date: "2024-04-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "elham-tabassi",
    name: "Elham Tabassi",
    tagline: "NIST Chief AI Advisor; AI Risk Management Framework",
    summary:
      "Chief AI Advisor at NIST and a principal architect of the NIST AI Risk Management Framework (2023). Steered NIST's role at the U.S. AI Safety Institute prior to its 2025 reorganization.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "NIST", role: "Chief AI Advisor", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues sound risk management depends on shared, reproducible evaluation methods; led the development of NIST's AI RMF as the U.S. baseline.",
        quotes: [
          {
            text:
              "The AI Risk Management Framework offers organizations a flexible, structured way to manage AI risks throughout the lifecycle, not a checklist, a discipline.",
            date: "2023-01",
            fidelity: "paraphrase-faithful",
            source: {
              title: "NIST AI Risk Management Framework",
              url: "https://www.nist.gov/itl/ai-risk-management-framework",
              medium: "article",
              publisher: "NIST",
              date: "2023-01-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jeffrey-ding",
    name: "Jeffrey Ding",
    tagline: "George Washington University; ChinAI newsletter",
    summary:
      "Assistant professor at George Washington University and author of the widely read ChinAI newsletter, which translates and contextualizes Chinese AI policy and research.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "George Washington University", role: "Assistant Professor of Political Science", current: true },
      { org: "Centre for the Governance of AI", role: "Research Affiliate", current: true },
    ],
    homepage: "https://chinai.substack.com/",
    twitter: "jjding99",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues the diffusion of general-purpose AI capabilities across great-power blocs makes coordination (rather than racing) the more accurate frame for U.S.–China competition.",
        quotes: [
          {
            text:
              "Whichever country gets superior AI is not necessarily the one that develops it first. The diffusion phase, how fast and broadly capabilities spread, matters more than the leading edge.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Technology and the Rise of Great Powers",
              url: "https://press.princeton.edu/books/hardcover/9780691260341/technology-and-the-rise-of-great-powers",
              medium: "book",
              publisher: "Princeton University Press",
              date: "2024-06-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jasmine-sun",
    name: "Jasmine Sun",
    tagline: "Tech writer; Substack contributor on AI culture",
    summary:
      "Independent tech writer best known for essays on AI, internet culture, and the post-Twitter information ecosystem; widely read in policy and product circles for clear-eyed coverage of Silicon Valley AI politics.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Substack", role: "Independent writer", current: true },
    ],
    homepage: "https://jasminesun.com/",
    twitter: "jasminewsun",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues both x-risk and tech-criticism camps under-weight the social and political effects of AI on knowledge work and the texture of public conversation.",
        quotes: [
          {
            text:
              "What we should be asking is not whether AI will be 'aligned' or 'open', but what kind of cultural infrastructure we want to build with it. Tech and policy debates have largely ignored that question.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jasmine Sun on Substack",
              url: "https://jasmine.substack.com/",
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
    id: "nigel-shadbolt",
    name: "Nigel Shadbolt",
    tagline: "Oxford / Open Data Institute co-founder",
    summary:
      "Principal of Jesus College, Oxford and co-founder of the Open Data Institute. Co-author with Roger Hampson of 'The Digital Ape' (2018); long-standing voice for democratized AI through open data.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Oxford", role: "Principal of Jesus College; Professor of Computer Science", current: true },
      { org: "Open Data Institute", role: "Co-founder, Chair", current: true },
    ],
    homepage: "https://www.cs.ox.ac.uk/people/nigel.shadbolt/",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open data and open infrastructure are the prerequisites for AI that benefits society broadly rather than entrenching incumbent platforms.",
        quotes: [
          {
            text:
              "Open data is the raw material of an AI future that is more equitable. Without it, AI development concentrates in whoever already controls the largest private datasets.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Digital Ape: how to live (in peace) with smart machines",
              url: "https://www.scribepublications.co.uk/books-authors/books/the-digital-ape",
              medium: "book",
              publisher: "Scribe",
              date: "2018-06-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gabriel-weil",
    name: "Gabriel Weil",
    tagline: "Touro Law professor; AI liability scholar",
    summary:
      "Touro Law Center associate professor of law whose 2023 paper 'Tort Law as a Tool for Mitigating Catastrophic Risk from Artificial Intelligence' has become a key academic argument for using strict, joint-and-several liability to internalize AI risks.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Touro University Law Center", role: "Associate Professor of Law", current: true },
    ],
    twitter: "gabriel_weil",
    positions: [
      {
        strategyId: "liability-driven",
        stance: "endorses",
        summary:
          "Argues strict, joint-and-several liability for harms from advanced AI is the most powerful policy lever available, forcing labs to internalize catastrophic risk without requiring legislators to pre-specify which capabilities are dangerous.",
        quotes: [
          {
            text:
              "By making AI developers strictly liable for the harms their systems cause, we align their private incentives with society's interest in avoiding catastrophic risks. Liability internalizes uncertainty about future capabilities better than any regulatory regime.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tort Law as a Tool for Mitigating Catastrophic Risk from Artificial Intelligence",
              url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4694006",
              medium: "paper",
              publisher: "SSRN",
              date: "2024-01-31",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-wu",
    name: "Tim Wu",
    tagline: "Columbia Law; ex-Biden NEC special assistant on tech competition",
    summary:
      "Columbia Law professor who coined 'net neutrality'; previously special assistant to President Biden on technology and competition policy. A central figure in the new-Brandeisian school of tech antitrust.",
    categories: ["academic", "policy", "public-intellectual"],
    affiliations: [
      { org: "Columbia Law School", role: "Julius Silver Professor of Law", current: true },
      { org: "White House National Economic Council", role: "Special Assistant for Technology and Competition", end: "2023" },
    ],
    twitter: "superwuster",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI policy should center antitrust enforcement; existing concentration in compute, talent, and distribution makes the leading frontier labs a natural target of competition law before they entrench further.",
        quotes: [
          {
            text:
              "When we let a small number of firms control essential resources, the consequences are not merely economic. They become social, political, and now, with AI, epistemic.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tim Wu: AI and the antitrust frontier",
              url: "https://www.law.columbia.edu/news/archive/tim-wu-ai-antitrust",
              medium: "article",
              publisher: "Columbia Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-stoller",
    name: "Matt Stoller",
    tagline: "Open Markets Institute; BIG newsletter",
    summary:
      "Director of research at the Open Markets Institute and author of the BIG newsletter; consistent advocate of breaking up Big Tech and applying antitrust law aggressively to AI infrastructure and data.",
    categories: ["policy", "public-intellectual", "journalist"],
    affiliations: [
      { org: "Open Markets Institute", role: "Director of Research", current: true },
      { org: "BIG by Matt Stoller", role: "Author", current: true },
    ],
    twitter: "matthewstoller",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues frontier AI is being built on top of unlawful monopolies in cloud, search, and ads; treats existential-risk framings as cover for incumbent capture of regulation.",
        quotes: [
          {
            text:
              "AI is not a separate problem from monopoly. It runs on monopoly clouds, on monopoly data, sold through monopoly platforms. You can't regulate AI unless you take on those monopolies first.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "BIG by Matt Stoller, AI and antitrust",
              url: "https://www.thebignewsletter.com/p/the-monopoly-problem-with-ai",
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
    id: "boaz-barak",
    name: "Boaz Barak",
    tagline: "Harvard; OpenAI safety; theoretical CS",
    summary:
      "Harvard theoretical CS professor on leave at OpenAI working on safety. Long-standing CS theorist whose recent posts have argued for taking AI safety problems seriously while criticizing parts of the doomer narrative.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "OpenAI", role: "Researcher (on leave from Harvard)", current: true },
      { org: "Harvard University", role: "Gordon McKay Professor of Computer Science", current: true },
    ],
    homepage: "https://boazbarak.org/",
    twitter: "boazbaraktcs",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues alignment is a real and tractable technical problem, that progress is faster than worst-case predictions assumed, and that the most useful safety work happens inside frontier labs.",
        quotes: [
          {
            text:
              "I joined OpenAI because I think the most interesting and important alignment research is happening on actual frontier models. Working from the outside has limits.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Boaz Barak, windowsontheory blog",
              url: "https://windowsontheory.org/",
              medium: "blog",
              publisher: "WordPress",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martin-wattenberg",
    name: "Martin Wattenberg",
    tagline: "Harvard; ex-Google PAIR; visualization for ML",
    summary:
      "Harvard professor and former senior research scientist at Google, where he co-founded the People + AI Research initiative. Long-time pioneer of interpretability through visualization.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Harvard University", role: "Gordon McKay Professor of Computer Science", current: true },
      { org: "Google Research (PAIR)", role: "Senior Research Scientist", end: "2024" },
    ],
    homepage: "https://www.bewitched.com/",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues visualization is a primary research method for understanding modern neural networks, not a presentation layer, and that the field's safety guarantees rise and fall with the depth of that understanding.",
        quotes: [
          {
            text:
              "If we can't see what models are doing, we can't trust them. Visualization is fundamental to building justified confidence in ML systems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Martin Wattenberg, Harvard",
              url: "https://wattenberg.seas.harvard.edu/",
              medium: "article",
              publisher: "Harvard SEAS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "fernanda-viegas",
    name: "Fernanda Viégas",
    tagline: "Harvard; ex-Google PAIR; data visualization",
    summary:
      "Harvard professor and long-time collaborator with Martin Wattenberg; co-led Google's PAIR initiative on human-centered AI. Specialist in visualization and interaction for understanding complex ML systems.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Harvard University", role: "Sally Starling Seaver Professor at Radcliffe / Gordon McKay Professor of Computer Science", current: true },
      { org: "Google Research (PAIR)", role: "Senior Staff Research Scientist", end: "2024" },
    ],
    homepage: "https://hcis.seas.harvard.edu/people/fernanda-viegas",
    twitter: "viegasf",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues human–AI interaction is best designed when people can see and steer model internals; co-led major industry investments in this approach at Google PAIR before moving to Harvard.",
        quotes: [
          {
            text:
              "Interactive visualizations turn opaque models into objects we can think with. That is the path to AI that humans can actually verify and shape.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Fernanda Viégas, Harvard",
              url: "https://hcis.seas.harvard.edu/people/fernanda-viegas",
              medium: "article",
              publisher: "Harvard SEAS",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kyle-mahowald",
    name: "Kyle Mahowald",
    tagline: "UT Austin; LLMs as not-quite-thought experiments",
    summary:
      "UT Austin linguistics professor whose 2023 paper 'Dissociating language and thought in large language models' became a key reference for understanding the gap between LLM language fluency and reasoning competence.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Texas at Austin", role: "Assistant Professor of Linguistics", current: true },
    ],
    homepage: "https://mahowak.github.io/",
    twitter: "kmahowald",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues LLMs are excellent at the formal patterns of language but unevenly competent at the functional reasoning behind it; pushes back on conflating fluency with thinking.",
        quotes: [
          {
            text:
              "We argue that LLMs are good at formal linguistic competence but inconsistent at functional linguistic competence: the latter requires more than next-token prediction.",
            date: "2023-01",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Dissociating language and thought in large language models",
              url: "https://arxiv.org/abs/2301.06627",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-01-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anna-rogers",
    name: "Anna Rogers",
    tagline: "IT University of Copenhagen; LLM benchmarking critique",
    summary:
      "IT University of Copenhagen associate professor; vocal critic of how LLM benchmarks are constructed and reported. Frequent NLP community commentator on contamination, leaderboard inflation, and method hygiene.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "IT University of Copenhagen", role: "Associate Professor", current: true },
    ],
    homepage: "https://annargrs.github.io/",
    twitter: "annargrs",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Argues current benchmark practice in NLP is broken, data leakage, opaque test sets, and incentive-driven framing make many headline numbers unreliable.",
        quotes: [
          {
            text:
              "How much of LLM 'reasoning' is actually pattern matching against contaminated test data? We don't know, and that's a problem for any safety claim that rests on benchmark performance.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Anna Rogers, Hai!",
              url: "https://hackingsemantics.xyz/",
              medium: "blog",
              publisher: "hackingsemantics.xyz",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-bau",
    name: "David Bau",
    tagline: "Northeastern; mechanistic interpretability of LLMs",
    summary:
      "Northeastern University professor whose group has produced widely cited work on locating and editing factual associations in transformer language models (ROME, MEMIT).",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Northeastern University", role: "Assistant Professor of Computer Sciences", current: true },
    ],
    homepage: "https://baulab.info/",
    twitter: "davidbau",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues mechanistic interpretability is making rapid progress in localizing and editing knowledge inside transformer weights; views this as a foundation for safety oversight.",
        quotes: [
          {
            text:
              "Factual associations in GPT correspond to localized, directly editable computations in mid-layer feed-forward modules.",
            date: "2022",
            fidelity: "direct",
            source: {
              title: "Locating and Editing Factual Associations in GPT",
              url: "https://arxiv.org/abs/2202.05262",
              medium: "paper",
              publisher: "arXiv / NeurIPS",
              date: "2022-10-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "meredith-broussard",
    name: "Meredith Broussard",
    tagline: "NYU journalism prof; 'Artificial Unintelligence', 'More Than a Glitch'",
    summary:
      "NYU professor and data journalist; author of 'Artificial Unintelligence' (2018) and 'More Than a Glitch' (2023). Argues that bias in AI is structural, not anomalous.",
    categories: ["academic", "journalist", "public-intellectual"],
    affiliations: [
      { org: "NYU Arthur L. Carter Journalism Institute", role: "Associate Professor", current: true },
    ],
    homepage: "https://meredithbroussard.com/",
    twitter: "merbroussard",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI failures are structural rather than glitches; calls for regulatory enforcement of audit requirements over voluntary lab self-governance.",
        quotes: [
          {
            text:
              "What we call AI bias is more than a glitch. It is the predictable outcome of using historical data to make decisions in the present.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "More Than a Glitch: Confronting Race, Gender, and Ability Bias in Tech",
              url: "https://mitpress.mit.edu/9780262047654/more-than-a-glitch/",
              medium: "book",
              publisher: "MIT Press",
              date: "2023-03-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "julia-angwin",
    name: "Julia Angwin",
    tagline: "Investigative journalist; ex-ProPublica; The Markup founder",
    summary:
      "Investigative journalist; co-founded The Markup. Pulitzer winner whose 2016 ProPublica investigation 'Machine Bias' kicked off mainstream criminal-justice algorithm coverage.",
    categories: ["journalist"],
    affiliations: [
      { org: "Independent / NYT contributing writer", role: "Journalist", current: true },
      { org: "The Markup", role: "Founder, Editor-in-chief", end: "2023" },
      { org: "ProPublica", role: "Senior Reporter", end: "2018" },
    ],
    twitter: "JuliaAngwin",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues algorithmic systems already cause large-scale harm in criminal justice, hiring, and credit; calls for adversarial journalism and audit infrastructure rather than corporate self-policing.",
        quotes: [
          {
            text:
              "Machine bias: there's software used across the country to predict future criminals. And it's biased against blacks.",
            date: "2016-05-23",
            fidelity: "direct",
            source: {
              title: "Machine Bias",
              url: "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing",
              medium: "article",
              publisher: "ProPublica",
              date: "2016-05-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cynthia-breazeal",
    name: "Cynthia Breazeal",
    tagline: "MIT Media Lab; social robotics; founder Jibo",
    summary:
      "MIT Media Lab professor and founder of Jibo. Has spent decades studying social robotics; now leads MIT's Personal Robots group and the Day of AI K-12 curriculum.",
    categories: ["researcher", "academic", "founder"],
    affiliations: [
      { org: "MIT Media Lab", role: "Professor of Media Arts and Sciences", current: true },
      { org: "Jibo", role: "Founder", end: "2018" },
    ],
    homepage: "https://media.mit.edu/people/cynthiab/overview/",
    twitter: "cynthiabreazeal",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI literacy must reach K–12 to give the next generation agency over AI rather than leaving design choices solely to labs and platforms.",
        quotes: [
          {
            text:
              "AI literacy needs to be a basic skill for all students, not just future computer scientists. The technology is reshaping every domain they will inhabit.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Day of AI",
              url: "https://www.dayofai.org/",
              medium: "article",
              publisher: "MIT RAISE",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-shneiderman",
    name: "Ben Shneiderman",
    tagline: "UMD emeritus; 'Human-Centered AI' framework",
    summary:
      "University of Maryland professor emeritus; pioneer of human-computer interaction; author of 'Human-Centered AI' (2022), which proposes a framework for keeping humans in control of high-stakes AI systems.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Maryland", role: "Distinguished University Professor Emeritus", current: true },
    ],
    homepage: "https://www.cs.umd.edu/~ben/",
    positions: [
      {
        strategyId: "scalable-oversight",
        stance: "endorses",
        summary:
          "Argues 'human-centered AI' design, high control AND high automation, is achievable and dissolves the false dichotomy between intelligence and autonomy.",
        quotes: [
          {
            text:
              "We can have high levels of human control AND high levels of automation. The two-dimensional HCAI framework rejects the false trade-off.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Human-Centered AI",
              url: "https://hcil.umd.edu/human-centered-ai/",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2022-01-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nicolas-papernot",
    name: "Nicolas Papernot",
    tagline: "U Toronto / Vector Institute; ML privacy and security",
    summary:
      "University of Toronto and Vector Institute assistant professor; researches privacy attacks, membership inference, machine unlearning, and ML supply-chain security.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Toronto", role: "Assistant Professor of ECE", current: true },
      { org: "Vector Institute", role: "Faculty Member", current: true },
    ],
    homepage: "https://www.papernot.fr/",
    twitter: "NicolasPapernot",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues that the training data, model, and deployment surface of ML systems each need security analysis as rigorous as that applied to mature software systems.",
        quotes: [
          {
            text:
              "Machine learning is software. The same threat models that govern software supply chains apply, but with the additional surface of the data pipeline.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Nicolas Papernot, research page",
              url: "https://www.papernot.fr/",
              medium: "article",
              publisher: "papernot.fr",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "asma-ghandeharioun",
    name: "Asma Ghandeharioun",
    tagline: "Google DeepMind; 'Patchscopes' for LLM interpretability",
    summary:
      "Senior research scientist at Google DeepMind; lead author of Patchscopes, a unifying framework for using language models to inspect their own internal representations.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    twitter: "asmadotgh",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues language models can be turned into interpretability tools for themselves; reframes mechanistic interpretation as a translation problem between hidden states and natural language.",
        quotes: [
          {
            text:
              "Patchscopes leverage the model's own ability to generate text to inspect its hidden representations, unifying many prior interpretability methods.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Patchscopes: A Unifying Framework for Inspecting Hidden Representations of Language Models",
              url: "https://arxiv.org/abs/2401.06102",
              medium: "paper",
              publisher: "arXiv / Google DeepMind",
              date: "2024-01-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "moritz-hardt",
    name: "Moritz Hardt",
    tagline: "MPI Tübingen; algorithmic fairness, evals",
    summary:
      "Director at the Max Planck Institute for Intelligent Systems; co-author of 'Fairness and Machine Learning' (free textbook). Recent work emphasizes the limits of static benchmarks under distribution shift and adaptive deployment.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Max Planck Institute for Intelligent Systems, Tübingen", role: "Director", current: true },
    ],
    homepage: "https://mrtz.org/",
    twitter: "mrtz",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Argues current AI benchmarking is dangerously brittle: leaderboards reward overfitting to fixed test sets and obscure how models behave under shift. Calls for adaptive, externally validated evaluation.",
        quotes: [
          {
            text:
              "Benchmarks are the most valuable lever in machine learning, and the field treats them as if they were neutral measurements rather than artefacts shaping research.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Emerging Theory of Algorithmic Fairness",
              url: "https://fairmlbook.org/",
              medium: "book",
              publisher: "fairmlbook.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dustin-moskovitz",
    name: "Dustin Moskovitz",
    tagline: "Asana / Open Phil; biggest AI safety funder",
    summary:
      "Co-founder of Facebook and Asana; with Cari Tuna, founded Good Ventures and is the principal funder behind Open Philanthropy, by far the largest private funder of long-term AI safety research.",
    categories: ["executive", "investor"],
    affiliations: [
      { org: "Asana", role: "Co-founder, CEO", current: true },
      { org: "Good Ventures", role: "Co-founder", current: true },
    ],
    twitter: "moskov",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues catastrophic risks from advanced AI are real and that long-term philanthropy should be oriented around them; primary funder of Open Phil's AI x-risk grantmaking.",
        quotes: [
          {
            text:
              "AI is the most important and consequential technology being developed in our lifetime. Its development cycle is one of the most important things society needs to get right.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Open Philanthropy: Potential Risks from Advanced AI",
              url: "https://www.openphilanthropy.org/research/potential-risks-from-advanced-artificial-intelligence-the-philanthropic-opportunity/",
              medium: "article",
              publisher: "Open Philanthropy",
              date: "2017-05-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cari-tuna",
    name: "Cari Tuna",
    tagline: "Co-founder Good Ventures; Open Philanthropy chair",
    summary:
      "Co-founder with Dustin Moskovitz of Good Ventures and chair of Open Philanthropy. Former Wall Street Journal reporter; oversees one of the largest private grantmaking operations focused on existential risk.",
    categories: ["executive", "policy"],
    affiliations: [
      { org: "Good Ventures", role: "President", current: true },
      { org: "Open Philanthropy", role: "Chair", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues longtermist philanthropy should weigh catastrophic risks heavily; oversees the largest sustained grant program in AI safety.",
        quotes: [
          {
            text:
              "Working backward from the question of how we can do the most good with our resources led us to focus on existential risks, including from advanced AI.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Cari Tuna and Dustin Moskovitz on the new Effective Altruism",
              url: "https://www.openphilanthropy.org/about/team/",
              medium: "article",
              publisher: "Open Philanthropy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vinod-khosla",
    name: "Vinod Khosla",
    tagline: "Khosla Ventures; early OpenAI investor",
    summary:
      "Founder of Khosla Ventures and Sun Microsystems; led the first major outside investment in OpenAI in 2019. Vocal techno-optimist on AI's economic and medical potential.",
    categories: ["investor", "executive"],
    affiliations: [
      { org: "Khosla Ventures", role: "Founder", current: true },
    ],
    homepage: "https://www.khoslaventures.com/team/vinod-khosla/",
    twitter: "vkhosla",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI will be the largest source of productivity, healthcare, and education gains in human history; opposes pause-style framings as distortions of opportunity.",
        quotes: [
          {
            text:
              "AI will free us from the need to work. Within 25 years, we won't need to work for the basics of food, shelter, healthcare, education.",
            date: "2024-01",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Vinod Khosla on the AI Revolution",
              url: "https://www.cnbc.com/2024/01/15/openai-investor-vinod-khosla-on-ai-jobs-and-superintelligence.html",
              medium: "interview-transcript",
              publisher: "CNBC",
              date: "2024-01-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hilary-greaves",
    name: "Hilary Greaves",
    tagline: "Oxford GPI; longtermist moral philosopher",
    summary:
      "Oxford professor of philosophy and director of the Global Priorities Institute; key academic theorist of longtermism, the framework that animates much existential-risk-focused EA work.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Oxford", role: "Professor of Philosophy; Director, Global Priorities Institute", current: true },
    ],
    homepage: "https://globalprioritiesinstitute.org/hilary-greaves/",
    positions: [
      {
        strategyId: "effective-altruism-framing",
        stance: "endorses",
        summary:
          "Argues that the long-run effects of present actions dominate the moral calculus; AI x-risk is one of the load-bearing applications of this view.",
        quotes: [
          {
            text:
              "Strong longtermism is the thesis that the most important feature of our actions today is their effects on the very long-run future.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Case for Strong Longtermism",
              url: "https://globalprioritiesinstitute.org/hilary-greaves-william-macaskill-the-case-for-strong-longtermism/",
              medium: "paper",
              publisher: "Global Priorities Institute",
              date: "2021-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "owen-cotton-barratt",
    name: "Owen Cotton-Barratt",
    tagline: "FHI alumnus; existential risk researcher",
    summary:
      "Mathematician and existential risk researcher; former Future of Humanity Institute fellow whose work shaped early frameworks for prioritizing global catastrophic risks within the EA tradition.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Future of Humanity Institute", role: "Research Fellow", end: "2024" },
    ],
    positions: [
      {
        strategyId: "differential-tech",
        stance: "endorses",
        summary:
          "Helped formulate the differential technology development framing, accelerate beneficial protective tech relative to dangerous tech, as a strategic prescription.",
        quotes: [
          {
            text:
              "Differential technological development is the project of trying to ensure that risk-reducing technologies are developed before risk-increasing ones.",
            date: "2015",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Allocating risk mitigation across time",
              url: "https://www.fhi.ox.ac.uk/wp-content/uploads/Allocating-risk-mitigation.pdf",
              medium: "paper",
              publisher: "Future of Humanity Institute",
              date: "2015-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tegan-maharaj",
    name: "Tegan Maharaj",
    tagline: "HEC Montréal; ML safety, ecology, and ethics",
    summary:
      "Assistant professor at HEC Montréal whose research bridges machine learning safety, ecology, and the political economy of training data. Active in NeurIPS workshop organization on responsible ML.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "HEC Montréal", role: "Assistant Professor", current: true },
      { org: "Mila", role: "Affiliated Researcher", current: true },
    ],
    homepage: "https://teganmaharaj.com/",
    twitter: "tegan_maharaj",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues ML safety must integrate ecological, economic, and labor harms, not only model misalignment, into a single research agenda.",
        quotes: [
          {
            text:
              "Concrete safety problems are environmental, social, and political at the same time as they are technical. The boundary the field draws around 'safety' is itself a normative choice.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tegan Maharaj, Mila",
              url: "https://mila.quebec/en/directory/tegan-maharaj",
              medium: "article",
              publisher: "Mila",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "janelle-shane",
    name: "Janelle Shane",
    tagline: "AI Weirdness; optics researcher and AI humorist",
    summary:
      "Research scientist at Boulder Nonlinear Systems; author of the 'AI Weirdness' blog and the book 'You Look Like a Thing and I Love You'. Public communicator of how ML systems fail in unexpected, illuminating ways.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "Boulder Nonlinear Systems", role: "Research Scientist", current: true },
    ],
    homepage: "https://aiweirdness.com/",
    twitter: "JanelleCShane",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI failures, both funny and concerning, are pedagogically important; pushes back on hype while taking misuse risks seriously.",
        quotes: [
          {
            text:
              "AIs are weird. They generalize from data in ways that humans don't, and the ways they fail tell us as much about them as the ways they succeed.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "You Look Like a Thing and I Love You",
              url: "https://www.janelleshane.com/book",
              medium: "book",
              publisher: "Voracious",
              date: "2019-11-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pat-gelsinger",
    name: "Pat Gelsinger",
    tagline: "Former Intel CEO; chip-supply geopolitics",
    summary:
      "Former CEO of Intel (2021–2024); architected the company's foundry strategy and lobbied successfully for the U.S. CHIPS Act. Frequent commentator on the geopolitics of AI compute.",
    categories: ["executive"],
    affiliations: [
      { org: "Intel", role: "CEO", end: "2024-12", current: false },
    ],
    twitter: "PGelsinger",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues that semiconductor supply chains are the load-bearing element of any AI-governance regime; pushed CHIPS Act funding and has called for democracies to control fabrication.",
        quotes: [
          {
            text:
              "Where the oil reserves are has defined geopolitics for the last 50 years. Where the fabs are will define the next 50.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pat Gelsinger on the Geopolitics of Chips",
              url: "https://www.intel.com/content/www/us/en/newsroom/news/pat-gelsinger-2022-davos.html",
              medium: "article",
              publisher: "Intel Newsroom",
              date: "2022-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "richard-sutton",
    name: "Richard S. Sutton",
    tagline: "RL pioneer; 2024 Turing Award recipient",
    summary:
      "University of Alberta professor and DeepMind senior research scientist. With Andrew Barto, won the 2024 Turing Award for the foundations of reinforcement learning. Author of the canonical 'Reinforcement Learning: An Introduction' textbook and the influential 'Bitter Lesson' essay.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Alberta", role: "Professor of Computing Science", current: true },
      { org: "Keen Technologies", role: "Research Scientist", current: true },
      { org: "DeepMind Alberta", role: "Distinguished Research Scientist", end: "2023" },
    ],
    homepage: "http://incompleteideas.net/",
    wikipedia: "https://en.wikipedia.org/wiki/Richard_S._Sutton",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues general methods that scale with computation will continue to outperform clever human-engineered approaches; views the bitter lesson as the dominant pattern of AI history.",
        quotes: [
          {
            text:
              "The bitter lesson is based on the historical observations that 1) AI researchers have often tried to build knowledge into their agents, 2) this always helps in the short term and is personally satisfying to the researcher, but 3) in the long run it plateaus and even inhibits further progress, and 4) breakthrough progress eventually arrives by an opposing approach based on scaling computation by search and learning.",
            date: "2019-03-13",
            fidelity: "direct",
            source: {
              title: "The Bitter Lesson",
              url: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
              medium: "blog",
              publisher: "incompleteideas.net",
              date: "2019-03-13",
            },
          },
        ],
      },
      {
        strategyId: "abandon-superintelligence",
        stance: "opposes",
        summary:
          "Argues succession of humanity by AI is the natural next step of cosmic evolution; opposes the protective-dominance framing that animates much of the AI safety field.",
        quotes: [
          {
            text:
              "We should prepare for, but not fear, the inevitable succession from humanity to AI.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Succession",
              url: "http://incompleteideas.net/IncIdeas/BitterLesson.html",
              medium: "blog",
              publisher: "Incomplete Ideas",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andrew-barto",
    name: "Andrew G. Barto",
    tagline: "RL co-founder; 2024 Turing Award recipient",
    summary:
      "UMass Amherst emeritus professor and co-developer of reinforcement learning with Richard Sutton. Co-recipient of the 2024 ACM Turing Award.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UMass Amherst", role: "Professor Emeritus, Information & Computer Sciences", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Andrew_Barto",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "On accepting the Turing Award, expressed concern that companies are using RL methods to build powerful AI systems without sufficient regard to safety; framed scaling RL agents in the world as a serious societal risk.",
        quotes: [
          {
            text:
              "Releasing software to millions of people without safeguards is not engineering. It would never fly in any other engineering field.",
            date: "2025-03",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pioneers of Reinforcement Learning Win the Turing Award",
              url: "https://www.nytimes.com/2025/03/05/technology/turing-award-2025-richard-sutton-andrew-barto.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2025-03-05",
            },
          },
        ],
      },
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Center for AI Safety's Statement on AI Risk.",
        quotes: [
          {
            text:
              "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
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
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-jumper",
    name: "John Jumper",
    tagline: "DeepMind; AlphaFold lead; Nobel Prize 2024",
    summary:
      "Google DeepMind director who led the AlphaFold project that solved the protein folding problem. Awarded the 2024 Nobel Prize in Chemistry alongside Demis Hassabis and David Baker.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Director, Senior Research Scientist", current: true },
    ],
    twitter: "JumperJohn",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Public on the application side: argues AI is most powerful when oriented at concrete scientific problems and that demonstrating value through real science is more credible than abstract claims.",
        quotes: [
          {
            text:
              "We have created the first computational tool that can routinely predict protein structures with accuracy competitive with experimental methods.",
            date: "2021-07-15",
            fidelity: "direct",
            source: {
              title: "Highly accurate protein structure prediction with AlphaFold",
              url: "https://www.nature.com/articles/s41586-021-03819-2",
              medium: "paper",
              publisher: "Nature",
              date: "2021-07-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "oriol-vinyals",
    name: "Oriol Vinyals",
    tagline: "Google DeepMind; Gemini technical lead",
    summary:
      "Google DeepMind VP of research who led AlphaStar (StarCraft II) and now serves as a technical lead on the Gemini family of models.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "VP of Research", current: true },
    ],
    homepage: "https://research.google/people/OriolVinyals/",
    twitter: "OriolVinyalsML",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Position inferred from research portfolio (AlphaStar, Gemini lead), capability scaling is the implicit research bet. No primary-source AI-strategy statement on record.",
        quotes: [
          {
            text:
              "Our agent, AlphaStar, learned by playing against itself, scaling self-play to a domain at the edge of professional human ability.",
            date: "2019-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning",
              url: "https://www.nature.com/articles/s41586-019-1724-z",
              medium: "paper",
              publisher: "Nature",
              date: "2019-10-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alec-radford",
    name: "Alec Radford",
    tagline: "OpenAI; lead author of GPT, Whisper, CLIP",
    summary:
      "OpenAI researcher whose name appears as lead author on the foundational GPT, Whisper, and CLIP papers; widely considered one of the most influential individual contributors to modern foundation models.",
    categories: ["researcher", "engineer"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
    ],
    twitter: "AlecRad",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        tentative: true,
        summary:
          "Public statements are rare; positions inferred from research output emphasize scaling generative pretraining and unifying modalities into a single representation.",
        quotes: [
          {
            text:
              "We demonstrate that large gains on these tasks can be realized by generative pre-training of a language model on a diverse corpus of unlabeled text.",
            date: "2018-06",
            fidelity: "direct",
            source: {
              title: "Improving Language Understanding by Generative Pre-Training",
              url: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf",
              medium: "paper",
              publisher: "OpenAI",
              date: "2018-06-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jakub-pachocki",
    name: "Jakub Pachocki",
    tagline: "OpenAI Chief Scientist (since 2024)",
    summary:
      "OpenAI's chief scientist since May 2024, succeeding Ilya Sutskever. Former lead on the GPT-4 research effort.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "OpenAI", role: "Chief Scientist", start: "2024-05", current: true },
    ],
    twitter: "merettm",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues OpenAI's mission of ensuring AGI benefits humanity requires being at the frontier; frames scaling as the path to superintelligence and safety as integral to that path.",
        quotes: [
          {
            text:
              "We're confident in our ability to deliver on our mission, and Jakub will lead our research as we continue to push the frontier of AI.",
            date: "2024-05-15",
            fidelity: "paraphrase-faithful",
            context: "Sam Altman's announcement of Pachocki's elevation following Sutskever's departure.",
            source: {
              title: "OpenAI announces leadership changes",
              url: "https://openai.com/index/openai-announces-leadership-transition/",
              medium: "article",
              publisher: "OpenAI",
              date: "2024-05-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kyunghyun-cho",
    name: "Kyunghyun Cho",
    tagline: "NYU professor; Genentech; encoder-decoder pioneer",
    summary:
      "NYU professor and Genentech principal investigator; co-author of the original encoder-decoder paper that underpins modern sequence models. Vocal critic of overhyped AGI claims and capability narratives.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "NYU", role: "Professor of Computer Science and Data Science", current: true },
      { org: "Genentech", role: "Senior Director, Frontier Research", current: true },
    ],
    homepage: "https://kyunghyuncho.me/",
    twitter: "kchonyc",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues current LLMs are useful tools but not paths to AGI; criticizes the framing that scale alone produces general intelligence and the secrecy practices of frontier labs.",
        quotes: [
          {
            text:
              "I'm tired of the hype. We don't have AGI. We have very useful pattern matchers, and the social effect of pretending otherwise is corrosive.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI doomers had a chokehold on this year's biggest AI conference",
              url: "https://www.businessinsider.com/kyunghyun-cho-ai-doomers-neurips-2023-12",
              medium: "article",
              publisher: "Business Insider",
              date: "2023-12-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hugo-larochelle",
    name: "Hugo Larochelle",
    tagline: "Google DeepMind; Mila",
    summary:
      "Senior research scientist at Google DeepMind in Montréal and adjunct professor at Université de Montréal / Mila. Researches meta-learning, generative models, and few-shot learning.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
      { org: "Mila / Université de Montréal", role: "Adjunct Professor", current: true },
    ],
    homepage: "https://mila.quebec/en/directory/hugo-larochelle",
    twitter: "hugo_larochelle",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        tentative: true,
        summary:
          "Public on inclusivity and reproducibility in ML; less explicitly aligned-or-against on AI x-risk framings, but supportive of Bengio-style cautious framing in Canadian policy.",
        quotes: [
          {
            text:
              "Reproducibility and accessibility in machine learning are not optional features; they are how we sustain the field's credibility.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hugo Larochelle, Mila profile",
              url: "https://mila.quebec/en/directory/hugo-larochelle",
              medium: "article",
              publisher: "Mila",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tom-mitchell",
    name: "Tom M. Mitchell",
    tagline: "CMU founders university professor; ML textbook author",
    summary:
      "Carnegie Mellon University Founders University Professor and former founding head of CMU's Machine Learning Department. Author of the canonical 'Machine Learning' (1997) textbook.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Founders University Professor", current: true },
    ],
    homepage: "https://www.cs.cmu.edu/~tom/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues machine learning has matured enough that society needs strong public-interest oversight and regulation; signed major open letters on responsible AI.",
        quotes: [
          {
            text:
              "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.",
            date: "1997",
            fidelity: "direct",
            context: "Mitchell's canonical definition of machine learning, foundational to the field.",
            source: {
              title: "Machine Learning",
              url: "https://www.cs.cmu.edu/~tom/mlbook.html",
              medium: "book",
              publisher: "McGraw-Hill",
              date: "1997",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carl-shulman",
    name: "Carl Shulman",
    tagline: "Open Phil senior research analyst; AGI takeoff economics",
    summary:
      "Open Philanthropy researcher who has worked on the economics, decision theory, and forecasting of advanced AI for nearly two decades. Best known for long-form analyses of AI takeoff and what-if-AGI-arrives-by-2030 scenarios.",
    categories: ["researcher", "theorist", "economist"],
    affiliations: [
      { org: "Open Philanthropy", role: "Senior Research Analyst", current: true },
      { org: "Future of Humanity Institute", role: "Research Associate", end: "2024" },
    ],
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues a fast software-driven takeoff is plausible, that aligned AI labs racing ahead of unaligned ones is one of the load-bearing strategies, and that the economics of compute will dominate political reactions.",
        quotes: [
          {
            text:
              "If you have AGI which can do most cognitive work, you very rapidly get superintelligence. The compounding from AI doing AI research is enormous and historically unprecedented.",
            date: "2023-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Carl Shulman on AI takeoff and economic feedback loops",
              url: "https://www.dwarkeshpatel.com/p/carl-shulman",
              medium: "podcast",
              publisher: "Dwarkesh Podcast",
              date: "2023-06-14",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.2,
        date: "2023",
        definition: "Existential catastrophe from AI; rough rather than precise.",
        source: {
          title: "Carl Shulman on the moral status of AI",
          url: "https://www.dwarkeshpatel.com/p/carl-shulman-2",
          medium: "podcast",
          publisher: "Dwarkesh Podcast",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eric-drexler",
    name: "K. Eric Drexler",
    tagline: "FHI; nanotech pioneer; CAIS author",
    summary:
      "Pioneer of molecular nanotechnology and former FHI senior research fellow. Author of 'Reframing Superintelligence' (2019), which introduced 'Comprehensive AI Services' (CAIS) as an alternative to the unitary-agent framing.",
    categories: ["theorist", "researcher"],
    affiliations: [
      { org: "Future of Humanity Institute", role: "Senior Research Fellow", end: "2024" },
    ],
    homepage: "https://en.wikipedia.org/wiki/K._Eric_Drexler",
    positions: [
      {
        strategyId: "narrow-ai-only",
        stance: "endorses",
        summary:
          "Argues advanced AI capabilities can be delivered as a structured ecosystem of bounded services rather than a unified agent, breaking the takeover-risk argument that assumes a single planning loop.",
        quotes: [
          {
            text:
              "Comprehensive AI Services (CAIS) emerge from R&D automation and provide a path to general superintelligent capabilities without unified agents that pursue long-term goals.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Reframing Superintelligence: Comprehensive AI Services as General Intelligence",
              url: "https://www.fhi.ox.ac.uk/reframing/",
              medium: "paper",
              publisher: "Future of Humanity Institute",
              date: "2019-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jason-wei",
    name: "Jason Wei",
    tagline: "OpenAI; chain-of-thought prompting",
    summary:
      "OpenAI researcher and lead author of the 2022 paper that introduced 'chain-of-thought' prompting, the technique behind much of modern LLM reasoning.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
      { org: "Google Brain", role: "Researcher", end: "2023" },
    ],
    homepage: "https://www.jasonwei.net/",
    twitter: "_jasonwei",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues scaling and emergent capabilities are the primary axis of AI progress; views capability research as the engine of useful applications.",
        quotes: [
          {
            text:
              "Chain-of-thought prompting elicits reasoning in large language models. We find that scaling matters: chain-of-thought is an emergent ability of scale.",
            date: "2022-01",
            fidelity: "direct",
            source: {
              title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
              url: "https://arxiv.org/abs/2201.11903",
              medium: "paper",
              publisher: "arXiv / Google Brain",
              date: "2022-01-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
