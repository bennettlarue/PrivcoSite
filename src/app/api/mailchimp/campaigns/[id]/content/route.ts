// src/app/api/mailchimp/campaigns/[id]/content/route.ts
import { getCampaignContent } from "@/lib/mailchimp";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Make sure to await params if needed
    const id = context.params.id;
    const content = await getCampaignContent(id);
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch campaign content" },
      { status: 500 }
    );
  }
}
