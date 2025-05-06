import React from 'react';
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

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
