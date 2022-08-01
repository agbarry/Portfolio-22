import styled from 'styled-components';
import colors from '../../utils/style/colors';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
    font-size: 1.5rem;
    margin: 5rem;

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
          génie logiciel à l'université de Bordeaux.
        </DetailContent>

        <DetailContent>
          <DateStyled>2019-2020:</DateStyled> Diplôme de licence en
          informatique à la prestigieuse université de Bordeaux.
        </DetailContent>

        <DetailContent>
          <DateStyled>2016-2017:</DateStyled> Diplôme de
          licence en Miage à la plus lionne des universités de la capitale(
          Université Kofi Annan de Guinée).
        </DetailContent>

        <DetailContent>
          <DateStyled>2013-2014:</DateStyled> Diplôme du baccalauréat au groupe scolaire Victor Hugo de conakry.
        </DetailContent>
      </ul>
    </AboutContainer>
  );
}

export default About;
