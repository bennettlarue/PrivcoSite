"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import RoundButton from "./content-elements/RoundButton";

type NavItem = {
  title: string;
  href: string;
  dropdown?: {
    title: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
};

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Replace the current activeDropdown state with hover state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

  // Add these functions to handle hover behavior
  const handleMouseEnter = (title: string) => {
    setHoverDropdown(title);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 33,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const navItems: NavItem[] = [
    {
      title: "Product",
      href: "#",
      dropdown: [
        {
          title: "Platform",
          description: "Rely on smarter data",
          icon: (
            <div className="w-5 h-5 text-blue-500 bg-blue-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </div>
          ),
        },
        {
          title: "Wealth",
          description: "Extensive Private Company, 401K Plan Data",
          icon: (
            <div className="w-5 h-5 text-teal-500 bg-teal-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6v12M6 12h12" />
              </svg>
            </div>
          ),
        },
        {
          title: "Contact",
          description: "Extensive Private Company, 72m+ People Data",
          icon: (
            <div className="w-5 h-5 text-purple-500 bg-purple-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          ),
        },
        {
          title: "API",
          description: "Managed Data Solutions",
          icon: (
            <div className="w-5 h-5 text-yellow-500 bg-yellow-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4z" />
              </svg>
            </div>
          ),
        },
      ],
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Resources",
      href: "#",
      dropdown: [
        {
          title: "The Daily Stack",
          icon: (
            <div className="w-5 h-5 text-orange-500 bg-orange-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4z" />
              </svg>
            </div>
          ),
        },
        {
          title: "Insights",
          icon: (
            <div className="w-5 h-5 text-blue-500 bg-blue-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          ),
        },
        {
          title: "PrivCo Dictionary",
          icon: (
            <div className="w-5 h-5 text-green-500 bg-green-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v16H4z" />
              </svg>
            </div>
          ),
        },
        {
          title: "Help Center",
          icon: (
            <div className="w-5 h-5 text-yellow-500 bg-yellow-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          ),
        },
        {
          title: "Chrome Extension",
          icon: (
            <div className="w-5 h-5 text-purple-500 bg-purple-100 p-1 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10z" />
              </svg>
            </div>
          ),
        },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#043873] shadow py-4 border-b border-b-black">
      <div className="max-w-[1600px] md:px-16 px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <div className="">
              <Image
                src={"/images/logo.png"}
                alt={"privco logo"}
                width={150}
                height={100}
                className="object-cover"
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <button className="text-white px-2 py-1 rounded-md text-lg font-[700] flex items-center focus:outline-none">
                  {item.title}
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-all ease-in-out duration-300 ${
                      hoverDropdown === item.title ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <motion.a
                  href={item.href}
                  className="text-white py-1 rounded-md text-lg font-[700] relative group"
                  whileHover="hover"
                  initial="initial"
                >
                  {item.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-white"
                    variants={{
                      initial: { width: "0%" },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.17 }}
                  />
                </motion.a>
              )}

              {/* Dropdown with Framer Motion */}
              <AnimatePresence>
                {item.dropdown && hoverDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.3,

                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="absolute z-50 left-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-2 px-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href="#"
                          className="block px-2 py-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                        >
                          <div className="flex items-start">
                            {dropdownItem.icon && (
                              <div className="flex-shrink-0 mt-1">
                                {dropdownItem.icon}
                              </div>
                            )}
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                {dropdownItem.title}
                              </p>
                              {dropdownItem.description && (
                                <p className="text-xs text-gray-500">
                                  {dropdownItem.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/signin"
              className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-lg font-[700]"
            >
              Sign In
            </a>
            <RoundButton backgroundColor="#34C759" textColor="#FFFFFF">
              Start Free
            </RoundButton>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="md:hidden">
            {/* Animated Backdrop */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
              aria-hidden="true"
            ></motion.div>

            {/* Animated Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed inset-y-0 right-0 w-4/5 bg-white z-50 shadow-xl overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="px-4 py-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.title} className="py-1">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium"
                        >
                          <span>{item.title}</span>
                          <svg
                            className={`w-5 h-5 transform ${
                              activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-md mt-1 mb-2 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.title}
                                  href="#"
                                  className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm font-medium text-gray-700"
                                >
                                  <div className="flex items-center">
                                    {dropdownItem.icon && (
                                      <div className="mr-3">
                                        {dropdownItem.icon}
                                      </div>
                                    )}
                                    <div>
                                      <div className="font-medium">
                                        {dropdownItem.title}
                                      </div>
                                      {dropdownItem.description && (
                                        <div className="text-xs text-gray-500">
                                          {dropdownItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <a
                    href="/signin"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </a>
                  <a
                    href="/get-started"
                    className="block w-full text-center px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
