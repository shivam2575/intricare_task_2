import React from "react";
import ButtonPrimary from "./common/ButtonPrimary";
import VSCardNegative from "./VSCardNegative";
import VSCardPositive from "./VSCardPositive";

const BelowHero = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <div
        id="infinite-scroll"
        className="flex items-center gap-10 p-10 overflow-hidden animate-marquee"
      >
        <div className="flex justify-between items-center">
          <div className="img-container">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp"
              alt="company logo"
            />
          </div>
          <div className="content-container">
            <h2>Company Name</h2>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="img-container">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp"
              alt="company logo"
            />
          </div>
          <div className="content-container">
            <h2>Company Name</h2>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="img-container">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp"
              alt="company logo"
            />
          </div>
          <div className="content-container">
            <h2>Company Name</h2>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="img-container">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp"
              alt="company logo"
            />
          </div>
          <div className="content-container">
            <h2>Company Name</h2>
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-center items-center">
        <h2 className="font-semibold text-4xl">
          <span>
            Stop Letting a Broken Workflow Dictate Your Sales Results.
          </span>
        </h2>
      </div>
      <div id="compare-container" className="flex justify-center items-center">
        <VSCardPositive />
        <div className="flex flex-col justify-center items-center p-4 gap-2">
          <div className="">
            <img
              className="h-[265px]"
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08105840/line.webp"
              alt="vertical-line"
            />
          </div>
          <div className="">
            <h3>VS</h3>
          </div>
          <div className="">
            <img
              className="h-[265px]"
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08105840/line.webp"
              alt="vertical-line"
            />
          </div>
        </div>
        <VSCardPositive />
      </div>
      <div id="button-container" className="flex items-center justify-center">
        <ButtonPrimary />
      </div>
    </div>
  );
};

export default BelowHero;
