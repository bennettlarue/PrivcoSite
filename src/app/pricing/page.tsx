import MainHeadline from "../components/content-blocks/MainHeadline";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";
import ClientLogos from "../components/content-blocks/ClientLogos";
import SecondaryHeadline from "../components/content-blocks/SecondaryHeadline";
import BigButton from "../components/content-blocks/BigButton";
import PricingTable from "../components/content-blocks/PricingTable";
import Accordion from "../components/content-blocks/Accordion";
import RoundButton from "../components/content-elements/RoundButton";

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
      <SectionColor
        textColor="var(--privco-white)"
        backgroundColor="var(--privco-blue)"
      >
        <RowPadding>
          <div className="text-center">
            <MainHeadline headline="More Data. More Deals.">
              <p className="text-2xl font-semibold">
                146 million data points and 893K+ companies
              </p>
              <p className="bg-[var(--privco-yellow)] w-fit px-5 py-3 font-bold md:text-2xl text-xl text-[var(--privco-black)] mx-auto">
                7-Day Full-Access Free Trial
              </p>
            </MainHeadline>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor
        textColor="var(--privco-black)"
        backgroundColor="var(--privco-white)"
      >
        <RowPadding>
          <div className="mb-2">
            <ClientLogos
              images={[
                "/images/client-logos/amex.png",
                "/images/client-logos/stephens.png",
                "/images/client-logos/deloitte.png",
                "/images/client-logos/wharton.png",
                "/images/client-logos/microsoft.png",
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
            <div className="space-y-3 border-2 rounded-xl py-5 px-7 border-[var(--privco-blue)]">
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h5 className="text-xl md:text-2xl font-bold text-[var(--privco-blue)]">
                    PrivCo Select
                  </h5>
                  <div className="flex space-x-2 text-[var(--privco-blue)]">
                    <h5 className="px-3 py-0.5 text-sm rounded border border-[var(--privco-blue)]">
                      Annual
                    </h5>
                    <h5 className="px-3 py-0.5 text-sm rounded border border-[var(--privco-blue)]">
                      Monthly
                    </h5>
                  </div>
                </div>

                <div className="block md:flex md:space-x-2 items-baseline font-semibold ">
                  <h3 className="text-3xl md:text-4xl font-bold">$167/month</h3>
                  <h4 className="space-xl">(paid annually)</h4>
                </div>
                <h5 className="text-xl md:text-2xl font-semibold">
                  Powerful private-company search
                </h5>
              </div>
              <div>
                <ul className="list-disc pl-4">
                  <li>500 company/investor profile views per month</li>
                  <li>Most recent year of financial data</li>
                  <li>Most recent funding round data</li>
                  <li>
                    Search by location, industry, keyword, year founded,
                    revenue, EBITA, VC/PE status, parent/subsidiary
                  </li>
                  <li>100 viewable results per search category</li>
                  <li>50 total monthly searches across all categories</li>
                  <li>50 monthly profile PDF downloads</li>
                  <li>10,000 company contact records per month</li>
                  <li>1,000 investor contact records per month</li>
                  <li>1,000 contact searches and list builds</li>
                </ul>
              </div>
              <div className="bg-[var(--privco-green)] text-[var(--privco-white)] font-bold text-center p-5 text-2xl rounded">
                <button>Start 7-Day Free Trial</button>
              </div>
            </div>

            <div className="space-y-3 border border-gray-300 rounded-xl py-5 px-7">
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h5 className="text-xl md:text-2xl font-bold text-[var(--privco-blue)]">
                    PrivCo Enterprise
                  </h5>
                </div>

                <div className="block md:flex md:space-x-2 items-baseline font-semibold ">
                  <h3 className="text-3xl md:text-4xl font-bold">Contact Us</h3>
                </div>
                <h5 className="text-xl md:text-2xl font-bold">
                  Custom Data Solutions for Teams
                </h5>
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  Everything in Select, plus:
                </h4>
                <ul className="list-disc pl-4">
                  <li>Unlimited company/investor profile views</li>
                  <li>All available years of financial data</li>
                  <li>All available funding round data</li>
                  <li>
                    Additional search criteria: employee size, revenue growth
                    rate, total funding raised, latest funding year, latest
                    valuation
                  </li>
                  <li>
                    500 viewable results per search category (5x more than
                    Select)
                  </li>
                  <li>500 total monthly searches (10x more than Select)</li>
                  <li>
                    500 monthly profile PDF downloads with rollover (6,000
                    annually)
                  </li>
                  <li>Dedicated account manager</li>
                  <li>Access to PrivCo Data Team for custom requests</li>
                </ul>
              </div>
              <div className="bg-[var(--privco-blue)] text-[var(--privco-white)] font-bold text-center p-5 text-2xl rounded">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center">
              {" "}
              <SecondaryHeadline headline="Compare Plans" />
            </div>
            <PricingTable />
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor
        backgroundColor="var(--privco-lightgreen)"
        textColor="var(--privco-black)"
      >
        <RowPadding>
          <SecondaryHeadline headline="FAQs">
            Find answers to your questions about our pricing plans and sign-up
            process.
          </SecondaryHeadline>
          <Accordion items={accordionItems} />
          <div className="space-y-5">
            <h3 className="font-bold md:text-2xl text-xl">
              Still have questions? Get expert help now!
            </h3>
            <div className="w-fit font-bold md:text-3xl text-xl">
              {" "}
              <RoundButton
                backgroundColor="var(--privco-blue)"
                textColor="var(--privco-white)"
              >
                Contact
              </RoundButton>
            </div>
          </div>
        </RowPadding>
      </SectionColor>
    </div>
  );
}
