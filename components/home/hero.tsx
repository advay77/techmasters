// components/HeroSection.tsx
import Image from 'next/image';
import React from 'react';
import { Poppins, Inter } from 'next/font/google';

// Load Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const HeroSection: React.FC = () => {
  return (
    <section className={`relative w-full py-16 overflow-hidden ${poppins.variable} ${inter.variable}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-20 h-20 bg-blue-500 rounded-full"></div>
        <div className="absolute top-96 left-36 w-16 h-16 bg-red-500 rounded-full transform rotate-45"></div>
        <div className="absolute top-80 right-32 w-14 h-14 bg-green-500">
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-500">
            <polygon points="12,2 15.1,8.6 22.2,9.3 17.1,14.4 18.5,21.4 12,18 5.5,21.4 6.9,14.4 1.8,9.3 8.9,8.6" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Headline */}
        <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center text-gray-900 leading-tight mb-16">
          WE DO COOL THINGS THAT MATTER
        </h1>

        {/* Quote and Number Section */}
        <div className="flex flex-col md:flex-row justify-between items-start my-16 gap-10">
          {/* Quote Section */}
          <div className="relative pl-8 md:pl-12">
            <span className="absolute left-0 top-0 text-6xl font-serif text-blue-500 leading-none">"</span>
            <p className="font-inter text-lg text-gray-700 max-w-lg">
              Our community consists of passionate developers and motivated young students.
              Now, we are one of the most active GDGs in the MENA region.
            </p>
          </div>

          {/* Number Section */}
          <div className="flex items-start gap-4">
            <span className="font-poppins text-7xl md:text-8xl font-black text-gray-900 leading-none">01</span>
            <div className="mt-6">
              <p className="font-inter text-lg text-gray-700">GDG For Once</p>
              <p className="font-inter text-lg text-gray-700">GDG For Everrr !</p>
            </div>
          </div>
        </div>

        {/* Community Tag */}
        <div className="my-12">
          <span className="font-poppins text-2xl font-semibold inline-block relative text-gray-900">
            Community
            <span className="absolute left-0 bottom-0 w-full h-3 bg-yellow-400 -z-10 transform translate-y-1"></span>
          </span>
        </div>

        {/* Community Gallery - Manual layout for custom margins/sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 ">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 mt-6 md:mt-0">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
                alt="GDG Algiers Community 1"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 md:-mt-16">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
                alt="GDG Algiers Community 2"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 md:-mt-32">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070"
                alt="GDG Algiers Community 3"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Image 4 */}
          <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 md:-mt-16">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?q=80&w=2070"
                alt="GDG Algiers Community 4"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Image 5 */}
          <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 mt-6 md:mt-0">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070"
                alt="GDG Algiers Community 5"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
