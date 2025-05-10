// app/blog/[slug]/page.tsx
import { contentfulClient } from "@/lib/contentful";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { marked } from "marked";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

// Define your TypeScript interfaces here
interface Author {
  fields: {
    name: string;
    bio?: string;
    image?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface Image {
  fields: {
    file: {
      url: string;
      details?: {
        image?: {
          width: number;
          height: number;
        };
      };
    };
    title?: string;
    description?: string;
  };
}

interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    description: string;
    publishDate: string;
    author?: Author;
    tags: string[];
    featured: boolean;
    image?: Image;
    body: string;
    shouldHideSalesForm?: boolean;
  };
}

interface ContentfulResponse {
  items: BlogPost[];
}

// Generate metadata for the blog post
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { slug } = await params;

    // Fetch the specific blog post by slug
    const entries = (await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
      include: 1,
    })) as unknown as ContentfulResponse;

    // If no post is found, return basic metadata
    if (!entries.items.length) {
      return {
        title: "Blog Post Not Found | PrivCo",
        description: "The requested blog post could not be found.",
      };
    }

    const post = entries.items[0];
    const parentMetadata = await parent;
    const previousImages = parentMetadata.openGraph?.images || [];

    return {
      title: `${post.fields.title} | PrivCo Blog`,
      description:
        post.fields.description ||
        `Read ${post.fields.title} on the PrivCo blog`,
      authors: post.fields.author
        ? [{ name: post.fields.author.fields.name }]
        : undefined,
      keywords: post.fields.tags,
      openGraph: {
        title: post.fields.title,
        description: post.fields.description,
        type: "article",
        publishedTime: post.fields.publishDate || post.sys.createdAt,
        modifiedTime: post.sys.updatedAt,
        tags: post.fields.tags,
        images: post.fields.image
          ? [
              {
                url: `https:${post.fields.image.fields.file.url}`,
                alt: post.fields.image.fields.title || post.fields.title,
              },
              ...previousImages,
            ]
          : previousImages,
      },
      twitter: {
        card: "summary_large_image",
        title: post.fields.title,
        description: post.fields.description,
        images: post.fields.image
          ? [`https:${post.fields.image.fields.file.url}`]
          : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog | PrivCo",
      description: "Read the latest insights on private companies from PrivCo.",
    };
  }
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blogPost",
      limit: 1000, // Adjust based on your content volume
    });

    return entries.items.map((post: any) => ({
      slug: post.fields.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Configure markdown parser
const configureMarkdown = () => {
  // You can extend marked with custom renderers or plugins here
  marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert \n to <br>
  });

  return marked;
};

const markdownParser = configureMarkdown();

// The main page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;

    // Fetch the specific blog post by slug
    const entries = (await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
      include: 2, // Include linked entries (like authors) up to 2 levels deep
    })) as unknown as ContentfulResponse;

    // If no post is found, return 404
    if (!entries.items.length) {
      notFound();
    }

    const post = entries.items[0];

    // Format the date
    const publishDate = post.fields.publishDate
      ? format(new Date(post.fields.publishDate), "MMMM d, yyyy")
      : format(new Date(post.sys.createdAt), "MMMM d, yyyy"); // Fallback to creation date

    // Formatted ISO date for structured data and datetime attributes
    const isoDate = post.fields.publishDate
      ? new Date(post.fields.publishDate).toISOString()
      : new Date(post.sys.createdAt).toISOString();

    const modifiedDate = new Date(post.sys.updatedAt).toISOString();

    // Get reading time estimate (approximately 200 words per minute)
    const wordCount = post.fields.body.split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    // Generate structured data for the blog post (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.fields.title,
      description: post.fields.description,
      image: post.fields.image
        ? `https:${post.fields.image.fields.file.url}`
        : undefined,
      datePublished: isoDate,
      dateModified: modifiedDate,
      author: post.fields.author
        ? {
            "@type": "Person",
            name: post.fields.author.fields.name,
          }
        : undefined,
      publisher: {
        "@type": "Organization",
        name: "PrivCo",
        logo: {
          "@type": "ImageObject",
          url: "https://yourdomain.com/logo.png", // Replace with your actual logo URL
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://yourdomain.com/blog/${slug}`, // Replace with your actual domain
      },
      keywords: post.fields.tags.join(", "),
      wordCount: wordCount,
    };

    // Parse the body content
    const bodyContent = await markdownParser(post.fields.body);
    const authorBio = post.fields.author?.fields.bio
      ? await markdownParser(post.fields.author.fields.bio)
      : "";

    return (
      <>
        {/* Add structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <main className="min-h-screen py-8 mt-14 bg-white">
          <article className="max-w-4xl mx-auto overflow-hidden bg-white shadow-sm rounded-lg">
            {/* Featured Image (Full Width) */}
            {post.fields.image && (
              <div className="w-full h-72 md:h-96 overflow-hidden relative">
                <Image
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt={post.fields.image.fields.title || post.fields.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-4 md:p-8 mt-4">
              {/* Header */}
              <header className="mb-8">
                {/* Tags and Featured indicator */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.fields.featured && (
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  )}

                  {post.fields.tags &&
                    post.fields.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
                  {post.fields.title}
                </h1>

                {/* Meta: Author, Date and Reading Time */}
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
                  {post.fields.author && (
                    <div className="flex items-center mr-4">
                      {post.fields.author.fields.image ? (
                        <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden">
                          <Image
                            src={`https:${post.fields.author.fields.image.fields.file.url}`}
                            alt={post.fields.author.fields.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 mr-3 bg-slate-200 rounded-full flex items-center justify-center">
                          <span className="text-slate-600 font-medium">
                            {post.fields.author.fields.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <span className="font-medium">
                        {post.fields.author.fields.name}
                      </span>
                    </div>
                  )}

                  {publishDate && (
                    <>
                      <span className="mx-2 text-gray-400">•</span>
                      <time dateTime={isoDate} className="text-gray-600">
                        {publishDate}
                      </time>
                    </>
                  )}

                  <span className="mx-2 text-gray-400">•</span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {readingTime} min read
                  </span>
                </div>

                {/* Description / Summary */}
                {post.fields.description && (
                  <div className="text-lg text-gray-700 mb-8 italic border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded-r-md">
                    {post.fields.description}
                  </div>
                )}
              </header>

              {/* Main Content */}
              <div className="prose prose-lg lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-l-indigo-500">
                {/* Render the markdown content */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: bodyContent,
                  }}
                />
              </div>

              {/* 

              {post.fields.tags && post.fields.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    Related Topics
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {post.fields.tags.map((tag) => (
                      <Link
                        href={`/blog/tags/${encodeURIComponent(
                          tag.toLowerCase()
                        )}`}
                        key={tag}
                        className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {post.fields.author && post.fields.author.fields.bio && (
                <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex items-center mb-4">
                    {post.fields.author.fields.image ? (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={`https:${post.fields.author.fields.image.fields.file.url}`}
                          alt={post.fields.author.fields.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 mr-4 bg-slate-200 rounded-full flex items-center justify-center">
                        <span className="text-slate-600 text-xl font-medium">
                          {post.fields.author.fields.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {post.fields.author.fields.name}
                      </h3>
                      <p className="text-sm text-gray-600">Author</p>
                    </div>
                  </div>
                  <div className="prose prose-sm">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: authorBio,
                      }}
                    />
                  </div>
                </div>
              )}

              */}

              {/* Call to Action - only shown if shouldHideSalesForm is false or undefined */}
              {!post.fields.shouldHideSalesForm && (
                <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg text-center shadow-sm border border-indigo-100">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">
                    Stay updated with PrivCo
                  </h3>
                  <p className="mb-6 text-indigo-700 max-w-xl mx-auto">
                    Subscribe to our newsletter for the latest insights on
                    private companies and market trends.
                  </p>
                  <Link
                    href="/subscribe"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-sm"
                  >
                    Subscribe Now
                  </Link>
                </div>
              )}

              {/* Pagination - Navigate between posts */}
              <nav className="mt-12 border-t border-gray-200 pt-6 flex justify-between items-center">
                <div>
                  <Link
                    href="/insights"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                    Back to Insights
                  </Link>
                </div>

                <div className="text-sm text-gray-500">
                  <span>Published: {publishDate}</span>
                  {post.sys.updatedAt !== post.sys.createdAt && (
                    <span className="ml-3">
                      Updated:{" "}
                      {format(new Date(post.sys.updatedAt), "MMMM d, yyyy")}
                    </span>
                  )}
                </div>
              </nav>
            </div>
          </article>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
