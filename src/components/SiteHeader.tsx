import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/people", label: "People" },
  { href: "/strategies", label: "Strategies" },
  { href: "/pdoom", label: "p(doom)" },
  { href: "/timelines", label: "Timelines" },
  { href: "/atlas", label: "Atlas" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b hairline">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-end justify-between gap-6 flex-wrap">
        <Link href="/" className="unstyled">
          <div className="flex items-baseline gap-3">
            <AtlasMark />
            <span
              className="text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              AGI Strategies
            </span>
            <span className="num-label hidden sm:inline">
              who believes what
            </span>
          </div>
        </Link>
        <nav
          className="flex gap-5 text-[0.85rem] items-baseline"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="unstyled hover:underline">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

/**
 * A compass-rose signet. Each of the four principal rays stands for one way
 * strategies combine: up for stage-sequenced, right for cross-side bridge,
 * down for same-lever reinforce, left for frame opposition. Decorative.
 */
function AtlasMark() {
  return (
    <span
      aria-hidden
      className="inline-block align-middle"
      style={{ width: "22px", height: "22px" }}
    >
      <svg viewBox="0 0 40 40" width="22" height="22">
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1"
        />
        <circle cx="20" cy="20" r="1.5" fill="var(--color-ink)" />
        <path
          d="M20 3 L22 20 L20 37 L18 20 Z"
          fill="var(--color-ink)"
          opacity="0.9"
        />
        <path
          d="M3 20 L20 18 L37 20 L20 22 Z"
          fill="var(--color-ink)"
          opacity="0.5"
        />
        <path
          d="M8 8 L20 19 L32 32 L21 21 Z"
          fill="var(--color-accent)"
          opacity="0.7"
        />
        <path
          d="M8 32 L19 20 L32 8 L21 19 Z"
          fill="var(--color-accent)"
          opacity="0.4"
        />
      </svg>
    </span>
  );
}
