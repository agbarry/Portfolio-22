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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.color6};
  text-transform: lowercase;
`;

export const AddressStyled = styled.span`
  padding: 15px;
  font-size: 1.2rem;

  & i {
    color: ${colors.special};
    padding-right: 10px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;

  @media screen and (max-width: 960px) {
    ${TitleStyled} {
      font-size: 1.5rem;
    }

    ${AddressContainer} {
      flex-direction: column;
    }

    ${AddressStyled} {
      font-size: 1rem;
    }
  }
`;
