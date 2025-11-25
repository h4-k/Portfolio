import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-pickle-rick',
    title: 'Pickle Rick CTF',
    description: 'A Rick and Morty themed CTF challenge focused on web exploitation and privilege escalation. Successfully exploited command injection vulnerabilities to gain initial access, then escalated privileges through misconfigured sudo permissions. Retrieved all three secret ingredients by enumerating the system and exploiting weak file permissions.',
    techStack: ['Web Exploitation', 'Linux', 'Privilege Escalation', 'Command Injection'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/picklerick'
};

export default project;
