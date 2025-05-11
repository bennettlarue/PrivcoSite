// app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import { JsonLd } from "../components/JsonLd";
import Link from "next/link";

// Define metadata for the contact page
export const metadata: Metadata = {
  title: "Contact PrivCo | Get in Touch with Our Financial Data Experts",
  description:
    "Have questions about PrivCo's private company data or services? Contact our team for support, inquiries about our API, data exports, or custom solutions.",
  keywords: [
    "privco contact",
    "financial data support",
    "private company data contact",
    "privco customer service",
    "contact data experts",
  ],
  openGraph: {
    title: "Contact PrivCo | Get in Touch with Our Financial Data Experts",
    description:
      "Have questions about PrivCo's private company data or services? Contact our team for support, inquiries about our API, data exports, or custom solutions.",
    url: "https://privco.com/contact",
    type: "website",
    images: [
      {
        url: "https://privco.com/images/privco-og-image.png",
        width: 1200,
        height: 630,
        alt: "PrivCo - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PrivCo | Get in Touch with Our Financial Data Experts",
    description: "Have questions about PrivCo's services? Contact our team.",
    images: ["https://privco.com/images/privco-og-image.png"],
  },
  alternates: {
    canonical: "https://privco.com/contact",
  },
};

export default function ContactPage() {
  // Base URL for structured data
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

  // Organization schema with ContactPage markup
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact PrivCo",
    description:
      "Contact page for PrivCo, a provider of private company financial intelligence.",
    url: `${baseUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "PrivCo",
      url: baseUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-123-456-7890", // Replace with your actual contact number
        contactType: "customer service",
        email: "support@privco.com", // Replace with your actual email
        availableLanguage: "English",
      },
    },
  };

  return (
    <>
      {/* Add structured data */}
      <JsonLd>{contactSchema}</JsonLd>

      <main className="container mx-auto px-4 my-20">
        {/* Breadcrumb navigation */}

        <div className="max-w-3xl mx-auto">
          <ContactForm />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Feedback</h2>
              <p className="text-gray-600 mb-1">
                For feedback on our services or suggestions:
              </p>
              <a
                href="mailto:feedback@privco.com"
                className="text-blue-600 hover:underline"
              >
                feedback@privco.com
              </a>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Partnership Inquiries
              </h2>
              <p className="text-gray-600 mb-1">
                For help with our platform or API:
              </p>
              <a
                href="mailto:partnership@privco.com"
                className="text-blue-600 hover:underline"
              >
                partnership@privco.com
              </a>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Media Inquiries</h2>
              <p className="text-gray-600 mb-1">
                For media and press contacts:
              </p>
              <a
                href="mailto:pr@privco.com"
                className="text-blue-600 hover:underline"
              >
                pr@privco.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
