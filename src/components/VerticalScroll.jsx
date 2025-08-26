import { HORIZONTAL_SCROLL } from "../utils/constants";

const VerticalScroll = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center w-[250px] h-[70px] rounded-lg shadow-lg bg-amber-50/20">
      <ul className="flex flex-col gap-10 animate-vertical-scroll">
        {[...HORIZONTAL_SCROLL, ...HORIZONTAL_SCROLL].map((company) => (
          <li key={company.name} className="flex gap-2 items-center">
            <div className="">
              <img
                className="h-10 w-10"
                src={company.image}
                alt="company logo"
              />
            </div>
            <p>{company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalScroll;
