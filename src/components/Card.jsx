import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Card = (props) => {
  return (
    <div class="p-5 rounded-2xl sm:w-[360px] w-full bg-gray-800 h-full shadow-xl">
      <div class="p-3">
        <a>
          <h5 class="mb-4 text-2xl md:text-3xl font-bold tracking-tight text-white text-center">
            {props.title}
          </h5>
          <div className="relative w-full h-[230px] rounded mb-4">
            <img
              src={props.image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </a>
        <p class="mb-3 font-normal text-white">{props.description}</p>
        <a class="flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-indigo-700 hover:cursor-pointer">
          <div className="flex flex-auto items-center">
            <p className="w-full">Check on GitHub</p>
            <span>
              {" "}
              <AiFillGithub size={25}></AiFillGithub>
            </span>
          </div>

          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
