"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import RoundButton from "./content-elements/RoundButton";
import {
  BookOpenText,
  Chrome,
  CircleHelp,
  Newspaper,
  Send,
  TextSearch,
} from "lucide-react";
import { siGooglechrome } from "simple-icons/icons";

type NavItem = {
  title: string;
  href: string;
  dropdown?: {
    title: string;
    href?: string;
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
      title: "Platform",
      href: "/product",
    },
    {
      title: "Solutions",
      href: "/solutions",
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
          title: "Insights",
          href: "/insights",
          icon: (
            <div className=" text-blue-500 bg-blue-100 p-1 rounded">
              <TextSearch />
            </div>
          ),
        },
        {
          title: "The Daily Stack",
          href: "/daily-stack",
          icon: (
            <div className=" text-orange-500 bg-orange-100 p-1 rounded">
              <Newspaper />
            </div>
          ),
        },

        {
          title: "FAQ",
          href: "/help-center",
          icon: (
            <div className="text-green-500 bg-green-100 p-1 rounded">
              <CircleHelp />
            </div>
          ),
        },

        {
          title: "PrivCo Dictionary",
          href: "/knowledge-bank",
          icon: (
            <div className="text-pink-500 bg-pink-100 p-1 rounded">
              <BookOpenText />
            </div>
          ),
        },

        {
          title: "Chrome Extension",
          href: "https://chromewebstore.google.com/detail/privco/djpngaeogfjbijiniddohkomeiebjeek?hl=en",
          icon: (
            <div className=" text-purple-500 bg-purple-100 p-1 rounded">
              <svg
                role="img"
                viewBox="-3 -3 30 30"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
              >
                <title>{siGooglechrome.title}</title>
                <path d={siGooglechrome.path} />
              </svg>
            </div>
          ),
        },

        {
          title: "Contact",
          href: "/contact",
          icon: (
            <div className=" bg-yellow-100 text-yellow-500 p-1 rounded">
              <Send />
            </div>
          ),
        },
      ],
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
      <div className="max-w-[1600px] lg:px-16 px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <div className="max-w-[160px] w-full h-fit">
              <Image
                src={"/images/logo.svg"}
                alt={"privco logo"}
                width={160}
                height={44}
                className="object-cover"
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div className="hidden  lg:flex">
          <div className="lg:flex lg:space-x-8 lg:items-center">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <button className="text-white pr-2 py-1 rounded-md text-lg font-[700] flex items-center focus:outline-none">
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
                            href={dropdownItem.href}
                            className="block px-2 py-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                          >
                            <div className="flex items-center">
                              {dropdownItem.icon && (
                                <div className="flex-shrink-0 mt-1">
                                  {dropdownItem.icon}
                                </div>
                              )}
                              <div className="ml-3">
                                <p className="text font-medium text-gray-900">
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
          </div>
          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-6 ml-3">
            <div>
              <motion.a
                href="/signin"
                className="text-white py-1 rounded-md text-lg font-[700] relative group"
                whileHover="hover"
                initial="initial"
              >
                Sign In
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-white"
                  variants={{
                    initial: { width: "0%" },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.17 }}
                />
              </motion.a>
            </div>
            <RoundButton backgroundColor="#34C759" textColor="#FFFFFF">
              Start Free
            </RoundButton>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
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
          <div className="lg:hidden">
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
              className="fixed inset-y-0 right-0 bg-white z-50 shadow-xl overflow-y-auto md:w-[60%] w-[80%]"
            >
              <div className="p-4 px-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-medium text-gray-900">Menu</h2>
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
                          className="w-full flex items-center justify-between px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-lg font-medium"
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
                                  href={dropdownItem.href}
                                  className="block px-3 py-2 rounded-md hover:bg-gray-100 font-medium text-gray-700"
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
                        className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <a
                    href="/signin"
                    className="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </a>
                  <a
                    href="/get-started"
                    className="block w-full text-center px-3 py-2 mt-4 rounded-md text-lg font-medium text-white bg-blue-500 hover:bg-blue-600"
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
