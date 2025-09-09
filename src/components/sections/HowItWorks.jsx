import React from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import HowItWorkCard from "../common/HowItWorkCard";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import SectionSubHeading from "../common/SectionSubHeading";

const HowItWorks = () => {
  return (
    <SectionContainer bgColor="bg-how-it-works">
      <div className="flex flex-col gap-5">
        <SectionHeading center={true}>How it Works</SectionHeading>
        <SectionSubHeading center={true}>
          From setup to success in <strong>4 simple steps</strong>
        </SectionSubHeading>

        <div id="card-container" className="vertical-gap-sm gap-5">
          <HowItWorkCard />
          <HowItWorkCard />
          <HowItWorkCard />
          <HowItWorkCard />
        </div>
        <div id="btn-container" className="flex items-center justify-center">
          <ButtonPrimary />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HowItWorks;
