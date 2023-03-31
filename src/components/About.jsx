import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-white py-16 px-4 flex items-center justify-center h-[100vh]"
    >
      <div className="max-w-[1340px] grid md:grid-cols-2 items-center">
        <img
          className="w-[500px] mx-auto my-4"
          src={
            "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg"
          }
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-indigo-600 py-4 w-full md:text-3xl text-xl">
            Hi, my name is Rafael, I'm a Software Developer and Computer Science
            Student.
          </h1>
          <p className="text-gray-900">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
