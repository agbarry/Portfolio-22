import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardsWrapper = styled.div`
    margin: 1rem;
`

const ProjectHead = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.0rem;
    font-size: 1.8rem;

    & h4 {
        color: ${colors.color6}
    }

    & span {
        color: ${colors.black1};
    }

    @media screen and (max-width: 960px) {
        font-size: 1.5rem;
      }
`

const ProjectTitle = styled.h5`
    font-size: 1.4rem;

    @media screen and (max-width: 960px) {
        font-size: 1.1rem;
    }
`

const ProjectDescription = styled.ul`
    font-size: 1.0rem;
    padding-bottom: 1rem;

    & li {
        list-style-position: inside;
        list-style-type: circle;
    }
    @media screen and (max-width: 960px) {
        font-size: 0.8rem;
    }
`

const ProjectLangages = styled.div`
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row
    align-items: right;
    text-align: right;
    justify-content: right;

    & span {
        color: ${colors.color6};
        padding-right: 0.4rem;
    }

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }
`

const ProjectDocuments = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & li {
        margin: 2rem;

        & a {
            color: ${colors.black1}
        }
    }

    @media screen and (max-width: 960px) {
        font-size: 0.8rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        
    }
`

/* Fonction representant une expérience  */
function ExperienceCard( { projectName, entrepriseName,
    projectTitle, description, langages, documents, date} ) {

  return (
    <CardsWrapper className="content">
      <ProjectHead>
        <h4>
            {projectName} - {entrepriseName} 
        </h4>
        <span> {date} </span>
      </ProjectHead>

      <ProjectTitle> {projectTitle} </ProjectTitle>
      
      <ProjectDescription>
        {description.map((descript, index) => (
            <li key={`${index}`}>
                {descript}
            </li>
        ))}
      </ProjectDescription>
      
      <ProjectLangages>
        <p> Langages et outils: [ </p>
        {langages.map((langage, index) => (
            <span key={`${langage}-${index}`}>
                {langage}{index < langages.length -1 ? <span>, </span> : null} 
            </span>
        ))}
        ]
      </ProjectLangages>

      <ProjectDocuments>
        {documents.map((document) => (
            <li key={`${document.id}`}>
                <a href={document.content} download={document.title} title={document.title} className='download'>
                Voir {document.name}
                </a>
            </li>
        ))}
      </ProjectDocuments>
    </CardsWrapper>
  );
}

export default ExperienceCard;
