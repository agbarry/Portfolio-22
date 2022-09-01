import { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'
// import bgLight from '../../assets/images/bg_light.jpg'
// import bgDark from '../../assets/images/bg_dark.jpg'
import fonts from './fonts'

// `url(${bgDark})` : `url(${bgLight})`};

/* Mise en page globale */
const StyledGlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }

    body {
        background: ${({ isDarkMode }) =>
          isDarkMode ? colors.black : colors.white};
           
        color: ${({ isDarkMode }) =>
          isDarkMode ? colors.white1 : colors.black1};
        font-family: ${fonts.font5}, ${fonts.fontParams};
    }

    * {
      margin: 0;
      padding: 0;  
      box-sizing: border-box;
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
    }

    a, span {
      color: ${({ isDarkMode }) => 
      isDarkMode ? colors.color5 : colors.color6};
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
