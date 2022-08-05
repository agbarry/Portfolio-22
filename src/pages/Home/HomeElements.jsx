import styled from "styled-components";
import colors from "../../utils/style/colors";
import { animeBackground } from "../../utils/style/Global";

export const HomeWrapper = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
`;

export const HomeWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const HomeWrapperBottom = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionStyled = styled.div`
  font-size: 1.5rem;

  & span {
    color: ${({ isDarkMode }) => (isDarkMode ? colors.color5 : colors.color6)};
  }

  // & p {
  //   padding-top: 2rem;
  //   text-align: center;

  //   & q {
  //     font-size: 1rem;
  //     justify-content: center;
  //   }
  // }

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;

    & p {
      & q {
        font-size: 0.6rem;
      }
    }
  }
`;

export const DownloadCV = styled.div`
  padding: 5rem;
  padding-bottom: 1rem;

  a {
    ${animeBackground({
      color: colors.special,
      border: "10px",
      deg: "115deg",
      percent1: "40%",
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
`;

export const StyledIllustrator = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  margin-top: 2rem;
`
