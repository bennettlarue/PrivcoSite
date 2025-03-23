import React from "react";

// Define the props type
interface SmallHeadlineProps {
  headline: string;
  overline?: React.ReactNode; // Allow React child for overline
  paragraph?: string; // Optional paragraph text
  children?: React.ReactNode; // Optional children
}

const SmallHeadline: React.FC<SmallHeadlineProps> = ({
  headline,
  overline,
  children, // Destructure children
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Render the overline if provided */}
      {overline && <div className="font-[700]">{overline}</div>}

      {/* Render the headline */}
      <h2 className="text-[20px] font-[700] leading-[140%]">{headline}</h2>

      <div className="text-[16px] font-[400] leading-[150%] flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

export default SmallHeadline;
