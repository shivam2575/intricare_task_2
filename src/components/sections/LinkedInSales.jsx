import { useState } from "react";
import { salesTab } from "../../utils/linkedInSalesData";
import SalesCard from "../common/SalesCard";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import SectionSubHeading from "../common/SectionSubHeading";
const LinkedInSales = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <SectionContainer>
      <div className="p-2 flex flex-col">
        <SectionHeading center={true}>
          Complete LinkedIn Sales Solutions
        </SectionHeading>
        <SectionSubHeading center={true}>
          Everything you need for professional LinkedIn prospecting
        </SectionSubHeading>
        <div className="">
          <div className="">
            <ul className="flex flex-col items-center md:gap-10">
              {salesTab &&
                salesTab.map((tab, index) => (
                  <li
                    key={tab.heading}
                    onClick={() => setSelectedIndex(index)}
                    className={`flex p-2 mr-2 cursor-pointer ${
                      selectedIndex === index ? "border-b-4" : ""
                    }`}
                  >
                    <img className="h-8 w-8 mr-2" src={tab.url} alt="" />
                    <h3 className="text-sm font-semibold">{tab.heading}</h3>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <h2 className="text-section-subheading font-light">
                It’s hard to find the accurate contact data for every prospects.{" "}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <SalesCard />
              <SalesCard />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LinkedInSales;
