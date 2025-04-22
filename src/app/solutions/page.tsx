import React from "react";
import SectionColor from "../components/content-blocks/SectionColor";
import MainHeadline from "../components/content-blocks/MainHeadline";
import RowPadding from "../components/content-containers/RowPadding";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import Image from "next/image"; // Ensure this import is from 'next/image'
import SmallHeadline from "../components/content-blocks/SmallHeadline";
import ClientLogos from "../components/content-blocks/ClientLogos";
import BigButton from "../components/content-blocks/BigButton";

interface ParagraphBlockProps {
  header: string;
  body: string;
  center?: boolean;
  textColor: string; // Add textColor prop
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({
  header,
  body,
  center = false,
  textColor,
}) => {
  return (
    <div
      className={`px-8 py-10 border w-fit ${center ? "text-center" : ""}`}
      style={{ borderColor: textColor }} // Use textColor for border
    >
      <SmallHeadline headline={header}>{body}</SmallHeadline>
    </div>
  );
};

const SolutionsPage: React.FC = () => {
  return (
    <div>
      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <div className="max-w-5xl">
            <MainHeadline
              overline="Solutions"
              headline="Dominate competitors with
unmatched private market insights"
            >
              <p className="text-xl font-semibold">
                PrivCo equips professionals across industries with the deepest
                private company data—900,000+ profiles, 146 million data points,
                and 65 million+ contacts—unlocking insights on 80% of the market
                others miss. From deal sourcing to research, PrivCo’s actionable
                intelligence helps you uncover opportunities, make informed
                decisions, and stay ahead.
              </p>
            </MainHeadline>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-black)"
      >
        <div className="lg:block hidden">
          <RowPadding>
            <div className="flex gap-10">
              <div className="my-auto">
                <SecondaryHeadline headline="Investment Banking">
                  <p>
                    <span className="font-semibold">
                      PrivCo empowers investment bankers to source deals and
                      deliver winning pitches with unparalleled private company
                      insights.
                    </span>{" "}
                    Access financials, M&A histories, and growth signals to
                    identify high-potential targets and streamline due
                    diligence, ensuring you stay ahead in a competitive market.
                  </p>
                </SecondaryHeadline>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[403px] h-[224px]">
                  <Image
                    src="/images/solutions/investment.png"
                    alt="Investment Banking"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto">
              <ParagraphBlock
                header="Uncover Hidden Deals"
                body="Find acquisition targets with detailed revenue and EBITDA data."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Speed Up Due Diligence:"
                body="Comprehensive profiles cut research time and boost accuracy."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Collaborate Seamlessly"
                body="Share watchlists to align your team on top prospects."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
            </div>
            <div className="w-fit mx-auto text-center">
              <SecondaryHeadline
                headline="”I came across PrivCo when I was benchmarking services that could help me 
automate and expedite this process, and they beat all other options both
 in terms of quality and price.”"
              >
                {" "}
                — Associate at GP Investments
              </SecondaryHeadline>
            </div>
          </RowPadding>
        </div>

        <div className="lg:hidden block">
          <RowPadding>
            <ParagraphBlock
              header="Investment Banking"
              body="PrivCo empowers investment bankers to source deals and deliver winning pitches with unparalleled private company insights. Access financials, M&A histories, and growth signals to identify high-potential targets and streamline due diligence, ensuring you stay ahead in a competitive market."
              textColor="var(--privco-black)" // Pass textColor
            />
          </RowPadding>
        </div>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <div className="lg:block hidden">
          <RowPadding>
            <div className="flex gap-10">
              <div className="my-auto">
                <SecondaryHeadline headline="Business Brokers & Advisors">
                  <p>
                    <span className="font-semibold">
                      For business brokers and advisors, PrivCo provides the
                      financial clarity needed to close deals faster.
                    </span>{" "}
                    With historical financials and industry filters, you can
                    value businesses accurately and match buyers with sellers
                    efficiently, enhancing your reputation as a trusted advisor.
                  </p>
                </SecondaryHeadline>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[403px] h-[224px]">
                  <Image
                    src="/images/solutions/brokers.png"
                    alt="Investment Banking"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto">
              <ParagraphBlock
                header="Price with Confidence"
                body="Use deal multiples and revenue trends for precise valuations."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Match Faster"
                body="Filter by niche to connect the right buyers and sellers."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Impress Clients"
                body="Data-driven insights elevate your advisory impact."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
            </div>
          </RowPadding>
        </div>

        <div className="lg:hidden block">
          <RowPadding>
            <ParagraphBlock
              header="Business Brokers & Advisors"
              body="For business brokers and advisors, PrivCo provides the financial clarity needed to close deals faster. With historical financials and industry filters, you can value businesses accurately and match buyers with sellers efficiently, enhancing your reputation as a trusted advisor."
              textColor="var(--privco-black)" // Pass textColor
            />
          </RowPadding>
        </div>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <div className="lg:block hidden">
          <RowPadding>
            <div className="flex gap-10">
              <div className="my-auto">
                <SecondaryHeadline headline="Business Brokers & Advisors">
                  <p>
                    <span className="font-semibold">
                      PrivCo helps PE and VC firms spot high-potential
                      investments and maximize returns.
                    </span>{" "}
                    With funding data, multi-year financials, and company
                    signals, you can identify prospects, track growth, and plan
                    profitable exits—all while staying ahead of market trends.
                  </p>
                </SecondaryHeadline>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[403px] h-[224px]">
                  <Image
                    src="/images/solutions/private.png"
                    alt="Investment Banking"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto">
              <ParagraphBlock
                header="Spot Winners Early"
                body="Identify startups and firms with strong growth metrics."
                center={true}
                textColor="var(--privco-white)" // Pass textColor
              />
              <ParagraphBlock
                header="Reduce Risk"
                body="Deep financial insights ensure smarter investment decisions."
                center={true}
                textColor="var(--privco-white)" // Pass textColor
              />
              <ParagraphBlock
                header="Maximize Exits"
                body="Identify startups and firms with strong growth metrics."
                center={true}
                textColor="var(--privco-white)" // Pass textColor
              />
            </div>
          </RowPadding>
        </div>

        <div className="lg:hidden block">
          <RowPadding>
            <ParagraphBlock
              header="Private Equity & Venture Capital"
              body="PrivCo helps PE and VC firms spot high-potential investments and maximize returns. With funding data, multi-year financials, and company signals, you can identify prospects, track growth, and plan profitable exits—all while staying ahead of market trends."
              textColor="var(--privco-white)" // Pass textColor
            />
          </RowPadding>
        </div>
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
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-black)"
      >
        <div className="lg:block hidden">
          <RowPadding>
            <div className="flex gap-10">
              <div className="my-auto">
                <SecondaryHeadline headline="Executive Search">
                  <p>
                    <span className="font-semibold">
                      PrivCo streamlines executive search by revealing
                      high-growth private companies in need of top talent.
                    </span>{" "}
                    With 65 million+ executive contacts and detailed company
                    profiles, you can place leaders where they’ll thrive,
                    strengthening your recruitment success.
                  </p>
                </SecondaryHeadline>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[403px] h-[224px]">
                  <Image
                    src="/images/solutions/exec.png"
                    alt="Investment Banking"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto">
              <ParagraphBlock
                header="Target Growth Leaders"
                body="Find firms needing talent with revenue data."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Connect Directly"
                body="Access verified executive contacts for faster outreach."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Place with Precision "
                body="Match candidates using in-depth company insights."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
            </div>
          </RowPadding>
        </div>

