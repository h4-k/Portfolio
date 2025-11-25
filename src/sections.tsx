import React from 'react';
import { Hero, AboutSection } from '../components/EmailDetail';
import SkillsTerminal from '../components/StatsModal';
import ProjectsTerminal from '../components/EmailList';
import { ExperienceSection, EducationSection, CertificationSection } from '../components/Timeline';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export interface SectionRoute {
  id: string;
  label: string;
  path: string;
  element: React.ReactNode;
  description?: string;
}

const SectionShell: React.FC<{ children: React.ReactNode; title?: string }> = ({ children }) => (
  <div className="relative z-10 flex flex-col gap-0">{children}</div>
);

export const SECTION_ROUTES: SectionRoute[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    element: (
      <SectionShell>
        <Hero />
      </SectionShell>
    ),
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
    element: (
      <SectionShell>
        <AboutSection />
      </SectionShell>
    ),
  },
  {
    id: 'skills',
    label: 'Skills',
    path: '/skills',
    element: (
      <SectionShell>
        <SkillsTerminal />
      </SectionShell>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/projects',
    element: (
      <SectionShell>
        <ProjectsTerminal />
      </SectionShell>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    path: '/experience',
    element: (
      <SectionShell>
        <ExperienceSection />
      </SectionShell>
    ),
  },
  {
    id: 'education',
    label: 'Education',
    path: '/education',
    element: (
      <SectionShell>
        <EducationSection />
      </SectionShell>
    ),
  },
  {
    id: 'certifications',
    label: 'Certifications',
    path: '/certifications',
    element: (
      <SectionShell>
        <CertificationSection />
      </SectionShell>
    ),
  },
  {
    id: 'articles',
    label: 'Articles',
    path: '/articles',
    element: (
      <SectionShell>
        <Blog />
      </SectionShell>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
    element: (
      <SectionShell>
        <Contact />
      </SectionShell>
    ),
  },
];

export const DEFAULT_ROUTE = SECTION_ROUTES[0];

