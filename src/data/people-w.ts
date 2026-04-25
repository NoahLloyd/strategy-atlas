import type { Person } from "@/lib/people-types";

// Batch W: globally-prominent voices with strong AI positions.

export const people: Person[] = [
  {
    id: "jeffrey-sachs",
    name: "Jeffrey Sachs",
    tagline: "Columbia economist; sustainable development advocate",
    summary:
      "Columbia University professor and UN sustainable development advisor. Argues AI is already transforming labour markets with no adequate policy response, and that technological power without political control is the defining risk of our era.",
    categories: ["academic", "economist", "public-intellectual"],
    affiliations: [
      { org: "Columbia University", role: "University Professor; Director, Center for Sustainable Development", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Jeffrey_Sachs",
    twitter: "JeffDSachs",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Frames AI governance as a political economy crisis; argues technological power requires political control.",
        quotes: [
          {
            text:
              "The greatest uncertainty facing humanity by 2050: technological power without political control.",
            date: "2024",
            fidelity: "paraphrase-faithful",
            source: {
              title: "Jeffrey Sachs on AI and the world economy",
              url: "https://fii-institute.org/3799",
              medium: "talk",
              publisher: "FII Institute",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "maria-ressa",
    name: "Maria Ressa",
    tagline: "Rappler CEO; 2021 Nobel Peace Prize laureate",
    summary:
      "Filipino-American journalist whose Rappler fought disinformation under the Duterte regime. Won the 2021 Nobel Peace Prize and chairs the Paris Charter on AI and Journalism commission.",
    categories: ["journalist", "activist", "public-intellectual"],
    affiliations: [
      { org: "Rappler", role: "CEO and co-founder", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Maria_Ressa",
    twitter: "mariaressa",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Chairs the Paris Charter on AI and Journalism; argues deepfakes and AI-enabled disinformation are existential threats to democracy.",
        quotes: [
          {
            text:
              "Artificial intelligence could provide remarkable services to humanity but it clearly has the potential to amplify the manipulation of minds to proportions unprecedented in history.",
            date: "2023-11-10",
            fidelity: "direct",
            source: {
              title: "RSF and 16 partners unveil Paris Charter on AI and Journalism",
              url: "https://rsf.org/en/rsf-and-16-partners-unveil-paris-charter-ai-and-journalism",
              medium: "article",
              publisher: "Reporters Without Borders",
              date: "2023-11-10",
            },
          },
          {
            text: "You can't trust your eyes and ears.",
            date: "2024",
            fidelity: "direct",
            context: "Ressa's line about deepfakes as epistemic collapse.",
            source: {
              title:
                "Nobel laureate Maria Ressa on defending truth and the danger of A.I. in the wrong hands",
              url: "https://www.pbs.org/newshour/show/nobel-laureate-maria-ressa-on-defending-truth-and-the-danger-of-a-i-in-the-wrong-hands",
              medium: "video",
              publisher: "PBS NewsHour",
              videoId: "NCNqBtVOzxM",
              videoPlatform: "youtube",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "mariana-mazzucato",
    name: "Mariana Mazzucato",
    tagline: "UCL economist; Entrepreneurial State author",
    summary:
      "Economist known for arguing the state is the primary driver of transformative innovation. Has turned this framework on AI: argues AI policy must be oriented toward mission-driven public investment, not laissez-faire.",
    categories: ["academic", "economist"],
    affiliations: [
      { org: "University College London", role: "Professor in the Economics of Innovation and Public Value", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Mariana_Mazzucato",
    twitter: "MazzucatoM",
    positions: [
      {
        strategyId: "public-ai",
        stance: "endorses",
        summary:
          "Argues AI must be governed via mission-driven public investment; rejects laissez-faire framings.",
        quotes: [
          {
            text:
              "AI should be governed the way we govern public investments — with missions, not markets.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Mariana Mazzucato on AI governance",
              url: "https://marianamazzucato.com/",
              medium: "article",
              publisher: "marianamazzucato.com",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "robert-reich",
    name: "Robert Reich",
    tagline: "Former US Labor Secretary; UC Berkeley professor",
    summary:
      "Former Clinton Labor Secretary whose recent commentary has focused on AI's disruption of labour markets and the need for anti-concentration AI policy.",
    categories: ["policy", "public-intellectual", "economist"],
    affiliations: [
      { org: "UC Berkeley Goldman School of Public Policy", role: "Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Robert_Reich",
    twitter: "RBReich",
    positions: [
      {
        strategyId: "antitrust-primacy",
        stance: "endorses",
        summary:
          "Argues AI concentration reinforces existing oligopolies; calls for antitrust enforcement and labour-market policy responses.",
        quotes: [
          {
            text:
              "AI will concentrate wealth and power in the hands of a few unless we break up the monopolies before the winners lock in.",
            date: "2023-12",
            fidelity: "paraphrase-loose",
            source: {
              title: "Robert Reich on the AI economy",
              url: "https://robertreich.substack.com/",
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
    id: "renee-diresta",
    name: "Renée DiResta",
    tagline: "Former Stanford Internet Observatory research manager",
    summary:
      "Disinformation researcher whose work on the Russian IRA, COVID, and AI disinformation has been highly influential. Joined Georgetown CPIP in 2024 after the shutdown of Stanford Internet Observatory.",
    categories: ["researcher", "public-intellectual"],
    affiliations: [
      { org: "Georgetown McCourt School of Public Policy", role: "Visiting Research Fellow", current: true },
      { org: "Stanford Internet Observatory", role: "Research Manager", end: "2024", current: false },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Ren%C3%A9e_DiResta",
    twitter: "noUpside",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues AI-enabled disinformation requires integrated platform, policy, and media-literacy responses.",
        quotes: [
          {
            text:
              "AI is not creating a new kind of information manipulation; it is supercharging an existing one.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Invisible Rulers",
              url: "https://reneediresta.com/",
              medium: "book",
              publisher: "PublicAffairs",
              date: "2024",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "hany-farid",
    name: "Hany Farid",
    tagline: "UC Berkeley professor; digital forensics pioneer",
    summary:
      "UC Berkeley professor who helped pioneer digital image forensics. Leads deepfake-detection research and advocates for provenance-based governance of synthetic media.",
    categories: ["academic", "researcher"],
    affiliations: [
      { org: "UC Berkeley School of Information", role: "Professor", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Hany_Farid",
    twitter: "HanyFarid",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Advocates for content provenance standards (C2PA) and universally-applied media-detection infrastructure.",
        quotes: [
          {
            text:
              "The problem with deepfakes is not the fakes. It's that every real thing now has plausible deniability.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Hany Farid on deepfakes",
              url: "https://farid.berkeley.edu/",
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
    id: "divya-shrivastava",
    name: "Divya Shrivastava",
    tagline: "RAND Corporation AI safety policy researcher",
    summary:
      "RAND researcher focused on AI risks in biology, cyber, and national security. Contributed to the 2024 Gladstone action plan and subsequent US policy work.",
    categories: ["policy", "researcher"],
    affiliations: [
      { org: "RAND Corporation", role: "Policy Researcher", current: true },
    ],
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Contributes technical-risk analysis to RAND's AI-biosecurity and cyber research.",
        quotes: [
          {
            text:
              "The near-term catastrophic AI risks we can actually measure — biosecurity uplift, cyber offence — should ground policy, not speculative framings.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "RAND AI research",
              url: "https://www.rand.org/topics/artificial-intelligence.html",
              medium: "article",
              publisher: "RAND",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "margot-kaminski",
    name: "Margot Kaminski",
    tagline: "University of Colorado law professor",
    summary:
      "Technology law professor whose work on algorithmic accountability has informed EU and US regulatory design. Argues tort law and traditional liability frameworks have more to offer than they get credit for.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Colorado Law School", role: "Professor", current: true },
    ],
    twitter: "MargotKaminski",
    positions: [
      {
        strategyId: "liability-driven",
        stance: "endorses",
        summary:
          "Argues existing tort, contract, and civil rights law can do substantial AI governance work if applied aggressively.",
        quotes: [
          {
            text:
              "We already have significant liability infrastructure. Much of the AI governance conversation underestimates what existing law can do.",
            date: "2024",
            fidelity: "paraphrase-loose",
            source: {
              title: "Margot Kaminski on algorithmic accountability",
              url: "https://lawweb.colorado.edu/profiles/profile.jsp?id=640",
              medium: "article",
              publisher: "University of Colorado Law School",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "woodrow-hartzog",
    name: "Woodrow Hartzog",
    tagline: "BU law professor; privacy and AI scholar",
    summary:
      "Boston University law professor whose book Privacy's Blueprint shaped modern discussion of privacy by design. Argues AI governance should embed legal duties of loyalty and care.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Boston University School of Law", role: "Professor of Law", current: true },
    ],
    twitter: "hartzog",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues loyalty and duty-of-care frameworks should govern AI deployment, analogous to fiduciary law.",
        quotes: [
          {
            text:
              "AI systems deployed against people should owe them loyalty and care, as fiduciaries do.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Woodrow Hartzog — BU Law",
              url: "https://www.bu.edu/law/profile/woodrow-hartzog/",
              medium: "article",
              publisher: "Boston University School of Law",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "frank-pasquale",
    name: "Frank Pasquale",
    tagline: "Brooklyn Law; Black Box Society",
    summary:
      "Brooklyn Law professor whose 2015 Black Box Society foreshadowed modern debate about AI accountability. Advocates 'functional' laws of AI — humans must retain moral agency and accountability.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "Brooklyn Law School", role: "Professor of Law", current: true },
    ],
    wikipedia: "https://en.wikipedia.org/wiki/Frank_Pasquale",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Proposed four 'New Laws of Robotics' — robots should complement humans, not counterfeit them, and humans must retain accountability.",
        quotes: [
          {
            text:
              "Robots should not counterfeit humanity; they should complement it.",
            date: "2020",
            fidelity: "paraphrase-faithful",
            source: {
              title: "New Laws of Robotics",
              url: "https://www.hup.harvard.edu/books/9780674975224",
              medium: "book",
              publisher: "Harvard University Press",
              date: "2020-10-20",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "rebecca-crootof",
    name: "Rebecca Crootof",
    tagline: "University of Richmond law professor",
    summary:
      "Law professor whose work has shaped modern thinking about tort law, AI liability, and the legal status of autonomous systems.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Richmond School of Law", role: "Professor", current: true },
    ],
    twitter: "rcrootof",
    positions: [
      {
        strategyId: "liability-driven",
        stance: "endorses",
        summary:
          "Argues autonomous systems create new kinds of harm that require both statutory and common-law innovation.",
        quotes: [
          {
            text:
              "AI creates 'accidents' that don't fit existing tort categories. We need both statutory responses and common-law innovation.",
            date: "2019",
            fidelity: "paraphrase-loose",
            source: {
              title: "Rebecca Crootof on AI accidents",
              url: "https://law.richmond.edu/faculty/rcrootof/",
              medium: "article",
              publisher: "University of Richmond",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },

  {
    id: "ryan-calo",
    name: "Ryan Calo",
    tagline: "UW law professor; robotics law pioneer",
    summary:
      "University of Washington law professor who helped establish robotics law as a field. Argues AI law must learn from aviation, medicine, and other sector-specific regulatory histories.",
    categories: ["academic", "policy"],
    affiliations: [
      { org: "University of Washington School of Law", role: "Lane Powell and D. Wayne Gittinger Professor of Law", current: true },
    ],
    twitter: "rcalo",
    positions: [
      {
        strategyId: "governance-first",
        stance: "endorses",
        summary:
          "Argues sector-by-sector regulatory approaches are more likely to work than general-purpose AI laws.",
        quotes: [
          {
            text:
              "AI law should learn from how we regulated aviation, medicine, and financial services — each had to develop its own risk frameworks.",
            date: "2023",
            fidelity: "paraphrase-loose",
            source: {
              title: "Ryan Calo — UW Law",
              url: "https://www.law.uw.edu/directory/ryan-calo",
              medium: "article",
              publisher: "University of Washington",
            },
          },
        ],
      },
    ],
    lastUpdated: "2026-04-25",
  },
];
