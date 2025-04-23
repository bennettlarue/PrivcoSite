import React from "react";

// Define the props type
interface SectionColorLinesProps {
  backgroundColor: string;
  secondaryColor: string;
  textColor?: string;
  children?: React.ReactNode;
}

const SectionColorLines: React.FC<SectionColorLinesProps> = ({
  backgroundColor,
  secondaryColor,
  textColor,
  children,
}) => {
  return (
    <div
      style={{ color: textColor, backgroundColor: backgroundColor }}
      className="relative overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto lg:py-0 py-8 relative z-10 ">
        {children}
      </div>

      {/* Parallel thick lines with rounded caps pointing toward center - Bottom Right */}
      <div className="absolute bottom-0 right-0 z-0">
        {/* Mobile version - smaller SVG */}
        <svg
          className="block md:hidden"
          width="150"
          height="150"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Create parallel lines starting from bottom right corner */}
          {/* right middle */}
          <line
            x1="320"
            y1="300"
            x2="200"
            y2="180"
            stroke={"rgb(176, 255, 207)"}
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* right */}
          <line
            x1="320"
            y1="240"
            x2="260"
            y2="180"
            stroke={"rgb(82, 254, 140)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          {/* left middle */}
          <line
            x1="280"
            y1="320"
            x2="170"
            y2="210"
            stroke={"rgb(135, 200, 253)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          <line
            x1="220"
            y1="320"
            x2="170"
            y2="270"
            stroke={"rgb(33, 142, 255)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>

        {/* Desktop version - original size */}
        <svg
          className="hidden md:block"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Create parallel lines starting from bottom right corner */}
          {/* right middle */}
          <line
            x1="320"
            y1="300"
            x2="160"
            y2="140"
            stroke={"rgb(176, 255, 207)"}
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* right */}
          <line
            x1="320"
            y1="240"
            x2="220"
            y2="140"
            stroke={"rgb(82, 254, 140)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          {/* left middle */}
          <line
            x1="280"
            y1="320"
            x2="130"
            y2="170"
            stroke={"rgb(135, 200, 253)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          <line
            x1="220"
            y1="320"
            x2="130"
            y2="230"
            stroke={"rgb(33, 142, 255)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Parallel thick lines with rounded caps pointing toward center - Top Left (mirrored) */}
      <div className="absolute top-0 left-0 z-0">
        {/* Mobile version - smaller SVG */}
        <svg
          className="block md:hidden"
          width="150"
          height="150"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Create parallel lines starting from top left corner (mirrored from bottom right) */}
          {/* left middle */}
          <line
            x1="-20"
            y1="0"
            x2="100"
            y2="120"
            stroke={"rgb(176, 255, 207)"}
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* left */}
          <line
            x1="-20"
            y1="60"
            x2="40"
            y2="120"
            stroke={"rgb(82, 254, 140)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          {/* right middle */}
          <line
            x1="20"
            y1="-20"
            x2="130"
            y2="90"
            stroke={"rgb(135, 200, 253)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          <line
            x1="80"
            y1="-20"
            x2="130"
            y2="30"
            stroke={"rgb(33, 142, 255)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>

        {/* Desktop version - original size */}
        <svg
          className="hidden md:block"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Create parallel lines starting from top left corner (mirrored from bottom right) */}
          {/* left middle */}
          <line
            x1="-20"
            y1="0"
            x2="140"
            y2="160"
            stroke={"rgb(176, 255, 207)"}
            strokeWidth="30"
            strokeLinecap="round"
          />

          {/* left */}
          <line
            x1="-20"
            y1="60"
            x2="80"
            y2="160"
            stroke={"rgb(82, 254, 140)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          {/* right middle */}
          <line
            x1="20"
            y1="-20"
            x2="170"
            y2="130"
            stroke={"rgb(135, 200, 253)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
          <line
            x1="80"
            y1="-20"
            x2="170"
            y2="70"
            stroke={"rgb(33, 142, 255)"}
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionColorLines;
