import { Project, Skill, Experience, Education, Certification, Article } from './types';

export const PROJECTS: Project[] = [];

export const SKILLS: Skill[] = [
  { name: 'Pentesting', level: 95, category: 'OFFENSIVE' },
  { name: 'Cryptography', level: 88, category: 'DEFENSIVE' },
  { name: 'Reverse Eng.', level: 82, category: 'OFFENSIVE' },
  { name: 'Network Sec', level: 90, category: 'INFRASTRUCTURE' },
  { name: 'Malware Anal.', level: 75, category: 'DEFENSIVE' },
  { name: 'Cloud Arch.', level: 85, category: 'INFRASTRUCTURE' },
];

export const EXPERIENCE: Experience[] = [];

export const EDUCATION: Education[] = [];

export const CERTIFICATIONS: Certification[] = [];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Bypassing ASLR in Modern Kernels',
    summary: 'A deep dive into heap spraying techniques to circumvent address space layout randomization in Linux 5.x.',
    date: 'Oct 12, 2023',
    readTime: '8 min read',
    tags: ['Exploit Dev', 'Kernel', 'Linux'],
    link: '#'
  },
  {
    id: 'a2',
    title: 'The Future of Quantum Decryption',
    summary: 'Analyzing the impact of Shor\'s algorithm on RSA-2048 and post-quantum cryptographic standards.',
    date: 'Sep 05, 2023',
    readTime: '12 min read',
    tags: ['Cryptography', 'Quantum', 'Math'],
    link: '#'
  },
  {
    id: 'a3',
    title: 'Social Engineering in the AI Era',
    summary: 'How deepfakes and LLMs are revolutionizing phishing campaigns and voice cloning attacks.',
    date: 'Aug 20, 2023',
    readTime: '6 min read',
    tags: ['Social Eng', 'AI', 'Security'],
    link: '#'
  }
];