        <div className="lg:hidden block">
          <RowPadding>
            <ParagraphBlock
              header="Private Equity & Venture Capital"
              body="PrivCo helps PE and VC firms spot high-potential investments and maximize returns. With funding data, multi-year financials, and company signals, you can identify prospects, track growth, and plan profitable exits—all while staying ahead of market trends."
              textColor="var(--privco-black)" // Pass textColor
            />
          </RowPadding>
        </div>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="Find the Hidden Bootstrappers">
              <div className="mx-auto">
                <BigButton
                  textColor="var(--privco-blue)"
                  backgroundColor="var(--privco-green)"
                  border={true}
                >
                  Start Your 7-Day, Full-Access Free Trial
                </BigButton>
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <div className="lg:block hidden">
          <RowPadding>
            <div className="flex gap-10">
              <div className="my-auto">
                <SecondaryHeadline headline="Academics">
                  <p>
                    <span className="font-semibold">
                      PrivCo brings private market insights to students and
                      researchers.
                    </span>{" "}
                    With 900,000+ profiles, academic users can explore
                    financials, industries, and trends, bridging classroom
                    learning with real-world applications and preparing the next
                    generation of leaders.
                  </p>
                </SecondaryHeadline>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[403px] h-[224px]">
                  <Image
                    src="/images/solutions/exec.png"
                    alt="Investment Banking"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto">
              <ParagraphBlock
                header="Enrich Learning"
                body="Fuel case studies with real private company data."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Boost Research"
                body="Analyze trends across industries and verticals."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Empower Futures"
                body="Equip students to explore careers and opportunities."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
            </div>
          </RowPadding>
        </div>

