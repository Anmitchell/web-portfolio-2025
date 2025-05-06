import React from 'react';
import About from './About/About';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import { initialProjects, additionalProjects } from '../data/projects';
import { experiences } from '../data/experiences';
import { aboutData } from '../data/about';

const RightSection = () => {
  return (
    <div className='right-section'>
      <div className='content'>
        <About {...aboutData} />
        <Experience experiences={experiences} />
        <Projects
          initialProjects={initialProjects}
          additionalProjects={additionalProjects}
        />
      </div>
      <Footer email='your.email@example.com' name='Avary Mitchell' />
    </div>
  );
};

export default RightSection; 