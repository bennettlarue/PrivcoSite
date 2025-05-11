import React from "react";
import Link from "next/link";

interface RoundButtonProps {
  href: string; // Add href prop for the link
  backgroundColor: string;
  textColor: string;
  border?: boolean;
  children?: React.ReactNode; // Optional children
}

const RoundButton: React.FC<RoundButtonProps> = ({
  href = "#", // Default href to "#" if undefined
  backgroundColor,
  textColor,
  border,
  children,
}) => {
  return (
    <Link
      href={href}
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        border: border ? `1px solid ${textColor}` : "none",
      }}
      className="rounded px-[24px] py-[12px] text-xl leading-[150%] font-bold shadow"
    >
      {children}
    </Link>
  );
};

export default RoundButton;
