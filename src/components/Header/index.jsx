import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/style/Global";
import { ThemeContext } from '../../utils/context';
import { useContext } from 'react';

/* Mise en forme */
const NavContainer = styled.nav`
  // position: fixed;
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

const LogoStyled = styled(Link)`
  font-size: 5rem;
  text-shadow: 0    0   2px ${colors.color6},
                1px -1px 3px ${colors.color7},
                -2px -2px 4px ${colors.color5},
                2px -4px 5px ${colors.color3},
                -2px -6px 6px ${colors.color8},
                0   -8px 7px ${colors.color9},
                1px -9px 8px ${colors.color10};

  span {
    color: ${colors.black1}
  }
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 2em;
    font-size: 2rem;
`

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <NavContainer className="sideBar">
      <LogoStyled to="/" className="logo"> <span>Agb22</span> </LogoStyled>

      <NightModeButton onClick={() => toggleTheme()}> 
          {theme === 'light' ? '☀️' : '🌙' }
      </NightModeButton>

      <nav >
        <StyledLink to="/formation"> 
          <i class="fas fa-user-graduate" title='Formation'></i>
          Formation 
        </StyledLink>

        <StyledLink to="/competences"> 
          <i class="fas fa-award" title='Compétences'></i>
          Compétences 
        </StyledLink>

        <StyledLink to="/experiences"> 
          <i class="fas fa-briefcase" title='Expériences'></i>
          Expériences 
        </StyledLink>

        <StyledLink to="/contact"> 
          <i className="fas fa-mountain" title='À propos'></i>
          Contact 
        </StyledLink>

        <StyledLink to="/a_propos"> 
          <i className="fas fa-address-book" title='Contact'></i>
          À propos 
        </StyledLink>
      </nav>
    </NavContainer>
  );
}

export default Header;
