import EducationCard from "../../components/EducationCard";
import { educationList } from "./Data";
import { EducationContainer } from "./EducationElements";

function Education() {
  return (
    <EducationContainer>
      {educationList.map((education) => (
        <EducationCard
          key={`${education.id}`}
          name={education.name}
          department={education.department}
          field={education.field}
          level={education.level}
          focus={education.focus}
          year={education.year}
          logo={education.logo}
        />
      ))}
    </EducationContainer>
  );
}

export default Education;
