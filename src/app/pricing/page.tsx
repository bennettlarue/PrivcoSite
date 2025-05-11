// app/pricing/page.tsx

import { Metadata } from "next";
import Script from "next/script";
import MainHeadline from "../components/content-blocks/MainHeadline";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";
import ClientLogos from "../components/content-blocks/ClientLogos";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import BigButton from "../components/content-blocks/BigButton";
import PricingTable from "../components/content-blocks/PricingTable";
import Accordion from "../components/content-blocks/Accordion";
import RoundButton from "../components/content-elements/RoundButton";
import HeroHeader from "../components/content-blocks/HeroHeader";
import PricingCards from "../components/content-blocks/PricingCards";
import FadeIn from "../components/transition-wrappers/FadeIn";
import SecondaryCtaButton from "../components/content-blocks/SecondaryCtaButton";

// SEO Metadata
export const metadata: Metadata = {
  title: "PrivCo Pricing - Plans & Free Trial | Private Company Data",
  description:
    "Choose from PrivCo's flexible plans to access 893K+ private companies and 146M data points. Start with our 7-day full-access free trial, no credit card required.",
  keywords: [
    "privco pricing",
    "private company data plans",
    "financial data subscription",
    "private market intelligence pricing",
    "private company database cost",
    "financial data free trial",
    "business intelligence pricing",
    "private equity data subscription",
  ],

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    url: "https://privco.com/pricing",
    title: "PrivCo Pricing - Financial Data Plans for Private Companies",
    description:
      "Choose the right PrivCo plan for your business needs. Access 893K+ private companies and 146 million data points with our flexible pricing options.",
    siteName: "PrivCo",
    images: [
      {
        url: "https://privco.com/images/pricing/pricing-header.png",
        width: 1200,
        height: 630,
        alt: "PrivCo pricing plans showing subscription options for private company data",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "PrivCo Pricing | Private Company Data Subscriptions",
    description:
      "Access 893K+ private companies with pricing plans designed for every need. Start with a 7-day full-access free trial.",
    images: ["https://privco.com/images/pricing/pricing-header.png"],
    creator: "@PrivCo",
    site: "@PrivCo",
  },

  // Canonical URL
  alternates: {
    canonical: "https://privco.com/pricing",
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

// Structured Data for Pricing Page - Service-based schema with individual offers
const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PrivCo Private Company Data Platform",
  description:
    "Access to 893K+ private companies and 146 million data points for investment research, deal sourcing, and market intelligence.",
  provider: {
    "@type": "Organization",
    name: "PrivCo",
    url: "https://privco.com",
    logo: "https://privco.com/logo.png",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Select Plan",
      description: "Full access to PrivCo's private company data and features",
      price: "$167/mo",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      url: "https://system.privco.com/signup",
    },
    {
      "@type": "Offer",
      name: "Enterprise Plan",
      description:
        "Advanced features and team access to PrivCo's private company intelligence",
      url: "https://privco.com/contact",
      availability: "https://schema.org/InStock",
    },
  ],
};

// FAQ Schema - This helps generate rich results in search
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Seven-Day Free Trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our seven-day free trial offers unlimited access to the Select tier. You have access to all features of the Select tier for seven days.",
      },
    },
    {
      "@type": "Question",
      name: "How do I upgrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After seven days, your free trial will automatically convert to a paid subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade to Enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, just contact us and we can quickly upgrade your account to the Enterprise Tier.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can cancel your subscription at any time without any penalties. We believe in flexibility and want you to feel comfortable with your choice.",
      },
    },
  ],
};

export default function Pricing() {
  const accordionItems = [
    {
      id: "1",
      title: "What is the Seven-Day Free Trial?",
      content: (
        <p>
          Our seven-day free trial offers unlimited access to the Select tier.
          You have access to all features of the Select tier for seven days.
        </p>
      ),
    },
    {
      id: "2",
      title: "How do I upgrade?",
      content: (
        <p>
          After seven days, your free trial will automatically convert to a paid
          subscription.
        </p>
      ),
    },
    {
      id: "3",
      title: "Can I upgrade to Enterprise?",
      content: (
        <p>
          Yes, just contact us and we can quickly upgrade your account to the
          Enterprise Tier.
        </p>
      ),
    },
    {
      id: "4",
      title: "Can I cancel anytime?",
      content: (
        <p>
          Absolutely! You can cancel your subscription at any time without any
          penalties. We believe in flexibility and want you to feel comfortable
          with your choice.
        </p>
      ),
    },
  ];

  return (
    <div>
      {/* JSON-LD Schema Implementation */}
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div>
        <HeroHeader
          imageUrl="/images/pricing/pricing-header.png"
          title="More data. More Deals."
          subtitle="146 million data points and 893K+ companies"
          ctaText="7-Day Full-Access Free Trial"
          ctaHref={"https://system.privco.com/signup"}
          cta2Text="Learn More"
          cta2Href="/product"
          altText="PrivCo pricing plans showing subscription options for private company financial data"
        />
      </div>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <FadeIn>
          <div className="mt-8 px-5">
            <PricingCards />
          </div>
          <div className="mt-12 px-5">
            <div className="w-fit mx-auto">
              <SecondaryHeadline headline="Compare Plans" />
            </div>
            <PricingTable />
          </div>
        </FadeIn>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="mb-2">
            <SecondaryHeadline headline="Frequently Asked Questions">
              Find answers to your questions about our pricing plans and sign-up
              process.
            </SecondaryHeadline>
          </div>
          <Accordion items={accordionItems} />
          <div className="space-y-5 mt-12">
            <h3 className="font-bold md:text-2xl text-xl mt-5">
              Still have questions? Get expert help now!
            </h3>
            <div className="w-fit font-bold md:text-3xl text-xl">
              <SecondaryCtaButton href="/contact" text="Contact Us" />
            </div>
          </div>
        </RowPadding>
      </SectionColor>
    </div>
  );
}
