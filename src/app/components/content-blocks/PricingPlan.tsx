import React from "react";

// Types for our component props
type Plan = {
  name: string;
  features: Record<string, boolean>;
};

type PricingTableProps = {
  category: string;
  features: string[];
  plans: Plan[];
};

const PricingTable: React.FC<PricingTableProps> = ({
  category,
  features,
  plans,
}) => {
  return (
    <div className="w-full mx-auto">
      <div className="mb-4">
        <div className="text-xl font-medium mb-5">{category}</div>
        <div className="grid grid-cols-4 gap-4 px-2">
          <div className="col-span-1"></div>
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              {plan.name}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 gap-4 py-3 px-2 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            } ${
              index !== features.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="col-span-1 text-sm text-gray-600">{feature}</div>
            {plans.map((plan, planIndex) => (
              <div key={planIndex} className="flex justify-center items-center">
                {plan.features[feature] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#043873"
                    width="17px"
                    height="17px"
                    viewBox="0 0 1920 1920"
                    className="mr-2"
                  >
                    <path
                      d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
                      fillRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    width="17px"
                    height="17px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-300"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
