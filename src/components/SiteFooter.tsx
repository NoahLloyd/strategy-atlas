export function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div
        className="max-w-6xl mx-auto px-6 py-8 text-sm flex flex-wrap gap-6 justify-between"
        style={{ fontFamily: "var(--font-ui)", color: "var(--color-ink-soft)" }}
      >
        <div className="max-w-md">
          <p className="mb-2">
            Who believes what about AGI. A citation-backed repository of strategy
            positions held by researchers, executives, policymakers, and public
            figures.
          </p>
          <p className="text-xs opacity-70">
            Every claim links to a primary source. Videos are timestamped to the
            exact moment the person said it. Nothing is paraphrased without
            marking.
          </p>
        </div>
        <div className="text-xs">
          <p className="num-label">method</p>
          <p>Person-indexed. Strategy tags emerge from the data, not the other way round.</p>
          <p>Each quote has a date, medium, and direct link.</p>
        </div>
      </div>
    </footer>
  );
}
