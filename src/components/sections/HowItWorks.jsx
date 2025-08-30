import React from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import HowItWorkCard from "../common/HowItWorkCard";

const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-10 bg-how-it-works mt-20 mx-auto">
      <div id="heading" className="">
        <h2>How it Works</h2>
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
  );
};

export default HowItWorks;
