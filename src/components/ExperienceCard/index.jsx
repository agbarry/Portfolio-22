import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import PropTypes from "prop-types";
import {
  CardsWrapper,
  ProjectDescription,
  ProjectDocuments,
  ProjectHead,
  ProjectLanguages,
  ProjectTitle,
} from "../../pages/Experience/ExperienceElements";

/* Fonction representant une expérience  */
function ExperienceCard({
  projectName,
  entrepriseName,
  projectTitle,
  description,
  langages,
  documents,
  date,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <CardsWrapper>
      <ProjectHead isDarkMode={theme === "dark"}>
        <h4>
          {projectName} {entrepriseName && <>- {entrepriseName}</>}
        </h4>
        <span> {date} </span>
      </ProjectHead>

      <ProjectTitle> {projectTitle} </ProjectTitle>

      <ProjectDescription>
        {description.map((descript, index) => (
          <li key={`${index}`}>{descript}</li>
        ))}
      </ProjectDescription>

      <ProjectLanguages isDarkMode={theme === "dark"}>
        {langages.length > 0 ? (
          <>
            <span>Langages et outils: [</span>
            {langages.map((langage, index) => (
              <p key={`${langage}-${index}`}>
                {langage}
                {index < langages.length - 1 ? <>, </> : null}
              </p>
            ))}
            <span>]</span>
          </>
        ) : null}
      </ProjectLanguages>

      <ProjectDocuments isDarkMode={theme === "dark"}>
        {documents.length > 0
          ? documents.map((document) => (
              <li key={`${document.id}`}>
                <a
                  href={document.content}
                  download={document.title}
                  title={document.title}
                >
                  {document.name}
                </a>
              </li>
            ))
          : null}
      </ProjectDocuments>
    </CardsWrapper>
  );
}

/* Pour la gestion du typage des données */
ExperienceCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  entrepriseName: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  langages: PropTypes.array.isRequired,
  documents: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
};

/* Utilisation des valeurs par défaut pour le composant */
ExperienceCard.defaultProps = {
  projectName: "",
  entrepriseName: "",
  projectTitle: "",
  description: [],
  langages: [],
  documents: [],
  date: "",
};

export default ExperienceCard;
