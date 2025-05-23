// app/page.tsx
import Image from "next/image";
import Script from "next/script";
import SectionColor from "./components/content-blocks/SectionColor";
import RoundButton from "./components/content-elements/RoundButton";
import FlexRow from "./components/content-containers/Flexrow";
import SecondaryHeadline from "./components/content-blocks/SecondaryHeadline";
import NumberBlock from "./components/content-elements/NumberBock";
import RowPadding from "./components/content-containers/RowPadding";
import ClientLogos from "./components/content-blocks/ClientLogos";
import BoxText from "./components/content-blocks/BoxText";
import Figure from "./components/content-blocks/Figure";
import BigButton from "./components/content-blocks/BigButton";
import QuoteBlock from "./components/content-blocks/QuoteBlock";
import SectionColorLines from "./components/content-blocks/SectionColorLines";
import SmallHeadlineSection from "./components/content-blocks/SmallHeadlineSection";
import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  GraduationCap,
  Landmark,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import HeroHeader from "./components/content-blocks/HeroHeader";
import CtaButton from "./components/content-blocks/CtaButton";
import SecondaryCtaButton from "./components/content-blocks/SecondaryCtaButton";
import TertiaryHeadline from "./components/content-blocks/TertiaryHeadline";
import LineBreak from "./components/content-blocks/LineBreak";
import UseCases from "./components/reuseSections/UseCases";
import MainFeatures from "./components/reuseSections/MainFeatures";

