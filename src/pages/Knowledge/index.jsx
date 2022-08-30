import ProgressBar from "../../components/KnowledgeCard/ProgressBar";
import { global, knowledgesList } from "./Data";
import {
  KnowledgeContent,
  KnowledgeWrapper,
  OthersStyled,
  OthersWrapper,
  YearsStyled,
} from "./KnowledgeElements";
import { FaCheck } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { motion } from "framer-motion";
import { StyledIllustrator, StyledPresentation, Wrapper } from "../../utils/style/Global";
import { globalData } from "../../utils/data/GlobalData";
import { Link } from "react-router-dom";

function Knowledge() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <KnowledgeWrapper isDarkMode={theme === "dark"}>
        <h2>Langages & frameworks</h2>
        <KnowledgeContent>
          <YearsStyled isDarkMode={theme === "dark"}>
            <h3>Années d'expériences</h3>

            <div>
              <span> 1an </span>
              <span> 3ans </span>
              <span> 5ans </span>
            </div>
          </YearsStyled>

          <div>
            {knowledgesList.map((knowledge) => (
              <ProgressBar
                key={`${knowledge.id}`}
                name={knowledge.name}
                xp={knowledge.xp}
              />
            ))}
          </div>
        </KnowledgeContent>

        <h1>Autres compétences</h1>
        <OthersWrapper>
          {global.map((gl) => (
            <OthersStyled key={`${gl.id}`} isDarkMode={theme === "dark"}>
              <h2>{gl.name}</h2>

              {gl.content.map((competence) => (
                <li key={`${competence.id}`}>
                  <FaCheck /> {competence.name}
                </li>
              ))}
            </OthersStyled>
          ))}
        </OthersWrapper>

        <Wrapper isDarkMode={theme === 'dark'}>
          {globalData.map((data) => (
            data.name !== "Mes compétences" &&
            <StyledPresentation key={`${data.id}`} title={data.title}>
              <Link to={data.link}>
                <h2>Voir {data.name}</h2>
                <StyledIllustrator src={data.illustrator} alt={data.alt} />
              </Link>
            </StyledPresentation>
          ))}
        </Wrapper>
      </KnowledgeWrapper>
    </motion.div>
  );
}

export default Knowledge;
