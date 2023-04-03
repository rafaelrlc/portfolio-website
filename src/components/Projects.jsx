import React from "react";
import Card from "./Card";
import TypeWriterEffect from "react-typewriter-effect";
const projects = [
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image:
      "https://raw.githubusercontent.com/rafaelrlc/portfolio-website/fd35951bf820b9658b98b1299eb51d5dd81593f1/src/assets/Coding-bro%20(1).svg",
    title: "P1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Projects = () => {
  const projetos = projects.map((item) => (
    <Card
      image={item.image}
      title={item.title}
      description={item.description}
    ></Card>
  ));

  return (
    <div id="projects" className="bg-white">
      {" "}
      <div className="bg-white py-6 max-w-[1540px] mx-auto text-center flex items-center flex-col h-[100%]">
        <h1 className="bg-white text-center font-bold text-6xl mb-10 text-indigo-700 ">
          <TypeWriterEffect
            startDelay={0}
            cursorColor="#3526c0"
            multiText={["PROJECTS"]}
            multiTextDelay={1000}
            typeSpeed={50}
          />
        </h1>
        <div className="w-full bg-white px-4 pb-16 justify-center h-full mx-auto grid lg:grid-cols-4 items-center gap-5">
          {projetos}
        </div>
      </div>
    </div>
  );
};

export default Projects;
