import Image from "next/image";
import Head from "next/head";

interface HeroHeaderProps {
  imageUrl: string;
  altText?: string;
  title: string;
  subtitle?: string;
  overline?: string; // Added overline prop
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
  overline, // Destructure overline
  ctaText,
  ctaHref,
  cta2Text,
  cta2Href,
}: HeroHeaderProps) {
  return (
    <>
      <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>
      <div className="relative w-full min-h-[400px] lg:h-[60vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover object-center"
          priority
          quality={80} // Reduced from 90
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEpgJNMHWMP1AAAABJRU5ErkJggg=="
        />

        {/* Gradient Overlay - Left to Right (solid to transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--privco-blue)] md:via-blue-950/80 via-blue-950/90 to-blue-950/70" />

        {/* Content Container */}
        <div className="relative flex items-center w-full md:max-w-[1350px] max-w-[450px] mx-auto lg:my-0 my-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {overline && (
                <p className="text-xl font-semibold text-white mb-2 tracking-wide">
                  {overline}
                </p>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {title}
              </h1>

              {subtitle && (
                <p className="text-xl sm:text-2xl mb-8 font-medium text-white">
                  {subtitle}
                </p>
              )}

              <div className="flex flex-wrap gap-4">
                {ctaText && ctaHref && (
                  <div>
                    <a
                      href={ctaHref}
                      className="inline-block bg-green-600 border border-white text-white px-8 py-3 rounded-lg font-semibold
                           hover:bg-green-800 hover:border-green-400 transition-colors duration-200"
                    >
                      {ctaText}
                    </a>
                  </div>
                )}

                {cta2Text && cta2Href && (
                  <div>
                    <a
                      href={cta2Href}
                      className="inline-block text-white border bg-[var(--privco-blue)] border-white px-8 py-3 rounded-lg font-semibold
                           hover:bg-blue-950 hover:border-[var(--privco-lightblue)] transition-colors duration-200"
                    >
                      {cta2Text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
