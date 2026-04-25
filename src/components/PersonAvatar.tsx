import type { Person, ExpertiseTier } from "@/lib/people-types";
import { photoIndex } from "@/data/photo-index";

function hash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Tier rule color — consistent with the board axes. Frontier-builder reads
// as the warmest mark, commentator the coolest. Keeps the monogram visually
// indexed to the cell the face would sit in on the board.
const tierAccent: Record<ExpertiseTier, string> = {
  "frontier-builder": "var(--color-accent)",
  "deep-technical": "var(--color-link)",
  "applied-technical": "var(--color-complement)",
  "policy-meta": "var(--color-ink-soft)",
  "external-domain": "var(--color-neutral)",
  commentator: "var(--color-rule)",
};

export function PersonAvatar({
  person,
  size = 56,
}: {
  person: Pick<Person, "id" | "name" | "photoUrl" | "profile">;
  size?: number;
}) {
  const src = person.photoUrl ?? photoIndex[person.id];
  if (src) {
    return (
      <span
        className="block overflow-hidden flex-shrink-0"
        style={{
          width: size,
          height: size,
          borderRadius: 4,
          border: "1px solid var(--color-rule)",
          background: "var(--color-parchment-soft)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={person.name}
          width={size}
          height={size}
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </span>
    );
  }

  // Monogram fallback — designed to feel like a printed label, not a
  // missing photo. Initials sit in display type. A two-character code
  // below pulls the seed for the textured backdrop. The tier accent on
  // the corner mark indexes to the board axis, so a face in the
  // frontier-builder column reads warmer than one in commentator.
  const tier = person.profile?.expertise;
  const accent = tier ? tierAccent[tier] : "var(--color-rule)";
  const seed = hash(person.id);
  // Two diagonal hairlines per monogram — angle and offset hashed from id
  // — give every avatar a unique fingerprint without colour noise.
  const angle = (seed % 60) - 30;
  const offsetA = (seed % 13) - 6;
  const offsetB = ((seed >> 7) % 13) - 6;
  const fontSize = Math.round(size * 0.42);
  const codeSize = Math.max(8, Math.round(size * 0.16));
  const codeBaseline = Math.max(8, Math.round(size * 0.22));
  const ini = initials(person.name);

  return (
    <span
      className="flex-shrink-0 select-none relative overflow-hidden"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: 4,
        background: "var(--color-parchment)",
        border: "1px solid var(--color-rule)",
        display: "inline-block",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.18,
        }}
      >
        <line
          x1={offsetA}
          y1={0}
          x2={100 + offsetA}
          y2={100}
          transform={`rotate(${angle} 50 50)`}
          stroke="var(--color-ink-soft)"
          strokeWidth="0.4"
        />
        <line
          x1={0}
          y1={50 + offsetB}
          x2={100}
          y2={50 + offsetB}
          stroke="var(--color-ink-soft)"
          strokeWidth="0.3"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-ink)",
          fontFamily: "var(--font-display)",
          fontSize,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {ini}
      </span>
      {tier && size >= 36 && (
        <span
          style={{
            position: "absolute",
            top: 3,
            right: 3,
            width: codeSize,
            height: codeSize / 2.4,
            background: accent,
            borderRadius: 1,
            opacity: 0.85,
          }}
          title={tier}
        />
      )}
      {size >= 36 && (
        <span
          style={{
            position: "absolute",
            bottom: codeBaseline / 4,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: codeSize * 0.55,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-ink-soft)",
          }}
        >
          {person.id.slice(0, 3)}
        </span>
      )}
    </span>
  );
}
