import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/image.png";

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    {
      title: "FULL STACK",
      subtitle: "Software Engineer",
      description: "Adaptive & Detail Oriented",
      image: profileImage
    },
    {
      title: "AI & ML",
      subtitle: "Engineer",
      description: "Innovative Solutions",
      image: profileImage
    },
    {
      title: "Bachelors",
      subtitle: "Computer Science",
      description: "Comsats University Islamabad",
      image: profileImage
    }
  ];

  const handleScroll = (e) => {
    e.preventDefault(); // Prevent default scroll behavior

    // Clear any existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set a new timeout to handle the scroll
    scrollTimeout.current = setTimeout(() => {
      const delta = e.deltaY;
      
      // Only allow section navigation if not on the last section
      if (activeSection < sections.length - 1) {
        if (delta > 0) {
          setActiveSection(prev => prev + 1);
        } else if (delta < 0 && activeSection > 0) {
          setActiveSection(prev => prev - 1);
        }
      } else if (activeSection === sections.length - 1 && delta < 0) {
        // Allow scrolling up on last section
        setActiveSection(prev => prev - 1);
      }
    }, 100); // Debounce time of 100ms
  };

  const handleDotClick = (index) => {
    setActiveSection(index);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#f5f5f5] relative overflow-hidden"
      onWheel={handleScroll}
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center relative z-20 p-4 md:p-8">
        <div className="text-2xl font-bold text-[#333]">ZV</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#skills" className="text-[#555] hover:text-[#111] transition-colors">Skills</a>
          <a href="#projects" className="text-[#555] hover:text-[#111] transition-colors">Projects</a>
          <a href="#services" className="text-[#555] hover:text-[#111] transition-colors">Services</a>
          <a href="#experience" className="text-[#555] hover:text-[#111] transition-colors">Experience</a>
          <a href="#resume" className="text-[#555] hover:text-[#111] transition-colors">Resume</a>
          <a 
            href="#contact" 
            className="px-6 py-2 bg-[#333] text-white rounded-lg hover:bg-[#111] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Navigation Dots - Both Mobile and Desktop */}
      <div className={`fixed ${isMobile ? 'right-4' : 'right-8'} top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-2`}>
        {sections.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === index ? "bg-[#111]" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-8"
          >
            {/* Image Frame */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="w-full h-full bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url(${sections[activeSection].image})`,
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.2) brightness(0.95)'
                  }}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h1
                className="text-5xl sm:text-7xl md:text-[11rem] font-bold text-[#333] leading-none tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {sections[activeSection].title}
              </motion.h1>
              
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#555] font-light">
                  {sections[activeSection].subtitle}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-[#555] mt-4 font-light">
                  {sections[activeSection].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Remove Background Overlay */}
      {/* <div className="absolute inset-0 bg-[#f5f5f5] opacity-40 z-10" /> */}
    </div>
  );
};

export default HeroSection; 