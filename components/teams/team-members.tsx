'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

const team = [
  {
    name: 'Jay Parmani',
    role: 'Software Engineer @Apple',
    img: '/jay.jpg',
    linkedin: '#',
  },
  {
    name: 'Ujjwal Singh',
    role: 'Private Equity Analyst @Bain & Company',
    img: '/ujjwal.jpg',
    linkedin: '#',
  },
  {
    name: 'Aarushi Abrol',
    role: 'YTL @Airtel Digital',
    img: '/aarushi.jpg',
    linkedin: '#',
  },
  {
    name: 'Harsh Jain',
    role: 'Ex- Digital Technical Specialist Intern @IBM',
    img: '/harsh.jpg',
    linkedin: '#',
  },
  {
    name: 'Shreeya Chatterji',
    role: 'Role Placeholder',
    img: '/shreeya.jpg',
    linkedin: '#',
  },
  {
    name: 'Jayati Mishra',
    role: 'Role Placeholder',
    img: '/jayati.jpg',
    linkedin: '#',
  },
  {
    name: 'Nikhil Bakshi',
    role: 'Role Placeholder',
    img: '/nikhil.jpg',
    linkedin: '#',
  },
  {
    name: 'Deepanshi Sharma',
    role: 'Role Placeholder',
    img: '/deepanshi.jpg',
    linkedin: '#',
  },
];

const TeamGridBento = () => {
  return (
    <div className="py-20 px-4 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-14">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-between border border-gray-200 aspect-square group relative"
          >
            <div className="relative w-full h-2/3 overflow-hidden">
              {/* Red hover background from bottom */}
              <div className="absolute inset-0 bg-[#d34141] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10" />

              {/* Image */}
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover z-0 transition duration-500 ease-in-out group-hover:grayscale-0 grayscale"
              />

              {/* LinkedIn Overlay */}
              <Link
                href={member.linkedin}
                target="_blank"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
              >
                <div className="bg-white/30 border border-white/60 backdrop-blur-md p-3 rounded-full hover:bg-white/50 transition">
                  <FaLinkedinIn className="text-black text-xl" />
                </div>
              </Link>
            </div>

            {/* Text Content */}
            <div className="text-center p-4 h-1/3 flex flex-col justify-center z-30 relative">
              <div className="font-semibold text-lg">{member.name}</div>
              <div className="text-sm">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGridBento;
