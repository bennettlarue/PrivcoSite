import React from "react";
import FadeIn from "../transition-wrappers/FadeIn";

// Define the props type
interface SecondaryHeadlineProps {
  headline: React.ReactNode; // Changed from string to React.ReactNode
  overline?: React.ReactNode; // Optional overline
  paragraph?: string; // Optional paragraph text
  className?: string;
  children?: React.ReactNode; // Optional children
  color?: string;
}

const SecondaryHeadline: React.FC<SecondaryHeadlineProps> = ({
  headline,
  overline,
  children,
  color,
}) => {
  return (
    <div className="flex flex-col gap-5 max-w-[1200px] text-lg">
      {overline && (
        <p className="md:text-2xl text-xl font-medium">{overline}</p>
      )}
      <h2
        className="md:text-5xl text-3xl font-bold mb-2"
        style={{ color: color ? color : "auto" }}
      >
        {headline}
      </h2>

      <div className="text-xl font-[400] leading-[150%] flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

export default SecondaryHeadline;
