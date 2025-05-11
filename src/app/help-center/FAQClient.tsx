"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, PanelLeftOpen, XCircle } from "lucide-react";

// Define the FAQ data structure
type FaqSection = {
  id: string;
  title: string;
  questions: {
    id: string;
    question: string;
    answer: React.JSX.Element;
  }[];
};

const FAQClientComponent: React.FC = () => {
  const router = useRouter();
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Get FAQ data using require instead of import
  const faqSections = useMemo(() => {
    const faqData = require("@/json/faq.json");
    return faqData.map((section: any) => ({
      ...section,
      questions: section.questions.map((q: any) => ({
        ...q,
        answer: (
          <>
            {q.answer.split("\n\n").map((paragraph: string, i: number) => (
              <p key={i} className={i > 0 ? "mt-3" : ""}>
                {paragraph}
              </p>
            ))}
          </>
        ),
      })),
    }));
  }, []);

  // Handle scroll events to update active question
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      // Find which question is in view
      for (const section of faqSections) {
        for (const question of section.questions) {
          const element = document.getElementById(question.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the element is in the viewport
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              setActiveQuestion(question.id);
              setActiveSection(section.id);
              found = true;
              break;
            }
          }
        }
        if (found) break;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set the active question on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [faqSections]);

  // Smooth scroll to question
  const scrollToQuestion = (questionId: string, sectionId: string) => {
    const element = document.getElementById(questionId);
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: "smooth" });
      setActiveQuestion(questionId);
      setActiveSection(sectionId);
      // Close mobile menu after selection
      setMobileMenuOpen(false);

      // Update the URL with hash for better SEO and sharing
      if (typeof window !== "undefined") {
        history.pushState({}, "", `#${questionId}`);
      }
    }
  };

  // Check for hash in URL on initial load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          // Find which section this question belongs to
          for (const section of faqSections) {
            const question = section.questions.find(
              (q: { id: string }) => q.id === hash
            );
            if (question) {
              setActiveQuestion(hash);
              setActiveSection(section.id);
              break;
            }
          }
        }, 500); // Small delay to ensure the page is fully loaded
      }
    }
  }, [faqSections]);

  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white p-2 rounded-md shadow-md"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <XCircle size={24} /> : <PanelLeftOpen size={24} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Side Menu Navigation - Fixed on desktop, slide-in on mobile */}
        <aside
          className={`
            fixed md:sticky top-0 z-30 pt-14 
            h-screen md:h-screen overflow-y-auto
            w-72 md:w-72 bg-white shadow-lg md:shadow-none
            transition-transform duration-300 ease-in-out
            ${
              mobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
          aria-label="FAQ Navigation Menu"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">FAQ Menu</h2>
            <nav className="pr-2">
              {faqSections.map((section: FaqSection) => (
                <div key={section.id} className="mb-6">
                  <h3
                    className={`
                    font-semibold mb-3 pb-1 border-b
                    ${
                      activeSection === section.id
                        ? "text-blue-600 border-blue-600"
                        : "text-gray-800 border-gray-200"
                    }
                  `}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-2 pl-2">
                    {section.questions.map((question) => (
                      <li key={question.id}>
                        <button
                          onClick={() =>
                            scrollToQuestion(question.id, section.id)
                          }
                          className={`
                            text-left w-full py-1 px-2 rounded transition-colors
                            ${
                              activeQuestion === question.id
                                ? "bg-blue-50 text-blue-600 font-medium"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            }
                          `}
                        >
                          {question.question}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile menu - only appears when mobile menu is open */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-0 p-4 md:p-10 md:max-w-4xl lg:max-w-5xl mx-auto">
          <div className="pt-16 md:pt-8 pb-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl mb-2">
              Have a question? Start here.
            </p>
            <p className="mb-12">
              If you don't find your answer below, email{" "}
              <a
                href="mailto:support@privco.com"
                className="text-blue-500 hover:underline"
              >
                support@privco.com
              </a>
              .
            </p>

            {/* FAQ Sections */}
            {faqSections.map((section: FaqSection) => (
              <section key={section.id} className="mb-16" id={section.id}>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b">
                  {section.title}
                </h2>

                {/* Questions and Answers */}
                <div className="space-y-10">
                  {section.questions.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-24 p-6 bg-white rounded-lg shadow-sm transition-all hover:shadow"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {item.question}
                      </h3>
                      <div className="text-gray-700 space-y-4">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQClientComponent;
