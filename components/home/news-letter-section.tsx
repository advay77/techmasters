"use client"
import { Ripple } from "../magicui/ripple";
import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function NewsLetterSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative bg-gray-50" id="contact">
      {/* Background elements */}
      <Ripple className="overflow-hidden" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-300 opacity-15 blur-3xl"></div>
      </div>
      {/* Glass container - sized to content */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl py-16 px-8 rounded-3xl bg-white bg-opacity-60 backdrop-blur-sm border border-gray-100 shadow-xl"></div> */}

      <div className="relative z-10 w-full max-w-3xl px-4 text-center bg-white py-16 px-8 rounded-3xl opacity-70 backdrop-blur-sm border border-gray-100 shadow-xl">
        
        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-semibold text-gray-800 mb-16">
          Get In Touch With Us
        </h2>
        
        {/* Email Link */}
        <div className="inline-flex items-center">
          <FiArrowRight className="text-gray-700 mr-3 transform rotate-[-45deg]" size={24} />
          <a 
            href="mailto:techmasterscommunity@gmail.com" 
            className="text-gray-800 text-lg sm:text-3xl hover:text-gray-600 transition-colors border-b border-gray-400 pb-1"
          >
            techmasterscommunity@gmail.com
          </a>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-16">
          <a 
            href="https://www.linkedin.com/company/techmasters-community/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 shadow-sm">
              <FaLinkedin size={24} className="text-black-700" />
            </div>
          </a>
          <a 
            href="https://www.instagram.com/techmasters.india/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 shadow-sm">
              <FaInstagram size={24} className="text-black-600" />
            </div>
          </a>
          <a 
            href="https://x.com/TechMastersorg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 shadow-sm">
              <FaTwitter size={24} className="text-black-500" />
            </div>
          </a>
           <a 
            href="https://chat.whatsapp.com/CF1eoEPRcDt6wzqvlkPbTk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 shadow-sm">
              <FaWhatsapp size={24} className="text-black-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}