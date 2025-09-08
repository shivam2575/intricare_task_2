import SectionContainer from "../common/SectionContainer";
import SectionHeading from "../common/SectionHeading";
import SectionSubHeading from "../common/SectionSubHeading";
import ButtonPrimary from "../common/ButtonPrimary";

const SingleSource = () => {
  return (
    <SectionContainer>
      <div className="text-center flex flex-col gap-5">
        <SectionHeading center={true}>
          Your CRM, Now the Single Source of Truth.
        </SectionHeading>
        <SectionSubHeading center={true}>
          Sync complete LinkedIn profiles and use our flexible field mapping to
          ensure every detail, from job history to contact info, populates
          exactly where you need it, creating a perfectly organized CRM
          automatically.
        </SectionSubHeading>
        <div className="">
          <picture className="block w-full">
            {/* For medium and above */}
            <source
              media="(min-width: 768px)"
              srcSet="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-2048x848.png"
            />

            {/* For small screen (default fallback) */}
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/28075853/Your-CRM.webp"
              alt="LeadCRM"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="flex justify-center">
          <ButtonPrimary />
        </div>
      </div>
    </SectionContainer>
  );
};

export default SingleSource;
