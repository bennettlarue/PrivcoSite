import React from "react";
import SectionColor from "../content-blocks/SectionColor";
import RowPadding from "../content-containers/RowPadding";
import SecondaryHeadline from "../content-blocks/SecondaryHeadline";
import CtaButton from "../content-blocks/CtaButton";
import SecondaryCtaButton from "../content-blocks/SecondaryCtaButton";
import BoxText from "../content-blocks/BoxText";
import LineBreak from "../content-blocks/LineBreak";
import TertiaryHeadline from "../content-blocks/TertiaryHeadline";

const MainFeatures: React.FC = () => {
  return (
    <SectionColor
      textColor="var(--privco-black)"
      backgroundColor="var(--privco-white)"
    >
      <RowPadding>
        <div>
          <SecondaryHeadline
            headline="Take the Guesswork Out of Private Company Discovery"
            color="var(--privco-blue)"
          >
            <div className="grid xl:grid-cols-9 grid-cols-1 md:gap-16 md:space-y-0 space-y-10 lg:mt-5">
              <div className="space-y-6 lg:text-2xl text-xl col-span-4">
                <p className="font-semibold">
                  PrivCo delivers financial and contact data on the 80% of U.S.
                  private companies neglected by other platforms.
                </p>
                <p>
                  While most data providers focus on venture-backed or
                  M&A-active companies, PrivCo gives you access to{" "}
                  <span className="font-semibold">
                    revenue-generating, bootstrapped companies with $1MM+ in
                    revenue
                  </span>
                  —those flying under the radar of traditional platforms.
                </p>

                <div className="w-fit flex space-x-5">
                  <CtaButton
                    ctaHref="https://system.privco.com/signup"
                    ctaText="Start Free"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 col-span-5 grid-cols-2">
                <BoxText
                  text="Competitive Intelligence"
                  color="var(--privco-blue)"
                />
                <BoxText text="Market Research" color="var(--privco-blue)" />
                <BoxText
                  text="Business Development"
                  color="var(--privco-blue)"
                />
                <BoxText text="Contact Data" color="var(--privco-blue)" />
                <BoxText
                  text="Sourcing / Origination"
                  color="var(--privco-blue)"
                />
                <BoxText text="Deal Comps" color="var(--privco-blue)" />
              </div>
            </div>
            <LineBreak />
            <div>
              <TertiaryHeadline headline="Now with 60M+ verified executive contacts, you can go from research to outreach in seconds.">
                <p className="font-medium mb-4 text-xl">
                  Built for researchers, dealmakers, and sales teams who need
                  data they can trust.
                </p>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
                  <BoxText
                    text="900,000+ private U.S. company profiles"
                    color="var(--privco-blue)"
                  />
                  <BoxText
                    text="Current and historical revenue, EBITDA, valuations, and
                      growth metrics"
                    color="var(--privco-blue)"
                  />
                  <BoxText
                    text="Verified contact info for key decision-makers across all
                      industries"
                    color="var(--privco-blue)"
                  />
                  <BoxText
                    text="Advanced filters for precise targeting—by ownership,
                      funding, geography, and more"
                    color="var(--privco-blue)"
                  />
                </div>
              </TertiaryHeadline>
            </div>
          </SecondaryHeadline>
        </div>
      </RowPadding>
    </SectionColor>
  );
};

export default MainFeatures;
