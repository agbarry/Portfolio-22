import { ThemeContext } from "../../utils/context";
import { useContext } from "react";
import { LogoStyled, NavContainer, NightModeButton } from "./HeaderElements";
import { StyledLink } from "../../utils/style/Global";


function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <NavContainer>
      <LogoStyled to="/" title="Accueil">
        <span>Agb22</span>{" "}
      </LogoStyled>

      <NightModeButton
        onClick={() => toggleTheme()}
        title={"Passez en mode " + (theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </NightModeButton>

      <nav>
        <StyledLink to="/formation">
          <i class="fas fa-user-graduate" title="Formation"></i>
          Formation
        </StyledLink>

        <StyledLink to="/competences">
          <i class="fas fa-award" title="Compétences"></i>
          Compétences
        </StyledLink>

        <StyledLink to="/experiences">
          <i class="fas fa-briefcase" title="Expériences"></i>
          Expériences
        </StyledLink>

        <StyledLink to="/contact">
          <i className="fas fa-mountain" title="À propos"></i>
          Contact
        </StyledLink>

        <StyledLink to="/a_propos">
          <i className="fas fa-address-book" title="Contact"></i>À propos
        </StyledLink>
      </nav>
    </NavContainer>
  );
}

export default Header;
