import type { Person } from "@/lib/people-types";
import { photoIndex } from "@/data/photo-index";

const palette = [
  "#8b3a2e",
  "#3a7a52",
  "#c9a86a",
  "#6b3f7a",
  "#3a667a",
  "#7a5c3a",
  "#7a3a55",
  "#3a7a6e",
  "#8a5a2e",
  "#4a4a78",
];

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

export function PersonAvatar({
  person,
  size = 56,
}: {
  person: Pick<Person, "id" | "name" | "photoUrl">;
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
  const color = palette[hash(person.id) % palette.length];
  const fontSize = Math.round(size * 0.4);
  return (
    <span
      className="flex items-center justify-center flex-shrink-0 select-none"
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: 4,
        background: `color-mix(in oklab, ${color} 14%, var(--color-parchment-soft))`,
        border: "1px solid var(--color-rule)",
        color,
        fontFamily: "var(--font-display)",
        fontSize,
        letterSpacing: "0.01em",
        lineHeight: 1,
      }}
    >
      {initials(person.name)}
    </span>
  );
}
