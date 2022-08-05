import ProgressBar from "../../components/KnowledgeCard/ProgressBar";
import { knowledgesList, others, othersKnowledges, toolsList } from "./Data";
import {
  KnowledgeContent,
  KnowledgeWrapper,
  OthersStyled,
  OthersWrapper,
  YearsStyled,
} from "./KnowledgeElements";


function Knowledge() {
  return (
    <KnowledgeWrapper>
      <h2>Langages & frameworks</h2>
      <KnowledgeContent>
        <YearsStyled>
          <h3>Années d'expériences</h3>

          <div>
            <span> 1 an </span>
            <span> 3 ans </span>
            <span> 5 ans </span>
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

      <OthersWrapper>
        <OthersStyled>
          <h2>Autres langages</h2>
          {others.map((tool) => (
            <li key={`${tool.id}`}>
              <i class="fa-solid fa-check"></i>
              {tool.name}
            </li>
          ))}
        </OthersStyled>

        <OthersStyled>
          <h2>IDE & Outils</h2>
          {toolsList.map((tool) => (
            <li key={`${tool.id}`}>
              <i class="fa-solid fa-star"></i>
              {tool.name}
            </li>
          ))}
        </OthersStyled>

        <OthersStyled>
          <h2>Autres</h2>
          {othersKnowledges.map((other) => (
            <li key={`${other.id}`}>
              <i class="fa-solid fa-check"></i>
              {other.name}
            </li>
          ))}
        </OthersStyled>
      </OthersWrapper>
    </KnowledgeWrapper>
  );
}

export default Knowledge;
