import React, { ReactNode } from "react";

interface FourToNineProps {
  leftChild: ReactNode;
  rightChild: ReactNode;
  className?: string;
}

const FourToNine: React.FC<FourToNineProps> = ({
  leftChild,
  rightChild,
  className = "",
}) => {
  // A 4:9 ratio means the left takes 4/13 (30.77%) and right takes 9/13 (69.23%) of the space
  return (
    <div
      className={`w-full flex flex-col xl:flex-row md:gap-12 gap-6 ${className}`}
    >
      {/* Left section (4 parts out of 13 total ≈ 30.77%) */}
      <div className="w-full xl:w-4/12 mb-4 xl:mb-0 xl:mr-4">{leftChild}</div>

      {/* Right section (9 parts out of 13 total ≈ 69.23%) */}
      <div className="w-full xl:w-8/12">{rightChild}</div>
    </div>
  );
};

export default FourToNine;
