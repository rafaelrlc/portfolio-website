import React from "react";
import { AiFillGithub, AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer class="hadow bg-gray-800 py-4 w-full">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex flex-row justify-center items-center gap-3 h-full text-gray-400">
            <MdOutlineEmail className="mt-[0.15rem]" />
            <h3>rafaelribeirolcc@gmail.com</h3>
          </div>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li className="flex items-center gap-2">
              <AiFillGithub size={15} />
              <a
                href="https://www.github.com/rafaelrlc"
                class="hover:underline mr-4 md:mr-6"
              >
                Github
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaLinkedinIn size={15} />
              <a
                href="https://www.github.com/rafaelrlc"
                class="hover:underline mr-4 md:mr-6"
              >
                Linkedin
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <AiFillPhone size={15} />
              <a
                href="https://www.github.com/rafaelrlc"
                class="hover:underline mr-4 md:mr-6"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
