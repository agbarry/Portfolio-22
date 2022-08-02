import portrait from '../../assets/images/portrait.jpg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageStyled = styled.img`
    height: 300px;
    background: transparent;
    border-radius: 40%;
    box-shadow: 0 0 0 4px ${colors.color13}, 
                0 0 0 8px ${colors.color5}, 
                0 0 0 12px ${colors.white};

    &:hover {
        transform: scale(1.1);
        transition: 1s ease-out;
    }
`

const NameStyled = styled.h2`
    font-size: 1.8rem;
    padding-top: 2rem;
`

const JobStyled = styled.h3`
    font-size: 1.2rem;
    padding-top: 1rem;
    color: ${colors.color6}
`

const SocialNetworkStyled = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
        padding: 1rem;
    }
`

function Profile() {
    return ( 
        <ProfileWrapper>
            <ImageStyled src={portrait} alt="Portrait du profile" />

            <NameStyled> Aguibou BARRY </NameStyled>

            <JobStyled>Développeur fullstack</JobStyled>

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