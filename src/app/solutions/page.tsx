import React from "react";
import SectionColor from "../components/content-blocks/SectionColor";
import MainHeadline from "../components/content-blocks/MainHeadline";
import RowPadding from "../components/content-containers/RowPadding";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import Image from "next/image"; // Ensure this import is from 'next/image'
import SmallHeadline from "../components/content-blocks/SmallHeadline";
import ClientLogos from "../components/content-blocks/ClientLogos";
import BigButton from "../components/content-blocks/BigButton";
import {
  ChartNoAxesCombined,
  DollarSign,
  GraduationCap,
  Handshake,
  Landmark,
  ScanSearch,
  Section,
} from "lucide-react";
import QuoteBlock from "../components/content-blocks/QuoteBlock";
import SectionColorLines from "../components/content-blocks/SectionColorLines";
import HeroHeader from "../components/content-blocks/HeroHeader";

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
      className={`px-8 py-10 border border-b-2 shadow w-fit bg-white bg-opacity-10 `}
      style={{ borderColor: textColor }} // Use textColor for border
    >
      <h4 className="text-2xl font-semibold mb-2">{header}</h4>
      <p className="font-medium">{body}</p>
    </div>
  );
};

// Define the reusable SolutionSection component
interface SolutionSectionProps {
  headline: string;
  description: string;
  image: string;
  paragraphs: { header: string; body: string }[];
  textColor: string;
  backgroundColor: string;
  icon: React.ReactNode; // Add icon prop
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  headline,
  description,
  image,
  paragraphs,
  textColor,
  backgroundColor,
  icon,
}) => {
  return (
    <SectionColor backgroundColor={backgroundColor} textColor={textColor}>
      <div className="lg:block hidden">
        <RowPadding>
          <div className="flex gap-10 items-center ">
            <div className="my-auto">
              <div
                className="p-2 bg-black w-fit mb-6 shadow rounded-full"
                style={{ color: backgroundColor, backgroundColor: textColor }}
              >
                {icon} {/* Render the passed icon */}
              </div>
              <SecondaryHeadline headline={headline}>
                <p>{description}</p>
              </SecondaryHeadline>
            </div>
            <div className="flex justify-center">
              <div
                className="relative w-[403px] h-[224px] shadow rounded-md"
                style={{ borderColor: textColor }}
              >
                <Image
                  src={image}
                  alt={headline}
                  className="object-cover rounded"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mx-auto mt-8">
            {paragraphs.map((paragraph, index) => (
              <ParagraphBlock
                key={index}
                header={paragraph.header}
                body={paragraph.body}
                center={true}
                textColor={textColor}
              />
            ))}
          </div>
        </RowPadding>
      </div>
      <div className="lg:hidden block">
        <RowPadding>
          <div>
            <div
              className="p-2 bg-black w-fit mb-6 shadow rounded-full"
              style={{ color: backgroundColor, backgroundColor: textColor }}
            >
              {icon} {/* Render the passed icon */}
            </div>
            <SecondaryHeadline headline={headline}>
              <p>{description}</p>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </div>
    </SectionColor>
  );
};

