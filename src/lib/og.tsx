import { ImageResponse } from "next/og";
import { SITE_NAME } from "./seo";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PARCHMENT = "#f3ede0";
const PARCHMENT_SOFT = "#ebe3d2";
const INK = "#1a1a1a";
const INK_SOFT = "#5c574d";
const RULE = "#c9bfaa";
const ACCENT = "#7a3b2e";

type RenderOptions = {
  title: string;
  category?: string;
  description?: string;
  badge?: string;
  badgeKind?: "default" | "accent";
};

export function renderOgImage(opts: RenderOptions): ImageResponse {
  const { title, category, description, badge, badgeKind = "default" } = opts;

  const titleSize = title.length > 48 ? 76 : title.length > 28 ? 96 : 116;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PARCHMENT,
          color: INK,
          padding: "72px 84px",
          position: "relative",
          fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${RULE} 1px, transparent 1px), linear-gradient(90deg, ${RULE} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.06,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 24,
          }}
        >
          <Mark />
          <span
            style={{
              fontFamily: "ui-serif, Georgia, serif",
              fontSize: 30,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            {SITE_NAME}
          </span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: RULE,
              marginLeft: 8,
              display: "flex",
            }}
          />
          {badge ? (
            <span
              style={{
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 18,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                padding: "8px 14px",
                background:
                  badgeKind === "accent" ? ACCENT : PARCHMENT_SOFT,
                color: badgeKind === "accent" ? PARCHMENT : INK_SOFT,
                border: `1px solid ${badgeKind === "accent" ? ACCENT : RULE}`,
              }}
            >
              {badge}
            </span>
          ) : null}
        </div>

        {category ? (
          <div
            style={{
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: INK_SOFT,
              marginBottom: 28,
              marginTop: 18,
              display: "flex",
            }}
          >
            {category}
          </div>
        ) : (
          <div style={{ height: 36, display: "flex" }} />
        )}

        <div
          style={{
            fontSize: titleSize,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: INK,
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "100%",
          }}
        >
          {title}
        </div>

        {description ? (
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.35,
              color: INK_SOFT,
              maxWidth: 980,
              fontFamily: "ui-serif, Georgia, serif",
              fontStyle: "italic",
              display: "flex",
            }}
          >
            {clamp(description, 180)}
          </div>
        ) : null}

        <div style={{ flex: 1, display: "flex" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${RULE}`,
            paddingTop: 22,
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
            fontSize: 18,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: INK_SOFT,
          }}
        >
          <span style={{ display: "flex" }}>agi-strategies.com</span>
          <span style={{ display: "flex" }}>citation-backed map of AI safety</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

function Mark() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 32 32"
      style={{ display: "flex" }}
    >
      <path
        d="M16 6 L7 26"
        stroke={INK}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 6 L25 26"
        stroke={INK}
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11 17 Q16 19 21 17"
        stroke={INK}
        strokeWidth={1.4}
        strokeLinecap="round"
        opacity={0.45}
        fill="none"
      />
      <circle cx="16" cy="6" r="2" fill={INK} />
      <circle cx="7" cy="26" r="1.4" fill={INK} />
      <circle cx="25" cy="26" r="1.4" fill={INK} />
    </svg>
  );
}

function clamp(text: string, max: number): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= max) return trimmed;
  const cut = trimmed.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:]$/, "") + "…";
}
