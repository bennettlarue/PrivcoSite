import { createClient } from "contentful";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

// Define TypeScript interfaces for the General Article content
interface GeneralArticleFields {
  title: string;
  slug: string;
  body: string;
  description: string;
  tags?: string[];
}

interface GeneralArticleEntry {
  fields: GeneralArticleFields;
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
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
    const articleData = await client.getEntry("19EaQZfTgTIGNQGTT4k0Qt");
    const article = articleData as unknown as GeneralArticleEntry;

    return {
      title: article.fields.title,
      description: article.fields.description,
    };
  } catch (error) {
    return {
      title: "Recruitment Fraud Warning",
      description: "Important information about recruitment fraud",
    };
  }
}

// Fetch data from Contentful
async function getArticleData() {
  try {
    // Fetch the article entry
    const articleData = await client.getEntry("19EaQZfTgTIGNQGTT4k0Qt");
    return articleData;
  } catch (error) {
    console.error("Error fetching article data:", error);
    return null;
  }
}

// Component to render markdown text with proper formatting
function MarkdownRenderer({ text }: { text: string }) {
  // Custom components for ReactMarkdown to style document elements
  const components: Components = {
    // Style headings appropriately
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>
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

    // Style links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  };

  return (
    <div className="article-content">
      <ReactMarkdown components={components}>{text}</ReactMarkdown>
    </div>
  );
}

export default async function RecruitmentFraudWarningPage() {
  const articleData = await getArticleData();

  if (!articleData) {
    notFound();
  }

  // Cast the entry to the correct type
  const article = articleData as unknown as GeneralArticleEntry;

  // Format the date from the sys.updatedAt field (since General Articles don't have updatedAt in fields)
  const lastUpdated = new Date(article.sys.updatedAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(lastUpdated);

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl mt-20">
      <article className="general-article">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold mb-4">{article.fields.title}</h1>
          <p className="text-gray-600">Last Updated: {formattedDate}</p>
        </header>

        <div className="prose max-w-none">
          {/* Render the article body */}
          <MarkdownRenderer text={article.fields.body} />
        </div>
      </article>
    </main>
  );
}
