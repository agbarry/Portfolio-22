import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import {
  ImageStyled,
  JobStyled,
  ProfileWrapper,
  SocialNetworkStyled,
} from "./ProfileElements";



function Profile() {
  const { theme } = useContext(ThemeContext);

  return (
    <ProfileWrapper>
      <ImageStyled isDarkMode={theme === "dark"}/>

      <div style={{width: 'max-content'}}>
        <h3> Aguibou BARRY </h3>

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
              href="https://github.com/agbarry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{width: '25px', height: '25px'}}/>
            </a>
          </li>

          <li>
            <a
              href="https://discord.com/channels/Agb#2386"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord style={{width: '25px', height: '25px'}}/>
            </a>
          </li>
        </SocialNetworkStyled>
      </div>
    </ProfileWrapper>
  );
}

export default Profile;
