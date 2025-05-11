import React from "react";

// Define the props type
interface FigureProps {
  header: string;
  subtext: string;
  image: React.ReactNode;
}

const Figure: React.FC<FigureProps> = ({ header, subtext, image }) => {
  return (
    <div className="space-y-3.5 max-w-[400px] border border-gray-500 shadow mx-auto rounded">
      <div className="rounded-t-lg border-b">{image}</div>
      <div className="space-y-0.5 p-5">
        <h4 className="font-semibold text-xl">{header}</h4>
        <p className="font-light text-xl">{subtext}</p>
      </div>
    </div>
  );
};

export default Figure;
