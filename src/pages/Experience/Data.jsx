/* Liste des expériences Universitaires */
const experienceList = [
  {
    id: 0,
    projectName: 'EasyPAP',
    entrepriseName: 'Université de Bordeaux',
    projectTitle:
      'Simulation d’un tas de sable abélien en programmation parallèle. Ce projet à été réalisé tout au long ' +
      'du second semestre de master 1 et se subdivise en quatre rendus(parties), les trois premiers sont fait ' +
      'en groupe de deux(binôme) et le dernier rendu en individuel. ' +
      "L'objectif est ",
    description: ['Travail en équipe'],
    langages: ['C', 'C++', 'OpenMP', 'OpenCL', 'MPI', 'GIT/GITLAB'],
    documents: [
      {
        id: 0,
        name: 'Rapport1',
        content: require('../../assets/documents/rapportPAP1.pdf'),
        title: 'Rapport de la première partie',
      },
      {
        id: 1,
        name: 'Rapport2',
        content: require('../../assets/documents/rapportPAP2.pdf'),
        title: 'Rapport de la deuxième partie',
      },
      {
        id: 2,
        name: 'Rapport3',
        content: require('../../assets/documents/rapportPAP3.pdf'),
        title: 'Rapport de la troisième partie',
      },
      {
        id: 3,
        name: 'Rapport4',
        content: require('../../assets/documents/rapportPAP4.pdf'),
        title: 'Rapport de la dernière partie',
      },
    ],
    date: '2021-2022',
  },

  {
    id: 1,
    projectName: 'Logiciel ludo-éducatif',
    entrepriseName: 'Université de Bordeaux',
    projectTitle:
      'Conception d’une application ludique sur téléphone et tablette à destination des enfants présentants des retards de développement cognitifs.',
    description: [
      'Participation au choix des différents jeux à implémenter',
      'Élaboration du cahier des charges',
      'Conception des niveaux',
      'Implémentation des différents jeux',
    ],
    langages: ['Java', 'Android studio'],
    documents: [
      {
        id: 0,
        name: 'Mémoire',
        content: require('../../assets/documents/Memoire_ludoed.pdf'),
        title: 'Mémoire logiciel ludo-éducatif',
      },
      {
        id: 1,
        name: 'Présentation',
        content: require('../../assets/documents/Présentation_ludoed.pdf'),
        title: 'Rapport pour la présentation',
      },
    ],
    date: '2020-2021',
  },

  {
    id: 2,
    projectName: 'Bacchanator',
    entrepriseName: 'Université de Bordeaux',
    projectTitle:
      "Conception d’une application web suite à l'appel à projet du musée des beaux-arts de " +
      "Bordeaux pour valoriser ses œuvres. Inspiré du jeu Akinator, ce jeu permet de deviner une "+
      "œuvre du musée à travers une série de questions portant sur les caractéristiques de ladite "+
      "œuvre posées à l'utilisateur.",
    description: [
      'Participation au choix du jeu à réaliser',
      'Élaboration du cahier des charges',
      'Implémentation des différentes fonctionnalités',
    ],
    langages: ['Django', 'Python', 'Html', 'Css', 'Bootstrap'],
    documents: [
      {
        id: 0,
        name: 'Mémoire',
        content: require('../../assets/documents/doc_bacchanator.pdf'),
        title: 'Document technique Bacchanator',
      },
    ],
    date: '2019-2020',
  },

  {
    id: 3,
    projectName: 'Ubbot Assist',
    entrepriseName: 'Université de Bordeaux',
    projectTitle:
      'Un assistant virtuel(chatbot) réalisé dans le cadre de l’UE – Projet technologique pour valoriser l’innovation numérique au sein de' +
      ' l’Université de Bordeaux.',
    description: [
      "Analyse de l’export de l'offre de formation du collège S&T",
      'Élaboration du cahier des charges',
      'Création et liaison des entités(Entity) et intentions(Intents)',
      "Mise en place d'une Base de données",
      'Construction du dialogue',
      "Mise en place d'un site web et intégration du bot",
    ],
    langages: ['IBM Watson Assistant', 'Django', 'Bootstrap'],
    documents: [
      {
        id: 0,
        name: 'Rapport',
        content: require('../../assets/documents/Rapport_ubbot.pdf'),
        title: 'Slides de présentation',
      },
      {
        id: 1,
        name: 'CDC',
        content: require('../../assets/documents/cdc_ubbot.pdf'),
        title: 'Cahier des charges Ubbot Assist',
      },
    ],
    date: '2019-2020',
  },

  {
    id: 4,
    projectName: 'Duck Of The Realm',
    entrepriseName: 'Université de Bordeaux',
    projectTitle:
      'Un Jeu se déroulant dans un royaume lointain, ou chaque joueur incarne un duc en lutte pour devenir le nouveau roi. Le but dans ce' +
      ' projet est la mise en place des notions de la programmation orientée objet. ',
    description: ['Analyse de l’existant'],
    langages: ['Java', 'JavaFX', 'Eclipse'],
    documents: [
      {
        id: 0,
        name: 'Rapport',
        content: require('../../assets/documents/README_dotr.md'),
        title: 'Rapport Duck Of The Realm',
      },
    ],
    date: '2019-2020',
  },
]

