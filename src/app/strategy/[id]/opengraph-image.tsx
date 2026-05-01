import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { getStrategy, strategies } from "@/lib/strategies";
import { leverById } from "@/data/levers";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AGI strategy on AGI Strategies";

export function generateStaticParams() {
  return strategies.map((s) => ({ id: s.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const strategy = getStrategy(id);
  if (!strategy) {
    return renderOgImage({ title: "Strategy not found", category: "Strategy" });
  }
  const lever = leverById[strategy.primaryLever];
  const arrow =
    strategy.leverDirection === "+"
      ? "↑"
      : strategy.leverDirection === "-"
        ? "↓"
        : "·";
  return renderOgImage({
    title: strategy.name,
    category: `Strategy · ${lever?.name} ${arrow}`,
    description: strategy.bet,
  });
}
