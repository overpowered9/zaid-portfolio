import React from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  if (!isMenuOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-[#10263E] z-40 md:hidden">
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <button className="text-white px-6 py-2 rounded-full border border-white w-64">
          For Patients
        </button>
        <button className="text-white px-6 py-2 rounded-full border border-white w-64">
          Sign in
        </button>
      </div>
    </div>
  );
}; 