/** Schema.org structured data, server-rendered so crawlers see it in the initial HTML. */
export default function JsonLd({ data }: { data: object[] }) {
  const graph = { "@context": "https://schema.org", "@graph": data };
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
