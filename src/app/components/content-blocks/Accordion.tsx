"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-t  border-black">
      <button
        className="w-full py-5 px-4 flex justify-between items-center hover:text-blue-800 transition duration-100 ease-in-out"
        style={{ color: isOpen ? "oklch(42.4% 0.199 265.638)" : "" }}
        onClick={onClick}
      >
        <h2 className="md:text-xl font-bold">{title}</h2>
        <motion.div
          className="ml-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-4 max-w-[768px] text-lg">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="w-full border-b border-black">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItemId === item.id}
          onClick={() => handleToggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
