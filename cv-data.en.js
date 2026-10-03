window.CV_EN = {
  role: "Fullstack Developer Vue.js / TypeScript",
  summary:
    "Frontend-focused fullstack developer with {years} years of experience on business web and mobile apps in healthcare and logistics. As front-end tech lead, I build efficient, maintainable interfaces with a focus on code quality and UX.",

  contact: [
    { icon: "pin", label: "Bordeaux · hybrid or fully remote" },
    { icon: "phone", label: "+33 6 47 88 49 26", href: "tel:+33647884926" },
    {
      icon: "mail",
      label: "pro@adrien-cassar.fr",
      href: "mailto:pro@adrien-cassar.fr",
    },
    {
      icon: "github",
      label: "github.com/acassar",
      href: "https://github.com/acassar",
    },
    {
      icon: "linkedin",
      label: "linkedin.com/in/adrien-cassar",
      href: "https://www.linkedin.com/in/adrien-cassar",
    },
    {
      icon: "globe",
      label: "adrien-cassar.fr",
      href: "https://adrien-cassar.fr",
      printOnly: true,
    },
  ],

  education: [
    {
      year: "2019",
      degree: "Bachelor's in Web Development",
      school: "DAWIN · IUT, Gradignan",
    },
    {
      year: "2018",
      degree: "DUT in Computer Science",
      school: "IUT Computer Science, Gradignan",
    },
  ],

  skills: [
    {
      group: "Languages & frameworks",
      items: [
        { label: "Vue.js · TypeScript", favorite: true },
        { label: "Node.js" },
        { label: "React · React Native" },
        { label: "Flutter · Dart" },
      ],
    },
    {
      group: "Tools",
      items: [
        { label: "Git · GitLab · GitHub" },
        { label: "Generative AI (Claude Code)" },
        { label: "Testing · Vitest" },
        { label: "CI/CD · Azure DevOps · Bitrise" },
        { label: "SQL · NoSQL · Docker" },
        { label: "Jira · Figma" },
      ],
    },
  ],

  languages: ["French · native", "English · professional"],
  hobbies: ["Climbing", "Skating", "Gaming"],

  experience: [
    {
      period: "June 2023 — present",
      company: "Docaposte Santé",
      detail: "Healthcare software · formerly Maincare",
      missions: [
        {
          stack: "Vue.js 3 · ESLint · GitLab",
          text: "Front-end tech lead: coding standards, code reviews and mentoring for 10 developers across 2 countries",
          details: [
            "Became front-end lead a few months after the project started",
            "Wrote the technical documentation and front-end best practices",
            "Defined merge request approval rules as merge master",
            "Owned the main features and technical improvements",
            "Upskilled the team (up to ~10 developers) on the Vue 3 Composition API",
          ],
        },
        {
          stack: "Vue.js 3 · TypeScript · Vitest",
          text: "Rewrite of a desktop application as a web app, built from scratch: patient records, insurance coverage, billing",
          details: [
            "Bootstrapped the project with Vue 3 (Composition API) and TypeScript, ESLint setup",
            "Patient record with a summary page of all their information",
            "Create, edit and view insurance coverage (French social security, supplementary health insurance)",
            "Billing information management",
            "Case management: list view, statistics on several key indicators, multi-criteria search",
            "Unit testing with Vitest",
          ],
        },
      ],
    },
    {
      period: "September 2022 — February 2023",
      company: "Groupe Save",
      detail: "Fire protection",
      missions: [
        {
          stack: "React · .NET",
          text: "Design and development of the internal management web app: installations, customers, inventory",
          details: [
            "Internal operations management: installations, customers, inventory",
            "Used daily by the ~20 head office employees",
            "Screen design and development, React front end and .NET back end",
          ],
        },
        {
          stack: "React Native",
          text: "Took over the mobile app used by technicians servicing fire protection systems",
          details: [
            "Took over and evolved an existing React Native app",
            "Used by all technicians during their on-site interventions",
          ],
        },
      ],
    },
    {
      period: "July 2019 — September 2022",
      company: "Global Packaging Services",
      detail: "Logistics equipment rental",
      missions: [
        {
          stack: "Flutter · Bitrise",
          text: "International logistics mobile app built end to end: Zebra scanning, offline mode, 1 million items",
          details: [
            "End-to-end ownership: visual identity, design, development and translations",
            "R&D on Zebra device scan events",
            "Movement orders (pickup, delivery) retrieved per production site",
            "Barcode scanning of products against the matching movement order",
            "Offline mode with server synchronization",
            "Internal movements and product status changes",
            "Large data volume: ~1 million items",
            "Release on Managed Google Play, device fleet management, CI/CD with Bitrise",
          ],
        },
        {
          stack: "Vue.js · Node.js · Azure DevOps",
          text: "End-of-life product web module: pickup scheduling, automated email reminders, statistics",
          details: [
            "Management of product end of life and pickup from end customers",
            "Inventory declarations: email and signature templates, automated sending at a configurable frequency",
            "Statistics and tracking of responses to inventory requests",
            "Weekly pickup calendar: creation, status filters, confirmation",
            "CI/CD with Azure DevOps",
          ],
        },
      ],
    },
  ],
};
