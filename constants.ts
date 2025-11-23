import { Project, Skill, Experience, Education, Certification, Article } from './types';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Zero-Day Hunter',
    description: 'Automated vulnerability scanner designed to detect unidentified exploits in legacy architecture. Deployed on 50+ enterprise nodes for real-time threat analysis.',
    techStack: ['Python', 'Rust', 'Kali Linux'],
    securityLevel: 'TOP SECRET'
  },
  {
    id: 'p2',
    title: 'Phantom Proxy',
    description: 'Decentralized VPN solution utilizing blockchain for immutable routing tables. Ensures total anonymity and zero-log policy enforcement.',
    techStack: ['Solidity', 'Node.js', 'Web3.js'],
    securityLevel: 'DECLASSIFIED'
  },
  {
    id: 'p3',
    title: 'Neural Breach',
    description: 'AI-driven penetration testing tool that simulates human-like attack vectors using LSTM networks to predict firewall weaknesses.',
    techStack: ['TensorFlow', 'PyTorch', 'C++'],
    securityLevel: 'RESTRICTED'
  },
  {
    id: 'p4',
    title: 'Cryptic Vault',
    description: 'Quantum-resistant file encryption system for ultra-sensitive data storage. Features multi-sig authentication and biometric locking.',
    techStack: ['Assembly', 'C', 'OpenSSL'],
    securityLevel: 'DECLASSIFIED'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Pentesting', level: 95, category: 'OFFENSIVE' },
  { name: 'Cryptography', level: 88, category: 'DEFENSIVE' },
  { name: 'Reverse Eng.', level: 82, category: 'OFFENSIVE' },
  { name: 'Network Sec', level: 90, category: 'INFRASTRUCTURE' },
  { name: 'Malware Anal.', level: 75, category: 'DEFENSIVE' },
  { name: 'Cloud Arch.', level: 85, category: 'INFRASTRUCTURE' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Senior Security Engineer',
    company: 'Cyberdyne Systems',
    period: '2022 - Present',
    description: 'Lead architect for autonomous defense grids. Patched critical kernel vulnerabilities preventing global outages.',
    tech: ['C++', 'Kubernetes', 'eBPF']
  },
  {
    id: 'e2',
    role: 'Red Team Operator',
    company: 'BlackMesh Ops',
    period: '2020 - 2022',
    description: 'Executed advanced persistent threat simulations for Fortune 500 clients. 100% success rate in breaching air-gapped systems.',
    tech: ['Cobalt Strike', 'Python', 'Bash']
  },
  {
    id: 'e3',
    role: 'Security Analyst',
    company: 'NetCorp Defense',
    period: '2018 - 2020',
    description: 'Monitored SIEM logs and conducted forensic analysis on intrusion attempts.',
    tech: ['Splunk', 'Wireshark', 'Snort']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'M.S. Cybersecurity',
    school: 'MIT (Institute of Tech)',
    year: '2018',
    honors: 'Summa Cum Laude'
  },
  {
    id: 'edu2',
    degree: 'B.S. Computer Science',
    school: 'Stanford University',
    year: '2016',
    honors: 'Dean\'s List'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    name: 'OSCP (Offensive Security Certified Professional)',
    issuer: 'OffSec',
    date: '2019'
  },
  {
    id: 'c2',
    name: 'CISSP',
    issuer: 'ISC²',
    date: '2021'
  },
  {
    id: 'c3',
    name: 'CEH (Certified Ethical Hacker)',
    issuer: 'EC-Council',
    date: '2017'
  }
];

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