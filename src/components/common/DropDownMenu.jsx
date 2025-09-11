import React from "react";

const DropDownMenu = () => {
  return (
    <div className="p-2 md:p-4 md:absolute md:z-10 md:bg-white md:rounded-2xl md:shadow-lg">
      <ul className="vertical-gap-sm md:p-2">
        <li className="p-2 md:p-4 hover:bg-purple-100 rounded-2xl cursor-pointer">
          <a href="" className="md:flex md:gap-2">
            <img
              className="h-9 w-9"
              src="https://img.leadcrm.io/wp-content/uploads/2025/01/24082433/blog-1-150x150.webp"
              alt=""
            />
            <p>drop-down Item</p>
          </a>
        </li>
        <li className="p-2 md:p-4 hover:bg-purple-100 rounded-2xl cursor-pointer">
          <a href="" className="md:flex md:gap-2">
            <img
              className="h-9 w-9"
              src="https://img.leadcrm.io/wp-content/uploads/2025/01/24082433/blog-1-150x150.webp"
              alt=""
            />
            <p>drop-down Item</p>
          </a>
        </li>
        <li className="p-2 md:p-4 hover:bg-purple-100 rounded-2xl cursor-pointer">
          <a href="" className="md:flex md:gap-2">
            <img
              className="h-9 w-9"
              src="https://img.leadcrm.io/wp-content/uploads/2025/01/24082433/blog-1-150x150.webp"
              alt=""
            />
            <p>drop-down Item</p>
          </a>
        </li>
        <li className="p-2 md:p-4 hover:bg-purple-100 rounded-2xl cursor-pointer">
          <a href="" className="md:flex md:gap-2">
            <img
              className="h-9 w-9"
              src="https://img.leadcrm.io/wp-content/uploads/2025/01/24082433/blog-1-150x150.webp"
              alt=""
            />
            <p>drop-down Item</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
