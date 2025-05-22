import React from 'react';
import styles from './Experience.module.css';

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
      <div className={styles['experience-header']}>
        <h2>Experience</h2>
      </div>
      <div className={styles.experience}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.experienceContent}>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.duration}>{exp.duration}</p>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className={styles.experienceSkills}>
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className={styles.experienceSkill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 