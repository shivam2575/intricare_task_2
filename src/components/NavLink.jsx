import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ label, type }) => {
  return type === "button" ? (
    <>
      <a>{label}</a>
    </>
  ) : (
    <>
      <a href="">
        {label}
        <FontAwesomeIcon icon={faCaretDown} />
      </a>
    </>
  );
};

export default NavLink;
