import { useContext } from 'react';
import notFound from '../../assets/svg/notFound.svg';
import { ThemeContext } from '../../utils/context';
import { ErrorWrapper, LinkStyled, StyledImg, StyledMsg } from './ErrorElements';

function Error() {
    const { theme } = useContext(ThemeContext);

    return ( 
        <ErrorWrapper>
            <StyledImg src={notFound} alt="Erreur" />

            <StyledMsg>Oups ! il y a eu un problème </StyledMsg>

            <LinkStyled to="/" title="Accueil" $isDarkMode={theme === 'dark'}>
                <span>Accueil</span>
            </LinkStyled>
        </ErrorWrapper>
     );
}

export default Error;