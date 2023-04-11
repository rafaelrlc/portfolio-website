import React from "react";

const Footer = () => {
  return (
    <footer class="rounded-lg shadow bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a class="flex items-center mb-4 sm:mb-0">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Rafael Ribeiro
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li>
              <a href="#about" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>

            <li>
              <a
                href="https://www.github.com/rafaelrlc"
                class="hover:underline mr-4 md:mr-6"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/rafaelribeirolc"
                class="hover:underline mr-4 md:mr-6"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:underline">
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
