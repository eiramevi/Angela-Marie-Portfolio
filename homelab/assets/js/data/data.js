/* ============================================================
   PORTFOLIO DATA
   This file IS your content. No database, no admin panel —
   just edit this file directly, add your screenshot files into
   the /images/ folder, then commit + push to GitHub.

   HOW TO ADD A NEW PROJECT
   1. Put your screenshots in a new subfolder under /images/,
      e.g. images/my-dns-project/01-something.png
   2. Copy one of the objects in the PROJECTS array below,
      paste it as a new entry, and edit the fields.
   3. Each entry in "images" is one screenshot + its caption
      (the step it shows). Add as many as you want, in order.
   4. Save this file, then open index.html to preview locally.
   ============================================================ */

const CATEGORIES = [
    // { name: "Windows Server Installation", slug: "windows-server" },
    { name: "Active Directory & Domain Services", slug: "active-directory" },
    { name: "Networking & VLANs", slug: "networking" },
    { name: "DHCP", slug: "dhcp" },
    // { name: "Virtualization (Hyper-V / VMware / Proxmox)", slug: "virtualization" },
    { name: "Group Policy & Endpoint Management", slug: "group-policy" },
    // { name: "Backup & Disaster Recovery", slug: "backup-dr" },
    { name: "Troubleshooting & Ticket Simulations", slug: "troubleshooting" },
];
// Shared array — every data file (this one and any topic files like
// data-dhcp.js) pushes its projects onto this same array. Declared with
// "var" + the "already exists?" check so it's safe no matter which
// data file happens to load first.
var PROJECTS = window.PROJECTS || [];

PROJECTS.push(
    {
        title: "Active Directory Domain Services (AD DS) Infrastructure Setup",
        slug: "building ad-domain",
        category: "active-directory",       // must match a slug from CATEGORIES above
        summary: "Configured an Active Directory Domain Services environment on Windows Server 2022 using Oracle VirtualBox to simulate centralized identity management, user authorization, and network administration for an enterprise network.",
        description:`
1. What I Built
Installed and configured Active Directory Domain Services (AD DS) on a Windows Server 2022 instance (HOMELAB-SERVER) to establish the core domain environment (lab.internal). Promoted the server to an Active Directory Domain Controller and configured integrated Active Directory DNS to handle internal domain name resolution.

2. Steps Taken
Server Preparation: Configured static IP addressing (192.168.1.2) on the Windows Server 2022 network adapter to prevent connectivity drops.
Role Installation: Installed the AD DS server role along with required management tools using the Server Manager wizard.
Domain Controller Promotion: Promoted the server to a Domain Controller by creating a new Active Directory forest (lab.internal) and setting the Directory Services Restore Mode (DSRM) password.`,

// 3. Practical IT Support Skills Learned
// Directory Services Infrastructure: Hands-on experience with Active Directory architecture, forest creation, and centralized domain management.
// Core Service Dependencies: Clear understanding of how Active Directory relies on static IP configurations and DNS name resolution for operational health.`,
        tools: "Windows Server 2022, Active Directory Domain Services (AD DS), Oracle VirtualBox, DNS Server",
        completedOn: "",           // format: YYYY-MM-DD
        published: true,
        images: [
            {
                src: "images/sample-ad-domain/d1.png",
                caption: "Step 1: Open Server Manager and click \"Add roles and feature\" from the Dashboard."
            },
            {
                src: "images/sample-ad-domain/d2.png",
                caption: "Step 2: Review the initial prerequisites on the \"Before You Begin\" screen and click Next."
            },
            {
                src: "images/sample-ad-domain/d3.png",
                caption: "Step 3: In Installation Type screen, select \"Role-based or feature-based installation\" and click Next."
            },
            {
                src: "images/sample-ad-domain/d4.png",
                caption: "Step 4: Proceed past the Server Selection screen, ensuring the target local server is selected."
            },
            {
                src: "images/sample-ad-domain/d5.png",
                 caption: `Step 5: In the Select server roles window, check the box for Active Directory Domain Services. 
                    Step 6: A prompt will automatically appear asking to add required features. Ensure \"Include management tools\" is checked and click Add Features.`
            },
            {
                src: "images/sample-ad-domain/d6.png",
                caption: "Step 7: Back on the Select server roles screen, verify Active Directory Domain Services is checked and click Next."
            },
            {
                src: "images/sample-ad-domain/d7.png",
                caption: "Step 8: On the Select features page, leave the default feature selections unchanged (or select any additional required features) and click Next."
            },
            {
                src: "images/sample-ad-domain/d8.png",
                caption: "Step 9: Confirm AD DS requirements and overview information."
            },
            {
                src: "images/sample-ad-domain/d9.png",
                caption: "Step 10: Review installation selections and click \"Install\" to begin role deployment."
            },
            {
                src: "images/sample-ad-domain/d12.png",
                caption: "Step 11: Verify successful installation of the Active Directory Domain Services role."
            },
            {
                src: "images/sample-ad-domain/d13.png",
                caption: "Step 12: Open the Server Manager notifications menu and select \"Promote this server to a domain controller\" to launch post-deployment configuration."
            },
            {
                src: "images/sample-ad-domain/d15.png",
                caption: "Step 13: Select \"Add a new forest\" and specify the Root Domain Name (e.g., lab.internal)."
            },
            {
                src: "images/sample-ad-domain/d16.png",
                caption: "Step 14: Configure the Domain Controller options, set the Functional Levels, and enter a secure Directory Services Restore Mode (DSRM) password."
            },
            {
                src: "images/sample-ad-domain/d17.png",
                caption: "Step 15: Review the DNS Options warning (expected for new forest root) and proceed to NetBIOS configuration."
            },
            {
                src: "images/sample-ad-domain/d18.png",
                caption: "Step 16: Verify the automatically generated NetBIOS domain name matches the organization standard."
            },
            {
                src: "images/sample-ad-domain/d19.png",
                caption: "Step 17: Specify the installation paths for the Active Directory database (NTDS), log files, and SYSVOL folder."
            },
            {
                src: "images/sample-ad-domain/d20.png",
                caption: "Step 18: Review the configuration summary and script options before initiating promotion."
            },
            {
                src: "images/sample-ad-domain/d21.png",
                caption: "Step 19: Complete prerequisite checks to ensure the server meets all environment requirements for AD DS deployment. Then click Install."
            },
            {
                src: "images/sample-ad-domain/d24.png",
                caption: "Step 20: Wait for the installation to finished and for automatic server reboot."
            },
            {
                src: "images/sample-ad-domain/d26.png",
                caption: "Step 21: Log in with domain administrative credentials to confirm successful domain promotion."
            },
            {
                src: "images/sample-ad-domain/d56.png",
                caption: "Step 22: Open Server Manager, and go to Local Server to verify if the Domain was successfully configured."
            },

        ]
    },
    
    

    // --- Copy the block above to add more projects. Example blank template: ---
    // {
    //     title: "",
    //     slug: "",
    //     category: "",
    //     summary: "",
    //     description: ``,
    //     tools: "",
    //     completedOn: "",
    //     published: true,
    //     images: [
    //         { src: "images/your-folder/01-first.png", caption: "Step 1: ..." },
    //     ]
    // },
);
