import React from "react";

interface RoundButtonProps {
  backgroundColor: string;
  textColor: string;
  children?: React.ReactNode; // Optional children
}

const RoundButton: React.FC<RoundButtonProps> = ({
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
      className="rounded px-[24px] py-[12px] text-[16px] leading-[150%] font-bold w-fit shadow"
    >
      {children}
    </div>
  );
};

export default RoundButton;
