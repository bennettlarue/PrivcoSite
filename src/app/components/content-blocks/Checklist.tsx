import React from "react";

// Checkmark icon as a React component
const CheckmarkIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#043873"
    width="17px"
    height="17px"
    viewBox="0 0 1920 1920"
    className="mr-2"
  >
    <path
      d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
      fillRule="evenodd"
    />
  </svg>
);

// Props for the Checklist component
interface ChecklistProps {
  items: string[];
}

const Checklist: React.FC<ChecklistProps> = ({ items }) => {
  return (
    <ul className="list-none space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <CheckmarkIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default Checklist;
