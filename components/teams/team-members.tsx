'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

const team = [
  {
    name: 'Aaradhy Gaur',
    role: 'Co-Founder',
    img: '/aaradhy.png',
    linkedin: 'http://www.linkedin.com/in/aaradhygaur',
  },
  {
    name: 'Tanish S.Pareek',
    role: 'Co-Founder',
    img: '/tanish.png',
    linkedin: 'http://www.linkedin.com/in/tanish-sunita-pareek',
  },
  {
    name: 'Aryan Thacker',
    role: 'Tech-Lead',
    img: '/aryan bhaiya.png',
    linkedin: 'https://www.linkedin.com/in/aryan-thacker/',
  },
  {
    name: 'Rashmi Arya',
    role: 'Social Media Lead',
    img: '/rashmi.png',
    linkedin:
      'https://www.linkedin.com/in/rashmi-arya-369bb1285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    name: 'Deependra Singh',
    role: 'Content-Lead',
    img: '/ola.png',
    linkedin: 'https://www.linkedin.com/in/kur-deependra-singh',
  },
  {
    name: 'Palak Kumari',
    role: 'Marketing Lead',
    img: '/palak.png',
    linkedin:
      'https://www.linkedin.com/in/palak-kumari-b855a521b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Nishtha Bhura',
    role: 'PR Lead',
    img: '/nistha.png',
    linkedin:
      'https://www.linkedin.com/in/nistha-bhura-67aa54257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Shashank Jangid',
    role: 'Design Lead',
    img: '/shashank.png',
    linkedin:
      'https://www.linkedin.com/in/shashank-jangid?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Advay Anand',
    role: 'Tech-Team',
    img: '/advay.png',
    linkedin: 'https://www.linkedin.com/in/advay-anand-a89024277/',
  },
  {
    name: 'Divyansh Goel ',
    role: 'Tech-Team',
    img: '/mahak.png',
    linkedin: 'https://www.linkedin.com/in/divyansh-goel-535522314/',
  },
  {
    name: 'Poorva Gupta',
    role: 'Tech-Team',
    img: '/poorva.png',
    linkedin: 'https://www.linkedin.com/in/poorva-gupta-934a25222/',
  },
  {
    name: 'Vishakha Pathak',
    role: 'Social-Media Team',
    img: '/vishakha.png',
    linkedin: 'https://www.linkedin.com/in/nikhilbakshi',
  },
  {
    name: 'Shubhika Jain',
    role: 'Social-Media Team',
    img: '/shubhika.png',
    linkedin: 'https://www.linkedin.com/in/deepanshi-sharma',
  },
  {
    name: 'Aarna Bhardwaj',
    role: 'PR and Content-Team',
    img: '/aarna.png',
    linkedin: 'https://www.linkedin.com/in/meghaverma',
  },
  {
    name: 'Satyam Singh',
    role: 'Content-Team',
    img: '/satyam.png',
    linkedin: 'http://linkedin.com/in/satyam-singh-108486300',
  },
  {
    name: 'Aditi Singh',
    role: 'Content-Team',
    img: '/aditi.png',
    linkedin: 'https://www.linkedin.com/in/aditi-singh-13686b24a',
  },
  {
    name: 'Ujjwal Singh',
    role: 'PR and Marketing Team',
    img: '/ujjwal.png',
    linkedin: 'https://www.linkedin.com/in/ujjwal-agarwal-67b6a0323',
  },
  {
    name: 'Kritika Sharma',
    role: 'Design Team',
    img: '/kritika.png',
    linkedin: 'https://www.linkedin.com/in/kritika-sharma-400b1930a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },

  {
    name: 'Sanskar Chaturvedi',
    role: 'Design Team',
    img: '/sanskar.png',
    linkedin: 'https://www.linkedin.com/in/sanskar-chaturvedi-4a558024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

const TeamGridBento = () => {
  return (
    <div className="py-20 px-4 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-14">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-between border border-gray-200 aspect-square group relative"
          >
            <div className="relative w-full h-2/3 overflow-hidden flex items-center justify-center">
           
              <div className="absolute inset-0 bg-[#d34141] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

             
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="object-contain z-10 relative transition duration-500 ease-in-out"
              />
            </div>

            
            <div className="text-center p-4 h-1/3 flex flex-col justify-center z-30 relative">
              <div className="font-semibold text-lg flex items-center justify-center gap-2">
                <span>{member.name}</span>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="text-[#0077b5] text-base hover:text-red-600 transition" />
                </Link>
              </div>
              <div className="text-sm">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGridBento;
