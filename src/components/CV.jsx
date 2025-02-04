import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    id: "summary",
    title: "Summary",
    content: `Dynamic and result-oriented Full Stack Developer skilled in TypeScript, React, Next.js, 
    Tailwind CSS, Node.js, Express.js, and various databases including MongoDB, MySQL, Microsoft SQL, 
    and PostgreSQL. Experienced in leveraging modern web technologies, with growing expertise in 
    machine learning and artificial intelligence.`,
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div>
        <h3 className="font-semibold">Bachelors in Computer Science</h3>
        <p>Comsats University Islamabad</p>
        <p className="mt-2">
          <span className="font-medium">Relevant Coursework:</span> Mobile App
          Development, Web Development, User Interface Design, Advanced
          JavaScript, Front-End Frameworks, Database Management, Software
          Engineering Concepts, Data Communication Networks, Data Structures and
          Algorithms, Operating Systems, ICS.
        </p>
      </div>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">
            Full Stack Web and Mobile Application Developer
          </h3>
          <p className="text-gray-600">Freelance | JAN 2024 - Current</p>
          <ul className="list-disc ml-4 mt-2">
            <li>Tawseeq Application GCC using Next.js and Tailwind</li>
            <li>Automobile Website Using Next.js and Tailwind</li>
            <li>
              Scribe AI, An email and Content automation tool for Shopify using
              MERN
            </li>
            <li>Health Care Mobile Application Using Flutter</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Web Application Developer</h3>
          <p className="text-gray-600">
            Kodati Riyadh, KSA | Sep 2023 - Jan 2024
          </p>
          <ul className="list-disc ml-4 mt-2">
            <li>
              Automated Trade of goods for Merchants, Sellers, and Sub Sellers
              Through Web Application using Next.js
            </li>
            <li>
              Effectively managed transactions, products, and user data using
              MySQL
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Technical Skills</h3>
          <p>
            React, Next.js, Tailwind CSS, BootStrap, Express, Node.js, MongoDB,
            SQL DBs, Flutter
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Soft Skills</h3>
          <p>Collaboration, Problem-Solving, Communication, Adaptability</p>
        </div>
      </div>
    ),
  },
  {
    id: "projects",
    title: "Projects",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Caption Forge</h3>
          <p>
            Flutter Application that generates captions on videos using OpenAI's
            API
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Hadith View</h3>
          <p>Flutter Based Mobile Application to view Hadith's from an API</p>
        </div>
        <div>
          <h3 className="font-semibold">ECOM Store</h3>
          <p>
            Used EJS, MongoDB, Node, Express to Build an e-commerce web
            application
          </p>
        </div>
      </div>
    ),
  },
];

const InteractiveCV = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
    if (isScrolling) return;

    const delta = e.deltaY;
    if (delta > 0 && activeSection < sections.length - 1) {
      setIsScrolling(true);
      setActiveSection((prev) => prev + 1);
    } else if (delta < 0 && activeSection > 0) {
      setIsScrolling(true);
      setActiveSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
      return () => container.removeEventListener("wheel", handleScroll);
    }
  }, [isScrolling]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-white relative overflow-hidden"
    >
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`cursor-pointer transition-all duration-300 ease-in-out
              ${
                index === activeSection
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }
              h-2 rounded-full`}
            onClick={() => setActiveSection(index)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 h-full">
        <div className="relative h-full">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`absolute w-full transition-all duration-1000 ease-in-out
                ${
                  index === activeSection
                    ? "opacity-100 translate-y-0"
                    : index < activeSection
                    ? "opacity-0 -translate-y-full"
                    : "opacity-0 translate-y-full"
                }`}
            >
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              <div className="prose max-w-none">{section.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {activeSection < sections.length - 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default InteractiveCV;
