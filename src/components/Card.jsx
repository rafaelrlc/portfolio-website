import React, { useState } from "react";
import { RiShareBoxFill } from "react-icons/ri";

const Card = (props) => {
  const [change, setChange] = useState(true);

  return (
    <div className="md:max-w-md flex flex-col dark:shadow-lg  rounded-lg dark:bg-[#1b1b1c] bg-[#eeeeee] ease-linear transition-all duration-250">
      <a
        className="flex-shrink-0 relative rounded-lg "
        target="_blank"
        href={props.url}
      >
        <img
          className="h-64 sm:h-80 max-h-96 w-full object-cover rounded-t-lg hover:cursor-pointer"
          src={props.image}
          alt="project"
          style={{ filter: "brightness(100%)" }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = "brightness(70%)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = "brightness(100%)";
          }}
        />
        <span className="absolute top-2 right-2">
          <RiShareBoxFill color="gray" size={22} />
        </span>
      </a>
      <div
        className={`p-7 ${
          change ? "block" : "relative"
        } ease-linear transition-all duration-250 dark:bg-[#1b1b1c] bg-[#eeeeee] bottom-16 rounded-b-lg hover:cursor-pointer`}
        onClick={() => setChange(!change)}
      >
        <div className="flex items-center flex-col text-center">
          <h5
            className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-gray-800 hover:cursor-pointer"
            onClick={() => console.log("iooioioi")}
          >
            {props.title}
          </h5>
          <p className="mb-3 font-normal dark:text-gray-400 text-black">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
