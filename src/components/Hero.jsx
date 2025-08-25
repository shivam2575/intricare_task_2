import React from "react";
import ButtonPrimary from "./common/ButtonPrimary";

const Hero = () => {
  return (
    <div
      id="hero-container"
      className="flex flex-col gap-2 items-center bg-hero-light mt-10"
    >
      <div className="p-2 border border-logo-blue rounded-3xl text-logo-blue">
        <p>🚀 Stop Juggling Tabs. Start Closing Deals.</p>
      </div>
      <div className="p-2">
        <h1 className="font-bold text-6xl">
          <span>LinkedIn Leads, Instantly </span>
          <span className="text-logo-blue">Synced.</span>
        </h1>
      </div>
      <div className="text-center p-2">
        <p className="font-semibold text-lg">
          LeadCRM embeds your CRM directly into LinkedIn, automating prospect
          syncing and data <br />
          enrichment in one click.
        </p>
      </div>
      <div className="p-2 rounded-lg flex justify-between gap-2 bg-gradient-to-r border border-black">
        <div className="px-2 py-4">works with</div>
        <div className="px-2 py-4 border border-black rounded-lg">
          📋 Google Sheets
        </div>
        <div className="px-2 py-4">& more</div>
      </div>
      <div className="p-2">
        <img
          className="w-[400px] h-[40px]"
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/08062823/ratings-section-1536x155.webp"
          alt=""
        />
      </div>
      <div className="flex gap-2 ">
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
