import { useState } from 'react';
import './App.css';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className='app'>
      <div className='container'>
        <div className='left-section'>
          <div className='header-section'>
            <div className='header'>
              <h1>Avary Mitchell</h1>
              <h2>Software Engineer</h2>
            </div>
          </div>

          <div className='nav-section'>
            <nav className='navigation'>
              <button onClick={() => {
                const rightSection = document.querySelector('.right-section');
                rightSection?.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                About
              </button>
              <button onClick={() => {
                const experienceSection = document.getElementById('experience') as HTMLElement;
                const rightSection = document.querySelector('.right-section') as HTMLElement;
                if (experienceSection && rightSection) {
                  const offset = experienceSection.offsetTop - rightSection.offsetTop - 96; // 6rem = 96px
                  rightSection.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }}>
                Experience
              </button>
              <button onClick={() => {
                const projectsSection = document.getElementById('projects') as HTMLElement;
                const rightSection = document.querySelector('.right-section') as HTMLElement;
                if (projectsSection && rightSection) {
                  const offset = projectsSection.offsetTop - rightSection.offsetTop - 96; // 6rem = 96px
                  rightSection.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }}>
                Projects
              </button>
            </nav>
          </div>

          <div className='social-section'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className='right-section'>
          <div className='content'>
            <section id="about">
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
            </section>

            <section id="experience">
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
            </section>

            <section id="projects">
              <div className="projects-header">
                <h2>Featured Projects</h2>
                <button 
                  className="view-all-btn"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                >
                  {showAllProjects ? 'Show Less' : 'View All Projects'}
                </button>
              </div>
              
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

              {showAllProjects && (
                <>
                  <div className='project'>
                    <h3>Social Media Analytics</h3>
                    <p>A data visualization platform for social media metrics and trends.</p>
                    <ul>
                      <li>Real-time data processing</li>
                      <li>Interactive charts and graphs</li>
                      <li>Custom reporting dashboard</li>
                    </ul>
                  </div>

                  <div className='project'>
                    <h3>Fitness Tracker</h3>
                    <p>A mobile-first fitness tracking application with workout planning and progress monitoring.</p>
                    <ul>
                      <li>Custom workout routines</li>
                      <li>Progress tracking and analytics</li>
                      <li>Social sharing features</li>
                    </ul>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
