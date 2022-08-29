import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

/* Mise en forme de la page 'Experience' */
export const ExperienceWrapper = styled.div`
  margin: 5rem;
  margin-top: 2rem;
  gap: 4rem;
  display: flex;
  flex-direction: column;

  & li {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media screen and (max-width: 640px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

`;

export const Project = styled.div`
  border-bottom: 1mm ridge ${colors.color14};
  padding-bottom: 1rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;

  & h1 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;

    & li {
      color: inherit;
      margin: inherit;
    }
  }

  @media screen and (max-width: 960px) {
    & h1 {
      font-size: 2.2rem;
    }
  }

  @media screen and (max-width: 640px) {
    & h1 {
      font-size: 1.4rem;
    }
  }
`;


export const CardsWrapper = styled.div`
  padding: 0.5rem;
  border: thick double ${colors.color14};
  border-bottom: none;
  ${animeBackground({
    color: colors.color14,
    border: "20px",
    deg: "-7deg",
    percent1: "5%",
    percent2: "25%",
  })}
`;

export const ProjectHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-size: 1.5rem;

  & h4 {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const ProjectTitle = styled.h5`
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const ProjectDescription = styled.ul`
  font-size: 1rem;
  padding: 2rem;
  padding-top: 1rem;

  & li {
    /* color: inherit; */
    list-style-position: outside;
    list-style-type: disc;
    cursor: default;
    margin: inherit;
  }
  
  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 0.6rem;
  }
`;

export const ProjectLanguages = styled.div`
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    text-align: right;
    justify-content: right;

    & span {
      color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
    }

    & p {
      padding-right: 0.4rem;
    };

    @media screen and (max-width: 640px) {
      font-size: 0.6rem;
    }
`;

export const ProjectDocuments = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

  li {
    margin: 2rem;

    a {
      ${animeBackground({
        color: colors.color14,
        border: "10px",
        deg: "-10deg",
        percent1: "5%",
        percent2: "70%",
      })}
      color: ${({ isDarkMode }) => (isDarkMode ? colors.white1 : colors.black1)};

      padding: 0.8rem 0.8rem;
      box-shadow: 0 0 2px ${colors.color7}, 1px -1px 3px ${colors.color8},
        -2px -2px 4px ${colors.color6}, 2px -4px 5px ${colors.color4},
        -2px -6px 6px ${colors.color9}, 0 -8px 7px ${colors.color10},
        1px -9px 8px ${colors.color11};

      transition: 0.2s ease;

      &:hover {
        letter-spacing: 1px;
      }
    }
  }

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    font-size: 0.5rem;
  }

  @media screen and (max-width: 370px) {
    font-size: 0.4rem;
  }
`;

