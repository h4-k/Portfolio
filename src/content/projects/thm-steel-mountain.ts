import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-steel-mountain',
    title: 'Steel Mountain',
    description: 'Windows server penetration testing challenge. Exploited Rejetto HTTP File Server vulnerability to gain initial access, then performed thorough system enumeration. Escalated privileges by exploiting unquoted service paths and weak service permissions. Demonstrated both Metasploit and manual exploitation techniques for comprehensive understanding.',
    techStack: ['Windows', 'Rejetto HFS', 'Service Exploitation', 'PowerShell'],
    securityLevel: 'RESTRICTED',
    link: 'https://tryhackme.com/room/steelmountain',
    writeup: `**Reconnaissance**

Performed Nmap scan identifying HTTP service on port 8080 running Rejetto HTTP File Server (HFS) 2.3. Researched known vulnerabilities for this specific version.

**Vulnerability Identification**

Discovered CVE-2014-6287 - a remote code execution vulnerability in Rejetto HFS 2.3. Found both Metasploit module and manual exploitation methods available.

**Metasploit Exploitation**

Used exploit/windows/http/rejetto_hfs_exec module in Metasploit. Configured RHOSTS, RPORT, and payload settings. Successfully gained Meterpreter session as user-level access.

**Manual Exploitation (Alternative)**

Downloaded the Python exploit script for Rejetto HFS. Modified the script with target IP and local listener details. Executed the script and caught the reverse shell with Netcat.

**System Enumeration**

Used PowerUp.ps1 script to enumerate Windows privilege escalation vectors. Discovered unquoted service paths and services running with elevated privileges.

**Service Exploitation**

Identified a service with unquoted path vulnerability and weak permissions. The service executable could be replaced due to improper file permissions.

**Privilege Escalation**

Generated a malicious executable using msfvenom. Replaced the vulnerable service executable with the payload. Restarted the service to trigger execution with SYSTEM privileges.

**Root Flag**

Gained SYSTEM-level access through service exploitation. Retrieved the root flag from the Administrator's desktop. Documented the complete attack chain for the writeup.

**Alternative Method**

Also demonstrated PowerShell-based privilege escalation using PowerUp's Invoke-ServiceAbuse function for a cleaner, file-less approach.`
};

export default project;
