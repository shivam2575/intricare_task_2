import React from "react";
import { HORIZONTAL_SCROLL } from "../utils/constants";

const HorizontalScroll = () => {
  return (
    <div className="overflow-hidden my-10 py-10 w-full flex">
      <ul className="flex gap-10 animate-marquee w-max">
        {[...HORIZONTAL_SCROLL, ...HORIZONTAL_SCROLL].map((company, index) => (
          <li key={index} className="flex gap-2 w-56 items-center">
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

export default HorizontalScroll;
