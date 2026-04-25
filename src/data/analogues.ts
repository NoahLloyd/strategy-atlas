/**
 * Historical governance analogues per strategy. Drawn from the vault note
 * "Historical analogues inform strategy plausibility".
 *
 * Every strategy inherits a plausible ceiling from its historical precedent.
 * Advocates usually cite the success mode; the honest assessment is also
 * the failure mode. Naming both calibrates expectation against what the
 * precedent actually produced.
 */
export interface Analogue {
  domain: "nuclear" | "biotech" | "climate" | "aviation" | "pharma" | "financial";
  regime: string;
  produced: string;
  failed: string;
}

export const analogueByStrategy: Record<string, Analogue> = {
  "arms-control-treaty": {
    domain: "nuclear",
    regime: "SALT / START",
    produced: "No state-to-state nuclear use in 80 years, modest proliferation control.",
    failed: "Did not prevent 9 nuclear states. BWC analogue without verification was worse.",
  },
  "international-ai-agency": {
    domain: "nuclear",
    regime: "IAEA",
    produced: "Controlled primary materials, inspection regime for some signatories.",
    failed: "Could not prevent state proliferation; enforcement bounded by major-power consent.",
  },
  "closed-weights-mandate": {
    domain: "nuclear",
    regime: "Atomic Energy Act classification",
    produced: "Concentrated control of nuclear secrets inside the state apparatus.",
    failed: "Secrets leaked across borders anyway (Rosenberg, Pakistan, Iran, North Korea).",
  },
  "pause": {
    domain: "nuclear",
    regime: "Limited Test Ban Treaty moratorium",
    produced: "Atmospheric test halt among major powers.",
    failed: "Underground testing continued; holdouts (France, China) caught up.",
  },
  "compute-governance": {
    domain: "nuclear",
    regime: "Zangger Committee / Nuclear Suppliers Group",
    produced: "Input control regime that bounded proliferation inputs.",
    failed: "Persistent defection, smuggling, and domestic production routes.",
  },
  "research-community-norms": {
    domain: "biotech",
    regime: "Asilomar (1975)",
    produced: "Slowed some research, established review cultures and voluntary compliance.",
    failed: "Norms set when biology was university-centred; AI research is not.",
  },
  "red-line-capability": {
    domain: "biotech",
    regime: "DURC / gain-of-function moratorium",
    produced: "Institutional review for named-risk experiments in some jurisdictions.",
    failed: "Gain-of-function research continued; proliferation of capability beyond the moratorium scope.",
  },
  "academic-firewalling": {
    domain: "biotech",
    regime: "Dual-use research of concern",
    produced: "Raised awareness; some venue restrictions.",
    failed: "Did not prevent cross-sector diffusion; did not cover commercial labs.",
  },
  "data-governance-first": {
    domain: "biotech",
    regime: "Sequence screening",
    produced: "Voluntary screening by major synthesis providers.",
    failed: "Coverage incomplete; bypass via smaller providers or decentralised synthesis.",
  },
  "capability-ceiling": {
    domain: "climate",
    regime: "Emissions caps",
    produced: "Emissions reductions in some jurisdictions; technology shifts.",
    failed: "Global-scale reductions at required pace have not happened.",
  },
  "sovereign-wealth": {
    domain: "climate",
    regime: "Climate finance / Green Climate Fund",
    produced: "Rising visibility; pledged funds for adaptation.",
    failed: "Delivery lags pledges; adaptation finance remains inadequate.",
  },
  "liability-driven-safety": {
    domain: "climate",
    regime: "Climate litigation",
    produced: "Attribution cases establishing duty of care.",
    failed: "Did not drive emissions reductions at scale.",
  },
  "catastrophe-response-capacity": {
    domain: "aviation",
    regime: "NTSB",
    produced: "Rapid incident learning; near-miraculous commercial safety record.",
    failed: "Coverage of military and general aviation weaker; novel failure modes (MCAS) still occur.",
  },
  "governance-first": {
    domain: "aviation",
    regime: "FAA / equivalent",
    produced: "Industry-wide standard practice; airworthiness oversight.",
    failed: "Slow on emerging categories (drones); certification capture risk.",
  },
  "whistleblower-primacy": {
    domain: "aviation",
    regime: "Aviation whistleblower protections",
    produced: "Legal safe harbour that surfaced safety-critical information.",
    failed: "Coverage narrow; retaliation still occurs outside explicit protections.",
  },
  "test-ground": {
    domain: "pharma",
    regime: "Clinical trials",
    produced: "Safety for approved applications; orderly market introduction.",
    failed: "Post-market surveillance gaps (Vioxx); off-label use uncovered.",
  },
  "bureaucratic-slowdown": {
    domain: "pharma",
    regime: "Approval timelines",
    produced: "Filtered unsafe submissions; established review culture.",
    failed: "Under sufficient pressure, approval pathways compress; paperwork-without-substance failure.",
  },
  "insurance-mandate": {
    domain: "financial",
    regime: "Capital requirements / stress tests",
    produced: "Reduced routine failure frequency.",
    failed: "Systemic failures still occur (2008); novel conditions exceed the regime.",
  },
  "criminal-liability": {
    domain: "financial",
    regime: "Sarbanes-Oxley",
    produced: "Fraud deterrence for named violations.",
    failed: "Executive accountability in crises remains rare (2008 Wall Street).",
  },
};

export const analogueDomainLabel: Record<Analogue["domain"], string> = {
  nuclear: "Nuclear",
  biotech: "Biotechnology",
  climate: "Climate",
  aviation: "Aviation",
  pharma: "Pharmaceutical",
  financial: "Financial regulation",
};
