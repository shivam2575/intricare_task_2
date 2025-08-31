const TestimonialCard = () => {
  return (
    <div className="bg-test-purple rounded-lg shadow-lg m-2 flex flex-col gap-4">
      <div className="">
        <p>
          “It’s been a really positive experience overall. I use LeadCRM to
          build qualified leads from LinkedIn and sync them into HubSpot. The
          platform has saved me hours of manual work every week. I would
          especially highlight their customer support — they are fast,
          knowledgeable, and genuinely helpful. “
        </p>
      </div>
      <div className="flex">
        <div className="w-[25px] h-[25px]">
          <img
            className="h-full w-full"
            src="https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png"
            alt=""
          />
        </div>
        <div className="">⭐️⭐️⭐️⭐️⭐️</div>
      </div>
      <div className="border border-black"></div>
      <div className="flex justify-between">
        <div className="">
          <div className="">Name</div>
          <div className="">Company name</div>
        </div>
        <div className="h-[44px] w-[44px]">
          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/18160607/olivia.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
