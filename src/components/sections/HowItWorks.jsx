import React from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import HowItWorkCard from "../common/HowItWorkCard";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import SectionSubHeading from "../common/SectionSubHeading";

const HowItWorks = () => {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  console.log(isDesktop);
  return (
    <SectionContainer bgColor="bg-how-it-works">
      <div className="flex flex-col gap-5">
        <SectionHeading center={isDesktop ? false : true}>
          How it Works
        </SectionHeading>
        <SectionSubHeading center={isDesktop ? false : true}>
          From setup to success in{" "}
          <span className="font-bold"> 4 simple steps</span>
        </SectionSubHeading>

        <div id="card-container" className="vertical-gap-sm md:flex-row gap-5">
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
