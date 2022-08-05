import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

/* Mise en forme de la page education avec css-in-js */
export const InfosContainer = styled.div`
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

export const LogoStyled = styled.img`
  height: 50px;
  width: 120px;
  padding-bottom: 10px;
`;

export const YearStyled = styled.span`
  grid-area: Y;
  text-align: center;
  // color: ${colors.color6};

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

export const EducationCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: "Y D";
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin: 1rem;
  ${animeBackground({
    color: colors.color14,
    border: "20px",
    deg: "-7deg",
    percent1: "5%",
    percent2: "25%",
  })}

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const EducationContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  margin: 5rem;
`;