// SEO Metadata for App Router
export const metadata = {
  title: "PrivCo - Private Company Financial Data for Bootstrapped Companies",
  description:
    "PrivCo is the leading provider of private company financial data, specializing in bootstrapped companies with revenues above $1MM. Find unparalleled insights to uncover market opportunities.",
  keywords: [
    "private company data",
    "financial data",
    "bootstrapped companies",
    "market intelligence",
    "private equity",
    "venture capital",
    "due diligence",
  ],

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    url: "https://privco.com",
    title:
      "PrivCo - Uncover Private Company Opportunities Before Your Competitors Do",
    description:
      "Access financial data on 893K+ U.S. private companies. PrivCo specializes in bootstrapped companies with revenues above $1MM that other data sources miss.",
    siteName: "PrivCo",
    images: [
      {
        url: "https://privco.com/images/header-image.png",
        width: 1200,
        height: 630,
        alt: "PrivCo - Private company financial database dashboard",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "PrivCo - Private Company Financial Data",
    description:
      "Uncover private market opportunities with financial data on bootstrapped companies with revenues above $1MM.",
    images: ["https://privco.com/images/header-image.png"],
    creator: "@PrivCo",
  },

  // Canonical URL
  alternates: {
    canonical: "https://privco.com",
  },

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PrivCo",
  url: "https://privco.com",
  logo: "https://privco.com/logo.png",
  description:
    "PrivCo is the leading provider of private company financial data, specializing in bootstrapped companies with revenues above $1MM.",
  sameAs: [
    "https://www.linkedin.com/company/privco",
    "https://twitter.com/PrivCo",
    // Add other social profiles
  ],
  offers: {
    "@type": "Offer",
    description: "Access to private company financial data",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://privco.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <div>
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section with H1 */}
      <div>
        <HeroHeader
          imageUrl="/images/header-image.png"
          title="Uncover Private Company Opportunities Before Your Competitors Do"
          subtitle="PrivCo is the leading provider of private company data, giving you access to 900K+ private companies and 70M executive contacts."
          ctaText="Start Free"
          ctaHref="https://system.privco.com/signup"
          cta2Text="Learn More"
          cta2Href="/product"
          altText="PrivCo private company data dashboard interface showing financial insights"
        />
      </div>

      {/* Client Logos Section */}
      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
      >
        <RowPadding>
          <ClientLogos
            images={[
              "/images/svgs/logos/deloitte.svg",
              "/images/svgs/logos/amex.svg",
              "/images/svgs/logos/microsoft.svg",
              "/images/svgs/logos/stephens.svg",
              "/images/svgs/logos/wharton.svg",
            ]}
            alts={[
              "Deloitte logo - PrivCo client",
              "American Express logo - PrivCo client",
              "Microsoft logo - PrivCo client",
              "Stephens Inc logo - PrivCo client",
              "Wharton School logo - PrivCo client",
            ]}
          />
        </RowPadding>
      </SectionColor>

      {/* Main Features Section - H2 */}
      <MainFeatures />

      {/* Testimonial Section */}
      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <QuoteBlock
            text="when I was benchmarking services that could help me automate and expedite this process, and they beat all other options both in terms of quality and price."
            name="Associate at GP Investments"
            color="white"
            secondaryColor="rgb(147, 197, 253)"
          />
        </RowPadding>
      </SectionColor>

      {/* Key Stats Section - H2 */}
      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <RowPadding>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <SecondaryHeadline
                overline="Join over 90,000 PrivCo users . . ."
                headline="Complete financial and contact data on U.S. private companies"
              >
                <p>
                  Start your journey with a{" "}
                  <span className="font-semibold">free trial</span>— get
                  <span className="font-semibold"> extensive access</span> to
                  PrivCo’s database, including detailed financials, executive
                  contacts, and firmographics on 893K+ private companies.
                </p>
                <p>
                  {" "}
                  Explore real data. See the value. Decide when you're ready.
                </p>
                <FlexRow>
                  <CtaButton
                    ctaHref="https://system.privco.com/signup"
                    ctaText="Start Free"
                  />

                  <SecondaryCtaButton text="Learn More" href="/product" />
                </FlexRow>
              </SecondaryHeadline>
            </div>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
              <NumberBlock number="893K+" text="U.S. Private Companies" />
              <NumberBlock number="146M+" text="Data Points" />
              <NumberBlock number="1,000+" text="Industry Verticals " />
              <NumberBlock number="70M+" text="Contact Records" />
            </div>
          </div>
        </RowPadding>
      </SectionColor>

      {/* Feature Highlights Section - H2 */}
      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <div>
            <SecondaryHeadline headline="Get Granular-Level Advanced Search using Revenue, EBITDA, Valuation, Funding, Growth Rates, Location & Ownership"></SecondaryHeadline>
            <div className="flex space-x-4 mb-8">
              <CtaButton
                ctaHref="https://system.privco.com/signup"
                ctaText="Start Free"
              />
              <SecondaryCtaButton href="/product" text="Learn More" />
            </div>
            <div className="md:space-y-0 space-y-3 grid grid-cols-1 lg:grid-cols-3 gap-6 md:mx-0 mx-auto mt-3">
              <Figure
                image={
                  <Image
                    src="/images/figure-1.png"
                    alt="PrivCo's data analysis dashboard showing company financials at scale"
                    width={425}
                    height={375}
                    className="rounded-t-lg border-b"
                    loading="lazy"
                  />
                }
                header="Analyze Data at Scale"
                subtext="With proprietary algorithms and industry-leading keyword tagging."
              />
              <Figure
                image={
                  <Image
                    src="/images/figure-2.png"
                    alt="Financial insights dashboard showing revenue and EBITDA metrics for private companies"
                    width={425}
                    height={375}
                    className="rounded-t-lg border-b"
                    loading="lazy"
                  />
                }
                header="Uncover Financial Insights"
                subtext="Created through proprietary machine-learning financial modeling and expert data analysts."
              />
              <Figure
                image={
                  <Image
                    src="/images/figure-3.png"
                    alt="PrivCo search interface for quickly comparing private companies across industries"
                    width={425}
                    height={375}
                    className="rounded-t-lg border-b"
                    loading="lazy"
                  />
                }
                header="Quickly Search & Compare"
                subtext="Quickly filter and compare multiple industries, companies, and players in the private market."
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>

      {/* Press Logos Section */}
      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
      >
        <RowPadding>
          <div>
            <ClientLogos
              images={[
                "/images/svgs/logos/deloitte.svg",
                "/images/svgs/logos/bloomberg.svg",
                "/images/client-logos/cnbc.png",
                "/images/svgs/logos/inc.svg",
                "/images/svgs/logos/forbes.svg",
              ]}
              alts={[
                "Deloitte logo - PrivCo featured in",
                "Bloomberg logo - PrivCo featured in",
                "CNBC logo - PrivCo featured in",
                "Inc Magazine logo - PrivCo featured in",
                "Forbes logo - PrivCo featured in",
              ]}
            />
          </div>
        </RowPadding>
      </SectionColor>

      {/* Use Cases Section - H2 */}
      <UseCases />

      {/* CTA Section */}
      <SectionColorLines
        secondaryColor="var(--privco-blue)"
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="Uncover the Bootstrappers.">
              <p className="text-xl max-w-[600px]">
                At PrivCo, we are dedicated to providing unparalleled access to
                private company data not found in other sources.
              </p>
              <div className="mx-auto">
                <CtaButton
                  ctaHref="https://system.privco.com/signup"
                  ctaText="Start Free"
                />
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColorLines>
    </div>
  );
}
