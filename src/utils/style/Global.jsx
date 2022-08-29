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
