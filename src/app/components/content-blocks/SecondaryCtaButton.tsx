import React from "react";

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
      <a
        href={href}
        className="inline-block text-white border bg-[var(--privco-blue)] border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 hover:border-[var(--privco-lightblue)] transition-colors duration-200"
      >
        {text}
      </a>
    </div>
  );
};

export default SecondaryCtaButton;
