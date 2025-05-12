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
        <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center text-gray-900 leading-tighter mb-16 tracking-tighter">
          WE DO COOL THINGS THAT MATTER
        </h1>

        {/* Quote and Number Section */}
        <div className="flex flex-col md:flex-row justify-between items-start my-16 gap-10">
          {/* Quote Section */}
          <div className="relative pl-8 md:pl-12">
            <span className="absolute left-0 top-0 text-6xl font-serif text-blue-500 leading-none">&quot;</span>
            <p className="font-inter text-lg text-gray-700 max-w-lg">
             TechMasters India is a vibrant community of passionate developers and driven students. 
            
            </p>
          </div>

          {/* Number Section */}
          <div className="flex items-start gap-4">
            <span className="font-poppins text-7xl md:text-8xl font-black text-gray-900 leading-none">01</span>
            <div className="mt-6">
              <p className="font-inter text-lg text-gray-700">TechMasters For Once</p>
              <p className="font-inter text-lg text-gray-700">TechMasters For Everrr !</p>
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

        {/* Community Gallery - All images with consistent heights */}
        <div className='hidden sm:block'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 mt-6 md:mt-0 h-64 md:h-72">
              <Image
                src="/A1.png"
                alt="Teechmasters Community Algiers Community 1"
                className="w-full h-full object-cover"
                width={400}
                height={400}
                style={{ height: '100%' }}
              />
            </div>

            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 md:-mt-16 h-64 md:h-72">
              <Image
                src="/A2.png"
                alt="Teechmasters Community Algiers Community 2"
                className="w-full h-full object-cover"
                width={400}
                height={400}
                style={{ height: '100%' }}
              />
            </div>

            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 md:-mt-32 h-64 md:h-72">
              <Image
                src="/H1.png"
                alt="Teechmasters Community Algiers Community 3"
                className="w-full h-full object-cover"
                width={400}
                height={400}
                style={{ height: '100%' }}
              />
            </div>

            {/* Image 4 */}
            <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 md:-mt-16 h-64 md:h-72">
              <Image
                src="/H2.png"
                alt="Teechmasters Community Algiers Community 4"
                className="w-full h-full object-cover"
                width={400}
                height={400}
                style={{ height: '100%' }}
              />
            </div>

            {/* Image 5 */}
            <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 mt-6 md:mt-0 h-64 md:h-72">
              <Image
                src="/H3.png"
                alt="Teechmasters Community Algiers Community 5"
                className="w-full h-full object-cover"
                width={400}
                height={400}
                style={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;