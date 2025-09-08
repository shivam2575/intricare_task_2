import FooterList from "../common/FooterList";
import SectionContainer from "../common/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footerData } from "../../utils/footerData";

const Footer = () => {
  return (
    <SectionContainer bgColor="bg-footer">
      <div className="flex flex-col gap-5 justify-center items-center text-center">
        <div className="upper-container md:flex gap-10">
          <div className="vertical-gap-sm items-center mb-5 logo-container">
            <div className="">
              <img
                src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
                alt="LeadCRM Logo"
              />
            </div>
            <div className="">
              <p>
                LeadCRM helps sales teams connect their LinkedIn prospecting
                with their CRM workflow, saving time and increasing revenue
                through better data management and enrichment.
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <span className="cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="2xl"
                  color="#089cd0"
                />
              </span>
              <span className="cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="2xl"
                  color="#089cd0"
                />
              </span>
              <span className="cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="2xl"
                  color="#089cd0"
                />
              </span>
              <span className="cursor-pointer">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook"
                  size="2xl"
                  color="#089cd0"
                />
              </span>
            </div>
          </div>
          <div className="link-container flex flex-col gap-5">
            <FooterList icon={footerData[0].icon} data={footerData[0]} />
            <FooterList icon={footerData[1].icon} data={footerData[1]} />
            <div className="vertical-gap-sm items-center">
              <FooterList icon={footerData[2].icon} data={footerData[2]} />
              <FooterList icon={footerData[3].icon} data={footerData[3]} />

              <div className="">
                <div className="md:float-end rounded-lg md:w-[50%] bg-navy-blue text-white p-2">
                  <a href="">
                    <div className="flex gap-2">
                      <div className="">
                        <h4>Available in </h4>
                        <p>Chrome</p>
                      </div>
                      <div className="w-[36px] h-[31px]">
                        <img
                          src="https://img.leadcrm.io/wp-content/uploads/2025/01/05122320/Google_Chrome_Web_Store_icon.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container flex flex-col gap-2">
          <div className="">
            <p className="text-xs font-semibold text-gray-400">
              Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
              LinkedIn(tm) logos and trademarks displayed on this tool are
              property of LinkedIn. LeadCRM is distributed AS IS. Your use of
              LeadCRM is at your own risk.
            </p>
          </div>
          <div className="border border-black"></div>
          <div className="text-sm text-gray-400">
            <p>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Footer;
