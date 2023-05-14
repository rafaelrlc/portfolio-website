import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const Hero = () => {
  return (
    <div
      id="home"
      className=" w-full h-[100vh] mx-auto flex flex-col justify-center items-center py-16 text-white"
    >
      <p className="text-[#FF9119] sm:text-2xl md:text-[1.55rem] text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
        SOFTWARE DEVELOPER
      </p>
      <div className="group transition-all duration-300 ease-in-out py-2 hover:cursor-pointer">
        <h1
          className="sm:text-xl md:text-6xl text-[2.75rem]
             leading-none font-bold bg-left-bottom "
        >
          RAFAEL RIBEIRO
        </h1>
      </div>

      <p className="sm:text-xl md:text-2xl text-lg  text-gray-400 font-bold">
        <TypeWriterEffect
          textStyle={{
            color: "#9795a8",
            fontWeight: 500,
            fontSize: "1.3rem",
          }}
          startDelay={1000}
          cursorColor="#faa03f"
          multiText={[
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Java",
            "Spring Boot",
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
          multiTextLoop={true}
        />
      </p>
      <a href="#contact">
        <button className="bg-[#FF9119] rounded w-[200px] py-2 mt-4 hover:bg-[#e07e16] ">
          Contact Me
        </button>
      </a>
    </div>
  );
};

export default Hero;
