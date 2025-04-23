import React from "react";

// Define the props type
interface NumberBlockProps {
  number: string;
  text: string;
}

const NumberBlock: React.FC<NumberBlockProps> = ({ number, text }) => {
  return (
    <div
      className="border w-full p-6 flex items-center shadow"
      style={{
        border: "1px solid var(--privco-blue)",
        borderWidth: "1px 2px 2px 1px",
        color: "var(--privco-blue)",
      }}
    >
      <div>
        <h4 className="text-3xl lg:text-4xl xl:text-5xl font-[700] leading-[130%]">
          {number}
        </h4>
        <p className="lg:text-2xl text-xl font-[700] leading-[140%] text-black">
          {text}
        </p>
      </div>
    </div>
  );
};

export default NumberBlock;
