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

      <NameStyled> Aguibou BARRY </NameStyled>

      <JobStyled isDarkMode={theme === "dark"}>Développeur fullstack</JobStyled>

      <SocialNetworkStyled>
        <li>
          <a
            href="https://www.linkedin.com/in/aguibou-barry-945434168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/agbarry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/agbarry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </SocialNetworkStyled>
    </ProfileWrapper>
  );
}

export default Profile;
