import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#10263E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            AIRE Health
          </h2>
          <p className="text-lg mb-8">
            It takes $0 and 15 minutes to setup your AIRE Skinstore!<br />
            Start scaling your office with zero inventory or logistical challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-[#10263E] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Register as a physician
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#10263E] transition-all">
              Find a Physician
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">AIRE Health</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Shipping & Refunds</a>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-8">
            Note- All brands featured are vetted by Board-Certified Dermatologists before being added to the platform.
            Brands are able to provide clinical studies or scientific education around products during and after the
            vetting process. All baseline discounts are negotiated directly with manufacturers and all products are
            independently selected by the Dermatologists based on what they believe is appropriate.
          </p>
        </div>
      </div>
    </footer>
  );
};