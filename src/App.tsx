import './App.css';
import { LeftSection, RightSection } from '@/components';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='main-content'>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
