
var PROJECTS = window.PROJECTS || [];

PROJECTS.push(
    {
        title: "Bulk User Creation in Active Directory Using PowerShell",
        slug: "adding-users-cli",
        category: "active-directory",                   // matches the "dhcp" slug added in data.js
        summary: "Automated Active Directory user provisioning on Windows Server 2022 using custom PowerShell scripts, streamlining identity lifecycle management and administrative efficiency beyond traditional GUI methods.",
        description: 
`1. What I Built
Automated the onboarding process for Active Directory domain accounts by writing and executing PowerShell scripts (New-ADUser) on Windows Server 2022 (HOMELAB-SERVER). Provisioned domain accounts directly into designated Organizational Units (OUs) with pre-configured password requirements and security attributes.

2. Steps Taken
Create CSV file: Created a CSV file containing users' information (First Name, Last Name, Username, Department).
Module Initialization: Launched Windows PowerShell with elevated administrative privileges and imported the Active Directory module (Import-Module ActiveDirectory).
Script Construction: Drafted PowerShell commands utilizing the New-ADUser cmdlet, specifying parameters including -Name, -GivenName, -Surname, -UserPrincipalName, -Path (target OU container), and -AccountPassword.
Security Configuration: Configured initial account state using -Enabled $true and enforced credential security controls with -ChangePasswordAtNextLogon $true.
Execution & Verification: Executed script blocks to instantiate objects and verified account provisioning using the Get-ADUser cmdlet and Active Directory Users and Computers (ADUC).`,

// 3. Practical IT Support Skills Learned
// Enterprise Endpoint Onboarding: Standard operating procedures for connecting client workstations to centralized domain environments.
// Endpoint Troubleshooting: Utilizing command-line network diagnostics (ipconfig /all, ping) to troubleshoot client-to-server connectivity and DNS resolution issues.
        tools: "Windows Server 2022, Oracle VirtualBox, PowerShell",
        completedOn: "",                     // format: YYYY-MM-DD
        published: true,
        images: [
         {
             src: "images/users_cli/1.png",
             caption: "Step 1: In Server Manager, verify the Active Directory structure, including the parent Departments Organizational Unit and child OUs (Finance, HR, IT, Sales), to serve as target deployment paths for PowerShell user automation."
         },
         {
            src: "images/users_cli/2.png",
            caption: "Step 2: Open Notepad and create a CSV file containing new users' information (First Name, Last Name, Username, Department)."
        },
        {
            src: "images/users_cli/3.png",
            caption: `Step 3: Executing a PowerShell script that imports user data from a CSV file (users.csv), dynamically dynamically assigns LDAP organizational unit paths based on department 
            (OU=$_.Department,OU=Departments
            ,DC=lab,DC=internal), and provisions accounts using New-ADUser with customized properties and security flags.`
        },
        {
            src: "images/users_cli/5.png",
            caption: "Figure 1: Run <Get-LocalUser> in PowerShell terminal to confirm the new local user account is present and active."
        },
        {
            src: "images/users_cli/4.png",
            caption: "Figure 2: Another way to verify newly added users is to check through Server Manager > Active Directory Users and Computers > Departments > Finance."
        },
        {
            src: "images/users_cli/6.png",
            caption: "Figure 3: Another way is to run <Get-AdUser -Filter * -Properties Department | Select-Object Name, SamAccountName, UserPrincipalName, Department, Enabled>. This will list all users."
        },
        {
            src: "images/users_cli/7.png",
            caption: "Figure 4: Users Information"
        },
        ]
    }
);