import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const NavLink = ({ label, type }) => {
  const [showDrop, setShowDrop] = useState(false);
  return type === "button" ? (
    <div>
      <a href="/">{label}</a>
    </div>
  ) : (
    <>
      <div
        onMouseEnter={() => setShowDrop(true)}
        onMouseLeave={() => setShowDrop(false)}
      >
        <div>
          <a href="/">
            {label}
            <FontAwesomeIcon icon={faChevronDown} className="ml-1" size="sm" />
          </a>
        </div>

        {showDrop && <DropDownMenu />}
      </div>
    </>
  );
};

export default NavLink;
