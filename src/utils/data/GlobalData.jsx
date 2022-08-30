import graduation from "../../assets/svg/graduation.svg";
import certification from "../../assets/svg/certificate.svg";
import project from "../../assets/svg/project2.svg";

/* Liste des liens de redirections sur la page d'accueil */
export const globalData = [
  {
    id: 0,
    name: "Mon parcours",
    link: "/formation",
    illustrator: graduation,
    title:
      "En me cliquant dessus, vous verrez le parcours de formation de mon concepteur",
    alt: "Ma formation",
  },

  {
    id: 1,
    name: "Mes compétences",
    link: "/competences",
    illustrator: certification,
    title:
      "En me cliquant dessus, vous verrez les compétences de mon concepteur",
    alt: "Mes compétences",
  },

  {
    id: 2,
    name: "Mes expériences",
    link: "/experiences",
    illustrator: project,
    title:
      "En me cliquant dessus, vous verrez les expériences de mon concepteur",
    alt: "Mes expériences",
  },
];
