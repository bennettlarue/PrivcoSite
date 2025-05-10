// components/seo/BlogPostJsonLd.tsx
import { BlogPost } from "@/types/contentful";

export default function BlogPostJsonLd({
  post,
  baseUrl,
}: {
  post: BlogPost;
  baseUrl: string;
}) {
  const publishDate = post.fields.publishDate;
  const modifiedDate = post.sys.updatedAt || publishDate;
  const imageUrl = post.fields.image
    ? `https:${post.fields.image.fields.file.url}`
    : `${baseUrl}/images/placeholder.jpg`;

  const authorName = post.fields.author?.fields.name || "PrivCo";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.fields.title,
    description: post.fields.description,
    image: imageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "PrivCo",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/insights/${post.fields.slug}`,
    },
    keywords: post.fields.tags?.join(", ") || "",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
