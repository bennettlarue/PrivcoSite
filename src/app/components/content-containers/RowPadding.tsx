import React from "react";
import FadeIn from "../transition-wrappers/FadeIn";

interface RowPaddingProps {
  children?: React.ReactNode; // Optional children
}

const RowPadding: React.FC<RowPaddingProps> = ({
  children, // Destructure children
}) => {
  return (
    <div className="md:py-32 py-16 md:px-16 px-5 gap-12">
      <FadeIn>{children}</FadeIn>
    </div>
  );
};

export default RowPadding;
