import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  ctaHref?: string;
  ctaText?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  ctaHref = "https://system.privco.com/signup",
  ctaText = "Start Free",
}) => {
  return (
    <div>
      <Link
        href={ctaHref}
        className="text-lg flex items-center w-fit bg-green-600 gap-3 border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 hover:border-green-400 transition-colors duration-200 group"
      >
        <div>{ctaText}</div>
        <div className="group-hover:translate-x-1 transition-transform duration-200">
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default CtaButton;