const SolutionsPage: React.FC = () => {
  return (
    <div>
      <div>
        <HeroHeader
          imageUrl="/images/solutions/solutions-header.png"
          overline="Solutions"
          title="Dominate competitors with
unmatched private market insights"
          subtitle="From deal sourcing to research, PrivCo’s actionable intelligence helps you uncover opportunities, make informed decisions, and stay ahead."
          ctaText="Start Free"
          ctaHref="/api"
          cta2Text="Learn More"
          cta2Href="/api"
          altText="Hero background image"
        />
      </div>

      <SolutionSection
        headline="Investment Banking"
        description="PrivCo empowers investment bankers to source deals and deliver winning pitches with unparalleled private company insights. Access financials, M&A histories, and growth signals to identify high-potential targets and streamline due diligence, ensuring you stay ahead in a competitive market."
        image="/images/solutions/investment.png"
        paragraphs={[
          {
            header: "Uncover Hidden Deals",
            body: "Find acquisition targets with detailed revenue and EBITDA data.",
          },
          {
            header: "Speed Up Due Diligence",
            body: "Comprehensive profiles cut research time and boost accuracy.",
          },
          {
            header: "Collaborate Seamlessly",
            body: "Share watchlists to align your team on top prospects.",
          },
        ]}
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightblue)"
        icon={<Landmark />} // Pass Landmark icon
      />

      <SolutionSection
        headline="Business Brokers & Advisors"
        description="For business brokers and advisors, PrivCo provides the financial clarity needed to close deals faster. With historical financials and industry filters, you can value businesses accurately and match buyers with sellers efficiently, enhancing your reputation as a trusted advisor."
        image="/images/solutions/brokers.png"
        paragraphs={[
          {
            header: "Price with Confidence",
            body: "Use deal multiples and revenue trends for precise valuations.",
          },
          {
            header: "Match Faster",
            body: "Filter by niche to connect the right buyers and sellers.",
          },
          {
            header: "Impress Clients",
            body: "Data-driven insights elevate your advisory impact.",
          },
        ]}
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
        icon={<Handshake />} // Pass Landmark icon
      />

      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <QuoteBlock
            color="var(--privco-white)"
            text="I came across PrivCo when I was benchmarking services that could help me 
automate and expedite this process, and they beat all other options both
 in terms of quality and price."
            name="Associate at GP Investments"
          ></QuoteBlock>
        </RowPadding>
      </SectionColor>

      <SolutionSection
        headline="Private Equity & Venture Capital"
        description="PrivCo helps PE and VC firms spot high-potential investments and maximize returns. With funding data, multi-year financials, and company signals, you can identify prospects, track growth, and plan profitable exits—all while staying ahead of market trends."
        image="/images/solutions/private.png"
        paragraphs={[
          {
            header: "Spot Winners Early",
            body: "Identify startups and firms with strong growth metrics.",
          },
          {
            header: "Reduce Risk",
            body: "Deep financial insights ensure smarter investment decisions.",
          },
          {
            header: "Maximize Exits",
            body: "Identify startups and firms with strong growth metrics.",
          },
        ]}
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightblue)"
        icon={<DollarSign />} // Pass Landmark icon
      />

      <SolutionSection
        headline="Executive Search"
        description="PrivCo streamlines executive search by revealing high-growth private companies in need of top talent. With 65 million+ executive contacts and detailed company profiles, you can place leaders where they’ll thrive, strengthening your recruitment success."
        image="/images/solutions/exec.png"
        paragraphs={[
          {
            header: "Target Growth Leaders",
            body: "Find firms needing talent with revenue data.",
          },
          {
            header: "Connect Directly",
            body: "Access verified executive contacts for faster outreach.",
          },
          {
            header: "Place with Precision",
            body: "Match candidates using in-depth company insights.",
          },
        ]}
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
        icon={<ScanSearch />} // Pass Landmark icon
      />

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

      <SolutionSection
        headline="Sales Teams"
        description="PrivCo supercharges sales teams by identifying high-value private company leads. Filter by revenue and growth to target prospects ready to buy, tailoring your pitches with financial insights to close deals faster and hit quotas with ease."
        image="/images/solutions/sales.png"
        paragraphs={[
          {
            header: "Fill Your Pipeline",
            body: "Pinpoint companies with purchasing potential.",
          },
          {
            header: "Pitch Smarter",
            body: "Use financial data to craft compelling approaches.",
          },
          {
            header: "Close Faster",
            body: "Focus on high-value leads with precise filters.",
          },
        ]}
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightblue)"
        icon={<ChartNoAxesCombined />} // Pass Landmark icon
      />

      <SolutionSection
        headline="Academics"
        description="PrivCo brings private market insights to students and researchers. With 900,000+ profiles, academic users can explore financials, industries, and trends, bridging classroom learning with real-world applications and preparing the next generation of leaders."
        image="/images/solutions/student.png"
        paragraphs={[
          {
            header: "Enrich Learning",
            body: "Fuel case studies with real private company data.",
          },
          {
            header: "Boost Research",
            body: "Analyze trends across industries and verticals.",
          },
          {
            header: "Empower Futures",
            body: "Equip students to explore careers and opportunities.",
          },
        ]}
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
        icon={<GraduationCap />} // Pass Landmark icon
      />

      <SectionColorLines
        secondaryColor="var(--privco-blue)"
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="w-fit text-center mx-auto">
            <SecondaryHeadline headline="See beyond the obvious.">
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
};

export default SolutionsPage;