        <div className="lg:hidden block">
          <RowPadding>
            <ParagraphBlock
              header="Academics"
              body="PrivCo brings private market insights to students and researchers. With 900,000+ profiles, academic users can explore financials, industries, and trends, bridging classroom learning with real-world applications and preparing the next generation of leaders."
              textColor="var(--privco-black)" // Pass textColor
            />
          </RowPadding>
        </div>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-blue)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="See Beyond the Obvious">
              <div className="mx-auto">
                <BigButton
                  textColor="var(--privco-blue)"
                  backgroundColor="var(--privco-green)"
                  border={true}
                >
                  Start Your 7-Day, Full-Access Free Trial
                </BigButton>
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
          <div className="text-center mx-auto">
            <SecondaryHeadline
              headline="“The team at PrivCo has gathered one of the fullest, information-rich, and well-organized 
databases out there. We have found a great deal of value by uncovering some 
of the hardest-to-find information, financial data, and contacts for the private companies.”"
            >
              — Financial Analyst, Leading Investment Firm
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <div className="lg:block hidden">
          <RowPadding>
            <div className="flex gap-10">
              <div className="my-auto">
                <SecondaryHeadline headline="Sales Teams">
                  <p>
                    <span className="font-semibold">
                      PrivCo supercharges sales teams by identifying high-value
                      private company leads.
                    </span>{" "}
                    Filter by revenue and growth to target prospects ready to
                    buy, tailoring your pitches with financial insights to close
                    deals faster and hit quotas with ease.
                  </p>
                </SecondaryHeadline>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[403px] h-[224px]">
                  <Image
                    src="/images/solutions/sales.png"
                    alt="Investment Banking"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 mx-auto">
              <ParagraphBlock
                header="Fill Your Pipeline"
                body="Pinpoint companies with purchasing potential."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Pitch Smarter"
                body="Use financial data to craft compelling approaches."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
              <ParagraphBlock
                header="Close Faster"
                body="Focus on high-value leads with precise filters."
                center={true}
                textColor="var(--privco-black)" // Pass textColor
              />
            </div>
          </RowPadding>
        </div>

        <div className="lg:hidden block">
          <RowPadding>
            <ParagraphBlock
              header="Sales Teams"
              body="PrivCo supercharges sales teams by identifying high-value private company leads. Filter by revenue and growth to target prospects ready to buy, tailoring your pitches with financial insights to close deals faster and hit quotas with ease."
              textColor="var(--privco-black)" // Pass textColor
            />
          </RowPadding>
        </div>
      </SectionColor>
    </div>
  );
};

export default SolutionsPage;
