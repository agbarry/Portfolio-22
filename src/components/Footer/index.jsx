import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Global';

const FooterContainer = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding-top: 10px;
`

const FooterContent = styled.div`
    padding: 20px;
`

function Footer() {
    return ( 
        <FooterContainer className='content1'>
            <span>agbarry - 2022</span>
            <FooterContent>
                <StyledLink to="/contact" $isFullLink> Contactez-moi </StyledLink>
                <StyledLink to="/a_propos" $isFullLink> À propos de moi </StyledLink>
            </FooterContent>
        </FooterContainer>
     );
}

export default Footer;