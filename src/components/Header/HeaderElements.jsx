import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import fonts from "../../utils/style/fonts";
import { animeBackground, backdropFilter } from "../../utils/style/Global";

/* Mise en forme de la barre de navigation */
export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 1.5rem;
  padding-bottom: 0;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  ${animeBackground({
    color: colors.color14,
    border: "15px",
    deg: "5deg",
    percent1: "5%",
    percent2: "50%",
  })}

  ${backdropFilter({value: '20rem'})}

  & .react-icons {
    display: none;
  }

  & .active {
    border-bottom: thick double ${({ $isDarkMode }) => ($isDarkMode ? colors.white1 : colors.black1)};
  }

  & .notActive {
    border-bottom: 0;
  }

  @media screen and (max-width: 1060px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    & nav {
      & span {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .react-icons {
      display: inline;
    }

    & nav {
      & span {
        display: none;
      }
    }
  }
`;

export const LogoStyled = styled(Link)`
  font-family: ${fonts.font3}, ${fonts.fontParams};
  font-size: 4rem;
  text-transform: capitalize;
  text-shadow: 0 0 2px ${({ $isDarkMode }) => ($isDarkMode ? colors.color6 : colors.color5)},
    1px -1px 3px ${colors.color7},
    -2px -2px 4px ${({ $isDarkMode }) => ($isDarkMode ? colors.color5 : colors.color6)},
    2px -4px 5px ${colors.color3}, -2px -6px 6px ${colors.color8},
    0 -8px 7px ${colors.color9}, 1px -9px 8px ${colors.color10};

  & span {
    color: ${colors.black1};
  }

  @media screen and (max-width: 960px) {
    font-size: 2rem;
    & span {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
    & span {
      display: none;
    }
  }
`;

export const NightModeButton = styled.button`
  color: ${colors.color0};
  background-color: transparent;
  border: none;
  margin-bottom: 1.5em;
  font-size: 2rem;


  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;
