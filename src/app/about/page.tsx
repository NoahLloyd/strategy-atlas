import { people, hasStatedPosition } from "@/lib/people";

export const metadata = {
  title: "About · AGI Strategies",
  description:
    "How this corpus was built and how to send corrections.",
};

export default function AboutPage() {
  const stated = people.filter(hasStatedPosition).length;
  const tentativeOnly = people.length - stated;
  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
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
