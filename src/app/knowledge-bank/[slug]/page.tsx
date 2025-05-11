// app/knowledge-bank/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getKnowledgeBankEntries } from "@/lib/contentful";
import { Document } from "@contentful/rich-text-types";
import SectionColor from "@/app/components/content-blocks/SectionColor";
import RowPadding from "@/app/components/content-containers/RowPadding";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JsonLd } from "@/app/components/JsonLd";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const entries = await getKnowledgeBankEntries();

  return entries
    .filter((entry) => !!entry.slug)
    .map((entry) => ({
      slug: entry.slug,
    }));
}

type Params = Promise<{ slug: string }>;

// Generate dynamic metadata for each dictionary entry
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const entries = await getKnowledgeBankEntries();
    const entry = entries.find((entry) => entry.slug === slug);

    if (!entry) {
      return {
        title: "Term Not Found | PrivCo Dictionary",
        description:
          "The requested financial term could not be found in the PrivCo Dictionary.",
      };
    }

    // Extract plain text from the rich text content for description
    let plainTextDescription = "";
    if (entry.entryExplanation) {
      // This is a simple approach - you might want to implement a more robust rich text to plain text converter
      const richTextString = JSON.stringify(entry.entryExplanation);
      plainTextDescription = richTextString
        .replace(/"content":\[\{"value":"([^"]+)"/g, "$1")
        .replace(/["{}\[\],:]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .substring(0, 160);
    }

    return {
      title: `${entry.entryName} | Financial Term Definition | PrivCo Dictionary`,
      description:
        plainTextDescription ||
        `Definition and explanation of ${entry.entryName} in finance and investment terminology.`,
      keywords: [
        entry.entryName,
        "financial term",
        "investment definition",
        "finance dictionary",
        "business glossary",
      ],
      openGraph: {
        title: `${entry.entryName} | Financial Term Definition`,
        description:
          plainTextDescription ||
          `Definition and explanation of ${entry.entryName} in finance and investment terminology.`,
        url: `https://privco.com/knowledge-bank/${slug}`,
        type: "article",
        images: [
          {
            url: "https://privco.com/images/dictionary/dictionary-header.png", // You might want to customize this per term
            width: 1200,
            height: 630,
            alt: `${entry.entryName} - Financial Term Definition`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${entry.entryName} | PrivCo Dictionary`,
        description:
          plainTextDescription ||
          `Definition and explanation of ${entry.entryName} in finance and investment terminology.`,
        images: ["https://privco.com/images/dictionary/dictionary-header.png"],
      },
      alternates: {
        canonical: `https://privco.com/knowledge-bank/${slug}`,
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "PrivCo Dictionary | Financial Term Definition",
      description:
        "Comprehensive financial terms and investment definitions in the PrivCo Dictionary.",
    };
  }
}

export default async function KnowledgeBankDetail({
  params,
}: {
  params: Params;
}) {
  try {
    const { slug } = await params;

    const entries = await getKnowledgeBankEntries();

    // Sort entries alphabetically by name to ensure consistent navigation
    const sortedEntries = [...entries].sort((a, b) =>
      a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase())
    );

    // Find the current entry
    const currentIndex = sortedEntries.findIndex(
      (entry) => entry.slug === slug
    );

    if (currentIndex === -1) {
      return notFound();
    }

    const entry = sortedEntries[currentIndex];

    // Find previous and next entries
    const prevEntry = currentIndex > 0 ? sortedEntries[currentIndex - 1] : null;
    const nextEntry =
      currentIndex < sortedEntries.length - 1
        ? sortedEntries[currentIndex + 1]
        : null;

    // Extract plain text from rich text for structured data
    let plainTextDefinition = "";
    if (entry.entryExplanation) {
      // Simple approach - implement a more robust solution in production
      const richTextString = JSON.stringify(entry.entryExplanation);
      plainTextDefinition = richTextString
        .replace(/"content":\[\{"value":"([^"]+)"/g, "$1")
        .replace(/["{}\[\],:]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    return (
      <main>
        {/* JSON-LD Schema for the dictionary term */}
        <JsonLd>
          {{
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: entry.entryName,
            description: plainTextDefinition,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "PrivCo Dictionary",
              url: "https://privco.com/knowledge-bank",
            },
          }}
        </JsonLd>

        <SectionColor backgroundColor="white">
          <RowPadding>
            <article className="max-w-[900px] mx-auto">
              <div className="container mx-auto px-4 py-8">
                <header>
                  <h1 className="text-4xl font-bold mb-6">{entry.entryName}</h1>
                </header>

                <div className="prose max-w-none mb-12 text-lg">
                  {entry.entryExplanation &&
                    documentToReactComponents(
                      entry.entryExplanation as unknown as Document
                    )}
                </div>

                {/* Previous/Next navigation */}
                <nav
                  aria-label="Dictionary navigation"
                  className="flex justify-between mt-16 pt-8 border-t"
                >
                  <div className="flex-1">
                    <p className="text-gray-500 mb-2">Previous Term</p>
                    {prevEntry ? (
                      <Link
                        href={`/knowledge-bank/${prevEntry.slug}`}
                        className="text-xl font-semibold text-blue-600 hover:underline flex items-center"
                        rel="prev"
                        aria-label={`Previous term: ${prevEntry.entryName}`}
                      >
                        <ChevronLeft className="mr-1" aria-hidden="true" />
                        {prevEntry.entryName}
                      </Link>
                    ) : (
                      <span className="text-xl font-semibold text-gray-400">
                        None
                      </span>
                    )}
                  </div>

                  <div className="flex-1 text-right">
                    <p className="text-gray-500 mb-2">Next Term</p>
                    {nextEntry ? (
                      <Link
                        href={`/knowledge-bank/${nextEntry.slug}`}
                        className="text-xl font-semibold text-blue-600 hover:underline flex items-center justify-end"
                        rel="next"
                        aria-label={`Next term: ${nextEntry.entryName}`}
                      >
                        {nextEntry.entryName}{" "}
                        <ChevronRight className="ml-1" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span className="text-xl font-semibold text-gray-400">
                        None
                      </span>
                    )}
                  </div>
                </nav>

                {/* Breadcrumb navigation for SEO */}
                <nav aria-label="Breadcrumb" className="mt-12 pt-4 border-t">
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
                      <Link
                        href="/knowledge-bank"
                        className="hover:text-blue-600"
                      >
                        Dictionary
                      </Link>
                      <span className="mx-2" aria-hidden="true">
                        /
                      </span>
                    </li>
                    <li
                      className="text-gray-700 font-medium"
                      aria-current="page"
                    >
                      {entry.entryName}
                    </li>
                  </ol>
                </nav>

                {/* Back to dictionary link */}
                <div className="mt-8">
                  <Link
                    href="/knowledge-bank"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronLeft className="mr-1" aria-hidden="true" />
                    Back to Dictionary
                  </Link>
                </div>
              </div>
            </article>
          </RowPadding>
        </SectionColor>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch knowledge bank entry:", error);
    return notFound();
  }
}
