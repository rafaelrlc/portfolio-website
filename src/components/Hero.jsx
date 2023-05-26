import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = (props) => {
  return (
    <div
      id="home"
      className="min-h-lg h-screen flex md:justify-start lg:justify-center justify-center lg:ml-3 items-center py-16 text-white text-center md:text-start "
    >
      <div className="flex items-center md:mx-10 mx-7 gap-10 max-w-[1540px]">
        <div>
          <div className="group transition-all duration-300 ease-in-out py-2 hover:cursor-pointer flex flex-col md:items-start items-center gap-3">
            <div className="flex lg:flex-col flex-col-reverse ">
              <h1
                className="sm:text-6xl text-5xl leading-none font-bold bg-left-bottom"
                onClick={() => props.changeBackground("among")}
              >
                <span className="hidden md:inline">HI, MY NAME IS</span>{" "}
                <span className="hover:text-[#44FFF7]  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
                  RAFAEL RIBEIRO
                </span>
              </h1>
              <h1 className="sm:text-5xl lg:text-6xl text-4xl font-extrabold text-transparent text-[#FF9119] mt-1  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
                SOFTWARE DEVELOPER
              </h1>
            </div>

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
                typeSpeed={60}
                multiTextLoop={true}
              />
            </h2>
          </div>
        </div>
        <div
          className="hidden lg:block "
          style={{
            height: 433,
            maxHeight: "100vh",
            width: 600,
            maxWidth: "100vw",
          }}
        >
          {/* <ReactTerminal
            themes={{
              "my-custom-theme": {
                themeBGColor: "#101111",
                themeToolbarColor: "#101111",
                themeColor: "#ffffff",
                themePromptColor: "#ffffff",
              },
            }}
            theme="my-custom-theme"
            prompt={">>> Hi."}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
