import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

// next/font/google handles font loading with optimized self-hosting,
// avoids the layout.tsx-was-not-pages/_document.tsx ESLint warning,
// and exposes CSS variables we already reference in globals.css.
const fraunces = Fraunces({
  subsets: ["latin"],
  // Variable font: don't pin weight, let CSS pick from the available
  // axis range. SOFT and WONK aren't in the next/font axes list yet.
  axes: ["opsz"],
  variable: "--font-display-loaded",
  display: "swap",
});
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-loaded",
  display: "swap",
});
const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui-loaded",
  display: "swap",
});
const ibmSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGI Strategies — a map of AI safety macrostrategies",
  description:
    "A citation-backed repository of AI/AGI strategy positions held by researchers, executives, policymakers, and public figures. Every claim links to a primary source.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVariables = `${fraunces.variable} ${ibmMono.variable} ${ibmSans.variable} ${ibmSerif.variable}`;
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('agi-strategies-theme');
                if (!t) {
                  t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (t === 'dark') document.documentElement.classList.add('dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
