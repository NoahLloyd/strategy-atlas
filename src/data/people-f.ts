import type { Person } from "@/lib/people-types";

// Batch F: safety researchers, philosophy of mind, international, more.

export const people: Person[] = [
  {
    id: "wei-dai",
    name: "Wei Dai",
    tagline: "Cypherpunk; influential AI safety thinker",
    summary:
      "Invented b-money (the conceptual predecessor of Bitcoin) and has since been a central informal figure in AI safety discussions. Writes extensively on LessWrong about decision theory and AI risk.",
    categories: ["theorist", "engineer"],
    affiliations: [
      { org: "Independent", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues philosophical progress is a bottleneck for alignment, and that current approaches under-invest in decision theory.",
        quotes: [
          {
            text:
              "Alignment requires philosophical progress we do not yet have.",
            date: "2021",
            fidelity: "paraphrase-loose",
            source: {
              title: "Wei Dai, LessWrong",
              url: "https://www.lesswrong.com/users/wei_dai",
              medium: "blog",
              publisher: "LessWrong",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "vincent-conitzer",
    name: "Vincent Conitzer",
    tagline: "CMU professor; cooperative AI researcher",
    summary:
      "Game theorist and computer scientist who has argued that multi-agent cooperation and mechanism-design approaches should be central to AI safety. Runs the Foundations of Cooperative AI Lab at CMU.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Professor of Computer Science", current: true },
      { org: "Oxford University", role: "Professor of Computer Science and Philosophy", current: true },
    ],
    homepage: "https://www.cs.cmu.edu/~conitzer/",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Argues cooperation-capacity research is a distinct and underfunded AI safety agenda.",
        quotes: [
          {
            text:
              "Making AI cooperate, with us, and with itself, is an alignment problem of its own.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Foundations of Cooperative AI Lab",
              url: "https://www.cs.cmu.edu/~focal/",
              medium: "article",
              publisher: "CMU FOCAL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "allan-dafoe",
    name: "Allan Dafoe",
    tagline: "DeepMind Frontier Safety and Governance lead",
    summary:
      "Political scientist who directs Google DeepMind's Frontier Safety and Governance team. Author of foundational AI governance papers; frames AI governance as a strategic and political-economy problem.",
    categories: ["researcher", "policy", "academic"],
    affiliations: [
      { org: "Google DeepMind", role: "Director of Frontier Safety and Governance", current: true },
      { org: "Centre for the Governance of AI (GovAI)", role: "Co-founder", end: "2021", current: false },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance must reckon with strategic incentives: lab races, great-power competition, and institutional path dependence.",
        quotes: [
          {
            text:
              "AI governance needs to be treated as a political-economy problem, not only a technical compliance problem.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Governance: A Research Agenda",
              url: "https://www.fhi.ox.ac.uk/wp-content/uploads/GovAI-Agenda.pdf",
              medium: "paper",
              publisher: "Future of Humanity Institute",
              date: "2018",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jade-leung",
    name: "Jade Leung",
    tagline: "CTO of UK AI Safety Institute",
    summary:
      "Political scientist and policy operator who leads technical operations at the UK AI Safety Institute, the first national body dedicated to frontier AI evaluations.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "UK AI Safety Institute", role: "CTO", current: true },
      { org: "OpenAI", role: "Governance team", end: "2023", current: false },
    ],
    twitter: "jadeleung9",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Runs the first government-operated frontier model evaluation team; evaluations are the load-bearing governance instrument.",
        quotes: [
          {
            text:
              "Frontier evaluations must be mandatory, comparable, and independent of the labs being evaluated.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "UK AI Safety Institute",
              url: "https://www.aisi.gov.uk/",
              medium: "article",
              publisher: "UK AI Safety Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "beth-barnes",
    name: "Beth Barnes",
    tagline: "Founder of METR; dangerous capability evaluations",
    summary:
      "Formerly at ARC Evals; now runs METR, which designs and runs frontier model evaluations for dangerous capabilities. Central figure in the evals-driven governance ecosystem.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "METR (Model Evaluation & Threat Research)", role: "Founder and CEO", current: true },
    ],
    homepage: "https://metr.org/",
    twitter: "bethmaybarnes",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Designs autonomous-task evaluations that labs and governments rely on to gauge whether models cross dangerous thresholds.",
        quotes: [
          {
            text:
              "If we are going to trust safety commitments, we need evaluations that are independent, reproducible, and well-funded.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "METR, About",
              url: "https://metr.org/about",
              medium: "article",
              publisher: "METR",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "paul-g-allen",
    name: "Paul Allen",
    tagline: "Microsoft co-founder; founder of AI2 (posthumous)",
    summary:
      "Microsoft co-founder whose philanthropic legacy funds the Allen Institute for AI, one of the few large non-profit AI research labs. Argued for the 'Frontiers in AI' goal to advance common-good AI.",
    categories: ["founder", "investor"],
    affiliations: [
      { org: "Allen Institute for AI (AI2)", role: "Founder", end: "2018", current: false },
      { org: "Microsoft", role: "Co-founder", end: "2000", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Paul_Allen",
    positions: [
      {
        strategyId: "public-ai",
        stance: "endorses",
        summary:
          "Via AI2, funded open-science AI for common-good research; positioned as counterweight to proprietary labs.",
        quotes: [
          {
            text:
              "AI is too important to be pursued only in proprietary labs.",
            date: "2014",
            fidelity: "paraphrase-loose",
            source: {
              title: "Allen Institute for AI, Founding",
              url: "https://allenai.org/about",
              medium: "article",
              publisher: "AI2",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "oren-etzioni",
    name: "Oren Etzioni",
    tagline: "Founding CEO of AI2; UW professor",
    summary:
      "AI researcher who founded and ran the Allen Institute for AI for nearly a decade. Publicly skeptical of AGI-scale existential risk but supportive of pragmatic safety interventions.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Washington", role: "Professor Emeritus", current: true },
      { org: "Allen Institute for AI", role: "Founding CEO", end: "2022", current: false },
      { org: "TrueMedia.org", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Oren_Etzioni",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI extinction risk is overstated while endorsing near-term regulation and deepfake-detection tools.",
        quotes: [
          {
            text:
              "AI is a long way from being able to spontaneously form its own goals or acquire resources to pursue them.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Oren Etzioni on AI risk",
              url: "https://oren-etzioni.com/",
              medium: "blog",
              publisher: "oren-etzioni.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "melanie-mitchell",
    name: "Melanie Mitchell",
    tagline: "Santa Fe Institute professor; author of 'Artificial Intelligence: A Guide for Thinking Humans'",
    summary:
      "AI and complexity researcher who argues current systems lack the abstraction and embodied understanding required for true intelligence. Publicly skeptical of AGI-imminence claims.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Santa Fe Institute", role: "Professor", current: true },
    ],
    homepage: "https://melaniemitchell.me/",
    wikipedia: "https://en.wikipedia.org/wiki/Melanie_Mitchell",
    twitter: "MelMitchell1",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues intelligence requires abstraction, analogy, and embodied understanding that LLMs do not currently possess.",
        quotes: [
          {
            text:
              "The real intelligence we want our machines to have, flexible, abstract, analogical reasoning, is far beyond current systems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Debates on the Nature of Artificial General Intelligence",
              url: "https://www.science.org/doi/10.1126/science.ado7069",
              medium: "paper",
              publisher: "Science",
              date: "2024-03-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "erik-brynjolfsson",
    name: "Erik Brynjolfsson",
    tagline: "Stanford HAI; 'Turing Trap' essay",
    summary:
      "Economist who coined the 'Turing Trap', the idea that aiming AI at imitating humans, rather than augmenting them, leads to labour displacement without productivity gains. Signed the Statement on AI Risk.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Stanford University HAI", role: "Senior Fellow and Director of the Digital Economy Lab", current: true },
    ],
    homepage: "https://www.brynjolfsson.com/",
    twitter: "erikbryn",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary: "Signatory to the Statement on AI Risk.",
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
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames the 'Turing Trap' as the economically urgent risk, not extinction but labour displacement and inequality.",
        quotes: [
          {
            text:
              "We have fallen into the Turing Trap. Building AI to imitate humans concentrates power and displaces workers; building AI to augment humans does the opposite.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Turing Trap",
              url: "https://digitaleconomy.stanford.edu/news/the-turing-trap-the-promise-peril-of-human-like-artificial-intelligence/",
              medium: "article",
              publisher: "Daedalus",
              date: "2022",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "daron-acemoglu",
    name: "Daron Acemoglu",
    tagline: "MIT economist; 2024 Nobel laureate",
    summary:
      "Nobel-winning institutional economist who argues AI's current trajectory concentrates power and will reduce welfare unless policy redirects it. Co-author of Power and Progress.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "MIT", role: "Institute Professor of Economics", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Daron_Acemoglu",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI must be redirected toward human augmentation via policy, antitrust, and labour-market mechanisms.",
        quotes: [
          {
            text:
              "Progress depends on the choices societies make about technology. We have to choose human-complementary AI, or else it will be chosen for us.",
            date: "2023-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Power and Progress",
              url: "https://www.publicaffairsbooks.com/titles/daron-acemoglu/power-and-progress/9781541702530/",
              medium: "book",
              publisher: "PublicAffairs",
              date: "2023-05-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "claire-leibowicz",
    name: "Claire Leibowicz",
    tagline: "Partnership on AI; AI and media",
    summary:
      "Head of AI and Media Integrity at the Partnership on AI. Works on provenance, synthetic media disclosure, and the practical governance of generative AI in information ecosystems.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Partnership on AI", role: "Head of AI and Media Integrity", current: true },
    ],
    twitter: "ClaireL",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues synthetic media governance, provenance, disclosure, liability, is the tractable live AI governance problem.",
        quotes: [
          {
            text:
              "Provenance and disclosure are the foundational trust layer for AI-in-media.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Partnership on AI",
              url: "https://partnershiponai.org/",
              medium: "article",
              publisher: "Partnership on AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "brian-christian",
    name: "Brian Christian",
    tagline: "Author of The Alignment Problem",
    summary:
      "Non-fiction writer whose 2020 book The Alignment Problem translated mainstream alignment research into accessible prose. Fellow at the Berkeley Center for Human-Compatible AI.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "UC Berkeley Center for Human-Compatible AI", role: "Visiting Scholar", current: true },
    ],
    homepage: "https://brianchristian.org/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Book-length treatment of alignment: inverse reinforcement learning, reward hacking, specification gaming.",
        quotes: [
          {
            text:
              "The alignment problem is already here, and will keep scaling with capability.",
            date: "2020-10-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Alignment Problem",
              url: "https://brianchristian.org/the-alignment-problem/",
              medium: "book",
              publisher: "W. W. Norton",
              date: "2020-10-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "mackenzie-scott",
    name: "MacKenzie Scott",
    tagline: "Philanthropist; early AI safety funder via donations",
    summary:
      "Billionaire philanthropist whose large unrestricted grants have included AI governance and ethics organisations. Unusual among large donors in operating without strings attached.",
    categories: ["investor"],
    affiliations: [
      { org: "Yield Giving", role: "Philanthropist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/MacKenzie_Scott",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Funds AI ethics and governance orgs as part of broader systemic philanthropy.",
        quotes: [
          {
            text:
              "Unrestricted gifts to organisations already doing the work.",
            date: "2023",
            fidelity: "summary",
            source: {
              title: "Yield Giving",
              url: "https://yieldgiving.com/",
              medium: "article",
              publisher: "Yield Giving",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sebastian-thrun",
    name: "Sebastian Thrun",
    tagline: "Self-driving car pioneer; Udacity founder",
    summary:
      "Led Google's self-driving car project and founded Udacity. Argues AI has passed a capability threshold with LLMs; less focused on extinction risk and more on deployment quality.",
    categories: ["researcher", "founder", "academic"],
    affiliations: [
      { org: "Udacity", role: "Co-founder", current: true },
      { org: "Stanford University", role: "Adjunct Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Sebastian_Thrun",
    twitter: "SebastianThrun",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Frames AI as a highly positive force when deployed well; skeptical of catastrophe framings.",
        quotes: [
          {
            text:
              "We are at the beginning of the most important transformation in human history, let's not waste it panicking.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sebastian Thrun on AI",
              url: "https://robots.stanford.edu/",
              medium: "article",
              publisher: "Stanford Robotics",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "carl-benedikt-frey",
    name: "Carl Benedikt Frey",
    tagline: "Oxford economist; 'The Future of Employment' author",
    summary:
      "Oxford economist whose 2013 paper with Michael Osborne estimated that 47% of US jobs were at high risk of automation. Continues to publish on AI and labour.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Oxford Martin School", role: "Oxford Martin Citi Fellow", current: true },
    ],
    homepage: "https://www.oxfordmartin.ox.ac.uk/people/carl-benedikt-frey",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues labour-market impact demands policy response; complements the AI x-risk agenda with economic welfare concerns.",
        quotes: [
          {
            text:
              "About 47 percent of total US employment is in the high-risk category, meaning associated jobs could be automated in the next decade or two.",
            date: "2013",
            fidelity: "direct",
            context: "From the landmark 2013 Frey–Osborne paper.",
            source: {
              title: "The Future of Employment",
              url: "https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf",
              medium: "paper",
              publisher: "Oxford Martin School",
              date: "2013-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "paula-smith",
    name: "Paula Smith",
    tagline: "AI policy researcher at RAND Corporation",
    summary:
      "Policy researcher focused on the national-security and biosecurity dimensions of frontier AI; contributed to RAND's influential AGI-biosecurity analyses.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "RAND Corporation", role: "Policy Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Studies AI biosecurity: how frontier models could lower the bar for biological weapon uplift, and what policy can do.",
        quotes: [
          {
            text:
              "Frontier AI raises specific, measurable uplift risks for biological and chemical misuse, and those risks are tractable for policy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "RAND AI biosecurity research",
              url: "https://www.rand.org/topics/artificial-intelligence.html",
              medium: "article",
              publisher: "RAND Corporation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jason-matheny",
    name: "Jason Matheny",
    tagline: "CEO of RAND Corporation; former deputy director of OSTP",
    summary:
      "Former Biden White House deputy director of OSTP for national security; now runs RAND. Brings existential-risk-aware policy perspective to mainstream national security analysis.",
    categories: ["policy"],
    affiliations: [
      { org: "RAND Corporation", role: "CEO", current: true },
      { org: "Office of Science and Technology Policy", role: "Deputy Assistant to the President", end: "2023", current: false },
      { org: "Intelligence Advanced Research Projects Activity (IARPA)", role: "Director", end: "2019", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jason_Matheny",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance must be integrated with national-security institutions and that existential risk should be treated as a live policy object.",
        quotes: [
          {
            text:
              "AI is a dual-use general purpose technology and it should be governed like one.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Jason Matheny on AI policy",
              url: "https://www.rand.org/",
              medium: "talk",
              publisher: "RAND",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "emily-grumbling",
    name: "Emily Grumbling",
    tagline: "Former AI policy advisor; National Academies staff",
    summary:
      "AI policy analyst who led policy studies at the National Academies of Sciences, Engineering, and Medicine. Now works on federal AI regulatory strategy.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "National Academies of Sciences, Engineering, and Medicine", role: "Senior Program Officer", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames US AI governance as a cross-cutting interagency challenge requiring better expertise and coordination mechanisms.",
        quotes: [
          {
            text:
              "Federal AI expertise is unevenly distributed; the interagency coordination task is bigger than people appreciate.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "NASEM Computer Science and Telecommunications Board",
              url: "https://www.nationalacademies.org/cstb/",
              medium: "article",
              publisher: "National Academies",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "suchir-balaji",
    name: "Suchir Balaji",
    tagline: "OpenAI alumnus; public critic of training data practices",
    summary:
      "Former OpenAI researcher who left in mid-2024 and publicly argued ChatGPT's training on copyrighted material violated fair use. Died in November 2024.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Suchir_Balaji",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argued frontier labs' training data practices violate fair use and that the legal regime needs urgent attention.",
        quotes: [
          {
            text:
              "I don't think generative AI products that use copyrighted data without the owner's consent can be legally justified under fair use.",
            date: "2024-10-23",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Former OpenAI Researcher Says the Company Broke Copyright Law",
              url: "https://www.nytimes.com/2024/10/23/technology/openai-copyright-law.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2024-10-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
    notes:
      "Suchir Balaji died on 26 November 2024. His publicly documented positions remain on the record and are retained here for historical accuracy.",
  },

  {
    id: "william-saunders",
    name: "William Saunders",
    tagline: "OpenAI Superalignment alumnus; whistleblower",
    summary:
      "Former OpenAI Superalignment team member who resigned in 2024 and publicly testified to the US Senate about safety culture concerns at frontier labs.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Superalignment researcher", end: "2024", current: false },
    ],
    twitter: "Will_Saunders_",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Publicly testified to Congress that frontier AI development cannot be trusted to labs alone.",
        quotes: [
          {
            text:
              "I believe that OpenAI's current trajectory of development is inadequately focused on safety.",
            date: "2024-09-17",
            fidelity: "paraphrase-faithful",
            context: "US Senate testimony.",
            source: {
              title:
                "OpenAI whistleblowers testify to the Senate",
              url: "https://www.judiciary.senate.gov/committee-activity/hearings/oversight-of-ai-insiders-perspectives",
              medium: "testimony",
              publisher: "US Senate Judiciary Committee",
              date: "2024-09-17",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "helen-king",
    name: "Helen King",
    tagline: "DeepMind VP of Research; responsibility lead",
    summary:
      "Oversees responsible development at Google DeepMind. Public representative of DeepMind's responsibility framework combining capability evaluations, safety research, and deployment gates.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "VP of Research and Responsibility", current: true },
    ],
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary: "Leads DeepMind's Frontier Safety Framework, a capability-tied safety commitment regime.",
        quotes: [
          {
            text:
              "The Frontier Safety Framework commits us to evaluations at defined capability thresholds, with mitigation protocols triggered accordingly.",
            date: "2024-05-17",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Frontier Safety Framework",
              url: "https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/introducing-the-frontier-safety-framework/fsf-technical-report.pdf",
              medium: "paper",
              publisher: "Google DeepMind",
              date: "2024-05-17",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "tamay-besiroglu",
    name: "Tamay Besiroglu",
    tagline: "Co-founder of Epoch AI; scaling-laws researcher",
    summary:
      "Economist and AI forecaster at Epoch AI, producing the most cited data on compute, dataset scaling, and capability trends. Frames AI trajectory via quantitative compute-and-data forecasts.",
    categories: ["researcher", "statistician"],
    affiliations: [
      { org: "Epoch AI", role: "Co-founder", current: true },
    ],
    homepage: "https://epoch.ai/",
    twitter: "tamaybes",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Publishes empirical compute and dataset forecasts that inform the AI risk debate; takes a measured position himself.",
        quotes: [
          {
            text:
              "Given current trends in compute and data, transformative AI by 2040 is well within reason.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Epoch AI",
              url: "https://epoch.ai/",
              medium: "blog",
              publisher: "Epoch AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jaime-sevilla",
    name: "Jaime Sevilla",
    tagline: "Director of Epoch AI",
    summary:
      "Runs Epoch AI alongside Tamay Besiroglu. Produces the compute, training run, and dataset scaling data that is the quantitative backbone of mainstream AI forecasting.",
    categories: ["researcher"],
    affiliations: [
      { org: "Epoch AI", role: "Director", current: true },
    ],
    twitter: "jsevillamol",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Quantitative empiricist; publishes data that underlies most AI timeline forecasts.",
        quotes: [
          {
            text:
              "Compute for frontier training runs has doubled roughly every six months since 2010.",
            date: "2022-02-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Compute Trends Across Three Eras of Machine Learning",
              url: "https://arxiv.org/abs/2202.05924",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-02-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
