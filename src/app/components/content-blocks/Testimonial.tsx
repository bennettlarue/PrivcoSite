import React from "react";
import Image from "next/image";
import StarsSVG from "../svgs/Stars";

// Define the props type
interface TestimonialProps {
  review: string;
  name: string;
  position: string;
  image: string;
  alt: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  review,
  name,
  position,
  image,
  alt,
}) => {
  return (
    <div className="border border-black w-fit p-[32px] flex flex-col gap-8">
      <Image
        src={image}
        alt={alt}
        width={352}
        height={284}
        className="rounded-[19px]"
      />
      <div className="max-w-[170px]">
        <StarsSVG />
      </div>
      <div className="max-w-[287px]">
        <h5>"{review}"</h5>
        <div className="mt-8">
          <p className="font-[600]">{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
