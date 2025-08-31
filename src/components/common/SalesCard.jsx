import React from "react";

const SalesCard = () => {
  return (
    <div className="bg-salesCard rounded-lg shadow-lg p-5">
      <div className="">
        <h2>Get Access to 700M+ Prospects.</h2>
      </div>
      <div className="">
        <a href="/">
          <span>Try LeadCRM Data Enrichment</span>
        </a>
      </div>
      <div className="w-[566px] h-[342px]">
        <img
          className="h-full w-full"
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-1536x929.png"
          alt="client details"
        />
      </div>
    </div>
  );
};

export default SalesCard;
