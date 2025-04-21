import React from 'react';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-20"
          poster="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
        >
          <source src="https://example.com/placeholder.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Empowering Dermatology
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Through Technology
          </span>
        </h1>
        <p className="text-white text-xl mb-12">
          A platform meant to serve Dermatologists and patients through Industry-negotiated discounts
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-[#10263E] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
            Register for AIRE
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#10263E] transition-all">
            Register as a resident physician
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <div className="flex -space-x-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=faces" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=faces" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
          </div>
          <p className="text-white ml-4">Trusted by 1000+ dermatologists</p>
        </div>
      </div>
    </div>
  );
}; 