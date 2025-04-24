import { Check, SquareCheckBig } from "lucide-react";
import React from "react";

// Props for the BoxText component
interface BoxTextProps {
  text: string;
  color: string;
}

const BoxText: React.FC<BoxTextProps> = ({ text, color }) => {
  return (
    <div
      className="relative md:px-5 px-3 md:py-8 py-6 md:text-2xl text-xl font-semibold flex items-center leading-tight shadow"
      style={{
        color: color,
        border: `solid ${color}`,
        borderWidth: "1px 1px 2px 1px",
      }}
    >
      <SquareCheckBig className="absolute right-2 top-2 md:size-5 size-4" />
      <p className="w-fit mx-auto text-center">{text}</p>
    </div>
  );
};

export default BoxText;
