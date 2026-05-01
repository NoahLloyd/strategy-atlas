import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { getTagById, strategyTags } from "@/lib/strategy-tags";
import { peopleByStrategyTag } from "@/lib/people";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Strategy tag on AGI Strategies";

export function generateStaticParams() {
  return strategyTags.map((t) => ({ id: t.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tag = getTagById(id);
  if (!tag) {
    return renderOgImage({ title: "Strategy not found", category: "Strategy tag" });
  }
  const adherents = peopleByStrategyTag(id);
  const adherentText =
    adherents.length === 0
      ? "Catalogued strategy"
      : `${adherents.length} ${adherents.length === 1 ? "person" : "people"} on record`;
  return renderOgImage({
    title: tag.name,
    category: `Strategy tag · ${adherentText}`,
    description: tag.oneLine,
    badge: adherents.length >= 20 ? `${adherents.length} endorsers` : undefined,
  });
}
