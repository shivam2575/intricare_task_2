import ButtonPrimary from "../common/ButtonPrimary";
import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import VSCardPositive from "../VSCardPositive";

const BelowHero = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-10">
        <SectionHeading center={true}>
          Stop Letting a Broken Workflow Dictate Your Sales Results.
        </SectionHeading>
        {/* <div className="p-2 flex justify-center items-center">
          <h2 className="font-semibold text-4xl">
            <span>
              Stop Letting a Broken Workflow Dictate Your Sales Results.
            </span>
          </h2>
        </div> */}
        <div
          id="compare-container"
          className="vertical-gap-md justify-center items-center"
        >
          <VSCardPositive />
          <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:p-4 md:gap-2">
            <div className="">
              <img
                className="h-[265px]"
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/08105840/line.webp"
                alt="vertical-line"
              />
            </div>
            <div className="">
              <h3>VS</h3>
            </div>
            <div className="">
              <img
                className="h-[265px]"
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/08105840/line.webp"
                alt="vertical-line"
              />
            </div>
          </div>
          <VSCardPositive />
        </div>
        <div id="button-container" className="flex items-center justify-center">
          <ButtonPrimary />
        </div>
      </div>
    </SectionContainer>
  );
};

export default BelowHero;
