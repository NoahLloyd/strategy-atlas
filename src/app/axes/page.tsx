import Link from "next/link";
import { axes } from "@/data/axes";
import { strategies } from "@/lib/strategies";
import { levers } from "@/data/levers";
import type { Strategy } from "@/lib/types";

export const metadata = {
  title: "Axes — AGI Strategies",
};

const axisKey: Record<string, keyof Strategy> = {
  "acts-on": "actsOn",
  coercion: "coercion",
  "actor-in-control": "actorInControl",
  "time-horizon": "timeHorizon",
  "legitimacy-source": "legitimacySource",
};

const horizons: { id: string; label: string }[] = [
  { id: "pre-transition", label: "pre" },
  { id: "during-transition", label: "during" },
  { id: "post-transition", label: "post" },
  { id: "horizon-neutral", label: "neutral" },
];

function DensityMap() {
  const grid: Record<string, Record<string, Strategy[]>> = {};
  for (const l of levers) {
    grid[l.id] = {};
    for (const h of horizons) grid[l.id][h.id] = [];
  }
  for (const s of strategies) {
    if (grid[s.primaryLever] && grid[s.primaryLever][s.timeHorizon]) {
      grid[s.primaryLever][s.timeHorizon].push(s);
    }
  }

  const allCounts: number[] = [];
  for (const l of levers) {
    for (const h of horizons) allCounts.push(grid[l.id][h.id].length);
  }
  const max = Math.max(1, ...allCounts);

  const emptyCells = allCounts.filter((n) => n === 0).length;
  const thickCells = allCounts.filter((n) => n >= 4).length;
  const totalCells = allCounts.length;

  return (
    <section className="mt-20 border-t-2 border-[var(--color-ink)] pt-8">
      <p className="num-label mb-2">density map</p>
      <h2 className="text-3xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Where the field has explored — and where it has not.
      </h2>
      <p className="text-base leading-relaxed mb-2 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        Each cell is one lever crossed with one time horizon. A thick cell
        means many strategies make that kind of bet at that stage of the
        transition. An empty cell is either an unexplored region or a
        structural no-go.
      </p>
      <p className="text-sm mb-6 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <span style={{ color: "var(--color-ink)" }}>{thickCells}</span>{" "}
        thick cells (4+ strategies),{" "}
        <span style={{ color: "var(--color-ink)" }}>{emptyCells}</span>{" "}
        empty cells of {totalCells} — marginal returns to new strategy
        invention are higher in the empty cells than in the crowded ones.
      </p>

      <div className="overflow-x-auto border hairline">
        <table className="border-collapse text-xs w-full" style={{ fontFamily: "var(--font-ui)" }}>
          <thead>
            <tr>
              <th className="text-left p-2 border-b hairline bg-[var(--color-parchment-soft)]">
                <span className="num-label">lever \ horizon</span>
              </th>
              {horizons.map((h) => (
                <th
                  key={h.id}
                  className="text-left p-2 border-b hairline bg-[var(--color-parchment-soft)]"
                >
                  <span className="num-label">{h.label}</span>
                </th>
              ))}
              <th className="text-right p-2 border-b hairline bg-[var(--color-parchment-soft)]">
                <span className="num-label">row total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {levers.map((lever) => {
              const rowTotal = horizons.reduce(
                (sum, h) => sum + grid[lever.id][h.id].length,
                0
              );
              return (
                <tr key={lever.id}>
                  <th className="text-left p-2 border-b hairline whitespace-nowrap font-normal">
                    <Link href={`/levers/${lever.id}`} className="unstyled hover:underline">
                      <span style={{ fontFamily: "var(--font-display)" }}>
                        {lever.name}
                      </span>
                    </Link>
                  </th>
                  {horizons.map((h) => {
                    const items = grid[lever.id][h.id];
                    const count = items.length;
                    const intensity = count / max;
                    const bg =
                      count === 0
                        ? "var(--color-parchment-soft)"
                        : `color-mix(in oklab, var(--color-ink) ${Math.round(
                            intensity * 80
                          )}%, var(--color-parchment))`;
                    const fg =
                      intensity > 0.5
                        ? "var(--color-parchment)"
                        : "var(--color-ink)";
                    return (
                      <td
                        key={`${lever.id}-${h.id}`}
                        className="p-2 border-b hairline align-top"
                        style={{
                          background: bg,
                          color: fg,
                          minWidth: "120px",
                        }}
                        title={
                          items.length === 0
                            ? "Empty cell — no catalogued strategy"
                            : items.map((s) => s.name).join(", ")
                        }
                      >
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-sm font-semibold">
                            {count === 0 ? "—" : count}
                          </span>
                          {count > 0 && count <= 2 && (
                            <span className="num-label" style={{ opacity: 0.7, color: fg }}>
                              sparse
                            </span>
                          )}
                          {count >= 4 && (
                            <span className="num-label" style={{ opacity: 0.7, color: fg }}>
                              thick
                            </span>
                          )}
                        </div>
                        {count > 0 && count <= 3 && (
                          <div className="text-[10px] leading-tight" style={{ opacity: 0.9 }}>
                            {items.slice(0, 3).map((s, i) => (
                              <span key={s.id}>
                                <Link
                                  href={`/strategy/${s.id}`}
                                  className="unstyled hover:underline"
                                  style={{ color: "inherit" }}
                                >
                                  {s.name}
                                </Link>
                                {i < Math.min(2, items.length - 1) ? ", " : ""}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                    );
                  })}
                  <td className="p-2 border-b hairline text-right num-label">
                    {rowTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className="text-left p-2 num-label">column total</th>
              {horizons.map((h) => {
                const total = levers.reduce(
                  (sum, l) => sum + grid[l.id][h.id].length,
                  0
                );
                return (
                  <td key={`total-${h.id}`} className="p-2 num-label">
                    {total}
                  </td>
                );
              })}
              <td className="p-2 text-right num-label">{strategies.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-4 text-xs max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <p>
          Read down the horizon columns: the <em>post-transition</em> column
          is thin — the field has little to say about the world after AI
          succeeds or fails. The <em>during-transition</em> column is where
          most strategy effort concentrates. Read across lever rows: the
          field is thick on speed, concentration, control mechanism; thin on
          response capacity, culture, and legitimacy.
        </p>
      </div>
    </section>
  );
}

export default function AxesPage() {
  const total = strategies.length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <section className="mb-12 max-w-3xl">
        <p className="num-label mb-3">axes</p>
        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Five axes of variation.
        </h1>
        <p className="text-lg leading-relaxed mb-3" style={{ color: "var(--color-ink-soft)" }}>
          Every strategy sits at a position on each of five axes. The axes
          cross-cut the lever frame: two strategies can share a primary lever
          yet differ on coercion or actor, and two strategies on different
          levers can share nearly every axis value.
        </p>
        <p className="text-sm" style={{ color: "var(--color-ink-soft)" }}>
          A clustered distribution on an axis means the field is concentrated
          on one kind of bet; a dispersed distribution means real strategic
          variety. Compare a dense axis (like{" "}
          <em>actor in control</em>) to a spread axis (like <em>coercion</em>).
        </p>
      </section>

      <div className="space-y-12">
        {axes.map((axis) => {
          const key = axisKey[axis.id];
          const grouped: Record<string, Strategy[]> = {};
          for (const s of strategies) {
            const v = (s[key] as unknown as string) ?? "unknown";
            (grouped[v] ||= []).push(s);
          }
          const max = Math.max(
            1,
            ...axis.values.map((v) => (grouped[v.id] || []).length)
          );

          return (
            <section key={axis.id}>
              <div className="flex items-baseline justify-between border-b hairline pb-2 mb-5">
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {axis.name}
                </h2>
                <span className="num-label">{axis.values.length} values</span>
              </div>
              <p className="text-sm mb-5 max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
                {axis.description}
              </p>
              <div className="space-y-2">
                {axis.values.map((v) => {
                  const items = grouped[v.id] || [];
                  const pct = (items.length / max) * 100;
                  const share = ((items.length / total) * 100).toFixed(0);
                  return (
                    <div key={v.id} className="border hairline p-3">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3
                          className="text-base"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {v.name}
                        </h3>
                        <span className="num-label">
                          {items.length} · {share}%
                        </span>
                      </div>
                      {v.description && (
                        <p className="text-xs mb-2" style={{ color: "var(--color-ink-soft)" }}>
                          {v.description}
                        </p>
                      )}
                      <div className="h-[3px] bg-[var(--color-parchment-soft)] mb-2">
                        <div
                          className="h-full bg-[var(--color-ink)]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      {items.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {items.map((s) => (
                            <Link
                              key={s.id}
                              href={`/strategy/${s.id}`}
                              className="chip"
                              style={{ fontSize: "0.72rem", padding: "0.15rem 0.45rem" }}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs italic" style={{ color: "var(--color-ink-soft)" }}>
                          No strategies catalogued at this value.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <DensityMap />

      <section className="mt-16 border-t hairline pt-8 text-sm max-w-3xl" style={{ color: "var(--color-ink-soft)" }}>
        <p className="mb-2">
          Dimensions beyond these five remain under debate. Seven-dimension,
          ten-lever, and axis-only frames all give partial views of the same
          space (see vault notes on frame unification).
        </p>
        <p>
          An empty cell here — say, <em>coercion = unilateral force</em> with
          few strategies — either points to a blind spot in the named
          portfolio, or to an empirical no-go region. The atlas catalogues; it
          does not judge which.
        </p>
      </section>
    </div>
  );
}
