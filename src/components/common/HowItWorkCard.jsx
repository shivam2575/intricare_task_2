import React from "react";

const HowItWorkCard = () => {
  return (
    <div className="vertical-gap-md rounded-lg shadow-lg bg-white p-4 hover:ring-1 hover:ring-logo-blue transition-all duration-300 ease-in">
      <div
        id="content-container"
        className="vertical-gap-sm items-center text-center"
      >
        <div className="">
          <span className="!font-['Sriracha'] font-bold text-6xl text-logo-blue">
            1
          </span>
        </div>
        <div className="vertical-gap-sm">
          <div className="text-lg text-[#090f4e] font-semibold">
            <h3>Install the Extension</h3>
          </div>
          <div className="">
            <p className="text-sm text-[#4c4c4c]">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
          </div>
        </div>
      </div>
      <div id="img-container" className="">
        <img
          className="w-full h-full object-contain"
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default HowItWorkCard;
