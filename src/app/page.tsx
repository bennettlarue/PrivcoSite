import Image from "next/image";
import MainHeadline from "./components/content-blocks/MainHeadline";
import SectionColor from "./components/content-blocks/SectionColor";
import RoundButton from "./components/content-elements/RoundButton";
import FlexRow from "./components/content-containers/Flexrow";
import SecondaryHeadline from "./components/content-blocks/SecondaryHeadline";
import NumberBlock from "./components/content-elements/NumberBock";
import RowPadding from "./components/content-containers/RowPadding";
import SmallHeadline from "./components/content-blocks/SmallHeadline";
import ClientLogos from "./components/content-blocks/ClientLogos";
import BoxText from "./components/content-blocks/BoxText";
import Figure from "./components/content-blocks/Figure";
import BigButton from "./components/content-blocks/BigButton";
import FadeIn from "./components/transition-wrappers/FadeIn"; // Import FadeIn
import StarsSVG from "./components/svgs/Stars";
import QuoteBlock from "./components/content-blocks/QuoteBlock"; // Import QuoteBlock
import SectionColorLines from "./components/content-blocks/SectionColorLines";
import SmallHeadlineSection from "./components/content-blocks/SmallHeadlineSection"; // Import SmallHeadlineSection
import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  GraduationCap,
  Landmark,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import HeroHeader from "./components/content-blocks/HeroHeader";

// Define a reusable component for the SmallHeadline section

