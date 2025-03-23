import React from "react";

// Define the props type
interface SectionColorProps {
  backgroundColor: string;
  textColor?: string;
  children?: React.ReactNode; // Optional children
}

const SectionColor: React.FC<SectionColorProps> = ({
  backgroundColor,
  textColor,
  children, // Destructure children
}) => {
  return (
    <div style={{ color: textColor, backgroundColor: backgroundColor }}>
      <div className="max-w-[1600px] mx-auto">{children}</div>
    </div>
  );
};

export default SectionColor;
