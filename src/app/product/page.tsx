import BigButton from "../components/content-blocks/BigButton";
import BoxText from "../components/content-blocks/BoxText";
import ClientLogos from "../components/content-blocks/ClientLogos";
import MainHeadline from "../components/content-blocks/MainHeadline";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import SectionColor from "../components/content-blocks/SectionColor";
import SmallHeadline from "../components/content-blocks/SmallHeadline";
import RowPadding from "../components/content-containers/RowPadding";
import Image from "next/image";
import SmallHeadlineSection from "../components/content-blocks/SmallHeadlineSection";
import SectionColorLines from "../components/content-blocks/SectionColorLines";
import QuoteBlock from "../components/content-blocks/QuoteBlock";
import {
  BadgeDollarSign,
  Brain,
  ChartLine,
  ChartNoAxesCombined,
  CircuitBoard,
  DraftingCompass,
  FileUser,
  Gem,
  GraduationCap,
  Handshake,
  Landmark,
  Rocket,
  ScanSearch,
  Search,
  SearchCheck,
  Sparkles,
  Tag,
  TextSearch,
  UserRoundSearch,
} from "lucide-react";

interface ImageCaptionProps {
  image: string;
  text: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ image, text }) => {
  return (
    <div className="max-w-[405px] mx-auto border border-b-2 border-r-2 border-[var(--privco-blue)] rounded shadow">
      <div className="max-w-[405px] max-h-[230px] overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          className="object-cover rounded-t"
          alt={"dd"}
          width={405}
          height={405}
        />
      </div>
      <div className="relative">
        <p className="text-lg lg:text-xl font-medium mx-auto p-6 w-full">
          {text}
        </p>
        <Search className="absolute bottom-0 right-0 size-6 m-3 drop-shadow-sm text-[var(--privco-blue)]" />
      </div>
    </div>
  );
};

interface ParagraphProps {
  header: string;
  body: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ header, body }) => {
  return (
    <div className="text-lg max-w-[365px]">
      <h5 className="font-medium">{header}:</h5>
      <p className="ml-1.5">{body}</p>
    </div>
  );
};

