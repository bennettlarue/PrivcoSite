import FadeIn from "../transition-wrappers/FadeIn";
import SmallHeadline from "./SmallHeadline";

interface SmallHeadlineSectionProps {
  headline: string;
  svg: React.ReactNode;
  description: React.ReactNode; // Change type to React.ReactNode
}

const SmallHeadlineSection: React.FC<SmallHeadlineSectionProps> = ({
  headline,
  svg,
  description,
}) => {
  return (
    <div className="p-6 py-8 shadow h-full border-[var(--privco-blue)] border-b ">
      <SmallHeadline
        center={true}
        headline={headline}
        overline={
          <div className="w-full">
            <div className="flex items-center justify-center bg-[var(--privco-blue)] text-[var(--privco-white)] border w-10 h-10 rounded-full mx-auto">
              {svg}
            </div>
          </div>
        }
      >
        <div className="text-xl text-center">{description}</div>
      </SmallHeadline>
    </div>
  );
};

export default SmallHeadlineSection;
