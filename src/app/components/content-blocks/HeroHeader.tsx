"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface HeroHeaderProps {
  imageUrl: string;
  altText?: string;
  title: string;
  subtitle?: string;
  overline?: string;
  ctaText?: string;
  ctaHref?: string;
  cta2Text?: string;
  cta2Href?: string;
}

export default function HeroHeader({
  imageUrl,
  altText = "Hero background image",
  title,
  subtitle,
  overline,
  ctaText,
  ctaHref,
  cta2Text,
  cta2Href,
}: HeroHeaderProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full min-h-[540px] h-[60vh] overflow-hidden flex items-center">
      {/* Background Image with loading transition */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEpgJNMHWMP1AAAABJRU5ErkJggg=="
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>

      {/* Gradient Overlay - with optional animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-r from-[var(--privco-blue)] md:via-blue-950/80 via-blue-950/90 to-blue-950/70"
      />

      {/* Content Container */}
      <div className="relative flex items-center w-full md:max-w-[1350px] max-w-[600px] mx-auto lg:my-0 my-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {overline && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-xl font-semibold text-white mb-2 tracking-wide"
              >
                {overline}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-xl sm:text-2xl mb-8 font-medium text-white"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {ctaText && ctaHref && (
                <div>
                  <a
                    href={ctaHref}
                    className="inline-block bg-green-600 border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 hover:border-green-400 transition-colors duration-200"
                  >
                    {ctaText}
                  </a>
                </div>
              )}

              {cta2Text && cta2Href && (
                <div>
                  <a
                    href={cta2Href}
                    className="inline-block text-white border bg-[var(--privco-blue)] border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-950 hover:border-[var(--privco-lightblue)] transition-colors duration-200"
                  >
                    {cta2Text}
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
