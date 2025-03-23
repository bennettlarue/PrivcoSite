import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Define the props type
interface ArticleCardProps {
  headline: string;
  children?: React.ReactNode; // Optional children
  cta: string;
  ctaLink: string;
  image: string;
  alt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  headline,
  children,
  cta,
  ctaLink,
  image,
  alt,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src={image}
        alt={alt}
        width={352}
        height={284}
        className="h-[240px] w-full object-cover"
      />
      <div className="gap-2 flex flex-col">
        <h4 className="text-[24px] font-[700]">{headline}</h4>
        <p className="text-[16px]">{children}</p>
      </div>

      <div className="flex gap-1">
        <p>{cta}</p>
        <ChevronRight />
      </div>
    </div>
  );
};

export default ArticleCard;
