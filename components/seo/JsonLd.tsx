import Script from "next/script";

export function JsonLd({ data, id = "page-json-ld" }: { data: unknown; id?: string }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
