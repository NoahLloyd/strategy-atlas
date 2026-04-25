"use client";

import { useEffect } from "react";

// Top-level error boundary. In dev, when Turbopack's module graph goes
// stale after rapid edits, the request 500s. Surfacing a retry button
// here turns that recoverable hiccup into a soft refresh instead of
// dumping the user on a bare "Internal server error" page.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("[error.tsx] page render failed:", error);
    }
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <p className="num-label mb-3">page render failed</p>
      <h1
        className="text-3xl mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Something broke loading this page.
      </h1>
      <p className="text-base mb-6" style={{ color: "var(--color-ink-soft)" }}>
        In dev, this usually means the bundler graph went stale after a
        recent file edit. Try once, then a hard refresh.
      </p>
      <div className="flex gap-3">
        <button onClick={reset} className="chip is-complement">
          Try again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="chip"
        >
          Hard refresh
        </button>
      </div>
      {error.digest && (
        <p
          className="text-xs mt-6"
          style={{
            color: "var(--color-ink-soft)",
            fontFamily: "var(--font-mono)",
          }}
        >
          digest: {error.digest}
        </p>
      )}
    </div>
  );
}
