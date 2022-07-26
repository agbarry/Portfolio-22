import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/style/Global";

/* Mise en forme */
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {

  return (
    <NavContainer>
      <Link to="/"> <span>Agb22</span> </Link>

      <nav className="navigation">
        <ul className="navigationList">
          <li className="education">
            <StyledLink to="/formation"> Formation </StyledLink>
          </li>

          <li className="knowledge">
            <StyledLink to="/competences"> Compétences </StyledLink>
          </li>

          <li className="experience">
            <StyledLink to="/experiences" $isFullLink> Expériences </StyledLink>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
}

export default Header;
