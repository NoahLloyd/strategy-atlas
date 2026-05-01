import type { Metadata } from "next";

export const SITE_URL = "https://agi-strategies.com";
export const SITE_NAME = "AGI Strategies";
export const SITE_TAGLINE = "A map of AI safety strategies";
export const SITE_DESCRIPTION =
  "A citation-backed repository of AI/AGI strategy positions held by researchers, executives, policymakers, and public figures. Every claim links to a primary source.";
export const AUTHOR_NAME = "Noah Lloyd";
export const AUTHOR_EMAIL = "n@noahlr.com";

export const DEFAULT_KEYWORDS = [
  "AI safety",
  "AGI strategy",
  "AI alignment",
  "p(doom)",
  "AI risk",
  "AI policy",
  "existential risk",
  "AI governance",
  "AI researchers",
  "alignment research",
];

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

export function canonicalPath(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return path;
}

type BuildMetadataOptions = {
  title: string;
  /**
   * If true, the title is treated as the absolute final title, bypassing the
   * parent layout's `%s · AGI Strategies` template. Use for the home page or
   * any title that already includes the brand.
   */
  titleAbsolute?: boolean;
  description: string;
  path: string;
  keywords?: string[];
  imagePath?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  section?: string;
  tags?: string[];
};

export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    titleAbsolute,
    description,
    path,
    keywords,
    imagePath,
    imageAlt,
    type = "website",
    publishedTime,
    modifiedTime,
    authors,
    noIndex,
    section,
    tags,
  } = opts;

  const url = absoluteUrl(path);
  const canonical = canonicalPath(path);
  const ogImage = imagePath ? absoluteUrl(imagePath) : undefined;

  const meta: Metadata = {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    keywords: keywords && keywords.length > 0 ? keywords : DEFAULT_KEYWORDS,
    authors: [{ name: AUTHOR_NAME }],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: imageAlt ?? title,
              },
            ],
          }
        : {}),
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(type === "article" && authors ? { authors } : {}),
      ...(type === "article" && section ? { section } : {}),
      ...(type === "article" && tags ? { tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };

  return meta;
}

export function clamp(text: string, max: number): string {
  if (!text) return text;
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  const cut = trimmed.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:]$/, "") + "…";
}
