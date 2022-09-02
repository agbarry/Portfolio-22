import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'

/* Mise en forme de la page contact */
export const TitleStyled = styled.h5`
  font-size: 2rem;
  padding: 15px;
  text-align: center;
`

export const ContactContainer = styled.div`
  margin: 4rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    margin-left: 0;
    margin-right: 0;

    font-size: 1rem;

    ${TitleStyled} {
      font-size: 1.5rem;
    }
  }
`

export const ContactContent = styled.div`
  margin-bottom: 5rem;
  display: flex;
  gap: 2rem;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap-reverse;
  }
`

export const AddressWrapper = styled.div`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  align-items: center;
  text-transform: lowercase;
  font-size: 1rem;

  & span {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color16 : colors.color15)};
  }

  @media screen and (max-width: 440px) {
    font-size: 0.9rem;
  }
`
const linkAnimate = keyframes`
  0% { letter-spacing: normal; }
  50% { letter-spacing: 2px  }
  100% { letter-spacing: normal; }
`

export const AddressContent = styled.div`
  padding: 0.5rem;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: thick double ${colors.special};

  & a {
    letter-spacing: 2px;
    animation: ${linkAnimate} 6s ease-in-out infinite 2s;
  }
`

export const ContactFormWrapper = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  
  & h3 {
    text-align: center;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  & span {
    color: ${colors.color11};
  }
`

const handAnimate = keyframes`
  0% { margin-top: 1.8rem; font-size: 2.5rem; }
  50% { margin-top: 2.5rem; font-size: 3rem;  }
  100% { margin-top: 1.8rem; font-size: 2.5rem; }
`

export const HandStyled = styled.div`
  position: absolute;
  margin-top: 1.8rem;
  font-size: 2.5rem;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color16 : colors.color15)};
  animation: ${handAnimate} 6s ease-in-out infinite 2s;
`

export const FormWrapper = styled.form`
  padding: 1rem;
  width: 520px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  border: thick double ${colors.special};

  @media screen and (max-width: 640px) {
    width: 420px;

    & textarea {
      width: 270px;
    }
  }

  @media screen and (max-width: 440px) {
    font-size: 0.7rem;
    width: 350px;

    & textarea, & input {
      width: 220px;
    }
  }
`

export const FormContent = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
`

export const FormSubmit = styled.button`
  padding: 0.5rem;
  width: max-content;
  align-self: center;
`

