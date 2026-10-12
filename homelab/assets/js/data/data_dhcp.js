/* ============================================================
   DHCP PROJECT DATA
   Same idea as data.js, just scoped to DHCP work so it doesn't
   get lost in a huge combined file. This pushes onto the SAME
   shared PROJECTS array that data.js starts — as long as this
   file's <script> tag loads after data.js's, your DHCP projects
   will show up in the gallery and filters exactly like any other
   project.

   Don't redeclare CATEGORIES here — that lives in data.js. If you
   need a new category, add it there. The "dhcp" category slug is
   already defined in data.js for you to use below.

   HOW TO ADD A DHCP PROJECT
   1. Put its screenshots in a new subfolder under /images/,
      e.g. images/dhcp-scope-setup/01-something.png
   2. Copy one of the objects in a PROJECTS.push(...) call below,
      paste it as a new entry, and edit the fields.
   3. Save the file, refresh index.html to preview.
   ============================================================ */

   var PROJECTS = window.PROJECTS || [];

   PROJECTS.push(
       {
           title: "Setting Up a DHCP Scope on Windows Server",
           slug: "setting-up-dhcp-scope",
           category: "dhcp",                   // matches the "dhcp" slug added in data.js
           summary: "Configured a DHCP scope and lease options on Windows Server so client machines get IPs automatically.",
           description:
`1. What I Built
Set up and configured the DHCP Server role on Windows Server 2022 (HOMELAB-SERVER) to automate dynamic IP address assignment across an Active Directory domain environment (lab.internal). Created a active IPv4 scope distributing IP addresses in the range of 192.168.1.10 to 192.168.1.15 with a 255.255.255.0 subnet mask.

2. Steps Taken
Role Installation: Installed the DHCP Server role and Remote Server Administration Tools (RSAT) via Server Manager, followed by authorizing the server in Active Directory using Domain Admin credentials.
Scope Creation: Configured a new IPv4 scope with defined IP ranges, lease durations, and essential Layer 7/Core Infrastructure options including Default Gateway (192.168.1.1) and Domain DNS parameters.
Client Verification: Configured client virtual machines (e.g., PC1), verified dynamic lease generation under Address Leases, and performed bi-directional ping tests to confirm network connectivity.
 `,
           tools: "Windows Server 2022, DHCP Server role, CLI",
           completedOn: "",                     // format: YYYY-MM-DD
           published: true,
           images: [
            {
                src: "images/dhcp/1.png",
                caption: "Step 1: Open Server Manager and click \"Add roles and feature\" from the Dashboard."
            },
            {
                src: "images/dhcp/2.png",
                caption: "Step 2: Review the initial prerequisites on the \"Before You Begin\" screen and click Next."
            },
            {
                src: "images/dhcp/3.png",
                caption: "Step 3: In Installation Type screen, select \"Role-based or feature-based installation\" and click Next."
            },
            {
                src: "images/dhcp/4.png",
                caption: "Step 4: Proceed past the Server Selection screen, ensuring the target local server is selected."
            },
            {
                src: "images/dhcp/5.png",
                caption: `Step 5: In the Select server roles window, check the box for DHCP Server. 
                    Step 6: A prompt will automatically appear asking to add required features. Ensure \"Include management tools\" is checked and click Add Features.`
            },
            {
                src: "images/dhcp/6.png",
                caption: "Step 7: Back on the Select server roles screen, verify DHCP Server is checked and click Next."
            },
            {
                src: "images/dhcp/7.png",
                caption: "Step 8: On the Select features page, leave the default feature selections unchanged (or select any additional required features) and click Next."
            },
            {
                src: "images/dhcp/8.png",
                caption: "Step 8: On the DHCP Server overview screen, review the installation notes and click Next."
            },
            {
                src: "images/dhcp/9.png",
                caption: "Step 9: On the Confirm installation selections screen, review the roles and features to be installed, then click Install to begin the process."
            },
            {
                src: "images/dhcp/11.png",
                caption: "Step 10: Wait for the installation to finish. Once complete, click Close."
            },
            {
                src: "images/dhcp/12.png",
                caption: "Step 11: Open the Server Manager notifications flag and select \"Complete DHCP Configuration\" to launch DHCP post-install configuration wizard."
            },
            {
                src: "images/dhcp/13.png",
                caption: "Step 12: On the DHCP Post-Install wizard intro screen, click Next to proceed with authorizing the server in Active Directory."
            },
            {
                src: "images/dhcp/14.png",
                caption: "Step 13: Select Use the following user's credentials (ensuring a Domain Admin account is listed) and click Commit."
            },
            {
                src: "images/dhcp/15.png",
                caption: "Step 14: Verify that both security groups creation and server authorization show Done, then click Close."
            },
            {
                src: "images/dhcp/16.png",
                caption: "Step 15: In Server Manager, Click Tools and Select DHCP."
            },
            {
                src: "images/dhcp/18.png",
                caption: "Step 16: In the DHCP Management Console, expand your server node, right-click IPv4, and select New Scope... to open the New Scope Wizard."
            },
            {
                src: "images/dhcp/19.png",
                caption: "Step 17: On the New Scope Wizard welcome screen, click Next to begin configuring your IP range."
            },
            {
                src: "images/dhcp/20.png",
                caption: "Step 18: Enter a Name (e.g., LAN Scope or Homelab) and an optional Description for your scope, then click Next."
            },
            {
                src: "images/dhcp/21.png",
                caption: "Step 19: Define the pool of IP addresses by entering the Start IP address, End IP address, and the appropriate Subnet mask (or CIDR length), then click Next."
            },
            {
                src: "images/dhcp/22.png",
                caption: "Step 20: If you have static IPs reserved for devices like servers or printers, enter the exclusion range under Add Exclusions and Delay and click Add, then click Next."
            },
            {
                src: "images/dhcp/22.png",
                caption: "Step 21: If you have static IPs reserved for devices like servers or printers, enter the exclusion range under Add Exclusions and Delay and click Add, then click Next."
            },
            {
                src: "images/dhcp/24.png",
                caption: "Step 22: Set the Lease Duration (default is 8 days) to specify how long a client can hold an IP address, then click Next."
            },
            {
                src: "images/dhcp/25.png",
                caption: "Step 23: Select Yes, I want to configure these options now to set up the default gateway (router), DNS servers, and WINS settings, then click Next."
            },
            {
                src: "images/dhcp/26.png",
                caption: "Step 24: On the Router (Default Gateway) screen, enter your network's gateway IP address (e.g., 192.168.1.1), click Add, and then click Next."
            },
            {
                src: "images/dhcp/28.png",
                caption: "Step 25: Specify your Parent domain name and enter the IP address of your primary DNS Server, click Add, and then click Next."
            },
            {
                src: "images/dhcp/29.png",
                caption: "Step 26: If your network uses WINS, enter the server details and click Next. Otherwise, leave this blank and click Next."
            },
            {
                src: "images/dhcp/30.png",
                caption: "Step 27: Select Yes, I want to activate this scope now to allow the DHCP server to begin assigning IP addresses immediately, then click Next."
            },
            {
                src: "images/dhcp/31.png",
                caption: "Step 28: Click Finish to complete the New Scope Wizard and activate your new DHCP scope."
            },
            {
                src: "images/dhcp/34.png",
                caption: "Step 29: In the DHCP console, navigate to Scope > Address Leases to verify that client computers (e.g., PC1, PC2, PC3) have successfully received dynamically assigned IP addresses from the pool."
            },
            {
                src: "images/dhcp/35.png",
                caption: "Step 30: Verify network connectivity by running ping 192.168.1.10 from the Windows Server to the client, and ping 192.168.1.2 from the client back to the server. Confirm both commands receive success replies with 0% packet loss."
            },
           ]
       }
   
   );
   