import React from 'react';
import { Header, NavigationBar, SocialLinks } from '../index';
import { socialLinks } from '../../data/socialLinks';

const LeftSection = () => {
  const navigationSections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <div className='left-section'>
      <Header name='Avary Mitchell' title='Software Engineer' />
      <NavigationBar sections={navigationSections} />
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default LeftSection;
