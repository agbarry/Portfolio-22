import styled from "styled-components";
import colors from "../../utils/style/colors";

/* Mise en forme de la page contact */
export const TitleStyled = styled.h5`
  font-size: 2rem;
  padding: 15px;
  text-align: center;
`;

export const CardStyled = styled.div`
  padding: 15px;

  & iframe {
    border-radius: 30% 10%;
  }
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
`;

export const AddressStyled = styled.span`
  padding: 15px;
  font-size: 1.2rem;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    margin-left: 0;
    margin-right: 0;

    ${TitleStyled} {
      font-size: 1.5rem;
    }

    ${AddressStyled} {
      font-size: 1rem;
    }
  }
`;
