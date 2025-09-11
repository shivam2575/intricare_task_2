import { useState } from "react";
import NavLink from "./common/NavLink";
import {
  faArrowRightToBracket,
  faBars,
  faChevronDown,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownMenu from "./common/DropDownMenu";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [dropVisible, setDropVisible] = useState(false);
  return (
    <>
      {/* Overlay div */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 transform transition-transform duration-300 ease-in-out ${
          menuClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
      {/* Mobile menu div */}
      <div
        className={`fixed inset-0 bg-white z-40 w-[90%] transform transition-transform duration-500 ease-in-out ${
          menuClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center py-4 px-2">
          <div id="logo-container-mobile">
            <img
              className="w-37.5 h-13 cursor-pointer"
              src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
              alt="LeadCRM Logo"
            />
          </div>
          <div className="">
            <button
              onClick={() => {
                setDropVisible(false);
                setMenuClicked(false);
              }}
              className="border px-4 py-2 rounded-lg cursor-pointer hover:bg-logo-blue/20 transition-all duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        </div>
        <div className="vertical-gap-sm">
          <div className="dropdown-element p-2">
            <div
              onClick={() => setDropVisible(!dropVisible)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="p-2 text-md">Menu item</p>
              <button className="border px-3 rounded-2xl cursor-pointer hover:bg-logo-blue/20 transition-all duration-300 ease-in-out">
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </button>
            </div>
            {dropVisible && <DropDownMenu />}
          </div>
          <div className="button-element p-2 cursor-pointerz">
            <p className="p-2 text-md">Menu item</p>
          </div>
        </div>
      </div>
      {/* Desktop menu div */}
      <nav className="sticky flex justify-center items-center">
        <div className="flex items-center justify-between mx-auto my-2 py-2 w-[90%]">
          <div id="logo-container" className="">
            <img
              className="w-37.5 h-13 cursor-pointer"
              src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
              alt="LeadCRM Logo"
            />
          </div>
          <div className="nav-link-container hidden md:flex justify-between gap-10">
            <NavLink label="Product" type="dropdown" />
            <NavLink label="Product" type="button" />
            <NavLink label="Product" type="dropdown" />
            <NavLink label="Product" type="dropdown" />
          </div>
          <div className="button-container flex justify-between items-center gap-2">
            <div className="relative bg-navy-blue rounded-lg overflow-hidden group">
              {/* Overlay div */}
              <div className="absolute inset-0 bg-logo-blue z-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
              <button className="border relative z-10 w-full h-full cursor-pointer hidden md:inline-block border-black px-6 py-3 text-white rounded-lg">
                Get your free account
              </button>
            </div>

            <button className="border-2 border-black p-2 md:px-6 md:py-3 rounded-lg cursor-pointer hover:bg-logo-blue/20  transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-1" />
              Login
            </button>
            <button
              onClick={() => setMenuClicked(true)}
              className="border md:hidden border-logo-blue px-4 py-2 rounded-lg cursor-pointer hover:bg-logo-blue/20 transition-all duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faBars} color="#089cd0" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
