export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  securityLevel: 'DECLASSIFIED' | 'RESTRICTED' | 'TOP SECRET';
  link?: string;
  fullDescription?: string;
  writeup?: string;
  images?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'OFFENSIVE' | 'DEFENSIVE' | 'INFRASTRUCTURE';
}

export interface TerminalLog {
  id: string;
  text: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  details?: string[];
  location?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  honors?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  description?: string;
  verificationLink?: string;
  fileUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown supported
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}