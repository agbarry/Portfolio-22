import { 
  EducationCardWrapper, 
  InfosContainer, 
  LogoStyled, 
  YearStyled 
} from "../../pages/Education/EducationElements";


function EducationCard({ name, department, field, level, focus, year, logo }) {
  return (
    <EducationCardWrapper>
      <YearStyled>
        <ul>
          <li> {year} </li>
        </ul>
        {year === "2022-2023" ? <p>en cours</p> : null}
      </YearStyled>

      <InfosContainer>
        <h2> {name} </h2>
        <h5> {department} </h5>
        {logo ? (
          <LogoStyled src={logo} alt="logo univesité" />
        ) : (
          <i className="fas fa-graduation-cap" />
        )}
        <h5>
          {level} {field}
        </h5>
        {focus && <h6> [{focus}]</h6>}
      </InfosContainer>
    </EducationCardWrapper>
  );
}

export default EducationCard;
