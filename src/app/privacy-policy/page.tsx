import { createClient } from "contentful";
import { format } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

// Define TypeScript interfaces for the Privacy Policy content
interface PrivacyPolicyFields {
  type: string;
  title: string;
  updatedAt: string;
  body: string;
}

interface PrivacyPolicyEntry {
  fields: PrivacyPolicyFields;
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
    const privacyPolicy = await client.getEntry("11To8LuleVFbG2aDMicKsK");
    const policyData = privacyPolicy as unknown as PrivacyPolicyEntry;

    return {
      title: `${policyData.fields.title}`,
      description: "Privacy Policy for our services",
    };
  } catch (error) {
    return {
      title: "Privacy Policy",
      description: "Privacy Policy for our services",
    };
  }
}

// Fetch data from Contentful
async function getPrivacyPolicyData() {
  try {
    // Fetch the Privacy Policy entry
    const privacyPolicy = await client.getEntry("11To8LuleVFbG2aDMicKsK");
    return privacyPolicy;
  } catch (error) {
    console.error("Error fetching Privacy Policy data:", error);
    return null;
  }
}

// Component to render markdown legal text with proper formatting
function MarkdownLegalTextRenderer({ text }: { text: string }) {
  // Custom components for ReactMarkdown to style legal document elements
  const components: Components = {
    // Style headings appropriately
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold mt-4 mb-2">{children}</h4>
    ),

    // Style paragraphs
    p: ({ children }) => <p className="mb-4 text-lg">{children}</p>,

    // Style lists
    ul: ({ children }) => <ul className="mb-4 ml-6 list-disc">{children}</ul>,
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal text-lg">{children}</ol>
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

export default async function PrivacyPolicyPage() {
  const privacyPolicy = await getPrivacyPolicyData();

  if (!privacyPolicy) {
    notFound();
  }

  // Cast the entry to the correct type
  const policyData = privacyPolicy as unknown as PrivacyPolicyEntry;

  // Format the updatedAt date
  const formattedDate = format(
    new Date(policyData.fields.updatedAt),
    "MMMM d, yyyy"
  );

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl mt-20">
      <article className="legal-document">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold mb-4">{policyData.fields.title}</h1>
          <p className="text-gray-600">Last Updated: {formattedDate}</p>
        </header>

        <div className="prose max-w-none">
          {/* Render the privacy policy body */}
          <section className="policy-content">
            <MarkdownLegalTextRenderer text={policyData.fields.body} />
          </section>
        </div>
      </article>
    </main>
  );
}
