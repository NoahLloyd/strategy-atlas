import Link from "next/link";
import { levers } from "@/data/levers";
import { strategiesByLever } from "@/lib/strategies";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "AGI strategy levers: speed, concentration, control, governance",
  description:
    "The 15 dimensional levers AGI strategies pull on. Speed, concentration, scope, institutional capacity, and more. Crowded levers reveal where the field is double-counting.",
  path: "/levers",
  keywords: [
    "AGI strategy levers",
    "AI safety levers",
    "AI policy levers",
    "AI compute lever",
    "AI speed lever",
    "AI governance levers",
    "AI control mechanisms",
    "AI institutional capacity",
    "AI safety dimensions",
  ],
  imageAlt: "The 15 strategic levers AGI strategies pull",
});

export default function LeversIndex() {
  const byLever = strategiesByLever();
  const maxCount = Math.max(1, ...levers.map((l) => (byLever[l.id] || []).length));

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "AGI strategy levers",
            description:
              "The 15 control levers strategies for AGI safety and policy operate on.",
            path: "/levers",
            type: "CollectionPage",
          }),
          itemListSchema({
            name: "AGI strategy levers",
            description:
              "Every lever AGI strategies pull, with descriptions and class.",
            path: "/levers",
            items: levers.map((l) => ({
              name: l.name,
              path: `/levers/${l.id}`,
              description: l.description,
            })),
            itemType: "DefinedTerm",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Levers", path: "/levers" },
        ]}
      />
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">levers</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The levers strategies pull.
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          A strategy has a primary lever and usually secondary ones. Two strategies
          combine when their primary levers differ; they conflict when their primary
          levers coincide and they pull opposite directions. Crowded levers indicate
          where the field is double-counting; thin levers indicate open space.
        </p>
      </section>

      <div className="space-y-2">
        {levers.map((lever) => {
          const count = (byLever[lever.id] || []).length;
          const widthPct = (count / maxCount) * 100;
          return (
            <Link href={`/levers/${lever.id}`} key={lever.id} className="unstyled block group">
              <div className="border hairline p-4 hover:border-[var(--color-ink)] transition-colors">
                <div className="flex items-baseline justify-between mb-2">
                  <h2
                    className="text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {lever.name}
                  </h2>
                  <span className="num-label">
                    {count} strateg{count === 1 ? "y" : "ies"} · {lever.class.replace("-", " ")}
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--color-ink-soft)" }}>
                  {lever.description}
                </p>
                <div className="h-1 bg-[var(--color-parchment-soft)] relative">
                  <div
                    className="h-full bg-[var(--color-ink)] transition-all"
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs opacity-70 font-mono">
                  <span>↓ {lever.negativePull}</span>
                  <span>{lever.positivePull} ↑</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
