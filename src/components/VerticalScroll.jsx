import { HORIZONTAL_SCROLL } from "../utils/constants";

const VerticalScroll = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center w-50 h-15 md:w-52 md:h-16 rounded-2xl shadow-lg bg-amber-50/20">
      <ul className="flex flex-col gap-10 animate-vertical-scroll">
        {[...HORIZONTAL_SCROLL, ...HORIZONTAL_SCROLL].map((company, index) => (
          <li key={index} className="flex gap-2 items-center">
            <div className="">
              <img
                className="h-8 w-8 rounded-lg"
                src={company.image}
                alt="company logo"
              />
            </div>
            <p className="md:text-lg">{company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalScroll;
