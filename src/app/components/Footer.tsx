import React from "react";
import Link from "next/link";
import Image from "next/image";
import RowPadding from "./content-containers/RowPadding";
import SectionColor from "./content-blocks/SectionColor";
import FlexRow from "./content-containers/Flexrow";
import FadeIn from "./transition-wrappers/FadeIn";

// Define footer link groups for better organization
const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Login", href: "/login" },
  { name: "Contact", href: "/contact" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
];

const resourceLinks = [
  { name: "Support", href: "/support" },
  { name: "Feedback", href: "/feedback" },
  { name: "Media Inquiries", href: "/media" },
  { name: "Partnership Inquiries", href: "/partnerships" },
  { name: "Job Recruitment Fraud", href: "/recruitment-fraud" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "CCPA", href: "/ccpa" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Help Center", href: "/help" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/privco",
    icon: "/images/svgs/facebook.svg",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/privco",
    icon: "/images/svgs/x.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/privco",
    icon: "/images/svgs/linkedin.svg",
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--privco-blue)] text-white ">
      <FadeIn>
        <div className=" max-w-[1300px] mx-auto px-6 py-16">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and company info section */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.svg"
                  alt="PrivCo logo"
                  width={200}
                  height={100}
                  className="object-contain w-[150px] md:w-[200px]"
                  priority
                />
              </Link>

              <p className="text-sm">
                PrivCo delivers trusted private market data and intelligence to
                power your most critical decisions.
              </p>

              <div className="flex gap-5 items-center">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.name} icon`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-bold mb-2">Company</h5>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-blue-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource links */}
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-bold mb-2">Resources</h5>
              <ul className="space-y-3">
                {resourceLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-blue-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-bold mb-2">Legal</h5>
              <ul className="space-y-3">
                {resourceLinks.slice(5).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-blue-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Copyright section */}
          <div className="border-t border-blue-700 py-6 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="font-semibold text-sm">
                  © {currentYear} PrivCo Media, LLC. All rights reserved.
                </p>
              </div>

              <div className="text-sm">
                <span>
                  Made with care in NYC.
                  <Link
                    href="/contact"
                    className="ml-2 underline hover:text-blue-300"
                  >
                    Contact Us
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
};

export default Footer;
