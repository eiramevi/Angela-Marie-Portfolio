
var PROJECTS = window.PROJECTS || [];

PROJECTS.push(
    {
        title: "Adding Users in Active Directory Users & Computers",
        slug: "adding-users",
        category: "active-directory",                   // matches the "dhcp" slug added in data.js
        summary: "Automated Active Directory user provisioning on Windows Server 2022 using custom PowerShell scripts, streamlining identity lifecycle management and administrative efficiency beyond traditional GUI methods.",
        description: 
`1. What I Built
Structured an Active Directory administrative hierarchy by creating a custom Organizational Unit (OU) (HOMELAB1) and provisioning a new domain user account (Athena Morgan / amorgan) within Windows Server 2022. Configured standard enterprise security policies, including enforced password resets on initial logon."

2. Steps Taken
Console Launch: Accessed Active Directory Users and Computers (ADUC) via Server Manager Tools (dsa.msc).
OU Creation: Created a top-level Organizational Unit (HOMELAB1) under the root domain (lab.internal) with accidental deletion protection enabled.
Account Creation: Initialized the New User wizard within the designated OU, mapping first name, last name, Full Name, and User Principal Name (UPN) logon parameters (amorgan@lab.internal).
Security Configuration: Assigned an initial complex password and enforced the "User must change password at next logon" account flag to comply with administrative credential hygiene.
Verification: Confirmed the successfully provisioned user object within the target OU container inside the ADUC management tree.`,

// 3.Practical IT Support Skills Learned
// Identity & Access Management (IAM): Hands-on experience executing Tier 1/2 IT Support administrative tasks for user onboarding and account provisioning.
// Directory Hierarchy & Organization: Understanding how Organizational Units (OUs) structure Active Directory for targeted administration and future Group Policy Object (GPO) delegation.
// Credential & Access Security: Applying standard identity security baselines regarding temporary password assignment and enforced user password resets.`,
        completedOn: "",                     // format: YYYY-MM-DD
        published: true,
        images: [
         {
             src: "images/add_users/s1.png",
             caption: "Step 1: In Server Manager, click Tools in the top-right menu and select Active Directory Users and Computers."
         },
         {
            src: "images/add_users/s2.png",
            caption: "Step 2: Right-click the domain name (lab.internal), hover over New, and select Organizational Unit."
        },
        {
            src: "images/add_users/s3.png",
            caption: "Step 3: Enter a name for the Organizational Unit (e.g., HOMELAB1), ensure Protect container from accidental deletion is checked, and click OK."
        },
        {
            src: "images/add_users/s4.png",
            caption: "Step 4: Right-click the newly created Organizational Unit (HOMELAB1), hover over New, and select User."
        },
        {
            src: "images/add_users/s5.png",
            caption: "Step 5: Enter the user's First name, Last name, and User logon name (e.g., amorgan), then click Next."
        },
        {
            src: "images/add_users/s6.png",
            caption: "Step 6: Set a initial password, confirm it, check User must change password at next logon, and click Next."
        },
        {
            src: "images/add_users/s7.png",
            caption: "Step 7: Review the account creation summary parameters and click Finish to generate the new domain user."
        },
        {
            src: "images/add_users/s8.png",
            caption: "Step 8: Verify that the new user account (Athena Morgan) appears inside the designated Organizational Unit (HOMELAB1)."
        },
        ]
    }
);