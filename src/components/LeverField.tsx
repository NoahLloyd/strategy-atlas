import Link from "next/link";
import type { Strategy, Lever } from "@/lib/types";

/**
 * A single-glance visualization of the strategy space.
 *
 * Each row is one lever. Strategies pulling the lever up are plotted on the
 * right; strategies pulling it down on the left; neutral at centre. Bar
 * segments indicate how crowded each side is, exposing lever concentration
 * without needing the user to click through.
 */
export function LeverField({
  strategies,
  levers,
}: {
  strategies: Strategy[];
  levers: Lever[];
}) {
  const byLever: Record<string, Strategy[]> = {};
  for (const l of levers) byLever[l.id] = [];
  for (const s of strategies) byLever[s.primaryLever].push(s);

  const maxSide = Math.max(
    1,
    ...levers.flatMap((l) => {
      const list = byLever[l.id];
      const up = list.filter((s) => s.leverDirection === "+").length;
      const down = list.filter((s) => s.leverDirection === "-").length;
      const neutral = list.filter((s) => s.leverDirection === "neutral").length;
      return [up, down, neutral];
    })
  );

  return (
    <div className="border-2 border-[var(--color-ink)] bg-[var(--color-parchment)]">
      <div className="border-b hairline px-4 py-2 flex items-baseline justify-between">
        <p className="num-label">the field — every strategy, plotted</p>
        <p className="num-label">{strategies.length} strategies · {levers.length} levers</p>
      </div>
      <div className="py-2">
        {levers.map((lever, idx) => {
          const list = byLever[lever.id] || [];
          const up = list.filter((s) => s.leverDirection === "+");
          const down = list.filter((s) => s.leverDirection === "-");
          const neutral = list.filter((s) => s.leverDirection === "neutral");
          return (
            <LeverRow
              key={lever.id}
              lever={lever}
              up={up}
              down={down}
              neutral={neutral}
              maxSide={maxSide}
              last={idx === levers.length - 1}
            />
          );
        })}
      </div>
      <div
        className="border-t hairline px-4 py-2 text-[11px] grid grid-cols-[1fr_auto_1fr] items-center"
        style={{ fontFamily: "var(--font-ui)", color: "var(--color-ink-soft)" }}
      >
        <span>
          <span className="inline-block w-2 h-2 mr-2" style={{ background: "var(--color-conflict)" }} />
          pulls down (negative direction)
        </span>
        <span className="text-center">neutral or frame-rejecting</span>
        <span className="text-right">
          pulls up (positive direction)
          <span className="inline-block w-2 h-2 ml-2" style={{ background: "var(--color-complement)" }} />
        </span>
      </div>
    </div>
  );
}

function LeverRow({
  lever,
  up,
  down,
  neutral,
  maxSide,
  last,
}: {
  lever: Lever;
  up: Strategy[];
  down: Strategy[];
  neutral: Strategy[];
  maxSide: number;
  last: boolean;
}) {
  const hasBoth = up.length > 0 && down.length > 0;
  return (
    <div
      className={`grid grid-cols-[170px_1fr_1fr_1fr_50px] items-center gap-2 px-4 py-1.5 ${
        last ? "" : "border-b hairline"
      }`}
      style={{ fontFamily: "var(--font-ui)" }}
    >
      <Link
        href={`/levers/${lever.id}`}
        className="unstyled hover:underline flex items-baseline gap-2"
      >
        <span className="text-sm" style={{ fontFamily: "var(--font-display)" }}>
          {lever.name}
        </span>
        {hasBoth && (
          <span
            className="text-[9px] uppercase tracking-wider"
            style={{ color: "var(--color-conflict)" }}
            title="This lever has strategies pulling in both directions — real conflict surface."
          >
            ↕
          </span>
        )}
      </Link>

      <SideBar
        items={down}
        side="left"
        color="var(--color-conflict)"
        max={maxSide}
        pullLabel={lever.negativePull}
      />

      <NeutralCenter items={neutral} />

      <SideBar
        items={up}
        side="right"
        color="var(--color-complement)"
        max={maxSide}
        pullLabel={lever.positivePull}
      />

      <span className="num-label text-right text-[10px]">
        {up.length + down.length + neutral.length}
      </span>
    </div>
  );
}

function SideBar({
  items,
  side,
  color,
  max,
  pullLabel,
}: {
  items: Strategy[];
  side: "left" | "right";
  color: string;
  max: number;
  pullLabel: string;
}) {
  const widthPct = (items.length / max) * 100;
  return (
    <div className={`flex items-center gap-2 ${side === "left" ? "justify-end flex-row-reverse" : ""}`}>
      <div className={`flex flex-wrap gap-[2px] ${side === "left" ? "justify-end" : ""}`} style={{ maxWidth: "100%" }}>
        {items.map((s) => (
          <Dot key={s.id} strategy={s} color={color} />
        ))}
      </div>
      {items.length > 0 && (
        <div
          className="h-[2px] shrink-0"
          style={{
            width: `${Math.max(10, widthPct / 3)}px`,
            background: color,
            opacity: 0.4,
          }}
          aria-hidden
          title={`${pullLabel}: ${items.length}`}
        />
      )}
    </div>
  );
}

function NeutralCenter({ items }: { items: Strategy[] }) {
  return (
    <div className="flex justify-center items-center gap-[2px] flex-wrap">
      {items.map((s) => (
        <Dot key={s.id} strategy={s} color="var(--color-neutral)" />
      ))}
    </div>
  );
}

function Dot({ strategy, color }: { strategy: Strategy; color: string }) {
  return (
    <Link
      href={`/strategy/${strategy.id}`}
      className="unstyled block"
      title={`${strategy.name} — ${strategy.bet}`}
      aria-label={strategy.name}
    >
      <span
        className="inline-block rounded-full hover:scale-150 transition-transform cursor-pointer"
        style={{
          width: "10px",
          height: "10px",
          background: color,
          border: "1px solid var(--color-parchment)",
        }}
      />
    </Link>
  );
}
