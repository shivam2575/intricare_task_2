import React from "react";

const HowItWorkCard = () => {
  return (
    <div className="rounded-lg shadow-lg bg-white border border-black">
      <div id="content-container" className="">
        <div className="">
          <span>1</span>
        </div>
        <div className="">
          <div className="">
            <h3>Install the Extension</h3>
          </div>
          <div className="">
            <p>
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and
              seamless.
            </p>
          </div>
        </div>
      </div>
      <div id="img-container" className="w-[306px] h-[192px]">
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
