import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
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
      <ProjectHead>
        <h4>
          {projectName} - {entrepriseName}
        </h4>
        <span> {date} </span>
      </ProjectHead>

      <ProjectTitle> {projectTitle} </ProjectTitle>

      <ProjectDescription>
        {description.map((descript, index) => (
          <li key={`${index}`}>{descript}</li>
        ))}
      </ProjectDescription>

      <ProjectLanguages>
        <p> Langages et outils: [ </p>
        {langages.map((langage, index) => (
          <span key={`${langage}-${index}`}>
            {langage}
            {index < langages.length - 1 ? <span>, </span> : null}
          </span>
        ))}
        ]
      </ProjectLanguages>

      <ProjectDocuments isDarkMode={theme === "dark"}>
        {documents.map((document) => (
          <li key={`${document.id}`}>
            <a
              href={document.content}
              download={document.title}
              title={document.title}
              className="download"
            >
              Voir {document.name}
            </a>
          </li>
        ))}
      </ProjectDocuments>
    </CardsWrapper>
  );
}

export default ExperienceCard;
