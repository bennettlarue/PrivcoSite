import React from "react";

// Define the props type

const ChevronSVG: React.FC = ({}) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414L13.586 12l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414 0.391 0.391 1.024 0.391 1.414 0z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ChevronSVG;
