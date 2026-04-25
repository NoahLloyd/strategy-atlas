import type { Profile } from "@/lib/people-types";

// Hand-classified profiles. Each entry is justified by concrete evidence —
// publications, roles, public reach. Do not generate from a single proxy
// (followers, citations alone). Add new entries as research catches up.
//
// Tiers are defined in src/data/profile-tiers.ts. Re-read the criteria
// before assigning a tier — same tier should mean the same thing across
// every person.

export const profileOverrides: Record<string, Profile> = {
  "geoffrey-hinton": {
    expertise: "deep-technical",
    expertiseNote:
      "Co-invented backpropagation (1986), AlexNet (2012), capsule networks. Turing Award 2018, Nobel Prize in Physics 2024 for foundational neural-network work. No longer hands-on at a frontier lab but the technical foundation of much of modern ML traces to him.",
    recognition: "household-name",
    recognitionNote:
      "Routinely covered by mainstream press as 'godfather of AI'. Nobel announcement made global news. Wikipedia entries in 60+ languages.",
  },
  "yoshua-bengio": {
    expertise: "deep-technical",
    expertiseNote:
      "Turing Award 2018 with Hinton and LeCun. Most-cited computer scientist in 2022. Co-author of foundational deep-learning textbook. Now leads International AI Safety Report and runs Mila.",
    recognition: "household-name",
    recognitionNote:
      "Public face of the AI safety mainstream. Repeated NYT, FT, BBC coverage. Convened by UN Secretary-General; commissioned to lead the International AI Safety Report.",
  },
  "stuart-russell": {
    expertise: "deep-technical",
    expertiseNote:
      "Co-author of the standard AI textbook 'Artificial Intelligence: A Modern Approach' (used by 1500+ universities). UC Berkeley professor. Decades of AI research; founded the Center for Human-Compatible AI.",
    recognition: "household-name",
    recognitionNote:
      "Human Compatible (2019) was a New York Times notable book. Frequent congressional testimony, BBC Reith Lectures 2021.",
  },
  "yann-lecun": {
    expertise: "frontier-builder",
    expertiseNote:
      "Chief AI Scientist at Meta. Turing Award 2018. Hands-on lead of FAIR's open-weight Llama line; convolutional networks (LeNet) and many of today's architectural primitives are his.",
    recognition: "household-name",
    recognitionNote:
      "Most-followed AI researcher on social media. Frequent press, op-eds, congressional and EU testimony.",
  },
  "demis-hassabis": {
    expertise: "frontier-builder",
    expertiseNote:
      "Co-founder and CEO of DeepMind, now Google DeepMind. Direct technical involvement in AlphaGo, AlphaFold, and the Gemini line. Nobel Prize in Chemistry 2024 (with John Jumper) for AlphaFold.",
    recognition: "household-name",
    recognitionNote:
      "AlphaFold and AlphaGo got mainstream global coverage. Nobel announcement made him household-known beyond CS.",
  },
  "dario-amodei": {
    expertise: "frontier-builder",
    expertiseNote:
      "Co-founder and CEO of Anthropic; co-author of GPT-3. Personally involved in scaling-laws research and Anthropic's RSP and interpretability programs.",
    recognition: "household-name",
    recognitionNote:
      "TIME100 2024. Covered by mainstream press. 'Machines of Loving Grace' essay (2024) reached far past the AI community.",
  },
  "sam-altman": {
    expertise: "policy-meta",
    expertiseNote:
      "CEO of OpenAI. Not a research scientist — sets strategy, capital, and policy direction. Deep operational knowledge of frontier deployment and lab incentives.",
    recognition: "household-name",
    recognitionNote:
      "Defining public-face figure of the AI era. Covered globally; testifying to US Senate; Saudi sovereign-fund and trillion-dollar capital negotiations.",
  },
  "ilya-sutskever": {
    expertise: "frontier-builder",
    expertiseNote:
      "Co-author of AlexNet (2012). Co-founder and former Chief Scientist of OpenAI; co-led the Superalignment team. Co-founded Safe Superintelligence Inc. (2024). Hands-on technical lead on most major OpenAI training runs through GPT-4.",
    recognition: "household-name",
    recognitionNote:
      "Featured by NYT, The Atlantic, podcasts. Central character in the November 2023 OpenAI board episode — name-recognised beyond the field.",
  },
  "eliezer-yudkowsky": {
    expertise: "deep-technical",
    expertiseNote:
      "Founded MIRI; originated much of agent-foundations alignment vocabulary (orthogonality, instrumental convergence, mesa-optimisation framing). Sequences and HPMOR are widely-read foundational texts in the rationalist/safety community. Not a frontier ML researcher but technically deep on alignment theory.",
    recognition: "household-name",
    recognitionNote:
      "TIME magazine cover essay (March 2023) calling for an indefinite pause. 60 Minutes, NYT profiles. Name recognised broadly past the AI community.",
  },
  "nick-bostrom": {
    expertise: "policy-meta",
    expertiseNote:
      "Founded Oxford's Future of Humanity Institute. 'Superintelligence' (2014) is the foundational existential-risk text. Philosopher; not a technical researcher.",
    recognition: "household-name",
    recognitionNote:
      "Superintelligence was a NYT bestseller endorsed by Musk and Gates. Wikipedia entries in 30+ languages.",
  },
  "toby-ord": {
    expertise: "policy-meta",
    expertiseNote:
      "Senior research fellow, Oxford. 'The Precipice' (2020) shaped existential-risk discourse and forecasting frames. Philosopher; co-founded Giving What We Can. Not a technical AI researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Cited heavily in safety and EA circles. The Precipice was a Sunday Times bestseller. Less name-recognition outside that community.",
  },
  "max-tegmark": {
    expertise: "external-domain",
    expertiseNote:
      "MIT physicist. President of Future of Life Institute. Strong technical fluency but his AI publications are policy and broad strokes, not core ML research.",
    recognition: "household-name",
    recognitionNote:
      "Authored 'Life 3.0' (NYT bestseller). Drove the March 2023 Pause AI letter signed by 30k+ people. Mainstream press regular.",
  },
  "connor-leahy": {
    expertise: "deep-technical",
    expertiseNote:
      "CEO of Conjecture; co-founded EleutherAI which trained GPT-Neo and Pythia. Hands-on ML background. Conjecture publishes alignment papers and the Compendium policy document.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring figure in AI-safety podcasts and policy circles. Recognised broadly inside the field; less so to the general public.",
  },
  "paul-christiano": {
    expertise: "frontier-builder",
    expertiseNote:
      "Invented RLHF (the technique behind ChatGPT instruct-tuning). Founded Alignment Research Center. Now heads safety at the US AI Safety Institute (NIST).",
    recognition: "field-leading",
    recognitionNote:
      "Universal name in AI safety research. NIST appointment got policy-press coverage. Not a household name.",
  },
  "jan-leike": {
    expertise: "frontier-builder",
    expertiseNote:
      "Former co-lead of OpenAI's Superalignment team; now head of alignment at Anthropic. Long publication record in scalable oversight, debate, recursive reward modelling.",
    recognition: "field-leading",
    recognitionNote:
      "Public resignation from OpenAI in May 2024 was widely covered. Known across the field; not a household name.",
  },
  "john-schulman": {
    expertise: "frontier-builder",
    expertiseNote:
      "Co-founder of OpenAI. Invented PPO (now standard RL algorithm). Led RLHF team that built ChatGPT post-training. Joined Anthropic 2024, then Thinking Machines Lab as chief scientist 2025.",
    recognition: "field-leading",
    recognitionNote:
      "Prominent inside ML; less press coverage outside it. Lab moves were tracked by The Information and Bloomberg.",
  },
  "shane-legg": {
    expertise: "frontier-builder",
    expertiseNote:
      "Co-founder of DeepMind. Chief AGI Scientist. Coined 'AGI' in current usage with Marcus Hutter (2007). Hands-on technical leader at Google DeepMind.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring podcast guest, recognised in the field, but lower public profile than Hassabis.",
  },
  "chris-olah": {
    expertise: "frontier-builder",
    expertiseNote:
      "Founded mechanistic interpretability as a subfield (Distill papers, circuits thread). Anthropic interpretability team lead. Hands-on technical work on frontier model internals.",
    recognition: "field-leading",
    recognitionNote:
      "The reference name in interpretability. Less public profile than CEOs or executives.",
  },
  "neel-nanda": {
    expertise: "deep-technical",
    expertiseNote:
      "Leads mechanistic-interpretability work at Google DeepMind. TransformerLens library author; large public corpus of interpretability tutorials and papers.",
    recognition: "established",
    recognitionNote:
      "Recognised name in interpretability circles; less prominent than Olah or Anthropic leadership.",
  },
  "mustafa-suleyman": {
    expertise: "frontier-builder",
    expertiseNote:
      "Co-founder DeepMind; co-founder Inflection AI; CEO of Microsoft AI from 2024. Operational/policy lead more than research lead, but deeply embedded in frontier-lab decisions.",
    recognition: "household-name",
    recognitionNote:
      "TIME100; 'The Coming Wave' (2023) NYT bestseller. Mainstream press on the Microsoft move.",
  },
  "andrew-ng": {
    expertise: "deep-technical",
    expertiseNote:
      "Co-founded Google Brain; co-founded Coursera; founded Landing AI and DeepLearning.AI. Authored seminal deep-learning courses that taught much of the field. Less hands-on at frontier scale today.",
    recognition: "household-name",
    recognitionNote:
      "Coursera ML course taught millions. Mainstream press regular. TIME100 alumnus.",
  },
  "fei-fei-li": {
    expertise: "deep-technical",
    expertiseNote:
      "Created ImageNet — the dataset that catalysed the deep-learning revolution. Stanford professor, co-director Stanford HAI. Memoir 'The Worlds I See'.",
    recognition: "household-name",
    recognitionNote:
      "Repeated TED talks, congressional testimony, mainstream press. Memoir was a NYT bestseller.",
  },
  "dan-hendrycks": {
    expertise: "deep-technical",
    expertiseNote:
      "Director of Center for AI Safety. Co-author of MMLU, GLUE robustness benchmarks, GELU activation. Safety advisor at xAI. Active publisher in technical safety.",
    recognition: "field-leading",
    recognitionNote:
      "Drove the May 2023 'mitigate extinction risk' open letter signed by Hinton, Bengio, Altman, Hassabis. Recognised within the field.",
  },
  "roman-yampolskiy": {
    expertise: "deep-technical",
    expertiseNote:
      "University of Louisville professor. Author of 'AI: Unexplainable, Unpredictable, Uncontrollable' (2024). Long publication record on AI safety, but more theoretical than applied to current frontier systems.",
    recognition: "field-leading",
    recognitionNote:
      "Frequent podcast guest including Lex Fridman; recognised in safety circles. Less public visibility than the Bostrom/Yudkowsky tier.",
  },
  "yuval-noah-harari": {
    expertise: "external-domain",
    expertiseNote:
      "Historian (Hebrew University of Jerusalem). 'Sapiens', 'Homo Deus', 'Nexus' frame AI for general readers from a historical-civilisational vantage. Not a technical AI expert.",
    recognition: "household-name",
    recognitionNote:
      "Books in 65+ languages, 45M+ copies sold. Davos, Obama, BBC fixture.",
  },
  "vitalik-buterin": {
    expertise: "deep-technical",
    expertiseNote:
      "Inventor of Ethereum. Cryptography and mechanism-design depth. AI engagement is via 'd/acc' framing — substantive but adjacent to ML proper.",
    recognition: "household-name",
    recognitionNote:
      "Defining public figure of crypto. Repeated mainstream press. Wikipedia in 70+ languages.",
  },
  "elon-musk": {
    expertise: "commentator",
    expertiseNote:
      "Founded xAI (2023). Earlier OpenAI co-founder and major funder. Operates AI as a CEO, not a researcher; technical claims are filtered through teams. Controls Grok deployment via X.",
    recognition: "household-name",
    recognitionNote:
      "Most-followed individual on X. Routinely the highest-traffic AI commentary by reach. Wealth and political profile add to AI prominence.",
  },
  "marc-andreessen": {
    expertise: "commentator",
    expertiseNote:
      "Co-founder Andreessen Horowitz. 'Techno-Optimist Manifesto' (2023) is policy-and-vibes, not technical. Funded ML startups but does not write code or papers on AI.",
    recognition: "household-name",
    recognitionNote:
      "Defining VC of his era. Mainstream press regular. Manifesto generated wide coverage.",
  },
  "tristan-harris": {
    expertise: "policy-meta",
    expertiseNote:
      "Co-founder Center for Humane Technology. Background as Google design ethicist. AI Dilemma (2023) talk shaped public discourse but is not technical research.",
    recognition: "household-name",
    recognitionNote:
      "Featured in The Social Dilemma (Netflix). Congressional testimony. Mainstream coverage.",
  },
  "aza-raskin": {
    expertise: "policy-meta",
    expertiseNote:
      "Co-founder Center for Humane Technology with Harris. Earlier built Mozilla products. Communicates AI risk narratives; not a frontier technical contributor.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring co-presenter with Harris. Less individual public recognition.",
  },
  "holden-karnofsky": {
    expertise: "policy-meta",
    expertiseNote:
      "Co-founded GiveWell and Open Philanthropy. Drove much EA-aligned AI safety funding. Long-form 'Cold Takes' essays influential inside the field but he is not a technical researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Universal name within EA/safety; relatively low public profile.",
  },
  "helen-toner": {
    expertise: "policy-meta",
    expertiseNote:
      "Director of strategy at CSET (Georgetown). Former OpenAI board member. China-AI-policy expertise. Reads research; does not produce ML research.",
    recognition: "field-leading",
    recognitionNote:
      "Extensive press during November 2023 OpenAI board episode. Senate testimony. Recognised in policy circles, less to general public.",
  },
  "jaan-tallinn": {
    expertise: "policy-meta",
    expertiseNote:
      "Skype co-founder; major funder of FLI, FHI, MIRI, and others. Operates as funder and convener — not a technical researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring podcast guest. Recognised in the safety community. Less press visibility than the founders he funds.",
  },
  "jack-clark": {
    expertise: "policy-meta",
    expertiseNote:
      "Co-founder Anthropic; head of policy. Authored Anthropic's 'AI Index' report background work and Import AI newsletter. Reads research closely, does not produce it.",
    recognition: "field-leading",
    recognitionNote:
      "Key voice in US/UK AI policy circles. Cited by congressional aides and mainstream-tech press.",
  },
  "lina-khan": {
    expertise: "policy-meta",
    expertiseNote:
      "Former FTC Chair (2021–2025). Antitrust scholar. Drove FTC inquiries into AI partnerships and competition. Not a technical AI expert; antitrust expert applying frame to AI.",
    recognition: "household-name",
    recognitionNote:
      "Mainstream press fixture during FTC tenure. Wikipedia in 30+ languages. Defined a generation of competition-policy thinking.",
  },
  "timnit-gebru": {
    expertise: "deep-technical",
    expertiseNote:
      "Founded Distributed AI Research Institute. Co-author of 'Stochastic Parrots' (2021). Earlier co-led Google's Ethical AI team. Significant publication record on bias, dataset documentation.",
    recognition: "household-name",
    recognitionNote:
      "Dismissal from Google was global news. Featured in NYT, WIRED, The Atlantic.",
  },
  "emily-bender": {
    expertise: "deep-technical",
    expertiseNote:
      "University of Washington linguistics professor. Co-author of 'Stochastic Parrots'. The 'Bender Rule' is hers. Strong technical NLP background but argues against frontier-LLM framings.",
    recognition: "field-leading",
    recognitionNote:
      "Frequent press appearances, Mystery AI Hype Theater podcast. Less household-recognised than Gebru.",
  },
  "margaret-mitchell": {
    expertise: "deep-technical",
    expertiseNote:
      "Hugging Face chief ethics scientist. Co-author of 'Stochastic Parrots' and 'Model Cards'. Earlier co-led Google's Ethical AI team with Gebru.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised inside the AI ethics field. Less public profile than Gebru.",
  },
  "gary-marcus": {
    expertise: "deep-technical",
    expertiseNote:
      "NYU professor emeritus. Cognitive scientist; long publication record on neural-network limitations and neuro-symbolic AI. Founded Geometric Intelligence (acquired by Uber).",
    recognition: "household-name",
    recognitionNote:
      "Frequent NYT, FT op-eds. Senate testimony. 'Taming Silicon Valley' (2024) book.",
  },
  "mira-murati": {
    expertise: "frontier-builder",
    expertiseNote:
      "Former CTO of OpenAI; led ChatGPT, GPT-4, DALL·E, Sora launches. Founded Thinking Machines Lab (2025). Hands-on technical leader at frontier scale.",
    recognition: "household-name",
    recognitionNote:
      "TIME100 2024. Briefly OpenAI interim-CEO during November 2023 board episode. Mainstream press regular.",
  },
  "pope-francis": {
    expertise: "external-domain",
    expertiseNote:
      "Religious leader, not a technical AI expert. Engages AI through encyclicals (Antiqua et Nova, 2025) and the Rome Call for AI Ethics — civilisational and ethical framing.",
    recognition: "household-name",
    recognitionNote:
      "Global religious leader. Universal name recognition.",
  },
  "bill-gates": {
    expertise: "commentator",
    expertiseNote:
      "Microsoft co-founder; major Anthropic and OpenAI partner-period interlocutor. Funds AI deployment in health and agriculture via Gates Foundation. Not a current AI technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Among the most globally recognised individuals.",
  },
  "scott-alexander": {
    expertise: "commentator",
    expertiseNote:
      "Psychiatrist; writer of Astral Codex Ten (formerly Slate Star Codex). Significant influence on rationalist AI discourse but no formal AI training.",
    recognition: "field-leading",
    recognitionNote:
      "Vast readership within rationalist/AI circles; controversial NYT profile (2021); less mainstream-name recognition.",
  },
  "zvi-mowshowitz": {
    expertise: "commentator",
    expertiseNote:
      "Magic: The Gathering pro turned AI commentator. Weekly AI roundup is widely read in safety circles. No technical AI training.",
    recognition: "established",
    recognitionNote:
      "Recognised within rationalist/AI substack readership.",
  },
  "leopold-aschenbrenner": {
    expertise: "deep-technical",
    expertiseNote:
      "Former OpenAI Superalignment team. 'Situational Awareness' (June 2024) was the most-discussed AI forecast of the year. Now runs Situational Awareness LP investment fund.",
    recognition: "field-leading",
    recognitionNote:
      "Situational Awareness essay broke into mainstream tech and policy press. Recognised in AI/safety/policy circles.",
  },
  "daniel-kokotajlo": {
    expertise: "policy-meta",
    expertiseNote:
      "Former OpenAI policy/governance researcher. Forecasting work at AI Futures Project. Co-author of 'AI 2027' scenario (2025). No frontier ML research output.",
    recognition: "field-leading",
    recognitionNote:
      "OpenAI departure (2024) and AI 2027 piece got tech-press coverage. Recognised in safety/policy circles.",
  },
  "ajeya-cotra": {
    expertise: "policy-meta",
    expertiseNote:
      "Senior researcher at Open Philanthropy. Bio-anchors AI timelines report (2020) is foundational forecasting in the safety community. Forecaster; not a technical researcher.",
    recognition: "established",
    recognitionNote:
      "Highly cited inside safety circles. Less public profile.",
  },
  "richard-ngo": {
    expertise: "deep-technical",
    expertiseNote:
      "Former DeepMind / OpenAI safety researcher. AGI Safety Fundamentals course author. Active publisher on alignment theory.",
    recognition: "established",
    recognitionNote:
      "Universally read within field; lower public profile.",
  },
  "rohin-shah": {
    expertise: "deep-technical",
    expertiseNote:
      "Google DeepMind alignment lead. Author of Alignment Newsletter. Long publication record on inverse reward design, scalable oversight.",
    recognition: "established",
    recognitionNote:
      "Recognised inside AI safety; lower public profile.",
  },
  "evan-hubinger": {
    expertise: "deep-technical",
    expertiseNote:
      "Anthropic alignment-stress-testing lead. Co-author of 'Risks from Learned Optimization' (2019) — origin of mesa-optimisation framing.",
    recognition: "established",
    recognitionNote:
      "Recognised inside alignment community; low public profile.",
  },
  "buck-shlegeris": {
    expertise: "deep-technical",
    expertiseNote:
      "CEO of Redwood Research. Active publisher on AI control, scheming, scalable oversight.",
    recognition: "established",
    recognitionNote:
      "Recognised inside the alignment community.",
  },
  "nate-soares": {
    expertise: "deep-technical",
    expertiseNote:
      "President of MIRI. Long body of agent-foundations work; co-author of 'If Anyone Builds It, Everyone Dies' (2025) with Yudkowsky.",
    recognition: "field-leading",
    recognitionNote:
      "Book launch generated mainstream coverage. Recognised in safety circles.",
  },
  "daniel-dennett": {
    expertise: "external-domain",
    expertiseNote:
      "Philosopher of mind (Tufts; died 2024). Long body of work on consciousness, intentionality, evolution — applied late to AI consciousness debates.",
    recognition: "household-name",
    recognitionNote:
      "Major public-intellectual stature; Wikipedia entries in 40+ languages.",
  },
  "david-chalmers": {
    expertise: "external-domain",
    expertiseNote:
      "NYU philosopher; foundational work on the hard problem of consciousness. Engages AI consciousness rigorously but is not a technical AI researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Major academic philosopher; familiar to philosophy and AI-philosophy audiences. Less mainstream press.",
  },
  "anders-sandberg": {
    expertise: "external-domain",
    expertiseNote:
      "Long-time FHI researcher (Oxford). Computational neuroscientist; works on existential risk, transhumanism, whole-brain emulation. Adjacent to technical AI but not a frontier ML contributor.",
    recognition: "established",
    recognitionNote:
      "Recognised in EA/x-risk circles; little mainstream press.",
  },
  "andrej-karpathy": {
    expertise: "frontier-builder",
    expertiseNote:
      "Former Tesla AI director, OpenAI founding team. Hand-built much-used training/teaching infrastructure (nanoGPT, micrograd). Started Eureka Labs (2024).",
    recognition: "household-name",
    recognitionNote:
      "Tutorial videos have millions of views. Recognised broadly online. Mainstream tech-press regular.",
  },
  "wojciech-zaremba": {
    expertise: "frontier-builder",
    expertiseNote:
      "OpenAI co-founder. Robotics → language teams. Direct hands-on contributor to OpenAI's frontier line.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised inside ML; lower mainstream profile than CEO/CTO peers.",
  },
  "daniela-amodei": {
    expertise: "policy-meta",
    expertiseNote:
      "President of Anthropic. Operations and policy leadership; not the technical lead.",
    recognition: "field-leading",
    recognitionNote:
      "Mainstream tech press regular. Less individually-recognised than Dario.",
  },
  "kevin-scott": {
    expertise: "policy-meta",
    expertiseNote:
      "CTO of Microsoft. Strategic and partnership leader on the OpenAI relationship. Operates AI through Microsoft scale; not a research scientist.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring senior-CTO press; less mainstream profile than CEOs of frontier labs.",
  },
  "audrey-tang": {
    expertise: "policy-meta",
    expertiseNote:
      "Taiwan's first Digital Minister (2016–2024). Civic-tech and 'plurality' work bridges governance and AI deployment. Technical fluency but not in ML proper.",
    recognition: "household-name",
    recognitionNote:
      "Recurring international press. TIME100. Minister-rank profile.",
  },
  "yi-zeng": {
    expertise: "deep-technical",
    expertiseNote:
      "Director of Brain-inspired Cognitive AI Lab, Chinese Academy of Sciences. Active publisher on AI ethics and brain-inspired computing. Significant role in Chinese AI governance.",
    recognition: "field-leading",
    recognitionNote:
      "Major figure in Chinese AI policy. Less Western press visibility.",
  },
  "rishi-sunak": {
    expertise: "policy-meta",
    expertiseNote:
      "Former UK Prime Minister. Convened the Bletchley AI Safety Summit (2023). Treats AI as a sovereign-level policy domain.",
    recognition: "household-name",
    recognitionNote:
      "Head-of-state-level recognition, particularly in UK and Commonwealth.",
  },
  "chuck-schumer": {
    expertise: "policy-meta",
    expertiseNote:
      "US Senate Majority Leader. Convened the AI Insight Forums (2023–2024). Operates as legislative architect; not technical.",
    recognition: "household-name",
    recognitionNote:
      "Senator-level US public recognition.",
  },
  "ted-lieu": {
    expertise: "policy-meta",
    expertiseNote:
      "US Representative (CA-36). Computer-science background (Stanford BSCS). Co-leads House AI Caucus. Moderate technical fluency by congressional standards.",
    recognition: "established",
    recognitionNote:
      "Recognised in US policy and congressional-AI circles.",
  },
  "cynthia-rudin": {
    expertise: "deep-technical",
    expertiseNote:
      "Duke professor. Pioneered interpretable ML (as opposed to post-hoc explanation). Won the AAAI Squirrel AI Award 2022 for AI for the Benefit of Humanity.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in interpretable-ML community; less mainstream press than DeepMind/Anthropic interpretability leads.",
  },
  "stuart-armstrong": {
    expertise: "deep-technical",
    expertiseNote:
      "Founded Aligned AI (now Aligned). Long FHI safety publication record on value learning, corrigibility, indifference.",
    recognition: "established",
    recognitionNote:
      "Recognised within alignment field; little mainstream profile.",
  },
  "jeff-clune": {
    expertise: "deep-technical",
    expertiseNote:
      "University of British Columbia, formerly OpenAI/Uber AI Labs. Foundational work on neural-network surprise behaviour, open-endedness, AI-generating algorithms.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised inside ML research community.",
  },
  "david-krueger": {
    expertise: "deep-technical",
    expertiseNote:
      "Université de Montréal / Mila AI safety researcher. Co-author of multiple safety surveys; coordinator of the 'Managing Extreme AI Risks' paper (2024).",
    recognition: "established",
    recognitionNote:
      "Recognised inside safety field.",
  },
  "katja-grace": {
    expertise: "policy-meta",
    expertiseNote:
      "AI Impacts founder. Runs the influential 'Expert Survey on AI' (timelines/p(doom) source for many citations). Forecaster; not a technical researcher.",
    recognition: "established",
    recognitionNote:
      "Survey is widely cited; her own profile is moderate.",
  },
  "rob-miles": {
    expertise: "applied-technical",
    expertiseNote:
      "AI safety educator. CS background. YouTube channel and Computerphile videos shape much public AI-safety understanding.",
    recognition: "field-leading",
    recognitionNote:
      "Educational reach via YouTube. Less mainstream-press profile.",
  },
  "liron-shapira": {
    expertise: "applied-technical",
    expertiseNote:
      "Software entrepreneur. Hosts Doom Debates podcast. Argues AI x-risk publicly; not a frontier or alignment researcher.",
    recognition: "established",
    recognitionNote:
      "Recognised in safety-community substack/podcast circles.",
  },
  "jeffrey-ladish": {
    expertise: "applied-technical",
    expertiseNote:
      "Director of Palisade Research. Security background; runs frontier-model offensive-cyber evals. Practitioner, not core ML researcher.",
    recognition: "established",
    recognitionNote:
      "Recognised in safety/policy community for Palisade demonstrations.",
  },
  "eli-lifland": {
    expertise: "policy-meta",
    expertiseNote:
      "Forecaster (Samotsvety). Co-author of 'AI 2027' scenario. Forecasting and superforecasting; not a technical researcher.",
    recognition: "established",
    recognitionNote:
      "Recognised in forecasting/safety communities; lower public profile.",
  },
  "meredith-whittaker": {
    expertise: "policy-meta",
    expertiseNote:
      "President of Signal Foundation. Co-founded AI Now Institute. Drove Google walkout 2018. Critical-AI politics expertise; not a technical researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Mainstream tech press regular; less general public recognition.",
  },
  "kate-crawford": {
    expertise: "policy-meta",
    expertiseNote:
      "USC research professor. Co-founded AI Now Institute. 'Atlas of AI' (2021) shaped critical AI scholarship. Not a technical AI researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in AI ethics and academic circles; some mainstream press.",
  },
  "guillaume-verdon": {
    expertise: "deep-technical",
    expertiseNote:
      "Founder of Extropic; quantum-thermodynamic computing. Engineering and physics background. Originator of e/acc as @BasedBeffJezos.",
    recognition: "field-leading",
    recognitionNote:
      "Major figure in e/acc Twitter ecosystem; profiled by Forbes.",
  },
  "emmett-shear": {
    expertise: "commentator",
    expertiseNote:
      "Twitch co-founder. Briefly OpenAI interim CEO in November 2023. CEO of Softmax Foundation. Operates as executive/founder; not a research scientist.",
    recognition: "household-name",
    recognitionNote:
      "Twitch profile + November 2023 OpenAI episode press.",
  },
  "emad-mostaque": {
    expertise: "commentator",
    expertiseNote:
      "Founder of Stability AI (resigned 2024). Hedge-fund background; funded but did not personally build Stable Diffusion. Now founds Schelling AI.",
    recognition: "field-leading",
    recognitionNote:
      "Mainstream tech press regular; less recognition outside the AI/crypto crowd.",
  },
  "reid-hoffman": {
    expertise: "commentator",
    expertiseNote:
      "LinkedIn co-founder; co-founder of Inflection AI (with Suleyman). Co-author of 'Impromptu' (2023). Investor and operator; not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Defining tech-VC and political-donor profile; mainstream-press regular.",
  },
  "nate-silver": {
    expertise: "external-domain",
    expertiseNote:
      "Statistician (FiveThirtyEight founder). 'On the Edge' (2024) treats AI x-risk in the gambling/forecasting frame. Not an ML researcher.",
    recognition: "household-name",
    recognitionNote:
      "Defining election-forecasting public figure. Wikipedia in 30+ languages.",
  },
  "bryan-caplan": {
    expertise: "external-domain",
    expertiseNote:
      "George Mason economist. Books on labour markets and immigration. Engages AI economically; not a technical AI researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in economics and rationalist circles; some mainstream press.",
  },
  "liv-boeree": {
    expertise: "commentator",
    expertiseNote:
      "Former poker champion. Co-host of Win-Win podcast. Communicates AI risk publicly; not a technical contributor.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised via poker and AI-podcast profile.",
  },
  "stuart-ritchie": {
    expertise: "external-domain",
    expertiseNote:
      "Psychologist. 'Science Fictions' (2020) on the replication crisis. Engages AI from a psychometrics/science-quality angle.",
    recognition: "established",
    recognitionNote:
      "Recognised in academic-psychology and replication-crisis community.",
  },
  "jeff-sebo": {
    expertise: "external-domain",
    expertiseNote:
      "NYU philosopher specialising in animal and AI moral status. Co-author with Long (2024) 'Taking AI Welfare Seriously'. Philosophy, not technical AI.",
    recognition: "established",
    recognitionNote:
      "Recognised in AI welfare and philosophy circles.",
  },
  "daniel-dewey": {
    expertise: "deep-technical",
    expertiseNote:
      "FHI / Open Phil safety researcher. Long publication record on value learning and ideal advisor problems. Less active publicly in recent years.",
    recognition: "established",
    recognitionNote:
      "Recognised inside the safety community.",
  },
};
