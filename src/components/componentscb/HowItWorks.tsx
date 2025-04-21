import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const [containerRef, inView] = useInView({
    threshold: 0.2,
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            How the<br />
            Skinstore <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">works?</span>
          </h2>
          <p className="text-xl text-gray-600">
            A new type of retail vertical for brands and patients
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="sticky top-24 space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 ${
                    activeStep === index ? 'bg-white shadow-lg' : 'opacity-50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              className="sticky top-24 rounded-xl overflow-hidden"
              style={{ y }}
            >
              <motion.img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-[600px] object-cover rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};