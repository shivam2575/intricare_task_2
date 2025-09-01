import React from "react";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import ColapsableTable from "../common/ColapsableTable";

const FAQ = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-10">
        <SectionHeading center={true}>
          Frequently Asked Questions
        </SectionHeading>
        <ColapsableTable />
      </div>
    </SectionContainer>
  );
};

export default FAQ;
