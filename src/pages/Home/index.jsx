import cv from "../../assets/documents/cv.pdf";
import styled from 'styled-components';
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import Profile from "../../components/Profile";
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const HomeWrapper = styled.div`
  margin: 4rem; 
  display: flex;
  flex-direction: column;
`

const HomeWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const HomeWrapperBottom = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: space-between;
`

const HomeContent = styled.div`
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const DescriptionStyled = styled.div`
  font-size: 1.5rem;

  & span {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  & p {
    padding-top: 2rem;
    text-align: center;

    & q {
      font-size: 1rem;
      justify-content: center;
      
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;

    & p {
  
      & q {
        font-size: 0.6rem;
        
      }
    }
  
  }
`

const DownloadCV = styled.div`
  padding: 3rem;
  padding-bottom: 1rem;

  a {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};

    &:hover {
      letter-spacing: 2px;
    }
  }
`

function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <HomeWrapper>
      <HomeWrapperTop>
        <Profile />

        <HomeContent>
          <DescriptionStyled isDarkMode={theme === 'dark'}>
            Actuellement en dernière année de <span>Master informatique</span> parcours <span>génie
            logiciel</span>, je suis à la recherche d'un <span>stage en développement logiciel</span>,
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
            
            <p>
              <q>Beaucoup sont ceux qui veulent briller et rare sont ceux qui veulent voir mieux</q>
            </p>
          </DescriptionStyled>

          <DownloadCV isDarkMode={theme === 'dark'}>
            <a href={cv} download="Aguibou_Barry.pdf" className="download">
              Télécharger CV
            </a>
          </DownloadCV>
        </HomeContent>
      </HomeWrapperTop>

      <HomeWrapperBottom>
        <div>Formation</div>
        <div>Competences</div>
        <div>Experiences</div>
      </HomeWrapperBottom>
    </HomeWrapper>
  );
}

export default Home;
