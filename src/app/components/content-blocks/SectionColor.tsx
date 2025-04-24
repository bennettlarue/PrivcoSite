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
      <div className="md:max-w-[1350px] max-w-[450px] mx-auto">{children}</div>
    </div>
  );
};

export default SectionColor;
