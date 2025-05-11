// app/blog/[slug]/page.tsx
import { contentfulClient } from "@/lib/contentful";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { marked } from "marked";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import PurchaseForm from "@/app/components/blog/PurchaceForm";
import { JsonLd } from "@/app/components/JsonLd";
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

    // Base URL for proper canonical and structured data
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

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

    // Format publish and modified dates for metadata
    const publishDate = post.fields.publishDate || post.sys.createdAt;
    const modifiedDate = post.sys.updatedAt;

    // Determine most relevant keywords from post tags and title
    const titleKeywords = post.fields.title
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3)
      .slice(0, 3);

    const keywords = [
      ...post.fields.tags,
      ...titleKeywords,
      "private markets",
      "market analysis",
      "industry insights",
    ];

    return {
      title: `${post.fields.title} | PrivCo Blog`,
      description:
        post.fields.description ||
        `Read ${post.fields.title} on the PrivCo blog for insights on private markets and industry trends.`,
      authors: post.fields.author
        ? [{ name: post.fields.author.fields.name }]
        : undefined,
      keywords: keywords,
      openGraph: {
        title: post.fields.title,
        description:
          post.fields.description ||
          `Read ${post.fields.title} on the PrivCo blog`,
        type: "article",
        url: `${baseUrl}/blog/${slug}`,
        publishedTime: publishDate,
        modifiedTime: modifiedDate,
        authors: post.fields.author
          ? [post.fields.author.fields.name]
          : undefined,
        tags: post.fields.tags,
        images: post.fields.image
          ? [
              {
                url: `https:${post.fields.image.fields.file.url}`,
                width:
                  post.fields.image.fields.file.details?.image?.width || 1200,
                height:
                  post.fields.image.fields.file.details?.image?.height || 630,
                alt: post.fields.image.fields.title || post.fields.title,
              },
              ...previousImages,
            ]
          : previousImages,
      },
      twitter: {
        card: "summary_large_image",
        title: post.fields.title,
        description:
          post.fields.description ||
          `Read ${post.fields.title} on the PrivCo blog`,
        images: post.fields.image
          ? [`https:${post.fields.image.fields.file.url}`]
          : undefined,
        creator: "@PrivCo",
        site: "@PrivCo",
      },
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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

    // Base URL for proper canonical and structured data
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

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
            url: `${baseUrl}/authors/${post.fields.author.fields.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`,
          }
        : undefined,
      publisher: {
        "@type": "Organization",
        name: "PrivCo",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo.png`, // Update with your actual logo URL
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${slug}`,
      },
      keywords: post.fields.tags.join(", "),
      wordCount: wordCount,
    };

    // Breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${baseUrl}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.fields.title,
          item: `${baseUrl}/blog/${slug}`,
        },
      ],
    };

    // Author structured data (if author exists)
    const authorData = post.fields.author
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: post.fields.author.fields.name,
          url: `${baseUrl}/authors/${post.fields.author.fields.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
          image: post.fields.author.fields.image
            ? `https:${post.fields.author.fields.image.fields.file.url}`
            : undefined,
          jobTitle: "Author",
          worksFor: {
            "@type": "Organization",
            name: "PrivCo",
          },
        }
      : null;

    // Parse the body content
    const bodyContent = await markdownParser(post.fields.body);
    const authorBio = post.fields.author?.fields.bio
      ? await markdownParser(post.fields.author.fields.bio)
      : "";

    // Get first paragraph for meta description if needed
    const firstParagraph =
      post.fields.body.split("\n").find((p) => p.trim().length > 100) || "";

    return (
      <>
        {/* Structured data components */}

        {/* Breadcrumb structured data */}
        <JsonLd>{breadcrumbData}</JsonLd>
        {/* Author structured data (if available) */}
        {authorData && <JsonLd>{authorData}</JsonLd>}

        <main className="min-h-screen py-8 mt-14 bg-white">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto mb-4 px-4">
            <ol className="flex text-sm text-gray-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-indigo-600">
                  Home
                </Link>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-600">
                  Blog
                </Link>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li className="text-gray-700 font-medium" aria-current="page">
                {post.fields.title}
              </li>
            </ol>
          </nav>

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
                      <Link
                        key={tag}
                        href={`/blog/tags/${encodeURIComponent(
                          tag.toLowerCase()
                        )}`}
                        className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-slate-200"
                      >
                        {tag}
                      </Link>
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
                      <Link
                        href={`/authors/${post.fields.author.fields.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="font-medium hover:text-indigo-600"
                      >
                        {post.fields.author.fields.name}
                      </Link>
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
                      aria-hidden="true"
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

              {/* Related topics/tags section - important for internal linking */}
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

              {/* Author bio section - good for E-E-A-T signals */}
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

              {/* Call to Action - only shown if shouldHideSalesForm is false or undefined */}
              {!post.fields.shouldHideSalesForm && <PurchaseForm />}

              {/* Related Posts Section - Static, but would be better if dynamic */}
              <section className="mt-12 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-6">You may also like</h2>
                <p className="text-gray-500 mb-4">
                  Explore more insights on private market trends and analysis.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/blog"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View All Posts
                  </Link>
                </div>
              </section>

              {/* Pagination - Navigate between posts */}
              <nav className="mt-12 border-t border-gray-200 pt-6 flex justify-between items-center">
                <div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                    Back to Blog
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
