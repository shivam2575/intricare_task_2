const SectionContainer = ({ children, bgColor = "bg-white" }) => {
  return (
    <div className={`py-10 ${bgColor}`}>
      <div className="mx-10">{children}</div>
    </div>
  );
};

export default SectionContainer;
