// app/blog/[slug]/page.tsx
import { contentfulClient } from "@/lib/contentful";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { marked } from "marked";
import { Metadata } from "next";

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

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    // Remove the await from params
    const { slug } = params;

    const entries = (await contentfulClient.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    })) as unknown as ContentfulResponse;

    if (!entries.items.length) {
      return {
        title: "Post Not Found",
      };
    }

    const post = entries.items[0];

    return {
      title: post.fields.title,
      description: post.fields.description,
      openGraph: {
        title: post.fields.title,
        description: post.fields.description,
        type: "article",
        publishedTime: post.fields.publishDate,
        authors: post.fields.author
          ? [post.fields.author.fields.name]
          : undefined,
        tags: post.fields.tags,
        images: post.fields.image
          ? [
              {
                url: `https:${post.fields.image.fields.file.url}`,
                alt: post.fields.image.fields.title || post.fields.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.fields.title,
        description: post.fields.description,
        images: post.fields.image
          ? [`https:${post.fields.image.fields.file.url}`]
          : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post",
      description: "Unable to load blog post details",
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
  params: { slug: string };
}) {
  try {
    // Remove the await from params
    const { slug } = params;

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

    // Get reading time estimate (approximately 200 words per minute)
    const wordCount = post.fields.body.split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Featured Image (Full Width) */}
          {post.fields.image && (
            <div className="w-full h-64 md:h-96 overflow-hidden">
              <img
                src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.image.fields.title || post.fields.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-4 md:p-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-blue-600 hover:underline flex items-center text-sm"
              >
                <span>← Back to all posts</span>
              </Link>
            </div>

            {/* Header */}
            <header className="mb-8">
              {/* Tags and Featured indicator */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.fields.featured && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}

                {post.fields.tags &&
                  post.fields.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.fields.title}
              </h1>

              {/* Meta: Author, Date and Reading Time */}
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
                {post.fields.author && (
                  <div className="flex items-center mr-4">
                    {post.fields.author.fields.image && (
                      <img
                        src={`https:${post.fields.author.fields.image.fields.file.url}`}
                        alt={post.fields.author.fields.name}
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                    )}
                    <span>{post.fields.author.fields.name}</span>
                  </div>
                )}

                {publishDate && (
                  <>
                    <span className="mx-2">•</span>
                    <time dateTime={post.fields.publishDate}>
                      {publishDate}
                    </time>
                  </>
                )}

                <span className="mx-2">•</span>
                <span>{readingTime} min read</span>
              </div>

              {/* Description / Summary */}
              {post.fields.description && (
                <div className="text-lg text-gray-700 mb-6 italic border-l-4 border-gray-200 pl-4">
                  {post.fields.description}
                </div>
              )}
            </header>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {/* Render the markdown content */}
              <div
                dangerouslySetInnerHTML={{
                  __html: markdownParser(post.fields.body),
                }}
              />
            </div>

            {/* All Tags */}
            {post.fields.tags && post.fields.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Related Topics
                </h2>
                <div className="flex flex-wrap gap-2">
                  {post.fields.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio (if exists) */}
            {post.fields.author && post.fields.author.fields.bio && (
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-4">
                  {post.fields.author.fields.image && (
                    <img
                      src={`https:${post.fields.author.fields.image.fields.file.url}`}
                      alt={post.fields.author.fields.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-bold">
                      {post.fields.author.fields.name}
                    </h3>
                    <p className="text-sm text-gray-600">Author</p>
                  </div>
                </div>
                <div className="prose prose-sm">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.fields.author.fields.bio
                        ? markdownParser(post.fields.author.fields.bio)
                        : "",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Call to Action - only shown if shouldHideSalesForm is false or undefined */}
            {!post.fields.shouldHideSalesForm && (
              <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  Stay updated with PrivCo
                </h3>
                <p className="mb-4 text-blue-700">
                  Subscribe to our newsletter for the latest insights on private
                  companies.
                </p>
                <Link
                  href="/subscribe"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Subscribe Now
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
