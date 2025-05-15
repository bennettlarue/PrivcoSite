import React from "react";

// Define the props type
interface SmallHeadlineProps {
  headline: string;
  overline?: React.ReactNode;
  paragraph?: string;
  children?: React.ReactNode;
  center?: boolean; // Add center prop
}

const SmallHeadline: React.FC<SmallHeadlineProps> = ({
  headline,
  overline,
  children,
  center = false, // Default to false
}) => {
  return (
    <div
      className={`flex flex-col gap-4 ${
        center ? "items-center text-center" : ""
      }`}
    >
      {overline && <div className="font-[700]">{overline}</div>}

      <h2 className="lg:text-3xl text-2xl font-[700] leading-[140%]">
        {headline}
      </h2>

      <div className="text-lg font-[400] leading-[150%] flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

export default SmallHeadline;
