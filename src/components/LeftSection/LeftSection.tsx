import React from 'react';
import Header from '../Header/Header';
import Navigation from '../NavigationBar/Navigation';
import SocialLinks from '../SocialLinks';
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
      <Navigation sections={navigationSections} />
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default LeftSection;
