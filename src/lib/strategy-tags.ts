export interface StrategyTag {
  id: string;
  name: string;
  oneLine: string;
  aka?: string[];
}

export const strategyTags: StrategyTag[] = [
  { id: "pause", name: "Pause", oneLine: "Halt frontier training until alignment catches up", aka: ["moratorium", "stop-ai"] },
  { id: "alignment-first", name: "Alignment first", oneLine: "Solve technical alignment before capability thresholds close" },
  { id: "acceleration", name: "Acceleration", oneLine: "Build faster; delay costs more than capability", aka: ["e/acc", "effective accelerationism"] },
  { id: "compute-governance", name: "Compute governance", oneLine: "Control flops via export controls, licensing, reporting" },
  { id: "centralised-project", name: "Centralised project", oneLine: "Merge frontier development into one state-led project", aka: ["CERN for AI", "Manhattan Project for AI"] },
  { id: "distributed-builders", name: "Distributed builders", oneLine: "Keep many independent actors; concentration is the bigger risk" },
  { id: "open-source-maximalism", name: "Open source", oneLine: "Release weights widely; transparency beats closed safety", aka: ["open weights"] },
  { id: "closed-weights", name: "Closed weights", oneLine: "Keep frontier weights closed; treat them as hazardous artefacts" },
  { id: "resilience-first", name: "Resilience first", oneLine: "Harden institutions and epistemic infrastructure against shocks" },
  { id: "cooperative-ai", name: "Cooperative AI", oneLine: "Invest in AI-AI and AI-human cooperation capacities" },
  { id: "governance-first", name: "Governance first", oneLine: "Lead with regulation, treaties, liability regimes" },
  { id: "international-treaty", name: "International treaty", oneLine: "Arms-control-style treaty on frontier training or deployment", aka: ["arms control"] },
  { id: "race-to-aligned-si", name: "Race to aligned SI", oneLine: "Build aligned superintelligence first, before adversaries" },
  { id: "capability-ceiling", name: "Capability ceiling", oneLine: "Cap maximum capability of deployed systems" },
  { id: "liability-driven", name: "Liability-driven safety", oneLine: "Make labs financially liable for harms; markets handle the rest" },
  { id: "public-ai", name: "Public AI", oneLine: "State-run or public-option AI as a check on private concentration" },
  { id: "democratic-mandate", name: "Democratic mandate", oneLine: "Decisions about AI must come through democratic processes" },
  { id: "abandon-superintelligence", name: "Abandon superintelligence", oneLine: "Reject superintelligence as a goal entirely; narrow AI only" },
  { id: "narrow-ai-only", name: "Narrow AI preservation", oneLine: "Preserve narrow/task-specific AI; don't build general agents" },
  { id: "differential-tech", name: "Differential technology", oneLine: "Preferentially develop protective technology over dangerous" },
  { id: "long-reflection", name: "Long reflection", oneLine: "Use post-AGI stability for extended moral deliberation before locking in" },
  { id: "interpretability-bet", name: "Interpretability bet", oneLine: "Mechanistic interpretability is necessary and sufficient to know models are safe" },
  { id: "evals-driven", name: "Evals-driven", oneLine: "Capability/risk evals gate deployment; evals are the load-bearing artefact" },
  { id: "RSP-style", name: "RSP-style commitments", oneLine: "Responsible scaling policies; labs commit to capability-tied safety" },
  { id: "hardware-killswitch", name: "Hardware killswitch", oneLine: "On-chip verification and remote off-switches for frontier compute" },
  { id: "ai-skeptic", name: "AI skeptic", oneLine: "AGI risk narratives overstated; real harms are mundane and current" },
  { id: "existential-primacy", name: "Existential primacy", oneLine: "Extinction/disempowerment risk overrides ordinary cost-benefit" },
  { id: "ai-welfare", name: "AI welfare", oneLine: "Model welfare/moral status is a primary consideration" },
  { id: "digital-minds", name: "Digital minds", oneLine: "Mind-uploading or digital people as strategic horizon" },
  { id: "conditional-pause", name: "Conditional pause", oneLine: "Pause at a capability trigger, not a date" },
  { id: "ai-for-safety", name: "AI for safety", oneLine: "Use AI itself to solve alignment and safety research" },
  { id: "military-primacy", name: "Military primacy", oneLine: "National security framing; AI as a strategic weapon" },
  { id: "antitrust-primacy", name: "Antitrust primacy", oneLine: "Break concentration via competition law" },
  { id: "sovereign-ai", name: "Sovereign AI", oneLine: "Nation states must build their own AI for sovereignty" },
  { id: "constitution-ai", name: "Constitutional AI", oneLine: "Principles-based training for value alignment" },
  { id: "scalable-oversight", name: "Scalable oversight", oneLine: "Human or human+AI oversight scales past human expertise" },
  { id: "multi-agent-equilibrium", name: "Multi-agent equilibrium", oneLine: "Many AIs checking each other is the safety mechanism" },
  { id: "cyborg-route", name: "Cyborg/merge", oneLine: "Brain-computer interfaces; humans must merge to keep up" },
  { id: "effective-altruism-framing", name: "EA framing", oneLine: "Explicitly EA-grounded prioritisation of existential risk" },
  { id: "techno-optimism", name: "Techno-optimism", oneLine: "Technology and markets solve risks faster than regulation creates them" },
  { id: "world-government", name: "World government", oneLine: "Only a singleton authority can stably govern AI" },
  { id: "agent-foundations", name: "Agent foundations", oneLine: "Reformulate decision theory and embedded agency before behavioural training can be trusted", aka: ["embedded agency"] },
  { id: "open-endedness", name: "Open-endedness", oneLine: "Build AI via open-ended self-generated curricula; safety must follow from the dynamics", aka: ["autocurricula"] },
  { id: "moral-circle-expansion", name: "Moral circle expansion", oneLine: "Treat AGIs as people whose creation extends rather than threatens humanity" },
  { id: "near-term-harms", name: "Near-term harms first", oneLine: "Documented present harms outweigh speculative existential narratives", aka: ["AI ethics"] },
  { id: "security-mindset", name: "Security mindset", oneLine: "Treat safety as adversarial security; assume systems break under attack" },
];

export function getTagById(id: string): StrategyTag | undefined {
  return strategyTags.find((t) => t.id === id);
}
