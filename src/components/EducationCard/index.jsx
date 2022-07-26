import styled from "styled-components";
import colors from "../../utils/style/colors";

/* Mise en forme avec css-in-js */
const InfosContainer = styled.div`
  grid-area: D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & i {
    color: ${colors.special};
    font-size: 3rem;
  }

  & h2 {
    color: ${colors.color6};
  }
`;

const LogoStyled = styled.img`
  height: 50px;
  width: 120px;
  padding-bottom: 10px;
`;

const YearStyled = styled.span`
  grid-area: Y;
  text-align: center;
  color: ${colors.color13};

  & ul {
    & li {
      list-style-position: inside;
      list-style-type: square;
    }
  }

  & p {
    color: ${colors.color6};
  }
`;

const EducationCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: "Y D";
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin: 1rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

function EducationCard({ name, department, field, level, focus, year, logo }) {
  return (
    <EducationCardWrapper className="content">
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
