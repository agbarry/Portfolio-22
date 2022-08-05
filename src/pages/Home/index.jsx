import cv from "../../assets/documents/cv.pdf";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import {  
  HomeWrapper,
  HomeWrapperTop, 
  HomeContent, 
  DescriptionStyled, 
  DownloadCV,
  HomeWrapperBottom,
  StyledIllustrator
} from './HomeElements';
import graduation from '../../assets/images/education.svg';
import certification from '../../assets/images/certification.svg';
import project from '../../assets/images/project1.svg';


function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <HomeWrapper>

      <HomeWrapperTop>
        <Profile />

        <HomeContent>
          <DescriptionStyled isDarkMode={theme === 'dark'}>
            Actuellement en dernière année de <span>Master informatique</span> parcours <span>génie
            logiciel</span> à la prestigieuse universté de Bordeaux, je suis à la recherche d'un <span>stage en développement logiciel</span>,
            qui commencera le <span>1er avril 2023</span>, pour une durée de <span>6 mois</span>. Ce stage me
            permettra de mettre en pratique mes acquis durant mon cycle
            universitaire et aussi de découvrir le monde professionnel. Par la même occasion si tout se passe bien je serai très
            ravi d'un CDI 😻  pour une éventuelle montée en compétences. Rassurez-vous
            que je mettrai en oeuvre tout mon potentiel pour que ça soit le cas car
            le dynamisme, la motivation, l'organisation, l'autonomie, l'esprit
            d'équipe et sans oublié le côté humain définit ma personnalité et cela ne
            m'ait jamais manqué durant mes différents projets universitaires et
            aussi mes expériences professionnelles.<br/>
            Disponible et ouvert à toute proposition, pour toute question ou autres choses, n'hésitez pas à 
            me contacter et c'est par <Link to="/contact">ici</Link>. 
            
            {/* <p>
              <q>Beaucoup sont ceux qui veulent briller et rare sont ceux qui veulent voir mieux</q>
            </p> */}
          </DescriptionStyled>

          <DownloadCV isDarkMode={theme === 'dark'}>
            <a href={cv} download="Aguibou_Barry.pdf" className="download">
              Télécharger CV
            </a>
          </DownloadCV>
        </HomeContent>
      </HomeWrapperTop>

      <HomeWrapperBottom>
        <div>
          <h2>Ma formation</h2>
          <StyledIllustrator src={graduation} alt="Ma formation" />
        </div>

        <div>
          <h2>Mes compétences</h2>
          <StyledIllustrator src={certification} alt="Ma formation" />
        </div>

        <div>
          <h2>Mes expériences</h2>
          <StyledIllustrator src={project} alt="Ma formation" />
        </div>
      </HomeWrapperBottom>
    </HomeWrapper>
  );
}

export default Home;
