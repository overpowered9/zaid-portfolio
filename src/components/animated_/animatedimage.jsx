import React from "react";
import "animate.css/animate.min.css";
import dpi from "../../assets/image.png";
const AnimatedImage = () => {
  return (
    <div
      className="flex flex-shrink-0 aspect-auto left-0 
         sm:flex-none relative overflow-hidden  transform transition duration-500 ease-in-out hover:scale-105 md:contents"
    >
      <img
        alt="pic"
        src={dpi}
        className="bottom-0 animate__animated animate__fadeInUp animate__slow sm:w-[300px] "
      />
    </div>
  );
};

export default AnimatedImage;
