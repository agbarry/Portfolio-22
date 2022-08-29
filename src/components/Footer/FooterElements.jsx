import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground, backdropFilter } from "../../utils/style/Global";

/* Mise en forme du "Footer" */
export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  text-align: center;
  padding: 0.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.white : colors.black)};
  ${animeBackground({
    color: colors.color14,
    border: "0px",
    deg: "5deg",
    percent1: "5%",
    percent2: "50%",
  })}
  
  ${backdropFilter({value: '20rem'})}

  & p {
    & q {
      color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
    }
  }
`;
