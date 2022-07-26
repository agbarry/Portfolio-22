import ProgressBar from "../../components/KnowledgeCard/ProgressBar";
import styled from 'styled-components';

const knowledgesList = [
    {id: 0, name: "Java", xp:3.8},
    {id: 1, name: "C", xp:4.0},
    {id: 2, name: "C++", xp:3.0},
    {id: 3, name: "Python", xp:2.6},
    {id: 4, name: "Javascript", xp:1.0},
    {id: 5, name: "Php", xp:2.0},
    {id: 6, name: "Css", xp:2.0},
    {id: 7, name: "React", xp:0.8},
    {id: 8, name: "Django", xp:1.2},
    {id: 9, name: "Sass", xp:0.8},
    {id: 10, name: "Bootstrap", xp:2.0},
    {id: 11, name: "Css-in-Js", xp:0.6},
    {id: 12, name: "Spring Boot", xp:0.6},
    {id: 13, name: "Angular", xp:0.6}
]

/* Mise en forme */
const KnowledgeWrapper = styled.div`
    padding: 1rem;
`

function Knowledge() {
    return ( 
        <KnowledgeWrapper>
            <h3>Languages & frameworks</h3>

            <div className="years">
                <span>Années d'expérience</span>
                <span> 1 an </span>
                <span> 3 ans </span>
                <span> 5 ans </span>
            </div>

            {knowledgesList.map((knowledge) => (
                <ProgressBar
                key={`${knowledge.id}`}
                name={knowledge.name}
                xp={knowledge.xp}
                />
            ))}
        </KnowledgeWrapper>
     );
}

export default Knowledge;