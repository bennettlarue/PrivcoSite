import React from "react";
import StarsSVG from "../svgs/Stars";
import CtaButton from "./CtaButton";

// Props for the QuoteBlock component
interface QuoteBlockProps {
  text: string;
  name: string;
  color?: string;
  secondaryColor?: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({
  text,
  name,
  color = "black",
  secondaryColor = "blue",
}) => {
  return (
    <div className="text-center mx-auto space-y-4" style={{ color }}>
      <div className="border border-white p-5 py-8 pt-9 border-b-2 shadow-lg space-y-5">
        <h3 className="md:text-4xl text-2xl font-semibold">
          <span className="" style={{ color: color }}>
            ”
          </span>
          {text}
          <span style={{ color: color }}>”</span>
        </h3>
        <div className="max-w-[200px] mx-auto">
          <StarsSVG />
        </div>
      </div>
      <p className="italic text-xl font-medium">- {name}</p>
      <div className="w-fit mx-auto">
        <CtaButton
          ctaHref="https://system.privco.com/signup"
          ctaText="Start Free"
        />
      </div>
    </div>
  );
};

export default QuoteBlock;
