import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import {
  particles_config_among,
  particles_config_normal,
  troll_background,
} from "./utils/particles-config";

import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt, FaLinkedinIn } from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";

import Tooltip from "@mui/material/Tooltip";

const App = () => {
  const [backgroundConfig, setBackgroundConfig] = useState(
    particles_config_normal
  );

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const changeBackground = (config) => {
    if (config === "troll") {
      setBackgroundConfig((prevConfig) =>
        prevConfig === troll_background
          ? particles_config_normal
          : troll_background
      );
    } else if (config === "normal") {
      setBackgroundConfig(particles_config_normal);
    } else if (config === "among") {
      setBackgroundConfig((prevConfig) =>
        prevConfig === particles_config_among
          ? particles_config_normal
          : particles_config_among
      );
    } else if (config == "logo") {
      setBackgroundConfig((prevConfig) =>
        prevConfig === particles_config_logo
          ? particles_config_normal
          : particles_config_logo
      );
    }
  };

  return (
    <div>
      <Particles
        className="z-[-1] fixed"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={backgroundConfig}
      />
      <div>
        <ul className="flex items-center gap-3 fixed bottom-10 left-10">
          <Tooltip title="Linkedin">
            <a
              className="bg-gray-600 hover:bg-gray-800 p-2 rounded-3xl text-white"
              target="_blank"
              href="https://linkedin.com/in/rafaelribeirolc"
            >
              <FaLinkedinIn className="text-2xl sm:text-xl" />
            </a>
          </Tooltip>
          <Tooltip title="Github">
            <a
              className="bg-gray-600 hover:bg-gray-800 p-2 rounded-3xl text-white"
              href="https://www.github.com/rafaelrlc"
              target="_blank"
            >
              <AiFillGithub className="text-2xl sm:text-xl" />
            </a>
          </Tooltip>
          <Tooltip title="Download Resume">
            <a className="bg-gray-600 hover:bg-gray-800 p-2 rounded-3xl text-white">
              <RiDownloadCloud2Line
                className="text-2xl sm:text-xl"
                target="_blank"
              />
            </a>
          </Tooltip>
        </ul>

        <Navbar changeBackground={changeBackground} />
        <Hero changeBackground={changeBackground} />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
