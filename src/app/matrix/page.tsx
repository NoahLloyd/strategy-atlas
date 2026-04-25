import Link from "next/link";
import {
  strategies,
  symmetricConflicts,
  symmetricComplements,
  pairKey,
  relationBetween,
} from "@/lib/strategies";
import { levers, leverById } from "@/data/levers";
import { HoverStrategyLink } from "@/components/HoverStrategyLink";
import type { LeverId, Strategy } from "@/lib/types";
import { mechanismForPair, mechanismCatalogue } from "@/lib/mechanism";

export const metadata = {
  title: "Matrix · AGI Strategies",
};

export default function MatrixPage() {
  const conflicts = symmetricConflicts();
  const complements = symmetricComplements();

  const sorted = sortStrategiesByLever(strategies);

  const leverGroups: { lever: LeverId; items: Strategy[] }[] = levers
    .map((l) => ({
      lever: l.id,
      items: sorted.filter((s) => s.primaryLever === l.id),
    }))
    .filter((g) => g.items.length > 0);

  const totalPairs = (strategies.length * (strategies.length - 1)) / 2;
  const conflictCount = conflicts.size;
  const complementCount = complements.size;

  let sameLeverCount = 0;
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const rel = relationBetween(sorted[i], sorted[j], conflicts, complements);
      if (rel === "same-lever") sameLeverCount++;
    }
  }
  const noneCount = totalPairs - conflictCount - complementCount - sameLeverCount;

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-10">
      <section className="mb-10 max-w-3xl">
        <p className="num-label mb-3">matrix</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Every pair, every relation.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          The {strategies.length} catalogued strategies form{" "}
          <strong>{totalPairs.toLocaleString()}</strong> unordered pairs.
          Each cell names the relation between a row and a column.
        </p>
        <ul className="text-sm space-y-1" style={{ color: "var(--color-ink-soft)" }}>
          <li className="flex items-center gap-3">
            <CellSwatch kind="conflict" />
            <span>
              <strong style={{ color: "var(--color-conflict)" }}>Conflict</strong>{" "}
              ({conflictCount}): same lever, opposite direction.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CellSwatch kind="complement" />
            <span>
              <strong style={{ color: "var(--color-complement)" }}>Complement</strong>{" "}
              ({complementCount}): different levers, mutually reinforcing.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CellSwatch kind="same-lever" />
            <span>
              <strong>Same-lever twin</strong> ({sameLeverCount}): same lever,
              same direction. Pulling together, often double-counting.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CellSwatch kind="none" />
            <span>
              <strong>No named relation</strong> ({noneCount}): different
              levers, no explicit complement. Most pairs live here.
            </span>
          </li>
        </ul>
        <p
          className="text-sm italic mt-4"
          style={{ color: "var(--color-ink-soft)" }}
        >
          The relations below are <em>declared</em> in the catalogue. For
          the counterpart (pairs people <em>actually</em> hold together), see{" "}
          <Link href="/co-strategies" className="underline-wiggle">
            /co-strategies
          </Link>
          .
        </p>
      </section>

      <MatrixGrid
        leverGroups={leverGroups}
        conflicts={conflicts}
        complements={complements}
      />

      <section className="mt-14 border-t-2 border-[var(--color-ink)] pt-8 max-w-4xl">
        <p className="num-label mb-2">mechanism taxonomy</p>
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How pairs combine, named.
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-ink-soft)" }}>
          A conflict or complement is not a single relation. Hovering any
          coloured cell in the matrix, or any chip on a strategy page, shows
          the mechanism by which that pair relates. The vocabulary:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {mechanismCatalogue.map((m) => (
            <div
              key={m.id}
              className={`border hairline p-4 ${
                m.kind === "conflict"
                  ? "is-conflict"
                  : m.kind === "complement"
                  ? "is-complement"
                  : "is-same-lever"
              } matrix-cell`}
              style={{ minHeight: 0 }}
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3
                  className="text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.label}
                </h3>
                <span
                  className="num-label text-[10px]"
                  style={{
                    color:
                      m.kind === "conflict"
                        ? "var(--color-conflict)"
                        : m.kind === "complement"
                        ? "var(--color-complement)"
                        : "var(--color-ink-soft)",
                  }}
                >
                  {m.kind}
                </span>
              </div>
              <p
                className="text-xs mb-2"
                style={{ color: "var(--color-ink)" }}
              >
                {m.short}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {m.explain}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t hairline pt-6 text-sm max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <p className="mb-2">
          Conflicts are strict: same lever pulled in opposite directions (same
          lever, same direction is reinforcing, not conflicting). Complements
          are judgement calls catalogued in each strategy note.
        </p>
        <p>
          Read the matrix in blocks. Each lever band is a cluster of strategies
          making the same kind of bet; within the band the only relations are
          conflict (opposite pulls), same-lever twin (same pull), or none.
          Cross-band cells show how the field composes.
        </p>
      </section>
    </div>
  );
}

function sortStrategiesByLever(list: Strategy[]): Strategy[] {
  const leverIndex: Record<string, number> = {};
  levers.forEach((l, i) => (leverIndex[l.id] = i));
  const directionOrder: Record<string, number> = { "+": 0, neutral: 1, "-": 2 };
  return [...list].sort((a, b) => {
    const la = leverIndex[a.primaryLever] ?? 99;
    const lb = leverIndex[b.primaryLever] ?? 99;
    if (la !== lb) return la - lb;
    const da = directionOrder[a.leverDirection] ?? 9;
    const db = directionOrder[b.leverDirection] ?? 9;
    if (da !== db) return da - db;
    return a.name.localeCompare(b.name);
  });
}

function MatrixGrid({
  leverGroups,
  conflicts,
  complements,
}: {
  leverGroups: { lever: LeverId; items: Strategy[] }[];
  conflicts: Set<string>;
  complements: Set<string>;
}) {
  const flat = leverGroups.flatMap((g) => g.items);

  return (
    <div className="overflow-x-auto border hairline">
      <table className="border-collapse text-[10px]" style={{ fontFamily: "var(--font-ui)" }}>
        <thead>
          <tr>
            <th className="sticky left-0 bg-[var(--color-parchment)] z-10" />
            {leverGroups.map((g) => (
              <th
                key={`head-${g.lever}`}
                colSpan={g.items.length}
                className="border-b hairline text-left px-1 py-1 bg-[var(--color-parchment-soft)]"
              >
                <span className="num-label text-[10px]">
                  {leverById[g.lever]?.name}
                </span>
              </th>
            ))}
          </tr>
          <tr>
            <th className="sticky left-0 bg-[var(--color-parchment)] z-10" />
            {flat.map((s) => (
              <th
                key={`col-${s.id}`}
                className="border-b hairline align-bottom text-left font-normal"
                style={{
                  height: "180px",
                  width: "18px",
                  minWidth: "18px",
                  maxWidth: "18px",
                }}
              >
                <HoverStrategyLink strategy={s} placement="below">
                  <span
                    className="block"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      whiteSpace: "nowrap",
                      padding: "2px 3px",
                    }}
                  >
                    {s.name}
                  </span>
                </HoverStrategyLink>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leverGroups.flatMap((rowGroup) =>
            rowGroup.items.map((rowStrat, rowIdx) => {
              const firstInBand = rowIdx === 0;
              return (
                <tr key={`row-${rowStrat.id}`}>
                  <th
                    className={`sticky left-0 bg-[var(--color-parchment)] z-10 border-r hairline text-left font-normal pr-2 pl-2 whitespace-nowrap ${
                      firstInBand ? "border-t-2 border-t-[var(--color-ink)]" : ""
                    }`}
                    style={{ maxWidth: "210px", height: "18px" }}
                  >
                    <HoverStrategyLink strategy={rowStrat} placement="right">
                      <span className="hover:underline block">
                        <span className="num-label mr-1 text-[9px]">
                          {leverDirSymbol(rowStrat.leverDirection)}
                        </span>
                        {rowStrat.name}
                      </span>
                    </HoverStrategyLink>
                  </th>
                  {flat.map((colStrat) => {
                    if (rowStrat.id === colStrat.id) {
                      return (
                        <td
                          key={`${rowStrat.id}::${colStrat.id}`}
                          className="matrix-cell is-self"
                          style={{ padding: 0, minHeight: 0, height: "18px", width: "18px" }}
                          title="self"
                        />
                      );
                    }
                    const key = pairKey(rowStrat.id, colStrat.id);
                    let kind: "conflict" | "complement" | "same-lever" | "none" = "none";
                    if (conflicts.has(key)) kind = "conflict";
                    else if (complements.has(key)) kind = "complement";
                    else if (
                      rowStrat.primaryLever === colStrat.primaryLever &&
                      rowStrat.leverDirection === colStrat.leverDirection
                    )
                      kind = "same-lever";
                    const mechLabel =
                      kind === "none"
                        ? "no named relation"
                        : mechanismForPair(rowStrat, colStrat, kind).label;
                    return (
                      <td
                        key={`${rowStrat.id}::${colStrat.id}`}
                        className={`matrix-cell ${
                          kind === "conflict"
                            ? "is-conflict"
                            : kind === "complement"
                            ? "is-complement"
                            : kind === "same-lever"
                            ? "is-same-lever"
                            : ""
                        }`}
                        style={{ padding: 0, minHeight: 0, height: "18px", width: "18px" }}
                        title={`${rowStrat.name} × ${colStrat.name}, ${mechLabel}`}
                      />
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

function leverDirSymbol(d: string): string {
  if (d === "+") return "↑";
  if (d === "-") return "↓";
  return "•";
}

function kindLabel(k: string): string {
  if (k === "conflict") return "conflict (same lever, opposite)";
  if (k === "complement") return "complement";
  if (k === "same-lever") return "same lever, same direction";
  return "no named relation";
}

function CellSwatch({
  kind,
}: {
  kind: "conflict" | "complement" | "same-lever" | "none";
}) {
  return (
    <span
      className={`inline-block border hairline ${
        kind === "conflict"
          ? "is-conflict"
          : kind === "complement"
          ? "is-complement"
          : kind === "same-lever"
          ? "is-same-lever"
          : ""
      } matrix-cell`}
      style={{ width: "18px", height: "18px", padding: 0, minHeight: 0 }}
    />
  );
}
