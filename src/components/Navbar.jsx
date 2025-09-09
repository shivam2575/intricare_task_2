import React from "react";
import NavLink from "./common/NavLink";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="sticky flex justify-center items-center">
      <div className="flex items-center justify-between mx-auto my-2 py-2 w-[90%]">
        <div id="logo-container" className="">
          <img
            className="w-37.5 h-13"
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
          <button className="border hidden border-black px-4 py-2 m-2 bg-navy-blue text-white rounded-lg">
            Get your free account
          </button>
          <button className="border border-black px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="border border-logo-blue px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faBars} color="#089cd0" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
