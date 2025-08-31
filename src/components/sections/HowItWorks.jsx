import React from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import HowItWorkCard from "../common/HowItWorkCard";
import SectionContainer from "../common/SectionContainer";

const HowItWorks = () => {
  return (
    <SectionContainer bgColor="bg-how-it-works">
      <div className="flex flex-col gap-10">
        <div id="heading" className="">
          <h2 className="font-semibold text-4xl">How it Works</h2>
        </div>
        <div id="sub-heading" className="">
          <p>
            From setup to success in <strong>4 simple steps</strong>
          </p>
        </div>
        <div id="card-container" className="flex gap-4">
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
