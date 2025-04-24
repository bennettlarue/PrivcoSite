import FadeIn from "../transition-wrappers/FadeIn";
import SmallHeadline from "./SmallHeadline";

interface SmallHeadlineSectionProps {
  headline: string;
  svg: React.ReactNode; // Replace overlineImage with svg
  description: string;
}

const SmallHeadlineSection: React.FC<SmallHeadlineSectionProps> = ({
  headline,
  svg,
  description,
}) => {
  return (
    <div className="p-6 py-8 shadow h-full border-[var(--privco-green)] border-b ">
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
  );
};

export default SmallHeadlineSection;
