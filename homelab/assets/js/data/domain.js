
var PROJECTS = window.PROJECTS || [];

PROJECTS.push(
    {
        title: "Domain Joining in Windows 11",
        slug: "domain-joining",
        category: "active-directory",                   // matches the "dhcp" slug added in data.js
        summary: "Configured network adapter DNS settings and joined a Windows 11 Pro client workstation to a Windows Server 2022 Active Directory domain, simulating centralized endpoint onboarding and network authorization for an enterprise environment.",
        description: 
`1. What I Built
Successfully onboarded a Windows 11 Pro client machine (PC1 & PC2) into the Active Directory domain environment (lab.internal). Configured endpoint DNS settings, authenticated with Domain Admin credentials, and verified client integration within Active Directory management tools.

2. Steps Taken
DNS Configuration: Updated the client machine’s IPv4 network adapter settings to use the Domain Controller’s static IP (192.168.1.2) as its primary DNS server.
Domain Join Execution: Navigated to Settings > System > About > Domain or workgroup on the Windows 11 client, selected Domain, and entered lab.internal.
Authentication: Provided Domain Admin credentials (LAB\Administrator) to authorize computer account creation within the domain.
System Reboot & Verification: Restarted the client computer and verified successful domain join via System Settings and ipconfig /all in Command Prompt.

3. Practical IT Support Skills Learned
Enterprise Endpoint Onboarding: Standard operating procedures for connecting client workstations to centralized domain environments.
Endpoint Troubleshooting: Utilizing command-line network diagnostics (ipconfig /all, ping) to troubleshoot client-to-server connectivity and DNS resolution issues.`,
        tools: "Windows 11 Pro, Oracle VirtualBox, CLI",
        completedOn: "",                     // format: YYYY-MM-DD
        published: true,
        images: [
            {
                src: "images/domain/9.png",
                caption: "Figure 1: Verifying network configuration and DNS assignment (192.168.1.2) on client endpoint PC2 via ipconfig /all and testing bi-directional connectivity with the Domain Controller prior to domain join.."
            },
         {
             src: "images/domain/1.png",
             caption: "Step 1: On the client PC, navigate to Settings > System > About, scroll down to Related links, and click Domain or workgroup."
         },
         {
            src: "images/domain/2.png",
            caption: "Step 2: In the System Properties window on the Computer Name tab, click the Change... button to rename the computer or join a domain."
        },
        {
            src: "images/domain/3.png",
            caption: "Step 3: Under Member of, select the Domain radio button, type your Active Directory domain name (e.g., lab.internal), and click OK."
        },
        {
            src: "images/domain/4.png",
            caption: "Step 4: When prompted for network credentials, enter the Username and Password of a Domain Admin account authorized to join computers to the domain, then click OK."
        },
        {
            src: "images/domain/5.png",
            caption: "Step 5: A popup message will appear stating 'Welcome to the [domain.name] domain.' Click OK to dismiss the prompt."
        },
        {
            src: "images/domain/6.png",
            caption: "Step 6: Click Restart Now to reboot the computer and apply the domain changes."
        },
        {
            src: "images/domain/7.png",
            caption: "Figure 2: Verifying domain membership via Settings > System > About."
        },
        {
            src: "images/domain/8.png",
            caption: "Figure 3: Verifying domain membership using the ipconfig /all command in Command Prompt."
        },
        ]
    }
);