// src/app/api/mailchimp/campaigns/[id]/content/route.ts
import { getCampaignContent } from "@/lib/mailchimp";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const content = await getCampaignContent(params.id);
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch campaign content" },
      { status: 500 }
    );
  }
}
