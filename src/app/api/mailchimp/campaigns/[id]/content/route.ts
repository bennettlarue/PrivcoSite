// src/app/api/mailchimp/campaigns/[id]/content/route.ts
import { getCampaignContent } from "@/lib/mailchimp";
import { NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}

export async function GET(request: Request, context: Context) {
  try {
    const content = await getCampaignContent(context.params.id);
    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch campaign content" },
      { status: 500 }
    );
  }
}
