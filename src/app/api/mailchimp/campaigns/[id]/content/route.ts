// src/app/api/mailchimp/campaigns/[id]/content/route.ts
import { getCampaignContent } from "@/lib/mailchimp";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params || !params.id) {
    return NextResponse.json(
      { error: "Campaign ID is required" },
      { status: 400 }
    );
  }

  try {
    // Using await to ensure params is resolved
    const content = await getCampaignContent(params.id);
    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error fetching campaign content:", error);
    return NextResponse.json(
      { error: "Failed to fetch campaign content" },
      { status: 500 }
    );
  }
}
