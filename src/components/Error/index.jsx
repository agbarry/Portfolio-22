import notFound from '../../assets/svg/notFound.svg';
import { ErrorWrapper, StyledImg, StyledMsg } from './ErrorElements';

function Error() {
    return ( 
        <ErrorWrapper>
            <StyledImg src={notFound} alt="Erreur" />

            <StyledMsg>Oups ! il y a eu un problème </StyledMsg>
        </ErrorWrapper>
     );
}

export default Error;