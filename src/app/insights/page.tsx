// app/page.tsx
import Link from "next/link";
import { contentfulClient } from "@/lib/contentful";
import { format } from "date-fns";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";
import MainHeadline from "../components/content-blocks/MainHeadline";
import SectionColorLines from "../components/content-blocks/SectionColorLines";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import BigButton from "../components/content-blocks/BigButton";

// Define TypeScript interfaces for your Contentful data
interface Author {
  fields: {
    name: string;
  };
}

interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    description: string;
    publishDate: string;
    author?: Author;
    tags: string[];
    featured: boolean;
    image?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
}

interface ContentfulResponse {
  items: BlogPost[];
}

// Define the PageProps interface
interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const entries = (await contentfulClient.getEntries({
    content_type: "blogPost",
    order: ["-fields.publishDate"], // Sort by publish date (newest first)
  })) as unknown as ContentfulResponse;

  // Separate featured and regular posts
  const featuredPosts = entries.items.filter((post) => post.fields.featured);
  const regularPosts = entries.items.filter((post) => !post.fields.featured);

  return (
    <div>
      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <div>
            {" "}
            <MainHeadline headline="Insights">
              <p className="text-2xl font-medium">
                Exclusive insights into private industry trends derived from
                millions of data points.
              </p>
            </MainHeadline>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-6">
                Featured
              </h2>
              <div className="space-y-6">
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.sys.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <RegularPost key={post.sys.id} post={post} />
            ))}
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColorLines
        secondaryColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="Like what you see?">
              <div className="mx-auto">
                <BigButton
                  textColor="var(--privco-white)"
                  backgroundColor="var(--privco-green)"
                  border={true}
                >
                  Start Your 7-Day, Full-Access Free Trial
                </BigButton>
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColorLines>
    </div>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  const publishDate = post.fields.publishDate
    ? format(new Date(post.fields.publishDate), "MMMM d, yyyy")
    : null;

  return (
    <div className="border-b border-[var(--privco-blue)] hover:border-[var(--privco-lightblue)] overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <Link
        href={`/insights/${post.fields.slug}`}
        className="flex flex-col md:flex-row group"
      >
        {/* Image container - fixed aspect ratio */}
        <div className="w-full md:w-2/5">
          <div className="aspect-w-16 aspect-h-9 h-full overflow-hidden">
            {post.fields.image ? (
              <img
                src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.image.fields.title || post.fields.title}
                className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content container */}
        <div className="p-6 flex-1">
          <div className="mb-2">
            <span className="text-xs font-semibold text-green-600 uppercase">
              Featured
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-2">
            {post.fields.author && (
              <>
                <span>{post.fields.author.fields.name}</span>
                <span className="mx-2">•</span>
              </>
            )}
            {publishDate && <span>{publishDate}</span>}
          </div>

          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
            {post.fields.title}
          </h2>

          {post.fields.description && (
            <p className="text-gray-700 mb-4">{post.fields.description}</p>
          )}

          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.fields.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

function RegularPost({ post }: { post: BlogPost }) {
  const publishDate = post.fields.publishDate
    ? format(new Date(post.fields.publishDate), "MMMM d, yyyy")
    : null;

  // Define the content type badge (PRIVCO RESEARCH or NEWS)
  const contentType = post.fields.tags?.includes("research")
    ? "PRIVCO RESEARCH"
    : "NEWS";

  return (
    <div className="border-b border-[var(--privco-blue)] hover:border-[var(--privco-lightblue)] overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      <Link
        href={`/insights/${post.fields.slug}`}
        className="flex flex-col h-full group"
      >
        {/* Image container - fixed aspect ratio */}
        <div className="w-full">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            {post.fields.image ? (
              <img
                src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.image.fields.title || post.fields.title}
                className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No image</span>
              </div>
            )}
          </div>
        </div>

        {/* Content container */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span className="text-xs font-semibold text-gray-600 uppercase">
              {contentType}
            </span>
            <span className="mx-2">•</span>
            {publishDate && <span>{publishDate}</span>}
          </div>

          <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:underline">
            {post.fields.title}
          </h3>

          {post.fields.description && (
            <p className="text-sm text-gray-700 mb-4 line-clamp-3 flex-grow decoration-transparent">
              {post.fields.description}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
