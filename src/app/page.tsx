import Image from "next/image";
import MainHeadline from "./components/content-blocks/MainHeadline";
import SectionColor from "./components/content-blocks/SectionColor";
import RoundButton from "./components/content-elements/RoundButton";
import FlexRow from "./components/content-containers/Flexrow";
import SixToEight from "./components/content-containers/side-by-side/SixToEight";
import SecondaryHeadline from "./components/content-blocks/SecondaryHeadline";
import NumberBlock from "./components/content-elements/NumberBock";
import RowPadding from "./components/content-containers/RowPadding";
import SmallHeadline from "./components/content-blocks/SmallHeadline";
import ClientLogos from "./components/content-blocks/ClientLogos";
import BoxText from "./components/content-blocks/BoxText";
import Figure from "./components/content-blocks/Figure";
import BigButton from "./components/content-blocks/BigButton";

export default function Home() {
  return (
    <div>
      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <SixToEight
          leftChild={
            <RowPadding>
              <MainHeadline headline="Uncover Opportunities Others Can’t See">
                <p className="font-semibold md:text-2xl text-xl">
                  Get the edge and identify hidden but high-potential private
                  companies before your competitors do.
                </p>
                <FlexRow>
                  <RoundButton
                    textColor="var(--privco-white)"
                    backgroundColor="var(--privco-green)"
                    border={true}
                  >
                    Start Free
                  </RoundButton>
                  <RoundButton
                    textColor="var(--privco-white)"
                    backgroundColor="var(--privco-blue)"
                    border={true}
                  >
                    Learn More
                  </RoundButton>
                </FlexRow>
                <p>
                  Start your seven-day free trial with full and immediate access
                </p>
              </MainHeadline>
            </RowPadding>
          }
          rightChild={
            <img
              className="w-full h-full object-cover"
              src="images/header-image.png"
            />
          }
        />
      </SectionColor>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <RowPadding>
          <ClientLogos
            images={[
              "/images/client-logos/amex.png",
              "/images/client-logos/stephens.png",
              "/images/client-logos/deloitte.png",
              "/images/client-logos/wharton.png",
              "/images/client-logos/microsoft.png",
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
            ></SecondaryHeadline>
            <div className="mt-4 grid xl:grid-cols-9 grid-cols-1 md:gap-16 md:space-y-0 space-y-10">
              <div className="space-y-6 text-lg col-span-4">
                <p>
                  Unlike the public markets, where data providers can readily
                  access financial information from a company's earnings
                  reports, private company data is much harder to track down.
                  PrivCo specializes in “bootstrapped” companies above $1MM that
                  are not covered by other data sources because they haven’t
                  raised private equity or venture capital.{" "}
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
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <div className="text-center mx-auto">
            <SecondaryHeadline
              headline="”I came across PrivCo when I was benchmarking services that could help me 
automate and expedite this process, and they beat all other options both
 in terms of quality and price.”"
            >
              — Associate at GP Investments
            </SecondaryHeadline>
          </div>
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
            <div className="md:space-y-0 space-y-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-0 mx-auto mt-3">
              <Figure
                image="/images/figure-1.png"
                header="Analyze Data at Scale"
                subtext="With proprietary algorithms and industry-leading keyword tagging. "
                alt="first image"
              />
              <Figure
                image="/images/figure-2.png"
                header="Uncover Financial Insights"
                subtext="Created through proprietary machine-learning financial modeling and expert data analysts."
                alt="first image"
              />
              <Figure
                image="/images/figure-3.png"
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
            <div className="mx-auto text-center w-fit">
              <SecondaryHeadline headline="Featured In" />
            </div>
            <ClientLogos
              images={[
                "/images/client-logos/forbes.png",
                "/images/client-logos/bloomberg.png",
                "/images/client-logos/cnbc.png",
                "/images/client-logos/crunchbase.png",
                "/images/client-logos/inc.png",
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
          <div className="w-fit mx-auto">
            <SecondaryHeadline headline="Insights for Deal Makers"></SecondaryHeadline>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-20 gap-x-10 gap-y-16">
            <SmallHeadline
              headline="Private Equity"
              overline={
                <div className="h-[30px] flex items-center">
                  <Image
                    src={"/images/svgs/star.svg"}
                    className=""
                    alt={"dd"}
                    width={40}
                    height={40}
                  />
                </div>
              }
            >
              <p>
                Find independently owned private companies with historical
                revenue in your target demographic.
              </p>
            </SmallHeadline>
            <SmallHeadline
              headline="Venture Capital"
              overline={
                <div className="h-[30px] flex items-center">
                  <Image
                    src={"/images/svgs/money.svg"}
                    className=""
                    alt={"dd"}
                    width={40}
                    height={40}
                  />
                </div>
              }
            >
              <p>
                Discover the Next Big Thing with actionable insights from
                pre-revenue and late-stage companies alike.
              </p>
            </SmallHeadline>
            <SmallHeadline
              headline="Investment Banking"
              overline={
                <div className="h-[30px] flex items-center">
                  <Image
                    src={"/images/svgs/bank.svg"}
                    className=""
                    alt={"dd"}
                    width={40}
                    height={40}
                  />
                </div>
              }
            >
              <p>
                Get accurate industry and private company financials. Gain
                actionable insights related to VC, M&A, debt, EBITDA, and equity
                financing.
              </p>
            </SmallHeadline>
            <SmallHeadline
              headline="Academics"
              overline={
                <div className="h-[30px] flex items-center">
                  <Image
                    src={"/images/svgs/heart.svg"}
                    className=""
                    alt={"dd"}
                    width={40}
                    height={40}
                  />
                </div>
              }
            >
              <p>
                Provide faculty and students with comprehensive financial
                intelligence.
              </p>
            </SmallHeadline>
            <SmallHeadline
              headline="Executive Search"
              overline={
                <div className="h-[30px] flex items-center">
                  <Image
                    src={"/images/svgs/cube.svg"}
                    className=""
                    alt={"dd"}
                    width={40}
                    height={40}
                  />
                </div>
              }
            >
              <p>
                Uncover hard-to-find private companies in need of top talent.
              </p>
            </SmallHeadline>
            <SmallHeadline
              headline="Sales Teams"
              overline={
                <div className="h-[30px] flex items-center">
                  <Image
                    src={"/images/svgs/graph.svg"}
                    className=""
                    alt={"dd"}
                    width={40}
                    height={40}
                  />
                </div>
              }
            >
              <p>
                Find and connect with the right prospects quickly and
                efficiently.
              </p>
            </SmallHeadline>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="Uncover the Bootstrappers.">
              <p className="text-xl max-w-[600px]">
                At PrivCo, we are dedicated to providing unparalleled access to
                private company data not found in other sources.
              </p>
            </SecondaryHeadline>
          </div>
          <div className="mx-auto">
            <BigButton
              textColor="var(--privco-blue)"
              backgroundColor="var(--privco-green)"
              border={true}
            >
              Start Your 7-Day, Full-Access Free Trial
            </BigButton>
          </div>
        </RowPadding>
      </SectionColor>
    </div>
  );
}
