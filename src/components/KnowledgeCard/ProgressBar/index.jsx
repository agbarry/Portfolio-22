import styled from 'styled-components';
import colors from '../../../utils/style/colors';


/* Mise en forme */
const ProgressBarWrapper = styled.ul`
    display: grid;
    grid-template-columns: 0.52fr 3.5fr;

    li {
        line-height: 1.6rem;
    }

    @media screen and (max-width: 960px) {
        grid-template-columns: 0.5fr 2fr;
    }
`


const ProgressBarStyled = styled.li`
    height: .4rem;
    background: transparent;
    border-radius: 50px;
    margin-top: .8rem;
    margin-left: 12.5rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        background: ${colors.color3};
        border-radius: 50px;
        height: .5rem;
        width: 0;
        animation: line 4s ease-out forwards;

        @keyframes line {
            to {
                width: 100%;
            }
        }
    }
`

function ProgressBar({name, xp}) {
    const xpYears = 6;
    const progressBar = xp / xpYears * 100 + '%';

    return (
        <ProgressBarWrapper>
            <li> {name} </li>
            <ProgressBarStyled style={{width:progressBar}} > </ProgressBarStyled>
        </ProgressBarWrapper>
     );
}

export default ProgressBar;