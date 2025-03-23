import React from "react";
import Image from "next/image";
import StarsSVG from "../svgs/Stars";
import SixToEight from "../content-containers/side-by-side/SixToEight";

// Define the props type
interface TestimonialLargeProps {
  review: string;
  name: string;
  position: string;
  logo: string;
  image: string;
  alt: string;
}

const TestimonialLarge: React.FC<TestimonialLargeProps> = ({
  review,
  name,
  position,
  image,
  logo,
  alt,
}) => {
  return (
    <div>
      <SixToEight
        leftChild={
          <div className="w-full h-full">
            <Image
              src={image}
              alt={alt}
              width={1200}
              height={1200}
              className=" "
            />
          </div>
        }
        rightChild={
          <div className="w-full h-full flex items-center justify-center">
            <div className="lg:max-w-[616px] h-fit flex flex-col gap-8">
              <div className="max-w-[170px]">
                <StarsSVG />
              </div>
              <div className="">
                <h5 className="text-[24px] font-[700]">"{review}"</h5>

                <div className="flex flex-col md:flex-row gap-5 md:items-center mt-4">
                  <div className="md:border-r-[1.5px] md:border-b-0 border-b-[1.5px] border-black md:pr-5 md-pb-0 pb-4">
                    <p className="font-[600]">{name}</p>
                    <p>{position}</p>
                  </div>
                  <Image
                    src={logo}
                    alt={alt}
                    width={120}
                    height={48}
                    className="h-fit object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TestimonialLarge;
