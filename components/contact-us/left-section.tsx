// components/LeftSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

const LeftSection: React.FC = () => {
  const socialLinks: SocialMediaLink[] = [
    {
      platform: 'Telegram',
      url: 'https://t.me/gdscgroup',
      icon: 'https://res.cloudinary.com/dlauialhp/image/upload/v1746172369/Telegram_logo.svg_ejzbcb.webp',
      color: '#0088cc'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/gdsc',
      icon: 'https://res.cloudinary.com/dlauialhp/image/upload/v1746172369/Logo_of_Twitter.svg_jgvsht.png',
      color: '#1DA1F2'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/gdsc',
      icon: 'https://res.cloudinary.com/dlauialhp/image/upload/v1746172368/linkedin-logo-linkedin-icon-transparent-free-png_yan8xz.webp',
      color: '#0A66C2'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/gdsc',
      icon: 'https://res.cloudinary.com/dlauialhp/image/upload/v1746172373/Instagram_logo_2022.svg_wxw48p.png',
      color: '#E4405F'
    }
  ];

  return (
    <div className="mb-10 md:mb-0">
      <h2 className="text-4xl font-light text-gray-500 mb-8">Find us on</h2>
      <div className="space-y-6">
        {socialLinks.map((link) => (
          <Link
            href={link.url}
            key={link.platform}
            className="flex items-center group hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-6 h-6 mr-4">
              <Image src={link.icon} alt={link.platform} width={24} height={24} />
            </div>
            <span className="text-gray-500 group-hover:text-gray-700 transition-colors">
              {link.platform}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
