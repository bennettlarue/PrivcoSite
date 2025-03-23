import Checklist from "../components/content-blocks/Checklist";
import MainHeadline from "../components/content-blocks/MainHeadline";
import PricingTable from "../components/content-blocks/PricingPlan";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";
import RoundButton from "../components/content-elements/RoundButton";
import SquareButton from "../components/content-elements/SquareButton";

const analyticsFeatures = [
  "User Trends",
  "Event Funnels",
  "Heatmaps",
  "Dev Tools",
  "Co-browsing",
];

const plans = [
  {
    name: "Enterprise",
    features: {
      "User Trends": true,
      "Event Funnels": true,
      Heatmaps: true,
      "Dev Tools": true,
      "Co-browsing": true,
      "Frustration Signals": true,
    },
  },
  {
    name: "Business",
    features: {
      "User Trends": true,
      "Event Funnels": true,
      Heatmaps: true,
      "Dev Tools": true,
      "Co-browsing": true,
      "Frustration Signals": true,
    },
  },
  {
    name: "Free",
    features: {
      "User Trends": true,
      "Event Funnels": true,
      Heatmaps: true,
      "Dev Tools": true,
      "Co-browsing": true,
      "Frustration Signals": true,
    },
  },
];

// Define the PricingPlan component
const PricingPlan: React.FC<{
  headline: string;
  overline: string;
  checklistItems: string[];
  buttonText: string;
  buttonHref: string;
  backgroundColor?: string;
  discount?: string;
}> = ({
  headline,
  overline,
  checklistItems,
  buttonText,
  buttonHref,
  backgroundColor,
  discount,
}) => {
  return (
    <div className="border border-black flex flex-col p-9 shadow max-w-[600px] mx-auto w-full">
      <div className="w-fit mx-auto space-y-6">
        <h4
          className="w-fit py-1.5 px-4 font-semibold rounded-full"
          style={{
            backgroundColor: backgroundColor
              ? backgroundColor
              : "oklch(0.928 0.006 264.531)",
          }}
        >
          {overline}
        </h4>

        {discount ? (
          <div className="flex gap-4 items-baseline">
            <h3 className="text-3xl font-semibold text-orange-600">
              {discount}
            </h3>
            <h3 className="text-2xl font-semibold line-through">{headline}</h3>
          </div>
        ) : (
          <h3 className="text-3xl font-semibold">{headline}</h3>
        )}

        <RoundButton backgroundColor="#043873" textColor="#FFFFFF">
          {buttonText}
        </RoundButton>
        <div className="text-left">
          {" "}
          <Checklist items={checklistItems} />
        </div>
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <div>
      <SectionColor textColor="#000000" backgroundColor="#FFFFFF">
        <RowPadding>
          <div className="text-center">
            <MainHeadline headline="Pricing Plans">
              Choose the plan that fits your needs best.
            </MainHeadline>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <PricingPlan
              headline="$0/mo"
              overline="Free Plan"
              checklistItems={[
                "Basic firmographics access",
                "Limited profile insights",
                "Redacted financial data",
              ]}
              buttonText="Sign Up"
              buttonHref="#"
            />
            <PricingPlan
              backgroundColor="#FFE492"
              headline="$49/mo"
              overline="Select Plan"
              checklistItems={[
                "Enhanced company searches",
                "401K data access",
                "72M contacts database",
                "Advanced investor insights",
                "Comprehensive financial reports",
              ]}
              buttonText="Get Started"
              buttonHref="#"
              discount="$29/mo"
            />
            <PricingPlan
              backgroundColor="#A7CEFC"
              headline="Let's Chat!"
              overline="Enterprise Plan"
              checklistItems={[
                "Enhanced company searches",
                "401K data access",
                "72M contacts database",
                "Advanced investor insights",
                "Comprehensive financial reports",
              ]}
              buttonText="Contact Us"
              buttonHref="#"
            />
          </div>
        </RowPadding>
      </SectionColor>
      <RowPadding>
        <PricingTable
          category="Features"
          features={analyticsFeatures}
          plans={plans}
        />
        <PricingTable
          category="Add Ons"
          features={analyticsFeatures}
          plans={plans}
        />
        <PricingTable
          category="Support"
          features={analyticsFeatures}
          plans={plans}
        />
      </RowPadding>
    </div>
  );
}
