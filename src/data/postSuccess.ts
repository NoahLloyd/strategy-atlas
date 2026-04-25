/**
 * Post-success successor problems per strategy. Drawn from the vault note
 * "Post success states of macrostrategies.md". Each string describes the
 * binding constraint in the world *after* the strategy succeeds, often the
 * next generation's problem.
 *
 * A strategy that exports a worse problem than the one it solved has not done
 * durable work. Surfacing these successor problems lets a reader see whether
 * the strategy has a plan for its own success.
 */
export const postSuccessByStrategy: Record<string, string> = {
  "alignment-first":
    "Aligned frontier AI exists. Principals now choose what to align to, and operator legitimacy becomes the binding constraint. The race is over who gets to be the principal.",
  "pause":
    "Capability frozen at current levels. The binding question becomes when to unfreeze and who decides. A long pause decays into Abandon superintelligence by default.",
  "governance-first":
    "Functional regulatory infrastructure exists. The regulator now has to make substantive decisions with the empirical uncertainty that was the reason for its existence in the first place.",
  "race-to-aligned-superintelligence":
    "One actor has aligned superintelligence. They choose whether to constrain rivals, share, or defer. Power concentrates at exactly the moment it is least legitimately held.",
  "open-source-maximalism":
    "Everyone has frontier weights. The problem becomes whose defence stands up to whose offence, the offence-defence balance becomes the binding constraint.",
  "international-ai-agency":
    "The agency exists. Its decisions become the binding layer. UN Security Council analogue suggests it replicates the geopolitical tensions it was meant to bridge.",
  "long-reflection":
    "Reflection is happening. The reflector has to produce durable consensus; deep time value preservation paradoxes say the conclusions may be rejectable by the resulting population.",
  "resilience-first":
    "Institutions are robust. AI arrives into a world that can absorb it, but the world still has to use AI correctly, which is the alignment question at a later phase. Buys time rather than dissolving the problem.",
  "abandon-superintelligence":
    "Civilizational moratorium holds indefinitely. The binding problem is enforcement over generations as the value of defection grows with accumulated forgone capability.",
  "compute-governance":
    "The compute chokepoint binds. Frontier capability is governed by whoever controls the flops accounting regime, a new concentration emerges inside the governance.",
  "centralised-ai-project":
    "One project owns frontier capability. The project's principal now holds concentrated authority. The question of how to legitimate that authority was deferred.",
  "distributed-builders":
    "Capability is distributed across many actors. The binding problem becomes the worst-case actor and whether any single misuse is catastrophic enough to dominate the diffusion bet.",
  "capability-ceiling":
    "The ceiling holds. Adversaries with incentive to breach it remain; the ceiling's defence becomes a permanent enforcement posture rather than a solved problem.",
  "interpretability-first":
    "Models are legible. Legibility itself is now an asset and a target, interpretability tools become security-sensitive infrastructure.",
  "ai-for-safety":
    "AI runs alignment research. The question becomes whether the safety-AI itself is aligned, recursing one level.",
  "portfolio-hedge":
    "Multiple strategies partially succeed. Coordination between them becomes the binding constraint, since they were not designed to compose.",
  "differential-technology-development":
    "Defence compounds faster than offence. Defensive capability accumulates in whoever funded it, producing a new concentration asymmetric to the original.",
  "multipolarity":
    "Multipolar equilibrium holds. Binding becomes equilibrium maintenance, a small shock can collapse to either concentration or chaos.",
  "cooperative-ai":
    "AI agents cooperate. The binding problem becomes exclusion from the cooperating group, which humans, which AIs, which goals are in.",
  "mass-literacy":
    "Citizens can evaluate AI. The binding problem becomes whether elite and public evaluations converge or diverge, and what happens when they differ.",
  "legitimacy-first":
    "AI policy is actively legitimated. Legitimation process itself becomes a bottleneck, every new AI capability needs a legitimation cycle that may be slower than capability.",
  "antitrust-primacy":
    "No AI actor dominates. Binding becomes the speed of antitrust versus the speed of capability, a structural arms race between remedy and consolidation.",
  "voluntary-restraint":
    "Labs voluntarily restrain. Restraint holds until the first defector; the binding problem is the credibility of the commitment to defect against defectors.",
  "military-primacy":
    "One military holds AI primacy. Authority flows from capability; counter-coalitions form by default. The binding problem is whether primacy can be consolidated before the coalition forms.",
  "constitutional-ai-governance":
    "An enforceable AI constitution exists. The binding problem becomes interpretation and judicial capacity, a constitutional court that can decide AI-specific questions at the rate capability evolves is the next-layer requirement.",
  "sunset-clause":
    "All AI authorisations default to expiry. The re-authorisation calendar becomes the binding process. If renewals routinise, the strategy degrades into the permission regime it was meant to replace.",
  "test-ground":
    "A testbed has produced data. The binding problem is whether the data generalises and who decides broader deployment based on it, the authority to scale from testbed to world is the next-layer choice.",
  "ubuntu-relational-ai":
    "Communities are in ongoing dialogue with the AI systems that affect them. The binding problem becomes scaling relational ethics beyond small stable communities, and who represents communities whose members disagree.",
  "confucian-role-ethics":
    "AI systems are evaluated by role fit. The binding problem becomes who defines roles in a world where AI itself is restructuring the social positions role ethics depends on.",
  "research-community-norms":
    "Research community norms constrain publication and research direction. The binding problem becomes enforcement, the community that set the norm has to retain standing to enforce it as industry outpaces academia.",
  "academic-firewalling":
    "Academia operates at arm's length from frontier labs. The binding problem becomes whether arm's length translates into real alternative capacity or only into distance that reduces academic relevance.",
  "ai-worker-collective-action":
    "Frontier lab workers coordinate to constrain lab behaviour. The binding problem becomes union durability across funding cycles and the replacement of activist cohorts by more willing hires.",
};
