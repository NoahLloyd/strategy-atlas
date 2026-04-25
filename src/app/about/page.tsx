import Link from "next/link";
import { people } from "@/lib/people";

export const metadata = {
  title: "About — AGI Strategies",
  description:
    "What AGI Strategies is, how it is built, and what it is not.",
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <section className="mb-10">
        <p className="num-label mb-3">about</p>
        <h1
          className="text-4xl mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What this is, and what it is not.
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          A citation-backed repository of strategic positions on AI and AGI.
          Every claim on the site is tied to a named person, dated, and linked
          to a primary source. The corpus currently holds <strong>
            {people.length}
          </strong>{" "}
          people.
        </p>
      </section>

      <Section title="Why people-first.">
        <p className="mb-3">
          The AI debate has a recurring failure mode: a camp disagrees with
          another camp over a position that neither camp has actually taken.
          The discourse drifts into categories — &quot;doomer&quot;, &quot;accelerationist&quot;,
          &quot;ethicist&quot; — and the underlying argument gets lost in the
          taxonomy.
        </p>
        <p>
          This site is an attempt to reverse that. Start with the person,
          start with the exact thing they said, start with the date and the
          link. Categories are inductive: a strategy tag only exists if the
          corpus carries an argument for it, and tags will merge, split, and
          evolve as the corpus grows.
        </p>
      </Section>

      <Section title="How a person ends up here.">
        <p className="mb-3">
          A person is added when there is at least one primary source where
          they state a strategic position about AI. The source can be an
          article, paper, book, talk, tweet, podcast, video, or testimony —
          but it must be a primary source, and it must be linkable.
        </p>
        <p>
          Every quote is tagged by fidelity:
        </p>
        <ul className="list-disc list-inside space-y-1 my-3">
          <li><strong>direct</strong> — verbatim</li>
          <li><strong>paraphrase-faithful</strong> — the meaning is preserved</li>
          <li><strong>paraphrase-loose</strong> — the gist is there, the wording is ours</li>
          <li><strong>summary</strong> — our description of what they argued</li>
        </ul>
        <p>
          If a quote&apos;s fidelity is not marked, it is a bug. Flag it.
        </p>
      </Section>

      <Section title="Video timestamps.">
        <p>
          Where a quote comes from video, the video is embedded and cropped
          to the moment the person said it, using the YouTube <em>start</em>
          and <em>end</em> parameters or the equivalent on Vimeo. One click
          plays the exact segment. When we have not yet located the exact
          timestamp for a video-sourced quote, the embed plays from the
          beginning — that is a known imperfection of the current corpus.
        </p>
      </Section>

      <Section title="p(doom) and timelines.">
        <p className="mb-3">
          Two recurring comparative artefacts in the AI debate are <strong>
            p(doom)
          </strong>{" "}
          — the subjective probability a person assigns to civilisational
          catastrophe from AI — and <strong>timelines</strong> — when AGI or
          transformative AI arrives.
        </p>
        <p className="mb-3">
          Both are captured as separate fields on the person record, each with
          a date and source. The{" "}
          <Link href="/pdoom" className="underline-wiggle">p(doom) board</Link>{" "}
          and{" "}
          <Link href="/timelines" className="underline-wiggle">timelines page</Link>{" "}
          aggregate these.
        </p>
        <p>
          Definitions vary. A p(doom) of 10% can mean &quot;extinction within
          100 years&quot; or &quot;catastrophic outcomes within 30 years&quot;.
          A date claim only means what the person said it meant, on the date
          they said it. The entries link to sources so the definitions travel
          with the claim.
        </p>
      </Section>

      <Section title="Strategy tags.">
        <p className="mb-3">
          A tag is a handle for a recurring strategic claim — <em>pause</em>,{" "}
          <em>alignment-first</em>, <em>open-source</em>,{" "}
          <em>compute-governance</em>, and so on. Tags are inductive: if the
          corpus does not carry an argument for a tag, the tag does not
          exist here yet. Tags with one or two adherents may merge or split as
          data grows.
        </p>
        <p>
          A person&apos;s strategy positions are tagged by matching their
          arguments to this emerging taxonomy — not by asking the person what
          tag applies.
        </p>
      </Section>

      <Section title="What this is not.">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Not a ranking.</strong> A person with more quotes is
            better documented, not more important.
          </li>
          <li>
            <strong>Not an endorsement.</strong> Every strategy tag is
            represented; inclusion is not agreement.
          </li>
          <li>
            <strong>Not a debate.</strong> The site is a reference for what
            each person has said, not an argument for any particular position.
          </li>
          <li>
            <strong>Not settled.</strong> Tags will merge, split, and evolve
            as the corpus grows past 1000 people.
          </li>
          <li>
            <strong>Not a substitute for reading them.</strong> Every quote
            is a pointer. The site is only useful if you follow the links.
          </li>
        </ul>
      </Section>

      <Section title="Older framework view.">
        <p>
          A prior iteration of this project was a lever-by-lever map of named
          AI safety strategies, framework-first rather than person-first. That
          view is still available at{" "}
          <Link href="/atlas" className="underline-wiggle">/atlas</Link>.
          Expect that view to shrink as the person-first repository matures.
        </p>
      </Section>

      <section className="mt-16 border-t hairline pt-8 text-sm" style={{ color: "var(--color-ink-soft)" }}>
        <p>
          This is a reference project. Corrections, missing sources, and
          mis-attributed quotes are expected. Open an issue or reach out and
          we&apos;ll fix them.
        </p>
      </section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 border-t hairline pt-6">
      <h2 className="text-2xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>
      <div className="leading-relaxed" style={{ color: "var(--color-ink)" }}>
        {children}
      </div>
    </section>
  );
}
