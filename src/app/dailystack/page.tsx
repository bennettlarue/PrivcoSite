// app/daily-stack/page.tsx
import { Metadata } from "next";
import SectionColor from "../components/content-blocks/SectionColor";
import { JsonLd } from "../components/JsonLd";
import DailyStackClient from "./DailyStackClient";
import Link from "next/link";
import Image from "next/image";
import DailyStackLogo from "../components/svgs/DailyStackLogo";

// Define metadata for the page
export const metadata: Metadata = {
  title:
    "The Daily Stack | Private Market Financial Insights Newsletter | PrivCo",
  description:
    "Subscribe to The Daily Stack, a daily financial insights newsletter covering private markets, venture capital, and private equity from PrivCo.",
  keywords: [
    "private market newsletter",
    "financial insights",
    "daily investment newsletter",
    "private company news",
    "venture capital insights",
    "private equity newsletter",
  ],
  openGraph: {
    title: "The Daily Stack | Private Market Financial Insights Newsletter",
    description:
      "Get daily insights on private markets delivered to your inbox. Expert analysis of private companies, venture capital, and emerging trends.",
    url: "https://privco.com/daily-stack",
    type: "website",
    images: [
      {
        url: "https://privco.com/images/daily-stack/daily-stack-header.png",
        width: 1200,
        height: 630,
        alt: "The Daily Stack - PrivCo's Private Market Financial Insights Newsletter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Stack | Private Market Financial Insights",
    description:
      "Subscribe to The Daily Stack, a daily financial insights newsletter covering private markets, venture capital, and private equity.",
    images: ["https://privco.com/images/daily-stack/daily-stack-header.png"],
    site: "@PrivCo",
    creator: "@PrivCo",
  },
  alternates: {
    canonical: "https://privco.com/daily-stack",
  },
};

export default function DailyStackPage() {
  // Base URL for structured data
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

  // Create structured data for the newsletter
  const newsletterData = {
    "@context": "https://schema.org",
    "@type": "NewsletterService",
    name: "The Daily Stack",
    provider: {
      "@type": "Organization",
      name: "PrivCo",
      url: baseUrl,
    },
    description:
      "The Daily Stack is a financial insights newsletter covering the world of private markets by PrivCo.",
    frequency: "Daily",
    free: true,
    category: ["Business", "Finance", "Investments", "Private Markets"],
  };

  // Recent newsletter examples - this should ideally come from your actual data
  const recentNewsletters = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "EmailMessage",
          name: "Weekly Markets Update: Venture Funding Rebounds",
          datePublished: "2024-05-05T09:00:00+00:00",
          description:
            "Analysis of the latest venture capital trends and major funding rounds.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "EmailMessage",
          name: "Private Equity Spotlight: Middle Market Acquisitions",
          datePublished: "2024-05-04T09:00:00+00:00",
          description:
            "A deep dive into recent middle market acquisitions and PE strategy.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "EmailMessage",
          name: "Emerging Sectors: Climate Tech Investments Surge",
          datePublished: "2024-05-03T09:00:00+00:00",
          description:
            "Tracking the influx of capital to climate technology startups and scaleups.",
        },
      },
    ],
  };

  return (
    <>
      {/* Add structured data */}
      <JsonLd>{newsletterData}</JsonLd>
      <JsonLd>{recentNewsletters}</JsonLd>

      {/* Static content for SEO */}
      <div className="sr-only">
        <h1>The Daily Stack - Private Market Financial Insights Newsletter</h1>
        <p>
          The Daily Stack is a financial insights newsletter covering the world
          of private markets by PrivCo.
        </p>
        <p>
          Subscribe to receive daily updates on private company news, venture
          capital trends, private equity deals, and emerging market insights.
        </p>
        <h2>What You'll Receive</h2>
        <ul>
          <li>Daily market insights and analysis</li>
          <li>Breaking news on private companies</li>
          <li>Funding rounds and acquisition updates</li>
          <li>Expert commentary on market trends</li>
          <li>Exclusive data from PrivCo's comprehensive database</li>
        </ul>
      </div>

      {/* Breadcrumb navigation */}

      {/* Client-side component with interactive elements */}
      <DailyStackClient />
    </>
  );
}
