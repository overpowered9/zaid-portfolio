import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Heliocare', logo: 'https://placehold.co/140x32/10263E/FFF?text=Heliocare' },
  { name: 'Neutrogena', logo: 'https://placehold.co/150x32/10263E/FFF?text=Neutrogena' },
  { name: 'Sente', logo: 'https://placehold.co/150x32/10263E/FFF?text=Sente' },
  { name: 'Bioderma', logo: 'https://placehold.co/164x32/10263E/FFF?text=Bioderma' },
  { name: 'PCA Skin', logo: 'https://placehold.co/164x32/10263E/FFF?text=PCA+Skin' },
];

export const BrandsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-900">Brands</span> Trusted By{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Derms
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Products and brands are vetted by Board Certified Dermatologists before being added to the platform.
          </p>
          <ul className="list-none space-y-4 text-left max-w-2xl mx-auto">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <p>Dermatologists on the advisory board or founding team</p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <p>Formulated by Dermatologists</p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <p>Have done clinical studies</p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <p>Operate as Science-first</p>
            </li>
          </ul>
        </motion.div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={brand.logo} alt={brand.name} className="h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};