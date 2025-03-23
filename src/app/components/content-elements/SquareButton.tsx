import React from "react";

interface SquareButtonProps {
  backgroundColor: string;
  textColor: string;
  children?: React.ReactNode; // Optional children
  href?: string;
}

const SquareButton: React.FC<SquareButtonProps> = ({
  backgroundColor,
  textColor,
  children, // Destructure children
}) => {
  return (
    <div
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        border: `1px solid ${textColor}`,
      }}
      className="w-full px-[24px] py-[12px] text-[16px] leading-[150%] font-bold"
    >
      {children}
    </div>
  );
};

export default SquareButton;