interface ParagraphBlockProps {
  header: string;
  children?: React.ReactNode;
  color?: string;
  svg?: React.ReactNode;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({
  header,
  children,
  color,
  svg,
}) => {
  return (
    <div
      className="relative w-fit border border-[var(--privco-blue)] border-r-2 border-b-2 rounded shadow p-8 space-y-3 mx-auto"
      style={{ backgroundColor: color || "transparent" }}
    >
      {svg && <div className="absolute right-6 top-6">{svg}</div>}{" "}
      <div className=" items-center gap-4">
        {" "}
        <h4 className="font-bold text-2xl">{header}</h4>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

interface MiniHeadlineProps {
  headline: string;
  children?: React.ReactNode;
  svg?: React.ReactNode;
}

const MiniHeadline: React.FC<MiniHeadlineProps> = ({
  headline,
  children,
  svg,
}) => {
  return (
    <div className="space-y-2 border-t pt-5">
      <div className="flex items-center gap-2">
        {svg && <div className="">{svg}</div>}
        <h5 className="text-2xl font-semibold">{headline}</h5>
      </div>

      <div className="text-xl">{children}</div>
    </div>
  );
};

interface BulletListItem {
  title: string;
  body: string;
}

interface BulletListProps {
  items: BulletListItem[];
}

const BulletList: React.FC<BulletListProps> = ({ items }) => {
  return (
    <ul className="list-disc pl-5 space-y-4">
      {items.map((item, index) => (
        <li key={index} className="text-xl">
          <span className="font-semibold">{item.title}</span>: {item.body}
        </li>
      ))}
    </ul>
  );
};

// Define the TextBlurb component
interface TextBlurbProps {
  headline: string;
  description: string;
  svg?: React.ReactNode;
}

const TextBlurb: React.FC<TextBlurbProps> = ({
  headline,
  description,
  svg,
}) => {
  return (
    <div className="border border-l-2 border-b-2 md:p-7 p-5 rounded border-[var(--privco-green)] shadow space-y-2">
      {svg && <div className=" ">{svg}</div>}
      <SmallHeadline headline={headline}>{description}</SmallHeadline>
    </div>
  );
};

export default function Product() {
  return (
    <div>
      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-10">
            <div className="col-span-3 flex items-center max-w-[770px]">
              <MainHeadline
                overline="Go Deeper"
                headline="With PrivCo, more data means greater insights into opportunities."
              >
                <p className="text-xl font-semibold">
                  Competitors show you just 20% of the private market—PrivCo
                  reveals the 80% below the surface. From granular financials to
                  executive contacts, we give you the tools to act decisively.
                </p>
              </MainHeadline>
            </div>
            <div className="col-span-2">
              <Image
                src={"/images/iceberg.png"}
                className=""
                alt={"dd"}
                width={461}
                height={501}
              />
            </div>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-lightgreen)"
      >
        <RowPadding>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-10">
            <TextBlurb
              svg={<Handshake color="var(--privco-green)" className="size-7" />}
              headline="100% Private Focus"
              description="Unlike competitors chasing public data, we dedicate all our resources to the private sphere—delivering depth where others fall short."
            />
            <TextBlurb
              svg={<Brain color="var(--privco-green)" className="size-7" />}
              headline="AI + Human Expertise"
              description="We combine cutting-edge AI with expert oversight and proprietary search algorithms, ensuring millions of data points are accurate and actionable—not just scraped and guessed."
            />
            <TextBlurb
              svg={<Tag color="var(--privco-green)" className="size-7" />}
              headline="Best-In-Class Classification"
              description="PrivCo’s keyword tagging system outshines broad industry categories, letting you discover niche verticals with precision."
            />
            <TextBlurb
              svg={<ChartLine color="var(--privco-green)" className="size-7" />}
              headline="Integrated Financials & Contacts"
              description="No other platform blends robust financial data with verified contact details in one seamless experience."
            />
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <SecondaryHeadline headline="Conduct searches not possible on any other platform.">
            <div className="flex gap-10 lg:flex-row flex-col">
              <ImageCaption
                image="/images/product/search-manu.png"
                text="“Midwest private manufacturing
with $10-50M revenue & 15%+ growth rate.”"
              />
              <ImageCaption
                image="/images/product/search-solar.png"
                text="“California private companies in the renewable energy sector with $5-20M EBITDA.”"
              />
              <ImageCaption
                image="/images/product/search-ecom.png"
                text="“Profitable e-commerce businesses near Boston operating for 5+ years.”"
              />
            </div>
          </SecondaryHeadline>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <QuoteBlock
            text="The team at PrivCo has gathered one of the fullest, information-rich, and well-organized 
databases out there. We have found a great deal of value by uncovering some 
of the hardest-to-find information, financial data, and contacts for the private companies."
            name="Financial Analyst, Leading Investment Firm
"
            color="white"
          ></QuoteBlock>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
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
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="text-center lg:text-left">
            <SecondaryHeadline
              headline="Why PrivCo's Stands Out
"
            />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 ld:gap-10 gap-5">
            <ParagraphBlock svg={<TextSearch />} header="Unmatched Data">
              <Paragraph
                header="Comprehensive Coverage"
                body="Profiles on 893,000+ U.S. private companies, capturing 80% of the market competitors overlook."
              />
              <Paragraph
                header="Accurate Financials"
                body="Detailed revenue, EBITDA, valuations, and growth metrics—beyond just PE/VC-backed firms."
              />
              <Paragraph
                header="Mid-Market Mastery"
                body="Specialized focus on companies with $1M–$100M in revenue."
              />
            </ParagraphBlock>
            <ParagraphBlock
              svg={<DraftingCompass />}
              header="Precision Tools for Action"
            >
              <Paragraph
                header="Advanced Search"
                body="Filter by revenue, location, ownership, industry, and more to find your exact targets."
              />
              <Paragraph
                header="Build Targeted Lists"
                body="Use dynamic filters and proprietary classifications to pinpoint prospects instantly."
              />
              <Paragraph
                header="Actionable Insights"
                body="Monitor trends, track companies with watchlists, and access data directly via our Chrome extension."
              />
            </ParagraphBlock>
            <ParagraphBlock svg={<FileUser />} header="Exclusive Intelligence">
              <Paragraph
                header="Decision-Maker Contacts"
                body="65M+ verified executive records with emails, mobile numbers, and LinkedIn URLs."
              />
              <Paragraph
                header="Wealth Signals"
                body="Identify owners nearing liquidity events or showing wealth accumulation."
              />
              <Paragraph
                header="Retirement Plan Analytics"
                body="Spot firms with significant 401(k) assetsripe for financial advisory services."
              />
            </ParagraphBlock>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <SecondaryHeadline headline="How We Deliver Quality Data">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
              <div className="space-y-8">
                <MiniHeadline svg={<Rocket />} headline="Proven Methodology">
                  <p>
                    Finding private company data is tough—fragmented and opaque.
                    With over a decade of expertise, we’ve mastered it. Our
                    proprietary system of company identification, industry
                    mapping, and keyword tagging drives unparalleled market
                    visibility.
                  </p>
                </MiniHeadline>
                <BulletList
                  items={[
                    {
                      title: "Curated Sources",
                      body: "We start with filings, publications, and credible news outlets.",
                    },
                    {
                      title: "Smart Technology",
                      body: "AI and machine learning model revenues, valuations, and growth signals.",
                    },
                    {
                      title: "Expert Validation",
                      body: "Our data scientists verify and update profiles daily for accuracy.",
                    },
                  ]}
                />
                <MiniHeadline headline="Quality Over Quantity" svg={<Gem />}>
                  <BulletList
                    items={[
                      {
                        title: "Rigorous Standards",
                        body: "Enterprise-grade data from day one, eliminating outdated or irrelevant info.",
                      },
                      {
                        title: "Impactful Insights",
                        body: "We prioritize actionable intelligence over bloated datasets.",
                      },
                    ]}
                  />
                </MiniHeadline>
                <MiniHeadline headline="Deep Technology" svg={<CircuitBoard />}>
                  <p>
                    Our proprietary system of company identification, industry
                    mapping, and keyword tagging drives unparalleled market
                    visibility.
                  </p>
                </MiniHeadline>
              </div>
              <div className="items-center justify-center max-w-[616px] max-h-[677px] hidden xl:flex">
                <Image
                  src={"/images/header-image.png"}
                  className="object-cover w-full h-full"
                  alt={"dd"}
                  width={616}
                  height={677}
                />
              </div>
            </div>
          </SecondaryHeadline>
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
                delay={0.1} // Add delay for sequential animation
              />
              <SmallHeadlineSection
                headline="Venture Capital"
                svg={<BadgeDollarSign />}
                description="Discover the Next Big Thing with actionable insights from pre-revenue and late-stage companies alike."
                delay={0.2} // Add delay for sequential animation
              />
              <SmallHeadlineSection
                headline="Investment Banking"
                svg={<Landmark />}
                description="Get accurate industry and private company financials. Gain actionable insights related to VC, M&A, debt, EBITDA, and equity financing."
                delay={0.3} // Add delay for sequential animation
              />
              <SmallHeadlineSection
                headline="Academics"
                svg={<GraduationCap />}
                description="Provide faculty and students with comprehensive financial intelligence."
                delay={0.4} // Add delay for sequential animation
              />
              <SmallHeadlineSection
                headline="Executive Search"
                svg={<ScanSearch />}
                description="Uncover hard-to-find private companies in need of top talent."
                delay={0.5} // Add delay for sequential animation
              />
              <SmallHeadlineSection
                headline="Sales Teams"
                svg={<ChartNoAxesCombined />}
                description="Find and connect with the right prospects quickly and efficiently."
                delay={0.6} // Add delay for sequential animation
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
