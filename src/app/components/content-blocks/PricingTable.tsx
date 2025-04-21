"use client";

import React, { useState } from "react";

type PlanFeature = {
  name: string;
  selectValue: string | React.ReactNode;
  enterpriseValue: string | React.ReactNode;
  category?: string;
};

const PricingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"select" | "enterprise">("select");

  const features: PlanFeature[] = [
    {
      name: "Company/Investor Profile Views",
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
    {
      name: "Advanced Search Criteria",
      selectValue: (
        <div className="text-sm">
          Location, Industry, Keyword,
          <br />
          Year Founded, Revenue, EBITA,
          <br />
          VC/PE Status,
          <br />
          Parent/Subsidiary
        </div>
      ),
      enterpriseValue: (
        <div className="text-sm">
          <div className="font-medium">All in Select Plus:</div>
          Employee Size, Revenue Growth Rate,
          <br />
          Total Funding Raised, Latest Funding
          <br />
          Year, Latest Valuation
        </div>
      ),
    },
    {
      name: "Viewable Search Results",
      category:
        "(Search Categories: Companies, Investors, Fundings, Deals, People)",
      selectValue: "100 Per Search Category",
      enterpriseValue: "500 Per Search Category",
    },
    {
      name: "Total Monthly Searches",
      category:
        "(Search Categories: Companies, Investors, Fundings, Deals, People)",
      selectValue: "50",
      enterpriseValue: "500",
    },
    {
      name: "Monthly Profile PDF Downloads",
      selectValue: "50",
      enterpriseValue: (
        <div>
          500 (6000 annually)
          <br />
          Rolls over each month
        </div>
      ),
    },
    {
      name: "Company Contact Records Viewable Per Month",
      category: "(Includes Export)",
      selectValue: "10,000",
      enterpriseValue: "10,000",
    },
    {
      name: "Investor Contact Records Viewable Per Month",
      category: "(Includes Export)",
      selectValue: "1,000",
      enterpriseValue: "1,000",
    },
    {
      name: "Contact Searches and List Builds",
      category: "(first 50 viewable per search)",
      selectValue: "1,000",
      enterpriseValue: "1,000",
    },
    {
      name: "Dedicated Account Manager",
      selectValue: "",
      enterpriseValue: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mx-auto text-blue-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Access to PrivCo Data Team for Custom Requests",
      selectValue: "",
      enterpriseValue: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mx-auto text-blue-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  // Desktop view
  const DesktopView = () => (
    <div className="hidden lg:block relative">
      {/* Sticky header for desktop */}
      <div className="grid grid-cols-3 gap-0">
        <div className="p-6 font-semibold text-4xl border-b flex items-center border-r">
          <h2>Plan Features</h2>
        </div>
        <div className="text-center p-4 border-b border-r">
          <h2 className="text-4xl font-bold mb-3">Select</h2>
          <button className="bg-[var(--privco-green)] hover:bg-green-600 text-[var(--privco-white)] font-bold text-xl py-2 px-4 w-full rounded-md">
            Start 7-Day Free Trial
          </button>
        </div>
        <div className="text-center p-4 border-b border-r">
          <h2 className="text-4xl font-bold mb-3">Enterprise</h2>
          <button className="bg-[var(--privco-blue)] hover:bg-blue-600 text-[var(--privco-white)] font-bold text-xl py-2 px-4 w-full rounded-md">
            Choose This Plan
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-0">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className={`p-4 border-r flex items-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div>
                {" "}
                <div className="font-bold text-lg">{feature.name}</div>
                {feature.category && <div>{feature.category}</div>}
              </div>
            </div>
            <div
              className={`p-4 border-r font-bold text-lg flex items-center justify-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="text-center"> {feature.selectValue}</div>
            </div>
            <div
              className={`p-4 border-r font-bold text-lg flex items-center justify-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="text-center">{feature.enterpriseValue}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  // Mobile view
  const MobileView = () => (
    <div className="block lg:hidden">
      <div>
        <div className="flex border-b transition-all ease-in-out">
          {/* Select Button */}
          <div
            className={`w-1/2 text-center p-4 font-bold text-2xl cursor-pointer border rounded rounded-r-none transition duration-100 ease-in-out ${
              activeTab === "select"
                ? "bg-blue-100 text-[var(--privco-blue)] border-[var(--privco-blue)]"
                : "text-gray-600 border-gray-400 border-r-0 hover:bg-blue-50 hover-border-blue-200"
            }`}
            onClick={() => setActiveTab("select")}
          >
            Select
          </div>

          {/* Enterprise Button */}
          <div
            className={`w-1/2 text-center p-4 font-bold text-2xl cursor-pointer border rounded rounded-l-none  ${
              activeTab === "enterprise"
                ? "bg-blue-100 text-[var(--privco-blue)] border-[var(--privco-blue)] "
                : "text-gray-600 border-gray-400 border-l-0 hover:bg-blue-50 hover-border-blue-200"
            }`}
            onClick={() => setActiveTab("enterprise")}
          >
            Enterprise
          </div>
        </div>

        {/* Action button */}
        <div className="p-4 border-b">
          {activeTab === "select" ? (
            <button className="bg-[var(--privco-green)] hover:bg-green-600 text-white py-4 text-2xl font-bold px-6 w-full rounded-md">
              Start 7-Day Free Trial
            </button>
          ) : (
            <button className="bg-[var(--privco-blue)] hover:bg-blue-600 text-white py-4 text-2xl font-bold px-6 w-full rounded-md">
              Choose This Plan
            </button>
          )}
        </div>
      </div>

      {/* Feature list */}
      <div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <div className="flex">
              <div className="w-1/2 border-r p-5">
                {" "}
                <div className="font-medium">{feature.name}</div>
                {/* feature.category && (
                  <div className="">{feature.category}</div>
                )*/}{" "}
              </div>

              <div className="w-1/2 p-5 font-semibold">
                {activeTab === "select"
                  ? feature.selectValue
                  : feature.enterpriseValue}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="">
      <DesktopView />
      <MobileView />
    </div>
  );
};

export default PricingTable;
