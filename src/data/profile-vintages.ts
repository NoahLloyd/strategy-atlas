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
  "yudkowsky-eliezer": {
    // Defensive duplicate in case alternate id is used.
    vintage: "symbolic-era",
    vintageNote:
      "See eliezer-yudkowsky.",
  },
};
