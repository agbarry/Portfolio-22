import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { motion } from 'framer-motion';
import {
  AboutContainer,
  BottomContent,
  BottomStyled,
  Detail,
  TopStyled
} from './AboutElements'
import { aboutInformation, interest, languages, personalQuality } from './Data'
// import Typical from "react-typical";

function About() {
  const { theme } = useContext(ThemeContext)

  return (
    <motion.div initial={{width: 0}} animate={{width: "100vw"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
    <AboutContainer>
      <TopStyled>
        <p>
          Coucou, je suis <span> Aguibou Barry </span>
          jeune d'origine guinéen résidant en france précisement à Bordeaux depuis
          près de 4ans dans le cadre de mes études au sein de la prestigieuse
          <span> université de Bordeaux. </span>
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
        {interest.map((interest) => (
          <BottomContent key={`${interest.id}`} isDarkMode={theme === 'dark'}>
            <h2>{interest.title}</h2>

            {interest.content.map((iContent) => (
              <ul key={`${iContent.id}`}>
                <h3>{iContent.title}</h3>

                {iContent.description.map((iContentDescription) => (
                  <Detail key={`${iContentDescription.id}`}>
                    {iContentDescription.name}
                  </Detail>
                ))}
              </ul>
            ))}
          </BottomContent>
        ))}

        {languages.map((language) => (
          <BottomContent key={`${language.id}`} isDarkMode={theme === 'dark'}>
            <h2>{language.title}</h2>

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
            <h2>{quality.title}</h2>

            {quality.content.map((qContent) => (
              <ul key={`${qContent.id}`}>
                <Detail>{qContent.name}</Detail>
              </ul>
            ))}
          </BottomContent>
        ))}
      </BottomStyled>
    </AboutContainer>
    </motion.div>
  )
}

export default About
