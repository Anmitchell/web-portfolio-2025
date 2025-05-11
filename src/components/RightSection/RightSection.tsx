import React from 'react';
import { About } from '../../components';
import Experience from '../Experience/Experience';
import Projects from '../Proj/Projects';
import Footer from '../Footer/Footer';
import { initialProjects, additionalProjects } from '../../data/projects';
import { experiences } from '../../data/experiences';
import { aboutData } from '../../data/about';

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
