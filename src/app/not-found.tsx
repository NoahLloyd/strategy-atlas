import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
  description: "The page you are looking for does not exist on AGI Strategies.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="num-label mb-4">404</p>
      <h1
        className="text-4xl sm:text-5xl leading-tight mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Not on the map.
      </h1>
      <p
        className="text-lg leading-relaxed mb-6 max-w-2xl"
        style={{ color: "var(--color-ink-soft)" }}
      >
        This page is not in the corpus. The slug may have changed, the entity
        may not exist yet, or the link may be broken. The atlas, the people
        directory, and the strategy index are good places to start.
      </p>
      <ul className="flex flex-wrap gap-3 text-sm">
        <li>
          <Link href="/" className="chip is-complement">
            Home
          </Link>
        </li>
        <li>
          <Link href="/atlas" className="chip">
            Atlas
          </Link>
        </li>
        <li>
          <Link href="/people" className="chip">
            People
          </Link>
        </li>
        <li>
          <Link href="/strategies" className="chip">
            Strategies
          </Link>
        </li>
        <li>
          <Link href="/levers" className="chip">
            Levers
          </Link>
        </li>
        <li>
          <Link href="/about" className="chip">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
