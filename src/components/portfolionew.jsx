import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

// Importing images
import kodatiimage from "../assets/Kodati.png";
import valleyimage from "../assets/valley.jpg";
import sageimage from "../assets/sage-l.png";
import calorie from "../assets/calorie.png";
import scribeai from "../assets/2.png";
import touseeq from "../assets/tauseeq800.png";

const projects = [
  {
    id: 1,
    title: "Merchant & Vendor Management",
    description: "A comprehensive platform for managing merchant and vendor relationships with advanced features for tracking and optimization.",
    image: kodatiimage,
    website: "https://kodati-app.vercel.app/",
    github: null,
  },
  {
    id: 2,
    title: "Touseeq For Store Management",
    description: "AI-powered Store Managament Application Made with Next.js",
    image: touseeq,
    website: null,
    github: null,
  },
  {
    id: 3,
    title: "Scribe AI",
    description: "Shopify Email Automation Application with AI content Generation for enhanced customer engagement and automated marketing.",
    image: scribeai,
    website: null,
    github: null,
  },
  {
    id: 4,
    title: "Tenant & Property Management",
    description: "A full-featured property management system for handling tenant relationships, maintenance requests, and property listings.",
    image: valleyimage,
    website: "https://valleypeakpm.com/",
    github: null,
  },
  {
    id: 5,
    title: "Sage E-Commerce",
    description: "A complete e-commerce solution for a shoe store with full shopping functionality, cart management, and secure checkout.",
    image: sageimage,
    website: null,
    github: "https://github.com/overpowered9/Sage_Ecomm",
  },
  {
    id: 6,
    title: "Calorie Fitness Application",
    description: "Comprehensive fitness tracking application for monitoring calorie intake and exercise routines.",
    image: calorie,
    website: null,
    github: "https://github.com/overpowered9/CalorieQuest-main",
  }
];

export const PortfolioSteps = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  // Create refs for each project section
  const projectRefs = useRef([]);
  const [refCallback, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
    rootMargin: '-100px 0px -300px 0px'
  });

  // Initialize refs array
  useEffect(() => {
    projectRefs.current = Array(projects.length).fill().map((_, i) => projectRefs.current[i] || React.createRef());
  }, []);

  // Setup intersection observer for each ref
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -300px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            My <span className="text-black">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Explore my recent development projects and applications
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          <div className="lg:w-1/2 space-y-40 max-w-xl">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                ref={el => projectRefs.current[index] = { current: el }}
                className={`relative transition-all duration-500 ${
                  activeProject === index 
                    ? 'opacity-100' 
                    : 'opacity-50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                style={{
                  minHeight: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginBottom: index === projects.length - 1 ? '400px' : '0'
                }}
              >
                <div className="relative">
                  <div className={`absolute left-0 top-0 w-1 h-full rounded-full transition-all duration-500 ${
                    activeProject === index 
                      ? 'bg-black' 
                      : 'bg-gray-200'
                  }`} />
                  <div className="pl-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium ${
                        activeProject === index ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xl leading-relaxed max-w-[85%] font-light pl-14 mb-4">{project.description}</p>
                    
                    {/* Links */}
                    <div className="flex gap-4 pl-14">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 text-gray-700"
                        >
                          <Github className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 text-gray-700"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Visit Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:w-2/5">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden h-[500px] shadow-2xl relative bg-white">
                <AnimatePresence mode="wait">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="absolute inset-0 flex items-center justify-center p-8"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeProject === index ? 1 : 0,
                        scale: activeProject === index ? 1 : 1.05
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.7,
                        ease: "easeInOut"
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      // Scroll to the project section
                      projectRefs.current[index]?.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      activeProject === index ? "w-6 bg-black" : "bg-gray-300"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSteps;