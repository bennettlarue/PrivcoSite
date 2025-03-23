import React from "react";

interface ThreeUpGridProps {
  children?: React.ReactNode; // Optional children
  gap?: string;
}

const ThreeUpGrid: React.FC<ThreeUpGridProps> = ({
  gap,
  children, // Destructure children
}) => {
  const computedGap = gap ? gap : "20px";
  return (
    <div
      style={{ gap: computedGap }}
      className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2"
    >
      {children}
    </div>
  );
};

export default ThreeUpGrid;
