/**
 * Falsification signals per strategy. Drawn from the vault note
 * "Macrostrategy falsification signals.md". Each entry names a specific,
 * plausible observation that would update against the strategy's core bet.
 *
 * A strategy held without a falsification signal is not strategy, it is
 * affiliation. Surfacing these signals converts commitments into wagers
 * and lets the field's bets update on evidence rather than persist on
 * inertia.
 */
export const falsificationByStrategy: Record<string, string> = {
  "alignment-first":
    "Interpretability and oversight methods stop scaling with model capability, stronger models are less rather than more inspectable.",
  "pause":
    "Major states or frontier labs publicly defect from a declared pause, or verification tech cannot distinguish a real pause from a declared one.",
  "governance-first":
    "Enacted regulations cover less than 20% of frontier compute by some date, or institutional capture moves faster than capacity building.",
  "resilience-first":
    "Core infrastructure degradation rates exceed hardening rates for three consecutive years, particularly in verification cost and democratic trust.",
  "compute-governance":
    "The capability-per-flop curve steepens faster than chip export controls tighten.",
  "differential-technology-development":
    "The offense-defense classification cannot be operationalised in any funded program within five years.",
  "interpretability-first":
    "Leading labs cannot produce mechanistic explanations of their own frontier models within two to three years of release.",
  "voluntary-restraint":
    "Visible weakening of RSP text under capability pressure, combined with no meaningful penalty.",
  "red-line-capability":
    "A system crosses a named red line without a prior warning signal, or many deployed systems hold a red line capability latently.",
  "international-ai-agency":
    "No agency with inspection authority is negotiated and operational within the next several years.",
  "open-source-maximalism":
    "An open released model produces a verified harm in a domain where defender access does not bound the risk.",
  "human-augmentation-race":
    "Default failure case: capability gap widens faster than augmentation narrows it. Falsification requires a discontinuous enhancement result.",
  "consumer-refusal":
    "Major lab scandals produce no measurable user migration, which is the current pattern.",
  "military-primacy":
    "Catastrophic outcome under a race dynamic that the strategy predicted would be stable.",
  "multipolarity":
    "Any actor achieves decisive advantage others cannot match within a planning cycle.",
  "public-ai":
    "Concentration risks appear inside the public entity, or the public entity lags the private frontier into irrelevance.",
  "narrow-ai-preservation":
    "Narrow compositions cannot match general system economic returns.",
  "cooperative-ai":
    "AI systems defect in deployments where commitment technology exists and cooperation was available.",
  "ai-skeptic":
    "Each capability threshold the skeptic named as unreachable is reached, though the position often survives via recalibration rather than abandonment.",
  "acceleration":
    "A visible harm large enough that policy overrides the growth coalition (2008 financial crisis analogue).",
  "arms-control-treaty":
    "Signatories cannot domestically enforce (the BWC pattern).",
  "antitrust-primacy":
    "Breakups reconcentrate within one to two years.",
  "insurance-mandate":
    "A large AI loss triggers insurer exit rather than tighter safety requirements.",
  "information-integrity-first":
    "Continued political coordination under synthetic saturation, or provenance infrastructure operationalised as surveillance.",
  "coup-prevention-first":
    "An undetected coup crosses the threshold, the detection regime does not currently exist.",
  "democratic-mandate":
    "Binding AI referenda are functionally ignored within three years.",
  "counter-ai-ai":
    "The best guardian system is fooled by a model one generation newer.",
  "data-governance-first":
    "Frontier capability is reached with synthetic data.",
  "regulated-utility":
    "Utility regulation produces no safety investment above voluntary baseline.",
  "whistleblower-primacy":
    "A major safety incident is known internally and not disclosed even under the new regime.",
  "criminal-liability":
    "Clear criminal conduct is identified with no prosecution (2008 Wall Street analogue).",
  "closed-weights-mandate":
    "Classified capability appears unclassified within two years.",
  "energy-choke-point":
    "Efficiency gains outpace regulatory tightening.",
  "embodiment-requirement":
    "A catastrophe caused by embodiment-exempt AI.",
  "plural-ai-ethic":
    "Measured value convergence across frontier models within three years.",
  "small-model-first":
    "A widening scale gap through 2027.",
  "sabotage":
    "No credible actor attempts the path; strategy was correctly assessed as non-viable.",
  "religious-and-moral-authority":
    "Formal religious positions move no outcome.",
  "sovereign-wealth":
    "Captured surplus leaves political concentration unchanged (Alaska PFD analogue).",
  "catastrophe-response-capacity":
    "A major incident where capacity exists but cannot scale (2008 financial response analogue).",
  "mass-literacy":
    "High measured literacy produces no behavioural change on consumer and voting choices by 2030.",
  "bureaucratic-slowdown":
    "Procedural burden implemented and routinely evaded (pre-1970s environmental impact analogue).",
};
