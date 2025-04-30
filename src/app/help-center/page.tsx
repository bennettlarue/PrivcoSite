"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SectionColor from "../components/content-blocks/SectionColor";
import RowPadding from "../components/content-containers/RowPadding";

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

const FAQ: React.FC = () => {
  const router = useRouter();

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

  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        {/* Side Menu Navigation */}
        <aside className="w-full md:w-96 bg-white p-6 border-r">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <nav>
            {faqSections.map((section: FaqSection) => (
              <div key={section.id} className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-800">
                  {section.title}
                </h3>
                <ul className="space-y- pl-2">
                  {section.questions.map(
                    (question: FaqSection["questions"][number]) => (
                      <li key={question.id}>
                        <a
                          href={`#${question.id}`}
                          className="text-gray-600 hover:text-blue-600 block py-1"
                        >
                          {question.question}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 md:max-h-screen overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-2">Have a question? Start here.</p>
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
                <h2 className="text-3xl font-bold mb-8 pb-2 border-b">
                  {section.title}
                </h2>

                {/* Questions and Answers */}
                <div className="space-y-10">
                  {section.questions.map(
                    (item: FaqSection["questions"][number]) => (
                      <div key={item.id} id={item.id} className="scroll-mt-24">
                        <h3 className="text-xl font-semibold mb-4">
                          {item.question}
                        </h3>
                        <div className="text-gray-700 space-y-4">
                          {item.answer}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQ;
