import React from 'react';

interface NavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='nav-section'>
      <nav className='navigation'>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navigation; 