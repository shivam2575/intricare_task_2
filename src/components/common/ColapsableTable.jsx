import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
const ColapsableTable = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="faq">
        <div className="que-container flex justify-between">
          <div className="cursor-pointer">1. What exactly does LeadCRM do?</div>
          <div>
            <FontAwesomeIcon icon={faSquareCaretDown} />
          </div>
        </div>
        <div className="ans-container bg-faq-ans rounded-lg shadow-lg p-5">
          <p>
            LeadCRM is a browser extension that seamlessly connects your
            LinkedIn account (including Sales Navigator) to your CRM. It
            eliminates manual data entry by allowing you to instantly sync
            entire LinkedIn profiles—including contact information, experience,
            and skills—to your CRM in a single click. It’s designed to save your
            sales team dozens of hours a month, prevent data errors, and ensure
            your CRM is always up-to-date.
          </p>
        </div>
      </div>
      <div className="faq">
        <div className="que-container flex justify-between">
          <div className="cursor-pointer">1. What exactly does LeadCRM do?</div>
          <div>
            <FontAwesomeIcon icon={faSquareCaretDown} />
          </div>
        </div>
        <div className="ans-container bg-faq-ans rounded-lg shadow-lg p-5">
          <p>
            LeadCRM is a browser extension that seamlessly connects your
            LinkedIn account (including Sales Navigator) to your CRM. It
            eliminates manual data entry by allowing you to instantly sync
            entire LinkedIn profiles—including contact information, experience,
            and skills—to your CRM in a single click. It’s designed to save your
            sales team dozens of hours a month, prevent data errors, and ensure
            your CRM is always up-to-date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColapsableTable;
