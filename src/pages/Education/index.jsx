import { motion } from "framer-motion";
import { useContext } from "react";
import EducationCard from "../../components/EducationCard";
import { ThemeContext } from "../../utils/context";
import { educationList } from "./Data";
import { Content, EducationWrapper, Title } from "./EducationElements";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{width: window.innerWidth, transition: {duration: 0.1}}}>
      <EducationWrapper>
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
      </EducationWrapper>
    </motion.div>
  );
}

export default Education;
