import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  greeting: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ greeting, title, subtitle }) => {
  return (
    <div className={styles.hero}>
      <p className={styles.heroGreeting}>{greeting}</p>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
    </div>
  );
};

export default Hero; 