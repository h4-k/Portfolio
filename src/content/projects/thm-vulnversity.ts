import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-vulnversity',
    title: 'Vulnversity',
    description: 'Active reconnaissance and web application exploitation challenge. Discovered a vulnerable file upload mechanism that allowed bypassing extension filters. Uploaded a reverse shell payload, gained initial foothold, and escalated privileges through SUID binary exploitation. Demonstrated advanced enumeration techniques and creative payload crafting.',
    techStack: ['Web Exploitation', 'File Upload Bypass', 'Reverse Shell', 'SUID Exploitation'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/vulnversity'
};

export default project;
