import Header from "../components/header";
import Intro from "../components/intro/intro";
import StatView from "../components/stats";

import ContactUS from "../components/Contactus";
import { useState } from "react";
import { useEffect } from "react";

import Technologies2 from "../components/Technologies copy";
import AnimatedImage2 from "../components/animated_/animatedimage2";
import PortfolioCarousel from "../components/portfolio copy 2";
import AnimatedTechnologies from "../components/Technologies";
import InteractiveCV from "../components/CV";
function HomePage() {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("server is on");
  return (
    <>
      <div className=" bg-white ">
        <Header></Header>
        <div className="bottom-0 animate__animated animate__fadeInUp animate__slow ml-0 h-[88vh] flex flex-col justify-evenly items-center sm:flex-row sm:gap-0  sm:overflow-hidden sm:items-start  md:mt-[50px]">
          <Intro></Intro>
          <AnimatedImage2></AnimatedImage2>
        </div>
      </div>

      <div id="portfolio">
        <PortfolioCarousel />
      </div>

      <div id="Technologies">
        <Technologies2></Technologies2>
      </div>
      <div className="flex flex-col align-middle justify-center w-[100%] pl-[10%] pr-[10%] sm:flex-row ">
        {/* {isScreenSmall ? <AnimatedAttrSC /> : <AnimatedAttr />} */}
        <StatView />
      </div>
      {/* <InteractiveCV /> */}

      <div id="contact" className="pt-7">
        <ContactUS></ContactUS>
      </div>
    </>
  );
}

export default HomePage;
