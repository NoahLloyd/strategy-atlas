import Link from "next/link";
import type { Strategy } from "@/lib/types";
import { leverById } from "@/data/levers";
import { tagsForStrategyId } from "@/data/strategy-tag-bridge";
import { peopleByStrategyTag } from "@/lib/people";

function endorserCount(strategyId: string): number {
  const tags = tagsForStrategyId(strategyId);
  if (tags.length === 0) return 0;
  const ids = new Set<string>();
  for (const t of tags) for (const p of peopleByStrategyTag(t)) ids.add(p.id);
  return ids.size;
}

export function StrategyCard({ strategy, compact = false }: { strategy: Strategy; compact?: boolean }) {
  const lever = leverById[strategy.primaryLever];
  const count = endorserCount(strategy.id);
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
        <div className="mt-auto flex flex-wrap gap-1 items-center">
          <span className="lever-pill">{strategy.actsOn.replace(/-/g, " ")}</span>
          <span className="lever-pill">{strategy.coercion.replace(/-/g, " ")}</span>
          {count > 0 && (
            <span
              className="num-label ml-auto"
              title={`${count} people on the record for this strategy`}
            >
              {count} on record
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
