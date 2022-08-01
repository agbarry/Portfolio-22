import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: ${colors.color6};
`

function Footer() {

    return ( 
        <FooterContainer className='content1'>
            <span>copyright 2021-2022 by agbarry</span>
        </FooterContainer>
     );
}

export default Footer;