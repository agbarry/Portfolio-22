import styled from "styled-components";
import EducationCard from "../../components/EducationCard";
import logoUB from "../../assets/images/UB.png";

/* Liste des formations */
const educationList = [
  {
    id: 0,
    name: "Université de bordeaux",
    department: "UFR Science et technologies",
    field: "Informatique",
    level: "Master 2",
    focus: "Génie logiciel",
    year: "2022-2023",
    logo: logoUB,
  },
  {
    id: 1,
    name: "Université de bordeaux",
    department: "UFR Science et technologies",
    field: "Informatique",
    level: "Master 1",
    focus: "Génie logiciel",
    year: "2021-2022",
    logo: logoUB,
  },
  {
    id: 2,
    name: "Université de bordeaux",
    department: "UFR Science et technologies",
    field: "Informatique",
    level: "Licence",
    year: "2018-2020",
    logo: logoUB,
  },
  {
    id: 3,
    name: "Université Kofi Annan de Guinée",
    department: "Département informatique",
    field: "Miage",
    level: "Licence",
    year: "2014-2017",
  },
];


/* Mise en forme */
const EducationContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  margin: 5rem;
`;

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
