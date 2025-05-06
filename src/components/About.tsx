import React from 'react';

interface AboutProps {
  bio: string;
  skills: string[];
  education: {
    degree: string;
    school: string;
    years: string;
  };
  interests: string;
}

const About: React.FC<AboutProps> = ({ bio, skills, education, interests }) => {
  return (
    <section id='about'>
      <h2>About</h2>
      <p>{bio}</p>

      <h3>Technical Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Education</h3>
      <p>
        {education.degree}
        <br />
        {education.school}, {education.years}
      </p>

      <h3>Interests</h3>
      <p>{interests}</p>
    </section>
  );
};

export default About; 