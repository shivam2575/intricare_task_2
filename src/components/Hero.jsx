import React from "react";
import ButtonPrimary from "./common/ButtonPrimary";
import VerticalScroll from "./VerticalScroll";

const Hero = () => {
  return (
    <div
      id="hero-container"
      className="text-center flex flex-col gap-2 items-center bg-gradient-to-b from-hero-light to-[#f6fafd] mt-10 pb-5"
    >
      <div className="p-2 border border-logo-blue rounded-3xl text-[#63657e]">
        <p>🚀 Stop Juggling Tabs. Start Closing Deals.</p>
      </div>
      <div className="p-2">
        <h1 className="font-bold text-3xl md:text-6xl">
          <span>LinkedIn Leads, Instantly </span>
          <span className="text-logo-blue">Synced.</span>
        </h1>
      </div>
      <div className="text-center p-2">
        <p className="font-semibold text-lg text-[#363636]">
          LeadCRM embeds your CRM directly into LinkedIn, automating prospect
          syncing and data <br />
          enrichment in one click.
        </p>
      </div>
      <div className="text-center vertical-gap-sm p-2 rounded-2xl justify-between bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <div className="text-lg pt-2 md:px-2 md:py-4">works with</div>
        <VerticalScroll />
        <div className="text-lg pb-2 md:px-2 md:py-4">& more</div>
      </div>
      <div className="p-2">
        <img
          className="w-[400px] h-[40px]"
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/08062823/ratings-section-1536x155.webp"
          alt=""
        />
      </div>
      <div className="vertical-gap-md">
        <div className="flex items-center justify-between gap-2 p-2 bg-btn-dark rounded-lg shadow-lg">
          <div className="">
            <h2 className="text-white">
              <span className="text-sm">Available in</span>
              <br />
              Chrome Web Store
            </h2>
          </div>
          <div className="">
            <img
              className="w-[31px] h-[27px]"
              src="https://img.leadcrm.io/wp-content/uploads/2025/01/05122320/Google_Chrome_Web_Store_icon.webp"
              alt=""
            />
          </div>
        </div>
        <ButtonPrimary />
      </div>
    </div>
  );
};

export default Hero;
