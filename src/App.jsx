import React, { useCallback, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


import { loadFull } from "tsparticles";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import PopSelectors from "./components/PopSelectors";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  console.log(theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-black bg-[#f5f5f5] ease-linear transition-all duration-200">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-10 bottom-10 dark:bg-white bg-gray-600 text-lg p-2 rounded-3xl dark:text-black text-white"
      >
        {theme === "dark" ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>

      <ul className="flex items-center gap-3 fixed bottom-10 left-10 z-[99]">
        <PopSelectors icon={<FaLinkedinIn className="text-xl sm:text-2xl" />} link={'https://www.linkedin.com/in/rafaelribeirolc/'} />

        <PopSelectors icon={<AiFillGithub className="text-xl sm:text-2xl" />} link={'https://github.com/rafaelrlc'} />

        <div>
      {/* <a
        className="dark:bg-gray-700 bg-gray-500 p-2 rounded-3xl text-white tooltip"
        target="_blank"
      >
        <RiDownloadCloud2Line className="text-xl sm:text-2xl" />
      </a> */}
    </div>



      </ul>

      <div>
        {/* <Navbar theme={theme} /> */}
        <Hero />
        {/* <About />
        <Projects />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  );
};

export default App;
