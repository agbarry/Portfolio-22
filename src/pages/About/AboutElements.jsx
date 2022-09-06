import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AboutContainer = styled.div`
  max-width: 1536px;
  display: flex;
  gap: 2rem;
  flex-flow: column wrap;
  user-select: none;
  font-size: 1.3rem;

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`

export const TopStyled = styled.div`
  margin: 4rem;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const Detail = styled.li`
  list-style-position: inside;
  list-style-type: square;
  line-height: 2rem;
  margin-left: 1rem;
  font-size: 1.1rem;
`

export const BottomStyled = styled.div`
  margin: 4rem;
  margin-top: 0;
  display: flex;
  justify-content: space-between ;
  row-gap: 1rem;
  flex-flow: row wrap;
`

export const BottomContent = styled.div`
  & h2 {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color2 : colors.color3)};
  }

  & ul {
    margin-left: 1rem;
  }
`
