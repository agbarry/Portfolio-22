import styled from 'styled-components';
import colors from '../../../utils/style/colors';

const ProgressBarStyled = styled.div`
    height: .4rem;
    background: transparent;
    border-radius: 50px;
    margin-top: .2rem;
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
                width: 80%;
            }
        }
    }
`

function ProgressBar({name, xp}) {
    const xpYears = 5;
    const progressBar = xp / xpYears * 100 + '%';

    return ( 
        <div>
            <li>{name}</li>
            <ProgressBarStyled style={{width:progressBar}} />
        </div>
     );
}

export default ProgressBar;