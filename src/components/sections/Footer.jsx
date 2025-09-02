import SectionContainer from "../common/SectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <SectionContainer bgColor="bg-footer">
      <div className="flex flex-col gap-5">
        <div className="upper-container flex gap-10">
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
          <div className="link-container flex gap-10">
            <div className="">
              <div className="">
                <h3>Integrations</h3>
              </div>
              <div className="">
                <ul>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="">
                <h3>Integrations</h3>
              </div>
              <div className="">
                <ul>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                  <li>Hubspot</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-10 justify-between">
                <div className="flex flex-col gap-2">
                  <div className="">
                    <h3>Integrations</h3>
                  </div>
                  <div className="">
                    <ul>
                      <li>Hubspot</li>
                      <li>Hubspot</li>
                      <li>Hubspot</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="">
                    <h3>Integrations</h3>
                  </div>
                  <div className="">
                    <ul>
                      <li>Hubspot</li>
                      <li>Hubspot</li>
                      <li>Hubspot</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="float-end rounded-lg w-[50%] bg-navy-blue text-white p-2 justify-center items-center">
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
