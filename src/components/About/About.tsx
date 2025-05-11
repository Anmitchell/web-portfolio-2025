import React from 'react';
import styles from './About.module.css';

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section id='about' className={styles.about}>
      <h2 className={styles.sectionTitle}>About</h2>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
