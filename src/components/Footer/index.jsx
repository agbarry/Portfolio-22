import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context'

const FooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
`

function Footer() {
    const { theme } = useContext(ThemeContext)

    return ( 
        <FooterContainer className='content1' isDarkMode={theme === 'dark'}>
            <span>copyright 2021-2022 by agbarry</span>
        </FooterContainer>
     );
}

export default Footer;