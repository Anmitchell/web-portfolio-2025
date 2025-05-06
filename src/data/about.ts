export interface Education {
  degree: string;
  school: string;
  years: string;
}

export interface AboutData {
  bio: string;
  skills: string[];
  education: Education;
  interests: string;
}

export const aboutData: AboutData = {
  bio: 'I am a passionate software engineer with a strong focus on creating efficient and user-friendly applications. My journey in technology began with a deep curiosity about how things work, which led me to pursue a career in software development.',
  skills: [
    'Frontend Development: React, TypeScript, HTML5, CSS3',
    'Backend Development: Node.js, Python, Java',
    'Database: SQL, MongoDB, PostgreSQL',
    'DevOps: Docker, AWS, CI/CD',
    'Version Control: Git, GitHub',
  ],
  education: {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    years: '2018-2022',
  },
  interests: "When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, and participating in hackathons. I'm also passionate about teaching and mentoring aspiring developers.",
}; 