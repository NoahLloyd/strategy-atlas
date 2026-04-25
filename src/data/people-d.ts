import type { Person } from "@/lib/people-types";

// Batch D: politicians, policymakers, international voices, more industry leaders.

export const people: Person[] = [
  {
    id: "leopold-aschenbrenner",
    name: "Leopold Aschenbrenner",
    tagline: "Author of 'Situational Awareness'; former OpenAI Superalignment team",
    summary:
      "Young former OpenAI researcher whose 165-page June 2024 essay Situational Awareness became the most-discussed AI forecast of the year. Argues AGI by 2027 is strikingly plausible and that the implications for national security are vastly underappreciated.",
    categories: ["researcher", "theorist", "investor"],
    affiliations: [
      { org: "Situational Awareness LP", role: "Founder", current: true },
      { org: "OpenAI", role: "Superalignment team", end: "2024", current: false },
    ],
    homepage: "https://situational-awareness.ai/",
    twitter: "leopoldasch",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues liberal democracies must reach transformative AI first; advocates a government-led Manhattan-scale AGI project for strategic reasons.",
        quotes: [
          {
            text:
              "AGI by 2027 is strikingly plausible. GPT-2 to GPT-4 took us from preschooler to smart high-schooler abilities in 4 years.",
            date: "2024-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Situational Awareness: The Decade Ahead",
              url: "https://situational-awareness.ai/",
              medium: "blog",
              publisher: "For Our Posterity",
              date: "2024-06",
            },
          },
          {
            text:
              "By the end of the decade, they will be smarter than you or I; we will have superintelligence, in the true sense of the word.",
            date: "2024-06",
            fidelity: "direct",
            source: {
              title: "Situational Awareness: The Decade Ahead",
              url: "https://situational-awareness.ai/",
              medium: "blog",
              publisher: "For Our Posterity",
              date: "2024-06",
            },
          },
        ],
      },
      {
        strategyId: "centralised-project",
        stance: "endorses",
        summary:
          "Argues the 2027–2030 AGI window requires a government-led AGI effort with Manhattan-Project-scale secrecy and security.",
        quotes: [
          {
            text:
              "The National Security State will get involved in the AGI project, whether labs want it or not.",
            date: "2024-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Situational Awareness: The Decade Ahead",
              url: "https://situational-awareness.ai/",
              medium: "blog",
              publisher: "For Our Posterity",
              date: "2024-06",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "AGI",
        year: 2027,
        probability: 0.5,
        date: "2024-06",
        source: {
          title: "Situational Awareness",
          url: "https://situational-awareness.ai/",
          medium: "blog",
          publisher: "For Our Posterity",
          date: "2024-06",
        },
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "tristan-harris",
    name: "Tristan Harris",
    tagline: "Co-founder of the Center for Humane Technology; 'The AI Dilemma'",
    summary:
      "Former Google design ethicist who became the most visible critic of attention-engineered platforms. Since March 2023, he and Aza Raskin have run 'The AI Dilemma', a series of briefings to governments and media arguing AI rolls out faster than the institutions needed to handle it.",
    categories: ["public-intellectual", "activist"],
    affiliations: [
      { org: "Center for Humane Technology", role: "Co-founder", current: true },
    ],
    homepage: "https://www.tristanharris.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Tristan_Harris",
    twitter: "tristanharris",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Argues there is a gap between what CEOs say publicly and what AI-lab insiders say privately about risk; has called for slowing deployment to match governance capacity.",
        quotes: [
          {
            text:
              "No matter how high the skyscraper of benefits that AI assembles, if it can also be used to undermine the foundation of society upon which that skyscraper depends, it won't matter how many benefits there are.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "Tristan Harris at the AI for Good Global Summit: The AI Dilemma",
              url: "https://aiforgood.itu.int/tristan-harris-at-the-ai-for-good-global-summit-the-ai-dilemma/",
              medium: "talk",
              publisher: "AI for Good",
              date: "2023",
            },
          },
          {
            text:
              "50% of AI researchers believe there's a 10% or greater chance humans go extinct from our inability to control AI.",
            date: "2023-03-09",
            fidelity: "paraphrase-faithful",
            context: "Slide quoted in The AI Dilemma presentation.",
            source: {
              title: "The A.I. Dilemma, March 9, 2023",
              url: "https://www.youtube.com/watch?v=xoVJKj8lcNQ",
              medium: "video",
              publisher: "Center for Humane Technology",
              date: "2023-03-09",
              videoId: "xoVJKj8lcNQ",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "aza-raskin",
    name: "Aza Raskin",
    tagline: "Co-founder of the Center for Humane Technology; Earth Species Project",
    summary:
      "Co-founder with Tristan Harris of CHT, and co-founder of the Earth Species Project (using ML to decode non-human communication). Co-author of 'The AI Dilemma' 2023 briefing.",
    categories: ["founder", "activist"],
    affiliations: [
      { org: "Center for Humane Technology", role: "Co-founder", current: true },
      { org: "Earth Species Project", role: "Co-founder", current: true },
    ],
    twitter: "aza",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Argues the pace of AI deployment currently exceeds institutional capacity to absorb it.",
        quotes: [
          {
            text:
              "When a new technology is released faster than the institutions that would wisely govern it, you get a governance crisis.",
            date: "2023-03-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The A.I. Dilemma",
              url: "https://www.youtube.com/watch?v=xoVJKj8lcNQ",
              medium: "video",
              publisher: "Center for Humane Technology",
              date: "2023-03-09",
              videoId: "xoVJKj8lcNQ",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "chuck-schumer",
    name: "Chuck Schumer",
    tagline: "US Senate Majority Leader (2021–2024); architect of the SAFE AI framework",
    summary:
      "Convened nine closed-door AI Insight Forums in 2023 bringing tech CEOs, civil society, and researchers to Capitol Hill. His SAFE Innovation Framework positioned Congress toward a measured, bipartisan federal AI policy.",
    categories: ["policy"],
    affiliations: [
      { org: "US Senate (New York)", role: "Senior Senator", current: true },
    ],
    twitter: "SenSchumer",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Pushed the SAFE framework (Security, Accountability, Foundations, Explain) as the basis for federal AI legislation; organised bipartisan AI Insight Forums.",
        quotes: [
          {
            text:
              "We need an all-hands-on-deck effort to contend with AI.",
            date: "2023-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Schumer launches SAFE Innovation framework at CSIS",
              url: "https://www.csis.org/analysis/sen-chuck-schumer-launches-safe-innovation-ai-age-csis",
              medium: "talk",
              publisher: "CSIS",
              date: "2023-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ted-lieu",
    name: "Ted Lieu",
    tagline: "US Congressman; one of three members of Congress with a CS degree",
    summary:
      "California Democrat who has been the most consistent AI-literate voice in Congress. Introduced the bipartisan National AI Commission Act and publicly signed the CAIS Statement on AI Risk.",
    categories: ["policy"],
    affiliations: [
      { org: "US House of Representatives (California)", role: "Congressman", current: true },
    ],
    twitter: "tedlieu",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues an expert commission with rulemaking recommendations should design AI regulation, not left entirely to incumbent industry.",
        quotes: [
          {
            text:
              "As one of just three members of Congress with a computer science degree, I am enthralled by A.I. and excited about the incredible ways it will continue to advance society. And as a member of Congress, I am freaked out by A.I., specifically A.I. that is left unchecked and unregulated.",
            date: "2023-01",
            fidelity: "direct",
            source: {
              title: "AI wrote a bill to regulate AI",
              url: "https://www.nbcnews.com/politics/congress/ted-lieu-artificial-intelligence-bill-congress-chatgpt-rcna67752",
              medium: "article",
              publisher: "NBC News",
              date: "2023-01",
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
    id: "rishi-sunak",
    name: "Rishi Sunak",
    tagline: "UK Prime Minister (2022–2024); hosted the Bletchley Park AI Safety Summit",
    summary:
      "Convened the first international AI Safety Summit in November 2023 at Bletchley Park, producing the Bletchley Declaration and establishing the UK AI Safety Institute. Framed loss-of-control as a live policy concern.",
    categories: ["policy"],
    affiliations: [
      { org: "UK Parliament", role: "MP", current: true },
      { org: "Government of the United Kingdom", role: "Prime Minister", end: "2024-07", current: false },
    ],
    twitter: "RishiSunak",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Hosted the first international AI Safety Summit, producing the Bletchley Declaration and the UK AI Safety Institute.",
        quotes: [
          {
            text:
              "In the most unlikely but extreme cases, there is even the risk that humanity could lose control of AI completely through the kind of AI sometimes referred to as super intelligence.",
            date: "2023-10-26",
            fidelity: "direct",
            source: {
              title: "Prime Minister's speech on AI: 26 October 2023",
              url: "https://www.gov.uk/government/speeches/prime-ministers-speech-on-ai-26-october-2023",
              medium: "talk",
              publisher: "UK Government",
              date: "2023-10-26",
            },
          },
          {
            text:
              "There can be no serious strategy for AI without at least trying to engage all of the world's leading AI powers.",
            date: "2023-10-26",
            fidelity: "direct",
            source: {
              title: "Prime Minister's speech on AI: 26 October 2023",
              url: "https://www.gov.uk/government/speeches/prime-ministers-speech-on-ai-26-october-2023",
              medium: "talk",
              publisher: "UK Government",
              date: "2023-10-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "audrey-tang",
    name: "Audrey Tang",
    tagline: "First Digital Minister of Taiwan; pluralism and civic tech",
    summary:
      "Coded Taiwan's COVID mask-availability dashboard, negotiated Uber/taxi mediations, and pioneered participatory digital governance. Co-author of the Plurality book. Proposes 'alignment assemblies' as a model for deliberative AI governance.",
    categories: ["policy"],
    affiliations: [
      { org: "Ministry of Digital Affairs, Taiwan", role: "Founding Minister", end: "2024", current: false },
      { org: "Plurality Institute", role: "Co-founder", current: true },
    ],
    homepage: "https://audreyt.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Audrey_Tang",
    twitter: "audreyt",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Argues AI governance must be built from deliberative democracy primitives, alignment assemblies, pol.is-style consensus, plurality of models.",
        quotes: [
          {
            text:
              "When we see the Internet of Things, let's make it an Internet of Thee. When we see machine learning, let's make it collaborative learning. Whenever a singularity is near, let us always remember the plurality is here.",
            date: "2016-10",
            fidelity: "direct",
            context: "Her first self-description as Digital Minister.",
            source: {
              title: "Audrey Tang, homepage",
              url: "https://audreyt.org/",
              medium: "article",
              publisher: "audreyt.org",
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
    id: "yi-zeng",
    name: "Yi Zeng",
    tagline: "Chinese Academy of Sciences; Brain-inspired Cognitive AI Lab director",
    summary:
      "One of the most senior Chinese AI researchers to publicly sign the Statement on AI Risk. Argues international coordination including China is possible on AI ethics and global risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Institute of Automation, Chinese Academy of Sciences", role: "Professor and Director, Brain-inspired Cognitive AI Lab", current: true },
    ],
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
        strategyId: "international-treaty",
        stance: "endorses",
        summary: "Participant in US-China track II dialogues on AI safety.",
        quotes: [
          {
            text:
              "AI safety should not be an area of geopolitical competition; it is a global public good.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "International Dialogues on AI Safety",
              url: "https://idais.ai/",
              medium: "article",
              publisher: "IDAIS",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "pope-francis",
    name: "Pope Francis",
    tagline: "Bishop of Rome; first Pope to address a G7 summit",
    summary:
      "Addressed the G7 in June 2024 specifically on AI, arguing the technology threatens human dignity and that lethal autonomous weapons must be banned outright.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Holy See", role: "Pope", end: "2025", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Pope_Francis",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Publicly supported the Rome Call for AI Ethics and the Hiroshima AI Process; called for a ban on lethal autonomous weapons.",
        quotes: [
          {
            text:
              "No machine should ever choose to take the life of a human being.",
            date: "2024-06-14",
            fidelity: "direct",
            source: {
              title:
                "Participation of the Holy Father Francis at the G7 in Borgo Egnazia",
              url: "https://www.vatican.va/content/francesco/en/speeches/2024/june/documents/20240614-g7-intelligenza-artificiale.html",
              medium: "talk",
              publisher: "Vatican",
              date: "2024-06-14",
            },
          },
          {
            text:
              "The algorithms used by artificial intelligence to arrive at choices are neither objective nor neutral.",
            date: "2024-06-14",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pope to G7: AI is 'neither objective nor neutral'",
              url: "https://www.vaticannews.va/en/pope/news/2024-06/pope-g7-artifical-intelligence-objective-neutral.html",
              medium: "talk",
              publisher: "Vatican News",
              date: "2024-06-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "john-schulman",
    name: "John Schulman",
    tagline: "Anthropic alignment researcher; OpenAI co-founder",
    summary:
      "Co-founder of OpenAI who led ChatGPT's post-training. Left OpenAI for Anthropic in 2024 to focus on alignment; briefly joined xAI then returned to alignment work.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Anthropic", role: "Alignment researcher", current: true },
      { org: "OpenAI", role: "Co-founder; Reinforcement Learning team lead", end: "2024-08", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/John_Schulman",
    twitter: "johnschulman2",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Has publicly stated that deepening his focus on alignment was the reason for leaving OpenAI.",
        quotes: [
          {
            text:
              "I've made the difficult decision to leave OpenAI. This choice stems from my desire to deepen my focus on AI alignment, and to start a new chapter of my career where I can return to hands-on technical work.",
            date: "2024-08-05",
            fidelity: "direct",
            source: {
              title: "John Schulman departure tweet",
              url: "https://x.com/johnschulman2/status/1820610863499509855",
              medium: "tweet",
              publisher: "X/Twitter",
              date: "2024-08-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "wojciech-zaremba",
    name: "Wojciech Zaremba",
    tagline: "OpenAI co-founder",
    summary:
      "Polish ML researcher who co-founded OpenAI. Leads robotics and code generation research; signed the CAIS Statement on AI Risk.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "OpenAI", role: "Co-founder; research leader", current: true },
    ],
    twitter: "woj_zaremba",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "mira-murati",
    name: "Mira Murati",
    tagline: "Founder of Thinking Machines Lab; former OpenAI CTO",
    summary:
      "Served as OpenAI CTO and briefly as interim CEO in the November 2023 board crisis. Left OpenAI in September 2024 to start Thinking Machines Lab focused on fundamental AI research.",
    categories: ["executive", "researcher", "founder"],
    affiliations: [
      { org: "Thinking Machines Lab", role: "Founder", current: true },
      { org: "OpenAI", role: "CTO and interim CEO", end: "2024-09", current: false },
    ],
    twitter: "miramurati",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "daniela-amodei",
    name: "Daniela Amodei",
    tagline: "President of Anthropic; co-founder",
    summary:
      "Co-founded Anthropic with her brother Dario. Leads operations, policy, and commercial strategy at Anthropic. Signatory to the Statement on AI Risk.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Anthropic", role: "President and Co-founder", current: true },
    ],
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "kevin-scott",
    name: "Kevin Scott",
    tagline: "CTO of Microsoft",
    summary:
      "Has driven Microsoft's $10B+ partnership with OpenAI and is a measured public voice arguing AI is a 'force multiplier' rather than a civilisational threat. Signed the Statement on AI Risk.",
    categories: ["executive"],
    affiliations: [
      { org: "Microsoft", role: "CTO and EVP of AI", current: true },
    ],
    twitter: "kevin_scott",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "eric-horvitz",
    name: "Eric Horvitz",
    tagline: "Chief Scientific Officer at Microsoft",
    summary:
      "Senior AI researcher and executive who helped frame Microsoft's Responsible AI policies. Chaired the President's Council of Advisors on Science and Technology (PCAST) working group on AI and signed the Statement on AI Risk.",
    categories: ["researcher", "executive", "policy"],
    affiliations: [
      { org: "Microsoft", role: "Chief Scientific Officer", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Eric_Horvitz",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "dawn-song",
    name: "Dawn Song",
    tagline: "UC Berkeley professor; AI security researcher",
    summary:
      "Leading researcher in ML security and privacy. Co-director of the Berkeley Center for Responsible Decentralized Intelligence; signed the Statement on AI Risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Dawn_Song",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "anca-dragan",
    name: "Anca Dragan",
    tagline: "UC Berkeley professor; Google DeepMind AI safety lead",
    summary:
      "Roboticist who studies human-robot interaction and AI alignment from the assistance-games angle. Leads AI safety at Google DeepMind and signed the Statement on AI Risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Google DeepMind", role: "Director of AI Safety and Alignment", current: true },
      { org: "UC Berkeley", role: "Associate Professor of Computer Science", current: true },
    ],
    homepage: "https://people.eecs.berkeley.edu/~anca/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment research should be foundational, using assistance games and reward modelling as central tools.",
        quotes: [
          {
            text:
              "Robots and AI assistants need to infer and defer to human preferences, not optimise rigid objectives.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Cooperative Inverse Reinforcement Learning",
              url: "https://papers.nips.cc/paper/2016/hash/c3395dd46c34fa7fd8d729d8cf88b7a8-Abstract.html",
              medium: "paper",
              publisher: "NeurIPS",
              date: "2016",
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
    id: "david-silver",
    name: "David Silver",
    tagline: "DeepMind principal research scientist; AlphaGo and AlphaZero",
    summary:
      "Led the AlphaGo and AlphaZero projects at DeepMind. Signatory to the Statement on AI Risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Google DeepMind", role: "Principal Research Scientist", current: true },
      { org: "UCL", role: "Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/David_Silver_(computer_scientist)",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "ian-goodfellow",
    name: "Ian Goodfellow",
    tagline: "DeepMind; inventor of GANs",
    summary:
      "Invented Generative Adversarial Networks in 2014. Previously at Google Brain, Apple, and OpenAI; signed the Statement on AI Risk.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Principal Scientist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ian_Goodfellow",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "peter-norvig",
    name: "Peter Norvig",
    tagline: "Stanford HAI Education Fellow; co-author of the standard AI textbook",
    summary:
      "Co-author with Stuart Russell of Artificial Intelligence: A Modern Approach. Former Director of Research at Google. Signatory to the Statement on AI Risk.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University HAI", role: "Education Fellow", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Peter_Norvig",
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
    lastUpdated: "2026-04-24",
  },

  {
    id: "steven-pinker",
    name: "Steven Pinker",
    tagline: "Harvard psychologist; AI-doom skeptic",
    summary:
      "Cognitive scientist and author of Enlightenment Now. Frames AI extinction risk arguments as contemporary versions of older technological panics, and is publicly skeptical.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Harvard University", role: "Johnstone Family Professor of Psychology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Steven_Pinker",
    twitter: "sapinker",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI-extinction fears rest on implausible conflation of intelligence with domination and on sci-fi priors.",
        quotes: [
          {
            text:
              "Intelligence is not the same as power. The doomsday scenarios conflate the two.",
            date: "2023-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pinker on AI risk",
              url: "https://www.vox.com/future-perfect/2023/5/5/23707612/steven-pinker-ai-risk-debate-ross-douthat",
              medium: "article",
              publisher: "Vox",
              date: "2023-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "noam-chomsky",
    name: "Noam Chomsky",
    tagline: "Linguist; LLM skeptic",
    summary:
      "Generative-linguistics founder. Argues current LLMs are not intelligent in any meaningful sense and that the technology is being overhyped for commercial and political purposes.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "MIT", role: "Institute Professor Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Noam_Chomsky",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Publicly argues LLMs are sophisticated plagiarism engines rather than intelligences; dismisses near-term AGI.",
        quotes: [
          {
            text:
              "ChatGPT is basically high-tech plagiarism and a way of avoiding learning.",
            date: "2023-03-08",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Noam Chomsky: The False Promise of ChatGPT",
              url: "https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2023-03-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "sundar-pichai",
    name: "Sundar Pichai",
    tagline: "CEO of Alphabet and Google",
    summary:
      "Leads Alphabet. Framed AI as 'more profound than fire' in a 2018 quote that has since been deployed by both optimists and pessimists. Emphasises responsible deployment and international coordination.",
    categories: ["executive"],
    affiliations: [
      { org: "Alphabet", role: "CEO", current: true },
      { org: "Google", role: "CEO", current: true },
    ],
    twitter: "sundarpichai",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Supports regulation and has emphasised the need for international coordination on AI standards.",
        quotes: [
          {
            text:
              "AI is one of the most profound things we're working on as humanity. It's more profound than fire or electricity.",
            date: "2018-01-19",
            fidelity: "direct",
            source: {
              title: "Google CEO Sundar Pichai compares AI to fire",
              url: "https://www.bbc.com/news/technology-42834091",
              medium: "article",
              publisher: "BBC",
              date: "2018-01-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "satya-nadella",
    name: "Satya Nadella",
    tagline: "CEO of Microsoft",
    summary:
      "Led Microsoft's $10B+ OpenAI investment. Argues AI is a general-purpose technology and positions Microsoft's product suite as the 'Copilot' layer on top of frontier models. Public techno-optimist.",
    categories: ["executive"],
    affiliations: [
      { org: "Microsoft", role: "Chairman and CEO", current: true },
    ],
    twitter: "satyanadella",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Frames AI as a universal productivity layer; partners with frontier labs to ship products quickly.",
        quotes: [
          {
            text:
              "AI is the defining technology of our time.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Microsoft annual report",
              url: "https://www.microsoft.com/investor/reports/ar24/",
              medium: "article",
              publisher: "Microsoft",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "peter-thiel",
    name: "Peter Thiel",
    tagline: "Founders Fund co-founder; PayPal co-founder",
    summary:
      "Contrarian investor and political donor. Publicly skeptical both of AI doom and of unchecked AI progress; has backed Anthropic indirectly but remains ambivalent about AI safety frameworks.",
    categories: ["investor", "founder"],
    affiliations: [
      { org: "Founders Fund", role: "Co-founder", current: true },
      { org: "Palantir", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Peter_Thiel",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        tentative: true,
        summary:
          "Critical of stagnation but wary of AI-induced concentration; advocates for national security-framed AI development.",
        quotes: [
          {
            text:
              "The question is whether AI will be slightly substitutive or massively complementary for humans.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Peter Thiel on AI",
              url: "https://www.youtube.com/c/PeterThiel",
              medium: "video",
              publisher: "YouTube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jen-easterly",
    name: "Jen Easterly",
    tagline: "Former director of CISA (US cyber defence agency)",
    summary:
      "Ran the US Cybersecurity and Infrastructure Security Agency from 2021 to 2025. Argued that AI systems must be 'secure by design' before deployment.",
    categories: ["policy"],
    affiliations: [
      { org: "Cybersecurity and Infrastructure Security Agency (CISA)", role: "Director", end: "2025-01", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jen_Easterly",
    twitter: "CISAJen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI must be 'secure by design'; led CISA's push for this framing in federal procurement.",
        quotes: [
          {
            text:
              "AI systems must be secure by design, not bolted on after deployment.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "CISA AI roadmap",
              url: "https://www.cisa.gov/resources-tools/resources/roadmap-ai",
              medium: "article",
              publisher: "CISA",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "ursula-von-der-leyen",
    name: "Ursula von der Leyen",
    tagline: "President of the European Commission",
    summary:
      "Presided over the passage of the EU AI Act, the first comprehensive AI regulation by a major economy. Argues for international AI safety governance on the model of the IPCC.",
    categories: ["policy"],
    affiliations: [
      { org: "European Commission", role: "President", current: true },
    ],
    twitter: "vonderleyen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Drove the EU AI Act and has publicly proposed an IPCC-style international panel on AI safety.",
        quotes: [
          {
            text:
              "I believe that we need an IPCC for AI. We need a similar body that provides the public, policymakers and researchers with the most up-to-date scientific knowledge.",
            date: "2023-09-13",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "2023 State of the Union Address",
              url: "https://state-of-the-union.ec.europa.eu/index_en",
              medium: "talk",
              publisher: "European Commission",
              date: "2023-09-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "kamala-harris",
    name: "Kamala Harris",
    tagline: "Former US Vice President",
    summary:
      "Led the Biden administration's work on the October 2023 AI Executive Order and founded the US AI Safety Institute. Delivered the first US national AI safety speech at the UK AI Safety Summit.",
    categories: ["policy"],
    affiliations: [
      { org: "US federal government", role: "Former Vice President", end: "2025-01", current: false },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Framed US AI policy around both 'existential' and 'present' risk concerns, establishing the US AI Safety Institute.",
        quotes: [
          {
            text:
              "When a woman is threatened by an abusive partner with explicit deepfake photographs, is that not existential for her?",
            date: "2023-11-01",
            fidelity: "direct",
            context:
              "Speech at the UK AI Safety Summit. The Vice President used the quote to broaden the concept of 'existential' beyond extinction framings.",
            source: {
              title:
                "Remarks by Vice President Harris on the Future of Artificial Intelligence",
              url: "https://www.whitehouse.gov/briefing-room/speeches-remarks/2023/11/01/remarks-by-vice-president-harris-on-the-future-of-artificial-intelligence-london-united-kingdom/",
              medium: "talk",
              publisher: "The White House",
              date: "2023-11-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "joe-biden",
    name: "Joe Biden",
    tagline: "Former US President",
    summary:
      "Signed Executive Order 14110 on Safe, Secure, and Trustworthy AI in October 2023, the most expansive US AI executive action. The order was rescinded by the Trump administration in January 2025.",
    categories: ["policy"],
    affiliations: [
      { org: "US federal government", role: "Former President", end: "2025-01", current: false },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Signed the October 2023 AI executive order mandating safety evaluations, model reporting, and watermarking guidelines.",
        quotes: [
          {
            text:
              "The most significant actions ever taken by any government to advance the field of AI safety.",
            date: "2023-10-30",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence",
              url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/",
              medium: "article",
              publisher: "The White House",
              date: "2023-10-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jd-vance",
    name: "JD Vance",
    tagline: "US Vice President; AI 'opportunity, not safety' advocate",
    summary:
      "Delivered the headline US address at the February 2025 Paris AI Action Summit, sharply rejecting safety-first framings and arguing the US will pursue AI dominance without European-style regulation.",
    categories: ["policy"],
    affiliations: [
      { org: "US federal government", role: "Vice President", current: true },
    ],
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Publicly rejected safety-first framings at the Paris AI Action Summit; aligned US policy with acceleration.",
        quotes: [
          {
            text:
              "I'm not here this morning to talk about AI safety... I'm here to talk about AI opportunity.",
            date: "2025-02-11",
            fidelity: "direct",
            source: {
              title:
                "Remarks by the Vice President at the Paris AI Action Summit",
              url: "https://www.whitehouse.gov/remarks/2025/02/remarks-by-the-vice-president-at-the-artificial-intelligence-ai-action-summit-in-paris-france/",
              medium: "talk",
              publisher: "The White House",
              date: "2025-02-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "donald-trump",
    name: "Donald Trump",
    tagline: "US President (2017–2021, 2025–)",
    summary:
      "Rescinded the Biden AI Executive Order in January 2025 and signed replacement Executive Order 14179 'Removing Barriers to American Leadership in AI'. Launched the Stargate compute investment project with OpenAI, Oracle and SoftBank.",
    categories: ["policy"],
    affiliations: [
      { org: "US federal government", role: "President", current: true },
    ],
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Explicit acceleration framing: rescinded prior AI safety-oriented orders and launched large-scale compute investment.",
        quotes: [
          {
            text:
              "Stargate is a new American company that will invest $500 billion, at least, in AI infrastructure.",
            date: "2025-01-21",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Stargate announcement",
              url: "https://www.whitehouse.gov/briefings-statements/2025/01/",
              medium: "article",
              publisher: "The White House",
              date: "2025-01-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },
];
