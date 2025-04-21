import React from "react";

// Props for the QuoteBlock component
interface QuoteBlockProps {
  text: string;
  name: string;
  color?: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ text, name, color }) => {
  return (
    <div
      className="max-w-[1100px] mx-auto text-xl lg:text-3xl"
      style={{ color: color ? color : "auto", border: `1px solid ${color}` }}
    >
      <p className="w-fit mx-auto text-center font-semibold">"{text}"</p>
      <p className="w-fit mx-auto text-center mt-5">-{name}</p>
    </div>
  );
};

export default QuoteBlock;
