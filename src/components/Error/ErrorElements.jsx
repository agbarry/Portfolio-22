import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';


export const ErrorWrapper = styled.div`
    margin: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledImg = styled.img`
    height: 380px;

    @media screen and (max-width: 640px) {
        height: 260px;
    }
`

export const StyledMsg = styled.h2`
    padding-top: 2rem;

    @media screen and (max-width: 640px) {
        font-size: 1.0rem;
    }
`

export const LinkStyled = styled(Link)`
    margin: 2rem;
    padding: 1rem;
    border-radius: 2rem;
    border-top: thick double ${colors.color14};
    border-bottom: thick double ${colors.color14};
    font-size: 1.5rem;
    color: ${({ $isDarkMode }) => ($isDarkMode ? colors.color5 : colors.color6)};
`