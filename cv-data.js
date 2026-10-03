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
          details: [
            "Référent front-end quelques mois après le démarrage du projet",
            "Rédaction de la documentation technique et des bonnes pratiques front",
            "Règles de validation des merge requests, en tant que merge master",
            "Prise en charge des principales fonctionnalités et évolutions techniques",
            "Montée en compétence de l'équipe (jusqu'à ~10 développeurs) sur la Composition API de Vue 3",
          ],
        },
        {
          stack: "Vue.js 3 · TypeScript · Vitest",
          text: "Refonte d'un client lourd en application web, démarrée de zéro : dossier patient, couverture sociale, facturation",
          details: [
            "Initialisation du projet en Vue 3 (Composition API) et TypeScript, configuration ESLint",
            "Dossier patient avec une page de synthèse de toutes ses informations",
            "Création, modification et consultation de la couverture (Sécurité sociale, mutuelle)",
            "Gestion des informations de facturation",
            "Pilotage des dossiers : liste, statistiques sur plusieurs indicateurs clés, recherche multicritère",
            "Tests unitaires avec Vitest",
          ],
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
          details: [
            "Application de gestion de l'activité interne : installations, clients, stocks",
            "Utilisée au quotidien par les ~20 employés du siège",
            "Conception des écrans et développement front React, back .NET",
          ],
        },
        {
          stack: "React Native",
          text: "Reprise de l'app mobile des techniciens qui interviennent sur les installations anti-incendie",
          details: [
            "Reprise et évolution d'une application React Native existante",
            "Utilisée par l'ensemble des techniciens lors de leurs interventions",
          ],
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
          details: [
            "Création complète : identité graphique, design, développement et traductions",
            "R&D sur les événements de scan des terminaux Zebra",
            "Ordres de mouvement (collecte, livraison) récupérés selon le site de production",
            "Scan des codes-barres des produits dans l'ordre de mouvement correspondant",
            "Fonctionnement hors-ligne avec synchronisation serveur",
            "Mouvements internes et changements de statut des produits",
            "Volume de données important : ~1 million d'articles",
            "Mise en ligne sur le Play Store Entreprise, gestion du parc d'appareils, CI/CD Bitrise",
          ],
        },
        {
          stack: "Vue.js · Node.js · Azure DevOps",
          text: "Module web de fin de cycle produit : planning des collectes, relances e-mail automatiques, statistiques",
          details: [
            "Gestion de la fin de cycle et de la récupération des produits chez les clients finaux",
            "Déclarations d'inventaire : templates de mail et de signature, envois automatiques à fréquence paramétrable",
            "Statistiques et mesure des réponses aux demandes d'inventaire",
            "Calendrier hebdomadaire des collectes : création, filtres par statut, confirmation",
            "CI/CD avec Azure DevOps",
          ],
        },
      ],
    },
  ],
};
