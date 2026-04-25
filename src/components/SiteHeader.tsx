"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

type IconKey =
  | "framework"
  | "people"
  | "tools"
  | "about"
  | "atlas"
  | "levers"
  | "axes"
  | "matrix"
  | "scenarios"
  | "directory"
  | "positions"
  | "pdoom"
  | "timelines"
  | "portfolio"
  | "identity"
  | "commitments";

type NavLink = { href: string; label: string; hint?: string; icon?: IconKey };
type NavSection = {
  id: string;
  label: string;
  href?: string;
  icon: IconKey;
  links: NavLink[];
};

const sections: NavSection[] = [
  {
    id: "framework",
    label: "Framework",
    href: "/atlas",
    icon: "framework",
    links: [
      { href: "/atlas", label: "Atlas", hint: "all 76 macrostrategies", icon: "atlas" },
      { href: "/levers", label: "Levers", hint: "the 15 control levers", icon: "levers" },
      { href: "/axes", label: "Axes", hint: "five orthogonal dimensions", icon: "axes" },
      { href: "/matrix", label: "Matrix", hint: "pairwise conflict & complement", icon: "matrix" },
      { href: "/scenarios", label: "Scenarios", hint: "failure modes each strategy answers", icon: "scenarios" },
    ],
  },
  {
    id: "people",
    label: "People",
    href: "/people",
    icon: "people",
    links: [
      { href: "/people", label: "Directory", hint: "researchers, executives, public figures", icon: "directory" },
      { href: "/board", label: "Board", hint: "expertise × recognition grid", icon: "matrix" },
      { href: "/strategies", label: "Positions", hint: "strategy tags people hold", icon: "positions" },
      { href: "/pdoom", label: "p(doom)", hint: "extinction-risk estimates on record", icon: "pdoom" },
      { href: "/timelines", label: "Timelines", hint: "AGI-arrival forecasts", icon: "timelines" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    href: "/portfolio",
    icon: "tools",
    links: [
      { href: "/portfolio", label: "Portfolio audit", hint: "stack-test a strategy combination", icon: "portfolio" },
      { href: "/identity", label: "Bet or identity", hint: "diagnose how a position is held", icon: "identity" },
      { href: "/commitments", label: "Commitments", hint: "worldview assumptions by strategy", icon: "commitments" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpen(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isInSection = (s: NavSection) =>
    s.links.some((l) => pathname === l.href || pathname.startsWith(l.href + "/")) ||
    (s.href && (pathname === s.href || pathname.startsWith(s.href + "/")));

  return (
    <header
      className="border-b hairline relative"
      style={{ background: "var(--color-parchment)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="unstyled flex items-center gap-3 shrink-0"
          aria-label="AGI Strategies — home"
        >
          <AtlasMark />
          <span
            className="tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            AGI Strategies
          </span>
        </Link>

        <nav
          ref={navRef}
          className="hidden md:flex items-stretch h-full"
          style={{ fontFamily: "var(--font-ui)" }}
          onMouseLeave={() => setOpen(null)}
        >
          {sections.map((s) => {
            const isOpen = open === s.id;
            const active = isInSection(s);
            return (
              <div
                key={s.id}
                className="relative flex items-stretch"
                onMouseEnter={() => setOpen(s.id)}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className="px-3 text-sm flex items-center gap-1.5 transition-colors"
                  style={{
                    color:
                      active || isOpen
                        ? "var(--color-ink)"
                        : "var(--color-ink-soft)",
                    background: isOpen
                      ? "var(--color-parchment-soft)"
                      : "transparent",
                    borderBottom: active
                      ? "2px solid var(--color-ink)"
                      : "2px solid transparent",
                    marginBottom: "-1px",
                  }}
                >
                  <Icon name={s.icon} />
                  <span>{s.label}</span>
                  <Caret open={isOpen} />
                </button>
                {isOpen && (
                  <div
                    className="absolute left-0 top-full z-50"
                    style={{ minWidth: "300px" }}
                    role="menu"
                  >
                    <div
                      className="border hairline shadow-md py-1 mt-px"
                      style={{ background: "var(--color-parchment)" }}
                    >
                      {s.links.map((l) => {
                        const linkActive =
                          pathname === l.href ||
                          pathname.startsWith(l.href + "/");
                        return (
                          <Link
                            key={l.href}
                            href={l.href}
                            role="menuitem"
                            className="unstyled flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--color-parchment-soft)] transition-colors"
                            style={{
                              borderLeft: linkActive
                                ? "2px solid var(--color-ink)"
                                : "2px solid transparent",
                            }}
                          >
                            <span
                              className="mt-0.5 shrink-0"
                              style={{ color: "var(--color-ink-soft)" }}
                            >
                              {l.icon && <Icon name={l.icon} size={14} />}
                            </span>
                            <span className="flex-1 min-w-0">
                              <span
                                className="block text-sm"
                                style={{ color: "var(--color-ink)" }}
                              >
                                {l.label}
                              </span>
                              {l.hint && (
                                <span
                                  className="block text-xs mt-0.5"
                                  style={{ color: "var(--color-ink-soft)" }}
                                >
                                  {l.hint}
                                </span>
                              )}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/about"
            className="unstyled px-3 text-sm flex items-center gap-1.5 transition-colors"
            style={{
              color:
                pathname === "/about"
                  ? "var(--color-ink)"
                  : "var(--color-ink-soft)",
              borderBottom:
                pathname === "/about"
                  ? "2px solid var(--color-ink)"
                  : "2px solid transparent",
              marginBottom: "-1px",
            }}
          >
            <Icon name="about" />
            <span>About</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="md:hidden text-sm px-2 py-1 border hairline"
          style={{ fontFamily: "var(--font-ui)" }}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "close" : "menu"}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t hairline"
          style={{
            background: "var(--color-parchment)",
            fontFamily: "var(--font-ui)",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-5">
            {sections.map((s) => (
              <div key={s.id}>
                <p className="num-label mb-2 flex items-center gap-2">
                  <Icon name={s.icon} />
                  {s.label}
                </p>
                <ul className="space-y-1">
                  {s.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="unstyled flex items-start gap-2.5 py-1 text-sm"
                      >
                        <span
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--color-ink-soft)" }}
                        >
                          {l.icon && <Icon name={l.icon} size={14} />}
                        </span>
                        <span>
                          {l.label}
                          {l.hint && (
                            <span
                              className="block text-xs"
                              style={{ color: "var(--color-ink-soft)" }}
                            >
                              {l.hint}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t hairline pt-3 flex items-center justify-between">
              <Link
                href="/about"
                className="unstyled text-sm flex items-center gap-2"
              >
                <Icon name="about" />
                About
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      aria-hidden
      style={{
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform 120ms ease",
        opacity: 0.7,
      }}
    >
      <path
        d="M2 4 L5 7 L8 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Icon({ name, size = 15 }: { name: IconKey; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "framework":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="5" height="5" />
          <rect x="9" y="2" width="5" height="5" />
          <rect x="2" y="9" width="5" height="5" />
          <rect x="9" y="9" width="5" height="5" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.4" />
          <path d="M2 14 Q2 10 6 10 Q10 10 10 14" />
          <circle cx="11" cy="5.5" r="2" opacity="0.6" />
          <path d="M9 14 Q14 14 14 11" opacity="0.6" />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <path d="M5 3 L5 11" />
          <path d="M11 3 L11 11" />
          <path d="M5 7 L11 7" />
          <circle cx="5" cy="13" r="1.2" />
          <circle cx="11" cy="13" r="1.2" />
        </svg>
      );
    case "about":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" />
          <path d="M8 7 L8 11.5" />
          <circle cx="8" cy="4.8" r="0.4" fill="currentColor" />
        </svg>
      );
    case "atlas":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" />
          <path d="M8 2 L8 14" opacity="0.5" />
          <path d="M2 8 L14 8" opacity="0.5" />
          <path d="M3 5 Q8 7 13 5" opacity="0.6" />
          <path d="M3 11 Q8 9 13 11" opacity="0.6" />
        </svg>
      );
    case "levers":
      return (
        <svg {...common}>
          <path d="M2 5 L14 5" />
          <circle cx="5" cy="5" r="1.6" fill="var(--color-parchment)" />
          <path d="M2 11 L14 11" />
          <circle cx="10" cy="11" r="1.6" fill="var(--color-parchment)" />
        </svg>
      );
    case "axes":
      return (
        <svg {...common}>
          <path d="M2 8 L14 8" />
          <path d="M8 2 L8 14" />
          <circle cx="8" cy="8" r="2.4" />
        </svg>
      );
    case "matrix":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="12" height="12" />
          <path d="M8 2 L8 14" />
          <path d="M2 8 L14 8" />
        </svg>
      );
    case "scenarios":
      return (
        <svg {...common}>
          <circle cx="3" cy="8" r="1.2" />
          <path d="M4 8 L7 4" />
          <path d="M4 8 L7 8" />
          <path d="M4 8 L7 12" />
          <circle cx="8" cy="4" r="1" />
          <circle cx="8" cy="8" r="1" />
          <circle cx="8" cy="12" r="1" />
        </svg>
      );
    case "directory":
      return (
        <svg {...common}>
          <path d="M3 4 L13 4" />
          <path d="M3 8 L13 8" />
          <path d="M3 12 L13 12" />
          <circle cx="3" cy="4" r="0.8" fill="currentColor" />
          <circle cx="3" cy="8" r="0.8" fill="currentColor" />
          <circle cx="3" cy="12" r="0.8" fill="currentColor" />
        </svg>
      );
    case "positions":
      return (
        <svg {...common}>
          <path d="M2 8 L8 2 L14 2 L14 8 L8 14 Z" />
          <circle cx="11" cy="5" r="0.9" fill="currentColor" />
        </svg>
      );
    case "pdoom":
      return (
        <svg {...common}>
          <circle cx="5" cy="5" r="1.5" />
          <circle cx="11" cy="11" r="1.5" />
          <path d="M3 13 L13 3" />
        </svg>
      );
    case "timelines":
      return (
        <svg {...common}>
          <path d="M2 8 L14 8" />
          <path d="M5 6 L5 10" />
          <path d="M8 6 L8 10" />
          <path d="M11 6 L11 10" />
          <path d="M12 6 L14 8 L12 10" />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="6" />
          <path d="M8 2 L8 8 L13 11" />
        </svg>
      );
    case "identity":
      return (
        <svg {...common}>
          <path d="M3 12 L7 4 L7 12 Z" opacity="0.7" />
          <path d="M9 12 L13 4 L13 12 Z" opacity="0.7" />
          <path d="M2 13 L14 13" />
        </svg>
      );
    case "commitments":
      return (
        <svg {...common}>
          <path d="M3 4 L11 4 L13 6 L13 13 L3 13 Z" />
          <path d="M5 8 L11 8" />
          <path d="M5 11 L9 11" />
        </svg>
      );
  }
}

function AtlasMark() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: 36,
        height: 36,
        border: "1px solid var(--color-rule)",
        background: "var(--color-parchment-soft)",
      }}
    >
      <svg viewBox="0 0 32 32" width="24" height="24">
        <g
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 6 L7 26" />
          <path d="M16 6 L25 26" />
          <path d="M11 17 Q16 19 21 17" opacity="0.45" strokeWidth="1.1" />
        </g>
        <circle cx="16" cy="6" r="2" fill="var(--color-ink)" />
        <circle cx="7" cy="26" r="1.3" fill="var(--color-ink)" />
        <circle cx="25" cy="26" r="1.3" fill="var(--color-ink)" />
      </svg>
    </span>
  );
}
