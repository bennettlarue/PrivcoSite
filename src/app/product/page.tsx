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
  Pin,
  Rocket,
  ScanSearch,
  Search,
  SearchCheck,
  Sparkles,
  Tag,
  TextSearch,
  UserRoundSearch,
} from "lucide-react";
import HeroHeader from "../components/content-blocks/HeroHeader";
import Script from "next/script";
import MainFeatures from "../components/reuseSections/MainFeatures";
import UseCases from "../components/reuseSections/UseCases";
import CtaButton from "../components/content-blocks/CtaButton";

export const metadata = {
  title: "PrivCo Platform - Private Company Financial Data and Intelligence",
  description:
    "PrivCo provides unmatched data on 893,000+ private companies with comprehensive financials and executive contacts. Discover the 80% of the market competitors miss.",
  keywords: [
    "private company data",
    "financial intelligence",
    "bootstrapped companies",
    "private equity data",
    "company search",
  ],

  openGraph: {
    title: "PrivCo Platform - Private Company Financial Intelligence",
    description:
      "Access detailed financial data on 893,000+ private companies that other sources miss. Find companies with $1M-$100M revenue across all industries.",
    images: [
      {
        url: "/images/product/product-header.png",
        width: 1200,
        height: 630,
        alt: "PrivCo platform interface showing private company search capabilities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PrivCo Platform - Private Company Intelligence",
    description:
      "Access detailed financial data on 893,000+ private companies that other sources miss.",
    images: ["/images/product/product-header.png"],
  },

  alternates: {
    canonical: "https://privco.com/product",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PrivCo Platform",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description:
    "PrivCo is the leading provider of private company financial data, specializing in bootstrapped companies with revenues above $1MM.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "90000",
  },
  featureList:
    "Comprehensive private company data, Executive contacts, Financial insights, Advanced search",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes PrivCo's data unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike competitors focusing on public data, PrivCo dedicates all resources to the private sphere—delivering in-depth data on bootstrapped companies with revenues above $1MM that other sources miss. We combine AI with expert oversight to ensure data accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "What types of companies does PrivCo cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PrivCo specializes in 'bootstrapped' companies above $1MM that aren't covered by other data sources because they haven't raised private equity or venture capital. We have profiles on 893,000+ U.S. private companies.",
      },
    },
    {
      "@type": "Question",
      name: "What information does PrivCo provide about private companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PrivCo provides detailed revenue, EBITDA, valuations, and growth metrics for private companies. We also offer 65M+ verified executive contacts with emails, mobile numbers, and LinkedIn URLs, along with industry classifications and keyword tagging for niche discovery.",
      },
    },
    {
      "@type": "Question",
      name: "How does PrivCo collect and verify its data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use a combination of curated sources (filings, publications, and credible news outlets), AI and machine learning to model revenues and valuations, and expert data scientists who verify and update profiles daily for accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try PrivCo before purchasing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PrivCo offers a 7-day, full-access free trial that allows you to explore our complete platform and data offerings.",
      },
    },
  ],
};

