import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { animeBackground } from '../../utils/style/Global'

/* Mise en page du profile */
export const ProfileWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

export const ImageStyled = styled.img`
  height: 300px;
  padding: 0.5rem;
  background: transparent;
  border-radius: 50% 0 50% 0;
  box-shadow: 0 0 0 4px ${colors.color14}, 0 0 0 8px ${colors.color5},
    0 0 0 12px ${({ isDarkMode }) => (isDarkMode ? colors.black : colors.white)};

  &:hover {
    transform: scale(1.1);
    transition: 1s ease-out;
  }
`

export const NameStyled = styled.h2`
  font-size: 1.9rem;
  padding-top: 1.5rem;

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`

export const JobStyled = styled.h3`
  font-size: 1.2rem;
  padding-top: 1rem;
  text-align: center;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
`

export const SocialNetworkStyled = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    padding: 1rem;

    & a {
      color: ${({ isDarkMode }) =>
        isDarkMode ? colors.color5 : colors.color6};
      ${animeBackground({
        color: colors.color14,
        border: '25px',
        deg: '-7deg',
        percent1: '5%',
        percent2: '25%',
      })}
    }
  }
`
