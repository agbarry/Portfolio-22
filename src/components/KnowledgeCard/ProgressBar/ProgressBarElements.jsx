import styled from "styled-components";
import colors from "../../../utils/style/colors";

/* Mise en forme */
export const ProgressBarWrapper = styled.ul`
  display: grid;
  grid-template-columns: 0.52fr 3.5fr;

  li {
    line-height: 1.6rem;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 0.5fr 2fr;
  }
`;

export const ProgressBarStyled = styled.li`
  height: 0.4rem;
  background: transparent;
  border-radius: 50px;
  margin-top: 0.8rem;
  margin-left: 12.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: ${colors.color3};
    border-radius: 50px;
    height: 0.5rem;
    width: 0;
    animation: line 4s ease-out forwards;

    @keyframes line {
      to {
        width: 100%;
      }
    }
  }
`;
