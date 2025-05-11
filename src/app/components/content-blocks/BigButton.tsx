import React from "react";
import Link from "next/link";

interface BigButtonProps {
  href: string; // Required href prop
  backgroundColor: string;
  textColor: string;
  border?: boolean;
  children?: React.ReactNode; // Optional children
}

const BigButton: React.FC<BigButtonProps> = ({
  href,
  backgroundColor,
  textColor,
  border,
  children, // Destructure children
}) => {
  return (
    <div className="mt-4">
      <Link
        href={href}
        className="rounded px-[24px] py-[12px] md:text-2xl mx-auto text-lg text-center leading-[150%] font-bold shadow w-fit text-white bg-green-600 border border-white hover:bg-green-800 hover:border-green-400 transition-colors duration-200"
      >
        {children}
      </Link>
    </div>
  );
};

export default BigButton;
