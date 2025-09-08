const SectionHeading = ({ center = false, children }) => {
  return (
    <div
      className={`p-2 ${
        center ? "flex justify-center items-center text-center" : ""
      }`}
    >
      <h2 className="text-[20px] font-semibold md:text-4xl text-section-heading">
        <span>{children}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
