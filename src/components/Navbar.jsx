import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(true);
  const [navColor, setNavColor] = useState("text-white");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      (document.body.scrollTop > 650 && document.body.scrollTop < 1300) ||
      (document.documentElement.scrollTop > 650 &&
        document.documentElement.scrollTop < 1300)
    ) {
      setNavColor("text-black");
    } else if (
      document.body.scrollTop >= 1300 ||
      document.documentElement.scrollTop >= 1300
    ) {
      setNavColor("text-white");
    } else {
      setNavColor("text-white");
    }
  }

  return (
    <div
      className={`flex h-24 items-center w-full mx-auto px-4 ${navColor} md:justify-end justify-start fixed`}
    >
      <ul className="hidden md:flex">
        <li className="group transition-all duration-200 ease-in-out py-2 hover:cursor-pointer">
          <a
            href="#home"
            className="p-4 px-4 group transition-all duration-300 ease-in-out"
          >
            {" "}
            <span
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
            >
              Home
            </span>
          </a>
        </li>
        <li className="group transition-all duration-200 ease-in-out py-2 hover:cursor-pointer">
          <a
            href="#about"
            className="p-4 px-4 group transition-all duration-300 ease-in-out"
          >
            {" "}
            <span
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
            >
              About
            </span>
          </a>
        </li>
        <li className="group transition-all duration-200 ease-in-out py-2 hover:cursor-pointer">
          <a
            href="#projects"
            className="p-4 px-4 group transition-all duration-300 ease-in-out"
          >
            {" "}
            <span
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
            >
              Projects
            </span>
          </a>
        </li>
        <li className="group transition-all duration-200 ease-in-out py-2 hover:cursor-pointer">
          <a
            href="#contact"
            className="p-4 px-4 group transition-all duration-300 ease-in-out"
          >
            {" "}
            <span
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
            >
              Contact
            </span>
          </a>
        </li>
      </ul>
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="block md:hidden ml-100"
      >
        {mobileNav && (
          <div>
            {" "}
            <AiOutlineMenu
              size={20}
              className="hover:cursor-pointer"
            ></AiOutlineMenu>
          </div>
        )}
      </div>

      <div
        className={
          !mobileNav
            ? "fixed opacity-[.99] left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center m-4 fixed">
          <MdOutlineClose
            className="text-2xl hover:cursor-pointer"
            onClick={() => setMobileNav(!mobileNav)}
          ></MdOutlineClose>
        </div>

        <ul
          className="pt-4 flex flex-col items-center gap-10 justify-center h-full mb-120"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <li
            className={`p-4 hover:cursor-pointer hover:text-gray-400 ${navColor}`}
          >
            <a href="#home">HOME</a>
          </li>
          <li className="p-4  hover:cursor-pointer hover:text-gray-400">
            <a href="#about">ABOUT</a>
          </li>
          <li className="p-4  hover:cursor-pointer hover:text-gray-400">
            <a href="#projects">PROEJCTS</a>
          </li>
          <li className="p-4  hover:cursor-pointer hover:text-gray-400">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
