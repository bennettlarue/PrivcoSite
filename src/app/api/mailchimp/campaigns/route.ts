// src/app/api/mailchimp/campaigns/route.ts
import { getRecentCampaigns, getCampaignsTotal } from "@/lib/mailchimp";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const count = parseInt(url.searchParams.get("count") || "20", 10);
  const page = parseInt(url.searchParams.get("page") || "1", 10);

  // Calculate offset for pagination
  const offset = (page - 1) * count;

  try {
    // Get both campaigns and total count
    const [campaigns, totalItems] = await Promise.all([
      getRecentCampaigns(count, offset),
      getCampaignsTotal(),
    ]);

    return NextResponse.json({
      campaigns,
      total_items: totalItems,
      current_page: page,
      items_per_page: count,
    });
  } catch (error) {
    console.error("Error in campaigns route:", error);
    return NextResponse.json(
      { error: "Failed to fetch campaigns" },
      { status: 500 }
    );
  }
}
