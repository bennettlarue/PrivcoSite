import React from "react";

interface BigButtonProps {
  backgroundColor: string;
  textColor: string;
  border?: boolean;
  children?: React.ReactNode; // Optional children
}

const BigButton: React.FC<BigButtonProps> = ({
  backgroundColor,
  textColor,
  border,
  children, // Destructure children
}) => {
  return (
    <div
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        textShadow: "1px 1px var(--privco-lightblue)",
      }}
      className="rounded px-[24px] py-[12px] md:text-3xl text-lg text-center leading-[150%] font-bold shadow w-fit"
    >
      {children}
    </div>
  );
};

export default BigButton;
