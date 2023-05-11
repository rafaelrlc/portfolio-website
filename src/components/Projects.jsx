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
      project_link={item.project_link}
    ></Card>
  ));

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        id="projects"
        className="bg-gray-900 items-center justify-center  px-8 max-w-[1340px]"
      >
        {" "}
        <div className="py-16 mx-auto flex items-start justify-center flex-col h-full">
          <h1 className="font-bold text-4xl text-white ml-5">
            <TypeWriterEffect
              startDelay={0}
              cursorColor="transparent"
              multiText={["My Projects"]}
              multiTextDelay={1000}
              typeSpeed={50}
              len
            />
          </h1>

          <div className="mt-14 w-full xl:mx-auto grid lg:grid-cols-3 gap-10">
            {projetos}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
