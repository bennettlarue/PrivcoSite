// app/daily-stack/[id]/page.tsx
import { getCampaign, getCampaignContent } from "@/lib/mailchimp";
import DOMPurify from "isomorphic-dompurify";
import { makeMailchimpContentResponsive } from "@/lib/mailchimpHelper";
import { Metadata, ResolvingMetadata } from "next";
import { JsonLd } from "@/app/components/JsonLd";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate dynamic metadata for the newsletter page
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    // Resolve params
    const { id } = await params;

    // Fetch campaign details
    const campaignDetails = await getCampaign(id);

    if (!campaignDetails) {
      return {
        title: "Newsletter Not Found | The Daily Stack by PrivCo",
        description: "The requested newsletter could not be found.",
      };
    }

    // Extract metadata from campaign
    const title =
      campaignDetails?.settings?.subject_line || "Daily Stack Newsletter";
    const sendDate = campaignDetails?.send_time
      ? new Date(campaignDetails.send_time).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    // Base URL for canonical and OG URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";
    const canonicalUrl = `${baseUrl}/daily-stack/${id}`;

    // Extract preview text for description
    const previewText =
      campaignDetails?.settings?.preview_text ||
      "Read the latest insights on private markets from PrivCo's Daily Stack newsletter.";

    return {
      title: `${title} | The Daily Stack by PrivCo`,
      description: previewText,
      keywords: [
        "private markets newsletter",
        "financial insights",
        "PrivCo Daily Stack",
        "private company intelligence",
        "market analysis",
      ],
      authors: [{ name: "PrivCo" }],
      openGraph: {
        title: title,
        description: previewText,
        type: "article",
        url: canonicalUrl,
        publishedTime: campaignDetails?.send_time,
        modifiedTime: campaignDetails?.send_time,
        images: [
          {
            url: `${baseUrl}/images/daily-stack/daily-stack-og.png`, // Use a default OG image
            width: 1200,
            height: 630,
            alt: `The Daily Stack: ${title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: previewText,
        images: [`${baseUrl}/images/daily-stack/daily-stack-og.png`],
        site: "@PrivCo",
        creator: "@PrivCo",
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "The Daily Stack by PrivCo",
      description: "Private market financial insights newsletter by PrivCo.",
    };
  }
}

export default async function DailystackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    // Ensure params is fully resolved
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // Base URL for structured data
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

    // Fetch both the campaign details and content in parallel
    const [campaignDetails, contentData] = await Promise.all([
      getCampaign(id),
      getCampaignContent(id),
    ]);

    // If campaign not found, return 404
    if (!campaignDetails || !contentData) {
      notFound();
    }

    const title = campaignDetails?.settings?.subject_line || "Daily Stack";
    const sendDate = campaignDetails?.send_time
      ? new Date(campaignDetails.send_time).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    // ISO date for structured data
    const isoDate = campaignDetails?.send_time || new Date().toISOString();

    // Extract the HTML content
    const htmlContent =
      "html" in contentData && contentData.html ? contentData.html : "";

    // Make the content responsive
    const responsiveHtml = makeMailchimpContentResponsive(htmlContent);

    // Sanitize the HTML
    const sanitizedHtml = DOMPurify.sanitize(responsiveHtml);

    // Extract plain text content for description (first 150 chars)
    const tempElement =
      typeof document !== "undefined" ? document.createElement("div") : null;
    let plainTextDescription = "";

    if (tempElement) {
      tempElement.innerHTML = sanitizedHtml;
      plainTextDescription =
        tempElement.textContent?.slice(0, 150) + "..." || "";
    }

    // NewsArticle structured data
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: title,
      datePublished: isoDate,
      dateModified: isoDate,
      description:
        campaignDetails?.settings?.preview_text || plainTextDescription,
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
        "@id": `${baseUrl}/daily-stack/${id}`,
      },
    };

    return (
      <>
        {/* JSON-LD structured data */}
        <JsonLd>{articleSchema}</JsonLd>

        <main className="container mx-auto px-2 overflow-hidden mt-20 mb-10 pt-5 max-w-[800px]">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 text-sm">
            <ol className="flex-wrap">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link
                  href="/daily-stack"
                  className="text-blue-600 hover:underline"
                >
                  The Daily Stack
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li
                className="text-gray-600 truncate max-w-xs"
                aria-current="page"
              >
                {title}
              </li>
            </ol>
          </nav>

          <article>
            <header className="px-2 mb-6">
              <h1 className="text-4xl font-bold mb-2 text-[var(--privco-blue)] max-w-[800px] leading-tight">
                {title}
              </h1>
              {sendDate && (
                <time dateTime={isoDate} className="text-gray-500 block mb-4">
                  {sendDate}
                </time>
              )}
            </header>

            <div
              className="mailchimp-content max-w-full mt-[-20px]"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />

            <footer className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  href="/daily-stack"
                  className="text-blue-600 hover:underline"
                >
                  ← Back to newsletters
                </Link>
                <div>
                  <Link
                    href="/daily-stack#subscribe"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </footer>
          </article>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error in DailyStackPage:", error);
    notFound();
  }
}
