// components/PurchaseForm.tsx
"use client";

import React, { useState } from "react";
import { Lead } from "@/types/lead";
import Link from "next/link";

const PurchaseForm = () => {
  const [formData, setFormData] = useState<Lead>({
    firstName: "", // We'll use this for full name
    lastName: "N/A", // Setting a default value as the API requires it
    email: "",
    phone: "",
    company: "",
    leadSource: "Article Dataset Page",
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    success: boolean | null;
    error: string | null;
  }>({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    // Special handling for name field - we're storing the full name in firstName
    // and using a placeholder for lastName to satisfy Salesforce requirements
    const dataToSubmit = {
      ...formData,
      // If you need to split the name, you could do it here
      // This is optional if your form collects full name in one field
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Clear form on success
      setFormData({
        firstName: "",
        lastName: "N/A",
        email: "",
        phone: "",
        company: "",
        leadSource: "Article Dataset Page",
      });

      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit form",
      });
    }
  };

  return (
    <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Purchase the Complete Company Dataset!
      </h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below for pricing details on the complete dataset,
        which includes company information, financials, employee data,
        valuation, and other growth signals.
      </p>

      {status.success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your interest! We'll send the pricing details to your
          email shortly.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-gray-700 font-medium mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company's name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="The email to send the report"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={status.submitting}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:bg-blue-400"
          >
            {status.submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <p className="mt-6 text-gray-700">
        If you already have an account, please{" "}
        <Link
          href={"https://system.privco.com/signup"}
          className="text-blue-600 hover:underline"
        >
          sign in
        </Link>{" "}
        to download this report.
      </p>
    </div>
  );
};

export default PurchaseForm;