/* Liste des experiences personnelles */
const personalExperiences = [
  {
    id: 0,
    projectName: 'Portfolio',
    projectTitle:
      'Conception de ce portfolio servant à présenter mon parcours de formation, mes compétences et mes expériences universitaires et professionelles.' +
      ' Il est réalisé avec le framework React js et la mise en forme est faite avec le CSS-in-JS  ',
    description: [
      'Utilisation de npx pour la création du projet',
      'Utilisation de react-router-dom pour la gestion du rooting',
      'Utilisation de react-icons pour les icônes du site',
      'Utilisation de styled-components(CSS-in-JS) pour la mise en forme',
      'Utilisation de quelques hooks(useState, useContext)',
    ],
    langages: ['React js', 'CSS-in-JS', 'VS code', 'Github'],
    documents: [
      {
        id: 0,
        name: 'Prototype',
        content: require('../../assets/documents/README_dotr.md'),
        title: 'Prototype du portfolio sur figma',
      },
    ],
    date: '2022',
  },

  {
    id: 1,
    projectName: 'GEC',
    entrepriseName: 'Semaine du numérique',
    projectTitle:
      "Présentation d'un logiciel de gestion d'Etat civil(Naissance, Mariage, Decès) lors d'un coucours" +
      " visant à valoriser l'innovation numérique dans divers secteurs en Guinée.",
    description: ["Analyse de l'existant", "Travail d'équipe"],
    date: '2018',
  },
]

/* Liste des autres experiences */
const othersExperiences = [
  {
    id: 0,
    projectName: 'Équipier polyvalent en restauration',
    entrepriseName: 'Yaki-Yaki',
    projectTitle:
      'Contrat étudiant en temps partiel chez Yaki-Yaki Sushi(Bègles) depuis mi-Avril 2020. Un restaurant asiatique' +
      ' spécialisé dans la préparation de sushi',
    description: [
      'Aide à la préparation des commandes',
      'Livraison en Scooter/Voiture des commandes',
    ],
    date: '2020-2022',
  },

  {
    id: 1,
    projectName: 'Facteur',
    entrepriseName: 'La Poste de Mériadeck',
    projectTitle:
      "Mission d'interim en tant que Facteur(Agent de collecte) à la Poste de Mérideck(Bordeaux), débutant " +
      'en fin juillet 2022 pour une durée de 1 mois',
    description: [
      'Collecte et distribution de courriers en voiture',
      'Tri et flashage de courriers',
      'Diverses manutentions',
    ],
    date: '2022',
  },

  {
    id: 2,
    projectName: 'Agent de production',
    entrepriseName: 'DocOne',
    projectTitle:
      "Mission d'interim en tant qu'Agent de production chez DocOne à Mérignac(Bordeaux), débutant en mi-juillet 2021" +
      ' pour une durée de 1 mois',
    description: [
      'Mise sous pli et affranchissement de courriers',
      'Diverses manutentions',
    ],
    date: '2021',
  },
]

/* Liste globale de toutes les expériences  */
export const global = [
  {
    id: 0,
    name: 'Projets universitaires',
    isOpen: 'EL',
    content: experienceList,
  },
  {
    id: 1,
    name: 'Projets personnels',
    isOpen: 'PE',
    content: personalExperiences,
  },
  {
    id: 2,
    name: 'Diverses expériences',
    isOpen: 'OE',
    content: othersExperiences,
  },
]
