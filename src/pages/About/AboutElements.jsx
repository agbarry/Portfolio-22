import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AboutContainer = styled.div`
  display: flex;
  gap: 4rem;
  flex-flow: column wrap;
  user-select: none;
  font-size: 1.3rem;
  margin: 4rem;

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`

export const Detail = styled.li`
  list-style-position: inside;
  list-style-type: square;
  margin-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`

export const BottomStyled = styled.div`
  display: flex;
  justify-content: space-around ;
  gap: 1rem;
  flex-flow: row wrap;
`

export const BottomContent = styled.div`
  & h2 {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  & ul {
    margin-left: 1rem;
  }
`
