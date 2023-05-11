import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Card = (props) => {
  return (
    <div class="max-w-md flex flex-col  shadow-lg rounded-lg bg-[#1b1b1c] h-full ">
      <div
        className="flex flex-col rounded-t-lg shadow-lg overflow-hidden h-full hover:cursor-pointer"
        onClick={() => console.log("iooioioi")}
      >
        <div className="flex-shrink-0">
          {" "}
          <img
            class="h-64 sm:h-96 max-h-96 w-full object-cover pointer-events-none"
            src={props.image}
            alt=""
          />
        </div>
      </div>
      <div class="p-7">
        <div className="flex items-center flex-col text-center">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white hover:cursor-pointer"
            onClick={() => console.log("iooioioi")}
          >
            {props.title}
          </h5>
          <p class="mb-3 font-normal text-gray-400">{props.description}</p>
        </div>

        {/* <a
          href="#"
          class="inline-flex items-center gap-3 px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800"
        >
          Check on Github
          <AiFillGithub />
        </a> */}
      </div>
    </div>
  );
};

export default Card;
