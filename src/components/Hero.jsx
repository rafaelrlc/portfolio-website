import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[900px] w-full md:h-[80vh] h-[75vh] mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-indigo-500 sm:text-xl md:text-2xl text-xl font-bold ">
          SOFTWARE DEVELOPER
        </p>
        <h1 className="sm:text-6xl md:text-7xl md:py-4 text-4xl font-bold">
          RAFAEL RIBEIRO
        </h1>

        <p className="sm:text-xl md:text-2xl text-base  text-gray-400 font-bold">
          I like coding with{" "}
          {
            <Typed
              strings={["React.js", "Next.js", "Spring Boot", "Python"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            ></Typed>
          }
        </p>
        <button className="bg-indigo-600 rounded w-[200px] py-2 mt-4 hover:bg-indigo-800">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
