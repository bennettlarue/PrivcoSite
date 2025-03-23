import React from "react";

// Define the props type
interface NumberBlockProps {
  number: string;
  text: string;
}

const NumberBlock: React.FC<NumberBlockProps> = ({ number, text }) => {
  return (
    <div className="border border-black w-full p-6">
      <h4 className="text-5xl font-[700] leading-[130%]">{number}</h4>
      <p className="text-[24px] font-[700] leading-[140%]">{text}</p>
    </div>
  );
};

export default NumberBlock;
