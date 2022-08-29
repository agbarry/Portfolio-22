import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { animeBackground } from '../../utils/style/Global'

/* Mise en forme de la page 'Accueil' */
export const HomeWrapper = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const HomeWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const HomeContent = styled.div`
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding: 0;
    margin-top: 2rem;
  }
`

export const DescriptionStyled = styled.div`
  font-size: 1.3rem;

  & span {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`

export const DownloadCV = styled.div`
  padding: 5rem;
  padding-bottom: 1rem;

  & a {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.white1 : colors.black1)};
    ${animeBackground({
      color: colors.color14,
      border: '10px',
      deg: '-15deg',
      percent1: '20%',
      percent2: '80%',
    })}
    padding: 0.8rem;
    box-shadow: 0 0 2px ${colors.color7}, 1px -1px 3px ${colors.color8},
      -2px -2px 4px ${colors.color6}, 2px -4px 5px ${colors.color4},
      -2px -6px 6px ${colors.color9}, 0 -8px 7px ${colors.color10},
      1px -9px 8px ${colors.color11};
    transition: 0.2s ease;

    &:hover {
      letter-spacing: 1px;
    }
  }
`

export const StyledPresentation = styled.div`
  width: 250px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;

  ${animeBackground({
    color: colors.color14,
    border: '10px',
    deg: '-55deg',
    percent1: '5%',
    percent2: '100%',
  })}

  &:hover {
    transform: scale(1.3);
    transition: 1s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 180px;
    font-size: 0.6rem;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 2rem;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`

export const HomeWrapperBottom = styled.div`
  margin: 0;
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  & ${StyledPresentation} {
    & h2 {
      color: ${({ isDarkMode }) =>
        isDarkMode ? colors.white1 : colors.black1};
    }
  }

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledIllustrator = styled.img`
  display: block;
  width: 240px;
  height: 125px;
  margin-top: 2rem;

  @media screen and (max-width: 960px) {
    width: 170px;
    height: 95px;
  }
`
