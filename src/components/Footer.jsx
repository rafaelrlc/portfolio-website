import React from "react";
import { AiFillGithub, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="dark:bg-[#151515] bg-gray-100 p-5 w-full ease-linear transition-all duration-200">
      <div className="w-full max-w-screen-xl mx-auto sm:py-8 py-2">
        <div className="flex justify-center items-center dark:text-gray-400 text-gray-600 gap-2 sm:flex-row sm:justify-between flex-col-reverse">
          <div className="flex flex-row justify-center items-center gap-3 h-full ">
            <MdOutlineEmail className="mt-[0.15rem]" />
            <h3>rafaelribeirolcc@gmail.com</h3>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 hover:cursor-pointer">
            <li className="flex items-center gap-2">
              <AiFillGithub className="text-2xl sm:text-xl" />
              <a
                href="https://www.github.com/rafaelrlc"
                className="hover:underline mr-4 md:mr-6"
                target="_blank"
              >
                <span className="hidden sm:block">Github</span>
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaLinkedinIn className="text-2xl sm:text-xl" />
              <a
                href="https://linkedin.com/in/rafaelribeirolc"
                className="hover:underline mr-4 md:mr-6"
                target="_blank"
              >
                <span className="hidden sm:block">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
