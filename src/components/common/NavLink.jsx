import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavLink = ({ label, type }) => {
  const [showDrop, setShowDrop] = useState(false);
  return type === "button" ? (
    <div>
      <a>{label}</a>
    </div>
  ) : (
    <>
      <div
        className=""
        onMouseEnter={() => setShowDrop(true)}
        onMouseLeave={() => setShowDrop(false)}
      >
        <div className="">
          <a href="">
            {label}
            <FontAwesomeIcon icon={faCaretDown} />
          </a>
        </div>

        <div
          className={`border border-black rounded-lg shadow-lg ${
            showDrop ? "" : "hidden"
          }`}
        >
          <ul>
            <li>
              <FontAwesomeIcon icon={faCaretDown} />
              <span>Item 1</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretDown} />
              <span>Item 1</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretDown} />
              <span>Item 1</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretDown} />
              <span>Item 1</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavLink;
