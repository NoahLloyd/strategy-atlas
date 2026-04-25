"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("agi-strategies-theme");
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem("agi-strategies-theme", next);
    } catch {
      // ignore storage errors
    }
  };

  const showDark = mounted ? theme === "dark" : false;
  return (
    <button
      onClick={toggle}
      aria-label={showDark ? "switch to light mode" : "switch to dark mode"}
      className="unstyled hover:text-[var(--color-ink)] inline-flex items-center justify-center"
      style={{
        width: 28,
        height: 28,
        color: "var(--color-ink-soft)",
        lineHeight: 1,
      }}
      suppressHydrationWarning
    >
      {showDark ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="8" r="3.2" />
          <path d="M8 1.5 L8 3" />
          <path d="M8 13 L8 14.5" />
          <path d="M1.5 8 L3 8" />
          <path d="M13 8 L14.5 8" />
          <path d="M3.3 3.3 L4.4 4.4" />
          <path d="M11.6 11.6 L12.7 12.7" />
          <path d="M3.3 12.7 L4.4 11.6" />
          <path d="M11.6 4.4 L12.7 3.3" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-hidden
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13.2 9.5 A5.5 5.5 0 1 1 6.5 2.8 A4.4 4.4 0 0 0 13.2 9.5 Z" />
        </svg>
      )}
    </button>
  );
}
