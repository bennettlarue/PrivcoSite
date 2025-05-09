// src/components/NewsletterSubscribe.tsx
"use client";

import { useState } from "react";
import FadeIn from "./transition-wrappers/FadeIn";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetch("/api/mailchimp/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setEmail(""); // Clear the form
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <FadeIn>
      <div className="bg-[var(--privco-lightgreen)] border border-b-2 border-gray-600 rounded-lg p-6 shadow max-w-[800px]">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Subscribe to The Daily Stack
        </h3>

        {status === "success" ? (
          <div className="bg-white/80 text-green-950 px-4 py-3 rounded-md">
            <p className="font-medium">Thanks for subscribing!</p>
            <p className="text-sm">You've been added to our newsletter list.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="flex md:flex-row flex-col gap-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  disabled={status === "loading"}
                  required
                />
                <button
                  type="submit"
                  className="w-full max-w-[300px] bg-[var(--privco-blue)] font-bold border text-white py-3 px-4 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 transition-colors disabled:opacity-70"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </div>

            {status === "error" && (
              <div className="text-red-600 text-sm">{errorMessage}</div>
            )}
          </form>
        )}
      </div>
    </FadeIn>
  );
}
