// app/api/page.tsx
import { Metadata } from "next";
import BigButton from "../../components/content-blocks/BigButton";
import Figure from "../../components/content-blocks/Figure";
import HeroHeader from "../../components/content-blocks/HeroHeader";
import SecondaryHeadline from "../../components/content-blocks/SecondaryHeadline";
import SectionColor from "../../components/content-blocks/SectionColor";
import SectionColorLines from "../../components/content-blocks/SectionColorLines";
import RowPadding from "../../components/content-containers/RowPadding";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
// Define metadata for the page
export const metadata: Metadata = {
  title: "Private Market Data API & Custom Datasets | PrivCo",
  description:
    "Access 146MM+ data points across 1,000 verticals. Pull accurate private financial data with our flexible API and custom data exports for precise market intelligence.",
  keywords: [
    "private company API",
    "private market data",
    "custom financial datasets",
    "private company database API",
    "financial data exports",
    "private company intelligence",
  ],
  openGraph: {
    title: "Private Market Data API & Custom Datasets | PrivCo",
    description:
      "Access 146MM+ data points across 1,000 verticals. Pull accurate private financial data with our flexible API and custom data exports for precise market intelligence.",
    url: "https://privco.com/api",
    type: "website",
    images: [
      {
        url: "https://privco.com/images/api/api-header.png",
        width: 1200,
        height: 630,
        alt: "PrivCo API - Private Market Data Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Market Data API & Custom Datasets | PrivCo",
    description:
      "Access 146MM+ data points across 1,000 verticals with our flexible API and custom data exports.",
    images: ["https://privco.com/images/api/api-header.png"],
    site: "@PrivCo",
    creator: "@PrivCo",
  },
  alternates: {
    canonical: "https://privco.com/api",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function ApiPage() {
  // Define base URL for structured data
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

  // Product schema structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PrivCo API & Data Exports",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/OnlineOnly",
      url: `${baseUrl}/api`,
    },
    description:
      "Pull the exact private market data you need from the most accurate and up-to-date financial database with PrivCo's API and data exports.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "125",
    },
  };

  // FAQPage schema structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of data can I access through the PrivCo API?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PrivCo's API provides access to 146MM+ data points across 1,000 verticals, including revenues, EBITDA, valuations, fundings, deals, and more private market data.",
        },
      },
      {
        "@type": "Question",
        name: "What formats are available for data exports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PrivCo offers data exports in both JSON and CSV formats, making it easy to integrate with your existing systems and workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can I request custom datasets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PrivCo's expert data analysts are available to create custom datasets tailored to your specific needs. We deliver custom exports in either JSON or CSV format.",
        },
      },
    ],
  };

  return (
    <>
      {/* Add structured data */}
      <JsonLd>{productSchema}</JsonLd>
      <JsonLd>{faqSchema}</JsonLd>

      <main>
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-2">
          <div className="max-w-7xl mx-auto px-4">
            <ol className="flex text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li>
                <Link href="/product" className="hover:text-blue-600">
                  Products
                </Link>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li className="text-gray-700 font-medium" aria-current="page">
                API & Data Solutions
              </li>
            </ol>
          </div>
        </nav>

        <section aria-labelledby="hero-heading">
          <HeroHeader
            imageUrl="/images/api/api-header.png"
            overline="API"
            title="Custom Datasets, On-Demand"
            subtitle="Pull the exact data you need-and nothing you don't-from the most accurate and up-to-date private financial data with our API and data exports."
            ctaText="Start Free"
            ctaHref={"https://system.privco.com/signup"}
            cta2Text="Learn More"
            cta2Href="/product"
            altText="Private market data visualization showing API capabilities and custom dataset features"
          />
        </section>

        <section
          id="managed-data-solutions"
          aria-labelledby="managed-data-heading"
        >
          <SectionColor
            backgroundColor="var(--privco-lightgreen)"
            textColor="var(--privco-black)"
          >
            <RowPadding>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <SecondaryHeadline
                  overline="Managed Data Solutions"
                  headline="Choose from 146MM+ data points across 1,000 verticals"
                >
                  <p>
                    Directly extract data based on customizable criteria,
                    including revenues, EBITDA, valuations, fundings, deals, and
                    more. Enable your team with easy access to hard-to-find
                    private market data through API or data exports.
                  </p>
                </SecondaryHeadline>
                <div className="hidden lg:block">
                  <Image
                    src="/images/api/graphic-1.svg"
                    alt="Data visualization showing customizable data extraction across multiple financial metrics"
                    width={625}
                    height={375}
                    className="rounded-t-lg drop-shadow"
                  />
                </div>
              </div>
            </RowPadding>
          </SectionColor>
        </section>

        <section id="custom-api-solutions" aria-labelledby="custom-api-heading">
          <SectionColor
            backgroundColor="var(--privco-lightblue)"
            textColor="var(--privco-black)"
          >
            <RowPadding>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <SecondaryHeadline
                  overline="Custom API Solutions"
                  headline="Gain actionable intelligence in seconds"
                >
                  <p>
                    Integrate our data with your existing systems to instantly
                    increase your team's comprehension of the middle market.
                    Extract bulk data via JSON or CSV.
                  </p>
                </SecondaryHeadline>
                <div className="hidden lg:block">
                  <Image
                    src="/images/api/graphic-2.svg"
                    alt="API integration diagram showing data flow between PrivCo and client systems"
                    width={625}
                    height={375}
                    className="rounded-t-lg drop-shadow"
                  />
                </div>
              </div>
            </RowPadding>
          </SectionColor>
        </section>

        <section id="data-exports" aria-labelledby="data-exports-heading">
          <SectionColor
            backgroundColor="var(--privco-white)"
            textColor="var(--privco-black)"
          >
            <RowPadding>
              <div>
                <SecondaryHeadline headline="Simplify even further with data exports"></SecondaryHeadline>
                <div className="md:space-y-0 space-y-3 grid grid-cols-1 lg:grid-cols-3 gap-6 md:mx-0 mx-auto mt-3">
                  <Figure
                    image={
                      <div className="w-full h-[275px] flex items-center justify-center bg-[var(--privco-blue)]">
                        <Image
                          src="/images/api/figure-1.svg"
                          alt="Custom dataset creation and export functionality illustration"
                          width={225}
                          height={375}
                          className="rounded-t-lg drop-shadow"
                        />
                      </div>
                    }
                    header="Custom Datasets"
                    subtext="Our expert data analysts are available to create custom datasets to fill in any knowledge gap for your team. We'll deliver your custom export in either JSON or CSV format."
                  />
                  <Figure
                    image={
                      <div className="w-full  h-[275px] flex items-center justify-center bg-[var(--privco-blue)]">
                        <Image
                          src="/images/api/figure-2.svg"
                          alt="Industry leader identification through revenue and growth metrics visualization"
                          width={225}
                          height={375}
                          className="rounded-t-lg drop-shadow"
                        />
                      </div>
                    }
                    header="Uncover Industry Leaders"
                    subtext="Learn which companies are top-performing in their industries using revenue and growth signals."
                  />
                  <Figure
                    image={
                      <div className="w-full h-[275px] flex items-center justify-center bg-[var(--privco-blue)]">
                        <Image
                          src="/images/api/figure-3.svg"
                          alt="Precision analytics dashboard showing detailed insights from private company data"
                          width={225}
                          height={375}
                          className="rounded-t-lg drop-shadow"
                        />
                      </div>
                    }
                    header="Precision Analytics"
                    subtext="Generate detailed insights from millions of data points using your exact search parameters. Analyze critical features of private company health and longevity."
                  />
                </div>
              </div>
            </RowPadding>
          </SectionColor>
        </section>

        <section id="cta" aria-labelledby="cta-heading">
          <SectionColorLines
            secondaryColor="var(--privco-blue)"
            backgroundColor="var(--privco-lightgreen)"
            textColor="var(--privco-black)"
          >
            <RowPadding>
              <div className="w-fit text-center mx-auto">
                <SecondaryHeadline headline="Get Started with Managed Solutions Today">
                  <div className="mx-auto w-fit">
                    <BigButton
                      href={"https://system.privco.com/signup"}
                      textColor="var(--privco-white)"
                      backgroundColor="var(--privco-green)"
                      border={true}
                    >
                      Talk to Sales
                    </BigButton>
                  </div>
                </SecondaryHeadline>
              </div>
            </RowPadding>
          </SectionColorLines>
        </section>

        {/* FAQ Section - Good for SEO */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="bg-gray-50 py-12"
        >
          <div className="max-w-3xl mx-auto px-4">
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-center mb-8"
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  What types of data can I access through the PrivCo API?
                </h3>
                <p className="text-gray-600">
                  PrivCo's API provides access to 146MM+ data points across
                  1,000 verticals, including revenues, EBITDA, valuations,
                  fundings, deals, and more private market data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  What formats are available for data exports?
                </h3>
                <p className="text-gray-600">
                  PrivCo offers data exports in both JSON and CSV formats,
                  making it easy to integrate with your existing systems and
                  workflows.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Can I request custom datasets?
                </h3>
                <p className="text-gray-600">
                  Yes, PrivCo's expert data analysts are available to create
                  custom datasets tailored to your specific needs. We deliver
                  custom exports in either JSON or CSV format.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
