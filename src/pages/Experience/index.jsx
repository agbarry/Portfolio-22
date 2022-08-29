import ExperienceCard from '../../components/ExperienceCard'
import { global } from './Data'
import { ExperienceWrapper, Project } from './ExperienceElements'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { motion } from 'framer-motion';



function Experience() {
  const { theme } = useContext(ThemeContext)

  const [isOpenEL, setIsOpenEL] = useState(true)
  const [isOpenPE, setIsOpenPE] = useState(false)
  const [isOpenOE, setIsOpenOE] = useState(false)

  const [isUnfold, setIsUnfold] = useState(false)

  const handleClickEL = () => {
    setIsOpenEL(!isOpenEL)
    setIsUnfold(false)
    if (!isOpenEL && isOpenOE && isOpenPE) {
      setIsUnfold(true)
    }
  }

  const handleClickPE = () => {
    setIsOpenPE(!isOpenPE)
    setIsUnfold(false)
    if (isOpenOE && isOpenEL && !isOpenPE) {
      setIsUnfold(true)
    }
  }

  const handleClickOE = () => {
    setIsOpenOE(!isOpenOE)
    setIsUnfold(false)
    if (isOpenEL && isOpenPE && !isOpenOE) {
      setIsUnfold(true)
    }
  }

  const handleClickUnfold = () => {
    setIsUnfold(!isUnfold)
    setIsOpenEL(!isUnfold)
    setIsOpenOE(!isUnfold)
    setIsOpenPE(!isUnfold)
  }

  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <ExperienceWrapper isDarkMode={theme === 'dark'}>
        <li onClick={handleClickUnfold}>
          {isUnfold ? (
            <span>
              <IoIosArrowDown /> Tout replier
            </span>
          ) : (
            <span>
              <IoIosArrowForward /> Tout déplier
            </span>
          )}
        </li>

        {global.map((gl) => (
          <Project key={`${gl.id}`}>
            <h1>
              <li
                onClick={
                  gl.isOpen === 'PE'
                    ? handleClickPE
                    : gl.isOpen === 'EL'
                    ? handleClickEL
                    : handleClickOE
                }
              >
                {gl.isOpen === 'PE' ? (
                  isOpenPE ? (
                    <IoIosArrowDown title='replier'/>
                  ) : (
                    <IoIosArrowForward title='déplier' />
                  )
                ) : gl.isOpen === 'EL' ? (
                  isOpenEL ? (
                    <IoIosArrowDown title='replier' />
                  ) : (
                    <IoIosArrowForward title='déplier' />
                  )
                ) : isOpenOE ? (
                  <IoIosArrowDown title='replier' />
                ) : (
                  <IoIosArrowForward title='déplier' />
                )}
                {gl.name}
              </li>
            </h1>

            {(gl.isOpen === 'PE'
              ? isOpenPE
              : gl.isOpen === 'EL'
              ? isOpenEL
              : isOpenOE) &&
              gl.content.map((experience) => (
                <ExperienceCard
                  key={`${experience.id}`}
                  projectName={experience.projectName}
                  entrepriseName={experience.entrepriseName}
                  projectTitle={experience.projectTitle}
                  description={experience.description}
                  langages={experience.langages}
                  documents={experience.documents}
                  date={experience.date}
                />
              ))}
          </Project>
        ))}
      </ExperienceWrapper>
    </motion.div>
  )
}

export default Experience
