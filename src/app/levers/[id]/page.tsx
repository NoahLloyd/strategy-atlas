import Link from "next/link";
import { notFound } from "next/navigation";
import { levers, leverById } from "@/data/levers";
import { strategiesByLever } from "@/lib/strategies";
import { StrategyCard } from "@/components/StrategyCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, clamp } from "@/lib/seo";
import {
  leverDefinedTermSchema,
  webPageSchema,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return levers.map((l) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lever = leverById[id];
  if (!lever) {
    return buildMetadata({
      title: "Lever not found",
      description: "The requested AGI strategy lever does not exist.",
      path: `/levers/${id}`,
      noIndex: true,
    });
  }
  const description = clamp(
    `${lever.description} Strategies pulling ↑ ${lever.positivePull} or ↓ ${lever.negativePull}. ${lever.class.replace("-", " ")} lever.`,
    160,
  );
  return buildMetadata({
    title: `${lever.name}: an AGI strategy lever`,
    description,
    path: `/levers/${lever.id}`,
    keywords: [
      lever.name,
      `${lever.name} lever`,
      `${lever.name} AI safety`,
      lever.class.replace("-", " "),
      "AGI strategy lever",
      "AI safety lever",
      "AI policy lever",
      "AI alignment",
    ],
    imageAlt: `${lever.name} — strategy lever on AGI Strategies`,
  });
}

export default async function LeverPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lever = leverById[id];
  if (!lever) notFound();
  const byLever = strategiesByLever();
  const list = byLever[lever.id] || [];

  const up = list.filter((s) => s.leverDirection === "+");
  const down = list.filter((s) => s.leverDirection === "-");
  const neutral = list.filter((s) => s.leverDirection === "neutral");

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          leverDefinedTermSchema({
            id: lever.id,
            name: lever.name,
            description: lever.description,
          }),
          webPageSchema({
            name: `${lever.name} — AGI strategy lever`,
            description: lever.description,
            path: `/levers/${lever.id}`,
            type: "WebPage",
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Levers", path: "/levers" },
          { name: lever.name, path: `/levers/${lever.id}` },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <p className="num-label mb-2">{lever.class.replace("-", " ")} lever</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {lever.name}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          {lever.description}
        </p>
      </header>

      {up.length > 0 && down.length > 0 && (
        <section className="mb-10 border-y-2 border-[var(--color-ink)] py-4">
          <p className="num-label mb-2">Conflict surface</p>
          <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
            This lever has strategies pulling in both directions. Any portfolio
            that includes one of each is in tension; the combination cannot be
            honestly pursued simultaneously.
          </p>
        </section>
      )}

      {up.length > 0 && (
        <DirectionBlock label={`↑  ${lever.positivePull}`} items={up} />
      )}
      {down.length > 0 && (
        <DirectionBlock label={`↓  ${lever.negativePull}`} items={down} />
      )}
      {neutral.length > 0 && (
        <DirectionBlock label={`•  Neutral`} items={neutral} />
      )}

      {list.length === 0 && (
        <p className="text-sm italic" style={{ color: "var(--color-ink-soft)" }}>
          No strategies have this as their primary lever.
        </p>
      )}
    </div>
  );
}

function DirectionBlock({
  label,
  items,
}: {
  label: string;
  items: ReturnType<typeof strategiesByLever>[keyof ReturnType<typeof strategiesByLever>];
}) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <StrategyCard key={s.id} strategy={s} />
        ))}
      </div>
    </section>
  );
}
