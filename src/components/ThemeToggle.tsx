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

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "switch to light mode" : "switch to dark mode"}
      className="unstyled num-label hover:text-[var(--color-ink)]"
      style={{ fontFamily: "var(--font-ui)" }}
      suppressHydrationWarning
    >
      {mounted ? (theme === "dark" ? "☀ light" : "☾ dark") : "☾ dark"}
    </button>
  );
}
