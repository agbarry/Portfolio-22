import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'
import { animeBackground } from '../../utils/style/Global'

/* Mise en forme de la page contact */
export const TitleStyled = styled.h5`
  font-size: 2rem;
  padding: 15px;
  text-align: center;
`

export const ContactContainer = styled.div`
  margin: 4rem;
  display: flex;
  gap: 1.5rem;
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

  & h3 {
    text-transform: initial;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
  }

  & span {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color8 : colors.color7)};
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
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
  }

  & span {
    color: ${colors.color5};
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
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
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

  & textarea {
    width: 360px;
  }

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
  font-family: inherit;
  font-size: 1.4rem;
  color: inherit;
  padding: 0.5rem;
  width: max-content;
  align-self: center;
  ${animeBackground({
    color: colors.color6,
    border: "10px",
    deg: "-10deg",
    percent1: "5%",
    percent2: "70%",
  })}
`

export const Confirmation = styled.div`
  position: fixed;
  bottom: 4rem;
  text-align: center;
  width: fit-content;

  & p {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;

    & .icon {
      font-size: 2rem;
    }

    @media screen and (max-width: 640px) {
      font-size: 0.6rem;

      & .icon {
        font-size: 1.5rem;
      }
    }
  }
  
  & .active {
    background-color: ${colors.color10};
    color: ${colors.green};
  }

  & .notActive {
    background-color: ${colors.color9};
    color: ${colors.red};
  }
`

