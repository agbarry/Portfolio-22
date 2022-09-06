import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from '../../utils/style/colors';


export const ErrorWrapper = styled.div`
    margin: 4rem;
    padding-bottom: 2rem;
    gap: 2rem;
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
    @media screen and (max-width: 640px) {
        font-size: 1.0rem;
    }
`

const linkAnimate = keyframes`
    0% {width: 110px; font-size: 1.5rem;}
    50% { width: 140px; font-size: 2rem;}
    100% {width: 110px; font-size: 1.5rem;}
`

export const LinkStyled = styled(Link)`
    width: 110px;
    padding: 1rem;
    border-radius: 2rem;
    border-top: thick double ${colors.color6};
    border-bottom: thick double ${colors.color6};
    font-size: 1.5rem;
    justify-self: center;
    text-align: center;
    animation: ${linkAnimate} 6s ease-in-out infinite 1s;
`