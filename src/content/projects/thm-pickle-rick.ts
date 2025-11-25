import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-pickle-rick',
    title: 'Pickle Rick CTF',
    description: 'A Rick and Morty themed CTF challenge focused on web exploitation and privilege escalation. Successfully exploited command injection vulnerabilities to gain initial access, then escalated privileges through misconfigured sudo permissions. Retrieved all three secret ingredients by enumerating the system and exploiting weak file permissions.',
    techStack: ['Web Exploitation', 'Linux', 'Privilege Escalation', 'Command Injection'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/picklerick',
    writeup: `**Reconnaissance**

Started with an Nmap scan to identify open ports and services. Discovered HTTP service running on port 80 and SSH on port 22.

**Web Enumeration**

Navigated to the web application and found a login portal. Inspected the page source and discovered a username in an HTML comment: "R1ckRul3s". Used directory enumeration with Gobuster to find hidden directories and discovered /assets and /robots.txt.

**Initial Access**

The robots.txt file revealed a potential password. Attempted login with the discovered credentials and gained access to a command panel. The panel had command injection vulnerability - tested with basic commands like 'ls' and 'whoami'.

**Flag Retrieval**

Used the command panel to navigate the filesystem. Found the first ingredient in the web directory. The 'cat' command was disabled, so used alternative commands like 'less', 'more', or 'strings' to read files.

**Privilege Escalation**

Checked sudo permissions with 'sudo -l' and discovered the www-data user could run all commands as root without a password. Used this misconfiguration to access root-level files and directories.

**Final Flags**

Retrieved the second ingredient from Rick's home directory and the third ingredient from the root directory using elevated privileges. Successfully completed all objectives.`
};

export default project;
