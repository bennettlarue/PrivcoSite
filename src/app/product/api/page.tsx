import BigButton from "../../components/content-blocks/BigButton";
import Figure from "../../components/content-blocks/Figure";
import HeroHeader from "../../components/content-blocks/HeroHeader";
import MainHeadline from "../../components/content-blocks/MainHeadline";
import SecondaryHeadline from "../../components/content-blocks/SecondaryHeadline";
import SectionColor from "../../components/content-blocks/SectionColor";
import SectionColorLines from "../../components/content-blocks/SectionColorLines";
import RowPadding from "../../components/content-containers/RowPadding";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div>
        <HeroHeader
          imageUrl="/images/api/api-header.png"
          overline="API"
          title="Custom Datasets, On-Demand"
          subtitle="Pull the exact data you need-and nothing you don't-from the most accurate and up-to-date private financial data with our API and data exports."
          ctaText="Start Free"
          ctaHref="/api"
          cta2Text="Learn More"
          cta2Href="/api"
          altText="Hero background image"
        />
      </div>
      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <SecondaryHeadline
              overline="Managed Data Solutions"
              headline="Choose from 146MM+ data points across 1,000 verticals"
            >
              <p>
                Directly extract data based on customizable criteria, including
                revenues, EBITDA, valuations, fundings, deals, and more. Enable
                your team with easy access to hard-to-find private market data
                through API or data exports.
              </p>
            </SecondaryHeadline>
            <div className="hidden lg:block">
              <Image
                src="/images/api/graphic-1.svg"
                alt="first image"
                width={625}
                height={375}
                className="rounded-t-lg drop-shadow"
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <SecondaryHeadline
              overline="Custom API Solutions"
              headline="Gain actionable intelligence in seconds"
            >
              <p>
                Integrate our data with your existing systems to instantly
                increase your team’s comprehension of the middle market. Extract
                bulk data via JSON or CSV.
              </p>
            </SecondaryHeadline>
            <div className="hidden lg:block">
              <Image
                src="/images/api/graphic-2.svg"
                alt="first image"
                width={625}
                height={375}
                className="rounded-t-lg drop-shadow"
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div>
            <SecondaryHeadline headline="Simplify even further with data exports"></SecondaryHeadline>
            <div className="md:space-y-0 space-y-3 grid grid-cols-1 lg:grid-cols-3 gap-6 md:mx-0 mx-auto mt-3">
              <Figure
                image={
                  <div className="w-full h-[275px] flex items-center justify-center bg-[var(--privco-blue)]">
                    <Image
                      src="/images/api/figure-1.svg"
                      alt="first image"
                      width={225}
                      height={375}
                      className="rounded-t-lg drop-shadow"
                    />
                  </div>
                }
                header="Custom Datasets"
                subtext="Our expert data analysts are available to create custom datasets to fill in any knowledge gap for your team. We'll deliver your custom export in either JSON or CSV format."
                alt="first image"
              />
              <Figure
                image={
                  <div className="w-full  h-[275px] flex items-center justify-center bg-[var(--privco-blue)]">
                    <Image
                      src="/images/api/figure-2.svg"
                      alt="first image"
                      width={225}
                      height={375}
                      className="rounded-t-lg drop-shadow"
                    />
                  </div>
                }
                header="Uncover Industry Leaders"
                subtext="Learn which companies are top-performing in their industries using revenue and growth signals."
                alt="first image"
              />
              <Figure
                image={
                  <div className="w-full h-[275px] flex items-center justify-center bg-[var(--privco-blue)]">
                    <Image
                      src="/images/api/figure-3.svg"
                      alt="first image"
                      width={225}
                      height={375}
                      className="rounded-t-lg drop-shadow"
                    />
                  </div>
                }
                header="Precision Analytics"
                subtext="Generate detailed insights from millions of data points using your exact search parameters. Analyze critical features of private company health and longevity."
                alt="first image"
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColorLines
        secondaryColor="var(--privco-blue)"
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="Get Started with Managed Solutions Today">
              <div className="mx-auto w-fit">
                <BigButton
                  textColor="var(--privco-white)"
                  backgroundColor="var(--privco-green)"
                  border={true}
                >
                  Talk to Sales
                </BigButton>
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColorLines>
    </div>
  );
}
