import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-kenobi',
    title: 'Kenobi',
    description: 'Linux exploitation challenge involving Samba enumeration and ProFTPD exploitation. Discovered misconfigured Samba shares, leveraged ProFTPD mod_copy vulnerability to manipulate files, and exploited path hijacking in SUID binaries for privilege escalation. Successfully compromised the system through a multi-stage attack chain demonstrating advanced enumeration and exploitation skills.',
    techStack: ['Samba', 'ProFTPD', 'Linux', 'Path Hijacking', 'SUID'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/kenobi',
    writeup: `**Initial Enumeration**

Conducted Nmap scan revealing SMB (445), FTP (21), and other services. Used enum4linux and smbclient to enumerate Samba shares and discovered accessible shares containing valuable information.

**Samba Share Analysis**

Connected to the anonymous SMB share and found configuration files. Discovered FTP configuration revealing the ProFTPD version and important system paths.

**ProFTPD Vulnerability Research**

Identified the ProFTPD version as vulnerable to mod_copy module exploitation. Researched the vulnerability allowing unauthorized file copying on the system.

**FTP Exploitation**

Connected to the FTP service and used the SITE CPFR and SITE CPTO commands from the mod_copy module to copy Kenobi's SSH private key to a publicly accessible location.

**SSH Key Retrieval**

Mounted the NFS share (discovered during enumeration) to access the copied SSH private key. Downloaded the key to the attacking machine.

**Initial Access**

Used the stolen SSH private key to authenticate as the user 'kenobi'. Successfully gained shell access without needing a password.

**Privilege Escalation Enumeration**

Searched for SUID binaries using find command. Discovered an unusual SUID binary that could be exploited for privilege escalation.

**Path Hijacking**

Analyzed the SUID binary and found it executed system commands without using absolute paths. Created a malicious script in /tmp, modified the PATH variable to prioritize /tmp, and executed the SUID binary.

**Root Access**

The path hijacking technique successfully escalated privileges to root. Retrieved the root flag and completed all challenge objectives.`
};

export default project;
