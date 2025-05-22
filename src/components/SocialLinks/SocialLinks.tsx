import React from 'react';
import SocialIcon from '../SocialIcons/SocialIcons';
import { SocialLink } from '../../data/socialLinks';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className={styles.socialSection}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.socialLink}
        >
          <SocialIcon icon={link.icon} className={styles.socialIcon} />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 