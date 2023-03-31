import React from "react";
import AboutImage from "../assets/laptop.jpg";
const About = () => {
  return (
    <div id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] grid md:grid-cols-2 items-center">
        <img src={AboutImage} />
        <div>
          <p>
            My name is Rafael, Im a Software Developer and Computer Science
            Student
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
