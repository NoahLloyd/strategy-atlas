import Link from "next/link";
import type { Strategy } from "@/lib/types";
import { leverById } from "@/data/levers";

export function StrategyCard({ strategy, compact = false }: { strategy: Strategy; compact?: boolean }) {
  const lever = leverById[strategy.primaryLever];
  return (
    <Link href={`/strategy/${strategy.id}`} className="unstyled block">
      <div className="border hairline rounded-sm p-4 hover:border-[var(--color-ink)] transition-colors h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-lg leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {strategy.name}
          </h3>
          <span className="num-label shrink-0">
            {lever?.name} {strategy.leverDirection === "+" ? "↑" : strategy.leverDirection === "-" ? "↓" : "•"}
          </span>
        </div>
        {!compact && (
          <p className="text-sm leading-snug mb-3" style={{ color: "var(--color-ink-soft)" }}>
            {strategy.bet}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-1">
          <span className="lever-pill">{strategy.actsOn.replace(/-/g, " ")}</span>
          <span className="lever-pill">{strategy.coercion.replace(/-/g, " ")}</span>
        </div>
      </div>
    </Link>
  );
}
