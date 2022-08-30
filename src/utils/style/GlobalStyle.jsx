import { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import bgLight from '../../assets/images/bg_light.jpg'
import bgDark from '../../assets/images/bg_dark.jpg'
import fonts from './fonts'

// `url(${bgDark})` : `url(${bgLight})`};

/* Mise en page globale */
const StyledGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: ${({ isDarkMode }) =>
          isDarkMode ? colors.black : colors.white};
           
        color: ${({ isDarkMode }) =>
          isDarkMode ? colors.white1 : colors.black1};
        font-family: ${fonts.font5}, ${fonts.fontParams};
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;  
    }

    button {
        cursor: pointer;
    }
    
    li {
        list-style-type: none;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({ isDarkMode }) =>
          isDarkMode ? colors.color5 : colors.color6};
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
