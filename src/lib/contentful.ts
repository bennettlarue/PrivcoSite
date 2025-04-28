// lib/contentful.ts
import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export interface KnowledgeBankEntry {
  entryName: string;
  entryExplanation: Document | null;
  slug: string;
}

// lib/contentful.ts
export async function getKnowledgeBankEntries(): Promise<KnowledgeBankEntry[]> {
  // First, let's get the total count of entries
  const countResponse = await contentfulClient.getEntries({
    content_type: "knowledgeBank",
    limit: 1,
  });

  const totalEntries = countResponse.total;
  const entriesPerPage = 1000; // Maximum allowed by Contentful
  const pages = Math.ceil(totalEntries / entriesPerPage);

  let allEntries: any[] = [];

  // Fetch all pages of results
  for (let page = 0; page < pages; page++) {
    const response = await contentfulClient.getEntries({
      content_type: "knowledgeBank",
      skip: page * entriesPerPage,
      limit: entriesPerPage,
      include: 2,
    });

    allEntries = [...allEntries, ...response.items];
  }

  // Map and then sort the entries manually
  const entries = allEntries
    .filter((item) => item.fields) // Ensure we have fields
    .map((item: any) => {
      // Log problematic entries for debugging

      return {
        id: item.sys.id,
        entryName: item.fields.entryName || "",
        entryExplanation: item.fields.entryExplanation || null,
        slug: item.fields.slug || item.sys.id, // Use ID as fallback slug
      };
    });

  // Sort the entries alphabetically by name
  return entries.sort((a, b) =>
    a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase())
  );
}
