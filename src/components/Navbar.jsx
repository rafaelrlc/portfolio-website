import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(true);
  const [navbarShow, setNavbarShow] = useState(true);

  const changeNavbar = () => {};

  window.addEventListener("scroll", changeNavbar);

  return (
    <div
      id="home"
      className="flex h-24 items-center max-w-[1240px] mx-auto px-4 text-white md:justify-between justify-start"
    >
      <h1></h1>
      <ul className="hidden md:flex">
        <li className="p-4 px-5  rounded-xl hover:text-stone-500 hover:cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="p-4 px-5 rounded-xl hover:text-stone-500 hover:cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="p-4 px-5 rounded-xl hover:text-stone-500 hover:cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-4  rounded-xl hover:cursor-pointer bg-indigo-800">
          <a href="#contact">Contact</a>
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
        <h1 className="w-full text-3xl font-bold text-indigo-500 m-4">
          My Portfoil
        </h1>
        <ul className="pt-12" onClick={() => setMobileNav(!mobileNav)}>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            About
          </li>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            Projects
          </li>
          <li className="p-4 border-b border-gray-700  hover:bg-gray-800 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
