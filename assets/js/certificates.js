/* ============================================================
   CERTIFICATES
   Shown in the "Certificates" section on portfolio.html.

   HOW TO ADD A CERTIFICATE
   1. Put the certificate image (a photo, screenshot, or exported
      PDF page — PNG/JPG) into the /certificates/ folder at the
      site root (next to portfolio.html), e.g.
      certificates/comptia-a-plus.png
   2. Copy one of the objects below, paste it as a new entry, and
      edit the fields. "image" is the path from step 1.
   3. "credentialUrl" is optional — if the issuer gives you a
      public verification link, paste it here and the card becomes
      clickable, opening that link in a new tab. Leave it as ""
      to make the card non-clickable (just a visual card).
   4. Save the file, then run "node build.js" from the homelab
      folder to rebuild the bundle, and refresh portfolio.html.
   ============================================================ */

const CERTIFICATES = [
   {
      title: "Google IT Support",
      issuer: "Google",
      date: "August 2026",                     // format: YYYY-MM-DD, or leave blank
      image: "certificates/Google_IT_Support_Specialist.jpg",
      credentialUrl: ""             // optional public verification link
   },
   {
      title: "IT Customer Support Basics",
      issuer: "Cisco Networking Academy",
      date: "February 2026",                     // format: YYYY-MM-DD, or leave blank
      image: "certificates/ITCustomerSupportBasics.jpg",
      credentialUrl: ""             // optional public verification link
   },
   {
      title: "Introduction to CyberSecurity",
      issuer: "Cisco Networking Academy",
      date: "October 2025",                     // format: YYYY-MM-DD, or leave blank
      image: "certificates/Introduction to CyberSecurity Certificate.jpg",
      credentialUrl: ""             // optional public verification link
   },
   {
      title: "Cybersecurity",
      issuer: "Certiport",
      date: "October 2024",                     // format: YYYY-MM-DD, or leave blank
      image: "certificates/Cybersecurity.jpg",
      credentialUrl: ""             // optional public verification link
   },
   {
      title: "Network Security",
      issuer: "Certiport",
      date: "July 2024",                     // format: YYYY-MM-DD, or leave blank
      image: "certificates/Network_Security.jpg",
      credentialUrl: ""             // optional public verification link
   },
 

    // --- Copy the block above to add more certificates. Blank template: ---
    // ,{
    //     title: "",
    //     issuer: "",
    //     date: "",
    //     image: "certificates/your-file.png",
    //     credentialUrl: ""
    // }
];
