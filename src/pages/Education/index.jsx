import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import EducationCard from "../../components/EducationCard";
import { ThemeContext } from "../../utils/context";
import { globalData } from "../../utils/data/GlobalData";
import { StyledIllustrator, StyledPresentation, Wrapper } from "../../utils/style/Global";
import { educationList } from "./Data";
import { Content, EducationWrapper, Title } from "./EducationElements";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <EducationWrapper id="educ">
        <Title isDarkMode={theme === 'dark'}>
            Ci-dessous le détail de mon parcours de formation allant du <span>baccalauréat</span> en 
            <span> sciences mathématiques</span> jusqu'au <span>master</span> en <span>génie logiciel </span> 
            qui est en cours de validation. Bon visionnage 🙂 .
        </Title>

        <Content>
          {educationList.map((education) => (
            <EducationCard
              key={`${education.id}`}
              id={education.id}
              name={education.name}
              department={education.department}
              field={education.field}
              level={education.level}
              focus={education.focus}
              year={education.year}
              logo={education.logo}
            />
          ))}
        </Content>

        <Wrapper isDarkMode={theme === 'dark'}>
          {globalData.map((data) => (
            data.name !== "Formation" &&
            <StyledPresentation key={`${data.id}`} title={data.title}>
              <Link to={data.link}>
                <h2>{data.name}</h2>
                <StyledIllustrator src={data.illustrator} alt={data.alt} />
              </Link>
            </StyledPresentation>
          ))}
        </Wrapper>
      </EducationWrapper>
    </motion.div>
  );
}

export default Education;
