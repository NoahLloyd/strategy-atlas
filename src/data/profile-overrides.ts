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
  "scott-aaronson": {
    expertise: "deep-technical",
    expertiseNote:
      "UT Austin computer-science professor. Foundational work on quantum complexity. 2022–2024 stint at OpenAI on watermarking and cryptographic safety. Long-running Shtetl-Optimized blog covers AI rigorously.",
    recognition: "field-leading",
    recognitionNote:
      "Major figure in theoretical computer science. Recognised broadly online; less mainstream press than the lab CEOs.",
  },
  "robin-hanson": {
    expertise: "external-domain",
    expertiseNote:
      "George Mason economist. 'Age of Em' (2016) was an early formal economic treatment of post-AGI futures. Long publication record on prediction markets and futarchy.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in EA, rationalist, and economics circles. Less mainstream press.",
  },
  "ben-goertzel": {
    expertise: "deep-technical",
    expertiseNote:
      "Founded SingularityNET; long history of AGI research (OpenCog framework). Published extensively on artificial general intelligence theory. Less central to current frontier ML.",
    recognition: "field-leading",
    recognitionNote:
      "Coined modern usage of 'AGI' as a research term. Recognised in AGI/transhumanist circles.",
  },
  "richard-sutton": {
    expertise: "deep-technical",
    expertiseNote:
      "University of Alberta professor. Co-author of the foundational RL textbook with Andrew Barto. Turing Award 2024 (with Barto). 'The Bitter Lesson' (2019) is one of the most-read essays in modern ML.",
    recognition: "field-leading",
    recognitionNote:
      "Universal name in ML. Turing Award announcement got tech-press coverage. Less general-public recognition than Hinton/LeCun.",
  },
  "andrew-barto": {
    expertise: "deep-technical",
    expertiseNote:
      "UMass Amherst emeritus. Co-author with Sutton of the standard RL textbook. Turing Award 2024 for foundational RL contributions.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised universally in ML. Less press visibility than Sutton.",
  },
  "yejin-choi": {
    expertise: "deep-technical",
    expertiseNote:
      "University of Washington / Stanford NLP professor. MacArthur Fellow 2022 for commonsense-reasoning work. Active publisher across NLP and reasoning evaluation.",
    recognition: "field-leading",
    recognitionNote:
      "TED talk 'Why AI is incredibly smart and shockingly stupid' has wide reach. MacArthur and Anita Borg awards.",
  },
  "douglas-hofstadter": {
    expertise: "external-domain",
    expertiseNote:
      "Indiana University cognitive scientist. 'Gödel, Escher, Bach' (1979, Pulitzer 1980) and 'I Am a Strange Loop' shaped a generation's thinking on intelligence. Engages AI as cognitive scientist; not a current ML researcher.",
    recognition: "household-name",
    recognitionNote:
      "GEB has sold over a million copies. Wikipedia entries in 30+ languages.",
  },
  "stephen-hawking": {
    expertise: "external-domain",
    expertiseNote:
      "Theoretical physicist (1942–2018). Cosmology, not AI; AI commentary was occasional. Co-signed the 2014 'Stephen Hawking AI letter' framing AI as existential.",
    recognition: "household-name",
    recognitionNote:
      "Universal name recognition; Wikipedia in 100+ languages.",
  },
  "ted-chiang": {
    expertise: "external-domain",
    expertiseNote:
      "Speculative-fiction writer. 'Story of Your Life', 'Exhalation', 'The Lifecycle of Software Objects' explore AI and consciousness with care. Influences how the field talks about AI.",
    recognition: "household-name",
    recognitionNote:
      "'Arrival' (2016 film adaptation) brought wide recognition. New Yorker AI essays widely shared.",
  },
  "mo-gawdat": {
    expertise: "commentator",
    expertiseNote:
      "Former chief business officer of Google X. 'Scary Smart' (2021). Operates as motivational author and speaker; not a technical AI contributor.",
    recognition: "field-leading",
    recognitionNote:
      "Bestseller author and TEDx-style speaker. Recognised in self-help/AI-anxiety crossover audiences.",
  },
  "sara-hooker": {
    expertise: "deep-technical",
    expertiseNote:
      "Founder of Adaption Labs; former head of Cohere For AI. Active publisher on hardware lottery, sparsity, multilingual evaluation.",
    recognition: "field-leading",
    recognitionNote:
      "TIME100 AI 2023. Recognised in ML research and AI-policy circles.",
  },
  "subbarao-kambhampati": {
    expertise: "deep-technical",
    expertiseNote:
      "Arizona State professor. Long publication record on planning and reasoning. Vocal critic of LLM 'planning' claims; fellow of AAAI, ACM, AAAS.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring podcast and panel guest. Recognised within AI research. Less mainstream press.",
  },
  "naomi-klein": {
    expertise: "external-domain",
    expertiseNote:
      "Author and journalist (UBC). 'No Logo', 'The Shock Doctrine'. AI engagement is via critique-of-capitalism frame. Not a technical AI commentator.",
    recognition: "household-name",
    recognitionNote:
      "Books in 30+ languages; mainstream-press regular.",
  },
  "cory-doctorow": {
    expertise: "policy-meta",
    expertiseNote:
      "Author and EFF fellow. 'Enshittification' (2023) framed platform decay; many AI-policy essays at Pluralistic. Technical fluency on systems and DRM, less on ML proper.",
    recognition: "household-name",
    recognitionNote:
      "Widely-followed blog and SF author. Mainstream press regular.",
  },
  "maria-ressa": {
    expertise: "external-domain",
    expertiseNote:
      "Filipino journalist; Rappler co-founder. 2021 Nobel Peace Prize for press-freedom work. Engages AI through information-integrity lens.",
    recognition: "household-name",
    recognitionNote:
      "Nobel laureate; TIME100; widely covered globally.",
  },
  "noam-chomsky": {
    expertise: "external-domain",
    expertiseNote:
      "Linguist (MIT, Arizona). Generative grammar foundations. AI engagement is largely critical (NYT 'False Promise of ChatGPT', 2023). Not a technical AI researcher.",
    recognition: "household-name",
    recognitionNote:
      "Among the most-cited intellectuals of the 20th century. Wikipedia in 100+ languages.",
  },
  "steven-pinker": {
    expertise: "external-domain",
    expertiseNote:
      "Harvard psychologist. Cognitive-science and Enlightenment-rationalism books. AI engagement is occasional and skeptical of x-risk framings. Not a technical AI researcher.",
    recognition: "household-name",
    recognitionNote:
      "Multiple NYT-bestseller books; TED regular; mainstream press.",
  },
  "rodney-brooks": {
    expertise: "deep-technical",
    expertiseNote:
      "MIT roboticist; iRobot/Robust AI founder. Foundational work on subsumption architecture. Skeptic of frontier-LLM AGI claims; tracks his own predictions on his blog.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in robotics and AI circles. Less mainstream press than the LLM-era founders.",
  },
  "ian-goodfellow": {
    expertise: "frontier-builder",
    expertiseNote:
      "Invented GANs (2014). Co-author of the standard 'Deep Learning' textbook with Bengio and Courville. Apple → Google DeepMind ML lead.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised universally in ML. Less mainstream press than the lab CEOs.",
  },
  "peter-norvig": {
    expertise: "deep-technical",
    expertiseNote:
      "Stanford HAI fellow; former Google research director. Co-author of 'Artificial Intelligence: A Modern Approach' with Stuart Russell.",
    recognition: "field-leading",
    recognitionNote:
      "Standard AI textbook gives him near-universal recognition in CS. Less mainstream press.",
  },
  "joscha-bach": {
    expertise: "deep-technical",
    expertiseNote:
      "Cognitive scientist; works on computational models of cognition. Theoretical contributor to AI consciousness and cognitive architectures.",
    recognition: "established",
    recognitionNote:
      "Recurring podcast guest (Lex Fridman). Recognised in cognitive-science and rationalist circles.",
  },
  "lex-fridman": {
    expertise: "commentator",
    expertiseNote:
      "MIT research scientist (autonomous-vehicle background) turned podcaster. Hosts major AI/safety figures; not a primary research contributor.",
    recognition: "household-name",
    recognitionNote:
      "Among the largest podcasts globally; mainstream press regular.",
  },
  "dwarkesh-patel": {
    expertise: "commentator",
    expertiseNote:
      "Independent podcaster. Long-form interviews with researchers (Aschenbrenner, Suleyman, Hassabis). Not a technical contributor.",
    recognition: "field-leading",
    recognitionNote:
      "Major reach within AI/tech-podcast audiences. Less general-public recognition.",
  },
  "tyler-cowen": {
    expertise: "external-domain",
    expertiseNote:
      "George Mason economist. Marginal Revolution blog; Emergent Ventures. Engages AI through economics-and-culture lens. Not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Bloomberg columnist; widely-cited economics commentator.",
  },
  "joy-buolamwini": {
    expertise: "deep-technical",
    expertiseNote:
      "Founded the Algorithmic Justice League. PhD MIT Media Lab on facial-recognition bias. 'Gender Shades' research drove regulatory change.",
    recognition: "household-name",
    recognitionNote:
      "Featured in Coded Bias documentary; congressional testimony; mainstream press regular.",
  },
  "kate-darling": {
    expertise: "external-domain",
    expertiseNote:
      "MIT Media Lab research scientist. Robot ethics and human-robot interaction. 'The New Breed' (2021).",
    recognition: "field-leading",
    recognitionNote:
      "Frequent press appearances and TED talks on robot ethics.",
  },
  "robert-wright": {
    expertise: "external-domain",
    expertiseNote:
      "Journalist. 'Nonzero' (2000) framed cooperation in evolutionary terms; Bloggingheads.tv founder. Engages AI through cooperation/Newcomb-style lens.",
    recognition: "field-leading",
    recognitionNote:
      "NYT bestseller author; recurring podcast presence.",
  },
  "sundar-pichai": {
    expertise: "policy-meta",
    expertiseNote:
      "CEO of Alphabet (since 2019). Operates as exec; not a research contributor. Strategic decisions on Gemini, search-AI, antitrust posture.",
    recognition: "household-name",
    recognitionNote:
      "Big-tech CEO; mainstream press regular.",
  },
  "satya-nadella": {
    expertise: "policy-meta",
    expertiseNote:
      "CEO of Microsoft (since 2014). Drove Microsoft's OpenAI partnership. Operates as exec; not a researcher.",
    recognition: "household-name",
    recognitionNote:
      "Big-tech CEO; mainstream press regular.",
  },
  "mark-zuckerberg": {
    expertise: "policy-meta",
    expertiseNote:
      "Meta founder/CEO. Drives Llama open-weights strategy; operates as exec rather than ML researcher.",
    recognition: "household-name",
    recognitionNote:
      "Among the most globally recognised individuals.",
  },
  "jeff-bezos": {
    expertise: "commentator",
    expertiseNote:
      "Amazon founder. AI investor (Anthropic Series C, Series D); not a technical contributor. Operates as investor/exec.",
    recognition: "household-name",
    recognitionNote:
      "Among the most globally recognised individuals.",
  },
  "eric-schmidt": {
    expertise: "policy-meta",
    expertiseNote:
      "Former Google CEO/chair. Co-chair of the National Security Commission on AI; runs Special Competitive Studies Project. Operates in policy and investment, not research.",
    recognition: "household-name",
    recognitionNote:
      "Recurring senior-statesman press appearances; congressional testimony.",
  },
  "peter-thiel": {
    expertise: "commentator",
    expertiseNote:
      "Investor (Founders Fund, Palantir co-founder). Engages AI ideologically (techno-libertarian). Not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Major political-and-tech press figure.",
  },
  "mackenzie-scott": {
    expertise: "policy-meta",
    expertiseNote:
      "Yield Giving founder. Major philanthropist; AI-related donations are part of broader giving. Not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Mainstream press regular for unrestricted-giving philanthropy.",
  },
  "ursula-von-der-leyen": {
    expertise: "policy-meta",
    expertiseNote:
      "European Commission president. Drove the EU AI Act. Head-of-government level operator; not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Head-of-government level recognition across EU and globally.",
  },
  "joe-biden": {
    expertise: "policy-meta",
    expertiseNote:
      "Former US President. Issued the October 2023 AI Executive Order. Head-of-government operator.",
    recognition: "household-name",
    recognitionNote:
      "Globally recognised head-of-state.",
  },
  "donald-trump": {
    expertise: "policy-meta",
    expertiseNote:
      "US President. Rescinded Biden's AI EO in January 2025; executive policy on AI infrastructure (Stargate). Head-of-state operator.",
    recognition: "household-name",
    recognitionNote:
      "Globally recognised head-of-state.",
  },
  "kamala-harris": {
    expertise: "policy-meta",
    expertiseNote:
      "Former US Vice President. Led Biden-era AI safety summits convening. Head-of-government operator.",
    recognition: "household-name",
    recognitionNote:
      "Globally recognised political figure.",
  },
  "jd-vance": {
    expertise: "policy-meta",
    expertiseNote:
      "US Vice President. Paris AI Action Summit (Feb 2025) opened the Trump administration's AI policy stance toward deregulation. Head-of-government operator.",
    recognition: "household-name",
    recognitionNote:
      "Globally recognised political figure.",
  },
  "dawn-song": {
    expertise: "deep-technical",
    expertiseNote:
      "UC Berkeley professor. Deep work on AI security, privacy-preserving ML, and verifiable AI. MacArthur Fellow 2010.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in security/ML community. Less mainstream profile than ML-celebrity peers.",
  },
  "david-silver": {
    expertise: "frontier-builder",
    expertiseNote:
      "DeepMind principal scientist. Lead architect of AlphaGo, AlphaZero, AlphaStar. Deep RL pioneer.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised universally in RL. Less mainstream press than Hassabis.",
  },
  "vernor-vinge": {
    expertise: "external-domain",
    expertiseNote:
      "Mathematician and SF author (1944–2024). Coined modern 'singularity' usage in his 1993 essay. Not a technical AI contributor.",
    recognition: "household-name",
    recognitionNote:
      "Hugo-Award-winning SF author; widely cited in singularity discourse.",
  },
  "martin-rees": {
    expertise: "external-domain",
    expertiseNote:
      "UK Astronomer Royal. Co-founded Cambridge Centre for the Study of Existential Risk. Cosmologist; engages AI through x-risk lens.",
    recognition: "household-name",
    recognitionNote:
      "Member of the House of Lords; mainstream UK press regular.",
  },
  "huw-price": {
    expertise: "external-domain",
    expertiseNote:
      "Cambridge philosopher of science. Co-founded Centre for the Study of Existential Risk with Rees and Tallinn.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in academic-philosophy and x-risk circles.",
  },
  "joseph-carlsmith": {
    expertise: "policy-meta",
    expertiseNote:
      "Senior researcher at Open Philanthropy. Long essays on AI takeover risk and decision theory. Philosopher; not a technical ML researcher.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in safety/EA circles. Hard-Pasta Substack (Hands and Cities) widely read.",
  },
  "andrew-critch": {
    expertise: "deep-technical",
    expertiseNote:
      "UC Berkeley CHAI research scientist. Long publication record on multi-agent AI safety; coined 'multi/multi alignment' framing.",
    recognition: "established",
    recognitionNote:
      "Recognised inside the alignment community.",
  },
  "william-saunders": {
    expertise: "frontier-builder",
    expertiseNote:
      "Former OpenAI Superalignment researcher. Resigned 2024 with public concerns. Senate testimony on AI risk.",
    recognition: "established",
    recognitionNote:
      "Recognised in AI-safety circles via departure and testimony.",
  },
  "suchir-balaji": {
    expertise: "frontier-builder",
    expertiseNote:
      "Former OpenAI researcher (1991–2024). Public concerns on copyright and training data; died Nov 2024.",
    recognition: "field-leading",
    recognitionNote:
      "Death and circumstances drew major press; recognised in AI/policy circles.",
  },
  "gwern-branwen": {
    expertise: "applied-technical",
    expertiseNote:
      "Independent essayist. Broad publication base on ML scaling laws, statistics, and analysis. No formal ML credentials but technically rigorous.",
    recognition: "field-leading",
    recognitionNote:
      "Universally read inside the rationalist/AI-research community.",
  },
  "wei-dai": {
    expertise: "deep-technical",
    expertiseNote:
      "Cryptographer (b-money, predecessor to Bitcoin). Long body of LessWrong posts on decision theory and updateless decision theory.",
    recognition: "established",
    recognitionNote:
      "Recognised in cryptography and rationalist communities.",
  },
  "allan-dafoe": {
    expertise: "policy-meta",
    expertiseNote:
      "Director of Frontier Safety and Governance, Google DeepMind. Earlier founded Centre for the Governance of AI (GovAI). Political scientist applied to AI governance.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in AI-governance and policy circles. Less mainstream press.",
  },
  "jade-leung": {
    expertise: "policy-meta",
    expertiseNote:
      "Chief Scientist at the UK AI Safety Institute (since 2024). Earlier OpenAI head of governance and GovAI.",
    recognition: "field-leading",
    recognitionNote:
      "Senior policy figure recognised in AI-governance circles.",
  },
  "beth-barnes": {
    expertise: "deep-technical",
    expertiseNote:
      "Founder/CEO of METR (Model Evaluation & Threat Research). Designed many frontier-model dangerous-capability evals. Earlier OpenAI alignment.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in evals and safety circles. Less mainstream press.",
  },
  "tamay-besiroglu": {
    expertise: "deep-technical",
    expertiseNote:
      "Co-founder of Epoch AI. Empirical scaling and compute trends; published on training compute and AI economics.",
    recognition: "established",
    recognitionNote:
      "Recognised in AI-economics and forecasting circles.",
  },
  "jaime-sevilla": {
    expertise: "deep-technical",
    expertiseNote:
      "Director of Epoch AI. Compute, training-data, and capability-trend analysis.",
    recognition: "established",
    recognitionNote:
      "Recognised in AI-economics and forecasting circles.",
  },
  "anthony-aguirre": {
    expertise: "external-domain",
    expertiseNote:
      "UC Santa Cruz physicist. Co-founded Future of Life Institute and Metaculus. Engages AI through forecasting and x-risk lens.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in EA, forecasting, and AI-policy circles.",
  },
  "ed-felten": {
    expertise: "deep-technical",
    expertiseNote:
      "Princeton CS professor emeritus. Long publication record on security, privacy, and tech policy. Twice in US government (Deputy CTO, FTC Chief Technologist).",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in tech-policy and CS circles. Less mainstream press.",
  },
  "francois-chollet": {
    expertise: "deep-technical",
    expertiseNote:
      "Created Keras. Founded Ndea (2025). Author of the ARC-AGI benchmark, a public test specifically designed to resist memorisation.",
    recognition: "field-leading",
    recognitionNote:
      "Widely recognised in ML; ARC-AGI prize made some mainstream coverage.",
  },
  "melanie-mitchell": {
    expertise: "deep-technical",
    expertiseNote:
      "Santa Fe Institute professor. 'Artificial Intelligence: A Guide for Thinking Humans' (2019). Long publication record on analogy and complexity.",
    recognition: "field-leading",
    recognitionNote:
      "Recognised in academic AI and complexity circles.",
  },
  "judea-pearl": {
    expertise: "deep-technical",
    expertiseNote:
      "UCLA professor. Turing Award 2011 for foundational causality and Bayesian-network work. 'The Book of Why' (2018).",
    recognition: "household-name",
    recognitionNote:
      "Turing Award; Wikipedia in 30+ languages.",
  },
  "daron-acemoglu": {
    expertise: "external-domain",
    expertiseNote:
      "MIT economist. Nobel Prize in Economics 2024 (with Johnson and Robinson). Engages AI through institutional-economics frame.",
    recognition: "household-name",
    recognitionNote:
      "Nobel laureate; mainstream press regular.",
  },
  "erik-brynjolfsson": {
    expertise: "external-domain",
    expertiseNote:
      "Stanford HAI economist. 'The Second Machine Age' (with McAfee, 2014). Long body of empirical work on AI and labour.",
    recognition: "field-leading",
    recognitionNote:
      "Recurring testimony and press; less mainstream profile than Acemoglu.",
  },
  "carl-benedikt-frey": {
    expertise: "external-domain",
    expertiseNote:
      "Oxford Martin School economist. Co-author of 'Future of Employment' (2013) on AI/automation displacement.",
    recognition: "field-leading",
    recognitionNote:
      "Widely cited automation-economics research.",
  },
  "joseph-stiglitz": {
    expertise: "external-domain",
    expertiseNote:
      "Columbia economist. Nobel Prize in Economics 2001. AI engagement is via labour and competition-policy lens.",
    recognition: "household-name",
    recognitionNote:
      "Nobel laureate; mainstream press regular.",
  },
  "amartya-sen": {
    expertise: "external-domain",
    expertiseNote:
      "Harvard economist. Nobel Prize in Economics 1998. Engages AI through capabilities-and-development frame.",
    recognition: "household-name",
    recognitionNote:
      "Nobel laureate; widely-published public intellectual.",
  },
  "esther-duflo": {
    expertise: "external-domain",
    expertiseNote:
      "MIT economist. Nobel Prize in Economics 2019 (with Banerjee and Kremer). Engages AI through development-and-poverty frame.",
    recognition: "household-name",
    recognitionNote:
      "Nobel laureate; mainstream press regular.",
  },
  "tim-berners-lee": {
    expertise: "frontier-builder",
    expertiseNote:
      "Inventor of the World Wide Web. Turing Award 2016. Engages AI through Solid project and decentralisation framing.",
    recognition: "household-name",
    recognitionNote:
      "Web-inventor profile; Wikipedia in 100+ languages.",
  },
  "stephen-wolfram": {
    expertise: "deep-technical",
    expertiseNote:
      "Founder of Wolfram Research / Wolfram|Alpha. Computational-mathematics platform builder. Engages AI through computational-equivalence framing.",
    recognition: "household-name",
    recognitionNote:
      "Mainstream press regular; popular online presence.",
  },
  "peter-singer": {
    expertise: "external-domain",
    expertiseNote:
      "Princeton ethicist. 'Animal Liberation' (1975); founder of effective-altruism intellectual lineage. AI welfare engagement via philosophy.",
    recognition: "household-name",
    recognitionNote:
      "Major public-intellectual profile; Wikipedia in 50+ languages.",
  },
  "will-macaskill": {
    expertise: "policy-meta",
    expertiseNote:
      "Oxford philosopher; co-founded GWWC, 80,000 Hours, EA movement infrastructure. 'What We Owe the Future' (2022). Not a technical AI contributor.",
    recognition: "field-leading",
    recognitionNote:
      "Defining EA-movement figure; book NYT-bestseller; some mainstream press.",
  },
  "ezra-klein": {
    expertise: "external-domain",
    expertiseNote:
      "NYT columnist; Vox co-founder. Engages AI through politics-and-policy lens. Not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Major NYT podcast and column reach.",
  },
  "kara-swisher": {
    expertise: "policy-meta",
    expertiseNote:
      "Tech journalist. Founded Recode/Vox; hosts Pivot and On podcasts. Drives much CEO-level press; not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "Mainstream tech-press fixture for two decades.",
  },
  "ev-williams": {
    expertise: "policy-meta",
    expertiseNote:
      "Twitter and Medium co-founder. Operates as platform exec; not a technical AI contributor.",
    recognition: "household-name",
    recognitionNote:
      "Recognised tech-founder; mainstream press regular.",
  },
  "bill-mckibben": {
    expertise: "external-domain",
    expertiseNote:
      "Climate journalist; founded 350.org. AI engagement through climate-and-energy lens (data centre energy demand). Not a technical contributor.",
    recognition: "household-name",
    recognitionNote:
      "NYT bestseller author; mainstream press regular.",
  },
};
