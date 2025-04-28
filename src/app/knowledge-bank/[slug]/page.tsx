// app/knowledge-bank/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getKnowledgeBankEntries } from "@/lib/contentful";
import { Document } from "@contentful/rich-text-types";
import SectionColor from "@/app/components/content-blocks/SectionColor";
import RowPadding from "@/app/components/content-containers/RowPadding";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    return (
      <SectionColor backgroundColor="white">
        <RowPadding>
          <div className="max-w-[900px] mx-auto">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold mb-6">{entry.entryName}</h1>
              <div className="prose max-w-none mb-12 text-lg">
                {entry.entryExplanation &&
                  documentToReactComponents(
                    entry.entryExplanation as unknown as Document
                  )}
              </div>

              {/* Previous/Next navigation */}
              <div className="flex justify-between mt-16 pt-8 border-t">
                <div className="flex-1">
                  <p className="text-gray-500 mb-2">Previous Term</p>
                  {prevEntry ? (
                    <Link
                      href={`/knowledge-bank/${prevEntry.slug}`}
                      className="text-xl font-semibold text-blue-600 hover:underline flex items-center"
                    >
                      <ChevronLeft className="mr-1" />
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
                    >
                      {nextEntry.entryName} <ChevronRight className="ml-1" />
                    </Link>
                  ) : (
                    <span className="text-xl font-semibold text-gray-400">
                      None
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </RowPadding>
      </SectionColor>
    );
  } catch (error) {
    console.error("Failed to fetch knowledge bank entry:", error);
    return notFound();
  }
}
