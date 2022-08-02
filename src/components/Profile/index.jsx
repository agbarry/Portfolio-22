import portrait from '../../assets/images/portrait.jpg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageStyled = styled.img`
    height: 300px;
    background: transparent;
    border-radius: 40%;
    box-shadow: 0 0 0 4px ${colors.color10}, 
                0 0 0 8px ${colors.color5}, 
                0 0 0 12px ${({ isDarkMode }) => (isDarkMode ? colors.black : colors.white)};

    &:hover {
        transform: scale(1.1);
        transition: 1s ease-out;
    }
`

const NameStyled = styled.h2`
    font-size: 1.8rem;
    padding-top: 1.5rem;
`

const JobStyled = styled.h3`
    font-size: 1.2rem;
    padding-top: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
`

const SocialNetworkStyled = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
        padding: 1rem;
    }
`

function Profile() {
    const { theme } = useContext(ThemeContext)

    return ( 
        <ProfileWrapper>
            <ImageStyled src={portrait} alt="Portrait du profile" isDarkMode={theme === 'dark'} />

            <NameStyled> Aguibou BARRY </NameStyled>

            <JobStyled isDarkMode={theme === 'dark'}>Développeur fullstack</JobStyled>

            <SocialNetworkStyled>
                <li>
                    <a href="https://www.linkedin.com/in/aguibou-barry-945434168" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/agbarry/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/agbarry/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" ></i>
                    </a>
                </li>
            </SocialNetworkStyled>
        </ProfileWrapper>
     );
}

export default Profile;