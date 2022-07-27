import ProgressBar from "../../components/KnowledgeCard/ProgressBar";
import styled from 'styled-components';
import colors from "../../utils/style/colors";

/* Liste des compétences en langage de programmation */
const knowledgesList = [
    {id: 0, name: "Java", xp:4.2},
    {id: 1, name: "C", xp:3.8},
    {id: 2, name: "C++", xp:2.9},
    {id: 3, name: "Python", xp:2.6},
    {id: 4, name: "Javascript", xp:1.6},
    {id: 5, name: "React", xp:1.0},
    {id: 6, name: "Django", xp:1.2},
    {id: 7, name: "Spring Boot", xp:0.6},
    {id: 8, name: "Angular", xp:0.6},
    {id: 9, name: "Php", xp:2.0},
    {id: 10, name: "Css-in-Js", xp:0.6},
    {id: 11, name: "Sass", xp:0.8},
    {id: 12, name: "Bootstrap", xp:2.0},
    {id: 13, name: "Css", xp:2.2},
    {id: 14, name: "Html", xp:2.8}
]

/* Liste des IDE/outils utiles à la programmation */
const toolsList = [
    {id: 0, name: "Visual Studio Code"},
    {id: 1, name: "Eclipse"},
    {id: 2, name: "Android Studio"},
    {id: 3, name: "Github"},
    {id: 4, name: "LaTex"},
    {id: 5, name: "Trello"}
]

/* Autres compétences en développement */
const othersKnowledges = [
    {id: 0, name: "WordPress"},
    {id: 1, name: "IBM Watson"},
    {id: 2, name: "Dialogflow"},
    {id: 3, name: "Salesforce"},
    {id: 4, name: "Pack Office"}
]

/* Mise en forme */
const KnowledgeWrapper = styled.div`
    padding: 1rem;
`

const KnowledgeContent = styled.div`
    margin-left: 5rem;
    margin-right: 5rem;
`

const OthersWrapper = styled.div`
    margin: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const YearsStyled = styled.div`
    font-size: .88rem;
    display: flex;
    justify-content: space-between;
    color: ${colors.color13};
    width: 60%;

    span {
        width: 10%;

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
            text-align: right;

            &:before {
                content: '';
                background: ${colors.color13};
                position: absolute;
                height: 17rem;
                width: 1px;
                transform: translate(9px, 18px);
            }
        }

        &:nth-child(2) {
            width: 28%;
        }

        &:nth-child(3) {
            width: 31%;
        }

        &:nth-child(4) {
            width: 30%;
        }
    }
`

function Knowledge() {
    return ( 
        <KnowledgeWrapper>
            <KnowledgeContent className="content">
                <h3>Languages & frameworks</h3>

                <YearsStyled>
                    <span>Années d'expérience</span>
                    <span> 1 an </span>
                    <span> 3 ans </span>
                    <span> 5 ans </span>
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
                <ul className="content">
                    <h3>IDE & Outils</h3>
                    {toolsList.map((tool) => (
                        <li key={`${tool.id}`}> {tool.name} </li>
                    ))}
                </ul>
                
                <ul className="content">
                    <h3>Autres</h3>
                    {othersKnowledges.map((other) => (
                        <li key={`${other.id}`}> {other.name} </li>
                    ))}
                </ul>
            </OthersWrapper>
        </KnowledgeWrapper>
     );
}

export default Knowledge;