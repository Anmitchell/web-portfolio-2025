import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className='experience-item'>
          <h3>{exp.title}</h3>
          <p className='company'>{exp.company}</p>
          <p className='duration'>{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
          <ul className='experience-skills'>
            {exp.skills.map((skill, idx) => (
              <li key={idx} className='experience-skill'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience; 