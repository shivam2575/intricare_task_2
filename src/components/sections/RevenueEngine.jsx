import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import SectionSubHeading from "../common/SectionSubHeading";
import ButtonPrimary from "../common/ButtonPrimary";

const RevenueEngine = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-center items-center gap-6">
        <SectionHeading center={true}>
          Turn Your LinkedIn into a Revenue Engine.
        </SectionHeading>
        <div className="text-center p-2 w-[96%] h-96 bg-[url(https://img.leadcrm.io/wp-content/uploads/2025/07/11083207/Product-hunt-banner-image.webp)] bg-contain">
          <h2 className="text-white font-semibold pt-5 pb-2 text-4xl">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h2>
        </div>
        <div className="flex justify-center">
          <ButtonPrimary />
        </div>
      </div>
    </SectionContainer>
  );
};

export default RevenueEngine;
