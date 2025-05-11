// app/knowledge-bank/page.tsx
import Link from "next/link";
import { getKnowledgeBankEntries } from "@/lib/contentful";
import MainHeadline from "../components/content-blocks/MainHeadline";
import RowPadding from "../components/content-containers/RowPadding";
import SectionColor from "../components/content-blocks/SectionColor";
import HeroHeader from "../components/content-blocks/HeroHeader";
import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";

export const revalidate = 60; // Revalidate the page every 60 seconds

// Static metadata for the page
export const metadata: Metadata = {
  title: "PrivCo Dictionary | Financial Terms & Investment Definitions",
  description:
    "Comprehensive financial terms dictionary with over 398 finance and investment definitions. Expand your financial knowledge with PrivCo.",
  keywords: [
    "financial dictionary",
    "investment terms",
    "finance definitions",
    "financial glossary",
    "business terminology",
    "private company data",
  ],
  openGraph: {
    title: "PrivCo Dictionary | Financial Terms & Investment Definitions",
    description:
      "Comprehensive financial terms dictionary with over 398 finance and investment definitions. Expand your financial knowledge with PrivCo.",
    type: "website",
    url: "https://privco.com/knowledge-bank",
    images: [
      {
        url: "https://privco.com/images/dictionary/dictionary-header.png",
        width: 1200,
        height: 630,
        alt: "PrivCo Dictionary - Financial Terms and Investment Definitions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrivCo Dictionary | Financial Terms & Investment Definitions",
    description:
      "Comprehensive financial terms dictionary with over 398 finance and investment definitions.",
    images: ["https://privco.com/images/dictionary/dictionary-header.png"],
  },
  alternates: {
    canonical: "https://privco.com/knowledge-bank",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default async function KnowledgeBank() {
  const entries = await getKnowledgeBankEntries();

  // Group entries by first letter
  const entriesByLetter: Record<string, any[]> = {};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Initialize with empty arrays for each letter
  alphabet.forEach((letter) => {
    entriesByLetter[letter] = [];
  });
  entriesByLetter["Other"] = [];

  // Group entries by first letter
  entries.forEach((entry) => {
    if (!entry.entryName) {
      return;
    }

    const firstChar = entry.entryName.charAt(0).toUpperCase();
    if (alphabet.includes(firstChar)) {
      entriesByLetter[firstChar].push(entry);
    } else {
      entriesByLetter["Other"].push(entry);
    }
  });

  // Get only letters that have entries
  const alphabetList = alphabet.filter(
    (letter) => entriesByLetter[letter].length > 0
  );

  // Prepare data for JSON-LD Schema
  const glossaryItems = entries.map((entry) => ({
    "@type": "DefinedTerm",
    name: entry.entryName,
    url: `https://privco.com/knowledge-bank/${entry.slug}`,
  }));

  return (
    <main>
      {/* JSON-LD Schema for the dictionary/glossary */}
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": "https://privco.com/knowledge-bank",
          name: "PrivCo Dictionary",
          description:
            "Comprehensive financial terms dictionary with over 398 finance and investment definitions.",
          hasPart: glossaryItems,
        }}
      </JsonLd>

      <section aria-labelledby="hero-heading">
        <HeroHeader
          imageUrl="/images/dictionary/dictionary-header.png"
          title="PrivCo Dictionary"
          subtitle="Comprehensive financial terms dictionary with over 398 finance and investment definitions."
          ctaText="7-Day Full-Access Free Trial"
          ctaHref="https://system.privco.com/signup"
          cta2Href="/product"
          cta2Text="Learn More"
          altText="PrivCo Dictionary - Financial Terms and Investment Definitions"
        />
      </section>

      <SectionColor backgroundColor="white">
        <div className="container mx-auto px-4 py-8">
          {/* Alphabet navigation */}
          <nav aria-label="Dictionary alphabet navigation" className="mb-10">
            <ul className="flex flex-wrap justify-center border-b pb-4">
              {alphabet.map((letter) => (
                <li key={letter}>
                  {entriesByLetter[letter]?.length > 0 ? (
                    <a
                      href={`#${letter}`}
                      className="px-3 py-2 text-gray-600 hover:text-blue-600 inline-block"
                      aria-label={`Jump to terms starting with ${letter}`}
                    >
                      {letter}
                    </a>
                  ) : (
                    <span
                      className="px-3 py-2 text-gray-400 cursor-default inline-block"
                      aria-hidden="true"
                    >
                      {letter}
                    </span>
                  )}
                </li>
              ))}
              {entriesByLetter["Other"]?.length > 0 && (
                <li>
                  <a
                    href="#Other"
                    className="px-3 py-2 text-gray-600 hover:text-blue-600 inline-block"
                    aria-label="Jump to terms with non-alphabetical characters"
                  >
                    Other
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Entries grouped by letter */}
          <div className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
            {alphabetList.map(
              (letter) =>
                entriesByLetter[letter]?.length > 0 && (
                  <section
                    key={letter}
                    id={letter}
                    className="mb-10 bg-gray-50 p-4 rounded-lg"
                    aria-labelledby={`heading-${letter}`}
                  >
                    <h2
                      id={`heading-${letter}`}
                      className="text-4xl font-bold mb-4"
                    >
                      {letter}
                    </h2>
                    <ul className="space-y-4 border-l border-gray-300 pl-4">
                      {entriesByLetter[letter].map((entry) => (
                        <li key={entry.slug}>
                          <Link
                            href={`/knowledge-bank/${entry.slug}`}
                            className="text-gray-800 hover:text-blue-600 text-xl"
                          >
                            {entry.entryName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )
            )}

            {/* Other entries (non-alphabetical) */}
            {entriesByLetter["Other"]?.length > 0 && (
              <section
                id="Other"
                className="mb-10 bg-gray-50 p-4 rounded-lg"
                aria-labelledby="heading-other"
              >
                <h2 id="heading-other" className="text-3xl font-bold mb-4">
                  Other
                </h2>
                <ul className="space-y-4 border-l border-gray-300 pl-4">
                  {entriesByLetter["Other"].map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        href={`/knowledge-bank/${entry.slug}`}
                        className="text-gray-800 hover:text-blue-600 text-xl"
                      >
                        {entry.entryName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </SectionColor>
    </main>
  );
}