interface ImageCaptionProps {
  image: string;
  text: string;
  alt: string;
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ image, text, alt }) => {
  return (
    <div className="max-w-[405px] mx-auto border border-b-2 border-[var(--privco-blue)] shadow">
      <div className="max-w-[405px] max-h-[230px] overflow-hidden flex items-center justify-center">
        <Image
          src={image}
          className="object-cover"
          alt={alt}
          width={405}
          height={405}
        />
      </div>
      <div className="text-lg lg:text-xl font-medium mx-auto p-6 w-full bg-white/50">
        <Search className="text-[var(--privco-blue)] inline-block size-5 mr-1" />
        {text}
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
    <div className="relative w-fit border border-[var(--privco-blue)] border-b-2 shadow p-8 space-y-3 mx-auto bg-blue-100/20">
      <div className="flex items-center gap-3">
        {svg && <div>{svg}</div>}
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
  description: React.ReactNode;
  svg?: React.ReactNode;
}

const TextBlurb: React.FC<TextBlurbProps> = ({
  headline,
  description,
  svg,
}) => {
  return (
    <div className="border-b md:p-7 p-5 border-[var(--privco-blue)] shadow space-y-2">
      {svg && <div className=" ">{svg}</div>}
      <SmallHeadline headline={headline}>{description}</SmallHeadline>
    </div>
  );
};

export default function Product() {
  return (
    <div>
      <Script
        id="product-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <HeroHeader
          imageUrl="/images/product/product-header.png"
          overline="Go Deeper"
          title="With PrivCo, more data means greater insights into opportunities. "
          subtitle=" "
          ctaText="Start Free"
          ctaHref={"https://system.privco.com/signup"}
          altText="PrivCo platform interface showing private company search capabilities"
        />
      </div>

      <SectionColor backgroundColor="var(--privco-blue)">
        <RowPadding>
          <div className="border border-white rounded shadow flex md:flex-row flex-col text-white">
            <div className="w-full h-fit my-auto lg:px-16 px-6 py-6">
              <div className="lg:space-y-4 md:space-y-1 space-y-4">
                <h2 className="lg:text-4xl md:text-2xl text-2xl font-bold">
                  Competitors show you just 20% of the private market— PrivCo
                  reveals the 80% below the surface.
                </h2>
                <p className="lg:text-2xl text-lg">
                  From granular financials to 70MM+ executive contacts, we give
                  you the tools to act decisively.
                </p>
                <div>
                  <CtaButton />
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[400px]">
              <Image
                src="/images/iceberg.png"
                alt="PrivCo Coverage vs. Competitors - Go Deeper"
                width={461}
                height={501}
                className="mx-auto shadow object-cover w-full md:max-w-[400px] max-w-[500px] md:rounded-r md:border-l border-white"
                priority
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
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-10">
            <TextBlurb
              svg={<Handshake color="var(--privco-blue)" className="size-7" />}
              headline="The Private Market Authority"
              description={
                <p>
                  We specialize in U.S. private company intelligence—
                  <span className="font-semibold">
                    {" "}
                    financials, growth, and contacts
                  </span>
                  — with a depth no other platform delivers.
                </p>
              }
            />
            <TextBlurb
              svg={<Brain color="var(--privco-blue)" className="size-7" />}
              headline="AI + Human Expertise"
              description={
                <p>
                  Our proprietary AI is paired with human QA to ensure{" "}
                  <span className="font-medium">146M+ data points</span> are
                  accurate, current, and never blindly scraped.
                </p>
              }
            />
            <TextBlurb
              svg={<Pin color="var(--privco-blue)" className="size-7" />}
              headline="Pinpoint Niche Markets"
              description={
                <p>
                  PrivCo’s unique tagging system surfaces companies other
                  platforms miss—{" "}
                  <span className="font-semibold">
                    target by true business activity, not just broad sectors.
                  </span>
                </p>
              }
            />
            <TextBlurb
              svg={<ChartLine color="var(--privco-blue)" className="size-7" />}
              headline=" Financials + Contacts, Seamlessly Connected"
              description={
                <p>
                  See a company’s financial health and its decision-makers—{" "}
                  <span className="font-semibold">70M+ verified contacts</span>{" "}
                  directly linked to private firm profiles.
                </p>
              }
            />
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightblue)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <SecondaryHeadline headline="Conduct searches not possible on any other platform.">
            <div className="flex gap-10 lg:flex-row flex-col">
              <ImageCaption
                image="/images/product/search-manu.png"
                text="“Midwest private manufacturing
with $10-50M revenue & 15%+ growth rate.”"
                alt="PrivCo search results for Midwest private manufacturing
with $10-50M revenue & 15%+ growth rate."
              />
              <ImageCaption
                image="/images/product/search-solar.png"
                text="“California private companies in the renewable energy sector with $5-20M EBITDA.”"
                alt="PrivCo search results for California private companies in the renewable energy sector with $5-20M EBITDA."
              />
              <ImageCaption
                image="/images/product/search-ecom.png"
                text="“Profitable e-commerce businesses near Boston operating for 5+ years.”"
                alt="PrivCo search results for Profitable e-commerce businesses near Boston operating for 5+ years."
              />
            </div>
            <div>
              <CtaButton />
            </div>
          </SecondaryHeadline>
        </RowPadding>
      </SectionColor>

      <MainFeatures />
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
        backgroundColor="var(--privco-white)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="">
            <SecondaryHeadline
              headline="Why PrivCo's Stands Out
"
            >
              <div>
                <CtaButton />
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 ld:gap-10 gap-5">
                <ParagraphBlock
                  svg={<TextSearch className="size-8" />}
                  header="Unmatched Data"
                >
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
                  svg={<DraftingCompass className="size-8" />}
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
                <ParagraphBlock
                  svg={<FileUser className="size-8" />}
                  header="Exclusive Intelligence"
                >
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
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-blue)"
        textColor="var(--privco-white)"
      >
        <RowPadding>
          <SecondaryHeadline headline="How We Deliver Quality Data">
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
            <div>
              <CtaButton />
            </div>
          </SecondaryHeadline>
        </RowPadding>
      </SectionColor>

      <UseCases />
      <SectionColorLines
        secondaryColor="var(--privco-white)"
        backgroundColor="var(--privco-lightgreen)"
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
                <CtaButton
                  ctaHref="https://system.privco.com/signup"
                  ctaText="Start Free"
                />
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColorLines>
    </div>
  );
}
