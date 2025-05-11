// app/faq/page.tsx
import { Metadata } from "next";
import FAQClientComponent from "./FAQClient";
import { JsonLd } from "../components/JsonLd";

// Import FAQ data at the server level
import faqData from "@/json/faq.json";

// Generate metadata for the FAQ page
export const metadata: Metadata = {
  title: "Frequently Asked Questions | PrivCo",
  description:
    "Find answers to common questions about PrivCo's private company data, API, pricing, and features. Learn how to access financial data on private companies.",
  keywords: [
    "privco faq",
    "private company data questions",
    "financial data api faq",
    "private market intelligence",
    "private company database help",
  ],
  openGraph: {
    title: "Frequently Asked Questions | PrivCo",
    description:
      "Find answers to common questions about PrivCo's private company data, API, pricing, and features.",
    url: "https://privco.com/faq",
    type: "website",
    images: [
      {
        url: "https://privco.com/images/privco-og-image.png",
        width: 1200,
        height: 630,
        alt: "PrivCo - Private Company Financial Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | PrivCo",
    description:
      "Find answers to common questions about PrivCo's private company data, API, pricing, and features.",
    images: ["https://privco.com/images/privco-og-image.png"],
  },
  alternates: {
    canonical: "https://privco.com/faq",
  },
};

export default function FAQPage() {
  // Prepare FAQ schema data for structured data
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((section) =>
      section.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer.replace(/\n\n/g, " "),
        },
      }))
    ),
  };

  return (
    <>
      {/* Structured data for FAQ schema */}
      <JsonLd>{faqSchemaData}</JsonLd>

      {/* Pre-rendered heading for SEO - will be styled by the client component */}
      <div className="hidden">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((section) => (
          <div key={section.id}>
            <h2>{section.title}</h2>
            {section.questions.map((question) => (
              <div key={question.id}>
                <h3>{question.question}</h3>
                <div>
                  {question.answer.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Client-side interactive component */}
      <FAQClientComponent />
    </>
  );
}
