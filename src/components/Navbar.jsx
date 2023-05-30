import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Navbar = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [navColor, setNavColor] = useState("text-white");

  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     (document.body.scrollTop > 650 && document.body.scrollTop < 1300) ||
  //     (document.documentElement.scrollTop > 650 &&
  //       document.documentElement.scrollTop < 1300)
  //   ) {
  //     setNavColor("text-black");
  //   } else if (
  //     document.body.scrollTop >= 1300 ||
  //     document.documentElement.scrollTop >= 1300
  //   ) {
  //     setNavColor("text-white");
  //   } else {
  //     setNavColor("text-white");
  //   }
  // }

  return (
    <nav
      className={`flex h-24  items-center bg-transparent w-full mx-auto px-4 md:justify-between justify-between fixed z-50`}
    >
      <img
        onClick={() => props.changeBackground("logo")}
        src="https://media.discordapp.net/attachments/1025173249543393330/1111468125666426921/r-high-resolution-logo-color-on-transparent-background.png?width=1482&height=1138"
        width={"60px"}
      />
      <ul className="hidden md:flex">
        <li className="group transition-all duration-200 ease-in-out py-2 hover:cursor-pointer">
          <a
            href="#home"
            className="p-4 px-4 group transition-all duration-300 ease-in-out"
          >
            {" "}
            <span
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-[#FF9119] to-[#f3932d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
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
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-[#FF9119] to-[#f3932d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
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
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-[#FF9119] to-[#f3932d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
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
              className={`${navColor} bg-left-bottom bg-gradient-to-r from-[#FF9119] to-[#f3932d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-[0.45rem]`}
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
        {!mobileNav && (
          <div>
            {" "}
            <AiOutlineMenu
              size={20}
              className="hover:cursor-pointer text-white"
            ></AiOutlineMenu>
          </div>
        )}
      </div>

      <div
        className={
          mobileNav
            ? "fixed opacity-[.90] bg-black left-0 top-0 w-[100%] h-full ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] bottom-[-100%]"
        }
      >
        <div className="flex items-center justify-center m-4 text-white fixed">
          <MdOutlineClose
            className="text-2xl hover:cursor-pointer"
            onClick={() => setMobileNav(!mobileNav)}
          ></MdOutlineClose>
        </div>

        <ul
          className="pt-4 flex flex-col items-center gap-10 justify-center h-full mb-120 text-white"
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
    </nav>
  );
};

export default Navbar;
