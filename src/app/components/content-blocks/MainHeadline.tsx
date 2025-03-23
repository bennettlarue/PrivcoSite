import React from "react";
import FadeIn from "../transition-wrappers/FadeIn";

// Define the props type
interface MainHeadlineProps {
  headline: string;
  overline?: string; // Optional overline
  paragraph?: string; // Optional paragraph text
  children?: React.ReactNode; // Optional children
}

const MainHeadline: React.FC<MainHeadlineProps> = ({
  headline,
  overline,
  children, // Destructure children
}) => {
  // If children is an array, we map over it to add the fade-in effect with dynamic delays.
  const renderChildren = React.Children.map(children, (child, index) => {
    const delay = 0.7 + index * 0.1; // Starting delay of 0.7, increase by 0.1 for each subsequent child.
    return <FadeIn delay={delay}>{child}</FadeIn>;
  });

  return (
    <div className="flex flex-col gap-4">
      {overline && <div>{overline}</div>}
      <FadeIn delay={0.5}>
        <h1 className="text-[40px] font-[700] leading-[120%]">{headline}</h1>
      </FadeIn>

      <div className="text-[16px] font-[400] leading-[150%] flex flex-col gap-4">
        {renderChildren}
      </div>
    </div>
  );
};

export default MainHeadline;
