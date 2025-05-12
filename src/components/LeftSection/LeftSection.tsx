import { Header, NavigationBar, SocialLinks } from '../index';
import { socialLinks } from '../../data/socialLinks';
import styles from './LeftSection.module.css';
const LeftSection = () => {
  const navigationSections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <div className={styles['left-section']}>
      <Header name='Avary Mitchell' title='Software Engineer' />
      <NavigationBar sections={navigationSections} />
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default LeftSection;
