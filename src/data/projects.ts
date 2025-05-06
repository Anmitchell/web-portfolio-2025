export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  skills: string[];
}

export const initialProjects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    imageUrl: 'https://placehold.co/600x400/2e7d32/ffffff?text=E-Commerce',
    features: [
      'Implemented real-time inventory management',
      'Developed secure payment processing system',
      'Created responsive user interface',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application built with React and Firebase. Allows teams to organize, track, and manage projects effectively.',
    imageUrl: 'https://placehold.co/600x400/1b5e20/ffffff?text=Task+App',
    features: [
      'Real-time updates using Firebase',
      'Drag-and-drop task organization',
      'User role management',
    ],
    skills: ['React', 'Firebase', 'Material-UI', 'Redux', 'Firestore'],
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application that provides detailed forecasts and historical weather data. Built with React and integrated with multiple weather APIs.',
    imageUrl: 'https://placehold.co/600x400/2e7d32/ffffff?text=Weather',
    features: [
      'Interactive weather maps',
      'Location-based weather alerts',
      'Historical weather data analysis',
    ],
    skills: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API', 'Tailwind CSS'],
  },
];

export const additionalProjects: Project[] = [
  {
    title: 'Social Media Analytics',
    description: 'A data visualization platform for social media metrics and trends.',
    imageUrl: 'https://placehold.co/600x400/1b5e20/ffffff?text=Analytics',
    features: [
      'Real-time data processing',
      'Interactive charts and graphs',
      'Custom reporting dashboard',
    ],
    skills: ['React', 'D3.js', 'Twitter API', 'Python', 'Pandas'],
  },
  {
    title: 'Fitness Tracker',
    description:
      'A mobile-first fitness tracking application with workout planning and progress monitoring.',
    imageUrl: 'https://placehold.co/600x400/2e7d32/ffffff?text=Fitness',
    features: [
      'Custom workout routines',
      'Progress tracking and analytics',
      'Social sharing features',
    ],
    skills: ['React Native', 'Firebase', 'Redux', 'HealthKit API', 'Google Fit API'],
  },
]; 