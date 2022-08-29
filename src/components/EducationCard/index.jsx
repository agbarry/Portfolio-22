import {
  EducationCardWrapper,
  InfosContainer,
  LogoStyled,
  YearStyled,
} from '../../pages/Education/EducationElements'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import PropTypes from 'prop-types'
import defaultLogo from '../../assets/svg/graduation.svg'

function EducationCard({ id, name, department, field, level, focus, year, logo }) 
{
  const { theme } = useContext(ThemeContext)

  const isImpair = (id % 2) === 1 ? true : false

  return (
    <EducationCardWrapper impair={isImpair}>
      <YearStyled isDarkMode={theme === 'dark'}>
        <ul> <li> {year} </li> </ul>

        {year === '2022-2023' ? <p>en cours</p> : null}
      </YearStyled>

      <InfosContainer isDarkMode={theme === 'dark'}>
        <h2> {name} </h2>

        <h5> {department} </h5>

        {<LogoStyled src={logo} alt="logo univesité" />}

        <h5> {level} {field} </h5>

        {focus && <h6> [{focus}] </h6>}
      </InfosContainer>
    </EducationCardWrapper>
  )
}

/* Pour la gestion du typage des données */
EducationCard.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
}

/* Utilisation des valeurs par défaut pour le composant */
EducationCard.defaultProps = {
  name: '',
  department: '',
  field: '',
  level: '',
  focus: '',
  year: '',
  logo: defaultLogo
}

export default EducationCard
