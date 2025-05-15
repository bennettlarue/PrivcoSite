"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import CtaButton from "./CtaButton";
import SecondaryCtaButton from "./SecondaryCtaButton";

interface HeroHeaderProps {
  imageUrl: string;
  altText?: string;
  title: string | ReactNode;
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
    <div className="relative w-full min-h-[540px] h-[60vh] overflow-hidden flex items-center lg:pt-20 pt-10  bg-gray-100">
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
        className="absolute inset-0 bg-gradient-to-r from-white md:via-white/90 via-white/90 md:to-white/30 to-white/80"
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
                className="text-xl font-semibold text-[var(--privco-blue)] mb-2 tracking-wide"
              >
                {overline}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mb-4 drop-shadow-sm"
            >
              {typeof title === "string" ? (
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--privco-blue)]">
                  {title}
                </h1>
              ) : (
                title
              )}
            </motion.div>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-xl sm:text-2xl mb-8 font-semibold text-[var(--privco-blue)]"
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
                <CtaButton ctaHref={ctaHref} ctaText={ctaText} />
              )}

              {cta2Text && cta2Href && (
                <SecondaryCtaButton href={cta2Href} text={cta2Text} />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
