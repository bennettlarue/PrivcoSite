// src/components/MailchimpCampaigns.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Campaign {
  id: string;
  settings: {
    title: string;
    subject_line: string;
    from_name: string;
  };
  send_time: string;
}

interface MonthlyGroupedCampaigns {
  [key: string]: Campaign[];
}

export default function MailchimpCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageChanging, setPageChanging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const campaignsPerPage = 20;

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        // Set pageChanging true if we already have campaigns loaded
        if (campaigns.length > 0) {
          setPageChanging(true);
        }

        const response = await fetch(
          `/api/mailchimp/campaigns?count=${campaignsPerPage}&page=${currentPage}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch campaigns");
        }

        const data = await response.json();
        setCampaigns(
          data.campaigns.campaigns.filter((campaign: Campaign) => {
            return campaign.settings.from_name === "PrivCo - The Daily Stack";
          })
        );
        setTotalCampaigns(data.total_items.total_items);
        setTotalPages(
          Math.ceil(data.total_items.total_items / campaignsPerPage)
        );
      } catch (err) {
        setError("Error loading campaigns");
        console.error(err);
      } finally {
        setLoading(false);
        setPageChanging(false);
      }
    }

    fetchCampaigns();
  }, [currentPage]);

  // Group campaigns by month
  const groupCampaignsByMonth = (): MonthlyGroupedCampaigns => {
    const grouped: MonthlyGroupedCampaigns = {};

    campaigns.forEach((campaign) => {
      const date = new Date(campaign.send_time);
      const monthYear = `${date.toLocaleString("en-US", {
        month: "long",
      })} ${date.getFullYear()}`;

      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }

      grouped[monthYear].push(campaign);
    });

    return grouped;
  };

  const groupedCampaigns = groupCampaignsByMonth();

  // Format date for display (e.g., "MAY 7, 2025")
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  // Generate pagination items with improved logic
  const generatePaginationItems = () => {
    const items = [];

    // For small number of pages, show all
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(renderPageButton(i));
      }
      return items;
    }

    // For larger number of pages, use smart pagination
    items.push(renderPageButton(1));

    if (currentPage > 3) {
      items.push(
        <span key="ellipsis1" className="px-2">
          •••
        </span>
      );
    }

    // Calculate the range of pages to show around current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      items.push(renderPageButton(i));
    }

    if (currentPage < totalPages - 2) {
      items.push(
        <span key="ellipsis2" className="px-2">
          •••
        </span>
      );
    }

    items.push(renderPageButton(totalPages));

    return items;
  };

  // Render individual page button with consistent styling
  const renderPageButton = (pageNum: number) => {
    const isCurrentPage = currentPage === pageNum;
    return (
      <button
        key={pageNum}
        onClick={() => !pageChanging && setCurrentPage(pageNum)}
        disabled={isCurrentPage || pageChanging}
        aria-current={isCurrentPage ? "page" : undefined}
        className={`w-9 h-9 flex items-center justify-center rounded-md mx-0.5 font-medium transition-all ${
          isCurrentPage
            ? "bg-[var(--privco-blue)] text-white shadow-sm"
            : "bg-white text-gray-700 hover:bg-gray-200 hover:text-[var(--privco-lightblue)]"
        } ${pageChanging ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {pageNum}
      </button>
    );
  };

  // Skeleton UI for loading state
  const renderSkeletons = () => {
    const months = ["May 2025", "April 2025"];

    return (
      <div className="space-y-12">
        {months.map((month) => (
          <div key={month} className="space-y-4 animate-pulse">
            <div className="h-9 bg-gray-200 rounded w-48"></div>
            <div className="border rounded-lg overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="border-b last:border-b-0 p-4 md:flex justify-between items-center"
                >
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-5 bg-gray-200 rounded w-24 md:mt-0 mt-2.5"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-8">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-9 h-9 bg-gray-200 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (loading && campaigns.length === 0) {
    return (
      <div className="relative overflow-hidden">
        {renderSkeletons()}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skeleton-shine"></div>
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 py-5 text-center rounded-lg bg-red-50 border border-red-100 p-4"
      >
        {error}
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-12 relative"
      >
        {/* Overlay during page changes */}
        {pageChanging && (
          <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {Object.entries(groupedCampaigns).map(([monthYear, monthCampaigns]) => (
          <motion.div
            key={monthYear}
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">{monthYear}</h2>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              {monthCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b last:border-b-0 p-4 md:flex hover:bg-gray-50 transition-colors justify-between items-center"
                >
                  <Link
                    href={`/dailystack/${campaign.id}`}
                    className="text-gray-800 hover:text-blue-600 font-medium flex-grow"
                  >
                    {campaign.settings.subject_line}
                  </Link>
                  <div className="text-xs bg-blue-300/50 text-blue-900 w-fit px-2 py-1 rounded-xl font-bold md:mt-0 mt-2.5">
                    {formatDate(campaign.send_time)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Pagination controls */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() =>
                !pageChanging && setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={currentPage === 1 || pageChanging}
              className="w-9 h-9 flex items-center justify-center rounded-md mr-1 border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="flex items-center">{generatePaginationItems()}</div>

            <button
              onClick={() =>
                !pageChanging &&
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || pageChanging}
              className="w-9 h-9 flex items-center justify-center rounded-md ml-1 border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
