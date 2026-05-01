import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { levers, leverById } from "@/data/levers";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Strategic lever on AGI Strategies";

export function generateStaticParams() {
  return levers.map((l) => ({ id: l.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lever = leverById[id];
  if (!lever) {
    return renderOgImage({ title: "Lever not found", category: "Lever" });
  }
  return renderOgImage({
    title: lever.name,
    category: `Lever · ${lever.class.replace("-", " ")}`,
    description: `${lever.description} ↑ ${lever.positivePull}, ↓ ${lever.negativePull}.`,
  });
}
