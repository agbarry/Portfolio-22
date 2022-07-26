import styled from 'styled-components';
import colors from '../../utils/style/colors';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    user-select: none;
    font-size: 1.5rem;
    margin-left: 0;

    @media screen and (max-width: 960px) { 
        font-size: 1.2rem;
    }
`
const NameStyled = styled.span`
    color: ${colors.color6};
`

const DateStyled = styled.span`
    color: ${colors.color14};
`

const DetailContent = styled.li`
    list-style-position: inside;
    list-style-type: square;
    padding: 15px;
`

function About() {
  return (
    <AboutContainer className='about'>
      <div>
        Coucou, je suis <NameStyled> Aguibou Barry</NameStyled> jeune
        d'origine guinéen résidant en france précisement à Bordeaux depuis près
        de 4ans dans le cadre de mes études au sein de la prestigieuse{" "}
        <NameStyled>université de Bordeaux</NameStyled>.
      </div>

      <ul>
        <DetailContent>
          <DateStyled>2022-2023</DateStyled> Master 2 informatique, spécialisation
          génie logiciel à l'université de Bordeaux(en cours).
        </DetailContent>

        <DetailContent>
          <DateStyled>2021-2022:</DateStyled> Master 1 informatique, spécialisation
          en génie logiciel à l'université de Bordeaux.
        </DetailContent>

        <DetailContent>
          <DateStyled>2019-2020:</DateStyled> Réalisation d'un de mes rêves
          de la plus haute envergure qui est l'obtention d'une licence
          informatique dans l'une ne sert est-ce la meilleure université en
          france en loccurence la prestigieuse université de Bordeaux.
        </DetailContent>

        <DetailContent>
          <DateStyled>2016-2017:</DateStyled> Je décroche mon diplôme de
          licence en Miage à la plus lionne des universités de la capitale(
          Université Kofi Annan de Guinée).
        </DetailContent>
      </ul>
    </AboutContainer>
  );
}

export default About;
