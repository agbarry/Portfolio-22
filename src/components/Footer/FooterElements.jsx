import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground, backdropFilter } from "../../utils/style/Global";

/* Mise en forme du "Footer" */
export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 1536px;
  width: 100%;
  z-index: 10;
  text-align: center;
  padding: 0.5rem;
  ${animeBackground({
    color: colors.color6,
    border: "0",
    deg: "5deg",
    percent1: "5%",
    percent2: "50%",
  })}
  
  ${backdropFilter({value: '20rem'})}
`;
