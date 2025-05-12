import styles from './Home.module.css';
import { LeftSection, RightSection } from '@/components';

export default function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='main-content'>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}
