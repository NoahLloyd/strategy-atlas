type JsonLdInput = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdInput }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // Schema.org markup is read by crawlers; not user-facing HTML.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
