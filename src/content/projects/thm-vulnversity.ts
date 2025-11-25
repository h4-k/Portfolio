import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-vulnversity',
    title: 'Vulnversity',
    description: 'Active reconnaissance and web application exploitation challenge. Discovered a vulnerable file upload mechanism that allowed bypassing extension filters. Uploaded a reverse shell payload, gained initial foothold, and escalated privileges through SUID binary exploitation. Demonstrated advanced enumeration techniques and creative payload crafting.',
    techStack: ['Web Exploitation', 'File Upload Bypass', 'Reverse Shell', 'SUID Exploitation'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/vulnversity',
    writeup: `**Reconnaissance**

Conducted Nmap scan revealing multiple open ports including HTTP on port 3333. Identified Apache web server running on the target.

**Directory Enumeration**

Used Gobuster to discover hidden directories. Found an /internal directory containing a file upload form - a potential attack vector.

**File Upload Testing**

Tested the upload functionality with various file extensions. Discovered that .php files were blocked but alternative extensions like .phtml were accepted.

**Reverse Shell Upload**

Created a PHP reverse shell payload and renamed it with the .phtml extension to bypass the filter. Successfully uploaded the malicious file to the server.

**Gaining Initial Access**

Set up a Netcat listener on the attacking machine. Navigated to the uploaded shell file through the browser, triggering the reverse shell connection and gaining initial access as www-data.

**System Enumeration**

Performed thorough system enumeration looking for privilege escalation vectors. Checked for SUID binaries using: find / -perm -4000 2>/dev/null

**SUID Exploitation**

Discovered /bin/systemctl had SUID bit set. Researched GTFOBins for systemctl exploitation techniques. Created a malicious service file to execute commands as root.

**Privilege Escalation**

Exploited the SUID systemctl binary to escalate privileges to root. Retrieved the root flag and completed the challenge successfully.`
};

export default project;
