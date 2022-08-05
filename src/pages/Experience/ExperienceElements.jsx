import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

export const CardsWrapper = styled.div`
  margin: 1rem;
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
  font-size: 1.8rem;

  & h4 {
    color: ${colors.color6};
  }

  & span {
    color: ${colors.black1};
  }

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const ProjectTitle = styled.h5`
  font-size: 1.4rem;

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;

export const ProjectDescription = styled.ul`
  font-size: 1rem;
  padding-bottom: 1rem;

  & li {
    list-style-position: inside;
    list-style-type: circle;
  }
  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
  }
`;

export const ProjectLanguages = styled.div`
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row
    align-items: right;
    text-align: right;
    justify-content: right;

    & span {
        color: ${colors.color6};
        padding-right: 0.4rem;
    }

    @media screen and (max-width: 960px) {
        font-size: 0.9rem;
    }
`;

export const ProjectDocuments = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  li {
    margin: 2rem;

    a {
      ${animeBackground({
        color: colors.special,
        border: "10px",
        deg: "115deg",
        percent1: "50%",
        percent2: "100%",
      })}

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
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ExperienceWrapper = styled.div`
  margin: 5rem;

  & h1 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
  }
`;
