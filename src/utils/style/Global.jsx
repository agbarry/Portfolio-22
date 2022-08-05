import { Link } from "react-router-dom";
import styled from 'styled-components';
import colors from "./colors";

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

    i {
        display: none;
    }

    // @media screen and (max-width: 960px) {
    //     display: none;

    //     i {
    //         display: block;
    //     }
    // }
`

/* Pour un background personnalisé */
export const animeBackground = (args) => `
    background: linear-gradient(${args.deg}, ${args.color} ${args.percent1}, transparent ${args.percent2});
    border-radius: ${args.border};
`