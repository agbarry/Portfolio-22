import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "./colors";

/* Mise en forme par défaut pour les liens */
export const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  border-right: 1px dotted ${colors.special};
  
  &:hover{
    border-bottom: thick double ${({ $isDarkMode }) => ($isDarkMode ? colors.white1 : colors.black1)};
    transition: border-bottom 0.2s ease-out;
  }
`;

/* Pour un background personnalisé */
export const animeBackground = (args) => `
    background: linear-gradient(${args.deg}, ${args.color} ${args.percent1}, transparent ${args.percent2});
    border-radius: ${args.border};
`;

/* Pour un arrière plan filtré */
export const backdropFilter = (args) => `
  -webkit-backdrop-filter: blur(${args.value});
  backdrop-filter: blur(${args.value});
`;

/* Pour la mise en forme des liens permettant d'acceder aux pages(Formation, Compétence et Expérience) */
export const StyledPresentation = styled.div`
  width: 250px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;

  ${animeBackground({
    color: colors.color6,
    border: '10px',
    deg: '-55deg',
    percent1: '5%',
    percent2: '100%',
  })}

  &:hover {
    transform: scale(1.3);
    transition: 1s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 180px;
    font-size: 0.6rem;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 2rem;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`

export const Wrapper = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: space-between;

  & ${StyledPresentation} {
    & h2 {
      font-size: 1.2rem;
      color: ${({ isDarkMode }) =>
        isDarkMode ? colors.white1 : colors.black1};
    }
  }

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledIllustrator = styled.img`
  display: block;
  width: 240px;
  height: 125px;
  margin-top: 2rem;

  @media screen and (max-width: 960px) {
    width: 170px;
    height: 95px;
  }
`