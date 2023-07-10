import React, { useCallback, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles_hash } from "./utils/particles-config";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const App = () => {
  const [theme, setTheme] = useState(null);
  const [backgroundConfig, setBackgroundConfig] = useState("normal_dark2");

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

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-black bg-[#f5f5f5] ease-linear transition-all duration-200">
      <Particles
        className="fixed"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles_hash[backgroundConfig]}
      />

      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-10 bottom-10 dark:bg-white bg-gray-600 text-lg p-2 rounded-3xl dark:text-black text-white"
      >
        {theme === "dark" ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>
      <div>
        <ul className="flex items-center gap-3 fixed bottom-10 left-10 z-[99]">
          <a
            className="dark:bg-gray-700 bg-gray-500  hover:bg-gray-800 p-2 rounded-3xl text-white tooltip "
            data-tip="Linkedin"
            target="_blank"
            href="https://linkedin.com/in/rafaelribeirolc"
          >
            <FaLinkedinIn className="text-xl sm:text-2xl" />
          </a>

          <a
            className="dark:bg-gray-700 bg-gray-500 hover:bg-gray-800 p-2 rounded-3xl text-white tooltip"
            data-tip="Github"
            href="https://www.github.com/rafaelrlc"
            target="_blank"
          >
            <AiFillGithub className="text-xl sm:text-2xl" />
          </a>

          <a
            className="dark:bg-gray-700 bg-gray-500  hover:bg-gray-800 p-2 rounded-3xl text-white tooltip"
            data-tip="Download Resume"
          >
            <RiDownloadCloud2Line
              className="text-xl sm:text-2xl"
              target="_blank"
            />
          </a>
        </ul>

        <div>
          <Navbar theme={theme} />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
