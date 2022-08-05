import styled from "styled-components";
import colors from "../../utils/style/colors";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  font-size: 1.5rem;
  margin: 5rem;

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`;
export const NameStyled = styled.span`
  color: ${colors.color6};
`;

export const DateStyled = styled.span`
  color: ${colors.color14};
`;

export const DetailContent = styled.li`
  list-style-position: inside;
  list-style-type: square;
  padding: 15px;
`;
