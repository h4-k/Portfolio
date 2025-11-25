import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-blue',
    title: 'Blue (EternalBlue)',
    description: 'Windows exploitation challenge focusing on the infamous EternalBlue vulnerability (MS17-010). Scanned for SMB vulnerabilities, verified the target was susceptible to EternalBlue, and successfully exploited the vulnerability using Metasploit. Gained SYSTEM-level access and retrieved sensitive flags. Demonstrated understanding of critical Windows vulnerabilities and post-exploitation techniques.',
    techStack: ['Windows', 'EternalBlue', 'Metasploit', 'SMB', 'MS17-010'],
    securityLevel: 'RESTRICTED',
    link: 'https://tryhackme.com/room/blue'
};

export default project;
