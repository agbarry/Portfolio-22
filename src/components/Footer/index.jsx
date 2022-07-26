import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Global';

const FooterContainer = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #54a5a5;
    color: white;
    text-align: center;
    padding-top: 10px;
`

const FooterContent = styled.div`
    padding: 20px;
`

function Footer() {
    return ( 
        <FooterContainer>
            <span>agbarry - 2022</span>
            <FooterContent>
                <StyledLink to="/contact"> Contactez-moi </StyledLink>
                <StyledLink to="/a_propos"> À propos de moi </StyledLink>
            </FooterContent>
        </FooterContainer>
     );
}

export default Footer;