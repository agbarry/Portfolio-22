import cv from '../../assets/documents/CV_BARRY_Aguibou_M2_INFO.pdf'
import { Link } from 'react-router-dom'
import Profile from '../../components/Profile'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import {
  HomeWrapper,
  HomeWrapperTop,
  HomeContent,
  DescriptionStyled,
  DownloadCV
} from './HomeElements'
import { FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { globalData } from '../../utils/data/GlobalData'
import { StyledIllustrator, StyledPresentation, Wrapper } from '../../utils/style/Global'

function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <HomeWrapper id='home'>
        <HomeWrapperTop>
          <Profile />

          <HomeContent>
            <DescriptionStyled isDarkMode={theme === 'dark'}>
              Détenteur d'une double licence (<span>Miage</span> et <span>Informatique</span>)
              et actuellement en dernière année de <span>master informatique </span> 
              parcours <span>génie logiciel</span> à la prestigieuse université de
              Bordeaux, je suis à la recherche d'un
              <span> stage </span> en <span>développement logiciel</span>, qui doit commencer à partir du
              <span> 1er avril 2023</span>, pour une durée de <span>6 mois</span>.
              {/* Pour la petite histoire, c'est en 2012 après l'obtention de mon tout premier PC que j'ai
              eu le déclic pour ce monde merveilleux en forte croissance qui est l'informatique. Alors c'est vrai 
              que un PC sans système d'exploitation n'a quasiment pas d'utilité donc il fallait pour mon cas en
              installé un, ne connaissant rien dans ce domaine à cet époque, il a fallu que je fasse appel à un grand de mon
              quartier(voisin) qui était en dernière année de licence informatique pour se le faire. Si gentil qu'il est il
              m'en a installé windows et quelques logiciels de base(MS Office) et a même profité pour m'en mettre quelques
              films et séries. Voilà enfin tous les ingrédients réunis, j'ai commencé à utiliser ce PC et au fil du temps 
              des questions du genre "Questions sur les logiciels ... " et de là j'ai commencé à surfé sur internet pour
              savoir le domaine qu'il faudrais que je fasse une fois à l'université et bum 'Informatique" apparaîssait tjrs comme 
              réponse à cette question mais de base je voulais faire de la gestion à l'université. Me restant une année d'études au lycée pour
              être à la fac j'ai encore et encore poussé mes recherches et finalement j'ai décidé de faire du MIAGE une fois à l'université */}
              Ce stage me permettra de mettre en pratique mes acquis durant mon
              cycle universitaire et aussi de découvrir le monde professionnel.
              Par la même occasion, si tout se passe bien, je serai très ravi d'obtenir un
              contrat 😍 pour une éventuelle montée en compétences.
              Rassurez-vous que je mettrai en œuvre tout mon potentiel pour le bon 
              déroulement du stage, même si je n'ai quasiment pas d'expériences professionnelles, sachez que 
              durant mon parcours de formation j'ai eu à dévelloper bon nombre de projets(universitaires et personnels) 
              qui sont d'ailleurs décrits sur la page <Link to="/experiences" title='Expériences'>"Expériences"</Link> et cela 
              m'a permi d'être autonome et surtout de pouvoir travailler en équipe.
              <br /> <br />
              Disponible et ouvert à toute proposition, pour toute question ou
              autres choses, n'hésitez pas à me contacter (<Link to="/contact" title='Contactez-moi'>par ici</Link>), je 
              me tiendrai à votre disposition dans l'eventualité d'un entretien.
            </DescriptionStyled>

            <DownloadCV isDarkMode={theme === 'dark'} title="Télécharger mon CV">
              <a href={cv} download="CV_BARRY_Aguibou_M2_INFO.pdf">
                Télécharger CV <FaDownload />
              </a>
            </DownloadCV>
          </HomeContent>
        </HomeWrapperTop>

        <Wrapper isDarkMode={theme === 'dark'} style={{marginLeft: 0, marginRight: 0}}>
          {globalData.map((data) => (
            <StyledPresentation key={`${data.id}`} title={data.title}>
              <Link to={data.link}>
                <h2>{data.name}</h2>
                <StyledIllustrator src={data.illustrator} alt={data.alt} />
              </Link>
            </StyledPresentation>
          ))}
        </Wrapper>
      </HomeWrapper>
    </motion.div>
  )
}

export default Home
