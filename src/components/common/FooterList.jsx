import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterList = ({ icon, data }) => {
  const { section, items } = data;
  return (
    <div className="vertical-gap-sm items-center text-start my-2">
      <div className="">
        <h3 className="font-bold text-3xl text-navy-blue">{section}</h3>
      </div>
      <div className="">
        <ul>
          {items.map((item) => (
            <li
              key={item}
              className="font-extralight text-md text-gray-700 hover:text-logo-blue transition-colors duration-300 ease-in cursor-pointer"
            >
              {icon && <FontAwesomeIcon icon={faEnvelope} size="2xl" />}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
