import styled from 'styled-components'
import colors from '../../utils/style/colors'
import fonts from '../../utils/style/fonts'
import { animeBackground } from '../../utils/style/Global'

/* Mise en forme de la page "Education" */
export const EducationWrapper = styled.div`
  margin: 1rem;
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`

export const Title = styled.div`
  width: 60%;
  margin-left: 20%;
  margin-bottom: 2rem;
  text-align: center;
  font-family: ${fonts.font6}, ${fonts.fontParams};
  font-size: 2rem;

  & span {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    margin-left: 10%;
    font-size: 1.6rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-left: 0;
    font-size: 1.4rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const EducationCardWrapper = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: 'Y D';
  justify-content: center;
  align-items: center;
  margin-top: -1.5%;
  border-right: thick double;

  ${animeBackground({
    color: colors.color14,
    border: '20px',
    deg: '-7deg',
    percent1: '2%',
    percent2: '40%',
  })}

  ${(props) => props.impair &&
    `margin-left: 50%;
     border-left: thick double;
     border-right: 0;
    `
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
`

export const InfosContainer = styled.div`
  grid-area: D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & h2, & h6 {
    font-size: 1.4rem;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }
`

export const LogoStyled = styled.img`
  height: 50px;
  width: 120px;
  padding-bottom: 10px;
  background: transparent;
`

export const YearStyled = styled.span`
  grid-area: Y;
  text-align: center;

  & ul {
    & li {
      list-style-position: inside;
      list-style-type: square;
    }
  }

  & p {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }
`
