/* Liste des compétences en langage de programmation
  --> Affichage avec une barre de progression
*/
export const knowledgesList = [
  { id: 0, name: "Java", xp: 4.2 },
  { id: 1, name: "JavaScript", xp: 2.1 },
  { id: 2, name: "React", xp: 1.5 },
  { id: 3, name: "Node Js", xp: 1.1 },
  { id: 4, name: "Angular", xp: 0.8 },
  { id: 5, name: "Django", xp: 1.2 },
  { id: 6, name: "Spring Boot", xp: 0.6 },
  { id: 7, name: "Python", xp: 2.6 },
  { id: 8, name: "C/ C++", xp: 3.8 },
];



/* Autres listes de languages/frameworks */
const web = [
  { id: 0, name: "Html 5" },
  { id: 1, name: "CSS" },
  { id: 2, name: "CSS-in-JS" },
  { id: 3, name: "SCSS" },
  { id: 4, name: "Flask" },
  { id: 5, name: "WordPress" },
  { id: 6, name: "IBM Watson" },
  { id: 7, name: "Dialogflow" },
];

/* Programmation parallel */
const parallel = [
  { id: 0, name: "OpenMP" },
  { id: 1, name: "OpenCL" },
  { id: 2, name: "MPI" },
];

/* Liste des IDE/outils utiles à la programmation */
const toolsList = [
  { id: 0, name: "Visual Studio Code" },
  { id: 1, name: "Eclipse" },
  { id: 2, name: "Android Studio" },
  { id: 3, name: "Github" },
  { id: 4, name: "LaTex" },
  { id: 5, name: "Trello" },
  { id: 6, name: "Figma" }
];

/* Autres compétences en développement */
const othersKnowledges = [
  { id: 0, name: "Scrum" },
  { id: 1, name: "Trello" },
  { id: 2, name: "Jira" }
];


/* Liste globale de toutes les autres compétences  
   --> Affichage sans barre de progression
*/
export const global = [
  { id: 0, name: "Web", content: web },
  { id: 1, name: "Gestion de projet", content: othersKnowledges },
  { id: 2, name: "Programmation parallèle", content: parallel },
  { id: 3, name: "IDE & Outils", content: toolsList },
];
