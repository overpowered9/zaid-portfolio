import React from "react";
import profileImage from "../assets/image.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen max-h-screen bg-[#f5f5f5] relative px-8 py-6 overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center relative z-20 mb-12 md:mb-20">
        <div className="text-2xl font-bold text-[#333]">
          ZV
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#skills" className="text-[#555] hover:text-black transition-colors">Skills</a>
          <a href="#projects" className="text-[#555] hover:text-black transition-colors">Projects</a>
          <a href="#services" className="text-[#555] hover:text-black transition-colors">Services</a>
          <a href="#experience" className="text-[#555] hover:text-black transition-colors">Experience</a>
          <a href="#resume" className="text-[#555] hover:text-black transition-colors">Resume</a>
          <a 
            href="#contact" 
            className="px-6 py-2 bg-[#333] text-white rounded-lg hover:bg-black transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="relative">
          <h1 className="text-5xl sm:text-7xl md:text-[11rem] lg:font-bold text-[#333] leading-none tracking-tighter mb-16 md:mb-0">
            FULL STACK
          </h1>
        </div>

        {/* Split Software Engineer Text */}
        <div className="relative mt-32 sm:mt-40 md:mt-0">
          <div className="flex justify-between items-center px-4 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#555] font-light">
            <p className="text-lg sm:text-xl md:text-2xl text-[#555] mt-6 font-light">
            Adaptive & Detail Oriented.
          </p>
              Software
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#555] font-light">
            <p className="text-lg sm:text-xl md:text-2xl text-[#555] mt-6 font-light">
            AI & ML 
          </p>
              Engineer
            </h2>
          </div>
          
          
        </div>

        {/* Bottom Info */}
        <div className="flex justify-between mt-16 md:mt-32 px-4 md:px-12">
          <div>
            <h3 className="text-2xl md:text-4xl font-light text-[#333]">Bachelors</h3>
            <p className="text-xl md:text-2xl text-[#555] mt-2">Computer Science</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl font-light text-[#333]">Zaid</h3>
            <p className="text-xl md:text-2xl text-[#555] mt-2">Asghar Virk</p>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="absolute top-[62%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div 
          className="w-[200px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[400px] md:h-[500px] bg-center bg-contain bg-no-repeat transition-all duration-300"
          style={{
            backgroundImage: `url(${profileImage})`,
            mixBlendMode: 'multiply',
            filter: 'contrast(1.2) brightness(0.95)'
          }}>
        </div>
      </div>

      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#f5f5f5] opacity-40 z-10"></div>
    </div>
  );
};

export default HeroSection; 