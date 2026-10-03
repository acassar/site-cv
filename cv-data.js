window.CV = {
  firstName: "Adrien",
  lastName: "Cassar",
  role: "Développeur Front / Fullstack",
  photo: "photo.jpg",
  summary:
    "Développeur front confirmé avec une forte polyvalence fullstack. Autonome, patient et habitué aux projets complexes, je m'investis dans la création d'interfaces efficaces et scalables, tout en garantissant la qualité du code et l'expérience utilisateur.",

  contact: [
    { icon: "phone", label: "06 47 88 49 26", href: "tel:+33647884926" },
    { icon: "mail", label: "pro@adrien-cassar.fr", href: "mailto:pro@adrien-cassar.fr" },
    { icon: "github", label: "github.com/acassar", href: "https://github.com/acassar" },
  ],

  education: [
    { year: "2019", degree: "Licence pro DAWIN", school: "IUT Informatique, Gradignan" },
    { year: "2018", degree: "DUT Informatique", school: "IUT Informatique, Gradignan" },
    { year: "2016", degree: "Bac scientifique", school: "Lycée Maine de Biran, Bergerac" },
  ],

  skills: [
    {
      group: "Langages",
      items: [
        { label: "Flutter · Dart", favorite: true },
        { label: "JS · Vue · Node · React" },
      ],
    },
    {
      group: "Outils",
      items: [
        { label: "Git · GitHub" },
        { label: "Bash · SQL · NoSQL" },
        { label: "Docker" },
        { label: "Figma" },
      ],
    },
  ],

  languages: ["Anglais"],
  hobbies: ["Escalade", "Roller", "Jeux vidéo"],

  experience: [
    {
      period: "Juin 2023 — aujourd'hui",
      company: "Maincare",
      detail: "Logiciels de santé · ~600 employés",
      missions: [
        { stack: "Vue.js 3", text: "Développement d'une application web de gestion administrative du patient" },
      ],
    },
    {
      period: "Septembre 2022 — Février 2023",
      company: "Groupe Save",
      detail: "Protection incendie · ~650 employés",
      missions: [
        { stack: "React + .NET", text: "Développement et design d'un portail web de gestion" },
        { stack: "React Native", text: "Reprise d'une application mobile opérationnelle utilisée par les techniciens" },
      ],
    },
    {
      period: "Juillet 2019 — Septembre 2022",
      company: "Global Packaging Services",
      detail: "Location de matériel logistique · ~200 employés",
      missions: [
        { stack: "Flutter", text: "Développement d'une app mobile de suivi du cycle de vie produit logistique" },
        { stack: "Vue.js + Node.js", text: "Développements sur le portail web, cycle de vie produit logistique" },
      ],
    },
  ],
};
