import styled from "styled-components";
import colors from "../../utils/style/colors";

/* Mise en forme */
export const ProgressBarWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  & li {
    width: 29%;
    line-height: 1.6rem;
  }

  @media screen and (max-width: 960px) {
    & li {
      width: 30%;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    & li {
      width: 31%;
      font-size: 0.8rem;
    }
  }
`;

export const ProgressBarStyled = styled.li`
  margin-top: 0.8rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
    border-radius: 50px;
    height: 0.5rem;
    width: 0;
    animation: line 4s ease-out forwards;

    @keyframes line {
      to {
        width: 100%;
      }
    }

    @media screen and (max-width: 960px) {
      height: 0.4rem;
    }
  }
`;
