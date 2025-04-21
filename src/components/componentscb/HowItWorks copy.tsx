import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    title: 'Select Products',
    description: 'Products and brands are vetted by Board Certified Dermatologists before being added to the platform',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Products at discounted prices',
    description: 'Dermatologists recommend products specific to their patients (at manufacturer negotiated discounts)',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Easy Share Link',
    description: 'Patients receive an email or text with personalized product plan',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Fulfillment',
    description: 'Products shipped directly to the patient',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000'
  }
];

export const HowItWorks2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Create refs and inView states for each step
  const stepRefs = steps.map(() => useInView({
    threshold: 0.5,
    triggerOnce: false,
    rootMargin: '-100px 0px -300px 0px'
  }));

  // Update active step based on which section is in view
  useEffect(() => {
    const inViewIndex = stepRefs.findIndex(([_, inView]) => inView);
    if (inViewIndex !== -1) {
      setActiveStep(inViewIndex);
    }
  }, [stepRefs]);

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
            How the<br />
            Skinstore <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">works?</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            A new type of retail vertical for brands and patients
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          <div className="lg:w-1/2 space-y-40 max-w-xl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={stepRefs[index][0]}
                className={`relative transition-all duration-500 ${
                  activeStep === index 
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
                  marginBottom: index === steps.length - 1 ? '400px' : '0'
                }}
              >
                <div className="relative">
                  <div className={`absolute left-0 top-0 w-1 h-full rounded-full transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-b from-blue-500 to-purple-500' 
                      : 'bg-gray-200'
                  }`} />
                  <div className="pl-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium ${
                        activeStep === index ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xl leading-relaxed max-w-[70%] font-light pl-14">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:w-2/5">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden h-[500px] shadow-2xl relative">
                <AnimatePresence mode="wait">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.image}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeStep === index ? 1 : 0,
                        scale: activeStep === index ? 1 : 1.05
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.7,
                        ease: "easeInOut"
                      }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};