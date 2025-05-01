// components/TeamHeroSection.tsx
import React from 'react';
import Link from 'next/link';

const TeamHeroSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center bg-white">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 mb-2 text-sm md:text-base">About our members</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12">
          Team of GDSC Thapar
        </h1>
        <Link href="#team-members">
          <button 
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            MEET THE TEAM
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TeamHeroSection;