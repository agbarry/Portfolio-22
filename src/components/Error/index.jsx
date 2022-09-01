import notFound from '../../assets/svg/notFound.svg';
import { ErrorWrapper, LinkStyled, StyledImg, StyledMsg } from './ErrorElements';

function Error() {

    return ( 
        <ErrorWrapper>
            <StyledImg src={notFound} alt="Erreur" />

            <StyledMsg>Oups ! il y a eu un problème </StyledMsg>

            <LinkStyled to="/" title="Revenir à l'accueil">
                <span>Accueil</span>
            </LinkStyled>
        </ErrorWrapper>
     );
}

export default Error;