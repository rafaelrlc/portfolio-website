import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = (props) => {
  return (
    <div
      id="#home"
      className="flex md:flex-row items-center justify-around md:mx-10 mx-7 h-screen gap-5 relative"
    >
      <div>
        <div className="group transition-all duration-300 ease-in-out py-2 hover:cursor-pointer flex flex-col md:items-start items-center gap-3">
          <div className="flex lg:flex-col flex-col-reverse md:items-start items-center">
            <h1
              className="sm:text-6xl text-5xl leading-none font-bold bg-left-bottom text-gray-200 hover:text-[#b6dd9d]"
              onClick={() => props.changeBackground("among")}
            >
              <span className="hidden md:inline">HI, MY NAME IS</span>{" "}
              <span className=" bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
                RAFAEL RIBEIRO
              </span>
            </h1>
            <h1 className="sm:text-5xl lg:text-6xl text-4xl font-extrabold text-transparent text-[#FF9119] mt-1  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
              SOFTWARE DEVELOPER
            </h1>
          </div>{" "}
          <h2
            className="text-3xl  text-gray-400 font-bold"
            onClick={() => props.changeBackground("troll")}
          >
            <TypeWriterEffect
              textStyle={{
                color: "#9795a8",
                fontWeight: 500,
              }}
              startDelay={1000}
              cursorColor="transparent"
              multiText={[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Java",
                "Spring Boot",
              ]}
              multiTextDelay={1000}
              typeSpeed={50}
              multiTextLoop={true}
            />
          </h2>
        </div>
      </div>
      <div className="mockup-code w-[350px] hidden md:block bg-[#100f0f]">
        <pre data-prefix="$">
          <code>My Skills</code>
        </pre>
        <pre data-prefix=">" className="text-error">
          <code>React</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Next.js</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>Tailwind</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Express.js</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Java</code>
        </pre>
        <pre data-prefix=">" className="text-[#8f8fd6]">
          <code>Spring Boot</code>
        </pre>{" "}
        <pre data-prefix=">" className="text-secondary">
          <code>SQL</code>
        </pre>
        <pre data-prefix=">" className="text-[#27ea15]">
          <code>Python</code>
        </pre>
      </div>
    </div>
  );
};

export default Hero;
