import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Skinstore',
    description: 'Curate the exact products your patients need- increased compliance and discounted pricing for your patients.'
  },
  {
    title: 'Marketplace',
    description: 'Save on PPE, instruments, devices, internet/phone, and much more.'
  },
  {
    title: 'Analytics',
    description: 'All the data of an eCommerce platform at your fingertips.'
  },
  {
    title: 'AIRE EDU',
    description: 'Exclusive access to new product samples and research studies.'
  }
];

export const CardsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#116B8E] to-[#10263E] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-200">Built for</span> Dermatology{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Offices
            </span>
          </h2>
          <p className="text-xl">Scale your practice online, without increasing patients visits.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};