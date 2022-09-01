import styled from "styled-components";

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
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  font-size: 1.2rem;
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

    font-size: 1rem;

    ${TitleStyled} {
      font-size: 1.5rem;
    }
  }
`;
