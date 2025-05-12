import styles from './Home.module.css';
import { LeftSection, RightSection } from '@/components';

export default function Home() {
  return (
    <div className={styles['home']}>
      <div className={styles['container']}>
        <div className={styles['main-content']}>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}
