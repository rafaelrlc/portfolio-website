import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import TypedTerminal from "react-component-typed-terminal";
import { ReactTerminal } from "react-terminal";
const typedJsProps = {
  loop: false,
  typeSpeed: 40,
  showCursor: false,
};

const terminalData = [
  {
    command: "ls -a ./folder-1",
    results: ["file 1", "file 2", "file 3", "file 4"],
  },
  {
    command: "ls -a ./folder-2",
    results: ["file 1", "file 2", "file 3", "file 4"],
  },
];

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-lg h-screen flex gap-10 justify-center items-center px-7 py-16 text-white text-center md:text-start"
    >
      <div>
        {" "}
        <div className="group transition-all duration-300 ease-in-out py-2 hover:cursor-pointer flex flex-col md:items-start items-center gap-3">
          <h1 className="text-5xl md:text-6xl leading-none font-bold bg-left-bottom">
            HI, MY NAME IS RAFAEL RIBEIRO{" "}
            <h1 className="text-[#FF9119] mt-1 md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
              SOFTWARE DEVELOPER
            </h1>
          </h1>
          <p className="md:text-4xl text-3xl  text-gray-400 font-bold">
            <TypeWriterEffect
              textStyle={{
                color: "#9795a8",
                fontWeight: 500,
              }}
              startDelay={1000}
              cursorColor="#FF9119"
              multiText={[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Java",
                "Spring Boot",
              ]}
              multiTextDelay={1000}
              typeSpeed={60}
              multiTextLoop={true}
            />
          </p>
        </div>
      </div>
      <div
        className="hidden md:block"
        style={{
          height: 433,
          maxHeight: "100vh",
          width: 600,
          maxWidth: "100vw",
        }}
      >
        <ReactTerminal
          themes={{
            "my-custom-theme": {
              themeBGColor: "#222326",
              themeToolbarColor: "#222326",
              themeColor: "#ffffff",
              themePromptColor: "#ffffff",
            },
          }}
          theme="my-custom-theme"
          prompt={">>> Hi."}
        />
      </div>
    </div>
  );
};

export default Hero;
