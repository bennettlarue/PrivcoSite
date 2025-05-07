import Image from "next/image";

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
    <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Gradient Overlay - Left to Right (solid to transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--privco-blue)] md:via-blue-950/80 via-blue-950/90 to-blue-950/70" />

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {overline && (
              <p className="text-xl font-semibold text-white mb-2 tracking-wide">
                {overline}
              </p>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl sm:text-2xl mb-8 font-medium text-white">
                {subtitle}
              </p>
            )}

            <div className="flex space-x-4">
              {ctaText && ctaHref && (
                <a
                  href={ctaHref}
                  className="inline-block bg-green-600 border border-white text-white px-8 py-3 rounded-lg font-semibold
                           hover:bg-green-800 hover:border-green-400 transition-colors duration-200"
                >
                  {ctaText}
                </a>
              )}

              {cta2Text && cta2Href && (
                <a
                  href={cta2Href}
                  className="inline-block text-white border bg-[var(--privco-blue)] border-white px-8 py-3 rounded-lg font-semibold
                           hover:bg-blue-950 hover:border-[var(--privco-lightblue)] transition-colors duration-200"
                >
                  {cta2Text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
