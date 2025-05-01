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
      icon: '/icons/telegram.svg',
      color: '#0088cc'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/gdsc',
      icon: '/icons/twitter.svg',
      color: '#1DA1F2'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/gdsc',
      icon: '/icons/linkedin.svg',
      color: '#0A66C2'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/gdsc',
      icon: '/icons/instagram.svg',
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
