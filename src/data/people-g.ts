import type { Person } from "@/lib/people-types";

// Batch G: historical figures, additional international voices, more researchers.

export const people: Person[] = [
  {
    id: "stephen-hawking",
    name: "Stephen Hawking",
    tagline: "Theoretical physicist; early mainstream AI-risk voice (1942–2018)",
    summary:
      "Helped launch mainstream concern about existential AI risk with his 2014 BBC warning. Co-founded the Cambridge Centre for the Future of Intelligence.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Cambridge", role: "Lucasian Professor Emeritus", end: "2018", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Stephen_Hawking",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argued full AI could end the human race, on the grounds that it would self-improve beyond biological human capacity.",
        quotes: [
          {
            text:
              "The development of full artificial intelligence could spell the end of the human race.",
            date: "2014-12-02",
            fidelity: "direct",
            source: {
              title: "Stephen Hawking warns artificial intelligence could end mankind",
              url: "https://www.bbc.com/news/technology-30290540",
              medium: "video",
              publisher: "BBC",
              date: "2014-12-02",
              videoId: "fFLVyWBDTfo",
              videoPlatform: "youtube",
            },
          },
          {
            text:
              "It would take off on its own, and re-design itself at an ever increasing rate. Humans, who are limited by slow biological evolution, couldn't compete, and would be superseded.",
            date: "2014-12-02",
            fidelity: "direct",
            source: {
              title: "Stephen Hawking on AI risk",
              url: "https://www.bbc.com/news/technology-30290540",
              medium: "article",
              publisher: "BBC",
              date: "2014-12-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "vernor-vinge",
    name: "Vernor Vinge",
    tagline: "Science-fiction author who coined 'technological singularity' (1944–2024)",
    summary:
      "Mathematician and SF author whose 1993 NASA paper 'The Coming Technological Singularity' proposed that superhuman intelligence by 2030 would end the human era as we know it. A founding formal statement of what later became AGI discourse.",
    categories: ["theorist", "academic", "public-intellectual"],
    affiliations: [
      { org: "San Diego State University", role: "Professor Emeritus of Mathematics and Computer Science", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Vernor_Vinge",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argued the intelligence-explosion framing decades before it was mainstream. Estimated superhuman AI between 2005 and 2030.",
        quotes: [
          {
            text:
              "Within thirty years, we will have the technological means to create superhuman intelligence. Shortly thereafter, the human era will be ended.",
            date: "1993-03-30",
            fidelity: "direct",
            source: {
              title: "The Coming Technological Singularity",
              url: "https://edoras.sdsu.edu/~vinge/misc/singularity.html",
              medium: "paper",
              publisher: "NASA VISION-21 Symposium",
              date: "1993-03-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "martin-rees",
    name: "Martin Rees",
    tagline: "Astronomer Royal; CSER co-founder",
    summary:
      "Former Astronomer Royal who co-founded the Centre for the Study of Existential Risk at Cambridge with Huw Price and Jaan Tallinn. Frames AI alongside bioengineering as the most serious civilisational-scale risks this century.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Cambridge", role: "Emeritus Professor", current: true },
      { org: "Centre for the Study of Existential Risk", role: "Co-founder", current: true },
    ],
    homepage: "https://www.martinrees.uk/",
    wikipedia: "https://en.wikipedia.org/wiki/Martin_Rees",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues AI is one of a small set of 21st-century technologies with genuine civilisational-scale downside risk.",
        quotes: [
          {
            text:
              "Since we can't understand what's going on inside them, we have to be cautious about handing over power to them.",
            date: "2020-12",
            fidelity: "direct",
            source: {
              title:
                "Buckle up: We are in for a bumpy ride. An interview with Royal Astronomer Martin Rees",
              url: "https://thebulletin.org/premium/2020-12/buckle-up-we-are-in-for-a-bumpy-ride-an-interview-with-royal-astronomer-martin-rees/",
              medium: "article",
              publisher: "Bulletin of the Atomic Scientists",
              date: "2020-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "huw-price",
    name: "Huw Price",
    tagline: "Cambridge philosopher; CSER co-founder",
    summary:
      "Bertrand Russell Professor of Philosophy at Cambridge and co-founder of CSER. Works on philosophical foundations of existential risk analysis.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Cambridge", role: "Bertrand Russell Professor of Philosophy Emeritus", current: true },
      { org: "Centre for the Study of Existential Risk", role: "Co-founder", current: true },
    ],
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Helped formalise the philosophical case for existential risk research, including AI.",
        quotes: [
          {
            text:
              "It seems a reasonable prediction that some time in this or the next century intelligence will escape from the constraints of biology.",
            date: "2012-11-25",
            fidelity: "direct",
            source: {
              title:
                "Cambridge to study technology's risks to humans",
              url: "https://www.theregister.com/2012/11/25/cambridge_study_existential_risk/",
              medium: "article",
              publisher: "The Register",
              date: "2012-11-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "andrew-critch",
    name: "Andrew Critch",
    tagline: "Berkeley AI safety researcher; ARCHES framework",
    summary:
      "AI safety researcher focusing on multi-multi alignment — coordination between multiple AI systems and multiple human stakeholders — as the distinctive AI x-safety problem.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley Center for Human-Compatible AI", role: "Research Scientist", current: true },
    ],
    homepage: "https://acritch.com/",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Argues 'multi-multi delegation' — coordinating many AIs with many stakeholders — is the distinctive existential AI problem.",
        quotes: [
          {
            text:
              "Multi-multi delegation should be the focus of AI safety research. Many stakeholders, many AIs, coordinating under uncertainty.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Research Considerations for Human Existential Safety (ARCHES)",
              url: "https://arxiv.org/pdf/2006.04948",
              medium: "paper",
              publisher: "arXiv",
              date: "2020",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "joseph-carlsmith",
    name: "Joseph Carlsmith",
    tagline: "Open Philanthropy researcher; 'Is Power-Seeking AI an Existential Risk?'",
    summary:
      "Philosopher and senior research analyst at Open Philanthropy whose 2021 report on power-seeking AI produced the most cited quantitative decomposition of the existential AI risk argument.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Open Philanthropy", role: "Senior Research Analyst", current: true },
    ],
    homepage: "https://joecarlsmith.com/",
    twitter: "jkcarlsmith",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Decomposes existential risk into a chain of conditional claims (APS-AI possible, deployed, misaligned, scheming, humans lose control).",
        quotes: [
          {
            text:
              "My overall estimate of the probability of existential catastrophe from misaligned AI by 2070 is about 10%.",
            date: "2022-06-23",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Is Power-Seeking AI an Existential Risk?",
              url: "https://arxiv.org/pdf/2206.13353",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-06-23",
            },
          },
        ],
      },
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues misaligned power-seeking AI is a substantial existential risk this century and the case requires only weak premises about agentic capabilities.",
        quotes: [
          {
            text:
              "My current estimate is that the probability of existential catastrophe from power-seeking, misaligned AI by 2070 is more than 10%.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            context: "Updated estimate after the original report; revised upward.",
            source: {
              title: "Is Power-Seeking AI an Existential Risk?",
              url: "https://arxiv.org/abs/2206.13353",
              medium: "paper",
              publisher: "arXiv / Open Philanthropy",
              date: "2022",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.1,
        date: "2022-06-23",
        definition: "Probability of existential catastrophe from misaligned AI by 2070.",
        source: {
          title: "Is Power-Seeking AI an Existential Risk?",
          url: "https://arxiv.org/pdf/2206.13353",
          medium: "paper",
          publisher: "arXiv",
          date: "2022-06-23",
        },
      },
      {
        value: [0.1, 0.5],
        date: "2022",
        definition: "Existential catastrophe from misaligned power-seeking AI by 2070; revised range.",
        source: {
          title: "Is Power-Seeking AI an Existential Risk?",
          url: "https://arxiv.org/abs/2206.13353",
          medium: "paper",
          publisher: "Open Philanthropy",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "samuel-butler",
    name: "Samuel Butler",
    tagline: "Victorian novelist; proto-AI-risk thinker (1835–1902)",
    summary:
      "English writer whose 1863 essay 'Darwin Among the Machines' made the earliest sustained argument that machines would out-evolve humans and should be destroyed. Appears here for historical continuity.",
    categories: ["public-intellectual", "theorist"],
    affiliations: [
      { org: "Independent writer", role: "Essayist and novelist", end: "1902", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Samuel_Butler_(novelist)",
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "endorses",
        summary:
          "Argued in 1863 — roughly 160 years before the Pause letter — that humanity should destroy intelligent machines before they displaced humans.",
        quotes: [
          {
            text:
              "Our opinion is that war to the death should be instantly proclaimed against them. Every machine of every sort should be destroyed by the well-wisher of his species.",
            date: "1863-06-13",
            fidelity: "direct",
            source: {
              title: "Darwin Among the Machines",
              url: "https://en.wikisource.org/wiki/Darwin_among_the_Machines",
              medium: "article",
              publisher: "The Press (Christchurch, NZ)",
              date: "1863-06-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "irving-good",
    name: "Irving John Good",
    tagline: "British mathematician; articulated 'intelligence explosion' in 1965 (1916–2009)",
    summary:
      "Bletchley Park cryptographer whose 1965 paper 'Speculations Concerning the First Ultraintelligent Machine' originated the intelligence explosion argument later refined by Bostrom, Yudkowsky, and others.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Virginia Tech", role: "Professor of Statistics", end: "2009", current: false },
      { org: "Bletchley Park (Hut 8)", role: "Statistician working with Alan Turing", end: "1945", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/I._J._Good",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Coined the intelligence-explosion argument six decades before contemporary AI discourse.",
        quotes: [
          {
            text:
              "The first ultraintelligent machine is the last invention that man need ever make, provided that the machine is docile enough to tell us how to keep it under control.",
            date: "1965",
            fidelity: "direct",
            source: {
              title: "Speculations Concerning the First Ultraintelligent Machine",
              url: "https://www.sciencedirect.com/science/article/pii/S0065245808604180",
              medium: "paper",
              publisher: "Advances in Computers",
              date: "1965",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "norbert-wiener",
    name: "Norbert Wiener",
    tagline: "Founder of cybernetics (1894–1964)",
    summary:
      "MIT mathematician whose 1960 Science paper 'Some Moral and Technical Consequences of Automation' is the earliest systematic statement of what later became the alignment problem.",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "MIT", role: "Professor", end: "1964", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Norbert_Wiener",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argued automated systems operating on imperfectly specified goals pose grave risks — the original articulation of the specification problem.",
        quotes: [
          {
            text:
              "If we use, to achieve our purposes, a mechanical agency with whose operation we cannot interfere effectively… we had better be quite sure that the purpose put into the machine is the purpose which we really desire.",
            date: "1960-05-06",
            fidelity: "direct",
            source: {
              title: "Some Moral and Technical Consequences of Automation",
              url: "https://www.science.org/doi/10.1126/science.131.3410.1355",
              medium: "paper",
              publisher: "Science",
              date: "1960-05-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

  {
    id: "jaron-lanier",
    name: "Jaron Lanier",
    tagline: "Computer scientist; VR pioneer; AI skeptic",
    summary:
      "Microsoft Research interdisciplinary scientist who rejects the 'AI' frame entirely, arguing what we call AI is compressed human collaboration. Publicly critical of both extinction framings and unchecked deployment.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "Microsoft Research", role: "Prime Unifying Scientist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jaron_Lanier",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues the term 'AI' obscures that what we have are tools built from humans' labour and data; reframes safety as data dignity.",
        quotes: [
          {
            text:
              "There is no AI. There is only a new form of social collaboration.",
            date: "2023-04-20",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jaron Lanier — There Is No A.I.",
              url: "https://www.newyorker.com/science/annals-of-artificial-intelligence/there-is-no-ai",
              medium: "article",
              publisher: "The New Yorker",
              date: "2023-04-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-24",
  },

];
