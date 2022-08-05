import { useContext } from 'react';
import { ThemeContext } from '../context';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import bgLight from '../../assets/images/bg_light.jpg';
import bgDark from '../../assets/images/bg_dark.jpg';
import fonts from './fonts';

/* Mise en page globale */
const StyledGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-image: ${({ isDarkMode }) => (isDarkMode ? `url(${bgDark})` : `url(${bgLight})`)}; 
        color: ${({ isDarkMode }) => (isDarkMode ? colors.white : colors.black)};
        font-family: ${fonts.font1[0]}, ${fonts.font1[1]};
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
    
        &:visited {
            color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
        }
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return ( 
        <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
     );
}

export default GlobalStyle;