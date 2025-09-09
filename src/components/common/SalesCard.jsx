import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SalesCard = () => {
  return (
    <div className="bg-salesCard rounded-lg shadow-lg p-5 vertical-gap-sm text-center ">
      <div className="">
        <h2 className="text-[#262626] text-[20px] font-semibold">
          Get Access to 700M+ Prospects.
        </h2>
      </div>
      <div className="">
        <a className="text-[#097737]" href="/">
          <span>Try LeadCRM Data Enrichment</span>
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
      <div className="">
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
