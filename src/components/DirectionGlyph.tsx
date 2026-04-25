import type { LeverDirection } from "@/lib/types";

export function DirectionGlyph({ direction }: { direction: LeverDirection }) {
  const map = {
    "+": { symbol: "↑", label: "pulls up" },
    "-": { symbol: "↓", label: "pulls down" },
    neutral: { symbol: "•", label: "neutral" },
  } as const;
  const { symbol, label } = map[direction];
  return (
    <span
      className="inline-block font-mono text-xs"
      title={label}
      aria-label={label}
    >
      {symbol}
    </span>
  );
}
