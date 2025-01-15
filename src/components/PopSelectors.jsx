import React from "react";

const PopSelectors = (props) => {
  return (
    <div>
      <a
        className="dark:bg-gray-700 bg-gray-500 p-2 rounded-3xl text-white tooltip"
        target="_blank"
        href={props.link} rel="noreferrer"
      >
        {props.icon}
      </a>
    </div>
  );
};

export default PopSelectors;
