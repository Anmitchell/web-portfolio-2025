import React from 'react';

interface FooterProps {
  email: string;
  name: string;
}

const Footer: React.FC<FooterProps> = ({ email, name }) => {
  return (
    <footer className='footer'>
      <button
        className='contact-btn'
        onClick={() => (window.location.href = `mailto:${email}`)}
      >
        Contact Me
      </button>
      <p className='copyright'>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 