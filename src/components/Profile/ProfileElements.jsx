import styled from "styled-components";
import colors from "../../utils/style/colors";

/* Mise en page du profile */
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageStyled = styled.img`
  height: 300px;
  background: transparent;
  border-radius: 40%;
  box-shadow: 0 0 0 4px ${colors.color10}, 0 0 0 8px ${colors.color5},
    0 0 0 12px ${({ isDarkMode }) => (isDarkMode ? colors.black : colors.white)};

  &:hover {
    transform: scale(1.1);
    transition: 1s ease-out;
  }
`;

export const NameStyled = styled.h2`
  font-size: 1.8rem;
  padding-top: 1.5rem;
`;

export const JobStyled = styled.h3`
  font-size: 1.2rem;
  padding-top: 1rem;
  color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
`;

export const SocialNetworkStyled = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    padding: 1rem;
  }
`;
