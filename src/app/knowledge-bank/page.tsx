// app/knowledge-bank/page.tsx
import Link from "next/link";
import { getKnowledgeBankEntries } from "@/lib/contentful";
import MainHeadline from "../components/content-blocks/MainHeadline";
import RowPadding from "../components/content-containers/RowPadding";
import SectionColor from "../components/content-blocks/SectionColor";
import HeroHeader from "../components/content-blocks/HeroHeader";

export const revalidate = 60; // Revalidate the page every 60 seconds

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

  return (
    <div>
      <div>
        <HeroHeader
          imageUrl="/images/dictionary/dictionary-header.png"
          title="PrivCo Dictionary
"
          subtitle="Comprehensive financial terms dictionary with over 398 finance and investment definitions.

"
          ctaText="7-Day Full-Access Free Trial"
          ctaHref="/api"
          altText="Hero background image"
        />
      </div>
      <SectionColor backgroundColor="white">
        <div className="container mx-auto px-4 py-8">
          {/* Alphabet navigation */}
          <div className="flex flex-wrap justify-center mb-10 border-b pb-4">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className={`px-3 py-2 ${
                  entriesByLetter[letter]?.length > 0
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-gray-400 cursor-default"
                }`}
              >
                {letter}
              </a>
            ))}
            {entriesByLetter["Other"]?.length > 0 && (
              <a
                href="#Other"
                className="px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Other
              </a>
            )}
          </div>

          {/* Entries grouped by letter */}
          <div className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
            {alphabetList.map(
              (letter) =>
                entriesByLetter[letter]?.length > 0 && (
                  <div
                    key={letter}
                    id={letter}
                    className="mb-10 bg-gray-50 p-4 rounded-lg"
                  >
                    <h2 className="text-4xl font-bold mb-4">{letter}</h2>
                    <div className="space-y-4 border-l border-gray-300 pl-4">
                      {entriesByLetter[letter].map((entry) => (
                        <div key={entry.slug} className="">
                          <Link
                            href={`/knowledge-bank/${entry.slug}`}
                            className="text-gray-800 hover:text-blue-600 text-xl"
                          >
                            {entry.entryName}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}

            {/* Other entries (non-alphabetical) */}
            {entriesByLetter["Other"]?.length > 0 && (
              <div id="Other" className="mb-10">
                <h2 className="text-3xl font-bold mb-4">Other</h2>
                <div className="space-y-4">
                  {entriesByLetter["Other"].map((entry) => (
                    <div key={entry.slug} className="ml-4">
                      <Link
                        href={`/knowledge-bank/${entry.slug}`}
                        className="text-gray-800 hover:text-blue-600"
                      >
                        {entry.entryName}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionColor>
    </div>
  );
}
