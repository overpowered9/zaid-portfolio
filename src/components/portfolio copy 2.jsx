import kodatiimage from "../assets/Kodati.png";
import valleyimage from "../assets/valley.jpg";
import sageimage from "../assets/sage-l.png";
import car from "../assets/carrent.png";
import vlogo from "../assets/v-logo.png";
import calorie from "../assets/calorie.png";
import scribeai from "../assets/2.png";
import touseeq from "../assets/tauseeq800.png";
import React, { useState, useEffect, useRef } from "react";
import { ArrowUp, ArrowDown, Github, ExternalLink } from "lucide-react";

const PortfolioCarousel = () => {
  const projects = [
    {
      id: 1,
      title: "Merchant & Vendor Management",
      description:
        "A comprehensive platform for managing merchant and vendor relationships with advanced features for tracking and optimization.",
      image: kodatiimage,
      website: "https://kodati-app.vercel.app/",
      github: null,
    },
    {
      id: 2,
      title: "Shopify Email Automation Application",
      description:
        "AI-powered email automation solution for Shopify stores, featuring smart content generation and customer engagement tools.",
      image: touseeq,
      website: null,
      github: null,
    },
    {
      id: 3,
      title: "Scribe AI",
      description:
        "Shopify Email Automation Application with AI content Generation for enhanced customer engagement and automated marketing.",
      image: scribeai,
      website: null,
      github: null,
    },
    {
      id: 4,
      title: "Tenant & Property Management",
      description:
        "A full-featured property management system for handling tenant relationships, maintenance requests, and property listings.",
      image: valleyimage,
      website: "https://valleypeakpm.com/",
      github: null,
    },
    {
      id: 5,
      title: "Sage E-Commerce",
      description:
        "A complete e-commerce solution for a shoe store with full shopping functionality, cart management, and secure checkout.",
      image: sageimage,
      website: null,
      github: "https://github.com/overpowered9/Sage_Ecomm",
    },
    {
      id: 6,
      title: "Car Rental Landing Page",
      description:
        "Modern and responsive landing page for a car rental service with booking functionality and vehicle showcase.",
      image: car,
      website: "https://hybridcarparts.vercel.app/",
      github: null,
    },
    {
      id: 7,
      title: "Calorie Fitness Application",
      description:
        "Comprehensive fitness tracking application for monitoring calorie intake and exercise routines.",
      image: calorie,
      website: null,
      github: "https://github.com/overpowered9/CalorieQuest-main",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="font-mono text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl mb-12">
        Portfolio
      </h1>

      <div
        className="relative overflow-hidden rounded-xl shadow-xl bg-white max-w-3xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-row items-center p-6">
          {/* Image Section */}
          <div className="w-[200px] h-[200px] ">
            <div
              className="w-full h-full bg-center transition-all duration-1000 ease-in-out transform rounded-lg"
              style={{
                backgroundImage: `url(${projects[currentIndex].image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          {/* Content Section with 40px gap */}
          <div className="flex-1 pl-10">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">
                {projects[currentIndex].title}
              </h2>
              <p className="text-gray-600 text-sm">
                {projects[currentIndex].description}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                {projects[currentIndex].github && (
                  <a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                )}
                {projects[currentIndex].website && (
                  <a
                    href={projects[currentIndex].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation on right side */}
          <div className="flex flex-col gap-2 ml-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Previous project"
            >
              <ArrowUp className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Next project"
            >
              <ArrowDown className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Indicators at bottom */}
        <div className="flex justify-center gap-2 pb-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentIndex === index ? "w-6 bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
