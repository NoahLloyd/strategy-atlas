import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbListSchema, type Crumb } from "@/lib/structured-data";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;
  const last = items.length - 1;
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-4 text-xs"
        style={{ fontFamily: "var(--font-ui)", color: "var(--color-ink-soft)" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === last ? (
                <span aria-current="page" style={{ color: "var(--color-ink)" }}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbListSchema(items)} />
    </>
  );
}
