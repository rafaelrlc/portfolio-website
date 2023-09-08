import React from "react";

const PopSelectors = (props) => {
  console.log(props.tip);
  return (
    <div>
      <a
        className="dark:bg-gray-700 bg-gray-500 p-2 rounded-3xl text-white tooltip"
        target="_blank"
        href="https://linkedin.com/in/rafaelribeirolc"
      >
        {props.icon}
      </a>
    </div>
  );
};

export default PopSelectors;
