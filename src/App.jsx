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
        {/* <button className="bg-red-500" onClick={() => changeBackground("troll")}>
          button
        </button> */}
        <Navbar />
        <Hero changeBackground={changeBackground} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
