// src/app/newsletters/[id]/page.tsx
import { getCampaign, getCampaignContent } from "@/lib/mailchimp";
import DOMPurify from "isomorphic-dompurify";
import { makeMailchimpContentResponsive } from "@/lib/mailchimpHelper";

export default async function NewsletterPage({
  params,
}: {
  params: { id: string };
}) {
  // Ensure params is fully resolved
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Fetch both the campaign details and content in parallel
  const [campaignDetails, contentData] = await Promise.all([
    getCampaign(id),
    getCampaignContent(id),
  ]);

  const title = campaignDetails?.settings?.subject_line || "Newsletter";
  const sendDate = campaignDetails?.send_time
    ? new Date(campaignDetails.send_time).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  if (!contentData) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Newsletter not found</h1>
          <p className="mt-4">
            The newsletter you're looking for could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Extract the HTML content
  const htmlContent =
    "html" in contentData && contentData.html ? contentData.html : "";

  // Make the content responsive
  const responsiveHtml = makeMailchimpContentResponsive(htmlContent);

  // Sanitize the HTML
  const sanitizedHtml = DOMPurify.sanitize(responsiveHtml);

  return (
    <div className="container mx-auto px-2 overflow-hidden mt-28 mb-10 pt-5 max-w-[800px]">
      <div className="px-2">
        <h1 className="text-5xl font-bold mb-2 text-[var(--privco-blue)] max-w-[800px] leading-tight">
          {title}
        </h1>
        {sendDate && <p className="text-gray-500 mb-4">{sendDate}</p>}
      </div>
      <div
        className="mailchimp-content max-w-full mt-[-20px]"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  );
}
