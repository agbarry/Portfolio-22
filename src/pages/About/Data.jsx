/* Liste des liens de redirections sur la page d'accueil */
export const aboutInformation = [
  {
    id: 0,
    date: '2021-2023',
    description:
      "Master informatique (génie logiciel) -> Université de Bordeaux(en cours)",
  },

  {
    id: 1,
    date: '2018-2020',
    description: "Diplôme de licence informatique -> Université de Bordeaux",
  },

  {
    id: 2,
    date: '2014-2017',
    description:
      'Diplôme de licence en Miage -> Université Kofi Annan de Guinée',
  },
]

/* Mes centres d'intérêts */
const interestList = [
  {
    id: 0,
    title: 'Lecture',
  },

  {
    id: 1,
    title: 'Sport(Football, Couse à pied)',
  },

  {
    id: 2,
    title: 'Vie associative(AGEEBS)'
  },
]

export const interest = [
  { id: 0, title: "Centres d'intérêts", content: interestList },
]

/* Mes langues parlées */
const languagesList = [
  { id: 0, name: 'Pulaar', level: 'Maternelle' },

  { id: 1, name: 'Français', level: 'Billingue' },

  { id: 2, name: 'Anglais', level: 'Compétence professionnelle limitée' },
]

export const languages = [{ id: 0, title: 'Langues', content: languagesList }]

/* Mes qualités personnelles */
export const personalQuality = [
  {
    id: 0,
    title: 'Qualités personnelles',
    content: [
      { id: 0, name: 'Dynamique' },
      { id: 1, name: 'Organisé' },
      { id: 2, name: 'Autonome' },
      { id: 3, name: "Esprit d'équipe" },
      { id: 4, name: "Forte capacité d'adaptation" },
      { id: 5, name: "Sociable" },
    ],
  },
]
