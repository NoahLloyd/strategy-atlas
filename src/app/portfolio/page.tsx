import { strategies } from "@/lib/strategies";
import { levers } from "@/data/levers";
import { portfolios } from "@/data/portfolios";
import { PortfolioAudit } from "./PortfolioAudit";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Portfolio audit: stack-test an AGI strategy combination",
  description:
    "Pick an AGI strategy portfolio. The audit reads it in lever space: coverage, concentration on the dominant lever, world-side vs AI-side balance, coercion mix, and hidden conflicts.",
  path: "/portfolio",
  keywords: [
    "AGI portfolio audit",
    "AI strategy portfolio",
    "stack test AI strategies",
    "AI safety portfolio",
    "AI policy portfolio",
    "AGI strategy concentration",
    "AI safety lever coverage",
  ],
  imageAlt: "Portfolio audit — stack-test AGI strategies",
});

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "AGI strategy portfolio audit",
            description:
              "Stack-test a strategy combination in lever space.",
            path: "/portfolio",
            type: "WebPage",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Portfolio audit", path: "/portfolio" },
        ]}
      />
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">portfolio audit</p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pick a portfolio. Find the hidden concentration.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          Most named portfolios claim to be hybrid. Most actually concentrate on
          three or four of the {levers.length} levers, while leaving the rest
          empty. The audit reads a portfolio in lever space.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Load a preset, or build your own. For each portfolio the audit
          reports: lever coverage, concentration on the dominant lever,
          world-side versus AI-side balance, coercion mix, and any strategies
          that pull the same lever in opposite directions.
        </p>
      </section>

      <PortfolioAudit
        allStrategies={strategies}
        levers={levers}
        presets={portfolios}
      />
    </div>
  );
}
