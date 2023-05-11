import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-center justify-center">
      <div className="max-w-[1340px] mx-10 md:text-start text-center">
        <div className="flex md:flex-row flex-col items-center gap-10">
          <img
            className="w-[500px] mx-auto my-4"
            src={
              "https://cdn.discordapp.com/attachments/714891795129171983/1106359622031392778/Binary_code-pana.png"
            }
          />
          <div className="flex flex-col justify-center items-center mr-2">
            <h1 className="font-bold text-[#f3932d] py-4 w-full md:text-3xl text-2xl">
              Hi, my name is Rafael, I'm a Software Developer
            </h1>
            <p className="text-gray-300 md:text-2xl text-lg">
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
