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
      url={item.url}
      key={item.id}
    ></Card>
  ));

  return (
    <div className="flex flex-col items-center justify-center py-12 ease-linear transition-all duration-200">
      <div
        id="projects"
        className="items-center justify-center mt-16 px-8 max-w-[1540px]"
      >
        {" "}
        <div className="py-16 mx-auto flex items-start justify-center flex-col h-full">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
            <TypeWriterEffect
              startDelay={0}
              cursorColor="transparent"
              multiText={["My Projects"]}
              multiTextDelay={1000}
              typeSpeed={50}
            />
          </h1>

          <div className="mt-14 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projetos}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
