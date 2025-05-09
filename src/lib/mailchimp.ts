// src/lib/mailchimp.ts
import mailchimp from "@mailchimp/mailchimp_marketing";

// Initialize the client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

// Helper to fetch campaigns
export async function getRecentCampaigns(count = 20, offset = 0) {
  try {
    const response = await mailchimp.campaigns.list({
      count,
      offset,
      status: "sent",
      sortField: "send_time",
      sortDir: "desc",
    });

    return response;
  } catch (error) {
    console.error("Error fetching Mailchimp campaigns:", error);
    return [];
  }
}

// Helper to fetch campaign content
export async function getCampaignContent(campaignId: string) {
  try {
    const response = await mailchimp.campaigns.getContent(campaignId);
    return response;
  } catch (error) {
    console.error(`Error fetching content for campaign ${campaignId}:`, error);
    return null;
  }
}

// Helper to fetch subscriber lists
export async function getLists() {
  try {
    const response = await mailchimp.lists.getAllLists();
    return response;
  } catch (error) {
    console.error("Error fetching Mailchimp lists:", error);
    return [];
  }
}

// Helper to fetch recent emails from a specific list
export async function getListEmails(
  listId = process.env.MAILCHIMP_LIST_ID,
  count = 10
) {
  if (!listId) {
    throw new Error("List ID is required");
  }

  try {
    const response = await mailchimp.campaigns.list({
      count,
      listId: listId,
      status: "sent",
      sortField: "send_time",
      sortDir: "desc",
    });

    return response;
  } catch (error) {
    console.error(`Error fetching emails for list ${listId}:`, error);
    return [];
  }
}

// Helper to fetch a specific campaign by ID
export async function getCampaign(campaignId: string) {
  try {
    // Fix: Use type assertion to tell TypeScript this method exists
    const response = await (mailchimp.campaigns as any).get(campaignId);
    return response;
  } catch (error) {
    console.error(`Error fetching campaign ${campaignId}:`, error);
    return null;
  }
}

export async function getCampaignsTotal() {
  try {
    // Get just 1 campaign to retrieve the total count
    const response = await mailchimp.campaigns.list({
      count: 1,
      offset: 0,
      status: "sent",
    });

    return response;
  } catch (error) {
    console.error("Error fetching total campaign count:", error);
    return 0;
  }
}
