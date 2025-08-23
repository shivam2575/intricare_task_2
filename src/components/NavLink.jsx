import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavLink = ({ label, type }) => {
  return type === "button" ? (
    <>
      <a>{label}</a>
    </>
  ) : (
    <>
      <a href="">{label}</a>
      <i></i>
    </>
  );
};

export default NavLink;
