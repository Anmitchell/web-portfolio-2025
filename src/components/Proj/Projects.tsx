import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  skills: string[];
}

interface ProjectsProps {
  initialProjects: Project[];
  additionalProjects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({
  initialProjects,
  additionalProjects,
}) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id='projects'>
      <div className='projects-header'>
        <h2>Projects</h2>
        <button
          className='view-all-btn'
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? 'Show Less' : 'View All Projects'}
        </button>
      </div>

      {initialProjects.map((project, index) => (
        <div key={index} className='project'>
          <div className='project-image'>
            <img src={project.imageUrl} alt={project.title} />
          </div>
          <div className='project-content'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <ul className='project-skills'>
              {project.skills.map((skill, idx) => (
                <li key={idx} className='project-skill'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {showAllProjects && (
        <>
          {additionalProjects.map((project, index) => (
            <div key={index} className='project'>
              <div className='project-image'>
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className='project-content'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <ul className='project-skills'>
                  {project.skills.map((skill, idx) => (
                    <li key={idx} className='project-skill'>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Projects; 