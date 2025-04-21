import React from 'react';
import { motion } from 'framer-motion';

const treatments = [
  {
    title: 'Acne Treatment',
    description: 'Personalized treatment plans for clear, healthy skin',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Melasma Treatment',
    description: 'Advanced solutions for even skin tone',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
  }
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-32">
        {/* Text Content - Slides from top */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Your Trusted Partner in<br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Skincare Journey
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto"
          >
            Experience personalized dermatology care with expert-recommended products at exclusive prices
          </motion.p>
        </motion.div>

        {/* Treatment Frames - Slide from bottom */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.4 + (index * 0.2),
                ease: "easeOut"
              }}
              className="relative w-full md:w-1/2 max-w-md"
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-3">{treatment.title}</h3>
                  <p className="text-lg font-light opacity-90">{treatment.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Additional Content or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 