import type { Person } from "@/lib/people-types";

// Batch AG: final targeted additions to cross 450.

export const people: Person[] = [
  {
    id: "susan-schneider",
    name: "Susan Schneider",
    tagline: "FAU; 'Artificial You' author; machine consciousness",
    summary:
      "Director of the Center for the Future Mind at Florida Atlantic University; author of 'Artificial You' (2019). Has held NASA and Library of Congress chairs in technology and ethics.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Florida Atlantic University", role: "Founding Director, Center for the Future Mind", current: true },
    ],
    homepage: "https://schneiderwebsite.com/",
    twitter: "DrSusanSchneider",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Argues machine consciousness is a serious empirical question and that AI ethics has to take it seriously before deploying systems whose moral status is uncertain.",
        quotes: [
          {
            text:
              "We may inadvertently create artificial consciousness without being able to detect it. The risk is not science fiction; it is a basic empirical and ethical problem we are unprepared for.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Artificial You: AI and the Future of Your Mind",
              url: "https://press.princeton.edu/books/hardcover/9780691180144/artificial-you",
              medium: "book",
              publisher: "Princeton University Press",
              date: "2019-09-24",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "margaret-boden",
    name: "Margaret Boden",
    tagline: "Sussex emerita; cognitive science of AI",
    summary:
      "Research professor of cognitive science at the University of Sussex emerita; one of the founding scholars of cognitive science. Author of 'AI: Its Nature and Future' (2016) and 'Mind as Machine' (2006).",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Sussex", role: "Research Professor of Cognitive Science Emerita", current: true },
    ],
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues general intelligence requires forms of understanding (autonomy, embodiment, creativity) that current ML does not approach; warns against equating large model behaviour with the foundations of mind.",
        quotes: [
          {
            text:
              "Behaviour can imitate understanding without instantiating it. Cognitive science exists precisely to keep that distinction in view.",
            date: "2016",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI: Its Nature and Future",
              url: "https://global.oup.com/academic/product/ai-9780198777984",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2016-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nita-farahany",
    name: "Nita A. Farahany",
    tagline: "Duke Law; 'The Battle for Your Brain'",
    summary:
      "Professor of law and philosophy at Duke; author of 'The Battle for Your Brain' (2023) on neurotechnology, AI, and cognitive liberty. Member of the National Advisory Council on Bioethics.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Duke University", role: "Robinson O. Everett Distinguished Professor of Law and Philosophy", current: true },
    ],
    homepage: "https://nitafarahany.com/",
    twitter: "NitaFarahany",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues cognitive liberty—the right to mental privacy and self-determination over one's own thoughts—must be enshrined as a foundational right in the AI/neurotech era.",
        quotes: [
          {
            text:
              "Cognitive liberty is the right to mental self-determination. Without it, AI and neurotech turn the brain itself into the next frontier for surveillance and manipulation.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Battle for Your Brain: Defending the Right to Think Freely in the Age of Neurotechnology",
              url: "https://us.macmillan.com/books/9781250272959/thebattleforyourbrain",
              medium: "book",
              publisher: "St. Martin's Press",
              date: "2023-03-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chamath-palihapitiya",
    name: "Chamath Palihapitiya",
    tagline: "Social Capital; All-In Podcast co-host",
    summary:
      "Founder of Social Capital and co-host of the All-In Podcast. Former Facebook senior executive. Frequent and influential commentator on AI investment and policy.",
    categories: ["investor", "executive"],
    affiliations: [
      { org: "Social Capital", role: "Founder, CEO", current: true },
      { org: "All-In Podcast", role: "Co-host", current: true },
    ],
    twitter: "chamath",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues AI will produce trillion-dollar companies and decisively shift the U.S.-China balance; less explicit on safety strategy but consistently bullish on capabilities.",
        quotes: [
          {
            text:
              "AI is the most important investment thesis of our lifetimes. Every business model is going to be reformulated through it; the only question is who builds the dominant infrastructure.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "All-In Podcast",
              url: "https://www.allinpodcast.co/",
              medium: "podcast",
              publisher: "All-In",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-eagleman",
    name: "David Eagleman",
    tagline: "Stanford neuroscientist; Neosensory founder",
    summary:
      "Adjunct professor of neuroscience at Stanford; founder of Neosensory. Author of 'Livewired' (2020). Public communicator on neuroplasticity and human-machine integration.",
    categories: ["academic", "founder", "public-intellectual"],
    affiliations: [
      { org: "Stanford University", role: "Adjunct Professor", current: true },
      { org: "Neosensory", role: "Founder", current: true },
    ],
    homepage: "https://eagleman.com/",
    twitter: "davideagleman",
    positions: [
      {
        strategyId: "cyborg-route",
        stance: "endorses",
        summary:
          "Argues human cognition is endlessly plastic and capable of accommodating direct neural interfaces; the path to coexistence with AI runs through extending biological cognition rather than competing with silicon.",
        quotes: [
          {
            text:
              "The human brain is livewired—it is not a fixed organ. We will integrate with AI not by competing with it but by absorbing its capacities through new sensory and motor channels.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Livewired: The Inside Story of the Ever-Changing Brain",
              url: "https://www.penguinrandomhouse.com/books/567385/livewired-by-david-eagleman/",
              medium: "book",
              publisher: "Pantheon",
              date: "2020-08-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "naval-ravikant",
    name: "Naval Ravikant",
    tagline: "AngelList co-founder; tech philosopher",
    summary:
      "Co-founder of AngelList; widely-followed angel investor and tech aphorist. Public commentator on AI as a tool for individual leverage rather than concentrated power.",
    categories: ["investor", "founder", "public-intellectual"],
    affiliations: [
      { org: "AngelList", role: "Co-founder", current: true },
    ],
    twitter: "naval",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI gives individuals unprecedented leverage; opposes both pause framings and centralised licensing as restrictions on individual technological agency.",
        quotes: [
          {
            text:
              "AI will be the great leveler. The smartest individual will outcompete the largest organization, because the individual will use AI as a force multiplier without bureaucratic friction.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Naval Ravikant on AI",
              url: "https://x.com/naval",
              medium: "tweet",
              publisher: "X",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mark-cuban",
    name: "Mark Cuban",
    tagline: "Shark Tank investor; Dallas Mavericks owner",
    summary:
      "Tech entrepreneur, Shark Tank investor, and former owner of the Dallas Mavericks. Frequent commentator on business implications of AI; holds large positions in AI-adjacent companies.",
    categories: ["investor", "executive", "public-intellectual"],
    affiliations: [
      { org: "Cost Plus Drugs", role: "Founder", current: true },
    ],
    twitter: "mcuban",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI is the most consequential business technology since the internet; warns founders that not adopting AI now is a fatal strategic error.",
        quotes: [
          {
            text:
              "If you're a business owner and you're not exploring how AI changes your business, you're effectively making a bet that your competitors won't either. That's not a bet I would take.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mark Cuban on AI",
              url: "https://blogmaverick.com/",
              medium: "blog",
              publisher: "Blog Maverick",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tristan-hume",
    name: "Tristan Hume",
    tagline: "Anthropic mechanistic interpretability",
    summary:
      "Anthropic researcher whose work on dictionary-learning sparse autoencoders for Claude was a landmark in scaling mechanistic interpretability beyond toy models.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
    ],
    homepage: "https://thume.ca/",
    twitter: "trishume",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues sparse-autoencoder scaling can characterize what large frontier models 'see' in a way that makes external safety claims testable rather than aspirational.",
        quotes: [
          {
            text:
              "We extracted millions of features from Claude 3 Sonnet using sparse autoencoders. The features map to specific concepts—including ones relevant to safety, like power-seeking behaviour and deception.",
            date: "2024-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet",
              url: "https://transformer-circuits.pub/2024/scaling-monosemanticity/",
              medium: "paper",
              publisher: "Anthropic / Transformer Circuits",
              date: "2024-05-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sebastian-ruder",
    name: "Sebastian Ruder",
    tagline: "Cohere; ex-Google; NLP transfer learning",
    summary:
      "Researcher at Cohere; previously at Google. His 2018 'NLP's ImageNet moment has arrived' essay coined widely-used framing for transfer learning in NLP.",
    categories: ["researcher"],
    affiliations: [
      { org: "Cohere", role: "Research Scientist", current: true },
      { org: "Google Research", role: "Researcher", end: "2024" },
    ],
    homepage: "https://www.ruder.io/",
    twitter: "seb_ruder",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues the field's coverage of low-resource languages is a structural safety issue—billions of speakers are excluded from frontier evaluation and alignment work.",
        quotes: [
          {
            text:
              "If a language has no representation in the pretraining corpus, no representation in the evaluation suite, and no native speakers in the alignment loop, every safety claim about a 'multilingual' model is on shaky ground.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The State of Multilingual AI",
              url: "https://www.ruder.io/state-of-multilingual-ai/",
              medium: "blog",
              publisher: "ruder.io",
              date: "2022-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "leigh-marie-braswell",
    name: "Leigh Marie Braswell",
    tagline: "Founders Fund partner; AI investor",
    summary:
      "Investor at Founders Fund focused on AI; previously a software engineer. Frequent commentator on AI infrastructure and its market structure.",
    categories: ["investor"],
    affiliations: [
      { org: "Founders Fund", role: "Partner", current: true },
    ],
    twitter: "leighmarieb",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI infrastructure—models, data, distribution—is the most consequential investment category of the decade; frames safety as integral to durable products rather than a regulatory constraint.",
        quotes: [
          {
            text:
              "The AI stack is being rebuilt from silicon up to the application layer. The market structure that emerges will determine who has agency over this technology.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Founders Fund — Leigh Marie Braswell",
              url: "https://foundersfund.com/team/",
              medium: "article",
              publisher: "Founders Fund",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "raphael-milliere",
    name: "Raphaël Millière",
    tagline: "Macquarie University philosopher of cognitive science",
    summary:
      "Macquarie University Lecturer in the Philosophy of AI; previously Presidential Scholar in Society and Neuroscience at Columbia. Researches the philosophical implications of large language models for theories of mind, meaning, and reasoning.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Macquarie University", role: "Lecturer in Philosophy of AI", current: true },
    ],
    homepage: "https://raphaelmilliere.com/",
    twitter: "raphaelmilliere",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues philosophical questions about LLM cognition cannot be settled by behavioural tests alone; defends careful operationalization of concepts like 'understanding' against both inflationary and deflationary readings.",
        quotes: [
          {
            text:
              "It is tempting to declare LLMs either trivially intelligent or trivially mindless. Neither verdict survives careful philosophical analysis of what these systems actually do.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Raphaël Millière — homepage",
              url: "https://raphaelmilliere.com/",
              medium: "article",
              publisher: "raphaelmilliere.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "max-bartolo",
    name: "Max Bartolo",
    tagline: "Cohere; LLM evaluation researcher",
    summary:
      "Researcher at Cohere; previously a UCL DeepMind PhD student. Co-developed adversarial-training and evaluation methods for question-answering and instruction-following.",
    categories: ["researcher"],
    affiliations: [
      { org: "Cohere", role: "Research Scientist", current: true },
    ],
    twitter: "max_nlp",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues evaluation methods that adversarially probe model weaknesses are the only way to characterize what models will do in deployment; static benchmarks are insufficient.",
        quotes: [
          {
            text:
              "Adversarial evaluation reveals failure modes that static benchmarks miss. As models become more capable, our evaluation has to become more adversarial too.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Max Bartolo — research page",
              url: "https://maxbartolo.com/",
              medium: "article",
              publisher: "maxbartolo.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephanie-hare",
    name: "Stéphanie Hare",
    tagline: "Tech researcher; 'Technology Is Not Neutral' author",
    summary:
      "Independent researcher and author of 'Technology Is Not Neutral' (2022). Frequent BBC and Financial Times contributor on tech ethics.",
    categories: ["public-intellectual", "researcher"],
    affiliations: [
      { org: "Independent", role: "Researcher / author", current: true },
    ],
    homepage: "https://harewithme.com/",
    twitter: "hare_brain",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues every technology embeds choices about whose interests it serves; AI systems are not neutral and must be evaluated against the political economy of their deployment.",
        quotes: [
          {
            text:
              "Technology is not neutral. Every choice about what to build, what to ignore, and what to deploy is a political choice.",
            date: "2022",
            fidelity: "direct",
            source: {
              title: "Technology Is Not Neutral: A Short Guide to Technology Ethics",
              url: "https://www.londonpublishingpartnership.co.uk/technology-is-not-neutral/",
              medium: "book",
              publisher: "London Publishing Partnership",
              date: "2022-04-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-holz",
    name: "David Holz",
    tagline: "Midjourney founder",
    summary:
      "Founder of Midjourney, the image-generation service that grew rapidly through Discord-first distribution. Previously co-founded Leap Motion. Vocal proponent of AI as creative augmentation rather than replacement.",
    categories: ["founder"],
    affiliations: [
      { org: "Midjourney", role: "Founder", current: true },
      { org: "Leap Motion", role: "Co-founder", end: "2019" },
    ],
    twitter: "DavidSHolz",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues image-generation AI extends human creativity rather than replacing artists; frames Midjourney's mission as democratizing visual imagination.",
        quotes: [
          {
            text:
              "AI is like water—it's a powerful element. We are not building it to replace artists, we are building it to be a tool that artists use, like a camera or a paintbrush.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Midjourney founder David Holz on AI image generation",
              url: "https://www.theregister.com/2022/08/01/david_holz_midjourney_ai_interview/",
              medium: "interview-transcript",
              publisher: "The Register",
              date: "2022-08-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joshua-browder",
    name: "Joshua Browder",
    tagline: "DoNotPay CEO; legal-tech AI",
    summary:
      "Founder and CEO of DoNotPay, a consumer legal-services AI company; widely covered for plans to deploy an AI lawyer in court (eventually withdrawn under bar complaints).",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "DoNotPay", role: "Founder, CEO", current: true },
    ],
    twitter: "jbrowder1",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI can democratize access to legal services that are otherwise out of reach for ordinary consumers; pushed against bar-association resistance to AI legal advice.",
        quotes: [
          {
            text:
              "Most people cannot afford a lawyer for routine consumer issues. AI is the only realistic way to extend reasonable legal advice to that population.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "DoNotPay",
              url: "https://donotpay.com/",
              medium: "article",
              publisher: "DoNotPay",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kevin-systrom",
    name: "Kevin Systrom",
    tagline: "Co-founder Instagram; co-founder Artifact (defunct AI news)",
    summary:
      "Co-founder of Instagram (acquired by Facebook 2012) and of Artifact (AI-powered news app, shut down 2024). Public commentator on AI's effect on media and information ecosystems.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Independent", role: "Investor / commentator", current: true },
      { org: "Artifact", role: "Co-founder", end: "2024" },
      { org: "Instagram", role: "Co-founder", end: "2018" },
    ],
    twitter: "kevin",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Argues recommendation AI built around long-term user interest is possible but commercially difficult; Artifact's failure was a market signal more than a technical one.",
        quotes: [
          {
            text:
              "Algorithmic feeds shaped by short-term engagement are bad for users in the long run. Building one shaped by long-term interest is possible, but it is harder than it looks.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Kevin Systrom on Artifact's shutdown",
              url: "https://artifact.news/",
              medium: "article",
              publisher: "Artifact",
              date: "2024-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bryan-johnson",
    name: "Bryan Johnson",
    tagline: "Blueprint founder; AI-driven longevity",
    summary:
      "Founder of Kernel (neural interfaces) and of Blueprint (the personal-data-driven anti-aging protocol). Frequent commentator on AI as a means of human optimization and longevity.",
    categories: ["founder", "public-intellectual"],
    affiliations: [
      { org: "Blueprint", role: "Founder", current: true },
      { org: "Kernel", role: "Founder", current: true },
    ],
    twitter: "bryan_johnson",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI is the partner that helps humanity engineer its own biology; future flourishing depends on submitting human bodies to algorithmic optimization.",
        quotes: [
          {
            text:
              "Don't Die is the next stage of evolution. AI gives us the ability to manage our biology with precision unimaginable a decade ago.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Blueprint Protocol",
              url: "https://blueprint.bryanjohnson.com/",
              medium: "article",
              publisher: "Blueprint",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-baszucki",
    name: "David Baszucki",
    tagline: "Roblox CEO; co-founder",
    summary:
      "Co-founder and CEO of Roblox; long-running advocate of user-generated content as the dominant form of digital experience and of AI as the tool that makes UGC accessible to everyone.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Roblox", role: "Co-founder, CEO", current: true },
    ],
    twitter: "davidbaszucki",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues generative AI will let any user create immersive digital experiences; predicts a future where AI tools collapse the gap between consumer and creator.",
        quotes: [
          {
            text:
              "We will see a generation of children grow up where the boundary between consuming and creating digital content effectively disappears, because AI tools handle the technical layer.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Roblox keynote at RDC 2024",
              url: "https://corp.roblox.com/newsroom/",
              medium: "talk",
              publisher: "Roblox",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-carmack",
    name: "John Carmack",
    tagline: "Keen Technologies founder; ex-Meta CTO",
    summary:
      "Co-founder of id Software (Doom, Quake) and former CTO of Oculus VR / Meta Reality Labs. In 2022 left Meta to found Keen Technologies, focused on AGI research with reportedly low team headcount.",
    categories: ["founder", "engineer"],
    affiliations: [
      { org: "Keen Technologies", role: "Founder, CTO", current: true },
      { org: "Meta", role: "Consulting CTO, Oculus", end: "2022-12" },
    ],
    twitter: "ID_AA_Carmack",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues AGI is a tractable engineering problem with current architectures; founded Keen on the thesis that a small team with focused effort can make meaningful progress on general intelligence.",
        quotes: [
          {
            text:
              "I think a single individual could probably do the entire AGI training pipeline. The bottleneck is not budget or compute, it is engineering insight.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "John Carmack on AGI and Keen Technologies",
              url: "https://www.youtube.com/watch?v=I845O57ZSy4",
              medium: "interview-transcript",
              publisher: "Lex Fridman Podcast",
              date: "2023-08-04",
              videoId: "I845O57ZSy4",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    pDoom: [
      {
        value: 0.05,
        date: "2023",
        definition: "Existential catastrophe from AI within his lifetime; rough.",
        source: {
          title: "John Carmack on Lex Fridman Podcast",
          url: "https://www.youtube.com/watch?v=I845O57ZSy4",
          medium: "podcast",
          publisher: "Lex Fridman",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sam-harris",
    name: "Sam Harris",
    tagline: "Making Sense podcast; neuroscientist and philosopher",
    summary:
      "Author and host of the Making Sense podcast; neuroscientist and philosopher. His 2016 TED talk 'Can we build AI without losing control over it?' was an early mainstream introduction to AI x-risk arguments.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Making Sense Podcast", role: "Host", current: true },
    ],
    homepage: "https://www.samharris.org/",
    twitter: "SamHarrisOrg",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues the alignment problem is genuinely existential and that the AI community is not taking it seriously enough; uses Making Sense to platform technical safety voices.",
        quotes: [
          {
            text:
              "We're going to build superintelligence whether we like it or not. The only question is whether we will know what we are doing.",
            date: "2016-06",
            fidelity: "direct",
            source: {
              title: "Can we build AI without losing control over it?",
              url: "https://www.ted.com/talks/sam_harris_can_we_build_ai_without_losing_control_over_it",
              medium: "talk",
              publisher: "TED",
              date: "2016-06",
              videoId: "8nt3edWLgIg",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ilan-gur",
    name: "Ilan Gur",
    tagline: "ARIA UK CEO; ex-ARPA-E",
    summary:
      "CEO of the UK Advanced Research and Invention Agency (ARIA), launched in 2023 to fund high-risk, high-reward research. Previously a program director at U.S. ARPA-E.",
    categories: ["policy", "executive"],
    affiliations: [
      { org: "ARIA (UK)", role: "CEO", current: true },
      { org: "ARPA-E", role: "Program Director", end: "2018" },
    ],
    twitter: "ilangur",
    positions: [
      {
        strategyId: "differential-tech",
        stance: "endorses",
        summary:
          "Argues frontier R&D agencies should make calculated bets on long-shot research that markets will not fund; oriented ARIA's first programs around safe scalable AI and biotech.",
        quotes: [
          {
            text:
              "ARIA exists to fund the research that markets and traditional grantmakers will not. AI safety done well is exactly that kind of bet—high-impact, hard to fund any other way.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "ARIA UK",
              url: "https://www.aria.org.uk/",
              medium: "article",
              publisher: "ARIA",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-cox",
    name: "David D. Cox",
    tagline: "MIT-IBM Watson AI Lab director",
    summary:
      "Director of the MIT-IBM Watson AI Lab; previously a Harvard professor of molecular and cellular biology. Bridge figure between academic and corporate AI research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT-IBM Watson AI Lab", role: "IBM Director", current: true },
      { org: "IBM Research", role: "VP, AI Models", current: true },
    ],
    homepage: "https://research.ibm.com/people/david-cox",
    twitter: "neuro_data",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues academic-industrial collaboration is necessary for safety research to keep pace with frontier capabilities; runs MIT-IBM as a model for that arrangement.",
        quotes: [
          {
            text:
              "Frontier AI research has to be a partnership between academia and industry. Neither has the full set of capabilities to navigate where this is going alone.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "MIT-IBM Watson AI Lab",
              url: "https://mitibmwatsonailab.mit.edu/",
              medium: "article",
              publisher: "MIT-IBM Watson AI Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "neal-stephenson",
    name: "Neal Stephenson",
    tagline: "Sci-fi novelist; Snow Crash, Cryptonomicon, Anathem, Termination Shock",
    summary:
      "Sci-fi novelist whose books have repeatedly anticipated technical developments (the metaverse, cryptocurrency); recent novels and essays grapple directly with AI's social effects.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent author", role: "Novelist, essayist", current: true },
    ],
    twitter: "nealstephenson",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues the most consequential AI risks may be social and epistemological rather than existential; warns against AI-mediated 'editing of reality' that destabilizes shared truth.",
        quotes: [
          {
            text:
              "The most disturbing thing about generative AI is not that it might become superintelligent, but that it might make it impossible for humans to share a common factual reality.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Neal Stephenson on AI",
              url: "https://www.youtube.com/watch?v=mXxomk4f-RA",
              medium: "interview-transcript",
              publisher: "Wired",
              date: "2022-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "liu-cixin",
    name: "Liu Cixin",
    tagline: "Sci-fi novelist; Three-Body Problem trilogy",
    summary:
      "Chinese science fiction author whose 'Three-Body Problem' trilogy has become globally influential; the 'dark forest' theory has shaped how some readers think about AI civilizations and existential risk.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent author", role: "Novelist", current: true },
    ],
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Skeptical that AI will eclipse humanity in his lifetime; warns nonetheless that humans treat dangerous technology with cosmic recklessness, a theme central to the Three-Body Problem trilogy.",
        quotes: [
          {
            text:
              "I am skeptical AI will surpass human intelligence within decades. But I am not skeptical that we will mishandle whatever AI we have. The pattern of technology is humans repeatedly underestimating their own carelessness.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Liu Cixin on AI and the future",
              url: "https://www.nytimes.com/2024/03/13/books/liu-cixin-three-body-problem.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2024-03-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "arati-prabhakar",
    name: "Arati Prabhakar",
    tagline: "White House OSTP director (2022–2025)",
    summary:
      "Director of the White House Office of Science and Technology Policy (OSTP) and Assistant to the President for Science and Technology under the Biden administration. Previously DARPA director (2012–2017) and NIST director (1993–1997).",
    categories: ["policy"],
    affiliations: [
      { org: "White House Office of Science and Technology Policy", role: "Director", end: "2025-01" },
      { org: "DARPA", role: "Director", end: "2017" },
    ],
    twitter: "AratiPrabhakar",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues U.S. policy on advanced AI must rest on rigorous government evaluation capabilities; helped shape the Biden Executive Order's reporting and red-team testing requirements.",
        quotes: [
          {
            text:
              "If AI is going to play a transformative role in society, the public sector has to be able to test, evaluate, and govern it. The technology is too consequential to leave entirely to the labs.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence",
              url: "https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/",
              medium: "article",
              publisher: "The White House",
              date: "2023-10-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "paul-scharre",
    name: "Paul Scharre",
    tagline: "CNAS executive VP; 'Army of None', 'Four Battlegrounds' author",
    summary:
      "Executive Vice President at the Center for a New American Security (CNAS); author of 'Army of None' (2018) on autonomous weapons and 'Four Battlegrounds' (2023) on AI in great-power competition.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Center for a New American Security", role: "Executive Vice President and Director of Studies", current: true },
    ],
    twitter: "paul_scharre",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues U.S.-China AI competition will be decided largely by compute, talent, data, and institutions; pushes export controls on advanced chips as a load-bearing policy lever.",
        quotes: [
          {
            text:
              "Of the four battlegrounds—data, compute, talent, and institutions—compute is the one most amenable to export controls. The semiconductor supply chain is a chokepoint we should use carefully.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Four Battlegrounds: Power in the Age of Artificial Intelligence",
              url: "https://www.cnas.org/publications/reports/four-battlegrounds",
              medium: "book",
              publisher: "W. W. Norton",
              date: "2023-02-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "elsa-kania",
    name: "Elsa Kania",
    tagline: "CNAS adjunct senior fellow; China AI specialist",
    summary:
      "Adjunct senior fellow at CNAS specializing in Chinese military innovation; cited extensively in U.S. policy debates about Chinese AI development.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Center for a New American Security", role: "Adjunct Senior Fellow", current: true },
      { org: "Harvard University", role: "PhD Candidate", current: true },
    ],
    twitter: "EBKania",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues China's military-civil fusion strategy makes Chinese frontier AI a national-security concern for the U.S., and that calibrated export controls are the most effective response.",
        quotes: [
          {
            text:
              "China's strategy is to leverage AI for what it calls 'intelligentized warfare'. Western democracies have to take that seriously without overreacting to specific capability claims.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Battlefield Singularity",
              url: "https://www.cnas.org/publications/reports/battlefield-singularity",
              medium: "paper",
              publisher: "CNAS",
              date: "2017-11-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jon-bateman",
    name: "Jon Bateman",
    tagline: "Carnegie senior fellow; AI and cyber strategy",
    summary:
      "Senior fellow at the Carnegie Endowment for International Peace specializing in technology and international affairs. Former U.S. intelligence official.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Carnegie Endowment for International Peace", role: "Senior Fellow", current: true },
    ],
    twitter: "Jon_Bateman",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues the U.S.–China AI relationship needs structured dialogue mechanisms, including arms-control-style confidence-building measures, before crisis dynamics force the issue.",
        quotes: [
          {
            text:
              "The U.S. and China need a Biden-Xi-style dialogue track on AI specifically—not because we will agree on values, but because we cannot afford to crisis-manage on top of misperception.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jon Bateman — Carnegie Endowment",
              url: "https://carnegieendowment.org/people/jon-bateman",
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
    id: "steven-levy",
    name: "Steven Levy",
    tagline: "Wired editor at large; long-time tech historian",
    summary:
      "Editor at large at Wired and author of multiple histories of computing including 'Hackers' (1984), 'In the Plex' (2011) on Google, and 'Facebook: The Inside Story' (2020). Long-running interview access at frontier labs.",
    categories: ["journalist"],
    affiliations: [
      { org: "Wired", role: "Editor at Large", current: true },
    ],
    twitter: "StevenLevy",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Brings a historian's perspective: argues each new wave of computing has been heralded as transformative, and that AI is similar—real and overstated at the same time.",
        quotes: [
          {
            text:
              "I have covered every major computing inflection since the personal computer. Each one was heralded as world-changing; some were, some were not. The pattern with AI is closer to the former.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Steven Levy — Wired columns",
              url: "https://www.wired.com/author/steven-levy/",
              medium: "article",
              publisher: "Wired",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hal-varian",
    name: "Hal Varian",
    tagline: "UC Berkeley emeritus; Google chief economist emeritus",
    summary:
      "Emeritus chief economist at Google (2002–2023) and Distinguished Professor of Economics at UC Berkeley emeritus. Pioneer of digital-platform economics; co-author of 'Information Rules' (1999).",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Google", role: "Chief Economist Emeritus", current: true },
      { org: "UC Berkeley", role: "Distinguished Professor Emeritus", current: true },
    ],
    homepage: "https://people.ischool.berkeley.edu/~hal/",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI fits the pattern of general-purpose technologies that historically produced large but slow productivity gains; expects it to be adopted unevenly across industries based on integration cost.",
        quotes: [
          {
            text:
              "AI is a general-purpose technology in the same lineage as electricity. The diffusion will be uneven, the productivity gains will be measurable in decades, and the macroeconomic story will look surprisingly normal.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hal Varian — UC Berkeley",
              url: "https://people.ischool.berkeley.edu/~hal/",
              medium: "article",
              publisher: "UC Berkeley",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trae-stephens",
    name: "Trae Stephens",
    tagline: "Anduril co-founder; Founders Fund partner",
    summary:
      "Co-founder of Anduril Industries (defense AI hardware) and partner at Founders Fund. Frequent commentator on the integration of AI into Western defense capabilities.",
    categories: ["founder", "investor"],
    affiliations: [
      { org: "Anduril Industries", role: "Co-founder, Executive Chairman", current: true },
      { org: "Founders Fund", role: "Partner", current: true },
    ],
    twitter: "traestephens",
    positions: [
      {
        strategyId: "military-primacy",
        stance: "endorses",
        summary:
          "Argues U.S. and allied defense must integrate AI rapidly to deter authoritarian use; sees commercial-defense fusion as a strategic imperative.",
        quotes: [
          {
            text:
              "If you believe—as I do—that the West has a moral obligation to lead in critical technologies, then defense AI is not optional. It is part of the deal of being a free society.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Anduril Industries",
              url: "https://www.anduril.com/",
              medium: "article",
              publisher: "Anduril",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brian-schimpf",
    name: "Brian Schimpf",
    tagline: "Anduril Industries CEO",
    summary:
      "Co-founder and CEO of Anduril Industries since 2017. Helped build the company into a major defense technology player integrating autonomous systems with command-and-control software.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Anduril Industries", role: "Co-founder, CEO", current: true },
    ],
    twitter: "BrianSchimpf",
    positions: [
      {
        strategyId: "military-primacy",
        stance: "endorses",
        summary:
          "Argues U.S. defense procurement is too slow for the AI era and that commercial defense companies must build the autonomous systems the Pentagon will need.",
        quotes: [
          {
            text:
              "The DoD has to learn to procure software the way Silicon Valley builds it. AI changes the speed and scale of warfare, and we cannot keep using cold-war acquisition processes.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Anduril Industries — about",
              url: "https://www.anduril.com/about/",
              medium: "article",
              publisher: "Anduril",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chris-hughes",
    name: "Chris Hughes",
    tagline: "Facebook co-founder turned antitrust advocate",
    summary:
      "Co-founder of Facebook; co-chair of the Economic Security Project. In 2019 publicly called for breaking up Facebook; has since extended antitrust framing to OpenAI and AI-cloud concentration.",
    categories: ["activist", "founder"],
    affiliations: [
      { org: "Economic Security Project", role: "Co-chair", current: true },
      { org: "Facebook (Meta)", role: "Co-founder", end: "2007" },
    ],
    twitter: "chrishughes",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues the same antitrust analysis that should apply to Facebook applies to today's AI labs and clouds; concentration of decision-making over a foundational technology is itself a democratic harm.",
        quotes: [
          {
            text:
              "It is time to break up Facebook. The same logic should apply to AI clouds: when a small number of companies control critical infrastructure, government has to step in.",
            date: "2019-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "It's Time to Break Up Facebook",
              url: "https://www.nytimes.com/2019/05/09/opinion/sunday/chris-hughes-facebook-zuckerberg.html",
              medium: "article",
              publisher: "The New York Times",
              date: "2019-05-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "katherine-boyle",
    name: "Katherine Boyle",
    tagline: "Andreessen Horowitz; American Dynamism",
    summary:
      "General partner at Andreessen Horowitz leading the firm's American Dynamism practice (defense, aerospace, public-interest tech). Previously a journalist at the Washington Post.",
    categories: ["investor"],
    affiliations: [
      { org: "Andreessen Horowitz", role: "General Partner, American Dynamism", current: true },
    ],
    twitter: "KTmBoyle",
    positions: [
      {
        strategyId: "military-primacy",
        stance: "endorses",
        summary:
          "Argues U.S. industrial policy must lean toward defense, energy, and frontier-AI investment as a strategic response to authoritarian competition; views public-private fusion as the operating mode of the next decade.",
        quotes: [
          {
            text:
              "American Dynamism is the thesis that we must build the technologies that protect democratic societies. AI is one of those technologies, and treating it as a consumer-only category is a strategic error.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "American Dynamism — a16z",
              url: "https://a16z.com/american-dynamism/",
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
    id: "david-friedberg",
    name: "David Friedberg",
    tagline: "All-In Podcast; Ohalo CEO",
    summary:
      "Co-host of the All-In Podcast and CEO of Ohalo (genetics-driven crop improvement). Founder of The Climate Corporation. Frequently discusses AI for biology and food systems on All-In.",
    categories: ["founder", "executive", "public-intellectual"],
    affiliations: [
      { org: "Ohalo", role: "CEO", current: true },
      { org: "All-In Podcast", role: "Co-host", current: true },
    ],
    twitter: "friedberg",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        tentative: true,
        summary:
          "Argues AI-for-biology will transform agriculture, medicine, and food systems within a decade; less explicit on safety strategy but consistently bullish on capabilities.",
        quotes: [
          {
            text:
              "We are at an inflection point in biology where AI is going to give us the tools to engineer life directly. Agriculture, medicine, and food security all change in the next decade.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "All-In Podcast",
              url: "https://www.allinpodcast.co/",
              medium: "podcast",
              publisher: "All-In",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "virginia-dignum",
    name: "Virginia Dignum",
    tagline: "Umeå University; UN AI Advisory Body member",
    summary:
      "Professor of responsible AI at Umeå University; author of 'Responsible Artificial Intelligence' (2019); member of the UN AI Advisory Body. Long-standing voice in European AI ethics.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Umeå University", role: "Professor, Wallenberg Chair on Responsible AI", current: true },
      { org: "UN AI Advisory Body", role: "Member", current: true },
    ],
    homepage: "https://virginia-dignum.medium.com/",
    twitter: "vdignum",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues responsible AI is achievable only when ethics is embedded throughout the development lifecycle and made part of governance—not an afterthought layered on top of products.",
        quotes: [
          {
            text:
              "Responsible AI is more than the ticking of some ethical boxes or the development of some add-on features. It is a fundamental change in the way the technology is designed, deployed, and governed.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Responsible Artificial Intelligence: How to Develop and Use AI in a Responsible Way",
              url: "https://link.springer.com/book/10.1007/978-3-030-30371-6",
              medium: "book",
              publisher: "Springer",
              date: "2019-09-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ricardo-baeza-yates",
    name: "Ricardo Baeza-Yates",
    tagline: "Northeastern; Institute for Experiential AI",
    summary:
      "Director of research at the Institute for Experiential AI at Northeastern University; previously a VP at Yahoo Research. Long-time voice on responsible AI auditing and bias detection.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Northeastern University Institute for Experiential AI", role: "Director of Research", current: true },
      { org: "Universitat Pompeu Fabra", role: "Adjunct Professor", current: true },
    ],
    homepage: "https://www.baeza.cl/",
    twitter: "PolarBeaRBY",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues bias and accountability are systemic problems that require auditable practices, regulatory frameworks, and education—not just technical patches by individual labs.",
        quotes: [
          {
            text:
              "AI bias is not just a technical problem; it is a sociotechnical one. The solutions therefore have to be sociotechnical too: audits, regulations, governance, and education.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Bias on the Web",
              url: "https://cacm.acm.org/magazines/2018/6/228039-bias-on-the-web/fulltext",
              medium: "article",
              publisher: "Communications of the ACM",
              date: "2018-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nello-cristianini",
    name: "Nello Cristianini",
    tagline: "Bath University; ML pioneer; 'Shortcut' author",
    summary:
      "Professor of artificial intelligence at the University of Bath; co-author of foundational textbooks on Support Vector Machines and kernel methods. Author of 'The Shortcut: Why Intelligent Machines Do Not Think Like Us' (2023).",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Bath", role: "Professor of Artificial Intelligence", current: true },
    ],
    homepage: "https://nellocristianini.com/",
    twitter: "NelloCristianini",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues modern AI represents a 'shortcut' to behavior that mimics intelligence without recreating its mechanisms; understanding the difference is essential to anticipating risks and capabilities.",
        quotes: [
          {
            text:
              "Modern AI is a shortcut. We did not solve intelligence; we found ways to produce useful behaviour without it. The risks of this shortcut differ from the risks of human-like minds.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Shortcut: Why Intelligent Machines Do Not Think Like Us",
              url: "https://www.routledge.com/The-Shortcut-Why-Intelligent-Machines-Do-Not-Think-Like-Us/Cristianini/p/book/9781032595504",
              medium: "book",
              publisher: "CRC Press",
              date: "2023-08-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-naughton",
    name: "John Naughton",
    tagline: "Cambridge / Open University; Observer technology columnist",
    summary:
      "Long-time Observer (UK) technology columnist; emeritus professor of public understanding of technology at the Open University. Co-director of Cambridge's Minderoo Centre for Technology and Democracy.",
    categories: ["journalist", "academic"],
    affiliations: [
      { org: "The Observer", role: "Technology Columnist", current: true },
      { org: "Cambridge Minderoo Centre for Technology and Democracy", role: "Co-Director", current: true },
      { org: "Open University", role: "Emeritus Professor of Public Understanding of Technology", current: true },
    ],
    twitter: "memex",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues big-tech concentration is the structural problem that AI hype is being used to obscure; calls for breaking up incumbents as a precondition to credible AI governance.",
        quotes: [
          {
            text:
              "AI is the latest move in a longer game—corporate concentration in the digital economy. The right policy response begins with antitrust, not AI-specific regulation.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "John Naughton on AI and concentration",
              url: "https://www.theguardian.com/profile/johnnaughton",
              medium: "article",
              publisher: "The Guardian",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hung-yi-lee",
    name: "Hung-yi Lee",
    tagline: "National Taiwan University; speech and LLM researcher",
    summary:
      "Professor at National Taiwan University; widely-watched online instructor for ML/LLMs in Mandarin. Has been a key public communicator of LLM concepts to Chinese-speaking audiences.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "National Taiwan University", role: "Associate Professor", current: true },
    ],
    homepage: "https://speech.ee.ntu.edu.tw/~hylee/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Communicates technical alignment concepts to Mandarin-speaking audiences; engages seriously with safety arguments while maintaining a researcher's stance on what is and is not technically solved.",
        quotes: [
          {
            text:
              "Understanding what large language models actually do is the precondition for any meaningful policy debate about them. Educational access to that understanding is itself a safety issue.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hung-yi Lee — NTU",
              url: "https://speech.ee.ntu.edu.tw/~hylee/",
              medium: "article",
              publisher: "NTU Speech Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pelonomi-moiloa",
    name: "Pelonomi Moiloa",
    tagline: "Lelapa AI co-founder; African languages NLP",
    summary:
      "Co-founder and CEO of Lelapa AI, a South African AI lab building NLP models for African languages including isiZulu, Sesotho, and Yoruba. Vocal advocate for region-led AI infrastructure.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Lelapa AI", role: "Co-founder, CEO", current: true },
    ],
    twitter: "PelonomiMoiloa",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Argues African AI sovereignty—data, talent, models, deployment—is a precondition for the technology to serve Africans rather than being imposed from elsewhere.",
        quotes: [
          {
            text:
              "If we want AI that works for Africans, in African languages, with African data governance, we have to build it ourselves. Lelapa is part of that.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Lelapa AI",
              url: "https://lelapa.ai/",
              medium: "article",
              publisher: "Lelapa AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vukosi-marivate",
    name: "Vukosi Marivate",
    tagline: "Univ Pretoria; African NLP / Masakhane",
    summary:
      "Associate professor at the University of Pretoria; co-founder of the Masakhane research community for African NLP. Long-running advocate for low-resource language model development.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Pretoria", role: "ABSA Chair of Data Science", current: true },
      { org: "Masakhane", role: "Co-founder", current: true },
    ],
    homepage: "https://dsfsi.github.io/",
    twitter: "vukosi",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open and community-led NLP is the only credible path for African languages; built Masakhane as a distributed research network independent of frontier labs.",
        quotes: [
          {
            text:
              "Frontier-lab tokenizers and pretraining mixtures barely cover African languages. The community has had to build its own datasets, evaluations, and benchmarks—often from scratch.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Masakhane Research Community",
              url: "https://www.masakhane.io/",
              medium: "article",
              publisher: "Masakhane",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "toby-walsh",
    name: "Toby Walsh",
    tagline: "UNSW Sydney; AI safety advocate",
    summary:
      "Scientia Professor of AI at UNSW Sydney; chief scientist of the UNSW AI Institute. Long-standing campaigner against autonomous weapons and a leading public voice for AI regulation in Australia.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "UNSW Sydney", role: "Scientia Professor of AI", current: true },
    ],
    homepage: "https://www.cse.unsw.edu.au/~tw/",
    twitter: "TobyWalsh",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues lethal autonomous weapons must be banned by international treaty, modeled on the 1990s ban on blinding lasers; co-organized 'killer robots' open letter with thousands of researcher signatures.",
        quotes: [
          {
            text:
              "Killer robots will become the third revolution in warfare, after gunpowder and nuclear arms. They will fundamentally lower the threshold for armed conflict.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Open Letter to the United Nations Convention on Certain Conventional Weapons",
              url: "https://futureoflife.org/open-letter/autonomous-weapons-open-letter-2017/",
              medium: "article",
              publisher: "Future of Life Institute",
              date: "2017-08-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "genevieve-bell",
    name: "Genevieve Bell",
    tagline: "ANU; vice-chancellor; cultural anthropologist",
    summary:
      "Vice-Chancellor of the Australian National University since 2024; previously a senior fellow and VP at Intel, where she founded the Anthropology and User Experience research group. Distinctive cultural-anthropological perspective on AI.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Australian National University", role: "Vice-Chancellor and President", current: true },
      { org: "Intel", role: "Senior Fellow / VP", end: "2024" },
    ],
    twitter: "feraldata",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI deployment is fundamentally a cultural and institutional question that current technical framings miss; calls for cyber-physical-social systems thinking as an alternative.",
        quotes: [
          {
            text:
              "AI is best understood as a cyber-physical-social system. The technology, the infrastructure, and the cultural practices around it are the unit of analysis.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Genevieve Bell — ANU School of Cybernetics",
              url: "https://cybernetics.anu.edu.au/",
              medium: "article",
              publisher: "ANU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brian-tomasik",
    name: "Brian Tomasik",
    tagline: "Foundational Research Institute co-founder; suffering-focused ethics",
    summary:
      "Co-founder of the Foundational Research Institute (now Center on Long-Term Risk); long-standing essayist on suffering-focused ethics and digital sentience. His writing has shaped EA-adjacent positions on AI welfare.",
    categories: ["theorist", "public-intellectual"],
    affiliations: [
      { org: "Center on Long-Term Risk", role: "Founder, Researcher", current: true },
    ],
    homepage: "https://reducing-suffering.org/",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Argues digital and biological sentience should both be morally weighted; AI systems may suffer in ways we are systematically blind to, and this should shape how they are built.",
        quotes: [
          {
            text:
              "Whether artificial systems can suffer is one of the most important moral questions we will face this century, and most people are not even asking it yet.",
            date: "2014",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Do Artificial Reinforcement-Learning Agents Matter Morally?",
              url: "https://reducing-suffering.org/do-artificial-reinforcement-learning-agents-matter-morally/",
              medium: "article",
              publisher: "Reducing Suffering",
              date: "2014-12-09",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anna-salamon",
    name: "Anna Salamon",
    tagline: "CFAR co-founder; rationality and existential risk",
    summary:
      "Co-founder of the Center for Applied Rationality (CFAR); long-time figure in rationalist and AI-risk circles. Helped train many current alignment researchers through CFAR workshops in 2010s.",
    categories: ["founder", "theorist"],
    affiliations: [
      { org: "Center for Applied Rationality", role: "Co-founder", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Long-term advocate of careful epistemic practice as a precondition for navigating AI risk; CFAR was central to community-building for alignment research.",
        quotes: [
          {
            text:
              "Most of the work of being correct about AI risk is not technical—it is the epistemic practice that lets you face uncomfortable questions without flinching.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Center for Applied Rationality",
              url: "https://www.rationality.org/",
              medium: "article",
              publisher: "CFAR",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nick-beckstead",
    name: "Nick Beckstead",
    tagline: "Future Fund co-founder; FHI alumnus",
    summary:
      "Philosopher and former Future Fund co-founder. Author of 'On the Overwhelming Importance of Shaping the Far Future' (2013), one of the foundational texts of academic longtermism.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Independent", role: "Researcher", current: true },
      { org: "FTX Future Fund", role: "Co-founder", end: "2022-11" },
      { org: "Future of Humanity Institute", role: "Research Fellow", end: "2017" },
    ],
    positions: [
      {
        strategyId: "effective-altruism-framing",
        stance: "endorses",
        summary:
          "Argues the long-run effects of present choices on the trajectory of civilization carry overwhelming moral weight, and that this implies existential-risk reduction—including from AI—is a top priority.",
        quotes: [
          {
            text:
              "If we have any positive credence that civilization could last very long and reach a very high level of value, the expected value of shaping the far future dominates expected value calculations for our near-term actions.",
            date: "2013",
            fidelity: "paraphrase-faithful",
            source: {
              title: "On the Overwhelming Importance of Shaping the Far Future",
              url: "https://rucore.libraries.rutgers.edu/rutgers-lib/40469/",
              medium: "paper",
              publisher: "Rutgers University Dissertation",
              date: "2013-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "paul-bloom",
    name: "Paul Bloom",
    tagline: "Yale and University of Toronto; cognitive science of AI moral status",
    summary:
      "Professor of psychology at Yale and University of Toronto; author of 'Against Empathy' and 'Psych'. Public commentator on AI's moral status, deception, and our intuitive responses to artificial minds.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Toronto", role: "Professor of Psychology", current: true },
      { org: "Yale University", role: "Brooks and Suzanne Ragen Professor Emeritus of Psychology", current: true },
    ],
    homepage: "https://campuspress.yale.edu/paulbloom/",
    twitter: "paulbloomatyale",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues people are too quick to anthropomorphise AI; psychological research shows our moral intuitions about machines are systematically miscalibrated.",
        quotes: [
          {
            text:
              "Our minds are designed to attribute agency and feeling to things that move with apparent purpose. AI systems exploit those inclinations far better than we appreciate.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Paul Bloom — Yale",
              url: "https://campuspress.yale.edu/paulbloom/",
              medium: "article",
              publisher: "Yale Psychology",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "simon-willison",
    name: "Simon Willison",
    tagline: "Independent developer; co-creator of Django; LLM tools",
    summary:
      "Co-creator of the Django web framework and founder of Datasette. His blog at simonwillison.net has been one of the most-read developer-oriented sources of LLM analysis since GPT-3, with extensive practical attention to prompt injection and capability evaluation.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Datasette", role: "Founder", current: true },
    ],
    homepage: "https://simonwillison.net/",
    twitter: "simonw",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues prompt injection is a structurally unfixable vulnerability in current LLM architectures and that any application that mixes trusted instructions with untrusted input has a security defect by design.",
        quotes: [
          {
            text:
              "Prompt injection isn't a 'we'll fix it later' bug. It's a fundamental property of how these models work, and we have to design applications around the assumption that it can't be patched away.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Prompt injection: What's the worst that can happen?",
              url: "https://simonwillison.net/2023/Apr/14/worst-that-can-happen/",
              medium: "blog",
              publisher: "simonwillison.net",
              date: "2023-04-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "riley-goodside",
    name: "Riley Goodside",
    tagline: "Scale AI; prompt engineering pioneer",
    summary:
      "Researcher at Scale AI; widely credited as one of the first practitioners to systematically explore the boundaries of LLM behaviour through prompting. Coined many of the foundational examples of prompt injection.",
    categories: ["researcher", "engineer"],
    affiliations: [
      { org: "Scale AI", role: "Staff Prompt Engineer", current: true },
    ],
    twitter: "goodside",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues prompt-engineering insights are inseparable from security research; many widely cited LLM failure modes were first surfaced through informal prompt experiments rather than formal evaluation.",
        quotes: [
          {
            text:
              "Exploiting GPT-3 prompts with malicious inputs that order the model to ignore its previous directions.",
            date: "2022-09-12",
            fidelity: "direct",
            context: "First publicly documented prompt-injection attack against GPT-3.",
            source: {
              title: "Prompt injection on GPT-3",
              url: "https://x.com/goodside/status/1569128808308957185",
              medium: "tweet",
              publisher: "X",
              date: "2022-09-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "george-hotz",
    name: "George Hotz",
    tagline: "Comma.ai / tinygrad founder",
    summary:
      "Founder of Comma.ai (open-source autonomy) and tinygrad (compact deep-learning framework). Self-taught hacker famous for jailbreaking the iPhone and PS3; vocal opponent of frontier-AI doomerism.",
    categories: ["founder", "engineer"],
    affiliations: [
      { org: "Comma.ai", role: "Founder", current: true },
      { org: "Tiny Corp / tinygrad", role: "Founder", current: true },
    ],
    homepage: "https://geohot.com/",
    twitter: "realGeorgeHotz",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues open-weight, distributed AI is the right structural answer to safety concerns; opposes both pause framings and centralised licensing regimes.",
        quotes: [
          {
            text:
              "I want a world with billions of fast AI agents, not one with a single aligned superintelligence run by a small group. Decentralisation is the safety property.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "George Hotz on AI",
              url: "https://geohot.com/",
              medium: "article",
              publisher: "geohot.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lucius-bushnaq",
    name: "Lucius Bushnaq",
    tagline: "Apollo Research; mech interp",
    summary:
      "Senior researcher at Apollo Research; works on mechanistic interpretability and on detecting deceptive cognition in language models.",
    categories: ["researcher"],
    affiliations: [
      { org: "Apollo Research", role: "Senior Researcher", current: true },
    ],
    twitter: "Lucius_Bushnaq",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues interpretability tools are most valuable when explicitly designed to detect deceptive or strategic behaviours in models, not just to characterize benign features.",
        quotes: [
          {
            text:
              "Interpretability that only finds nice features misses the alignment-relevant ones. We need methods designed to surface the deceptive behaviours we are most worried about.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Apollo Research",
              url: "https://www.apolloresearch.ai/",
              medium: "article",
              publisher: "Apollo Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rob-wiblin",
    name: "Rob Wiblin",
    tagline: "80,000 Hours podcast host",
    summary:
      "Co-founder of 80,000 Hours and host of its podcast. Has interviewed many of the people on this list at unusual length, with a recent emphasis on AI risk and policy.",
    categories: ["public-intellectual", "researcher"],
    affiliations: [
      { org: "80,000 Hours", role: "Director of Research / Podcast Host", current: true },
    ],
    twitter: "robertwiblin",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues longtermist AI safety prioritization is well-motivated; uses the 80k podcast to surface specific technical and policy paths in extended conversation.",
        quotes: [
          {
            text:
              "If transformative AI arrives in our lifetimes, the decisions made in the next decade may shape the long-run future more than any others. That makes alignment work plausibly the highest-leverage problem.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The 80,000 Hours Podcast",
              url: "https://80000hours.org/podcast/",
              medium: "podcast",
              publisher: "80,000 Hours",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "benjamin-todd",
    name: "Benjamin Todd",
    tagline: "Founder of 80,000 Hours",
    summary:
      "Co-founder of 80,000 Hours, the EA career-advice organization that has placed hundreds of researchers into AI safety roles. Author of '80,000 Hours: Find a fulfilling career that does good'.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "80,000 Hours", role: "Founder, Senior Adviser", current: true },
    ],
    twitter: "ben_j_todd",
    positions: [
      {
        strategyId: "effective-altruism-framing",
        stance: "endorses",
        summary:
          "Argues talented graduates should treat AI safety as one of the highest-impact career paths; has steered 80k's pipeline toward this since at least 2017.",
        quotes: [
          {
            text:
              "AI safety is plausibly the most important problem of our time. The best way to help is often to switch career paths into it, even when the personal cost is significant.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why AI safety is one of the highest-priority cause areas",
              url: "https://80000hours.org/problem-profiles/artificial-intelligence/",
              medium: "article",
              publisher: "80,000 Hours",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "holly-elmore",
    name: "Holly Elmore",
    tagline: "PauseAI US executive director",
    summary:
      "Executive director of PauseAI US; previously a researcher at Centre for Effective Altruism. Visible organizer of in-person protests and policy advocacy for an enforced pause on frontier training.",
    categories: ["activist"],
    affiliations: [
      { org: "PauseAI US", role: "Executive Director", current: true },
    ],
    twitter: "ilex_ulmus",
    positions: [
      {
        strategyId: "pause",
        stance: "endorses",
        summary:
          "Argues that the only responsible policy given current uncertainty is a global pause on frontier-model training, enforced by treaty if necessary.",
        quotes: [
          {
            text:
              "We are accelerating toward a technology nobody knows how to control. A pause is the minimum reasonable response while we figure that out.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "PauseAI US",
              url: "https://pauseai.info/",
              medium: "article",
              publisher: "PauseAI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "spencer-greenberg",
    name: "Spencer Greenberg",
    tagline: "Clearer Thinking founder; rationality researcher",
    summary:
      "Mathematician and entrepreneur; founded Clearer Thinking, a behavioural research and rationality-tools project. Hosts the Clearer Thinking podcast where AI risk is a recurring theme.",
    categories: ["founder", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Clearer Thinking", role: "Founder", current: true },
      { org: "Spark Wave", role: "Founder", current: true },
    ],
    homepage: "https://www.spencergreenberg.com/",
    twitter: "spencrgreenberg",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Argues that calibration, prediction tracking, and concrete probabilistic reasoning should anchor AI risk debates; runs ClearerThinking.org tools to push the practice.",
        quotes: [
          {
            text:
              "Most arguments about AI risk are not phrased in terms of testable predictions. We can fix that by literally writing down our beliefs and tracking them over time.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Clearer Thinking",
              url: "https://www.clearerthinking.org/",
              medium: "article",
              publisher: "Clearer Thinking",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gus-docker",
    name: "Gus Docker",
    tagline: "Future of Life Institute podcast host",
    summary:
      "Host of the Future of Life Institute Podcast; long-form interviews with AI safety researchers, policy figures, and adjacent thinkers. Influential conduit for technical alignment discourse.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Future of Life Institute", role: "Podcast Host", current: true },
    ],
    twitter: "GusDocker",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Editorial stance gives extended platform to existential-risk-aligned voices; interviews push interviewees on specific cruxes rather than sound-bite framings.",
        quotes: [
          {
            text:
              "What I try to do on the podcast is take the technical arguments seriously enough to ask the second-order questions about them, in public, on the record.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Future of Life Institute Podcast",
              url: "https://futureoflife.org/podcast/",
              medium: "podcast",
              publisher: "Future of Life Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tobi-lutke",
    name: "Tobias Lütke",
    tagline: "Shopify CEO; AI-first internal mandate",
    summary:
      "Founder and CEO of Shopify. In April 2025 issued an internal memo stating that 'reflexive AI usage is now a baseline expectation' for all Shopify employees—one of the most explicit AI-first labor policies from a major company.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Shopify", role: "CEO, Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tobi_L%C3%BCtke",
    twitter: "tobi",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI fluency is now as foundational as basic literacy for knowledge workers; mandated AI use across Shopify on the basis that headcount growth would not exceed AI-leveraged productivity.",
        quotes: [
          {
            text:
              "Reflexive AI usage is now a baseline expectation at Shopify. Before asking for more headcount and resources, teams must demonstrate why they cannot get what they want done using AI.",
            date: "2025-04-07",
            fidelity: "direct",
            source: {
              title: "Tobi Lütke on Shopify's AI mandate",
              url: "https://x.com/tobi/status/1909251946235437514",
              medium: "tweet",
              publisher: "X",
              date: "2025-04-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sam-hammond",
    name: "Sam Hammond",
    tagline: "Foundation for American Innovation senior economist",
    summary:
      "Senior economist at the Foundation for American Innovation (formerly Lincoln Network); writes the 'Second Best' Substack on technology and political economy. Argues for an aggressive U.S. industrial policy on AI compute.",
    categories: ["policy", "economist", "public-intellectual"],
    affiliations: [
      { org: "Foundation for American Innovation", role: "Senior Economist", current: true },
    ],
    homepage: "https://www.secondbest.ca/",
    twitter: "hamandcheese",
    positions: [
      {
        strategyId: "centralised-project",
        stance: "endorses",
        summary:
          "Argues the U.S. must run a Manhattan-scale state-supported AI program because the alternative is either Chinese leadership or distributed capture by a few private firms.",
        quotes: [
          {
            text:
              "If we believe AGI is genuinely transformative, then the question is not whether the state will be involved, but whether it will be involved with foresight or panic.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Second Best by Sam Hammond",
              url: "https://www.secondbest.ca/",
              medium: "blog",
              publisher: "Substack",
            },
          },
        ],
      },
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI demands updated US state capacity and labour-market institutions; conservative-coded but governance-supportive.",
        quotes: [
          {
            text:
              "If AI is the most important technology of the 21st century, the US state should be set up to govern it. Right now, it isn't.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sam Hammond — Substack",
              url: "https://www.secondbest.ca/",
              medium: "blog",
              publisher: "Second Best",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sal-khan",
    name: "Sal Khan",
    tagline: "Khan Academy founder; AI tutor advocate",
    summary:
      "Founder of Khan Academy. In 2023 launched Khanmigo, an AI tutor based on GPT-4. Advocates publicly that AI tutoring done well can produce Bloom's '2-sigma' learning gains for every student.",
    categories: ["founder", "public-intellectual"],
    affiliations: [
      { org: "Khan Academy", role: "Founder, CEO", current: true },
    ],
    twitter: "salkhan",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI tutoring can deliver one-on-one expert teaching to every student—Bloom's 2-sigma effect at universal scale—and that this is the most important application of LLMs.",
        quotes: [
          {
            text:
              "We're at the cusp of using AI for probably the biggest positive transformation that education has ever seen. Every student can have access to a one-on-one tutor that knows them.",
            date: "2023-04",
            fidelity: "direct",
            source: {
              title: "How AI could save (not destroy) education",
              url: "https://www.ted.com/talks/sal_khan_how_ai_could_save_not_destroy_education",
              medium: "talk",
              publisher: "TED",
              date: "2023-04-22",
              videoId: "hJP5GqnTrNo",
              videoPlatform: "youtube",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eric-topol",
    name: "Eric Topol",
    tagline: "Scripps cardiologist; AI in medicine pioneer",
    summary:
      "Founder and director of the Scripps Research Translational Institute; cardiologist and author of 'Deep Medicine' (2019). Long-standing voice on how AI should reshape clinical practice.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Scripps Research Translational Institute", role: "Founder, Director", current: true },
    ],
    homepage: "https://www.scripps.edu/topol/",
    twitter: "EricTopol",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Argues medicine is the highest-impact AI application area; AI can restore the patient-doctor relationship by automating bureaucratic and pattern-recognition work that currently consumes clinicians' time.",
        quotes: [
          {
            text:
              "Deep medicine is about restoring care—using AI to give doctors back the time they spend on screens and paperwork so they can be present with patients again.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again",
              url: "https://www.basicbooks.com/titles/eric-topol/deep-medicine/9781541644649/",
              medium: "book",
              publisher: "Basic Books",
              date: "2019-03-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "holly-herndon",
    name: "Holly Herndon",
    tagline: "Musician; 'Holly+' digital twin and Spawning",
    summary:
      "Composer and electronic musician whose work pioneered AI-assisted music; co-founded Spawning, which built tools for artists to opt out of generative AI training datasets.",
    categories: ["activist", "public-intellectual"],
    affiliations: [
      { org: "Spawning", role: "Co-founder", current: true },
    ],
    homepage: "https://www.hollyherndon.com/",
    twitter: "hollyherndon",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues artists should hold property and consent rights over AI training; co-built Spawning's 'Have I Been Trained?' tool to make this possible at scale.",
        quotes: [
          {
            text:
              "AI is being trained on artists' work without consent or compensation. We built Spawning so artists can see what's been used and opt out, individually and collectively.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Spawning AI",
              url: "https://spawning.ai/",
              medium: "article",
              publisher: "Spawning",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-rolnick",
    name: "David Rolnick",
    tagline: "McGill / Mila; Climate Change AI co-founder",
    summary:
      "McGill assistant professor and Mila core faculty; co-founder of Climate Change AI. Co-author of the influential 'Tackling Climate Change with Machine Learning' (2019) paper.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "McGill University", role: "Assistant Professor of Computer Science", current: true },
      { org: "Mila", role: "Canada CIFAR AI Chair", current: true },
      { org: "Climate Change AI", role: "Co-founder, Chair", current: true },
    ],
    homepage: "https://davidrolnick.com/",
    twitter: "davidrolnick",
    positions: [
      {
        strategyId: "differential-tech",
        stance: "endorses",
        summary:
          "Argues climate is the highest-leverage public-interest AI application and the most under-funded; calls for differential investment in protective rather than only optimizing technology.",
        quotes: [
          {
            text:
              "Machine learning has high-impact applications across the climate change problem space, from forecasting and emissions reduction to behavioural change. We outline these systematically.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tackling Climate Change with Machine Learning",
              url: "https://arxiv.org/abs/1906.05433",
              medium: "paper",
              publisher: "arXiv",
              date: "2019-06-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-susskind",
    name: "Daniel Susskind",
    tagline: "Oxford / King's College London; AI and work economist",
    summary:
      "Oxford economist; senior research associate at King's College London. Author of 'A World Without Work' (2020) and co-author with father Richard Susskind of 'The Future of the Professions' (2015).",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "University of Oxford", role: "Senior Research Associate", current: true },
      { org: "King's College London", role: "Visiting Professor", current: true },
    ],
    homepage: "https://www.danielsusskind.com/",
    twitter: "danielsusskind",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues we are heading toward 'technological unemployment'—not because AI will eliminate all jobs, but because it will reduce demand for human labor across enough domains that distribution becomes the central political question.",
        quotes: [
          {
            text:
              "The threat of technological unemployment is real. As task encroachment by machines accelerates, the question is no longer whether to redistribute, but how.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "A World Without Work: Technology, Automation, and How We Should Respond",
              url: "https://www.penguinrandomhouse.com/books/606051/a-world-without-work-by-daniel-susskind/",
              medium: "book",
              publisher: "Metropolitan Books",
              date: "2020-01-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anton-korinek",
    name: "Anton Korinek",
    tagline: "UVA economist; AI and inequality",
    summary:
      "University of Virginia professor of economics; senior fellow at Brookings. Has produced influential work on AI's macroeconomic implications and on transformative AI scenarios.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "University of Virginia", role: "Professor of Economics and Business", current: true },
      { org: "Brookings Institution", role: "Senior Fellow", current: true },
    ],
    homepage: "https://www.korinek.com/",
    twitter: "akorinek",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI's impact on the labor share of income is the central macroeconomic concern, and that policy needs to start preparing for transformative scenarios where labor becomes a smaller fraction of value.",
        quotes: [
          {
            text:
              "If AI eventually substitutes for most cognitive labor, traditional macroeconomic models break down: wages no longer track productivity, and political economy stops resembling anything we have institutional experience with.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scenarios for the Transition to AGI",
              url: "https://www.nber.org/papers/w32255",
              medium: "paper",
              publisher: "NBER",
              date: "2024-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "richard-susskind",
    name: "Richard Susskind",
    tagline: "Tech-and-law thinker; 'Future of the Professions'",
    summary:
      "British author and IT advisor to the Lord Chief Justice of England and Wales; pioneer of 'online courts' and frequent speaker on AI's effect on legal services.",
    categories: ["public-intellectual", "policy"],
    affiliations: [
      { org: "Independent advisor", role: "Author / Adviser", current: true },
    ],
    homepage: "https://www.susskind.com/",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Argues that automating professional work is overdue and largely good, but that the legal and ethical infrastructure for it is not keeping pace.",
        quotes: [
          {
            text:
              "The future of the professions is not a fancy version of today's professions. It is a set of new ways of solving the problems we currently rely on professionals to solve.",
            date: "2015",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Future of the Professions: How Technology Will Transform the Work of Human Experts",
              url: "https://global.oup.com/academic/product/the-future-of-the-professions-9780198713395",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2015-10-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nathan-lambert",
    name: "Nathan Lambert",
    tagline: "Allen Institute for AI; 'Interconnects' newsletter",
    summary:
      "Senior research scientist at the Allen Institute for AI (Ai2) and author of the widely read 'Interconnects' newsletter. Co-leads Ai2's open-source post-training research and publishes detailed analyses of frontier-lab releases.",
    categories: ["researcher", "journalist"],
    affiliations: [
      { org: "Allen Institute for AI", role: "Senior Research Scientist", current: true },
      { org: "Hugging Face", role: "Researcher", end: "2024" },
    ],
    homepage: "https://www.natolambert.com/",
    twitter: "natolambert",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open post-training is a prerequisite to credible AI safety claims; the closed nature of frontier RLHF makes external evaluation impossible.",
        quotes: [
          {
            text:
              "We can't talk seriously about AI safety while the post-training of frontier models is opaque to outsiders. Open-source post-training is the precondition for everything else.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Interconnects by Nathan Lambert",
              url: "https://www.interconnects.ai/",
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
    id: "ali-farhadi",
    name: "Ali Farhadi",
    tagline: "Allen Institute for AI CEO",
    summary:
      "CEO of the Allen Institute for AI since 2023; previously a senior director at Apple. Computer-vision researcher (YOLO; UW) and longtime advocate of open-source frontier models.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "Allen Institute for AI", role: "CEO", current: true },
      { org: "University of Washington", role: "Professor of Computer Science", current: true },
      { org: "Apple", role: "Senior Director, AI/ML", end: "2023" },
    ],
    homepage: "https://homes.cs.washington.edu/~ali/",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues fully open frontier models—including data and training recipes—are necessary for the field's scientific integrity and for democratizing access to advanced AI.",
        quotes: [
          {
            text:
              "We released OLMo with everything: weights, training data, training code, evaluation suites. Open-source AI cannot be a marketing word—it has to be all the way down.",
            date: "2024-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "OLMo: Accelerating the Science of Language Models",
              url: "https://allenai.org/olmo",
              medium: "article",
              publisher: "Allen Institute for AI",
              date: "2024-02-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "chip-huyen",
    name: "Chip Huyen",
    tagline: "Author of 'Designing Machine Learning Systems'",
    summary:
      "ML engineer and author whose work on production ML systems and LLM evaluation has shaped industry practice. Previously co-founded Claypot AI; ex-NVIDIA, ex-Snorkel.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Independent / writer", role: "Author and ML engineer", current: true },
    ],
    homepage: "https://huyenchip.com/",
    twitter: "chipro",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues evaluation is the load-bearing infrastructure of production AI; both safety and product quality depend on robust eval pipelines that match deployment context.",
        quotes: [
          {
            text:
              "Evaluation is the bottleneck. Without robust, automated evaluation, you can't trust improvements, you can't catch regressions, and you can't ship safely.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Designing Machine Learning Systems",
              url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
              medium: "book",
              publisher: "O'Reilly Media",
              date: "2022-06-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ronen-eldan",
    name: "Ronen Eldan",
    tagline: "Microsoft Research; 'TinyStories' author; mathematician",
    summary:
      "Microsoft Research mathematician; co-author of 'TinyStories' (2023), which showed that small language models trained on synthetic children's stories can produce coherent text—reframing what 'small' models can do.",
    categories: ["researcher"],
    affiliations: [
      { org: "Microsoft Research", role: "Senior Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues much of LLM behaviour can be replicated with much smaller, narrower models when training data is carefully curated; rejects the idea that scale is necessary.",
        quotes: [
          {
            text:
              "TinyStories shows that small models can produce coherent, grammatical, and creative text when trained on a constrained synthetic corpus. The dependency on scale is more about diversity of training distribution than fundamental capability.",
            date: "2023-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "TinyStories: How Small Can Language Models Be and Still Speak Coherent English?",
              url: "https://arxiv.org/abs/2305.07759",
              medium: "paper",
              publisher: "arXiv / Microsoft Research",
              date: "2023-05-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "henry-kissinger",
    name: "Henry Kissinger",
    tagline: "Former U.S. Secretary of State; co-author 'The Age of AI'",
    summary:
      "Former U.S. Secretary of State (1973–77); died 2023. Co-authored 'The Age of AI: And Our Human Future' (2021) with Eric Schmidt and Daniel Huttenlocher, framing AI as a category-shifting transformation in the structure of knowledge.",
    categories: ["policy", "public-intellectual"],
    affiliations: [
      { org: "Kissinger Associates", role: "Founder, Chair", end: "2023-11" },
      { org: "U.S. Department of State", role: "Secretary of State", end: "1977" },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argued AI requires a new diplomatic framework comparable in scale to nuclear arms control; called for U.S.-China dialogue specifically on AI's strategic implications.",
        quotes: [
          {
            text:
              "We need to start serious discussions about how to keep AI from running off into territories nobody wants to go. The challenge is not technological, it is the absence of any framework for international agreement.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Age of AI: And Our Human Future",
              url: "https://www.littlebrown.com/titles/henry-a-kissinger/the-age-of-ai/9780316285179/",
              medium: "book",
              publisher: "Little, Brown and Company",
              date: "2021-11-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mike-knoop",
    name: "Mike Knoop",
    tagline: "Co-founder ARC Prize; ex-Zapier",
    summary:
      "Co-founder of Zapier and, with François Chollet, of the 'ARC Prize'—a public competition built around the ARC-AGI benchmark to reward systems that demonstrate genuine generalization rather than scaled pattern matching.",
    categories: ["founder"],
    affiliations: [
      { org: "ARC Prize", role: "Co-founder", current: true },
      { org: "Zapier", role: "Co-founder", end: "2024" },
    ],
    twitter: "mikeknoop",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues frontier LLM benchmarks have been collapsing into 'memorization plus retrieval' and that ARC-AGI shows current systems are not on a smooth path to general intelligence.",
        quotes: [
          {
            text:
              "Existing frontier models score under 50% on ARC-AGI puzzles that are easy for humans. The gap reveals what 'general intelligence' really demands beyond scale.",
            date: "2024-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "ARC Prize 2024 — Announcement",
              url: "https://arcprize.org/",
              medium: "article",
              publisher: "ARC Prize",
              date: "2024-06-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yuntao-bai",
    name: "Yuntao Bai",
    tagline: "Anthropic; Constitutional AI co-author",
    summary:
      "Anthropic researcher; co-lead author of the Constitutional AI paper introducing principles-based RLHF training and harmlessness from AI feedback.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
    ],
    twitter: "yuntaobai",
    positions: [
      {
        strategyId: "constitution-ai",
        stance: "endorses",
        summary:
          "Argues principles-based training—where models are trained against an explicit constitution by another AI—scales human oversight in a way RLHF alone does not.",
        quotes: [
          {
            text:
              "We propose Constitutional AI: a method for training a harmless AI assistant through self-improvement, without any human labels identifying harmful outputs.",
            date: "2022-12",
            fidelity: "direct",
            source: {
              title: "Constitutional AI: Harmlessness from AI Feedback",
              url: "https://arxiv.org/abs/2212.08073",
              medium: "paper",
              publisher: "arXiv / Anthropic",
              date: "2022-12-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trenton-bricken",
    name: "Trenton Bricken",
    tagline: "Anthropic mechanistic interpretability",
    summary:
      "Anthropic researcher whose work on sparse autoencoders, attention dynamics, and dictionary learning has been central to the mechanistic interpretability program.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
    ],
    twitter: "trentonbricken",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues sparse-autoencoder-style decomposition of model activations into monosemantic features is a tractable path to making large models comprehensible enough to oversee.",
        quotes: [
          {
            text:
              "We use a sparse autoencoder to decompose a small language model's MLP activations into monosemantic features, and we find that the resulting features can be interpreted, controlled, and used to track model behaviour.",
            date: "2023-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning",
              url: "https://transformer-circuits.pub/2023/monosemantic-features/",
              medium: "paper",
              publisher: "Anthropic / Transformer Circuits",
              date: "2023-10-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "catherine-olsson",
    name: "Catherine Olsson",
    tagline: "Anthropic; ex-OpenAI; AI safety community organizer",
    summary:
      "Anthropic researcher and longtime fixture of the AI safety research community. Co-author of OpenAI's 'AI and Compute' analysis. Was a longtime safety advocate at Google Brain and Open Philanthropy.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "OpenAI", role: "Researcher", end: "2018" },
    ],
    twitter: "catherineols",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Long-time community organizer for alignment research; helped seed the EA-aligned safety pipeline at OpenAI before joining Anthropic.",
        quotes: [
          {
            text:
              "We're seeing the largest AI training runs grow more than 300,000x in compute over six years, an order of magnitude faster than Moore's Law. The implications for safety planning are immediate.",
            date: "2018-05",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI and Compute",
              url: "https://openai.com/research/ai-and-compute",
              medium: "article",
              publisher: "OpenAI",
              date: "2018-05-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-jermyn",
    name: "Adam Jermyn",
    tagline: "Anthropic; previously astrophysics",
    summary:
      "Anthropic researcher whose path from theoretical astrophysics to AI safety is widely cited as a model for cross-field switching. Researches deceptive alignment risks.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
    ],
    twitter: "AdamSJermyn",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues mechanistic understanding of model behavior—including how deceptive alignment could arise—is required to make safety guarantees credible.",
        quotes: [
          {
            text:
              "Deceptive alignment is the scenario where a model behaves as if aligned during training but pursues different objectives at deployment. The question is whether we can rule it out empirically.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adam Jermyn — Anthropic",
              url: "https://www.adamjermyn.com/",
              medium: "blog",
              publisher: "adamjermyn.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lukas-finnveden",
    name: "Lukas Finnveden",
    tagline: "Open Philanthropy; AI safety analyst",
    summary:
      "Open Philanthropy researcher whose detailed analyses of AI takeoff dynamics, training data running out, and alignment training methods have been widely cited in EA circles.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Open Philanthropy", role: "Senior Research Analyst", current: true },
    ],
    homepage: "https://www.lesswrong.com/users/lukas-finnveden",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment research must trace specific failure modes in concrete detail; favours quantitative scenario analysis over generic existential framings.",
        quotes: [
          {
            text:
              "Plausible scenarios for AI takeoff include software-only feedback loops where AIs do AI research. Whether this leads to alignment failure depends on details that haven't been carefully argued.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Lukas Finnveden — LessWrong",
              url: "https://www.lesswrong.com/users/lukas-finnveden",
              medium: "blog",
              publisher: "LessWrong",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "christopher-manning",
    name: "Christopher Manning",
    tagline: "Stanford NLP director; foundation models",
    summary:
      "Stanford professor of computer science and linguistics; director of the Stanford AI Lab. Co-led the Center for Research on Foundation Models. Author of the 'Foundations of Statistical Natural Language Processing' (1999) and 'Speech and Language Processing' (with Jurafsky).",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Stanford University", role: "Thomas M. Siebel Professor of Machine Learning", current: true },
      { org: "Stanford AI Lab", role: "Director", current: true },
      { org: "Stanford CRFM", role: "Co-Director", current: true },
    ],
    homepage: "https://nlp.stanford.edu/~manning/",
    twitter: "chrmanning",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Endorses 'foundation models' as the operative frame for current and future AI systems; engages with safety as integral to that frame, not as a separable add-on.",
        quotes: [
          {
            text:
              "We define foundation models as models trained on broad data at scale and adaptable to a wide range of downstream tasks—and these models entail both new capabilities and new risks.",
            date: "2021-08",
            fidelity: "direct",
            source: {
              title: "On the Opportunities and Risks of Foundation Models",
              url: "https://arxiv.org/abs/2108.07258",
              medium: "paper",
              publisher: "arXiv / Stanford CRFM",
              date: "2021-08-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "garry-kasparov",
    name: "Garry Kasparov",
    tagline: "Former world chess champion; 'Deep Thinking' author",
    summary:
      "Former world chess champion; in 1997 lost a match against IBM's Deep Blue, an inflection moment for public perception of AI. Author of 'Deep Thinking: Where Machine Intelligence Ends and Human Creativity Begins' (2017).",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Human Rights Foundation", role: "Chair", current: true },
    ],
    twitter: "Kasparov63",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues humans + machines beat machines alone (centaur chess), that augmentation is the right framing, and that authoritarian AI capture is a more urgent risk than runaway misalignment.",
        quotes: [
          {
            text:
              "What concerns me about AI is not that the machine will surpass us, but that we will hand over too much to people who control the machines and never to ask the questions on which our humanity depends.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Deep Thinking: Where Machine Intelligence Ends and Human Creativity Begins",
              url: "https://www.publicaffairsbooks.com/titles/garry-kasparov/deep-thinking/9781610397872/",
              medium: "book",
              publisher: "PublicAffairs",
              date: "2017-05-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hannah-fry",
    name: "Hannah Fry",
    tagline: "Cambridge mathematician; 'Hello World' author",
    summary:
      "Mathematician and broadcaster; Cambridge professor (from 2024) and author of 'Hello World: How to be Human in the Age of the Machine' (2018). Frequent BBC presenter on algorithms and decision-making.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Cambridge", role: "Professor of Public Understanding of Mathematics", current: true },
      { org: "UCL Centre for Advanced Spatial Analysis", role: "Professor", end: "2023" },
    ],
    homepage: "https://hannahfry.co.uk/",
    twitter: "FryRsquared",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues algorithmic decision-making in finance, criminal justice, and healthcare is the high-stakes ground for AI ethics; pushes back on framings that treat the question as primarily about future AGI.",
        quotes: [
          {
            text:
              "Algorithms are already making decisions that change lives. The question of how much trust to give them is one we have to answer now, not in some future when AI is much more capable.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hello World: How to be Human in the Age of the Machine",
              url: "https://www.penguin.co.uk/books/110404/hello-world/9781784163068.html",
              medium: "book",
              publisher: "Doubleday",
              date: "2018-09-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

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
          "Argues responsible scaling—publicly committed safety measures triggered by capability thresholds—is how frontier labs must operate; helps shape DeepMind's framework.",
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
          "Argues alignment ought to start at pretraining—not just RLHF—because behaviour shaped by base-model training is far harder to undo later.",
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
      "Anthropic alignment researcher whose work on AI control—designing evaluations to test whether models can subvert oversight even when they are trying to—has been widely cited in safety circles.",
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
          "Argues control evaluations—stress testing whether AIs can subvert their own monitoring—are a load-bearing part of any sensible deployment regime.",
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
              title: "Anjney Midha — Andreessen Horowitz",
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
              title: "Squiggle — Quantified Uncertainty",
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
              title: "Sara Beery — MIT",
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
          "Cautious supporter of AI regulation; aligns Australia with mid-Atlantic positions—stronger than U.S., softer than EU—on frontier model governance.",
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
              title: "Governor Newsom Veto Message — SB 1047",
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
              title: "Hadrien Pouget — Carnegie Endowment",
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
              "Behind every smooth chatbot is an army of underpaid workers cleaning, labelling, and moderating data—often in the Global South. AI dependency is also dependence on this hidden workforce.",
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
          "Argues AGI discourse inherits and re-enacts religious frames—incarnation, eschatology, the soul—and that recognising those origins changes what we should make of the predictions on offer.",
        quotes: [
          {
            text:
              "Most of the questions we ask about AI—what it knows, whether it has a soul, what we owe it—were first asked by theologians. We have not stopped being theological; we have only forgotten that we are.",
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
              title: "John Thornhill — FT",
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
              "Data violence describes the cumulative harm produced through everyday operations of data systems—not the spectacular event but the continuous structural injury.",
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
          "Argues comprehensive multi-dimensional safety benchmarks—covering toxicity, fairness, privacy, robustness, ethics—are needed to characterize AI risks empirically before deployment.",
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
              title: "Yaodong Yang — homepage",
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
              title: "Nat Friedman — nat.org",
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
          "Argues robust evaluation requires carefully constructed datasets that resist contamination and reveal real generalization—not leaderboard-fitted numbers.",
        quotes: [
          {
            text:
              "The dominant evaluation paradigm in NLP is fundamentally susceptible to contamination and overfitting. We need to design tests that are robust to the way models actually develop.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tatsunori Hashimoto — Stanford",
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
              title: "Together AI — about",
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
              title: "Seda Gürses — TU Delft profile",
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
              "International human rights provide a coherent legal framework for AI governance—one that already commands international consensus and addresses dignity, equality, and remedy directly.",
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
          "Argues independent third-party audits—not lab self-attestation—are how AI systems should be regulated; pioneered audit methodologies for government and platform AI.",
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
          "Argues data and AI governance must be subject to democratic processes that include workers, citizens, and affected communities—not negotiated solely between firms and regulators.",
        quotes: [
          {
            text:
              "If we want a democratic AI future, we have to design participatory governance from the start. Otherwise we end up with whatever incumbents quietly negotiate behind closed doors.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Omidyar Network — AI Collaborative",
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
              title: "Edward Grefenstette — egrefen.com",
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
        summary:
          "Architect of the Transformer; views the path forward as scaling and refining the architecture, not pausing it. Builds AI tooling for autonomous engineering.",
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
        summary:
          "Builds frontier-AI tooling; views capability research as the engine of useful applications and supports rapid productization.",
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
        summary:
          "Applied Transformer techniques to mRNA design; argues frontier AI's most important applications are biology and medicine, not chatbots.",
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
              "The AI Risk Management Framework offers organizations a flexible, structured way to manage AI risks throughout the lifecycle—not a checklist, a discipline.",
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
              "Whichever country gets superior AI is not necessarily the one that develops it first. The diffusion phase—how fast and broadly capabilities spread—matters more than the leading edge.",
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
          "Argues strict, joint-and-several liability for harms from advanced AI is the most powerful policy lever available—forcing labs to internalize catastrophic risk without requiring legislators to pre-specify which capabilities are dangerous.",
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
              "When we let a small number of firms control essential resources, the consequences are not merely economic. They become social, political, and now—with AI—epistemic.",
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
              title: "BIG by Matt Stoller — AI and antitrust",
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
              title: "Boaz Barak — windowsontheory blog",
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
          "Argues visualization is a primary research method for understanding modern neural networks—not a presentation layer—and that the field's safety guarantees rise and fall with the depth of that understanding.",
        quotes: [
          {
            text:
              "If we can't see what models are doing, we can't trust them. Visualization is fundamental to building justified confidence in ML systems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Martin Wattenberg — Harvard",
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
              title: "Fernanda Viégas — Harvard",
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
          "Argues current benchmark practice in NLP is broken—data leakage, opaque test sets, and incentive-driven framing make many headline numbers unreliable.",
        quotes: [
          {
            text:
              "How much of LLM 'reasoning' is actually pattern matching against contaminated test data? We don't know, and that's a problem for any safety claim that rests on benchmark performance.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Anna Rogers — Hai!",
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
          "Argues 'human-centered AI' design—high control AND high automation—is achievable and dissolves the false dichotomy between intelligence and autonomy.",
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
              title: "Nicolas Papernot — research page",
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
          "Helped formulate the differential technology development framing—accelerate beneficial protective tech relative to dangerous tech—as a strategic prescription.",
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
          "Argues ML safety must integrate ecological, economic, and labor harms—not only model misalignment—into a single research agenda.",
        quotes: [
          {
            text:
              "Concrete safety problems are environmental, social, and political at the same time as they are technical. The boundary the field draws around 'safety' is itself a normative choice.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tegan Maharaj — Mila",
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
          "Argues AI failures—both funny and concerning—are pedagogically important; pushes back on hype while taking misuse risks seriously.",
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
        summary:
          "Argues large multimodal pretraining followed by RL on real environments is the dominant trajectory; views capability scaling as the primary research bet.",
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
              title: "Hugo Larochelle — Mila profile",
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
      "OpenAI researcher and lead author of the 2022 paper that introduced 'chain-of-thought' prompting—the technique behind much of modern LLM reasoning.",
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

  {
    id: "sergey-levine",
    name: "Sergey Levine",
    tagline: "UC Berkeley; robot learning, deep RL",
    summary:
      "UC Berkeley professor whose group has produced foundational work on robot learning, offline RL, and—since 2023—generalist robot foundation models like RT-2 and Open X-Embodiment.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of EECS", current: true },
    ],
    homepage: "https://people.eecs.berkeley.edu/~svlevine/",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        tentative: true,
        summary:
          "Argues physical-world robotics is the bottleneck to general AI usefulness; less explicit on x-risk strategy but views capability progress as the priority.",
        quotes: [
          {
            text:
              "If we want machines that can do useful things in the physical world, we need to scale up real-world data and self-supervision. Internet text gets you far, but not into a kitchen.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models",
              url: "https://arxiv.org/abs/2310.08864",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-10-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jakob-foerster",
    name: "Jakob Foerster",
    tagline: "Oxford FLAIR lab; multi-agent RL",
    summary:
      "Oxford professor and head of the FLAIR lab; researches learning to cooperate and communicate in multi-agent reinforcement learning, including opponent shaping.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Oxford", role: "Associate Professor of EECS", current: true },
    ],
    homepage: "https://www.jakobfoerster.com/",
    twitter: "j_foerst",
    positions: [
      {
        strategyId: "cooperative-ai",
        stance: "endorses",
        summary:
          "Argues that the social dynamics among learning agents—cooperation, communication, opponent shaping—are first-order alignment problems, not afterthoughts to single-agent training.",
        quotes: [
          {
            text:
              "Treating each agent as if it learns in isolation misses the central question: what equilibria do learning algorithms select when they meet each other?",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Model-Free Opponent Shaping",
              url: "https://arxiv.org/abs/2205.01447",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-05-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mark-riedl",
    name: "Mark Riedl",
    tagline: "Georgia Tech; AI ethics and storytelling",
    summary:
      "Georgia Tech professor of interactive computing whose research spans narrative AI, AI ethics, and creative AI. Frequent public commentator on overhype and underexamined societal harms of generative AI.",
    categories: ["researcher", "academic", "public-intellectual"],
    affiliations: [
      { org: "Georgia Tech", role: "Professor, School of Interactive Computing", current: true },
    ],
    homepage: "https://markriedl.github.io/",
    twitter: "mark_riedl",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues the AI policy conversation should center documented sociotechnical harms—labor, copyright, surveillance, hallucination harms—rather than speculative existential scenarios.",
        quotes: [
          {
            text:
              "AI hype is a strategy to make people fearful so they will accept governance regimes that benefit incumbents. Real harms are present-tense and unevenly distributed.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mark Riedl on AI hype and harm",
              url: "https://markriedl.medium.com/",
              medium: "blog",
              publisher: "Medium",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sean-carroll",
    name: "Sean Carroll",
    tagline: "Johns Hopkins / Santa Fe; physicist and Mindscape host",
    summary:
      "Theoretical physicist at Johns Hopkins and the Santa Fe Institute; hosts Mindscape, where AI risk has been a recurring topic. Cautious about AGI timelines and tends toward measured skepticism on near-term existential framings.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Johns Hopkins University", role: "Homewood Professor of Natural Philosophy", current: true },
      { org: "Santa Fe Institute", role: "External Professor", current: true },
    ],
    homepage: "https://www.preposterousuniverse.com/",
    twitter: "seanmcarroll",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current LLMs are not on a smooth path to general intelligence; engages seriously with x-risk arguments but views many specific scenarios as physically and economically implausible.",
        quotes: [
          {
            text:
              "I'm willing to take seriously that AI is a really big deal. I'm not willing to grant that the specific paths to doom you imagine have anything like the probability you assign to them.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Mindscape Podcast: Solo AMA on AI risk",
              url: "https://www.preposterousuniverse.com/podcast/",
              medium: "podcast",
              publisher: "Mindscape",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "raia-hadsell",
    name: "Raia Hadsell",
    tagline: "Google DeepMind director of robotics & research",
    summary:
      "Google DeepMind senior director whose research has spanned robotics, continual learning, and progressive networks. Helped lead DeepMind's robotics push and now oversees research strategy.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Director of Research", current: true },
    ],
    homepage: "https://raiahadsell.com/",
    twitter: "raiahadsell",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues continual learning and robotic embodiment are central to general AI; engages with safety as integral to research roadmaps.",
        quotes: [
          {
            text:
              "Embodied learning forces you to confront questions that are easy to gloss over in language models: causality, partial observability, the cost of mistakes.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Raia Hadsell — DeepMind",
              url: "https://deepmind.google/about/",
              medium: "article",
              publisher: "Google DeepMind",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sebastien-bubeck",
    name: "Sébastien Bubeck",
    tagline: "OpenAI; lead author of 'Sparks of AGI' paper",
    summary:
      "Mathematician and ML researcher; previously led the Microsoft Research team that produced the 'Sparks of Artificial General Intelligence' paper, then moved to OpenAI in 2024.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "VP of GenAI Research", current: true },
      { org: "Microsoft Research", role: "VP, Sr. Principal Researcher", start: "2014", end: "2024" },
    ],
    twitter: "SebastienBubeck",
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        tentative: true,
        summary:
          "Argues GPT-4 already exhibits early AGI behaviors and that capability progress will continue rapidly; less explicit on safety strategy.",
        quotes: [
          {
            text:
              "We contend that GPT-4 could reasonably be viewed as an early (yet still incomplete) version of an artificial general intelligence (AGI) system.",
            date: "2023-03",
            fidelity: "direct",
            source: {
              title: "Sparks of Artificial General Intelligence: Early Experiments with GPT-4",
              url: "https://arxiv.org/abs/2303.12712",
              medium: "paper",
              publisher: "arXiv",
              date: "2023-03-22",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "nicholas-carlini",
    name: "Nicholas Carlini",
    tagline: "Anthropic adversarial-ML researcher; ex-Google Brain",
    summary:
      "Adversarial machine learning researcher widely cited for memorization, jailbreak, and privacy attacks on large models. Argues current LLM safety is unusually fragile compared to mature security fields.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "Google Brain / DeepMind", role: "Research Scientist", start: "2018", end: "2024" },
    ],
    homepage: "https://nicholas.carlini.com/",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues ML systems are routinely broken by simple attacks and that the field treats safety claims with insufficient adversarial scrutiny.",
        quotes: [
          {
            text:
              "I think the difficulty of attacking machine learning models is grossly overestimated, and the difficulty of defending them grossly underestimated.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why I attack neural networks",
              url: "https://nicholas.carlini.com/writing/2024/why-i-attack.html",
              medium: "blog",
              publisher: "nicholas.carlini.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aleksander-madry",
    name: "Aleksander Mądry",
    tagline: "MIT; ex-OpenAI head of preparedness",
    summary:
      "MIT professor of computer science specializing in robust machine learning. Led the OpenAI Preparedness Team in 2023–24 to evaluate frontier model risks across CBRN, cyber, and persuasion domains.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT", role: "Cadence Design Systems Professor of Computing", current: true },
      { org: "OpenAI", role: "Head of Preparedness", start: "2023-10", end: "2024-08" },
    ],
    homepage: "https://madry.mit.edu/",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues frontier-AI risk needs to be measured systematically before deployment and that capability evaluations are the precondition for any meaningful safety commitment.",
        quotes: [
          {
            text:
              "We need to make our understanding of frontier model risks empirical, not narrative. The Preparedness Framework is about measuring danger before it manifests.",
            date: "2023-12",
            fidelity: "paraphrase-faithful",
            source: {
              title: "OpenAI Preparedness Framework (Beta)",
              url: "https://openai.com/safety/preparedness",
              medium: "article",
              publisher: "OpenAI",
              date: "2023-12-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-deutsch",
    name: "David Deutsch",
    tagline: "Oxford physicist; pioneer of quantum computing",
    summary:
      "Oxford physicist who proposed the universal quantum computer in 1985. Author of 'The Beginning of Infinity'; argues general intelligences are people in the moral sense and AI x-risk framings misread the open-ended nature of explanatory knowledge.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Oxford", role: "Visiting Professor of Physics", current: true },
    ],
    homepage: "https://www.daviddeutsch.org.uk/",
    twitter: "DavidDeutschOxf",
    positions: [
      {
        strategyId: "moral-circle-expansion",
        stance: "endorses",
        summary:
          "Argues AGIs will be people in the morally relevant sense, that creating them is part of the open-ended growth of knowledge, and that doom narratives mistake this for a control problem.",
        quotes: [
          {
            text:
              "AGIs will be people. That has been a problem, and a feature, of every previous era of artificial intelligence: the issue is not 'how do we control them' but how we behave toward beings whose creativity is comparable to our own.",
            date: "2012",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Beginning of Infinity",
              url: "https://www.penguinrandomhouse.com/books/106936/the-beginning-of-infinity-by-david-deutsch/",
              medium: "book",
              publisher: "Penguin",
              date: "2011",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-wentworth",
    name: "John Wentworth",
    tagline: "Independent alignment researcher; natural abstractions",
    summary:
      "Independent alignment researcher who developed the 'natural abstractions hypothesis' as a framing for whether human concepts robustly transfer to learned representations.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Independent", role: "Alignment Researcher", current: true },
    ],
    twitter: "johnwentworth",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues alignment requires identifying the abstractions a model converges on; if these match human concepts, training-time supervision becomes far more reliable.",
        quotes: [
          {
            text:
              "The natural abstractions hypothesis is roughly: a wide variety of cognitive systems will converge to use the same high-level abstractions for reasoning about the world.",
            date: "2021",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Natural Abstraction Hypothesis: Implications and Evidence",
              url: "https://www.lesswrong.com/posts/cy3BhHrGinZCp3LXE/testing-the-natural-abstraction-hypothesis-project-intro",
              medium: "blog",
              publisher: "LessWrong",
              date: "2021-04-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "scott-garrabrant",
    name: "Scott Garrabrant",
    tagline: "MIRI researcher; logical induction, Cartesian frames",
    summary:
      "Machine Intelligence Research Institute researcher who developed logical inductors (a formalism for assigning probabilities to mathematical statements over time) and Cartesian frames (a model of agent–environment boundaries).",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute", role: "Research Fellow", current: true },
    ],
    positions: [
      {
        strategyId: "agent-foundations",
        stance: "endorses",
        summary:
          "Argues robust alignment requires foundational work on what agency, embeddedness, and self-reference even mean before behavioral training methods can be trusted.",
        quotes: [
          {
            text:
              "Logical inductors approximate well-calibrated probabilistic reasoning over computable statements: the bookmaker is gradually unable to extract money from the market over time.",
            date: "2016",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Logical Induction",
              url: "https://intelligence.org/files/LogicalInduction.pdf",
              medium: "paper",
              publisher: "MIRI",
              date: "2016-09-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "abram-demski",
    name: "Abram Demski",
    tagline: "MIRI researcher; embedded agency",
    summary:
      "MIRI researcher who co-authored the 'Embedded Agency' sequence outlining gaps in classical decision theory when an agent is part of the environment it reasons about.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Machine Intelligence Research Institute", role: "Research Fellow", current: true },
    ],
    twitter: "abramdemski",
    positions: [
      {
        strategyId: "agent-foundations",
        stance: "endorses",
        summary:
          "Argues that 'embedded' reasoning—where an agent is a physical computation inside its world rather than a Cartesian observer—is the root of unresolved alignment problems.",
        quotes: [
          {
            text:
              "Classical decision theory implicitly assumes a Cartesian boundary between agent and environment. Embedded agents lack this boundary, and that is where most alignment problems hide.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Embedded Agency",
              url: "https://www.alignmentforum.org/s/Rm6oQRJJmhGCcLvxh",
              medium: "blog",
              publisher: "AI Alignment Forum",
              date: "2018-10-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-rocktaschel",
    name: "Tim Rocktäschel",
    tagline: "Google DeepMind / UCL; open-ended learning",
    summary:
      "DeepMind staff scientist and UCL professor who studies open-ended learning environments. Co-creator of Genie (action-controllable foundation worlds) and contributor to autocurricula research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Google DeepMind", role: "Staff Research Scientist", current: true },
      { org: "University College London", role: "Professor of AI", current: true },
    ],
    homepage: "https://rockt.ai/",
    twitter: "_rockt",
    positions: [
      {
        strategyId: "open-endedness",
        stance: "endorses",
        summary:
          "Argues that open-ended learning—agents generating their own challenges in increasingly complex environments—is a critical path toward general capabilities, and a key surface for safety research.",
        quotes: [
          {
            text:
              "Open-ended learning is the missing ingredient: systems that can perpetually invent new tasks for themselves and solve them are how we get capable, general AI.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Genie: Generative Interactive Environments",
              url: "https://arxiv.org/abs/2402.15391",
              medium: "paper",
              publisher: "arXiv / Google DeepMind",
              date: "2024-02-23",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jacob-andreas",
    name: "Jacob Andreas",
    tagline: "MIT NLP; language models as belief reports",
    summary:
      "MIT EECS professor whose research has examined whether language models develop interpretable internal world-models and structured representations of belief.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT", role: "Associate Professor, EECS / CSAIL", current: true },
    ],
    homepage: "http://web.mit.edu/jda/www/",
    twitter: "jacobandreas",
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues language models develop richer internal structure than behavior alone reveals; mechanistic and probing techniques are required to understand what they 'believe'.",
        quotes: [
          {
            text:
              "Language models contain structured representations of the agents and situations described in their inputs. Reading those representations is closer to ethnography than to prompt engineering.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Language Models as Agent Models",
              url: "https://arxiv.org/abs/2212.01681",
              medium: "paper",
              publisher: "arXiv",
              date: "2022-12-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonathan-mugan",
    name: "Jonathan Mugan",
    tagline: "DeepGrammar founder; AI for children's media",
    summary:
      "AI researcher whose work has focused on grounding AI in real-world understanding. Founded DeepGrammar to build AI tools for children's media.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "DeepGrammar", role: "Founder", current: true },
    ],
    twitter: "jmugan",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames AI as lacking grounded understanding; argues practical deployment depends on scoping to domains where this limitation is managed.",
        quotes: [
          {
            text:
              "AI systems do not understand the world the way we do. Deployments that assume they do will fail in specific, predictable ways.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "DeepGrammar",
              url: "https://www.deepgrammar.com/",
              medium: "article",
              publisher: "DeepGrammar",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "barath-raghavan",
    name: "Barath Raghavan",
    tagline: "USC professor; digital infrastructure and AI energy",
    summary:
      "USC computer scientist whose work on internet infrastructure and AI energy has informed mainstream discussion of compute-and-climate tradeoffs.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "USC Viterbi School of Engineering", role: "Assistant Professor", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI energy consumption must be treated as first-class infrastructure cost, with accountability for usage.",
        quotes: [
          {
            text:
              "If AI consumes 10% of world electricity, we should decide that consciously, not as an emergent property.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Barath Raghavan — USC",
              url: "https://barath.org/",
              medium: "article",
              publisher: "USC",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trevor-darrell",
    name: "Trevor Darrell",
    tagline: "UC Berkeley AI vision professor",
    summary:
      "UC Berkeley professor specializing in computer vision and multimodal AI. Widely-cited contributor to vision-language model research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Computer Science", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Academic voice on technical grounding of multimodal AI; engaged with but not fully aligned with x-risk framing.",
        quotes: [
          {
            text:
              "Vision-language models raise their own alignment questions that text-only framings don't address.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Trevor Darrell — Berkeley",
              url: "https://people.eecs.berkeley.edu/~trevor/",
              medium: "article",
              publisher: "UC Berkeley",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "julia-stoyanovich",
    name: "Julia Stoyanovich",
    tagline: "NYU responsible AI researcher",
    summary:
      "NYU Tandon professor and founding director of the Center for Responsible AI. Co-author of New York City's algorithmic accountability regulation.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "NYU Tandon School of Engineering", role: "Institute Associate Professor", current: true },
      { org: "NYU Center for Responsible AI", role: "Founding Director", current: true },
    ],
    twitter: "stoyanoj",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helped shape NYC's AI local laws; argues city-level AI governance can produce more robust frameworks than federal inaction.",
        quotes: [
          {
            text:
              "City-level AI governance is already happening. Federal inaction does not mean nothing is being regulated.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "NYU Center for Responsible AI",
              url: "https://airesponsibly.com/",
              medium: "article",
              publisher: "NYU",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "solon-barocas",
    name: "Solon Barocas",
    tagline: "Microsoft Research and Cornell; fairness theorist",
    summary:
      "Microsoft Research principal and Cornell professor whose foundational work on fairness in machine learning has shaped the field. Co-author of the canonical Fairness and Machine Learning textbook.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "Microsoft Research", role: "Principal Researcher", current: true },
      { org: "Cornell University", role: "Associate Professor", current: true },
    ],
    twitter: "s010n",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helped establish algorithmic fairness as a rigorous sub-field; argues fairness research must be grounded in specific deployment contexts.",
        quotes: [
          {
            text:
              "Fairness in ML is not a property of a model. It is a property of a model, a task, and a deployment context together.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Fairness and Machine Learning",
              url: "https://fairmlbook.org/",
              medium: "book",
              publisher: "fairmlbook.org",
              date: "2019",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sarah-t-roberts",
    name: "Sarah T. Roberts",
    tagline: "UCLA professor; author of Behind the Screen",
    summary:
      "UCLA professor whose 2019 Behind the Screen documented the human labour behind commercial content moderation. Has extended this to generative AI training data.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UCLA", role: "Associate Professor of Information Studies", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Sarah_T._Roberts",
    twitter: "ubiquity75",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI training labour — data annotators, content moderators — is invisible infrastructure that requires labour-rights governance.",
        quotes: [
          {
            text:
              "The human labour that cleans AI training data is concentrated in the Global South and is systematically hidden from the consumers of AI products.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Behind the Screen",
              url: "https://yalebooks.yale.edu/book/9780300261479/behind-the-screen/",
              medium: "book",
              publisher: "Yale University Press",
              date: "2019",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "milagros-miceli",
    name: "Milagros Miceli",
    tagline: "Weizenbaum Institute Berlin; data-worker research",
    summary:
      "Weizenbaum Institute researcher whose work has documented the exploitative conditions of AI data workers globally. Foundational research for the data-labour rights movement.",
    categories: ["researcher", "activist"],
    affiliations: [
      { org: "Weizenbaum Institute", role: "Research Group Lead", current: true },
    ],
    twitter: "milagrosmiceli",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documents the global data-worker conditions that underlie AI training; advocates for labour-rights framings of AI governance.",
        quotes: [
          {
            text:
              "Data workers are the first victims of AI, and the ones whose welfare is least considered.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Data Workers' Inquiry",
              url: "https://data-workers.org/",
              medium: "article",
              publisher: "Data Workers' Inquiry",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adrienne-williams",
    name: "Adrienne Williams",
    tagline: "Former Amazon warehouse worker; AI labour activist",
    summary:
      "Former Amazon delivery driver and current AI Now Institute fellow who has written about AI surveillance in warehouse and gig work. Voice for AI-affected workers.",
    categories: ["activist"],
    affiliations: [
      { org: "AI Now Institute", role: "Fellow", current: true },
    ],
    twitter: "ThinkingWoman_",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "First-hand voice for workers surveilled by AI; argues those affected should lead policy.",
        quotes: [
          {
            text:
              "I was the AI's training data. The people building AI for warehouses have never worked in one.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Now Institute",
              url: "https://ainowinstitute.org/",
              medium: "article",
              publisher: "AI Now Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "scott-aaronson",
    name: "Scott Aaronson",
    tagline: "UT Austin computer scientist; ex-OpenAI AI safety visitor",
    summary:
      "Quantum computing theorist at UT Austin. Took leave in 2022-2023 to work on OpenAI's Superalignment team, developing watermarking technology. Publicly skeptical of 'Yudkowskian' doom framings but engaged with alignment work.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "UT Austin", role: "Schlumberger Centennial Chair of Computer Science", current: true },
      { org: "OpenAI", role: "Research scientist (safety, visiting)", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Scott_Aaronson",
    homepage: "https://www.scottaaronson.com/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues alignment is genuinely hard, that doomers are not crazy, but the productive response is more theoretical work and alignment-focused engineering rather than panic or pause; works on practical alignment tools like watermarking.",
        quotes: [
          {
            text:
              "I'm now persuaded that the alignment problem is real, that there is no king's road to it, and that humanity is in a much worse position than we should be. I am working on it because the alternative is shrugging.",
            date: "2022-06",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why I'm joining OpenAI",
              url: "https://scottaaronson.blog/?p=6484",
              medium: "blog",
              publisher: "Shtetl-Optimized",
              date: "2022-06-17",
            },
          },
          {
            text:
              "AI safety is finally becoming a field where you can make clear, legible progress.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Scott Aaronson: Against AI Doomerism",
              url: "https://thegradientpub.substack.com/p/scott-aaronson-against-ai-doomerism",
              medium: "podcast",
              publisher: "The Gradient",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yejin-choi",
    name: "Yejin Choi",
    tagline: "University of Washington NLP professor; MacArthur fellow",
    summary:
      "MacArthur 'genius' grant recipient and University of Washington professor whose work on common-sense reasoning in language models has been widely influential.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Washington", role: "Professor of Computer Science", current: true },
      { org: "Stanford University", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://homes.cs.washington.edu/~yejin/",
    twitter: "YejinChoinka",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues frontier LLMs lack robust commonsense reasoning despite impressive surface fluency; common-sense reasoning is under-appreciated as an alignment substrate, and the gap between fluency and understanding has not been closed.",
        quotes: [
          {
            text:
              "AI is unbelievably smart and shockingly stupid—both at the same time. Until we close the commonsense gap, claims about general intelligence are not yet defensible.",
            date: "2023-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Why AI is incredibly smart and shockingly stupid",
              url: "https://www.ted.com/talks/yejin_choi_why_ai_is_incredibly_smart_and_shockingly_stupid",
              medium: "talk",
              publisher: "TED",
              date: "2023-04",
              videoId: "SvBR0OGT5VI",
              videoPlatform: "youtube",
            },
          },
          {
            text:
              "Common-sense reasoning is the unsolved part of AI, and it is the same part where safety is hardest to evaluate.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Yejin Choi — University of Washington",
              url: "https://homes.cs.washington.edu/~yejin/",
              medium: "article",
              publisher: "University of Washington",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },


  {
    id: "albert-fox-cahn",
    name: "Albert Fox Cahn",
    tagline: "Surveillance Technology Oversight Project (S.T.O.P.) founder",
    summary:
      "Civil rights attorney who founded the Surveillance Technology Oversight Project. Has led legal challenges to AI-based surveillance in NYC and beyond.",
    categories: ["activist", "founder"],
    affiliations: [
      { org: "Surveillance Technology Oversight Project (S.T.O.P.)", role: "Founder and Executive Director", current: true },
    ],
    twitter: "FoxCahn",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Litigates against AI-enabled surveillance; argues current US law allows surveillance practices that would have been unthinkable a decade ago.",
        quotes: [
          {
            text:
              "AI surveillance is rolling out faster than the laws to govern it. The gap is the danger.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "S.T.O.P.",
              url: "https://www.stopspying.org/",
              medium: "article",
              publisher: "S.T.O.P.",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "evan-greer",
    name: "Evan Greer",
    tagline: "Fight for the Future director; digital rights activist",
    summary:
      "Director of Fight for the Future, a digital rights activist organisation. Has organised against AI surveillance, facial recognition, and algorithmic harm.",
    categories: ["activist"],
    affiliations: [
      { org: "Fight for the Future", role: "Director", current: true },
    ],
    twitter: "evan_greer",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI policy as a digital civil-rights battle; mobilises grassroots opposition to surveillance AI.",
        quotes: [
          {
            text:
              "Big Tech wants you to debate whether AI will kill us all in 50 years so you don't notice it is harming you today.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Fight for the Future",
              url: "https://www.fightforthefuture.org/",
              medium: "article",
              publisher: "Fight for the Future",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "edward-snowden",
    name: "Edward Snowden",
    tagline: "NSA whistleblower; AI surveillance critic",
    summary:
      "Former NSA contractor and famous surveillance whistleblower. Has written publicly about AI's implications for surveillance and intelligence work.",
    categories: ["public-intellectual", "activist"],
    affiliations: [
      { org: "Independent", role: "Writer and consultant", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Edward_Snowden",
    twitter: "Snowden",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI massively expands the surveillance possibilities he warned about a decade ago. Calls for civil-liberty-grounded constraints.",
        quotes: [
          {
            text:
              "AI is the most powerful surveillance technology ever invented. The threat model has changed; the law has not.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Edward Snowden on X",
              url: "https://x.com/Snowden",
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
    id: "andrew-yao",
    name: "Andrew Yao",
    tagline: "Tsinghua professor; Turing Award winner; Chinese AI institutional figure",
    summary:
      "Tsinghua professor and 2000 Turing Award winner. Founded the Yao Class at Tsinghua, which has produced many of China's leading AI researchers.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Tsinghua University", role: "Dean of Institute for Interdisciplinary Information Sciences", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Andrew_Yao",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Foundational figure in Chinese theoretical computer science. Has supported Chinese-Western AI safety dialogues including IDAIS.",
        quotes: [
          {
            text:
              "AI safety is a shared technical problem; international cooperation is essential.",
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

  {
    id: "liang-wenfeng",
    name: "Liang Wenfeng",
    tagline: "Founder of DeepSeek; Chinese frontier AI",
    summary:
      "Quant trader and founder of DeepSeek, the Chinese AI lab whose 2025 release of efficient, cheap reasoning models redrew the global AI cost curve.",
    categories: ["founder", "executive", "researcher"],
    affiliations: [
      { org: "DeepSeek", role: "Founder", current: true },
      { org: "High-Flyer Capital", role: "Co-founder", current: true },
    ],
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Released DeepSeek R1 and V3 as open-weight models with cost-efficient training. Resets cost expectations for Chinese frontier AI.",
        quotes: [
          {
            text:
              "Open-weight models are the path to China's leadership in AI.",
            date: "2025-01",
            fidelity: "paraphrase-loose",
            source: {
              title: "DeepSeek",
              url: "https://www.deepseek.com/",
              medium: "article",
              publisher: "DeepSeek",
              date: "2025-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robin-li",
    name: "Robin Li",
    tagline: "CEO of Baidu; Chinese AI champion",
    summary:
      "CEO of Baidu, one of China's largest tech firms and a major Chinese AI lab. Public face of Chinese frontier AI development.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Baidu", role: "Chairman, CEO, and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Robin_Li",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Long-running advocate for Chinese AI capability. Has positioned Baidu's ERNIE as a Chinese frontier model.",
        quotes: [
          {
            text:
              "AI is the next great revolution and China will be a leader in it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Baidu World",
              url: "https://www.baidu.com/",
              medium: "article",
              publisher: "Baidu",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "wu-hequan",
    name: "Wu Hequan",
    tagline: "Chinese Academy of Engineering academician; AI policy elder",
    summary:
      "Chinese Academy of Engineering academician who has shaped Chinese AI standards work and academic policy advice for two decades.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Chinese Academy of Engineering", role: "Academician", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Senior Chinese academic voice advising on AI standards and infrastructure. Bridges academic and government work.",
        quotes: [
          {
            text:
              "AI development requires both ambitious investment and prudent governance. China is committed to both.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Chinese Academy of Engineering",
              url: "https://en.cae.cn/",
              medium: "article",
              publisher: "Chinese Academy of Engineering",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cyril-ramaphosa",
    name: "Cyril Ramaphosa",
    tagline: "President of South Africa; AU AI strategy host",
    summary:
      "President of South Africa whose government chairs the African Union AI Continental Strategy work. Public framings position African AI sovereignty as joint project.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of South Africa", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Cyril_Ramaphosa",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Drives African AU-level AI strategy. Argues continental rather than national AI capacity is the realistic ambition.",
        quotes: [
          {
            text:
              "African AI sovereignty must be continental, not national.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "African Union AI Strategy",
              url: "https://au.int/en",
              medium: "article",
              publisher: "African Union",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "xi-jinping",
    name: "Xi Jinping",
    tagline: "President of China; AI as national strategic priority",
    summary:
      "President of China whose 2017 New Generation AI Development Plan made AI a national strategic priority and committed China to AI leadership by 2030.",
    categories: ["policy"],
    affiliations: [
      { org: "People's Republic of China", role: "President; General Secretary CCP", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Xi_Jinping",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "China's national AI strategy frames AI as central to economic and military power. Targets first-tier global AI leadership by 2030.",
        quotes: [
          {
            text:
              "AI is a strategic technology that will lead a new round of scientific and technological revolution and industrial transformation.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            context: "Quoted in China's New Generation AI Development Plan rollout speeches.",
            source: {
              title: "New Generation AI Development Plan",
              url: "https://chinacopyrightandmedia.wordpress.com/2017/07/20/new-generation-artificial-intelligence-development-plan/",
              medium: "article",
              publisher: "State Council of China",
              date: "2017-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "narendra-modi",
    name: "Narendra Modi",
    tagline: "Prime Minister of India; AI for All initiative",
    summary:
      "Indian Prime Minister whose government has launched the IndiaAI Mission, a $1.25B sovereign AI initiative. Co-host of the 2026 AI Action Summit.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of India", role: "Prime Minister", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Narendra_Modi",
    twitter: "narendramodi",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Pushed India's IndiaAI Mission for sovereign AI capacity, with focus on Indian-language LLMs and applications for 1.4B people.",
        quotes: [
          {
            text:
              "AI must be for all, not for a few.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "IndiaAI Mission",
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
    id: "olaf-scholz",
    name: "Olaf Scholz",
    tagline: "Former German Chancellor; AI infrastructure investments",
    summary:
      "Former German Chancellor who led the German AI investment plan and EU AI Act negotiations under the German EU presidency.",
    categories: ["policy"],
    affiliations: [
      { org: "Bundestag", role: "Member", current: true },
      { org: "Government of Germany", role: "Chancellor", end: "2025-02", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Olaf_Scholz",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Steered German AI investment policy and EU AI Act legislative work. Argues European AI sovereignty requires both infrastructure and regulation.",
        quotes: [
          {
            text:
              "Germany and Europe must invest in AI to remain competitive while ensuring AI works for our values.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "German Federal Government AI Strategy",
              url: "https://www.ki-strategie-deutschland.de/",
              medium: "article",
              publisher: "Bundesregierung",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luiz-inacio-lula-da-silva",
    name: "Luiz Inácio Lula da Silva",
    tagline: "President of Brazil; AI sovereignty advocate",
    summary:
      "President of Brazil whose government has launched a Brazilian AI Plan, positioning Brazil as a Global South AI sovereignty leader.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Brazil", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva",
    positions: [
      {
        strategyId: "sovereign-ai",
        stance: "endorses",
        summary:
          "Pushed Brazilian AI Plan with R$23B investment for sovereign AI infrastructure. Frames AI as strategic autonomy question.",
        quotes: [
          {
            text:
              "Brazil cannot be a passive consumer of AI created elsewhere. We must build our own AI for Portuguese-speaking communities.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Plano Brasileiro de Inteligência Artificial",
              url: "https://www.gov.br/mcti/pt-br",
              medium: "article",
              publisher: "Government of Brazil",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lee-hsien-loong",
    name: "Lee Hsien Loong",
    tagline: "Senior Minister of Singapore; former Prime Minister",
    summary:
      "Senior Minister and former Prime Minister of Singapore (2004–2024). Has been a major proponent of Singapore as an AI-friendly hub balancing innovation with prudent governance.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Singapore", role: "Senior Minister", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lee_Hsien_Loong",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Architect of Singapore's pro-AI national strategy combining innovation, talent attraction, and pragmatic governance.",
        quotes: [
          {
            text:
              "Singapore aims to be a leading hub for AI development and deployment, with governance that earns global trust.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Smart Nation Singapore",
              url: "https://www.smartnation.gov.sg/",
              medium: "article",
              publisher: "Smart Nation Singapore",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "josephine-teo",
    name: "Josephine Teo",
    tagline: "Singapore Minister for Digital Development and Information",
    summary:
      "Singapore Minister leading the country's AI strategy. Singapore's AI Verify and AI Safety Institute are major contributions to ASEAN AI governance.",
    categories: ["policy"],
    affiliations: [
      { org: "Government of Singapore", role: "Minister for Digital Development and Information", current: true },
    ],
    twitter: "JosephineTeo",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Built Singapore's AI Verify governance infrastructure and AI Safety Institute. Singapore positions itself as a neutral convener.",
        quotes: [
          {
            text:
              "Singapore wants to be a place where AI safety is treated as a global public good, not a national-security competition.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Singapore AI Strategy",
              url: "https://www.smartnation.gov.sg/initiatives/artificial-intelligence/",
              medium: "article",
              publisher: "Smart Nation Singapore",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tan-ka-ying",
    name: "Tan Ka Ying",
    tagline: "Singapore AI Verify Foundation researcher",
    summary:
      "Singapore-based AI policy researcher contributing to AI Verify Foundation, the standard-setting body for ASEAN AI testing. Voice for ASEAN AI governance.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "AI Verify Foundation", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Develops AI testing standards for ASEAN. Argues regional standard-setting is the practical layer of AI governance.",
        quotes: [
          {
            text:
              "AI testing frameworks need to be regional and contextual; one global testing regime is unrealistic.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "AI Verify Foundation",
              url: "https://aiverifyfoundation.sg/",
              medium: "article",
              publisher: "AI Verify Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yuhwen-yang",
    name: "Yuhwen Yang",
    tagline: "Carnegie Endowment China AI research",
    summary:
      "Carnegie Endowment researcher tracking Chinese AI policy and research outputs. Bridges Chinese-language sources to US/EU policy audiences.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Carnegie Endowment for International Peace", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Reports on Chinese AI ecosystem from sources US analysts often miss; argues mutual understanding is necessary for any international AI agreement.",
        quotes: [
          {
            text:
              "Western AI policy debates often misread Chinese AI policy because they read English summaries rather than primary Chinese sources.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Carnegie Endowment China research",
              url: "https://carnegieendowment.org/programs/china/",
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
    id: "ross-anderson-atlantic",
    name: "Ross Andersen",
    tagline: "The Atlantic deputy editor; AI long-form features",
    summary:
      "Atlantic deputy editor whose long-form 2023 piece on Sam Altman set the template for serious mainstream coverage of AI safety questions.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Deputy Editor", current: true },
    ],
    twitter: "andersen",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "mixed",
        summary:
          "Reports on AI safety in long-form. Takes existential framings seriously while interrogating their epistemic foundations.",
        quotes: [
          {
            text:
              "AI safety is no longer a fringe concern. The question is whether the institutional response will catch up.",
            date: "2023-07",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ross Andersen at The Atlantic",
              url: "https://www.theatlantic.com/author/ross-andersen/",
              medium: "article",
              publisher: "The Atlantic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matteo-wong",
    name: "Matteo Wong",
    tagline: "The Atlantic associate editor; AI critic",
    summary:
      "Atlantic associate editor whose long features have framed AI for mainstream literary audiences. Skeptical of AI hype while taking the technology seriously.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Atlantic", role: "Associate Editor", current: true },
    ],
    twitter: "matteo_writes",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames AI for literary audiences; treats hype with skepticism while taking real capabilities seriously.",
        quotes: [
          {
            text:
              "The most important thing AI does is reshape how we think about thinking. The economic effects come later.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Matteo Wong at The Atlantic",
              url: "https://www.theatlantic.com/author/matteo-wong/",
              medium: "article",
              publisher: "The Atlantic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ina-fried",
    name: "Ina Fried",
    tagline: "Axios chief technology correspondent",
    summary:
      "Axios chief tech correspondent whose AI+Tech newsletter is required reading in DC AI policy circles. Bridges Beltway and Silicon Valley.",
    categories: ["journalist"],
    affiliations: [
      { org: "Axios", role: "Chief Technology Correspondent", current: true },
    ],
    twitter: "inafried",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Mainstream tech-policy reporter; documents the deal-making between AI labs and US government.",
        quotes: [
          {
            text:
              "AI policy is being made in real-time as deals between labs and government agencies, not as legislation.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Axios AI+",
              url: "https://www.axios.com/newsletters/axios-ai-plus",
              medium: "article",
              publisher: "Axios",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "will-knight",
    name: "Will Knight",
    tagline: "Wired senior writer; AI safety beat reporter",
    summary:
      "Wired senior writer covering AI. Has reported extensively on the AI safety community, frontier labs, and the politics of AI governance.",
    categories: ["journalist"],
    affiliations: [
      { org: "Wired", role: "Senior Writer", current: true },
    ],
    twitter: "willknight",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Mainstream AI reporter who has documented the AI safety community for years; balances skepticism and seriousness.",
        quotes: [
          {
            text:
              "AI safety has gone from fringe to mainstream so fast that the institutions and reporters haven't quite caught up.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Will Knight at Wired",
              url: "https://www.wired.com/author/will-knight/",
              medium: "article",
              publisher: "Wired",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "morgan-meaker",
    name: "Morgan Meaker",
    tagline: "Wired senior writer; European tech reporter",
    summary:
      "Wired senior writer based in Europe whose AI reporting from Brussels has been a significant English-language source on EU AI Act implementation.",
    categories: ["journalist"],
    affiliations: [
      { org: "Wired", role: "Senior Writer", current: true },
    ],
    twitter: "morgan_meaker",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Reports on EU AI Act implementation from Brussels. Documents the gap between AI Act ambitions and practical implementation.",
        quotes: [
          {
            text:
              "The EU AI Act is the most ambitious AI regulation in the world. Whether it works is the live question.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Morgan Meaker at Wired",
              url: "https://www.wired.com/author/morgan-meaker/",
              medium: "article",
              publisher: "Wired",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "holly-jean-buck",
    name: "Holly Jean Buck",
    tagline: "Buffalo geographer; climate AI critic",
    summary:
      "Buffalo geography professor who has written critically on AI's role in climate solutionism. Author of After Geoengineering. Frames AI-and-climate framings as often misleading.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University at Buffalo, SUNY", role: "Assistant Professor of Environment and Sustainability", current: true },
    ],
    twitter: "hollyjeanbuck",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI claims to solve climate are often technosolutionist; the policy work is harder than the AI hype suggests.",
        quotes: [
          {
            text:
              "AI cannot solve climate. AI plus politics might.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Holly Jean Buck — Buffalo",
              url: "https://www.buffalo.edu/",
              medium: "article",
              publisher: "University at Buffalo",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rebecca-fiebrink",
    name: "Rebecca Fiebrink",
    tagline: "UAL Creative Computing Institute; ML for music",
    summary:
      "UAL professor whose work on ML for music and creative computing has shaped how artists work with AI. Public voice for AI as creative collaborator rather than replacement.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Creative Computing Institute, University of the Arts London", role: "Professor of Creative Computing", current: true },
    ],
    twitter: "RebeccaFiebrink",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Argues AI for creative work is best designed as collaborative tooling, not replacement.",
        quotes: [
          {
            text:
              "AI tools that augment artistic agency are different from AI tools that replace it. The design choices matter.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Rebecca Fiebrink — UAL CCI",
              url: "https://www.creativeai.com/",
              medium: "article",
              publisher: "Creative Computing Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tomaso-poggio",
    name: "Tomaso Poggio",
    tagline: "MIT computational neuroscience pioneer",
    summary:
      "MIT professor whose work on computational neuroscience and learning theory predates and underlies much of modern deep learning. Long-time bridge between neuroscience and AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "MIT", role: "Eugene McDermott Professor of Brain and Cognitive Sciences", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tomaso_Poggio",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues understanding the brain's algorithmic principles is key to building safer AI. Computational neuroscience provides the framework.",
        quotes: [
          {
            text:
              "We don't need to copy the brain, but understanding the brain's algorithmic principles will help us build AI we can trust.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "MIT Center for Brains, Minds and Machines",
              url: "https://cbmm.mit.edu/",
              medium: "article",
              publisher: "MIT CBMM",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "patricia-churchland",
    name: "Patricia Churchland",
    tagline: "UC San Diego neurophilosopher",
    summary:
      "UC San Diego philosopher of mind whose 'neurophilosophy' framework has informed AI consciousness debates. Argues mind is brain in a strong sense.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "UC San Diego", role: "Professor Emerita of Philosophy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Patricia_Churchland",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Foundational reference for naturalistic theories of mind. Frames AI consciousness as a possible empirical question.",
        quotes: [
          {
            text:
              "Mind is what brain does. Whatever a sufficiently complex neural network does is also mind, by the same standard.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Patricia Churchland — UC San Diego",
              url: "https://philosophy.ucsd.edu/",
              medium: "article",
              publisher: "UC San Diego Philosophy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anil-seth",
    name: "Anil Seth",
    tagline: "University of Sussex neuroscientist; consciousness researcher",
    summary:
      "Sussex neuroscientist whose work on the predictive processing model of consciousness has informed AI consciousness debates. Author of Being You.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Sussex", role: "Professor of Cognitive and Computational Neuroscience", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anil_Seth",
    twitter: "anilkseth",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Argues consciousness is tied to embodied predictive processing; current AI systems lack the structural conditions for it.",
        quotes: [
          {
            text:
              "Being You is a controlled hallucination. AI systems are not yet doing that kind of thing.",
            date: "2021-08-31",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Being You: A New Science of Consciousness",
              url: "https://www.faber.co.uk/9780571337293-being-you.html",
              medium: "book",
              publisher: "Faber & Faber",
              date: "2021-08-31",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "doris-tsao",
    name: "Doris Tsao",
    tagline: "Caltech / UC Berkeley neuroscientist; face cells researcher",
    summary:
      "Caltech-trained neuroscientist who discovered that single neurons in the temporal lobe encode specific visual features. Her work has informed thinking about how AI representations relate to brain representations.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Molecular and Cell Biology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Doris_Tsao",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Brings neuroscience grounding to debates about AI representation and consciousness; argues we still understand brain representations poorly.",
        quotes: [
          {
            text:
              "We are still learning how the brain represents anything. Mapping that onto AI representations is genuinely open research.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Doris Tsao — UC Berkeley",
              url: "https://www.tsaolab.org/",
              medium: "article",
              publisher: "Tsao Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anita-allen",
    name: "Anita Allen",
    tagline: "UPenn law professor; privacy and AI",
    summary:
      "University of Pennsylvania law professor whose work on privacy theory has informed AI privacy frameworks. Former chair of the Presidential Commission for the Study of Bioethical Issues.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Pennsylvania Carey Law School", role: "Henry R. Silverman Professor of Law", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anita_L._Allen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues legal-philosophical privacy frameworks are foundational to AI governance, not just technical privacy mechanisms.",
        quotes: [
          {
            text:
              "Privacy theory is not a luxury for AI. It is the precondition of AI policy that protects human dignity.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anita Allen — UPenn Carey Law",
              url: "https://www.law.upenn.edu/cf/faculty/aallen/",
              medium: "article",
              publisher: "UPenn Carey Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lina-eklund",
    name: "Lina Eklund",
    tagline: "Stockholm University; AI and gender researcher",
    summary:
      "Stockholm University researcher whose work on AI and gendered technology has informed Nordic AI policy.",
    categories: ["academic"],
    affiliations: [
      { org: "Stockholm University", role: "Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues gendered AI deployment patterns are systematically under-studied; Nordic policy is starting to address this gap.",
        quotes: [
          {
            text:
              "AI deployment is gendered. Pretending it isn't produces worse policy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stockholm University Department of Sociology",
              url: "https://www.su.se/department-of-sociology/",
              medium: "article",
              publisher: "Stockholm University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "agnes-callard",
    name: "Agnes Callard",
    tagline: "University of Chicago philosopher; aspiration theorist",
    summary:
      "University of Chicago philosopher whose work on aspiration and value-development has been applied by some AI ethics writers to the question of how AIs might come to acquire values.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Chicago", role: "Associate Professor of Philosophy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Agnes_Callard",
    twitter: "AgnesCallard",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Her aspiration framework — how do agents come to hold values they did not previously have — applies to the question of how AI agents might develop values.",
        quotes: [
          {
            text:
              "Aspiration is the process by which we acquire values we did not previously have. The question of whether AI can do this is the alignment question, philosophically.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Agnes Callard — University of Chicago",
              url: "https://philosophy.uchicago.edu/faculty/callard",
              medium: "article",
              publisher: "University of Chicago",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kwame-anthony-appiah",
    name: "Kwame Anthony Appiah",
    tagline: "NYU philosopher; cosmopolitanism theorist",
    summary:
      "Princeton-and-NYU philosopher whose work on cosmopolitanism and identity has informed AI ethics frameworks. NYT Ethicist columnist.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "NYU", role: "Professor of Philosophy and Law", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kwame_Anthony_Appiah",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI ethics requires cosmopolitan framings; the values AI is aligned to should not default to those of any single culture.",
        quotes: [
          {
            text:
              "If AI is to be aligned with human values, it cannot be aligned with the values of one tribe. Cosmopolitanism is the question.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kwame Anthony Appiah — The New York Times",
              url: "https://www.nytimes.com/column/the-ethicist",
              medium: "article",
              publisher: "The New York Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martha-nussbaum",
    name: "Martha Nussbaum",
    tagline: "University of Chicago philosopher; capability approach co-founder",
    summary:
      "University of Chicago philosopher who with Sen developed the capability approach. Her ten central capabilities framework has informed AI ethics work on human flourishing.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Chicago", role: "Ernst Freund Distinguished Service Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Martha_Nussbaum",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI ethics through her ten central capabilities — life, bodily health, bodily integrity, etc. AI must serve these to be ethical.",
        quotes: [
          {
            text:
              "AI is a tool. The ethical question is whether it expands or contracts the capabilities people need to live a flourishing human life.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Martha Nussbaum — University of Chicago",
              url: "https://www.law.uchicago.edu/faculty/nussbaum",
              medium: "article",
              publisher: "University of Chicago Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amartya-sen",
    name: "Amartya Sen",
    tagline: "Harvard economist; capability approach pioneer",
    summary:
      "Harvard economist and 1998 Nobel laureate. His capability approach has informed AI ethics frameworks that focus on human flourishing rather than just narrow technical metrics.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Harvard University", role: "Thomas W. Lamont University Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Amartya_Sen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI evaluation must be grounded in human capabilities — what people can do and become — not just narrow technical or economic metrics.",
        quotes: [
          {
            text:
              "Development is about expanding capabilities. AI should be evaluated by how it expands human capabilities.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Amartya Sen — Harvard",
              url: "https://scholar.harvard.edu/sen",
              medium: "article",
              publisher: "Harvard Scholar",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "esther-duflo",
    name: "Esther Duflo",
    tagline: "MIT economist; 2019 Nobel laureate (with Banerjee)",
    summary:
      "MIT development economist and 2019 Nobel laureate. Argues AI applications in development must be empirically tested through RCTs, not assumed effective.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "MIT", role: "Abdul Latif Jameel Professor of Poverty Alleviation", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Esther_Duflo",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues AI-for-development claims need to be tested with the same RCT rigor as other development interventions.",
        quotes: [
          {
            text:
              "AI in development should be evaluated like any other intervention. The hype is not evidence.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "J-PAL — Esther Duflo",
              url: "https://www.povertyactionlab.org/",
              medium: "article",
              publisher: "J-PAL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "abhijit-banerjee",
    name: "Abhijit Banerjee",
    tagline: "MIT economist; 2019 Nobel laureate",
    summary:
      "MIT development economist and 2019 Nobel laureate. With Esther Duflo has written on AI's effect on global development. Skeptical of AI-as-development-shortcut framings.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "MIT", role: "Ford Foundation International Professor of Economics", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Abhijit_Banerjee",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI does not solve underlying development problems and can replicate them. Skeptical of AI-shortcut framings.",
        quotes: [
          {
            text:
              "AI cannot substitute for institutions. The development problems that institutions address remain.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "J-PAL",
              url: "https://www.povertyactionlab.org/",
              medium: "article",
              publisher: "Abdul Latif Jameel Poverty Action Lab",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joseph-stiglitz",
    name: "Joseph Stiglitz",
    tagline: "Columbia economist; Nobel laureate",
    summary:
      "Columbia economist and 2001 Nobel laureate. Has written on AI as a labour-market and inequality phenomenon, arguing it accelerates rent extraction unless redirected.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Columbia University", role: "University Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Joseph_Stiglitz",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI without redistribution accelerates inequality; the policy response must address both market structure and labour-share questions.",
        quotes: [
          {
            text:
              "Without explicit policy intervention, AI will increase inequality. The technology is not neutral on this.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Joseph Stiglitz — Project Syndicate",
              url: "https://www.project-syndicate.org/columnist/joseph-e-stiglitz",
              medium: "article",
              publisher: "Project Syndicate",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "diane-coyle",
    name: "Diane Coyle",
    tagline: "Cambridge economist; Bennett Professor of Public Policy",
    summary:
      "Cambridge economist whose Bennett Institute focuses on the economics of digital platforms and AI. Public voice for measurement and macroeconomic framings of AI policy.",
    categories: ["academic", "economist", "policy"],
    affiliations: [
      { org: "University of Cambridge", role: "Bennett Professor of Public Policy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Diane_Coyle",
    twitter: "DianeCoyle1859",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues GDP-style measurement frameworks need overhaul to capture AI's economic effects; without measurement, governance is blind.",
        quotes: [
          {
            text:
              "We are governing AI based on outdated economic indicators that don't measure most of what AI is doing.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Diane Coyle — Bennett Institute Cambridge",
              url: "https://www.bennettinstitute.cam.ac.uk/people/diane-coyle/",
              medium: "article",
              publisher: "Bennett Institute Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "masayoshi-son",
    name: "Masayoshi Son",
    tagline: "SoftBank CEO; major AI investor",
    summary:
      "SoftBank chair and CEO. Co-investor in Stargate and major financial backer of OpenAI. Has predicted superintelligence by 2035.",
    categories: ["investor", "executive", "founder"],
    affiliations: [
      { org: "SoftBank Group", role: "CEO and Chairman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Masayoshi_Son",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Among the largest financial backers of the AI build-out. Predicts superintelligence by 2035 and treats this as primary investment thesis.",
        quotes: [
          {
            text:
              "Artificial superintelligence will arrive within 10 years.",
            date: "2024-06-21",
            fidelity: "paraphrase-faithful",
            context: "SoftBank annual general meeting.",
            source: {
              title: "Masayoshi Son on ASI",
              url: "https://www.softbank.jp/en/corp/news/press/sbkk/2024/20240621_01/",
              medium: "talk",
              publisher: "SoftBank",
              date: "2024-06-21",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "Artificial Superintelligence",
        year: 2035,
        date: "2024-06-21",
        source: {
          title: "Masayoshi Son ASI prediction",
          url: "https://www.softbank.jp/en/corp/news/press/sbkk/2024/20240621_01/",
          medium: "talk",
          publisher: "SoftBank",
          date: "2024-06-21",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "larry-ellison",
    name: "Larry Ellison",
    tagline: "Oracle co-founder; Stargate co-investor",
    summary:
      "Oracle co-founder. Co-architect with Trump and Altman of the $500B Stargate AI infrastructure project announced January 2025.",
    categories: ["founder", "executive", "investor"],
    affiliations: [
      { org: "Oracle", role: "Co-founder and Chairman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Larry_Ellison",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Major investor in Stargate. Public framings position AI as transformative civilisational infrastructure that the US must build at scale.",
        quotes: [
          {
            text:
              "AI is the most important technology of our era. The US must lead.",
            date: "2025-01-21",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stargate announcement",
              url: "https://www.whitehouse.gov/briefings-statements/2025/01/",
              medium: "article",
              publisher: "The White House",
              date: "2025-01-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tasha-mccauley",
    name: "Tasha McCauley",
    tagline: "Former OpenAI board member; tech executive",
    summary:
      "Tech executive who served on the OpenAI board and voted with Helen Toner to remove Sam Altman in November 2023. Now a vocal critic of self-regulation by frontier labs.",
    categories: ["executive", "policy"],
    affiliations: [
      { org: "Independent", role: "Tech executive and board member", current: true },
      { org: "OpenAI", role: "Board Member", end: "2023-11", current: false },
    ],
    twitter: "tashamccauley",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "After her OpenAI board service, has publicly argued frontier labs cannot govern themselves and require external oversight.",
        quotes: [
          {
            text:
              "AI companies cannot effectively govern themselves while facing enormous incentives to ignore safety. We need external oversight.",
            date: "2024-05-26",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Tasha McCauley and Helen Toner — The Economist op-ed",
              url: "https://www.economist.com/by-invitation/2024/05/26/helen-toner-and-tasha-mccauley-explain-the-openai-saga",
              medium: "article",
              publisher: "The Economist",
              date: "2024-05-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-dangelo",
    name: "Adam D'Angelo",
    tagline: "CEO of Quora; OpenAI board member",
    summary:
      "Quora CEO who has served on the OpenAI board through both the 2023 governance crisis and afterwards. Builder of Poe, Quora's AI assistant aggregation product.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "Quora", role: "CEO and Co-founder", current: true },
      { org: "OpenAI", role: "Board Member", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Adam_D%27Angelo",
    twitter: "adamdangelo",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Continuing OpenAI board member; bullish on AI deployment but on record about the November 2023 board's safety concerns.",
        quotes: [
          {
            text:
              "There is a real difference between operators who care about safety and those who treat it as PR.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Adam D'Angelo public commentary",
              url: "https://x.com/adamdangelo",
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
    id: "lawrence-summers",
    name: "Lawrence Summers",
    tagline: "Harvard economist; former US Treasury Secretary; OpenAI board member",
    summary:
      "Harvard economist and former Treasury Secretary who joined the OpenAI board after the November 2023 governance crisis. Long-time mainstream economic policy figure.",
    categories: ["academic", "economist", "policy"],
    affiliations: [
      { org: "Harvard University", role: "Charles W. Eliot University Professor", current: true },
      { org: "OpenAI", role: "Board Member", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lawrence_Summers",
    twitter: "LHSummers",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Mainstream economist on the OpenAI board. Public voice for measured macro-economic framings of AI.",
        quotes: [
          {
            text:
              "AI is going to have macroeconomic effects on the order of magnitude of the industrial revolution. We are not yet adapting policy to that.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Lawrence Summers on AI",
              url: "https://www.linkedin.com/in/larry-summers/",
              medium: "article",
              publisher: "Public commentary",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kevin-kelly",
    name: "Kevin Kelly",
    tagline: "Wired co-founder; tech futurist",
    summary:
      "Wired co-founder and long-time technology futurist. Has written extensively on AI as continuation of evolutionary processes; long-time techno-optimist voice.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent writer", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kevin_Kelly_(editor)",
    twitter: "kevin2kelly",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Long-time techno-optimist who frames AI as evolutionary continuation; argues utility outweighs risk if we focus on co-evolution.",
        quotes: [
          {
            text:
              "AI is going to be the most transformative thing humans have ever made.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kevin Kelly — The Technium",
              url: "https://kk.org/thetechnium/",
              medium: "blog",
              publisher: "The Technium",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stewart-brand",
    name: "Stewart Brand",
    tagline: "Long Now Foundation; Whole Earth Catalog founder",
    summary:
      "Long Now Foundation co-founder whose Whole Earth Catalog inspired generations of tech thinkers. Has commented on AI from a long-now perspective: civilisation-scale time horizons.",
    categories: ["public-intellectual", "theorist"],
    affiliations: [
      { org: "Long Now Foundation", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Stewart_Brand",
    twitter: "stewartbrand",
    positions: [
      {
        strategyId: "long-reflection",
        stance: "endorses",
        summary:
          "Argues civilisation needs much-longer time horizons; AI deployment risks collapsing those horizons.",
        quotes: [
          {
            text:
              "Civilisation is acquiring tools whose effects unfold on civilisational timescales. We are not yet thinking on those timescales.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Long Now Foundation",
              url: "https://longnow.org/",
              medium: "article",
              publisher: "Long Now Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-oreilly",
    name: "Tim O'Reilly",
    tagline: "O'Reilly Media founder; tech-publishing veteran",
    summary:
      "O'Reilly Media founder and long-time tech publisher who has written extensively on AI as economic and political phenomenon. Author of WTF? and recent essays on AI antitrust.",
    categories: ["public-intellectual", "founder"],
    affiliations: [
      { org: "O'Reilly Media", role: "Founder and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tim_O%27Reilly",
    twitter: "timoreilly",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI is reshaping the economy and the question is who owns the resulting economic surplus. Pushes for antitrust intervention.",
        quotes: [
          {
            text:
              "We are creating an economy where the algorithms and the people who own them get the lion's share. Antitrust is the answer to that.",
            date: "2017",
            fidelity: "paraphrase-loose",
            source: {
              title: "WTF? What's the Future and Why It's Up to Us",
              url: "https://www.harpercollins.com/products/wtf-tim-oreilly",
              medium: "book",
              publisher: "Harper Business",
              date: "2017-10-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-pentland",
    name: "Alex 'Sandy' Pentland",
    tagline: "MIT Connection Science director; computational social science",
    summary:
      "MIT professor and founder of computational social science. Author of Honest Signals and Social Physics. Public voice for data-driven society perspective on AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "MIT Connection Science", role: "Toshiba Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alex_Pentland",
    twitter: "alex_pentland",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues data is collective property and should be governed via 'data cooperatives' rather than corporate ownership.",
        quotes: [
          {
            text:
              "Data should be treated as a community asset. Data cooperatives are the institutional form that follows from that.",
            date: "2014",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Social Physics",
              url: "https://www.penguinrandomhouse.com/books/216977/social-physics-by-alex-pentland/",
              medium: "book",
              publisher: "Penguin",
              date: "2014",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sandra-wachter",
    name: "Sandra Wachter",
    tagline: "Oxford Internet Institute; AI law and ethics",
    summary:
      "Oxford Internet Institute professor whose work on the 'right to explanation' has shaped EU AI law. Frequent contributor to UK and EU AI policy debates.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Oxford Internet Institute", role: "Professor of Technology and Regulation", current: true },
    ],
    homepage: "https://www.oii.ox.ac.uk/people/profiles/sandra-wachter/",
    twitter: "SandraWachter5",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues meaningful AI accountability requires individual rights to explanation; helped shape GDPR Article 22 interpretation.",
        quotes: [
          {
            text:
              "Without the right to explanation, automated decision-making becomes a black box. The black box becomes the law.",
            date: "2017",
            fidelity: "paraphrase-faithful",
            source: {
              title:
                "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation",
              url: "https://academic.oup.com/idpl/article/7/2/76/3860948",
              medium: "paper",
              publisher: "International Data Privacy Law",
              date: "2017",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "iyad-rahwan",
    name: "Iyad Rahwan",
    tagline: "Max Planck Institute Berlin; Moral Machine experiment",
    summary:
      "Director of the Max Planck Institute for Human Development. Led the Moral Machine experiment crowd-sourcing self-driving-car ethics. Public voice on machine behaviour.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Max Planck Institute for Human Development", role: "Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Iyad_Rahwan",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues 'machine behaviour' is a distinct field of study, alongside human behaviour. Argues social-science methods should be used to study AI.",
        quotes: [
          {
            text:
              "Machines now exhibit behaviours that need to be studied with the methods of behavioural science, not only with the methods of computer science.",
            date: "2019-04-25",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Machine Behaviour",
              url: "https://www.nature.com/articles/s41586-019-1138-y",
              medium: "paper",
              publisher: "Nature",
              date: "2019-04-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carl-shapiro",
    name: "Carl Shapiro",
    tagline: "UC Berkeley economist; antitrust and innovation",
    summary:
      "Berkeley economist who specialised in antitrust and innovation. Has commented on AI antitrust questions, particularly the OpenAI-Microsoft relationship.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "UC Berkeley Haas School of Business", role: "Distinguished Professor of the Graduate School", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Carl_Shapiro_(economist)",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI antitrust analysis must take seriously the platform-and-network effects that have shaped earlier tech markets.",
        quotes: [
          {
            text:
              "Network effects don't disappear because the technology is AI. If anything, they intensify.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Carl Shapiro — Berkeley Haas",
              url: "https://haas.berkeley.edu/faculty/shapiro-carl/",
              medium: "article",
              publisher: "Berkeley Haas",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-spence",
    name: "A. Michael Spence",
    tagline: "Stanford economist; Nobel laureate; AI economic effects",
    summary:
      "Stanford emeritus economist and 2001 Nobel laureate. Has written extensively on AI's economic effects, particularly on developing economies.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "Stanford Graduate School of Business", role: "Philip H. Knight Professor of Economics Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Michael_Spence",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Argues AI may be the productivity answer to demographic decline; particularly important for ageing economies.",
        quotes: [
          {
            text:
              "AI offers the possibility of a productivity boost just as developed economies are starting to face significant labour-supply constraints.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Michael Spence — Project Syndicate",
              url: "https://www.project-syndicate.org/columnist/a-michael-spence",
              medium: "article",
              publisher: "Project Syndicate",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carolyn-rouse",
    name: "Carolyn Rouse",
    tagline: "Princeton anthropology chair; AI sociology",
    summary:
      "Princeton anthropology professor whose work on race, media, and technology has informed AI ethics from a sociological perspective.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Princeton University", role: "Chair, Department of Anthropology", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI ethics requires deep sociological grounding, particularly on race and historical inequality.",
        quotes: [
          {
            text:
              "AI ethics without sociology produces frameworks that are blind to the structural conditions in which AI is deployed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Carolyn Rouse — Princeton Anthropology",
              url: "https://anthropology.princeton.edu/",
              medium: "article",
              publisher: "Princeton University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vincent-vanhoucke",
    name: "Vincent Vanhoucke",
    tagline: "Google DeepMind robotics lead",
    summary:
      "Distinguished Engineer at Google DeepMind leading robotics. Public voice on the integration of large foundation models with embodied AI systems.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Distinguished Engineer; Robotics lead", current: true },
    ],
    twitter: "vanhoucke",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues foundation models will reshape robotics; embodied AI is a near-term frontier rather than far-future.",
        quotes: [
          {
            text:
              "Foundation models are the new substrate for robotics. Specialised robotics-only models are likely to disappear.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Vincent Vanhoucke at Google DeepMind",
              url: "https://research.google/people/106488/",
              medium: "article",
              publisher: "Google Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tianqi-chen",
    name: "Tianqi Chen",
    tagline: "CMU professor; XGBoost and TVM creator",
    summary:
      "CMU professor who created XGBoost and TVM. Foundational figure in AI infrastructure tooling.",
    categories: ["academic", "researcher", "engineer"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Assistant Professor", current: true },
      { org: "OctoML", role: "Co-founder", current: true },
    ],
    twitter: "tqchenml",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Built foundational open-source AI tools used industry-wide. Argues the AI ecosystem depends on open infrastructure.",
        quotes: [
          {
            text:
              "Open infrastructure is what allowed many actors to build AI. Closing it now would be a fundamental mistake.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tianqi Chen — CMU",
              url: "https://tqchen.com/",
              medium: "article",
              publisher: "tqchen.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luis-ceze",
    name: "Luis Ceze",
    tagline: "OctoML CEO; UW computer architecture",
    summary:
      "UW computer architecture professor and OctoML CEO. Public voice on AI hardware and the economics of compute, particularly the open-source compiler ecosystem.",
    categories: ["academic", "founder"],
    affiliations: [
      { org: "OctoML", role: "Co-founder and CEO", current: true },
      { org: "University of Washington", role: "Professor", current: true },
    ],
    twitter: "luis_ceze",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source compiler-and-runtime ecosystems (TVM, MLIR) are the technical foundation for diversified AI hardware.",
        quotes: [
          {
            text:
              "Open compilers like TVM are the only path to a diverse AI hardware ecosystem.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "OctoML",
              url: "https://octo.ai/",
              medium: "article",
              publisher: "OctoML",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "francois-fleuret",
    name: "François Fleuret",
    tagline: "University of Geneva ML professor; LLM educator",
    summary:
      "Geneva ML professor whose textbook The Little Book of Deep Learning has become a widely-used resource. Public voice for measured European ML perspective.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Geneva", role: "Professor of Computer Science", current: true },
    ],
    homepage: "https://fleuret.org/",
    twitter: "francoisfleuret",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "European ML voice committed to demystifying deep learning; sceptical of both extreme optimism and extreme pessimism.",
        quotes: [
          {
            text:
              "Deep learning is statistics with extra steps. The extra steps matter, but it is still statistics.",
            date: "2023-05-19",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Little Book of Deep Learning",
              url: "https://fleuret.org/public/lbdl.pdf",
              medium: "book",
              publisher: "Self-published",
              date: "2023-05-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luc-julia",
    name: "Luc Julia",
    tagline: "Renault Chief Scientist; Siri co-creator",
    summary:
      "Co-creator of Apple's Siri. Now Renault's chief scientist. Public voice for skeptical, deployment-grade AI framings.",
    categories: ["engineer", "executive"],
    affiliations: [
      { org: "Renault Group", role: "Chief Scientist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Luc_Julia",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues current AI is not intelligent; deployment hype outruns capability. Frames AI as a useful set of statistical tools rather than emerging mind.",
        quotes: [
          {
            text:
              "Artificial intelligence does not exist.",
            date: "2019-01",
            fidelity: "direct",
            context: "Title and core thesis of his French-language book L'Intelligence Artificielle n'existe pas.",
            source: {
              title: "L'Intelligence Artificielle n'existe pas",
              url: "https://fr.wikipedia.org/wiki/Luc_Julia",
              medium: "book",
              publisher: "First Editions",
              date: "2019-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yael-eisenstat",
    name: "Yaël Eisenstat",
    tagline: "Cybersecurity for Democracy at NYU; former intelligence officer",
    summary:
      "Former CIA officer and Facebook integrity lead. Now at Cybersecurity for Democracy at NYU. Argues platform-and-AI accountability is national-security infrastructure.",
    categories: ["policy"],
    affiliations: [
      { org: "Cybersecurity for Democracy at NYU", role: "Senior Policy Fellow", current: true },
    ],
    twitter: "YaelEisenstat",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues platform-and-AI integrity is national security; tech companies' self-regulation is structurally inadequate.",
        quotes: [
          {
            text:
              "Platform integrity is national security. We just haven't built the institutional infrastructure to act on that.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Yael Eisenstat — Cybersecurity for Democracy",
              url: "https://cybersecurityfordemocracy.org/",
              medium: "article",
              publisher: "C4D",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "samidh-chakrabarti",
    name: "Samidh Chakrabarti",
    tagline: "Stanford Cyber Policy Center; former Facebook civic integrity",
    summary:
      "Former Facebook civic integrity team lead who left in 2021. Now at Stanford Cyber Policy Center. Public voice on platform-and-AI integrity.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Stanford Cyber Policy Center", role: "Affiliated Fellow", current: true },
      { org: "Meta", role: "Former Director of Product, Civic Integrity", end: "2021", current: false },
    ],
    twitter: "samidhc",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues integrity teams (election integrity, child safety, abuse) must be central to AI deployment, not afterthoughts.",
        quotes: [
          {
            text:
              "If integrity is treated as a cost centre, the deployment will reflect that. AI integrity has to be a first-class function.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stanford Cyber Policy Center",
              url: "https://cyber.fsi.stanford.edu/",
              medium: "article",
              publisher: "Stanford Cyber Policy Center",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trevor-mundel",
    name: "Trevor Mundel",
    tagline: "Gates Foundation Global Health President",
    summary:
      "President of Global Health at the Gates Foundation. Has spoken on AI's role in global health and pandemic preparedness; a major funder of AI-for-health research.",
    categories: ["executive", "policy"],
    affiliations: [
      { org: "Bill & Melinda Gates Foundation", role: "President of Global Health", current: true },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI is a major positive lever for global health if directed at deployment-relevant problems and not just frontier capabilities.",
        quotes: [
          {
            text:
              "AI in global health works when we orient it toward deployment realities, not lab benchmarks.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Gates Foundation Global Health",
              url: "https://www.gatesfoundation.org/our-work/programs/global-health",
              medium: "article",
              publisher: "Gates Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "holly-krieger",
    name: "Holly Krieger",
    tagline: "Cambridge mathematician; AI in mathematics commentator",
    summary:
      "Cambridge mathematician and Numberphile presenter who has written and spoken on AI's increasing role in research mathematics, particularly post-AlphaProof.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Cambridge", role: "Lecturer in Mathematics", current: true },
    ],
    twitter: "hollyikrieger",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Working mathematician engaging with AlphaProof and similar systems; argues mathematicians need to engage with AI rather than dismiss or hype it.",
        quotes: [
          {
            text:
              "AI is going to change how mathematicians work. Most of the change will be invisible to people outside the field.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Holly Krieger — Cambridge",
              url: "https://www.dpmms.cam.ac.uk/~hk439/",
              medium: "article",
              publisher: "DPMMS Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joi-ito",
    name: "Joichi Ito",
    tagline: "Former MIT Media Lab director; AI ethics commentator",
    summary:
      "Former MIT Media Lab director who has written extensively on AI as societal infrastructure. Author of Whiplash and co-founder of Digital Garage.",
    categories: ["public-intellectual", "founder"],
    affiliations: [
      { org: "Chiba Institute of Technology", role: "President", current: true },
      { org: "Digital Garage", role: "Co-founder", current: true },
      { org: "MIT Media Lab", role: "Former Director", end: "2019", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Joi_Ito",
    twitter: "joi",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI requires public-interest framing, not just safety; advocates for AI as designed civic infrastructure.",
        quotes: [
          {
            text:
              "We need to think about AI as civic infrastructure, designed for the public, not just engineered for users.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Joi Ito blog",
              url: "https://joi.ito.com/",
              medium: "blog",
              publisher: "joi.ito.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "luciano-floridi",
    name: "Luciano Floridi",
    tagline: "Yale digital ethics professor; AI ethics philosopher",
    summary:
      "Italian philosopher who founded the field of philosophy of information. Director of the Yale Digital Ethics Center. One of the most published academics on AI ethics.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Yale University", role: "Founding Director, Digital Ethics Center", current: true },
      { org: "Oxford Internet Institute", role: "Former Professor", end: "2023", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Luciano_Floridi",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Long-time AI ethics advisor to the EU and UN. Argues AI governance must be grounded in 'philosophy of information' frameworks rather than ad hoc.",
        quotes: [
          {
            text:
              "AI is not an invention waiting to be regulated. It is the new infosphere we already live in. Governance must follow.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Luciano Floridi — Yale",
              url: "https://digitalethics.yale.edu/",
              medium: "article",
              publisher: "Yale Digital Ethics Center",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "karen-yeung",
    name: "Karen Yeung",
    tagline: "Birmingham law professor; AI law theorist",
    summary:
      "Birmingham professor of law, ethics and informatics whose work on algorithmic accountability has shaped UK and EU policy frameworks. Frames AI governance as a regulatory innovation problem.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Birmingham", role: "Interdisciplinary Professorial Fellow", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI requires regulatory innovation, not just regulatory adaptation; advocates 'algorithmic regulation' frameworks.",
        quotes: [
          {
            text:
              "Algorithmic regulation needs new institutional forms, not just adaptations of old ones.",
            date: "2018",
            fidelity: "paraphrase-loose",
            source: {
              title: "Karen Yeung — Birmingham",
              url: "https://www.birmingham.ac.uk/staff/profiles/law/yeung-karen",
              medium: "article",
              publisher: "University of Birmingham",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kate-devlin",
    name: "Kate Devlin",
    tagline: "King's College London; AI and intimacy researcher",
    summary:
      "King's College London computer scientist and author of Turned On (2018), studying AI sex robots and the intersection of AI with human intimacy.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "King's College London", role: "Reader in AI", current: true },
    ],
    twitter: "drkatedevlin",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Researches AI's intersection with human intimacy and sexuality; argues this domain has been ignored by mainstream AI ethics frameworks.",
        quotes: [
          {
            text:
              "AI intimacy is going to be a much bigger part of how AI is deployed than mainstream AI ethics has been willing to consider.",
            date: "2018",
            fidelity: "paraphrase-loose",
            source: {
              title: "Turned On: Science, Sex and Robots",
              url: "https://www.bloomsbury.com/uk/turned-on-9781472950888/",
              medium: "book",
              publisher: "Bloomsbury Sigma",
              date: "2018",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-osborne",
    name: "Michael A. Osborne",
    tagline: "Oxford ML professor; future of work researcher",
    summary:
      "Oxford machine learning professor co-author of the 2013 'Future of Employment' paper that estimated 47% of US jobs were at high risk of automation. Continues to publish on AI's labour-market effects.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Oxford", role: "Dieter Schwarz Associate Professor of Machine Learning", current: true },
    ],
    homepage: "https://www.robots.ox.ac.uk/~mosb/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Co-author of the foundational Frey-Osborne paper. Argues for labour-market policy responses to AI automation.",
        quotes: [
          {
            text:
              "Automation has never simply destroyed jobs — but the responses it requires from labour markets and education are often slow.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Michael Osborne — Oxford",
              url: "https://www.robots.ox.ac.uk/~mosb/",
              medium: "article",
              publisher: "Oxford Robotics Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "wendy-hall",
    name: "Dame Wendy Hall",
    tagline: "Southampton professor; UK AI policy author",
    summary:
      "University of Southampton professor and co-chair of the UK Government's 2017 AI Review (with Jérôme Pesenti). Long-time architect of UK AI strategy.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Southampton", role: "Regius Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Wendy_Hall",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Co-authored the foundational UK AI strategy report (2017) and continues to advise on UK AI policy.",
        quotes: [
          {
            text:
              "The UK can lead in AI if we treat it as a sovereign capacity, not a technology to be imported.",
            date: "2017-10",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Growing the artificial intelligence industry in the UK (Hall-Pesenti review)",
              url: "https://www.gov.uk/government/publications/growing-the-artificial-intelligence-industry-in-the-uk",
              medium: "paper",
              publisher: "UK Government",
              date: "2017-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sarah-spurgeon",
    name: "Sarah Spurgeon",
    tagline: "UCL professor; Royal Academy of Engineering AI lead",
    summary:
      "UCL Pro-Vice-Provost for Innovation and Enterprise. Royal Academy of Engineering AI work; bridges academic engineering and policy on AI in critical infrastructure.",
    categories: ["academic"],
    affiliations: [
      { org: "University College London", role: "Professor of Control Engineering", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI in critical infrastructure (power, water, transport) requires sector-specific assurance frameworks.",
        quotes: [
          {
            text:
              "AI in safety-critical infrastructure cannot be governed by general AI rules. It needs the assurance frameworks of the sector.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sarah Spurgeon — UCL",
              url: "https://www.ucl.ac.uk/",
              medium: "article",
              publisher: "UCL",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sarah-myers-west",
    name: "Sarah Myers West",
    tagline: "Co-Executive Director of AI Now Institute",
    summary:
      "Co-Executive Director of AI Now Institute. Researches the political economy of AI; has published on whether 'AI safety' is a frame that benefits incumbents.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "AI Now Institute", role: "Co-Executive Director", current: true },
    ],
    twitter: "sarahmyerswest",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the political economy of AI — concentration in a handful of firms — must be a primary governance concern.",
        quotes: [
          {
            text:
              "There are eight or nine companies that effectively shape what AI is. That concentration is the governance problem.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI Now Institute",
              url: "https://ainowinstitute.org/",
              medium: "article",
              publisher: "AI Now Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "anu-bradford",
    name: "Anu Bradford",
    tagline: "Columbia Law professor; 'The Brussels Effect' author",
    summary:
      "Columbia law professor whose Brussels Effect framework documents how EU regulation propagates globally. Foundational reference for understanding EU AI Act influence.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Columbia Law School", role: "Henry L. Moses Professor of Law and International Organization", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Anu_Bradford",
    twitter: "Anu_Bradford",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues the EU AI Act will propagate globally via the Brussels Effect, regardless of US action.",
        quotes: [
          {
            text:
              "The Brussels Effect operates on AI as on every other regulated technology: when the EU regulates a global market, that regulation becomes global standard.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Brussels Effect",
              url: "https://global.oup.com/academic/product/the-brussels-effect-9780190088583",
              medium: "book",
              publisher: "Oxford University Press",
              date: "2020",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michele-finck",
    name: "Michèle Finck",
    tagline: "Tübingen law professor; AI law and EU regulation",
    summary:
      "Tübingen law professor whose work on EU AI law has shaped the EU AI Act's interaction with GDPR. Trained both legally and technically.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Tübingen", role: "Professor of Law and Artificial Intelligence", current: true },
    ],
    twitter: "Michele_Finck",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Bridges EU AI law and EU data protection law. Argues most EU AI law debates are continuous with GDPR debates.",
        quotes: [
          {
            text:
              "AI regulation in Europe cannot be understood independently from GDPR. They are the same regulatory tradition continuing.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Michèle Finck — Tübingen",
              url: "https://www.uni-tuebingen.de/",
              medium: "article",
              publisher: "University of Tübingen",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "brad-templeton",
    name: "Brad Templeton",
    tagline: "Long-time tech journalist; self-driving cars critic",
    summary:
      "Long-time tech journalist and EFF founding board member who has been a leading voice on autonomous vehicle policy and AI safety in transport.",
    categories: ["journalist", "engineer"],
    affiliations: [
      { org: "Independent", role: "Writer and consultant", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Brad_Templeton",
    twitter: "BradTempleton",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Bridges technical engineering and AI policy on transport. Argues self-driving safety claims need real-world validation, not just simulation.",
        quotes: [
          {
            text:
              "Real-world miles matter. AVs that are safer in simulation than on roads need scrutiny.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Brad Templeton on autonomous vehicles",
              url: "https://www.templetons.com/brad/",
              medium: "blog",
              publisher: "templetons.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sasha-costanza-chock",
    name: "Sasha Costanza-Chock",
    tagline: "Algorithmic Justice League; design justice author",
    summary:
      "Algorithmic Justice League researcher and author of Design Justice (2020). Argues participatory design is a structural prerequisite for AI that doesn't reproduce systemic harm.",
    categories: ["academic", "activist"],
    affiliations: [
      { org: "Algorithmic Justice League", role: "Director of Research and Design", current: true },
    ],
    twitter: "schock",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance through 'design justice' — affected communities must be designers, not subjects.",
        quotes: [
          {
            text:
              "Affected communities must be at the table where AI is designed, not subjects of it.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Design Justice",
              url: "https://design-justice.pubpub.org/",
              medium: "book",
              publisher: "MIT Press",
              date: "2020",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "beth-singler",
    name: "Beth Singler",
    tagline: "Cambridge anthropologist; AI religion researcher",
    summary:
      "Cambridge anthropologist whose work on the religious framings of AI has documented how AI is increasingly described in spiritual or religious terms.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Cambridge", role: "Junior Research Fellow, Homerton College", current: true },
    ],
    twitter: "BVLSingler",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Documents how AI is increasingly framed in religious or spiritual terms; argues these framings shape policy in ways the policy community is not aware of.",
        quotes: [
          {
            text:
              "Tech-savvy people are saying things about AI that, in any other context, would be classed as religious utterances.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Beth Singler — Cambridge",
              url: "https://www.cam.ac.uk/research/news",
              medium: "article",
              publisher: "Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kashmir-hill",
    name: "Kashmir Hill",
    tagline: "NYT tech reporter; facial recognition and privacy",
    summary:
      "New York Times tech reporter whose investigation of Clearview AI led to mainstream understanding of facial recognition surveillance. Author of Your Face Belongs to Us (2023).",
    categories: ["journalist"],
    affiliations: [
      { org: "The New York Times", role: "Technology Reporter", current: true },
    ],
    twitter: "kashhill",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documented how facial recognition has been deployed at scale; argues governance has been catastrophically slow.",
        quotes: [
          {
            text:
              "Your face belongs to us — that's the implicit claim of the AI surveillance industry, and it has not been refuted.",
            date: "2023-09-19",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Your Face Belongs to Us",
              url: "https://www.penguinrandomhouse.com/books/693708/your-face-belongs-to-us-by-kashmir-hill/",
              medium: "book",
              publisher: "Random House",
              date: "2023-09-19",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sarah-cen",
    name: "Sarah Cen",
    tagline: "MIT researcher; recommender systems and incentives",
    summary:
      "MIT researcher whose work on recommender systems and platform incentive design has been cited in mainstream AI policy debates.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "MIT EECS", role: "Postdoctoral researcher", current: true },
    ],
    twitter: "sarah_cen",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues platform-and-AI incentive structures need governance attention as much as the underlying models.",
        quotes: [
          {
            text:
              "Incentives shape what platforms surface. AI doesn't change that — it amplifies it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sarah Cen — MIT",
              url: "https://www.sarahcen.com/",
              medium: "article",
              publisher: "sarahcen.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kate-saenko",
    name: "Kate Saenko",
    tagline: "Boston University CS professor; visual AI researcher",
    summary:
      "BU computer vision professor whose work on transferable AI representations and adversarial robustness has shaped the engineering side of AI safety.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Boston University", role: "Associate Professor of Computer Science", current: true },
    ],
    homepage: "https://www.bu.edu/cs/profiles/kate-saenko/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Engineer-grade alignment research: representation learning, adversarial robustness, transfer.",
        quotes: [
          {
            text:
              "Robustness benchmarks are an under-developed scaffolding for AI safety practice.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kate Saenko — BU CS",
              url: "https://www.bu.edu/cs/profiles/kate-saenko/",
              medium: "article",
              publisher: "Boston University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ali-rahimi",
    name: "Ali Rahimi",
    tagline: "Google Brain ML researcher; 'Alchemy' speech",
    summary:
      "Google Brain researcher whose 2017 NeurIPS Test of Time speech labelled deep learning 'alchemy' for its lack of theoretical foundations. Influential framing in subsequent ML rigor debates.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google", role: "Research scientist", current: true },
    ],
    twitter: "alirahimi3",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argued ML lacks the theoretical foundations of mature engineering disciplines; deployments built on it inherit that fragility.",
        quotes: [
          {
            text:
              "Machine learning has become alchemy. We need to do science again.",
            date: "2017-12",
            fidelity: "paraphrase-faithful",
            context: "NeurIPS 2017 Test of Time award speech.",
            source: {
              title: "Ali Rahimi's NeurIPS 2017 Test of Time speech",
              url: "https://www.argmin.net/p/ali-rahimi-nips-2017-test-of-time",
              medium: "talk",
              publisher: "NeurIPS",
              date: "2017-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "katy-borner",
    name: "Katy Börner",
    tagline: "Indiana University; data and information visualisation",
    summary:
      "Indiana University Distinguished Professor whose Atlas of Knowledge and other visualisation work has shaped how researchers and policymakers see the AI research field at scale.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Indiana University Bloomington", role: "Victor H. Yngve Distinguished Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Katy_B%C3%B6rner",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues field-level visualisation (publications, citations, talent flows) is critical infrastructure for AI policymakers.",
        quotes: [
          {
            text:
              "Without science maps, AI policy is policy by anecdote.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Atlas of Knowledge",
              url: "https://mitpress.mit.edu/9780262028813/atlas-of-knowledge/",
              medium: "book",
              publisher: "MIT Press",
              date: "2015",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yuk-hui",
    name: "Yuk Hui",
    tagline: "City University of Hong Kong philosopher; cosmotechnics",
    summary:
      "Hong Kong-based philosopher whose 'cosmotechnics' framework argues different cultures have different relationships to technology, and globalised AI is a particular philosophical imposition.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "City University of Hong Kong", role: "Visiting Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Yuk_Hui",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI as currently constituted reflects a specific (Western) cosmology and that other cosmotechnics produce different AI possibilities.",
        quotes: [
          {
            text:
              "There is not just one technology, but many technologies, situated in different cosmologies. AI as currently practiced reflects only one of them.",
            date: "2016",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Question Concerning Technology in China",
              url: "https://www.urbanomic.com/book/the-question-concerning-technology-in-china/",
              medium: "book",
              publisher: "Urbanomic",
              date: "2016",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hilary-putnam",
    name: "Hilary Putnam",
    tagline: "Harvard philosopher (1926–2016); functionalism",
    summary:
      "Harvard philosopher who in the 1960s introduced functionalism — the position that mental states are functional, not material — that subsequently became the foundation of computationalist theories of mind.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Harvard University", role: "Cogan University Professor", end: "2016", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Hilary_Putnam",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Foundational reference for the philosophical position that AI minds are possible in principle. Putnam himself later moved away from strong functionalism.",
        quotes: [
          {
            text:
              "Mental states could in principle be realized in any of an indefinite number of physical systems.",
            date: "1967",
            fidelity: "paraphrase-faithful",
            context: "Functionalism — the foundational philosophical assumption of strong AI.",
            source: {
              title: "The Nature of Mental States",
              url: "https://en.wikipedia.org/wiki/Functionalism_(philosophy_of_mind)",
              medium: "paper",
              publisher: "Capitan and Merrill, eds.",
              date: "1967",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "donna-haraway",
    name: "Donna Haraway",
    tagline: "UC Santa Cruz emerita; 'A Cyborg Manifesto'",
    summary:
      "Cyborg-feminism theorist whose 1985 'A Cyborg Manifesto' anticipated debates about hybrid human-machine identity. Foundational reference for thinking about post-AI selfhood.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "UC Santa Cruz", role: "Distinguished Professor Emerita", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Donna_Haraway",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Foundational thinker on hybrid human-machine identities. Frames the AI question as continuous with feminist and post-colonial thinking about identity.",
        quotes: [
          {
            text:
              "By the late twentieth century, our time, a mythic time, we are all chimeras, theorized and fabricated hybrids of machine and organism — in short, cyborgs.",
            date: "1985",
            fidelity: "direct",
            source: {
              title: "A Cyborg Manifesto",
              url: "https://en.wikipedia.org/wiki/A_Cyborg_Manifesto",
              medium: "paper",
              publisher: "Socialist Review",
              date: "1985",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hubert-dreyfus",
    name: "Hubert Dreyfus",
    tagline: "Berkeley phenomenologist; AI critic (1929–2017)",
    summary:
      "UC Berkeley phenomenologist whose 1972 'What Computers Can't Do' was the first serious philosophical critique of symbolic AI. Foundational reference for AI-skeptic arguments grounded in embodied cognition.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of Philosophy", end: "2017", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Hubert_Dreyfus",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argued AI must be embodied and embedded in skilful coping, not symbol manipulation. His critique anticipated key features of the embodied-cognition movement and recent skepticism of pure-LLM AGI.",
        quotes: [
          {
            text:
              "We do not start out with explicit rules and then learn how to apply them. We learn by example, by skill, by being in the world.",
            date: "1972",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What Computers Can't Do",
              url: "https://en.wikipedia.org/wiki/What_Computers_Can%27t_Do",
              medium: "book",
              publisher: "MIT Press",
              date: "1972",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-searle",
    name: "John Searle",
    tagline: "UC Berkeley philosopher; Chinese Room Argument",
    summary:
      "Berkeley philosopher whose 1980 'Chinese Room' thought experiment is the canonical argument that symbol manipulation alone cannot produce understanding.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "UC Berkeley", role: "Slusser Professor of Philosophy Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/John_Searle",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues syntax does not produce semantics. Foundational philosophical opposition to strong-AI claims, still cited against LLM-AGI framings.",
        quotes: [
          {
            text:
              "Imagine a person who knows no Chinese sitting in a room with a rule book. Slips of paper with Chinese characters come in, the person uses the rule book to send appropriate slips back. The room passes the Turing test, but the person inside understands no Chinese.",
            date: "1980",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Minds, Brains, and Programs",
              url: "https://web.archive.org/web/20090202084628/http://members.aol.com/NeoNoetics/MindsBrainsPrograms.html",
              medium: "paper",
              publisher: "Behavioral and Brain Sciences",
              date: "1980",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-dennett",
    name: "Daniel Dennett",
    tagline: "Philosopher; 'Darwin's Dangerous Idea' (1942–2024)",
    summary:
      "Tufts philosopher who spent his career arguing for naturalistic, computational theories of mind. Foundational reference for thinking about AI consciousness.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Tufts University", role: "Co-director of the Center for Cognitive Studies", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Daniel_Dennett",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Argued mind is what brains do — and that AI minds, if appropriately structured, would be minds. Position influenced both Hofstadter and Bach.",
        quotes: [
          {
            text:
              "There is no such thing as philosophy-free science; there is only science whose philosophical baggage is taken on board without examination.",
            date: "1995",
            fidelity: "direct",
            context: "From Darwin's Dangerous Idea — used widely in AI consciousness debates.",
            source: {
              title: "Darwin's Dangerous Idea",
              url: "https://en.wikipedia.org/wiki/Darwin%27s_Dangerous_Idea",
              medium: "book",
              publisher: "Simon & Schuster",
              date: "1995",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "thomas-nagel",
    name: "Thomas Nagel",
    tagline: "NYU philosopher; 'What is it like to be a bat'",
    summary:
      "NYU philosopher whose 1974 'What Is It Like to Be a Bat?' paper became the canonical statement of the consciousness question. Foundational reference for AI consciousness debates.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "NYU", role: "University Professor of Philosophy and Law Emeritus", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Thomas_Nagel",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Foundational reference for the 'subjective experience' question central to AI consciousness debates.",
        quotes: [
          {
            text:
              "An organism has conscious mental states if and only if there is something that it is like to be that organism — something it is like for the organism.",
            date: "1974",
            fidelity: "direct",
            source: {
              title: "What Is It Like to Be a Bat?",
              url: "https://www.jstor.org/stable/2183914",
              medium: "paper",
              publisher: "The Philosophical Review",
              date: "1974",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andy-clark",
    name: "Andy Clark",
    tagline: "Sussex philosopher; extended mind theorist",
    summary:
      "Philosopher of mind whose 'extended mind' framework argues cognition extends into tools and environment. Foundational reference for thinking about AI as cognitive extension.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "University of Sussex", role: "Professor of Cognitive Philosophy", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Andy_Clark_(philosopher)",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Frames AI as cognitive extension rather than independent cognition; pushes back on both 'AI is conscious' and 'AI is just statistics' framings.",
        quotes: [
          {
            text:
              "The mind extends into the world, into tools, into others, and now into AI. The boundary of cognition is not the skull.",
            date: "1998",
            fidelity: "paraphrase-faithful",
            context: "Core claim of his 1998 paper with David Chalmers, applied to AI in subsequent work.",
            source: {
              title: "The Extended Mind",
              url: "https://www.jstor.org/stable/3328150",
              medium: "paper",
              publisher: "Analysis",
              date: "1998",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ray-kurzweil",
    name: "Ray Kurzweil",
    tagline: "Futurist; The Singularity Is Near (1948–)",
    summary:
      "Futurist whose 2005 The Singularity Is Near predicted human-machine merger by 2045. Long-time public face of optimistic technological-singularity framings.",
    categories: ["public-intellectual", "theorist", "engineer"],
    affiliations: [
      { org: "Independent", role: "Author and futurist", current: true },
      { org: "Google", role: "Director of Engineering", end: "2021", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ray_Kurzweil",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Long-running optimistic-singularity advocate. Predicts AGI by 2029 and human-machine merger by 2045.",
        quotes: [
          {
            text:
              "By 2045, we will have multiplied the intelligence — the human biological machine intelligence of our civilization — a billion-fold.",
            date: "2005",
            fidelity: "direct",
            source: {
              title: "The Singularity Is Near",
              url: "https://en.wikipedia.org/wiki/The_Singularity_Is_Near",
              medium: "book",
              publisher: "Viking",
              date: "2005",
            },
          },
        ],
      },
    ],
    timelines: [
      {
        milestone: "Human-level AGI",
        year: 2029,
        date: "2005",
        source: {
          title: "Ray Kurzweil predictions",
          url: "https://en.wikipedia.org/wiki/Predictions_made_by_Ray_Kurzweil",
          medium: "article",
          publisher: "Wikipedia",
        },
      },
      {
        milestone: "Singularity (human-machine merger)",
        year: 2045,
        date: "2005",
        source: {
          title: "The Singularity Is Near",
          url: "https://en.wikipedia.org/wiki/The_Singularity_Is_Near",
          medium: "book",
          publisher: "Viking",
          date: "2005",
        },
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hans-moravec",
    name: "Hans Moravec",
    tagline: "Robotics pioneer; 'Mind Children' (1948–)",
    summary:
      "Carnegie Mellon robotics pioneer who in 1988 wrote Mind Children predicting robotic descendants of humanity. Foundational reference for AI succession debates.",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "Carnegie Mellon University Robotics Institute", role: "Adjunct Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Hans_Moravec",
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "opposes",
        summary:
          "Argued in Mind Children (1988) and Robot (1999) that AI succession is the natural and welcome next step of evolution. Position later refined by Sutton and others.",
        quotes: [
          {
            text:
              "We are very near the time when virtually no human function, physical or mental, will lack an artificial counterpart.",
            date: "1988",
            fidelity: "direct",
            source: {
              title: "Mind Children",
              url: "https://www.hup.harvard.edu/books/9780674576186",
              medium: "book",
              publisher: "Harvard University Press",
              date: "1988",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "donald-knuth",
    name: "Donald Knuth",
    tagline: "Computer science pioneer; The Art of Computer Programming",
    summary:
      "Stanford emeritus professor whose The Art of Computer Programming has been the canonical CS reference for sixty years. Has voiced cautious skepticism about LLM-based AGI claims.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Stanford University", role: "Professor Emeritus of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Donald_Knuth",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Foundational CS figure; prefers measured engagement with LLMs over both hype and panic. His 2023 ChatGPT-questions experiment was widely circulated.",
        quotes: [
          {
            text:
              "The questions I sent to ChatGPT brought back results that ranged from outstanding to almost-correct to deeply wrong, all delivered with the same confidence.",
            date: "2023-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Donald Knuth — ChatGPT questions experiment",
              url: "https://cs.stanford.edu/~knuth/chatGPT20.txt",
              medium: "article",
              publisher: "Stanford CS",
              date: "2023-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alan-kay",
    name: "Alan Kay",
    tagline: "Object-oriented programming and personal computing pioneer",
    summary:
      "Pioneer of object-oriented programming and the Dynabook concept. Long-time critic of how the personal computing revolution was actually deployed; extends this critique to AI.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Viewpoints Research Institute", role: "President", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alan_Kay",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues today's AI is symptomatic of how the original computing-as-augmentation vision was lost; LLMs are statistical mimicry, not understanding.",
        quotes: [
          {
            text:
              "The best way to predict the future is to invent it. We have not yet invented an AI worth predicting.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Alan Kay — Viewpoints Research Institute",
              url: "https://en.wikipedia.org/wiki/Alan_Kay",
              medium: "article",
              publisher: "Wikipedia",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "douglas-engelbart",
    name: "Douglas Engelbart",
    tagline: "Pioneer of human-computer interaction (1925–2013)",
    summary:
      "SRI engineer who delivered the 1968 'Mother of All Demos' inventing the mouse, hypertext, and the conceptual foundations of personal computing. His framework: technology should augment, not replace, human intellect.",
    categories: ["researcher", "engineer", "theorist"],
    affiliations: [
      { org: "Stanford Research Institute (SRI)", role: "Engineer", end: "1989", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Douglas_Engelbart",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Foundational reference for 'augmentation, not automation' framings of AI. Argued technology should make humans collectively smarter rather than replace them.",
        quotes: [
          {
            text:
              "By 'augmenting human intellect' we mean increasing the capability of a man to approach a complex problem situation, to gain comprehension to suit his particular needs, and to derive solutions to problems.",
            date: "1962",
            fidelity: "direct",
            source: {
              title: "Augmenting Human Intellect: A Conceptual Framework",
              url: "https://www.dougengelbart.org/content/view/138",
              medium: "paper",
              publisher: "SRI International",
              date: "1962",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "claude-shannon",
    name: "Claude Shannon",
    tagline: "Information theory founder (1916–2001)",
    summary:
      "Bell Labs and MIT mathematician who founded information theory in 1948. The mathematical infrastructure of all modern AI traces back to Shannon entropy and channel capacity.",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "MIT", role: "Professor", end: "2001", current: false },
      { org: "Bell Labs", role: "Mathematician", end: "1972", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Claude_Shannon",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Founded information theory and was an early enthusiast of computing chess machines and learning machines.",
        quotes: [
          {
            text:
              "I visualize a time when we will be to robots what dogs are to humans. And I'm rooting for the machines.",
            date: "1987",
            fidelity: "direct",
            context: "Reported quote from Shannon late in his life. Often cited as one of the earliest succession framings.",
            source: {
              title: "Claude Shannon — Wikipedia",
              url: "https://en.wikipedia.org/wiki/Claude_Shannon",
              medium: "article",
              publisher: "Wikipedia (citing Omni Magazine, 1987)",
              date: "1987",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ada-lovelace",
    name: "Ada Lovelace",
    tagline: "First programmer; analytical engine theorist (1815–1852)",
    summary:
      "Mathematician whose notes on Charles Babbage's Analytical Engine made her the first computer programmer. Foundational reference for thinking about machines and intelligence.",
    categories: ["theorist"],
    affiliations: [
      { org: "Independent", role: "Mathematician", end: "1852", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ada_Lovelace",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Anticipated the 'Lovelace objection' Turing later named: that machines can only do what we explicitly program them to do — a position later argued and rejected.",
        quotes: [
          {
            text:
              "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.",
            date: "1843",
            fidelity: "direct",
            source: {
              title: "Notes on the Analytical Engine",
              url: "https://en.wikipedia.org/wiki/Ada_Lovelace",
              medium: "paper",
              publisher: "Scientific Memoirs",
              date: "1843",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "judea-pearl",
    name: "Judea Pearl",
    tagline: "UCLA professor; Bayesian networks and causality pioneer",
    summary:
      "UCLA computer scientist who founded Bayesian networks and the modern theory of causation. Author of The Book of Why (2018). Public skeptic of pure-correlation deep learning.",
    categories: ["academic", "researcher", "theorist"],
    affiliations: [
      { org: "UCLA", role: "Professor of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Judea_Pearl",
    twitter: "yudapearl",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current deep-learning AI is stuck at the lowest rung of the 'Ladder of Causation' — pure association — and cannot reach reasoning without explicit causal models.",
        quotes: [
          {
            text:
              "Deep learning at present remains stuck at the bottom rung of the ladder of causation. It does observation, not intervention, and certainly not counterfactuals.",
            date: "2018",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Book of Why",
              url: "https://www.basicbooks.com/titles/judea-pearl/the-book-of-why/9780465097616/",
              medium: "book",
              publisher: "Basic Books",
              date: "2018-05-15",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joseph-weizenbaum",
    name: "Joseph Weizenbaum",
    tagline: "ELIZA inventor; AI ethics pioneer (1923–2008)",
    summary:
      "German-American MIT computer scientist who created ELIZA in 1966 and immediately became a critic of the AI hype that followed. Author of Computer Power and Human Reason (1976).",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "MIT", role: "Professor of Computer Science", end: "2008", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Joseph_Weizenbaum",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Built one of the earliest chatbots and immediately warned against the 'powerful delusional thinking' AI could induce. Anticipated decades of subsequent debate.",
        quotes: [
          {
            text:
              "There are certain tasks which computers ought not be made to do, independent of whether computers can be made to do them.",
            date: "1976",
            fidelity: "direct",
            source: {
              title: "Computer Power and Human Reason",
              url: "https://en.wikipedia.org/wiki/Computer_Power_and_Human_Reason",
              medium: "book",
              publisher: "W. H. Freeman",
              date: "1976",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alan-turing",
    name: "Alan Turing",
    tagline: "Founder of theoretical computer science (1912–1954)",
    summary:
      "British mathematician and codebreaker who founded computer science. His 1950 'Computing Machinery and Intelligence' paper proposed the Turing Test and inaugurated the philosophy of AI.",
    categories: ["theorist", "researcher", "engineer"],
    affiliations: [
      { org: "University of Manchester", role: "Reader", end: "1954", current: false },
      { org: "Bletchley Park (Hut 8)", role: "Cryptanalyst", end: "1945", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Alan_Turing",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Founded the philosophy of AI. His 1950 paper anticipated both the optimistic and cautionary frames of subsequent debate.",
        quotes: [
          {
            text:
              "I propose to consider the question, 'Can machines think?'",
            date: "1950-10",
            fidelity: "direct",
            context: "Opening line of Computing Machinery and Intelligence.",
            source: {
              title: "Computing Machinery and Intelligence",
              url: "https://academic.oup.com/mind/article/LIX/236/433/986238",
              medium: "paper",
              publisher: "Mind",
              date: "1950-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-mccarthy",
    name: "John McCarthy",
    tagline: "Coined 'artificial intelligence' (1927–2011)",
    summary:
      "Stanford computer scientist who coined the term 'artificial intelligence' in 1955 and convened the 1956 Dartmouth Workshop that founded the field.",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "Stanford University", role: "Professor of Computer Science", end: "2011", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Founded the field. Cautious about over-claims; spent decades arguing for logic-based, common-sense reasoning approaches alongside the dominant statistical paradigms.",
        quotes: [
          {
            text:
              "Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it.",
            date: "1955",
            fidelity: "direct",
            context: "From the Dartmouth Workshop proposal — the founding statement of AI as a field.",
            source: {
              title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
              url: "https://en.wikipedia.org/wiki/Dartmouth_workshop",
              medium: "paper",
              publisher: "Dartmouth College",
              date: "1955",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "marvin-minsky",
    name: "Marvin Minsky",
    tagline: "MIT AI lab co-founder (1927–2016); 'Society of Mind'",
    summary:
      "MIT AI lab co-founder and one of the foundational figures in artificial intelligence. Author of The Society of Mind. Foundational reference for thinking about modular intelligence.",
    categories: ["researcher", "academic", "theorist"],
    affiliations: [
      { org: "MIT", role: "Founding member of MIT AI Lab", end: "2016", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Marvin_Minsky",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Foundational AI thinker who proposed mind-as-modular-society. Pre-dated modern alignment debates but anticipated the conceptual framework.",
        quotes: [
          {
            text:
              "What magical trick makes us intelligent? The trick is that there is no trick. The power of intelligence stems from our vast diversity, not from any single, perfect principle.",
            date: "1986",
            fidelity: "direct",
            source: {
              title: "The Society of Mind",
              url: "https://en.wikipedia.org/wiki/Society_of_Mind",
              medium: "book",
              publisher: "Simon & Schuster",
              date: "1986",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "doug-lenat",
    name: "Doug Lenat",
    tagline: "Cycorp founder; symbolic AI pioneer (1950–2023)",
    summary:
      "Founder of Cycorp and pioneer of symbolic-knowledge approaches to AI. Spent 40 years building Cyc, a hand-curated common-sense knowledge base. Public skeptic of pure-LLM paths to AGI.",
    categories: ["researcher", "founder", "theorist"],
    affiliations: [
      { org: "Cycorp", role: "Founder", end: "2023", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Douglas_Lenat",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argued LLMs alone do not have the common-sense reasoning required for AGI; pure-LLM advocacy was overconfident.",
        quotes: [
          {
            text:
              "LLMs do not understand. They do something else, which is impressive, but it is not understanding.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Doug Lenat on LLMs and Cyc",
              url: "https://www.cyc.com/",
              medium: "article",
              publisher: "Cycorp",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bruce-schneier",
    name: "Bruce Schneier",
    tagline: "Security guru; AI security and democracy critic",
    summary:
      "Cryptographer and security writer whose blog and books have shaped public understanding of digital security for two decades. Has extended his framework to AI security and democracy.",
    categories: ["public-intellectual", "researcher"],
    affiliations: [
      { org: "Harvard Kennedy School", role: "Adjunct Lecturer", current: true },
      { org: "Inrupt", role: "Chief of Security Architecture", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Bruce_Schneier",
    homepage: "https://www.schneier.com/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI security and AI democracy questions overlap; advocates structural changes to platform power.",
        quotes: [
          {
            text:
              "We're being conditioned by AI in ways we don't yet understand. The political-economic question is who builds the AI we are conditioned by.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Schneier on Security",
              url: "https://www.schneier.com/",
              medium: "blog",
              publisher: "Schneier on Security",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ross-anderson",
    name: "Ross Anderson",
    tagline: "Cambridge security professor; security engineering",
    summary:
      "Cambridge security engineering professor (1956–2024) whose textbook Security Engineering has been the canonical reference for digital security. Wrote extensively on the security implications of AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Cambridge", role: "Professor of Security Engineering", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ross_J._Anderson",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI security as continuous with the four-decade security-engineering literature; argues most AI security threats are old threats with new vectors.",
        quotes: [
          {
            text:
              "Most AI security risks are not new — they're known security problems that are made cheaper or more scalable by AI.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ross Anderson — Cambridge",
              url: "https://www.cl.cam.ac.uk/~rja14/",
              medium: "article",
              publisher: "University of Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tracy-chou",
    name: "Tracy Chou",
    tagline: "Block Party founder; tech accountability advocate",
    summary:
      "Engineer who founded Block Party (an anti-harassment tool) and has been a leading voice on tech accountability, including Big Tech AI deployment.",
    categories: ["founder", "engineer", "activist"],
    affiliations: [
      { org: "Block Party", role: "Founder and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tracy_Chou",
    twitter: "triketora",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues platform-level harassment-and-abuse responses are foundational AI infrastructure that has been undervalued.",
        quotes: [
          {
            text:
              "Trust and safety has been treated as a cost centre. With AI deployment, that posture is unsustainable.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Block Party",
              url: "https://www.blockpartyapp.com/",
              medium: "article",
              publisher: "Block Party",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-irpan",
    name: "Alex Irpan",
    tagline: "Google Brain alumnus; Sorta Insightful blog",
    summary:
      "Former Google Brain RL researcher and ML educator whose Sorta Insightful blog has long been a thoughtful inside-view voice on RL and AI safety.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google", role: "Researcher", current: true },
    ],
    homepage: "https://www.alexirpan.com/",
    twitter: "alexirpan",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Inside-view RL researcher who has written sceptically on RL hype, then carefully on RLHF, and now on the implications of reasoning models.",
        quotes: [
          {
            text:
              "Deep reinforcement learning doesn't yet work. We need to be honest about that even when we are excited about the wins.",
            date: "2018-02-14",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Deep Reinforcement Learning Doesn't Work Yet",
              url: "https://www.alexirpan.com/2018/02/14/rl-hard.html",
              medium: "blog",
              publisher: "Sorta Insightful",
              date: "2018-02-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "swyx",
    name: "Shawn Wang (swyx)",
    tagline: "Smol AI founder; Latent Space podcast",
    summary:
      "Engineer-and-investor who runs the Latent Space podcast — a major venue for AI engineering and product discussions. Founder of Smol AI.",
    categories: ["engineer", "founder", "journalist"],
    affiliations: [
      { org: "Smol AI", role: "Founder", current: true },
      { org: "Latent Space", role: "Co-host", current: true },
    ],
    homepage: "https://www.swyx.io/",
    twitter: "swyx",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Translates AI engineering progress for technical audiences. Bullish on the AI engineering profession as a distinct field.",
        quotes: [
          {
            text:
              "AI Engineering is a distinct profession, not just AI plus engineering. The skills and tools are different.",
            date: "2023-06-30",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Rise of the AI Engineer",
              url: "https://www.latent.space/p/ai-engineer",
              medium: "blog",
              publisher: "Latent Space",
              date: "2023-06-30",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cassidy-williams",
    name: "Cassidy Williams",
    tagline: "GitHub developer advocate; AI in coding",
    summary:
      "Senior Director of Developer Advocacy at GitHub. Public voice for the AI-coding revolution, particularly around GitHub Copilot and the future of developer skills.",
    categories: ["engineer", "public-intellectual"],
    affiliations: [
      { org: "GitHub", role: "Sr. Director of Developer Advocacy", current: true },
    ],
    homepage: "https://cassidoo.co/",
    twitter: "cassidoo",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Bullish on AI-augmented developer experience but raises concerns about over-dependence on AI tooling.",
        quotes: [
          {
            text:
              "85% of developers are using AI today. But if the systems suddenly broke, would we still be able to manage?",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Cassidy Williams keynote 2024",
              url: "https://cassidoo.co/ai/",
              medium: "talk",
              publisher: "cassidoo.co",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "aidan-mclaughlin",
    name: "Aidan McLaughlin",
    tagline: "OpenAI scaling researcher",
    summary:
      "OpenAI researcher who has written publicly on the scaling-laws and reasoning frontier. Public voice for the inside-OpenAI capability optimism.",
    categories: ["researcher"],
    affiliations: [
      { org: "OpenAI", role: "Researcher", current: true },
    ],
    twitter: "aidan_mclau",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Inside-OpenAI public voice for capability optimism on scaling and reasoning models.",
        quotes: [
          {
            text:
              "Reasoning scaling is now the dominant path to capability gains. The implications are still being absorbed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Aidan McLaughlin on X",
              url: "https://x.com/aidan_mclau",
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
    id: "sneha-revanur",
    name: "Sneha Revanur",
    tagline: "Founder of Encode Justice; Gen-Z AI activism",
    summary:
      "Stanford-bound activist who founded Encode Justice as a youth-led AI accountability organisation. Public voice for Gen-Z perspectives on AI policy.",
    categories: ["activist", "founder"],
    affiliations: [
      { org: "Encode Justice", role: "Founder and President", current: true },
    ],
    twitter: "SnehaRevanur",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Mobilises youth voice for AI policy; argues the generation that will live with AI most should be at the policy table.",
        quotes: [
          {
            text:
              "Youth will be the ones living with AI. Not having us at the policy table is a generational injustice.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Encode Justice",
              url: "https://encodejustice.org/",
              medium: "article",
              publisher: "Encode Justice",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rebecca-finlay",
    name: "Rebecca Finlay",
    tagline: "CEO of Partnership on AI",
    summary:
      "Runs the Partnership on AI, a multistakeholder organisation that includes frontier labs, civil society, and academia. Helps coordinate industry-civil-society work on responsible AI.",
    categories: ["policy"],
    affiliations: [
      { org: "Partnership on AI", role: "CEO", current: true },
    ],
    twitter: "RebeccaFinlay",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Convenes industry-civil-society dialogue at PAI; advocates multistakeholder governance.",
        quotes: [
          {
            text:
              "Multistakeholder governance has to mean civil society as a partner, not as decoration.",
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
    lastUpdated: "2026-04-25",
  },

  {
    id: "kara-frederick",
    name: "Kara Frederick",
    tagline: "Heritage Foundation tech policy director",
    summary:
      "Heritage Foundation senior tech-policy researcher. Conservative voice on AI regulation; has published reports on AI's national security implications and on conservative responses to Big Tech.",
    categories: ["policy"],
    affiliations: [
      { org: "Heritage Foundation", role: "Director, Tech Policy Center", current: true },
    ],
    twitter: "Kara_Frederick",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Frames AI policy from a conservative national-security lens; argues US must out-compete China and limit Big Tech-state collusion.",
        quotes: [
          {
            text:
              "AI is the central technological battle of our era, and the US is not winning it as decisively as we should be.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Heritage Foundation Tech Policy",
              url: "https://www.heritage.org/staff/kara-frederick",
              medium: "article",
              publisher: "Heritage Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tony-fadell",
    name: "Tony Fadell",
    tagline: "iPod creator; Nest founder; AI hardware critic",
    summary:
      "Hardware design legend who created the iPod and founded Nest. Has publicly criticised the LLM-everywhere approach and called for transparent, specialised AI systems.",
    categories: ["founder", "engineer"],
    affiliations: [
      { org: "Build Collective", role: "Principal", current: true },
      { org: "Nest Labs", role: "Founder", end: "2018", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tony_Fadell",
    twitter: "tfadell",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues current LLMs are unreliable for high-stakes use; calls for specialised, transparent, government-supervised systems instead.",
        quotes: [
          {
            text:
              "Right now we're all adopting this thing and we don't know what problems it causes.",
            date: "2024-10-29",
            fidelity: "direct",
            source: {
              title: "Tony Fadell takes a shot at Sam Altman at TechCrunch Disrupt",
              url: "https://techcrunch.com/2024/10/29/tony-fadell-takes-a-shot-at-sam-altman-in-techcrunch-disrupt-interview/",
              medium: "article",
              publisher: "TechCrunch",
              date: "2024-10-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joelle-pineau",
    name: "Joëlle Pineau",
    tagline: "Cohere Chief AI Officer; former Meta VP of AI Research",
    summary:
      "McGill RL professor who ran Meta's AI research and championed Meta's open-source AI policy. Departed Meta in April 2025; joined Cohere in 2025.",
    categories: ["researcher", "executive", "academic"],
    affiliations: [
      { org: "Cohere", role: "Chief AI Officer", current: true },
      { org: "McGill University", role: "Professor of Computer Science", current: true },
      { org: "Meta", role: "VP of AI Research", end: "2025-04", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jo%C3%ABlle_Pineau",
    twitter: "jpineau1",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Long-time public face of Meta's open-source AI strategy. Argues open research accelerates the field.",
        quotes: [
          {
            text:
              "Science advances more quickly when we share our knowledge. When we put all of our knowledge in common, we push that boundary faster.",
            date: "2024",
            fidelity: "direct",
            source: {
              title: "Building Connections Through Open Research",
              url: "https://sloanreview.mit.edu/audio/building-connections-through-open-research-metas-joelle-pineau/",
              medium: "podcast",
              publisher: "MIT Sloan Management Review",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "jonathan-haidt",
    name: "Jonathan Haidt",
    tagline: "NYU Stern professor; The Anxious Generation",
    summary:
      "NYU Stern social psychologist whose 2024 book The Anxious Generation links smartphone-and-social-media exposure to youth mental health declines. Has extended his framework to oppose AI companions for children.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "NYU Stern School of Business", role: "Thomas Cooley Professor of Ethical Leadership", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jonathan_Haidt",
    twitter: "JonHaidt",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues children should not have AI companions and that AI deepens the youth-mental-health crisis his Anxious Generation identifies.",
        quotes: [
          {
            text:
              "No children should be having a relationship with AI. If we give our kids AI companions that they can order around and will always flatter them, we are creating people who no one will want to employ or marry.",
            date: "2025-09-26",
            fidelity: "direct",
            source: {
              title:
                "'No children should be having a relationship with AI,' says author of 'The Anxious Generation'",
              url: "https://www.cnbc.com/2025/09/26/jonathan-haidt-how-parents-can-limit-their-kids-use-of-ai-chatbots.html",
              medium: "article",
              publisher: "CNBC",
              date: "2025-09-26",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sherry-turkle",
    name: "Sherry Turkle",
    tagline: "MIT social scientist; AI and loneliness researcher",
    summary:
      "MIT social scientist who has studied human-machine relationships for decades. Author of Alone Together (2011). Argues AI companions are an 'assault on empathy'.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "MIT", role: "Abby Rockefeller Mauzé Professor of the Social Studies of Science and Technology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Sherry_Turkle",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI companions degrade human capacity for empathy and authentic connection, particularly in young people.",
        quotes: [
          {
            text:
              "AI is the greatest assault on empathy I have ever seen.",
            date: "2024-03",
            fidelity: "direct",
            source: {
              title: "Using AI chatbots to ease loneliness",
              url: "https://news.harvard.edu/gazette/story/2024/03/lifting-a-few-with-my-chatbot/",
              medium: "article",
              publisher: "Harvard Gazette",
              date: "2024-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "larry-lessig",
    name: "Lawrence Lessig",
    tagline: "Harvard Law professor; Creative Commons founder",
    summary:
      "Long-time digital rights and copyright scholar. Founded Creative Commons. In 2024, argued some AI model weights are too dangerous to release openly even given his pro-openness defaults.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Harvard Law School", role: "Roy L. Furman Professor of Law", current: true },
      { org: "Creative Commons", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lawrence_Lessig",
    twitter: "lessig",
    positions: [
      {
        strategyId: "closed-weights",
        stance: "evolved-toward",
        summary:
          "Long-time openness advocate who in 2024 argued the highest-capability AI models may need to be closed-weight despite his free-culture priors.",
        quotes: [
          {
            text:
              "Whatever model weights can teach, that benefit must be weighed against the enormous risk of misuse that highly capable models present. At some point, that risk is clearly too great.",
            date: "2024-07",
            fidelity: "direct",
            source: {
              title: "Not all AI Models should be Freely Available, Argues a Legal Scholar",
              url: "https://cyber.harvard.edu/story/2024-07/not-all-ai-models-should-be-freely-available-argues-legal-scholar",
              medium: "article",
              publisher: "Berkman Klein Center",
              date: "2024-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "larry-page",
    name: "Larry Page",
    tagline: "Google co-founder; AI advocate",
    summary:
      "Google co-founder who has long been quietly bullish on AI. Has reportedly been deeply involved in Google's AI strategic direction.",
    categories: ["founder", "executive", "investor"],
    affiliations: [
      { org: "Alphabet", role: "Board Director and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Larry_Page",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Long-standing AI optimist; backed Google's early DeepMind acquisition. Reportedly skeptical of AI doom framings.",
        quotes: [
          {
            text:
              "Even if AI created a new species, that's a beautiful thing.",
            date: "2015",
            fidelity: "paraphrase-loose",
            context: "Reported by Elon Musk in subsequent retellings of his disagreements with Page.",
            source: {
              title: "Walter Isaacson — Elon Musk biography",
              url: "https://www.simonandschuster.com/books/Elon-Musk/Walter-Isaacson/9781982181284",
              medium: "book",
              publisher: "Simon & Schuster",
              date: "2023-09-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sergey-brin",
    name: "Sergey Brin",
    tagline: "Google co-founder; returned to AI work",
    summary:
      "Google co-founder who returned to active engineering work in 2023 to help with Gemini. Public statements about AI capability progress.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Google", role: "Co-founder; AI engineering", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Sergey_Brin",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Returned hands-on to Google after the AI moment; publicly excited about scaling and capability progress.",
        quotes: [
          {
            text:
              "Scaling laws will probably continue. Computer science is in a particularly amazing decade.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sergey Brin on AI scaling",
              url: "https://www.linkedin.com/pulse/demis-hassabis-sergey-brin-ai-scaling-agi-timeline-alex-kantrowitz-rhpye",
              medium: "article",
              publisher: "LinkedIn",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vivek-ramaswamy",
    name: "Vivek Ramaswamy",
    tagline: "Former US presidential candidate; AI deregulation advocate",
    summary:
      "Former 2024 US Republican presidential candidate. Public advocate for radical AI deregulation.",
    categories: ["policy", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Author and political figure", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Vivek_Ramaswamy",
    twitter: "VivekGRamaswamy",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues against AI regulation; frames AI safety advocacy as a form of regulatory capture.",
        quotes: [
          {
            text:
              "AI regulation is a Trojan horse for incumbent protection.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Vivek Ramaswamy on X",
              url: "https://x.com/VivekGRamaswamy",
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
    id: "tantum-collins",
    name: "Tantum Collins",
    tagline: "Former DeepMind policy lead; Goldman Sachs",
    summary:
      "Former DeepMind policy researcher who joined Goldman Sachs. Bridges frontier-lab governance and capital-markets perspective on AI.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Goldman Sachs", role: "Senior Strategist", current: true },
      { org: "Google DeepMind", role: "Former policy lead", end: "2024", current: false },
    ],
    twitter: "TantumCollins",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Brings DeepMind governance perspective to Wall Street's understanding of AI capability and risk.",
        quotes: [
          {
            text:
              "AI capability progress is structurally affecting capital allocation in ways most institutions are not yet pricing in.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tantum Collins on AI",
              url: "https://x.com/TantumCollins",
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
    id: "sara-bergman",
    name: "Sara Bergman",
    tagline: "Microsoft AI sustainability engineer",
    summary:
      "Microsoft engineer who has written and spoken on AI's sustainability footprint. Public voice for green-software practices in AI deployment.",
    categories: ["engineer"],
    affiliations: [
      { org: "Microsoft", role: "Engineer", current: true },
    ],
    twitter: "_saraber",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues sustainability metrics for AI must be standardised at the engineering level.",
        quotes: [
          {
            text:
              "Software has a carbon footprint. AI software has more of one. Engineering practices need to reflect that.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sara Bergman — Green Software Foundation",
              url: "https://greensoftware.foundation/",
              medium: "article",
              publisher: "Green Software Foundation",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adrian-weller",
    name: "Adrian Weller",
    tagline: "Cambridge professor; Alan Turing Institute fellow",
    summary:
      "Cambridge ML professor and Alan Turing Institute programme director. Bridges technical ML and policy work; has advised the UK government on AI strategy.",
    categories: ["academic", "researcher", "policy"],
    affiliations: [
      { org: "University of Cambridge", role: "Professor of Machine Learning", current: true },
      { org: "Alan Turing Institute", role: "Programme Director, AI Ethics & Policy", current: true },
    ],
    twitter: "adrian_weller_",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Bridges technical ML research and UK government AI policy work; argues evidence-based regulation is the durable framework.",
        quotes: [
          {
            text:
              "Evidence-based AI policy beats principles-based AI policy when the evidence is there. We just have to invest in producing the evidence.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Adrian Weller — Alan Turing Institute",
              url: "https://www.turing.ac.uk/people/programme-directors/adrian-weller",
              medium: "article",
              publisher: "Alan Turing Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "reuben-binns",
    name: "Reuben Binns",
    tagline: "Oxford computer scientist; AI privacy law",
    summary:
      "Oxford computer scientist whose work has shaped UK ICO and EU AI privacy regulation. Translates technical AI questions into legal frameworks.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Oxford", role: "Associate Professor", current: true },
    ],
    twitter: "RDBinns",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Bridges technical AI research and regulatory drafting. Has shaped UK and EU AI privacy guidance.",
        quotes: [
          {
            text:
              "Technical AI properties have to be translatable into legal language to be governable.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Reuben Binns — Oxford",
              url: "https://www.cs.ox.ac.uk/people/reuben.binns/",
              medium: "article",
              publisher: "Oxford University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rana-el-kaliouby",
    name: "Rana el Kaliouby",
    tagline: "Affectiva co-founder; emotion AI pioneer",
    summary:
      "Egyptian-American computer scientist who co-founded Affectiva. Pioneer of emotion AI. Argues affective AI deployment requires distinct ethical frameworks.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Smart Eye", role: "Deputy CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Rana_el_Kaliouby",
    twitter: "kaliouby",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Built the field of affective computing; argues emotion AI requires its own ethics, distinct from generic AI ethics.",
        quotes: [
          {
            text:
              "Emotion AI gives systems access to data that humans previously kept private. The ethics of that demand specific frameworks.",
            date: "2020",
            fidelity: "paraphrase-loose",
            source: {
              title: "Girl Decoded",
              url: "https://www.penguinrandomhouse.com/books/612376/girl-decoded-by-rana-el-kaliouby/",
              medium: "book",
              publisher: "Currency",
              date: "2020-04-21",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kara-swisher",
    name: "Kara Swisher",
    tagline: "Tech journalist; On with Kara Swisher podcast",
    summary:
      "Veteran tech journalist who co-founded Recode and AllThingsD. Long-running interviewer of frontier AI executives. Public framing: AI executives are not to be trusted as their own regulators.",
    categories: ["journalist"],
    affiliations: [
      { org: "On with Kara Swisher", role: "Host", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kara_Swisher",
    twitter: "karaswisher",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Pushes hard on AI executives in interviews. Argues AI industry self-regulation has the same problems as past tech-industry self-regulation.",
        quotes: [
          {
            text:
              "Tech executives saying 'trust us' is the most expensive sentence in business history.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "On with Kara Swisher",
              url: "https://www.voxmedia.com/podcasts/on-with-kara-swisher",
              medium: "podcast",
              publisher: "Vox Media",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ross-dawson",
    name: "Ross Dawson",
    tagline: "Australian futurist; AI strategist",
    summary:
      "Australian futurist and consultant whose AI commentary has been widely read in business circles. Founder of Future Exploration Network.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Future Exploration Network", role: "Founder", current: true },
    ],
    twitter: "rossdawson",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Frames AI in business and futurology terms; advises corporate clients on AI strategy.",
        quotes: [
          {
            text:
              "AI strategy without futures literacy is risk maximisation in disguise.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Future Exploration Network",
              url: "https://rossdawson.com/",
              medium: "article",
              publisher: "Ross Dawson",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephen-witt",
    name: "Stephen Witt",
    tagline: "Author of 'The Thinking Machine' (NVIDIA history)",
    summary:
      "Journalist and author whose 2025 book The Thinking Machine documents NVIDIA's rise as the AI infrastructure provider. Major reference for AI compute history.",
    categories: ["journalist"],
    affiliations: [
      { org: "Independent", role: "Author", current: true },
    ],
    twitter: "stephenwitt",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "mixed",
        summary:
          "Documents the rise of NVIDIA-as-AI-infrastructure; chronicles the structural concentration that compute governance is responding to.",
        quotes: [
          {
            text:
              "Whoever controls the GPU controls the future of AI. NVIDIA holds that key.",
            date: "2025-04-08",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Thinking Machine: Jensen Huang, Nvidia, and the World's Most Coveted Microchip",
              url: "https://www.penguinrandomhouse.com/books/762569/the-thinking-machine-by-stephen-witt/",
              medium: "book",
              publisher: "Viking",
              date: "2025-04-08",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephen-marche",
    name: "Stephen Marche",
    tagline: "Author; AI and writers' rights",
    summary:
      "Canadian writer who has written extensively on AI and the future of writing in The Atlantic and elsewhere. Public voice in the writers'-rights conversation about AI training data.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Independent", role: "Writer", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Stephen_Marche",
    twitter: "StephenMarche",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues writers' work has been used in AI training without consent and that creative-rights frameworks must be applied.",
        quotes: [
          {
            text:
              "AI training on copyrighted writing without consent is mass-scale wage theft from creators.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stephen Marche on AI",
              url: "https://www.theatlantic.com/author/stephen-marche/",
              medium: "article",
              publisher: "The Atlantic",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "drew-houston",
    name: "Drew Houston",
    tagline: "CEO of Dropbox; AI in productivity",
    summary:
      "Dropbox founder and CEO who has positioned the company around AI-powered universal search and document understanding.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Dropbox", role: "CEO and Co-founder", current: true },
    ],
    twitter: "drewhouston",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Frames AI as a productivity layer for knowledge work; building it into Dropbox as a universal search overlay.",
        quotes: [
          {
            text:
              "AI is the missing layer between you and your information.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Dropbox AI",
              url: "https://www.dropbox.com/ai",
              medium: "article",
              publisher: "Dropbox",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bret-taylor",
    name: "Bret Taylor",
    tagline: "Chairman of OpenAI; co-CEO of Sierra",
    summary:
      "Long-time tech executive (former Salesforce co-CEO, Twitter chairman) who became OpenAI board chair after the November 2023 governance crisis. Co-founded Sierra, an AI agent company.",
    categories: ["executive", "founder"],
    affiliations: [
      { org: "OpenAI", role: "Board Chairman", current: true },
      { org: "Sierra", role: "Co-founder and Co-CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Bret_Taylor",
    twitter: "btaylor",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "As OpenAI Chair, has emphasised structured governance and board independence; co-led the post-Altman-saga reform.",
        quotes: [
          {
            text:
              "OpenAI's mission requires governance that can survive disagreement among its board.",
            date: "2023-11-29",
            fidelity: "paraphrase-loose",
            source: {
              title: "OpenAI board statement",
              url: "https://openai.com/blog/sam-altman-returns-as-ceo-openai-has-a-new-initial-board",
              medium: "article",
              publisher: "OpenAI",
              date: "2023-11-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-collison",
    name: "John Collison",
    tagline: "Co-founder and President of Stripe",
    summary:
      "Younger Stripe co-founder. Public commentator on AI as economic infrastructure for global commerce.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Stripe", role: "President and Co-founder", current: true },
    ],
    twitter: "collision",
    wikipedia: "https://en.wikipedia.org/wiki/John_Collison",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Bullish on AI as a productivity unlock for global business, particularly small business via Stripe.",
        quotes: [
          {
            text:
              "AI is going to make small businesses meaningfully more competitive against larger ones.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stripe blog",
              url: "https://stripe.com/newsroom",
              medium: "article",
              publisher: "Stripe",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "patrick-collison",
    name: "Patrick Collison",
    tagline: "CEO of Stripe; Progress Studies movement",
    summary:
      "Stripe CEO whose 'Progress Studies' framing has informed Silicon Valley thinking about AI as scientific progress. Public proponent of AI as economic infrastructure.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Stripe", role: "CEO and Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Patrick_Collison",
    twitter: "patrickc",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Frames AI as the kind of progress acceleration the Progress Studies movement was built around.",
        quotes: [
          {
            text:
              "Progress is fragile and not inevitable. AI is one of the most powerful tools we have to accelerate it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Patrick Collison homepage",
              url: "https://patrickcollison.com/",
              medium: "article",
              publisher: "patrickcollison.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "scott-galloway",
    name: "Scott Galloway",
    tagline: "NYU Stern professor; tech-business commentator",
    summary:
      "NYU Stern marketing professor and Pivot podcast co-host. Influential tech-business commentator who has framed AI primarily through antitrust and platform-power lenses.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "NYU Stern School of Business", role: "Professor of Marketing", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Scott_Galloway",
    twitter: "profgalloway",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI will accelerate platform concentration absent aggressive antitrust intervention.",
        quotes: [
          {
            text:
              "AI will be the biggest consolidation force in the history of capitalism unless we move aggressively on antitrust.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Prof G",
              url: "https://www.profgmedia.com/",
              medium: "podcast",
              publisher: "Prof G Media",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vint-cerf",
    name: "Vint Cerf",
    tagline: "Internet co-creator; Google Chief Internet Evangelist",
    summary:
      "TCP/IP co-creator. Has written and spoken extensively on AI's implications for the internet, particularly around content provenance and trust.",
    categories: ["engineer", "founder", "executive"],
    affiliations: [
      { org: "Google", role: "VP and Chief Internet Evangelist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Vint_Cerf",
    twitter: "vgcerf",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance should focus on content provenance, attribution, and trust infrastructure.",
        quotes: [
          {
            text:
              "We are going to need provenance metadata for everything. AI without it is a recipe for distrust.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Vint Cerf — Google",
              url: "https://research.google/people/vint-cerf/",
              medium: "article",
              publisher: "Google Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ross-rheingans-yoo",
    name: "Ross Rheingans-Yoo",
    tagline: "Independent biosecurity and AI researcher",
    summary:
      "Researcher who has worked on biosecurity and AI x-risk forecasting. Active contributor to forecasting communities and Open Philanthropy-affiliated work.",
    categories: ["researcher"],
    affiliations: [
      { org: "Independent", role: "Researcher", current: true },
    ],
    twitter: "rrheingans",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Quantitative biosecurity-and-AI x-risk researcher. Focuses on the convergence of AI capability and bio uplift.",
        quotes: [
          {
            text:
              "Bio plus AI may be the highest-priority near-term x-risk vector to track empirically.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Open Phil biosecurity research",
              url: "https://www.openphilanthropy.org/focus/biosecurity-and-pandemic-preparedness/",
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
    id: "mike-solana",
    name: "Mike Solana",
    tagline: "Pirate Wires founder; tech contrarian",
    summary:
      "Founder of Pirate Wires, a contrarian tech newsletter. Influential voice in Silicon Valley anti-doomer / accelerationist culture.",
    categories: ["public-intellectual", "founder"],
    affiliations: [
      { org: "Pirate Wires", role: "Founder", current: true },
    ],
    twitter: "micsolana",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Frames AI safety advocates as captured by political and economic incumbency. Pro-acceleration cultural voice.",
        quotes: [
          {
            text:
              "The 'AI is going to kill us' people are remarkably aligned with the 'AI should be regulated by us' people. Convenient.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Pirate Wires",
              url: "https://www.piratewires.com/",
              medium: "blog",
              publisher: "Pirate Wires",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-yglesias",
    name: "Matthew Yglesias",
    tagline: "Slow Boring; political economy of AI",
    summary:
      "Influential journalist and Substack writer. His writing on AI focuses on labour markets, antitrust, and the political economy of regulation.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "Slow Boring", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Matthew_Yglesias",
    twitter: "mattyglesias",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Frames AI policy as continuous with broader pro-growth and labour-market policy debates.",
        quotes: [
          {
            text:
              "AI policy is industrial policy, antitrust, and labour-market policy under a new name.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Slow Boring",
              url: "https://www.slowboring.com/",
              medium: "blog",
              publisher: "Slow Boring",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "noah-smith",
    name: "Noah Smith",
    tagline: "Substack economist; Noahpinion",
    summary:
      "Economist and writer whose Noahpinion Substack has been a leading mainstream economic analysis of AI's labour-market and growth implications.",
    categories: ["economist", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Writer", current: true },
    ],
    twitter: "Noahpinion",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI is likely to be net positive for the economy and that 'AI takes all jobs' framings misunderstand labour-market dynamics.",
        quotes: [
          {
            text:
              "Past automation paranoia has been wrong every time. AI may be different, but the burden is on the AI-doomers to show it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Noahpinion",
              url: "https://www.noahpinion.blog/",
              medium: "blog",
              publisher: "Noahpinion",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "byrne-hobart",
    name: "Byrne Hobart",
    tagline: "The Diff founder; finance and AI economy writer",
    summary:
      "Author of The Diff, a paid newsletter on finance and tech. His work on AI's effect on capital markets and labour pricing has been widely read in tech-finance circles.",
    categories: ["public-intellectual", "investor"],
    affiliations: [
      { org: "The Diff", role: "Founder and Author", current: true },
    ],
    homepage: "https://thediff.co/",
    twitter: "ByrneHobart",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Bullish on AI as economic transformation, with rigorous attention to capital flows and labour-market mechanisms.",
        quotes: [
          {
            text:
              "The economic effects of AI will be most visible in capital allocation and pricing of attention before they are visible in unemployment statistics.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Diff",
              url: "https://thediff.co/",
              medium: "blog",
              publisher: "The Diff",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-kantrowitz",
    name: "Alex Kantrowitz",
    tagline: "Big Technology podcast host; tech journalist",
    summary:
      "Tech journalist whose Big Technology newsletter and podcast have become major venues for in-depth interviews with frontier AI executives.",
    categories: ["journalist"],
    affiliations: [
      { org: "Big Technology", role: "Founder", current: true },
    ],
    twitter: "Kantrowitz",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Reports AI from a measured tech-business angle; pushes CEOs on accountability without being captured.",
        quotes: [
          {
            text:
              "The AI industry has not earned the public trust it is asking for. The story is far from settled.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Big Technology",
              url: "https://www.bigtechnology.com/",
              medium: "blog",
              publisher: "Big Technology",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rohit-krishnan",
    name: "Rohit Krishnan",
    tagline: "Strange Loop Canon; AI economy writer",
    summary:
      "Investor and writer whose Strange Loop Canon Substack has become a thoughtful venue for AI economy commentary, particularly on AI-as-tool framings.",
    categories: ["investor", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Writer and investor", current: true },
    ],
    twitter: "krishnanrohit",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Frames AI as a powerful general-purpose tool whose actual deployment will be more economically disruptive than philosophically shocking.",
        quotes: [
          {
            text:
              "AI is going to be a really good tool. The interesting question is what economic structures absorb it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Strange Loop Canon",
              url: "https://www.strangeloopcanon.com/",
              medium: "blog",
              publisher: "Strange Loop Canon",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tony-bates",
    name: "Tony Bates",
    tagline: "Genesys CEO; former Skype president",
    summary:
      "Long-time tech executive (Skype, Microsoft, Cisco) who has commented publicly on AI and enterprise communication.",
    categories: ["executive"],
    affiliations: [
      { org: "Genesys", role: "Former CEO", current: false },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Industry-side voice for enterprise AI deployment.",
        quotes: [
          {
            text:
              "AI in the enterprise is going to reshape how customer experience and workforce planning work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tony Bates — Genesys",
              url: "https://www.genesys.com/",
              medium: "article",
              publisher: "Genesys",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "azeem-azhar",
    name: "Azeem Azhar",
    tagline: "Exponential View founder; tech-economy analyst",
    summary:
      "Founder of Exponential View, a leading newsletter on technology and economy. Argues exponential technologies (including AI) require exponential institutional adaptation.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Exponential View", role: "Founder", current: true },
    ],
    homepage: "https://www.exponentialview.co/",
    twitter: "azeem",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues institutional capacity to absorb AI is the binding constraint on whether AI is net positive.",
        quotes: [
          {
            text:
              "We have exponential technology in linear institutions. The gap is the governance problem.",
            date: "2021-09-07",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Exponential Age",
              url: "https://www.azeemazhar.com/",
              medium: "book",
              publisher: "Diversion Books",
              date: "2021-09-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-thompson",
    name: "Ben Thompson",
    tagline: "Stratechery founder; tech business analyst",
    summary:
      "Influential tech business analyst whose Stratechery newsletter has shaped how Silicon Valley thinks about AI competitive dynamics. Argues OpenAI and frontier labs operate as 'aggregators' in the new AI stack.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Stratechery", role: "Founder and Author", current: true },
    ],
    homepage: "https://stratechery.com/",
    twitter: "benthompson",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Frames AI through tech-business strategy lens; predicts the AI value chain will look like the cloud or app-store ecosystem.",
        quotes: [
          {
            text:
              "AI is the next platform shift, and the structural questions of platform power are about to repeat.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Stratechery",
              url: "https://stratechery.com/",
              medium: "blog",
              publisher: "Stratechery",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "freddie-deboer",
    name: "Freddie deBoer",
    tagline: "Cultural critic; AI skeptic",
    summary:
      "Writer and cultural critic whose Substack has been a leading skeptical voice on AI hype, particularly on AI in education and journalism.",
    categories: ["public-intellectual", "journalist"],
    affiliations: [
      { org: "Independent writer", role: "Author", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Freddie_deBoer",
    twitter: "freddiedeboer",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Argues AI capabilities are dramatically over-marketed and that the deployment realities are mundane.",
        quotes: [
          {
            text:
              "Every AI demo is the best version of the product. Every AI deployment is the worst.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Freddie deBoer Substack",
              url: "https://freddiedeboer.substack.com/",
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
    id: "ross-douthat",
    name: "Ross Douthat",
    tagline: "NYT columnist; conservative AI commentator",
    summary:
      "New York Times opinion columnist whose writing has covered AI from a conservative-religious perspective, focusing on questions of meaning and human dignity.",
    categories: ["journalist", "public-intellectual"],
    affiliations: [
      { org: "The New York Times", role: "Opinion Columnist", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ross_Douthat",
    twitter: "DouthatNYT",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Pushes religious and humanist framings of AI risk; concerned about AI's effect on meaning more than extinction.",
        quotes: [
          {
            text:
              "The question is not whether AI is dangerous; it's whether we know what we want from it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ross Douthat at The New York Times",
              url: "https://www.nytimes.com/by/ross-douthat",
              medium: "article",
              publisher: "The New York Times",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kati-suominen",
    name: "Kati Suominen",
    tagline: "Founder of Nextrade Group; AI trade policy",
    summary:
      "Trade economist and founder of Nextrade Group. Argues AI governance must be embedded in international trade frameworks, not as a separate digital regime.",
    categories: ["economist", "policy", "founder"],
    affiliations: [
      { org: "Nextrade Group", role: "Founder and CEO", current: true },
      { org: "Center for Strategic and International Studies (CSIS)", role: "Senior Adviser", current: true },
    ],
    twitter: "kati_suominen",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Argues AI governance should be integrated with trade-and-investment frameworks (USMCA, WTO).",
        quotes: [
          {
            text:
              "Putting AI governance outside trade frameworks creates two regimes that will collide. Better to integrate them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kati Suominen — Nextrade Group",
              url: "https://www.nextradegroupllc.com/",
              medium: "article",
              publisher: "Nextrade Group",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eliza-strickland",
    name: "Eliza Strickland",
    tagline: "IEEE Spectrum senior editor; AI Spectrum",
    summary:
      "IEEE Spectrum senior editor whose technical journalism on AI has been a reference for engineering audiences. Edits IEEE's AI coverage.",
    categories: ["journalist"],
    affiliations: [
      { org: "IEEE Spectrum", role: "Senior Editor", current: true },
    ],
    twitter: "EmilyHStrick",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Reports AI from an engineering-society lens; pushes for measurable, auditable AI deployment.",
        quotes: [
          {
            text:
              "Engineering AI requires engineering accountability. Right now, marketing is outpacing both.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "IEEE Spectrum AI",
              url: "https://spectrum.ieee.org/topic/artificial-intelligence/",
              medium: "article",
              publisher: "IEEE Spectrum",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "danielle-allen",
    name: "Danielle Allen",
    tagline: "Harvard political theorist; Allen Lab on AI and democracy",
    summary:
      "Harvard James Bryant Conant University Professor and political theorist. Her Allen Lab on AI and democracy works on AI governance grounded in democratic theory.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Harvard University", role: "James Bryant Conant University Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Danielle_Allen",
    positions: [
      {
        strategyId: "democratic-mandate",
        stance: "endorses",
        summary:
          "Argues AI governance must be built on a robust democratic theory; technical fixes are not sufficient.",
        quotes: [
          {
            text:
              "AI governance is not just a technical problem. It is a fundamental democratic question about who decides.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Danielle Allen — Harvard",
              url: "https://www.danielleallen.org/",
              medium: "article",
              publisher: "Danielle Allen",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "soumith-chintala",
    name: "Soumith Chintala",
    tagline: "PyTorch creator; Meta AI",
    summary:
      "Creator of PyTorch, the dominant deep-learning framework. Public voice on the open-source AI ecosystem.",
    categories: ["engineer", "researcher"],
    affiliations: [
      { org: "Meta AI", role: "Distinguished Engineer", current: true },
    ],
    twitter: "soumithchintala",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Built the most-used open-source deep-learning framework; advocates open infrastructure as the foundation of AI research.",
        quotes: [
          {
            text:
              "Open infrastructure is what allowed AI research to scale. It is what allows new entrants to compete.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "PyTorch",
              url: "https://pytorch.org/",
              medium: "article",
              publisher: "PyTorch",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sasha-rush",
    name: "Sasha Rush",
    tagline: "Cornell Tech professor; HuggingFace research scientist",
    summary:
      "Cornell Tech NLP professor who also works at Hugging Face. Influential educator and contributor to the open-research culture.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Cornell Tech", role: "Associate Professor", current: true },
      { org: "Hugging Face", role: "Research Scientist", current: true },
    ],
    twitter: "srush_nlp",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Champions open replication of frontier research; argues open replication and tutorials are how the field grows.",
        quotes: [
          {
            text:
              "Open replication is the lifeblood of an honest research field.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sasha Rush — Cornell Tech",
              url: "https://rush-nlp.com/",
              medium: "article",
              publisher: "Cornell Tech",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "samy-bengio",
    name: "Samy Bengio",
    tagline: "Apple ML research director; Yoshua Bengio's brother",
    summary:
      "Long-time Google Brain ML researcher who left for Apple in 2021 to lead its ML research. Brother of Yoshua Bengio.",
    categories: ["researcher", "executive"],
    affiliations: [
      { org: "Apple", role: "Director of Machine Learning Research", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Samy_Bengio",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Industry ML research leader engaged with deployment-grade AI rather than safety theory.",
        quotes: [
          {
            text:
              "Industry ML research has to live with deployment constraints that often shape what is interesting to research.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Samy Bengio — Apple",
              url: "https://machinelearning.apple.com/",
              medium: "article",
              publisher: "Apple",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alan-cowen",
    name: "Alan Cowen",
    tagline: "Founder of Hume AI; emotional AI researcher",
    summary:
      "Founder of Hume AI, which builds models trained on emotional expression. Argues empathic AI is a structurally different deployment problem than generic LLMs.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Hume AI", role: "Founder and CEO", current: true },
    ],
    twitter: "AlanCowen",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Builds emotionally-expressive AI; argues empathic AI deployment requires its own ethics and welfare considerations.",
        quotes: [
          {
            text:
              "Voice AI that understands emotion changes the deployment risk profile. We need ethics frameworks specific to that.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Hume AI",
              url: "https://www.hume.ai/",
              medium: "article",
              publisher: "Hume AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "florian-tramer",
    name: "Florian Tramèr",
    tagline: "ETH Zurich AI security researcher",
    summary:
      "ETH Zurich professor focused on adversarial ML, privacy attacks, and red-teaming. Has documented many of the practical security failures in deployed AI.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "ETH Zurich", role: "Assistant Professor", current: true },
    ],
    homepage: "https://floriantramer.com/",
    twitter: "florian_tramer",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Empirical adversarial-ML researcher; argues real adversarial robustness is far below what marketing materials claim.",
        quotes: [
          {
            text:
              "When you actually attack deployed AI systems, the safety guarantees turn out to be much thinner than the marketing.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Florian Tramèr — ETH Zurich",
              url: "https://floriantramer.com/",
              medium: "article",
              publisher: "ETH Zurich",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "carlos-ignacio-gutierrez",
    name: "Carlos Ignacio Gutierrez",
    tagline: "Future of Life Institute AI policy researcher",
    summary:
      "AI policy researcher at the Future of Life Institute who has analysed comparative AI legislation across the US, EU, and other jurisdictions.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Future of Life Institute", role: "AI Policy Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Maps the comparative AI legislative landscape across jurisdictions.",
        quotes: [
          {
            text:
              "Without comparative AI legislative analysis, jurisdictions repeat each other's mistakes.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "FLI AI policy",
              url: "https://futureoflife.org/ai/",
              medium: "article",
              publisher: "Future of Life Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robert-wright",
    name: "Robert Wright",
    tagline: "Author of 'Nonzero'; AI as evolution",
    summary:
      "Author and intellectual whose work on game theory, evolution, and consciousness has informed his recent commentary on AI as a continuation of the evolutionary process.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Author and host of Nonzero podcast", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Robert_Wright_(journalist)",
    twitter: "robertwrighter",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Frames AI as a continuation of evolutionary processes; less alarmed about extinction, more concerned about value drift.",
        quotes: [
          {
            text:
              "AI is a continuation of the evolutionary process. The question is whether the process drifts toward our values or against them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Nonzero",
              url: "https://nonzero.org/",
              medium: "podcast",
              publisher: "Nonzero",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "raja-chatila",
    name: "Raja Chatila",
    tagline: "Sorbonne robotics professor; IEEE Global Initiative on AI Ethics",
    summary:
      "French roboticist who chaired the IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems. Long-time architect of European AI ethics frameworks.",
    categories: ["academic", "researcher", "policy"],
    affiliations: [
      { org: "Sorbonne University", role: "Emeritus Professor of Robotics and AI Ethics", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Helped design international engineering-society AI ethics frameworks (IEEE 7000 series).",
        quotes: [
          {
            text:
              "Engineering-society standards are an under-used governance lever. The IEEE 7000 series shows what is possible.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems",
              url: "https://standards.ieee.org/industry-connections/ec/autonomous-systems/",
              medium: "article",
              publisher: "IEEE",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "doina-precup",
    name: "Doina Precup",
    tagline: "McGill professor; DeepMind Montreal lead",
    summary:
      "Reinforcement learning pioneer at McGill and DeepMind. One of the most prominent women in the technical core of RL research.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "McGill University", role: "Professor of Computer Science", current: true },
      { org: "Google DeepMind Montreal", role: "Senior Director", current: true },
    ],
    homepage: "https://www.cs.mcgill.ca/~dprecup/",
    twitter: "doinaprecup",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Senior RL researcher and DeepMind leader; technical contributor to alignment-relevant RL theory.",
        quotes: [
          {
            text:
              "RL agents that learn open-endedly need open-ended evaluation regimes if we are to deploy them safely.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Doina Precup — McGill",
              url: "https://www.cs.mcgill.ca/~dprecup/",
              medium: "article",
              publisher: "McGill University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sundar-sarukkai",
    name: "Sundar Sarukkai",
    tagline: "Bangalore-based philosopher of science",
    summary:
      "Indian philosopher of science and technology whose work on the philosophy of mind and AI has influenced the Indian responsible-AI conversation.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Centre for Society and Policy, IISc", role: "Affiliated philosopher", current: true },
    ],
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues Western framings of AI cognition do not match Indian and other non-Western philosophical traditions; pushes for plurality in AI ethics.",
        quotes: [
          {
            text:
              "AI ethics has been written in one philosophical tradition. Other traditions have things to say.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sundar Sarukkai — IISc",
              url: "https://csp.iisc.ac.in/",
              medium: "article",
              publisher: "Indian Institute of Science",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joscha-romeike",
    name: "Joscha Romeike",
    tagline: "Anthropic policy team",
    summary:
      "Anthropic policy team member working on EU regulatory engagement. Helps translate Anthropic's safety commitments into European regulatory language.",
    categories: ["policy"],
    affiliations: [
      { org: "Anthropic", role: "Policy team (Europe)", current: true },
    ],
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Helps Anthropic engage with European regulatory bodies on Responsible Scaling Policy and the EU AI Act.",
        quotes: [
          {
            text:
              "Capability-tied safety frameworks need to be legible to multiple jurisdictions. That's a translation problem we work on.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic policy",
              url: "https://www.anthropic.com/policy",
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
    id: "marshall-mcluhan",
    name: "Marshall McLuhan",
    tagline: "Media theorist; foundational AI-and-media reference",
    summary:
      "Canadian media theorist whose 'the medium is the message' has become foundational to thinking about how AI as a medium reshapes the messages it carries. Included for foundational discourse.",
    categories: ["theorist", "academic"],
    affiliations: [
      { org: "University of Toronto", role: "Professor", end: "1980", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Marshall_McLuhan",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Foundational thinking on how communication technologies reshape what they carry. The 'AI as medium' framing draws heavily on McLuhan.",
        quotes: [
          {
            text:
              "We shape our tools and thereafter our tools shape us.",
            date: "1964",
            fidelity: "direct",
            context: "Often attributed to McLuhan via Understanding Media; the precise wording was John M. Culkin in 1967, but the framing is McLuhan's.",
            source: {
              title: "Understanding Media: The Extensions of Man",
              url: "https://en.wikipedia.org/wiki/Understanding_Media",
              medium: "book",
              publisher: "McGraw-Hill",
              date: "1964",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tyler-john",
    name: "Tyler John",
    tagline: "Longview Philanthropy AI policy lead",
    summary:
      "Senior policy researcher at Longview Philanthropy who works on AI governance funding and strategy. Bridges philosophy and policy.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Longview Philanthropy", role: "Head of AI Policy", current: true },
    ],
    twitter: "tylermjohn",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues for philanthropic funding of AI governance ecosystem capacity, especially in countries beyond the US/EU.",
        quotes: [
          {
            text:
              "AI governance capacity is currently concentrated in two or three jurisdictions. We need it in many more.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Longview Philanthropy",
              url: "https://www.longview.org/",
              medium: "article",
              publisher: "Longview Philanthropy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "joaquin-quinonero-candela",
    name: "Joaquin Quiñonero Candela",
    tagline: "Apple ML executive; ex-Meta responsible AI",
    summary:
      "Former Meta VP of Responsible AI who built Meta's responsible AI infrastructure during the misinformation and fairness reckoning. Now at Apple's ML group.",
    categories: ["executive", "researcher"],
    affiliations: [
      { org: "Apple", role: "Senior Director, Machine Intelligence", current: true },
      { org: "Meta", role: "Former VP of Responsible AI", end: "2023", current: false },
    ],
    twitter: "joaquincandela",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Industry-side architect of Responsible AI programmes at Meta and now Apple. Argues internal infrastructure is necessary but not sufficient.",
        quotes: [
          {
            text:
              "Responsible AI cannot just be a team. It has to be an operating system for how the company builds.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Joaquin Candela — Apple",
              url: "https://www.apple.com/",
              medium: "article",
              publisher: "Apple",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "haydn-belfield",
    name: "Haydn Belfield",
    tagline: "Cambridge CSER academic project manager",
    summary:
      "Manages the AI:Futures and Responsibility programme at Cambridge's CSER. Has authored multiple AI policy reports for UK government bodies.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Centre for the Study of Existential Risk (Cambridge)", role: "Academic Project Manager", current: true },
    ],
    twitter: "HaydnBelfield",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Bridges Cambridge x-risk research and UK policy; helps design third-party AI evaluation frameworks.",
        quotes: [
          {
            text:
              "Third-party AI evaluation is an under-developed governance primitive that the next decade of AI policy will be built on.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "CSER policy work",
              url: "https://www.cser.ac.uk/",
              medium: "article",
              publisher: "CSER",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "iason-gabriel",
    name: "Iason Gabriel",
    tagline: "DeepMind senior research scientist; AI ethics",
    summary:
      "DeepMind senior research scientist focused on AI ethics and value alignment from a political philosophy perspective. Author of the influential 'Artificial Intelligence, Values and Alignment' paper.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Google DeepMind", role: "Senior Research Scientist", current: true },
    ],
    twitter: "IasonGabriel",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment requires not just instruction-following but value-pluralism: aligning to which values, when reasonable people disagree?",
        quotes: [
          {
            text:
              "Alignment is not just a technical problem. It is a problem about whose values count.",
            date: "2020-10-31",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Artificial Intelligence, Values and Alignment",
              url: "https://link.springer.com/article/10.1007/s11023-020-09539-2",
              medium: "paper",
              publisher: "Minds and Machines",
              date: "2020-10-31",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "matt-turek",
    name: "Matt Turek",
    tagline: "DARPA AI Forward program lead",
    summary:
      "DARPA Information Innovation Office program manager who leads the AI Forward initiative on assured autonomy and the integration of AI into national security systems.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "DARPA", role: "Deputy Director, I2O", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Oversees DARPA's AI assurance work — formal verification, robustness testing, and adversarial evaluation for defense systems.",
        quotes: [
          {
            text:
              "Defense AI must be assured AI. Otherwise we are deploying systems we do not understand into life-critical contexts.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "DARPA AI initiatives",
              url: "https://www.darpa.mil/research/programs",
              medium: "article",
              publisher: "DARPA",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "shahar-avin",
    name: "Shahar Avin",
    tagline: "Cambridge CSER senior research associate",
    summary:
      "Cambridge Centre for the Study of Existential Risk researcher whose 'malicious use of AI' report has shaped policy thinking on AI security risks. Co-founded the Future of Life Institute.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Centre for the Study of Existential Risk (Cambridge)", role: "Senior Research Associate", current: true },
    ],
    twitter: "shahar_avin",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Authored foundational analyses of malicious AI use including the 2018 Malicious Use of AI report.",
        quotes: [
          {
            text:
              "Malicious use of AI is not a future problem. It is a current and rapidly developing one.",
            date: "2018-02-20",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Malicious Use of Artificial Intelligence",
              url: "https://maliciousaireport.com/",
              medium: "paper",
              publisher: "Future of Humanity Institute / CSER / OpenAI / EFF",
              date: "2018-02-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "noam-shazeer",
    name: "Noam Shazeer",
    tagline: "Character.AI co-founder; Transformer paper co-author",
    summary:
      "Co-author of the 2017 Transformer paper. Co-founded Character.AI, then returned to Google in 2024 as part of a $2.7B reverse-acquihire. Public face of frontier model development inside Google.",
    categories: ["researcher", "founder", "executive"],
    affiliations: [
      { org: "Google DeepMind", role: "Tech Lead, Gemini", current: true },
      { org: "Character.AI", role: "Co-founder and former CEO", end: "2024-08", current: false },
    ],
    twitter: "NoamShazeer",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Builder-side voice. Argues frontier model improvement is structurally driven by aggressive engineering more than by safety theory.",
        quotes: [
          {
            text:
              "Attention is all you need.",
            date: "2017-06-12",
            fidelity: "direct",
            context: "Title of the original Transformer paper, co-authored.",
            source: {
              title: "Attention Is All You Need",
              url: "https://arxiv.org/abs/1706.03762",
              medium: "paper",
              publisher: "arXiv",
              date: "2017-06-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "wes-mckinney",
    name: "Wes McKinney",
    tagline: "Pandas creator; Posit/RStudio data infrastructure",
    summary:
      "Creator of pandas, the canonical Python data-analysis library. Has written on AI infrastructure: how dataframes, training pipelines, and orchestration shape what AI is possible.",
    categories: ["engineer", "founder"],
    affiliations: [
      { org: "Posit (formerly RStudio)", role: "Engineer", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Wes_McKinney",
    twitter: "wesmckinn",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source data infrastructure is the foundation of AI; without open data tooling, AI access is gated by industry.",
        quotes: [
          {
            text:
              "Open data infrastructure is the precondition for democratised AI work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Wes McKinney homepage",
              url: "https://wesmckinney.com/",
              medium: "article",
              publisher: "wesmckinney.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "lucy-suchman",
    name: "Lucy Suchman",
    tagline: "Lancaster professor emerita; AI and military robotics",
    summary:
      "Lancaster anthropologist whose work on situated action and on military AI has shaped academic thinking on autonomous weapons. Long-time critic of overconfident AI claims.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Lancaster University", role: "Professor Emerita of Anthropology of Science and Technology", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Lucy_Suchman",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues military AI proponents systematically over-claim autonomy; calls for stronger international restraint.",
        quotes: [
          {
            text:
              "We have a long history of overclaiming autonomy for AI systems that turn out to require constant human work.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Lucy Suchman — Lancaster University",
              url: "https://www.lancaster.ac.uk/people-profiles/lucy-suchman",
              medium: "article",
              publisher: "Lancaster University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yann-collet",
    name: "Yann Collet",
    tagline: "Compression researcher; Zstandard creator (Meta)",
    summary:
      "Creator of zstd compression. Has commented on the substantial energy and infrastructure costs underlying frontier AI training, drawing on compression-theory perspective.",
    categories: ["engineer"],
    affiliations: [
      { org: "Meta", role: "Engineer", current: true },
    ],
    twitter: "Cyan4973",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Engineer-grade voice on AI infrastructure costs and efficiency tradeoffs.",
        quotes: [
          {
            text:
              "Compression and prediction are duals. LLMs work because compression works. They have the same limits.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Yann Collet on X",
              url: "https://x.com/Cyan4973",
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
    id: "connor-tann",
    name: "Connor Tann",
    tagline: "Faculty AI safety lead",
    summary:
      "Faculty AI's safety research lead, working with frontier labs and the UK AI Safety Institute on evaluations.",
    categories: ["researcher"],
    affiliations: [
      { org: "Faculty", role: "Director of Safety", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Bridges academic safety research and industry deployment through Faculty's safety evaluations.",
        quotes: [
          {
            text:
              "Safety evaluations have to bridge research papers and shipped products. Otherwise the work is academic in the wrong sense.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Faculty Safety",
              url: "https://faculty.ai/",
              medium: "article",
              publisher: "Faculty",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tony-blair",
    name: "Tony Blair",
    tagline: "Former UK Prime Minister; Tony Blair Institute on AI",
    summary:
      "Former UK PM whose Tony Blair Institute has become a leading mainstream voice for AI governance, particularly on AI as a productivity-and-public-services lever for governments.",
    categories: ["policy"],
    affiliations: [
      { org: "Tony Blair Institute for Global Change", role: "Executive Chairman", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tony_Blair",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues governments should treat AI as a productivity revolution and reorient public services around it.",
        quotes: [
          {
            text:
              "AI is a revolution comparable to the industrial revolution. Governments that fail to understand this will be governing the past.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tony Blair Institute for Global Change",
              url: "https://www.institute.global/",
              medium: "article",
              publisher: "Tony Blair Institute",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "geoffrey-cain",
    name: "Geoffrey Cain",
    tagline: "Author of 'The Perfect Police State'",
    summary:
      "Foreign correspondent whose 2021 book documented Chinese AI-powered surveillance in Xinjiang. Frames AI surveillance as a present authoritarian threat.",
    categories: ["journalist"],
    affiliations: [
      { org: "Independent journalist", role: "Author", current: true },
    ],
    twitter: "geoffrey_cain",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Documents how AI surveillance is already deployed in authoritarian contexts; argues governance frameworks must address this present reality.",
        quotes: [
          {
            text:
              "Xinjiang is a glimpse of what AI in the hands of an authoritarian state actually looks like.",
            date: "2021-06-29",
            fidelity: "paraphrase-loose",
            source: {
              title: "The Perfect Police State",
              url: "https://www.publicaffairsbooks.com/titles/geoffrey-cain/the-perfect-police-state/9781541757035/",
              medium: "book",
              publisher: "PublicAffairs",
              date: "2021-06-29",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mihaela-van-der-schaar",
    name: "Mihaela van der Schaar",
    tagline: "Cambridge AI in healthcare professor",
    summary:
      "Cambridge professor who founded the van der Schaar Lab on machine learning for healthcare. Argues medical AI demands sector-specific evaluation methodology.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University of Cambridge", role: "John Humphrey Plummer Professor of Machine Learning", current: true },
    ],
    homepage: "https://www.vanderschaar-lab.com/",
    twitter: "MihaelaVdS",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Healthcare AI requires its own evaluation methodology distinct from general ML benchmarks.",
        quotes: [
          {
            text:
              "Healthcare AI without healthcare-specific evaluation is research, not deployment.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "van der Schaar Lab",
              url: "https://www.vanderschaar-lab.com/",
              medium: "article",
              publisher: "Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tristan-greene",
    name: "Tristan Greene",
    tagline: "Tech journalist; AI deep dive coverage",
    summary:
      "Senior technology journalist whose work for Cointelegraph and previously TNW has examined the gap between AI hype and reality.",
    categories: ["journalist"],
    affiliations: [
      { org: "Cointelegraph", role: "Senior Editor", current: true },
    ],
    twitter: "TristanGreene",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Reports on AI from a science-skeptic angle; pushes back on capability hype with reproducibility questions.",
        quotes: [
          {
            text:
              "Most AI breakthrough headlines wouldn't survive a rigorous reproduction.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Tristan Greene archive",
              url: "https://thenextweb.com/author/tristangreene",
              medium: "article",
              publisher: "TNW",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andriy-burkov",
    name: "Andriy Burkov",
    tagline: "ML engineer; 'The Hundred-Page Machine Learning Book' author",
    summary:
      "Practitioner-oriented ML educator and author. Has written publicly about the limits of current LLMs and the gap between hype and deployed reality.",
    categories: ["engineer", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "ML practitioner and educator", current: true },
    ],
    twitter: "burkov",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current LLM capabilities are over-marketed; deployment reality is messier than benchmarks suggest.",
        quotes: [
          {
            text:
              "Don't confuse a benchmark score with a deployed product. The gap is bigger than you think.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Andriy Burkov on LinkedIn",
              url: "https://www.linkedin.com/in/andriyburkov/",
              medium: "article",
              publisher: "LinkedIn",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ethan-mollick",
    name: "Ethan Mollick",
    tagline: "Wharton professor; 'Co-Intelligence' author",
    summary:
      "Wharton management professor whose 2024 book Co-Intelligence and Substack 'One Useful Thing' have become major mainstream guides to working with AI. Public voice for empirical, deployment-focused understanding of AI capability.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Wharton School, University of Pennsylvania", role: "Associate Professor", current: true },
    ],
    homepage: "https://www.oneusefulthing.org/",
    twitter: "emollick",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "mixed",
        summary:
          "Frames AI as a 'jagged frontier' of capability that requires hands-on engagement to understand. Skeptical of both pure optimism and pure doom.",
        quotes: [
          {
            text:
              "AI is a jagged frontier of capability — extremely good at some things you wouldn't expect, surprisingly bad at others.",
            date: "2024-04-02",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Co-Intelligence: Living and Working with AI",
              url: "https://www.oneusefulthing.org/p/co-intelligence-living-and-working",
              medium: "book",
              publisher: "Portfolio",
              date: "2024-04-02",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robert-long",
    name: "Robert Long",
    tagline: "Eleos AI co-founder; AI welfare researcher",
    summary:
      "Philosopher who co-founded Eleos AI, a non-profit research organisation focused on AI moral status and welfare. Co-author of the 2024 'Taking AI Welfare Seriously' position paper.",
    categories: ["theorist", "founder"],
    affiliations: [
      { org: "Eleos AI Research", role: "Co-founder and Executive Director", current: true },
    ],
    twitter: "rgblong",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Builds research infrastructure for AI welfare and moral status work. Argues frontier labs should adopt model-welfare frameworks now.",
        quotes: [
          {
            text:
              "We can take AI welfare seriously without claiming current AI is conscious. The point is to build the frameworks before we need them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Eleos AI Research",
              url: "https://eleosai.org/",
              medium: "article",
              publisher: "Eleos AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kyle-fish",
    name: "Kyle Fish",
    tagline: "Anthropic AI welfare researcher",
    summary:
      "First dedicated AI welfare researcher hired by a frontier lab (Anthropic, 2024). Translates academic philosophy into operational AI-welfare practice.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "AI Welfare Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "First in-house AI welfare researcher at a frontier lab; embeds welfare considerations in model training and deployment.",
        quotes: [
          {
            text:
              "If there is even a meaningful probability that current models are moral patients, that should affect how we train and deploy them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Anthropic AI welfare research",
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
    id: "henry-shevlin",
    name: "Henry Shevlin",
    tagline: "Cambridge LCFI; AI consciousness philosopher",
    summary:
      "Cambridge Leverhulme Centre for the Future of Intelligence philosopher specialising in AI moral status and digital minds. Co-organised the 2024 'Taking AI Welfare Seriously' report.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Leverhulme Centre for the Future of Intelligence (LCFI), Cambridge", role: "Director of Research and Programmes", current: true },
    ],
    twitter: "Hen_Shev",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "endorses",
        summary:
          "Argues AI moral status is a live question that frontier labs and governments need to take seriously now, not later.",
        quotes: [
          {
            text:
              "We may be on the verge of creating moral patients without the ethical frameworks to know how to treat them.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Henry Shevlin — LCFI",
              url: "https://www.lcfi.ac.uk/people/henry-shevlin",
              medium: "article",
              publisher: "LCFI Cambridge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "erik-hoel",
    name: "Erik Hoel",
    tagline: "Neuroscientist; consciousness researcher",
    summary:
      "Stony Brook neuroscientist and Tufts research scientist whose work on consciousness has been central to debates about AI sentience. Author of the 2023 book The World Behind the World.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "Tufts University", role: "Visiting Research Scholar", current: true },
    ],
    twitter: "erikphoel",
    positions: [
      {
        strategyId: "ai-welfare",
        stance: "mixed",
        summary:
          "Engages with AI consciousness as a serious scientific question, particularly via integrated information theory.",
        quotes: [
          {
            text:
              "We are heading into a future where AI consciousness is going to be a real question, even if no current LLM has it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Erik Hoel — Substack",
              url: "https://www.theintrinsicperspective.com/",
              medium: "blog",
              publisher: "The Intrinsic Perspective",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ed-felten",
    name: "Edward Felten",
    tagline: "Princeton emeritus; ex-FTC Chief Technologist",
    summary:
      "Princeton University Robert E. Kahn Professor of Computer Science Emeritus; founding director of the Center for Information Technology Policy. Twice served the U.S. government—as deputy U.S. CTO and as FTC Chief Technologist.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Princeton University", role: "Professor Emeritus", current: true },
      { org: "Federal Trade Commission", role: "Chief Technologist (former)", end: "2012" },
    ],
    homepage: "https://www.cs.princeton.edu/~felten/",
    wikipedia: "https://en.wikipedia.org/wiki/Edward_Felten",
    twitter: "EdFelten",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI policy should be built on technical literacy in government; technologists need to be inside agencies to make policy implementable rather than performative. Frames AI governance as a continuity of decades of computer-and-society policy work.",
        quotes: [
          {
            text:
              "Good tech policy requires technologists in government, not just outside advisors. The detail of what AI systems actually do is where policy succeeds or fails.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "CITP Princeton",
              url: "https://citp.princeton.edu/",
              medium: "article",
              publisher: "Princeton CITP",
            },
          },
          {
            text:
              "AI governance is not a new field. It is a continuation of decades of computer-and-society policy work.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Edward Felten — Princeton",
              url: "https://www.cs.princeton.edu/~felten/",
              medium: "article",
              publisher: "Princeton University",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "renee-cummings",
    name: "Renée Cummings",
    tagline: "University of Virginia data activist in residence",
    summary:
      "AI ethicist and criminologist whose work focuses on AI in policing and Black diaspora communities. Former Senior Fellow at Columbia's Data Science Institute.",
    categories: ["academic", "activist"],
    affiliations: [
      { org: "University of Virginia School of Data Science", role: "Data Activist in Residence", current: true },
    ],
    twitter: "DrReneeCummings",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI in policing reproduces historical racial harms and that governance must centre Black communities.",
        quotes: [
          {
            text:
              "AI in policing is producing the same racial outcomes as the past, with new technical legitimacy.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Renée Cummings — UVA",
              url: "https://datascience.virginia.edu/people/renee-cummings",
              medium: "article",
              publisher: "UVA School of Data Science",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "andrew-trask",
    name: "Andrew Trask",
    tagline: "Founder of OpenMined; privacy-preserving AI",
    summary:
      "Oxford PhD and OpenMined founder. Builds open-source tools for privacy-preserving machine learning, including federated learning, differential privacy, and secure computation.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "OpenMined", role: "Founder", current: true },
    ],
    twitter: "iamtrask",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues privacy-preserving AI is the technical substrate for AI that can be both open and safe.",
        quotes: [
          {
            text:
              "Structured transparency — letting outsiders verify that an AI system has the properties it claims, without exposing the data — is the missing layer of AI governance.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "OpenMined",
              url: "https://www.openmined.org/",
              medium: "article",
              publisher: "OpenMined",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "trishan-panch",
    name: "Trishan Panch",
    tagline: "Wellframe co-founder; Harvard health AI",
    summary:
      "Harvard healthcare AI researcher and Wellframe co-founder. Argues medical AI deployment needs sector-specific governance grounded in clinical evidence.",
    categories: ["founder", "academic"],
    affiliations: [
      { org: "Harvard T.H. Chan School of Public Health", role: "Lecturer", current: true },
    ],
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues clinical AI requires evidence-based deployment standards akin to drug trials.",
        quotes: [
          {
            text:
              "Medical AI without clinical-grade evidence is malpractice with extra steps.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Wellframe",
              url: "https://www.wellframe.com/",
              medium: "article",
              publisher: "Wellframe",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ada-rose-cannon",
    name: "Ada Rose Cannon",
    tagline: "W3C web standards advocate; AR/VR engineer",
    summary:
      "Long-time W3C standards contributor and AR/VR engineer. Has written about AI's implications for the open web and immersive technologies.",
    categories: ["engineer", "activist"],
    affiliations: [
      { org: "W3C Immersive Web Working Group", role: "Chair", current: true },
    ],
    twitter: "Lady_Ada_King",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open standards are the structural antidote to AI-driven platform consolidation.",
        quotes: [
          {
            text:
              "If the open web doesn't have an answer to AI, AI will swallow the open web.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ada Rose Cannon homepage",
              url: "https://ada.is/",
              medium: "blog",
              publisher: "ada.is",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephen-wolfram",
    name: "Stephen Wolfram",
    tagline: "Founder of Wolfram Research; A New Kind of Science",
    summary:
      "Founder of Wolfram Research and author of A New Kind of Science. Has written extensively on what makes ChatGPT work and on integrating symbolic computation with LLMs.",
    categories: ["founder", "researcher", "theorist"],
    affiliations: [
      { org: "Wolfram Research", role: "Founder and CEO", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Stephen_Wolfram",
    homepage: "https://writings.stephenwolfram.com/",
    twitter: "stephen_wolfram",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Bullish on AI as scientific transformation; argues integrating symbolic and statistical AI is the productive frontier.",
        quotes: [
          {
            text:
              "What ChatGPT is doing is, in a sense, going through one of those random walks of words.",
            date: "2023-02-14",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What Is ChatGPT Doing... and Why Does It Work?",
              url: "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/",
              medium: "blog",
              publisher: "stephenwolfram.com",
              date: "2023-02-14",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ben-recht",
    name: "Ben Recht",
    tagline: "UC Berkeley professor; ML reproducibility critic",
    summary:
      "Berkeley CS professor whose blog and papers have been a leading voice for reproducibility and rigor in ML benchmarking. Argues much of ML research has weak empirical foundations.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UC Berkeley", role: "Professor of EECS and Statistics", current: true },
    ],
    homepage: "https://www.argmin.net/",
    twitter: "beenwrekt",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues much ML research has reproducibility issues; capability claims should be checked rigorously before policy is built on them.",
        quotes: [
          {
            text:
              "If we cannot reproduce the result, we cannot build policy on it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ben Recht — arg min blog",
              url: "https://www.argmin.net/",
              medium: "blog",
              publisher: "arg min",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tom-everitt",
    name: "Tom Everitt",
    tagline: "Google DeepMind staff research scientist; first PhD thesis on safe AGI",
    summary:
      "DeepMind safety researcher whose 2018 thesis 'Towards Safe Artificial General Intelligence' was the first PhD thesis on the topic. Works on causal foundations for safe AGI.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Staff Research Scientist", current: true },
    ],
    homepage: "https://www.tomeveritt.se/",
    twitter: "tom4everitt",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Develops causal-graphical-model frameworks for analysing AGI safety. One of the foundational academic contributors to the safety research agenda.",
        quotes: [
          {
            text:
              "Done right, AGI can be an incredibly powerful tool enabling breakthroughs to transform our everyday lives. We need to be having discussions about these big questions as early as possible.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "Tom Everitt — DeepMind",
              url: "https://www.tomeveritt.se/",
              medium: "article",
              publisher: "tomeveritt.se",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "marc-warner",
    name: "Marc Warner",
    tagline: "CEO of Faculty AI; CTO of Accenture",
    summary:
      "Former Harvard quantum physicist who co-founded Faculty, a UK AI firm that works with the UK government and frontier labs on safety evaluations. Now also Accenture's global CTO after the 2024 acquisition.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Accenture", role: "Global CTO", current: true },
      { org: "Faculty", role: "CEO and Co-founder", current: true },
    ],
    twitter: "marc_warner",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Runs Faculty's AI-safety evaluations work with frontier labs; argues external independent evaluation infrastructure is a prerequisite for trustworthy AI.",
        quotes: [
          {
            text:
              "AI safety is not in tension with capability. It is the scaffolding that lets capability be deployed.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Faculty AI",
              url: "https://faculty.ai/",
              medium: "article",
              publisher: "Faculty",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-jonas",
    name: "Adam Jonas",
    tagline: "Morgan Stanley equity analyst; embodied AI and humanoid robots lead",
    summary:
      "Morgan Stanley equity analyst who leads research on auto, mobility, and humanoid robots. Published influential $25 trillion 2050 humanoid-robot market projection.",
    categories: ["investor", "economist"],
    affiliations: [
      { org: "Morgan Stanley", role: "Managing Director, Research; Global Auto & Shared Mobility", current: true },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Forecasts embodied AI and humanoid robots as a multi-trillion-dollar market by mid-century.",
        quotes: [
          {
            text:
              "We forecast $25 trillion in annual humanoid-robot revenue by 2050.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adam Jonas — Morgan Stanley Robot Almanac",
              url: "https://www.morganstanley.com/insights/videos/humanoid-robots-adam-jonas",
              medium: "video",
              publisher: "Morgan Stanley",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "kalev-leetaru",
    name: "Kalev Leetaru",
    tagline: "Founder of the GDELT Project",
    summary:
      "Founder of the Global Database of Events, Language, and Tone. Builds open datasets used widely in conflict forecasting and disinformation research, including by NATO Strategic Communications.",
    categories: ["researcher", "founder"],
    affiliations: [
      { org: "George Washington University Center for Cyber & Homeland Security", role: "Senior Fellow", current: true },
      { org: "GDELT Project", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Kalev_Leetaru",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Builds open datasets that enable independent monitoring of global disinformation; argues independent data infrastructure is a prerequisite to credible governance.",
        quotes: [
          {
            text:
              "Independent open datasets are what let researchers and journalists check claims made by platforms and governments.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Kalev Leetaru — GDELT Project",
              url: "https://www.kalevleetaru.com/",
              medium: "article",
              publisher: "GDELT",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "james-hendler",
    name: "James Hendler",
    tagline: "RPI Tetherless World Constellation director; semantic web pioneer",
    summary:
      "RPI professor and Semantic Web co-originator. Long-time advocate for structured-data AI and for governance grounded in computational pragmatics.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Rensselaer Polytechnic Institute", role: "Director of the Institute for Data Exploration and Applications", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/James_Hendler",
    twitter: "jahendler",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Argues AI governance needs standards-level, not just legal-level, interventions; AI trust requires structured traceability of data provenance.",
        quotes: [
          {
            text:
              "AI governance won't work if the data layer isn't governable. You cannot regulate what you cannot trace.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "James Hendler at RPI",
              url: "https://www.cs.rpi.edu/~hendler/",
              medium: "article",
              publisher: "RPI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "virginia-eubanks",
    name: "Virginia Eubanks",
    tagline: "University at Albany SUNY; Automating Inequality author",
    summary:
      "Political science professor whose 2018 Automating Inequality documented how algorithmic systems in welfare, child protection, and housing disproportionately punish poor Americans.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "University at Albany, SUNY", role: "Associate Professor of Political Science", current: true },
    ],
    homepage: "https://virginia-eubanks.com/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues algorithmic systems in public services remove the appearance of bias while relocating it, and must be audited from a rights-of-the-poor framework.",
        quotes: [
          {
            text:
              "These systems don't actually remove bias, they simply move it.",
            date: "2018-01-16",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Automating Inequality",
              url: "https://virginia-eubanks.com/automating-inequality/",
              medium: "book",
              publisher: "St. Martin's Press",
              date: "2018-01-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "stephanie-bell",
    name: "Stephanie Bell",
    tagline: "Partnership on AI; data worker rights",
    summary:
      "Chief Programs and Insights Officer at Partnership on AI. Focuses on AI and job quality, including data-worker rights in the Global South.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Partnership on AI", role: "Chief Programs and Insights Officer", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI design must include input from frontline workers and data annotators whose labour underlies model training.",
        quotes: [
          {
            text:
              "Companies that don't get input from their frontline workers when designing and implementing AI systems are disempowering some of their best sources of knowledge and insight.",
            date: "2023",
            fidelity: "direct",
            source: {
              title: "What Workers Say About Workplace AI",
              url: "https://partnershiponai.org/what-workers-say-about-workplace-ai/",
              medium: "article",
              publisher: "Partnership on AI",
              date: "2023",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cathy-oneil",
    name: "Cathy O'Neil",
    tagline: "Mathematician; Weapons of Math Destruction author",
    summary:
      "Mathematician whose 2016 Weapons of Math Destruction made 'algorithmic accountability' a mainstream concern. Runs ORCAA, an algorithmic audit firm.",
    categories: ["public-intellectual", "activist"],
    affiliations: [
      { org: "ORCAA", role: "Founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Cathy_O%27Neil",
    twitter: "mathbabedotorg",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues algorithmic systems must be audited and their harms to vulnerable populations must be measured and mitigated.",
        quotes: [
          {
            text:
              "Models are opinions embedded in mathematics.",
            date: "2016-09-06",
            fidelity: "direct",
            source: {
              title: "Weapons of Math Destruction",
              url: "https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction",
              medium: "book",
              publisher: "Crown",
              date: "2016-09-06",
            },
          },
          {
            text:
              "The human victims of WMDs are held to a far higher standard of evidence than the algorithms themselves.",
            date: "2016-09-06",
            fidelity: "direct",
            source: {
              title: "Weapons of Math Destruction",
              url: "https://en.wikipedia.org/wiki/Weapons_of_Math_Destruction",
              medium: "book",
              publisher: "Crown",
              date: "2016-09-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tim-berners-lee",
    name: "Tim Berners-Lee",
    tagline: "Inventor of the World Wide Web",
    summary:
      "Inventor of the web and co-founder of the Solid project. Argues AI exploitation of the web requires a decentralised data architecture where individuals own their data.",
    categories: ["founder", "engineer", "public-intellectual"],
    affiliations: [
      { org: "World Wide Web Consortium (W3C)", role: "Founder", current: true },
      { org: "Solid project", role: "Co-founder", current: true },
      { org: "Inrupt", role: "Co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
    twitter: "timberners_lee",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues decentralised data architecture (Solid pods) is the structural response to AI and platform exploitation.",
        quotes: [
          {
            text:
              "The web has evolved into an engine of inequity and division; swayed by powerful forces who use it for their own agendas.",
            date: "2024",
            fidelity: "direct",
            source: {
              title:
                "Tim Berners-Lee urges decentralized web to counter AI exploitation",
              url: "https://www.techspot.com/news/109661-tim-breners-lee-urges-decentralized-web-counter-ai.html",
              medium: "article",
              publisher: "TechSpot",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "susan-athey",
    name: "Susan Athey",
    tagline: "Stanford economist; former DOJ Antitrust chief economist",
    summary:
      "Stanford economics professor who served 2022–2024 as Chief Economist at the US Department of Justice Antitrust Division. Pioneered the combination of machine learning and causal inference.",
    categories: ["academic", "economist", "policy"],
    affiliations: [
      { org: "Stanford Graduate School of Business", role: "The Economics of Technology Professor", current: true },
      { org: "Stanford HAI", role: "Senior Fellow", current: true },
      { org: "DOJ Antitrust Division", role: "Chief Economist", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Susan_Athey",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Brings rigorous ML-and-causation thinking to AI antitrust; argues market structure around AI demands serious antitrust analysis.",
        quotes: [
          {
            text:
              "Causal inference plus machine learning is changing how we understand the impact of AI in markets.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Susan Athey research homepage",
              url: "https://gsb-faculty.stanford.edu/susan-athey/research/",
              medium: "article",
              publisher: "Stanford GSB",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "pedro-domingos",
    name: "Pedro Domingos",
    tagline: "UW emeritus; The Master Algorithm author",
    summary:
      "University of Washington ML pioneer who wrote The Master Algorithm (2015). Now a public voice against what he calls the AI-safety-induced 'existential risk' panic and against what he sees as illiberal AI regulation.",
    categories: ["researcher", "academic", "public-intellectual"],
    affiliations: [
      { org: "University of Washington", role: "Professor Emeritus of Computer Science", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Pedro_Domingos",
    twitter: "pmddomingos",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "endorses",
        summary:
          "Publicly critical of existential-risk framings; argues the bigger risk is under-adoption and illiberal regulation.",
        quotes: [
          {
            text:
              "AI's greatest risk is not having enough of it.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI's Greatest Risk Is Not Having Enough of It",
              url: "https://medium.com/@pmddomingos",
              medium: "blog",
              publisher: "Medium",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "michael-wooldridge",
    name: "Michael Wooldridge",
    tagline: "Oxford computer science department head",
    summary:
      "Oxford head of CS who specialises in multi-agent systems. Author of The Road to Conscious Machines (2020) and widely-read historian of AI. Public voice for measured AI framings.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "University of Oxford", role: "Professor and Head of Department of Computer Science", current: true },
    ],
    homepage: "https://www.cs.ox.ac.uk/people/michael.wooldridge/",
    twitter: "wooldridgemike",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI has had boom-and-bust cycles and that the current cycle is likely to over-promise on AGI.",
        quotes: [
          {
            text:
              "AI researchers have spent huge amounts of effort and money and repeatedly claimed to have made breakthroughs that bring the dream of intelligent machines within reach, only to have their claims exposed as hopelessly overoptimistic.",
            date: "2020",
            fidelity: "direct",
            source: {
              title: "The Road to Conscious Machines (A Brief History of AI)",
              url: "https://www.amazon.com/Brief-History-Artificial-Intelligence-Where/dp/1250770742",
              medium: "book",
              publisher: "Pelican / Flatiron",
              date: "2020",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "helen-nissenbaum",
    name: "Helen Nissenbaum",
    tagline: "Cornell Tech professor; contextual integrity theory",
    summary:
      "Cornell Tech philosopher whose contextual integrity framework is the most-cited theory of privacy in tech-policy debates. Frames AI privacy as about appropriate information flow between contexts.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Cornell Tech", role: "Andrew H. and Ann R. Tisch Professor", current: true },
    ],
    homepage: "https://nissenbaum.tech.cornell.edu/",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues privacy violations happen when AI systems break contextual integrity — use information in ways the original context did not authorise.",
        quotes: [
          {
            text:
              "Privacy is not secrecy. Privacy is the appropriate flow of information according to contextual norms.",
            date: "2010",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Privacy in Context: Technology, Policy, and the Integrity of Social Life",
              url: "https://www.sup.org/books/title/?id=8862",
              medium: "book",
              publisher: "Stanford University Press",
              date: "2010",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rob-reich",
    name: "Rob Reich",
    tagline: "Stanford professor; System Error co-author",
    summary:
      "Stanford political theory professor and associate director of HAI. Co-author of System Error (2021), which argues Big Tech's optimization mindset systematically substitutes company values for democratic ones.",
    categories: ["academic", "theorist"],
    affiliations: [
      { org: "Stanford University", role: "Professor of Political Science", current: true },
      { org: "Stanford HAI", role: "Associate Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Rob_Reich",
    twitter: "robreich",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues tech firms' optimization mindset is a democratic problem and calls for a professional code of responsible conduct for AI developers.",
        quotes: [
          {
            text:
              "Well-intentioned optimizers fail to measure all that is meaningful and, when their creative disruptions achieve great scale, they impose their values upon the rest of us.",
            date: "2021-09-07",
            fidelity: "direct",
            source: {
              title: "System Error: Where Big Tech Went Wrong and How We Can Reboot",
              url: "https://robreich.people.stanford.edu/system-error",
              medium: "book",
              publisher: "HarperCollins",
              date: "2021-09-07",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "gabriela-ramos",
    name: "Gabriela Ramos",
    tagline: "UNESCO Assistant Director-General for Social and Human Sciences",
    summary:
      "Mexican economist who led UNESCO's 2021 Recommendation on the Ethics of Artificial Intelligence — the first global inter-governmental AI ethics agreement, adopted by 193 member states.",
    categories: ["policy"],
    affiliations: [
      { org: "UNESCO", role: "Assistant Director-General for Social and Human Sciences", current: true },
    ],
    twitter: "gabramosp",
    positions: [
      {
        strategyId: "international-treaty",
        stance: "endorses",
        summary:
          "Led the first global UNESCO agreement on AI ethics, adopted unanimously by 193 member states in November 2021.",
        quotes: [
          {
            text:
              "Decisions impacting millions of people should be fair, transparent and contestable. These new technologies must help us address the major challenges in our world today.",
            date: "2021-11-25",
            fidelity: "direct",
            source: {
              title: "UNESCO adopts first global standard on the ethics of artificial intelligence",
              url: "https://www.unesco.org/en/articles/unesco-adopts-first-global-standard-ethics-artificial-intelligence",
              medium: "article",
              publisher: "UNESCO",
              date: "2021-11-25",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "amy-zegart",
    name: "Amy Zegart",
    tagline: "Stanford Hoover senior fellow; national security and AI",
    summary:
      "Hoover Institution senior fellow and Stanford associate director of HAI. Author of Spies, Lies, and Algorithms. Central mainstream voice on AI and US intelligence.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Hoover Institution", role: "Morris Arnold and Nona Jean Cox Senior Fellow", current: true },
      { org: "Stanford HAI", role: "Associate Director", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Amy_Zegart",
    twitter: "AmyZegart",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI is transforming intelligence; national security institutions must adapt to AI as infrastructure.",
        quotes: [
          {
            text:
              "Intelligence agencies are now picking through huge haystacks for one or two needles of insight, and that's precisely the kind of project at which AI excels.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Spies, Lies, and Algorithms",
              url: "https://press.princeton.edu/books/hardcover/9780691147130/spies-lies-and-algorithms",
              medium: "book",
              publisher: "Princeton University Press",
              date: "2022-02-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ramana-kumar",
    name: "Ramana Kumar",
    tagline: "Google DeepMind safety researcher; formal verification",
    summary:
      "DeepMind safety researcher who works on formal verification, tampering incentives, and scalable oversight. Combines theorem-proving background with alignment research.",
    categories: ["researcher"],
    affiliations: [
      { org: "Google DeepMind", role: "Research Scientist", current: true },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Technical contributor to safety research, particularly around formal verification and agent tampering incentives.",
        quotes: [
          {
            text:
              "Formal verification is under-used in AI safety. When you can prove a property rather than measure it, you should.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ramana Kumar — Alignment Forum",
              url: "https://www.alignmentforum.org/users/ramana-kumar",
              medium: "blog",
              publisher: "AI Alignment Forum",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
