const TestimonialCard = () => {
  return (
    <div className="bg-test-purple rounded-lg shadow-lg m-2 flex flex-col gap-4 p-5 ">
      <div className="">
        <p className="text-md text-[#333399]">
          “It’s been a really positive experience overall. I use LeadCRM to
          build qualified leads from LinkedIn and sync them into HubSpot. The
          platform has saved me hours of manual work every week. I would
          especially highlight their customer support — they are fast,
          knowledgeable, and genuinely helpful. “
        </p>
      </div>
      <div className="flex gap-2">
        <div className="w-[25px] h-[25px]">
          <img
            className="h-full w-full"
            src="https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png"
            alt=""
          />
        </div>
        <div className="">⭐️⭐️⭐️⭐️⭐️</div>
      </div>
      <div className="border-b-1 w-[90%] m-auto border-b-[#717584]"></div>
      <div className="flex justify-between">
        <div className="">
          <div className="text-[#090F4E] text-lg font-semibold">Name</div>
          <div className="text-[#696969] text-sm font-light">Company name</div>
        </div>
        <div className="h-10 w-10 rounded-full">
          <img
            className="h-full w-full object-cover rounded-full"
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/18160607/olivia.jpg"
            alt="profile picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
