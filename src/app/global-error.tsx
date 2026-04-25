"use client";

// Catches errors that crash the root layout itself (above the regular
// error.tsx boundary). Replaces the bare browser "Internal server error"
// with a recoverable retry surface so a dev hot-reload glitch is not a
// dead end.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          fontFamily:
            "ui-serif, Georgia, 'Times New Roman', serif",
          padding: "4rem 2rem",
          maxWidth: 640,
          margin: "0 auto",
          background: "#f5f1e8",
          color: "#1a1714",
          minHeight: "100vh",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          page render failed
        </p>
        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
          Something broke loading this page.
        </h1>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.5 }}>
          The dev bundler likely needs to recompile. Try once, then a hard
          refresh, then (if it persists) restart the dev server.
        </p>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            onClick={reset}
            style={{
              padding: "0.4rem 0.75rem",
              border: "1px solid #1a1714",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "0.85rem",
            }}
          >
            Try again
          </button>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.4rem 0.75rem",
              border: "1px solid #1a1714",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "0.85rem",
            }}
          >
            Hard refresh
          </button>
        </div>
      </body>
    </html>
  );
}
