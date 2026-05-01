import { people, hasStatedPosition } from "@/lib/people";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "About: how the AGI strategy map was built",
  description:
    "Methodology behind a citation-backed map of AI safety strategies. How positions are sourced, what tentative means, and how to send corrections.",
  path: "/about",
  keywords: [
    "AGI Strategies methodology",
    "AI safety database methodology",
    "how AI safety map was built",
    "Claude Code research",
    "AI strategy citation methodology",
  ],
  imageAlt: "About the AGI Strategies map",
});

export default function AboutPage() {
  const stated = people.filter(hasStatedPosition).length;
  const tentativeOnly = people.length - stated;
  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: "About AGI Strategies",
            description:
              "How the corpus was built and how to send corrections.",
            path: "/about",
            type: "AboutPage",
          }),
          faqSchema([
            {
              question: "How was AGI Strategies built?",
              answer: `Claude Code, running in a directed-research loop, did the strategy survey, tagged people to positions, drafted the analysis, and wrote the front-end. The corpus currently holds ${people.length} people, every claim source-linked.`,
            },
            {
              question: "What does “tentative” mean on a person’s strategy assignment?",
              answer:
                "A tentative assignment is one inferred from a passing remark, hype quote, or paper abstract rather than a clear position statement. They render in dashed cards so the boundary is visible and a stronger primary source can replace them later.",
            },
            {
              question: "How do I send corrections?",
              answer:
                "Email n@noahlr.com with corrections, missing sources, or mis-attributed quotes. The corpus is expected to contain mistakes; corrections are welcomed.",
            },
            {
              question: "Are positions assigned from a checklist?",
              answer:
                "No. Strategy tags are inductive — they are read off what people argue, not assigned from a framework checklist. Tags evolve as the corpus grows.",
            },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <section className="mb-10">
        <p className="num-label mb-3">about</p>
        <h1
          className="text-4xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How this was built.
        </h1>
        <p
          className="text-lg leading-relaxed mb-4"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Claude Code, running for several days in a directed-research
          loop, did the strategy survey, tagged people to positions,
          drafted the analysis, and wrote the front-end. The corpus
          currently holds <strong>{people.length}</strong> people, every
          claim source-linked.
        </p>
        <p
          className="text-base leading-relaxed mb-4"
          style={{ color: "var(--color-ink-soft)" }}
        >
          A label is only as good as its source. Of the {people.length}{" "}
          people, <strong>{stated}</strong> have at least one strategy
          assignment backed by a primary-source position statement. The
          other <strong>{tentativeOnly}</strong> are flagged{" "}
          <em>tentative</em>: the assignment was inferred from a passing
          remark, hype quote, or paper abstract rather than a stated
          position. They render in dashed cards below a divider on the
          people directory so the boundary is visible.
        </p>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Corrections, missing sources, and mis-attributed quotes are
          expected. Email{" "}
          <a
            href="mailto:n@noahlr.com"
            className="underline-wiggle"
          >
            n@noahlr.com
          </a>{" "}
          for feedback or to flag anything wrong.
        </p>
      </section>
    </article>
  );
}
