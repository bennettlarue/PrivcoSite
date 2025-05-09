"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import RoundButton from "./content-elements/RoundButton";
import {
  ArrowUpRight,
  BookOpenText,
  ChevronDown,
  Chrome,
  CircleHelp,
  Menu,
  Newspaper,
  Send,
  TextSearch,
  X,
} from "lucide-react";
import { siGooglechrome } from "simple-icons/icons";
import CtaButton from "./content-blocks/CtaButton";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Add these functions to handle hover behavior
  const handleMouseEnter = (title: string) => {
    setHoverDropdown(title);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  // Handle scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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

  // Changed the sidebar variants to slide from the right but stay below the navbar
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
          title: "API",
          href: "/api",
          icon: (
            <div className=" text-blue-500 bg-blue-100 p-1 rounded">
              <TextSearch />
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
    <div className="relative">
      <nav
        className={`fixed w-full top-0 z-50 bg-[#043873] shadow py-4 border-b border-b-black transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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
          <div className="hidden lg:flex">
            <div className="lg:flex lg:space-x-8 lg:items-center">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <div className="relative">
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

                      {/* Visual indicator for active dropdown */}
                      {hoverDropdown === item.title && (
                        <motion.div
                          className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white"
                          initial={{ width: "0%", left: "50%" }}
                          animate={{ width: "100%", left: "0%" }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
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

                  {/* Dropdown with Framer Motion - More Traditional Style */}
                  <AnimatePresence>
                    {item.dropdown && hoverDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="absolute z-50 left-0 mt-2 w-72 bg-white shadow-lg rounded-b-lg border border-gray-100 overflow-hidden"
                        style={{
                          transformOrigin: "top center",
                          marginTop: "6px",
                        }}
                      >
                        <div className="py-1">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <motion.a
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors duration-150"
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.15,
                                delay: idx * 0.03,
                              }}
                            >
                              <div className="flex items-center">
                                {dropdownItem.icon && (
                                  <div className="flex-shrink-0">
                                    {dropdownItem.icon}
                                  </div>
                                )}
                                <div className="ml-3">
                                  <p className="text-sm font-semibold text-gray-800">
                                    {dropdownItem.title}
                                  </p>
                                  {dropdownItem.description && (
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </motion.a>
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
              <CtaButton ctaHref="/api" ctaText="Start Free" />
            </div>
          </div>

          {/* Mobile menu button - now with animation between Menu and X icons */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-white/40 rounded-xl p-1 transition-colors duration-150 relative z-50"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="size-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="size-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar overlay - now positioned below the navbar */}
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
              style={{ top: "72px" }} /* Adjusted to sit below navbar */
            ></motion.div>

            {/* Animated Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed right-0 bg-[var(--privco-blue)] text-white z-40 shadow-xl overflow-y-auto md:w-[60%] w-[90%]"
              style={{
                top: "72px" /* Position below navbar */,
                height:
                  "calc(100vh - 72px)" /* Adjust height to fill remaining space */,
              }}
            >
              <div className="py-6 space-y-1 px-4">
                {navItems.map((item, idx) => (
                  <motion.div key={item.title} className="py-1">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className=" w-full flex items-center justify-between px-3 py-2 hover:bg-white/20 rounded-md text-lg font-medium transition-colors duration-150"
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`transform transition-transform duration-200 ${
                              activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 pr-2 py-1 space-y-1 rounded-md mt-1 mb-2 overflow-hidden"
                            >
                              {item.dropdown.map(
                                (dropdownItem, dropdownIdx) => (
                                  <div className="border-b border-white/20 pb-1">
                                    <motion.a
                                      key={dropdownItem.title}
                                      href={dropdownItem.href}
                                      className="block px-3 py-2 rounded-md font-medium text-white hover:bg-white/20 transition-colors duration-150"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: dropdownIdx * 0.01, // Staggered animation for dropdown items
                                      }}
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
                                            <div className="text-xs text-white">
                                              {dropdownItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </motion.a>
                                  </div>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <div className="border-b py-2">
                        <a
                          href={item.href}
                          className="rounded px-3 py-2 text-lg font-medium text-white hover:bg-white/20 transition-colors duration-150 flex justify-between"
                        >
                          <div> {item.title}</div>
                          <ArrowUpRight />
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div className="pt-6 mt-6 border-t border-white">
                  <motion.a
                    href="/get-started"
                    className="border text-center bg-green-600 shadow block w-full px-3 py-2 rounded-md text-lg font-medium transition-colors duration-150"
                  >
                    Start Free
                  </motion.a>
                  <motion.a
                    href="/signin"
                    className="border border-white bg-white/10 text-center block px-3 py-2 mt-4 rounded-md text-lg font-medium text-white hover:bg-blue-700 transition-colors duration-150"
                  >
                    Login
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
