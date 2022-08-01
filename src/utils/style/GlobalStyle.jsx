import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context';
import colors from './colors';

/* Mise en page globale */
const StyledGlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-image: ${({ isDarkMode }) => (isDarkMode ? `url(${colors.dark})` : `url(${colors.light})`)}; 
        color: ${({ isDarkMode }) => (isDarkMode ? colors.white1 : colors.black1)}
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