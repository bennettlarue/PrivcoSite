import React from "react";
import FadeIn from "../transition-wrappers/FadeIn";

// Define the props type
interface MainHeadlineProps {
  headline: string;
  overline?: string; // Optional overline
  paragraph?: string; // Optional paragraph text
  children?: React.ReactNode; // Optional children
  fontSize?: string;
}

const MainHeadline: React.FC<MainHeadlineProps> = ({
  headline,
  overline,
  children,
  fontSize, // Destructure children
}) => {
  // If children is an array, we map over it to add the fade-in effect with dynamic delays.
  const renderChildren = React.Children.map(children, (child, index) => {
    const delay = 0.7 + index * 0.1; // Starting delay of 0.7, increase by 0.1 for each subsequent child.
    return (
      <FadeIn delay={delay} key={index}>
        {" "}
        {/* Add key prop */}
        {child}
      </FadeIn>
    );
  });

  return (
    <div className="flex flex-col gap-6 max-w-[1300px] mx-auto w-full">
      {overline && <div className="text-2xl font-semibold">{overline}</div>}
      <FadeIn delay={0.5}>
        <h1
          className="md:text-6xl text-4xl font-bold text-balance"
          style={{ fontSize: fontSize ? fontSize : "auto", lineHeight: "1.1" }}
        >
          {headline}
        </h1>
      </FadeIn>

      <div className="text-[16px] font-[400] leading-[150%] flex flex-col gap-6">
        {renderChildren}
      </div>
    </div>
  );
};

export default MainHeadline;
