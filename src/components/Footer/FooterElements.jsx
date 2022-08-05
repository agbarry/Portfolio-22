import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  ${animeBackground({
    color: colors.color14,
    border: "0px",
    deg: "7deg",
    percent1: "5%",
    percent2: "80%",
  })}

  // & p {
  //   // padding-top: 1rem;

  //   & q {
  //     font-size: 1rem;
  //     color: ${colors.black1}
  //   }
  // }
`;
