import React from "react";

const SectionSubHeading = ({ center = false, children }) => {
  return (
    <div
      className={`pt-2 pb-3 ${
        center ? "flex justify-center items-center" : ""
      }`}
    >
      <p>{children}</p>
    </div>
  );
};

export default SectionSubHeading;
