/** Données structurées (JSON-LD) des pages. */

export const faqPage = (faq: Array<[string, string]>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const jsonLdHtml = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
