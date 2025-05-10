"use client";

import React, { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

type BillingCycle = "monthly" | "annual";

const PricingCards: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");

  const selectPricing = {
    monthly: "$299",
    annual: "$167",
  };

  // Feature list with improved presentation
  const selectFeatures = [
    "500 company/investor profile views per month",
    "Most recent year of financial data",
    "Most recent funding round data",
    "Advanced search criteria including location, industry, keyword, year founded, revenue, EBITA, VC/PE status, and parent/subsidiary",
    "100 viewable results per search category",
    "50 total monthly searches across all categories",
    "50 monthly profile PDF downloads",
    "10,000 company contact records per month",
    "1,000 investor contact records per month",
    "1,000 contact searches and list builds",
  ];

  const enterpriseFeatures = [
    "Unlimited company/investor profile views",
    "All available years of financial data",
    "All available funding round data",
    "Additional search criteria: employee size, revenue growth rate, total funding raised, latest funding year, latest valuation",
    "500 viewable results per search category (5x more than Select)",
    "500 total monthly searches (10x more than Select)",
    "500 monthly profile PDF downloads with rollover (6,000 annually)",
    "Dedicated account manager",
    "Access to PrivCo Data Team for custom requests",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Select Plan Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white">
          {/* Accent Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-green-600"></div>

          <div className="p-8">
            {/* Card Header */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  <span className="text-green-600">PrivCo</span> Select
                </h3>

                {/* Billing Toggle */}
                <div className="flex p-1 rounded-lg bg-gray-100">
                  <button
                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                      billingCycle === "annual"
                        ? "bg-white shadow-sm text-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setBillingCycle("annual")}
                  >
                    Annual
                  </button>
                  <button
                    className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                      billingCycle === "monthly"
                        ? "bg-white shadow-sm text-emerald-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-3">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {selectPricing[billingCycle]}
                  </span>
                  <span className="ml-2 text-xl text-gray-500">/month</span>
                </div>
                {billingCycle === "annual" && (
                  <div className="text-green-600 font-medium mt-1.5">
                    Save $1,584/year with annual billing
                  </div>
                )}
              </div>

              <p className="text-xl font-medium text-gray-700">
                Powerful private-company search
              </p>
            </div>
            {/* CTA Button */}
            <button className="w-full border border-gray-200 bg-green-600 hover:bg-green-800 hover:border-green-400 shadow-sm hover:shadow text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center mb-8 group">
              <span className="mr-2">Start 7-Day Free Trial</span>
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            {/* Feature List */}
            <div className="">
              <ul className="space-y-3">
                {selectFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Plan Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white">
          {/* Accent Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--privco-blue)] to-blue-600"></div>

          <div className="p-8">
            {/* Card Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <span className="text-[var(--privco-blue)]">PrivCo</span>{" "}
                Enterprise
              </h3>

              {/* Price */}
              <div className="mb-3">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    Custom
                  </span>
                </div>
              </div>

              <p className="text-xl font-medium text-gray-700">
                Custom Data Solutions for Teams
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full border border-gray-200 bg-[var(--privco-blue)] hover:bg-blue-950 hover:border-[var(--privco-lightblue)] shadow-sm hover:shadow text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center mb-8 group">
              <span className="mr-2">Contact Sales</span>
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Feature List */}
            <div className="">
              <p className="font-medium text-gray-900 mb-3">
                Everything in Select, plus:
              </p>
              <ul className="space-y-3">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[var(--privco-blue)] mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
