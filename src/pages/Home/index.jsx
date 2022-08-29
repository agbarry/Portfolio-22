import cv from '../../assets/documents/cv.pdf'
import { Link } from 'react-router-dom'
import Profile from '../../components/Profile'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import {
  HomeWrapper,
  HomeWrapperTop,
  HomeContent,
  DescriptionStyled,
  DownloadCV,
  HomeWrapperBottom,
  StyledIllustrator,
  StyledPresentation,
} from './HomeElements'
import { FaDownload } from 'react-icons/fa'
import { homeLinks } from './Data'
import { motion } from 'framer-motion'

function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <HomeWrapper>
        <HomeWrapperTop>
          <Profile />

          <HomeContent>
            <DescriptionStyled isDarkMode={theme === 'dark'}>
              Détenteur d'une double licence(<span>Miage</span> et <span>Informatique</span>)
              et actuellement en dernière année de <span>master informatique </span> 
              parcours <span>génie logiciel</span> à la prestigieuse universté de
              Bordeaux, je suis à la recherche d'un
              <span> stage </span> en <span>développement logiciel</span>, qui commencera le
              <span> 1er avril 2023</span>, pour une durée de <span>6 mois</span>.
              Ce stage me permettra de mettre en pratique mes acquis durant mon
              cycle universitaire et aussi de découvrir le monde professionnel.
              Par la même occasion si tout se passe bien je serai très ravi d'un
              contrat(CDI) 😍 pour une éventuelle montée en compétences.
              Rassurez-vous que je mettrai en oeuvre tout mon potentiel pour que
              ça se passe bien car le dynamisme, la motivation, l'organisation,
              l'autonomie, l'esprit d'équipe et sans oublié le côté humain définit
              ma personnalité et cela ne m'a jamais manquer durant mes différents
              projets universitaires et aussi mes expériences professionnelles.
              <br />
              Disponible et ouvert à toute proposition, pour toute question ou
              autres choses, n'hésitez pas à me contacter et c'est par
              <Link to="/contact"> ici</Link>.
            </DescriptionStyled>

            <DownloadCV isDarkMode={theme === 'dark'} title="Télécharger mon CV">
              <a href={cv} download="Aguibou_Barry.pdf">
                Télécharger CV <FaDownload />
              </a>
            </DownloadCV>
          </HomeContent>
        </HomeWrapperTop>

        <HomeWrapperBottom isDarkMode={theme === 'dark'}>
          {homeLinks.map((home) => (
            <StyledPresentation key={`${home.id}`} title={home.title}>
              <Link to={home.link}>
                <h2>{home.name}</h2>
                <StyledIllustrator src={home.illustrator} alt={home.alt} />
              </Link>
            </StyledPresentation>
          ))}
        </HomeWrapperBottom>
      </HomeWrapper>
    </motion.div>
  )
}

export default Home
