import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { animeBackground } from '../../utils/style/Global'

/* Mise en forme de la page Knowledge */
export const KnowledgeWrapper = styled.div`
  margin: 5rem;

  & h1 {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  & h2 {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
    font-size: 1.8rem;
  }

  /* Pour les écrans moyen */
  @media screen and (max-width: 960px) {
    margin-left: 2rem;
    margin-right: 2rem;

    & h1 {
      text-align: left;
    }

    & h2 {
      font-size: 1.4rem;
    }
  }

  /* Pour les petits écrans */
  @media screen and (max-width: 640px) {
    margin-left: 1rem;
    margin-right: 1rem;
    & h2 {
      font-size: 1.1rem;
    }
  }
`

export const KnowledgeContent = styled.div`
  padding-left: 1rem;

  ${animeBackground({
    color: colors.color6,
    border: '20px',
    deg: '-7deg',
    percent1: '5%',
    percent2: '25%',
  })}
`

export const YearsStyled = styled.div`
  font-size: 0.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & h3 {
    padding-left: 42%;
    font-size: 1.2rem;
  }

  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & span {
      width: 2rem;
      border: 1px solid
        ${({ isDarkMode }) => (isDarkMode ? colors.white : colors.black)};

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        text-align: center;

        &:before {
          content: '';
          background: ${({ isDarkMode }) =>
            isDarkMode ? colors.white : colors.black};
          position: absolute;
          height: 16rem;
          width: 1px;
        }
      }

      &:nth-child(1) {
        margin-left: 42%;

        &:before {
          transform: translate(9px, 18px);
        }
      }

      &:nth-child(2),
      &:nth-child(3) {
        &:before {
          transform: translate(15px, 18px);
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;

    & h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    & h3 {
      font-size: 0.8rem;
    }
  }
`

export const OthersWrapper = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  & li {
    line-height: 1.6rem;
    padding-left: 0.5rem;
  }

  @media screen and (max-width: 960px) {

    & li {
      line-height: 1.4rem;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    & li {
      line-height: 1.2rem;
      font-size: 0.8rem;
    }
  }
`

export const OthersStyled = styled.ul`
  ${animeBackground({
    color: colors.color6,
    border: '20px',
    deg: '-7deg',
    percent1: '5%',
    percent2: '25%',
  })}
  margin-bottom: 2rem;

  & h2 {
    padding-bottom: 0.8rem;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
  }
`
