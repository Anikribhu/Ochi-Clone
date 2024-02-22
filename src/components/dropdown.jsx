/* eslint-disable react/prop-types */
import React from "react";
import Popper from "popper.js";


const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-zinc-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="font-['Neue_Montreal'] lg:hidden max-md:ml-8  flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-5/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white  font-bold uppercase  px-10 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1  " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <h1 className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  text-lg font-regular capitalize">Menu</h1>
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base  bg-zinc-700 z-50 float-left py-4  list-none text-center rounded-xl shadow-lg mt-1 "
              }
              style={{ minWidth: "10rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                <h1 className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-4/5  before:h-[2px] 
              before:bottom-0 before:left-4 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  font-regular capitalize">Services</h1>
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                <h1 className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-4/5  before:h-[2px] 
              before:bottom-0 before:left-4 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  font-regular capitalize">Our Works</h1>
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                <h1 className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-4/5  before:h-[2px] 
              before:bottom-0 before:left-4 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  font-regular capitalize">About Us</h1>
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                <h1 className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-4/5  before:h-[2px] 
              before:bottom-0 before:left-4 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  font-regular capitalize">Insights</h1>
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                <h1 className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-4/5  before:h-[2px] 
              before:bottom-0 before:left-4 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300  font-regular capitalize">Contact Us</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown />
    </>
  );
}
