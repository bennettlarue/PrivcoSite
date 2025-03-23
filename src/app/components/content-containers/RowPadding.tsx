import React from "react";

interface RowPaddingProps {
  children?: React.ReactNode; // Optional children
}

const RowPadding: React.FC<RowPaddingProps> = ({
  children, // Destructure children
}) => {
  return (
    <div className="py-16 md:px-16 px-8 flex flex-col gap-12">{children}</div>
  );
};

export default RowPadding;
