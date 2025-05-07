import React from 'react';
import { socialIcons } from '../../data/socialIcons';

interface SocialIconProps {
  icon: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, className = 'social-icon' }) => {
  const iconData = socialIcons[icon];
  
  if (!iconData) {
    return null;
  }

  return (
    <svg 
      className={className} 
      viewBox={iconData.viewBox} 
      fill='currentColor'
      aria-label={iconData.name}
    >
      <path d={iconData.path} />
    </svg>
  );
};

export default SocialIcon; 