"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

type PlanTier = "select" | "enterprise";

type PlanFeature = {
  name: string;
  description?: string;
  selectValue: string | React.ReactNode;
  enterpriseValue: string | React.ReactNode;
};

type FeatureCategory = {
  title: string;
  features: PlanFeature[];
};

const PricingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlanTier>("select");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Group features by category for better organization
  const featureCategories: FeatureCategory[] = [
    {
      title: "Access & Limits",
      features: [
        {
          name: "Company/Investor Profile Views",
          description: "Number of profiles you can view per month",
          selectValue: "500/Month",
          enterpriseValue: "Unlimited",
        },
        {
          name: "Viewable Financial Data",
          selectValue: "Most Recent Year",
          enterpriseValue: "All Available",
        },
        {
          name: "Viewable Funding Round Data",
          selectValue: "Most Recent Year",
          enterpriseValue: "All Available",
        },
      ],
    },
    {
      title: "Search Capabilities",
      features: [
        {
          name: "Advanced Search Criteria",
          description: "Available filters for finding companies and investors",
          selectValue: (
            <div className="space-y-1">
              <ul className="list-disc list-inside text-sm">
                <li>Location</li>
                <li>Industry</li>
                <li>Keyword</li>
                <li>Year Founded</li>
                <li>Revenue</li>
                <li>EBITA</li>
                <li>VC/PE Status</li>
                <li>Parent/Subsidiary</li>
              </ul>
            </div>
          ),
          enterpriseValue: (
            <div className="space-y-1">
              <div className="font-medium text-blue-600 mb-1">
                All in Select Plus:
              </div>
              <ul className="list-disc list-inside text-sm">
                <li>Employee Size</li>
                <li>Revenue Growth Rate</li>
                <li>Total Funding Raised</li>
                <li>Latest Funding Year</li>
                <li>Latest Valuation</li>
              </ul>
            </div>
          ),
        },
        {
          name: "Viewable Search Results",
          description:
            "Search Categories: Companies, Investors, Fundings, Deals, People",
          selectValue: "100 Per Category",
          enterpriseValue: "500 Per Category",
        },
        {
          name: "Total Monthly Searches",
          description:
            "Search Categories: Companies, Investors, Fundings, Deals, People",
          selectValue: "50",
          enterpriseValue: "500",
        },
      ],
    },
    {
      title: "Exports & Downloads",
      features: [
        {
          name: "Monthly Profile PDF Downloads",
          selectValue: "50",
          enterpriseValue: (
            <div>
              <span className="text-blue-600 font-medium">500</span> (6000
              annually)
              <div className="text-sm text-gray-600">Rolls over each month</div>
            </div>
          ),
        },
        {
          name: "Company Contact Records",
          description: "Viewable per month (includes export)",
          selectValue: "10,000",
          enterpriseValue: "10,000",
        },
        {
          name: "Investor Contact Records",
          description: "Viewable per month (includes export)",
          selectValue: "1,000",
          enterpriseValue: "1,000",
        },
        {
          name: "Contact Searches and List Builds",
          description: "First 50 viewable per search",
          selectValue: "1,000",
          enterpriseValue: "1,000",
        },
      ],
    },
    {
      title: "Support & Services",
      features: [
        {
          name: "Dedicated Account Manager",
          selectValue: <X className="h-5 w-5 text-gray-400 mx-auto" />,
          enterpriseValue: (
            <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
          ),
        },
        {
          name: "Access to PrivCo Data Team for Custom Requests",
          selectValue: <X className="h-5 w-5 text-gray-400 mx-auto" />,
          enterpriseValue: (
            <CheckCircle className="h-5 w-5 text-emerald-500 mx-auto" />
          ),
        },
      ],
    },
  ];

  // Toggle category expansion for mobile view
  const toggleCategory = (title: string) => {
    if (expandedCategory === title) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(title);
    }
  };

  // Gets className for feature row to handle zebra striping
  const getFeatureRowClass = (categoryIndex: number, featureIndex: number) => {
    const isEven = (categoryIndex + featureIndex) % 2 === 0;
    return isEven ? "bg-gray-50" : "bg-white";
  };

  // Desktop view
  const DesktopView = () => (
    <div className="hidden lg:block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-3 bg-white">
        <div className="p-8 font-semibold text-3xl border-b flex items-center">
          <h2 className="text-gray-800">Plan Features</h2>
        </div>

        {/* Select Plan */}
        <div className="text-center p-8 border-b border-l border-r relative">
          <div className="absolute -top-1 right-0 left-0 h-1 bg-emerald-500"></div>
          <h2 className="md:text-3xl font-bold mb-2 text-gray-800">Select</h2>
          <p className="text-lg mb-4 text-gray-600">For growing teams</p>

          <button className="w-full border border-gray-200 bg-green-600 hover:bg-green-800 hover:border-green-400 shadow-sm hover:shadow text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center mb-8 group">
            <span className="mr-2 text-xl">Start 7-Day Free Trial</span>
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="text-center p-8 border-b border-r relative">
          <div className="absolute -top-1 right-0 left-0 h-1 bg-blue-600"></div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Enterprise</h2>
          <p className="text-lg mb-4 text-gray-600">For large organizations</p>

          <button className="w-full border border-gray-200 bg-[var(--privco-blue)] hover:bg-blue-950 hover:border-[var(--privco-lightblue)] shadow-sm hover:shadow text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center mb-8 group">
            <span className="mr-2 text-xl">Contact Sales</span>
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <div key={category.title}>
          {/* Category Header */}
          <div className="grid grid-cols-3 border-b bg-gray-100">
            <div className="p-4 border-r font-bold text-xl text-gray-700">
              {category.title}
            </div>
            <div className="p-4 border-r"></div>
            <div className="p-4"></div>
          </div>

          {/* Features */}
          {category.features.map((feature, featureIndex) => (
            <div
              key={feature.name}
              className={`grid grid-cols-3 border-b ${getFeatureRowClass(
                categoryIndex,
                featureIndex
              )}`}
            >
              <div className="p-5 border-r">
                <div className="font-medium text-gray-800">{feature.name}</div>
                {feature.description && (
                  <div className="text-sm text-gray-500 mt-1">
                    {feature.description}
                  </div>
                )}
              </div>
              <div className="p-5 border-r font-medium text-gray-700 flex items-center justify-center">
                <div className="text-center">{feature.selectValue}</div>
              </div>
              <div className="p-5 font-medium text-gray-700 flex items-center justify-center">
                <div className="text-center">{feature.enterpriseValue}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  // Mobile view
  const MobileView = () => (
    <div className="block lg:hidden overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      {/* Plan Selection Tabs */}
      <div className="flex transition-all duration-300 ease-in-out">
        <button
          className={`w-1/2 text-center py-4 px-5 font-bold text-lg transition duration-200 ease-in-out ${
            activeTab === "select"
              ? "bg-emerald-50 text-emerald-600 border-b-2 border-emerald-500"
              : "text-gray-600 hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("select")}
        >
          Select
        </button>
        <button
          className={`w-1/2 text-center py-4 px-5 font-bold text-lg transition duration-200 ease-in-out ${
            activeTab === "enterprise"
              ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab("enterprise")}
        >
          Enterprise
        </button>
      </div>

      {/* Plan Details */}
      <div className="p-6 bg-white border-b">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {activeTab === "select" ? "Select Plan" : "Enterprise Plan"}
          </h2>
          <p className="text-gray-600 mb-3">
            {activeTab === "select"
              ? "For growing teams"
              : "For large organizations"}
          </p>
        </div>

        {activeTab === "select" ? (
          <Link href={"https://system.privco.com/signup"}>
            <button className="bg-green-600 border hover:bg-green-800 transition-colors text-white py-3 text-lg font-bold px-6 w-full rounded-lg shadow-sm">
              Start 7-Day Free Trial
            </button>
          </Link>
        ) : (
          <Link href={"/contact"}>
            <button className="bg-[var(--privco-blue)] hover:bg-blue-950 transition-colors text-white py-3 text-lg font-bold px-6 w-full rounded-lg shadow-sm">
              Contact Sales
            </button>
          </Link>
        )}
      </div>

      {/* Feature Categories Accordion */}
      {featureCategories.map((category) => (
        <div key={category.title} className="border-b">
          <button
            className="w-full p-4 text-left font-bold text-lg flex justify-between items-center bg-gray-50"
            onClick={() => toggleCategory(category.title)}
          >
            {category.title}
            {expandedCategory === category.title ? (
              <ChevronUp className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600" />
            )}
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              expandedCategory === category.title
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {category.features.map((feature, index) => (
              <div
                key={feature.name}
                className={`border-t ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="p-4">
                  <div className="font-medium text-gray-800">
                    {feature.name}
                  </div>
                  {feature.description && (
                    <div className="text-sm text-gray-500 mt-1">
                      {feature.description}
                    </div>
                  )}
                  <div className="mt-3 p-3 bg-gray-100 rounded-lg font-medium">
                    {activeTab === "select"
                      ? feature.selectValue
                      : feature.enterpriseValue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <DesktopView />
      <MobileView />
    </div>
  );
};

export default PricingTable;
