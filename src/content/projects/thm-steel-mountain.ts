import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-steel-mountain',
    title: 'Steel Mountain',
    description: 'Windows server penetration testing challenge. Exploited Rejetto HTTP File Server vulnerability to gain initial access, then performed thorough system enumeration. Escalated privileges by exploiting unquoted service paths and weak service permissions. Demonstrated both Metasploit and manual exploitation techniques for comprehensive understanding.',
    techStack: ['Windows', 'Rejetto HFS', 'Service Exploitation', 'PowerShell'],
    securityLevel: 'RESTRICTED',
    link: 'https://tryhackme.com/room/steelmountain'
};

export default project;
