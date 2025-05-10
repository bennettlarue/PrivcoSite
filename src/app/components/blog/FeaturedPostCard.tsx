// components/blog/FeaturedPostCard.tsx
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { BlogPost } from "@/types/contentful";

export default function FeaturedPostCard({ post }: { post: BlogPost }) {
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
    : "images/figure-1.png";
  const imageAlt =
    post.fields.image?.fields.title ||
    post.fields.image?.fields.description ||
    post.fields.title;

  return (
    <article className="bg-white border-b-2 border-[var(--privco-blue)] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <Link
        href={`/insights/${post.fields.slug}`}
        className="flex flex-col md:flex-row group"
        aria-label={`Read more about ${post.fields.title}`}
      >
        {/* Image container with proper aspect ratio */}
        <div className="w-full md:w-2/5 relative">
          <div className="aspect-video relative overflow-hidden w-full h-[300px]">
            <Image
              src={
                post.fields.image
                  ? `https:${post.fields.image.fields.file.url}`
                  : "/images/placeholder.jpg"
              }
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition duration-300 group-hover:scale-105"
              priority={true}
            />
            <div className="absolute top-0 left-0 m-4">
              <span className="bg-green-600 text-white text-xs font-bold uppercase px-3 py-1 rounded">
                Featured
              </span>
            </div>
          </div>
        </div>

        {/* Content container */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            {post.fields.author && (
              <div className="flex items-center">
                {post.fields.author.fields.avatar && (
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <Image
                      src={`https:${post.fields.author.fields.avatar.fields.file.url}`}
                      alt={post.fields.author.fields.name}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="font-medium">
                  {post.fields.author.fields.name}
                </span>
                <span className="mx-2">•</span>
              </div>
            )}
            {publishDate && <span>{publishDate}</span>}
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
            {post.fields.title}
          </h3>

          {post.fields.description && (
            <p className="text-gray-700 mb-4 line-clamp-3">
              {post.fields.description}
            </p>
          )}

          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {post.fields.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 text-blue-600 font-medium flex items-center group-hover:underline">
            Read article
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
