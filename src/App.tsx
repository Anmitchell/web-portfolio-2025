import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className='app'>
      <div className='container'>
        <div className='left-section'>
          <div className='header'>
            <h1>Avary Mitchell</h1>
            <h2>Software Engineer</h2>
          </div>
          <nav className='navigation'>
            <button 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
            <button 
              className={activeSection === 'experience' ? 'active' : ''} 
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
          </nav>
        </div>
        <div className='right-section'>
          {activeSection === 'about' && (
            <div className='content'>
              <h2>About Me</h2>
              <p>I am a passionate software engineer with a strong focus on creating efficient and user-friendly applications. My journey in technology began with a deep curiosity about how things work, which led me to pursue a career in software development.</p>
              
              <h3>Technical Skills</h3>
              <ul>
                <li>Frontend Development: React, TypeScript, HTML5, CSS3</li>
                <li>Backend Development: Node.js, Python, Java</li>
                <li>Database: SQL, MongoDB, PostgreSQL</li>
                <li>DevOps: Docker, AWS, CI/CD</li>
                <li>Version Control: Git, GitHub</li>
              </ul>

              <h3>Education</h3>
              <p>Bachelor of Science in Computer Science<br />
              University of Technology, 2018-2022</p>

              <h3>Interests</h3>
              <p>When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, and participating in hackathons. I'm also passionate about teaching and mentoring aspiring developers.</p>
            </div>
          )}
          {activeSection === 'projects' && (
            <div className='content'>
              <h2>Featured Projects</h2>
              
              <div className='project'>
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.</p>
                <ul>
                  <li>Implemented real-time inventory management</li>
                  <li>Developed secure payment processing system</li>
                  <li>Created responsive user interface</li>
                </ul>
              </div>

              <div className='project'>
                <h3>Task Management App</h3>
                <p>A collaborative task management application built with React and Firebase. Allows teams to organize, track, and manage projects effectively.</p>
                <ul>
                  <li>Real-time updates using Firebase</li>
                  <li>Drag-and-drop task organization</li>
                  <li>User role management</li>
                </ul>
              </div>

              <div className='project'>
                <h3>Weather Dashboard</h3>
                <p>A weather application that provides detailed forecasts and historical weather data. Built with React and integrated with multiple weather APIs.</p>
                <ul>
                  <li>Interactive weather maps</li>
                  <li>Location-based weather alerts</li>
                  <li>Historical weather data analysis</li>
                </ul>
              </div>
            </div>
          )}
          {activeSection === 'experience' && (
            <div className='content'>
              <h2>Professional Experience</h2>
              
              <div className='experience-item'>
                <h3>Senior Software Engineer</h3>
                <p className='company'>Tech Solutions Inc.</p>
                <p className='duration'>2022 - Present</p>
                <ul>
                  <li>Lead development team in implementing new features and maintaining existing systems</li>
                  <li>Architected and implemented microservices architecture</li>
                  <li>Improved system performance by 40% through optimization</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div className='experience-item'>
                <h3>Software Engineer</h3>
                <p className='company'>Digital Innovations</p>
                <p className='duration'>2020 - 2022</p>
                <ul>
                  <li>Developed and maintained web applications using React and Node.js</li>
                  <li>Implemented automated testing and CI/CD pipelines</li>
                  <li>Collaborated with cross-functional teams to deliver features</li>
                  <li>Participated in agile development processes</li>
                </ul>
              </div>

              <div className='experience-item'>
                <h3>Junior Developer</h3>
                <p className='company'>StartUp Tech</p>
                <p className='duration'>2018 - 2020</p>
                <ul>
                  <li>Assisted in developing and debugging web applications</li>
                  <li>Worked on frontend and backend development tasks</li>
                  <li>Participated in code reviews and team meetings</li>
                  <li>Learned and implemented best practices in software development</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
