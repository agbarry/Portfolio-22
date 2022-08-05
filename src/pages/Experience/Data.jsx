import mLudoEd from "../../assets/documents/Memoire_ludoed.pdf";
import pLudoEd from "../../assets/documents/Présentation_ludoed.pdf";
import bacc from "../../assets/documents/doc_bacchanator.pdf";
import rUbbot from "../../assets/documents/Rapport_ubbot.pdf";
import cUbbot from "../../assets/documents/cdc_ubbot.pdf";
import rDOTR from "../../assets/documents/README_dotr.md";
import rPAP1 from "../../assets/documents/rapportPAP1.pdf";
import rPAP2 from "../../assets/documents/rapportPAP2.pdf";
import rPAP3 from "../../assets/documents/rapportPAP3.pdf";
import rPAP4 from "../../assets/documents/rapportPAP4.pdf";

/* Liste des expériences */
export const experienceList = [
  {
    id: 0,
    projectName: "EasyPAP",
    entrepriseName: "Université de Bordeaux",
    projectTitle:
      "Simulation d’un tas de sable abélien en programmation parallèle. Ce projet à été réalisé tout au long " +
      "du second semestre de master 1 et se subdivise en quatre rendus(parties), les trois premiers sont fait " +
      "en groupe de deux(binôme) et le dernier rendu en individuel. " +
      "L'objectif est ",
    description: ["Travail en équipe"],
    langages: ["C", "C++", "OpenMP", "OpenCL", "MPI", "GIT/GITLAB"],
    documents: [
      {
        id: 0,
        name: "Rapport1",
        content: rPAP1,
        title: "Rapport de la première partie",
      },
      {
        id: 1,
        name: "Rapport2",
        content: rPAP2,
        title: "Rapport de la deuxième partie",
      },
      {
        id: 2,
        name: "Rapport3",
        content: rPAP3,
        title: "Rapport de la troisième partie",
      },
      {
        id: 3,
        name: "Rapport4",
        content: rPAP4,
        title: "Rapport de la dernière partie",
      },
    ],
    date: "2021-2022",
  },

  {
    id: 1,
    projectName: "Logiciel ludo-éducatif",
    entrepriseName: "Université de Bordeaux",
    projectTitle:
      "Conception d’une application ludique sur téléphone et tablette à destination des enfants présentants des retards de développement cognitifs.",
    description: [
      "Participation au choix des différents jeux à implémenter",
      "Élaboration du cahier des charges",
      "Conception des niveaux",
      "Implémentation des différents jeux",
    ],
    langages: ["Java", "Android studio"],
    documents: [
      {
        id: 0,
        name: "Mémoire",
        content: mLudoEd,
        title: "Mémoire logiciel ludo-éducatif",
      },
      {
        id: 1,
        name: "Présentation",
        content: pLudoEd,
        title: "Rapport pour la présentation",
      },
    ],
    date: "2020-2021",
  },

  {
    id: 2,
    projectName: "Bacchanator",
    entrepriseName: "Université de Bordeaux",
    projectTitle:
      "Né suite à l'appel à projet du musée des beaux-arts de Bordeaux. Inspiré du jeu Akinator, ce jeu permet de deviner une oeuvre " +
      "du musée des beaux-arts de Bordeaux à travers une serie de questions posées à l'utilisateur.",
    description: [
      "Participation au choix du jeu à réaliser",
      "Élaboration du cahier des charges",
      "Implémentation des différentes fonctionnalités",
    ],
    langages: ["Django", "Python", "Html", "Css", "Bootstrap"],
    documents: [
      {
        id: 0,
        name: "Mémoire",
        content: bacc,
        title: "Document technique Bacchanator",
      },
    ],
    date: "2019-2020",
  },

  {
    id: 3,
    projectName: "Ubbot Assist",
    entrepriseName: "Université de Bordeaux",
    projectTitle:
      "Un assistant virtuel(chatbot) réalisé dans le cadre de l’UE – Projet technologique pour valoriser l’innovation numérique au sein de" +
      " l’Université de Bordeaux.",
    description: [
      "Analyse de l’export de l'offre de formation du collège S&T",
      "Élaboration du cahier des charges",
      "Création et liaison des entités(Entity) et intentions(Intents)",
      "Mise en place d'une Base de données",
      "Construction du dialogue",
      "Mise en place d'un site web et intégration du bot",
    ],
    langages: ["IBM Watson Assistant", "Django", "Bootstrap"],
    documents: [
      {
        id: 0,
        name: "Rapport",
        content: rUbbot,
        title: "Slides de présentation",
      },
      {
        id: 1,
        name: "CDC",
        content: cUbbot,
        title: "Cahier des charges Ubbot Assist",
      },
    ],
    date: "2019-2020",
  },

  {
    id: 4,
    projectName: "Duck Of The Realm",
    entrepriseName: "Université de Bordeaux",
    projectTitle:
      "Un Jeu se déroulant dans un royaume lointain, ou chaque joueur incarne un duc en lutte pour devenir le nouveau roi. Le but dans ce" +
      " projet est la mise en place des notions de la programmation orientée objet. ",
    description: ["Analyse de l’existant"],
    langages: ["Java", "JavaFX", "Eclipse"],
    documents: [
      {
        id: 0,
        name: "Rapport",
        content: rDOTR,
        title: "Rapport Duck Of The Realm",
      },
    ],
    date: "2019-2020",
  },
];
