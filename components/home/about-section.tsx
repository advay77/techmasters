// components/AboutSection.tsx
import React from 'react';
import { Poppins, Inter } from 'next/font/google';
import Image from 'next/image'; // Import Image from next/image

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

export const AboutSection: React.FC = () => {
  return (
    <div className={`flex flex-col justify-between items-center md:grid md:grid-cols-10 h-screen w-full ${poppins.variable} ${inter.variable}`}>
      <div className="p-2 md:col-span-5 flex flex-col items-center justify-center md:gap-4 gap-2">
        <div className="flex gap-2 md:gap-4">
          <Image className="w-40 h-44 md:w-60 md:h-64 rounded-[20px]" src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2015October/img_20151013_120824_101315034639.jpg" alt="Android Logo" width={240} height={256} />
          <Image className="w-40 h-40 md:w-60 md:h-50 rounded-[20px] md:mt-12 mt-6" src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2015October/img_20151013_120824_101315034639.jpg" alt="Android Logo" width={240} height={200} />
        </div>
        <div className="flex gap-2 md:gap-4">
          <Image className="w-40 h-40 md:w-60 md:h-50 rounded-[20px]" src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2015October/img_20151013_120824_101315034639.jpg" alt="Android Logo" width={240} height={200} />
          <Image className="w-40 h-44 md:w-60 md:h-64 rounded-[20px]" src="https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2015October/img_20151013_120824_101315034639.jpg" alt="Android Logo" width={240} height={256} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4 w-full h-full md:col-span-4">
        <div className="p-4">
          <h3 className="text-[26px] smmin:text-[26px] sm:text-[26px] md:text-4xl lg:text-[44px] xl:text-[44px] font-extrabold text-gray-900">
            ABOUT TECHMASTERS
          </h3>
          <p className="text-[14px] xl:text-[16px] mt-3 leading-6 md:w-[40rem] text-gray-700">
            Tech Masters Algiers is a local community situated at the Higher National School of Computer Science (ESI ex INI), Algiers, Algeria. It is part of a large global developers community: Tech Masters Community which is an inclusive environment where everyone interested in tech is welcome to join. Our community gathers motivated young students and professional developers who share the same interest in Google technologies. It started from the simple status of GTUG (Google Technology User Group) in 2011 to become today one of the most active GDGs in the MENA region. GDG Algiers Chapter hosts various technical events and activities for technology enthusiasts and dedicated developers, aiming to provide knowledge about different tech topics and access to the latest Google technologies.
          </p>
          <div className="md:flex md:gap-2 mt-6">
            <div className="flex flex-col justify-center items-center">
              <div className="flex mt-6">
                <Image className="border-2 border-white rounded-full h-14 w-14" src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" width={56} height={56} />
                <Image className="border-2 border-white rounded-full h-14 w-14" src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" width={56} height={56} />
                <Image className="border-2 border-white rounded-full h-14 w-14" src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" width={56} height={56} />
              </div>
            </div>
            <p className="mt-3 text-lg font-medium text-gray-700">+1k members in the community</p>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="hover:cursor-pointer hover:bg-blue-600 py-2 px-8 bg-blue-500 text-lg font-bold text-white rounded-lg">
              Join Us
            </button>
            <button className="hover:cursor-pointer py-2 px-8 border border-blue-500 text-lg font-bold text-blue-500 rounded-lg">
              Check more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
