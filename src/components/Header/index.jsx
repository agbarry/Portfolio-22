import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'
import { LogoStyled, NavContainer, NightModeButton } from './HeaderElements'
import { StyledLink } from '../../utils/style/Global'
import {
  FaUserGraduate,
  FaAward,
  FaBriefcase,
  FaAddressCard,
  FaHome,
} from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <NavContainer $isDarkMode={theme === 'dark'}>
      <LogoStyled to="/" title="Accueil" $isDarkMode={theme === 'dark'}>
        <span>Agb22</span>
        <FaHome className="react-icons" />
      </LogoStyled>

      <NightModeButton
        onClick={() => toggleTheme()}
        title={'Passez au mode ' + (theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>

      <nav>
        <StyledLink
          $isDarkMode={theme === 'dark'}
          className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          to="/formation"
          title="Formation"
        >
          <FaUserGraduate className="react-icons" /> <span>Formation</span>
        </StyledLink>

        <StyledLink
          $isDarkMode={theme === 'dark'}
          className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          to="/competences" 
          title="Compétences"
        >
          <FaAward className="react-icons" /> <span>Compétences</span>
        </StyledLink>

        <StyledLink
          $isDarkMode={theme === 'dark'}
          className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          to="/experiences" 
          title="Expériences"
        >
          <FaBriefcase className="react-icons" /> <span>Expériences</span>
        </StyledLink>

        <StyledLink
          $isDarkMode={theme === 'dark'}
          className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          to="/contact" 
          title="Contact"
        >
          <FaAddressCard className="react-icons" /> <span>Contact</span>
        </StyledLink>

        <StyledLink
          $isDarkMode={theme === 'dark'}
          className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          to="/a_propos" 
          title="À propos"
        >
          <FcAbout className="react-icons" /> <span>À propos</span>
        </StyledLink>
      </nav>
    </NavContainer>
  )
}

export default Header
