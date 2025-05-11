import React from "react";
import Link from "next/link";

interface SecondaryCtaButtonProps {
  href: string;
  text: string;
}

const SecondaryCtaButton: React.FC<SecondaryCtaButtonProps> = ({
  href,
  text,
}) => {
  return (
    <div>
      <Link
        href={href}
        className="inline-block text-lg text-white border bg-[var(--privco-blue)] border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 hover:border-[var(--privco-lightblue)] transition-colors duration-200"
      >
        {text}
      </Link>
    </div>
  );
};

export default SecondaryCtaButton;
