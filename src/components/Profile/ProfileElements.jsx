import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'
import { animeBackground } from '../../utils/style/Global'
import portrait from '../../assets/images/portrait.jpg'

/* Mise en page du profile */
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-flow: column wrap;
  align-items: center;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 960px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const profileAnimate = keyframes`
  0% {border-radius: 80% 10% 80% 10%/60% 70% 90% 80%;}
  50% { border-radius: 10% 80% 10% 80%/60% 70% 90% 80%;}
  100% {border-radius: 80% 10% 80% 10%/60% 70% 90% 80%;}
`

export const ImageStyled = styled.div`
  background: url(${portrait});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 80% 10% 80% 10% / 60% 70% 90% 80%;
  box-shadow: 0 0 0 4px ${colors.color14}, 0 0 0 8px ${colors.color5},
    0 0 0 12px ${({ isDarkMode }) => (isDarkMode ? colors.black : colors.white)};
  height: 300px;
  width: 230px;
  justify-self: center;
  animation: ${profileAnimate} 6s ease-in-out infinite 2s;
`

export const JobStyled = styled.h3`
  font-size: 1.2rem;
  padding-top: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
`

export const SocialNetworkStyled = styled.ul`
  display: flex;
  justify-content: space-around;

  & li {
    padding: 1rem;

    & a {
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
