const SectionHeading = ({ center = false, children }) => {
  return (
    <div className={`p-2 ${center ? "flex justify-center items-center" : ""}`}>
      <h2 className="font-semibold font-sans text-4xl">
        <span>{children}</span>
      </h2>
    </div>
  );
};

export default SectionHeading;
