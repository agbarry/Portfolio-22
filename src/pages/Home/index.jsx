import cv from "../../assets/documents/cv.pdf";
import styled from 'styled-components';
import colors from "../../utils/style/colors";

const HomeWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const HomeContent = styled.div`
  font-size: 1.5rem;
  padding-bottom: 1rem;

  & span {
    color: ${colors.color6};
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

  & a {
    color: ${colors.black1}
  }
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContent>
        Actuellement en dernière année de <span>Master informatique</span> parcours <span>génie
        logiciel</span>, je suis à la recherche d'un <span>stage en développement logiciel</span>,
        qui commencera le <span>1er avril 2023</span>, pour une durée de <span>6 mois</span>. Ce stage me
        permettra de mettre en pratique mes acquis durant mon cycle
        universitaire et aussi de découvrir le monde professionnel. Par la même occasion si tout ce passe bien je serai très
        ravi d'un CDI 😻  pour une eventuelle montée en compétences. Rassurez-vous
        que je mettre en oeuvre tout mon potentiel pour que ça soit le cas car
        le dynamisme, la motivation, l'organisation, l'autonomie, l'esprit
        d'équipe et sans oublié le côté humain sont mes mots-clés et cela ne
        m'ai jamais manquer durant mes différents projets universitaires et
        aussi mes expériences professionnelles. 
        
        <p>
          <q>Beaucoup sont ceux qui veulent briller et rare sont ceux qui veulent voir mieux</q>
        </p>
      </HomeContent>

      <DownloadCV>
        <a href={cv} download="Aguibou_Barry.pdf" className="download">
          Télécharger CV
        </a>
      </DownloadCV>
    </HomeWrapper>
  );
}

export default Home;
