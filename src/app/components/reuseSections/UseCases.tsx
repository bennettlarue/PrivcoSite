import React from "react";
import SectionColor from "../content-blocks/SectionColor";
import RowPadding from "../content-containers/RowPadding";
import SecondaryHeadline from "../content-blocks/SecondaryHeadline";
import SmallHeadlineSection from "../content-blocks/SmallHeadlineSection";
import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  GraduationCap,
  Landmark,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import CtaButton from "../content-blocks/CtaButton";

const UseCases: React.FC = () => {
  return (
    <SectionColor
      textColor="var(--privco-blue)"
      backgroundColor="var(--privco-white)"
    >
      <RowPadding>
        <div>
          <div className="w-fit mx-auto mb-8">
            <SecondaryHeadline
              color="var(--privco-black)"
              headline="900K companies | 70M+ Contacts | 194MM datapoints"
            />
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-10 lg:gap-y-16 gap-y-8">
            <SmallHeadlineSection
              headline="Private Equity"
              svg={<Sparkles aria-hidden="true" />}
              description={
                "Find historical revenue in your target demographic."
              }
            />
            <SmallHeadlineSection
              headline="Venture Capital"
              svg={<BadgeDollarSign aria-hidden="true" />}
              description={"Discover pre-revenue and late-stage companies."}
            />
            <SmallHeadlineSection
              headline="Investment Banking"
              svg={<Landmark aria-hidden="true" />}
              description={
                "Get insights on VC, M&A, debt, EBITDA, and equity financing."
              }
            />
            <SmallHeadlineSection
              headline="Academics"
              svg={<GraduationCap aria-hidden="true" />}
              description={"Provide comprehensive financial intelligence."}
            />
            <SmallHeadlineSection
              headline="Executive Search"
              svg={<ScanSearch aria-hidden="true" />}
              description={
                "Discover hard-to-find private companies needing top talent."
              }
            />
            <SmallHeadlineSection
              headline="Sales Teams"
              svg={<ChartNoAxesCombined aria-hidden="true" />}
              description={
                "Find and connect with prospects quickly and efficiently."
              }
            />
          </div>
        </div>
        <div className="mx-auto py-4 w-fit">
          <CtaButton
            ctaHref="https://system.privco.com/signup"
            ctaText="Start Free"
          />
        </div>
      </RowPadding>
    </SectionColor>
  );
};

export default UseCases;
