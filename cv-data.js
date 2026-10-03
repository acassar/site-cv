window.CV = {
  firstName: "Adrien",
  lastName: "Cassar",
  role: "Développeur Fullstack Vue.js / TypeScript",
  photo: "photo.jpg",
  careerStart: "2019-07",
  summary:
    "Développeur fullstack orienté frontend avec {years} ans d'expérience. Référent technique front, autonome et habitué aux projets complexes, je m'investis dans la création d'interfaces efficaces et scalables, tout en garantissant la qualité du code et l'expérience utilisateur.",

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
        { label: "Git · GitHub" },
        { label: "IA générative (Claude Code)" },
        { label: "CI/CD" },
        { label: "SQL · NoSQL" },
        { label: "Docker" },
        { label: "Figma" },
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
          stack: "Vue.js 3 · GitLab · Jira",
          text: "Garant technique du front, mentorat et revue de code sur une équipe de 10 développeurs répartis sur 2 pays",
        },
        {
          stack: "Vue.js 3",
          text: "Développement d'une application web de gestion administrative du patient",
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
          text: "Développement et design d'un portail web de gestion",
        },
        {
          stack: "React Native",
          text: "Reprise d'une application mobile opérationnelle utilisée par les techniciens",
        },
      ],
    },
    {
      period: "Juillet 2019 — Septembre 2022",
      company: "Global Packaging Services",
      detail: "Location de matériel logistique",
      missions: [
        {
          stack: "Flutter",
          text: "Développement d'une app mobile de suivi du cycle de vie des produits logistiques",
        },
        {
          stack: "Vue.js · Node.js",
          text: "Évolutions du portail web de suivi du cycle de vie des produits",
        },
      ],
    },
  ],
};
