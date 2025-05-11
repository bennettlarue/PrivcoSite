import { createClient } from "contentful";
import { format } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

// Define TypeScript interfaces for the Terms of Use content
interface TermsOfUseFields {
  type: string;
  title: string;
  updatedAt: string;
  body: string;
}

interface TermsOfUseEntry {
  fields: TermsOfUseFields;
  sys: {
    id: string;
  };
}

// Create a Contentful client using environment variables
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  try {
    const mainTerms = await client.getEntry("3lmgJEq10viK2OHX6HXdZm");
    const mainTermsData = mainTerms as unknown as TermsOfUseEntry;

    return {
      title: `${mainTermsData.fields.title}`,
      description: "Terms of Use for our services",
    };
  } catch (error) {
    return {
      title: "Terms of Use",
      description: "Terms of Use for our services",
    };
  }
}

// Fetch data from Contentful
async function getTermsOfUseData() {
  try {
    // Fetch the main Terms of Use entry
    const mainTerms = await client.getEntry("3lmgJEq10viK2OHX6HXdZm");

    // Fetch the continuation Terms of Use entry
    const contTerms = await client.getEntry("4o2qZvjupZtBtoKnwSUooY");

    return {
      mainTerms,
      contTerms,
    };
  } catch (error) {
    console.error("Error fetching Terms of Use data:", error);
    return null;
  }
}

// Component to render markdown legal text with proper formatting
function MarkdownLegalTextRenderer({ text }: { text: string }) {
  // Custom components for ReactMarkdown to style legal document elements
  const components: Components = {
    // Style headings appropriately
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold mt-4 mb-2">{children}</h4>
    ),

    // Style paragraphs
    p: ({ children }) => <p className="mb-4 text-lg">{children}</p>,

    // Style lists
    ul: ({ children }) => <ul className="mb-4 ml-6 list-disc">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,

    // Style emphasis and strong text
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,

    // Style blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="legal-text">
      <ReactMarkdown components={components}>{text}</ReactMarkdown>
    </div>
  );
}

export default async function TermsOfUsePage() {
  const data = await getTermsOfUseData();

  if (!data) {
    notFound();
  }

  const { mainTerms, contTerms } = data;

  // Cast the entries to the correct type
  const mainTermsData = mainTerms as unknown as TermsOfUseEntry;
  const contTermsData = contTerms as unknown as TermsOfUseEntry;

  // Format the updatedAt date
  const formattedDate = format(
    new Date(mainTermsData.fields.updatedAt),
    "MMMM d, yyyy"
  );

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl mt-20">
      <article className="legal-document">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold mb-4">
            {mainTermsData.fields.title}
          </h1>
          <p className="text-gray-600">Last Updated: {formattedDate}</p>
        </header>

        <div className="prose max-w-none">
          {/* Render the main terms body */}
          <section className="terms-content">
            <MarkdownLegalTextRenderer text={mainTermsData.fields.body} />
          </section>

          {/* Render the continuation terms body */}
          <section className="terms-content">
            <MarkdownLegalTextRenderer text={contTermsData.fields.body} />
          </section>
        </div>
      </article>
    </main>
  );
}
