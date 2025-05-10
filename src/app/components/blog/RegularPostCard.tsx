// components/blog/RegularPostCard.tsx
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { BlogPost } from "@/types/contentful";

export default function RegularPostCard({ post }: { post: BlogPost }) {
  const publishDate = post.fields.publishDate
    ? format(new Date(post.fields.publishDate), "MMMM d, yyyy")
    : null;

  // Calculate image dimensions with a default fallback
  const imageWidth =
    post.fields.image?.fields.file.details?.image?.width || 1200;
  const imageHeight =
    post.fields.image?.fields.file.details?.image?.height || 675;
  const imageUrl = post.fields.image
    ? `https:${post.fields.image.fields.file.url}`
    : "/images/placeholder.jpg";
  const imageAlt =
    post.fields.image?.fields.title ||
    post.fields.image?.fields.description ||
    post.fields.title;

  // Define the content type badge (PRIVCO RESEARCH or NEWS)
  const contentType = post.fields.tags?.includes("research")
    ? "PRIVCO RESEARCH"
    : "NEWS";

  return (
    <article className="bg-white border-b-2 border-[var(--privco-blue)] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col overflow-hidden">
      <Link
        href={`/insights/${post.fields.slug}`}
        className="flex flex-col h-full group"
        aria-label={`Read more about ${post.fields.title}`}
      >
        {/* Image container with proper aspect ratio */}
        <div className="relative aspect-video overflow-hidden w-full h-[200px]">
          <Image
            src={
              post.fields.image
                ? `https:${post.fields.image.fields.file.url}`
                : "/images/placeholder.jpg"
            }
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content container */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center text-xs text-gray-500 mb-3">
            {publishDate && (
              <time dateTime={post.fields.publishDate}>{publishDate}</time>
            )}
          </div>

          <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            {post.fields.title}
          </h3>

          {post.fields.description && (
            <p className="text-sm text-gray-700 mb-4 line-clamp-3 flex-grow">
              {post.fields.description}
            </p>
          )}

          <div className="mt-auto text-blue-600 font-medium text-sm flex items-center group-hover:underline">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
