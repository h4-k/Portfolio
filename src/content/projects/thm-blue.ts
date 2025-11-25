import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-blue',
    title: 'Blue (EternalBlue)',
    description: 'Windows exploitation challenge focusing on the infamous EternalBlue vulnerability (MS17-010). Scanned for SMB vulnerabilities, verified the target was susceptible to EternalBlue, and successfully exploited the vulnerability using Metasploit. Gained SYSTEM-level access and retrieved sensitive flags. Demonstrated understanding of critical Windows vulnerabilities and post-exploitation techniques.',
    techStack: ['Windows', 'EternalBlue', 'Metasploit', 'SMB', 'MS17-010'],
    securityLevel: 'RESTRICTED',
    link: 'https://tryhackme.com/room/blue',
    writeup: `**Vulnerability Scanning**

Performed Nmap scan with vulnerability scripts to identify the target's exposure to MS17-010 (EternalBlue). Confirmed the system was running vulnerable SMB services.

**Metasploit Setup**

Launched Metasploit Framework and searched for EternalBlue exploits using: search ms17-010. Selected the exploit/windows/smb/ms17_010_eternalblue module.

**Exploit Configuration**

Configured the exploit with target IP address and selected an appropriate payload (windows/x64/meterpreter/reverse_tcp). Set LHOST to the attacking machine's IP and verified all options.

**Exploitation**

Executed the exploit against the vulnerable Windows machine. The EternalBlue exploit successfully compromised the system, providing a Meterpreter session with SYSTEM privileges.

**Post-Exploitation**

Used Meterpreter commands to enumerate the system. Checked user privileges with getuid, confirming SYSTEM-level access. Navigated the filesystem to locate flags.

**Flag Retrieval**

Found flags in various locations including user directories and system folders. Used Meterpreter's search and download capabilities to retrieve all required flags.

**Persistence (Optional)**

Demonstrated knowledge of persistence techniques by exploring options like creating backdoor users or installing services, though not required for this challenge.

**Cleanup**

Properly closed the Meterpreter session and documented all actions taken during the exploitation process.`
};

export default project;
