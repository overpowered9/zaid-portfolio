import React from 'react';
import { Menu, X } from 'lucide-react';
import curebridgeGif from '../assets/CureBridge.gif';
  
interface NavbarProps {
  scrollPosition: number;
  setIsLoginOpen: (isOpen: boolean) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

export const Navbar = ({ scrollPosition, setIsLoginOpen, setIsMenuOpen, isMenuOpen }: NavbarProps) => {
  return (
    <nav className={`w-full z-50 transition-all duration-300 ${scrollPosition > 100 ? 'bg-[#10263E]/70 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={curebridgeGif} 
            alt="CureBridge Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-19 xl:h-20 w-auto transition-all duration-300"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button 
            className="text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[#10263E] transition-all"
            onClick={() => window.location.href = '/search'}
          >
            For Patients
          </button>
          <button 
            className="text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-[#10263E] transition-all"
            onClick={() => setIsLoginOpen(true)}
          >
            Sign in
          </button>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}; 