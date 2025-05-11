// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { JsonLd } from "./components/JsonLd";

// Font optimization using next/font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// Define base URL for all metadata
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://privco.com";

// Define default metadata
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | PrivCo",
    default: "PrivCo | Private Company Financial Intelligence",
  },
  description:
    "PrivCo provides financial data and intelligence on private companies, with custom datasets, API access, and analytics tools for investors and businesses.",
  keywords: [
    "private company data",
    "financial intelligence",
    "private market analytics",
    "company financials",
    "private equity data",
  ],
  applicationName: "PrivCo",
  authors: [{ name: "PrivCo" }],
  creator: "PrivCo",
  publisher: "PrivCo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "PrivCo",
    title: "PrivCo | Private Company Financial Intelligence",
    description:
      "PrivCo provides financial data and intelligence on private companies, with custom datasets, API access, and analytics tools for investors and businesses.",
    images: [
      {
        url: `${baseUrl}/images/privco-og-image.png`,
        width: 1200,
        height: 630,
        alt: "PrivCo - Private Company Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PrivCo",
    creator: "@PrivCo",
    title: "PrivCo | Private Company Financial Intelligence",
    description:
      "PrivCo provides financial data and intelligence on private companies, with custom datasets, API access, and analytics tools for investors and businesses.",
    images: [`${baseUrl}/images/privco-og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: `${baseUrl}/manifest.json`,
  verification: {
    // Add verification for search consoles if you have them
    google: "your-google-site-verification-code",
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

// Define viewport
export const viewport: Viewport = {
  themeColor: "#0066B3", // Use your primary brand color
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization schema for structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PrivCo",
    url: baseUrl,
    logo: `${baseUrl}/images/privco-logo.png`,
    sameAs: [
      "https://twitter.com/PrivCo",
      "https://www.linkedin.com/company/privco",
      // Add other social media profiles
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890", // Replace with actual contact number
      contactType: "customer service",
      email: "support@privco.com", // Replace with actual email
      availableLanguage: "English",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}
    >
      <head>{/* Any additional scripts that need to go in the head */}</head>
      <body className="antialiased font-roboto">
        {/* Organization structured data */}
        <JsonLd>{organizationSchema}</JsonLd>

        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
