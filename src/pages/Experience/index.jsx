import ExperienceCard from "../../components/ExperienceCard";
import { experienceList } from "./Data";
import { ExperienceWrapper } from "./ExperienceElements";


function Experience() {
  return (
    <ExperienceWrapper>
      <h1>Projets universitaires</h1>
      
      {experienceList.map((experience) => (
        <ExperienceCard
          key={`${experience.id}`}
          projectName={experience.projectName}
          entrepriseName={experience.entrepriseName}
          projectTitle={experience.projectTitle}
          description={experience.description}
          langages={experience.langages}
          documents={experience.documents}
          date={experience.date}
        />
      ))}
    </ExperienceWrapper>
  );
}

export default Experience;
