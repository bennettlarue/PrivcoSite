// src/app/api/mailchimp/subscribe/route.ts
import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Initialize mailchimp client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // The list ID should be configured in your environment variables
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (!listId) {
      return NextResponse.json(
        { error: "Mailchimp list ID is not configured" },
        { status: 500 }
      );
    }

    // Add member to list
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed", // Use 'pending' if you want double opt-in
      // No merge fields for first/last name since we're not collecting those
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed!",
      member_id: response,
    });
  } catch (error: any) {
    console.error("Subscription error:", error);

    // Handle the case where the email is already subscribed
    if (
      error.response &&
      error.response.body &&
      error.response.body.title === "Member Exists"
    ) {
      return NextResponse.json(
        { error: "This email is already subscribed to the newsletter." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to subscribe" },
      { status: 500 }
    );
  }
}
