export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'envelope',
  },
]; 