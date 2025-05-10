// components/AboutSection.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from next/image

export const AboutSection: React.FC = () => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center w-full sm:gap-16 bg-[#fafafa] py-20`}>
      <div className="p-2 md:flex-1 flex flex-col items-center sm:items-end justify-center md:gap-4 gap-2">
        <div className="flex gap-2 md:gap-4">
          <Image className="w-40 h-44 md:w-60 md:h-64 rounded-[20px] object-cover" src="/C9.png" alt="Android Logo" width={240} height={256} />
          <Image className="w-40 h-40 md:w-60 md:h-50 rounded-[20px] md:mt-12 mt-6 object-cover" src="/C5.png" alt="Android Logo" width={240} height={200} />
        </div>
        <div className="flex gap-2 md:gap-4">
          <Image className="w-40 h-40 md:w-60 md:h-50 rounded-[20px] object-cover" src="/C2.png" alt="Android Logo" width={240} height={200} />
          <Image className="w-40 h-44 md:w-60 md:h-64 rounded-[20px] object-cover" src="/C4.png" alt="Android Logo" width={240} height={256} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:items-start p-4 w-full h-full md:flex-1">
        <div className="p-4">
          <h3 className="text-[26px] smmin:text-[26px] sm:text-[26px] md:text-6xl font-bold text-gray-900">
            About Tech Masters
          </h3>
          <p className="text-[14px] xl:text-[16px] mt-3 leading-6 md:w-[40rem] text-gray-700">

            TechMasters India is a registered non-profit based in the Delhi-Jaipur region, recognized by the Government of India (MIME) under the Society Registration Act. Our mission is to bridge the gap between students and the tech industry by offering hands-on learning through workshops, hackathons, and mentorship. We empower students with real-world technical skills, keeping them ahead in the fast-paced tech world. Our work is supported by leading academic institutions.
          </p>
          <div className="flex gap-4 sm:gap-2 mt-6 items-center ">
            <div className="flex flex-col justify-center items-center">
              <div className="flex mt-6">
                <Image className="border-2 border-white rounded-full h-12 w-12 object-cover bg-yellow-800" src="/rashmi.png" alt="" width={56} height={56} />
                <Image className="border-2 border-white rounded-full h-12 w-12 -ml-2 object-cover bg-yellow-800" src="/shubhika.png" alt="" width={56} height={56} />
                <Image className="border-2 border-white rounded-full h-12 w-12 -ml-2 object-cover bg-yellow-800" src="/nistha.png" alt="" width={56} height={56} />
              </div>
            </div>
            <p className="mt-3 text-sm sm:text-lg font-medium text-gray-700">3000+ members in the community</p>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="hover:cursor-pointer hover:bg-gray-900 py-2 px-8 bg-black text-white rounded-lg">
              Join Us
            </button>
            <button className="hover:cursor-pointer py-2 px-8 border-2 border-black text-black rounded-lg">
              Check more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