export default function Home() {
  return (
    <div>
      <div>
        <HeroHeader
          imageUrl="/images/header-image.png"
          title="Uncover Opportunities 
Others Can’t See"
          subtitle="PrivCo is the leading provider of private company financial data, 
          specializing in bootstrapped companies with revenues above $1MM."
          ctaText="Start Free"
          ctaHref="/api"
          cta2Text="Learn More"
          cta2Href="/api"
          altText="Hero background image"
        />
      </div>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <RowPadding>
          <ClientLogos
            images={[
              "/images/svgs/logos/deloitte.svg",
              "/images/svgs/logos/amex.svg",
              "/images/svgs/logos/microsoft.svg",
              "/images/svgs/logos/stephens.svg",
              "/images/svgs/logos/wharton.svg",
            ]}
          />
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
      >
        <RowPadding>
          <div>
            <SecondaryHeadline
              headline="PrivCo's private market intelligence database takes the guesswork out of your private company search."
              color="var(--privco-blue)"
            >
              <div className="mt-4 grid xl:grid-cols-9 grid-cols-1 md:gap-16 md:space-y-0 space-y-10">
                <div className="space-y-6 text-xl col-span-4">
                  <p>
                    Unlike the public markets, where data providers can readily
                    access financial information from a company's earnings
                    reports, private company data is much harder to track down.
                    PrivCo specializes in “bootstrapped” companies above $1MM
                    that are not covered by other data sources because they
                    haven’t raised private equity or venture capital.{" "}
                  </p>
                  <p>
                    PrivCo helps investors, private equity, analysts, and
                    institutions make better strategic decisions and gain a
                    competitive edge with our precision, quality, and breadth of
                    data.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 col-span-5 grid-cols-2">
                  <BoxText
                    text="Competitive Intelligence"
                    color="var(--privco-blue)"
                  />
                  <BoxText text="Market Research" color="var(--privco-blue)" />
                  <BoxText text="Business Dev" color="var(--privco-blue)" />
                  <BoxText text="Due Diligence" color="var(--privco-blue)" />
                  <BoxText
                    text="Sourcing / Origination"
                    color="var(--privco-blue)"
                  />
                  <BoxText text="Deal Comps" color="var(--privco-blue)" />
                </div>
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <QuoteBlock
            text="when I was benchmarking services that could help me automate and expedite this process, and they beat all other options both in terms of quality and price."
            name="Associate at GP Investments"
            color="white"
            secondaryColor="rgb(147, 197, 253)" // Light blue
          />
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightblue)"
      >
        <RowPadding>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
            <div className="col-span-2">
              <SecondaryHeadline
                overline="Join over 90,000 PrivCo users . . ."
                headline="Complete financial data on U.S. private companies"
              >
                <p>
                  {" "}
                  Start your journey with our free plan, designed to give you
                  essential insights into private companies. Experience basic
                  firmographics and limited profile access to discover what you
                  need before upgrading.
                </p>
                <FlexRow>
                  <RoundButton textColor="#FFFFFF" backgroundColor="#34C759">
                    Start Free
                  </RoundButton>
                  <RoundButton textColor="#FFFFFF" backgroundColor="#043873">
                    Learn More
                  </RoundButton>
                </FlexRow>
              </SecondaryHeadline>
            </div>
            <div className="col-span-3 grid md:grid-cols-2 grid-cols-1 gap-4">
              <NumberBlock number="893K+" text="U.S. Private Companies" />
              <NumberBlock number="146M+" text="Data Points" />
              <NumberBlock number="1,000+" text="Industry Verticals " />
              <NumberBlock number="70M+" text="Contact Records" />
            </div>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <div>
            <SecondaryHeadline headline="Get Granular-Level Advanced Search using Revenue, EBITDA,Valuation, Funding, Growth Rates, Location & Ownership"></SecondaryHeadline>
            <div className="md:space-y-0 space-y-3 grid grid-cols-1 lg:grid-cols-3 gap-6 md:mx-0 mx-auto mt-3">
              <Figure
                image={
                  <Image
                    src="/images/figure-1.png"
                    alt="first image"
                    width={425}
                    height={375}
                    className="rounded-t-lg border-b"
                  />
                }
                header="Analyze Data at Scale"
                subtext="With proprietary algorithms and industry-leading keyword tagging. "
                alt="first image"
              />
              <Figure
                image={
                  <Image
                    src="/images/figure-2.png"
                    alt="first image"
                    width={425}
                    height={375}
                    className="rounded-t-lg border-b"
                  />
                }
                header="Uncover Financial Insights"
                subtext="Created through proprietary machine-learning financial modeling and expert data analysts."
                alt="first image"
              />
              <Figure
                image={
                  <Image
                    src="/images/figure-3.png"
                    alt="first image"
                    width={425}
                    height={375}
                    className="rounded-t-lg border-b"
                  />
                }
                header="Quickly Search & Compare"
                subtext="Quickly filter and compare multiple industries, companies, and players in the private market."
                alt="first image"
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <RowPadding>
          <div>
            <ClientLogos
              images={[
                "/images/svgs/logos/deloitte.svg",
                "/images/svgs/logos/bloomberg.svg",
                "/images/client-logos/cnbc.png",
                "/images/svgs/logos/inc.svg",
                "/images/svgs/logos/forbes.svg",
              ]}
            />
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-blue)"
        backgroundColor="var(--privco-lightgreen)"
      >
        <RowPadding>
          <div>
            <div className="w-fit mx-auto mb-8">
              <SecondaryHeadline
                color="var(--privco-black)"
                headline="Insights for Deal Makers"
              />
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-10 lg:gap-y-16 gap-y-8">
              <SmallHeadlineSection
                headline="Private Equity"
                svg={<Sparkles />}
                description="Find independently owned private companies with historical revenue in your target demographic."
              />
              <SmallHeadlineSection
                headline="Venture Capital"
                svg={<BadgeDollarSign />}
                description="Discover the Next Big Thing with actionable insights from pre-revenue and late-stage companies alike."
              />
              <SmallHeadlineSection
                headline="Investment Banking"
                svg={<Landmark />}
                description="Get accurate industry and private company financials. Gain actionable insights related to VC, M&A, debt, EBITDA, and equity financing."
              />
              <SmallHeadlineSection
                headline="Academics"
                svg={<GraduationCap />}
                description="Provide faculty and students with comprehensive financial intelligence."
              />
              <SmallHeadlineSection
                headline="Executive Search"
                svg={<ScanSearch />}
                description="Uncover hard-to-find private companies in need of top talent."
              />
              <SmallHeadlineSection
                headline="Sales Teams"
                svg={<ChartNoAxesCombined />}
                description="Find and connect with the right prospects quickly and efficiently."
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColorLines
        secondaryColor="var(--privco-blue)"
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="Uncover the Bootstrappers.">
              <p className="text-xl max-w-[600px]">
                At PrivCo, we are dedicated to providing unparalleled access to
                private company data not found in other sources.
              </p>
              <div className="mx-auto">
                <BigButton
                  textColor="var(--privco-white)"
                  backgroundColor="var(--privco-green)"
                  border={true}
                >
                  Start Your 7-Day, Full-Access Free Trial
                </BigButton>
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColorLines>
    </div>
  );
}
