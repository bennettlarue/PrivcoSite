"use client"; // Mark this as a client component

import React, { useState } from "react";
import { Lead } from "@/types/lead";

const ContactForm = () => {
  const useCaseOptions = [
    "Business Development",
    "Competitive Intelligence",
    "Market Research",
    "Due Diligence",
    "Sourcing/Origination",
    "Deal Comps",
  ];

  const [formData, setFormData] = useState<Lead>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    useCase: "",
    comments: "",
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    success: boolean | null;
    error: string | null;
  }>({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Clear form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        useCase: "",
        comments: "",
      });

      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit form",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Contact Sales
          </h1>
          <p className="text-2xl text-gray-600">Schedule a demo today.</p>
        </div>
        <div className="w-48 h-48">
          <img
            src="images/contact/rocket.svg"
            alt="Rocket"
            className="w-full h-full"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // Prevent infinite loop
              currentTarget.src =
                "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234169E1'%3E%3Cpath d='M12 2.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-2 0V3.5a1 1 0 0 1 1-1zm-5.5 5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm11 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6.5 1.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4a7 7 0 0 1-13 0v-4z'/%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>

      {status.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Thank you for your message! We'll be in touch soon.
        </div>
      )}

      {status.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 mb-2 font-medium"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 mb-2 font-medium"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 mb-2 font-medium"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="555-555-5555"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-gray-700 mb-2 font-medium"
            >
              Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Organization"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="useCase"
              className="block text-gray-700 mb-2 font-medium"
            >
              Use Case
            </label>
            <select
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded appearance-none bg-white"
            >
              <option value="">Select one...</option>
              {useCaseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="comments"
            className="block text-gray-700 mb-2 font-medium"
          >
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="bg-blue-500 text-white py-3 px-8 rounded hover:bg-blue-600 transition-colors disabled:bg-blue-400"
        >
          {status.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
