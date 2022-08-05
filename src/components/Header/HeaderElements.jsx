import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

/* Mise en forme */
export const NavContainer = styled.nav`
  // position: fixed;
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${animeBackground({
    color: colors.color14,
    border: "20px",
    deg: "7deg",
    percent1: "5%",
    percent2: "80%",
  })}
`;

export const LogoStyled = styled(Link)`
  font-family: "Flavors", cursive;
  font-size: 5rem;
  text-shadow: 0 0 2px ${colors.color6}, 1px -1px 3px ${colors.color7},
    -2px -2px 4px ${colors.color5}, 2px -4px 5px ${colors.color3},
    -2px -6px 6px ${colors.color8}, 0 -8px 7px ${colors.color9},
    1px -9px 8px ${colors.color10};

  span {
    color: ${colors.black1};
  }
`;

export const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 2em;
  font-size: 2rem;
`;
