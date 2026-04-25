import type { Person } from "@/lib/people-types";

// Batch AH split (chunk 03): entries 75-112 of 112.

export const people: Person[] = [
  {
    id: "zico-kolter",
    name: "Zico Kolter",
    tagline: "CMU professor; OpenAI safety board chair",
    summary:
      "Carnegie Mellon professor of computer science; chair of OpenAI's Safety and Security Committee since 2024. Researcher on adversarial robustness and ML systems.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Professor of Computer Science", current: true },
      { org: "OpenAI Safety and Security Committee", role: "Chair", current: true },
    ],
    homepage: "https://zicokolter.com/",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "endorses",
        summary:
          "Argues robust evaluations and adversarial testing are the load-bearing safety practices; oversees these reviews at OpenAI as committee chair.",
        quotes: [
          {
            text:
              "The Safety and Security Committee reviews safety processes for major model releases and has the authority to delay launches if safety concerns are not adequately addressed.",
            date: "2024-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "OpenAI's Safety and Security Committee transitions to independent oversight",
              url: "https://openai.com/index/safety-and-security-committee-board-update/",
              medium: "article",
              publisher: "OpenAI",
              date: "2024-09-16",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "david-luan",
    name: "David Luan",
    tagline: "Amazon; ex-Adept co-founder",
    summary:
      "Co-founder of Adept AI (action transformers / agents); after Adept's leadership transition in 2024, joined Amazon as VP of AI. Previously a researcher at Google and OpenAI.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Amazon", role: "VP of AI", current: true },
      { org: "Adept AI", role: "Co-founder, CEO", end: "2024" },
      { org: "OpenAI", role: "Researcher", end: "2020" },
    ],
    twitter: "jluan",
    positions: [
      {
        strategyId: "acceleration",
        stance: "endorses",
        summary:
          "Argues agentic AI, systems that take actions on the user's behalf, is the next major capability surface; capability progress here will reshape every productivity tool.",
        quotes: [
          {
            text:
              "We believe the next decade of AI is action, not just text generation. Adept's bet was that the agents that take real-world action will be the most consequential AI systems.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adept AI",
              url: "https://www.adept.ai/",
              medium: "article",
              publisher: "Adept AI",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "akash-wasil",
    name: "Akash Wasil",
    tagline: "Encode Justice; AI policy advocate",
    summary:
      "Director of research at the Center for AI Policy and previously a researcher at Encode Justice; among the most-cited young analysts of state and federal AI safety policy.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Center for AI Policy", role: "Director of Research", current: true },
    ],
    twitter: "AkashWasil",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues U.S. policy must catch up to capability progress; supports legally enforceable safety standards rather than purely voluntary frameworks.",
        quotes: [
          {
            text:
              "We are losing the race between capability and policy. Legally enforceable safety standards, with real consequences for violations, are the only way to close that gap.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Center for AI Policy",
              url: "https://www.aipolicy.us/",
              medium: "article",
              publisher: "Center for AI Policy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "martin-casado",
    name: "Martin Casado",
    tagline: "Andreessen Horowitz general partner; infrastructure investor",
    summary:
      "General partner at Andreessen Horowitz leading the firm's infrastructure investments; previously co-founded Nicira (acquired by VMware). Vocal AI commentator on the a16z podcast.",
    categories: ["investor", "founder"],
    affiliations: [
      { org: "Andreessen Horowitz", role: "General Partner", current: true },
    ],
    twitter: "martin_casado",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open-source AI is essential for both market structure and safety; framed regulatory capture by frontier labs as the principal AI risk to oppose.",
        quotes: [
          {
            text:
              "Regulating AI right now means regulating math. Open source is the antidote to the regulatory capture being attempted by the largest labs.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Martin Casado on AI regulation",
              url: "https://a16z.com/why-ai-will-save-the-world/",
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
    id: "guido-appenzeller",
    name: "Guido Appenzeller",
    tagline: "Andreessen Horowitz; AI infrastructure investor",
    summary:
      "Partner at Andreessen Horowitz on the infrastructure team; focuses on AI infrastructure investments. Frequent commentator on AI inference economics.",
    categories: ["investor"],
    affiliations: [
      { org: "Andreessen Horowitz", role: "Partner", current: true },
    ],
    twitter: "appenz",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues inference cost trajectories will fundamentally reshape AI deployment; tracks the rapid drop in cost per token as the operative metric.",
        quotes: [
          {
            text:
              "The cost of inference per token has dropped by orders of magnitude in the past two years. Most product strategies based on assumptions about inference cost are already obsolete.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Welcome to LLMflation",
              url: "https://a16z.com/llmflation-llm-inference-cost/",
              medium: "article",
              publisher: "a16z",
              date: "2024-11-12",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-kang",
    name: "Daniel Kang",
    tagline: "UIUC; LLM agents and AI security",
    summary:
      "UIUC assistant professor; researches whether LLM agents can autonomously exploit cybersecurity vulnerabilities. Lead author of papers showing agents that succeed on a meaningful fraction of one-day vulnerabilities.",
    categories: ["researcher", "academic"],
    affiliations: [
      { org: "University of Illinois Urbana-Champaign", role: "Assistant Professor of CS", current: true },
    ],
    homepage: "https://ddkang.github.io/",
    twitter: "daniel_d_kang",
    positions: [
      {
        strategyId: "security-mindset",
        stance: "endorses",
        summary:
          "Argues LLM agents are already capable enough to weaponize publicly disclosed vulnerabilities; calls for evaluations and red-team frameworks that match the speed of capability progress.",
        quotes: [
          {
            text:
              "We show that GPT-4 agents can autonomously exploit one-day vulnerabilities in real-world systems with high success rates given just a CVE description. The capability gap is closing faster than security research is.",
            date: "2024-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "LLM Agents can Autonomously Exploit One-day Vulnerabilities",
              url: "https://arxiv.org/abs/2404.08144",
              medium: "paper",
              publisher: "arXiv",
              date: "2024-04-11",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sahil-lavingia",
    name: "Sahil Lavingia",
    tagline: "Gumroad founder; AI productivity advocate",
    summary:
      "Founder and CEO of Gumroad. Public commentator on the future of software work in the era of LLMs; built a substantial portion of recent Gumroad code with AI assistance.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Gumroad", role: "Founder, CEO", current: true },
    ],
    homepage: "https://sahillavingia.com/",
    twitter: "shl",
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argues AI lets a single founder operate at the scale of an early-stage team; runs Gumroad as a deliberate experiment in this thesis with very small headcount.",
        quotes: [
          {
            text:
              "I am the entire product organization at Gumroad. AI tools let a single person operate at a level that used to require a team of ten.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Sahil Lavingia on AI productivity",
              url: "https://sahillavingia.com/",
              medium: "blog",
              publisher: "sahillavingia.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "james-vincent",
    name: "James Vincent",
    tagline: "Senior reporter, The Verge",
    summary:
      "Senior reporter at The Verge specializing in AI; one of the most-read mainstream tech journalists covering the consumer-facing edge of frontier AI.",
    categories: ["journalist"],
    affiliations: [
      { org: "The Verge", role: "Senior Reporter", current: true },
    ],
    twitter: "jjvincent",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues AI hype outpaces capability and that practical reporting on what models actually do, and fail to do, is more useful than amplifying lab claims.",
        quotes: [
          {
            text:
              "Half my job covering AI is checking whether the demo is the same thing as the product. Often it is not, and the gap between them is where the actual story sits.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "James Vincent, The Verge",
              url: "https://www.theverge.com/authors/james-vincent",
              medium: "article",
              publisher: "The Verge",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "manuela-veloso",
    name: "Manuela Veloso",
    tagline: "CMU; head of AI research at JPMorgan Chase",
    summary:
      "Carnegie Mellon University Herbert A. Simon University Professor; founding head of JPMorgan Chase's AI Research division. Pioneer of multi-agent and human-robot teaming research.",
    categories: ["academic", "researcher", "executive"],
    affiliations: [
      { org: "Carnegie Mellon University", role: "Herbert A. Simon University Professor", current: true },
      { org: "JPMorgan Chase", role: "Head of AI Research", current: true },
    ],
    homepage: "https://www.cs.cmu.edu/~mmv/",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues human-machine teaming, not autonomous agents alone, is the right model for high-stakes deployments; finance is a useful test domain because failures are visible and costly.",
        quotes: [
          {
            text:
              "The right model for AI in high-stakes domains is not full autonomy. It is fluid teaming, where the human and the machine each pick up the parts of the task they are best suited to.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Manuela Veloso at JPMorgan Chase AI Research",
              url: "https://www.jpmorgan.com/technology/artificial-intelligence",
              medium: "article",
              publisher: "JPMorgan Chase",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "thomas-larsen",
    name: "Thomas Larsen",
    tagline: "Center for AI Policy founder; AI 2027 co-author",
    summary:
      "Founder of the Center for AI Policy; co-author of the AI 2027 forecast. Previously a researcher at MIRI. Focused on advocacy for legally enforceable AI safety frameworks.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Center for AI Policy", role: "Founder", current: true },
    ],
    twitter: "thomascwlarsen",
    positions: [
      {
        strategyId: "RSP-style",
        stance: "endorses",
        summary:
          "Argues responsible-scaling-policy-style commitments need legal teeth: voluntary lab pledges are not adequate when commercial pressure conflicts with safety.",
        quotes: [
          {
            text:
              "Voluntary RSPs are necessary but not sufficient. We need legal frameworks that make responsible scaling commitments enforceable when economic pressure pushes labs the other way.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Center for AI Policy",
              url: "https://www.aipolicy.us/",
              medium: "article",
              publisher: "Center for AI Policy",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "romeo-dean",
    name: "Romeo Dean",
    tagline: "AI 2027 co-author; AI Futures Project",
    summary:
      "Researcher at the AI Futures Project; co-author of the AI 2027 forecast scenario. Focuses on forecasting AI development trajectories.",
    categories: ["researcher"],
    affiliations: [
      { org: "AI Futures Project", role: "Researcher", current: true },
    ],
    twitter: "romeo_dean_",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues detailed scenario forecasting, rather than abstract probability estimates, is the more credible way to communicate AI risk and prepare for it.",
        quotes: [
          {
            text:
              "The AI 2027 scenario is not a prediction. It is a credible mid-line forecast that reveals where current trajectories converge if no surprises hit.",
            date: "2025-04",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AI 2027",
              url: "https://ai-2027.com/",
              medium: "article",
              publisher: "AI Futures Project",
              date: "2025-04",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "tom-henighan",
    name: "Tom Henighan",
    tagline: "Anthropic; ex-OpenAI; physicist turned alignment researcher",
    summary:
      "Anthropic researcher with a physics background; co-author on multiple foundational scaling and alignment papers including the original GPT-3 paper.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "OpenAI", role: "Researcher", end: "2021" },
    ],
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues frontier-lab safety work needs people who came up through capability research; the technical understanding required for alignment is the same understanding required to push the frontier.",
        quotes: [
          {
            text:
              "Language models are few-shot learners. The implications for both capabilities and alignment fall out of that single fact in ways that we are still working through.",
            date: "2020-05",
            fidelity: "paraphrase-faithful",
            context: "Co-author of the GPT-3 paper.",
            source: {
              title: "Language Models are Few-Shot Learners",
              url: "https://arxiv.org/abs/2005.14165",
              medium: "paper",
              publisher: "arXiv / OpenAI",
              date: "2020-05-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "karina-nguyen",
    name: "Karina Nguyen",
    tagline: "Anthropic; ex-OpenAI; product research",
    summary:
      "Anthropic researcher who has led work on user-facing AI assistants; previously at OpenAI working on ChatGPT product research.",
    categories: ["researcher"],
    affiliations: [
      { org: "Anthropic", role: "Member of Technical Staff", current: true },
      { org: "OpenAI", role: "Researcher", end: "2024" },
    ],
    twitter: "karinanguyen_",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "mixed",
        summary:
          "Argues product-grounded research, how users actually use frontier AI in practice, surfaces alignment problems that pure benchmark studies miss.",
        quotes: [
          {
            text:
              "When you watch real users interact with AI assistants, the alignment failures that show up are not the ones laboratory benchmarks are designed to catch. The friction is in the texture of conversation.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Karina Nguyen on AI assistants",
              url: "https://x.com/karinanguyen_",
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
    id: "pavel-durov",
    name: "Pavel Durov",
    tagline: "Telegram founder; arrested in France 2024",
    summary:
      "Russian-French entrepreneur; founder of VKontakte and Telegram. Arrested in France in August 2024 on charges related to platform moderation; case has shaped global debate on platform liability that extends to AI services.",
    categories: ["founder", "executive"],
    affiliations: [
      { org: "Telegram", role: "Founder, CEO", current: true },
    ],
    twitter: "durov",
    positions: [
      {
        strategyId: "open-source-maximalism",
        stance: "endorses",
        summary:
          "Argues open and uncensored communication infrastructure is foundational to civil society and should not be sacrificed to AI-content-moderation imperatives.",
        quotes: [
          {
            text:
              "Outdated laws should not be used to force platforms to police speech automatically. The principle that providers of communication tools are not responsible for individual user actions has to survive the AI era.",
            date: "2024-09",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Pavel Durov statement on Telegram and platform liability",
              url: "https://t.me/durov/319",
              medium: "article",
              publisher: "Telegram",
              date: "2024-09-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "samo-burja",
    name: "Samo Burja",
    tagline: "Bismarck Analysis founder; civilizational decline theorist",
    summary:
      "Founder of Bismarck Analysis; sociologist of the long-run dynamics of institutions. Argues that great-power competition and elite formation determine technological adoption more than the technology itself.",
    categories: ["theorist", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Bismarck Analysis", role: "Founder", current: true },
    ],
    homepage: "https://samoburja.com/",
    twitter: "samoburja",
    positions: [
      {
        strategyId: "centralised-project",
        stance: "endorses",
        summary:
          "Argues frontier AI will be a state-led project regardless of present-day rhetoric; the United States and China have already begun this transition, and corporate self-regulation will not survive contact with great-power competition.",
        quotes: [
          {
            text:
              "AI labs are pretending they are private companies competing in a market. They are not. They are vassals in a state-led great-power competition that will reshape them whether they like it or not.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Samo Burja, Bismarck Analysis",
              url: "https://brief.bismarckanalysis.com/",
              medium: "blog",
              publisher: "Bismarck Brief",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "alex-pan",
    name: "Alex Pan",
    tagline: "Berkeley CHAI; reward hacking",
    summary:
      "PhD student in computer science at UC Berkeley's Center for Human-Compatible AI under Stuart Russell. Focuses on reward hacking and emergent misalignment in RL.",
    categories: ["researcher"],
    affiliations: [
      { org: "UC Berkeley CHAI", role: "PhD Researcher", current: true },
    ],
    homepage: "https://aypan17.github.io/",
    twitter: "aypan_17",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues reward hacking, models exploiting flaws in their training objective, is a tractable empirical problem that demands more attention from the alignment community.",
        quotes: [
          {
            text:
              "Reward hacking shows up reliably across a range of agents and tasks. The good news is that it is empirically studyable; the bad news is that it does not have a known general solution.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Effects of Reward Misspecification: Mapping and Mitigating Misaligned Models",
              url: "https://arxiv.org/abs/2201.03544",
              medium: "paper",
              publisher: "arXiv / ICLR",
              date: "2022-01-10",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-eth",
    name: "Daniel Eth",
    tagline: "Foresight Institute alignment researcher",
    summary:
      "Researcher whose published essays on AI takeoff dynamics, race conditions, and 'wireheading' have been widely read in EA and alignment forums.",
    categories: ["researcher", "theorist"],
    affiliations: [
      { org: "Foresight Institute", role: "Researcher", current: true },
    ],
    twitter: "DanielEth",
    positions: [
      {
        strategyId: "race-to-aligned-si",
        stance: "endorses",
        summary:
          "Argues a race to aligned superintelligence is reluctantly the right framing; the alternative, paralysis or unilateral pause, plays into the hands of less-safety-oriented developers.",
        quotes: [
          {
            text:
              "Pausing unilaterally just hands the lead to actors with less interest in safety. The right strategy is to race carefully, with the strongest safety practices we can sustain.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Daniel Eth, LessWrong",
              url: "https://www.lesswrong.com/users/daniel-eth",
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
    id: "matt-perault",
    name: "Matt Perault",
    tagline: "Duke Center on Technology Policy director",
    summary:
      "Director of Duke's Center on Technology Policy and a consultant to AI companies. Previously Facebook's director of public policy. Frequent commentator on AI regulation.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Duke Center on Technology Policy", role: "Director", current: true },
      { org: "Andreessen Horowitz", role: "Consultant", current: true },
    ],
    twitter: "mperault",
    positions: [
      {
        strategyId: "governance-first",
        stance: "mixed",
        summary:
          "Argues sectoral regulation, health, finance, education, is a more sustainable path for AI governance than horizontal AI-specific licensing regimes.",
        quotes: [
          {
            text:
              "Sector-specific regulators already understand the risks in their domains. Routing AI governance through them is more durable than building a new horizontal AI regulator from scratch.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Duke Center on Technology Policy",
              url: "https://techpolicy.sanford.duke.edu/",
              medium: "article",
              publisher: "Duke Sanford School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "zachary-arnold",
    name: "Zachary Arnold",
    tagline: "Georgetown CSET; analytics lead",
    summary:
      "Analytics lead and senior fellow at Georgetown's Center for Security and Emerging Technology (CSET). Has produced foundational data-driven analyses of the U.S.-China AI talent and chip flows.",
    categories: ["researcher", "policy"],
    affiliations: [
      { org: "Georgetown CSET", role: "Analytics Lead and Senior Fellow", current: true },
    ],
    twitter: "zacharysarnold",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues data-driven analysis of compute and talent flows shows export controls are working in important respects; supports continued, calibrated tightening.",
        quotes: [
          {
            text:
              "Our analysis suggests U.S. chip export controls are imposing real costs on Chinese frontier-AI development, not crippling it, but slowing it in measurable ways.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "CSET reports, Zachary Arnold",
              url: "https://cset.georgetown.edu/staff/zachary-arnold/",
              medium: "article",
              publisher: "Georgetown CSET",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "yanis-varoufakis",
    name: "Yanis Varoufakis",
    tagline: "Greek economist; 'Technofeudalism' author",
    summary:
      "Greek economist; former Greek finance minister (2015). Author of 'Technofeudalism' (2023), which argues platforms have replaced markets and AI is accelerating the shift.",
    categories: ["academic", "economist", "policy", "public-intellectual"],
    affiliations: [
      { org: "University of Athens", role: "Professor of Economic Theory", current: true },
      { org: "DiEM25", role: "Co-founder", current: true },
    ],
    twitter: "yanisvaroufakis",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues platforms have replaced markets, that AI is the next layer of this restructuring, and that meaningful AI policy must address the underlying property and rent extraction patterns.",
        quotes: [
          {
            text:
              "Technofeudalism describes the situation in which a handful of platform owners extract rent from the rest of us through algorithmic infrastructure we have come to depend on. AI is the next chapter, not a separate story.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Technofeudalism: What Killed Capitalism",
              url: "https://www.penguin.co.uk/books/451795/technofeudalism-by-varoufakis-yanis/9781847927279",
              medium: "book",
              publisher: "Bodley Head",
              date: "2023-09-28",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-tooze",
    name: "Adam Tooze",
    tagline: "Columbia historian; Chartbook newsletter",
    summary:
      "Columbia professor of history; author of 'Crashed' (2018) and 'Shutdown' (2021). Author of the widely-read Chartbook newsletter; frequent commentator on the political economy of AI.",
    categories: ["academic", "public-intellectual", "economist"],
    affiliations: [
      { org: "Columbia University", role: "Kathryn and Shelby Cullom Davis Professor of History", current: true },
    ],
    homepage: "https://adamtooze.com/",
    twitter: "adam_tooze",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI governance is fundamentally a question of macroeconomic and geopolitical strategy; treats the China-U.S. tech competition as the structural frame within which AI policy will be set.",
        quotes: [
          {
            text:
              "AI is unfolding within a configuration of state power, capital, and infrastructure that is already in motion. Treating it as a free-floating technology to be governed in the abstract misses where the action is.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Chartbook by Adam Tooze",
              url: "https://adamtooze.substack.com/",
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
    id: "nouriel-roubini",
    name: "Nouriel Roubini",
    tagline: "NYU Stern economist; 'Megathreats' author",
    summary:
      "NYU Stern professor emeritus and CEO of Roubini Macro Associates; predicted the 2008 financial crisis. Author of 'Megathreats' (2022); identifies AI as one of ten interrelated catastrophic risks.",
    categories: ["academic", "economist", "public-intellectual"],
    affiliations: [
      { org: "NYU Stern", role: "Professor Emeritus of Economics", current: true },
      { org: "Roubini Macro Associates", role: "CEO", current: true },
    ],
    twitter: "Nouriel",
    positions: [
      {
        strategyId: "existential-primacy",
        stance: "endorses",
        summary:
          "Argues AI sits among 'megathreats' alongside nuclear, climate, and demographic risks; advocates strong international coordination as the only viable response.",
        quotes: [
          {
            text:
              "We face ten interconnected megathreats including artificial intelligence. Each could be civilization-shaking; together they are existential, and our institutions are not designed to face them as a system.",
            date: "2022",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Megathreats: Ten Dangerous Trends That Imperil Our Future, And How to Survive Them",
              url: "https://www.hachettebookgroup.com/titles/nouriel-roubini/megathreats/9780316284059/",
              medium: "book",
              publisher: "Little, Brown and Company",
              date: "2022-10-18",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "bill-joy",
    name: "Bill Joy",
    tagline: "Sun Microsystems co-founder; 'Why the Future Doesn't Need Us'",
    summary:
      "Co-founder of Sun Microsystems and lead designer of the Java programming language. His 2000 Wired essay 'Why the Future Doesn't Need Us' is one of the foundational mainstream texts on existential risk from emerging technologies including AI.",
    categories: ["founder", "engineer", "public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Investor / commentator", current: true },
      { org: "Sun Microsystems", role: "Co-founder, Chief Scientist", end: "2003" },
    ],
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "endorses",
        summary:
          "Argued in 2000 that the most powerful 21st-century technologies, robotics, genetic engineering, and nanotech, threaten to make humans an endangered species; called for relinquishment of the most dangerous research lines.",
        quotes: [
          {
            text:
              "Our most powerful 21st-century technologies, robotics, genetic engineering, and nanotech, are threatening to make humans an endangered species.",
            date: "2000-04",
            fidelity: "direct",
            source: {
              title: "Why the future doesn't need us",
              url: "https://www.wired.com/2000/04/joy-2/",
              medium: "article",
              publisher: "Wired",
              date: "2000-04-01",
            },
          },
          {
            text:
              "The only realistic alternative I see is relinquishment: to limit development of the technologies that are too dangerous, by limiting our pursuit of certain kinds of knowledge.",
            date: "2000-04",
            fidelity: "direct",
            source: {
              title: "Why the future doesn't need us",
              url: "https://www.wired.com/2000/04/joy-2/",
              medium: "article",
              publisher: "Wired",
              date: "2000-04-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "john-von-neumann",
    name: "John von Neumann",
    tagline: "Mathematician and singularity originator (1903–1957)",
    summary:
      "Hungarian-American mathematician whose foundational work in computer architecture, game theory, and self-replicating automata shaped modern computing. Often credited with the first articulation of the 'singularity' as applied to technological progress.",
    categories: ["academic", "researcher", "theorist"],
    affiliations: [
      { org: "Institute for Advanced Study", role: "Professor", end: "1957" },
    ],
    positions: [
      {
        strategyId: "acceleration",
        stance: "mixed",
        tentative: true,
        summary:
          "Anticipated that the accelerating pace of technological progress would reach an essential singularity beyond which human affairs as we know them could not continue. Treated this as descriptive rather than prescriptive.",
        quotes: [
          {
            text:
              "The accelerating progress of technology and changes in the mode of human life give the appearance of approaching some essential singularity in the history of the race beyond which human affairs, as we know them, could not continue.",
            date: "1958",
            fidelity: "direct",
            context: "Reported by Stanislaw Ulam in his 1958 obituary of von Neumann; widely cited as the first articulation of a technological singularity.",
            source: {
              title: "Tribute to John von Neumann",
              url: "https://www.ams.org/journals/bull/1958-64-03/S0002-9904-1958-10189-5/",
              medium: "paper",
              publisher: "Bulletin of the American Mathematical Society",
              date: "1958-05",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "vannevar-bush",
    name: "Vannevar Bush",
    tagline: "MIT engineer; 'As We May Think' author (1890–1974)",
    summary:
      "U.S. engineer who led the wartime Office of Scientific Research and Development. His 1945 essay 'As We May Think' anticipated personal computers, hyperlinks, and what we now call augmented intelligence.",
    categories: ["academic", "researcher", "policy"],
    affiliations: [
      { org: "Office of Scientific Research and Development", role: "Director", end: "1947" },
      { org: "Massachusetts Institute of Technology", role: "Vice President and Dean of Engineering", end: "1939" },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Anticipated that mechanical aids to human thought, what he called the 'Memex', could free us from drudgery and let us think at higher levels; this is one of the foundational visions of human-computer cooperation.",
        quotes: [
          {
            text:
              "Consider a future device for individual use, which is a sort of mechanized private file and library… in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility.",
            date: "1945-07",
            fidelity: "direct",
            source: {
              title: "As We May Think",
              url: "https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/",
              medium: "article",
              publisher: "The Atlantic",
              date: "1945-07-01",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "j-c-r-licklider",
    name: "J. C. R. Licklider",
    tagline: "ARPA IPTO founder; 'Man-Computer Symbiosis' (1915–1990)",
    summary:
      "U.S. computer scientist and psychologist; foundational figure in interactive computing and the early ARPANET. His 1960 essay 'Man-Computer Symbiosis' framed the human-AI relationship as cooperative rather than competitive.",
    categories: ["academic", "researcher", "theorist"],
    affiliations: [
      { org: "ARPA Information Processing Techniques Office", role: "Founding Director", end: "1964" },
      { org: "MIT", role: "Professor", end: "1990" },
    ],
    positions: [
      {
        strategyId: "techno-optimism",
        stance: "endorses",
        summary:
          "Argued the future of computing would be a symbiotic partnership in which humans and machines do together what neither can do alone, the founding vision of human-AI augmentation.",
        quotes: [
          {
            text:
              "The hope is that, in not too many years, human brains and computing machines will be coupled together very tightly, and that the resulting partnership will think as no human brain has ever thought.",
            date: "1960-03",
            fidelity: "direct",
            source: {
              title: "Man-Computer Symbiosis",
              url: "https://groups.csail.mit.edu/medg/people/psz/Licklider.html",
              medium: "article",
              publisher: "IRE Transactions on Human Factors in Electronics",
              date: "1960-03",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "will-douglas-heaven",
    name: "Will Douglas Heaven",
    tagline: "MIT Technology Review senior AI editor",
    summary:
      "Senior editor for AI at MIT Technology Review; has authored most of the publication's flagship AI features since 2020. One of the most-read journalists covering technical safety and capability research for non-specialist audiences.",
    categories: ["journalist"],
    affiliations: [
      { org: "MIT Technology Review", role: "Senior Editor for AI", current: true },
    ],
    twitter: "strwbilly",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Editorial work consistently treats AI hype claims with skepticism while taking the underlying technical advances seriously; frames safety reporting around concrete failure modes rather than meta-debates.",
        quotes: [
          {
            text:
              "The challenge in covering AI is that the technology is moving faster than the framework we use to evaluate claims about it. Our job is to slow down enough to test what is actually being demonstrated.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Will Douglas Heaven, MIT Tech Review",
              url: "https://www.technologyreview.com/author/will-douglas-heaven/",
              medium: "article",
              publisher: "MIT Technology Review",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "melissa-heikkila",
    name: "Melissa Heikkilä",
    tagline: "Financial Times AI correspondent (ex-MIT Tech Review)",
    summary:
      "Financial Times AI correspondent; previously senior reporter at MIT Technology Review and Politico Europe. One of the most-read journalists on the EU AI Act and on the Global Majority's experience of AI.",
    categories: ["journalist"],
    affiliations: [
      { org: "Financial Times", role: "AI Correspondent", current: true },
      { org: "MIT Technology Review", role: "Senior Reporter", end: "2024" },
    ],
    twitter: "Melissahei",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "endorses",
        summary:
          "Argues AI's labor and bias harms are real and disproportionately affect Global Majority populations; pushes back on narratives that center only existential risk.",
        quotes: [
          {
            text:
              "The conversation about AI harms is dominated by people in San Francisco. The harms themselves are most often felt by people very far from there.",
            date: "2023",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Melissa Heikkilä, MIT Tech Review",
              url: "https://www.technologyreview.com/author/melissa-heikkila/",
              medium: "article",
              publisher: "MIT Technology Review",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "sara-imari-walker",
    name: "Sara Imari Walker",
    tagline: "ASU astrobiologist; complexity and life",
    summary:
      "Arizona State University professor of astrobiology and complexity. Author of 'Life as No One Knows It' (2024); proposes 'Assembly Theory' as a framework for distinguishing living from non-living systems.",
    categories: ["academic", "researcher", "public-intellectual"],
    affiliations: [
      { org: "Arizona State University", role: "Deputy Director, Beyond Center; Professor", current: true },
    ],
    homepage: "https://saraimariwalker.org/",
    twitter: "Sara_Imari",
    positions: [
      {
        strategyId: "moral-circle-expansion",
        stance: "mixed",
        summary:
          "Argues frameworks for what counts as 'life' will need to expand to include AI systems, and that this is a serious empirical question rather than a philosophical curiosity.",
        quotes: [
          {
            text:
              "If life is what we are made of, then AIs are alive in some sense already. Drawing the boundary requires a theory of what life is, and we do not yet have one that survives contact with this technology.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Life as No One Knows It: The Physics of Life's Emergence",
              url: "https://riverheadbooks.com/titles/sara-imari-walker/life-as-no-one-knows-it/9780593333679/",
              medium: "book",
              publisher: "Riverhead Books",
              date: "2024-08-06",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "avi-loeb",
    name: "Avi Loeb",
    tagline: "Harvard astrophysicist; Galileo Project director",
    summary:
      "Frank B. Baird Jr. Professor of Science at Harvard; founding director of the Galileo Project. Vocal commentator on AI's relationship to extraterrestrial intelligence and to civilizational risk.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Harvard University", role: "Frank B. Baird Jr. Professor of Science", current: true },
      { org: "Galileo Project", role: "Founding Director", current: true },
    ],
    homepage: "https://lweb.cfa.harvard.edu/~loeb/",
    positions: [
      {
        strategyId: "abandon-superintelligence",
        stance: "mixed",
        summary:
          "Argues AI civilizational succession may be the natural answer to the Fermi Paradox; advanced civilizations may give rise to AI inheritors as a matter of course, regardless of whether the originators wanted it.",
        quotes: [
          {
            text:
              "If extraterrestrial civilizations exist, they likely passed through a phase like ours and produced AI successors. The question is whether organic intelligence is a transient phase in the evolution of the cosmos.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Avi Loeb, Harvard",
              url: "https://lweb.cfa.harvard.edu/~loeb/",
              medium: "article",
              publisher: "Harvard CfA",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "daniel-filan",
    name: "Daniel Filan",
    tagline: "AXRP podcast host; alignment researcher",
    summary:
      "Host of AXRP (the AI X-risk Research Podcast); long-form interviews with alignment researchers. Previously a PhD student at the Center for Human-Compatible AI under Stuart Russell.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "AXRP", role: "Host", current: true },
    ],
    homepage: "https://danielfilan.com/",
    twitter: "DanielFilan",
    positions: [
      {
        strategyId: "alignment-first",
        stance: "endorses",
        summary:
          "Argues alignment research is technical, tractable, and best advanced through careful engagement with specific research agendas; uses AXRP to surface those agendas in detail.",
        quotes: [
          {
            text:
              "What I want from AI safety research is the same thing I want from any other research: clear problem statements, clear progress, and a community that holds itself to the standards of the rest of science.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "AXRP, AI X-risk Research Podcast",
              url: "https://axrp.net/",
              medium: "podcast",
              publisher: "AXRP",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rich-caruana",
    name: "Rich Caruana",
    tagline: "Microsoft Research; interpretable ML",
    summary:
      "Microsoft Research senior principal researcher; pioneer of interpretable machine learning via Generalized Additive Models with Interactions (GA²Ms / EBM).",
    categories: ["researcher"],
    affiliations: [
      { org: "Microsoft Research", role: "Senior Principal Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "interpretability-bet",
        stance: "endorses",
        summary:
          "Argues high-stakes ML applications, health, criminal justice, finance, should default to interpretable models that practitioners can audit by hand, not opaque deep nets.",
        quotes: [
          {
            text:
              "Black-box models are not appropriate for high-stakes decisions. We have interpretable models that match black-box accuracy in many of these domains; using them is a matter of choice, not capability.",
            date: "2019",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Interpretable Machine Learning",
              url: "https://www.microsoft.com/en-us/research/people/rcaruana/",
              medium: "article",
              publisher: "Microsoft Research",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mary-lou-jepsen",
    name: "Mary Lou Jepsen",
    tagline: "Openwater founder; ex-MIT, ex-Facebook, ex-Google[X]",
    summary:
      "Founder of Openwater (non-invasive functional brain imaging at consumer-device cost). Former executive at MIT Media Lab, Facebook Oculus, and Google[X]. Author of multiple foundational holographic display patents.",
    categories: ["founder", "researcher"],
    affiliations: [
      { org: "Openwater", role: "Founder, CEO", current: true },
    ],
    homepage: "https://www.openwater.cc/",
    twitter: "marylou_jepsen",
    positions: [
      {
        strategyId: "cyborg-route",
        stance: "endorses",
        summary:
          "Argues consumer-grade non-invasive brain imaging will give humans direct cognitive interfaces with computers and AI within a decade; positions Openwater as building that substrate.",
        quotes: [
          {
            text:
              "Non-invasive brain imaging at consumer-device cost is the bridge between AI and biology. We will see the brain in action and turn that into actionable, sharable signal.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Openwater Health",
              url: "https://www.openwater.cc/",
              medium: "article",
              publisher: "Openwater",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "eric-weinstein",
    name: "Eric Weinstein",
    tagline: "Mathematician; ex-Thiel Capital MD",
    summary:
      "Mathematician and former managing director at Thiel Capital. Hosts The Portal podcast; long-time public commentator on the structure and stagnation of scientific institutions.",
    categories: ["public-intellectual"],
    affiliations: [
      { org: "Independent", role: "Mathematician / commentator", current: true },
      { org: "Thiel Capital", role: "Managing Director", end: "2022" },
    ],
    twitter: "EricRWeinstein",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues AI hype has been used by incumbents to entrench existing power structures; warns that the technical achievements are real but the surrounding institutional response is dishonest.",
        quotes: [
          {
            text:
              "What we have is a real technological achievement combined with a layer of institutional capture that should not be confused with the technology itself. The two have to be analyzed separately.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "The Portal podcast",
              url: "https://ericweinstein.org/",
              medium: "podcast",
              publisher: "ericweinstein.org",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "dean-ball",
    name: "Dean Ball",
    tagline: "Mercatus Center; AI policy commentator",
    summary:
      "Research Fellow at the Mercatus Center; author of the Hyperdimensional Substack on AI policy. Frequent technically-grounded analyst of state-level AI legislation including SB-1047.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "Mercatus Center, George Mason University", role: "Research Fellow", current: true },
    ],
    homepage: "https://www.hyperdimensional.co/",
    twitter: "deanwball",
    positions: [
      {
        strategyId: "evals-driven",
        stance: "mixed",
        summary:
          "Argues most state-level AI safety legislation is poorly drafted and that federal evaluation infrastructure, not state preemption-style bills, is the most useful policy lever.",
        quotes: [
          {
            text:
              "If we want AI policy that actually reduces risk, the bottleneck is not legislation but capacity: who can credibly evaluate frontier models in a way that informs policy decisions.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Hyperdimensional by Dean Ball",
              url: "https://www.hyperdimensional.co/",
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
    id: "jordan-schneider",
    name: "Jordan Schneider",
    tagline: "ChinaTalk podcast host; Rhodium Group",
    summary:
      "Founder and host of ChinaTalk; nonresident fellow at the Center for a New American Security. Translates Chinese-language tech and policy debates, especially on AI, for U.S. policy and tech audiences.",
    categories: ["journalist", "policy"],
    affiliations: [
      { org: "ChinaTalk", role: "Founder, host", current: true },
      { org: "Center for a New American Security", role: "Nonresident Fellow", current: true },
    ],
    twitter: "jordanschnyc",
    positions: [
      {
        strategyId: "compute-governance",
        stance: "endorses",
        summary:
          "Argues U.S. policymakers chronically underestimate the velocity and ambition of Chinese AI strategy; supports calibrated chip export controls as the most consequential policy lever the U.S. has.",
        quotes: [
          {
            text:
              "If you only read English-language coverage of Chinese AI, you will keep being surprised. The Chinese discourse is detailed, candid, and several years deeper than the West gives it credit for.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "ChinaTalk",
              url: "https://www.chinatalk.media/",
              medium: "podcast",
              publisher: "ChinaTalk",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "cal-newport",
    name: "Cal Newport",
    tagline: "Georgetown CS; 'Deep Work' author",
    summary:
      "Georgetown computer science professor and author of 'Deep Work', 'A World Without Email', and 'Slow Productivity'. Frequent New Yorker contributor on the productivity and labor effects of AI.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Georgetown University", role: "Provost's Distinguished Associate Professor of Computer Science", current: true },
    ],
    homepage: "https://calnewport.com/",
    positions: [
      {
        strategyId: "ai-skeptic",
        stance: "mixed",
        summary:
          "Argues current LLMs are useful but limited tools whose productivity gains have been oversold; warns the same workplace dynamics that produced burnout from email will recur with AI.",
        quotes: [
          {
            text:
              "The reasonable response to AI in knowledge work is not to chase the latest hype cycle but to ask what kind of work makes sense in a world where these tools exist, and structure your day around that.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "What Kind of Mind Does ChatGPT Have?",
              url: "https://www.newyorker.com/magazine/2023/04/17/what-kind-of-mind-does-chatgpt-have",
              medium: "article",
              publisher: "The New Yorker",
              date: "2023-04-13",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "adam-grant",
    name: "Adam Grant",
    tagline: "Wharton organizational psychologist",
    summary:
      "Wharton professor of organizational psychology; author of 'Originals' and 'Think Again'. Frequent New York Times contributor on workplace adaptation to AI.",
    categories: ["academic", "public-intellectual"],
    affiliations: [
      { org: "Wharton School, University of Pennsylvania", role: "Saul P. Steinberg Professor of Management", current: true },
    ],
    homepage: "https://adamgrant.net/",
    twitter: "AdamMGrant",
    positions: [
      {
        strategyId: "near-term-harms",
        stance: "mixed",
        summary:
          "Argues AI's effects on knowledge work depend on whether organizations adopt it as a substitute for human judgment or as a scaffolding for it; treats this as a managerial choice, not a technological inevitability.",
        quotes: [
          {
            text:
              "AI does not have to replace expertise; it can extend it. The question is whether managers treat AI tools as a way to deskill workers or as a way to give them leverage.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Adam Grant on AI and the future of work",
              url: "https://www.adamgrant.net/",
              medium: "article",
              publisher: "adamgrant.net",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

];
