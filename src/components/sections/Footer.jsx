import SectionContainer from "../common/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <SectionContainer bgColor="bg-footer">
      <div className="flex flex-col gap-5">
        <div className="upper-container">
          <div className="logo-container">
            <div className="">
              <img
                src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
                alt="LeadCRM Logo"
              />
            </div>
            <div className="">
              <p>LeadCRM is LinkedIn integration tool for your CRM.</p>
            </div>
            <div className=" flex gap-2">
              <span>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </span>
              <span>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </span>
              <span>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </span>
              <span>
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </span>
            </div>
          </div>
          <div className="link-container"></div>
        </div>
        <div className="copyright-container">
          <div className="">
            <p>
              Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
              LinkedIn(tm) logos and trademarks displayed on this tool are
              property of LinkedIn. LeadCRM is distributed AS IS. Your use of
              LeadCRM is at your own risk.
            </p>
          </div>
          <div className="border border-black"></div>
          <div className="text-center">
            <p>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
