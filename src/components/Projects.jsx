import React from "react";
import Card from "./Card";
import TypeWriterEffect from "react-typewriter-effect";
import { projects } from "../utils/projects";

const Projects = () => {
  const projetos = projects.map((item) => (
    <Card
      image={item.image}
      title={item.title}
      description={item.description}
    ></Card>
  ));

  return (
    <div id="projects" className="bg-gray-600">
      {" "}
      <div className="bg-gray-600 py-16 max-w-[1240px] mx-auto flex items-start justify-center flex-col h-full gap-20">
        <h1 className="bg-gray-600 text-center font-bold text-6xl text-white ml-5">
          <TypeWriterEffect
            startDelay={0}
            cursorColor="transparent"
            multiText={["Projects"]}
            multiTextDelay={1000}
            typeSpeed={50}
            len
          />
        </h1>
        <div className="w-full bg-gray-600 justify-center h-full grid lg:grid-cols-3 md:p-0 p-5 items-center gap-10">
          {projetos}
        </div>
      </div>
    </div>
  );
};

export default Projects;
