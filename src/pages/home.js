import Header from "../components/header";
import Intro from "../components/intro/intro";
import StatView from "../components/stats";
import AnimatedAttr from "../components/animated_/animated_attributes";
import AnimatedAttrSC from "../components/animated_/animated_Scroll";
import ContactUS from "../components/Contactus";
import { useState } from "react";
import { useEffect } from "react";

import Technologies2 from "../components/Technologies copy";
import AnimatedImage2 from "../components/animated_/animatedimage2";
import PortfolioCarousel from "../components/portfolio copy 2";
import AnimatedTechnologies from "../components/Technologies";
import InteractiveCV from "../components/CV";
import HeroSection from "../components/HeroSection";
import PortfolioSteps from "../components/portfolionew";

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
      <HeroSection />

      <div id="portfolio">
        
        <PortfolioSteps/>
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
