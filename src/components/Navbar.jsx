import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(true);
  const [navbarShow, setNavbarShow] = useState(true);
  const [navColor, setNavColor] = useState("text-white");

  const changeNavbar = () => {};

  window.addEventListener("scroll", changeNavbar);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      setNavColor("text-black");
    } else {
      setNavColor("text-white");
    }
  }

  return (
    <div
      id="home"
      className={`flex h-24 items-center w-full mx-auto px-4 ${navColor} md:justify-between justify-start fixed`}
    >
      <h1></h1>
      <ul className="hidden md:flex">
        <li>
          <a
            href="#home"
            className="p-4 px-5  rounded-xl hover:text-stone-500 hover:cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="p-4 px-5 rounded-xl hover:text-stone-500 hover:cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="p-4 px-5 rounded-xl hover:text-stone-500 hover:cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="p-4  rounded-xl hover:cursor-pointer hover:text-stone-500 "
          >
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="block md:hidden ml-100"
      >
        {mobileNav ? (
          <AiOutlineMenu
            size={20}
            className="hover:cursor-pointer"
          ></AiOutlineMenu>
        ) : (
          <AiOutlineClose></AiOutlineClose>
        )}
      </div>

      <div
        className={
          !mobileNav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-indigo-500 m-4">R.R</h1>
        <ul className="pt-12" onClick={() => setMobileNav(!mobileNav)}>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            <a href="#home" onClick={() => setNavColor("black")}>
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            <a href="#about" onClick={() => setNavColor("black")}>
              About
            </a>
          </li>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            <a href="#projects" onClick={() => setNavColor("black")}>
              Projects
            </a>
          </li>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            <a href="#contact" onClick={() => setNavColor("black")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
