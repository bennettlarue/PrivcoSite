// app/insights/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { contentfulClient } from "@/lib/contentful";
import { format } from "date-fns";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";
import HeroHeader from "../components/content-blocks/HeroHeader";
import { BlogPost, ContentfulResponse } from "@/types/contentful";
import FeaturedPostCard from "../components/blog/FeaturedPostCard";
import RegularPostCard from "../components/blog/RegularPostCard";
import BlogPostJsonLd from "../components/seo/BlogPostJsonLd";

export const metadata: Metadata = {
  title: "Insights | PrivCo",
  description:
    "Exclusive insights into private industry trends derived from millions of data points.",
  openGraph: {
    title: "Insights | PrivCo",
    description:
      "Exclusive insights into private industry trends derived from millions of data points.",
    images: [
      {
        url: "/images/insights/insights-header.png",
        width: 1200,
        height: 630,
        alt: "PrivCo Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | PrivCo",
    description:
      "Exclusive insights into private industry trends derived from millions of data points.",
    images: ["/images/insights/insights-header.png"],
  },
};

export default async function InsightsPage() {
  const entries = (await contentfulClient.getEntries({
    content_type: "blogPost",
    order: ["-fields.publishDate"], // Sort by publish date (newest first)
  })) as unknown as ContentfulResponse;

  // Separate featured and regular posts
  const featuredPosts = entries.items.filter((post) => post.fields.featured);
  const regularPosts = entries.items.filter((post) => !post.fields.featured);

  // Base URL for structured data
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

  return (
    <>
      {/* Generate JSON-LD for each blog post */}
      {entries.items.map((post) => (
        <BlogPostJsonLd
          key={`jsonld-${post.sys.id}`}
          post={post}
          baseUrl={baseUrl}
        />
      ))}

      <main>
        <section aria-labelledby="insights-hero">
          <HeroHeader
            imageUrl="/images/insights/insights-header.png"
            title="Insights"
            subtitle="Exclusive insights into private industry trends derived from millions of data points."
            ctaText="7-Day Full-Access Free Trial"
            ctaHref="/api"
            altText="Data visualization representing private market insights"
          />
        </section>

        <SectionColor
          backgroundColor="var(--privco-white)"
          textColor="var(--privco-black)"
        >
          <div className="max-w-[1300px] mx-auto my-14">
            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
              <section
                aria-labelledby="featured-posts-heading"
                className="mb-16"
              >
                <h2
                  id="featured-posts-heading"
                  className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-8"
                >
                  Featured Insights
                </h2>
                <div className="space-y-8">
                  {featuredPosts.map((post) => (
                    <FeaturedPostCard key={post.sys.id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* Regular Posts Grid */}
            <section aria-labelledby="all-posts-heading">
              <h2
                id="all-posts-heading"
                className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-8"
              >
                Latest Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <RegularPostCard key={post.sys.id} post={post} />
                ))}
              </div>
            </section>
          </div>
        </SectionColor>
      </main>
    </>
  );
}
