window.CV = {
  firstName: "Adrien",
  lastName: "Cassar",
  role: "Développeur Fullstack Vue.js / TypeScript",
  photo: "photo.jpg",
  careerStart: "2019-07",
  summary:
    "Développeur fullstack orienté frontend avec {years} ans d'expérience sur des applications métier web et mobile, dans la santé et la logistique. Référent technique front, je conçois des interfaces efficaces et maintenables en garantissant la qualité du code et l'expérience utilisateur.",

  contact: [
    { icon: "pin", label: "Bordeaux · hybride ou 100 % télétravail" },
    { icon: "phone", label: "06 47 88 49 26", href: "tel:+33647884926" },
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
      degree: "Licence pro Développement web",
      school: "DAWIN · IUT Informatique, Gradignan",
    },
    {
      year: "2018",
      degree: "DUT Informatique",
      school: "IUT Informatique, Gradignan",
    },
  ],

  skills: [
    {
      group: "Langages & frameworks",
      items: [
        { label: "Vue.js · TypeScript", favorite: true },
        { label: "Node.js" },
        { label: "React · React Native" },
        { label: "Flutter · Dart" },
      ],
    },
    {
      group: "Outils",
      items: [
        { label: "Git · GitLab · GitHub" },
        { label: "IA générative (Claude Code)" },
        { label: "Tests · Vitest" },
        { label: "CI/CD · Azure DevOps · Bitrise" },
        { label: "SQL · NoSQL · Docker" },
        { label: "Jira · Figma" },
      ],
    },
  ],

  languages: ["Anglais · professionnel"],
  hobbies: ["Escalade", "Roller", "Jeux vidéo"],

  experience: [
    {
      period: "Juin 2023 — aujourd'hui",
      company: "Docaposte Santé",
      detail: "Logiciels de santé · ex-Maincare",
      missions: [
        {
          stack: "Vue.js 3 · ESLint · GitLab",
          text: "Référent technique front : standards, revue de code et mentorat d'une équipe de 10 développeurs sur 2 pays",
        },
        {
          stack: "Vue.js 3 · TypeScript · Vitest",
          text: "Refonte d'un client lourd en application web, démarrée de zéro : dossier patient, couverture sociale, facturation",
        },
      ],
    },
    {
      period: "Septembre 2022 — Février 2023",
      company: "Groupe Save",
      detail: "Protection incendie",
      missions: [
        {
          stack: "React · .NET",
          text: "Développement et design de l'app web de gestion interne du siège : installations, clients, stocks",
        },
        {
          stack: "React Native",
          text: "Reprise de l'app mobile des techniciens qui interviennent sur les installations anti-incendie",
        },
      ],
    },
    {
      period: "Juillet 2019 — Septembre 2022",
      company: "Global Packaging Services",
      detail: "Location de matériel logistique",
      missions: [
        {
          stack: "Flutter · Bitrise",
          text: "App mobile logistique internationale créée de A à Z : scan Zebra, hors-ligne, 1 million d'articles",
        },
        {
          stack: "Vue.js · Node.js · Azure DevOps",
          text: "Module web de fin de cycle produit : planning des collectes, relances e-mail automatiques, statistiques",
        },
      ],
    },
  ],
};
