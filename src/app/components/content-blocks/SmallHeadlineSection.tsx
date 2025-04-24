import FadeIn from "../transition-wrappers/FadeIn";
import SmallHeadline from "./SmallHeadline";

interface SmallHeadlineSectionProps {
  headline: string;
  svg: React.ReactNode; // Replace overlineImage with svg
  description: string;
  delay: number; // Add delay prop for sequential animations
}

const SmallHeadlineSection: React.FC<SmallHeadlineSectionProps> = ({
  headline,
  svg,
  description,
  delay,
}) => {
  return (
    <FadeIn delay={delay}>
      <div className="p-6 py-8 shadow h-full border-[var(--privco-green)] border border-l-2 border-b-2 rounded">
        <SmallHeadline
          headline={headline}
          overline={
            <div className="flex items-center justify-center bg-[var(--privco-blue)] text-[var(--privco-lightgreen)] border w-10 h-10 rounded-full">
              {svg} {/* Use the svg React node here */}
            </div>
          }
        >
          <p>{description}</p>
        </SmallHeadline>
      </div>
    </FadeIn>
  );
};

export default SmallHeadlineSection;
