import type { Person } from "@/lib/people-types";

// Batch Y: more international voices (Japan, Middle East, South Asia).

export const people: Person[] = [
  {
    id: "fumio-kishida",
    name: "Fumio Kishida",
    tagline: "Former Prime Minister of Japan (2021–2024); Hiroshima AI Process architect",
    summary:
      "Led Japan's G7 presidency in 2023, launching the Hiroshima AI Process as the premier G7-level international AI governance framework. Architect of the G7 International Guiding Principles for Advanced AI Systems.",
    categories: ["policy"],
    affiliations: [
      { org: "Liberal Democratic Party of Japan", role: "Member", current: true },
      { org: "Government of Japan", role: "Prime Minister", end: "2024-10", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Fumio_Kishida",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Architect of the Hiroshima AI Process; pushed for Global South inclusion in international AI governance.",
        quotes: [
          {
            text:
              "Japan will take the lead in establishing international rule-making that will enable the entire international community, including the Global South, to enjoy the benefit of safe, secure, and trustworthy generative AI.",
            date: "2023-10-09",
            fidelity: "direct",
            source: {
              title: "The Hiroshima AI Process",
              url: "https://www.japan.go.jp/kizuna/2024/02/hiroshima_ai_process.html",
              medium: "talk",
              publisher: "Government of Japan",
              date: "2023-10-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "he-jianfeng",
    name: "He Jianfeng",
    tagline: "China Academy of Information and Communications Technology researcher",
    summary:
      "Chinese researcher whose work on AI governance bridges Western and Chinese perspectives; contributor to Chinese standards bodies and international dialogues.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "China Academy of Information and Communications Technology (CAICT)", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Contributes to Chinese AI standards work and participates in international AI governance dialogues.",
        quotes: [
          {
            text:
              "China's AI governance framework is evolving in conversation with international standards, not in isolation.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "CAICT AI research",
              url: "http://www.caict.ac.cn/english/",
              medium: "article",
              publisher: "CAICT",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "urvashi-aneja",
    name: "Urvashi Aneja",
    tagline: "Founding Director of Digital Futures Lab (India)",
    summary:
      "Indian researcher and founder of Digital Futures Lab, a Goa-based research practice focused on AI and society from a Global South perspective.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "Digital Futures Lab", role: "Founding Director", current: true },
    ],
    twitter: "urvashi_aneja",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance in the Global South must be grounded in local labour, data, and epistemic realities.",
        quotes: [
          {
            text:
              "AI governance written in Brussels or Washington has limited legitimacy in Delhi or Lagos unless we are at the table.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Digital Futures Lab",
              url: "https://digitalfutureslab.in/",
              medium: "article",
              publisher: "Digital Futures Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ashwini-vaishnaw",
    name: "Ashwini Vaishnaw",
    tagline: "Minister of Electronics and IT, Government of India",
    summary:
      "Indian cabinet minister responsible for the AI Mission and the Digital India Act. Balances US–China framing with India's 'AI for All' strategy.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of India", role: "Minister of Electronics and IT", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ashwini_Vaishnaw",
    twitter: "AshwiniVaishnaw",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Runs India's IndiaAI Mission and frames AI policy around sovereign capacity for a 1.4B population.",
        quotes: [
          {
            text:
              "India will build AI for its 1.4 billion people. That means compute capacity, language models, and governance frameworks of our own.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "India AI Mission",
              url: "https://indiaai.gov.in/",
              medium: "article",
              publisher: "IndiaAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nandan-nilekani",
    name: "Nandan Nilekani",
    tagline: "Infosys co-founder; architect of India's Aadhaar digital ID",
    summary:
      "Infosys co-founder and architect of India's Aadhaar and UPI digital public infrastructure. Advocates AI governance built on digital public infrastructure rather than proprietary AI.",
    categories: ["founder", "policy"],
    affiliations: [
      { org: "Infosys", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Nandan_Nilekani",
    twitter: "NandanNilekani",
    positions: [
      {
        strategyId: "public-ai",
        stance: "endorses",
        summary:
          "Argues AI should be built as digital public infrastructure, like Aadhaar or UPI, rather than as proprietary products.",
        quotes: [
          {
            text:
              "India can lead AI for a billion people by treating it as digital public infrastructure, not as a product.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Nandan Nilekani on DPI and AI",
              url: "https://www.nandannilekani.org/",
              medium: "article",
              publisher: "nandannilekani.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "enrique-dans",
    name: "Enrique Dans",
    tagline: "IE University professor; AI commentator",
    summary:
      "Spanish technology professor whose blog and Forbes column have been widely-read European commentary on AI deployment and governance.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "IE University", role: "Professor of Innovation", current: true },
    ],
    twitter: "edans",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Pro-deployment European voice; pushes back on regulation-first framings.",
        quotes: [
          {
            text:
              "Europe risks regulating itself out of the AI race. Regulation without capability is a race to irrelevance.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Enrique Dans blog",
              url: "https://www.enriquedans.com/",
              medium: "blog",
              publisher: "enriquedans.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rajeev-chandrasekhar",
    name: "Rajeev Chandrasekhar",
    tagline: "Former Indian Minister of State for Electronics and IT",
    summary:
      "Former Indian deputy IT minister who oversaw India's early AI policy formation. Advocate for regulatory frameworks that balance sovereign AI with open ecosystems.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of India", role: "Former Minister of State for Electronics and IT", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Rajeev_Chandrasekhar",
    twitter: "RajeevRC_X",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Advanced India's sovereign AI framework; advocated for standards that protect open-source while setting minimum safety requirements.",
        quotes: [
          {
            text:
              "Sovereign AI is not about protectionism. It is about capacity to steer.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "India AI Mission",
              url: "https://indiaai.gov.in/",
              medium: "article",
              publisher: "IndiaAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "seifeldin-ayad",
    name: "Seifeldin Ayad",
    tagline: "MENA-based AI governance voice",
    summary:
      "Middle East and North Africa-focused AI policy voice. Argues MENA perspectives are systematically missing from mainstream AI governance discussions.",
    categories: ["policy"],
    affiliations: [
      { org: "Independent", role: "Technology policy researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Represents MENA perspectives on AI governance, particularly around surveillance and authoritarian AI.",
        quotes: [
          {
            text:
              "AI surveillance in authoritarian MENA states is not a hypothetical governance risk. It is a present reality that the global AI governance conversation does not address.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Independent commentary",
              url: "https://x.com/",
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
    id: "ziv-epstein",
    name: "Ziv Epstein",
    tagline: "Stanford CRFM; human-AI interaction and creativity",
    summary:
      "Stanford researcher whose work on human-AI creative interaction has shaped understanding of how AI affects human authorship. Published in Science on generative AI governance.",
    categories: ["researcher"],
    affiliations: [
      { org: "Stanford CRFM", role: "Postdoctoral Fellow", current: true },
    ],
    twitter: "ziv_epstein",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues generative AI governance must address authorship, attribution, and human creative labour as a first-class problem.",
        quotes: [
          {
            text:
              "Generative AI will reshape creative fields. We need proactive governance that protects attribution and human labour.",
            date: "2023-06-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Art and the science of generative AI",
              url: "https://www.science.org/doi/10.1126/science.adh4451",
              medium: "paper",
              publisher: "Science",
              date: "2023-06-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
