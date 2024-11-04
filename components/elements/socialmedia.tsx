import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';


interface Platform {
  perfil: string;
  icon: string;
}

interface SocialMediaIconsProps {
  platforms: Platform[];
}

const SocialMedia: React.FC<SocialMediaIconsProps> = ({ platforms }) => {
  const iconMap: Record<Platform['icon'], React.ReactNode> = {
    instagram: <FontAwesomeIcon icon={faInstagram} />,
    tiktok: <FontAwesomeIcon icon={faTiktok} />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} />,
  };

  const linkMap: Record<Platform['icon'], React.ReactNode> = {
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
    linkedin: 'https://linkedin.com/in/',
  };

  return (
    <div className="flex justify-center space-x-4 mb-5 text-2xl">
      {platforms.map(({ perfil, icon }, index) => (
        <a
          key={index}
          href={`${linkMap[icon]}${perfil}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconMap[icon]}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
