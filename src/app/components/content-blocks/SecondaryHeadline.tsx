import React from "react";
import FadeIn from "../transition-wrappers/FadeIn";

// Define the props type
interface SecondaryHeadlineProps {
  headline: string;
  overline?: string; // Optional overline
  paragraph?: string; // Optional paragraph text
  className?: string;
  children?: React.ReactNode; // Optional children
}

const SecondaryHeadline: React.FC<SecondaryHeadlineProps> = ({
  headline,
  overline,
  children, // Destructure children
}) => {
  // If children is an array, we map over it to add the fade-in effect with dynamic delays.
  const renderChildren = React.Children.map(children, (child, index) => {
    const delay = 0.2; // Starting delay of 0.7, increase by 0.1 for each subsequent child.
    return <FadeIn delay={delay}>{child}</FadeIn>;
  });

  const computedStyles = "";

  return (
    <div className="flex flex-col gap-4">
      {overline && <FadeIn delay={0.1}>{overline}</FadeIn>}
      <FadeIn delay={0.1}>
        <h2 className="text-[36px] font-[700] leading-[120%]">{headline}</h2>
      </FadeIn>

      <div className="text-[16px] font-[400] leading-[150%] flex flex-col gap-4">
        {renderChildren}
      </div>
    </div>
  );
};

export default SecondaryHeadline;
