// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Head>
        <title>Organization Stats Dashboard</title>
        <meta name="description" content="Organization statistics dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StatsDashboard />
    </div>
  );
};

// Stats Dashboard Component
interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  textColor?: string;
  size?: 'default' | 'medium' | 'small';
  showAvatar?: boolean;
  width?: string;
}

const StatsDashboard: React.FC = () => {
  // Internal StatCard component
  const StatCard: React.FC<StatCardProps> = ({
    value,
    label,
    bgColor,
    textColor = 'text-white',
    size = 'default',
    showAvatar = false,
    width = 'w-full',
  }) => {
    return (
      <div 
        className={`
          rounded-lg overflow-hidden shadow-lg p-4 ${bgColor} ${textColor} ${width}
          ${size === 'medium' ? 'h-20 sm:h-24' : 'h-28 sm:h-32'}
          flex flex-col justify-center
        `}
      >
        {showAvatar && (
          <div className="flex justify-end mb-2">
            <div className="h-6 w-12 sm:h-8 sm:w-16 rounded-full overflow-hidden bg-gray-100 bg-opacity-30">
              {/* This would be replaced with actual avatar images */}
            </div>
          </div>
        )}
        
        <div className="flex flex-col">
          <span className="text-3xl sm:text-4xl font-bold">{value}</span>
          <span className="text-xs sm:text-sm mt-1">{label}</span>
        </div>
      </div>
    );
  };

  // Stats data
  const stats: StatCardProps[] = [
    {
      value: '306+',
      label: 'Signed In',
      bgColor: 'bg-emerald-500',
      textColor: 'text-white',
      showAvatar: true,
    },
    {
      value: '4',
      label: 'Years Of Innovating',
      bgColor: 'bg-amber-400',
      textColor: 'text-black',
      size: 'medium',
    },
    {
      value: '230',
      label: 'Current Members',
      bgColor: 'bg-red-400',
      textColor: 'text-white',
    },
    {
      value: '22',
      label: 'Events & Workshops',
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
      size: 'medium',
    },
    {
      value: '03',
      label: 'SOLCHA Attempts',
      bgColor: 'bg-emerald-500',
      textColor: 'text-white',
      size: 'medium',
    },
  ];

  return (
    <div className="max-w-3xl w-full relative px-4 sm:px-0">
      {/* Google icon */}
      <div className="absolute left-2 sm:left-12 top-44 z-10">
        <div className="rounded-lg overflow-hidden shadow-lg h-10 w-10 sm:h-12 sm:w-12 bg-white flex items-center justify-center">
          <Image 
            src="/google-logo.png" 
            alt="Google" 
            width={24} 
            height={24}
            className="sm:w-6 sm:h-6" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          {/* Left side cards */}
          <StatCard {...stats[0]} />
          <StatCard {...stats[1]} />
        </div>
        
        <div className="flex flex-col gap-4">
          {/* Right side content */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/workshop-image.jpg" 
              alt="Workshop" 
              width={500} 
              height={300} 
              className="w-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <StatCard {...stats[2]} />
            <StatCard {...stats[3]} />
          </div>
        </div>

        {/* Bottom image with stat card */}
        <div className="col-span-1 sm:col-span-2 relative mt-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/team-photo.jpg" 
              alt="Team" 
              width={800} 
              height={400} 
              className="w-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-4 right-4">
            <div className="w-32 sm:w-40">
              <StatCard {...stats[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;