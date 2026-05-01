import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { getPerson, people } from "@/lib/people";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Person profile on AGI Strategies";

export function generateStaticParams() {
  return people.map((p) => ({ id: p.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const person = getPerson(id);
  if (!person) {
    return renderOgImage({
      title: "Person not found",
      category: "AGI Strategies",
    });
  }
  const current = person.affiliations.find((a) => a.current);
  const subtitle = current
    ? `${current.role ? `${current.role}, ` : ""}${current.org}`
    : person.tagline ?? "";
  return renderOgImage({
    title: person.name,
    category: subtitle ? `Person · ${subtitle}` : "Person on the record",
    description: person.summary,
  });
}
