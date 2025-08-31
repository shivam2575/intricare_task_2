import SalesCard from "../common/SalesCard";
import SectionContainer from "../common/SectionContainer";
const LinkedInSales = () => {
  return (
    <SectionContainer>
      <div className="p-2 flex flex-col">
        <div className="">
          <h2 className="font-semibold text-4xl">
            Complete LinkedIn Sales Solutions
          </h2>
        </div>
        <div className="pt-2 pb-3">
          <p>Everything you need for professional LinkedIn prospecting</p>
        </div>
        <div className="">
          <div className="">
            <ul className="flex gap-10">
              <li className="flex p-2">
                <img
                  className="h-8 w-8"
                  src="https://img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp"
                  alt=""
                />
                <h3>CRM Data Enrichment</h3>
              </li>
              <li className="flex p-2">
                <img
                  className="h-8 w-8"
                  src="https://img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp"
                  alt=""
                />
                <h3>CRM Data Enrichment</h3>
              </li>
              <li className="flex p-2">
                <img
                  className="h-8 w-8"
                  src="https://img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp"
                  alt=""
                />
                <h3>CRM Data Enrichment</h3>
              </li>
              <li className="flex p-2">
                <img
                  className="h-8 w-8"
                  src="https://img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp"
                  alt=""
                />
                <h3>CRM Data Enrichment</h3>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <h2>
                It’s hard to find the accurate contact data for every prospects.{" "}
              </h2>
            </div>
            <div className="flex gap-4">
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
