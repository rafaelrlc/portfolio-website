import React from "react";
import { RiShareBoxFill } from "react-icons/ri";

const Card = (props) => {
  return (
    <div className="md:max-w-md flex flex-col shadow-lg rounded-lg bg-[#1b1b1c]">
      <a
        className="flex-shrink-0 relative rounded-lg"
        href={props.url}
        target="_blank"
      >
        <img
          className="h-64 sm:h-80 max-h-96 w-full object-cover rounded-t-lg hover:cursor-pointer"
          src={props.image}
          alt="project"
          style={{ filter: "brightness(100%)" }} // Set default brightness to 100%
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(70%)"; // Apply 70% brightness on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(100%)"; // Reset brightness on hover out
          }}
        />
        <a className="absolute top-2 right-2">
          <RiShareBoxFill color="gray" size={22} />
        </a>
      </a>

      <div className="p-7">
        <div className="flex items-center flex-col text-center">
          <h5
            className="mb-2 text-2xl font-bold tracking-tight text-white hover:cursor-pointer"
            onClick={() => console.log("iooioioi")}
          >
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-400">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
