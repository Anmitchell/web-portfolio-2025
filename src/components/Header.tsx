import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <div className='header-section'>
      <div className='header'>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Header; 