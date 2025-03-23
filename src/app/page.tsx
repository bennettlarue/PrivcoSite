import Image from "next/image";
import MainHeadline from "./components/content-blocks/MainHeadline";
import SectionColor from "./components/content-blocks/SectionColor";
import RoundButton from "./components/content-elements/RoundButton";
import FlexRow from "./components/content-containers/Flexrow";
import SixToEight from "./components/content-containers/side-by-side/SixToEight";
import FourToNine from "./components/content-containers/side-by-side/FourToNine";
import SecondaryHeadline from "./components/content-blocks/SecondaryHeadline";
import NumberBlock from "./components/content-elements/NumberBock";
import RowPadding from "./components/content-containers/RowPadding";
import CubeSVG from "./components/svgs/Cube";
import SmallHeadline from "./components/content-blocks/SmallHeadline";
import Testimonial from "./components/content-blocks/Testimonial";
import ArticleCard from "./components/content-blocks/ArticleCard";
import MdOnly from "./components/content-containers/conditional/MdOnly";
import TestimonialLarge from "./components/content-blocks/TestimonialLarge";

export default function Home() {
  return (
    <div>
      <SectionColor textColor="#FFFFFF" backgroundColor="#043873">
        <SixToEight
          leftChild={
            <RowPadding>
              <MainHeadline headline="The most powerful search engine for private company data">
                <p>
                  {" "}
                  Discover essential data on private companies effortlessly.
                  Start with our free account and explore valuable insights
                  before upgrading.
                </p>
                <FlexRow>
                  <RoundButton textColor="#FFFFFF" backgroundColor="#34C759">
                    Start Free
                  </RoundButton>
                  <RoundButton textColor="#FFFFFF" backgroundColor="#043873">
                    Learn More
                  </RoundButton>
                </FlexRow>
                <p className="font-semibold">No Credit Card Required</p>
              </MainHeadline>
            </RowPadding>
          }
          rightChild={
            <img
              className="w-full h-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/ac95/3a74/a62bab4a0502a32a33226a5a0124052a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jmdp3ahvyvvuFFIYkGIaavFeqNTTfIOMhXbWq-xr6LF2GydIoVvudFdYMBjS2pFu2XOoGAuIBEnm4WKexTA0c5jE9AnP7VMZ-NTlHfUs20DImGRqkxMi39cR3QvaqO5LnN1ElYzcKGiQ0FlYWJgPSPdjDPZ1Iz2300Ge3U-G7hiQgaW3bS26n4tP636u-P2yA5XiOBwJMcu00kUnp3Pi4QSZ179S656nBnr1EG7lwDjTlyyBlJo7ceqgi6Ho0OWt--L3MTgSAtz0UYzxfVqU0eAl-L3rFC4zcQXb8affffKY1makLggzgp4g-2Cx6j5VnM7A5s10k6FeRh0XOiawrQ__"
            />
          }
        />
      </SectionColor>

      <SectionColor textColor="#000000" backgroundColor="#4F9CF980">
        <RowPadding>
          <FourToNine
            leftChild={
              <div>
                <SecondaryHeadline
                  overline="Join over 90,000 PrivCo users . . ."
                  headline="Complete financial data on U.S. private companies"
                >
                  <p>
                    {" "}
                    Start your journey with our free plan, designed to give you
                    essential insights into private companies. Experience basic
                    firmographics and limited profile access to discover what
                    you need before upgrading.
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
            }
            rightChild={
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <NumberBlock number="893K+" text="U.S. Private Companies" />
                <NumberBlock number="146M+" text="Data Points" />
                <NumberBlock number="1,000+" text="Industry Verticals " />
                <NumberBlock number="70M+" text="Contact Records" />
              </div>
            }
          />
        </RowPadding>
      </SectionColor>

      <SectionColor textColor="#000000" backgroundColor="#FFFFFF">
        <RowPadding>
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 mx-auto gap-10">
            <Testimonial
              image="/images/person1.jpeg"
              alt="person1"
              review="PrivCo transformed our approach to market research!"
              name="Alice Johnson"
              position="CEO, Tech Innovators"
            />
            <Testimonial
              image="/images/person2.jpeg"
              alt="person2"
              review="PrivCo transformed our approach to market research!"
              name="Alice Johnson"
              position="CEO, Tech Innovators"
            />
            <Testimonial
              image="/images/person3.jpeg"
              alt="person3"
              review="PrivCo transformed our approach to market research!"
              name="Alice Johnson"
              position="CEO, Tech Innovators"
            />
            <MdOnly>
              <Testimonial
                image="/images/person1.jpeg"
                alt="person1"
                review="PrivCo transformed our approach to market research!"
                name="Alice Johnson"
                position="CEO, Tech Innovators"
              />
            </MdOnly>
          </div>
        </RowPadding>
      </SectionColor>

      <SectionColor textColor="#000000" backgroundColor="#effff5">
        <RowPadding>
          <div>
            <SecondaryHeadline headline="Actionable insights for informed business decisions.">
              <p>
                {" "}
                Our free account provides essential firmographics and limited
                profile access, allowing you to discover valuable insights.
                Start your journey today and see what we offer before deciding
                to upgrade.
              </p>
            </SecondaryHeadline>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-[64px] gap-[48px]">
            <SmallHeadline headline="Investment Banking" overline={<CubeSVG />}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </SmallHeadline>
            <SmallHeadline headline="Investment Banking" overline={<CubeSVG />}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </SmallHeadline>
            <SmallHeadline headline="Investment Banking" overline={<CubeSVG />}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </SmallHeadline>
            <SmallHeadline headline="Investment Banking" overline={<CubeSVG />}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </SmallHeadline>
          </div>
        </RowPadding>
      </SectionColor>
      <SectionColor backgroundColor="#043873" textColor="#FFFFFF">
        <RowPadding>
          <SecondaryHeadline headline="Unlock Your Trial Account Today">
            <p>
              Start with our trial plan and access essential data to fuel your
              business growth.
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
        </RowPadding>
      </SectionColor>
      <SectionColor backgroundColor="#FFFFFF" textColor="#000000">
        <RowPadding>
          <SecondaryHeadline headline="Comprehensive. Current. Clear Results." />
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 mx-auto gap-10">
            <ArticleCard
              headline="Explore Comprehensive Data to Drive Your Business Decisions"
              cta="Learn More"
              ctaLink="#"
              image="https://picsum.photos/800/1100"
              alt="image"
            >
              PrivCo offers unparalleled access to private company insights,
              empowering you to make informed decisions.
            </ArticleCard>
            <ArticleCard
              headline="Explore Comprehensive Data to Drive Your Business Decisions"
              cta="Learn More"
              ctaLink="#"
              image="https://picsum.photos/1300/800"
              alt="image"
            >
              PrivCo offers unparalleled access to private company insights,
              empowering you to make informed decisions.
            </ArticleCard>
            <ArticleCard
              headline="Stay Ahead with Real-Time Financial Insights and Trends"
              cta="Explore"
              ctaLink="#"
              image="https://picsum.photos/1000/800"
              alt="image"
            >
              Access updated financials and market trends to keep your
              strategies relevant and effective.
            </ArticleCard>
            <MdOnly>
              <ArticleCard
                headline="Gain Competitive Edge with Advanced Search Capabilities"
                cta="Learn More"
                ctaLink="#"
                image="https://picsum.photos/1010/900"
                alt="image"
              >
                Utilize our powerful search tools to find the data that matters
                most to you.
              </ArticleCard>
            </MdOnly>
          </div>
        </RowPadding>
        <RowPadding>
          <TestimonialLarge
            image="/images/person2.jpeg"
            review="PrivCo's insights have transformed how we approach our investment strategies. The depth of data available is unmatched!"
            name="John Doe"
            position="Investor, Tech Ventures"
            logo="/images/test/webflow-logo.png"
            alt="/images/person1.jpeg"
          />
        </RowPadding>
      </SectionColor>
      <SectionColor textColor="#000000" backgroundColor="#effff5">
        <RowPadding>
          <div className="flex justify-center text-center">
            <SecondaryHeadline
              overline="Empower"
              headline="Unlock Insights with PrivCo's Data Solutions"
            >
              <p>
                At PrivCo, we are dedicated to providing unparalleled access to
                private company data. Our mission is to empower businesses with
                the insights they need to make informed decisions.
              </p>
              <div className="flex justify-center">
                <FlexRow>
                  <RoundButton textColor="#FFFFFF" backgroundColor="#34C759">
                    Start Free
                  </RoundButton>
                  <RoundButton textColor="#FFFFFF" backgroundColor="#043873">
                    Learn More
                  </RoundButton>
                </FlexRow>
              </div>
            </SecondaryHeadline>
          </div>
        </RowPadding>
      </SectionColor>
    </div>
  );
}
