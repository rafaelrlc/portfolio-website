import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-white pt-16 px-4 flex items-center justify-center h-[100vh]"
    >
      <div className="max-w-[1240px] grid md:grid-cols-2 items-center">
        <img
          className="w-[500px] mx-auto my-4"
          src={
            "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg"
          }
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-indigo-600 py-4 w-full md:text-3xl text-xl">
            Hi, my name is Rafael, I'm a Software Developer
          </h1>
          <p className="text-gray-900 font-bold mb-2">
            My name is Rafael, I'm 19 years old and I'm currently in my 4th
            semester of Computer Science at the Federal University of Alagoas
            (UFAL). I have experience with React, Next.js, Python, Java (Spring
            Boot), MySQL, HTML/CSS, and Tailwind/Styled Components.
          </p>

          <p className="text-gray-900 font-bold">
            I work as a volunteer at MobiUfal developing applications with React
            and TypeScript. In general, my interest is software development,
            from front to backend and I am motivated to learn new things
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
