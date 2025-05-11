import MainHeadline from "../components/content-blocks/MainHeadline";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";
import ClientLogos from "../components/content-blocks/ClientLogos";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import BigButton from "../components/content-blocks/BigButton";
import PricingTable from "../components/content-blocks/PricingTable";
import Accordion from "../components/content-blocks/Accordion";
import RoundButton from "../components/content-elements/RoundButton";
import HeroHeader from "../components/content-blocks/HeroHeader";
import PricingCards from "../components/content-blocks/PricingCards";
import FadeIn from "../components/transition-wrappers/FadeIn";
import SecondaryCtaButton from "../components/content-blocks/SecondaryCtaButton";

export default function Pricing() {
  const accordionItems = [
    {
      id: "1",
      title: "What is the Seven-Day Free Trial?",
      content: (
        <p>
          Our seven-day free trial offers unlimited access to the Select tier.
          You have access to all features of the Select tier for seven days.
        </p>
      ),
    },
    {
      id: "2",
      title: "How do I upgrade?",
      content: (
        <p>
          After seven days, your free trial will automatically convert to a paid
          subscription.
        </p>
      ),
    },
    {
      id: "3",
      title: "Can I upgrade to Enterprise?",
      content: (
        <p>
          Yes, just contact us and we can quickly upgrade your account to the
          Enterprise Tier.
        </p>
      ),
    },
    {
      id: "4",
      title: "Can I cancel anytime?",
      content: (
        <p>
          Absolutely! You can cancel your subscription at any time without any
          penalties. We believe in flexibility and want you to feel comfortable
          with your choice.
        </p>
      ),
    },
  ];

  return (
    <div>
      <div>
        <HeroHeader
          imageUrl="/images/pricing/pricing-header.png"
          title="More data. More Deals."
          subtitle="146 million data points and 893K+ companies"
          ctaText="7-Day Full-Access Free Trial"
          ctaHref={"https://system.privco.com/signup"}
          cta2Text="Learn More"
          cta2Href="/product"
          altText="Hero background image"
        />
      </div>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <FadeIn>
          <div className="mt-8 px-5">
            <PricingCards />
          </div>
          <div className="mt-12 px-5">
            <div className="w-fit mx-auto">
              {" "}
              <SecondaryHeadline headline="Compare Plans" />
            </div>
            <PricingTable />
          </div>
        </FadeIn>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <div className="mb-2">
            <SecondaryHeadline headline="FAQs">
              Find answers to your questions about our pricing plans and sign-up
              process.
            </SecondaryHeadline>
          </div>
          <Accordion items={accordionItems} />
          <div className="space-y-5 mt-12">
            <h3 className="font-bold md:text-2xl text-xl mt-5">
              Still have questions? Get expert help now!
            </h3>
            <div className="w-fit font-bold md:text-3xl text-xl">
              <SecondaryCtaButton href="/contact" text="Contact Us" />
            </div>
          </div>
        </RowPadding>
      </SectionColor>
    </div>
  );
}
