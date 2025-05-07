import { Ripple } from "../magicui/ripple";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export const NewsLetterSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative border-y border-gray-200 bg-white">
      <Ripple className="overflow-hidden" />
      <div className="py-30 px-30 rounded-[10px] border border-2 bg-white z-10 text-center">
        <h3 className="text-4xl font-medium text-blue-500">Stay Updated</h3>
        <p className="mt-4 text-md text-gray-400 max-w-lg">
          Stay connected to stay updated about the upcoming events and the latest news
        </p>
        <button className="mt-4 rounded-full px-8 py-1 bg-gray-200 text-sm font-md">
          Join us
        </button>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://www.linkedin.com/company/techmasters-community/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-black hover:text-blue-700 transition" />
          </a>
          <a href="https://www.instagram.com/techmasters.india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==https://instagram.com/TechMastersOrg" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="text-black hover:text-pink-600 transition" />
          </a>
          <a href="https://x.com/TechMastersOrg" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="text-black hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};
