import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import colors from "./colors";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: black;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    ${(props) => props.$isFullLink &&
        `color: ${colors.color13}; 
        border-radius: 30px; 
        background-color: ${colors.special};
        `
    }
    &:hover {
        background-color: ${colors.color13};
        border-bottom: 4px solid #fff;
        transition: all 0.3s ease-out;
    }

    // @media screen and (max-width: 960px) {
    //     display: none;
    // }
`


export const Loader = styled.div`
    padding: 10px;
    border: 6px solid '#ef52d1';
    border-bottom-color: transparent;
    border-radius: 32px;
    animation: ${rotate} 1s infinite linear;
    height: 10px;
    width: 10px;
`