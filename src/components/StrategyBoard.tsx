import type {
  Person,
  ExpertiseTier,
  RecognitionTier,
} from "@/lib/people-types";
import {
  expertiseTiers,
  recognitionTiers,
} from "@/data/profile-tiers";
import { HoverFaceLink } from "@/components/HoverFaceLink";

type Props = {
  endorsers: Person[];
  opposers: Person[];
  // Total profiled population in the corpus, used to compute density vs corpus.
  corpusProfiled: number;
};

// Compact 2D placement of endorsers (and optional opposers) on the
// expertise × recognition grid. Goes on the strategy detail page so the
// reader can see who actually holds the bet, not just bar-chart counts.
export function StrategyBoard({
  endorsers,
  opposers,
  corpusProfiled,
}: Props) {
  const profiledEndorsers = endorsers.filter((p) => p.profile);
  const profiledOpposers = opposers.filter((p) => p.profile);
  if (profiledEndorsers.length + profiledOpposers.length === 0) return null;

  type Grid = Record<ExpertiseTier, Record<RecognitionTier, Person[]>>;
  const make = (): Grid => {
    const g = {} as Grid;
    for (const e of expertiseTiers) {
      g[e.id] = {} as Grid[ExpertiseTier];
      for (const r of recognitionTiers) g[e.id][r.id] = [];
    }
    return g;
  };
  const endorseGrid = make();
  for (const p of profiledEndorsers) {
    endorseGrid[p.profile!.expertise][p.profile!.recognition].push(p);
  }
  const opposeGrid = make();
  for (const p of profiledOpposers) {
    opposeGrid[p.profile!.expertise][p.profile!.recognition].push(p);
  }

  const totalProfiled = profiledEndorsers.length;
  const sharePct =
    corpusProfiled > 0 ? Math.round((totalProfiled / corpusProfiled) * 100) : 0;

  return (
    <section
      className="mb-10 border hairline p-4"
      style={{ background: "var(--color-parchment-soft)" }}
    >
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
        <p className="num-label">where the endorsers sit on the board</p>
        <p
          className="text-xs italic"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {totalProfiled} of {corpusProfiled} profiled · {sharePct}% of the
          board
        </p>
      </div>
      <div className="overflow-x-auto" style={{ fontFamily: "var(--font-ui)" }}>
        <table className="w-full text-[11px]" style={{ minWidth: "640px" }}>
          <thead>
            <tr>
              <th className="text-left p-1 align-bottom">
                <span
                  className="num-label"
                  style={{ fontSize: "0.6rem" }}
                >
                  expertise ↓ · recognition →
                </span>
              </th>
              {recognitionTiers.map((r) => (
                <th
                  key={r.id}
                  className="text-left p-1 align-bottom border-b hairline"
                  style={{ minWidth: "110px" }}
                >
                  <span
                    className="num-label block"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {r.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expertiseTiers.map((e) => (
              <tr key={e.id}>
                <th
                  scope="row"
                  className="text-left p-1 align-top border-r hairline"
                  style={{ width: "140px" }}
                >
                  <span
                    className="num-label block"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {e.label}
                  </span>
                </th>
                {recognitionTiers.map((r) => {
                  const cellEndorse = endorseGrid[e.id][r.id];
                  const cellOppose = opposeGrid[e.id][r.id];
                  const intensity = Math.min(cellEndorse.length * 6, 36);
                  const empty =
                    cellEndorse.length === 0 && cellOppose.length === 0;
                  return (
                    <td
                      key={r.id}
                      className="p-1 align-top border hairline"
                      style={{
                        background: empty
                          ? "var(--color-parchment)"
                          : `color-mix(in oklab, var(--color-accent) ${intensity}%, var(--color-parchment))`,
                        verticalAlign: "top",
                      }}
                    >
                      {empty && (
                        <span
                          className="block text-center text-base select-none"
                          style={{
                            color: "var(--color-ink-soft)",
                            opacity: 0.35,
                          }}
                        >
                          ·
                        </span>
                      )}
                      {cellEndorse.length > 0 && (
                        <ul className="flex flex-wrap gap-1">
                          {cellEndorse.map((p) => (
                            <li key={p.id}>
                              <HoverFaceLink
                                person={p}
                                size={22}
                                placement="below"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                      {cellOppose.length > 0 && (
                        <ul
                          className="flex flex-wrap gap-1 mt-1 pt-1 border-t hairline"
                          style={{ opacity: 0.85 }}
                        >
                          {cellOppose.map((p) => (
                            <li
                              key={p.id}
                              className="relative"
                              style={{ filter: "grayscale(0.7)" }}
                            >
                              <HoverFaceLink
                                person={p}
                                size={22}
                                placement="below"
                              />
                              <span
                                aria-hidden="true"
                                className="absolute pointer-events-none"
                                style={{
                                  top: -3,
                                  right: -3,
                                  width: 10,
                                  height: 10,
                                  borderRadius: 999,
                                  background: "var(--color-parchment)",
                                  border: "1px solid var(--color-ink)",
                                  color: "var(--color-ink)",
                                  fontSize: 8,
                                  lineHeight: "8px",
                                  textAlign: "center",
                                  fontFamily: "var(--font-mono)",
                                }}
                                title={`${p.name}, opposes`}
                              >
                                ×
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        className="text-[10px] italic mt-3"
        style={{ color: "var(--color-ink-soft)" }}
      >
        Each face is one profiled person. Cell shade intensifies with endorser
        density. Faces with × are profiled opposers, same tier, opposite
        position. Empty cells mark tier combinations the field has not
        produced for this bet.
      </p>
    </section>
  );
}
