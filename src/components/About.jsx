import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-center justify-center">
      <div className="max-w-[1340px]">
        <div className="flex md:flex-row flex-col items-center">
          <img
            className="w-[500px] mx-auto my-4"
            src={
              "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg"
            }
          />
          <div className="flex flex-col justify-center items-center mr-2">
            <h1 className="font-bold text-indigo-500 py-4 w-full md:text-3xl text-xl">
              Hi, my name is Rafael, I'm a Software Developer
            </h1>
            <p className="text-gray-300 text-2xl">
              My name is Rafael, I'm 19 years old and I'm currently on 4th
              semester of Computer Science at the Federal University of Alagoas
              (UFAL). I have experience with Python, React, Next.js, Express,
              Java (Spring Boot), MySQL, HTML/CSS, and Tailwind. I work as a
              volunteer at MobiUfal developing applications with React and
              TypeScript. In general, my interest is software development, from
              front to backend and I am motivated to learn new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
