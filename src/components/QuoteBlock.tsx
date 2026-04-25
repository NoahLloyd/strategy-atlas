import type { Quote } from "@/lib/people-types";
import { VideoEmbed, formatTimestamp } from "./VideoEmbed";

function fidelityLabel(f: Quote["fidelity"]) {
  switch (f) {
    case "direct":
      return "direct quote";
    case "paraphrase-faithful":
      return "faithful paraphrase";
    case "paraphrase-loose":
      return "loose paraphrase";
    case "summary":
      return "summary";
  }
}

function mediumIcon(m: Quote["source"]["medium"]) {
  switch (m) {
    case "video":
      return "▶";
    case "podcast":
      return "♪";
    case "article":
      return "¶";
    case "paper":
      return "§";
    case "book":
      return "❧";
    case "tweet":
      return "≡";
    case "testimony":
      return "⚖";
    case "blog":
      return "✍";
    case "talk":
      return "✣";
    case "interview-transcript":
      return "☿";
  }
}

export function QuoteBlock({ quote }: { quote: Quote }) {
  const { source } = quote;
  const tsLabel =
    source.startSeconds !== undefined
      ? formatTimestamp(source.startSeconds)
      : undefined;
  return (
    <figure className="border-l-2 pl-4 py-1" style={{ borderColor: "var(--color-accent)" }}>
      <blockquote
        className="text-base leading-relaxed mb-2"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {quote.fidelity === "direct" ? `“${quote.text}”` : quote.text}
      </blockquote>
      {quote.context && (
        <p className="text-xs italic mb-2" style={{ color: "var(--color-ink-soft)" }}>
          Context: {quote.context}
        </p>
      )}
      <figcaption className="flex flex-wrap gap-x-3 gap-y-1 text-xs items-baseline" style={{ color: "var(--color-ink-soft)" }}>
        <span className="num-label">{mediumIcon(source.medium)} {source.medium}</span>
        <span>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-wiggle"
          >
            {source.title}
          </a>
        </span>
        {source.publisher && <span>· {source.publisher}</span>}
        {(quote.date || source.date) && <span>· {quote.date ?? source.date}</span>}
        {tsLabel && (
          <span className="num-label">
            @ {tsLabel}
            {source.endSeconds !== undefined && `–${formatTimestamp(source.endSeconds)}`}
          </span>
        )}
        <span className="num-label">· {fidelityLabel(quote.fidelity)}</span>
        {source.archiveUrl && (
          <a
            href={source.archiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="num-label underline-wiggle"
          >
            archive
          </a>
        )}
      </figcaption>
      {source.medium === "video" && source.videoId && (
        <div className="mt-3">
          <VideoEmbed source={source} />
        </div>
      )}
    </figure>
  );
}
