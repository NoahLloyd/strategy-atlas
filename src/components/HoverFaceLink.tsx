import Link from "next/link";
import type { Person } from "@/lib/people-types";
import { PersonAvatar } from "@/components/PersonAvatar";
import {
  expertiseTiers,
  recognitionTiers,
  vintageTiers,
} from "@/data/profile-tiers";
import { getTagById } from "@/lib/strategy-tags";

type Placement = "below" | "above" | "right";

type Props = {
  person: Person;
  size?: number;
  placement?: Placement;
  // Suppress the hover card and just render the linked avatar. Useful
  // when the parent is itself an interactive surface where a popup
  // would interfere.
  noCard?: boolean;
};

function formatPDoom(v: number | [number, number]): string {
  if (Array.isArray(v))
    return `${Math.round(v[0] * 100)}–${Math.round(v[1] * 100)}%`;
  return `${Math.round(v * 100)}%`;
}

// Linked avatar with a polished hover card showing name, tagline,
// tier line, top strategy tags, and p(doom). The card is CSS-only;
// it appears on hover and stays clickable via the underlying link.
export function HoverFaceLink({
  person,
  size = 28,
  placement = "below",
  noCard,
}: Props) {
  if (noCard) {
    return (
      <Link
        href={`/people/${person.id}`}
        className="unstyled inline-block"
        title={person.name}
      >
        <PersonAvatar person={person} size={size} />
      </Link>
    );
  }
  const profile = person.profile;
  const expertise = profile
    ? expertiseTiers.find((t) => t.id === profile.expertise)?.label
    : null;
  const recognition = profile
    ? recognitionTiers.find((t) => t.id === profile.recognition)?.label
    : null;
  const vintage = profile?.vintage
    ? vintageTiers.find((t) => t.id === profile.vintage)?.label
    : null;
  const tagIds = Array.from(
    new Set(person.positions.map((pos) => pos.strategyId)),
  ).slice(0, 4);
  const pDoom = person.pDoom?.[0]?.value;
  return (
    <span className="face-hover">
      <Link
        href={`/people/${person.id}`}
        className="unstyled inline-block"
        aria-label={person.name}
      >
        <PersonAvatar person={person} size={size} />
      </Link>
      <span
        className={`face-hover-card place-${placement}`}
        role="tooltip"
        aria-hidden="true"
      >
        <div className="flex items-start gap-3">
          <PersonAvatar person={person} size={44} />
          <div className="flex-1 min-w-0">
            <p className="face-hover-name">{person.name}</p>
            {person.tagline && (
              <p className="face-hover-tagline">{person.tagline}</p>
            )}
          </div>
          {pDoom !== undefined && (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.95rem",
                color: "var(--color-ink)",
                whiteSpace: "nowrap",
              }}
              title="p(doom)"
            >
              p {formatPDoom(pDoom)}
            </span>
          )}
        </div>
        {(expertise || recognition || vintage) && (
          <p className="face-hover-meta">
            {[expertise, recognition, vintage].filter(Boolean).join(" · ")}
          </p>
        )}
        {tagIds.length > 0 && (
          <div className="face-hover-tags">
            {tagIds.map((id) => {
              const t = getTagById(id);
              return (
                <span key={id} className="face-hover-tag">
                  {t?.name ?? id}
                </span>
              );
            })}
            {person.positions.length > tagIds.length && (
              <span
                className="face-hover-tag"
                style={{ borderStyle: "dashed" }}
              >
                +{person.positions.length - tagIds.length}
              </span>
            )}
          </div>
        )}
        <p className="face-hover-cta">click to open profile →</p>
      </span>
    </span>
  );
}
