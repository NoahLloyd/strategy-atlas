import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hold the dev-server router cache briefly so a quick succession of
  // navigations does not force fresh compilation on every click. Without
  // this, hot navigation across pages while parallel data files are being
  // edited can leave Turbopack with a stale module graph and 500 the next
  // request.
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
    // Drop the bulky people module bundle from the per-page dev cache
    // sooner. The 36k-line people-*.ts barrel import is what was pushing
    // the dev server toward OOM after a few navigations.
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
