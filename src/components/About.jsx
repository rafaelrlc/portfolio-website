import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center mx-7 ease-linear transition-all duration-200"
    >
      <div className="max-w-[1360px] flex lg:flex-row flex-col items-center gap-10 lg:text-start text-center">
        <img
          className="w-[500px] mx-auto my-4"
          src={
            "https://cdn.discordapp.com/attachments/714891795129171983/1106359622031392778/Binary_code-pana.png"
          }
        />
        <div className="flex flex-col justify-center items-center mr-2">
          <h1 className=" py-4 w-full md:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-slate-100 to-orange-200">
            About me:
          </h1>
          <p className="dark:text-gray-200 text-gray-800 md:text-2xl text-lg">
            My name is Rafael Ribeiro, I'm 19 years old{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-300 dark:via-gray-500 dark:to-gray-200 from-gray-800 via-gray-500 to-gray-400">
              Computer Science{" "}
            </span>{" "}
            student at the Federal University of Alagoas{" "}
            <span>
              <a className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-600">
                (UFAL)
              </a>
            </span>
            . <br></br>I have experience with{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Python
            </span>
            ,{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              React
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Next.js
            </span>{" "}
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Express
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Java
            </span>{" "}
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Spring Boot
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              SQL
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              HTML/CSS
            </span>
            , and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              {" "}
              Tailwind
            </span>
            . <br></br>In general, my interest is software development, from
            front to backend and I am motivated to learn new things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
