// components/ContactUs.tsx
import LeftSection from '@/components/contact-us/left-section';
import RightSection from '@/components/contact-us/right-section';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="w-full h-screen py-16 bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 max-w-7xl mx-auto">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default ContactUs;
