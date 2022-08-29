import portrait from "../../assets/images/portrait.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import {
  ImageStyled,
  JobStyled,
  NameStyled,
  ProfileWrapper,
  SocialNetworkStyled,
} from "./ProfileElements";



function Profile() {
  const { theme } = useContext(ThemeContext);

  return (
    <ProfileWrapper>
      <ImageStyled
        src={portrait}
        alt="Portrait du profile"
        isDarkMode={theme === "dark"}
      />

      <div>
        <NameStyled> Aguibou BARRY </NameStyled>

        <JobStyled isDarkMode={theme === "dark"}>Développeur fullstack</JobStyled>

        <SocialNetworkStyled isDarkMode={theme === "dark"}>
          <li>
            <a
              href="https://www.linkedin.com/in/agbarry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{width: '25px', height: '25px'}}/>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/agbarry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{width: '25px', height: '25px'}}/>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/agbarry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={{width: '25px', height: '25px'}}/>
            </a>
          </li>
        </SocialNetworkStyled>
      </div>
    </ProfileWrapper>
  );
}

export default Profile;
