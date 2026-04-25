import type { Person } from "@/lib/people-types";

// Batch AG chunk 01/5: split from people-ag.ts to keep
// individual modules small enough for turbopack to hot-reload.

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
          "Argues cognitive liberty, the right to mental privacy and self-determination over one's own thoughts, must be enshrined as a foundational right in the AI/neurotech era.",
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
              "The human brain is livewired, it is not a fixed organ. We will integrate with AI not by competing with it but by absorbing its capacities through new sensory and motor channels.",
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
              "We extracted millions of features from Claude 3 Sonnet using sparse autoencoders. The features map to specific concepts, including ones relevant to safety, like power-seeking behaviour and deception.",
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
          "Argues the field's coverage of low-resource languages is a structural safety issue, billions of speakers are excluded from frontier evaluation and alignment work.",
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
          "Argues AI infrastructure, models, data, distribution, is the most consequential investment category of the decade; frames safety as integral to durable products rather than a regulatory constraint.",
        quotes: [
          {
            text:
              "The AI stack is being rebuilt from silicon up to the application layer. The market structure that emerges will determine who has agency over this technology.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Founders Fund, Leigh Marie Braswell",
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
              title: "Raphaël Millière, homepage",
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
              title: "Max Bartolo, research page",
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
              "AI is like water, it's a powerful element. We are not building it to replace artists, we are building it to be a tool that artists use, like a camera or a paintbrush.",
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
        tentative: true,
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
              "ARIA exists to fund the research that markets and traditional grantmakers will not. AI safety done well is exactly that kind of bet, high-impact, hard to fund any other way.",
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
              "Of the four battlegrounds, data, compute, talent, and institutions, compute is the one most amenable to export controls. The semiconductor supply chain is a chokepoint we should use carefully.",
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
              "The U.S. and China need a Biden-Xi-style dialogue track on AI specifically, not because we will agree on values, but because we cannot afford to crisis-manage on top of misperception.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jon Bateman, Carnegie Endowment",
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
          "Brings a historian's perspective: argues each new wave of computing has been heralded as transformative, and that AI is similar, real and overstated at the same time.",
        quotes: [
          {
            text:
              "I have covered every major computing inflection since the personal computer. Each one was heralded as world-changing; some were, some were not. The pattern with AI is closer to the former.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Steven Levy, Wired columns",
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
              title: "Hal Varian, UC Berkeley",
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
              "If you believe, as I do, that the West has a moral obligation to lead in critical technologies, then defense AI is not optional. It is part of the deal of being a free society.",
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
              title: "Anduril Industries, about",
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
              title: "American Dynamism, a16z",
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
          "Argues responsible AI is achievable only when ethics is embedded throughout the development lifecycle and made part of governance, not an afterthought layered on top of products.",
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
          "Argues bias and accountability are systemic problems that require auditable practices, regulatory frameworks, and education, not just technical patches by individual labs.",
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
              "AI is the latest move in a longer game, corporate concentration in the digital economy. The right policy response begins with antitrust, not AI-specific regulation.",
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
              title: "Hung-yi Lee, NTU",
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
          "Argues African AI sovereignty, data, talent, models, deployment, is a precondition for the technology to serve Africans rather than being imposed from elsewhere.",
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
              "Frontier-lab tokenizers and pretraining mixtures barely cover African languages. The community has had to build its own datasets, evaluations, and benchmarks, often from scratch.",
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
              title: "Genevieve Bell, ANU School of Cybernetics",
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
              "Most of the work of being correct about AI risk is not technical, it is the epistemic practice that lets you face uncomfortable questions without flinching.",
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
          "Argues the long-run effects of present choices on the trajectory of civilization carry overwhelming moral weight, and that this implies existential-risk reduction, including from AI, is a top priority.",
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
              title: "Paul Bloom, Yale",
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
      "Founder and CEO of Shopify. In April 2025 issued an internal memo stating that 'reflexive AI usage is now a baseline expectation' for all Shopify employees, one of the most explicit AI-first labor policies from a major company.",
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
              title: "Sam Hammond, Substack",
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
          "Argues AI tutoring can deliver one-on-one expert teaching to every student, Bloom's 2-sigma effect at universal scale, and that this is the most important application of LLMs.",
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
              "Deep medicine is about restoring care, using AI to give doctors back the time they spend on screens and paperwork so they can be present with patients again.",
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
          "Argues we are heading toward 'technological unemployment', not because AI will eliminate all jobs, but because it will reduce demand for human labor across enough domains that distribution becomes the central political question.",
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
          "Argues fully open frontier models, including data and training recipes, are necessary for the field's scientific integrity and for democratizing access to advanced AI.",
        quotes: [
          {
            text:
              "We released OLMo with everything: weights, training data, training code, evaluation suites. Open-source AI cannot be a marketing word, it has to be all the way down.",
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
      "Microsoft Research mathematician; co-author of 'TinyStories' (2023), which showed that small language models trained on synthetic children's stories can produce coherent text, reframing what 'small' models can do.",
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
      "Co-founder of Zapier and, with François Chollet, of the 'ARC Prize', a public competition built around the ARC-AGI benchmark to reward systems that demonstrate genuine generalization rather than scaled pattern matching.",
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
              title: "ARC Prize 2024, Announcement",
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
          "Argues principles-based training, where models are trained against an explicit constitution by another AI, scales human oversight in a way RLHF alone does not.",
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
          "Argues mechanistic understanding of model behavior, including how deceptive alignment could arise, is required to make safety guarantees credible.",
        quotes: [
          {
            text:
              "Deceptive alignment is the scenario where a model behaves as if aligned during training but pursues different objectives at deployment. The question is whether we can rule it out empirically.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adam Jermyn, Anthropic",
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
              title: "Lukas Finnveden, LessWrong",
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
              "We define foundation models as models trained on broad data at scale and adaptable to a wide range of downstream tasks, and these models entail both new capabilities and new risks.",
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
];
