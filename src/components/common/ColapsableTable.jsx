import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretDown,
  faSquareCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ColapsableTable = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="vertical-gap-md md:w-[90%] md:m-auto">
      {faqs.map((faq, index) => (
        <div key={faq.question} className="faq flex flex-col gap-2">
          <div
            onClick={() => toggleFaq(index)}
            className="que-container flex justify-between cursor-pointer"
          >
            <div className="cursor-pointer">{faq.question}</div>
            <div>
              <FontAwesomeIcon
                icon={openIndex === index ? faSquareCaretUp : faSquareCaretDown}
                size="xl"
              />
            </div>
          </div>
          {openIndex === index && (
            <div className="ans-container bg-faq-ans rounded-lg shadow-lg p-5 transition-all duration-1000 ease-in-out">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColapsableTable;
