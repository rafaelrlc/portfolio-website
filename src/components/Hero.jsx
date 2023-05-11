import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const Hero = () => {
  return (
    <div className="text-white" id="home">
      <div className=" w-full h-[100vh] mx-auto flex flex-col justify-center items-center py-16">
        <p className="text-indigo-500 sm:text-2xl md:text-3xl text-2xl font-bold ">
          SOFTWARE DEVELOPER
        </p>
        <div className="group transition-all duration-300 ease-in-out py-2 hover:cursor-pointer">
          <h1
            className="sm:text-6xl md:text-7xl text-[2.75rem]
             leading-none font-bold bg-left-bottom bg-gradient-to-r from-indigo-600 to-indigo-500 md:bg-[length:0%_2px] bg-[length:0%_2px] bg-no-repeat md:group-hover:bg-[length:100%_4px] group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out "
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
            cursorColor="#3526c0"
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
      </div>
    </div>
  );
};

export default Hero;
