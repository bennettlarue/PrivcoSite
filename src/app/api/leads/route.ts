import { NextRequest, NextResponse } from "next/server";
import { Lead } from "@/types/lead";

export async function POST(request: NextRequest) {
  try {
    const lead: Lead = await request.json();

    const {
      leadSource,
      firstName,
      lastName,
      company,
      country,
      state,
      phone,
      email,
      employees,
      useCase,
      product,
      orgType,
      companyIndustry,
      industryOfInterest,
      coverageRegion,
      revenueCriteria,
      comments,
    } = lead;

    // Basic validation - at minimum require name and email
    if (!lastName || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    // Map the useCase from the dropdown to the expected Salesforce format
    // The dropdown options like "Business Development" need to be sent in the format Salesforce expects
    const formattedUseCase = useCase ?? "";

    const params = new URLSearchParams({
      oid: process.env.SALESFORCE_ORG_ID || "00D41000002lqog", // Store this in .env file
      lead_source: leadSource ?? "Web",
      first_name: firstName ?? "",
      last_name: lastName ?? "",
      company: company ?? "",
      country: country ?? "",
      state: state ?? "",
      phone: phone ?? "",
      email: email ?? "",
      "00N4100000UTPs6": employees ?? "",
      "00N4100000UTPrd": formattedUseCase,
      "00N4100000UTPs7": product ?? "",
      "00N2M00000evtXG": orgType ?? "",
      "00N2M00000fSb6j": companyIndustry ?? "",
      "00N2M00000fSb6U": industryOfInterest ?? "",
      "00N2M00000fSb6t": coverageRegion ?? "",
      "00N2M00000fSb6o": revenueCriteria ?? "",
      "00N4100000UTPre": comments ?? "",
    });

    try {
      const salesforceRes = await fetch(
        "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params,
        }
      );

      if (!salesforceRes.ok) {
        throw new Error(`Salesforce API failed: ${salesforceRes.status}`);
      }

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Salesforce API error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to connect to Salesforce" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Lead processing error:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
