import React, { ReactNode } from "react";

interface SixToEightProps {
  leftChild: ReactNode;
  rightChild: ReactNode;
  className?: string;
}

const SixToEight: React.FC<SixToEightProps> = ({
  leftChild,
  rightChild,
  className = "",
}) => {
  // A 6:8 ratio is equivalent to 3:4 (dividing both by 2)
  // Which is 42.857% : 57.143% of the total width
  return (
    <div className={`w-full flex flex-col md:flex-row ${className}`}>
      {/* Left section (3 parts out of 7 total = approximately 42.857%) */}
      <div className="w-full lg:w-5/12 mb-4 lg:mb-0 md:mr-4 mx-auto">
        {leftChild}
      </div>

      {/* Right section (4 parts out of 7 total = approximately 57.143%) */}
      <div className="w-full lg:w-7/12">{rightChild}</div>
    </div>
  );
};

export default SixToEight;
