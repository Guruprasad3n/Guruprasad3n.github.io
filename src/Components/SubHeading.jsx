import React from "react";
import Typewriter from "typewriter-effect";

function Title() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Problem Solver",
          "Full Stack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}
export default Title