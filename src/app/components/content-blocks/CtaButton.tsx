import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  ctaHref: string;
  ctaText: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ ctaHref, ctaText }) => {
  return (
    <div>
      <a
        href={ctaHref}
        className="flex bg-green-600 gap-3 border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 hover:border-green-400 transition-colors duration-200 group"
      >
        <div>{ctaText}</div>
        <motion.div className="group-hover:translate-x-1 transition-transform duration-200">
          <ArrowRight />
        </motion.div>
      </a>
    </div>
  );
};

export default CtaButton;
