/* Liste des liens de redirections sur la page d'accueil */
export const aboutInformation = [
  {
    id: 0,
    date: '2022-2023',
    description:
      "Master 2 informatique, spécialisation génie logiciel à l'université de Bordeaux(en cours)",
  },

  {
    id: 1,
    date: '2021-2022',
    description:
      "Master 1 informatique, spécialisation génie logiciel à l'université de Bordeaux",
  },

  {
    id: 2,
    date: '2018-2020',
    description: "Diplôme de licence informatique à l'université de Bordeaux",
  },

  {
    id: 3,
    date: '2014-2017',
    description:
      'Diplôme de licence en Miage à la plus lionne des universités de la capitale( Université Kofi Annan de Guinée)',
  },
]

/* Mes centres d'intérêts */
const interestList = [
  {
    id: 0,
    title: 'Lecture',
    description: [{ id: 0, name: 'Développement personnel' }],
  },

  {
    id: 1,
    title: 'Sport',
    description: [
      { id: 0, name: 'Football' },
      { id: 1, name: 'Cyclisme' },
    ],
  },

  {
    id: 2,
    title: 'Vie associative',
    description: [
      {
        id: 0,
        name: 'AGEEBS',
      },
    ],
  },
]

export const interest = [
  { id: 0, title: "Centres d'intérêts", content: interestList },
]

/* Mes langues parlées */
const languagesList = [
  { id: 0, name: 'Pulaar', level: 'Maternelle' },

  { id: 1, name: 'Français', level: 'Billingue' },

  { id: 2, name: 'Anglais', level: 'Débutant' },
]

export const languages = [{ id: 0, title: 'Langues', content: languagesList }]

/* Mes qualités personnelles */
export const personalQuality = [
  {
    id: 0,
    title: 'Qualités personnelles',
    content: [
      { id: 0, name: 'Dynamique' },
      { id: 1, name: 'Motivé' },
      { id: 2, name: 'Organisé' },
      { id: 3, name: 'Autonome' },
      { id: 4, name: "Esprit d'équipe" },
    ],
  },
]
