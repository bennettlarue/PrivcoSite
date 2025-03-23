import React from "react";

interface MdOnlyProps {
  children?: React.ReactNode; // Optional children
}

const MdOnly: React.FC<MdOnlyProps> = ({
  children, // Destructure children
}) => {
  return <div className="xl:hidden md:block hidden">{children}</div>;
};

export default MdOnly;
