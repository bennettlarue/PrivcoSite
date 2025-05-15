import React from "react";
import FadeIn from "../transition-wrappers/FadeIn";

interface TertiaryHeadlineProps {
  headline: string;
  overline?: React.ReactNode;
  paragraph?: string;
  className?: string;
  children?: React.ReactNode;
  color?: string;
}

const TertiaryHeadline: React.FC<TertiaryHeadlineProps> = ({
  headline,
  overline,
  paragraph,
  className = "",
  children,
  color,
}) => {
  return (
    <div className={`flex flex-col gap-4 text-base ${className}`}>
      {overline && <p className="text-lg font-medium">{overline}</p>}
      <h3
        className="text-2xl md:text-3xl font-bold mb-1"
        style={{ color: color ? color : "inherit" }}
      >
        {headline}
      </h3>
      {paragraph && (
        <p className="text-base font-normal leading-[150%]">{paragraph}</p>
      )}
      <div className="flex flex-col gap-3 text-xl">{children}</div>
    </div>
  );
};

export default TertiaryHeadline;
