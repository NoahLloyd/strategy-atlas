# AGI Strategies

A citation-backed map of who believes what about AGI.

Live at **[agi-strategies.com](https://agi-strategies.com)**.

## What it is

A repository of AI/AGI strategy positions held by researchers, executives, policymakers, and public figures — every claim links back to a primary source. The site lets you explore:

- **People** — individual profiles with positions, quotes, p(doom), and timelines
- **Strategies** — pause, alignment-first, acceleration, and dozens more
- **Levers** — the dimensions strategies vary on (speed, concentration, control mechanism, …)
- **Atlas / Matrix / Compare** — different ways to slice the same data
- **p(doom) and timelines** — aggregated views of stated probabilities and AGI ETAs

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, mostly SSG)
- React 19
- Tailwind CSS v4
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

The dev server uses `--turbopack` and bumps Node's heap to 12 GB; the people dataset is large.

```bash
bun run build       # production build
bun run lint        # eslint
bun run dev:fresh   # wipe .next and start dev clean
```

## Project layout

```
src/
  app/        Next.js routes
  components/ shared UI
  lib/
    people.ts          people dataset (server-only barrel)
    strategies.ts      strategy definitions
    strategy-tags.ts   tag taxonomy
    types.ts           shared types
```
