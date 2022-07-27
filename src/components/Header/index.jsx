import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/style/Global";

/* Mise en forme */
const NavContainer = styled.nav`
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {

  return (
    <NavContainer>
      <Link to="/"> <span>Agb22</span> </Link>

      <nav className="content1" >
        <ul className="navigationList">
          <li className="education" style={{padding:12}}>
            <StyledLink to="/formation"> Formation </StyledLink>
          </li>

          <li className="knowledge" style={{padding:12}}>
            <StyledLink to="/competences"> Compétences </StyledLink>
          </li>

          <li className="experience" style={{padding:12}}>
            <StyledLink to="/experiences" > Expériences </StyledLink>
          </li>
        </ul>
      </nav>
    </NavContainer>
  );
}

export default Header;
