import React from 'react';
import SocialIcon from '../SocialIcons/SocialIcons';
import { SocialLink } from '../../data/socialLinks';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className='social-links'>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='social-link'
        >
          <SocialIcon icon={link.icon} />
          <span className='social-name'>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 