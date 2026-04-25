import type { Person } from "@/lib/people-types";

// Batch AG chunk 04/5: split from people-ag.ts to keep
// individual modules small enough for turbopack to hot-reload.

export const people: Person[] = [
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
              title: "Yael Eisenstat, Cybersecurity for Democracy",
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
        tentative: true,
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
        tentative: true,
        summary:
          "Working mathematician engaging with AlphaProof and similar systems; argues mathematicians need to engage with AI rather than dismiss or hype it.",
        quotes: [
          {
            text:
              "AI is going to change how mathematicians work. Most of the change will be invisible to people outside the field.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Holly Krieger, Cambridge",
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
              title: "Luciano Floridi, Yale",
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
              title: "Karen Yeung, Birmingham",
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
              "Automation has never simply destroyed jobs, but the responses it requires from labour markets and education are often slow.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Michael Osborne, Oxford",
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
              title: "Sarah Spurgeon, UCL",
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
          "Argues the political economy of AI, concentration in a handful of firms, must be a primary governance concern.",
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
              title: "Michèle Finck, Tübingen",
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
          "Frames AI governance through 'design justice', affected communities must be designers, not subjects.",
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
              title: "Beth Singler, Cambridge",
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
              "Your face belongs to us, that's the implicit claim of the AI surveillance industry, and it has not been refuted.",
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
              "Incentives shape what platforms surface. AI doesn't change that, it amplifies it.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Sarah Cen, MIT",
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
              title: "Kate Saenko, BU CS",
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
      "Harvard philosopher who in the 1960s introduced functionalism, the position that mental states are functional, not material, that subsequently became the foundation of computationalist theories of mind.",
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
            context: "Functionalism, the foundational philosophical assumption of strong AI.",
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
              "By the late twentieth century, our time, a mythic time, we are all chimeras, theorized and fabricated hybrids of machine and organism, in short, cyborgs.",
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
          "Argued mind is what brains do, and that AI minds, if appropriately structured, would be minds. Position influenced both Hofstadter and Bach.",
        quotes: [
          {
            text:
              "There is no such thing as philosophy-free science; there is only science whose philosophical baggage is taken on board without examination.",
            date: "1995",
            fidelity: "direct",
            context: "From Darwin's Dangerous Idea, used widely in AI consciousness debates.",
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
              "An organism has conscious mental states if and only if there is something that it is like to be that organism, something it is like for the organism.",
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
              "By 2045, we will have multiplied the intelligence, the human biological machine intelligence of our civilization, a billion-fold.",
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
              title: "Donald Knuth, ChatGPT questions experiment",
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
              title: "Alan Kay, Viewpoints Research Institute",
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
              title: "Claude Shannon, Wikipedia",
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
          "Anticipated the 'Lovelace objection' Turing later named: that machines can only do what we explicitly program them to do, a position later argued and rejected.",
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
          "Argues current deep-learning AI is stuck at the lowest rung of the 'Ladder of Causation', pure association, and cannot reach reasoning without explicit causal models.",
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
            context: "From the Dartmouth Workshop proposal, the founding statement of AI as a field.",
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
              "Most AI security risks are not new, they're known security problems that are made cheaper or more scalable by AI.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ross Anderson, Cambridge",
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
      "Engineer-and-investor who runs the Latent Space podcast, a major venue for AI engineering and product discussions. Founder of Smol AI.",
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
        tentative: true,
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
        tentative: true,
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
              title: "Walter Isaacson, Elon Musk biography",
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
        tentative: true,
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
              title: "Sara Bergman, Green Software Foundation",
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
              title: "Adrian Weller, Alan Turing Institute",
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
              title: "Reuben Binns, Oxford",
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
        tentative: true,
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
        tentative: true,
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
        tentative: true,
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
        tentative: true,
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
              title: "Vint Cerf, Google",
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
        tentative: true,
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
];
