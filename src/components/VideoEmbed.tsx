import type { Source } from "@/lib/people-types";

export function VideoEmbed({ source }: { source: Source }) {
  if (!source.videoId) return null;
  if (source.videoPlatform === "youtube" || !source.videoPlatform) {
    const params = new URLSearchParams();
    if (source.startSeconds !== undefined) {
      params.set("start", String(source.startSeconds));
    }
    if (source.endSeconds !== undefined) {
      params.set("end", String(source.endSeconds));
    }
    params.set("rel", "0");
    params.set("modestbranding", "1");
    const src = `https://www.youtube-nocookie.com/embed/${source.videoId}?${params.toString()}`;
    return (
      <div
        className="relative w-full overflow-hidden hairline border"
        style={{ paddingTop: "56.25%", background: "var(--color-parchment-soft)" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title={source.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }
  if (source.videoPlatform === "vimeo") {
    const params = new URLSearchParams();
    if (source.startSeconds !== undefined) {
      params.set("t", `${source.startSeconds}s`);
    }
    const src = `https://player.vimeo.com/video/${source.videoId}?${params.toString()}`;
    return (
      <div
        className="relative w-full overflow-hidden hairline border"
        style={{ paddingTop: "56.25%", background: "var(--color-parchment-soft)" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title={source.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }
  return null;
}

export function formatTimestamp(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}
