import React from "react";

const LineBreak: React.FC = () => (
  <hr
    style={{
      border: "none",
      borderTop: "1px solid #e0e0e0",
      margin: "24px 0",
      width: "100%",
    }}
    aria-hidden="true"
  />
);

export default LineBreak;
