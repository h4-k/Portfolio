import type { Project } from '../../../types';

const project: Project = {
    id: 'boot2root-writeup',
    title: 'Boot2Root Machine Writeup',
    description: 'A comprehensive writeup for a Boot2Root machine challenge, demonstrating privilege escalation and system compromise techniques.',
    techStack: ['Linux', 'Privilege Escalation', 'Penetration Testing'],
    securityLevel: 'RESTRICTED',
    writeup: `**Boot2Root Machine Writeup**

**Introduction**
This is a writeup for a Boot2Root machine. The goal was to gain root access to the target machine.

**Enumeration**
Started with Nmap scan:
\`\`\`bash
nmap -sC -sV <IP>
\`\`\`
Found ports 22 (SSH) and 80 (HTTP) open.

**Exploitation**
Found a recurring vulnerability in the web application. Used it to gain initial shell access.

**Privilege Escalation**
Enumerated the system using LinPEAS. Found a misconfiguration in sudo permissions.
Exploited it to become root.

**Flag**
Captured the root flag.`
};

export default project;
