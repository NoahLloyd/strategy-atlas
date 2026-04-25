import Link from "next/link";
import type { ReactNode } from "react";
import type { Strategy } from "@/lib/types";
import { leverById } from "@/data/levers";

type Placement = "below" | "above" | "right";

type Props = {
  strategy: Strategy;
  placement?: Placement;
  children?: ReactNode;
};

// Linked text with a hover card that surfaces the strategy's bet, its
// primary lever, and its acts-on / coercion classification. Mirrors
// HoverFaceLink so the two read consistently.
export function HoverStrategyLink({
  strategy,
  placement = "below",
  children,
}: Props) {
  const lever = leverById[strategy.primaryLever];
  const arrow =
    strategy.leverDirection === "+"
      ? "↑"
      : strategy.leverDirection === "-"
      ? "↓"
      : "•";
  return (
    <span className="face-hover">
      <Link
        href={`/strategy/${strategy.id}`}
        className="unstyled inline-block"
        aria-label={strategy.name}
      >
        {children ?? <span>{strategy.name}</span>}
      </Link>
      <span
        className={`face-hover-card place-${placement}`}
        role="tooltip"
        aria-hidden="true"
      >
        <p className="face-hover-name">{strategy.name}</p>
        {lever && (
          <p className="face-hover-meta">
            {lever.name} {arrow} · {strategy.actsOn.replace(/-/g, " ")} ·{" "}
            {strategy.coercion.replace(/-/g, " ")}
          </p>
        )}
        <p
          style={{
            fontStyle: "italic",
            color: "var(--color-ink)",
            marginTop: "4px",
            marginBottom: "4px",
            lineHeight: 1.35,
          }}
        >
          {strategy.bet}
        </p>
      </span>
    </span>
  );
}
