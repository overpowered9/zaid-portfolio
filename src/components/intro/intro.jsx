import React from "react";
import githubimg from "../../assets/icons8-github.svg";
import linkedinimg from "../../assets/icons8-linkedin.svg";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <div className=" w-[100vw]  p-[5vw] sm:mt-12 sm:w-[60vw] overflow-hidden">
      <div className=" text-2xl text-[#5ea5b6] font-bold font-mono sm:text-3xl">
        <Typewriter
          cursor
          typeSpeed={100}
          cursorStyle="."
          cursorBlinking={false}
          words={["Zaid Asghar Virk"]}
        ></Typewriter>
        <br />

        <Typewriter
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          cursor
          cursorStyle="_"
          loop={100}
          words={["Full Stack Web Developer", "Mobile App Develepor"]}
        ></Typewriter>
      </div>
      <div className="flex flex-row pt-4  gap-3">
        <a
          href="https://github.com/overpowered9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="hover:scale-110 transition-transform duration-300"
            src={githubimg}
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zaid-asghar-virk-0b311b22b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="hover:scale-110 transition-transform duration-300"
            src={linkedinimg}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
