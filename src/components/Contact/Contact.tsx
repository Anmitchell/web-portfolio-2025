import React from 'react';
import styles from './Contact.module.css';

interface ContactProps {
  title: string;
  description: string;
  email: string;
}

const Contact: React.FC<ContactProps> = ({ title, description, email }) => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contactTitle}>{title}</h2>
      <p className={styles.contactDescription}>{description}</p>
      <a
        href={`mailto:${email}`}
        className={styles.contactButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default Contact; 