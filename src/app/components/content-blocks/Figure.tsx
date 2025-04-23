import React from "react";
import Image from "next/image";

// Define the props type
interface FigureProps {
  header: string;
  subtext: string;
  image: string;
  alt: string;
}

const Figure: React.FC<FigureProps> = ({ header, subtext, image, alt }) => {
  return (
    <div className="space-y-3.5 max-w-[400px] border border-gray-500 shadow-lg rounded-lg mx-auto">
      <Image
        src={image}
        alt={alt}
        width={425}
        height={375}
        className="rounded-t-lg"
      />
      <div className="space-y-0.5 p-5">
        <h4 className="font-semibold text-xl">{header}</h4>
        <p className="font-light text-xl">{subtext}</p>
      </div>
    </div>
  );
};

export default Figure;
