import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  email: string;
  name: string;
}

const Footer: React.FC<FooterProps> = ({ email, name }) => {
  return (
    <footer className={styles.footer}>
      <button
        className={styles.contactBtn}
        onClick={() => (window.location.href = `mailto:${email}`)}
      >
        Contact Me
      </button>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 