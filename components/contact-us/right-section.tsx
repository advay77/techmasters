// components/RightSection.tsx
import React from 'react';

const RightSection: React.FC = () => {
  return (
    <div className="relative h-40 w-64">
      <div className="relative flex justify-center">
        {/* T Letter */}
        <div className="absolute" style={{ top: '10px', left: '0px' }}>
          <div className="text-8xl font-bold" style={{ color: '#4285F4' }}>
            T
          </div>
          <div className="w-1 h-12 bg-gray-400 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>
        </div>

        {/* M Letter */}
        <div className="absolute" style={{ top: '0px', left: '70px' }}>
          <div className="text-8xl font-bold" style={{ color: '#0F9D58' }}>
            M
          </div>
          <div className="w-1 h-4 bg-gray-400 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>
        </div>

        {/* C Letter */}
        <div className="absolute" style={{ top: '20px', left: '140px' }}>
          <div className="text-8xl font-bold" style={{ color: '#DB4437' }}>
            C
          </div>
          <div className="w-1 h-16 bg-gray-400 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
