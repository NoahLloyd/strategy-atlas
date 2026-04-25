import type { VintageEra } from "@/lib/people-types";

// Vintage = the era of AI whose problems and tools shaped this person's
// priors. Not their birth year, not when their Wikipedia page was created.
// The question is: which AI debate were they already in when their voice
// became a load-bearing one in this corpus.
//
// Each justification is concrete and falsifiable. If the dates are off,
// the entry should change.
//
// Definitions live in src/data/profile-tiers.ts. Add an entry here when
// you have at least one specific year/event that anchors the
// classification — never assign by intuition alone.

export interface VintageEntry {
  vintage: VintageEra;
  vintageNote: string;
}

export const profileVintages: Record<string, VintageEntry> = {
  "geoffrey-hinton": {
    vintage: "pioneer",
    vintageNote:
      "PhD 1978 (Edinburgh). Backpropagation paper 1986. His worldview is rooted in pre-deep-learning AI; the deep-learning era is the one he created.",
  },
  "yoshua-bengio": {
    vintage: "symbolic-era",
    vintageNote:
      "PhD 1991 (McGill). Worked through the symbolic→connectionist transition. Co-creator of the deep-learning era; his foundational priors precede it.",
  },
  "yann-lecun": {
    vintage: "symbolic-era",
    vintageNote:
      "LeNet 1989. Bell Labs 1988–1996. CNN architecture work pre-dates the deep-learning rise that vindicated it.",
  },
  "stuart-russell": {
    vintage: "symbolic-era",
    vintageNote:
      "PhD 1986 (Stanford). Russell & Norvig textbook 1995. AI safety voice activated ~2014 with the FLI letter; his priors are GOFAI-rooted.",
  },
  "demis-hassabis": {
    vintage: "deep-learning",
    vintageNote:
      "Founded DeepMind 2010 — the year the deep-learning lab template begins. AlphaGo 2016, AlphaFold 2018. His operational era is squarely deep-learning.",
  },
  "dario-amodei": {
    vintage: "scaling-era",
    vintageNote:
      "Joined OpenAI 2016 as a researcher; led GPT-3 work. Co-founded Anthropic 2021. His worldview is built on scaling laws and frontier-lab incentives.",
  },
  "sam-altman": {
    vintage: "scaling-era",
    vintageNote:
      "OpenAI co-founder 2015. AI as a strategic-capital problem starts with him in this era — pre-OpenAI he was YC president, not an AI figure.",
  },
  "ilya-sutskever": {
    vintage: "deep-learning",
    vintageNote:
      "AlexNet co-author 2012 — the paper that named the era. Sequence-to-sequence 2014. His career is the deep-learning era.",
  },
  "eliezer-yudkowsky": {
    vintage: "symbolic-era",
    vintageNote:
      "Founded Singularity Institute (later MIRI) in 2000. Sequences 2006–2009. His framing pre-dates deep learning; he engages it from a 2000s rationalist vantage.",
  },
  "nick-bostrom": {
    vintage: "symbolic-era",
    vintageNote:
      "Founded Oxford FHI 2005. Superintelligence (2014) was written before the deep-learning rise; his concept of AI is system-agnostic.",
  },
  "toby-ord": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Giving What We Can 2009. The Precipice (2020) draws on the pre-2012 x-risk frame. His worldview was set in the FHI/EA pre-deep-learning era.",
  },
  "max-tegmark": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Founded FLI 2014, drove the FLI letter 2015. His AI engagement begins on the cusp of the deep-learning era; Life 3.0 (2017) is the manifesto.",
  },
  "connor-leahy": {
    vintage: "scaling-era",
    vintageNote:
      "Co-founded EleutherAI 2020 (GPT-Neo). His public profile rises with scaling-era open replication; Conjecture (2022) is the policy follow-on.",
  },
  "paul-christiano": {
    vintage: "scaling-era",
    vintageNote:
      "Joined OpenAI 2017; introduced RLHF 2017. ARC 2021. His career is scaling-era applied alignment.",
  },
  "jan-leike": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind 2015–2021, OpenAI Superalignment 2021–2024. Came up in the deep-learning era; his frame matures in scaling.",
  },
  "john-schulman": {
    vintage: "deep-learning",
    vintageNote:
      "OpenAI co-founder 2015, PPO 2017. His career anchors in the deep-learning era; the scaling era is when his work goes public.",
  },
  "shane-legg": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind co-founder 2010. AGI definition with Hutter 2007. His operational era is deep-learning, with priors from the 2000s.",
  },
  "chris-olah": {
    vintage: "deep-learning",
    vintageNote:
      "Distill papers from 2017; circuits thread 2020. The interpretability subfield he founded is a deep-learning-era artefact.",
  },
  "neel-nanda": {
    vintage: "scaling-era",
    vintageNote:
      "Active interpretability publishing from ~2021; TransformerLens during scaling era. His priors are post-GPT-2.",
  },
  "mustafa-suleyman": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind co-founder 2010. Inflection 2022. Operational era spans deep-learning into scaling.",
  },
  "andrew-ng": {
    vintage: "deep-learning",
    vintageNote:
      "Google Brain 2011, Coursera ML course 2011. Helped define the deep-learning era as it broke into the mainstream.",
  },
  "fei-fei-li": {
    vintage: "deep-learning",
    vintageNote:
      "ImageNet released 2009; the dataset that catalysed deep learning. Stanford HAI 2019. Her career is the deep-learning era.",
  },
  "dan-hendrycks": {
    vintage: "scaling-era",
    vintageNote:
      "GELU 2016, MMLU 2020. Founded CAIS 2022. Worldview formed during scaling-era safety benchmarks.",
  },
  "roman-yampolskiy": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Active publishing on AI safety from ~2010. Pre-deep-learning frame; his arguments are system-agnostic.",
  },
  "yuval-noah-harari": {
    vintage: "post-chatgpt",
    vintageNote:
      "Sapiens 2011 was not about AI. AI engagement begins in earnest with Nexus (2024) and post-ChatGPT speeches. Pre-ChatGPT he was a historian.",
  },
  "vitalik-buterin": {
    vintage: "scaling-era",
    vintageNote:
      "Ethereum 2014. Active AI engagement begins ~2022 with d/acc framing — squarely in the scaling era.",
  },
  "elon-musk": {
    vintage: "deep-learning",
    vintageNote:
      "OpenAI co-founder 2015. Earlier mentions of AI risk 2014 (FLI letter). xAI 2023. His public AI voice begins in the deep-learning era.",
  },
  "marc-andreessen": {
    vintage: "post-chatgpt",
    vintageNote:
      "Techno-Optimist Manifesto October 2023 — six months after ChatGPT. Pre-2023 his AI engagement was VC, not advocacy.",
  },
  "tristan-harris": {
    vintage: "post-chatgpt",
    vintageNote:
      "AI Dilemma talk March 2023. Earlier work was tech-ethics broadly; the AI focus is post-ChatGPT.",
  },
  "aza-raskin": {
    vintage: "post-chatgpt",
    vintageNote:
      "CHT AI work follows Harris's 2023 turn. Pre-ChatGPT was browser/UX work.",
  },
  "holden-karnofsky": {
    vintage: "pre-deep-learning",
    vintageNote:
      "GiveWell 2007, Open Philanthropy 2014. AI safety funding decisions from the FHI/EA pre-deep-learning era; his frame predates deep learning.",
  },
  "helen-toner": {
    vintage: "scaling-era",
    vintageNote:
      "Joined CSET (founded 2019). OpenAI board ~2021. China-AI policy work from the scaling-era window.",
  },
  "jaan-tallinn": {
    vintage: "pre-deep-learning",
    vintageNote:
      "FLI co-founded 2014; FHI funding earlier. His funder-era frame predates the deep-learning rise; he funded those who built the modern field.",
  },
  "jack-clark": {
    vintage: "deep-learning",
    vintageNote:
      "Joined OpenAI 2016, co-founded Anthropic 2021. Operational career is deep-learning era, with policy voice maturing in scaling era.",
  },
  "lina-khan": {
    vintage: "post-chatgpt",
    vintageNote:
      "Antitrust scholarship before, but FTC AI scrutiny ramped 2023+. Her AI-policy voice is post-ChatGPT.",
  },
  "timnit-gebru": {
    vintage: "deep-learning",
    vintageNote:
      "Stanford PhD 2017 with Fei-Fei Li. Black in AI 2017. Stochastic Parrots 2021. Her career is deep-learning era ethics.",
  },
  "emily-bender": {
    vintage: "scaling-era",
    vintageNote:
      "Stochastic Parrots 2021 marks her load-bearing AI voice. Earlier work was computational linguistics; the LLM critique is scaling-era.",
  },
  "margaret-mitchell": {
    vintage: "deep-learning",
    vintageNote:
      "Google Ethical AI co-lead 2017. Model Cards 2019. Career is deep-learning era ethics infrastructure.",
  },
  "gary-marcus": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Cognitive scientist long before deep learning. Geometric Intelligence 2014. His skeptical frame is pre-AlexNet and remains so.",
  },
  "mira-murati": {
    vintage: "deep-learning",
    vintageNote:
      "Tesla Model X 2014; OpenAI VP Applied 2018; CTO 2022. Her operational career maps to the deep-learning era.",
  },
  "pope-francis": {
    vintage: "post-chatgpt",
    vintageNote:
      "AI engagement via Antiqua et Nova 2025 and Rome Call 2020 (the latter signed pre-ChatGPT but came alive after). Public AI voice is post-ChatGPT.",
  },
  "bill-gates": {
    vintage: "pre-deep-learning",
    vintageNote:
      "AI commentary from ~2014 (FLI letter signatory). Long pre-AI tech career frames his commentary; AI as one of many emerging-tech bets.",
  },
  "scott-alexander": {
    vintage: "pre-deep-learning",
    vintageNote:
      "LessWrong from ~2009, SSC 2013. His AI risk frame is rationalist-pre-AlexNet; he engages new systems through that lens.",
  },
  "zvi-mowshowitz": {
    vintage: "scaling-era",
    vintageNote:
      "AI weekly roundup begins ~2022 in earnest. Pre-2022 was MtG and rationalist commentary; AI focus is scaling-era.",
  },
  "leopold-aschenbrenner": {
    vintage: "post-chatgpt",
    vintageNote:
      "OpenAI Superalignment hire 2023, Situational Awareness June 2024. His public voice is entirely post-ChatGPT.",
  },
  "daniel-kokotajlo": {
    vintage: "scaling-era",
    vintageNote:
      "OpenAI policy/governance 2018–2024. AI 2027 (2025) builds on scaling-era forecasting practice.",
  },
  "ajeya-cotra": {
    vintage: "scaling-era",
    vintageNote:
      "Bio-anchors AI timelines report 2020. Her forecasting frame is the scaling-era OpenPhil window.",
  },
  "richard-ngo": {
    vintage: "scaling-era",
    vintageNote:
      "AGI Safety Fundamentals course 2021. DeepMind/OpenAI safety ~2018+. Career anchors in the scaling era.",
  },
  "rohin-shah": {
    vintage: "deep-learning",
    vintageNote:
      "PhD UC Berkeley CHAI; Alignment Newsletter 2018. Career bridges deep-learning into scaling era.",
  },
  "evan-hubinger": {
    vintage: "scaling-era",
    vintageNote:
      "'Risks from Learned Optimization' 2019 introduced mesa-optimisation. Anthropic 2021. Career is squarely scaling-era alignment theory.",
  },
  "buck-shlegeris": {
    vintage: "scaling-era",
    vintageNote:
      "MIRI early 2010s; Redwood Research founded 2021. AI control work matures in scaling era.",
  },
  "nate-soares": {
    vintage: "pre-deep-learning",
    vintageNote:
      "MIRI from 2014 as President. Frame inherits Yudkowsky-era priors; his work is pre-deep-learning rationalist tradition adapted forward.",
  },
  "daniel-dennett": {
    vintage: "pioneer",
    vintageNote:
      "PhD 1965 (Oxford). Foundational philosophy of mind work spans 1969–2024. His AI commentary draws on cybernetics-era functionalism.",
  },
  "david-chalmers": {
    vintage: "symbolic-era",
    vintageNote:
      "PhD 1993 (Indiana). The Conscious Mind 1996. His hard-problem framing precedes the deep-learning era and remains his analytical tool.",
  },
  "anders-sandberg": {
    vintage: "pre-deep-learning",
    vintageNote:
      "FHI from 2006. Whole-brain emulation roadmap 2008. His x-risk frame is set in the pre-AlexNet FHI period.",
  },
  "andrej-karpathy": {
    vintage: "deep-learning",
    vintageNote:
      "Stanford PhD 2015 with Fei-Fei Li. CS231n course taught the deep-learning era. OpenAI founding team 2015.",
  },
  "wojciech-zaremba": {
    vintage: "deep-learning",
    vintageNote:
      "OpenAI co-founder 2015. NYU/Facebook AI Research before. Career is deep-learning era frontier-lab.",
  },
  "daniela-amodei": {
    vintage: "scaling-era",
    vintageNote:
      "Stripe → OpenAI VP Operations → co-founded Anthropic 2021. Her AI operational era starts and stays in scaling.",
  },
  "kevin-scott": {
    vintage: "deep-learning",
    vintageNote:
      "Microsoft CTO from 2017; the OpenAI partnership defines his AI tenure. His frame is deep-learning hyperscaler.",
  },
  "audrey-tang": {
    vintage: "deep-learning",
    vintageNote:
      "Civic-tech work pre-2010 but Digital Minister role 2016–2024 puts her AI policy voice in the deep-learning era.",
  },
  "yi-zeng": {
    vintage: "deep-learning",
    vintageNote:
      "Brain-inspired AI lab at CAS established 2015. His career maps to the Chinese AI rise during the deep-learning era.",
  },
  "rishi-sunak": {
    vintage: "post-chatgpt",
    vintageNote:
      "Bletchley Summit November 2023. AI as a head-of-state policy domain begins for him post-ChatGPT.",
  },
  "chuck-schumer": {
    vintage: "post-chatgpt",
    vintageNote:
      "AI Insight Forums September 2023. Long Senate career; AI as a legislative agenda begins post-ChatGPT.",
  },
  "ted-lieu": {
    vintage: "post-chatgpt",
    vintageNote:
      "House AI Caucus formed 2023. Pre-2023 his CS background was background; the AI legislator role is post-ChatGPT.",
  },
  "cynthia-rudin": {
    vintage: "deep-learning",
    vintageNote:
      "PhD 2004 (Princeton). Interpretable-ML programme matures in 2010s as a counter to deep-learning opacity.",
  },
  "stuart-armstrong": {
    vintage: "pre-deep-learning",
    vintageNote:
      "FHI from 2010. Long body of agent-foundations safety work pre-AlexNet; Aligned AI is a continuation of that frame.",
  },
  "jeff-clune": {
    vintage: "deep-learning",
    vintageNote:
      "Cornell PhD 2010. Open-endedness and AI-generating-algorithms work spans the deep-learning era.",
  },
  "david-krueger": {
    vintage: "scaling-era",
    vintageNote:
      "Mila PhD; Cambridge faculty 2021. Safety surveys and 'Managing Extreme AI Risks' 2024 anchor him in scaling era.",
  },
  "katja-grace": {
    vintage: "pre-deep-learning",
    vintageNote:
      "AI Impacts founded 2014 (MIRI seed). The AI Expert Survey methodology is set in the pre-deep-learning x-risk frame.",
  },
  "rob-miles": {
    vintage: "deep-learning",
    vintageNote:
      "Computerphile AI safety videos from 2017. Educational career is deep-learning era; frames safety for that audience.",
  },
  "liron-shapira": {
    vintage: "scaling-era",
    vintageNote:
      "Pre-2022 was startup founder. Doom Debates podcast 2024. His public AI voice is scaling-era → post-ChatGPT.",
  },
  "jeffrey-ladish": {
    vintage: "scaling-era",
    vintageNote:
      "Anthropic security 2021–2023, Palisade Research 2023. Career maps to scaling-era safety operationalisation.",
  },
  "eli-lifland": {
    vintage: "post-chatgpt",
    vintageNote:
      "AI Futures Project; AI 2027 co-author 2025. His load-bearing AI work is post-ChatGPT forecasting.",
  },
  "meredith-whittaker": {
    vintage: "deep-learning",
    vintageNote:
      "AI Now Institute co-founded 2017. Google walkout 2018. Career is deep-learning era critical-AI politics.",
  },
  "kate-crawford": {
    vintage: "deep-learning",
    vintageNote:
      "AI Now 2017, Atlas of AI 2021. Her critical-AI scholarship is a deep-learning era response.",
  },
  "guillaume-verdon": {
    vintage: "post-chatgpt",
    vintageNote:
      "BasedBeffJezos / Extropic / e/acc movement breaks into public 2023. His public voice is post-ChatGPT.",
  },
  "emmett-shear": {
    vintage: "post-chatgpt",
    vintageNote:
      "Twitch was pre-AI. AI engagement through November 2023 OpenAI episode and Softmax (2024). Post-ChatGPT entrant.",
  },
  "emad-mostaque": {
    vintage: "scaling-era",
    vintageNote:
      "Stability AI founded 2020. His AI public voice is scaling-era image-model open-weights.",
  },
  "reid-hoffman": {
    vintage: "scaling-era",
    vintageNote:
      "Inflection AI co-founded 2022 with Suleyman. Pre-ChatGPT but post-GPT-3 entry into AI as a builder/funder.",
  },
  "nate-silver": {
    vintage: "post-chatgpt",
    vintageNote:
      "Forecasting career predates AI focus. On the Edge (2024) is his post-ChatGPT entry into the AI conversation.",
  },
  "bryan-caplan": {
    vintage: "post-chatgpt",
    vintageNote:
      "Economist long before. AI engagement via blog posts and Don't Be a Feminist (unrelated) — AI focus is post-ChatGPT.",
  },
  "liv-boeree": {
    vintage: "post-chatgpt",
    vintageNote:
      "Win-Win podcast and AI commentary 2023+. Pre-ChatGPT was poker/effective altruism general.",
  },
  "stuart-ritchie": {
    vintage: "post-chatgpt",
    vintageNote:
      "Science Fictions 2020 was about replication. AI commentary post-ChatGPT through Substack.",
  },
  "jeff-sebo": {
    vintage: "scaling-era",
    vintageNote:
      "Animal/AI moral status work from ~2018. Taking AI Welfare Seriously (2024) crystallises his scaling-era frame.",
  },
  "daniel-dewey": {
    vintage: "pre-deep-learning",
    vintageNote:
      "FHI safety researcher from late 2000s. Open Phil. His value-learning frame predates deep learning.",
  },
  "scott-aaronson": {
    vintage: "pre-deep-learning",
    vintageNote:
      "MIT PhD 2004. Quantum-complexity foundational work spans 2000s. AI engagement on top of pre-deep-learning theoretical foundations.",
  },

  // Pioneers (pre-1980).
  "alan-turing": {
    vintage: "pioneer",
    vintageNote:
      "1912–1954. Turing test 1950. Defines the pre-1980 foundation of AI thinking.",
  },
  "claude-shannon": {
    vintage: "pioneer",
    vintageNote:
      "1916–2001. Information theory 1948; chess machines 1950. Cybernetics-era frame.",
  },
  "norbert-wiener": {
    vintage: "pioneer",
    vintageNote:
      "1894–1964. Cybernetics 1948. God and Golem 1964 anticipates alignment.",
  },
  "john-von-neumann": {
    vintage: "pioneer",
    vintageNote:
      "1903–1957. Computing architecture, game theory, automata. The frame predates AI as a discipline.",
  },
  "marvin-minsky": {
    vintage: "pioneer",
    vintageNote:
      "1927–2016. MIT AI Lab co-founded 1959. Society of Mind 1986. His operational era is symbolic AI; foundational pioneer of the field.",
  },
  "john-mccarthy": {
    vintage: "pioneer",
    vintageNote:
      "1927–2011. Coined 'AI' 1956 Dartmouth. Lisp 1958. Field-naming pioneer.",
  },
  "doug-lenat": {
    vintage: "pioneer",
    vintageNote:
      "1950–2023. Cyc began 1984 building on 1970s symbolic AI. His frame is pre-deep-learning symbolic.",
  },
  "joseph-weizenbaum": {
    vintage: "pioneer",
    vintageNote:
      "1923–2008. ELIZA 1966; Computer Power and Human Reason 1976. Cybernetics-era critic of AI.",
  },
  "douglas-engelbart": {
    vintage: "pioneer",
    vintageNote:
      "1925–2013. Mother of All Demos 1968. Augmentation-of-intelligence frame predates AI as we now use the term.",
  },
  "donald-knuth": {
    vintage: "pioneer",
    vintageNote:
      "TAOCP from 1968. Turing Award 1974. His algorithms-and-craft frame is pre-AI-discipline.",
  },
  "alan-kay": {
    vintage: "pioneer",
    vintageNote:
      "Smalltalk and Dynabook concepts late-1960s/1970s. Personal-computing-as-augmentation frame predates the deep-learning AI conversation.",
  },
  "vannevar-bush": {
    vintage: "pioneer",
    vintageNote:
      "1890–1974. As We May Think 1945. Pre-AI computing-as-cognition frame.",
  },
  "samuel-butler": {
    vintage: "pioneer",
    vintageNote:
      "1835–1902. Erewhon 1872 anticipates machine consciousness — the earliest entry in this corpus.",
  },
  "irving-good": {
    vintage: "pioneer",
    vintageNote:
      "1916–2009. 'Speculations Concerning the First Ultraintelligent Machine' 1965. Coined intelligence-explosion framing.",
  },
  "j-c-r-licklider": {
    vintage: "pioneer",
    vintageNote:
      "1915–1990. Man-Computer Symbiosis 1960; ARPA IPTO. Foundational human-AI cooperation framing.",
  },
  "ada-lovelace": {
    vintage: "pioneer",
    vintageNote:
      "1815–1852. Notes on the Analytical Engine 1843. The earliest figure in this corpus to think computationally about machines and intelligence.",
  },

  // Symbolic-era / pre-deep-learning (1980 – 2012).
  "judea-pearl": {
    vintage: "symbolic-era",
    vintageNote:
      "PhD 1965 (Polytechnic). Causality and Bayesian-network work spans 1980s-2000s. Turing Award 2011. His causality frame is pre-deep-learning.",
  },
  "richard-sutton": {
    vintage: "symbolic-era",
    vintageNote:
      "PhD 1984 (UMass). Sutton & Barto RL textbook 1998. The Bitter Lesson 2019. His RL frame predates the deep-learning rise.",
  },
  "andrew-barto": {
    vintage: "symbolic-era",
    vintageNote:
      "RL textbook with Sutton 1998; UMass through 2010s. Career anchored in pre-deep-learning RL.",
  },
  "ben-goertzel": {
    vintage: "symbolic-era",
    vintageNote:
      "OpenCog founded 2008; coined modern AGI usage early 2000s. Symbolic-era AGI advocate.",
  },
  "rodney-brooks": {
    vintage: "symbolic-era",
    vintageNote:
      "Subsumption 1986. iRobot 1990. Robotics-first AI frame matures pre-deep-learning.",
  },
  "ray-kurzweil": {
    vintage: "symbolic-era",
    vintageNote:
      "Age of Spiritual Machines 1999; Singularity Is Near 2005. Optical-character-recognition career roots in 1970s; futurist frame established pre-deep-learning.",
  },
  "noam-chomsky": {
    vintage: "symbolic-era",
    vintageNote:
      "Generative grammar from 1957. His AI commentary inherits a symbolic-era cognitive-science frame and remains skeptical of statistical methods.",
  },
  "robin-hanson": {
    vintage: "pre-deep-learning",
    vintageNote:
      "PhD 1997 (Caltech). Overcoming Bias from 2006. Age of Em 2016 builds on pre-deep-learning frame.",
  },
  "vernor-vinge": {
    vintage: "symbolic-era",
    vintageNote:
      "1944–2024. Singularity essay 1993. Pre-deep-learning singularity frame.",
  },
  "tim-berners-lee": {
    vintage: "symbolic-era",
    vintageNote:
      "WWW 1989. Solid project 2016. His AI engagement inherits a pre-deep-learning information-architecture frame.",
  },
  "stephen-wolfram": {
    vintage: "symbolic-era",
    vintageNote:
      "Mathematica 1988; A New Kind of Science 2002. His computational-equivalence frame is pre-deep-learning.",
  },
  "peter-singer": {
    vintage: "symbolic-era",
    vintageNote:
      "Animal Liberation 1975 founds the philosophical lineage that flows into EA and AI welfare. AI engagement post-2010s inherits pre-deep-learning ethics frame.",
  },
  "douglas-hofstadter": {
    vintage: "symbolic-era",
    vintageNote:
      "GEB 1979. AI and cognition framing is pre-deep-learning; he engages modern systems through that prior.",
  },
  "stephen-hawking": {
    vintage: "pre-deep-learning",
    vintageNote:
      "1942–2018. AI commentary mostly 2014-2017 (FLI letter). His AI voice forms in the pre-deep-learning x-risk wave.",
  },
  "jaron-lanier": {
    vintage: "symbolic-era",
    vintageNote:
      "VR work from 1980s. Cultural critique of computing across 1990s-2000s. His AI commentary inherits a pre-deep-learning frame.",
  },
  "stewart-brand": {
    vintage: "symbolic-era",
    vintageNote:
      "Whole Earth Catalog 1968. Long Now from 1996. Long-horizon thinking established before deep learning.",
  },
  "kevin-kelly": {
    vintage: "symbolic-era",
    vintageNote:
      "Wired 1993. The Inevitable 2016. His tech-futurism frame is pre-deep-learning.",
  },

  // Deep-learning rise (2012 – 2017).
  "ian-goodfellow": {
    vintage: "deep-learning",
    vintageNote:
      "GAN 2014. Deep Learning textbook 2016. His career anchors in the deep-learning era.",
  },
  "peter-norvig": {
    vintage: "symbolic-era",
    vintageNote:
      "Russell & Norvig textbook 1995. Google research director 2001-2014. Career bridges symbolic AI to early deep learning.",
  },
  "francois-chollet": {
    vintage: "deep-learning",
    vintageNote:
      "Keras 2015. ARC-AGI benchmark 2019. His career and frame are deep-learning era.",
  },
  "melanie-mitchell": {
    vintage: "symbolic-era",
    vintageNote:
      "Analogy-and-cognition work spans 1990s-present. AI: A Guide for Thinking Humans 2019 critiques deep learning from a symbolic-era prior.",
  },
  "joy-buolamwini": {
    vintage: "deep-learning",
    vintageNote:
      "Gender Shades 2018. Algorithmic Justice League. Career formed during the deep-learning era critique.",
  },
  "yejin-choi": {
    vintage: "deep-learning",
    vintageNote:
      "PhD 2010; UW from 2014. NLP commonsense work matures in the deep-learning era.",
  },
  "anca-dragan": {
    vintage: "deep-learning",
    vintageNote:
      "PhD 2015 (CMU). Berkeley 2015+. Google DeepMind safety lead 2024. Career is deep-learning era.",
  },
  "sebastian-thrun": {
    vintage: "deep-learning",
    vintageNote:
      "Stanford robotics; Google X self-driving 2009. Udacity 2012. Career maps to early deep-learning era.",
  },
  "oren-etzioni": {
    vintage: "deep-learning",
    vintageNote:
      "AI2 founding CEO 2014. Career bridges symbolic-era PhD to deep-learning era leadership.",
  },
  "eric-horvitz": {
    vintage: "deep-learning",
    vintageNote:
      "Microsoft Research from 1993; Chief Scientific Officer 2017. Career bridges into deep-learning era operationally.",
  },
  "iyad-rahwan": {
    vintage: "deep-learning",
    vintageNote:
      "Moral Machine 2014. Max Planck CHM. Computational social science of AI ethics in the deep-learning era.",
  },
  "thomas-dietterich": {
    vintage: "symbolic-era",
    vintageNote:
      "Oregon State from 1985. Long ML career predates deep learning. AAAI president; recognised across both eras.",
  },
  "shoshana-zuboff": {
    vintage: "deep-learning",
    vintageNote:
      "Surveillance Capitalism 2019 — a deep-learning era critique built on a longer Harvard-Business career.",
  },

  // Scaling era (2018 – 2022).
  "kai-fu-lee": {
    vintage: "deep-learning",
    vintageNote:
      "AI Superpowers 2018. PhD in AI from 1980s but operates as VC/CEO in the deep-learning era.",
  },
  "allan-dafoe": {
    vintage: "scaling-era",
    vintageNote:
      "GovAI founded 2018. Now DeepMind frontier safety/governance. Career anchored in scaling-era AI policy.",
  },
  "jade-leung": {
    vintage: "scaling-era",
    vintageNote:
      "OpenAI head of governance ~2020-2023. Now UK AI Safety Institute Chief Scientist. Career formed during scaling era.",
  },
  "beth-barnes": {
    vintage: "scaling-era",
    vintageNote:
      "Earlier OpenAI alignment ~2020. Founded METR 2022. Career maps to the scaling-era evals push.",
  },
  "tamay-besiroglu": {
    vintage: "scaling-era",
    vintageNote:
      "Co-founded Epoch AI 2022. Empirical scaling-laws work is a scaling-era research programme.",
  },
  "jaime-sevilla": {
    vintage: "scaling-era",
    vintageNote:
      "Director of Epoch AI from 2022. Compute-and-trends work crystallises in scaling era.",
  },
  "anthony-aguirre": {
    vintage: "pre-deep-learning",
    vintageNote:
      "FLI co-founded 2014. Metaculus 2015. His x-risk forecasting frame predates deep-learning era.",
  },
  "joseph-carlsmith": {
    vintage: "scaling-era",
    vintageNote:
      "Senior researcher at Open Philanthropy from late 2010s. Long essays on AI takeover and decision theory matured in scaling era.",
  },
  "andrew-critch": {
    vintage: "pre-deep-learning",
    vintageNote:
      "MIRI/CHAI from early 2010s. Multi-agent safety frame predates deep-learning.",
  },
  "william-saunders": {
    vintage: "scaling-era",
    vintageNote:
      "OpenAI Superalignment researcher in scaling era. Resigned 2024 with public concerns.",
  },
  "suchir-balaji": {
    vintage: "scaling-era",
    vintageNote:
      "Joined OpenAI 2018. Career spans scaling era through 2024.",
  },
  "gwern-branwen": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Independent essayist from 2010+. Wide LessWrong corpus established his analytic frame pre-deep-learning.",
  },
  "wei-dai": {
    vintage: "pre-deep-learning",
    vintageNote:
      "b-money 1998. LessWrong decision-theory posts from late 2000s. Frame predates deep learning.",
  },
  "dawn-song": {
    vintage: "deep-learning",
    vintageNote:
      "Berkeley professor; AI security research deepens in the deep-learning era.",
  },
  "david-silver": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind from 2010. AlphaGo 2016, AlphaZero 2017. Career is the deep-learning era.",
  },
  "huw-price": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Co-founded Cambridge CSER ~2012 with Rees and Tallinn. Pre-deep-learning x-risk frame.",
  },
  "martin-rees": {
    vintage: "pre-deep-learning",
    vintageNote:
      "CSER co-founded ~2012. Astronomer Royal long before. Pre-deep-learning x-risk frame.",
  },
  "patrick-collison": {
    vintage: "deep-learning",
    vintageNote:
      "Stripe 2010. Engages AI/science-of-progress through scaling era reading list. Career frame is post-2010 tech founder.",
  },

  // Post-ChatGPT (2023+).
  "ezra-klein": {
    vintage: "post-chatgpt",
    vintageNote:
      "NYT podcast/columns turn AI-heavy 2023+. Pre-ChatGPT was politics and journalism.",
  },
  "kara-swisher": {
    vintage: "post-chatgpt",
    vintageNote:
      "Tech-press veteran but AI-as-beat intensifies post-ChatGPT.",
  },
  "ev-williams": {
    vintage: "post-chatgpt",
    vintageNote:
      "Twitter/Medium era pre-AI. AI commentary post-ChatGPT.",
  },
  "tyler-cowen": {
    vintage: "post-chatgpt",
    vintageNote:
      "Marginal Revolution from 2003. AI as a primary topic intensifies post-ChatGPT.",
  },
  "naomi-klein": {
    vintage: "post-chatgpt",
    vintageNote:
      "AI critique essays 2023+. Pre-ChatGPT focused on capitalism and climate.",
  },
  "cory-doctorow": {
    vintage: "post-chatgpt",
    vintageNote:
      "Enshittification framing 2023. AI essays at Pluralistic intensify post-ChatGPT.",
  },
  "maria-ressa": {
    vintage: "post-chatgpt",
    vintageNote:
      "Information-integrity frame from 2010s; AI specifically post-ChatGPT.",
  },
  "steven-pinker": {
    vintage: "post-chatgpt",
    vintageNote:
      "Cognitive-science career predates AI focus. Active AI commentary intensifies post-ChatGPT.",
  },
  "sundar-pichai": {
    vintage: "deep-learning",
    vintageNote:
      "Google CEO 2015; Alphabet CEO 2019. Operationally embedded in deep-learning era.",
  },
  "satya-nadella": {
    vintage: "deep-learning",
    vintageNote:
      "Microsoft CEO 2014. OpenAI partnership 2019. Deep-learning era CEO frame.",
  },
  "mark-zuckerberg": {
    vintage: "deep-learning",
    vintageNote:
      "Meta-AI work from FAIR 2013+. Llama strategy 2023+ is the post-ChatGPT pivot but the frame is deep-learning era.",
  },
  "jeff-bezos": {
    vintage: "post-chatgpt",
    vintageNote:
      "Long pre-AI career. AI investor (Anthropic) and commentator post-ChatGPT.",
  },
  "eric-schmidt": {
    vintage: "deep-learning",
    vintageNote:
      "Google CEO 2001-2011. NSCAI co-chair 2018. Deep-learning era policy frame.",
  },
  "peter-thiel": {
    vintage: "post-chatgpt",
    vintageNote:
      "Long investor career; AI ideological commentary post-ChatGPT.",
  },
  "ursula-von-der-leyen": {
    vintage: "post-chatgpt",
    vintageNote:
      "EU Commission president 2019+. AI Act drafted pre-ChatGPT but driven through post-ChatGPT.",
  },
  "joe-biden": {
    vintage: "post-chatgpt",
    vintageNote:
      "AI Executive Order October 2023. Head-of-state AI engagement entirely post-ChatGPT.",
  },
  "donald-trump": {
    vintage: "post-chatgpt",
    vintageNote:
      "Stargate 2025. Rescinded Biden EO. AI policy presence is post-ChatGPT.",
  },
  "kamala-harris": {
    vintage: "post-chatgpt",
    vintageNote:
      "Led Biden-era AI summits 2023-2024. AI engagement post-ChatGPT.",
  },
  "jd-vance": {
    vintage: "post-chatgpt",
    vintageNote:
      "Paris AI Action Summit February 2025. Entirely post-ChatGPT AI frame.",
  },
  "ted-chiang": {
    vintage: "post-chatgpt",
    vintageNote:
      "Lifecycle of Software Objects 2010 was prescient SF; widely-cited AI essays come post-ChatGPT.",
  },
  "jensen-huang": {
    vintage: "deep-learning",
    vintageNote:
      "NVIDIA from 1993; AI-relevant compute push from 2012 (CUDA + AlexNet). Operational era is deep learning.",
  },
  "ben-thompson": {
    vintage: "deep-learning",
    vintageNote:
      "Stratechery 2013. AI strategic-analysis frame from the deep-learning era.",
  },
  "lex-fridman": {
    vintage: "deep-learning",
    vintageNote:
      "Podcast launched 2018; AI-heavy interview frame matures in scaling era. Deep-learning era entrant.",
  },
  "dwarkesh-patel": {
    vintage: "scaling-era",
    vintageNote:
      "Podcast started 2020. Long-form AI interviews crystallise in scaling era.",
  },
  "joscha-bach": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Cognitive-architecture work spans 2000s-present. Frame predates deep learning.",
  },
  "kate-darling": {
    vintage: "deep-learning",
    vintageNote:
      "MIT Media Lab from late 2000s. Robot-ethics work in deep-learning era.",
  },
  "robert-wright": {
    vintage: "symbolic-era",
    vintageNote:
      "Nonzero 2000. Bloggingheads 2005. AI-and-cooperation frame predates deep learning.",
  },
  "mackenzie-scott": {
    vintage: "post-chatgpt",
    vintageNote:
      "Yield Giving 2022. AI-related giving post-ChatGPT.",
  },
  "luciano-floridi": {
    vintage: "pre-deep-learning",
    vintageNote:
      "Information-philosophy frame established 2000s. AI ethics books span 2010s.",
  },
  "frank-pasquale": {
    vintage: "deep-learning",
    vintageNote:
      "Black Box Society 2015. AI accountability and algorithmic regulation in deep-learning era.",
  },
  "evgeny-morozov": {
    vintage: "pre-deep-learning",
    vintageNote:
      "The Net Delusion 2011. Solutionism critique predates deep learning.",
  },
  "mireille-hildebrandt": {
    vintage: "deep-learning",
    vintageNote:
      "AI law work matures in deep-learning era; EU AI Act inputs post-2018.",
  },
  "jen-easterly": {
    vintage: "post-chatgpt",
    vintageNote:
      "CISA director 2021-2025. AI-as-critical-infrastructure framing post-ChatGPT.",
  },
  "stuart-buck": {
    vintage: "scaling-era",
    vintageNote:
      "Good Science Project 2022. Metascience-and-AI funding frame is scaling-era.",
  },
  "brian-christian": {
    vintage: "scaling-era",
    vintageNote:
      "Algorithms to Live By 2016 with Tom Griffiths; The Alignment Problem 2020. Career frame is scaling era.",
  },

  // Tech founders, late commentary.
  "larry-page": {
    vintage: "deep-learning",
    vintageNote:
      "Funded DeepMind 2014. Deep-learning era posture toward AI.",
  },
  "sergey-brin": {
    vintage: "deep-learning",
    vintageNote:
      "Returned to Google for Gemini 2024. Deep-learning era technical re-engagement.",
  },
  "larry-ellison": {
    vintage: "post-chatgpt",
    vintageNote:
      "Stargate JV 2025; surveillance-AI framing in post-ChatGPT period.",
  },
  "tim-oreilly": {
    vintage: "deep-learning",
    vintageNote:
      "AI-publishing through deep-learning era.",
  },

  // Late additions.
  "christopher-manning": {
    vintage: "symbolic-era",
    vintageNote:
      "Stanford NLP from 1999. Career bridges symbolic to deep-learning era NLP.",
  },
  "michael-jordan": {
    vintage: "symbolic-era",
    vintageNote:
      "Berkeley from 1998. Foundational ML statistician; pre-deep-learning frame.",
  },
  "rachel-thomas": {
    vintage: "deep-learning",
    vintageNote:
      "fast.ai co-founded 2016. Career maps to deep-learning era democratisation.",
  },
  "shakir-mohamed": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind from 2013. Career is the deep-learning era.",
  },
  "stella-biderman": {
    vintage: "scaling-era",
    vintageNote:
      "EleutherAI 2020. Open-replication of frontier models is a scaling-era research practice.",
  },
  "victoria-krakovna": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind safety from 2017. FLI earlier. Career bridges pre-deep-learning x-risk into deep-learning era safety.",
  },
  "tom-davidson": {
    vintage: "scaling-era",
    vintageNote:
      "Open Phil takeoff timelines from 2021. Scaling-era forecaster.",
  },
  "rob-bensinger": {
    vintage: "pre-deep-learning",
    vintageNote:
      "MIRI from early 2010s. Communications director through the era; carries the pre-deep-learning rationalist frame.",
  },
  "ryan-greenblatt": {
    vintage: "scaling-era",
    vintageNote:
      "Redwood Research from ~2021. AI control work in scaling era.",
  },
  "owain-evans": {
    vintage: "scaling-era",
    vintageNote:
      "FHI/Apollo Research alignment work from late 2010s; out-of-context reasoning research in scaling era.",
  },
  "yi-tay": {
    vintage: "scaling-era",
    vintageNote:
      "Google Brain from 2019; Reka co-founder 2023. Career is scaling era LLM scaling.",
  },
  "lila-ibrahim": {
    vintage: "deep-learning",
    vintageNote:
      "DeepMind COO from 2018. Operational role spans deep-learning into scaling.",
  },
};
