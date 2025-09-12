import React from "react";

const SectionSubHeading = ({ center = false, children }) => {
  return (
    <div
      className={`pt-2 pb-3 md:p-2 ${
        center ? "flex justify-center items-center text-center" : ""
      }`}
    >
      <p className="text-section-subheading text-lg font-light">{children}</p>
    </div>
  );
};

export default SectionSubHeading;
