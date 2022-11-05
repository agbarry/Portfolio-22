import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { motion } from 'framer-motion';
import {
  AboutWrapper,
  AboutContainer,
  BottomContent,
  BottomStyled,
  Detail,
  TopStyled
} from './AboutElements'
import { aboutInformation, interest, languages, personalQuality } from './Data'
import profil from '../../assets/images/portrait1.jpg'

function About() {
  const { theme } = useContext(ThemeContext)

  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
    <AboutWrapper>
      <AboutContainer>
         <TopStyled>
          <p>
            Je suis <span> Aguibou Barry</span>,
            jeune d'origine guinéen résidant en france précisement à Bordeaux depuis
            près de 4ans dans le cadre de mes études au sein de l'<span>université de Bordeaux. </span>
          </p>
          
          <ul>
            {aboutInformation.map((about) => (
              <Detail key={`${about.id}`}>
                <span>{about.date} : </span>{about.description}.
              </Detail>
            ))}
          </ul>
        </TopStyled>

        <BottomStyled>
          {languages.map((language) => (
            <BottomContent key={`${language.id}`} isDarkMode={theme === 'dark'}>
              <h5>{language.title}</h5>

              {language.content.map((lContent) => (
                <ul key={`${lContent.id}`}>
                  <Detail>
                    {lContent.name} : {lContent.level}
                  </Detail>
                </ul>
              ))}
            </BottomContent>
          ))}

          {personalQuality.map((quality) => (
            <BottomContent key={`${quality.id}`} isDarkMode={theme === 'dark'}>
              <h5>{quality.title}</h5>

              {quality.content.map((qContent) => (
                <ul key={`${qContent.id}`}>
                  <Detail>{qContent.name}</Detail>
                </ul>
              ))}
            </BottomContent>
          ))}

          {interest.map((interest) => (
            <BottomContent key={`${interest.id}`} isDarkMode={theme === 'dark'}>
              <h5>{interest.title}</h5>

              {interest.content.map((iContent) => (
                <ul key={`${iContent.id}`}>
                  <Detail>
                    {iContent.title}
                  </Detail>
                </ul>
              ))}
            </BottomContent>
          ))}
        </BottomStyled> 
      </AboutContainer>

      <div>
        <img src={profil} alt="profil" />
      </div>
    </AboutWrapper>
    </motion.div>
  )
}

export default About
