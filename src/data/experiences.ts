export interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: '2022 - Present',
    responsibilities: [
      'Lead development team in implementing new features and maintaining existing systems',
      'Architected and implemented microservices architecture',
      'Improved system performance by 40% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'TypeScript'],
  },
  {
    title: 'Software Engineer',
    company: 'Digital Innovations',
    duration: '2020 - 2022',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented automated testing and CI/CD pipelines',
      'Collaborated with cross-functional teams to deliver features',
      'Participated in agile development processes',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'Jest', 'Jenkins', 'Git'],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Tech',
    duration: '2018 - 2020',
    responsibilities: [
      'Assisted in developing and debugging web applications',
      'Worked on frontend and backend development tasks',
      'Participated in code reviews and team meetings',
      'Learned and implemented best practices in software development',
    ],
    skills: ['JavaScript', 'HTML/CSS', 'Python', 'SQL', 'Git'],
  },
]; 