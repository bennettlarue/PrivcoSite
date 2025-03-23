import React from "react";

interface FlexRowProps {
  children?: React.ReactNode; // Optional children
  gap?: string;
}

const FlexRow: React.FC<FlexRowProps> = ({
  gap,
  children, // Destructure children
}) => {
  const computedGap = gap ? gap : "20px";
  return (
    <div style={{ gap: computedGap }} className="flex flex-wrap w-fit">
      {children}
    </div>
  );
};

export default FlexRow;
