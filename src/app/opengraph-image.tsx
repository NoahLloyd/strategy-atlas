import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { SITE_TAGLINE } from "@/lib/seo";

export const runtime = "nodejs";
export const alt = "AGI Strategies, a citation-backed map of AI safety strategies";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Who believes what about AGI.",
    category: SITE_TAGLINE,
    description:
      "Every position belongs to a named person, dated, and linked to a primary source. Researchers, executives, policymakers, public figures.",
  });
}
