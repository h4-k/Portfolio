import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-kenobi',
    title: 'Kenobi',
    description: 'Linux exploitation challenge involving Samba enumeration and ProFTPD exploitation. Discovered misconfigured Samba shares, leveraged ProFTPD mod_copy vulnerability to manipulate files, and exploited path hijacking in SUID binaries for privilege escalation. Successfully compromised the system through a multi-stage attack chain demonstrating advanced enumeration and exploitation skills.',
    techStack: ['Samba', 'ProFTPD', 'Linux', 'Path Hijacking', 'SUID'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/kenobi'
};

export default project;
