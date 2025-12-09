import { Project, Skill, Experience, Education, Certification, Article } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'atlas',
    title: 'Atlas Recon Lab',
    description: 'Red-team automation kit that fingerprints Moroccan fintech targets, maps attack surface, and simulates spear-phishing chains for blue-team training.',
    techStack: ['TypeScript', 'Go', 'Maltego'],
    securityLevel: 'RESTRICTED',
    link: '#'
  },
  {
    id: 'mosaic',
    title: 'Mosaic SOC Hardening',
    description: 'Playbook that codifies purple-team exercises for North African SOCs, complete with threat emulation scripts and dashboards.',
    techStack: ['Python', 'Sigma', 'Elastic'],
    securityLevel: 'DECLASSIFIED',
    link: '#'
  },
  {
    id: 'specter',
    title: 'SpecterX Visual Toolkit',
    description: 'Immersive reporting template blending glitch aesthetics with readable remediation data for executive briefings.',
    techStack: ['Figma', 'Three.js', 'React'],
    securityLevel: 'DECLASSIFIED',
    link: '#'
  },
  {
    id: 'oujda',
    title: 'Oujda Agency Portal',
    description: 'Agency-grade site for local creatives with live content blocks, bilingual support, and encrypted proposal channels.',
    techStack: ['Next.js', 'Tailwind', 'Supabase'],
    securityLevel: 'DECLASSIFIED',
    link: '#'
  },
  {
    id: 'ezra',
    title: 'EZRA Signal',
    description: 'Continuous scanning sensor built for Maghreb ISPs to surface misconfigured edge devices before adversaries do.',
    techStack: ['Rust', 'Kafka', 'Grafana'],
    securityLevel: 'TOP SECRET',
    link: '#'
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
    id: 'exp1',
    role: 'Web Pentester / Operator',
    company: 'Freelance (Global)',
    period: '2021  Present',
    description: 'Lead offensive engagements for fintech, e-commerce, and creative agencies, focusing on chained web vulnerabilities plus design-safe remediation.',
    tech: ['Burp', 'Nuclei', 'Python']
  },
  {
    id: 'exp2',
    role: 'Security Researcher',
    company: 'Atlas Red Team Collective',
    period: '2019  2021',
    description: 'Developed custom phishing kits and persistence tooling for purple-team drills across Morocco & EU partners.',
    tech: ['Go', 'AWS', 'Cobalt Strike']
  },
  {
    id: 'exp3',
    role: 'Creative Technologist',
    company: 'Casablanca Studios',
    period: '2017  2019',
    description: 'Bridged graphic design systems with interactive installations, introducing secure-by-default workflows for marketing teams.',
    tech: ['Cinema4D', 'React', 'Node.js']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'BSc Computer Systems & Networks',
    school: 'Université Hassan II, Casablanca',
    year: '2017',
  },
  {
    id: 'edu2',
    degree: 'Graphic Communication Diploma',
    school: 'ArtCom Sup',
    year: '2015',
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert1',
    name: 'PNPT (Practical Network Penetration Tester)',
    issuer: 'TCM Security',
    date: '2024'
  },
  {
    id: 'cert2',
    name: 'eCPPTv2 (eLearnSecurity Certified Professional Penetration Tester)',
    issuer: 'INE Security',
    date: '2023'
  },
  {
    id: 'cert3',
    name: 'Azure Security Engineer Associate',
    issuer: 'Microsoft',
    date: '2022'
  },
  {
    id: 'cert4',
    name: 'CCNP Security',
    issuer: 'Cisco',
    date: '2021'
  },
  {
    id: 'cert5',
    name: 'Adobe Certified Professional  Visual Design',
    issuer: 'Adobe',
    date: '2020'
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