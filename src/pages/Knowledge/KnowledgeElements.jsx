import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

/* Mise en forme de la page Knowledge */
export const KnowledgeWrapper = styled.div`
  margin: 5rem;
`;

export const KnowledgeContent = styled.div`
  padding-left: 1rem;

  ${animeBackground({
    color: colors.color14,
    border: "20px",
    deg: "-7deg",
    percent1: "5%",
    percent2: "25%",
  })}

  div {
    max-width: 100%;
  }
`;

export const OthersWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    li {
      line-height: 1.6rem;
      padding-left: 0.5rem;
    }

    i {
      padding-right: 0.5rem;
    }
  }
`;

export const YearsStyled = styled.div`
  font-size: 0.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.color6};
  width: 100%;

  h3 {
    padding-left: 22rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      width: 10%;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        text-align: right;

        &:before {
          content: "";
          background: ${colors.color13};
          position: absolute;
          height: 16rem;
          width: 1px;
          transform: translate(9px, 18px);
        }
      }

      &:nth-child(1) {
        width: 45%;
      }

      &:nth-child(2) {
        width: 31.2%;
      }

      &:nth-child(3) {
        width: 30%;
      }
    }
  }
`;

export const OthersStyled = styled.ul`
  ${animeBackground({
    color: colors.color14,
    border: "20px",
    deg: "-7deg",
    percent1: "5%",
    percent2: "25%",
  })}
`;
