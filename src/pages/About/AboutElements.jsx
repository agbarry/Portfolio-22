import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AboutWrapper = styled.div`
  max-width: 1536px;
  display: flex;
  gap: 2rem;
  flex-flow: row nowrap;

  & img {
    width: 380px;
    margin: 4rem;
    margin-top: 2rem;
    margin-left: 0;
    border-radius: 90% 70% 90% 5%;
  }

  @media screen and (max-width: 960px) {
    flex-flow: column-reverse wrap;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-flow: column nowrap;
  user-select: none;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`

export const TopStyled = styled.div`
  margin: 4rem;
  margin-right: 0;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
  }
`

export const Detail = styled.li`
  list-style-position: inside;
  list-style-type: square;
  line-height: 2rem;
  margin-left: 1rem;
  font-size: 0.8rem;
`

export const BottomStyled = styled.div`
  margin: 4rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between ;
  row-gap: 1rem;
  flex-flow: row nowrap;
`

export const BottomContent = styled.div`
  & h5 {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
  }

  & ul {
    margin-left: 1rem;
  }
`
